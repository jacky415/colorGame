var numSquares = 6; 
var colors = []; 
var pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("#titlename"); 
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init () {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");   
            modeButtons[1].classList.remove("selected");    
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else if(this.textContent === "Hard"){
                numSquares = 6;
            }
            reset();    
        });
    }
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again";
            }
            else if (clickedColor !== pickedColor) {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
    reset();    
}

function reset () {
    colors = generateRandomColors(numSquares); 
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none"; 
        }
    }
    h1.style.backgroundColor = "steelblue"; 
}

resetButton.addEventListener("click", function (){
    reset();
});

function changeColors(color) {
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length); 
    return colors[random];
} 

function generateRandomColors(num){
    var arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}