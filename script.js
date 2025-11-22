
// -------------------------------
// FreshStep Lab - Site Scripts
// -------------------------------

// Confirm JS is working
console.log("FreshStep site loaded successfully.");

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Example: Auto popup message after 10 seconds
// setTimeout(() => {
//   alert("Have dirty sneakers? Click 'Book Now' to schedule a cleaning!");
// }, 10000);

// Example: Click-to-copy phone number
// document.getElementById("copyPhone").addEventListener("click", () => {
//   navigator.clipboard.writeText("555-123-4567");
//   alert("Phone number copied!");
// });

// Placeholder for future chatbot integration
// function openChatbot() {
//   document.getElementById("chatbot").style.display = "block";
// }

