document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form');
    const userInput = document.getElementById('userNameInput');
    const passInput = document.getElementById('passInput');
    const confirmPassInput = document.getElementById('confirmPassInput');
    const emailInput = document.getElementById('emailInput');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents page reload

        const username = userInput.value.trim();
        const password = passInput.value.trim();
        const confirmPassword = confirmPassInput.value.trim();
        const email = emailInput.value.trim();

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (UserManager.register(username, password, email)) {
            alert("Registration successful! You can now log in.");
            window.location.href = 'login.html'; // Redirect after registration
        } else {
            alert("Registration failed. Username already exist.");
        }
    })

});
