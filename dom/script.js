// STEP 2: Access DOM Objects
const eventList = document.getElementById("eventList");
const selectedEventText = document.getElementById("selectedEvent");
const registerBtn = document.getElementById("registerBtn");
const unregisterBtn = document.getElementById("unregisterBtn");
const addEventBtn = document.getElementById("addEventBtn");
const newEventName = document.getElementById("newEventName");
const message = document.getElementById("message");

// STEP 3: Event Data (JavaScript Object)
let events = [
  { id: 1, name: "Devops Fundamental Workshop", registered: false },
  { id: 2, name: "Data Science Hands-on Lab", registered: false },
  { id: 3, name: "Coding Hackathon", registered: false },
  { id: 4, name: "Project Expo 2026", registered: false },
];

let selectedEventId = null;

// STEP 4: Display Events Dynamically
function displayEvents() {
  eventList.innerHTML = "";

  events.forEach(event => {
    const li = document.createElement("li");
    li.textContent = event.name;
    li.onclick = () => selectEvent(event.id);
    eventList.appendChild(li);
  });
}

displayEvents();

// STEP 5: Handle Event Selection
function selectEvent(id) {
  selectedEventId = id;
  const event = events.find(e => e.id === id);
  selectedEventText.textContent = "Selected Event: " + event.name;
  message.textContent = "";
}

// STEP 6: Register for Event
registerBtn.onclick = () => {
  if (!selectedEventId) {
    message.textContent = "Please select an event first!";
    return;
  }

  const event = events.find(e => e.id === selectedEventId);
  event.registered = true;
  message.textContent = "Registered for " + event.name;
};

// STEP 7: Unregister from Event
unregisterBtn.onclick = () => {
  if (!selectedEventId) {
    message.textContent = "Please select an event first!";
    return;
  }

  const event = events.find(e => e.id === selectedEventId);
  event.registered = false;
  message.textContent = "Unregistered from " + event.name;
};

// STEP 8: Add New Event Dynamically
addEventBtn.onclick = () => {
  const name = newEventName.value.trim();

  // STEP 9: Prevent Errors (Validation)
  if (name === "") {
    message.textContent = "Event name cannot be empty!";
    return;
  }

  const newEvent = {
    id: events.length + 1,
    name: name,
    registered: false
  };

  events.push(newEvent);
  displayEvents();
  newEventName.value = "";
  message.textContent = "New event added successfully!";
};