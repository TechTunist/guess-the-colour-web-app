var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var pickedName = document.querySelector('#picked');
var answer = document.querySelector('#answer');
var banner = document.querySelector('#banner');
var reset = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');




init();

function init() {
    // assign target color to title
    pickedName.textContent = pickedColor;

    setUpEasyButton();
    setUpHardButton();
    setUpSquares();
}


// assign colors to squares
function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        // add click listeners to squares
        squares[i].addEventListener('click', function(){
            userChoice = this.style.backgroundColor;
        if (userChoice === pickedColor) {
            answer.textContent = 'Correct';
            banner.style.backgroundColor = userChoice;
            changeColors(userChoice);
            reset.textContent = 'Play Again?';
            }
        else {
            answer.textContent = 'Try Again';
            banner.style.backgroundColor = '';
            this.style.backgroundColor = '#232323';
            }
        });
    };
};



// Create an easy button that changes the squares display to 3
function setUpEasyButton(){
    easyBtn.addEventListener('click', function(){
        easyBtn.classList.add('selected');
        easyBtn.classList.remove('deselected');
        hardBtn.classList.add('deselected');
        hardBtn.classList.remove('selected');
        answer.textContent = '';
        numSquares = 3;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        pickedName.textContent = pickedColor;
        banner.style.backgroundColor = '';
        for (var i=0; i<squares.length; i++){
            if(colors[i]){
                squares[i].style.backgroundColor = colors[i];
            }
            else {
                squares[i].style.display = 'none';
            }
        }
        resetClick();
    });
}

// Create a hard button that changes the squares display to 6
function setUpHardButton(){
    hardBtn.addEventListener('click', function(){
        hardBtn.classList.add('selected');
        hardBtn.classList.remove('deselected');
        easyBtn.classList.remove('selected');
        easyBtn.classList.add('deselected');
        answer.textContent = '';
        numSquares = 6;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        pickedName.textContent = pickedColor;
        banner.style.backgroundColor = '';
        for (var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        }
        resetClick();
    });
}



function resetClick() {
    answer.textContent = '';
    reset.textContent = 'New Colors';
    // reset the game during of after winning
    reset.addEventListener('click', function() {
        // generate new colors to squares
        colors = generateRandomColors(numSquares);

        // pick new color from array
        pickedColor = pickColor();

        // change title display to match picked color
        pickedName.textContent = pickedColor;

        // change banner background back to default
        banner.style.backgroundColor = '';

        // change squares to randon colors
        for (var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
        }
    });
}



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



// reset the game during of after winning
reset.addEventListener('click', function() {
    resetClick();
});
