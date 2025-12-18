document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const imgs = carousel.querySelectorAll(".carousel-img");
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");
    let idx = 0;

    const show = (i) => {
      imgs[idx].classList.remove("active");
      idx = (i + imgs.length) % imgs.length;
      imgs[idx].classList.add("active");
    };

    prev.addEventListener("click", () => show(idx - 1));
    next.addEventListener("click", () => show(idx + 1));

    // Keyboard arrows when carousel is on screen
    window.addEventListener("keydown", (e) => {
      const rect = carousel.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!visible) return;

      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  });
});
