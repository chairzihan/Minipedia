function showMore(sectionId) {
<<<<<<< HEAD
    const sections = document.getElementsByClassName('infoSection');
    console.log(`Attempting to show section with id: ${sectionId}`);
    const selectedSection = document.getElementById(sectionId); // Correct variable name
    if (selectedSection) { // Use the correct variable here
        console.log(`Found section with id: ${sectionId}`);
        selectedSection.style.display = 'block';
        setTimeout(() => {
            selectedSection.style.opacity = '1';
        }, 10);
=======
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        // Check if the section is currently active
        const isActive = selectedSection.classList.contains('active');

        // Toggle the 'active' class
        if (isActive) {
            selectedSection.classList.remove('active');
            selectedSection.style.display = 'none'; // Hide the section
            selectedSection.style.opacity = '0'; // Set opacity to 0
            selectedSection.style.visibility = 'hidden'; // Prevent interaction
        } else {
            selectedSection.classList.add('active');
            selectedSection.style.display = 'block'; // Show the section
            selectedSection.style.visibility = 'visible'; // Allow interaction
            setTimeout(() => {
                selectedSection.style.opacity = '1'; // Smoothly fade in
            }, 10);

            // Smooth scroll to the section when activating
            selectedSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
>>>>>>> a9070cdfd6765498257e45915e33e1966e575a57
    } else {
        console.error(`Element with id "${sectionId}" not found.`);
    }
}