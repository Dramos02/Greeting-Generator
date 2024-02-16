function generateGreeting() {
    var name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        document.getElementById("output").innerText = "Please enter your name.";
    } else {
        var greeting = "Hello, " + name + " Welcome to Dramos website!";
        document.getElementById("output").innerText = greeting;
    }
}