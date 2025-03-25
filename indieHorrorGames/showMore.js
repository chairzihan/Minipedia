function showMore(sectionId) {
    const sections = document.getElementsByClassName('infoSection');
    console.log(`Attempting to show section with id: ${sectionId}`);
    const selectedSection = document.getElementById(sectionId); // Correct variable name
    if (selectedSection) { // Use the correct variable here
        console.log(`Found section with id: ${sectionId}`);
        selectedSection.style.display = 'block';
        setTimeout(() => {
            selectedSection.style.opacity = '1';
        }, 10);
    } else {
        console.error(`Element with id "${sectionId}" not found.`);
    }
}