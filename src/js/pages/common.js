import { initHamburger } from "../modules/hamburger";
import { initHeaderScroll } from "../modules/header";
import { initPageTop } from "../modules/pagetop";

export function initCommon() {
  initHamburger();
  initHeaderScroll();
  initPageTop();
}
