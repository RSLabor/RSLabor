// script.js
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');

let currentIndex = 0;
const totalImages = images.length;

setInterval(() => {
    images[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.transform = 'translateX(0)';
}, 3000); // zmień czas przewijania na dowolną wartość w milisekundach (np. co 3 sekundy)
