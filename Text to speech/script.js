// Function to convert text into speech
function convertToSpeech() {

    // Get text from textarea
    let text = document.getElementById("textInput").value;

    // Check if user entered text
    if (text.trim() === "") {
        alert("Please enter some text");
        return;
    }

    // Creating a speech object
    let speech = new SpeechSynthesisUtterance();

    // text to be spoken
    speech.text = text;
     // Pace speed
    // 1 = normal, <1 = slow, >1 = fast
    speech.rate = 1;      

    // Volume control
    // Range: 0 (mute) to 1 (full volume)
    speech.volume = 1;    

    // Speak the text
    window.speechSynthesis.speak(speech);
}