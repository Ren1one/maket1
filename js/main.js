// Бургер меню
const burger = document.getElementById('burger-btn');
const headerBurger = document.querySelector(".header__burger-btn");
const headerNav = document.querySelector(".header__nav");
const body = document.getElementById('body');

const toggleBurgerMenu = () => {
    headerBurger.classList.toggle('header__burger-btn--active');
    headerNav.classList.toggle('header__nav--active');
    body.classList.toggle('lock');
};

const closeMenu = () => {
    if (headerNav.classList.contains("header__nav--active")){
        headerBurger.classList.remove('header__burger-btn--active');
        headerNav.classList.remove('header__nav--active');
        body.classList.remove('lock');
    }
};

burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBurgerMenu();
});

// убирает меню при переходе по якорю
headerNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__nav-link')) {
        e.stopPropagation();
        closeMenu();
    }
});

// закрыть меню по клавише ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

// Кастомный select
document.querySelectorAll(".custom-select").forEach((customSelectWrapper) => {
    const selectBtn = customSelectWrapper.querySelector(".custom-select__button");
    const list = customSelectWrapper.querySelector(".custom-select__list");
    const listItem = customSelectWrapper.querySelectorAll(".custom-select__list-item");
    const inputHidden = customSelectWrapper.querySelector(".custom-select__input-hidden");

    // закрытие выпадающего списка
    const closeDropdown = () => {
        list.classList.remove("custom-select__list--visible");
        selectBtn.classList.remove("custom-select__button--active");
    };

    // Клик по кнопке. Открыть/закрыть select
    selectBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        list.classList.toggle("custom-select__list--visible")
        selectBtn.classList.toggle("custom-select__button--active")
    })

    // Выбор элемента из списка. Запомнить выбранное значение. Закрыть дропдаун.
    listItem.forEach( (item) =>{
        item.addEventListener("click", function (e){
            e.stopPropagation();
            selectBtn.innerText = this.innerText;
            inputHidden.value = this.dataset.value;
            closeDropdown();
        })
    })

    // Клик снаружи дропдауна Закрыть дропдаун.
    document.addEventListener("click", (e) => {
        if (e.target !== selectBtn){
            closeDropdown();
        }
    })

    // Нажатие на кнопки. Закрыть дропдаун.
    document.addEventListener("keydown", (e) => {
        if (e.key === "Tab" || e.key === "Escape"){
            closeDropdown();
        }
    })
})

//Инициализация datepicker
new AirDatepicker('#date-range', {
    range: true,
    multipleDatesSeparator: ' - '
});


// Валидация формы hero
const validator = new JustValidate('#form-hero', {
    errorLabelStyle: {
        display: 'none', // Скрыть стандартные сообщения об ошибках
    },
    submitFormAutomatically: true,
});

validator
.addField('#location-input', [
    {
    rule: 'required',
    },
])
.addField('#people-input', [
        {
        rule: 'required',
    },
])
.addField('#date-range', [
    {
    rule: 'required',
    },
    {
        rule: 'customRegexp',
        value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4}) - (0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/,
    },
])

//Модальное окно
const modalBtn = document.querySelector(".hero__modal-btn");
const modalCloseBtn = document.querySelector(".form-search__close-modal");
const formSearch = document.querySelector(".form-search");

modalBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    formSearch.classList.add("form-search--open");
    body.classList.add('lock');
})

modalCloseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    formSearch.classList.remove("form-search--open");
    body.classList.remove('lock');
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

// Инициализация галлереи
new VenoBox({
    selector: '.gallery__link',
    numeration: true,
    infinigall: true,
    overlayColor: "rgb(26 62 62 / 86%)",
    share: true,
    spinner: 'rotating-plane'
});


// Изменение текста по брейкпоинту
function updateNewsletterSubtitle() {
    const subtitleElement = document.querySelector(".newsletter__content-subtitle");
    if (window.innerWidth <= 550) {
        subtitleElement.innerHTML = "Делимся впечатлениями";
    }
    else{
        subtitleElement.innerHTML = "Получайте полезные рассылки о путешествиях";
    }
}

window.addEventListener('resize', updateNewsletterSubtitle);
updateNewsletterSubtitle();