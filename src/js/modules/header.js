// ヘッダーのスクロール状態を制御する関数
export function initHeaderScroll() {
  // ヘッダー要素を取得
  const header = document.querySelector("#header");

  // 要素が存在しない場合は処理を中断
  if (!header) return;

  // スクロール判定のしきい値（0px以上で発火）
  // → ここを変更すれば「何pxスクロールしたら発火」に調整できる
  const scrollThreshold = 0;

  // requestAnimationFrameの多重実行を防ぐためのフラグ
  let isTicking = false;

  // =========================
  // ヘッダーの状態を更新する関数
  // =========================
  const updateHeaderState = () => {
    // 現在のスクロール量を取得
    const scrollY = window.scrollY;

    // しきい値よりスクロールしていたらクラスを付与
    if (scrollY > scrollThreshold) {
      header.classList.add("is-scrolled");
    } else {
      // 一番上に戻ったらクラスを削除
      header.classList.remove("is-scrolled");
    }

    // 次のrequestAnimationFrameを受け付けられるようにフラグを戻す
    isTicking = false;
  };

  // =========================
  // スクロールイベント時の処理
  // =========================
  const onScroll = () => {
    // すでに更新予約されていない場合のみ実行
    if (!isTicking) {
      // 次の描画タイミングで状態更新（パフォーマンス改善）
      window.requestAnimationFrame(updateHeaderState);

      // 更新予約済みにする
      isTicking = true;
    }
  };

  // =========================
  // スクロールイベント登録
  // =========================
  window.addEventListener("scroll", onScroll, {
    passive: true, // スクロール処理を軽くする（スクロールをブロックしない）
  });

  // =========================
  // 初期状態の反映
  // =========================
  // ページ読み込み時にも状態をチェック
  // → リロード時に途中位置でも正しく表示される
  updateHeaderState();
}
