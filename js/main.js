// Бургер меню
const burger = document.getElementById('burger-btn');
const headerBurger = document.querySelector(".header__burger-btn");
const headerNav = document.querySelector(".header__nav");
const body = document.getElementById('body');

burger.addEventListener('click', () => {
    headerBurger.classList.toggle('header__burger-btn--active');
    headerNav.classList.toggle('header__nav--active');
    body.classList.toggle('lock');
});

// убирает меню при переходе по якорю
const linkItems = document.querySelectorAll('.header__nav-link');

linkItems.forEach((link) =>{
    link.addEventListener('click', () => {
        if (headerNav.classList.contains("header__nav--active")){
            headerBurger.classList.remove('header__burger-btn--active');
            headerNav.classList.remove('header__nav--active');
            body.classList.remove('lock');
        }
    });
})

// Кастомный select
document.querySelectorAll(".custom-select").forEach((customSelectWrapper) => {
    const selectBtn = customSelectWrapper.querySelector(".custom-select__button");
    const list = customSelectWrapper.querySelector(".custom-select__list");
    const listItem = customSelectWrapper.querySelectorAll(".custom-select__list-item");
    const inputHidden = customSelectWrapper.querySelector(".custom-select__input-hidden");

    // Клик по кнопке. Открыть/закрыть select
    selectBtn.addEventListener("click", () => {
        list.classList.toggle("custom-select__list--visible")
        selectBtn.classList.toggle("custom-select__button--active")
    })

    // Выбор элемента из списка. Запомнить выбранное значение. Закрыть дропдаун.
    listItem.forEach( (item) =>{
        item.addEventListener("click", function (e){
            e.stopPropagation();
            selectBtn.innerText = this.innerText;
            inputHidden.value = this.dataset.value;
            list.classList.remove("custom-select__list--visible")
            selectBtn.classList.remove("custom-select__button--active")
        })
    })

    // Клик снаружи дропдауна Закрыть дропдаун.
    document.addEventListener("click", (e) => {
        if (e.target !== selectBtn){
            list.classList.remove("custom-select__list--visible");
            selectBtn.classList.remove("custom-select__button--active")
        }
    })

    // Нажатие на кнопки. Закрыть дропдаун.
    document.addEventListener("keydown", (e) => {
        if (e.key === "Tab" || e.key === "Escape"){
            list.classList.remove("custom-select__list--visible");
            selectBtn.classList.remove("custom-select__button--active")
        }
    })
})

//Инициализация datepicker
new AirDatepicker('#date-range', {
    range: true,
    multipleDatesSeparator: ' - '
});

//Модальное окно
const modalBtn = document.querySelector(".hero__modal-btn");
const modalCloseBtn = document.querySelector(".form-search__close-modal");
const formSearch = document.querySelector(".form-search");

modalBtn.addEventListener("click", () => {
    formSearch.classList.toggle("form-search--open");
    body.classList.toggle('lock');
})

modalCloseBtn.addEventListener("click", () => {
    formSearch.classList.toggle("form-search--open");
    body.classList.toggle('lock');
})

// Инициализация Swiper

const swiper = new Swiper('.popular__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
        900: {
        slidesPerView: 3,
        },
    }
});

const swiper2 = new Swiper('.blog__swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: "auto",
    grid: {
        rows: 1,
        fill: 'row'
    },
    breakpoints: {
        613: {
            slidesPerView: 1,
            grid: {
                rows: 4,
                fill: 'row'
            },
        },
        1000: {
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: 'row'
            },
        },
    }
});

const swiper3 = new Swiper('.gallery__swiper', {
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: "auto",
    breakpoints: {
        768: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
    }
});

function applyStyles() {
    if (window.innerWidth <= 550) {
        document.querySelector(".newsletter__content-subtitle").innerHTML = "Делимся впечатлениями";
        // document.querySelector(.)
    }
    else{
        document.querySelector(".newsletter__content-subtitle").innerHTML = "Получайте полезные рассылки о путешествиях";
    }
}

window.addEventListener('resize', applyStyles);
applyStyles();


new VenoBox({
    selector: '.gallery__link',
    numeration: true,
    infinigall: true,
    overlayColor: "rgb(26 62 62 / 86%)",
    share: true,
    spinner: 'rotating-plane'
});
