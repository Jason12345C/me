
//zoom on project card
window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.project-card-wrapper');
    const scrollPosition = window.scrollY + window.innerHeight;

    boxes.forEach(box => {
        const boxPosition = box.offsetTop + box.offsetHeight / 2;
        const distance = Math.max(0, scrollPosition - boxPosition);
        const scale = 1 + Math.min(distance / 1000, 0.1); // Adjust the divisor and max scale as needed

        box.style.transform = `scale(${scale})`;
    });
});


//project card change content
document.addEventListener("DOMContentLoaded", function() {
    let sliders = document.querySelectorAll('.project-card-wrapper');
    let slideIndices = Array(sliders.length).fill(1);

    sliders.forEach((slider, index) => {
        showSlides(1, index);
    });

    window.plusSlides = function(n, sliderIndex) {
        showSlides(slideIndices[sliderIndex] += n, sliderIndex);
    };

    window.currentSlide = function(n, sliderIndex) {
        showSlides(slideIndices[sliderIndex] = n, sliderIndex);
    };

    function showSlides(n, sliderIndex) {
        let i;
        let slides = sliders[sliderIndex].getElementsByClassName("project-card");
        if (n > slides.length) {slideIndices[sliderIndex] = 1}
        if (n < 1) {slideIndices[sliderIndex] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndices[sliderIndex] - 1].style.display = "block";
    }
});


const course_category_names = document.querySelectorAll(".nav-link");
// const nav_dropdowns = document.querySelectorAll(".nav-dropdown-content");

// Add event listener to each nav-link
course_category_names.forEach(name => {
    name.addEventListener("click", () => {
        const chevron_icon = name.querySelector(".nav-dropdown-icon");
        chevron_icon.classList.toggle("icon-rotated");
        const dropdown = name.nextElementSibling.querySelector(".nav-dropdown-content")
        dropdown.classList.toggle("hidden");
    });
});