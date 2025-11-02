// Enquiry form validation
document.addEventListener("DOMContentLoaded", function() {
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
      let valid = true;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        valid = false;
      }
      if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        valid = false;
      }
      if (message.length < 10) {
        alert("Please enter a detailed message (at least 10 characters).");
        valid = false;
      }

      if (!valid) event.preventDefault();
      else alert("Thank you! Your enquiry has been submitted.");
    });
  }

  // Contact form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      const name = document.getElementById("cname").value.trim();
      const email = document.getElementById("cemail").value.trim();
      const message = document.getElementById("cmessage").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        event.preventDefault();
      } else if (!email.includes("@")) {
        alert("Please provide a valid email address.");
        event.preventDefault();
      } else {
        alert("Message sent successfully! Thank you for contacting us.");
      }
    });
  }
});
