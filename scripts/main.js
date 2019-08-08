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

// // Smooth Scroll
// const scroll = new SmoothScroll('.navBar a[href*="#"]');
