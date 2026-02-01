import $_$ from "./$_$.js";
$_$();
import {
  theme_constants_themeType as e,
  size_constants_sizeType as o,
  useNuxtApp as r,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedFeature as a,
  Platforms as l,
} from "./entry-50afb6f36c.js";
const i = {
    roundedToolbar: !1,
    gamesSearchSize: o.s,
    gamesButtonSearchSize: o.s,
    headerBarTheme: e.primary,
    toggleSelectionTheme: e.gray,
    toggleCaptionSize: o.s,
    loaderHeaderTheme: e.primary,
    loaderToolbarTheme: e.primary_20,
    navigationSportMenuThemeOptions: {
      UiSportsEvent: e.gray100,
      UiScrollbar: e.gray,
      UiSkeleton: e.primary_20,
      UiGamesLoader: e.gray100,
    },
  },
  u = a("CentralMenuConfig", !0, [l.Desktop]),
  s = u.defineEntityImplementation(() => ({
    config: {
      ...i,
      ...(() => {
        $_$();
        var n, t;
        return (t =
          (n = r().$multiBuildConfig) == null ? void 0 : n.CentralMenuConfig) ==
          null
          ? void 0
          : t.props;
      })(),
    },
  })),
  d = Object.freeze(
    Object.defineProperty({ __proto__: null, default: s }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function m() {
  throw new Error("You can't use sync loaders on client");
}
const g = Object.freeze(
  Object.defineProperty({ __proto__: null, default: m }, Symbol.toStringTag, {
    value: "Module",
  })
);
export { d as CentralMenuConfig, g as loadCentralMenuConfigSync };
