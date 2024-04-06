// Function to perform login action
function loginUser(username, password) {
  // Check if username and password are provided
  if (!username || !password) {
    alert('Please provide both username and password.');
    return;
  }

  // Check if login credentials are valid (this is just for demonstration)
  const isValidCredentials = true; // You should implement your own logic here, like checking against a database
  
  // If credentials are valid, redirect to home page
  if (isValidCredentials) {
  
    // Redirect to home page
    window.location.href = 'index.html'; // Replace 'home.html' with the actual URL of your home page
  } else {
    // If credentials are invalid, display error message
    alert('Invalid username or password. Please try again.');
  }
}

// Event listener for login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  loginUser(username, password);
});


