const reportId = localStorage.getItem('latestReportId') || 'Not available (try submitting again)';
    document.getElementById('reportIdDisplay').textContent = reportId;