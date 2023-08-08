
let images = ["catmeme2.jpeg","CatMemes.jpeg","catmeme3.jpeg","catmeme4.jpeg","catmeme5.jpeg","catmeme6.jpeg","catmeme7.jpeg","catmeme8.jpeg","catmeme9.jpeg","catmeme10.jpeg","catmeme11.jpeg","catmeme12.jpeg","catmeme13.jpeg","catmeme14.jpeg","catmeme15.jpeg","catmeme16.jpeg","catmeme17.jpeg","catmeme18.jpeg","catmeme19.jpeg","catmeme20.jpeg"];

document.getElementById("myBtn").addEventListener("click",generate)

function generate() {
    document.getElementById("myImg").src = images[Math.floor(Math.random() * images.length)];
}