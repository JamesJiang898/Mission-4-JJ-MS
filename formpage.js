// Get the form
const form = document.getElementById('fixItForm');

// Prevent default submission + handle validation manually
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Always prevent default first

    // Trigger browser validation
    if (!form.checkValidity()) {
        // If invalid → show validation messages (browser does this automatically)
        form.classList.add('was-validated');
        return; // Stop here — don't redirect
    }

    // If we get here → form is valid!
    // You can add extra custom logic here if needed

    // Success → redirect
    window.location.href = "submission.html";
});

// Helper function to generate a nice-looking report ID
function generateReportId() {
    // Format: FIX-YYYYMMDD-XXXXXX (6 random digits)
    const now = new Date();
    const datePart = now.getFullYear().toString() +
                    String(now.getMonth() + 1).padStart(2, '0') +
                    String(now.getDate()).padStart(2, '0');
    
    const randomPart = Math.floor(100000 + Math.random() * 900000); // 6-digit number
    
    return `FIX-${datePart}-${randomPart}`;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    // Generate report ID
    const reportId = generateReportId();

    // Redirect with report ID in URL
    window.location.href = `submission.html?reportId=${encodeURIComponent(reportId)}`;
});

// Geolocation code (fixed typos: longitude/latitude variables)
const findMeButton = document.getElementById("find-me");
const locationText = document.getElementById("location"); // Note: you need to add <div id="location"></div> in HTML if you want text display

if (findMeButton) {
    findMeButton.addEventListener("click", () => {
        if (locationText) locationText.innerHTML = "Finding your location...<div class='spinner-border'></div>";
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;  // Fixed variable name
                const longitude = position.coords.longitude; // Fixed variable name
                
                // Update embedded map with user's location
                const mapIframe = document.getElementById("map");
                const locationString = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11990.863553199022!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1767826902619!5m2!1sen!2snz`;
                mapIframe.src = locationString;
                
                if (locationText) {
                    locationText.innerHTML = `Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)} <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">📌 View on maps</a>`;
                }
            },
            () => {
                if (locationText) locationText.innerHTML = "Unable to get your location. Please allow location access.";
            }
        );
    });
}

// Text remaining counter
const myTextArea = document.getElementById(`mytextarea`);
const remainingCharsText = document.getElementById(`my-textarea-remaining-chars`);
const max_Chars = 600;

myTextArea.addEventListener('input',() => {
    const remaining = max_Chars - myTextArea.value.length;
    // console.log(myTextArea.value.length);
    const color = remaining < max_Chars * 0.1 ? 'red' : null;

    remainingCharsText.textContent = `${remaining} characters remaining`;
    remainingCharsText.style.color = color;
})

// Drag and drop image interface
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage = `url(${imgLink})`;
    imgView.style.backgroundSize = "cover";
    imgView.textContent = "";
    imgView.style.border = 0;
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();
})
dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})