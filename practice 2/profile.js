document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logged in (You can check for a session or stored username)
    const storedUser = localStorage.getItem('loggedInUser');
    
    if (!storedUser) {
        // If no user is logged in, redirect to login page
        alert('You must be logged in to view this page');
        window.location.href = 'login.html';
        return;
    }

    // Get user data from UserManager (assuming user data is stored in localStorage)
    const username = storedUser;
    const userData = UserManager.getUserData(username);

    if (userData) {
        // Populate the profile with user data
        document.getElementById('userName').textContent = `Username: ${userData.username}`;
        document.getElementById('email').textContent = `Email: ${userData.email}`;
        document.getElementById('pass').textContent = `Password: ${userData.password}`;
    }

    // Handle the "Update Details" button click
    document.getElementById('updateButton').addEventListener('click', () => {
        // Redirect to an update profile page (profile-update.html for example)
        window.location.href = 'profile-update.html';
    });

    // Handle the "Logout" button click
    document.getElementById('logoutButton').addEventListener('click', () => {
        // Clear the logged-in user from localStorage
        localStorage.removeItem('loggedInUser');
        alert('You have been logged out.');
        window.location.href = 'login.html'; // Redirect to login page
    });
});
