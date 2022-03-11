const images = ["0.jpg", "1.jpg", "2.jpg"];

const mainImage = images[Math.floor(Math.random() * images.length)];

const backImage = document.createElement("img");
backImage.src = `backImg/${mainImage}`;

document.body.appendChild(backImage);
