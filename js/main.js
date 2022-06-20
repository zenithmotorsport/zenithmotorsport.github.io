// Menu
function showMenu(icon){
  icon.classList.toggle('change');
  document.getElementById('topNav').classList.toggle('menu_active');
}
function closeMenu(){
  (document.querySelector('.change'))?document.querySelector('.change').classList.toggle('change'):false;
  (document.querySelector('.menu_active'))?document.querySelector('.menu_active').classList.toggle('menu_active'):false;
}