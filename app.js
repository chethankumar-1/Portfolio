// Initialize EmailJS
emailjs.init("C1yPjJEDm-bjXXm0b"); // Replace "user_yourUserId" with your actual EmailJS user ID

// Form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gather form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  // Send the form data to EmailJS
  emailjs.send("service_ki28nwb", "template_qbataaj", formData)
    .then(function(response) {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset(); // Reset the form after successful submission
    }, function(error) {
      alert("Error sending message: " + error.text);
    });
});



