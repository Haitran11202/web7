var slideIndex;

function showSlider() {
    var i;
    var slides = document.querySelectorAll(".content__slider img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.width = "0px";
    }
    // }
    slides[slideIndex].style.width = "1165px";
    slideIndex++;

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
        // }
    }
    setTimeout(showSlider, 3000);
}
showSlider(slideIndex = 0);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const textItem = $$('.header__text');


const textItemActive = $('.header__text.active');
const line = $('.line');


console.log(line);

textItem.forEach((item) => {
    item.onclick = function() {
        $('.header__text.active').classList.remove('active');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        this.classList.add('active');
    }
});
// var slideIndex;

// function showSlider() {
//     var i;
//     var slides = document.querySelectorAll(".content__slider img");
//     console.log(slides);
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex].style.display = "block";
//     slideIndex++;

//     if (slideIndex > slides.length - 1) {
//         slideIndex = 0;
//     }
//     setTimeout(showSlider, 3000);
// }
// showSlider(slideIndex = 0);