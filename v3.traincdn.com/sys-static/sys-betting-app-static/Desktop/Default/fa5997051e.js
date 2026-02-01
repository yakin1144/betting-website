import $_$ from "./$_$.js";
$_$();
import { RIGHT_SIDE_CONFIG_COMMON as e } from "./8a75424771.js";
import {
  defineMultiImplementedFeature as i,
  Platforms as n,
} from "./entry-50afb6f36c.js";
import {
  theme_constants_themeType as o,
  size_constants_sizeType as l,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const t = i("RightSideConfigDesktop", !0, [n.Desktop]),
  g = t.defineEntityImplementation(() => ({ config: e })),
  p = Object.freeze(
    Object.defineProperty({ __proto__: null, default: g }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  a = t.defineEntityImplementation(() => ({
    config: { ...e, widgetLogoType: "image" },
  })),
  _ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  r = t.defineEntityImplementation(() => ({
    config: {
      ...e,
      widgetLogoType: "image",
      uiColumnToggleButtonClass: !0,
      uiColumnToggleButtonDecent: !1,
    },
  })),
  h = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  d = t.defineEntityImplementation(() => ({
    config: { ...e, uiColumnToggleButtonDecent: !1 },
  })),
  S = Object.freeze(
    Object.defineProperty({ __proto__: null, default: d }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  s = t.defineEntityImplementation(() => ({
    config: { ...e, showItemsCompactView: !1 },
  })),
  C = Object.freeze(
    Object.defineProperty({ __proto__: null, default: s }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  f = t.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          ...e,
          showItemsCompactView: !1,
          uiColumnToggleButtonDecent: !1,
          uiColumnToggleButtonIconSize: l.xs,
          showButtonRegistrationCompact: !1,
          isRightSideHover: !0,
          showRightSideReg: !1,
          downloadAppWidgetClosable: !1,
          downloadAppWidgetTabsUiSkeletonTheme: o.primary,
          downloadAppWidgetContentUiSkeletonTheme: o.primary_20,
          mediaContainerTheme: o.primary_20,
          bonusWidgetUiButtonUppercase: !1,
        },
        styles: {
          "--right-side-custom-border-radius": "calc(var(--border-radius) * 2)",
          "--right-side-compact-shown-bg": "var(--primary--40-bg)",
          "--coupon-column-compact-width": "60px",
          "--right-side-scrollbar-width": "0.3125rem",
          "--media-side-right": "7.5rem",
        },
      }
  ),
  y = Object.freeze(
    Object.defineProperty({ __proto__: null, default: f }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  t as Contract,
  p as RightSideConfig,
  _ as RightSideConfig$1,
  h as RightSideConfig$2,
  S as RightSideConfig$3,
  C as RightSideConfig$4,
  y as RightSideConfig$5,
};
