// ハンバーガーメニューの開閉処理をまとめた関数
export function initHamburger() {
  // 必要な要素を取得
  const header = document.querySelector(".l-header");
  const hamburgerButton = document.querySelector(".l-header__hamburger");
  const spNav = document.querySelector(".l-header__sp-nav");
  const spNavLinks = document.querySelectorAll(".l-header__sp-link");

  // どれか1つでも見つからなければ処理を止める
  // → 別ページでヘッダー構造が違っていてもエラーになりにくい
  if (!header || !hamburgerButton || !spNav) return;

  // メニューを開く処理
  const openMenu = () => {
    // ヘッダーに is-open を付けて、Sass側の見た目を切り替える
    header.classList.add("is-open");

    // body にクラスを付けて、背景スクロールを止める
    document.body.classList.add("is-fixed");

    // アクセシビリティ対応
    // ボタンが「開いている状態」であることを伝える
    hamburgerButton.setAttribute("aria-expanded", "true");

    // ナビが見えている状態にする
    spNav.setAttribute("aria-hidden", "false");
  };

  // メニューを閉じる処理
  const closeMenu = () => {
    // is-open を外して見た目を戻す
    header.classList.remove("is-open");

    // body の固定を解除してスクロール可能に戻す
    document.body.classList.remove("is-fixed");

    // アクセシビリティ対応
    hamburgerButton.setAttribute("aria-expanded", "false");
    spNav.setAttribute("aria-hidden", "true");
  };

  // メニューの開閉を切り替える処理
  const toggleMenu = () => {
    // header に is-open が付いているかどうかで判定
    const isOpen = header.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // ハンバーガーボタンを押した時
  hamburgerButton.addEventListener("click", toggleMenu);

  // スマホメニュー内のリンクを押したらメニューを閉じる
  // → ユーザー体験がよくなる
  spNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Escキーを押したらメニューを閉じる
  // → キーボード操作にも対応できる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("is-open")) {
      closeMenu();
    }
  });

  // 画面幅がPCサイズに戻った時、
  // 開きっぱなしの状態を防ぐためにリセットする
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}
