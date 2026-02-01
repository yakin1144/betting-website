import {
  defineMultiImplementedFeature as e,
  Platforms as t,
} from "./entry-50afb6f36c.js";
import {
  size_constants_sizeType as o,
  theme_constants_themeType as n,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const i = e("BettingLeftAsideTemplateConfigDesktop", !0, [t.Desktop]),
  m = {
    bettingLeftAsideTemplateTheme: n.primary_40,
    bettingLeftAsideTemplateSize: o.m,
  },
  s = i.defineEntityImplementation(() => ({ config: m })),
  f = Object.freeze(
    Object.defineProperty({ __proto__: null, default: s }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  m as BETTING_LEFT_ASIDE_TEMPLATE_CONFIG_COMMON,
  f as BettingLeftAsideTemplateConfigDesktop,
  i as Contract,
};
