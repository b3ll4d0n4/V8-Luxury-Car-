// Rolagem suave ao clicar nos links do menu
document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function(e) {
e.preventDefault();
const section = document.querySelector(this.getAttribute("href"));
section.scrollIntoView({ behavior: "smooth" });
});
});

// Detectar seção atual e destacar no menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(sec => {
const top = window.scrollY;
const offset = sec.offsetTop - 100;
const height = sec.offsetHeight;

if (top >= offset && top < offset + height) {
current = sec.getAttribute("id");
}
});

navLinks.forEach(a => {
a.classList.remove("active");
if (a.getAttribute("href") === `#${current}`) {
a.classList.add("active");
}
});
});

// Efeito de fade-in nos carros ao aparecer na tela
const observar = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("aparecer");
}
});
});

document.querySelectorAll(".carro").forEach(carro => {
observar.observe(carro);
});
