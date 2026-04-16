# Petrofac HSE Tracker

Petrofac HSE Tracker is a web application for managing training events and employee registrations.

The system allows users to:

- create, update, view, and delete training events
- register employees for training events
- view all registrations
- delete registrations
- store data in an SQLite database

This project was built as a simple training management system using Flask, SQLite, HTML, CSS, and JavaScript.

## Project Purpose

The purpose of this project is to help manage Health, Safety, and Environment training activities in an easy and organized way.

Instead of storing event details manually, the application gives a simple web system where a user can:

- add training events with an ID, title, category, date, location, and capacity
- employee can register for a the training event
- track existing events and employee registrations in table format

## Main Features

- Training event management
- Employee registration management
- SQLite database storage
- Flask backend with API routes
- Separate pages for events and registrations
- Input validation for missing fields
- Event deletion support
- Registration saving support
- Training event ID ordering on the events page
- Automated tests using unittest

## Technologies Used

- Python
- Flask
- SQLite
- HTML
- CSS
- JavaScript

## Project Structure

├── app.py
├── hse_tracker.db
├── README.md
├── requirements.txt
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── registrations.js
│       └── training_events.js
├── templates/
│   ├── registrations.html
│   └── training_events.html
└── tests/
    └── test_app.py

## Live Demo

The application is deployed and can be accessed here:
http://hse-tracker-new-env.eba-cchpksgt.eu-west-1.elasticbeanstalk.com/