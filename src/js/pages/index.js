// =========================
// index page controller
// =========================

import "../../styles/style.scss";
// ================================
// modules の読み込み
// ================================

// ページトップボタン/ハンバーガーメニューの開閉処理
import { initPageTop } from "../modules/pagetop";
import { initHamburger } from "../modules/hamburger";

// ================================
// 初期化処理
// ================================

// HTMLの読み込みが終わってから実行する
document.addEventListener("DOMContentLoaded", () => {
  // ハンバーガーメニューを初期化
  initHamburger();

  // ページトップボタンを初期化
  initPageTop();
});
