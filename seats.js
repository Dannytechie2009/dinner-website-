// === CONFIG ===
const totalSeats = 100; // total available
const sheetCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZYg8LETwOxGYlUFs2fRXw20h15vqTrNTi7VLMyMLnivLGW6l52rLAMdtBjlK63k-bsGzChKf5GdUy/pub?output=csv";

// === LOGIC ===
async function updateSeats() {
  const counter = document.getElementById("seats-count");
  if (!counter) return; // make sure the element exists

  counter.textContent = "⏳ Loading..."; // temporary message while fetching

  try {
    const res = await fetch(sheetCSV);
    const data = await res.text();

    // Split by new line, remove empty rows
    const rows = data.split("\n").filter(r => r.trim() !== "").length - 1;

    // Calculate remaining seats
    const remaining = Math.max(totalSeats - rows, 0);
    counter.textContent = remaining;

    console.log(`✅ Registered: ${rows} | Remaining: ${remaining}`);
  } catch (err) {
    console.error("❌ Error fetching seat data:", err);
    counter.textContent = "⚠️ Error loading seats";
  }
}

// Run once DOM is loaded + refresh every 30s
document.addEventListener("DOMContentLoaded", () => {
  updateSeats();
  setInterval(updateSeats, 30000);
});
