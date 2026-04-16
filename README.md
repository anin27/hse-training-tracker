# Petrofac HSE Tracker

Petrofac HSE Tracker is a web-based information system developed to manage training events and employee registrations for Health, Safety, and Environment activities.

The application provides a simple and structured platform where users can create training events, register employees, and manage saved records through a web interface. The project was developed using Python Flask for the backend, SQLite for data storage, and HTML, CSS, and JavaScript for the frontend.

The system allows users to:
- create, update, view, and delete training events
- register employees for training events
- view all registrations
- delete registrations
- store data in an SQLite database

## Objectives

The objectives of the project are:
- to create a system for managing training events
- to allow employees to be registered for training events
- to store event and registration data in a database
- to implement CRUD operations for managing records
- to validate user input before saving data

## Main Features

### Training Events Management
- Create new training events with a unique ID, title, category, date, location, and capacity
- Edit existing training events to update any of their details
- Delete training events, which also automatically removes all associated registrations
- View all training events in a sortable table, ordered by date

### Employee Registrations
- Register employees for specific training events by capturing their name, employee ID, department, and selected event
- Assign and update attendance status: Pending, Attended, or Absent
- Delete individual registrations
- View all registrations in a table displaying full employee and event details

### General Features
- Two-page navigation: Training Events and Registrations
- Form validation on both the frontend and backend to ensure all required fields are completed
- Persistent data storage using a local SQLite database
- RESTful API backend with clear success and error responses

## Technologies Used

- **Programming Language:** Python
- **Backend Framework:** Flask
- **Database:** SQLite
- **Frontend:** HTML, CSS, JavaScript

## CRUD Operations

### Training Events
- **Create**: add a new event
- **Read**: view all events
- **Update**: edit event details
- **Delete**: remove an event

### Registrations
- **Create**: save a new registration
- **Read**: view all registrations
- **Delete**: remove a registration

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/events` | Retrieve all training events |
| POST | `/events` | Create a new training event |
| PUT | `/events/<event_id>` | Update an existing training event |
| DELETE | `/events/<event_id>` | Delete a training event and its registrations |
| GET | `/registrations` | Retrieve all registrations |
| POST | `/registrations` | Create a new registration |
| DELETE | `/registrations/<id>` | Delete a registration |

## Use of AI Assistance

AI tools were used in a limited and supportive way during the development of this project, especially when resolving technical issues that were difficult to debug manually.

The main AI tools used were:
- Claude
- ChatGPT
- Codex

AI support was used for:
- troubleshooting Flask backend errors
- identifying mismatches between database fields and application code
- improving frontend and backend consistency
- assisting with deployment issues in AWS Elastic Beanstalk
- improving the clarity of documentation

## Live Demo

The application is deployed and can be accessed here:  
[http://hse-tracker-new-env.eba-cchpksgt.eu-west-1.elasticbeanstalk.com/](http://hse-tracker-new-env.eba-cchpksgt.eu-west-1.elasticbeanstalk.com/)

## Conclusion

Petrofac HSE Tracker is a simple but complete web-based information system that demonstrates how training event and employee registration data can be managed digitally. The project combines frontend design, backend processing, database storage, and CRUD operations.

The system demonstrates the integration of Flask, SQLite, HTML, CSS, and JavaScript in building a small full-stack web application. It also shows the importance of proper validation, consistent database design, debugging, and deployment configuration.

Overall, the project provided practical experience in developing and deploying a working information system.
