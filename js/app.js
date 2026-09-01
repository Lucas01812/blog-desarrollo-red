const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => menu.classList.toggle('abierto'));
}
const demoBtn = document.getElementById('demoBtn');
const resultado = document.getElementById('resultado');
if (demoBtn && resultado) {
  demoBtn.addEventListener('click', () => {
    resultado.textContent = 'JavaScript ha respondido al evento y ha modificado el DOM.';
  });
}
