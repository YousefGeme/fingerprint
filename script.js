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


AOS.init();