

//JavaScript — Previous / Next:

const courseTrack = document.getElementById("courseTrack");

const coursePrev = document.getElementById("coursePrev");

const courseNext = document.getElementById("courseNext");


let currentSlide = 0;

const cardsPerSlide = 3;

const totalCards =
    courseTrack.children.length;

const totalSlides =
    Math.ceil(totalCards / cardsPerSlide);



    //Next button:


courseNext.addEventListener("click", function () {

    if (currentSlide < totalSlides - 1) {

        currentSlide++;

        updateCourseSlider();

    }

});


//Previous button:


coursePrev.addEventListener("click", function () {

    if (currentSlide > 0) {

        currentSlide--;

        updateCourseSlider();

    }

});


//Slider function

function updateCourseSlider() {

    const cardWidth =
        courseTrack.children[0].offsetWidth;

    const gap = 24;

    const moveAmount =
        (cardWidth + gap) * cardsPerSlide;

    courseTrack.style.transform =
        `translateX(-${currentSlide * moveAmount}px)`;

    updateCourseButtons();
}


//Disable Buttons at the Beginning/End:


function updateCourseButtons() {

    coursePrev.disabled =
        currentSlide === 0;

    courseNext.disabled =
        currentSlide === totalSlides - 1;

}


//