// Countdown Timer
const deadline = new Date("Oct 31, 2025 23:59:59").getTime();
const timerElement = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = deadline - now;

  if (distance < 0) {
    timerElement.innerHTML = "Deadline Passed!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Seats Left Widget
function updateSeatsLeft(seats) {
  document.getElementById("seats-count").innerText = seats;
}
// Temporary demo
updateSeatsLeft(100);

// Copy bank details
function copyAccount() {
  const accountDetails = `
Bank: Chase Bank UK
Account Name: Couple’s Dinner 2025
Account Number: 12345678
Sort Code: 04-29-09
  `;
  navigator.clipboard.writeText(accountDetails).then(() => {
    alert("✅ Bank account details copied to clipboard!");
  });
}

// FAQ Dropdown Toggle
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");

    // Close others
    document.querySelectorAll(".faq-item").forEach(faq => {
      if (faq !== item) faq.classList.remove("active");
    });

    // Toggle current
    item.classList.toggle("active");
  });
});

// Sidebar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const sidebar = document.getElementById("sidebar");

  function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    sidebar.classList.add("active");
    menuBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
  }

  function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    sidebar.classList.remove("active");
    closeBtn.classList.add("hidden");
    menuBtn.classList.remove("hidden");
  }

  menuBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
});
