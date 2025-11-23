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

// Show modal
payButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();   // prevent opening link
    modal.style.display = "flex";
  });
});

// Close modal when X clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
