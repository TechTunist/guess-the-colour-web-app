var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var pickedName = document.querySelector('#picked');
var answer = document.querySelector('#answer');
var banner = document.querySelector('#banner');
var reset = document.querySelector('#reset');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelector('.mode');




init();

function init() {
    // mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
            reset();
        });
    };

    for(var i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener('click', function() {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if(clickedColor === pickedColor) {
                answer.textContent = 'Correct!';
                resetButton.textContent = 'Play Again?';
                changeColors(clickedColor);
                banner.style.backgroundColor = clickedColor;
             } else {
                    this.style.backgroundColor = '#232323';
                    messageDisplay = 'Try Again';
                };
            });
        };
    reset();
};


function reset() {
    colors = generateRandomColors(numSquares);
    // pick a new random color
    pickedColor = pickedColor();
    // change colorDisplay to match picked color
    pickedName.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = 'colors'[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    }
    banner.style.backgroundColor = '#5c7abb';
};


// reset the game during of after winning
reset.addEventListener('click', function() {
    reset();
});


function changeColors(color) {
    // loop through all squares to change color to winning color
    for(var i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};



function pickColor() {
    var randomColor = Math.floor(Math.random() * colors.length)
    return colors[randomColor]
};



function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i=0; i <num; i++){
        arr.push(randomColor())
    }
    return arr;
};



function randomColor() {
    // pick random rgb values between 0 and 255
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
};
