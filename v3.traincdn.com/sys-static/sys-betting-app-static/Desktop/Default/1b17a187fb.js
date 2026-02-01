import { theme_constants_themeType as e } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedFeature as o,
  Platforms as n,
} from "./entry-50afb6f36c.js";
const r = {
    uiNavItemIsRounded: !1,
    uiSportsEvent: e.gray100,
    uiContentLoader: e.gray100,
    uiMarket: e.gray,
    uiNavItems: e.gray30,
  },
  a = o("FavoritesAppConfigDesktop", !0, [n.Desktop]),
  t = { ...r },
  i = a.defineEntityImplementation(() => ({ config: t })),
  m = Object.freeze(
    Object.defineProperty(
      { __proto__: null, config: t, default: i },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  a as Contract,
  r as FAVORITES_APP_CONFIG_COMMON,
  m as FavoritesAppConfig,
};
