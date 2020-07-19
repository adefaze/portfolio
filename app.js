const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links");

  //   const containerHeight = linksContainer.getBoundingClientRect().height;
  //   const linksHeight = links.getBoundingClientRect().height;

  //   if (containerHeight == 0) {
  //     linksContainer.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainer.style.height = 0;
  //   }
});

/* ===== fixed navbar =====*/
const navBar = document.querySelector(".header");
const topLink = document.querySelector(".top");

window.addEventListener("scroll", () => {
  scrollHeight = window.pageYOffset;
  navbarHeight = navBar.getBoundingClientRect().height;

  //   if (scrollHeight > navbarHeight) {
  //     navBar.classList.add("fixed-nav");
  //   } else {
  //     navBar.classList.remove("fixed-nav");
  //   }

  if (scrollHeight > 500) {
    topLink.classList.add("show-top");
  } else {
    topLink.classList.remove("show-top");
  }
});

/* === smooth scrolling ====*/
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //prevent default
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);

    //get the element'
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 100) {
      position = position + navHeight;
    }

    window.scrollTo({
      top: position,
      left: 0,
    });
    linksContainer.style.height = 0;
  });
});

//reveal on scroll
ScrollReveal().reveal(".links");

// ScrollReveal().reveal(".greeting-title", { delay: 700 });
ScrollReveal().reveal(".dot", { delay: 1000 });

ScrollReveal().reveal(".heading", { delay: 200 });
ScrollReveal().reveal(".para", { delay: 500 });

ScrollReveal().reveal(".item-one", { delay: 500 });
ScrollReveal().reveal(".item-two", { delay: 700 });
ScrollReveal().reveal(".item-three", { delay: 900 });

//type it effect

new TypeIt(".greeting-title", {
  speed: 200,
  // loop: true,
}).go();
