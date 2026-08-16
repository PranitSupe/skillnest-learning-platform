/* =========================
   Course Slider Elements
========================= */

const courseTrack = document.getElementById("courseTrack");
const coursePrev = document.getElementById("coursePrev");
const courseNext = document.getElementById("courseNext");


/* =========================
   Slider Variables
========================= */

let currentSlide = 0;


/* =========================
   Get Cards Per Slide
========================= */

function getCardsPerSlide() {

    if (window.innerWidth <= 575.98) {
        return 1;
    }

    if (window.innerWidth <= 991.98) {
        return 2;
    }

    return 3;
}


/* =========================
   Get Total Slides
========================= */

function getTotalSlides() {

    const cardsPerSlide = getCardsPerSlide();

    const totalCards = courseTrack.children.length;

    return Math.ceil(totalCards / cardsPerSlide);
}


/* =========================
   Get Card Gap
========================= */

function getCardGap() {

    const styles = window.getComputedStyle(courseTrack);

    return parseFloat(styles.columnGap) || 0;
}


/* =========================
   Update Buttons
========================= */

function updateCourseButtons() {

    const totalSlides = getTotalSlides();

    coursePrev.disabled = currentSlide === 0;

    courseNext.disabled =
        currentSlide >= totalSlides - 1;
}


/* =========================
   Update Slider
========================= */

function updateCourseSlider() {

    const firstCard = courseTrack.children[0];

    if (!firstCard) {
        return;
    }


    const cardsPerSlide = getCardsPerSlide();

    const cardWidth = firstCard.getBoundingClientRect().width;

    const gap = getCardGap();


    const slideWidth =
        (cardWidth + gap) * cardsPerSlide;


    courseTrack.style.transform =
        `translateX(-${currentSlide * slideWidth}px)`;


    updateCourseButtons();
}


/* =========================
   Previous Button
========================= */

coursePrev.addEventListener("click", function () {

    if (currentSlide > 0) {

        currentSlide--;

        updateCourseSlider();

    }

});


/* =========================
   Next Button
========================= */

courseNext.addEventListener("click", function () {

    const totalSlides = getTotalSlides();

    if (currentSlide < totalSlides - 1) {

        currentSlide++;

        updateCourseSlider();

    }

});


/* =========================
   Handle Window Resize
========================= */

let previousCardsPerSlide = getCardsPerSlide();


window.addEventListener("resize", function () {

    const currentCardsPerSlide = getCardsPerSlide();


    /*
       Reset the slider only when
       responsive breakpoint changes.
    */

    if (
        currentCardsPerSlide !==
        previousCardsPerSlide
    ) {

        currentSlide = 0;

        previousCardsPerSlide =
            currentCardsPerSlide;
    }


    updateCourseSlider();

});


/* =========================
   Initial Load
========================= */

updateCourseSlider();