const socialMain = document.getElementById('socialMain');
  const socialLinks = document.querySelectorAll('.social-icons a');
  let open = false;

  socialMain.addEventListener('click', () => {
    open = !open;
    const total = socialLinks.length;
    socialLinks.forEach((link, index) => {
      const angle = (index / total) * 2 * Math.PI; // angle en radians
      const radius = open ? 80 : 0; // distance du cercle
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      link.style.transform = `translate(${ -x}px, ${ -y}px)`; // -x,-y pour bas à droite
      link.style.opacity = open ? 1 : 0;
    });
  });