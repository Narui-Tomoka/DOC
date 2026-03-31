export function initPageTop() {
  // ページトップボタン本体を取得
  const pageTopBtn = document.querySelector(".c-pagetop");

  // heroセクションを取得
  const hero = document.querySelector("#hero");

  // 必要な要素がなければ処理しない
  if (!pageTopBtn || !hero) {
    return;
  }

  // =====================================
  // hero の表示状態を監視して、
  // ページトップボタンの表示・非表示を切り替える
  // =====================================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // hero が見えている間は非表示
          pageTopBtn.classList.add("is-hidden");
        } else {
          // hero が見えなくなったら表示
          pageTopBtn.classList.remove("is-hidden");
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    },
  );

  // hero の監視を開始
  observer.observe(hero);

  // =====================================
  // ボタンを押したらページトップへ戻る
  // =====================================
  pageTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
