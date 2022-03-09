window.addEventListener("DOMContentLoaded", () => {

  // tabs
  const tabIpsum = document.querySelector('.tab-ipsum'),
    tabLorem = document.querySelector('.tab-lorem'),
    mainLorem = document.querySelector('.main__lorem'),
    mainIpsum = document.querySelector('.main__ipsum');

  tabIpsum.addEventListener('click', () => {
    mainLorem.style.display = 'none';
    mainIpsum.style.display = 'block';
    tabIpsum.style.textDecoration = 'underline';
    tabLorem.style.textDecoration = 'none'

  });

  tabLorem.addEventListener('click', () => {
    mainLorem.style.display = 'block';
    mainIpsum.style.display = 'none';
    tabLorem.style.textDecoration = 'underline';
    tabIpsum.style.textDecoration = 'none';
  });

  // slider
  var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 26,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1220: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1320: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  const modal = document.querySelector('.modal'),
    img = document.querySelectorAll('.slider-img'),
    modalImg = document.querySelector(".modal__content");

  img.forEach(item => {
    item.addEventListener('click', () => {
      modal.style.display = "block";
      modalImg.src = item.src;
    });
  });

  

  closeModal = document.querySelector('.close__modal');
  closeModal.onclick = function () {
    modal.style.display = 'none';
  };

}); 