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
const lenis = new Lenis({
   duration: 0.4,
   smooth: true,
   direction: "vertical",
   // lerp: 0.05,
});
window.lenis = lenis;

function raf(time) {
   lenis.raf(time);
   requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
document.addEventListener("DOMContentLoaded", () => {
   headerWork();
   homePage();
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
   hero();
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
