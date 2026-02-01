import {
  defineMultiImplementedFeature as o,
  Platforms as n,
} from "./entry-85993dc44c.js";
const e = o("HeaderNavigationListDesktopConfig", !0, [n.Desktop]),
  t = {
    hasHeaderNavigationListSelected: !0,
    hasHeaderNavigationListMoreDots: !1,
  },
  i = e.defineEntityImplementation(() => ({ config: t, style: {} })),
  d = Object.freeze(
    Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  a = { "--header-navigation-decent-item-color": "var(--hsl-clr-accent)" },
  r = e.defineEntityImplementation(() => ({ config: t, style: a })),
  _ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  s = { "--header-navigation-decent-item-color": "var(--gray-100-clr-decent)" },
  l = e.defineEntityImplementation(() => ({ config: t, style: s })),
  g = Object.freeze(
    Object.defineProperty({ __proto__: null, default: l }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  e as Contract,
  t as DEFAULT_HEADER_NAVIGATION_LIST_DESKTOP_CONFIG,
  d as HeaderNavigationListDesktopConfig,
  _ as HeaderNavigationListDesktopConfig$1,
  g as HeaderNavigationListDesktopConfig$2,
};
