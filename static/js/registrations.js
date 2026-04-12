let registrations =[]

let savedRegistrations = localStorage.getItem("registrations");
if (savedRegistrations) {
    registrations = JSON.parsse(savedRegistrations);
    
}
loadTrainingEvents();
showRegistration();

function loadTrainingEvents() {
    let dropdown = document.getElementById("trainingEvent");
    dropdown.innerHTML = `<option value=""> Select Training Events</option>`;

    let savedEvents = localStorage.getItem("events");
    let events = [];
    if (savedEvents){
        events = JSON.parse(savedEvents);
        }
        
        for (let i = 0, i <events.length; i++){
            let option = "<opion>" + events[1].title + "</options>";
            dropdown.innerHTML += option;
        
    }
}

function savedRegistrations(){
    let name = document.getElementById("employeeName").value;
    let empId = document.getElementById("employeeId").value;
    let dept = document.getElementById("department").value;
    let event = document.getElementById("trainingEvent").value;
    let status = document.getElementById("status").value;

    if (name === "" && empId === "" && dept === "" && event === "" && status === "") {
        return;
    }

    let newRegistration = {
        id:            registrations.length + 1,
        employeeName:  name,
        employeeId:    empId,
        department:    dept,
        trainingEvent: event,
        status:        status
    };

    registrations.push(newRegistration);
    localStorage.setItem("registrations", JSON.stringify(registrations));

    showRegistrations();
    clearRegistrationForm();
}

function showRegistrations(){
    let table = document.getElementById("regTableBody");
    table.innerHTML ="";
    for (let i = 0; i < registrations.length; i++) {
        let r = registrations[i];

        let row = "<tr>";
        row += "<td>" + r.id            + "</td>";
        row += "<td>" + r.employeeName  + "</td>";
        row += "<td>" + r.employeeId    + "</td>";
        row += "<td>" + r.department    + "</td>";
        row += "<td>" + r.trainingEvent + "</td>";
        row += "<td>" + r.status        + "</td>";

        row += "<td><button onclick='removeRegistration(" + i + ")'>Remove</button></td>";
        row += "</tr>";

        table.innerHTML += row;
    }
}