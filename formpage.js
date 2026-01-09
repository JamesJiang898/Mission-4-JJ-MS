        //finding the form elemment
        const form = document.getElementById('signupForm')
        const confirmInput = form.signupConfirm
        const passwordInput = form.signupPassword
        const passwordValue = form.signupPassword.value // ""
        const confirmValue = form.signupConfirm.value // ""
        const range = document.getElementById("teamSize")
        const output = document.getElementById("teamSizeOutput")

        range.addEventListener('input', () => {
            console.log("changing range")
            output.textContent = range.value
        })

        // when the form is submitted
        form.addEventListener('submit', (e) => {
        const confirmInput = form.signupConfirm
        const passwordInput = form.signupPassword
            
            
            if (passwordValue !== confirmValue){
                confirmInput.setCustomValidity("Passwords do not match")
            } else {
                confirmInput.setCustomValidity("")
            }
            if (!form.checkValidity()){
                e.preventDefault()
                e.stopPropagation()
            }
            form.classList.add('was-validated')
        })

        confirmInput.addEventListener("input", () =>{
            console.log("changing")
            if(passwordInput.value !== confirmInput.value){
                confirmInput.setCustomValidity("Passwords do not match")
            }else {
                confirmInput.setCustomValidity("")
            }
        })

// Report ID generator function
function generateReportID() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timestamp = `${year}${month}${day}-${hours}${minutes}${seconds}`;
    
    // Generate a random 6-character alphanumeric string (uppercase)
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    return `REP-${timestamp}-${randomPart}`;
}

const reportId = localStorage.getItem('latestReportId') || 'Not available (try submitting again)';
    document.getElementById('reportIdDisplay').textContent = reportId;

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