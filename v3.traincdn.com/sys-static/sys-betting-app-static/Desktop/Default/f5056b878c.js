import $_$ from "./$_$.js";
$_$();
import {
  isDef as C,
  apiMethodFactory as Et,
  browser_genLngParam as It,
  genCurrencyParam as Ft,
  browser_genRefParam as wt,
  execAsync as et,
  runtimeCore_esmBundler_computed as o,
  useAccountStore as ot,
  index_getConfigs as J,
  useFormatCurrency_useFormatCurrency as nt,
  reactivity_esmBundler_unref as t,
  formatMoney_formatMoney as X,
  useGlobalStore as st,
  index_useT as lt,
  index_useLogger as Nt,
  index_useCookies as Rt,
  index_useHttpModule as Ot,
  index_useClientHeaders as kt,
  useUserConfigStore as Ut,
  reactivity_esmBundler_ref as $t,
  debounce as Vt,
  RequestError as Dt,
  runtimeCore_esmBundler_watch as tt,
  createSharedComposable_createSharedComposable_2 as Gt,
  useRouterMethodsWithLang as Yt,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  multiply as W,
  add as mt,
  divide as pt,
  defaultParamsWrapper as jt,
  genDocTypeParam as qt,
  taxMode as Xt,
  genCountryParam as Jt,
  genGroupIdParam as Kt,
  cf as Qt,
  betSum as Zt,
  createErrorResult as zt,
  useCouponStore as rt,
  defineProvider as dt,
  minus as ct,
} from "./entry-50afb6f36c.js";
import { createEmptyTaxes as j, parseTaxes as te } from "./978e9c7c45.js";
import { useCouponMaxPayout as ee } from "./1ae929339b.js";
const oe = 2,
  ne = 3,
  se = (a = ne, u = oe) => {
    const n = [],
      c = [],
      m = (d, b, f, p, x, i, y) => {
        if (i === y) {
          (f = new Array(a)
            .fill(void 0)
            .map((_, g) => (f.includes(g) ? g : void 0))),
            b.push(f);
          return;
        }
        for (let _ = p; _ <= x; _++)
          (f[i] = d[_]), m(d, b, f, _ + 1, x, i + 1, y);
      };
    for (let d = 0; d < a; d++) c[d] = d;
    return m(c, n, [], 0, c.length - 1, 0, u), n;
  },
  re = 0,
  ae = 1,
  ue = 1,
  ce = (a, u, n, c) => {
    const m = se(n, u),
      p = m
        .map((i) => i.filter((y) => $_$() && C(y)))
        .map((i) => i.map((y) => a[y] || ae))
        .map((i) => i.reduce((y, _) => W(y, _), ue))
        .reduce((i, y) => mt(i, y), re),
      x = pt(c, m.length);
    return W(p, x);
  },
  ie = jt(
    Et({
      url: "/taxservice-api/api/external/Web/v1/GetTax",
      method: "GET",
      expectedParams: {
        ...wt(),
        ...Ft(),
        betSum: Zt,
        cf: Qt,
        ...Kt(),
        ...Jt(),
        taxMode: Xt,
        ...It(),
        ...qt(),
      },
    })
  ),
  it = (a) => !("noPartnerTax" in a);
