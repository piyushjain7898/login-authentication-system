const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    // Add more users as needed
];

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        messageElement.textContent = 'Login successful! Redirecting...';
        // In a real application, you would redirect to a secure page.
    } else {
        messageElement.textContent = 'Invalid username or password.';
    }
}