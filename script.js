function showGreeting() {
  const name = document.getElementById("nameInput").value.trim();
  const message = name
    ? `Hello, ${name}! Welcome to the site.`
    : "Hello, guest! Please enter your name for a personalized greeting.";

  document.getElementById("greetingMessage").innerText = message;
}
