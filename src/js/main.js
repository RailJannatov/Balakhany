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

//
const svgIcon = document.querySelectorAll(".svg-icon");
svgIcon.forEach((svg) => {
  svg.addEventListener("click", function () {
    const contentBx = this.previousElementSibling.classList;
    contentBx.toggle("active");
    if (contentBx.contains("active")) {
      this.innerHTML = "";
      this.innerHTML = `
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="52" height="52" rx="26" fill="#C59B48" fill-opacity="0.12"/>
      <path d="M18 34L34 18M34 18H23.3333M34 18V28.6667" stroke="#C59B48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#C59B48" stroke-opacity="0.12"/>
      </svg>`;
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

let paginationNumbers = document.querySelectorAll(".pagination-number");
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
