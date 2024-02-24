 /*
        const body = document.querySelector('body');
        const toggle = document.getElementById('toggle');

        toggle.onclick = function(){
            toggle.classList.toggle('active')
            body.classList.toggle('active')
        }
        */

        

        const arrowBtns = document.querySelectorAll(".slider i");
        const firstCardWidth = cards.querySelector(".card").offsetWidth;

        arrowBtns.forEach(btn => {
            btn.addEventListener("click",() => {
            cards.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });


        const switchBtn = document.getElementById('switch');

        switchBtn.addEventListener('change', () => {
            if (switchBtn.checked) {
                document.body.classList.add('light-mode');
            } else {
                document.body.classList.remove('light-mode');
            }
        });


        const slides = document.querySelectorAll('.slide');
        const labels = document.querySelectorAll('#checkbox label');

        let currentSlide = 0;

        function showSlide(n) {
            slides.forEach((slide, index) => {
                slide.style.display = 'none';
                labels[index].classList.remove('active');
            });
            
            slides[n].style.display = 'block';
            labels[n].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        document.addEventListener('DOMContentLoaded', function() {
            nextSlide(); // Show the first slide when the page loads
        
            setInterval(nextSlide, 10000); // Start the auto slide immediately
        });

        labels.forEach((label, index) => {
            label.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });


