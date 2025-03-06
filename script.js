// Alert Message when the page loads
window.onload = function() {
    alert("Welcome to Campfire Keeper!");
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
        gameStartAudio.play()
        }
);