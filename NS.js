// NS.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href').substring(1); // Extract the target ID from the href attribute
        const targetElement = document.getElementById(targetId); // Get the target element by ID

        if (targetElement) { // Check if the target element exists
            let offset = 0; // Set the offset for scrolling

            // If the target is not the home section, add a small offset to scroll above the target
            if (targetId !== 'home') {
                offset = -50; // Adjust the offset as needed
            }

            window.scrollTo({ // Use smooth scrolling behavior
                top: targetElement.offsetTop + offset, // Scroll to the top position of the target element with offset
                behavior: 'smooth' // Enable smooth scrolling behavior
            });
        }
    });
});
// Handle form submission
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {

            const response = await fetch("http://localhost:5000/send-message", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            });

            const result = await response.json();

            alert(result.message);

            form.reset();

        } catch (err) {

            console.log(err);

            alert("Something went wrong.");

        }

    });

});