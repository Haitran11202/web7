var slideIndex;

function showSlider() {
    var i;
    var slides = document.querySelectorAll(".content__slider img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.width = "0px";
    }
    // }
    slides[slideIndex].style.width = "1349px";
    slideIndex++;

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
        // }
    }
    setTimeout(showSlider, 3000);
}
showSlider(slideIndex = 0);

//  header effect

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

// search effect

const search = document.querySelector('.bi-search');
console.log(search);
let check__click = false;
search.onclick = function() {
    if (!check__click) {
        document.querySelector('.__search').style.width = '344px';
        document.querySelector('.__search').style.height = '40px';
        document.querySelector('.__search').style.padding = '10px 20px';

        check__click = true;
    } else {
        document.querySelector('.__search').style.width = '0';
        document.querySelector('.__search').style.height = '0';
        document.querySelector('.__search').style.padding = '0 0';
        check__click = false;
    }
    console.log(check__click);
}

// form login effect

const form = $('.model__login');
const form__login = $('.model__login .model__login__container');
const effect = $('.model__effect');
const exit = $('.model__login .model__login__container .exit');
const person = $('.person__login');
person.onclick = () => {
    form.style.left = '0';
    form__login.style.left = '72%';
    effect.style.display = 'block';
}
exit.onclick = function() {
    form__login.style.left = '100%';
    // form.style.left = '100%';
    form.style.left = '100%';
    effect.style.display = 'none';

    // form.style.display = 'none';
}