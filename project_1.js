const animationSection = document.querySelector('.feat_grid');

window.addEventListener('scroll', () => {
  const sectionPosition = animationSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5; 

  if (sectionPosition < screenPosition) {
    animationSection.classList.add('show');
  }
});
