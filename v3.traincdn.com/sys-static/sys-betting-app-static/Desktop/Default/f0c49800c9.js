import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as v } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as T,
  theme_constants_themeType as L,
  defaultSizeType as E,
  runtimeCore_esmBundler_computed as u,
  execAsync as I,
  runtimeCore_esmBundler_resolveComponent as w,
  runtimeCore_esmBundler_createElementBlock as s,
  runtimeCore_esmBundler_openBlock as o,
  shared_esmBundler_normalizeClass as l,
  shared_esmBundler_normalizeStyle as z,
  reactivity_esmBundler_unref as a,
  runtimeCore_esmBundler_createCommentVNode as n,
  runtimeCore_esmBundler_createVNode as D,
  runtimeCore_esmBundler_Fragment as d,
  runtimeCore_esmBundler_createElementVNode as t,
  shared_esmBundler_toDisplayString as r,
  runtimeCore_esmBundler_renderList as O,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  loadUiGameScoresConfigDesktop as P,
  _export_sfc as U,
} from "./entry-50afb6f36c.js";
const A = {
    key: 0,
    class: "ui-game-scores__item ui-game-scores__item--inning",
  },
  G = { class: "ui-game-scores__item ui-game-scores__item--total" },
  N = { class: "ui-game-scores__num" },
  V = { class: "ui-game-scores__num" },
  $ = { key: 0, class: "ui-game-scores__item ui-game-scores__item--sub" },
  F = { class: "ui-game-scores__num" },
  j = { key: 0, class: "ui-game-scores__num" },
  q = { key: 0, class: "ui-game-scores__num" },
  H = { key: 1, class: "ui-game-scores__num" },
  J = { key: 0, class: "ui-game-scores__item ui-game-scores__item--sub" },
  K = { class: "ui-game-scores__num" },
  M = { key: 0, class: "ui-game-scores__num" },
  Q = T({
    __name: "UiGameScores",
    props: {
      periodScores: {},
      subScore: {},
      inningIco: {},
      feed: {},
      size: { default: E },
      homeTeamScoreLabel: {},
      awayTeamScoreLabel: {},
      isSinglePlayerEvent: { type: Boolean },
      theme: { default: L.gray100 },
      isAsia: { type: Boolean },
      hasDetailedScore: { type: Boolean },
    },
    async setup(h) {
      $_$();
      let c, p, m, g;
      const i = h,
        f = u(() => i.inningIco !== void 0 && i.feed !== void 0),
        S = u(() => i.subScore && i.subScore.firstOpponentScore),
        B = u(
          () =>
            ({
              1: "ui-game-scores__inning--first",
              2: "ui-game-scores__inning--second",
            }[i.feed])
        ),
        b =
          (([m, g] = v(() => P())),
          (m = (([c, p] = I(() => m)), (c = await c), p(), c)),
          g(),
          m),
        { styles: C } = b();
      return (e, R) => {
        $_$();
        const k = w("UiIcoSport");
        return (
          o(),
          s(
            "span",
            {
              style: z(a(C)),
              class: l([
                [
                  `ui-game-scores--size-${e.size}`,
                  `ui-game-scores--theme-${e.theme}`,
                  { "ui-game-scores--is-asia": e.isAsia },
                ],
                "ui-game-scores",
              ]),
            },
            [
              a(f)
                ? (o(),
                  s("span", A, [
                    D(
                      k,
                      {
                        ico: e.inningIco,
                        class: l([a(B), "ui-game-scores__inning"]),
                      },
                      null,
                      8,
                      ["ico", "class"]
                    ),
                  ]))
                : n("", !0),
              e.isSinglePlayerEvent
                ? n("", !0)
                : (o(),
                  s(
                    d,
                    { key: 1 },
                    [
                      t("span", G, [
                        t("span", N, r(e.homeTeamScoreLabel), 1),
                        t("span", V, r(e.awayTeamScoreLabel), 1),
                      ]),
                      a(S) && e.hasDetailedScore
                        ? (o(),
                          s("span", $, [
                            t(
                              "span",
                              F,
                              "(" + r(e.subScore.firstOpponentScore) + ")",
                              1
                            ),
                            e.isSinglePlayerEvent
                              ? n("", !0)
                              : (o(),
                                s(
                                  "span",
                                  j,
                                  " (" +
                                    r(e.subScore.secondOpponentScore) +
                                    ") ",
                                  1
                                )),
                          ]))
                        : n("", !0),
                    ],
                    64
                  )),
              e.hasDetailedScore
                ? n("", !0)
                : (o(),
                  s(
                    d,
                    { key: 2 },
                    [
                      (o(!0),
                      s(
                        d,
                        null,
                        O(
                          e.periodScores,
                          (_, y) =>
                            $_$() &&
                            (o(),
                            s(
                              "span",
                              {
                                key: y,
                                class: l([
                                  { "ui-game-scores__item--current": y === 0 },
                                  "ui-game-scores__item",
                                ]),
                              },
                              [
                                _.firstTeamScoreLabel
                                  ? (o(),
                                    s("span", q, r(_.firstTeamScoreLabel), 1))
                                  : n("", !0),
                                e.isSinglePlayerEvent
                                  ? n("", !0)
                                  : (o(),
                                    s("span", H, r(_.secondTeamScoreLabel), 1)),
                              ],
                              2
                            ))
                        ),
                        128
                      )),
                      a(S)
                        ? (o(),
                          s("span", J, [
                            t(
                              "span",
                              K,
                              "(" + r(e.subScore.firstOpponentScore) + ")",
                              1
                            ),
                            e.isSinglePlayerEvent
                              ? n("", !0)
                              : (o(),
                                s(
                                  "span",
                                  M,
                                  " (" +
                                    r(e.subScore.secondOpponentScore) +
                                    ") ",
                                  1
                                )),
                          ]))
                        : n("", !0),
                    ],
                    64
                  )),
            ],
            6
          )
        );
      };
    },
  }),
  Z = U(Q, [["__scopeId", "data-v-6415f7c2"]]);
export { Z as UiGameScores };
