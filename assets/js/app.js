// Slick slider

$(function() {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500
  });
})



const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-left')
const lang = document.querySelector('.nav-rigth__menu__inner')
const anchors = document.querySelectorAll('a[href*="#"]');
const arrayOfLanguages = document.querySelectorAll('.drop-down__menu__item')
const selectedLanguage = document.querySelector('.nav-rigth__menu__title')
// Burger 

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active')
  nav.classList.toggle('show')
})

// Lang

lang.addEventListener('click', () => {
  document.querySelector('.drop-down__menu').classList.toggle('drop-down__menu--active')
})

arrayOfLanguages.forEach((item) => {
  item.addEventListener('click', (e) => {
    selectedLanguage.textContent = e.target.textContent;
    document.querySelector('.drop-down__menu').classList.toggle('drop-down__menu--active')
  })
})


//swipe to block
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
      })
  })
  }

// Modal
const submitBtn = document.getElementById('submit'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      textarea = document.getElementById('textarea'),
      theme = document.getElementById('theme'),
      descr = document.getElementById('descr'),
      overlay = document.querySelector('.overlay'),
      okBtn = document.getElementById('ok');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(email.value !== '') {
    if (subject.value !== '') {
      theme.textContent = 'Subject: ' + subject.value;
    }
    if (textarea.value !== '') {
      descr.textContent = 'Description: ' + textarea.value;
    }
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
})

okBtn.addEventListener('click', e => {
  e.preventDefault();
  overlay.style.display = 'none';
  document.body.style.overflow = '';
  subject.value = '';
  textarea.value = '';
  email.value = '';
  theme.textContent = 'No subject';
  descr.textContent = 'No description';
})


overlay.addEventListener('click', e =>{
  let target = e.target;
  if (target.classList.contains('overlay')) {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    subject.value = '';
    textarea.value = '';
    email.value = '';
    theme.textContent = 'No subject';
    descr.textContent = 'No description';
  }
})