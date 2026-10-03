/* =========================================
   VAIBHAV SOLANKE PORTFOLIO
   INTERACTIONS & ANIMATIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       LOADER
    ========================================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 700);
    });


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });


        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
                document.body.classList.remove("menu-open");
            });

        });
    }


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.style.background = "rgba(5, 5, 5, 0.82)";
        } else {
            navbar.style.background = "rgba(5, 5, 5, 0.55)";
        }

    });


    /* =========================================
       HERO PARALLAX
    ========================================= */

    const heroImage = document.querySelector(".hero-image-wrap");
    const heroText = document.querySelector(".hero-bg-text");

    if (heroImage && window.innerWidth > 700) {

        window.addEventListener("mousemove", (event) => {

            const x = (event.clientX / window.innerWidth - 0.5);
            const y = (event.clientY / window.innerHeight - 0.5);

            heroImage.style.transform =
                `translateY(-50%) rotate(5deg) rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;

            if (heroText) {
                heroText.style.transform =
                    `translate(${x * 18}px, ${y * 18}px)`;
            }

        });

    }


    /* =========================================
       REVEAL ON SCROLL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-main, .about-stats, .skill-card, .project-card, .certificate-item, .contact-content"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition =
            `opacity 0.8s ease ${index * 0.035}s,
             transform 0.8s cubic-bezier(.22,1,.36,1) ${index * 0.035}s`;

        revealObserver.observe(element);

    });


    /* =========================================
       SKILL CARD MOUSE TILT
    ========================================= */

    const cards = document.querySelectorAll(".skill-card, .project-card");

    if (window.innerWidth > 900) {

        cards.forEach(card => {

            card.addEventListener("mousemove", (event) => {

                const rect = card.getBoundingClientRect();

                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const rotateX =
                    ((y / rect.height) - 0.5) * -5;

                const rotateY =
                    ((x / rect.width) - 0.5) * 5;

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            });


            card.addEventListener("mouseleave", () => {

                card.style.transform =
                    "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

            });

        });

    }


    /* =========================================
       PROJECT PREVIEW MOVEMENT
    ========================================= */

    const previews = document.querySelectorAll(".project-preview");

    if (window.innerWidth > 900) {

        previews.forEach(preview => {

            preview.addEventListener("mousemove", (event) => {

                const rect = preview.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) / rect.width - 0.5;

                const y =
                    (event.clientY - rect.top) / rect.height - 0.5;

                preview.style.transform =
                    `perspective(700px)
                     rotateX(${y * -5}deg)
                     rotateY(${x * 5}deg)`;

            });


            preview.addEventListener("mouseleave", () => {

                preview.style.transform =
                    "perspective(700px) rotateX(0) rotateY(0)";

            });

        });

    }


    /* =========================================
       MAGNETIC BUTTON EFFECT
    ========================================= */

    const buttons = document.querySelectorAll(
        ".btn, .nav-contact, .contact-btn"
    );

    if (window.innerWidth > 900) {

        buttons.forEach(button => {

            button.addEventListener("mousemove", (event) => {

                const rect = button.getBoundingClientRect();

                const x =
                    event.clientX - rect.left - rect.width / 2;

                const y =
                    event.clientY - rect.top - rect.height / 2;

                button.style.transform =
                    `translate(${x * 0.08}px, ${y * 0.08}px)`;

            });


            button.addEventListener("mouseleave", () => {

                button.style.transform = "";
            });

        });

    }


    /* =========================================
       SMOOTH ANCHOR HANDLING
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================================
       CONTACT BUTTON HOVER
    ========================================= */

    document.querySelectorAll(".contact-btn").forEach(button => {

        button.addEventListener("mouseenter", () => {

            const arrow = button.querySelector("strong");

            if (arrow) {
                arrow.style.transform = "translate(5px, -5px)";
            }

        });


        button.addEventListener("mouseleave", () => {

            const arrow = button.querySelector("strong");

            if (arrow) {
                arrow.style.transform = "";
            }

        });

    });


    /* =========================================
       IMAGE LOAD
    ========================================= */

    const profileImage = document.querySelector(
        ".hero-image-card img"
    );

    if (profileImage) {

        profileImage.addEventListener("load", () => {
            profileImage.classList.add("loaded");
        });

    }


    /* =========================================
       CONSOLE MESSAGE
    ========================================= */

    console.log(
        "%cVAIBHAV SOLANKE",
        "font-size:20px;font-weight:900;"
    );

    console.log(
        "%cFrontend Developer • AI • Web",
        "font-size:12px;"
    );

});