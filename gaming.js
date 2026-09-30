document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".game-card");

  // Count games automatically
  function updateCounts() {
    const counts = { all: cards.length };
    cards.forEach((card) => {
      const cat = card.dataset.category;
      counts[cat] = (counts[cat] || 0) + 1;
    });
    buttons.forEach((btn) => {
      const cat = btn.dataset.filter;
      const label = btn.textContent.split("(")[0].trim();
      if (counts[cat]) btn.textContent = `${label} (${counts[cat]})`;
    });
  }

  // Filter function
  function filterGames(filter) {
    cards.forEach((card) => {
      const cat = card.dataset.category;
      if (filter === "all" || cat === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Click event
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterGames(btn.dataset.filter);
    });
  });

  updateCounts();
  filterGames("all");
});
