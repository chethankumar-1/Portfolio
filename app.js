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

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".zoom-in, .fade-in");

  function onScrollAnimation() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScrollAnimation);
  onScrollAnimation(); // Trigger on load
});
AOS.init({
  duration: 1000, // Duration of animation in ms
  once: true, // Whether animation should happen only once or repeat
  easing: 'ease-in-out', // Easing function for smooth animation
});