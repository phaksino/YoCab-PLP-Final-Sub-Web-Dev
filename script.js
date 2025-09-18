// ====================
// YoCab Website JS
// ====================

// 1. Mobile Menu Toggle
const menuToggle = document.createElement("button");
menuToggle.classList.add("menu-toggle");
menuToggle.textContent = "☰";
document.querySelector("header").prepend(menuToggle);

const nav = document.querySelector("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// 2. Smooth Scrolling for Nav Links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // offset for header
        behavior: "smooth"
      });
    }
    // Close mobile menu after click
    nav.classList.remove("active");
  });
});

// 3. Form Validation
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  let messages = [];

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const pickup = document.getElementById("pickup").value.trim();
  const destination = document.getElementById("destination").value.trim();

  if (name === "") {
    messages.push("Name is required.");
    valid = false;
  }

  if (!/^[0-9]{8,15}$/.test(phone)) {
    messages.push("Enter a valid phone number (8–15 digits).");
    valid = false;
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    messages.push("Enter a valid email address.");
    valid = false;
  }

  if (pickup === "" || destination === "") {
    messages.push("Pickup and destination are required.");
    valid = false;
  }

  if (!valid) {
    alert(messages.join("\n"));
  } else {
    alert("✅ Ride request submitted successfully! We’ll contact you soon.");
    form.reset();
  }
});

// 4. Button Click Animation
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.add("clicked");
    setTimeout(() => this.classList.remove("clicked"), 200);
  });
});
