function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;

  menu.classList.toggle("open");
}

function closeMenu(){
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;

  menu.classList.remove("open");
}

/* Démo formulaire */
function fakeSubmit(e){
  e.preventDefault();
  alert("✅ Message envoyé (démo). Prochaine étape : on connecte le formulaire à un vrai email.");
  return false;
}

/* ✅ Fermer menu quand on clique sur un lien */
document.addEventListener("click", (e) => {
  const link = e.target.closest("#mobileMenu a");
  if (link) closeMenu();
});

/* ✅ Fermer menu si clic en dehors */
document.addEventListener("click", (e) => {
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;

  if (!menu.classList.contains("open")) return;

  const insideMenu = e.target.closest("#mobileMenu");
  const insideBurger = e.target.closest(".burger");
  if (!insideMenu && !insideBurger) closeMenu();
});

/* ✅ IMPORTANT : fermer menu quand on revient en arrière (bfcache) */
window.addEventListener("pageshow", function () {
  closeMenu();
});

/* ✅ BONUS : fermer menu quand l’onglet redevient visible */
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") closeMenu();
});
