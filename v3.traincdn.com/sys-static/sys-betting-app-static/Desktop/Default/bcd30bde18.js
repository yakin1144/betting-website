import {
  defineMultiImplementedFeature as t,
  Platforms as e,
  BETTING_LAYOUT_APP_CONFIG_COMMON as o,
} from "./entry-50afb6f36c.js";
const n = t("BettingLayoutAppConfigDesktop", !0, [e.Desktop]),
  i = n.defineEntityImplementation(() => ({ config: o })),
  r = Object.freeze(
    Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { r as BettingLayoutAppConfig, n as Contract };
