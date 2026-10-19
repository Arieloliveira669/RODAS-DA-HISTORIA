// Linhas de velocidade no fundo
function createSpeedLines() {
  const container = document.getElementById('speedLines');
  for (let i = 0; i < 12; i++) {
    const line = document.createElement('div');
    line.classList.add('speed-line');
    line.style.top = Math.random() * 100 + '%';
    line.style.width = Math.random() * 300 + 100 + 'px';
    line.style.animationDuration = (Math.random() * 3 + 2) + 's';
    line.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(line);
  }
}
createSpeedLines();

// Animação de entrada ao scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section-header, .text-block, .timeline-item, .feature-card, .race-card, .v-card, .mil-card, .speed-record').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Navbar shrink no scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 80) {
    nav.style.padding = '12px 40px';
  } else {
    nav.style.padding = '18px 40px';
  }
});
