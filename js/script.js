 

document.addEventListener("DOMContentLoaded", () => {
 

    const mobileMenuBtn =
        document.getElementById("mobile-menu-btn");

    const mobileMenu =
        document.getElementById("mobile-menu");


    if (mobileMenuBtn && mobileMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

            const isOpen =
                !mobileMenu.classList.contains("hidden");


            mobileMenuBtn.textContent =
                isOpen ? "✕" : "☰";


            mobileMenuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close Menu" : "Open Menu"
            );

        });


        mobileMenu
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.add("hidden");

                    mobileMenuBtn.textContent = "☰";

                    mobileMenuBtn.setAttribute(
                        "aria-label",
                        "Open Menu"
                    );

                });

            });

    }

 
 

    const slides =
        document.querySelectorAll(".hero-slide");

    const dots =
        document.querySelectorAll(".hero-dot");


    if (slides.length > 0) {

        let currentSlide = 0;

        let slideTimer;


        function showSlide(index) {

            slides.forEach((slide) => {

                slide.classList.remove("active");

            });


            dots.forEach((dot) => {

                dot.classList.remove("active");

            });


            slides[index].classList.add("active");


            if (dots[index]) {

                dots[index].classList.add("active");

            }


            currentSlide = index;

        }


        function nextSlide() {

            const nextSlideIndex =
                (currentSlide + 1) %
                slides.length;

            showSlide(nextSlideIndex);

        }


        function startSlider() {

            clearInterval(slideTimer);

            slideTimer =
                setInterval(
                    nextSlide,
                    4000
                );

        }


        dots.forEach((dot, index) => {

            dot.addEventListener("click", () => {

                showSlide(index);

                startSlider();

            });

        });


        showSlide(0);

        startSlider();

 

        document.addEventListener(
            "visibilitychange",
            () => {

                if (document.hidden) {

                    clearInterval(slideTimer);

                } else {

                    startSlider();

                }

            }
        );

    }
 

    const header =
        document.querySelector("header");


    if (header) {

        const updateHeader =
            () => {

                header.classList.toggle(
                    "shadow-md",
                    window.scrollY > 20
                );

            };


        window.addEventListener(
            "scroll",
            updateHeader
        );


        updateHeader();

    }

 
 const currentYear =
    document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}

 

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth >= 1024 &&
                mobileMenu &&
                mobileMenuBtn
            ) {

                mobileMenu.classList.add("hidden");

                mobileMenuBtn.textContent = "☰";

                mobileMenuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            }

        }
    );


 
    document
        .querySelectorAll("img")
        .forEach((image) => {

            image.addEventListener(
                "error",
                () => {

                    console.warn(
                        "Image could not be loaded:",
                        image.src
                    );

                }
            );

        });

});