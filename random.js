
let images = ["m44.png","m45.png","m50.png","m49.png","m48.png","m47.png","m46.png","m33.jpeg","m43.jpeg","m42.jpeg","m41.jpeg","m40.jpeg","m34.jpeg","m35.jpeg","m39.jpeg","m38.png","m37.png","m36.png","m21.webp","m22.webp","m23.webp","m30.webp","m29.webp","m28.webp","m27.webp","m24.webp","m25.webp","m26.webp","m1.jpeg","m2.jpeg","m3.jpeg","m4.jpeg","m5.jpeg","m6.jpeg","m7.jpeg","m8.jpeg","m9.jpeg","m10.jpeg","m11.jpeg","m12.jpeg","m13.jpeg","m14.jpeg","m15.jpeg","m16.jpeg","m17.jpeg","m18.jpeg","m19.jpeg","m20.jpeg","c21.jpeg","c22.jpeg","c23.jpeg","c24.jpeg","c25.png","c50.jpeg","c49.webp","c48.webp","c47.webp","c46.webp","c45.webp","c44.webp","c43.webp","c42.webp","c41.webp","c40.webp","c39.webp","c38.webp","c37.webp","c36.webp","c35.webp","c33.webp","c34.webp","c31.jpeg","c30.jpeg","c29.jpeg","c28.jpeg","c26.jpeg","c27.jpeg","catmeme2.jpeg","CatMemes.jpeg","catmeme3.jpeg","catmeme4.jpeg","catmeme5.jpeg","catmeme6.jpeg","catmeme7.jpeg","catmeme8.jpeg","catmeme9.jpeg","catmeme10.jpeg","catmeme11.jpeg","catmeme12.jpeg","catmeme13.jpeg","catmeme14.jpeg","catmeme15.jpeg","catmeme16.jpeg","catmeme17.jpeg","catmeme18.jpeg","catmeme19.jpeg","catmeme20.jpeg","d21.jpeg","d22.jpeg","d23.jpeg","d50.jpeg","d49.jpeg","d48.jpeg","d47.jpeg","d46.jpeg","d45.jpeg","d44.jpeg","d43.jpeg","d42.jpeg","d41.jpeg","d40.jpeg","d39.jpeg","d38.jpeg","d37.jpeg","d36.jpeg","d35.png","d34.png","d33.png","d32.jpeg","d31.jpeg","d30.jpeg","d29.jpeg","d28.jpeg","d27.jpeg","d26.jpeg","d25.jpeg","d24.jpeg","dogmeme.png","dogmeme2.jpeg","dogmeme3.png","dogmeme4.jpeg","dogmeme5.jpeg","dogmeme6.jpeg","dogmeme7.jpeg","dogmeme8.jpeg","dogmeme9.jpeg","dogmeme10.jpeg","dogmeme11.jpeg","dogmeme12.png","dogmeme13.jpeg","dogmeme14.png","dogmeme15.jpeg","dogmeme16.jpeg","dogmeme17.jpeg","dogmeme18.jpeg","dogmeme19.jpeg","dogmeme20.jpeg"];
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


//"m44.png","m45.png","m50.png","m49.png","m48.png","m47.png","m46.png","m33.jpeg","m43.jpeg","m42.jpeg","m41.jpeg","m40.jpeg","m34.jpeg","m35.jpeg","m39.jpeg","m38.png","m37.png","m36.png","m21.webp","m22.webp","m23.webp","m30.webp","m29.webp","m28.webp","m27.webp","m24.webp","m25.webp","m26.webp","m1.jpeg","m2.jpeg","m3.jpeg","m4.jpeg","m5.jpeg","m6.jpeg","m7.jpeg","m8.jpeg","m9.jpeg","m10.jpeg","m11.jpeg","m12.jpeg","m13.jpeg","m14.jpeg","m15.jpeg","m16.jpeg","m17.jpeg","m18.jpeg","m19.jpeg","m20.jpeg","c21.jpeg","c22.jpeg","c23.jpeg","c24.jpeg","c25.png","c50.jpeg","c49.webp","c48.webp","c47.webp","c46.webp","c45.webp","c44.webp","c43.webp","c42.webp","c41.webp","c40.webp","c39.webp","c38.webp","c37.webp","c36.webp","c35.webp","c33.webp","c34.webp","c31.jpeg","c30.jpeg","c29.jpeg","c28.jpeg","c26.jpeg","c27.jpeg","catmeme2.jpeg","CatMemes.jpeg","catmeme3.jpeg","catmeme4.jpeg","catmeme5.jpeg","catmeme6.jpeg","catmeme7.jpeg","catmeme8.jpeg","catmeme9.jpeg","catmeme10.jpeg","catmeme11.jpeg","catmeme12.jpeg","catmeme13.jpeg","catmeme14.jpeg","catmeme15.jpeg","catmeme16.jpeg","catmeme17.jpeg","catmeme18.jpeg","catmeme19.jpeg","catmeme20.jpeg","d21.jpeg","d22.jpeg","d23.jpeg","d50.jpeg","d49.jpeg","d48.jpeg","d47.jpeg","d46.jpeg","d45.jpeg","d44.jpeg","d43.jpeg","d42.jpeg","d41.jpeg","d40.jpeg","d39.jpeg","d38.jpeg","d37.jpeg","d36.jpeg","d35.png","d34.png","d33.png","d32.jpeg","d31.jpeg","d30.jpeg","d29.jpeg","d28.jpeg","d27.jpeg","d26.jpeg","d25.jpeg","d24.jpeg","dogmeme.png","dogmeme2.jpeg","dogmeme3.png","dogmeme4.jpeg","dogmeme5.jpeg","dogmeme6.jpeg","dogmeme7.jpeg","dogmeme8.jpeg","dogmeme9.jpeg","dogmeme10.jpeg","dogmeme11.jpeg","dogmeme12.png","dogmeme13.jpeg","dogmeme14.png","dogmeme15.jpeg","dogmeme16.jpeg","dogmeme17.jpeg","dogmeme18.jpeg","dogmeme19.jpeg","dogmeme20.jpeg"
