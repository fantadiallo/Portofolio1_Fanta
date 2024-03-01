document.addEventListener("DOMContentLoaded", function() {
    var topButton = document.getElementById("backtop");

    // Show button when scrolling down
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    // Scroll to top when button is clicked
    topButton.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
