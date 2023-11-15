document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.series-card');

  function showcards(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        setTimeout(() => {
          card.classList.add('visible');
        }, 200 * index);
        observer.unobserve(card);
      }
    });
  }

  const observer = new IntersectionObserver(showcards, { threshold: 0.2 });

  cards.forEach((card) => {
    observer.observe(card);
  });
});