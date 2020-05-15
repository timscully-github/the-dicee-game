var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var changeLeftImg = (document.getElementById("img1").src = "images/dice" + randomNumber1 + ".png");
var changeRightImg = (document.getElementById("img2").src = "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.getElementById("winner").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.getElementById("winner").innerHTML = "Player 2 wins!";
} else {
    document.getElementById("winner").innerHTML = "It's a draw!";
}
