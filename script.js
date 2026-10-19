// Barra de progresso de leitura + botão "voltar ao topo"
(function () {
  const bar = document.getElementById('progressBar');
  const toTop = document.getElementById('toTop');

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';

    if (scrollTop > 500) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
  }

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
