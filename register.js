document.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("fixitUserEmail");
    if (savedEmail) {
        emailInput.value = savedEmail;
    }
});







// ================================
// MENU TOGGLE
// ================================
const menuToggle = document.getElementById("menuToggle");
const menuActions = document.querySelector(".menu-actions");

if (menuToggle && menuActions) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuActions.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}

// ================================
// REPORT BUTTON
// ================================
const reportBtn = document.querySelector(".report-btn");
if (reportBtn) {
  reportBtn.addEventListener("click", () => {
    alert("Redirecting you to the report form...");
    reportBtn.blur();
  });
}



// Select the cancel button
const cancelBtn = document.querySelector(".cancel-btn");

// Redirect to login.html when clicked
cancelBtn.addEventListener("click", () => {
    window.location.href = "login.html";
});


const registerForm = document.querySelector(".register-form");
const emailInput = document.getElementById("email");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual form submission

    // Save email to localStorage
    localStorage.setItem("fixitUserEmail", emailInput.value);

    // Optionally, show a success message
    alert("Registration successful! Your email has been saved locally.");

    // Redirect to login page
    window.location.href = "login.html";
});