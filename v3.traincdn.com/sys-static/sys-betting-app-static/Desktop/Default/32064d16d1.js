import $_$ from "./$_$.js";
$_$();
import {
  defineProvider as w,
  stepFromMaxAmount as d,
  useTooltipOptions as A,
} from "./entry-50afb6f36c.js";
import { COUPON_CONFIG_COMMON as B } from "./3fb5c2806a.js";
import {
  reactivity_esmBundler_ref as p,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_watch as f,
  runtimeCore_esmBundler_nextTick as v,
  runtimeCore_esmBundler_computed as c,
  formatMoney_formatMoney as M,
  range_range as y,
  fixFloat as N,
  uniqueBy as O,
  fixFloatTwoDigits as h,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const S = ".",
  F = (t) => {
    if (Number.isInteger(t) && !Number.isSafeInteger(t)) return 0;
    const o = t.toString().split(S);
    if (o && o.length > 1) {
      const n = o[1];
      return n ? n.length : 0;
    }
    return 0;
  },
  { provide: I, inject: q, useSetProvide: z } = w((t) => t, B);
var x = ((t) => (
  (t.MenuTop = "menu_top"),
  (t.MenuBottom = "menu_bottom"),
  (t.Promo = "promo"),
  (t.PopupPromo = "popup_promo"),
  (t.MomentBet = "moment_bet"),
  (t.MenuLeftCollapsed = "menu_left_collapsed"),
  (t.HowToBet = "how_to_bet"),
  (t.PlaceBet = "place_a_bet"),
  (t.MyCasino = "my_casino"),
  (t.ShowcasePromo = "showcase_promo"),
  (t.MenuBonus = "menu_bonus"),
  (t.MenuLeftFull = "menu_left_full"),
  (t.Tournaments = "tournaments"),
  (t.CouponFull = "coupon_full"),
  (t.CouponEmpty = "coupon_empty"),
  (t.NotAccountYet = "auth_form_not_account_yet"),
  t
))(x || {});
const g = (t, o) => {
    $_$();
    const n = p(e(t));
    return (
      f(t, (r) => {
        $_$();
        e(o) && (n.value = r);
      }),
      f(o, (r) => {
        $_$();
        r &&
          v(() => {
            $_$();
            n.value = e(t);
          });
      }),
      n
    );
  },
  k = (t) => {
    var o;
    const n =
      (o = Object.keys(d).find((r) => parseInt(r, 10) >= t)) != null
        ? o
        : "other";
    return d[n];
  },
  G = ({
    isOnlyMinAndMaxSale: t,
    minSaleAmount: o,
    maxSaleAmount: n,
    limitAmountPartSale: r,
    isOnlyPartAndMaxSale: s,
    modelValue: u,
    onUpdate: a,
  }) => {
    $_$();
    const m = p(!1),
      i = p(0),
      { tooltipTheme: P } = A(),
      _ = g(
        c(() => $_$() && e(u)),
        c(() => $_$() && !e(m))
      ),
      T = (l) => {
        $_$();
        if (l) return (i.value = l), a(l);
        (_.value = e(i)), a(e(i));
      },
      b = c(() =>
        $_$() && e(t)
          ? M(e(n) - e(o))
          : e(s) && e(_) === e(n)
          ? M(e(n) - e(r))
          : k(e(n))
      );
    return {
      isFocused: m,
      localValue: _,
      inputStep: b,
      tooltipTheme: P,
      onChange: T,
    };
  },
  H = ({ min: t, max: o, step: n = 1 }) => {
    $_$();
    const r = (o - t) / 100,
      s = Math.ceil(t / n) * n,
      a = [...(t <= s && s <= o ? y(s, o, r) : [])].map(
        (i) => $_$() && N(i, F(n))
      ),
      m = [t, ...a, o];
    return O(m).map(h);
  },
  C = 0.01,
  Y = ({ min: t, max: o }) => {
    $_$();
    const n = (o - t) / 100,
      r = Math.log10(n),
      s = Math.floor(r),
      u = Math.ceil(r),
      a = Math.abs(10 ** s - n),
      m = Math.abs(10 ** u - n),
      i = a < m ? s : u;
    return h(Math.max(C, 10 ** i));
  },
  V = (t, o, n) => Math.floor((t - (o * t) / n) * 100) / 100,
  E = (t) => {
    $_$();
    const o = p(0),
      n = c({
        get: () => $_$() && e(o),
        set: (r) => {
          $_$();
          let s = r;
          if ((!s && s !== 0 && (s = e(o)), !e(t))) return;
          const {
            isOnlyMaxSale: u,
            limitAmountPartSale: a,
            maxSaleAmount: m,
            minSaleAmount: i,
          } = e(t);
          u || r > a ? (s = m) : r < i && (s = i), s !== e(o) && (o.value = s);
        },
      });
    return (
      f(
        t,
        () => {
          $_$();
          n.value = e(o);
        },
        { immediate: !0 }
      ),
      n
    );
  },
  J = (t) => {
    $_$();
    const o = E(t),
      n = c(() => {
        $_$();
        const u = V(e(t).availableBetAmount, e(o), e(t).maxSaleAmount);
        return e(o) > e(t).limitAmountPartSale ? 0 : u;
      }),
      r = c(() => {
        $_$();
        let u = Math.abs(e(t).availableBetAmount - e(o));
        return e(o) <= e(t).limitAmountPartSale && (u -= e(n)), M(u);
      }),
      s = c(() => ($_$() && e(o) > e(t).availableBetAmount) || e(r) < 0);
    return {
      saleAmount: o,
      newCouponAmount: n,
      profitAmount: r,
      isProfitSale: s,
    };
  };
export {
  x as RegCallSource,
  k as getCustomStepSize,
  V as getNewCouponAmount,
  H as getSliderMarks,
  Y as getSliderStep,
  z as useCouponModalThemeProvider,
  J as useCouponSaleNow,
  G as useCouponSellLaterOrderInput,
  q as useCouponThemeInject,
  I as useCouponThemeProvider,
};
