// === CONFIG ===
const totalSeats = 100; // total available
const sheetCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZYg8LETwOxGYlUFs2fRXw20h15vqTrNTi7VLMyMLnivLGW6l52rLAMdtBjlK63k-bsGzChKf5GdUy/pub?output=csv";

// === LOGIC ===
async function updateSeats() {
  const counter = document.getElementById("seats-count");
  try {
    const res = await fetch(sheetCSV);
    const data = await res.text();

    // Count rows (registrations) → subtract 1 for header
    const rows = data.split("\n").length - 1;
    const remaining = Math.max(200 - rows, 0);

    counter.textContent = remaining;
  } catch (err) {
    console.error("Error fetching seats:", err);
    counter.textContent = "⚠️ Error";
  }
}

// Initial load + refresh every 30s
updateSeats();
setInterval(updateSeats, 30000);
