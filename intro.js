window.addEventListener("load", () => {
  const intro = document.getElementById("intro-screen");
  const topCurtain = document.querySelector(".curtain-top");
  const bottomCurtain = document.querySelector(".curtain-bottom");

  setTimeout(() => {
    topCurtain.classList.add("open-top");
    bottomCurtain.classList.add("open-bottom");
  }, 3000);

  setTimeout(() => {
    intro.classList.add("hidden");
    setTimeout(() => intro.remove(), 700);
  }, 4300);
});