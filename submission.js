// Get report ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const reportId = urlParams.get('reportId');

    // Display it if it exists
    if (reportId) {
        document.getElementById('reportIdDisplay').textContent = reportId;
    } else {
        document.getElementById('reportIdDisplay').textContent = 'Not available';
    }