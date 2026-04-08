// =========================
// index page controller
// =========================

import "../../styles/style.scss";
// ================================
// modules の読み込み
// ================================

// 各種処理を読み込み
import { initHeaderScroll } from "../modules/header";
import { initPageTop } from "../modules/pagetop";
import { initHamburger } from "../modules/hamburger";
import { initSwiper } from "../modules/swiper";
// ================================
// 初期化処理
// ================================

// HTMLの読み込みが終わってから実行する
document.addEventListener("DOMContentLoaded", () => {
  // ヘッダーの処理を初期化
  initHeaderScroll();

  // ハンバーガーメニューを初期化
  initHamburger();

  // ページトップボタンを初期化
  initPageTop();

  // swiperを初期化
  initSwiper();
});
