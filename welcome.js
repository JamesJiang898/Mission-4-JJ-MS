document.querySelector(".report-btn").addEventListener("click", function(e) {
    e.preventDefault(); // stop immediate navigation
    // your JS code here, e.g., log click or validate something
    window.location.href = "formpage.html"; // then go to form page
});

// ================================
// VIEW REPORT MODAL
// ================================

// Get the modal container by its ID
const modal = document.getElementById("viewReportModal");

// Get the close (×) button inside the modal
const closeBtn = modal.querySelector(".close-modal");

// Get elements inside the modal where data will be displayed
const locationEl = document.getElementById("modal-location");
const dateEl = document.getElementById("modal-date");
const teamEl = document.getElementById("modal-team");

// ================================
// OPEN MODAL WHEN "View Report" IS CLICKED
// 

document.querySelectorAll(".view-report").forEach(link => {
  link.addEventListener("click", e => { // Select ALL "View Report" links
    e.preventDefault();  // Stop the link from navigating to another page

    const card = link.closest(".report-card");    // Find the closest report card related to the clicked link

    locationEl.textContent = card.dataset.location;    // Pull data from the card's data-* attributes
    dateEl.textContent = card.dataset.date;
    teamEl.textContent = card.dataset.team;

    modal.style.display = "block";     // Show the modal
    modal.setAttribute("aria-hidden", "false");   // Update accessibility attribute
  });
});

// ================================
// CLOSE MODAL WHEN CLOSE BUTTON IS CLICKED
// ====
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
});

window.addEventListener("click", e => {
  if (e.target === modal) {  // If user clicks the dark overlay (outside modal box)
    modal.style.display = "none";   // Hide the modal
    modal.setAttribute("aria-hidden", "true");     // Update accessibility attribute
  }
});
