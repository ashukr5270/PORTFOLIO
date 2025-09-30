// ========== 3D Tilt Effect ==========
const introContent = document.querySelector(".intro-content");
const profileImg = document.querySelector(".intro-img img");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;

  introContent.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  profileImg.style.transform = `rotateY(${-x}deg) rotateX(${-y}deg) scale(1.05)`;
});

document.addEventListener("mouseleave", () => {
  introContent.style.transform = "rotateY(0deg) rotateX(0deg)";
  profileImg.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
});

// ========== Typed.js ==========
const typed = new Typed(".multiple-text", {
  strings: [  "Software Engineer", "Frontend Developer", "Web Designer"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 2000,
  loop: true
});

// ========== Scroll Reveal ==========
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".intro-content, .heading", { origin: "top" });
ScrollReveal().reveal(".intro-img, .skills-box, .projects-box, .experience-box", { origin: "bottom" });
ScrollReveal().reveal(".achievements-box, .education-box", { origin: "right" });
ScrollReveal().reveal(".contact form", { origin: "left" });
