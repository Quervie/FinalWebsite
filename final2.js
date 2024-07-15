document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = index;
        }
        carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    document.querySelector('.carousel-button.right').addEventListener('click', function () {
        showSlide(currentIndex + 1);
    });

    document.querySelector('.carousel-button.left').addEventListener('click', function () {
        showSlide(currentIndex - 1);
    });
});