let registrations = [];

let savedRegistrations = localStorage.getItem("registrations");

if (savedRegistrations) {
    registrations = JSON.parse(savedRegistrations);
}

loadTrainingEvents();
showRegistrations();

function loadTrainingEvents() {
    let dropdown = document.getElementById("trainingEvent");
    dropdown.innerHTML = '<option value="">Select Training Event</option>';

    let savedEvents = localStorage.getItem("events");
    let events = [];

    if (savedEvents) {
        events = JSON.parse(savedEvents);
    }

    for (let i = 0; i < events.length; i++) {
        let option = "<option value='" + events[i].title + "'>" + events[i].title + "</option>";
        dropdown.innerHTML += option;
    }
}

function saveRegistration() {
    let name = document.getElementById("employeeName").value;
    let empId = document.getElementById("employeeId").value;
    let dept = document.getElementById("department").value;
    let event = document.getElementById("trainingEvent").value;
    let status = document.getElementById("status").value;

    if (name === "" && empId === "" && dept === "" && event === "" && status === "") {
        return;
    }

    let newRegistration = {
        employeeName: name,
        employeeId: empId,
        department: dept,
        trainingEvent: event,
        status: status
    };

    registrations.push(newRegistration);
    localStorage.setItem("registrations", JSON.stringify(registrations));

    showRegistrations();
    clearRegistrationForm();
}

function showRegistrations() {
    let table = document.getElementById("regTableBody");
    table.innerHTML = "";

    for (let i = 0; i < registrations.length; i++) {
        let r = registrations[i];

        let row = "<tr>";
        row += "<td>" + r.employeeName + "</td>";
        row += "<td>" + r.employeeId + "</td>";
        row += "<td>" + r.department + "</td>";
        row += "<td>" + r.trainingEvent + "</td>";
        row += "<td>" + r.status + "</td>";
        row += "<td><button onclick='removeRegistration(" + i + ")'>Remove</button></td>";
        row += "</tr>";

        table.innerHTML += row;
    }
}

function removeRegistration(index) {
    if (!confirm("Are you sure you want to remove this registration?")) {
        return;
    }

    registrations.splice(index, 1);
    localStorage.setItem("registrations", JSON.stringify(registrations));

    showRegistrations();
    alert("Registration removed successfully!");
}

function clearRegistrationForm() {
    document.getElementById("employeeName").value = "";
    document.getElementById("employeeId").value = "";
    document.getElementById("department").value = "";
    document.getElementById("trainingEvent").value = "";
    document.getElementById("status").value = "Pending";
}