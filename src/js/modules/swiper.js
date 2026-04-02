// Swiper本体を読み込む
import Swiper from "swiper";

// 使いたい機能だけ modules から読み込む
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// SwiperのCSSを読み込む
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiperを初期化する関数
export function initSwiper() {
  const worksSlider = document.querySelector(".p-works-swiper");

  if (!worksSlider) return;

  const swiper = new Swiper(worksSlider, {
    modules: [Navigation, Pagination, Autoplay],

    loop: true,
    slidesPerView: 1,
    speed: 800,

    autoplay: {
      delay: 6000, // 6秒ごとに切り替え
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".p-works-swiper__button--next",
      prevEl: ".p-works-swiper__button--prev",
    },

    pagination: {
      el: ".p-works-swiper__pagination",
      clickable: true,
    },
  });

  return swiper;
}
