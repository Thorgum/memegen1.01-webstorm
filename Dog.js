

let images = ["d21.jpeg","d22.jpeg","d23.jpeg","d50.jpeg","d49.jpeg","d48.jpeg","d47.jpeg","d46.jpeg","d45.jpeg","d44.jpeg","d43.jpeg","d42.jpeg","d41.jpeg","d40.jpeg","d39.jpeg","d38.jpeg","d37.jpeg","d36.jpeg","d35.png","d34.png","d33.png","d32.jpeg","d31.jpeg","d30.jpeg","d29.jpeg","d28.jpeg","d27.jpeg","d26.jpeg","d25.jpeg","d24.jpeg","dogmeme.png","dogmeme2.jpeg","dogmeme3.png","dogmeme4.jpeg","dogmeme5.jpeg","dogmeme6.jpeg","dogmeme7.jpeg","dogmeme8.jpeg","dogmeme9.jpeg","dogmeme10.jpeg","dogmeme11.jpeg","dogmeme12.png","dogmeme13.jpeg","dogmeme14.png","dogmeme15.jpeg","dogmeme16.jpeg","dogmeme17.jpeg","dogmeme18.jpeg","dogmeme19.jpeg","dogmeme20.jpeg"];

document.getElementById("myBtn").addEventListener("click",generate)

function generate() {
    document.getElementById("myImg").src = images[Math.floor(Math.random() * images.length)];
}