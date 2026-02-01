import $_$ from "./$_$.js";
$_$();
import {
  size_constants_sizeType as C,
  runtimeCore_esmBundler_defineComponent as z,
  index_useT as E,
  runtimeCore_esmBundler_computed as I,
  runtimeCore_esmBundler_resolveComponent as d,
  runtimeCore_esmBundler_resolveDirective as N,
  runtimeCore_esmBundler_createElementBlock as r,
  runtimeCore_esmBundler_openBlock as o,
  runtimeCore_esmBundler_Fragment as S,
  runtimeCore_esmBundler_renderList as U,
  runtimeCore_esmBundler_createElementVNode as x,
  runtimeCore_esmBundler_createBlock as D,
  runtimeCore_esmBundler_createCommentVNode as L,
  runtimeCore_esmBundler_createVNode as s,
  runtimeCore_esmBundler_withDirectives as a,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_withCtx as p,
  runtimeCore_esmBundler_createTextVNode as M,
  shared_esmBundler_toDisplayString as V,
  iconName as b,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { CouponBetBuilderBetsLock as $ } from "./3233f19766.js";
import { useCouponStore as A, _export_sfc as O } from "./entry-50afb6f36c.js";
const B = C.xxxs,
  g = { class: "coupon-bet-builder-bets" },
  w = { class: "coupon-bet-builder-bets__bet" },
  F = ["onClick", "aria-label", "disabled"],
  P = ["onClick", "aria-label", "disabled"],
  R = z({
    __name: "CouponBetBuilderBets",
    props: {
      isAnimated: { type: Boolean },
      bet: {},
      tooltipContainer: {},
      tooltipTheme: {},
    },
    emits: ["removeBuilderMarket"],
    setup(v, { emit: k }) {
      $_$();
      const n = v,
        l = k,
        T = E(),
        h = A(),
        u = I(() => {
          if (!(!n.tooltipTheme || !n.tooltipContainer))
            return {
              content: T("coupon_remove"),
              classes: [n.tooltipTheme],
              container: n.tooltipContainer,
            };
        });
      return (t, Z) => {
        $_$();
        const f = d("UiCaption"),
          _ = d("UiIco"),
          m = N("tooltip");
        return (
          o(),
          r("ul", g, [
            (o(!0),
            r(
              S,
              null,
              U(
                t.bet.builderMarkets,
                (i, c) =>
                  $_$() &&
                  (o(),
                  r(
                    "li",
                    { key: i.id, class: "coupon-bet-builder-bets__item" },
                    [
                      x("div", w, [
                        s(
                          f,
                          { size: e(C).xxs },
                          {
                            default: p(() => $_$() && [M(V(i.name), 1)]),
                            _: 2,
                          },
                          1032,
                          ["size"]
                        ),
                        a(
                          (o(),
                          r(
                            "button",
                            {
                              onClick: (y) => l("removeBuilderMarket", c),
                              "aria-label": t.$T("coupon_remove"),
                              type: "button",
                              class: "coupon-bet-builder-bets__remove",
                              disabled: t.isAnimated,
                            },
                            [
                              s(_, { ico: e(b).TIMES, size: e(B) }, null, 8, [
                                "ico",
                                "size",
                              ]),
                            ],
                            8,
                            F
                          )),
                          [[m, e(u)]]
                        ),
                      ]),
                      e(h).marketsLocked.includes(i.id)
                        ? (o(),
                          D(
                            $,
                            { key: 0, class: "coupon-bet-builder-bets__lock" },
                            {
                              control: p(
                                () =>
                                  $_$() && [
                                    a(
                                      (o(),
                                      r(
                                        "button",
                                        {
                                          onClick: (y) =>
                                            l("removeBuilderMarket", c),
                                          "aria-label": t.$T("coupon_remove"),
                                          type: "button",
                                          class:
                                            "coupon-bet-builder-bets__remove coupon-bet-builder-bets__remove--lock",
                                          disabled: t.isAnimated,
                                        },
                                        [
                                          s(
                                            _,
                                            { ico: e(b).TIMES, size: e(B) },
                                            null,
                                            8,
                                            ["ico", "size"]
                                          ),
                                        ],
                                        8,
                                        P
                                      )),
                                      [[m, e(u)]]
                                    ),
                                  ]
                              ),
                              _: 2,
                            },
                            1024
                          ))
                        : L("", !0),
                    ]
                  ))
              ),
              128
            )),
          ])
        );
      };
    },
  }),
  H = O(R, [["__scopeId", "data-v-4de7dfb4"]]);
export { H as CouponBetBuilderBets };
