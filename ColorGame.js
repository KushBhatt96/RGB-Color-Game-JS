var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1_js = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1_js.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    for(var i =0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1_js.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    for(var i =0; i< squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetBtn.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of the squares
    for(var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1_js.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];    //Any time you see .background change it to .backgroundColor
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetBtn.textContent = "Play Again?";
            h1_js.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
        }
        else{
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = "Try Again!"
        }
    })
}

function changeColors(color){
    //loop through all square
    for (var i = 0; i < color.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i< num; i++){
        //get random color and push into array
        arr[i] = randomColor();
        //can also use arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    red_val = String(Math.floor(Math.random()*255));
    //pick a "green" from 0-255
    green_val = String(Math.floor(Math.random()*255));
    //pick a "blue" from 0-255
    blue_val = String(Math.floor(Math.random()*255));

    return "rgb(" + red_val + ", " + green_val + ", " + blue_val + ")";
}