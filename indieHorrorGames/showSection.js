function showSection(sectionId) {
    const sections = document.getElementsByClassName('infoSection');

    // Hide all sections
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        sections[i].style.opacity = '0'; // Set opacity to 0
    }

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'flex'; 
        setTimeout(() => {
            selectedSection.style.opacity = '1'; 
        }, 10); 
    }
}