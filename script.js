// Alert Message when the page loads
window.onload = function() {
    alert("This game is best played on a phone. Enjoy!");
}

// game-start button
const gameStartButton = document.getElementById('game-start-button');
const gameStartAudio = document.getElementById('game-start-audio');
// Event Listener for the game-start-button
gameStartButton.addEventListener
(
    'click',
    function() 
        {
        gameStartAudio.play();
        gameStartButton.classList.add("fadeButton");
        }
);

// Play Area
const canvas = document.getElementById('play-area');
const ctx = canvas.getContext('2D');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;

// Campfire Image
const campfireImage = new Image();
