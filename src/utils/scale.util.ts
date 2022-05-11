import { PlatformInstance } from "platform-smart-tv";

const devicePixelRatio = 1;

export const getRealWidth = (): number => {
  if (PlatformInstance.isSmartTV() || PlatformInstance.isChrome()) {
    return window.innerWidth;
  }
  return Math.min(window.outerWidth, window.innerWidth) * devicePixelRatio;
};

export const getRealHeight = (): number => {
  if (PlatformInstance.isSmartTV() || PlatformInstance.isChrome()) {
    return window.innerHeight;
  }
  return Math.min(window.outerHeight, window.innerHeight) * devicePixelRatio;
};

export const scaleFont = (): { width: number; height: number } => {
  const RATIO_BASE = 1280 / 720;
  const RATIO = getRealWidth() / getRealHeight();
  const SCALE_RATIO =
    RATIO < RATIO_BASE
      ? (getRealWidth() * 100) / 1280
      : (getRealHeight() * 100) / 720;
  document
    .getElementsByTagName("html")[0]
    .setAttribute("style", `font-size: ${SCALE_RATIO}%;`);
  const dimentions = {
    width: RATIO < RATIO_BASE ? getRealWidth() : getRealHeight() * RATIO_BASE,
    height: RATIO < RATIO_BASE ? getRealWidth() / RATIO_BASE : getRealHeight(),
    fontScale: SCALE_RATIO,
  };
  return {
    width: RATIO < RATIO_BASE ? getRealWidth() : getRealHeight() * RATIO_BASE,
    height: RATIO < RATIO_BASE ? getRealWidth() / RATIO_BASE : getRealHeight(),
  };
};
