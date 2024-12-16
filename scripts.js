document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#testimonial-carousel");
  const testimonialsSection = document.querySelector("#testimonials");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the testimonials section is visible, start the carousel
          carousel.setAttribute("data-bs-ride", "carousel");
          const bootstrapCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000, //  number of seconds per slide
            ride: "carousel",
          });
        } else {
          // When the testimonials section is not visible, stop the carousel
          carousel.removeAttribute("data-bs-ride");
        }
      });
    },
    { threshold: 0.5 } // Trigger when at least 50% of the section is visible
  );

  observer.observe(testimonialsSection);
});
