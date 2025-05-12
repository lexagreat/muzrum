const maskOptions = {
   mask: "+{7} (000) 000-00-00",
};
if (document.querySelectorAll("[data-phone]").length) {
   document.querySelectorAll("[data-phone]").forEach((item) => {
      const mask = IMask(item, maskOptions);
   });
}
if (document.querySelectorAll("[data-date]").length) {
   document.querySelectorAll("[data-date]").forEach((item) => {
      const mask = IMask(item, {
         mask: "00.00.0000",
      });
   });
}
const body = document.body;
gsap.registerPlugin(ScrollTrigger);
// Инициализация Lenis
// const lenis = new Lenis({
//    duration: 1.2, // Длительность анимации
//    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Функция плавности
//    smooth: true, // Включение плавного скроллинга
//    direction: "vertical", // Направление скроллинга
//    gestureDirection: "vertical", // Направление жестов
//    smoothTouch: false, // Плавность на мобильных устройствах
//    touchMultiplier: 2, // Ускорение скроллинга на мобильных
//    infinite: false, // Отключение бесконечного скроллинга
// });

// // Функция для обновления анимации
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
   catalogPage();
   productPage();
   cartPage();
   checkoutPage();
   brendsPage();
   aboutPage();
});
function aboutPage() {
   function hero() {
      const visual = document.querySelector(".about-hero__visual");
      if (!visual) return;
      const textParts = document.querySelectorAll(".about-hero__text p");

      gsap.to(visual, {
         scrollTrigger: {
            trigger: ".about-hero", // элемент, который должен запускать анимацию
            start: "top 0%", // когда верх элемента достигает 90% высоты экрана
            end: "+=500vh", // когда низ элемента достигает верхней границы экрана
            markers: false, // включить маркеры для визуальной отладки
            scrub: 1.5, // плавность анимации при скролле
         },
         marginRight: 0, // конечное значение свойства marginRight
         paddingTop: 0,
      });
      gsap.to(".about-hero__image", {
         scrollTrigger: {
            trigger: ".about-hero", // элемент, который должен запускать анимацию
            start: "top 0%", // когда верх элемента достигает 90% высоты экрана
            end: "+=500vh", // когда низ элемента достигает верхней границы экрана
            markers: false, // включить маркеры для визуальной отладки
            scrub: 1.5, // плавность анимации при скролле
         },
         marginBottom: window.innerWidth > 568 ? "24px" : "12px",
         maxWidth:
            window.innerWidth > 1024
               ? "576px"
               : window.innerWidth > 568
               ? "235px"
               : "108px", // конечное значение свойства marginRight
      });
      gsap.to(".about-hero__logo", {
         scrollTrigger: {
            trigger: ".about-hero", // элемент, который должен запускать анимацию
            start: "top 0%", // когда верх элемента достигает 90% высоты экрана
            end: "+=500vh", // когда низ элемента достигает верхней границы экрана
            markers: false, // включить маркеры для визуальной отладки
            scrub: 1.5, // плавность анимации при скролле
         },
         maxWidth:
            window.innerWidth > 1024
               ? "576px"
               : window.innerWidth > 568
               ? "235px"
               : "108px", // конечное значение свойства marginRight
      });
      gsap.to(".about-hero__text", {
         scrollTrigger: {
            trigger: ".about-hero__text",
            start: "top 90%",
            end: "bottom top",
            markers: false,
            scrub: 1.5,
            onUpdate(self) {
               let progress = self.progress * 100;
               let condition1 = progress > 0 && progress < 55;
               let condition2 = progress >= 55 && progress < 86;
               let condition3 = progress >= 86;
               if (condition1) {
                  textParts[0].classList.add("black");
                  textParts[1].classList.remove("black");
                  textParts[2].classList.remove("black");
               }
               if (condition2) {
                  textParts[0].classList.remove("black");
                  textParts[1].classList.add("black");
                  textParts[2].classList.remove("black");
               }
               if (condition3) {
                  textParts[0].classList.remove("black");
                  textParts[1].classList.remove("black");
                  textParts[2].classList.add("black");
               }
            },
         },
      });
   }

   function bosses() {
      const row = document.querySelector(".about-bosses__row");
      if (!row) return;
      const images = document.querySelectorAll(".about-bosses__header ul li");
      const items = document.querySelectorAll(".about-bosses__item");
      const citates = document.querySelectorAll(".about-bosses__citate");
      gsap.to(row, {
         scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "bottom top",
            markers: false,
            scrub: 1.5,
            onUpdate(self) {
               let progress = self.progress * 100;
               let condition1 = progress > 0 && progress < 70;
               let condition2 = progress >= 70;
               if (condition1) {
                  images[0].classList.add("active");
                  images[1].classList.remove("active");
                  items[0].classList.add("active");
                  items[1].classList.remove("active");
                  citates[0].classList.add("active");
                  citates[1].classList.remove("active");
               }
               if (condition2) {
                  images[0].classList.remove("active");
                  images[1].classList.add("active");
                  items[0].classList.remove("active");
                  items[1].classList.add("active");
                  citates[0].classList.remove("active");
                  citates[1].classList.add("active");
               }
            },
         },
      });
   }
   function prefs() {
      const row = document.querySelector(".about-preferences__wrapper");
      if (!row) return;
      const images = document.querySelectorAll(".about-preferences__image");
      const items = document.querySelectorAll(".about-preferences__item");
      const line = document.querySelector(".about-preferences__line div");
      gsap.to(row, {
         scrollTrigger: {
            trigger: row,
            start: "top 72px",
            end: "bottom top",
            markers: false,
            scrub: 1.5,
            onUpdate(self) {
               let progress = self.progress * 100;
               let condition1 = progress > 0 && progress < 28;
               let condition2 = progress >= 28 && progress < 66;
               let condition3 = progress >= 66;
               if (condition1) {
                  images[0].classList.add("active");
                  images[1].classList.remove("active");
                  images[2].classList.remove("active");
                  items[0].classList.add("active");
                  items[1].classList.remove("active");
                  items[2].classList.remove("active");
               }
               if (condition2) {
                  images[1].classList.add("active");
                  images[2].classList.remove("active");
                  items[0].classList.remove("active");
                  items[1].classList.add("active");
                  items[2].classList.remove("active");
               }
               if (condition3) {
                  images[2].classList.add("active");
                  items[0].classList.remove("active");
                  items[1].classList.remove("active");
                  items[2].classList.add("active");
               }
            },
         },
      });
      gsap.to(line, {
         scrollTrigger: {
            trigger: row,
            start: "top 72px",
            end: "bottom top",
            markers: false,
            scrub: 1.5,
         },
         top: "100%",
         translate: "0 -100%",
      });
   }
   hero();
   bosses();
   prefs();
   if (window.innerWidth < 1025) {
      accordion(".about-team__header", ".about-team__collapse");
   }
   tabs('[name="showroom"]', ".about-showroom__image");
}
function headerWork() {
   const header = document.querySelector(".header");
   if (!header) return;
   const main = document.querySelector("main.main");

   if (!main) {
      header.classList.add("transparent");
   }
   if (document.querySelector(".white-header")) {
      header.classList.add("white");
   }
   let oldScrollTopPosition = 0;
   let hero = document.querySelector(".hero");

   const onScroll = () => {
      if (window.innerWidth > 992) {
         const scrollTopPosition = document.documentElement.scrollTop;
         if (scrollTopPosition <= 0) {
            return;
         }
         let scrollDown = oldScrollTopPosition < scrollTopPosition;
         if (scrollDown) {
            header.classList.add("scroll-down");
         } else {
            header.classList.remove("scroll-down");
         }

         oldScrollTopPosition = scrollTopPosition;
      }
      if (hero) {
         let heroHeight = hero.clientHeight;
         if (window.scrollY > heroHeight) {
            header.classList.remove("transparent");
         } else {
            header.classList.add("transparent");
         }
      }
   };
   const catalog = () => {
      const links = document.querySelectorAll("[data-hover]");
      if (!links.length) return;
      let currentLinkAttr, currentSubLinkAttr;
      const subLists = document.querySelectorAll("[data-hover-target]");
      const subsubLists = document.querySelectorAll(
         "[data-target-hover-target]"
      );
      const subLinks = document.querySelectorAll("[data-target-hover]");
      const imageLinks = document.querySelectorAll("[data-target-hover-image]");
      const images = document.querySelectorAll("[data-hover-image-target]");
      links.forEach((link) => {
         link.onmouseenter = () => {
            currentLinkAttr = link.getAttribute("data-hover");
            links.forEach((item) => {
               item.classList.remove("active");
            });
            link.classList.add("active");
            let targetElem = document.querySelector(
               `[data-hover-target="${currentLinkAttr}"]`
            );
            subLists.forEach((subItem) => {
               subItem.classList.remove("active");
            });
            subsubLists.forEach((subItem) => {
               subItem.classList.remove("active");
            });
            images.forEach((image) => {
               image.classList.remove("active");
            });
            targetElem.classList.add("active");
         };
      });
      subLinks.forEach((sublink) => {
         sublink.onmouseenter = () => {
            currentSubLinkAttr = sublink.getAttribute("data-target-hover");
            subLinks.forEach((item) => {
               item.classList.remove("active");
            });
            sublink.classList.add("active");
            let targetElem = document.querySelector(
               `[data-target-hover-target="${currentSubLinkAttr}"]`
            );
            subsubLists.forEach((subItem) => {
               subItem.classList.remove("active");
            });
            images.forEach((image) => {
               image.classList.remove("active");
            });
            targetElem.classList.add("active");
         };
      });
      imageLinks.forEach((link) => {
         link.onmouseenter = () => {
            imageLinks.forEach((item) => {
               item.classList.remove("active");
            });
            link.classList.add("active");
            let targetElem = document.querySelector(
               `[data-hover-image-target="${link.getAttribute(
                  "data-target-hover-image"
               )}"]`
            );
            images.forEach((image) => {
               image.classList.remove("active");
            });
            targetElem.classList.add("active");
         };
      });
   };
   const mobile = () => {
      const links = document.querySelectorAll(
         ".header-menu__list li:has(button)"
      );
      const headerMenuCloseBtn = document.querySelector(
         ".header-menu__upper .modal__close"
      );
      headerMenuCloseBtn.onclick = () => {
         document.querySelectorAll(".header-menu__sub").forEach((item) => {
            item.style.left = "";
            item.style.marginLeft = "";
            showMainContent();
         });
      };
      links.forEach((item) => {
         let btn = item.querySelector("button");
         btn.onclick = () => {
            hideMainContent();
            let content = item.querySelector(".header-menu__sub");
            content.style.left = "0";
            let closeBtn = content.querySelector("button");
            closeBtn.onclick = () => {
               showMainContent();
               content.style.left = "";
            };
            const subLinks = content.querySelectorAll("li:has(button)");
            subLinks.forEach((sub) => {
               let subBtn = sub.querySelector("button");
               subBtn.onclick = () => {
                  content.style.marginLeft = "-120vw";
                  const target = subBtn
                     .closest("li")
                     .querySelector(".header-menu__sub");
                  target.style.left = "0";
                  target.querySelector("button").onclick = () => {
                     target.style.left = "";
                     content.style.marginLeft = "";
                  };
               };
            });
         };
      });
      const hideMainContent = () => {
         document.querySelector(
            ".header-menu .header-menu__list"
         ).style.marginLeft = "-120vw";
         document.querySelector(
            ".header-menu .header-catalog__popular"
         ).style.marginLeft = "-120vw";
         document.querySelector(
            ".header-menu .header-menu__contacts"
         ).style.marginLeft = "-120vw";
      };
      const showMainContent = () => {
         document.querySelector(
            ".header-menu .header-menu__list"
         ).style.marginLeft = "";
         document.querySelector(
            ".header-menu .header-catalog__popular"
         ).style.marginLeft = "";
         document.querySelector(
            ".header-menu .header-menu__contacts"
         ).style.marginLeft = "";
      };
   };
   const search = () => {
      const searchBtn = document.querySelector(".header-search");
      const searchBtnClose = document.querySelector(".header-search__close");
      const searchModal = document.querySelector("#headerSearch");
      searchBtn.onclick = (e) => {
         if (!e.target.closest(".header-search__input")) return;
         searchBtn.classList.add("active");
         header.style.zIndex = 102;
         header.classList.add("transparent");
         setTimeout(() => {
            popupOpen(searchModal);
         }, 400);
      };
      searchBtnClose.onclick = () => {
         popupClose(searchModal);
         header.classList.remove("transparent");

         setTimeout(() => {
            searchBtn.classList.remove("active");
            header.style.zIndex = "";
         }, 400);
      };
   };
   document.addEventListener("scroll", onScroll);
   catalog();
   mobile();
   search();
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
function catalogPage() {
   const filters = document.querySelector(".catalog-filters");
   if (!filters) return;
   if (document.querySelector("#brandSelect")) {
      const brandSelect = new Select("#brandSelect", {
         placeholder: "Бренд",
         selectedId: [],
         multi: true,
         data: [
            {
               value: "Casio",
               id: "Casio",
            },
            {
               value: "Becker",
               id: "Becker",
            },
            {
               value: "Korg",
               id: "Korg",
            },
            {
               value: "Kawai",
               id: "Kawai",
            },
            {
               value: "Rockdale",
               id: "Rockdale",
            },
            {
               value: "Kurzweil",
               id: "Kurzweil",
            },
            {
               value: "Roland",
               id: "Roland",
            },
            {
               value: "Nux",
               id: "Nux",
            },
            {
               value: "Ringway",
               id: "Ringway",
            },
            {
               value: "Orla",
               id: "Orla",
            },
            {
               value: "Yamaha",
               id: "Yamaha",
            },
            {
               value: "Mikado",
               id: "Mikado",
            },
            {
               value: "Artesia",
               id: "Artesia",
            },
            {
               value: "Antares",
               id: "Antares",
            },
            {
               value: "Medeli",
               id: "Medeli",
            },
            {
               value: "Tesler",
               id: "Tesler",
            },
         ],
         onSelect(item, select) {
            if (select.querySelectorAll(".selected").length) {
               select.classList.add("filled");
            }
         },
      });
   }
   const colorSelect = () => {
      const colorS = document.querySelector("#colorSelect");
      if (!colorS) return;
      colorS.onclick = (e) => {
         let { type } = e.target.dataset;
         if (type === "clear") {
            colorS.classList.remove("filled");

            colorS
               .querySelectorAll("input")
               .forEach((item) => (item.checked = false));
         } else if (["input", "back", "header"].includes(type)) {
            if (colorS.classList.contains("open")) {
               colorS.classList.remove("open");
            } else {
               colorS.classList.add("open");
            }
         } else if (e.target.closest("label")) {
            if (colorS.querySelectorAll("input:checked").length) {
               colorS.classList.add("filled");
               colorS.querySelector(".select__title span.count").innerHTML =
                  colorS.querySelectorAll("input:checked").length;
            } else {
               colorS.classList.remove("filled");
            }
         }
      };
   };
   if (document.querySelector("#sortSelect")) {
      const sortSelect = new Select("#sortSelect", {
         placeholder: "Сортировка",
         selectedId: "",
         multi: false,
         data: [
            {
               id: "vibor-muzrum",
               value: "выбор музрум",
            },
            {
               id: "sort1",
               value: "популярные",
            },
            {
               id: "sort2",
               value: "по новизне",
            },
            {
               id: "sort3",
               value: "по возрастанию цены",
            },
            {
               id: "sort4",
               value: "по убыванию цены",
            },
         ],
         onSelect(item, select) {
            if (select.querySelectorAll(".selected").length) {
               select.classList.add("filled");
            }
         },
      });
   }
   const saleBannerAnim = () => {
      const images = document.querySelectorAll(".sale-banner img");
      if (!images.length) return;
      let index = 0;
      setInterval(() => {
         images.forEach((item) => item.classList.remove("active"));
         images[index].classList.add("active");
         if (index < images.length - 1) {
            index++;
         } else {
            index = 0;
         }
      }, 500);
   };
   const changeView = () => {
      const inputs = document.querySelectorAll('[name="catalog-view"]');
      const wrapper = document.querySelector(".catalog-products");
      inputs.forEach((item) => {
         item.addEventListener("change", (e) => {
            if (e.target.value == 1) {
               wrapper.classList.add("row");
            } else {
               wrapper.classList.remove("row");
            }
         });
      });
   };
   const priceSelect = () => {
      let min = 0; // переменные для макс и мин цены
      let max = 400000;
      if (!document.querySelector("#priceSelect")) return;
      makeRange("#priceSelect", max, 1000);
      const priceS = document.querySelector("#priceSelect");
      let inputs = priceS.querySelectorAll("input");

      priceS.onclick = (e) => {
         let { type } = e.target.dataset;
         if (type === "clear") {
            priceS.classList.remove("filled");
            // тут сброс при нажатии на крестик
            inputs[0].value = min;
            inputs[1].value = max;
            priceS.querySelector(".price-slider").style.left = 0;
            priceS.querySelector(".price-slider").style.right = 0;
         } else if (["input", "back", "header"].includes(type)) {
            if (priceS.classList.contains("open")) {
               priceS.classList.remove("open");
            } else {
               priceS.classList.add("open");
            }
         }
      };
      inputs.forEach((input, index) => {
         input.addEventListener("input", (e) => {
            if (inputs[0].value == min && inputs[1].value == max) {
               priceS.classList.remove("filled");
            } else {
               priceS.classList.add("filled");
            }
         });
      });
   };
   const faqSection = () => {
      const wrapper = document.querySelector(".catalog-faq__list");
      if (!wrapper) return;
      const cursor = document.querySelector(".catalog-faq__cursor");
      wrapper.onmouseenter = (e) => {
         cursor.classList.add("show");
         cursor.style.left = e.layerX + "px";
         cursor.style.top = e.layerY + "px";
      };
      wrapper.onmousemove = (e) => {
         cursor.style.left = e.layerX + "px";
         cursor.style.top = e.layerY + "px";
      };
      wrapper.onmouseleave = (e) => {
         cursor.classList.remove("show");
         cursor.style.left = e.layerX + "px";
         cursor.style.top = e.layerY + "px";
      };
      document.querySelectorAll(".catalog-faq__item").forEach((item) => {
         let handler = () => {
            const condition =
               item.querySelector(".catalog-faq__header.active") ||
               item.querySelector(".collapsing");
            if (condition) {
               cursor.classList.add("active");
            } else {
               cursor.classList.remove("active");
            }
         };
         let clickHandler = (e) => {
            if (
               e.target
                  .closest(".catalog-faq__item")
                  .querySelector(".catalog-faq__header.active")
            ) {
               cursor.classList.add("active");
            } else {
               cursor.classList.remove("active");
            }
         };
         item.addEventListener("mouseenter", handler);
         item.addEventListener("mousemove", handler);
         item.addEventListener("mouseleave", handler);
         item.addEventListener("click", clickHandler);
      });
      accordion(".catalog-faq__header", ".catalog-faq__spoiler");
   };
   const rentHeroSlider = () => {
      const slider = document.querySelector(".rent-hero__visual .swiper");
      if (!slider) return;
      let infoArray = [
         {
            title: "Аренда цифровых пианино в Москве и МО",
            button: "подобрать",
            text: [
               "Прокатный парк От официального дилера Yamaha, Casio, Roland, Korg, Nux и Rockdale",
            ],
         },
         {
            title: "Новые инструменты и страховка от поломки",
            button: "",
            text: [
               "Все наши инструменты с действующей гарантией производителя",
               "Не бойтесь повредить инструмент во время аренды. Если что-то выйдет из строя, мы привезем вам новый, а неполадку устраним за счет гарантийного обслуживания.",
            ],
         },
         {
            title: "Аренда цифровых пианино в Москве и МО",
            button: "подобрать",
            text: [
               "Прокатный парк От официального дилера Yamaha, Casio, Roland, Korg, Nux и Rockdale",
            ],
         },
         {
            title: "Новые инструменты и страховка от поломки",
            button: "",
            text: [
               "Все наши инструменты с действующей гарантией производителя",
               "Не бойтесь повредить инструмент во время аренды. Если что-то выйдет из строя, мы привезем вам новый, а неполадку устраним за счет гарантийного обслуживания.",
            ],
         },
      ];
      const renderTextPart = async (i) => {
         let object = infoArray[i];
         const title = document.querySelector(".rent-hero__title");
         const list = document.querySelector(".rent-hero__list");
         const btnItems = document.querySelectorAll(".rent-hero__info .btn p");
         await anim();
         await delay(500); // Задержка в 500 миллисекунд
         title.innerHTML = `<p><span>${object.title}</span></p>`;
         list.innerHTML = object.text
            .map((text) => `<li><span>${text}</span></li>`)
            .join(" ");
         if (object.button.length) {
            document
               .querySelector(".rent-hero__info .btn")
               .classList.remove("hidden");
            btnItems.forEach((item) => {
               item.innerHTML = object.button;
            });
         } else {
            document
               .querySelector(".rent-hero__info .btn")
               .classList.add("hidden");
         }

         // Устанавливаем высоту текста
         // const textHeight = textElem.scrollHeight; // Получаем высоту текста
         // textElem.style.minHeight = `${textElem.clientHeight}px`; // Устанавливаем высоту

         await secondAnim();
         async function anim() {
            let spanItems = [
               ...title.querySelectorAll("span"),
               ...list.querySelectorAll("li span"),
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
               ...title.querySelectorAll("span"),
               ...list.querySelectorAll("li span"),
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
      };
      const paginations = document.querySelectorAll(
         ".rent-hero .home-hero__pagination > div"
      );
      const slides = document.querySelectorAll(
         ".rent-hero__visual .swiper .swiper-slide"
      );
      const progressCircles = document.querySelectorAll(".progress-circle");
      const totalLength = 138; // Окружность круга (примерно 2 * π * r)
      let swiper = new Swiper(slider, {
         slidesPerView: 1,
         creativeEffect: {
            prev: {
               shadow: true,
               translate: ["20px", 0, -1],
               scale: 0.9,
            },
            next: {
               translate: ["100%", 0, 0],
            },
         },
         speed: 1000,
         autoplay: {
            enabled: true,
            delay: 5000,
         },
         effect: "creative",
         loop: true,
         allowTouchMove: false, // Отключить свайпы
         simulateTouch: false, // Отключить эмуляцию свайпов мышью
         effect: "creative",
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
                     ".rent-hero__visual .swiper-slide.swiper-slide-active"
                  )
               ) {
                  i = document
                     .querySelector(
                        ".rent-hero__visual .swiper-slide.swiper-slide-active"
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
               renderTextPart(i);
            },
            init() {
               paginations[0].classList.add("active");
               slides[0].classList.add("active");
               renderTextPart(0);
            },
         },
      });
   };
   rentHeroSlider();
   faqSection();
   colorSelect();
   changeView();
   priceSelect();
   makeRange("#priceRange1", 400000, 1000);
   saleBannerAnim();
   accordion(".filters-modal__subheader", ".filters-modal__collapse");
}
function cartPage() {
   const validatePromo = () => {
      const inputWrapper = document.querySelector(".cart-aside__promo");
      if (!inputWrapper) return;
      let [clearBtn, nextBtn] = inputWrapper.querySelectorAll("button");
      const input = inputWrapper.querySelector("input");
      clearBtn.onclick = () => {
         input.value = "";
         inputWrapper.classList.remove("filled");
      };
      nextBtn.onclick = () => {
         inputWrapper.classList.add("loader");
      };
      input.oninput = (e) => {
         if (e.target.value) {
            inputWrapper.classList.add("filled");
         }
      };
   };
   const productSliders = () => {
      const complects = document.querySelectorAll(".cart-complect");
      if (!complects.length) return;
      const withs = document.querySelectorAll(".cart-with");
      complects.forEach((item) => {
         let slider = new Swiper(item.querySelector(".swiper"), {
            slidesPerView: 1,
            spaceBetween: 12,
            navigation: {
               prevEl: item.querySelector(".prev"),
               nextEl: item.querySelector(".next"),
            },
            mousewheel: {
               enabled: true,
               forceToAxis: true,
            },
         });
      });
      withs.forEach((item) => {
         let slider = new Swiper(item.querySelector(".swiper"), {
            slidesPerView: 1,
            spaceBetween: 12,
            navigation: {
               prevEl: item.querySelector(".prev"),
               nextEl: item.querySelector(".next"),
            },
            mousewheel: {
               enabled: true,
               forceToAxis: true,
            },
         });
      });
   };
   validatePromo();
   productSliders();
   tabs("[name='cart-tabs']", ".cart-page__main [data-tab]");
}
function checkoutPage() {
   tabs(
      '[name="checkout-delivery"]',
      ".checkout-delivery__content > [data-tab]"
   );
   const select = document.querySelector("#deliveryModalSelect");
   if (!select) return;
   new Select("#deliveryModalSelect", {
      placeholder: "Выберите службу доставки",
      selectedId: "cdek",
      multi: false,
      data: [
         {
            id: "cdek",
            value: "CDEK",
         },
         {
            id: "yandex",
            value: "Yandex",
         },
         {
            id: "box",
            value: "Boxberry",
         },
      ],
      onSelect(item, select) {
         // if (select.querySelectorAll(".selected").length) {
         //    select.classList.add("filled");
         // }
      },
   });
   const pvzButtons = document.querySelectorAll(".pvz-card__right button");
   pvzButtons.forEach((btn) => {
      btn.onclick = () => {
         let collapse = btn
            .closest(".pvz-card")
            .querySelector(".pvz-card__collapse");
         if (collapse.classList.contains("collapsing")) return;
         if (collapse.classList.contains("collapse_show")) {
            slideHide(collapse);
            btn.classList.remove("active");
         } else {
            slideShow(collapse);
            btn.classList.add("active");
         }
      };
   });
   const radios = document.querySelectorAll(".delivery-modal__tabs input");
   const map = document.querySelector(".delivery-modal__map");
   const searchInput = document.querySelector(".delivery-modal__search");
   radios.forEach((radio) => {
      radio.onchange = () => {
         console.log(radio.value);
         if (radio.value == 1) {
            map.style.zIndex = "";
            searchInput.style.zIndex = "";
         } else {
            map.style.zIndex = 15;
            searchInput.style.zIndex = 15;
         }
      };
   });
}
function brendsPage() {
   const linkTitles = document.querySelectorAll(".brends-link__title");
   if (!linkTitles.length) return;
   const booksListElem = document.querySelector(".brends-page__boooks");
   let firstBooks = [
      ...new Set([...linkTitles].map((item) => item.innerHTML[0])),
   ];
   const links = document.querySelectorAll(".brends-link");
   links.forEach((link) => {
      link.setAttribute(
         "data-scroll",
         link.querySelector(".brends-link__title").innerHTML[0]
      );
   });
   booksListElem.innerHTML = firstBooks
      .map((item) => {
         return `<li>
                  <button data-scroll="${item.trim()}" class="icon-btn white">
                     ${item.trim()}
                  </button>
               </li>`;
      })
      .join(""); // Преобразуем массив в строку без разделителей
   function useNavigation() {
      let headerHeight;

      headerHeight = document
         .querySelector(".header")
         .getBoundingClientRect().height;
      mainPageNavigation();

      function mainPageNavigation() {
         const links = document.querySelectorAll(
            ".brends-page__boooks .icon-btn"
         );
         const sections = document.querySelectorAll(".brends-link");
         if (!links.length) {
            return;
         }
         links.forEach((link) => {
            link.addEventListener("click", () => {
               let id = link.getAttribute("data-scroll");
               // link.classList.add("active");
               sections.forEach((section) => {
                  if (section.getAttribute("data-scroll") === id) {
                     window.scrollBy({
                        top: section.getBoundingClientRect().top - headerHeight,
                        behavior: "smooth",
                     });
                  }
               });
            });
         });

         const callback = (entries, observer) => {
            entries.forEach((entry) => {
               if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                  let section = entry.target
                     .closest("li")
                     .nextElementSibling.querySelector("[data-scroll]");
                  console.log(section);
                  if (!section || !section.getAttribute("data-scroll")) {
                     return;
                  }
                  let id = section.getAttribute("data-scroll");
                  links.forEach((link) => {
                     link.classList.remove("active");
                     if (link.getAttribute("data-scroll") === id) {
                        link.classList.add("active");
                     }
                  });
               } else {
                  if (entry.boundingClientRect.top < 0) {
                     console.log("second");
                     let section = entry.target;
                     if (!section || !section.getAttribute("data-scroll")) {
                        return;
                     }
                     let id = section.getAttribute("data-scroll");
                     links.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("data-scroll") === id) {
                           link.classList.add("active");
                        }
                     });
                  }
               }
            });
         };

         const options = {
            // root: по умолчанию window, но можно задать любой элемент-контейнер
            rootMargin: "0px 0px 75px 0px",
            threshold: 0,
         };

         const observer = new IntersectionObserver(callback, options);

         sections.forEach((section) => observer.observe(section));
      }
   }
   useNavigation();
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
      mousewheel: {
         enabled: true,
         forceToAxis: true,
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
      if (card.querySelector(".product-card__color input")) {
         let inputSelector = card.querySelector(
            ".product-card__color input"
         ).name;
         tabs(`[name=${inputSelector}]`, `[data-tab-name=${inputSelector}]`);
      }
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
function productPage() {
   function hero() {
      const slider = document.querySelector(".product-hero .swiper");
      if (!slider) return;
      let swiper = new Swiper(slider, {
         slidesPerView: "auto",
         freeMode: {
            enabled: true,
            sticky: true,
            // momentum: true, // Плавная инерция при прокрутке
         },
         loop: true,
         speed: 7000,
         autoplay: {
            enabled: true,
            delay: 0,
            disableOnInteraction: false, // Автопрокрутка не отключается при взаимодействии
         },
      });
      // Увеличиваем скорость при ручной прокрутке
      swiper.on("touchStart", () => {
         swiper.params.speed = 1000; // Устанавливаем более высокую скорость для ручной прокрутки
      });

      // После завершения ручной прокрутки
      swiper.on("touchEnd", () => {
         setTimeout(() => {
            swiper.params.speed = 7000; // Возвращаем медленную скорость для автопрокрутки
            swiper.autoplay.start(); // Включаем автопрокрутку снова
         }, 200); // Небольшая задержка, чтобы дать пользователю возможность прокрутить несколько слайдов
      });
      const btn = document.querySelector(".product-hero__description button");
      const text = document.querySelector(".product-hero__description ul");
      btn.onclick = () => {
         btn.classList.toggle("active");
         text.classList.toggle("full");
      };
   }
   async function description() {
      const section = document.querySelector(".product-description");
      if (!section) return;
      let array = [
         {
            title: "Becker BAP 62R",
            subtitle:
               "Цифровое пианино компании Becker, использующей в производстве современные итальянские и французские технологии. Бренд основал мастер фортепиано Якоб Беккер в Петербурге в 1841 году. Компания стала самым известным производством клавишных музыкальных инструментов. Пианино быстро получило распространение за пределами страны благодаря отличному звучанию, качеству инструмента, высокому уровню сборки и долговечности. ",
         },
         {
            title: "Звук",
            subtitle:
               "Цифровое пианино компании Becker, использующей в производстве современные итальянские и французские технологии. Бренд основал мастер фортепиано Якоб Беккер в Петербурге в 1841 году. Компания стала самым известным производством клавишных музыкальных инструментов. Пианино быстро получило распространение за пределами страны ",
         },
         {
            title: "Клавиатура",
            subtitle:
               "Цифровое пианино компании Becker, использующей в производстве современные итальянские и французские технологии. Бренд основал мастер фортепиано Якоб Беккер в Петербурге в 1841 году. Компания стала самым известным производством клавишных музыкальных инструментов. Пианино быстро получило распространение за пределами страны благодаря отличному звучанию, качеству инструмента ",
         },
         {
            title: "Функции",
            subtitle:
               "Цифровое пианино компании Becker, использующей в производстве современные итальянские и французские технологии. Бренд основал мастер фортепиано Якоб Беккер в Петербурге в 1841 году. Компания стала самым известным производством клавишных музыкальных инструментов. Пианино быстро получило распространение за пределами страны благодаря отличному звучанию, качеству инструмента, высокому уровню ",
         },
         {
            title: "Дизайн",
            subtitle:
               "Цифровое пианино компании Becker, использующей в производстве современные итальянские и французские технологии. Бренд основал мастер фортепиано Якоб Беккер в Петербурге в 1841 году. Компания стала самым известным производством клавишных музыкальных инструментов. Пианино быстро получило распространение за пределами страны благодаря отличному звучанию, качеству инструмента, высокому уровню сборки ",
         },
         {
            title: "для кого",
            subtitle:
               "Цифровое пианино компании Becker, использующей в производстве современные итальянские и французские технологии. Бренд основал мастер фортепиано Якоб Беккер в Петербурге в 1841 году. Компания стала самым известным производством клавишных музыкальных инструментов. Пианино быстро  ",
         },
      ];
      const title = document.querySelector(".product-description__title");
      const text = document.querySelector(".product-description__text");
      const prevBtn = document.querySelector(
         ".reviews-section__navigation .prev"
      );
      const nextBtn = document.querySelector(
         ".reviews-section__navigation .next"
      );
      const tabs = document.querySelectorAll(
         ".product-description__tabs input"
      );
      const paginationChangable = document.querySelector(
         ".reviews-section__pagination span"
      );
      const images = document.querySelectorAll(
         ".product-description__gallery img"
      );
      let currentIndex = 0;
      let prevIndex = 0;
      prevBtn.onclick = () => {
         if (currentIndex == 0) {
            currentIndex = tabs.length - 1;
            prevIndex = 0;
         } else {
            prevIndex = currentIndex;
            currentIndex--;
         }
         tabs[currentIndex].checked = true;
         paginationChangable.innerHTML = currentIndex + 1;
         renderCurrentSlide();
      };
      nextBtn.onclick = () => {
         if (currentIndex == tabs.length - 1) {
            currentIndex = 0;
            prevIndex = tabs.length - 1;
         } else {
            prevIndex = currentIndex;
            currentIndex++;
         }
         tabs[currentIndex].checked = true;
         paginationChangable.innerHTML = currentIndex + 1;
         renderCurrentSlide();
      };
      tabs.forEach((item, index) => {
         item.addEventListener("change", () => {
            prevIndex = currentIndex;
            currentIndex = index;
            paginationChangable.innerHTML = currentIndex + 1;
            renderCurrentSlide();
         });
      });
      async function renderCurrentSlide() {
         images.forEach((item) => {
            item.classList.remove("active");
            item.classList.remove("prev");
         });
         images[prevIndex].classList.add("prev");
         images[currentIndex].classList.add("active");

         anim();
         delay(500);
         title.innerHTML = array[currentIndex].title
            .split(" ")
            .map((word) => `<p><span>${word}</span></p>`)
            .join(" ");
         text.innerHTML = `<p>${array[currentIndex].subtitle}</p>`;
         anim();
      }
      function delay(ms) {
         return new Promise((resolve) => setTimeout(resolve, ms));
      }
      async function anim() {
         let spanItems = [...title.querySelectorAll("span")];
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
   }
   hero();
   description();
   tabs('[name="product-tabs"]', ".product-tabs__items > div");
   accordion(".rent-description__header", ".rent-description__collapse");
}
function makeRange(blockSelector, max = 10000, gap = 500) {
   //  Script.js
   const rangevalue = document.querySelector(
      blockSelector + " " + ".slider-container .price-slider"
   );
   if (
      !document.querySelector(
         blockSelector + " " + ".slider-container .price-slider"
      )
   )
      return;
   const rangeInputvalue = document.querySelectorAll(
      blockSelector + " " + ".range-input input"
   );

   // Set the price gap
   let priceGap = gap;
   // Adding event listners to price input elements
   const priceInputvalue = document.querySelectorAll(
      blockSelector + " " + ".price-input input"
   );
   for (let i = 0; i < priceInputvalue.length; i++) {
      priceInputvalue[i].addEventListener("input", (e) => {
         // Parse min and max values of the range input
         let minp = parseInt(priceInputvalue[0].value);
         let maxp = parseInt(priceInputvalue[1].value);
         let diff = maxp - minp;

         if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
         }

         // Validate the input values
         if (maxp > max) {
            alert("maximum price cannot be greater than " + max);
            priceInputvalue[1].value = max;
            maxp = max;
         }

         if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;

            if (minp < 0) {
               priceInputvalue[0].value = 0;
               minp = 0;
            }
         }

         // Check if the price gap is met
         // and max price is within the range
         if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
            if (e.target.className === "min-input") {
               rangeInputvalue[0].value = minp;
               let value1 = rangeInputvalue[0].max;
               rangevalue.style.left = `${(minp / value1) * 100}%`;
            } else {
               rangeInputvalue[1].value = maxp;
               let value2 = rangeInputvalue[1].max;
               rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
            }
         }
      });

      // Add event listeners to range input elements
      for (let i = 0; i < rangeInputvalue.length; i++) {
         rangeInputvalue[i].addEventListener("input", (e) => {
            let minVal = parseInt(rangeInputvalue[0].value);
            let maxVal = parseInt(rangeInputvalue[1].value);

            let diff = maxVal - minVal;

            // Check if the price gap is exceeded
            if (diff < priceGap) {
               // Check if the input is the min range input
               if (e.target.className === "min-range") {
                  rangeInputvalue[0].value = maxVal - priceGap;
               } else {
                  rangeInputvalue[1].value = minVal + priceGap;
               }
            } else {
               // Update price inputs and range progress
               priceInputvalue[0].value = minVal;
               priceInputvalue[1].value = maxVal;
               rangevalue.style.left = `${
                  (minVal / rangeInputvalue[0].max) * 100
               }%`;
               rangevalue.style.right = `${
                  100 - (maxVal / rangeInputvalue[1].max) * 100
               }%`;
            }
         });
      }
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
      if (type === "clear") {
         this.$el.classList.remove("filled");
         this.$value.innerHTML = `
            ${this.options.placeholder}
            
            `;
         this.$el
            .querySelectorAll(".select__item")
            .forEach((item) => item.classList.remove("selected"));
         this.$el
            .querySelectorAll("input")
            .forEach((item) => (item.checked = false));
         this.selectedId = [];

         return;
      } else if (type === "input") {
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
            this.$value.innerHTML = `
            ${this.options.placeholder}
            <span>${this.current.length}</span>
            `;
         } else {
            this.$value.innerHTML = this.options.placeholder;
            this.$el.classList.remove("filled");
         }
      } else {
         this.selectedId = id;
         this.$value.innerHTML = this.current.value;
         if (this.selectedId == "vibor-muzrum") {
            this.$value.innerHTML = `${this.current.value} <button class="hint">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M6.99984 12.8333C3.77817 12.8333 1.1665 10.2216 1.1665 6.99999C1.1665 3.77833 3.77817 1.16666 6.99984 1.16666C10.2215 1.16666 12.8332 3.77833 12.8332 6.99999C12.8332 10.2216 10.2215 12.8333 6.99984 12.8333ZM6.4165 8.74999V9.91666H7.58317V8.74999H6.4165ZM7.58317 7.79046C8.4265 7.53946 9.0415 6.7582 9.0415 5.83332C9.0415 4.70574 8.12742 3.79166 6.99984 3.79166C6.00934 3.79166 5.18355 4.49702 4.99744 5.43284L6.14164 5.66169C6.22144 5.26062 6.57535 4.95832 6.99984 4.95832C7.48307 4.95832 7.87484 5.35007 7.87484 5.83332C7.87484 6.31656 7.48307 6.70832 6.99984 6.70832C6.67766 6.70832 6.4165 6.96948 6.4165 7.29166V8.16666H7.58317V7.79046Z" fill="black" fill-opacity="0.35"/>
</svg>
<p>
Сначала покажем лучшее по версии Музрум
</p>

</button>`;
         }
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
         return `<li class="select__item ${cls}" data-type="item" data-id="${item.id}">
         
         ${item.value}
         </li>`;
      });
      return `
      <div class="select__header" data-type="header">
      <div class="select__back" data-type="back"></div>
      <div class="select__title" data-type="input">
         <span>${placeholder}</span>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9334 6.08291C14.1498 6.29933 14.1498 6.6502 13.9334 6.86662L7.99991 12.8001L2.06643 6.86662C1.85002 6.6502 1.85002 6.29933 2.06643 6.08291C2.28285 5.8665 2.73748 5.86637 2.9539 6.08278L8.00027 11.0924L12.9972 6.08272C13.2136 5.86631 13.717 5.8665 13.9334 6.08291Z" fill="black"/>
         </svg>
         <button data-type="clear">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 3L13 13M3 13L13 3" stroke="white"/>
</svg>    
         </button>      
         
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
// Popup
const popupLinks = document.querySelectorAll(".modal__link");
const lockPadding = document.querySelectorAll(".lock-padding");
const popupCloseIcon = document.querySelectorAll(".modal__close");

let unlock = true;

const timeout = 500;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute("href").replace("#", "");
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function (e) {
         popupClose(el.closest(".modal"));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector(".modal.open");
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add("open");
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest(".modal__content")) {
            popupClose(e.target.closest(".modal"));
         }
      });
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add("lock");
   // lenis.stop();

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
         }
      }
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
      // lenis.start();
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener("keydown", function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector(".modal.open");
      popupClose(popupActive);
   }
});
