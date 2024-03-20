// let lastScrollTop = 0;

// window.addEventListener('scroll', function() {
//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScroll > lastScrollTop) {
//     // Rolando para baixo
//     document.querySelector('.quadrado h2').style.color = 'blue';
//   } else {
//     // Rolando para cima
//     document.querySelector('.quadrado h2').style.color = 'red';
//   }

//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// }, false);

document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (isElementInViewport(card)) {
        card.classList.add('visible');
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
        card.classList.remove('visible');
      }
    });
  });
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  document.addEventListener("scroll", function() {
    var element = document.getElementById("gradient2");
  
    // Verifica se o elemento está visível na tela durante o scroll
    if (isElementInViewport(element)) {
      element.classList.add("fade-in");
    }
  });

  let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel img');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(++slideIndex);
}

function prevSlide() {
    showSlide(--slideIndex);
}

showSlide(slideIndex);
