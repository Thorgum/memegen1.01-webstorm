let images = ["CatMemes.jpeg"];
//
// document.getElementById("myBtn").addEventListener("click", () => {
//     document.getElementById("myImg").src = images[Math.floor(Math.random() * images.length)];
// })

document.getElementById("myBtn").addEventListener("click",generate)

function generate() {
    console.log("clicked generate")
    document.getElementById("myImg").src = images[Math.floor(Math.random() * images.length)];
}