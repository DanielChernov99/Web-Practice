document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const userInput = document.getElementById('userInput');
    const passInput = document.getElementById('passInput');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents page reload

        const username = userInput.value.trim();
        const password = passInput.value.trim();

        // Check if username or password are empty
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        // Check if the username and password are correct using UserManager
        if (UserManager.checkPassword(username, password)) {
            localStorage.setItem('loggedInUser', username); // Store the logged-in user in localStorage
            window.location.href = 'profile.html'; // Redirect to profile page after successful login
        } else {
            alert("Invalid username or password.");
        }
    });
});