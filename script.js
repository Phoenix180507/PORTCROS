/* =========================================================
   PORT-CROS
   JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GALERIE
    ===================================================== */

    const galleryLinks = document.querySelectorAll(
        "#galerie a[data-bs-toggle='modal']"
    );

    const modalImage = document.getElementById("modalImage");

    galleryLinks.forEach((link) => {

        link.addEventListener("click", () => {

            const image = link.querySelector("img");

            if (!image || !modalImage) {
                return;
            }

            modalImage.src = image.src;
            modalImage.alt = image.alt;

        });

    });


    /* =====================================================
       FERMETURE DU MENU MOBILE
    ===================================================== */

    const navbarCollapse = document.getElementById("mainNavbar");

    const navLinks = document.querySelectorAll(
        "#mainNavbar .nav-link"
    );

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });


    /* =====================================================
       NAVIGATION ACTIVE
    ===================================================== */

    const sections = document.querySelectorAll(
        "section[id], header[id]"
    );

    const navbarLinks = document.querySelectorAll(
        ".navbar-nav .nav-link"
    );


    function updateActiveLink() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });


        navbarLinks.forEach((link) => {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");

            if (target === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    updateActiveLink();


    /* =====================================================
       ANNÉE AUTOMATIQUE DU FOOTER
    ===================================================== */

    const footerYear = document.querySelector(
        "footer .year"
    );

    if (footerYear) {
        footerYear.textContent =
            new Date().getFullYear();
    }

});