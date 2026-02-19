function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;
  menu.classList.toggle("open");
}

// Fermer le menu quand on clique sur un lien
document.addEventListener("click", (e) => {
  const menu = document.getElementById("mobileMenu");
  const burger = document.querySelector(".burger");
  if (!menu || !burger) return;

  // Si on clique sur un lien du menu => on ferme
  if (e.target.closest("#mobileMenu a")) {
    menu.classList.remove("open");
  }

  // Si le menu est ouvert et qu'on clique en dehors => on ferme
  if (menu.classList.contains("open")) {
    const clickedInsideMenu = e.target.closest("#mobileMenu");
    const clickedBurger = e.target.closest(".burger");

    if (!clickedInsideMenu && !clickedBurger) {
      menu.classList.remove("open");
    }
  }
});
