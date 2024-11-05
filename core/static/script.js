//Grab
const menuBars = document.querySelector('.menuContainer');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

//Listen
menuBars.addEventListener('click', () => {
  overlay.classList.remove('hidden');
})

close.addEventListener('click', () => {
  overlay.classList.add('hidden');
})