// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Timeline card toggle
function toggleCard(card) {
  const detail = card.querySelector('.tl-detail');
  const toggle = card.querySelector('.tl-toggle');
  if (!detail) return;

  if (detail.classList.contains('open')) {
    detail.classList.remove('open');
    card.classList.remove('expanded');
    if (toggle) toggle.textContent = '+ 더 보기';
  } else {
    detail.classList.add('open');
    card.classList.add('expanded');
    if (toggle) toggle.textContent = '− 접기';
  }
}

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.domain-card, .tl-card, .content-card, .quad-card, .step, .framework-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
