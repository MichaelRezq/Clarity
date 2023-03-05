document.querySelector(document).ready(function () {
    "use strict";
  
    PageScroll();
  
    // Loading Box (Preloader)
    function handlePreloader() {
      if (document.querySelector(".preloader").length > 0) {
        document.querySelector(".preloader").delay(200).fadeOut(500);
      }
    }
    function PageLoad() {
      document.querySelector(window).on("load", function () {
        setInterval(function () {
          document.querySelector(".preloader-wrap").fadeOut(300);
        }, 400);
        setInterval(function () {
          document.querySelector("body").classList.add("loaded");
        }, 600);
      });
    }
    handlePreloader();
    PageLoad();
    document.querySelector(".carousel-card").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      autoplay: false,
      dots: false,
      autoWidth: true,
    });
    document.querySelector(".category-card").owlCarousel({
      loop: false,
      margin: 7,
      nav: true,
      autoplay: false,
      dots: false,
      navText: [
        "<i class='ti-angle-left'></i>",
        "<i class='ti-angle-right'></i>",
      ],
      autoWidth: true,
    });
    document.querySelector(".banner-slider").owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      autoplay: false,
      dots: true,
      navText: [
        "<i class='ti-angle-left icon-nav'></i>",
        "<i class='ti-angle-right icon-nav'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
    document.querySelector(".brand-slider").owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      autoplay: false,
      dots: false,
      items: 5,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      },
    });
    document.querySelector(".product-slider").owlCarousel({
      loop: true,
      margin: 3,
      // nav:true,
      // navText: ['<i class='ti-angle-left icon-nav'></i>','<i class='ti-angle-right icon-nav'></i>'],
      autoplay: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 2,
        },
      },
    });
    document.querySelector(".feedback-slider").owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      autoplay: false,
      dots: false,
      items: 5,
      navText: [
        "<i class='ti-angle-left'></i>",
        "<i class='ti-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
    document.querySelector(".feedback-slider2").owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      autoplay: false,
      dots: false,
      items: 5,
      navText: [
        "<i class='ti-angle-left'></i>",
        "<i class='ti-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
    document.querySelector(".story-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: true,
      dots: true,
      touchDrag: true,
      navText: [
        "<i class='ti-angle-left icon-nav'></i>",
        "<i class='ti-angle-right icon-nav'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
    document.querySelector(".product-slider-6").owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      autoplay: false,
      dots: false,
      items: 5,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1200: {
          items: 6,
        },
      },
    });
    document
      .querySelector("#lightbox")
      .append(
        "<div class='right-comment chat-left scroll-bar theme-dark-bg'><div class='card-body ps-2 pe-4 pb-0 d-flex'> <figure class='avatar me-3'><img src='images/user-8.png' alt='image' class='shadow-sm rounded-circle w45'></figure><h4 class='fw-700 text-grey-900 font-xssss mt-1 text-left'>Hurin Seary <span class='d-block font-xssss fw-500 mt-1 lh-3 text-grey-500'>2 hour ago</span></h4> <a href='#' class='ms-auto'><i class='ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss'></i></a></div><div class='card-body d-flex ps-2 pe-4 pt-0 mt-0'> <a href='#' class='d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss me-3 text-dark'><i class='feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss'></i> <i class='feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss'></i>2.8K Like</a> <a href='#' class='d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss text-dark'><i class='feather-message-circle text-grey-900 btn-round-sm font-lg text-dark'></i>22 Comment</a></div><div class='card w-100 border-0 shadow-none right-scroll-bar'><div class='card-body border-top-xs pt-4 pb-3 pe-4 d-block ps-5'> <figure class='avatar position-absolute left-0 ms-2 mt-1'><img src='images/user-6.png' alt='image' class='shadow-sm rounded-circle w35'></figure><div class='chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg'><h4 class='fw-700 text-grey-900 font-xssss mt-0 mb-1'>Victor Exrixon <a href='#' class='ms-auto'><i class='ti-more-alt float-right text-grey-800 font-xsss'></i></a></h4><p class='fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class='card-body pt-0 pb-3 pe-4 d-block ps-5'> <figure class='avatar position-absolute left-0 ms-2 mt-1'><img src='images/user-4.png' alt='image' class='shadow-sm rounded-circle w35'></figure><div class='chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg'><h4 class='fw-700 text-grey-900 font-xssss mt-0 mb-1'>Surfiya Zakir <a href='#' class='ms-auto'><i class='ti-more-alt float-right text-grey-800 font-xsss'></i></a></h4><p class='fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class='card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative'> <figure class='avatar position-absolute left-0 ms-2 mt-1'><img src='images/user-3.png' alt='image' class='shadow-sm rounded-circle w35'></figure><div class='chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg'><h4 class='fw-700 text-grey-900 font-xssss mt-0 mb-1'>Goria Coast <a href='#' class='ms-auto'><i class='ti-more-alt float-right text-grey-800 font-xsss'></i></a></h4><p class='fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class='card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative'> <figure class='avatar position-absolute left-0 ms-2 mt-1'><img src='images/user-3.png' alt='image' class='shadow-sm rounded-circle w35'></figure><div class='chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg'><h4 class='fw-700 text-grey-900 font-xssss mt-0 mb-1'>Hurin Seary <a href='#' class='ms-auto'><i class='ti-more-alt float-right text-grey-800 font-xsss'></i></a></h4><p class='fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class='card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative'> <figure class='avatar position-absolute left-0 ms-2 mt-1'><img src='images/user-3.png' alt='image' class='shadow-sm rounded-circle w35'></figure><div class='chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg'><h4 class='fw-700 text-grey-900 font-xssss mt-0 mb-1'>David Goria <a href='#' class='ms-auto'><i class='ti-more-alt float-right text-grey-800 font-xsss'></i></a></h4><p class='fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class='card-body pt-0 pb-3 pe-4 d-block ps-5'> <figure class='avatar position-absolute left-0 ms-2 mt-1'><img src='images/user-4.png' alt='image' class='shadow-sm rounded-circle w35'></figure><div class='chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg'><h4 class='fw-700 text-grey-900 font-xssss mt-0 mb-1'>Seary Victor <a href='#' class='ms-auto'><i class='ti-more-alt float-right text-grey-800 font-xsss'></i></a></h4><p class='fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class='card-body pt-0 pb-3 pe-4 d-block ps-5'> <figure class='avatar position-absolute left-0 ms-2 mt-1'><img src='images/user-4.png' alt='image' class='shadow-sm rounded-circle w35'></figure><div class='chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg'><h4 class='fw-700 text-grey-900 font-xssss mt-0 mb-1'>Ana Seary <a href='#' class='ms-auto'><i class='ti-more-alt float-right text-grey-800 font-xsss'></i></a></h4><p class='fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class='card-body pt-0 pb-3 pe-4 d-block ps-5'> <figure class='avatar position-absolute left-0 ms-2 mt-1'><img src='images/user-4.png' alt='image' class='shadow-sm rounded-circle w35'></figure><div class='chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg'><h4 class='fw-700 text-grey-900 font-xssss mt-0 mb-1'>Studio Express <a href='#' class='ms-auto'><i class='ti-more-alt float-right text-grey-800 font-xsss'></i></a></h4><p class='fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div> </div></div></div>"
      );
    document.querySelector(window).on("load", function () {
      document.querySelector("#Modalstories").modal("show");
    });
    document.querySelector(".emoji-bttn").on("click", function () {
      document
        .querySelector(this)
        .parentNode.find(".emoji-wrap")
        .classList.toggle("active");
      return false;
    });
    document.querySelector(".add-wishlist").on("click", function () {
      document.querySelector(this).classList.toggle("bg-greylight bg-danger");
      document
        .querySelector(this)
        .find("i")
        .classList.toggle("text-grey-900 text-white");
      return false;
    });
    document
      .querySelector(".question-div .question-ans")
      .on("click", function () {
        document.querySelector(".question-ans").classList.remove("active");
        document.querySelector(this).classList.add("active");
        return false;
      });
    document
      .querySelector(".question-div .question-ans")
      .on("click", function () {
        document.querySelector(".question-ans").classList.remove("active");
        document.querySelector(this).classList.add("active");
        return false;
      });
    document.querySelector(".next-bttn").on("click", function () {
      var next_bttn_id = document
        .querySelector(this)
        .getAttribute("data-question");
      document.querySelector(".question-div .card-body").fadeOut(0);
      document.querySelector(".question-div #" + next_bttn_id).fadeIn(500);
      // alert(next_bttn_id);
      // document.querySelector(this).classList.add('active');
      return false;
    });
    document.querySelector(".dropdown-menu-icon").on("click", function () {
      document
        .querySelector(".dropdown-menu-settings")
        .classList.toggle("active");
    });
    document.querySelector(".menu-search-icon").on("click", function () {
      document.querySelector(".app-header-search").classList.add("show");
    });
    document.querySelector(".searchbox-close").on("click", function () {
      document.querySelector(".app-header-search").classList.remove("show");
    });
    document.querySelector(".switchcolor").on("click", function () {
      document.querySelector(this).classList.add("active");
      document.querySelector(".backdrop").classList.add("active");
      document.querySelector(".switchcolor-wrap").classList.add("active");
    });
    document.querySelector(".sheet-close,.backdrop").on("click", function () {
      document.querySelector(".switchcolor").classList.remove("active");
      document.querySelector(".backdrop").classList.remove("active");
      document.querySelector(".switchcolor-wrap").classList.remove("active");
    });
    document.querySelector("#darkmodeswitch").on("change", function () {
      if (this.checked) {
        document.querySelector("body").classList.add("theme-dark");
      } else {
        document.querySelector("body").classList.remove("theme-dark");
      }
    });
    document.querySelector(".chat-active-btn").on("click", function () {
      document.querySelector(".right-chat").classList.toggle("active-sidebar");
      document
        .querySelector(".main-content")
        .classList.toggle("right-chat-active");
      return false;
    });
    document.querySelector(window).resize(function () {
      if (document.querySelector(this).getBoundingClientRect().width < 1600) {
        document.querySelector(".right-chat").classList.remove("active-sidebar");
      } else {
        document.querySelector(".right-chat").classList.add("active-sidebar");
      }
    });
    if (document.querySelector(window).getBoundingClientRect().width < 1600) {
      document.querySelector(".right-chat").classList.remove("active-sidebar");
    } else {
      document.querySelector(".right-chat").classList.add("active-sidebar");
    }
    document.querySelector(window).scroll(function () {
      if (document.querySelector(this).scrollTop() > 10) {
        document
          .querySelector(".scroll-header")
          .classList.add("bg-white shadow-xss");
      } else {
        document
          .querySelector(".scroll-header")
          .classList.remove("bg-white shadow-xss");
      }
    });
    document.querySelector(window).scroll(function () {
      if (document.querySelector(this).scrollTop() > 10) {
        document.querySelector(".middle-sidebar-header").classList.add("scroll");
      } else {
        document
          .querySelector(".middle-sidebar-header")
          .classList.remove("scroll");
      }
    });
    document.querySelector(".nav-menu").on("click", function () {
      document.querySelector(this).classList.toggle("active");
      document.querySelector(".navigation").classList.toggle("nav-active");
    });
    document.querySelector(".model-popup-chat").on("click", function () {
      document.querySelector(".modal-popup-chat").classList.toggle("d-block");
      return false;
    });
    document.querySelector(".modal-popup-chat a").on("click", function () {
      document.querySelector(".modal-popup-chat").classList.remove("d-block");
      return false;
    });
    document.querySelector(".close-nav").on("click", function () {
      document.querySelector(".navigation").classList.remove("nav-active");
      return false;
    });
    document.querySelector(".toggle-menu-color input").on("change", function () {
      if (this.checked) {
        document.querySelector(".navigation").classList.add("menu-current-color");
      } else {
        document
          .querySelector(".navigation")
          .classList.remove("menu-current-color");
      }
    });
    document.querySelector(".toggle-menu input").on("change", function () {
      if (this.checked) {
        document
          .querySelector(".navigation,.main-content")
          .classList.add("menu-active");
      } else {
        document
          .querySelector(".navigation,.main-content")
          .classList.remove("menu-active");
      }
    });
    document.querySelector(".toggle-screen input").on("change", function () {
      if (this.checked) {
        document.querySelector("body").classList.add("theme-full");
      } else {
        document.querySelector("body").classList.remove("theme-full");
      }
    });
    document.querySelector(".toggle-dark input").on("change", function () {
      if (this.checked) {
        document.querySelector("body").classList.add("theme-dark");
      } else {
        document.querySelector("body").classList.remove("theme-dark");
      }
    });
    document.querySelector("input[name='color-radio']").on("change", function () {
      if (this.checked) {
        document
          .querySelector("body")
          .classList.remove(
            "color-theme-teal color-theme-cadetblue color-theme-pink color-theme-deepblue color-theme-blue color-theme-red color-theme-black color-theme-gray color-theme-orange color-theme-yellow color-theme-green color-theme-white color-theme-brown color-theme-darkgreen color-theme-deeppink color-theme-darkorchid"
          );
        document
          .querySelector("body")
          .classList.add("color-theme-" + document.querySelector(this).value);
      }
    });
  });
  function PageScroll() {
    document.querySelector(".scroll-tiger").on("click", function (e) {
      var $anchor = document.querySelector(this);
      document
        .querySelector("html, body")
        .stop()
        .animate(
          {
            scrollTop:
              document.querySelector($anchor.getAttribute("href")).offset().top -
              0,
          },
          1500,
          "easeInOutExpo"
        );
      document.querySelector(".overlay-section").classList.remove("active");
      e.preventDefault();
    });
  }
  