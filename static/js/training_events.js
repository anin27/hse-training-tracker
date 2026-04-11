let events = [];
let eventIdCounter = 1;

function saveEvent()
{
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let location = document.getElementById("location").value;
    let capacity = document.getElementById("capacity").value;

    if (title === ""  || category === "" || date === "" || location === "" || capacity === ""){
        return;

    }

    let event ={
        id: eventIdCounter,
        title: title,
        category: category,
        date: date,
        location: location,
        capacity: capacity

    };

    events.push(event);
    eventIdCounter = eventIdCounter + 1;

    showEvents();
    clearForm();
    
}