const maskOptions = {
   mask: "+{7} (000) 000-00-00",
   // lazy: false,  // make placeholder always visible
   // placeholderChar: '0'     // defaults to '_'
};
if (document.querySelectorAll("[data-phone]").length) {
   document.querySelectorAll("[data-phone]").forEach((item) => {
      const mask = IMask(item, maskOptions);
   });
}
const body = document.body;
gsap.registerPlugin(ScrollTrigger);
// const lenis = new Lenis({
//    duration: 0.4,
//    smooth: true,
//    direction: "vertical",
//    // lerp: 0.05,
// });
// window.lenis = lenis;

// function raf(time) {
//    lenis.raf(time);
//    requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
document.addEventListener("DOMContentLoaded", () => {
   headerWork();
   homePage();
   productCards();
   footer();
});
function headerWork() {
   const header = document.querySelector(".header");
   if (!header) return;
   const main = document.querySelector("main.main");
   if (!main) {
      header.classList.add("transparent");
   }
}
function homePage() {
   function hero() {
      const slider = document.querySelector(".home-hero .swiper");
      if (!slider) return;
      const paginations = document.querySelectorAll(
         ".home-hero__pagination > div"
      );
      const slides = document.querySelectorAll(".home-hero__slide");
      const progressCircles = document.querySelectorAll(".progress-circle");
      const totalLength = 138; // Окружность круга (примерно 2 * π * r)
      new Swiper(slider, {
         slidesPerView: 1,
         mousewheel: {
            enabled: false,
            forceToAxis: true,
         },
         speed: 2000,
         autoplay: {
            enabled: true,
            delay: 5000,
         },
         effect: "creative",
         loop: true,
         allowTouchMove: false, // Отключить свайпы
         simulateTouch: false, // Отключить эмуляцию свайпов мышью
         creativeEffect: {
            prev: {
               shadow: true,
               translate: ["-20%", 0, -1],
            },
            next: {
               translate: ["100%", 0, 0],
            },
         },
         on: {
            autoplayTimeLeft(s, timeLeft, progress) {
               progressCircles.forEach((item) => {
                  item.style.strokeDashoffset = totalLength * progress;
               });
            },
            slideNextTransitionEnd(swiper) {
               let i = 0;
               if (
                  document.querySelector(
                     ".home-hero .swiper-slide.swiper-slide-active"
                  )
               ) {
                  i = document
                     .querySelector(
                        ".home-hero .swiper-slide.swiper-slide-active"
                     )
                     .getAttribute("data-swiper-slide-index");
               }

               paginations.forEach((item, index) => {
                  item.classList.remove("active");
               });
               paginations[i].classList.add("active");
               slides.forEach((item, index) => {
                  item.classList.remove("active");
               });
               slides[i].classList.add("active");
            },
            init() {
               paginations[0].classList.add("active");
               slides[0].classList.add("active");
            },
         },
      });

      const banner = document.querySelector(".home-hero__banner");
      const clicker = document.querySelector(".home-hero__clicker");
      const bannerBtn = document.querySelector(".home-hero__form .icon-btn");
      const bannerCloseBtn = document.querySelector(
         ".home-hero__thanks button"
      );
      clicker.onclick = () => {
         banner.classList.add("step-2");
      };
      bannerBtn.onclick = () => {
         banner.classList.remove("step-2");
         banner.classList.add("step-3");
      };
      bannerCloseBtn.onclick = () => {
         banner.classList.remove("step-2");
         banner.classList.remove("step-3");
         banner.classList.add("hidden");
      };
   }
   function catalog() {
      const cards = document.querySelectorAll(".home-catalog__item");
      if (!cards.length) return;
      const arrows = document.querySelectorAll(
         ".home-catalog .home-catalog__arrow"
      );
      cards.forEach((card, cardIndex) => {
         let currentArrow = arrows[cardIndex];
         card.onmouseenter = (e) => {
            // console.log("enter", e);
            currentArrow.classList.add("active");
         };
         card.onmousemove = (e) => {
            // console.log("move", e);
            currentArrow.style.left = `${e.offsetX}px`;
            currentArrow.style.top = `${e.offsetY}px`;
         };
         card.onmouseleave = (e) => {
            // console.log("leave", e);
            currentArrow.classList.remove("active");
         };
      });
   }
   gsap.to(".home-hero__bg", {
      scrollTrigger: {
         trigger: ".home-page", // элемент, который должен запускать анимацию
         start: "top 90%", // когда верх элемента достигает 80% высоты экрана
         end: "top -50%", // когда низ элемента достигает 20% высоты экрана
         // markers: true, // включить маркеры для визуальной отладки
         scrub: 1.5,
      },
      opacity: 1,
   });
   function recommend() {
      const links = document.querySelectorAll(".home-recommend__links a");
      if (!links.length) return;
      const images = document.querySelectorAll(".home-recommend__images > div");
      const videos = document.querySelectorAll(".home-recommend__video > div");
      links.forEach((link, index) => {
         link.onmouseenter = () => {
            images.forEach((image, i) => {
               if (i > index) {
                  image.classList.remove("active");
               }
            });
            videos.forEach((video, i) => {
               video.classList.remove("active");
            });
            links.forEach((item, i) => {
               item.classList.remove("active");
            });
            images[index].classList.add("active");
            videos[index].classList.add("active");
            link.classList.add("active");
         };
      });
   }
   function brands() {
      // Выбираем контейнер с изображениями
      const marquee = document.querySelector(".home-brands .marquee");
      if (!marquee) return;
      const marqueeHeight = marquee.offsetHeight / 2; // Высота половины контента (для бесшовного эффекта)
      const marqueeWidth = marquee.offsetWidth / 2; // Ширина половины контента (для бесшовного эффекта)

      // Анимация с помощью GSAP
      if (window.innerWidth > 1024) {
         gsap.to(marquee, {
            y: -marqueeHeight, // Прокручиваем вверх на половину высоты
            duration: 10, // Длительность анимации
            ease: "linear", // Линейное движение
            repeat: -1, // Бесконечный повтор
         });
      } else {
         gsap.to(marquee, {
            x: -marqueeWidth, // Прокручиваем влево на половину ширины
            duration: 10, // Длительность анимации
            ease: "linear", // Линейное движение
            repeat: -1, // Бесконечный повтор
         });
      }
   }
   hero();
   catalog();
   recommend();
   productSlider(".home-first");
   productSlider(".home-second");
   brands();
   reviews();
   blogCards();
   tabs('[name="social"]', ".social-tab");
}
function productSlider(selector) {
   let selectedItem = document.querySelector(`${selector} .swiper`);
   if (!selectedItem) return;
   let swiper = new Swiper(selectedItem, {
      slidesPerView: "auto",
      spaceBetween: 8,
      pagination: {
         el: `${selector} .swiper-pagination`,
         type: "progressbar",
      },
      breakpoints: {
         1025: {
            slidesPerView: 4,
            spaceBetween: 12,
         },
         569: {
            slidesPerView: 2,
            spaceBetween: 12,
         },
      },
   });
}
function productCards() {
   const cards = document.querySelectorAll(".product-card");
   if (!cards.length) return;
   cards.forEach((card, index) => {
      let inputSelector = card.querySelector(".product-card__color input").name;
      tabs(`[name=${inputSelector}]`, `[data-tab-name=${inputSelector}]`);
   });
}
function reviews() {
   let section = document.querySelector(".reviews-section");
   if (!section) return;
   const prevBtn = document.querySelector(".reviews-section__navigation .prev");
   const nextBtn = document.querySelector(".reviews-section__navigation .next");

   const textElem = document.querySelector(".reviews-section__text");

   let currentIndex = 0;
   let reviewsArray = [
      {
         text: "«Купила Korg c1 Air коричневый. Инструментом довольна, как и самим магазином с его внимательными консультантами. И да, не обманщики)) не бойтесь заказывать доставку в регион, хоть это и потребует полной предоплаты. Большое спасибо! не бойтесь заказывать доставку в регион, хоть это и потребует полной предоплаты. Большое спасибо!",
         author: {
            name: "Екатерина Незнанова",
            date: "29 сент 2024",
         },
         rating: 4,
      },
      {
         text: "Инструментом довольна, как и самим магазином с его внимательными консультантами. И да, не обманщики)) не бойтесь заказывать доставку в регион, хоть это и потребует полной предоплаты. Большое спасибо! не бойтесь заказывать доставку в регион, хоть это и потребует полной предоплаты. Большое спасибо!",
         author: {
            name: "Екатерина",
            date: "28 сент 2024",
         },
         rating: 5,
      },
      {
         text: "И да, не обманщики)) не бойтесь заказывать доставку в регион, хоть это и потребует полной предоплаты. Большое спасибо! не бойтесь заказывать доставку в регион, хоть это и потребует полной предоплаты. Большое спасибо!",
         author: {
            name: "иван иванов",
            date: "29 окт 2024",
         },
         rating: 4,
      },
      {
         text: "«Купила Korg c1 Air коричневый. Большое спасибо!",
         author: {
            name: "Василиса Незнанова",
            date: "29 сент 2023",
         },
         rating: 3,
      },
      {
         text: "И да, не обманщики)) не бойтесь заказывать доставку в регион, хоть это и потребует полной предоплаты. Большое спасибо! не бойтесь заказывать доставку в регион, хоть это и потребует полной предоплаты. Большое спасибо!",
         author: {
            name: "Екатерина Незнанова",
            date: "29 сент 2022",
         },
         rating: 5,
      },
   ];
   prevBtn.onclick = () => {
      if (currentIndex == 0) {
         currentIndex = reviewsArray.length - 1;
      } else {
         currentIndex--;
      }
      render();
   };
   nextBtn.onclick = () => {
      if (currentIndex == reviewsArray.length - 1) {
         currentIndex = 0;
      } else {
         currentIndex++;
      }
      render();
   };
   render();

   async function render() {
      await anim();
      await delay(500); // Задержка в 500 миллисекунд
      let object = reviewsArray[currentIndex];
      const [authorNameElem, authorDateElem] = document.querySelectorAll(
         ".reviews-section__info p"
      );
      const [currentPagination, allPagination] = document.querySelectorAll(
         ".reviews-section__pagination span"
      );
      const rating = document.querySelector(".reviews-section__rating");
      textElem.innerHTML = object.text
         .split(" ")
         .map((word) => `<p><span>${word}</span></p>`)
         .join(" ");
      authorNameElem.innerHTML = `<span>${object.author.name}</span>`;
      authorDateElem.innerHTML = `<span>${object.author.date}</span>`;
      currentPagination.innerHTML = currentIndex + 1;
      allPagination.innerHTML = reviewsArray.length;

      let ratingArr = [];
      for (let i = 0; i < object.rating; i++) {
         ratingArr.push(`<li>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"
                                      fill="none">
                                      <path
                                         d="M8.52447 0.463525C8.67415 0.00287008 9.32585 0.00287008 9.47553 0.463525L11.1329 5.56434C11.1998 5.77035 11.3918 5.90983 11.6084 5.90983H16.9717C17.4561 5.90983 17.6575 6.52964 17.2656 6.81434L12.9266 9.96681C12.7514 10.0941 12.678 10.3198 12.745 10.5258L14.4023 15.6266C14.552 16.0873 14.0248 16.4704 13.6329 16.1857L9.29389 13.0332C9.11865 12.9059 8.88135 12.9059 8.70611 13.0332L4.3671 16.1857C3.97524 16.4704 3.448 16.0873 3.59768 15.6266L5.25503 10.5258C5.32197 10.3198 5.24864 10.0941 5.07339 9.96681L0.734384 6.81434C0.342527 6.52964 0.543915 5.90983 1.02828 5.90983H6.39159C6.6082 5.90983 6.80018 5.77035 6.86712 5.56434L8.52447 0.463525Z"
                                         fill="#182126" />
                                   </svg>
           </li>`);
      }
      rating.innerHTML = ratingArr.join(" ");

      // Устанавливаем высоту текста
      const textHeight = textElem.scrollHeight; // Получаем высоту текста
      textElem.style.minHeight = `${textElem.clientHeight}px`; // Устанавливаем высоту

      await secondAnim();
   }
   async function anim() {
      let spanItems = [
         ...textElem.querySelectorAll("span"),
         ...document.querySelectorAll(".reviews-section__info span"),
         ...document.querySelectorAll(".reviews-section__rating li"),
      ];
      // Создаем массив промисов для всех анимаций
      let animations = Array.from(spanItems).map((item) => {
         return new Promise((resolve) => {
            gsap.to(item, {
               y: "-100%", // Прокручиваем вверх на половину высоты
               duration: 0.3, // Длительность анимации
               ease: "linear", // Линейное движение
               onComplete: resolve, // Вызываем resolve, когда анимация завершена
            });
         });
      });

      // Дожидаемся завершения всех анимаций
      await Promise.all(animations);
      return true;
   }
   async function secondAnim() {
      let spanItems = [
         ...textElem.querySelectorAll("span"),
         ...document.querySelectorAll(".reviews-section__info span"),
         ...document.querySelectorAll(".reviews-section__rating li"),
      ];
      // Создаем массив промисов для всех анимаций
      let animations = Array.from(spanItems).map((item) => {
         return new Promise((resolve) => {
            gsap.from(item, {
               y: "100%", // Прокручиваем вверх на половину высоты
               duration: 0.3, // Длительность анимации
               ease: "linear", // Линейное движение
               onComplete: resolve, // Вызываем resolve, когда анимация завершена
            });
         });
      });

      // Дожидаемся завершения всех анимаций
      await Promise.all(animations);
      return true;
   }
   function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
   }
}
function blogCards() {
   const cards = document.querySelectorAll(".blog-card");
   if (!cards.length) return;
   const arrows = document.querySelectorAll(
      ".blog-section .home-catalog__arrow"
   );
   cards.forEach((card, cardIndex) => {
      let currentArrow = arrows[cardIndex];
      card.onmouseenter = (e) => {
         // console.log("enter", e);
         currentArrow.classList.add("active");
      };
      card.onmousemove = (e) => {
         // console.log("move", e);
         currentArrow.style.left = `${e.offsetX}px`;
         currentArrow.style.top = `${e.offsetY}px`;
      };
      card.onmouseleave = (e) => {
         // console.log("leave", e);
         currentArrow.classList.remove("active");
      };
   });
}
function footer() {
   const form = document.querySelector(".footer__form");
   if (!form) return;
   const button = form.querySelector("button");
   button.onclick = () => {
      form.classList.add("step-2");
   };
   if (window.innerWidth <= 568) {
      accordion(".footer-spoiler__header", ".footer__block .collapse");
   }
}
class Select {
   constructor(selector, options) {
      this.$el = document.querySelector(selector);
      this.options = options;
      this.selectedId = options.selectedId;

      this.render();
      this.setup();
   }
   render() {
      this.$el.classList.add("select");
      const { placeholder, data, selectedId } = this.options;
      this.$el.innerHTML = this.getTemplate(data, placeholder, selectedId);
      if (placeholder) {
         this.$el
            .querySelector(`[data-type="input"]`)
            .classList.add("placeholder");
      }
   }
   setup() {
      this.clickHandler = this.clickHandler.bind(this);
      this.$el.addEventListener("click", this.clickHandler);
      this.$value = this.$el.querySelector(`[data-type="input"] span`);
   }
   clickHandler(event) {
      const { type } = event.target.dataset;
      if (type === "input") {
         this.toggle();
      } else if (type === "item") {
         const { id } = event.target.dataset;
         this.select(id);
      } else if (type === "back") {
         this.toggle();
      } else if (type === "header") {
         this.toggle();
      } else if (event.target.closest(".select__header")) [this.toggle()];
   }
   get current() {
      if (this.options.multi) {
         return this.options.data.filter((item) =>
            this.selectedId.some((temp) => temp === item.id)
         );
      } else {
         return this.options.data.find((item) => item.id === this.selectedId);
      }
   }
   select(id) {
      this.$el
         .querySelector(`[data-type="input"]`)
         .classList.remove("placeholder");
      if (this.options.multi) {
         if (this.selectedId.some((item) => item == id)) {
            this.selectedId.splice(
               this.selectedId.findIndex((item) => item == id),
               1
            );
         } else {
            this.selectedId.push(id);
         }
         if (this.current.length) {
            this.$value.innerHTML = this.current
               .map((item) => item.value)
               .join(", ");
         } else {
            this.$value.innerHTML = this.options.placeholder;
            // this.$el
            //    .querySelector(`[data-type="input"]`)
            //    .classList.add("placeholder");
         }
      } else {
         this.selectedId = id;
         this.$value.innerHTML = this.current.value;
      }

      this.$el.querySelectorAll(`[data-type="item"]`).forEach((item) => {
         item.classList.remove("selected");
      });
      if (this.options.multi) {
         this.current.forEach((item) => {
            this.$el
               .querySelector(`[data-id='${item.id}']`)
               .classList.add("selected");
         });
      } else {
         this.$el
            .querySelector(`[data-id='${this.current.id}']`)
            .classList.add("selected");
      }

      if (!this.options.multi) {
         this.close();
      }

      if (this.options.onSelect) {
         this.options.onSelect(this.current, this.$el);
      }
   }
   open() {
      this.$el.classList.add("open");
   }
   close() {
      this.$el.classList.remove("open");
   }
   toggle() {
      if (this.$el.classList.contains("open")) {
         this.close();
      } else {
         this.open();
      }
   }
   getTemplate(data, placeholder = `<span></span>`, selectedId) {
      const items = data.map((item) => {
         let cls = "";
         if (
            (this.options.multi &&
               selectedId.some((temp) => temp == item.id)) ||
            (!this.options.multi && item.id === selectedId)
         ) {
            placeholder = item.value;
            cls = "selected";
         }
         if (this.options.multi) {
         } else {
         }
         return `<li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>`;
      });
      return `
      <div class="select__header" data-type="header">
      <div class="select__back" data-type="back"></div>
      <div class="select__title" data-type="input">
         <span>${placeholder}</span>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9334 6.08291C14.1498 6.29933 14.1498 6.6502 13.9334 6.86662L7.99991 12.8001L2.06643 6.86662C1.85002 6.6502 1.85002 6.29933 2.06643 6.08291C2.28285 5.8665 2.73748 5.86637 2.9539 6.08278L8.00027 11.0924L12.9972 6.08272C13.2136 5.86631 13.717 5.8665 13.9334 6.08291Z" fill="black"/>
         </svg>      
    </div>
      </div>
      <div class="select__content">
         <ul class="select__list">
            ${items.join("")}
         </ul>
      </div>
      `;
   }
}
function tabs(linkSelector, contentSelector) {
   const inputs = document.querySelectorAll(linkSelector);
   const contents = document.querySelectorAll(contentSelector);
   let value;
   if (inputs.length) {
      inputs.forEach((item) => {
         item.addEventListener("change", () => {
            if (item.checked) {
               value = item.value;
            }
            contents.forEach((item) => {
               item.classList.remove("active");
               if (item.getAttribute("data-tab") == value) {
                  item.classList.add("active");
               }
            });
         });
      });
   }
}
function accordion(linkSelector, contentSelector) {
   // получаем линки
   const openLinks = document.querySelectorAll(`${linkSelector}`);
   // контенты
   const contents = document.querySelectorAll(`${contentSelector}`);
   if (openLinks.length > 0) {
      for (let i = 0; i < openLinks.length; i++) {
         let openLink = openLinks[i];
         openLink.addEventListener("click", () => {
            // все прячем
            for (let j = 0; j < contents.length; j++) {
               // если хоть один открывается - return
               if (contents[j].classList.contains("collapsing")) {
                  return;
               } // Иначе
               // все прячем
               slideHide(contents[j]);
            }
            for (let j = 0; j < openLinks.length; j++) {
               openLinks[j].classList.remove("active");
            }
            // записываем в переменную нужный таб
            let content = contents[i];
            // работаем с классами линка
            if (content.classList.contains("collapsing")) {
               return;
            } else if (content.classList.contains("collapse_show")) {
               openLink.classList.remove("active");
            } else {
               openLink.classList.add("active");
            }
            // показываем нужный
            slideShow(content);
         });
      }
   }
}

