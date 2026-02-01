import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_computed as n,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_defineComponent as _t,
  defaultSizeType as Lt,
  theme_constants_themeType as It,
  useToggle_useToggle as $t,
  runtimeCore_esmBundler_resolveComponent as rt,
  runtimeCore_esmBundler_resolveDirective as Mt,
  runtimeCore_esmBundler_createBlock as W,
  runtimeCore_esmBundler_openBlock as y,
  runtimeCore_esmBundler_resolveDynamicComponent as Vt,
  shared_esmBundler_normalizeClass as Dt,
  runtimeCore_esmBundler_withCtx as A,
  runtimeCore_esmBundler_createElementVNode as it,
  runtimeCore_esmBundler_createElementBlock as P,
  runtimeCore_esmBundler_createVNode as R,
  runtimeCore_esmBundler_withDirectives as kt,
  runtimeCore_esmBundler_createCommentVNode as lt,
  runtimeCore_esmBundler_renderSlot as L,
  runtimeDom_esmBundler_withModifiers as zt,
  size_constants_sizeType as mt,
  iconName as Nt,
  WeightType as Ot,
  runtimeCore_esmBundler_Fragment as ct,
  runtimeCore_esmBundler_renderList as Rt,
  runtimeCore_esmBundler_createTextVNode as I,
  shared_esmBundler_toDisplayString as $,
  index_useT as U,
  runtimeCore_esmBundler_useAttrs as Ut,
  index_getConfigs as Z,
  useFormatCurrency_useFormatCurrency as tt,
  runtimeCore_esmBundler_mergeProps as Et,
  useAccountStore as xt,
  isDef as dt,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as Kt,
  useCouponStore as jt,
  minus as ft,
  multiply as yt,
  add as Ht,
  COUPON_TYPES_WITH_MAX_POSSIBLE_WIN as Xt,
  formatCoefView as Yt,
  getCouponBetStatusDictionaryKey as qt,
} from "./entry-50afb6f36c.js";
import { getCouponTypeDictionaryKey as Gt } from "./9afba2de88.js";
import { getCouponStatusDictionaryKey as Jt } from "./978e9c7c45.js";
const Qt = ({ possibleWin: e, maxPayout: a }) =>
    $_$() && {
      possibleWinAfterMaxPayout: n(() =>
        $_$() && a.value ? Math.min(a.value, t(e)) : t(e)
      ),
    },
  Zt = { class: "ui-tax__head" },
  te = { class: "ui-tax__action" },
  ee = { key: 0, class: "ui-tax__list" },
  ne = _t({
    __name: "UiTax",
    props: {
      tag: { type: String, default: "div" },
      theme: { type: String, default: It.gray60 },
      size: { type: String, default: Lt },
      taxItems: { type: Array, default: () => [] },
      weight: { type: String, default: "" },
      tooltip: { type: [String, Object], default: "" },
      emptyMessage: { type: String, default: "" },
      hasSystem: { type: Boolean, default: !1 },
      expanded: { type: Boolean },
      totalColor: { type: String, default: "" },
      isLandscapeTwoColumns: { type: Boolean },
    },
    setup(e) {
      $_$();
      const a = e,
        [d, m] = $t(!1),
        c = n(() => a.expanded || m.value),
        T = () => {
          a.expanded || d();
        };
      return (i, f) => {
        $_$();
        const r = rt("UiCaption"),
          l = rt("UiIco"),
          _ = Mt("tooltip");
        return (
          y(),
          W(
            Vt(e.tag),
            {
              class: Dt([
                "ui-tax",
                [
                  `ui-tax--theme-${e.theme}`,
                  `ui-tax--size-${e.size}`,
                  { "ui-tax--two-columns": e.isLandscapeTwoColumns },
                ],
              ]),
            },
            {
              default: A(
                () =>
                  $_$() && [
                    it("div", Zt, [
                      it("div", te, [
                        e.expanded
                          ? (y(),
                            W(
                              r,
                              { key: 0, class: "ui-tax__name" },
                              {
                                default: A(
                                  () =>
                                    $_$() && [
                                      L(i.$slots, "name", {}, void 0, !0),
                                    ]
                                ),
                                _: 3,
                              }
                            ))
                          : (y(),
                            P(
                              "button",
                              {
                                key: 1,
                                onClick: zt(T, ["stop"]),
                                type: "button",
                                class: "ui-tax__toggle",
                              },
                              [
                                R(
                                  r,
                                  { class: "ui-tax__name" },
                                  {
                                    default: A(
                                      () =>
                                        $_$() && [
                                          L(i.$slots, "name", {}, void 0, !0),
                                        ]
                                    ),
                                    _: 3,
                                  }
                                ),
                              ]
                            )),
                        e.hasSystem
                          ? kt(
                              (y(),
                              W(
                                l,
                                {
                                  key: 2,
                                  ico: t(Nt).INFO_CIRCLE,
                                  size: t(mt).xs,
                                  class: "ui-tax__info",
                                },
                                null,
                                8,
                                ["ico", "size"]
                              )),
                              [[_, e.tooltip]]
                            )
                          : lt("", !0),
                      ]),
                      R(
                        r,
                        {
                          noWrap: "",
                          color: e.totalColor,
                          weight: t(Ot).BOLD,
                          class: "ui-tax__total",
                        },
                        {
                          default: A(
                            () =>
                              $_$() && [L(i.$slots, "total", {}, void 0, !0)]
                          ),
                          _: 3,
                        },
                        8,
                        ["color", "weight"]
                      ),
                    ]),
                    e.taxItems.length
                      ? (y(),
                        P(
                          ct,
                          { key: 0 },
                          [
                            t(c)
                              ? (y(),
                                P("ul", ee, [
                                  (y(!0),
                                  P(
                                    ct,
                                    null,
                                    Rt(
                                      e.taxItems,
                                      (x, p) =>
                                        $_$() &&
                                        (y(),
                                        P(
                                          "li",
                                          {
                                            key: `${x.label}-${p}`,
                                            class: "ui-tax__item",
                                          },
                                          [
                                            R(
                                              r,
                                              { class: "ui-tax__label" },
                                              {
                                                default: A(
                                                  () =>
                                                    $_$() && [I($(x.label), 1)]
                                                ),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                            R(
                                              r,
                                              {
                                                weight: e.weight,
                                                class: "ui-tax__amount",
                                              },
                                              {
                                                default: A(
                                                  () =>
                                                    $_$() && [I($(x.amount), 1)]
                                                ),
                                                _: 2,
                                              },
                                              1032,
                                              ["weight"]
                                            ),
                                          ]
                                        ))
                                    ),
                                    128
                                  )),
                                ]))
                              : lt("", !0),
                          ],
                          64
                        ))
                      : (y(),
                        W(
                          r,
                          { key: 1, size: t(mt).xxs, class: "ui-tax__message" },
                          {
                            default: A(
                              () => $_$() && [I($(e.emptyMessage), 1)]
                            ),
                            _: 1,
                          },
                          8,
                          ["size"]
                        )),
                  ]
              ),
              _: 3,
            },
            8,
            ["class"]
          )
        );
      };
    },
  }),
  ae = Kt(ne, [["__scopeId", "data-v-09d36edf"]]),
  me = _t({
    __name: "CouponTaxes",
    props: { taxes: {}, currency: {}, winAmount: {} },
    setup(e) {
      $_$();
      const a = e,
        d = U(),
        m = Ut(),
        c = jt(),
        T = n(() => {
          var o;
          return (o = a.currency) != null ? o : c.couponCurrencyIso;
        }),
        [i, f, r] = Z(-1008, 633, 1362),
        { formatAmountWithCurrency: l } = tt({
          geoCurrency: i,
          amountTemplate: f,
        }),
        _ = n(() => {
          const o = [],
            { taxes: u } = a;
          return (
            u.isBetTaxable &&
              (o.push({
                label: u.amountAfterBetTaxLabel,
                amount: u.amountAfterBetTaxFormatted,
              }),
              o.push({
                label: u.betTaxLabel,
                amount: u.betTaxAmountFormatted,
              })),
            u.isPayoutTaxable &&
              (o.push({
                label: u.winAmountAfterBetTaxLabel,
                amount: u.winAmountAfterBetTaxFormatted,
              }),
              o.push({
                label: u.payoutTaxLabel,
                amount: u.payoutTaxAmountFormatted,
              })),
            u.isPayoutTaxable &&
              u.hasReturnTax &&
              o.push({
                label: u.returnTaxLabel,
                amount: u.payoutTaxAmountFormatted,
              }),
            a.winAmount &&
              o.push({
                label: u.winAmountAfterPayoutTaxLabel,
                amount: a.winAmount,
              }),
            o
          );
        }),
        x = n(() => {
          var o;
          return l({
            amount: (o = a.taxes.overallTaxAmount) != null ? o : 0,
            currencyIso: T,
          });
        }),
        p = n(
          () =>
            $_$() && {
              taxItems: t(_),
              emptyMessage: d("coupon_tax_deduction_info"),
              ...m,
            }
        );
      return (o, u) =>
        $_$() &&
        (y(),
        W(
          ae,
          Et(t(p), { class: "coupon-taxes", expanded: t(r) }),
          {
            name: A(
              () =>
                $_$() && [
                  L(
                    o.$slots,
                    "name",
                    {},
                    () => $_$() && [I($(o.$T("coupon_taxes")), 1)]
                  ),
                ]
            ),
            total: A(
              () =>
                $_$() && [
                  L(o.$slots, "total", {}, () => $_$() && [I($(t(x)), 1)]),
                ]
            ),
            _: 3,
          },
          16,
          ["expanded"]
        ));
    },
  }),
  oe = ({ taxes: e, amount: a, coef: d, currencyIso: m }) => {
    $_$();
    const c = U(),
      T = xt(),
      [i, f] = Z(-1008, 633),
      { formatAmountWithCurrency: r } = tt({
        geoCurrency: i,
        amountTemplate: f,
      }),
      l = n(() => $_$() && T.getCurrencySymbol(t(m))),
      _ = n(() => {
        $_$();
        var v;
        return (v = t(e).sumAfterTax.value) != null ? v : t(a);
      }),
      x = n(
        () =>
          $_$() &&
          r({
            amount: t(e).sumAfterTax.value || a,
            currencyIso: m,
            needAmountFormat: !0,
            currencySymbol: l,
          })
      ),
      p = n(() =>
        $_$() && t(e).sumAfterTax.name
          ? t(e).sumAfterTax.name
          : c("coupon_stake_after_tax")
      ),
      o = n(() => $_$() && t(e).vat.value),
      u = n(
        () =>
          $_$() &&
          r({
            amount: t(e).vat.value,
            currencyIso: m,
            needAmountFormat: !0,
            currencySymbol: l,
          })
      ),
      b = n(() => $_$() && !!t(e).vat.value),
      M = n(() => $_$() && t(b) && t(a) > 0),
      g = n(() => $_$() && !!t(e).payout.value),
      V = n(() => ($_$() && t(b)) || t(g)),
      h = n(() => $_$() && !!t(e).tax.value),
      D = n(() => ($_$() && t(M)) || t(h)),
      w = n(() => $_$() && t(e).tax.value),
      E = n(
        () =>
          $_$() &&
          r({
            amount: t(e).tax.value,
            currencyIso: m,
            needAmountFormat: !0,
            currencySymbol: l,
          })
      ),
      S = n(() =>
        $_$() && t(e).payout.value ? ft(t(e).payout.value, t(a)) : -t(a)
      ),
      C = n(() =>
        $_$() && t(e).potentialWinning.value
          ? ft(t(e).potentialWinning.value, t(a))
          : -t(a)
      ),
      k = n(() => $_$() && t(e).payout.value),
      K = n(
        () =>
          $_$() &&
          r({
            amount: t(e).payout.value,
            currencyIso: m,
            needAmountFormat: !0,
            currencySymbol: l,
          })
      ),
      j = n(() =>
        $_$() && t(e).payout.name ? t(e).payout.name : c("coupon_payout")
      ),
      H = n(() =>
        $_$() && t(e).potentialWinning.value
          ? t(e).potentialWinning.value
          : yt(t(_), t(d))
      ),
      X = n(() =>
        $_$() && t(e).potentialWinning.value
          ? r({
              amount: t(e).potentialWinning.value,
              currencyIso: m,
              needAmountFormat: !0,
              currencySymbol: l,
            })
          : r({
              amount: yt(t(_), t(d)),
              currencyIso: m,
              needAmountFormat: !0,
              currencySymbol: l,
            })
      ),
      B = n(() =>
        $_$() && t(e).potentialWinning.name
          ? t(e).potentialWinning.name
          : `${c("coupon_possible_win")}`
      ),
      z = n(() => $_$() && t(e).vat.name),
      Y = n(() => $_$() && t(e).tax.name),
      F = n(() => $_$() && !!t(e).taxRefund.value),
      q = n(() =>
        $_$() && t(e).taxRefund.name
          ? t(e).taxRefund.name
          : c("coupon_return_tax")
      ),
      G = n(() =>
        $_$() && t(V) ? Ht(t(o), t(w)) : t(b) ? t(o) : t(g) ? t(w) : 0
      );
    return {
      amountAfterBetTax: _,
      amountAfterBetTaxFormatted: x,
      amountAfterBetTaxLabel: p,
      betTaxAmount: o,
      betTaxAmountFormatted: u,
      hasBetTaxes: b,
      isBetTaxable: M,
      hasPayoutTaxes: g,
      hasTaxes: V,
      isPayoutTaxable: h,
      isTaxable: D,
      payoutTaxAmount: w,
      payoutTaxAmountFormatted: E,
      profitAfterBetTax: S,
      profitAfterPayoutTax: C,
      winAmountAfterBetTax: k,
      winAmountAfterBetTaxFormatted: K,
      winAmountAfterBetTaxLabel: j,
      winAmountAfterPayoutTax: H,
      winAmountAfterPayoutTaxFormatted: X,
      winAmountAfterPayoutTaxLabel: B,
      betTaxLabel: z,
      payoutTaxLabel: Y,
      hasReturnTax: F,
      returnTaxLabel: q,
      overallTaxAmount: G,
    };
  },
  ce = (e) => {
    $_$();
    const a = U(),
      d = n(() => $_$() && a(Gt(t(e).typeId))),
      m = n(() =>
        $_$() && t(e).systemValue
          ? `${t(d)} ${t(e).systemValue}/${t(e).systemOffset}`
          : t(d)
      );
    return { couponTypeLabel: d, couponTypeLabelWithSystemValue: m };
  },
  de = (e) => {
    $_$();
    const [a, d, m] = Z(-1008, 633, 48),
      c = U(),
      T = xt(),
      i = n(() => $_$() && t(e).currencyIso),
      f = n(() => {
        $_$();
        var s;
        const { currencyIso: Ft, accountId: Pt } = t(e),
          ut = T.getCurrencySymbol(Ft),
          st = T.accounts.find((Wt) => Wt.id === Pt);
        return (s = ut != null ? ut : st == null ? void 0 : st.symbol) != null
          ? s
          : "";
      }),
      r = n(() => $_$() && t(e).prepaidAmount),
      { formatAmountWithCurrency: l } = tt({
        geoCurrency: a,
        amountTemplate: d,
      }),
      {
        amountAfterBetTaxFormatted: _,
        betTaxAmountFormatted: x,
        betTaxLabel: p,
        isBetTaxable: o,
        isPayoutTaxable: u,
        isTaxable: b,
        payoutTaxAmountFormatted: M,
        payoutTaxLabel: g,
        winAmountAfterBetTaxFormatted: V,
        winAmountAfterPayoutTax: h,
        winAmountAfterPayoutTaxLabel: D,
        winAmountAfterPayoutTaxFormatted: w,
        overallTaxAmount: E,
        hasReturnTax: S,
      } = oe({
        taxes: n(() => $_$() && t(e).taxBet),
        amount: n(() => {
          $_$();
          var s;
          return (s = t(e).amount) != null ? s : 0;
        }),
        coef: n(() => {
          $_$();
          var s;
          return (s = t(e).coef) != null ? s : 0;
        }),
        currencyIso: i,
      }),
      C = n(() => $_$() && t(e).statusId === 8),
      k = n(() => $_$() && [3, 4].includes(t(e).statusId)),
      K = n(() => $_$() && [2].includes(t(e).statusId)),
      j = n(() => $_$() && t(e).statusId === 1),
      H = n(() => $_$() && [1, 3, 4, 9, 10].includes(t(e).statusId)),
      X = n(() => $_$() && t(e).typeId === 5),
      B = n(() => $_$() && t(X) && t(j)),
      { possibleWinAfterMaxPayout: z } = Qt({
        maxPayout: n(() => $_$() && t(e).maxPayout),
        possibleWin: n(() => {
          $_$();
          var s;
          return (s = t(e).possibleWinAmount) != null ? s : 0;
        }),
      }),
      Y = n(() => $_$() && Xt.includes(t(e).typeId)),
      F = n(() => $_$() && m && t(Y) && dt(t(e).maxPossibleWinAfterMaxPayout)),
      q = n(() =>
        $_$() && dt(t(e).maxPossibleWinAfterMaxPayout)
          ? `${t(e).maxPossibleWinAfterMaxPayout} ${t(i)}`
          : void 0
      ),
      G = n(() => ($_$() && t(q)) || void 0),
      v = n(() => ($_$() && t(C) ? t(e).initialAmount : t(e).amount)),
      At = n(() =>
        $_$() && t(v)
          ? l({ amount: v, currencyIso: i, currencySymbol: f })
          : "-"
      ),
      Tt = n(() =>
        $_$() && t(e).winAmount
          ? l({
              amount: t(e).winAmount,
              currencyIso: i,
              needAmountFormat: !0,
              currencySymbol: f,
            })
          : "-"
      ),
      J = n(() =>
        $_$() && t(K)
          ? t(z)
          : t(C)
          ? t(e).saleAmount
          : !t(S) && t(b)
          ? t(h)
          : t(S) && t(e).possibleWinAmount
          ? t(e).possibleWinAmount
          : t(F)
          ? t(e).maxPossibleWinAfterMaxPayout
          : t(z)
      ),
      pt = n(() =>
        $_$() && t(J) && !t(B)
          ? l({
              amount: t(J),
              currencyIso: i,
              needAmountFormat: !0,
              currencySymbol: f,
            })
          : "-"
      ),
      bt = n(() =>
        $_$() && t(r)
          ? l({
              amount: t(r),
              currencyIso: i,
              needAmountFormat: !0,
              currencySymbol: f,
            })
          : "-"
      ),
      et = n(() => $_$() && t(e).coefViewId === 0),
      nt = n(() => {
        $_$();
        if (t(C)) return t(e).coefByView;
        if (t(k)) return t(e).coefByView;
        if (!t(B)) return t(e).coefByView;
      }),
      at = n(() => {
        $_$();
        var s;
        return (s = t(nt)) != null ? s : "-";
      }),
      Q = n(() => {
        $_$();
        if (!(t(et) || t(B))) return t(e).coef;
      }),
      Ct = n(() => ($_$() && t(Q) ? `(${Yt(t(Q))})` : "")),
      Bt = n(() => $_$() && [t(at), t(Ct)].filter(Boolean).join(" ")),
      N = n(() => {
        $_$();
        var s;
        return (s = t(e).autoSaleSum) != null ? s : 0;
      }),
      O = n(() => {
        $_$();
        var s;
        return (s = t(e).cashoutSum) != null ? s : 0;
      }),
      vt = n(() => $_$() && !!(t(N) || t(O))),
      gt = n(() =>
        $_$() && t(N)
          ? l({
              amount: t(N),
              currencyIso: i,
              currencySymbol: f,
              needAmountFormat: !0,
            })
          : "-"
      ),
      ht = n(() =>
        $_$() && t(O)
          ? l({
              amount: t(O),
              currencyIso: i,
              currencySymbol: f,
              needAmountFormat: !0,
            })
          : "-"
      ),
      wt = n(
        () =>
          $_$() &&
          [1, 9].includes(t(e).statusId) &&
          t(e).possibleWinAmount &&
          !t(B)
      ),
      ot = n(() =>
        $_$() && t(F) ? c("coupon_max_possible_win") : t(wt) ? t(D) : ""
      ),
      St = n(() =>
        $_$() && t(ot)
          ? t(ot)
          : t(e).coef === 1 && t(e).statusId === 4
          ? c(qt(3))
          : c(Jt(t(e).statusId))
      );
    return {
      payoutLabel: n(() =>
        ($_$() && t(e).winAmount) || t(C)
          ? c("betting_payout")
          : c("coupon_possible_payout")
      ),
      amountAfterBetTaxFormatted: _,
      betTaxAmountFormatted: x,
      betTaxLabel: p,
      isBetTaxable: o,
      isPayoutTaxable: u,
      isTaxable: b,
      isTaxableStatus: H,
      isShownMaxPossibleWin: F,
      maxPossibleWinAmount: G,
      payoutTaxAmountFormatted: M,
      payoutTaxLabel: g,
      winAmountAfterBetTaxFormatted: V,
      winAmountAfterPayoutTax: h,
      winAmountAfterPayoutTaxLabel: D,
      winAmountAfterPayoutTaxFormatted: w,
      winAmountFormatted: Tt,
      hasReturnTax: S,
      overallTaxAmount: E,
      currencyIso: i,
      currencySymbol: f,
      isStatusSold: C,
      isStatusWin: k,
      amount: v,
      amountFormatted: At,
      receivedAmount: J,
      receivedAmountFormatted: pt,
      prepaidAmount: r,
      prepaidAmountFormatted: bt,
      isCoefViewDecimal: et,
      totalCoefByView: nt,
      totalCoefByViewFormatted: at,
      totalCoefDecimal: Q,
      totalCoefFormatted: Bt,
      isConditionalBetInAdoptedStatus: B,
      autoSaleSum: N,
      cashoutSum: O,
      autoSaleSumFormatted: gt,
      cashoutSumFormatted: ht,
      hasAutoSaleDetailInfo: vt,
      statusLabel: St,
    };
  };
export {
  ae as UiTax,
  me as _sfc_main,
  ce as useBettingCouponTypeLabel,
  oe as useCouponHistoryTaxes,
  Qt as useCouponMaxPayout,
  de as useDefaultCouponView,
};
