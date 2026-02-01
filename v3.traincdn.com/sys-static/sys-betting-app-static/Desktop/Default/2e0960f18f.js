import {
  defineMultiImplementedFeature as e,
  Platforms as n,
} from "./entry-50afb6f36c.js";
const t = e("BettingContentConfigDesktop", !0, [n.Desktop]),
  o = {},
  i = t.defineEntityImplementation(() => ({ styles: o })),
  f = Object.freeze(
    Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  l = { "--betting-content-inner-indent": "20px;" },
  r = t.defineEntityImplementation(() => ({ styles: l })),
  g = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function s() {
  throw new Error("You can't use sync loaders on client");
}
const a = Object.freeze(
  Object.defineProperty({ __proto__: null, default: s }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  f as BettingContentConfig,
  g as BettingContentConfig$1,
  a as loadBettingContentConfigDesktopSync,
};
