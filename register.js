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

// ================================
// VIEW REPORT MODAL
// ================================
const viewReportLinks = document.querySelectorAll(".view-report");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModalBtn = document.querySelector(".close-modal");

// Open modal and populate content
viewReportLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const reportCard = link.closest(".report-card");
    if (!reportCard) return;

    const type = reportCard.querySelector(".report-type").textContent;
    const status = reportCard.querySelector(".report-status").textContent;
    const description = reportCard.querySelector(".report-description").textContent;
    const location = reportCard.querySelector(".report-meta span:first-child").textContent;
    const date = reportCard.querySelector(".report-meta span:last-child").textContent;

    if (modal) {
      modal.querySelector("h3").textContent = type;
      modal.querySelector(".modal-status").textContent = status;
      modal.querySelector(".modal-description").textContent = description;
      modal.querySelector(".modal-location").textContent = location;
      modal.querySelector(".modal-date").textContent = date;

      modal.style.display = "flex"; // show modal
    }
  });
});

// Close modal
if (closeModalBtn && modal) {
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
