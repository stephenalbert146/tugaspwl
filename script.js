function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const titles = document.querySelectorAll(".title");
  titles.forEach((title) => {
    title.style.opacity = 0;
    title.style.transform = "translateY(40px)";
    title.style.transition = "opacity 2s ease-out, transform 2s ease-out";
    observer.observe(title);
  });
});

function typeEffect(element, text, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".section_text_p1");
  const text = "Halo semuanya perkenalkan nama saya Stephen Albert bisa di panggil Apen, saya berasal dari Pekanbaru. Merantau ke Medan untuk melanjutkan pendidikan tinggi di Universitas Sumatera Utara. Kenapa saya tertarik dengan Teknologi Informasi? Karena saya dari kecil sudah tertarik dan berminat dengan sesuatu yang berbau teknologi. Saya memiliki hobi fitnes dan bermain games.";
  textElement.innerHTML = "";
  typeEffect(textElement, text, 50);
});