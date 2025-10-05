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

    // Split CSV lines
    const lines = csv.split("\n");

    // Ignore the header row (first line)
    const dataRows = lines.slice(1);

    // Count only rows that have something in column A (first cell)
    const validRows = dataRows.filter(line => {
      const firstCell = line.split(",")[0].trim();
      return firstCell !== "";
    }).length;

    const remaining = Math.max(totalSeats - validRows, 0);
    counter.textContent = remaining;

    console.log(`✅ ${validRows} registered → ${remaining} seats left`);
  } catch (error) {
    console.error("Error fetching seats:", error);
    counter.textContent = "⚠️ Error";
  }
}

// On load + refresh every 30 seconds
document.addEventListener("DOMContentLoaded", () => {
  updateSeats();
  setInterval(updateSeats, 30000);
});
