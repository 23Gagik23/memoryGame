const startButton = document.getElementById('start-button');
const popUp = document.getElementById('popUp');
const opacity = document.getElementById('opacity');
const sizeForm = document.getElementById('sizeForm');

startButton.addEventListener('click', () => {

    popUp.style.visibility = 'visible'
    opacity.style.backdropFilter = 'blur(8px)'

});

sizeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const input = document.getElementById('boxSizeInput').value;
    const boxSize = parseInt(input);

    if (isNaN(boxSize) || boxSize < 4 || boxSize === 5 || boxSize > 6) {
        alert('Please select a valid number 4 (4x4) or 6 (6x6)');
        return;
    }

    // Redirect to the memory game page with boxSize as a URL parameter
    window.location.href = `Memory_game.html?boxSize=${boxSize}`;
});
    

