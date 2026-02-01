import $_$ from "./$_$.js";
$_$();
import {
  size_constants_sizeType as o,
  theme_constants_themeType as t,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedFeature as r,
  Platforms as s,
} from "./entry-85993dc44c.js";
const e = r("UserBonusDropdownConfig", !0, [s.Desktop]),
  n = {
    isShowHoverAnimation: !0,
    isShowBtnCustomTheme: !1,
    isUiButtonUserStrong: !1,
    uiButtonUserIconSize: o.m,
    uiBadgeTheme: t.accent,
    uiBadgeSize: o.m,
  },
  i = e.defineEntityImplementation(() => ({ config: n })),
  p = Object.freeze(
    Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  u = e.defineEntityImplementation(() => ({
    config: { ...n, isShowHoverAnimation: !1, isShowBtnCustomTheme: !0 },
  })),
  g = Object.freeze(
    Object.defineProperty({ __proto__: null, default: u }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  d = e.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          ...n,
          isUiButtonUserStrong: !0,
          uiButtonUserIconSize: o.l,
          uiBadgeTheme: t.bad,
          uiBadgeSize: o.l,
        },
      }
  ),
  m = Object.freeze(
    Object.defineProperty({ __proto__: null, default: d }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  l = e.defineEntityImplementation(() => ({
    config: { ...n },
    style: {
      "--user-bonus-dropdown-badge-top": "8px",
      "--user-bonus-dropdown-badge-right": "8px",
    },
  })),
  _ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: l }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function a() {
  throw new Error("You can't use sync loaders on client");
}
const S = Object.freeze(
  Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  S as loadUserBonusDropdownConfigSync,
  p as userBonusDropdownConfig,
  g as userBonusDropdownConfig$1,
  m as userBonusDropdownConfig$2,
  _ as userBonusDropdownConfig$3,
};
