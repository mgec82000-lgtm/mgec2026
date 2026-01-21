function fakeSubmit(e){
  e.preventDefault();
  alert("✅ Message envoyé (démo). Merci ! Nous vous recontactons dès que possible.");
  return false;
}

function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  const btn  = document.getElementById("burgerBtn");
  if(!menu) return;

  menu.classList.toggle("open");

  // change l'icône ☰ / ✕
  if(btn){
    btn.textContent = menu.classList.contains("open") ? "✕" : "☰";
  }
}

function closeMenu(){
  const menu = document.getElementById("mobileMenu");
  const btn  = document.getElementById("burgerBtn");
  if(menu) menu.classList.remove("open");
  if(btn) btn.textContent = "☰";
}

/* ferme le menu si on clique ailleurs (mobile) */
document.addEventListener("click", function(e){
  const menu = document.getElementById("mobileMenu");
  const btn  = document.getElementById("burgerBtn");
  if(!menu || !btn) return;

  const clickedInsideMenu = menu.contains(e.target);
  const clickedBurger = btn.contains(e.target);

  if(!clickedInsideMenu && !clickedBurger){
    closeMenu();
  }
});

/* ferme le menu quand on agrandit en mode PC */
window.addEventListener("resize", function(){
  if(window.innerWidth > 820){
    closeMenu();
  }
});
