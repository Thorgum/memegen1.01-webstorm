
let images = ["m1.jpeg","m2.jpeg","m3.jpeg","m4.jpeg","m5.jpeg","m6.jpeg","m7.jpeg","m8.jpeg","m9.jpeg","m10.jpeg","m11.jpeg","m12.jpeg","m13.jpeg","m14.jpeg","m15.jpeg","m16.jpeg","m17.jpeg","m18.jpeg","m19.jpeg","m20.jpeg"];

document.getElementById("myBtn").addEventListener("click",generate)

function generate() {
    document.getElementById("myImg").src = images[Math.floor(Math.random() * images.length)];
}