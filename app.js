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

$(document).ready(function() {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Apply the zoom-in effect when images and skills come into view
  function handleScroll() {
    $('.zoom-element').each(function() {
      if (isElementInViewport(this)) {
        $(this).addClass('visible'); // Add the class that triggers the zoom-in effect
      }
    });
  }

  // Check on scroll and on page load
  $(window).on('scroll', handleScroll);
  handleScroll(); // Check elements on initial load (in case they are already in view)
});
$(document).ready(function() {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight && rect.bottom >= 0);
  }

  // Apply the zoom-in effect when elements come into view
  function handleScroll() {
    $('.zoom-in').each(function() {
      if (isElementInViewport(this)) {
        $(this).addClass('visible');
      }
    });
  }

  // Check on scroll and initial load
  $(window).on('scroll', handleScroll);
  handleScroll(); // Check on page load to handle initial elements in viewport
});

$(document).ready(function() {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Apply the zoom-in effect when skill elements come into view
  function handleScroll() {
    $('.skill').each(function() {
      if (isElementInViewport(this)) {
        $(this).addClass('visible'); // Trigger the zoom-in effect
      }
    });
  }

  // Check on scroll and on page load
  $(window).on('scroll', handleScroll);
  handleScroll(); // Check elements on initial load (in case they are already in view)
});

$(document).ready(function() {
  // Function to detect when an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Function to highlight the active link in the navbar
  function highlightNavLink() {
    $('section').each(function() {
      var sectionId = $(this).attr('id');
      var navLink = $('a[href="#' + sectionId + '"]');
      
      if (isElementInViewport(this)) {
        // Add the 'active' class to the link in the navbar
        navLink.closest('li').addClass('active');
      } else {
        // Remove the 'active' class if the section is not in view
        navLink.closest('li').removeClass('active');
      }
    });
  }

  // Fade-in navbar links when they come into view
  function fadeInNavLinks() {
    $('.navbar-nav .nav-item').each(function(index) {
      if (isElementInViewport(this)) {
        $(this).addClass('visible'); // Make the navbar item visible
      }
    });
  }

  // Check on scroll and on page load
  $(window).on('scroll', function() {
    highlightNavLink(); // Highlight active navbar link
    fadeInNavLinks();   // Fade-in navbar links
  });

  // Initial check for page load (in case sections are already in view)
  highlightNavLink();
  fadeInNavLinks();
});

$(document).ready(function() {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Function to add 'visible' class when section comes into view
  function handleScroll() {
    $('#about').each(function() {
      if (isElementInViewport(this)) {
        $(this).addClass('visible'); // Trigger the fade-in/slide-in animation
      }
    });
  }

  // Check on scroll and on page load
  $(window).on('scroll', handleScroll);
  handleScroll(); // Check if the section is already in view on page load
});

$(document).ready(function() {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Function to handle scroll animations for the hero section
  function handleScroll() {
    $('.hero').each(function() {
      if (isElementInViewport(this)) {
        $(this).addClass('visible'); // Trigger the zoom-in and fade-in animation
      }
    });
  }

  // Check on scroll and on page load
  $(window).on('scroll', handleScroll);
  handleScroll(); // Check if the hero section is already in view on page load
});
$(document).ready(function(){
  // Smooth scrolling for anchor links
  $("a[href^='#']").on('click', function(event) {
    event.preventDefault();

    var target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 600); // 400 ms for smooth scrolling
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skillsSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.progress-bar');

  // Function to check if the skills section is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to trigger the progress bar animation when the section is visible
  function checkScroll() {
    if (isInViewport(skillsSection)) {
      progressBars.forEach((bar) => {
        const width = bar.getAttribute('aria-valuenow') + '%';
        bar.style.width = width;  // Set width based on the aria-valuenow attribute
      });
    }
  }

  // Listen to scroll events and check if the section is in the viewport
  window.addEventListener('scroll', checkScroll);
  checkScroll();  // Check on load as well
});
// Scroll Animation Trigger
document.addEventListener("DOMContentLoaded", function() {
  const skillsSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.progress-bar');

  function checkScroll() {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionBottom = skillsSection.getBoundingClientRect().bottom;

    if (sectionTop < window.innerHeight && sectionBottom > 0) {
      progressBars.forEach((bar) => {
        const width = bar.getAttribute('aria-valuenow') + '%';
        bar.style.setProperty('--progress-width', width);
        bar.classList.add('fade-in');
      });
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on load as well
});


