// Animasi Card Fade-In
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  setTimeout(() => {
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  }, 100 * index);
});

// Scroll to Top Button
const topBtn = document.getElementById('topBtn');

window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
