document.addEventListener('DOMContentLoaded', function () {
    const newsletterItems = document.querySelectorAll('.newsletter-item');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        newsletterItems.forEach((item) => {
            if (isElementInViewport(item)) {
                item.classList.add('visible');
            }
        });
    }

    // Initial check when the page loads
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
});
