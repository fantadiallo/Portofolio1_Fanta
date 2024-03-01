document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var scrollTrigger = 30 * window.innerHeight / 100;

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > scrollTrigger) {
            header.classList.add("fixed-header");
        } else {
            header.classList.remove("fixed-header");
        }
    });
});
