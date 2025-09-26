// Mostrar/ocultar o menu de filtros
const filterToggle = document.getElementById("filterToggle");
const filterMenu = document.getElementById("filterMenu");

filterToggle.addEventListener("click", () => {
  filterMenu.classList.toggle("show");
});

// Filtragem dos produtos
const filterButtons = document.querySelectorAll(".filter-btn");
const brandBoxes = document.querySelectorAll(".brand-box");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedBrand = button.getAttribute("data-brand");

    brandBoxes.forEach(box => {
      const brand = box.getAttribute("data-brand");
      if (selectedBrand === "all" || brand === selectedBrand) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});
