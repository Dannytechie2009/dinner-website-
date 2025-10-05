// CONFIG
const totalSeats = 200;
const sheetCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZYg8LETwOxGYlUFs2fRXw20h15vqTrNTi7VLMyMLnivLGW6l52rLAMdtBjlK63k-bsGzChKf5GdUy/pub?gid=0&single=true&output=csv";

// LOGIC
async function updateSeats() {
  const counter = document.getElementById("seats-count");
  if (!counter) return;

  counter.textContent = "⏳ Loading...";

  try {
    const response = await fetch(sheetCSV);
    const csv = await response.text();

    const rows = csv
      .split("\n")
      .filter((line, idx) => idx > 0 && line.trim() !== "")
      .length;

    const remaining = Math.max(totalSeats - rows, 0);
    counter.textContent = remaining;

    console.log(`Rows: ${rows} → Remaining: ${remaining}`);
  } catch (error) {
    console.error("Error fetching CSV:", error);
    counter.textContent = "⚠️ Error";
  }
}

// On load + interval
document.addEventListener("DOMContentLoaded", () => {
  updateSeats();
  setInterval(updateSeats, 30000);  // refresh every 30s
});
