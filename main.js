
let images = ["c21.jpeg","c22.jpeg","c23.jpeg","c24.jpeg","c25.png","c50.jpeg","c49.webp","c48.webp","c47.webp","c46.webp","c45.webp","c44.webp","c43.webp","c42.webp","c41.webp","c40.webp","c39.webp","c38.webp","c37.webp","c36.webp","c35.webp","c33.webp","c34.webp","c31.jpeg","c30.jpeg","c29.jpeg","c28.jpeg","c26.jpeg","c27.jpeg","catmeme2.jpeg","CatMemes.jpeg","catmeme3.jpeg","catmeme4.jpeg","catmeme5.jpeg","catmeme6.jpeg","catmeme7.jpeg","catmeme8.jpeg","catmeme9.jpeg","catmeme10.jpeg","catmeme11.jpeg","catmeme12.jpeg","catmeme13.jpeg","catmeme14.jpeg","catmeme15.jpeg","catmeme16.jpeg","catmeme17.jpeg","catmeme18.jpeg","catmeme19.jpeg","catmeme20.jpeg"];
const usedImages = [];

document.getElementById("myBtn").addEventListener("click", generate);

function generate() {
    if (images.length === 0) {
        alert("refresh to see them again.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    document.getElementById("myImg").src = selectedImage;
    usedImages.push(selectedImage);
    images.splice(randomIndex, 1);
}

//"c21.jpeg","c22.jpeg","c23.jpeg","c24.jpeg","c25.png","c50.jpeg","c49.webp","c48.webp","c47.webp","c46.webp","c45.webp","c44.webp","c43.webp","c42.webp","c41.webp","c40.webp","c39.webp","c38.webp","c37.webp","c36.webp","c35.webp","c33.webp","c34.webp","c31.jpeg","c30.jpeg","c29.jpeg","c28.jpeg","c26.jpeg","c27.jpeg","catmeme2.jpeg","CatMemes.jpeg","catmeme3.jpeg","catmeme4.jpeg","catmeme5.jpeg","catmeme6.jpeg","catmeme7.jpeg","catmeme8.jpeg","catmeme9.jpeg","catmeme10.jpeg","catmeme11.jpeg","catmeme12.jpeg","catmeme13.jpeg","catmeme14.jpeg","catmeme15.jpeg","catmeme16.jpeg","catmeme17.jpeg","catmeme18.jpeg","catmeme19.jpeg","catmeme20.jpeg"
