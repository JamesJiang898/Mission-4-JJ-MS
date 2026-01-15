const toggle = document.querySelector('.password-toggle');
const passwordInput = document.querySelector('#password');

toggle.addEventListener('click', () => {
  const icon = toggle.querySelector('i');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  }
});


const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevents default form submission
  // Add validation here if needed

  // Redirect to welcome page
  window.location.href = 'Welcome.html';
});

// Select the guest button
const guestButton = document.querySelector(".guest-button");

// Add click event
if (guestButton) {
    guestButton.addEventListener("click", () => {
        // Redirect to formpage.html
        window.location.href = "formpage.html";
    });
}


  