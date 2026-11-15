
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Animated typing effect
const roles = [
    "Python Developer",
    "Data Science Enthusiast",
    "Machine Learning Learner",
    "AI Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const currentRole = roles[roleIndex];

    typing.textContent = currentRole.substring(0, charIndex);

    if (!deleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        deleting = !deleting;

        if (!deleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(typeEffect, deleting ? 1200 : 400);
    }
}

typeEffect();

// Reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".section").forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});
