/*
  main.js — hamburguer / drawer mobile
*/
const hamburger = document.getElementById('hamburger');
const sidebar   = document.querySelector('.sidebar');
const overlay   = document.getElementById('sidebarOverlay');
 
function openSidebar() {
  sidebar.classList.add('open');
  hamburger.classList.add('open');
  overlay.classList.add('visible');
}
 
function closeSidebar() {
  sidebar.classList.remove('open');
  hamburger.classList.remove('open');
  overlay.classList.remove('visible');
}
 
hamburger.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});
 
overlay.addEventListener('click', closeSidebar);
 
// fecha o drawer ao clicar em qualquer link do menu (mobile)
document.querySelectorAll('.sidebar-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) closeSidebar();
  });
});