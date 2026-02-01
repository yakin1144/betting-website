import {
  defineMultiImplementedFeature as e,
  Platforms as t,
} from "./entry-50afb6f36c.js";
import { SPORTS_MENU_APP_CONFIG_COMMON as o } from "./dd584157d6.js";
const n = e("SportsMenuAppConfigDesktop", !0, [t.Desktop]),
  r = n.defineEntityImplementation(() => ({ config: o })),
  f = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { n as Contract, f as SportsMenuAppConfig };
