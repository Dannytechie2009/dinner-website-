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
// Seats Left Widget (simulate backend update)
function updateSeatsLeft(seats) {
  document.getElementById("seats-count").innerText = seats;
}

// Example: fetch from backend API later
// fetch("/api/seats").then(res => res.json()).then(data => updateSeatsLeft(data.seats));

// Temporary static demo
updateSeatsLeft(72);

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
// faq.js
document.querySelectorAll(".faq-item button").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector("i");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.classList.remove("rotate-180");
    } else {
      document.querySelectorAll(".faq-content").forEach(c => c.style.maxHeight = null);
      document.querySelectorAll(".faq-item i").forEach(i => i.classList.remove("rotate-180"));
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add("rotate-180");
    }
  });
});
