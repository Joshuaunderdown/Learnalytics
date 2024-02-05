const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

document.addEventListener("DOMContentLoaded", function () {
  const buttonsWrapper = document.querySelector(".map");
  const carousel = document.querySelector(".inner");
  const slides = document.querySelectorAll(".card");

  let currentSlide = 0;

  buttonsWrapper.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      const targetClass = e.target.classList[0];
      moveCarousel(targetClass);
      updateButtons(targetClass);
    }
  });

  function moveCarousel(targetClass) {
    const slideWidth = slides[0].offsetWidth + 16; 
    if (targetClass === "first") {
      currentSlide = 0;
    } else if (targetClass === "second") {
      currentSlide = 1;
    } else if (targetClass === "third") {
      currentSlide = 2;
    }

    const newTransformValue = -currentSlide * slideWidth + "px";
    carousel.style.transform = "translateX(" + newTransformValue + ")";
  }

  function updateButtons(targetClass) {
    buttonsWrapper.querySelectorAll("button").forEach((button) => {
      button.classList.remove("active");
    });
    buttonsWrapper.querySelector("." + targetClass).classList.add("active");
  }
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}