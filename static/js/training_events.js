let events = [];

loadEvents();

async function loadEvents() {
    let response = await fetch("/events");
    events = await response.json();

    showEvents();
}

async function saveEvent() {
    let eventId = document.getElementById("eventId").value;
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let location = document.getElementById("location").value;
    let capacity = document.getElementById("capacity").value;

    if (eventId === "") {
        return;
    }

    let event = {
        id: eventId,
        title: title,
        category: category,
        date: date,
        location: location,
        capacity: capacity
    };

    await fetch("/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });

    alert("Event saved successfully!");

    clearForm();
    loadEvents();
}

function showEvents() {
    let tableBody = document.getElementById("eventTableBody");
    tableBody.innerHTML = "";

    for (let i = 0; i < events.length; i++) {
        let event = events[i];

        let row = "<tr>";
        row += "<td>" + event.id + "</td>";
        row += "<td>" + event.title + "</td>";
        row += "<td>" + event.category + "</td>";
        row += "<td>" + event.date + "</td>";
        row += "<td>" + event.location + "</td>";
        row += "<td>" + event.capacity + "</td>";
        row += "<td class='action-buttons'>";
        row += "<button onclick=\"editEvent('" + event.id + "')\">Edit</button>";
        row += "<button onclick=\"deleteEvent('" + event.id + "')\">Delete</button>";
        row += "</td>";
        row += "</tr>";

        tableBody.innerHTML += row;
    }
}

function editEvent(id) {
    for (let i = 0; i < events.length; i++) {
        if (events[i].id === id) {
            let event = events[i];

            document.getElementById("eventId").value = event.id;
            document.getElementById("title").value = event.title;
            document.getElementById("category").value = event.category;
            document.getElementById("date").value = event.date;
            document.getElementById("location").value = event.location;
            document.getElementById("capacity").value = event.capacity;

            break;
        }
    }
}

async function deleteEvent(id) {
    await fetch("/events/" + id, {
        method: "DELETE"
    });

    loadEvents();
}

function clearForm() {
    document.getElementById("eventId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
    document.getElementById("location").value = "";
    document.getElementById("capacity").value = "";
}