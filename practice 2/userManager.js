const UserManager = {
    /**
     * Create a new user with a username, password, and email.
     * @param {string} username - The username to create.
     * @param {string} password - The password for the user.
     * @param {string} email - The email for the user.
     * @returns {boolean} - True if user is created successfully, otherwise false.
     */
    register: function (username, password, email) {
        if (!username || !password || !email) {
            return false;
        }

        if (localStorage.getItem(username)) {
            return false;
        }

        const userData = { password, email };
        localStorage.setItem(username, JSON.stringify(userData));
        return true; // Success
    },

    /**
     * Delete a user from localStorage.
     * @param {string} username - The username to delete.
     * @returns {boolean} - True if user is deleted, otherwise false.
     */
    deleteUser: function (username) {
        if (!localStorage.getItem(username)) {
            return false;
        }

        localStorage.removeItem(username);
        return true; // Success
    },

    /**
     * Update the password of an existing user.
     * @param {string} username - The username whose password should be updated.
     * @param {string} newPassword - The new password.
     * @returns {boolean} - True if password is updated, otherwise false.
     */
    updatePassword: function (username, newPassword) {
        const storedUser = localStorage.getItem(username);
        if (!storedUser) {
            return false;
        }

        const userData = JSON.parse(storedUser);
        userData.password = newPassword;
        localStorage.setItem(username, JSON.stringify(userData));
        return true; // Success
    },

    /**
     * Update the email of an existing user.
     * @param {string} username - The username whose email should be updated.
     * @param {string} newEmail - The new email.
     * @returns {boolean} - True if email is updated, otherwise false.
     */
    updateEmail: function (username, newEmail) {
        const storedUser = localStorage.getItem(username);
        if (!storedUser) {
            return false;
        }

        const userData = JSON.parse(storedUser);
        userData.email = newEmail;
        localStorage.setItem(username, JSON.stringify(userData));
        return true; // Success
    },

    /**
     * Check if the entered password is correct for a given username.
     * @param {string} username - The username to check.
     * @param {string} password - The password to validate.
     * @returns {boolean} - Returns true if password matches, otherwise false.
     */
    checkPassword: function (username, password) {
        const storedUser = localStorage.getItem(username);
        if (!storedUser) {
            return false; // User does not exist
        }

        const userData = JSON.parse(storedUser);
        if (userData.password === password) {
            return true; // Password matches
        } else {
            return false; // Password does not match
        }
    },

    /**
     * Retrieve user data (username, password, and email).
     * @param {string} username - The username to retrieve.
     * @returns {object|null} - Returns an object { username, password, email } or null if the user doesn't exist.
     */
    getUserData: function (username) {
        const storedUser = localStorage.getItem(username);
        if (!storedUser) {
            return null; // User does not exist
        }

        const userData = JSON.parse(storedUser);
        return { username: username, password: userData.password, email: userData.email }; // Return an object with username, password, and email
    }
};
