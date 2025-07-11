//menu show y hidden
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//menu show
// validate if contant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.style.display = "none";
    navClose.style.display = "block";
  });
}
//menu hidden
// validate if contant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.style.display = "block";
    navClose.style.display = "none";
  });
}
// ===== remove menu mobile  =====
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each navlink, we removed the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//accordion skills
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
// QUALIFICATIN TABS

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
// ========== SERVICES MODAL  ============
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    modal(index);
  });
});

modalCloses.forEach((modalClose, index) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// ====== POR TFO LIO SWIPER ======
/*
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel: true,
  // keyboard: true,
});

// ==== TESTIMONIAL ====

let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
  // mousewheel: true,
  // keyboard: true,
});
*/
/* === SCROLL SECTIONs ACTIVE LINK === */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=' + sectionId + ']")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=' + sectionId + ']")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=====  CHANGE BACKGROUND HEADER   =====*/

function scrollHeader() {
  const nav = document.getElementById("header");
  //when the scroll is greater than 200 viewport height, add to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=====  SHOW SCROLL up  =====*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-Up");
  //when the scroll is higher than 560 viewport height, add show-scroll class  to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";

// أسماء الأيقونات التي ستظهر
const iconLight = "sunny-outline"; // يظهر عندما يكون الوضع داكن (للتبديل للمضيء)
const iconDark = "moon-outline"; // يظهر عندما يكون الوضع مضيء (للتبديل للداكن)

// جلب القيم المخزنة سابقًا
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// دالة لتحديد الثيم الحالي
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

// دالة لجلب اسم الأيقونة الحالية
const getCurrentIcon = () => themeButton.getAttribute("name");

// تطبيق الثيم المحفوظ إذا وُجد
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.setAttribute("name", selectedIcon);
}

// عند الضغط على زر التبديل
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);

  // نبدل بين اسم الأيقونة
  const currentIcon = themeButton.getAttribute("name");
  themeButton.setAttribute(
    "name",
    currentIcon === iconLight ? iconDark : iconLight
  );

  // حفظ القيم
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
