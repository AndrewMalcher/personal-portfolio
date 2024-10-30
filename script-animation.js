document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".skill-item");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    skillItems.forEach((item) => {
      observer.observe(item);
    });
  });