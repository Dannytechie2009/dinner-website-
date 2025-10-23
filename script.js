//cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Countdown Timer
const deadline = new Date("Nov 14, 2025 23:59:59").getTime();
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
updateSeatsLeft(200);

// Copy bank details
function copyAccount() {
  const accountDetails = `
Acc name: Olurotimi Aboaba 
Acc no: 93701255
Sort code: 60-84-07
Bank: Chase Bank
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



