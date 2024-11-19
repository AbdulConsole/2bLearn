//Grab
const menuBars = document.querySelector('.menuContainer');
const close = document.querySelector('.close');
const backBtn = document.querySelector('.back');
const overlay = document.querySelector('.overlay');
const author = document.querySelector('.author-about');
const challBtn = document.querySelector('.chall-btn');
const aboutShow = document.querySelector('.about');
const challenges = document.querySelector('.challenges');
const menu = document.querySelector('.menu');

// Function
function hasClass(element, className) {
    return element.classList.contains(className);
}

//Listen
menuBars.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  menu.classList.remove('hidden');
  aboutShow.classList.add('hidden');
  challenges.classList.add('hidden');
})

close.addEventListener('click', () => {
  overlay.classList.add('hidden');
})

backBtn.addEventListener('click', () => {
  
  if (hasClass(menu, 'hidden')) {
    menu.classList.remove('hidden');
    aboutShow.classList.add('hidden');
    challenges.classList.add('hidden');
  } else {
    overlay.classList.add('hidden');
    menu.classList.add('hidden');
    aboutShow.classList.add('hidden');
    challenges.classList.add('hidden');
}
  
})

author.addEventListener('click', () => {
  menu.classList.add('hidden');
  aboutShow.classList.remove('hidden');
})

challBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
  challenges.classList.remove('hidden');
})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});