var le = Object.defineProperty,
  me = (a, u, n) =>
    u in a
      ? le(a, u, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (a[u] = n),
  q = (a, u, n) => me(a, typeof u != "symbol" ? u + "" : u, n);
class pe {
  constructor(u) {
    q(this, "httpModule"),
      q(this, "clientHeaders"),
      q(this, "cookies"),
      q(this, "logger"),
      (this.httpModule = u.$httpModule),
      (this.clientHeaders = u.$clientHeaders),
      (this.cookies = u.$cookies),
      (this.logger = u.$logger);
  }
  async getTaxes(u) {
    $_$();
    let n, c;
    return ([n, c] = et(() => this.doRequest(ie(), u))), (n = await n), c(), n;
  }
  async doRequest(u, n, c) {
    $_$();
    let m, d;
    try {
      const { execute: b } = u(this.httpModule, {
        params: n,
        signal: c == null ? void 0 : c.signal,
        cache: !0,
      });
      return (
        ([m, d] = et(() =>
          b({
            headers: { ...this.clientHeaders },
            hookContext: {
              cookies: this.cookies,
              httpModule: this.httpModule,
              logger: this.logger,
            },
          })
        )),
        (m = await m),
        d(),
        m
      );
    } catch (b) {
      throw zt(b);
    }
  }
}
const ft = () => {
    $_$();
    const a = rt();
    return { taxMode: o(() => Number(a.couponCalcSystemsMin)) };
  },
  yt = ({ couponAmount: a, possibleWin: u, currencyIso: n }) => {
    $_$();
    const c = ot(),
      [m, d] = J(-1008, 633),
      { formatAmountWithCurrency: b } = nt({
        geoCurrency: m,
        amountTemplate: d,
      }),
      f = o(() => $_$() && c.getCurrencySymbol(t(n))),
      p = o(() => {
        $_$();
        var g, S;
        return X(((g = t(u)) != null ? g : 0) - ((S = t(a)) != null ? S : 0));
      }),
      x = o(() =>
        b({
          amount: p,
          currencyIso: n,
          needAmountFormat: !0,
          currencySymbol: f,
        })
      ),
      i = st(),
      y = o(() => i.getCoefViewId),
      _ = o(() => $_$() && [5, 15].includes(t(y)));
    return {
      possibleProfit: p,
      possibleProfitFormatted: x,
      isShownPossibleProfit: _,
    };
  },
  de = 200,
  fe = ({ amount: a, coef: u, exactCoef: n, currencyIso: c }) => {
    $_$();
    const [m, d, b, f, p, x] = J(-1004, -1e3, -1001, -1012, -1008, 633),
      i = lt(),
      y = Nt(),
      _ = Rt(),
      g = Ot(),
      S = kt(),
      { formatAmountWithCurrency: B } = nt({
        geoCurrency: p,
        amountTemplate: x,
      }),
      M = o(() => ($_$() && t(n)) || t(u)),
      H = Ut(),
      F = o(() => {
        var T;
        return (T = H.countryId) != null ? T : f.id;
      }),
      w = o(() => H.documentTypeId || void 0),
      N = ot(),
      v = o(() => N.activeAccount),
      U = o(() => {
        $_$();
        var T, I, A;
        return (A =
          (I = (T = t(v)) == null ? void 0 : T.currencyId) != null
            ? I
            : p == null
            ? void 0
            : p.id) != null
          ? A
          : 1;
      }),
      h = o(() => $_$() && N.getCurrencySymbol(t(c))),
      s = $t(j()),
      { taxMode: $ } = ft(),
      R = o(() => ($_$() && t(s).sumAfterTax.value) || t(a)),
      O = o(
        () =>
          $_$() &&
          B({
            amount: t(s).sumAfterTax.value || a,
            currencyIso: c,
            needAmountFormat: !0,
            currencySymbol: h,
          })
      ),
      k = o(() =>
        $_$() && t(s).sumAfterTax.name
          ? t(s).sumAfterTax.name
          : i("coupon_stake_after_tax")
      ),
      L = o(() => $_$() && t(s).vat.value),
      V = o(
        () =>
          $_$() &&
          B({
            amount: t(s).vat.value,
            currencyIso: c,
            needAmountFormat: !0,
            currencySymbol: h,
          })
      ),
      e = o(() => $_$() && !!t(s).vat.value),
      r = o(() => $_$() && t(e) && t(a) > 0),
      l = o(() => $_$() && !!t(s).payout.value),
      P = o(() => ($_$() && t(e)) || t(l)),
      E = o(() => $_$() && !!t(s).tax.value),
      D = o(() => ($_$() && t(r)) || t(E)),
      G = o(() => $_$() && t(s).tax.value),
      K = o(
        () =>
          $_$() &&
          B({
            amount: t(s).tax.value,
            currencyIso: c,
            needAmountFormat: !0,
            currencySymbol: h,
          })
      ),
      Q = o(() =>
        $_$() && t(s).payout.value ? ct(t(s).payout.value, t(a)) : -t(a)
      ),
      Z = o(() =>
        $_$() && t(s).potentialWinning.value
          ? ct(t(s).potentialWinning.value, t(a))
          : -t(a)
      ),
      bt = o(() => $_$() && t(s).payout.value),
      xt = o(
        () =>
          $_$() &&
          B({
            amount: t(s).payout.value,
            currencyIso: c,
            needAmountFormat: !0,
            currencySymbol: h,
          })
      ),
      _t = o(() =>
        $_$() && t(s).payout.name ? t(s).payout.name : i("coupon_payout")
      ),
      z = o(() =>
        $_$() && t(s).potentialWinning.value
          ? t(s).potentialWinning.value
          : W(t(R), t(M))
      ),
      Pt = o(() =>
        B({
          amount: z,
          currencyIso: c,
          needAmountFormat: !0,
          currencySymbol: h,
        })
      ),
      Tt = o(() =>
        $_$() && t(s).potentialWinning.name
          ? t(s).potentialWinning.name
          : `${i("coupon_possible_win")}`
      ),
      gt = o(() => $_$() && t(s).vat.name),
      Bt = o(() => $_$() && t(s).tax.name),
      At = o(() => $_$() && !!t(s).taxRefund.value),
      Ct = o(() =>
        $_$() && t(s).taxRefund.name
          ? t(s).taxRefund.name
          : i("coupon_return_tax")
      ),
      vt = o(() =>
        $_$() && t(P) ? mt(t(L), t(G)) : t(e) ? t(L) : t(l) ? t(G) : 0
      ),
      {
        possibleProfit: ht,
        possibleProfitFormatted: St,
        isShownPossibleProfit: Wt,
      } = yt({ couponAmount: a, possibleWin: z, currencyIso: c }),
      Mt = new pe({
        $httpModule: g,
        $clientHeaders: S,
        $cookies: _,
        $logger: y,
      }),
      at = o(
        () =>
          $_$() && {
            ref: d,
            groupId: b,
            country: t(F),
            lng: m.id,
            currency: t(U),
            betSum: t(a),
            cf: t(M),
            taxMode: t($),
            docType: t(w),
          }
      ),
      ut = st(),
      Y = o({
        get: () => ut.getPartnerHasTaxes,
        set: (T) => ut.installPartnerHasTaxes(T),
      }),
      Ht = o(() => $_$() && t(Y) && t(a) && t(M)),
      Lt = Vt(async () => {
        $_$();
        let T, I;
        try {
          if (!t(Ht)) {
            s.value = j();
            return;
          }
          const A =
            (([T, I] = et(() => $_$() && Mt.getTaxes(t(at)))),
            (T = await T),
            I(),
            T);
          (Y.value = it(A)), (s.value = it(A) ? te(A) : j());
        } catch (A) {
          A instanceof Dt && y.error(A), (s.value = j());
        }
      }, de);
    return {
      amountAfterBetTax: R,
      amountAfterBetTaxFormatted: O,
      amountAfterBetTaxLabel: k,
      betTaxAmount: L,
      betTaxAmountFormatted: V,
      hasBetTaxes: e,
      isBetTaxable: r,
      hasPayoutTaxes: l,
      hasTaxes: P,
      isPayoutTaxable: E,
      isTaxable: D,
      isShownPossibleProfit: Wt,
      payoutTaxAmount: G,
      payoutTaxAmountFormatted: K,
      profitAfterBetTax: Q,
      profitAfterPayoutTax: Z,
      winAmountAfterBetTax: bt,
      winAmountAfterBetTaxFormatted: xt,
      winAmountAfterBetTaxLabel: _t,
      winAmountAfterPayoutTax: z,
      possibleProfitAfterPayoutTax: ht,
      winAmountAfterPayoutTaxFormatted: Pt,
      possibleProfitAfterPayoutTaxFormatted: St,
      winAmountAfterPayoutTaxLabel: Tt,
      betTaxLabel: gt,
      payoutTaxLabel: Bt,
      hasReturnTax: At,
      returnTaxLabel: Ct,
      overallTaxAmount: vt,
      watchCouponTaxes: () => {
        $_$();
        const T = tt(
            F,
            () => {
              Y.value = !0;
            },
            { immediate: !0 }
          ),
          I = tt(
            w,
            () => {
              Y.value = !0;
            },
            { immediate: !0 }
          ),
          A = tt(at, Lt, { immediate: !0 });
        return () => {
          T(), A(), I();
        };
      },
    };
  },
  { inject: ve, provide: he } = dt(fe),
  Se = Gt(() => {
    $_$();
    const a = lt(),
      [u] = J(48),
      n = rt(),
      c = (e) => ("market" in e ? e.market.coef : e.coef) || 1,
      m = (e) => e.findIndex((r) => r.find((l) => l.blockId === 0)),
      d = (e) => e !== -1,
      b = (e, r) => {
        var l;
        return (l = e[r]) != null ? l : [];
      },
      f = (e) => e.reduce((r, l) => W(r, c(l)), 1),
      p = (e, r) => e.filter((l, P) => $_$() && P !== t(r)),
      x = (e, r) => (d(r) ? p(e, r) : e),
      i = (e) => e.map((r) => r.reduce((l, P) => W(l, c(P)), 1)),
      y = (e, r) => $_$() && X(W(e, r)),
      _ = (e, r = 0, l = 0, P = 0) => {
        const E = m(e),
          D = b(e, E),
          G = f(D),
          K = x(e, E),
          Q = i(K),
          Z = ce(Q, r, l, P);
        return y(Z, G);
      },
      g = (e) => {
        const r = e.blocks.map((D) => D.bets),
          { systemOffset: l, systemValue: P, amount: E } = e;
        return _(r, P, l, E);
      },
      S = o(() => n.couponTypeId),
      B = o(() => n.couponBets),
      M = o(() => n.couponAmountByBetId),
      H = o(() => n.couponHasSinglesBets),
      F = o(() => n.couponHasSystem),
      w = o(() => n.couponMaxPayout),
      N = o(() => n.couponCurrencyIso),
      v = 0,
      U = o(() => {
        $_$();
        const e = t(B).reduce((r, l) => {
          $_$();
          const P = t(M)[l.market.id];
          return r + W(P, l.market.coef || 1);
        }, v);
        return X(e);
      }),
      h = o(() => {
        const e = Object.values(n.couponBetsByBlockId);
        return _(e, n.couponSystemValue, n.couponSystemOffset, n.couponAmount);
      }),
      s = o(() => {
        $_$();
        switch (t(S)) {
          case 2:
          case 4:
            return t(h);
          case 10001:
            return t(U);
          default:
            return 0;
        }
      }),
      { possibleWinAfterMaxPayout: $ } = ee({ maxPayout: w, possibleWin: s }),
      R = (e) => {
        const { typeId: r } = e;
        switch (r) {
          case 2:
          case 4:
            return g(e);
          default:
            return 0;
        }
      },
      O = o(() => $_$() && u && (t(F) || t(H))),
      k = a("coupon_max_possible_win"),
      L = o(() => $_$() && `${t($)} ${t(N)}`),
      V = o(() => ($_$() && t(O) ? t(L) : void 0));
    return {
      maxPossibleWin: s,
      maxPossibleWinLabel: k,
      maxPossibleWinAmount: V,
      getMaxPossibleWin: R,
      isShowMaxPossibleWin: O,
    };
  }),
  We = 1.2,
  ye = "/bonus/rules/hyper-bonus-af",
  be = "Hyper Bonus",
  xe = {
    4: 5,
    5: 10,
    6: 15,
    7: 20,
    8: 30,
    9: 35,
    10: 40,
    11: 45,
    12: 50,
    13: 55,
    14: 60,
    15: 65,
    16: 70,
    17: 80,
    18: 90,
    19: 100,
    20: 125,
    21: 150,
    22: 175,
    23: 200,
    24: 225,
    25: 250,
  },
  _e = ({
    amount: a,
    payout: u,
    possibleWin: n,
    betsCount: c,
    hyperBonusPercent: m,
    minHyperBonusBetLimit: d,
    maxHyperBonusLimit: b,
    currencyIso: f,
  }) => {
    $_$();
    const [p, x] = J(-1008, 633),
      i = st(),
      y = ot(),
      { getLinkWithLang: _ } = Yt(() => i.language),
      { formatAmountWithCurrency: g } = nt({
        geoCurrency: p,
        amountTemplate: x,
      }),
      S = o(() => {
        $_$();
        var e;
        return (e = t(a)) != null ? e : 0;
      }),
      B = o(() => $_$() && y.getCurrencySymbol(t(f))),
      M = _(ye),
      H = (e) => xe[e],
      F = o(() => {
        $_$();
        const e = t(c);
        if (C(e)) return H(e);
      }),
      w = o(() => {
        $_$();
        const e = t(c);
        if (C(e)) return H(e + 1);
      }),
      N = o(() => {
        $_$();
        const e = t(w),
          r = t(F);
        if (C(e) && C(r)) return e - r;
      }),
      v = o(() => {
        $_$();
        const e = t(b),
          r = t(m),
          l = t(u);
        if (C(l) && C(r) && C(e)) {
          const P = l * (r / 100);
          return Math.min(P, e);
        }
        return 0;
      }),
      U = o(() => {
        $_$();
        if (t(v))
          return g({
            amount: v,
            currencyIso: f,
            needAmountFormat: !0,
            currencySymbol: B,
          });
      }),
      h = o(() => {
        $_$();
        if (t(m)) return `${be} ${t(m)}%`;
      }),
      s = o(() => {
        $_$();
        var e;
        return g({
          amount: (e = t(n)) != null ? e : 0,
          currencyIso: f,
          needAmountFormat: !0,
          currencySymbol: B,
        });
      }),
      {
        possibleProfit: $,
        possibleProfitFormatted: R,
        isShownPossibleProfit: O,
      } = yt({ possibleWin: n, couponAmount: S, currencyIso: f }),
      k = o(() => {
        $_$();
        const e = t(n);
        if (e) return e + t(v);
      }),
      L = o(() => {
        $_$();
        const e = t(k);
        if (e)
          return g({
            amount: e,
            currencyIso: f,
            currencySymbol: B,
            needAmountFormat: !0,
          });
      }),
      V = o(() => {
        $_$();
        const e = t(u),
          r = t(d),
          l = t(v);
        return C(e) && C(r) && e > r && !!l;
      });
    return {
      bonusRoute: M,
      extraHyperBonusPercent: N,
      hyperBonusPossibleWin: v,
      hyperBonusPossibleWinFormatted: U,
      hyperBonusLabel: h,
      possibleWinFormatted: s,
      possibleProfit: $,
      possibleProfitFormatted: R,
      possibleWinAfterBonuses: k,
      possibleWinFormattedAfterBonuses: L,
      isHyperBonusPossibleWinValid: V,
      isShownPossibleProfit: O,
    };
  },
  { inject: Me, provide: He } = dt(_e),
  Le = (a, u, n) => {
    $_$();
    const c = rt(),
      { taxMode: m } = ft(),
      d = o(() => {
        $_$();
        var p;
        return (p = t(n)) != null ? p : c.couponCoef;
      }),
      b = o(() => {
        $_$();
        var p;
        const x = (p = t(d)) != null ? p : 0,
          i = t(a);
        return t(m) && C(i) ? (i !== 0 ? pt(x, i) : i) : x;
      }),
      f = o(() => {
        $_$();
        var p;
        const x = W((p = t(u)) != null ? p : 0, t(b));
        return X(x);
      });
    return { coef: b, minPossibleWinCouponSystemTaxFree: f };
  };
export {
  We as HYPER_BONUS_MINIMUM_EVENT_RATE,
  Se as useCouponMaxPossibleWin,
  yt as useCouponProfit,
  Le as useCouponSystemType,
  fe as useCouponTaxes,
  ve as useCouponTaxesInjector,
  he as useCouponTaxesProvider,
  _e as useHyperBonus,
  Me as useHyperBonusInjector,
  He as useHyperBonusProvider,
};
