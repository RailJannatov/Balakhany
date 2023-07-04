var paginationBullets = document.querySelectorAll(".swiper-pagination-bullet");
if (paginationBullets) {
  paginationBullets.forEach(function (bullet, index) {
    bullet.textContent = index + 1;

    bullet.addEventListener("click", function () {
      swiper.slideTo(index);
      updateActiveBullet(index);
    });
  });
}

function updateActiveBullet(index) {
  paginationBullets.forEach(function (bullet, i) {
    if (i === index) {
      bullet.classList.add("swiper-pagination-bullet-active");
    } else {
      bullet.classList.remove("swiper-pagination-bullet-active");
    }
  });
}
var careerTabs = document.querySelectorAll("#career-applies button");
if (careerTabs) {
  careerTabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      updateActiveCareeTab(index);
    });
  });
}

function updateActiveCareeTab(index) {
  careerTabs.forEach(function (bullet, i) {
    if (i === index) {
      bullet.classList.add("career-tab-active");
    } else {
      bullet.classList.remove("career-tab-active");
    }
  });
}

//
const svgIcon = document.querySelectorAll(".svg-icon");
svgIcon.forEach((svg) => {
  svg.addEventListener("click", function () {
    var contentBx = this.previousElementSibling.classList;
    contentBx.toggle("active");

    if (contentBx.contains("active")) {
      this.innerHTML = "";
      this.innerHTML = `
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="52" height="52" rx="26" fill="#C59B48" fill-opacity="0.12"/>
      <path d="M18 34L34 18M34 18H23.3333M34 18V28.6667" stroke="#C59B48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#C59B48" stroke-opacity="0.12"/>
      </svg>`;
      this.previousElementSibling.children[1].style.marginTop = "40px";
    } else {
      this.innerHTML = `<svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="52"
        height="52"
        rx="26"
        fill="#C59B48"
        fill-opacity="0.12"
      />
      <path
        d="M19.3334 19.3333L32.6667 32.6666"
        stroke="#C59B48"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.6667 19.3333V32.6666H19.3334"
        stroke="#C59B48"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="0.5"
        y="0.5"
        width="51"
        height="51"
        rx="25.5"
        stroke="#C59B48"
        stroke-opacity="0.12"
      />
    </svg>`;
      this.previousElementSibling.children[1].style.marginTop = "0px";
    }
  });
});
const contentAccordion = document.querySelectorAll(".contentBx");
contentAccordion.forEach((content) => {
  content.addEventListener("click", function () {
    const thisClass = this.classList;
    thisClass.toggle("active");
    if (!Array.from(thisClass).includes("active")) {
      this.children[1].style.marginTop = "0px";
    } else {
      this.children[1].style.marginTop = "40px";
    }
  });
});

let defaultOpen = document.getElementById("defaultOpen");
if (defaultOpen) {
  defaultOpen.click();
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var paginationNumbers = document.querySelectorAll(".pagination-number");
paginationNumbers.forEach(function (button, index) {
  button.addEventListener("click", function () {
    updateActiveButton(index);
  });
});
function updateActiveButton(index) {
  paginationNumbers.forEach(function (button, i) {
    if (i === index) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
const openModalBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".president-detail-modal");
const closeModalBtn = document.querySelector(".president-detail-modal .close");
const body = document.querySelector("body");

if (openModalBtn) {
  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    body.style.background = "rgba(0, 0, 0, 0.5)";
  });
}
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    body.style.background = "#eee";
  });
}

const inputs = document.querySelectorAll(".form-group input");
if (inputs) {
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.previousElementSibling.style.display = "none";
    });
    input.addEventListener("blur", () => {
      if (input.value === "") {
        input.previousElementSibling.style.display = "block";
      }
    });
  });
}

const legacyLinks = document.querySelectorAll(".legacy-links  a");

