var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var changeLeftImg = (document.getElementById("img1").src = "images/dice" + randomNumber1 + ".png");
var changeRightImg = (document.getElementById("img2").src = "images/dice" + randomNumber2 + ".png");
