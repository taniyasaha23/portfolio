// Hero Section
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typing-text', {
    strings: ['UI/UX Designer', 'Web Designer'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
  });
});


// Logo & Branding Section

function updateBlur() {
  const isMobile = window.innerWidth <= 768;
  cards.forEach((card, index) => {
    if (isMobile) {
      card.classList.remove('blur');
      card.classList.remove('glow'); // Remove glow for mobile
    } else {
      if (index === currentIndex) {
        card.classList.remove('blur');
        card.classList.add('glow'); // Add glow only for active card on big screens
      } else {
        card.classList.add('blur');
        card.classList.remove('glow');
      }
    }
  });
}

window.addEventListener('resize', updateBlur); // Re-evaluate blur/glow on resize

function updateArrowButtons() {
  // Hide left arrow if on the first card
  if (currentIndex === 0) {
    leftArrow.classList.add('arrow-hidden');
  } else {
    leftArrow.classList.remove('arrow-hidden');
  }

  // Hide right arrow if on the last card
  if (currentIndex === cards.length - 1) {
    rightArrow.classList.add('arrow-hidden');
  } else {
    rightArrow.classList.remove('arrow-hidden');
  }
}

window.addEventListener('load', function () {
  updateArrowButtons();
  updateBlur(); // Run once on load
});




//Graphic Projects Section

document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.graphic-cards-wrapper');
  const leftArrow = document.querySelector('.left-arrow1');
  const rightArrow = document.querySelector('.right-arrow1');
  const cards = document.querySelectorAll('.graphic-card');

  // Get width of one card (assume all cards same width)
  function getCardWidth() {
    return cards[0].getBoundingClientRect().width + 16; // 16px = average gap
  }

  function scrollToCard(direction) {
    const scrollAmount = getCardWidth();
    wrapper.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  leftArrow.addEventListener('click', () => scrollToCard(-1));
  rightArrow.addEventListener('click', () => scrollToCard(1));

  function updateArrowVisibility() {
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

    leftArrow.style.opacity = wrapper.scrollLeft <= 0 ? '0' : '1';
    rightArrow.style.opacity = wrapper.scrollLeft >= maxScrollLeft - 5 ? '0' : '1';

    leftArrow.style.pointerEvents = wrapper.scrollLeft <= 0 ? 'none' : 'auto';
    rightArrow.style.pointerEvents = wrapper.scrollLeft >= maxScrollLeft - 5 ? 'none' : 'auto';
  }

  wrapper.addEventListener('scroll', updateArrowVisibility);
  updateArrowVisibility(); // Initial check
});

  // Adjustments (Small Fixes)
  document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".graphic-card");

  function adjustBlocksForSmallScreens() {
    if (window.innerWidth > 768) {
      // Reset styles for larger screens
      document.querySelectorAll(".image-block").forEach(block => {
        block.style.height = "";
        block.querySelector("img").style.height = "";
      });
      return;
    }

    cards.forEach(card => {
      const container = card.querySelector(".image-block-container");
      const blocks = container.querySelectorAll(".image-block");

      // Equal height for both image-blocks
      const availableHeight = card.clientHeight - card.querySelector("h2").offsetHeight - card.querySelector("p").offsetHeight - 40;
      const blockHeight = availableHeight / blocks.length - 10;

      blocks.forEach(block => {
        block.style.height = blockHeight + "px";
        const img = block.querySelector("img");
        img.style.height = "100%";
        img.style.width = "100%";
        img.style.objectFit = "contain"; // Keeps proportion without cropping
      });
    });
  }

  adjustBlocksForSmallScreens();
  window.addEventListener("resize", adjustBlocksForSmallScreens);
});








// Competion Projects Section

document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.competition-cards-wrapper');
  const leftArrow = document.querySelector('.left-arrow2');
  const rightArrow = document.querySelector('.right-arrow2');
  const cards = document.querySelectorAll('.competition-card');

  // Get width of one card (assume all cards same width)
  function getCardWidth() {
    return cards[0].getBoundingClientRect().width + 16; // 16px = average gap
  }

  function scrollToCard(direction) {
    const scrollAmount = getCardWidth();
    wrapper.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  leftArrow.addEventListener('click', () => scrollToCard(-1));
  rightArrow.addEventListener('click', () => scrollToCard(1));

  function updateArrowVisibility() {
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

    leftArrow.style.opacity = wrapper.scrollLeft <= 0 ? '0' : '1';
    rightArrow.style.opacity = wrapper.scrollLeft >= maxScrollLeft - 5 ? '0' : '1';

    leftArrow.style.pointerEvents = wrapper.scrollLeft <= 0 ? 'none' : 'auto';
    rightArrow.style.pointerEvents = wrapper.scrollLeft >= maxScrollLeft - 5 ? 'none' : 'auto';
  }

  wrapper.addEventListener('scroll', updateArrowVisibility);
  updateArrowVisibility(); // Initial check
});






