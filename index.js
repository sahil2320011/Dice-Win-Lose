var nos= Math.floor( (Math.random() * 6) + 1);
var randomImageSource = "images/dice" +  nos + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);

var nos2 = Math.floor( Math.random()*6 + 1 );

while(nos2==nos){
    nos2 = Math.floor( Math.random()*6 + 1 );
}

var randomImageSource2 = "images/dice" + nos2 + ".png" ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);


if(nos>nos2){
    document.querySelector("h1").innerHTML="Player 1 Win";
}else{
    document.querySelector("h1").innerHTML="Player 2 Win";
}