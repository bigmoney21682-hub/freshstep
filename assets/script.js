

// FreshStep Luxe - site scripts
console.log("FreshStep Luxe site loaded.");

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Optional: future booking popups / chatbot integration
// Example: auto alert after 10s
// setTimeout(() => {
//   alert("Luxury sneaker care! Click Book Now to schedule.");
// }, 10000);

