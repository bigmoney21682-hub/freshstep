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

// PAY BUTTON POPUP
const modal = document.getElementById("paymentModal");
const closeBtn = document.querySelector(".close");
const payButtons = document.querySelectorAll(".pay-btn");

payButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Optional: future booking popups / chatbot integration
// Example: auto alert after 10s
// setTimeout(() => {
//   alert("Luxury sneaker care! Click Book Now to schedule.");
// }, 10000);

