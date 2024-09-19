document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  const navClose = document.querySelector(".nav__close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("showmenu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("showmenu");
    });
  }

  // Scroll Header Background Change on Scroll
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Scroll to Top Button
    const scrollUp = document.querySelector(".scroll-up");
    if (scrollUp) {
      if (window.scrollY >= 300) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    }

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');

      if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
    });
  });

  // Smooth scrolling for 'Recent Works' link
  document.querySelector('.home__scroll').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#recent-works').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Smooth scrolling for other links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Modal functionality
  const eyModal = document.getElementById('ey-modal');
  const eyBlock = document.getElementById('ey-block');
  const closeBtn = document.querySelector('.close-btn');

  if (eyModal) {
    eyModal.style.display = 'none'; // Ensure modal is hidden by default

    if (eyBlock) {
      eyBlock.addEventListener('click', function() {
        eyModal.style.display = 'flex'; // Show modal
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        eyModal.style.display = 'none'; // Hide modal
      });
    }

    window.addEventListener('click', function(event) {
      if (event.target === eyModal) {
        eyModal.style.display = 'none'; // Hide modal
      }
    });
  }

  // JavaScript to toggle the menu on hamburger click
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Add click event listener to the hamburger icon
menuBtn.addEventListener('click', () => {
  // Toggle the 'active' class to show/hide the menu
  menu.classList.toggle('active');
});

  // Modal views for services (if applicable)
  const modalViews = document.querySelectorAll('.services__modal');
  const modalBtns = document.querySelectorAll('.services__button');
  const modalClose = document.querySelectorAll('.services__modal-close');

  modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
      if (modalViews[i]) {
        modalViews[i].classList.add('active-modal');
      }
    });
  });

  modalClose.forEach(mc => {
    mc.addEventListener('click', () => {
      modalViews.forEach(mv => {
        mv.classList.remove('active-modal');
      });
    });
  });
});
