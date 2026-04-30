const hamburgerBtn = document.querySelector("#hamburger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerContent = document.querySelector(".hamburger-content");
const navLinks = document.querySelector(".nav-right .nav-links");
const navRight = document.querySelector(".nav-right");
const navBtns = document.querySelector(".nav-btns");
const navBtn1 = document.querySelector(".nav-btns .btn-filled");
const navBtn2 = document.querySelector(".nav-btns .btn-unfilled");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  hamburgerContent.classList.toggle("active");
});
const mq1 = window.matchMedia("(max-width: 996px)");
const mq2 = window.matchMedia("(max-width: 670px)");
const mq3 = window.matchMedia("(max-width: 500px)");

function handleMq1() {
  if (mq1.matches) {
    hamburgerMenu.style.display = "block";
    hamburgerBtn.style.display = "block";
    if (navRight.contains(navLinks)) navRight.removeChild(navLinks);
    hamburgerContent.appendChild(navLinks);
  } else {
    hamburgerMenu.style.display = "none";
    hamburgerBtn.style.display = "none";
    if (hamburgerContent.contains(navLinks))
      hamburgerContent.removeChild(navLinks);
    if (navRight.contains(navBtns)) {
      navRight.insertBefore(navLinks, navBtns);
    } else {
      navRight.appendChild(navLinks);
    }
    hamburgerContent.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
}
function handleMq2() {
  if (mq2.matches) {
    if (navBtns.contains(navBtn2)) navBtns.removeChild(navBtn2);
    navBtn2.classList.add("offScreen");
    hamburgerContent.appendChild(navBtn2);
  } else {
    if (hamburgerContent.contains(navBtn2)) {
      navBtn2.classList.remove("offScreen");
      hamburgerContent.removeChild(navBtn2);
      navBtns.appendChild(navBtn2);
    }
  }
}
function handleMq3() {
  if (mq3.matches) {
    if (navBtns.contains(navBtn1)) navBtns.removeChild(navBtn1);
    navBtn1.classList.add("offScreen");
    hamburgerContent.insertBefore(navBtn1, navBtn2);
  } else {
    if (hamburgerContent.contains(navBtn1)) {
      navBtn1.classList.remove("offScreen");
      hamburgerContent.removeChild(navBtn1);
      navBtns.appendChild(navBtn1);
    }
  }
}
function checkScreenSize() {
  handleMq1();
  handleMq2();
  handleMq3();
}

[mq1, mq2, mq3].forEach(mq => {
    mq.addEventListener("change", checkScreenSize)
})

document.addEventListener("DOMContentLoaded", checkScreenSize);

document.addEventListener("click", function (event) {
  if (
    !hamburgerBtn.contains(event.target) &&
    !hamburgerContent.contains(event.target)
  ) {
    hamburgerContent.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
});

hamburgerContent.addEventListener("click", function (event) {
  if (event.target.matches("a")) {
    hamburgerContent.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
});
