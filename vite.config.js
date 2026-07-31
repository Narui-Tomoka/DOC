// vite.config.js
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: ".", // index.html があるディレクトリ
  base: "/DOC/",
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets", // ← assets フォルダを固定名にしておくとパスが安定する！
    emptyOutDir: true, // ビルド時に既にあるdistを削除してリセットしてくれる
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        company: path.resolve(__dirname, "company.html"),
        contact: path.resolve(__dirname, "contact.html"),
        news: path.resolve(__dirname, "news.html"),
        newsPage2: path.resolve(__dirname, "news-page2.html"),
        newsPage3: path.resolve(__dirname, "news-page3.html"),
        recruit: path.resolve(__dirname, "recruit.html"),
        service: path.resolve(__dirname, "service.html"),
        works: path.resolve(__dirname, "works.html"),
      },
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // CSSや画像のパスを一定に
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 画像パスの動作安定のため
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
