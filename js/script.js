window.addEventListener("DOMContentLoaded", () => {

  // tabs
  const tabs = document.querySelectorAll('.tab__item'),
    tabsContent = document.querySelectorAll('.main-item'),
    tabsParent = document.querySelector('.tabs__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    });

    tabs.forEach(item => {
      item.classList.remove('item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('tab__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // slider
  var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 26,
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      425: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 15,
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


  //modal
  const modal = document.querySelector('.modal'),
    img = document.querySelectorAll('.slider-img'),
    body = document.querySelector('body'),
    modalContent = document.querySelector('.modal__content'),

    modalImg = document.querySelector(".modal__photo");

  img.forEach(item => {
    item.addEventListener('click', () => {
      modal.style.display = "block";
      modalImg.src = item.src;
      body.style.overflow = 'hidden';
    });

    modal.addEventListener('click', (e) => {
      const modalClose = e.target.closest('.modal__content');
      if (!modalClose) {
        modal.style.display = 'none';
        body.style.overflow = 'overlay';
      }
    });

    closeModal = document.querySelector('.close__modal');
    closeModal.onclick = function () {
      modal.style.display = 'none';
      body.style.overflow = 'overlay';
    };
  });



  const btnPrev = document.querySelector('.modal__button-prev'),
    btnNext = document.querySelector('.modal__button-next');
  var currentImageIndex = 0;

  btnPrev.addEventListener('click', () => {
    currentImageIndex--;
    modalImg.src = img[currentImageIndex].src;
    btnNext.disabled = false;

    if (currentImageIndex === 0) {
      btnPrev.disabled = true;
    }
  });


  btnNext.addEventListener('click', () => {
    currentImageIndex++;
    modalImg.src = img[currentImageIndex].src;
    btnPrev.disabled = false;

    if (currentImageIndex === (img.length - 1)) {
      btnNext.disabled = true;
    }
  });

  // accordion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

});