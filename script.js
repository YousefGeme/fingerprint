AOS.init();

const nav = document.getElementById("nav");
const open = document.getElementById("openIcon");
const close = document.getElementById("closeIcon");

function toggleNav() {
    if (!nav.style.height || nav.style.height === "0px") {
        nav.style.height = "500px";
        open.style.display = "none";
        close.style.display = "inline";
    } else {
        nav.style.height = "0px";
        open.style.display = "inline";
        close.style.display = "none";
    }
}

// Close the navigation when the user scrolls
window.addEventListener("scroll", () => {
    if (nav.style.height && nav.style.height !== "0px") {
        nav.style.height = "0px";
        open.style.display = "inline";
        close.style.display = "none";
    }
});

// Reset the nav state on window resize
window.addEventListener("resize", () => {
    nav.style.height = "0px";
    open.style.display = "inline";
    close.style.display = "none";
});


//scroll div
window.addEventListener("scroll", function () {
    const parallaxDiv = document.querySelector(".home-content ");
    let scrollTop = window.scrollY;
    parallaxDiv.style.transform = `translateY(${scrollTop * .8}px)`;
});


window.addEventListener("scroll", function () {
    const parallaxDi = document.querySelector(".home-img");
    let scrolly = window.scrollY;
    parallaxDi.style.transform = `translateY(${scrolly * .2}px)`;
});

// project swiper
var swiper = new Swiper(".mmySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 4000,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        640: {
            slidesPerView: 1.5,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 5
        }
    }
});

// counter
let container = document.querySelector(".container");
let counter = document.querySelectorAll(".card-foot .counter");
let start = false;
window.onscroll = function () {
    if (window.scrollY >= container.offsetTop) {
        if (!start) {
            counter.forEach((num) => startCount(num));
        }
        start = true
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 3000 / goal);
}