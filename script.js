function navigateTo(sectionId) {
  document.querySelectorAll(".container").forEach((container) => {
    container.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}
