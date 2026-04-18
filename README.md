# 「JSON PlaceHolder」

## このファイルの目的

- 先生の添削時にコードの意図や実装時の工夫を伝えやすくするため
- 自分自身の振り返り・備忘録として

## 課題URL

- GitHub  
  https://github.com/Narui-Tomoka/DOC

- Figmaデザイン  
  https://www.figma.com/design/WsEnyb1U5DsxEz5Wa6CyPD/pon-design?node-id=1-144&t=sqXa4DttpbGjlZiF-1

## 使用技術

### 言語・ライブラリ

- HTML
- CSS（Sass）
- JavaScript

### 開発環境・ツール

- Vite
- Autoprefixer（VS Code 拡張機能）
- markdownlint（VS Code 拡張機能）
- Figma

## 各種便利サイト

## 参考サイト

### 今回の制作で意識したこと

## 前回の課題「WDC」の反省点

### line-heightやletter-spacingを調整して文章が読みやすいようにすべきだった

始めて自分でデザインを考えたため、文字の間隔まで気を遣えなかった。

### FLOCSS的な命名規則にしていたが、ディレクトリ構成が簡易的であった

今回は一般的に用いられるFLOCSSのディレクトリ構成になるようにした。

## 今回の実装での工夫

### ユーティリティクラスの使用

中央揃えやletter-spacingといった再利用性があり、局所的に使用するスタイルについてはユーティリティクラスを採用した。  
結果としてSassの記述が減り、HTMLを書きながらCSSを書くような直感的記述ができた。

## ブレイクポイント

ブレイクポイントについては以下の数値に設定した。

"lg": max-width: 1024px  
"md": max-width: 768px  
"sm": max-width: 576px

## レスポンシブ対応について

2025年で使われているスマホの約90%が画面幅375px以上であることから、画面幅375pxまでレイアウトが崩れないようにレスポンシブ対応を行った。

## Viteのモジュール機能の活用

各ページの拡張性・メンテナンス性を考え、共通処理をまとめておくファイル「common.js」を作成した。