legacyLinks.forEach(function (button, index) {
  button.addEventListener("click", function () {
    updateActiveButton(index);
  });
});
function updateActiveButton(index) {
  legacyLinks.forEach(function (button, i) {
    if (i === index) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
if (legacyLinks) {
  legacyLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = event.target.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        event.preventDefault();
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

const openModalBtnLegacyAll = document.querySelectorAll(".open-modalBtn");
const legacyModal = document.querySelector(".legacy-detail-modal");
const closeModalBtnLegacy = document.querySelector(
  ".legacy-detail-modal .close"
);
const bodyLegacy = document.querySelector("body");

if (openModalBtnLegacyAll) {
  openModalBtnLegacyAll.forEach((modalka) => {
    modalka.addEventListener("click", function (e) {
      legacyModal.style.display = "block";
      bodyLegacy.style.background = "rgba(0, 0, 0, 0.5)";
    });
  });
}
if (closeModalBtnLegacy) {
  closeModalBtnLegacy.addEventListener("click", function () {
    legacyModal.style.display = "none";
    bodyLegacy.style.background = "#eee";
  });
}

const openModalNews = document.querySelector(".open-newsModal");
const newsModal = document.querySelector(".news-detail-modal");
const closeModalNews = document.querySelector(".news-detail-modal .close");
const bodyMdoal = document.querySelector("body");

if (openModalNews) {
  openModalNews.addEventListener("click", function () {
    newsModal.style.display = "block";
    bodyMdoal.style.background = "rgba(0, 0, 0, 0.5)";
  });
}
if (closeModalNews) {
  closeModalNews.addEventListener("click", function () {
    newsModal.style.display = "none";
    bodyMdoal.style.background = "#eee";
  });
}

const openModalProject = document.querySelectorAll(
  "#social-project-content .open-newsModal"
);
const newsModalProject = document.querySelector(
  "#social-project-content .news-detail-modal"
);
const closeModalProject = document.querySelector(
  "#social-project-content .news-detail-modal .close"
);
const bodyModalProject = document.querySelector("body");

if (openModalProject) {
  openModalProject.forEach((modalka) => {
    modalka.addEventListener("click", function (e) {
      newsModalProject.style.display = "block";
      bodyLegacy.style.background = "rgba(0, 0, 0, 0.5)";
    });
  });
}
if (closeModalProject) {
  closeModalProject.addEventListener("click", function () {
    newsModalProject.style.display = "none";
    bodyLegacy.style.background = "#eee";
  });
}

const header = document.querySelector("header");

const main = document.querySelector("main");

const hamburgerIcon = document.querySelector(".hamburger");

const closeHamburgerDropdown = document.querySelector(
  ".close-hamburger-dropdown"
);
const svgIconBtn = document.querySelector("#closee .close-svg-icon");
if (hamburgerIcon) {
  hamburgerIcon.addEventListener("click", function () {
    header.style.display = "none";
    main.style.display = "none";
    closeHamburgerDropdown.style.display = "block";
    const footerTitle = document.querySelector(".footer-title");
    const languageWrapper = document.querySelector(".language-wrapper");
    languageWrapper.classList.add("mt-6");
    let newElement = document.createElement("div");
    newElement.appendChild(footerTitle).appendChild(languageWrapper);
    closeHamburgerDropdown.parentNode.insertBefore(
      newElement,
      closeHamburgerDropdown
    );
  });
}
if (svgIconBtn) {
  svgIconBtn.addEventListener("click", function () {
    const headerElement = document.querySelector("header");

    const mainElement = document.querySelector("main");
    headerElement.style.display = "block";
    mainElement.style.display = "block";
    window.scrollTo(0, 0);
  });
}

// window.addEventListener("scroll", function () {
//   var textElement = document.querySelector(".scrolling-text");
//   var changeableText = document.querySelector(".changeable-text");
//   var scrollText = textElement || changeableText;
//   var position = scrollText && scrollText.getBoundingClientRect().top;

//   var windowHeight = window.innerHeight;

//   if (position < windowHeight) {
//     textElement && textElement.classList.add("fade");
//     changeableText && changeableText.classList.add("fade");
//   } else {
//     textElement && textElement.classList.remove("fade");
//     changeableText && changeableText.classList.remove("fade");
//   }
// });
