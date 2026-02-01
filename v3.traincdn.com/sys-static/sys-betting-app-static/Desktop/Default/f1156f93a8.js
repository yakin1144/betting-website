import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as c,
  runtimeCore_esmBundler_computed as o,
  runtimeCore_esmBundler_createElementBlock as i,
  runtimeCore_esmBundler_openBlock as l,
  shared_esmBundler_normalizeClass as p,
  runtimeCore_esmBundler_renderSlot as _,
  router_useRoute as d,
  reactivity_esmBundler_unref as n,
  bettingRouteName_BettingRouteName as m,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as C,
  useBettingSportsStore as B,
} from "./entry-50afb6f36c.js";
const f = c({
  name: "UiTeamScoreName",
  props: { canWrap: { type: Boolean, default: !1 } },
  setup(e) {
    $_$();
    return {
      uiTeamScoreNameClasses: o(() => ({
        "ui-team-score-name--nowrap": !e.canWrap,
      })),
    };
  },
});
function S(e, a, t, s, u, r) {
  $_$();
  return (
    l(),
    i(
      "div",
      { class: p([e.uiTeamScoreNameClasses, "ui-team-score-name"]) },
      [_(e.$slots, "default", {}, void 0, !0)],
      2
    )
  );
}
const R = C(f, [
    ["render", S],
    ["__scopeId", "data-v-354d55d5"],
  ]),
  T = () => {
    $_$();
    const e = d(),
      { getBettingSportByNameForUrl: a } = B(),
      t = o(() => $_$() && a(n(e).params.sportSection || "")),
      s = o(() => {
        $_$();
        var r;
        switch ((r = n(t)) == null ? void 0 : r.nameForUrl) {
          case "cricket":
            return m.CRICKET_CHAMP;
          default:
            return "";
        }
      }),
      u = o(() => {
        $_$();
        var r;
        switch ((r = n(t)) == null ? void 0 : r.nameForUrl) {
          case "cricket":
            return m.CRICKET_GAME;
          default:
            return "";
        }
      });
    return { sport: t, champRouteSportName: s, gameRouteSportName: u };
  };
export { R as UiTeamScoreName, T as useSportsRoute };
