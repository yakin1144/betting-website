import {
  defineMultiImplementedFeature as t,
  Platforms as o,
} from "./entry-50afb6f36c.js";
const e = t("UiGameScoresConfigDesktop", !0, [o.Desktop]),
  n = e.defineEntityImplementation(() => ({})),
  l = Object.freeze(
    Object.defineProperty({ __proto__: null, default: n }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  i = {
    "--ui-game-scores-num-min-width": "14px",
    "--ui-game-scores-num-line-height": "16px",
    "--ui-game-scores-num-child-margin-top": "10px",
    "--ui-game-scores-inning-font-size": "12px",
    "--ui-game-scores-inning-height": "16px",
    "--ui-game-scores-sep-left": "-11px",
    "--ui-game-scores-item-child-margin-left": "var(--gutter)",
    "--ui-game-scores-item-child-current-margin-left": "21px",
  },
  r = e.defineEntityImplementation(() => ({ styles: i })),
  u = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  s = {
    "--ui-game-scores-num-min-width": "14px",
    "--ui-game-scores-num-line-height": "16px",
    "--ui-game-scores-item-child-margin-left": "var(--gutter)",
  },
  a = e.defineEntityImplementation(() => ({ styles: s })),
  g = Object.freeze(
    Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function c() {
  throw new Error("You can't use sync loaders on client");
}
const f = Object.freeze(
  Object.defineProperty({ __proto__: null, default: c }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  l as UiGameScoresConfig,
  u as UiGameScoresConfig$1,
  g as UiGameScoresConfig$2,
  f as loadUiGameScoresConfigDesktopSync,
};
