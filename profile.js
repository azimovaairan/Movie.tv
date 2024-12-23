function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Name validation
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Message validation
    if (message.trim() === "") {
        alert("Please enter a message.");
        return false;
    }

    // If all fields are valid, show a success message
    alert("Thank you for your message. We will get back to you soon!");
    return true;
}

// Theme toggle
const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggleButton.textContent = isDarkMode ? "🌞" : "🌙";
});

