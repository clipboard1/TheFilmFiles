document.addEventListener('DOMContentLoaded', function() {
  const members = document.querySelectorAll('.cast-member');

  function showMembers(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const member = entry.target;
        setTimeout(() => {
          member.classList.add('visible');
        }, 200 * index);
        observer.unobserve(member);
      }
    });
  }

  const observer = new IntersectionObserver(showMembers, { threshold: 0.2 });

  members.forEach((member) => {
    observer.observe(member);
  });
});