function slideShow(el, duration = 500) {
   // завершаем работу метода, если элемент содержит класс collapsing или collapse_show
   if (
      el.classList.contains("collapsing") ||
      el.classList.contains("collapse_show")
   ) {
      return;
   }
   // удаляем класс collapse
   el.classList.remove("collapse");
   // сохраняем текущую высоту элемента в константу height (это значение понадобится ниже)
   const height = el.offsetHeight;
   // устанавливаем высоте значение 0
   el.style["height"] = 0;
   // не отображаем содержимое элемента, выходящее за его пределы
   el.style["overflow"] = "hidden";
   // создание анимации скольжения с помощью CSS свойства transition
   el.style["transition"] = `height ${duration}ms ease`;
   // добавляем класс collapsing
   el.classList.add("collapsing");
   // получим значение высоты (нам этого необходимо для того, чтобы просто заставить браузер выполнить перерасчет макета, т.к. он не сможет нам вернуть правильное значение высоты, если не сделает это)
   el.offsetHeight;
   // установим в качестве значения высоты значение, которое мы сохранили в константу height
   el.style["height"] = `${height}px`;
   // по истечении времени анимации this._duration
   window.setTimeout(() => {
      // удалим класс collapsing
      el.classList.remove("collapsing");
      // добавим классы collapse и collapse_show
      el.classList.add("collapse");
      el.classList.add("collapse_show");
      // удалим свойства height, transition и overflow
      el.style["height"] = "";
      el.style["transition"] = "";
      el.style["overflow"] = "";
   }, duration);
}
function slideHide(el, duration = 500) {
   // завершаем работу метода, если элемент содержит класс collapsing или collapse_show
   if (
      el.classList.contains("collapsing") ||
      !el.classList.contains("collapse_show")
   ) {
      return;
   }
   // установим свойству height текущее значение высоты элемента
   el.style["height"] = `${el.offsetHeight}px`;
   // получим значение высоты
   el.offsetHeight;
   // установим CSS свойству height значение 0
   el.style["height"] = 0;
   // обрежем содержимое, выходящее за границы элемента
   el.style["overflow"] = "hidden";
   // добавим CSS свойство transition для осуществления перехода длительностью this._duration
   el.style["transition"] = `height ${duration}ms ease`;
   // удалим классы collapse и collapse_show
   el.classList.remove("collapse");
   el.classList.remove("collapse_show");
   // добавим класс collapsing
   el.classList.add("collapsing");
   // после завершения времени анимации
   window.setTimeout(() => {
      // удалим класс collapsing
      el.classList.remove("collapsing");
      // добавим класс collapsing
      el.classList.add("collapse");
      // удалим свойства height, transition и overflow
      el.style["height"] = "";
      el.style["transition"] = "";
      el.style["overflow"] = "";
   }, duration);
}
// const sort = new Select("#select", {
//    // placeholder: "Сортировка",
//    selectedId: ["Casio"],
//    multi: true,
//    placeholder: "text",
//    data: [
//       {
//          value: "Casio",
//          id: "Casio",
//       },
//       {
//          value: "Becker",
//          id: "Becker",
//       },
//       {
//          value: "Korg",
//          id: "Korg",
//       },
//       {
//          value: "Kawai",
//          id: "Kawai",
//       },
//       {
//          value: "Rockdale",
//          id: "Rockdale",
//       },
//       {
//          value: "Kurzweil",
//          id: "Kurzweil",
//       },
//       {
//          value: "Roland",
//          id: "Roland",
//       },
//       {
//          value: "Nux",
//          id: "Nux",
//       },
//       {
//          value: "Ringway",
//          id: "Ringway",
//       },
//       {
//          value: "Orla",
//          id: "Orla",
//       },
//       {
//          value: "Yamaha",
//          id: "Yamaha",
//       },
//       {
//          value: "Mikado",
//          id: "Mikado",
//       },
//       {
//          value: "Artesia",
//          id: "Artesia",
//       },
//       {
//          value: "Antares",
//          id: "Antares",
//       },
//       {
//          value: "Medeli",
//          id: "Medeli",
//       },
//       {
//          value: "Tesler",
//          id: "Tesler",
//       },
//    ],
//    onSelect(item, select) {
//       select.classList.add("filled");
//       console.log(item);
//    },
// });
