// =========================
// index page controller
// =========================

import "../../styles/style.scss";
// ================================
// modules の読み込み
// ================================

// ハンバーガーメニューの開閉処理
import { initHamburger } from "../modules/hamburger";

// ページトップボタンの処理
import { initPageTop } from "../modules/pagetop";

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
