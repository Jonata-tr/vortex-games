const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// Altera a imagem do banner do "Descubra jogos para passar dias jogando"
// usa do closest para poder funcionar isoladamente, idependente de quantas slides tenham
const slide = document.querySelectorAll("[data-slide-banner]");

slide.forEach((gallery) => {
  const images = gallery
    .closest(".slide")
    .querySelectorAll("[data-galery-image]");

  images.forEach((img, i) => {
    img.addEventListener("click", () => {
      const banner = img
        .closest("[data-slide-banner]")
        .querySelector("[data-banner]");

      banner.style.backgroundImage = `url("./img/galeria-princial/${img.dataset.galeryImage}${i + 1}-slide.jpg")`;
      changeActiveState(img, i);
    });
  });
});

function changeActiveState(img, index) {
  const gallery = img
    .closest(".slide-images-galery")
    .querySelectorAll(".image-galery")
    .forEach((imgMini, i) => {
      if (index === i) imgMini.classList.add("active");
      else imgMini.classList.remove("active");
    });
}
