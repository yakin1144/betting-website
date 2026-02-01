import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as d,
  reactivity_esmBundler_toRefs as S,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_inject as O,
  runtimeCore_esmBundler_computed as g,
  runtimeCore_esmBundler_createElementBlock as a,
  runtimeCore_esmBundler_openBlock as t,
  runtimeCore_esmBundler_createBlock as f,
  runtimeCore_esmBundler_createCommentVNode as B,
  runtimeCore_esmBundler_resolveDynamicComponent as C,
  runtimeCore_esmBundler_mergeProps as U,
  runtimeCore_esmBundler_withCtx as h,
  runtimeCore_esmBundler_createElementVNode as i,
  shared_esmBundler_toDisplayString as m,
  runtimeCore_esmBundler_Fragment as b,
  runtimeCore_esmBundler_renderList as N,
  shared_esmBundler_normalizeClass as v,
  runtimeCore_esmBundler_renderSlot as p,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useCouponGameLink as L,
  useTopEventsAnalytics as A,
  TopEventsBetGameOpenBookmarkSources as G,
  _export_sfc as l,
} from "./entry-50afb6f36c.js";
import { useCouponThemeInject as j } from "./32064d16d1.js";
const w = { class: "ui-coupon-bet-teams" },
  D = { dir: "auto", class: "ui-coupon-bet-teams__name" },
  P = { dir: "auto", class: "ui-coupon-bet-teams__name" },
  V = {
    key: 0,
    class: "ui-coupon-bet-teams__scores ui-coupon-bet-teams-scores",
  },
  z = d({
    __name: "UiCouponBetTeams",
    props: {
      firstOpponentName: { type: String, default: "" },
      secondOpponentName: { type: String, default: "" },
      scores: { type: Array, default: () => [] },
      bet: { type: Object, default: () => ({}) },
    },
    setup(s) {
      $_$();
      const n = s,
        { bet: r } = S(n),
        { attrs: _, component: c, gameLink: o } = L(e(r)),
        { trackTopEventsBetGameOpen: u } = A(),
        k = O("topEventId", void 0),
        I = g(() =>
          $_$() && e(r).additionalType ? `(${e(r).additionalType})` : ""
        ),
        $ = () => {
          $_$();
          e(k) &&
            e(o) &&
            u({
              topEventId: e(k),
              sportId: e(r).market.sportId,
              bookmarkSource: G.COUPON,
            });
        };
      return (Q, y) =>
        $_$() &&
        (t(),
        a("div", w, [
          (t(),
          f(
            C(e(c)),
            U({ onClick: $ }, e(_), {
              class: { "ui-coupon-bet-teams__link": e(o) },
            }),
            {
              default: h(
                () =>
                  $_$() && [
                    i("span", D, m(s.firstOpponentName), 1),
                    s.secondOpponentName
                      ? (t(),
                        a(
                          b,
                          { key: 0 },
                          [
                            y[0] || (y[0] = i("span", null, " - ", -1)),
                            i(
                              "span",
                              P,
                              m(s.secondOpponentName) + " " + m(e(I)),
                              1
                            ),
                          ],
                          64
                        ))
                      : B("", !0),
                  ]
              ),
              _: 1,
            },
            16,
            ["class"]
          )),
          s.scores.length
            ? (t(),
              a("span", V, [
                (t(!0),
                a(
                  b,
                  null,
                  N(
                    s.scores,
                    (T, E) =>
                      $_$() &&
                      (t(),
                      a(
                        "span",
                        { key: E, class: "ui-coupon-bet-teams-scores__item" },
                        m(T),
                        1
                      ))
                  ),
                  128
                )),
              ]))
            : B("", !0),
        ]));
    },
  }),
  Z = l(z, [["__scopeId", "data-v-27ca6bbc"]]),
  F = { class: "ui-coupon-coef__value" },
  R = d({
    __name: "UiCouponCoef",
    props: { hasTheme: { type: Boolean, default: !0 } },
    setup(s) {
      return (n, r) =>
        $_$() &&
        (t(),
        a(
          "span",
          {
            class: v([
              { "ui-coupon-coef--has-theme": s.hasTheme },
              "ui-coupon-coef",
            ]),
          },
          [i("span", F, [p(n.$slots, "default", {}, void 0, !0)])],
          2
        ));
    },
  }),
  x = l(R, [["__scopeId", "data-v-cf406ed8"]]),
  q = { class: "ui-coupon-sections-item__wrapper" },
  H = { class: "ui-coupon-sections-item__container" },
  J = { key: 0, class: "ui-coupon-sections-item__lock" },
  K = d({
    __name: "UiCouponSectionsItem",
    props: {
      tag: { default: "div" },
      single: { type: Boolean },
      hasError: { type: Boolean },
      isLocked: { type: Boolean },
      hasBoost: { type: Boolean },
      hasBorder: { type: Boolean },
      isBoost: { type: Boolean },
    },
    setup(s) {
      $_$();
      const n = s,
        { uiCouponSectionsItemTheme: r, hasEars: _ } = j(),
        c = g(() => (n.isBoost ? void 0 : r));
      return (o, u) =>
        $_$() &&
        (t(),
        f(
          C(o.tag),
          {
            class: v([
              "ui-coupon-sections-item",
              {
                "ui-coupon-sections-item--is-locked": o.isLocked,
                "ui-coupon-sections-item--single": o.single,
                "ui-coupon-sections-item--has-error": o.hasError,
                "ui-coupon-sections-item--has-ears": e(_),
                "ui-coupon-sections-item--has-boost": o.hasBoost,
                "ui-coupon-sections-item--has-border": o.hasBorder,
                [`ui-coupon-sections-item--theme-${e(c)}`]: e(c),
              },
            ]),
          },
          {
            default: h(
              () =>
                $_$() && [
                  u[1] ||
                    (u[1] = i(
                      "div",
                      { class: "ui-coupon-sections-item__ears-fade" },
                      null,
                      -1
                    )),
                  u[2] ||
                    (u[2] = i(
                      "div",
                      {
                        class:
                          "ui-coupon-sections-item__ears ui-coupon-sections-item__ears--left",
                      },
                      null,
                      -1
                    )),
                  i("div", q, [
                    u[0] ||
                      (u[0] = i(
                        "div",
                        {
                          class:
                            "ui-coupon-sections-item__ears ui-coupon-sections-item__ears--right",
                        },
                        null,
                        -1
                      )),
                    i("div", H, [p(o.$slots, "default", {}, void 0, !0)]),
                  ]),
                  o.isLocked
                    ? (t(), a("div", J, [p(o.$slots, "lock", {}, void 0, !0)]))
                    : B("", !0),
                ]
            ),
            _: 3,
          },
          8,
          ["class"]
        ));
    },
  }),
  ee = l(K, [["__scopeId", "data-v-afcf5abf"]]),
  M = d({
    __name: "UiCouponSections",
    props: { tag: { default: "div" }, isAnimated: { type: Boolean } },
    setup(s) {
      return (n, r) =>
        $_$() &&
        (t(),
        f(
          C(n.tag),
          {
            class: v([
              "ui-coupon-sections",
              { "ui-coupon-sections--animated": n.isAnimated },
            ]),
          },
          {
            default: h(() => $_$() && [p(n.$slots, "default", {}, void 0, !0)]),
            _: 3,
          },
          8,
          ["class"]
        ));
    },
  }),
  oe = l(M, [["__scopeId", "data-v-6e4013a0"]]);
export {
  Z as UiCouponBetTeams,
  x as UiCouponCoef,
  oe as UiCouponSections,
  ee as UiCouponSectionsItem,
};
