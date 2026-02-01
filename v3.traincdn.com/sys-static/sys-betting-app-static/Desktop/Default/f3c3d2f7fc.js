import {
  theme_constants_themeType as p,
  size_constants_sizeType as e,
  iconName as t,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedFeature as o,
  Platforms as m,
} from "./entry-50afb6f36c.js";
const a = {
    topChampsAppButtonTheme: p.primary,
    topChampsAppLinkTheme: p.primary,
    topChampsAppNavItemsTheme: p.gray30,
    topChampsAppLinkIco: t.CHAMP,
    topChampsAppIsSeparated: !0,
    topChampsAppLinkSize: e.m,
    topChampsAppLinkIsNoWrap: !0,
    topChampsAppItemLinkTheme: p.gray,
  },
  n = o("TopChampsAppConfigDesktop", !0, [m.Desktop]),
  s = n.defineEntityImplementation(() => ({ config: a })),
  C = Object.freeze(
    Object.defineProperty({ __proto__: null, default: s }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  n as Contract,
  a as TOP_CHAMPS_APP_CONFIG_COMMON,
  C as TopChampsAppConfig,
};
