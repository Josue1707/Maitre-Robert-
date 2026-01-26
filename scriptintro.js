window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    const content = document.getElementById("main-content");

    intro.classList.add("open");

    setTimeout(() => {
      intro.style.display = "none";
      content.style.display = "block";
      document.body.style.overflow = "auto";
    }, 1400);

  }, 2800);
});

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const content = document.getElementById("main-content");
  const siteName = document.querySelector("#intro .site-name");

  // Disparaît légèrement avant l'ouverture des rideaux
  setTimeout(() => {
    siteName.classList.add("fade-out-text");
  }, 2500); // 2,5s

  // Ouvrir les rideaux
  setTimeout(() => {
    intro.classList.add("open");

    // Après l'ouverture complète, masquer l'intro et afficher le contenu
    setTimeout(() => {
      intro.style.display = "none";
      content.style.display = "block";
      document.body.style.overflow = "auto";
    }, 1400);

  }, 2800); // rideaux commencent à s'ouvrir à 2,8s
});