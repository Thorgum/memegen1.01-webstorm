
let images = ["m44.png","m45.png","m50.png","m49.png","m48.png","m47.png","m46.png","m33.jpeg","m43.jpeg","m42.jpeg","m41.jpeg","m40.jpeg","m34.jpeg","m35.jpeg","m39.jpeg","m38.png","m37.png","m36.png","m21.webp","m22.webp","m23.webp","m30.webp","m29.webp","m28.webp","m27.webp","m24.webp","m25.webp","m26.webp","m1.jpeg","m2.jpeg","m3.jpeg","m4.jpeg","m5.jpeg","m6.jpeg","m7.jpeg","m8.jpeg","m9.jpeg","m10.jpeg","m11.jpeg","m12.jpeg","m13.jpeg","m14.jpeg","m15.jpeg","m16.jpeg","m17.jpeg","m18.jpeg","m19.jpeg","m20.jpeg"];
const usedImages = [];

document.getElementById("myBtn").addEventListener("click", generate);

function generate() {
    if (images.length === 0) {
        alert(" refresh to see them again.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    document.getElementById("myImg").src = selectedImage;
    usedImages.push(selectedImage);
    images.splice(randomIndex, 1);
}
//"m44.png","m45.png","m50.png","m49.png","m48.png","m47.png","m46.png","m33.jpeg","m43.jpeg","m42.jpeg","m41.jpeg","m40.jpeg","m34.jpeg","m35.jpeg","m39.jpeg","m38.png","m37.png","m36.png","m21.webp","m22.webp","m23.webp","m30.webp","m29.webp","m28.webp","m27.webp","m24.webp","m25.webp","m26.webp","m1.jpeg","m2.jpeg","m3.jpeg","m4.jpeg","m5.jpeg","m6.jpeg","m7.jpeg","m8.jpeg","m9.jpeg","m10.jpeg","m11.jpeg","m12.jpeg","m13.jpeg","m14.jpeg","m15.jpeg","m16.jpeg","m17.jpeg","m18.jpeg","m19.jpeg","m20.jpeg"
