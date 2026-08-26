 
document.addEventListener("DOMContentLoaded", function () {

    const sliders =
        document.querySelectorAll(".project-slider");


    sliders.forEach(function (slider) {

        const slides =
            slider.querySelectorAll(".project-slide");

        const dots =
            slider.querySelectorAll(".dot");


 

        if (slides.length === 0) {
            return;
        }


        let currentSlide = 0;


    

        function showSlide(index) {

            slides.forEach(function (slide, i) {

                slide.classList.toggle(
                    "active",
                    i === index
                );

            });


            dots.forEach(function (dot, i) {

                dot.classList.toggle(
                    "active",
                    i === index
                );

            });

            currentSlide = index;
        }

  

        function nextSlide() {

            currentSlide =
                (currentSlide + 1) % slides.length;

            showSlide(currentSlide);
        }
 

        showSlide(0);


   

        setInterval(function () {

            nextSlide();

        }, 3000);


       

        dots.forEach(function (dot, index) {

            dot.addEventListener(
                "click",
                function () {

                    showSlide(index);

                }
            );

        });

    });

});