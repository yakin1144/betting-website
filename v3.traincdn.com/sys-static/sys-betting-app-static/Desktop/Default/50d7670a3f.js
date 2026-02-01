import {
  WeightType as t,
  size_constants_sizeType as s,
  theme_constants_themeType as e,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedFeature as a,
  Platforms as r,
} from "./entry-50afb6f36c.js";
const o = {
    expressDayCalendarIconSize: s.xs,
    expressDayCalendarIconIsSquare: !1,
    expressDayLoaderHeaderTheme: e.primary,
    expressDayLoaderContentTheme: e.gray100,
    expressDayItemTheme: e.gray30,
    expressDayItemMessageBlockTheme: e.gray100,
    expressDayItemButtonSize: s.l,
    expressDayItemButtonUppercase: !0,
    expressDayItemCaptionSize: s.l,
    expressDayItemHeaderTheme: e.primary,
    expressDayItemHeaderDeleteIcoSize: s.xs,
    expressDayGameTheme: e.gray100,
    expressDayGameUiMarketTheme: e.gray30,
    expressDayInfoTheme: e.gray100,
    expressDayInfoCaptionSize: s.m,
    expressDayInfoCaptionWeight: t.BOLD,
  },
  p = a("ExpressDayConfigDesktop", !0, [r.Desktop]),
  n = p.defineEntityImplementation(() => ({ config: o, styles: {} })),
  i = Object.freeze(
    Object.defineProperty({ __proto__: null, default: n }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { p as Contract, o as EXPRESS_DAY_CONFIG_COMMON, i as ExpressDayConfig };
