"use strict";

// Project Carousel
let projectIndex = 1;
displayProject(projectIndex);

function nextProject(num) {
  displayProject((projectIndex += num));
}

function currentProject(num) {
  displayProject((projectIndex = num));
}

function displayProject(num) {
  let i;
  let projects = document.querySelectorAll(".projectItem");
  let dots = document.querySelectorAll(".dot");
  if (num > projects.length) {
    projectIndex = 1;
  }
  if (num < 1) {
    projectIndex = projects.length;
  }
  for (i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  projects[projectIndex - 1].style.display = "flex";
  dots[projectIndex - 1].className += " active";
}

// Arrow keys to scroll project carousel

// 37 arrowLeft
// 39 arrowRight

// Add activeLink class to displaying section
// let header = document.querySelector("#headerContainer");
// console.log(header.clientHeight);
// let content = document.querySelector("#contentContainer");
// let carousel = document.querySelector("#projectCarousel");
// carousel.addEventListener("onkeyup", function(event) {
//   console.log(event);
// });
// content.addEventListener("scroll", function() {
//   console.log(content.scrollHeight);

//   let scrollHeight = content.scrollHeight / 3;
//   if (content.scrollTop < scrollHeight) {
//     let aboutLink = document.getElementById("aboutLink");
//     aboutLink.classList.add("activeLink");
//     projectsLink.classList.remove("activeLink");
//     contactLink.classList.remove("activeLink");
//   } else if (
//     content.scrollTop >= scrollHeight &&
//     content.scrollTop < scrollHeight * 2
//   ) {
//     let projectsLink = document.getElementById("projectsLink");
//     projectsLink.classList.add("activeLink");
//     aboutLink.classList.remove("activeLink");
//     contactLink.classList.remove("activeLink");
//   } else if (content.scrollTop < scrollHeight * 3) {
//     let contactLink = document.getElementById("contactLink");
//     contactLink.classList.add("activeLink");
//     aboutLink.classList.remove("activeLink");
//     projectsLink.classList.remove("activeLink");
//   }
// });
// content.onscroll = function() {
//   if (content.scrollTop < 582) {
//     let aboutLink = document.getElementById("aboutLink");
//     aboutLink.classList.add("activeLink");
//     projectsLink.classList.remove("activeLink");
//     contactLink.classList.remove("activeLink");
//   } else if (content.scrollTop >= 582 && content.scrollTop < 1159) {
//     let projectsLink = document.getElementById("projectsLink");
//     projectsLink.classList.add("activeLink");
//     aboutLink.classList.remove("activeLink");
//     contactLink.classList.remove("activeLink");
//   } else if (content.scrollTop >= 1159) {
//     let contactLink = document.getElementById("contactLink");
//     contactLink.classList.add("activeLink");
//     aboutLink.classList.remove("activeLink");
//     projectsLink.classList.remove("activeLink");
//   }
// };

// Check if device is mobile or not
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// // Smooth Scrolling
// function smoothScroll(target, duration) {
//   let targetElement = document.querySelector(target);
//   console.log(targetElement);
//   let targetPosition = targetElement.getBoundingClientRect().top;
//   console.log(targetPosition);

//   let startingPosition = window.pageYOffset;
//   console.log(window.pageYOffset);
//   console.log(startingPosition);
//   let distance = targetPosition - startingPosition;
//   let startTime = null;

//   function scrollAnimation(currentTime) {
//     console.log(currentTime);
//     if (startTime === null) {
//       startTime = currentTime;
//     }
//     let timeElasped = currentTime - startTime;
//     let run = ease(timeElasped, startingPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElasped < duration) {
//       requestAnimationFrame(scrollAnimation);
//     }
//   }
//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t * t * t * t + b;
//     t -= 2;
//     return (c / 2) * (t * t * t * t * t + 2) + b;
//   }

//   requestAnimationFrame(scrollAnimation);
// }

// let projectLink = document.querySelector("#projectsLink");
// projectLink.addEventListener("click", function() {
//   smoothScroll("#projects", 1000);
// });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header
var header = document.getElementById("headerContainer");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
