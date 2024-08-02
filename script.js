// Function to show/hide pages
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  selectedPage.classList.add("active");
}

// Form submission handling
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Normally, you would perform form validation here
  // For simplicity, we'll just log the values for now
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Optionally, you could clear the form fields here
  // contactForm.reset();
});
