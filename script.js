// Simple JavaScript to display a greeting message when the page loads
window.onload = function() {
    alert("Welcome to My First HTML Page!");
};

// Function to change the text content of the header
function changeHeaderText() {
    const header = document.querySelector('header h1');
    header.textContent = "Hello, Welcome to My Website!";
}

// Add event listener to the header to change text when clicked
document.querySelector('header').addEventListener('click', changeHeaderText);
