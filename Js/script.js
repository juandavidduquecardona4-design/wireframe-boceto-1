// R&B STORE UNIVERSO
// Agrega el número comercial con indicativo. Colombia: 57 + número, solo dígitos.
const WHATSAPP_NUMBER = "";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    const msg = encodeURIComponent("Hola, estoy interesado(a) en los productos de R&B Store Universo. ¿Me pueden brindar información?");
    if (WHATSAPP_NUMBER) {
      link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
      link.target = "_blank"; link.rel = "noopener noreferrer";
    } else {
      link.href = "#";
      link.addEventListener("click", e => {
        e.preventDefault();
        alert("Agrega el número comercial en la variable WHATSAPP_NUMBER de Js/script.js para activar este botón.");
      });
    }
  });
  const gate = document.querySelector("[data-age-gate]");
  if (gate) {
    if (sessionStorage.getItem("rbAdultConfirmed") !== "yes") gate.classList.add("show");
    gate.querySelector("[data-age-yes]")?.addEventListener("click", () => {
      sessionStorage.setItem("rbAdultConfirmed", "yes"); gate.classList.remove("show");
    });
    gate.querySelector("[data-age-no]")?.addEventListener("click", () => location.href = "../../index.html");
  }
});
