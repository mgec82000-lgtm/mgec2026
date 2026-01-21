function fakeSubmit(e){
  e.preventDefault();
  alert("✅ Message envoyé (démo). Prochaine étape : on connecte le formulaire à un vrai email.");
  return false;
}
function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  if(menu) menu.classList.toggle("open");
}

function closeMenu(){
  const menu = document.getElementById("mobileMenu");
  if(menu) menu.classList.remove("open");
}
