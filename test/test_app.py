import unittest
import tempfile
import os
import app as app_module


class HSETrackerTestCase(unittest.TestCase):
    def setUp(self):
        self.original_database = app_module.DATABASE
        self.db_fd, self.test_db_path = tempfile.mkstemp()
        app_module.DATABASE = self.test_db_path
        app_module.create_tables()
        app_module.app.config["TESTING"] = True
        self.client = app_module.app.test_client()

    def tearDown(self):
        
        app_module.DATABASE = self.original_database
        os.close(self.db_fd)
        os.unlink(self.test_db_path)

    def test_home_page_loads(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)

    def test_create_event_successfully(self):
        response = self.client.post("/events", json={
            "id": "TEST_EV001",
            "title": "Fire Safety Training",
            "category": "Fire Safety",
            "date": "2026-04-20",
            "location": "Dubai",
            "capacity": "20"
        })

        self.assertEqual(response.status_code, 200)
        self.assertIn("Event created successfully.", response.get_data(as_text=True))

    def test_create_event_with_missing_fields(self):
        response = self.client.post("/events", json={
            "id": "",
            "title": "Fire Safety Training",
            "category": "Fire Safety",
            "date": "2026-04-20",
            "location": "Dubai",
            "capacity": "20"
        })

        self.assertEqual(response.status_code, 400)

    def test_create_registration_successfully(self):
        self.client.post("/events", json={
            "id": "TEST_EV002",
            "title": "Safety Basics",
            "category": "Safety",
            "date": "2026-04-22",
            "location": "Sharjah",
            "capacity": "25"
        })

        response = self.client.post("/registrations", json={
            "employeeName": "Test Anin Thomas",
            "employeeId": "TEST_EMP001",
            "department": "Engineering",
            "trainingEvent": "TEST_EV002",
            "status": "Pending"
        })

        self.assertEqual(response.status_code, 200)
        self.assertIn("Registration created successfully.", response.get_data(as_text=True))

    def test_create_registration_for_invalid_event(self):
        response = self.client.post("/registrations", json={
            "employeeName": "Test Jordan",
            "employeeId": "TEST_EMP002",
            "department": "Engineering",
            "trainingEvent": "TEST_EV999",
            "status": "Pending"
        })

        self.assertEqual(response.status_code, 400)
        self.assertIn("Selected training event does not exist.", response.get_data(as_text=True))


if __name__ == "__main__":
    unittest.main()
