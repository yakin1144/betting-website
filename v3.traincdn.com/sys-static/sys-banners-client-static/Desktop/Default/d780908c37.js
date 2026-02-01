import $_$ from "./$_$.js";
$_$();
import {
  reactivity_esmBundler_ref as c,
  runtimeCore_esmBundler_computed as l,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_watch as Y,
  runtimeCore_esmBundler_onUnmounted as Z,
  runtimeCore_esmBundler_defineComponent as j,
  theme_constants_themeType as O,
  runtimeCore_esmBundler_resolveComponent as V,
  runtimeCore_esmBundler_createElementBlock as k,
  runtimeCore_esmBundler_openBlock as r,
  runtimeCore_esmBundler_createElementVNode as f,
  runtimeCore_esmBundler_createVNode as S,
  runtimeCore_esmBundler_createCommentVNode as I,
  size_constants_sizeType as b,
  runtimeCore_esmBundler_withCtx as C,
  runtimeCore_esmBundler_createTextVNode as F,
  shared_esmBundler_toDisplayString as d,
  shared_esmBundler_normalizeClass as q,
  runtimeCore_esmBundler_createBlock as g,
  UiIcoTeam_vue_default as P,
  ImagesSizeType as H,
  ResizedImagesTeamLogoSizeType as K,
  clientOnly_default as J,
  runtimeCore_esmBundler_Fragment as Q,
  runtimeCore_esmBundler_renderList as ee,
  UiMarket_F_vue_default as te,
  runtimeDom_esmBundler_withModifiers as ne,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { UiSlideCaption as oe } from "./646210e688.js";
import {
  AnalyticsElementIds as G,
  _export_sfc as se,
} from "./entry-8c01be4f19.js";
import { useUiEventSlide as ie } from "./96f90aea0d.js";
const re = 1.2,
  ae = 1.7,
  le = 8230,
  ce = 45,
  X = String.fromCharCode(le),
  E = String.fromCharCode(ce),
  ue = (_, v, s) => {
    $_$();
    var h;
    const y = c(null),
      x = l(() => {
        $_$();
        const t = e(_);
        return t ? window.getComputedStyle(t) : {};
      }),
      R = l(() => {
        $_$();
        var t;
        return ((t = e(x)) == null ? void 0 : t.font) || "";
      }),
      B = c(Number((h = e(x)) == null ? void 0 : h.width) || 0),
      L = (t) => {
        B.value = t;
      },
      M = l(() => {
        $_$();
        var t;
        const n = document.createElement("canvas").getContext("2d");
        if (!n) return 0;
        n.font = e(R);
        const i = ((t = e(_)) == null ? void 0 : t.textContent) || "";
        return n.measureText(i[0]).width;
      }),
      m = l(() => $_$() && Math.floor(e(B) / e(M)) * re),
      z = c(!1),
      T = (t) => {
        z.value = t;
      },
      N = l(
        () =>
          $_$() && {
            "ui-event-slide-content-content__title--is-break-all": e(z),
          }
      ),
      U = c(v + ` ${E} ` + s),
      o = c(e(U)),
      a = () => {
        $_$();
        if (!e(_)) return;
        T(!1);
        const u = [v, s];
        if (u.some(() => !Boolean)) {
          const p = u.find(Boolean) || "";
          o.value = p;
          return;
        }
        let n = v;
        const i = s,
          w = n.length > e(m),
          W = i.length > e(m);
        if (w && W) {
          T(!0), (n = n.substring(0, e(m)).trim() + X);
          const p = `${n} ${E} ${i}`,
            D = new RegExp(`${n}\\s*${E}\\s*(${i})`);
          o.value = p.replace(
            D,
            `${n}
${E} ${i}`
          );
        } else if (w && !W) {
          T(!0);
          const p = e(m) * ae,
            D = n.length > p ? X : "";
          (n = n.substring(0, p).trim() + D), (o.value = `${n} ${E} ${i}`);
        }
      },
      A = () => {
        $_$();
        var t;
        const u = e(_);
        u &&
          ((y.value = new ResizeObserver((n) => {
            for (const i of n) {
              const { width: w } = i.contentRect;
              L(w);
            }
            a();
          })),
          (t = e(y)) == null || t.observe(u));
      },
      $ = l(() => {
        $_$();
        const t = e(_);
        return t
          ? (t == null ? void 0 : t.offsetWidth) > 0 &&
              (t == null ? void 0 : t.offsetHeight) > 0
          : !1;
      });
    return (
      Y(
        () => $_$() && e($),
        (t) => {
          t && A();
        }
      ),
      Z(() => {
        $_$();
        var t;
        (t = e(y)) == null || t.disconnect();
      }),
      { teamsTextClasses: N, teamsText: o }
    );
  },
  _e = { class: "ui-event-slide-content" },
  me = {
    class: "ui-event-slide-content__header ui-event-slide-content-header",
  },
  de = { key: 0, class: "ui-event-slide-content-header__label" },
  ve = {
    class: "ui-event-slide-content__content ui-event-slide-content-content",
  },
  pe = {
    class: "ui-event-slide-content-content__teams ui-event-slide-content-teams",
  },
  fe = { key: 1, class: "ui-event-slide-content-teams__score" },
  Ce = { key: 2, class: "ui-event-slide-content-teams__vs" },
  he = {
    class: "ui-event-slide-content__markets ui-event-slide-content-markets",
  },
  ye = j({
    __name: "UiEventSlideContent",
    props: {
      sportEvent: {},
      isShowTeamLogos: { type: Boolean },
      hasAnyMarkets: { type: Boolean },
      themeButtonMakeBet: { default: O.accent },
    },
    emits: ["click"],
    setup(_) {
      $_$();
      const v = _,
        s = l(() => v.sportEvent),
        {
          isLive: h,
          checkIsMarketSelected: y,
          getCoefByView: x,
          sendMarketToCoupon: R,
        } = ie(s),
        B = c(e(s).homeName),
        L = c(e(s).awayName),
        M = c(`${e(B)} - ${e(L)}`),
        m = c(null),
        { teamsTextClasses: z, teamsText: T } = ue(m, e(B), e(L)),
        N = l(() => {
          $_$();
          var o;
          return (o = e(T)) != null ? o : e(M);
        }),
        U = l(() => {
          $_$();
          var o, a;
          return (
            v.hasAnyMarkets &&
            !!(
              (a = (o = e(s)) == null ? void 0 : o.markets) != null && a.length
            )
          );
        });
      return (o, a) => {
        $_$();
        const A = V("UiIcoSport"),
          $ = V("UiCaption"),
          t = V("UiButton"),
          u = J;
        return (
          r(),
          k("div", _e, [
            f("div", me, [
              S(
                A,
                {
                  ico: e(s).sportId,
                  class: "ui-event-slide-content-header__icon",
                },
                null,
                8,
                ["ico"]
              ),
              S(
                oe,
                { maxLines: 1, size: e(b).m },
                {
                  default: C(() => $_$() && [F(d(e(s).tournamentName), 1)]),
                  _: 1,
                },
                8,
                ["size"]
              ),
              e(h)
                ? (r(), k("span", de, d(o.$T("betting_live")), 1))
                : I("", !0),
            ]),
            f("div", ve, [
              f(
                "p",
                { class: q([e(z), "ui-event-slide-content-content__title"]) },
                [
                  f(
                    "span",
                    {
                      ref_key: "teamsTextContainerRef",
                      ref: m,
                      class: "ui-event-slide-content-content__truncate",
                    },
                    d(e(N)),
                    513
                  ),
                ],
                2
              ),
              f("div", pe, [
                o.isShowTeamLogos
                  ? (r(),
                    g(
                      e(P),
                      {
                        key: 0,
                        image: e(s).homeImg,
                        presetSize: e(K).S24,
                        boxSize: e(H).S24,
                        class: "ui-event-slide-content-teams__icon",
                      },
                      null,
                      8,
                      ["image", "presetSize", "boxSize"]
                    ))
                  : I("", !0),
                e(h)
                  ? (r(),
                    k(
                      "span",
                      fe,
                      d(e(s).homeScore || 0) + " : " + d(e(s).awayScore || 0),
                      1
                    ))
                  : o.isShowTeamLogos
                  ? (r(), k("span", Ce, " VS "))
                  : I("", !0),
                o.isShowTeamLogos
                  ? (r(),
                    g(
                      e(P),
                      {
                        key: 3,
                        image: e(s).awayImg,
                        presetSize: e(K).S24,
                        boxSize: e(H).S24,
                        class: "ui-event-slide-content-teams__icon",
                      },
                      null,
                      8,
                      ["image", "presetSize", "boxSize"]
                    ))
                  : I("", !0),
              ]),
            ]),
            f("div", he, [
              e(U)
                ? (r(),
                  g(
                    u,
                    { key: 0 },
                    {
                      default: C(
                        () =>
                          $_$() && [
                            (r(!0),
                            k(
                              Q,
                              null,
                              ee(
                                e(s).markets,
                                (n) =>
                                  $_$() &&
                                  (r(),
                                  g(
                                    e(te),
                                    {
                                      key: n.id,
                                      onClick: ne(
                                        (i) => $_$() && e(R)(n),
                                        ["prevent"]
                                      ),
                                      coefByView: e(x)(n.coef),
                                      coef: n.coef,
                                      isActive: e(y)(n.id),
                                      isLocked: n.isLocked,
                                      text: n.shortName,
                                      theme: e(O).gray100,
                                      "data-analytics-id": e(G).MARKET,
                                      "data-market-type": n.typeId,
                                      class:
                                        "ui-event-slide-content-markets__market",
                                    },
                                    null,
                                    8,
                                    [
                                      "onClick",
                                      "coefByView",
                                      "coef",
                                      "isActive",
                                      "isLocked",
                                      "text",
                                      "theme",
                                      "data-analytics-id",
                                      "data-market-type",
                                    ]
                                  ))
                              ),
                              128
                            )),
                            S(
                              t,
                              {
                                onClick:
                                  a[0] || (a[0] = (n) => o.$emit("click")),
                                theme: e(O).primary,
                                "data-analytics-id": e(G).MARKET_ALL,
                                class: "ui-event-slide-content-markets__more",
                              },
                              {
                                default: C(
                                  () =>
                                    $_$() && [
                                      S(
                                        $,
                                        { size: e(b).m },
                                        {
                                          default: C(
                                            () =>
                                              $_$() && [
                                                F(
                                                  " +" +
                                                    d(e(s).activeMarketsCount),
                                                  1
                                                ),
                                              ]
                                          ),
                                          _: 1,
                                        },
                                        8,
                                        ["size"]
                                      ),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["theme", "data-analytics-id"]
                            ),
                          ]
                      ),
                      _: 1,
                    }
                  ))
                : (r(),
                  g(
                    t,
                    {
                      key: 1,
                      onClick: a[1] || (a[1] = (n) => o.$emit("click")),
                      size: e(b).m,
                      theme: o.themeButtonMakeBet,
                    },
                    {
                      default: C(
                        () =>
                          $_$() && [
                            S(
                              $,
                              { size: e(b).m },
                              {
                                default: C(
                                  () =>
                                    $_$() && [
                                      F(d(o.$T("main_slider_make_bet")), 1),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["size"]
                            ),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["size", "theme"]
                  )),
            ]),
          ])
        );
      };
    },
  }),
  ge = se(ye, [["__scopeId", "data-v-ce6b2735"]]);
export { ge as UiEventSlideContent };
