var randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

var randomDiceimage = "dice" + randomNumber1 + ".png";

var randomImagesource = "images/" + randomDiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

var randomImagesource2 = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagesource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else 
if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML = "Its a draw";
}