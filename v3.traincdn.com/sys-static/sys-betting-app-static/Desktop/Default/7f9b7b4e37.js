import {
  COUPON_CONFIG_CYBER as o,
  COUPON_CONFIG_TOP_EVENTS as e,
  COUPON_CONFIG_COMMON as t,
} from "./3fb5c2806a.js";
import {
  defineMultiImplementedFeature as r,
  Platforms as n,
} from "./entry-50afb6f36c.js";
const c = r("CouponConfigsDesktop", !0, [n.Desktop]),
  l = {
    "--coupon-top-events-app-shadow":
      "0 0 20px 0 Hsla(var(--specialPrimary--50-bg), 0.3)",
    "--custom-top-events-coupon-height-indent": "62",
    "--coupon-info-icon-clr-cyber": "var(--hsl-clr-primary)",
    "--coupon-info-icon-clr-cyber-hover": "var(--hsl-clr-strong)",
    "--coupon-exact-coef-title-tip-clr-cyber": "var(--hsl-clr-primary)",
    "--coupon-exact-coef-title-tip-clr-cyber-hover": "var(--hsl-clr-strong)",
  },
  p = c.defineEntityImplementation(() => ({
    default: t,
    topEvents: e,
    cyber: o,
    styles: l,
  })),
  a = Object.freeze(
    Object.defineProperty({ __proto__: null, default: p }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { c as Contract, a as CouponConfigs };
