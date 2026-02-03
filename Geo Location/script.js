//defining a function
function getLocation() {
    //gettting the output elemnet to display the result
    //var ,let or const can be used here
    const output = document.getElementById("output");
    //we use var when we want to declare a variable with function scope
    //we use let when we want to declare a variable with block scope
    //we use const when we want to declare a variable that wont be reassigned

    //checking if geolocatio is supported by browser
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        output.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//func to display position
function showPosition(position) {
    //display latitude and longitude with help of inner html
    document.getElementById("output").innerHTML =
        "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

//funct to handle error
function showError(error) {
    document.getElementById("output").innerHTML =
        "Permission denied or location unavailable.";
}