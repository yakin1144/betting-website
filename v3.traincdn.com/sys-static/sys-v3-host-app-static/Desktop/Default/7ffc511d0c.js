import {
  defineMultiImplementedFeature as e,
  Platforms as t,
} from "./entry-85993dc44c.js";
const o = e("HeaderDoubleRowNavbarConfig", !0, [t.Desktop]),
  a = {
    hasBottomAngle: !1,
    hasBottomGradient: !1,
    showRulesLinkInHeaderBottom: !1,
    showAppsLinkInHeaderBottom: !1,
    hasBGHighlight: !0,
    isCentered: !1,
  },
  n = { "--header-navigation-margin-left": "0" },
  r = o.defineEntityImplementation(() => ({ config: a, style: n })),
  s = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  o as Contract,
  a as DEFAULT_HEADER_DOUBLE_ROW_NAVBAR_CONFIG,
  s as HeaderDoubleRowNavbarConfig,
};
