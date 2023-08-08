

let images = ["dogmeme.png","dogmeme2.jpeg","dogmeme3.png","dogmeme4.jpeg","dogmeme5.jpeg","dogmeme6.jpeg","dogmeme7.jpeg","dogmeme8.jpeg","dogmeme9.jpeg","dogmeme10.jpeg","dogmeme11.jpeg","dogmeme12.png","dogmeme13.jpeg","dogmeme14.png","dogmeme15.jpeg","dogmeme16.jpeg","dogmeme17.jpeg","dogmeme18.jpeg","dogmeme19.jpeg","dogmeme20.jpeg"];

document.getElementById("myBtn").addEventListener("click",generate)

function generate() {
    document.getElementById("myImg").src = images[Math.floor(Math.random() * images.length)];
}