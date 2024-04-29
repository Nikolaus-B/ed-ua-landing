function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function toggleScrollToTopBtn() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (document.documentElement.scrollTop > 0) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

document
  .getElementById('scrollToTopBtn')
  .addEventListener('click', scrollToTop);

window.addEventListener('scroll', toggleScrollToTopBtn);
