document.getElementById("openLightbox").addEventListener("click", openLightbox);
document.getElementById("lightbox").addEventListener("click", openLightbox);
document.getElementById("menu").addEventListener("click", toggleMenu);
document.getElementById("close").addEventListener("click", toggleMenu);

function openLightbox() {
  document.getElementById("lightbox").classList.toggle("showLightbox");
}


function toggleMenu() {
  document.getElementById("nav-text").classList.toggle("show-nav");
  document.getElementById("mobile-delivery").classList.toggle("show-delivery");
  document.getElementById("menu").classList.toggle("hide-menu");
  document.getElementById("close").classList.toggle("show-close");
}