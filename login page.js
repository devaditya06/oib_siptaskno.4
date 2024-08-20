document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Redirect to another page or do something on success
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});

document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const toggleText = this.textContent;

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Show';
    }
});

// Placeholder for social login functionality
document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Social login is not implemented yet.');
    });
});
