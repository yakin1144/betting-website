import $_$ from "./$_$.js";
$_$();
var T = Object.defineProperty;
var y = (s, e, r) =>
  e in s
    ? T(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (s[e] = r);
var u = (s, e, r) => y(s, typeof e != "symbol" ? e + "" : e, r);
import {
  iconName as d,
  runtimeCore_esmBundler_defineComponent as v,
  runtimeCore_esmBundler_computed as o,
  runtimeCore_esmBundler_resolveComponent as g,
  runtimeCore_esmBundler_createElementBlock as l,
  runtimeCore_esmBundler_openBlock as a,
  runtimeCore_esmBundler_Fragment as p,
  runtimeCore_esmBundler_renderList as f,
  runtimeCore_esmBundler_createElementVNode as E,
  shared_esmBundler_normalizeClass as N,
  runtimeCore_esmBundler_createBlock as b,
  runtimeCore_esmBundler_createCommentVNode as I,
  reactivity_esmBundler_unref as m,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as x } from "./entry-50afb6f36c.js";
class C {
  constructor({ icon: e = "", cssClassPostfix: r = "" } = {}) {
    u(this, "icon");
    u(this, "cssClassPostfix");
    (this.icon = e), (this.cssClassPostfix = r);
  }
}
const P = {
    goal: new C({ icon: d.PENALTY_WIN, cssClassPostfix: "win" }),
    miss: new C({ icon: d.PENALTY_MISSING, cssClassPostfix: "missing" }),
    idle: void 0,
  },
  A = v({
    name: "UiDashboardGamePenalty",
    props: {
      firstTeamSeries: { type: Array, required: !0 },
      secondTeamSeries: { type: Array, required: !0 },
    },
    setup(s) {
      $_$();
      const e = o(() => s.firstTeamSeries.map((n) => P[n])),
        r = o(() => s.secondTeamSeries.map((n) => P[n]));
      return { teams: o(() => [e.value, r.value]) };
    },
  }),
  k = { class: "ui-dashboard-game-penalty" };
function L(s, e, r, n, _, t) {
  $_$();
  const c = g("UiIco");
  return (
    a(),
    l("div", k, [
      (a(!0),
      l(
        p,
        null,
        f(
          s.teams,
          (h, B) =>
            $_$() &&
            (a(),
            l("ul", { key: B, class: "ui-dashboard-game-penalty__list" }, [
              (a(!0),
              l(
                p,
                null,
                f(
                  h,
                  (i, S) =>
                    $_$() &&
                    (a(),
                    l("li", { key: S }, [
                      E(
                        "div",
                        {
                          class: N([
                            "ui-dashboard-game-penalty__item",
                            `ui-dashboard-game-penalty__item--${
                              i == null ? void 0 : i.cssClassPostfix
                            }`,
                          ]),
                        },
                        [
                          i
                            ? (a(),
                              b(
                                c,
                                {
                                  key: 0,
                                  ico: i.icon,
                                  class: "ui-dashboard-game-penalty__ico",
                                },
                                null,
                                8,
                                ["ico"]
                              ))
                            : I("", !0),
                        ],
                        2
                      ),
                    ]))
                ),
                128
              )),
            ]))
        ),
        128
      )),
    ])
  );
}
const w = x(A, [
    ["render", L],
    ["__scopeId", "data-v-03958c41"],
  ]),
  D = (s) => {
    $_$();
    const e = o(() => {
        $_$();
        var t, c;
        return (c =
          (t = m(s).statistics) == null ? void 0 : t.penaltyStatistics) != null
          ? c
          : {};
      }),
      r = o(() => {
        $_$();
        var t;
        return (t = m(e).firstTeamSeries) != null ? t : [];
      }),
      n = o(() => {
        $_$();
        var t;
        return (t = m(e).secondTeamSeries) != null ? t : [];
      }),
      _ = o(() => ($_$() && m(r).length > 0) || m(n).length > 0);
    return {
      firstTeamPenaltySeries: r,
      secondTeamPenaltySeries: n,
      shouldShowPenalties: _,
    };
  };
export { w as UiDashboardGamePenalty, D as usePenaltyData };
