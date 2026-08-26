 

document.addEventListener("DOMContentLoaded", () => {

    const serviceSelect =
        document.getElementById("service");


    if (serviceSelect) {

        const urlParams =
            new URLSearchParams(
                window.location.search
            );

        const selectedService =
            urlParams.get("service");


        if (selectedService) {

            const serviceOption =
                serviceSelect.querySelector(
                    `option[value="${selectedService}"]`
                );


            if (serviceOption) {

                serviceSelect.value =
                    selectedService;

            }

        }

    } 

    const contactForm =
        document.getElementById("contact-form");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim();

                const phone =
                    document
                        .getElementById("phone")
                        ?.value
                        .trim();

                const email =
                    document
                        .getElementById("email")
                        ?.value
                        .trim();

                const service =
                    document
                        .getElementById("service")
                        ?.value;

                const message =
                    document
                        .getElementById("message")
                        ?.value
                        .trim();


                

                if (!name) {

                    alert(
                        "Please enter your name."
                    );

                    document
                        .getElementById("name")
                        ?.focus();

                    return;
                }


                if (!phone) {

                    alert(
                        "Please enter your phone number."
                    );

                    document
                        .getElementById("phone")
                        ?.focus();

                    return;
                }


                if (!email) {

                    alert(
                        "Please enter your email address."
                    );

                    document
                        .getElementById("email")
                        ?.focus();

                    return;
                }


                if (!service) {

                    alert(
                        "Please select a service."
                    );

                    document
                        .getElementById("service")
                        ?.focus();

                    return;
                }


                if (!message) {

                    alert(
                        "Please enter your project details."
                    );

                    document
                        .getElementById("message")
                        ?.focus();

                    return;
                }


            

                alert(
                    `Thank you, ${name}! ` +
                    "Your enquiry has been received."
                );

            }
        );

    }

});