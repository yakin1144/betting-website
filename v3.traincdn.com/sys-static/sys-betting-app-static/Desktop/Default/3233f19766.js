import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_computed as o,
  reactivity_esmBundler_unref as e,
  index_useT as F,
  index_getConfigs as g,
  range_range as ke,
  reactivity_esmBundler_ref as ye,
  runtimeCore_esmBundler_watch as Se,
  useGlobalStore as P,
  useFormatCurrency_useFormatCurrency as ve,
  formatMoney_formatMoney as he,
  runtimeCore_esmBundler_defineComponent as Ie,
  runtimeCore_esmBundler_resolveComponent as Te,
  runtimeCore_esmBundler_createElementBlock as N,
  runtimeCore_esmBundler_openBlock as D,
  runtimeCore_esmBundler_createVNode as ge,
  runtimeCore_esmBundler_createCommentVNode as Me,
  size_constants_sizeType as Ae,
  runtimeCore_esmBundler_withCtx as we,
  runtimeCore_esmBundler_createTextVNode as be,
  shared_esmBundler_toDisplayString as xe,
  runtimeCore_esmBundler_renderSlot as Oe,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useCouponContext as M,
  useCouponBetBlockId as $,
  useCouponMaxInputValue as Ve,
  useBetAmount as Ne,
} from "./9afba2de88.js";
import { useCouponThemeInject as De } from "./32064d16d1.js";
import {
  useCouponStore as A,
  useBettingBlockTitleDictionary as Le,
  COUPON_LOBBY_BLOCK_ID as L,
  useCouponAnalytics as Fe,
  isSpecialCoefMarket as Pe,
  convertToView as $e,
  useCouponMarketName as Ee,
  multiply as E,
  mapObjectValues as Ue,
  _export_sfc as je,
  divide as ze,
} from "./entry-50afb6f36c.js";
import "./ffbea8575c.js";
const We = ({ amount: t, maximumAmount: s, isActiveAutoMax: c }) => ({
    setMaximumAmount: () => {
      t.value && s.value && c.value && t.value > s.value && (t.value = s.value);
    },
  }),
  Re = () => {
    $_$();
    const t = A(),
      s = o(() => t.couponBets),
      c = o(() => t.couponTypeId),
      r = 4,
      l = o(() => $_$() && e(c) === 2),
      p = o(() => $_$() && e(s).length >= r);
    return { hasMinSystemBetsCount: o(() => $_$() && e(l) && e(p)) };
  },
  Ke = (t) => {
    $_$();
    const s = F(),
      { betsByBlockId: c, blockIds: r, hasBlocks: l, typeId: p } = M(),
      i = $(t),
      [B] = g(33),
      { getBlockTitleDictionaryArgs: a } = Le(B),
      d = o(() => $_$() && s(...a(e(i)))),
      _ = o(() => $_$() && Math.max(...e(r))),
      C = o(() => $_$() && e(p) === 4),
      u = o(() => ($_$() && e(c)[e(i)].length > 1) || e(i) === 0),
      k = o(() =>
        $_$() && e(l) ? ke(e(C) ? 0 : 1, e(_) + (e(u) ? 2 : 1)) : []
      ),
      y = o(
        () =>
          $_$() &&
          e(k).map((m) => ({ name: s(...a(m)), label: s(...a(m)), value: m }))
      ),
      v = o({
        get: () => $_$() && e(y).find(({ value: m }) => $_$() && m === e(i)),
        set: ({ value: m }) => {
          i.value = m;
        },
      });
    return {
      betBlockId: i,
      betBlockTitle: d,
      allowedBlockIds: k,
      allowedBlockOptions: y,
      selectedBlockOption: v,
    };
  },
  Ye = (t) => {
    $_$();
    const [s] = g(46),
      c = A(),
      { hasMinSystemBetsCount: r } = Re(),
      l = o(() => c.couponSystemValues),
      p = o(() => c.couponBlockIds),
      i = o(() => c.couponIsActiveSystemBanker),
      B = 2,
      a = $(t),
      d = o({
        get: () => a.value === L,
        set: (u) => {
          $_$();
          a.value = u ? L : Math.max(...e(p)) + 1;
        },
      }),
      _ = o(() => $_$() && e(i) && e(r) && s),
      C = o(() => $_$() && e(l).length < B && !e(d));
    return {
      isBankerBet: d,
      isVisibleSystemBetBankerToggler: _,
      isDisabledSystemBetBankerToggler: C,
    };
  },
  Ge = (t, s) => {
    $_$();
    const c = ye();
    return (
      Se(
        t,
        (r, l) => {
          r !== l && (c.value = l);
        },
        s
      ),
      c
    );
  },
  no = (t) => {
    $_$();
    const [s, c] = g(-1008, 633),
      r = P(),
      {
        accountSymbol: l,
        hasBetAmount: p,
        hasBlocks: i,
        amountByBetId: B,
        amountStep: a,
        amountStepMore: d,
        amountStepLess: _,
        deleteBet: C,
        initialAmount: u,
        isActiveAutoMax: k,
        currencyIso: y,
      } = M(),
      { formatAmountWithCurrency: v } = ve({
        geoCurrency: s,
        amountTemplate: c,
      }),
      m = Ve({ isActiveAutoMax: k }),
      { clickIcoRemoveOneBet: U } = Fe(),
      I = F(),
      w = A(),
      h = o(() => $_$() && e(t).id),
      j = o(() =>
        $_$() && e(t).isBlocked
          ? I("coupon_blocked")
          : e(t).isDepend
          ? I("coupon_depend")
          : e(t).isBannedExpress
          ? I("coupon_banned_express")
          : ""
      ),
      S = Ne(h),
      { allowedBlockOptions: z, selectedBlockOption: W } = Ke(h),
      { setMaximumAmount: R } = We({
        amount: S,
        maximumAmount: m,
        isActiveAutoMax: k,
      }),
      K = () => {
        $_$();
        if (e(S) === e(u)) {
          const n = e(h),
            f = Ue(e(B), (Ce, fe) => (fe !== n ? Ce : void 0));
          w.couponSetAmountByBetId(f);
        }
      },
      {
        couponNumberInputTheme: Y,
        couponControlInputTheme: G,
        couponTagTheme: q,
        couponMultiSelectTheme: H,
        couponMultiSelectOptionTheme: J,
      } = De(),
      Q = o(
        () =>
          $_$() && {
            "coupon-bet--is-live": e(t).market.isLive,
            "coupon-bet--is-line": !e(t).market.isLive,
            "coupon-bet--has-blocks": e(i),
          }
      ),
      X = o(
        () =>
          $_$() && [e(t).firstOpponentFullScore, e(t).secondOpponentFullScore]
      ),
      Z = o(() => {
        $_$();
        var n;
        return (n = e(t).market) == null ? void 0 : n.firstOpponentName;
      }),
      ee = o(() => {
        $_$();
        var n;
        return (n = e(t).market) == null ? void 0 : n.secondOpponentName;
      }),
      oe = o(() => {
        $_$();
        var n;
        return !!((n = e(t).market) != null && n.secondOpponentName);
      }),
      b = o(() => $_$() && Pe(e(t).market.typeId)),
      te = o(() => $_$() && e(t).market.coef),
      ne = Ge(te),
      x = o(() => r.getCoefViewId),
      se = o(() => $_$() && e(x) === 0),
      O = o(() =>
        $_$() && e(t).market.coef ? $e(Number(e(t).market.coef), 0) : void 0
      ),
      ce = o(() => {
        $_$();
        const n = e(t).market.coefByView;
        return e(b)
          ? n
          : e(t).market.coef
          ? !e(se) && n
            ? `${n} (${e(O)})`
            : e(O)
          : "-";
      }),
      V = () => {
        $_$();
        C(e(h)), U();
      },
      re = (n) => {
        $_$();
        const { builderMarkets: f } = e(t);
        f.splice(n, 1), f.length || V();
      },
      { marketText: ue } = Ee(o(() => $_$() && e(t).market)),
      {
        isBankerBet: ie,
        isVisibleSystemBetBankerToggler: le,
        isDisabledSystemBetBankerToggler: ae,
      } = Ye(e(t).id),
      T = o(() => $_$() && E(e(S) || 0, e(t).market.coef || 0)),
      me = o(() => v({ amount: T, currencyIso: y, currencySymbol: l })),
      pe = o(() => {
        $_$();
        var n, f;
        return he(((n = e(T)) != null ? n : 0) - ((f = e(S)) != null ? f : 0));
      }),
      de = o(() =>
        v({
          amount: pe,
          currencyIso: y,
          needAmountFormat: !0,
          currencySymbol: l,
        })
      ),
      Be = o(() => $_$() && [0, 15].includes(e(x))),
      _e = o(() => $_$() && w.couponTypeId === 10001 && e(Be));
    return {
      caption: o(() => {
        $_$();
        var n;
        return [
          (n = e(t).gameNumber) != null ? n : e(t).market.sportName,
          [
            e(t).market.champName,
            e(t).additionalType && `(${e(t).additionalType})`,
          ]
            .filter(Boolean)
            .join(" "),
        ]
          .filter(Boolean)
          .join(". ");
      }),
      hasBlocks: i,
      lockMessage: j,
      betAmount: S,
      couponBetClasses: Q,
      selectedBlockOption: W,
      allowedBlockOptions: z,
      hasBetAmount: p,
      amountStep: a,
      amountStepMore: d,
      amountStepLess: _,
      scores: X,
      maxInputValue: m,
      marketText: ue,
      couponControlInputTheme: G,
      couponMultiSelectTheme: H,
      couponMultiSelectOptionTheme: J,
      couponNumberInputTheme: Y,
      couponTagTheme: q,
      maxPossibleWinByBet: T,
      maxPossibleWinByBetFormatted: me,
      isBankerBet: ie,
      isVisibleSystemBetBankerToggler: le,
      isDisabledSystemBetBankerToggler: ae,
      isSpecialMarket: b,
      coefByViewFormatted: ce,
      maxPossibleProfitByBetFormatted: de,
      isShowPossibleWinAndProfit: _e,
      prevBetCoef: ne,
      firstOpponentName: Z,
      secondOpponentName: ee,
      hasSecondOpponentName: oe,
      cleanBetAmount: K,
      setMaximumAmount: R,
      removeBetFromCoupon: V,
      removeBuilderMarket: re,
    };
  },
  qe = { class: "coupon-bet-builder-bets-lock" },
  He = { key: 0, class: "coupon-bet-builder-bets-lock__control" },
  Je = Ie({
    __name: "CouponBetBuilderBetsLock",
    setup(t) {
      return (s, c) => {
        $_$();
        const r = Te("UiCaption");
        return (
          D(),
          N("div", qe, [
            ge(
              r,
              { size: e(Ae).xxs, class: "coupon-bet-builder-bets-lock__info" },
              {
                default: we(() => $_$() && [be(xe(s.$T("coupon_depend")), 1)]),
                _: 1,
              },
              8,
              ["size"]
            ),
            s.$slots.control
              ? (D(), N("div", He, [Oe(s.$slots, "control", {}, void 0, !0)]))
              : Me("", !0),
          ])
        );
      };
    },
  }),
  so = je(Je, [["__scopeId", "data-v-e35607d9"]]),
  co = () => {
    $_$();
    const t = P(),
      s = o(() => t.getCoefViewId),
      { coef: c, coefByView: r, hasCoef: l, hasSpecialCoef: p } = M(),
      i = o(() => $_$() && e(s) === 0),
      B = o(() => $_$() && e(c) && !e(p) && e(l)),
      a = o(() => {
        $_$();
        const u = e(c);
        return u ? ze(Math.trunc(E(u, 1e3)), 1e3).toString() : void 0;
      }),
      d = (u) =>
        ($_$() && !e(B)) || !u ? "-" : !e(i) && e(r) ? `${e(r)} (${u})` : u,
      _ = o(() => $_$() && d(e(a))),
      C = o(() => {
        $_$();
        var u;
        return d((u = e(c)) == null ? void 0 : u.toString());
      });
    return { resultCouponCoefShort: _, resultCouponCoefFull: C };
  };
export {
  so as CouponBetBuilderBetsLock,
  Ke as useAllowedBlocksToSwitch,
  no as useCouponBet,
  Re as useCouponMinSystemBetCount,
  We as useCouponSetMaximumAmount,
  Ye as useCouponSystemBetBanker,
  co as useResultCouponCoef,
};
