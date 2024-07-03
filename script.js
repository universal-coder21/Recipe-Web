const slides = document.querySelector('.slides');
        const images = document.querySelectorAll('.slides img');
        let index = 0;

        function showNextSlide() {
            index = (index + 1) % images.length;
            slides.style.transform = `translateX(-${index * (100 + 1)}%)`; // Adjust for gap
        }

        setInterval(showNextSlide, 3000);