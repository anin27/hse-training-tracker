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
}