// ==========================================
// MUSHEL FASHION - JAVASCRIPT
// ==========================================


// ==========================================
// 1. SMOOTH SCROLL
// ==========================================

document.documentElement.style.scrollBehavior = "smooth";


// ==========================================
// 2. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".category-card, .promotion-card, .product-card, .service, .deal-card, .newsletter"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ==========================================
// 3. HEADER SHADOW WHEN SCROLLING
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }

});


// ==========================================
// 4. PRODUCT CATEGORY TABS
// ==========================================

const productTabs = document.querySelectorAll(".product-tabs button");
const productCards = document.querySelectorAll(".product-card");


productTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // Remove active class
        productTabs.forEach((button) => {

            button.classList.remove("active");

        });


        // Add active class
        tab.classList.add("active");


        const category = tab.textContent
            .trim()
            .toLowerCase();


        // Show all products
        if (category === "all items") {

            productCards.forEach((card) => {

                card.style.display = "block";

                setTimeout(() => {

                    card.classList.add("show-product");

                }, 50);

            });

            return;
        }


        // For now, show all products
        // Later we can add real categories
        productCards.forEach((card) => {

            card.style.display = "block";

            card.classList.remove("show-product");

            setTimeout(() => {

                card.classList.add("show-product");

            }, 50);

        });

    });

});


// ==========================================
// 5. PRODUCT CARD HOVER EFFECT
// ==========================================

productCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("product-hover");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("product-hover");

    });

});


// ==========================================
// 6. NEWSLETTER FORM
// ==========================================

const newsletterForm = document.querySelector(".newsletter form");


if (newsletterForm) {

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const emailInput =
            newsletterForm.querySelector("input");


        const email = emailInput.value.trim();


        if (email === "") {

            emailInput.classList.add("input-error");

            emailInput.placeholder = "Please enter your email";

            return;

        }


        if (!email.includes("@")) {

            emailInput.classList.add("input-error");

            emailInput.value = "";

            emailInput.placeholder = "Enter a valid email";

            return;

        }


        emailInput.classList.remove("input-error");

        alert("Thank you for subscribing to MUSHEL FASHION!");


        emailInput.value = "";

        emailInput.placeholder = "Enter your email";

    });

}


// ==========================================
// 7. BACK TO TOP BUTTON
// ==========================================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("back-to-top-show");

    } else {

        backToTop.classList.remove("back-to-top-show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================================
// 8. BUTTON CLICK ANIMATION
// ==========================================

const buttons = document.querySelectorAll(
    "button, .shop-button"
);


buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.add("button-click");

        setTimeout(() => {

            button.classList.remove("button-click");

        }, 200);

    });

});


// ==========================================
// 9. IMAGE LOADING EFFECT
// ==========================================

const images = document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("load", () => {

        image.classList.add("image-loaded");

    });

});


// ==========================================
// 10. CURRENT YEAR
// ==========================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        `© ${year} MUSHEL FASHION. All Rights Reserved.`;

}