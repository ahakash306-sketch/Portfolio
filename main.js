// Align hero slider left edge with container content
function alignHeroSlider() {
  const container = document.querySelector('.container');
  const firstSlide = document.querySelector('.slide-card:first-child');
  if (!container || !firstSlide) return;
  firstSlide.style.marginLeft = container.getBoundingClientRect().left + 'px';
}
alignHeroSlider();
window.addEventListener('resize', alignHeroSlider);

// Scroll-triggered fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Journey expand
document.getElementById('journeyBtn').addEventListener('click', () => {
  document.querySelectorAll('.jt-item--hidden').forEach(el => el.classList.remove('jt-item--hidden'));
  document.getElementById('journeyCta').style.display = 'none';
});

// Hero slider — drag to scroll
const slider = document.getElementById('heroSlider');
let isDown = false, startX, scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = 'grabbing';
});
slider.addEventListener('mouseleave', () => { isDown = false; slider.style.cursor = ''; });
slider.addEventListener('mouseup',    () => { isDown = false; slider.style.cursor = ''; });
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  slider.scrollLeft = scrollLeft - (x - startX) * 1.5;
});

// Hero slider — smooth auto-scroll card by card
const slides = slider.querySelectorAll('.slide-card');
let currentSlide = 0;
let autoTimer;

function goToSlide(idx) {
  currentSlide = (idx + slides.length) % slides.length;
  const card = slides[currentSlide];
  const left = card.getBoundingClientRect().left - slider.getBoundingClientRect().left + slider.scrollLeft;
  slider.scrollTo({ left, behavior: 'smooth' });
}

function startAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => { if (!isDown) goToSlide(currentSlide + 1); }, 4000);
}

startAuto();
slider.addEventListener('mousedown', () => clearInterval(autoTimer));
slider.addEventListener('mouseup', startAuto);
slider.addEventListener('touchstart', () => clearInterval(autoTimer), { passive: true });
slider.addEventListener('touchend', startAuto);

