// Bootstrap form validation (keep your existing validation)
(function () {
    'use strict'
    var form = document.querySelector('.needs-validation')

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false)
})();

        const findMeButton = document.getElementById("find-me");
        const locationText = document.getElementById("location");

        findMeButton.addEventListener("click", () =>{
            locationText.innerHTML = "finding your location...<div class='spinner-border'></div>"
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const locationString = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11990.863553199022!2d${longatitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1767826902619!5m2!1sen!2snz`
                    locationText.innerHTML = `Latitude: ${lat}, Longitude: ${lon} <a href="https://www.google.com/maps?q=${lat},${lon}" target="_black">📌 view on maps</a>`;
                },
                ()=>{
                    locationText.innerHTML = "Unable to get your location";
                }
            );
        });