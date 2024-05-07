var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];


function changeColor() {

    var randomIndex = Math.floor(Math.random() * colors.length);

    var color = colors[randomIndex];

    document.getElementById("colorDisplay").style.backgroundColor = color;
}
