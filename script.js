const primaryLayer = document.querySelector('.main-layer');
const secondaryLayer = document.querySelector('.secondary-layer');
secondaryLayer.addEventListener('mousemove', (e) => {
  let maskSize = 100;
  if (e.target.classList.contains('content')) maskSize = 500;

  secondaryLayer.style.setProperty('--r', `${maskSize}px`);
  secondaryLayer.style.setProperty('--x', `${e.clientX - maskSize / 2}px`);
  secondaryLayer.style.setProperty('--y', `${e.clientY - maskSize / 2}px`);
})
