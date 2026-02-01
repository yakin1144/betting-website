import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as u,
  theme_constants_themeType as r,
  size_constants_sizeType as c,
  runtimeCore_esmBundler_computed as _,
  runtimeCore_esmBundler_resolveComponent as d,
  runtimeCore_esmBundler_createElementBlock as o,
  runtimeCore_esmBundler_openBlock as s,
  shared_esmBundler_normalizeClass as p,
  runtimeCore_esmBundler_createElementVNode as h,
  runtimeCore_esmBundler_createCommentVNode as m,
  runtimeCore_esmBundler_createBlock as C,
  runtimeCore_esmBundler_renderSlot as n,
  runtimeCore_esmBundler_withCtx as B,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as $ } from "./entry-50afb6f36c.js";
const f = u({
    name: "UiTeamScores",
    props: {
      size: { type: String, default: c.m },
      theme: { type: String, default: r.gray100 },
    },
    setup(e) {
      $_$();
      var t;
      const a = _(() => ({
          [`ui-team-scores--size-${e.size}`]: !!e.size,
          [`ui-team-scores--theme-${e.theme}`]: !!e.theme,
        })),
        i = (t = e.theme) != null && t.includes("gray") ? r.gray : r.default;
      return { uiTeamScoresClasses: a, uiScrollbarTheme: i };
    },
  }),
  S = { class: "ui-team-scores__top" },
  y = { key: 0, class: "ui-team-scores__teams ui-team-scores-teams" },
  T = { key: 0, class: "ui-team-scores__details" };
function v(e, t, a, i, z, k) {
  $_$();
  const l = d("UiScrollbar");
  return (
    s(),
    o(
      "span",
      { class: p([e.uiTeamScoresClasses, "ui-team-scores"]) },
      [
        h("span", S, [
          e.$slots.teams
            ? (s(), o("span", y, [n(e.$slots, "teams", {}, void 0, !0)]))
            : m("", !0),
          e.$slots.scores
            ? (s(),
              C(
                l,
                {
                  key: 1,
                  theme: e.uiScrollbarTheme,
                  class: "ui-team-scores__scores ui-team-scores-scores",
                },
                {
                  default: B(
                    () => $_$() && [n(e.$slots, "scores", {}, void 0, !0)]
                  ),
                  _: 3,
                },
                8,
                ["theme"]
              ))
            : m("", !0),
        ]),
        e.$slots.details
          ? (s(), o("p", T, [n(e.$slots, "details", {}, void 0, !0)]))
          : m("", !0),
      ],
      2
    )
  );
}
const U = $(f, [
  ["render", v],
  ["__scopeId", "data-v-2035d233"],
]);
export { U as UiTeamScores };
