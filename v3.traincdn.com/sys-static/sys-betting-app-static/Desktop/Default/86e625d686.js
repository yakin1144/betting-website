import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as O,
  runtimeCore_esmBundler_createElementBlock as p,
  runtimeCore_esmBundler_openBlock as n,
  runtimeCore_esmBundler_createBlock as T,
  runtimeCore_esmBundler_createCommentVNode as Z,
  runtimeCore_esmBundler_createElementVNode as C,
  runtimeCore_esmBundler_withCtx as a,
  runtimeCore_esmBundler_renderSlot as q,
  reactivity_esmBundler_toRefs as et,
  index_useT as W,
  index_getConfig as ot,
  useGlobalStore as st,
  useTimeSettings_useTimeSettings as nt,
  runtimeCore_esmBundler_computed as s,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_resolveComponent as H,
  runtimeCore_esmBundler_resolveDirective as rt,
  runtimeCore_esmBundler_createVNode as f,
  runtimeCore_esmBundler_withDirectives as at,
  size_constants_sizeType as N,
  runtimeDom_esmBundler_vShow as it,
  runtimeCore_esmBundler_createSlots as ut,
  runtimeCore_esmBundler_createTextVNode as k,
  shared_esmBundler_toDisplayString as c,
  shared_esmBundler_normalizeClass as J,
  UiModal_F_vue_default as ct,
  index_getConfigs as Q,
  useFormatCurrency_useFormatCurrency as X,
  runtimeCore_esmBundler_Fragment as $,
  runtimeCore_esmBundler_renderList as x,
  index_useDateTimeService as mt,
  useToggle_useToggle as _t,
  formatMoney_formatMoney as E,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as L,
  useTooltipOptions as G,
  useStatisticModule as lt,
  getCouponBetStatusDictionaryKey as pt,
  createStatisticModal as dt,
  useBettingBlockTitleDictionary as yt,
} from "./entry-50afb6f36c.js";
import { useCouponThemeInject as Y } from "./32064d16d1.js";
import { UiCouponBetChamp as ht } from "./ed4f93061a.js";
import {
  UiCouponCoef as ft,
  UiCouponBetTeams as Ct,
  UiCouponSections as K,
  UiCouponSectionsItem as R,
} from "./ac9aa31026.js";
import {
  getBetStatusThemeType as bt,
  getCouponStatusThemeType as It,
  getCouponTypeDictionaryKey as Bt,
} from "./9afba2de88.js";
import { getCouponStatusDictionaryKey as tt } from "./978e9c7c45.js";
import { UiCouponBlock as gt } from "./b0f9ee5637.js";
import { useCouponMaxPayout as St } from "./1ae929339b.js";
const Tt = { class: "ui-coupon-bet-market" },
  kt = { class: "ui-coupon-bet-market__name" },
  vt = O({
    __name: "UiCouponBetMarket",
    setup(e) {
      return (m, o) =>
        $_$() &&
        (n(),
        p("div", Tt, [
          m.$slots.coefByView
            ? (n(),
              T(
                ft,
                { key: 0, class: "ui-coupon-bet-market__coef" },
                {
                  default: a(
                    () => $_$() && [q(m.$slots, "coefByView", {}, void 0, !0)]
                  ),
                  _: 3,
                }
              ))
            : Z("", !0),
          C("span", kt, [q(m.$slots, "name", {}, void 0, !0)]),
        ]));
    },
  }),
  wt = L(vt, [["__scopeId", "data-v-0bd6329c"]]),
  At = { class: "coupon-history-bet" },
  Nt = { class: "coupon-history-bet__header" },
  $t = { class: "coupon-history-bet__params coupon-history-bet-params" },
  xt = {
    key: 0,
    class: "coupon-history-bet-params-item coupon-history-bet-params__item",
  },
  Ot = { class: "coupon-history-bet-params-item__label" },
  Ut = {
    class:
      "coupon-history-bet-params-item__value coupon-history-bet-params-item__total-score",
  },
  zt = {
    class: "coupon-history-bet-params-item coupon-history-bet-params__item",
  },
  Dt = { class: "coupon-history-bet-params-item__label" },
  Pt = O({
    __name: "CouponHistoryBet",
    props: {
      bet: { required: !0, type: Object },
      couponStatusId: { required: !0, type: Number },
    },
    setup(e) {
      $_$();
      const m = e,
        { bet: o, couponStatusId: i } = et(m),
        _ = W(),
        { tooltipTheme: r } = G(),
        v = ot(332),
        b = st(),
        { timezone: B, is12h: d } = nt(),
        w = s(() => b.getLanguage),
        y = s(() => b.isRtl),
        g = lt(),
        { couponHistoryBetStatsIcon: u } = Y(),
        S = s(() => $_$() && v && t(o).hasStatistic),
        U = s(() => b.isDisplayStatsInNewWindowEnabled),
        z = s(() => $_$() && bt(t(i), t(o).statusId)),
        I = s(() => $_$() && `coupon-history-bet-params-item__status--${t(z)}`),
        D = s(() =>
          ($_$() && t(i) === 8) || t(i) === 5
            ? _(tt(t(i)))
            : _(pt(t(o).statusId))
        ),
        { containerSelector: P } = G(),
        F = () => {
          $_$();
          var h;
          g.openStatisticGamePopup({
            gameId: (h = t(o).market.gameId) != null ? h : 0,
            permanentId: t(o).gamePermanentId,
            statisticGameId: t(o).statisticId,
            sportId: t(o).market.sportId,
            shouldOpenInNewTab: t(U),
            isRtl: t(y),
            lng: t(w),
            timeZone: t(B),
            is12h: t(d),
            componentModal: ct,
            createStatisticModal: dt,
          });
        };
      return (h, l) => {
        $_$();
        const A = H("UiIco"),
          M = H("UiButton"),
          V = rt("tooltip");
        return (
          n(),
          p("div", At, [
            C("header", Nt, [
              f(
                ht,
                {
                  caption: t(o).market.champName,
                  sportId: t(o).market.sportId,
                  sportName: t(o).market.sportName,
                },
                null,
                8,
                ["caption", "sportId", "sportName"]
              ),
              at(
                (n(),
                T(
                  M,
                  {
                    onClick: F,
                    "aria-label": h.$T("betting_statistic_statistic"),
                    size: t(N).s,
                    decent: "",
                    narrow: "",
                  },
                  {
                    default: a(
                      () =>
                        $_$() && [
                          f(A, { size: t(N).xs, ico: t(u) }, null, 8, [
                            "size",
                            "ico",
                          ]),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["aria-label", "size"]
                )),
                [
                  [it, t(S)],
                  [
                    V,
                    {
                      content: h.$T("betting_statistic_statistic"),
                      container: t(P),
                      classes: t(r),
                    },
                  ],
                ]
              ),
            ]),
            f(
              Ct,
              {
                firstOpponentName: t(o).market.firstOpponentName,
                secondOpponentName: t(o).market.secondOpponentName,
                class: "coupon-history-bet__teams",
              },
              null,
              8,
              ["firstOpponentName", "secondOpponentName"]
            ),
            f(
              wt,
              { class: "coupon-history-bet__market" },
              ut(
                {
                  name: a(
                    () =>
                      $_$() && [
                        k(
                          c(t(o).market.name) + " " + c(t(o).market.gameName),
                          1
                        ),
                      ]
                  ),
                  _: 2,
                },
                [
                  t(o).market.coef
                    ? {
                        name: "coefByView",
                        fn: a(() => $_$() && [k(c(t(o).market.coefByView), 1)]),
                        key: "0",
                      }
                    : void 0,
                ]
              ),
              1024
            ),
            C("ul", $t, [
              t(o).scoreFormatted
                ? (n(),
                  p("li", xt, [
                    C("span", Ot, c(h.$T("coupon_opened_score")), 1),
                    C("span", Ut, c(t(o).scoreFormatted), 1),
                  ]))
                : Z("", !0),
              C("li", zt, [
                C("span", Dt, c(h.$T("coupon_opened_bet_status")), 1),
                C(
                  "span",
                  {
                    class: J([
                      t(I),
                      "coupon-history-bet-params-item__value coupon-history-bet-params-item__status",
                    ]),
                  },
                  c(t(D)),
                  3
                ),
              ]),
            ]),
          ])
        );
      };
    },
  }),
  j = L(Pt, [["__scopeId", "data-v-281049c1"]]),
  Ft = { key: 0, class: "coupon-history-bets" },
  Zt = O({
    __name: "CouponHistoryBets",
    props: { coupon: { required: !0, type: Object } },
    setup(e) {
      $_$();
      const m = e,
        o = W(),
        [i, _, r] = Q(-1008, 633, 33),
        { formatAmountWithCurrency: v } = X({
          geoCurrency: i,
          amountTemplate: _,
        }),
        { getBlockTitleDictionaryArgs: b } = yt(r),
        B = s(() => m.coupon.currencyIso),
        { couponBetsItemBorder: d } = Y(),
        w = (y) => (y ? v({ amount: y, currencyIso: B }) : o("coupon_max_bet"));
      return (y, g) =>
        $_$() && e.coupon.blocks
          ? (n(),
            p("ul", Ft, [
              (n(!0),
              p(
                $,
                null,
                x(
                  e.coupon.blocks,
                  (u) =>
                    $_$() &&
                    (n(),
                    T(
                      gt,
                      { key: u.id, size: t(N).s, tag: "li" },
                      {
                        title: a(() => $_$() && [k(c(y.$T(...t(b)(u.id))), 1)]),
                        value: a(() => $_$() && [k(c(w(u.amount)), 1)]),
                        default: a(
                          () =>
                            $_$() && [
                              f(
                                K,
                                { tag: "ul" },
                                {
                                  default: a(
                                    () =>
                                      $_$() && [
                                        (n(!0),
                                        p(
                                          $,
                                          null,
                                          x(
                                            u.bets,
                                            (S) =>
                                              $_$() &&
                                              (n(),
                                              T(
                                                R,
                                                { key: S.id, tag: "li" },
                                                {
                                                  default: a(
                                                    () =>
                                                      $_$() && [
                                                        f(
                                                          j,
                                                          {
                                                            bet: S,
                                                            couponStatusId:
                                                              e.coupon.statusId,
                                                          },
                                                          null,
                                                          8,
                                                          [
                                                            "bet",
                                                            "couponStatusId",
                                                          ]
                                                        ),
                                                      ]
                                                  ),
                                                  _: 2,
                                                },
                                                1024
                                              ))
                                          ),
                                          128
                                        )),
                                      ]
                                  ),
                                  _: 2,
                                },
                                1024
                              ),
                            ]
                        ),
                        _: 2,
                      },
                      1032,
                      ["size"]
                    ))
                ),
                128
              )),
            ]))
          : (n(),
            T(
              K,
              { key: 1, tag: "ul", class: "coupon-history-bets" },
              {
                default: a(
                  () =>
                    $_$() && [
                      (n(!0),
                      p(
                        $,
                        null,
                        x(
                          e.coupon.bets,
                          (u) =>
                            $_$() &&
                            (n(),
                            T(
                              R,
                              { key: u.id, tag: "li", hasBorder: t(d) },
                              {
                                default: a(
                                  () =>
                                    $_$() && [
                                      f(
                                        j,
                                        {
                                          bet: u,
                                          couponStatusId: e.coupon.statusId,
                                        },
                                        null,
                                        8,
                                        ["bet", "couponStatusId"]
                                      ),
                                    ]
                                ),
                                _: 2,
                              },
                              1032,
                              ["hasBorder"]
                            ))
                        ),
                        128
                      )),
                    ]
                ),
                _: 1,
              }
            ));
    },
  }),
  Mt = { class: "coupon-history-info" },
  Vt = O({
    __name: "CouponHistoryInfo",
    props: { mainOptions: { type: Array, required: !0 } },
    setup(e) {
      return (m, o) => {
        $_$();
        const i = H("UiCaption");
        return (
          n(),
          p("ul", Mt, [
            (n(!0),
            p(
              $,
              null,
              x(
                e.mainOptions,
                (_, r) =>
                  $_$() &&
                  (n(),
                  p("li", { key: r, class: "coupon-history-info__item" }, [
                    f(
                      i,
                      { size: t(N).xs },
                      { default: a(() => $_$() && [k(c(_.name), 1)]), _: 2 },
                      1032,
                      ["size"]
                    ),
                    f(
                      i,
                      {
                        size: t(N).xs,
                        class: J([_.classes, "coupon-history-info__status"]),
                      },
                      { default: a(() => $_$() && [k(c(_.status), 1)]), _: 2 },
                      1032,
                      ["size", "class"]
                    ),
                  ]))
              ),
              128
            )),
          ])
        );
      };
    },
  }),
  Jt = L(Vt, [["__scopeId", "data-v-07670793"]]),
  Qt = ({ coupon: e, isTaxable: m }) => {
    $_$();
    const [o, i, _] = Q(1469, -1008, 633),
      r = W(),
      v = mt(),
      [b, B] = _t(!1),
      { formatAmountWithCurrency: d } = X({
        geoCurrency: i,
        amountTemplate: _,
      }),
      w = () => {
        b();
      },
      { possibleWinAfterMaxPayout: y } = St({
        maxPayout: s(() => $_$() && t(e).maxPayout),
        possibleWin: s(() => {
          $_$();
          var l;
          return (l = t(e).possibleWinAmount) != null ? l : 0;
        }),
      }),
      g = s(() => {
        $_$();
        const {
          winAmountAfterPayoutTax: l,
          possibleWinAmount: A,
          currencyIso: M,
        } = t(e);
        if (l || A) {
          const V = l ? E(l) : E(t(y));
          return d({ amount: V, currencyIso: M });
        }
        return "";
      }),
      u = s(() => $_$() && t(e).bets.length),
      S = s(() =>
        $_$() && t(B)
          ? r("coupon_less_events")
          : r("coupon_more_events", { count: t(u) })
      ),
      U = s(() => $_$() && It(t(e).statusId)),
      z = s(() => $_$() && `coupon-history-info__status--${t(U)}`),
      I = s(() => $_$() && t(e).statusId === 8),
      D = s(() => ($_$() && t(I) ? t(e).initialAmount : t(e).amount)),
      P = s(() =>
        $_$() && g && t(g) && !t(I)
          ? t(g)
          : t(e).possibleWinAmount
          ? d({
              amount: y,
              currencyIso: t(e).currencyIso,
              needAmountFormat: !0,
            })
          : t(I)
          ? d({
              amount: t(e).saleAmount,
              currencyIso: t(e).currencyIso,
              needAmountFormat: !0,
            })
          : "-"
      ),
      F = s(() => {
        $_$();
        var l;
        return [
          {
            name: v.getShortDateAndTimeFormattedByDate(t(e).createdAt),
            status: r(tt(t(e).statusId)),
            classes: t(z),
          },
          {
            name: r(Bt(t(e).typeId)),
            status: d({
              amount: D,
              currencyIso: t(e).currencyIso,
              needAmountFormat: !0,
            }),
          },
          {
            name: r("coupon_total_coef"),
            status: t(e).coefByView ? `${t(e).coefByView}` : "",
          },
          {
            name:
              t(e).winAmount || t(I)
                ? r("coupon_status_win")
                : r("coupon_possible_win"),
            status: t(P),
          },
          {
            name:
              t(e).winAmount || t(I)
                ? r("betting_payout")
                : r("coupon_possible_payout"),
            status: d({
              amount: (l = t(e).possiblePayoutSum) != null ? l : 0,
              currencyIso: t(e).currencyIso,
              needAmountFormat: !0,
            }),
            isHidden: t(e).payoutType !== 1 || !o,
          },
        ].filter((A) => !A.isHidden);
      }),
      h = s(() => $_$() && t(m) && t(e).statusId !== 2);
    return {
      actionText: S,
      mainOptions: F,
      eventsToggle: w,
      isOpen: B,
      showTax: h,
    };
  };
export {
  Jt as CouponHistoryInfo,
  wt as UiCouponBetMarket,
  Zt as _sfc_main,
  Qt as useCouponHistoryInfo,
};
