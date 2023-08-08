
let images = ["catmeme2.jpeg","CatMemes.jpeg","catmeme3.jpeg","catmeme4.jpeg","catmeme5.jpeg","catmeme6.jpeg","catmeme7.jpeg","catmeme8.jpeg","catmeme9.jpeg","catmeme10.jpeg","catmeme11.jpeg","catmeme12.jpeg","catmeme13.jpeg","catmeme14.jpeg","catmeme15.jpeg","catmeme16.jpeg","catmeme17.jpeg","catmeme18.jpeg","catmeme19.jpeg","catmeme20.jpeg","dogmeme.png","dogmeme2.jpeg","dogmeme3.png","dogmeme4.jpeg","dogmeme5.jpeg","dogmeme6.jpeg","dogmeme7.jpeg","dogmeme8.jpeg","dogmeme9.jpeg","dogmeme10.jpeg","dogmeme11.jpeg","dogmeme12.png","dogmeme13.jpeg","dogmeme14.png","dogmeme15.jpeg","dogmeme16.jpeg","dogmeme17.jpeg","dogmeme18.jpeg","dogmeme19.jpeg","dogmeme20.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m4.jpeg","m5.jpeg","m6.jpeg","m7.jpeg","m8.jpeg","m9.jpeg","m10.jpeg","m11.jpeg","m12.jpeg","m13.jpeg","m14.jpeg","m15.jpeg","m16.jpeg","m17.jpeg","m18.jpeg","m19.jpeg","m20.jpeg"];

document.getElementById("myBtn").addEventListener("click",generate)

function generate() {
    document.getElementById("myImg").src = images[Math.floor(Math.random() * images.length)];
}