//funtion to change font size
function fontchange(n) {
    var paragraph = document.getElementById('body');
    paragraph.style.fontSize = n + "em";
}

var buttons = document.querySelector(".buttons");
var button = buttons.querySelectorAll(".button");

//to keep selected font size highlighted
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active"
    })
}

//Function to change theme
function changeColor(bgColor, fontColor, desboxColor, boxbgColor, titleBox) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;

    //loop in the class to find element and replace from the function input
    var elements = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = desboxColor;
    }

    //loop in the class to find element
    var elements = document.getElementsByClassName("gallery-item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = boxbgColor;
    }

    //loop in the class to find element
    var elements = document.getElementsByClassName("box_title");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = titleBox;
    }
}

//Random Colour generator for background
function randomBgColor(bgColor, fontColor, desboxColor, boxbgColor, titleBox) {
    document.body.style.backgroundColor =
        'rgb( ' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) +
        ',' + Math.round(Math.random() * 255) + ')';

//https://youtu.be/xnUrOjV6t6g

//Math.round(Math.random() * 255)
//generate nandom number between 0-255
//generate 3 numbers and make a rgb value
//then assign that to "body.style.backgroundColor"
//kept other colours closer to white bacuse of unknown random colour

    document.body.style.color = fontColor;

    var elements = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = desboxColor;
    }

    var elements = document.getElementsByClassName("gallery-item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = boxbgColor;
    }

    var elements = document.getElementsByClassName("box_title");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = titleBox;
    }
}