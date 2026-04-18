// =========================
// index page controller
// =========================

import "../../styles/style.scss";
import { initCommon } from "./common";
import { initSwiper } from "../modules/swiper";

// トップページ用の初期化
document.addEventListener("DOMContentLoaded", () => {
  // 全ページ共通処理
  initCommon();

  // トップページ固有の処理
  initSwiper();
});
