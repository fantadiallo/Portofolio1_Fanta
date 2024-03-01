// Get the modal
var modal = document.getElementById('myModal');

// Get all images with class "imgprojects" and add click event listener
var images = document.querySelectorAll('.imgprojects img');
images.forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = 'block'; // Show the modal
        var modalImg = document.getElementById('modalImage');
        modalImg.src = this.src; // Set the source of modal image to clicked image
    });
});

// Get the close button and add click event listener to close the modal
var closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal when close button is clicked
});

// Close the modal when user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // Hide the modal if clicked outside of it
    }
});
