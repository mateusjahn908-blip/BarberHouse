const header = document.getElementById("header");
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");
const year = document.getElementById("year");


/* =========================
   ANO DO RODAPÉ
========================= */

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================
   MENU MOBILE
========================= */

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");

    const aberto = nav.classList.contains("active");

    menuButton.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});


/* Fecha o menu depois de clicar em um link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");

        menuButton.setAttribute(
            "aria-label",
            "Abrir menu"
        );
    });

});


/* =========================
   CABEÇALHO AO ROLAR
========================= */

function atualizarHeader() {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", atualizarHeader);

atualizarHeader();


/* =========================
   ESCONDER MENU AO CLICAR FORA
========================= */

document.addEventListener("click", event => {

    const clicouNoMenu =
        nav.contains(event.target) ||
        menuButton.contains(event.target);

    if (!clicouNoMenu) {
        nav.classList.remove("active");
    }

});


/* =========================
   ESC + FECHAR MENU
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        nav.classList.remove("active");
    }

});