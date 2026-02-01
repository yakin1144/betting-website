import {
  theme_constants_themeType as e,
  size_constants_sizeType as t,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedFeature as o,
  Platforms as n,
} from "./entry-50afb6f36c.js";
const u = {
    uiButtonTheme: e.primary,
    uiColumnToggleButtonDecent: !0,
    uiColumnToggleButtonNarrow: !0,
    uiColumnToggleButtonTheme: e.primary_20,
    uiColumnToggleButtonIconSize: t.xxs,
    uiColumnToggleButtonTextSize: t.xs,
    leftSideBottomButtonsTheme: e.gray30,
    uiColumnToggleButtonClass: !1,
  },
  i = o("LeftSideAppConfigDesktop", !0, [n.Desktop]),
  l = i.defineEntityImplementation(() => ({ config: u })),
  s = Object.freeze(
    Object.defineProperty({ __proto__: null, default: l }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  i as Contract,
  u as LEFT_SIDE_APP_CONFIG_COMMON,
  s as LeftSideAppConfig,
};
