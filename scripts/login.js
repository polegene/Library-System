// login.js

function userlogin() {
  const usernameInput = document.querySelector('input[placeholder="Username"]').value.trim();
  const passwordInput = document.querySelector('input[placeholder="Password"]').value.trim();

  // Check if user exists in userDatabase
  const userFound = userDatabase.find(user => 
    user.username === usernameInput && user.password === passwordInput
  );

  if (userFound) {
    alert("Login successful!");
    // You can redirect to another page like:
    // window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password.");
  }
}