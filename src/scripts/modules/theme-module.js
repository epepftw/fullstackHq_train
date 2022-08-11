AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();

function openNav() {
  document.getElementById('mainNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('mainNav').style.width = '0%';
  document.getElementById('subNav').style.width = '0%';
  document.getElementById('subNav2').style.width = '0%';
}

function openSubNav() {
  document.getElementById('subNav').style.width = '100%';
}

function closeSubNav() {
  document.getElementById('subNav').style.width = '0%';
}

function openSubNav2() {
  document.getElementById('subNav2').style.width = '100%';
}

function closeSubNav2() {
  document.getElementById('subNav2').style.width = '0%';
}