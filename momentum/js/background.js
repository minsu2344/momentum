const images = ['0.jpg', '1.jpg', '2.jpg'];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImagte = document.createElement('img');

bgImagte.src = `image/${chosenImage}`;

document.body.appendChild(bgImagte);