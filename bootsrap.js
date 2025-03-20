document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated, .slide-left, .slide-right");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add animation class
            } else {
                entry.target.classList.remove("visible"); // Remove animation class when scrolling back up
            }
        });
    }, { threshold: 0.3 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
