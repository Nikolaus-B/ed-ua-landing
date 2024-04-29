const scrollLinks = document.querySelectorAll('.nav-link');

scrollLinks.forEach(function (scrollLink) {
  scrollLink.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
