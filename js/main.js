// Main JavaScript for GitHub Pages DevOps Demo

document.addEventListener('DOMContentLoaded', () => {
    // Set the current year in the footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = `© ${new Date().getFullYear()}`;
    }

    // Set the current date as the deploy date
    const deployDateElement = document.getElementById('deploy-date');
    if (deployDateElement) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        deployDateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }

    // Log a message to the console
    console.log('GitHub Pages DevOps Demo loaded successfully!');
});
