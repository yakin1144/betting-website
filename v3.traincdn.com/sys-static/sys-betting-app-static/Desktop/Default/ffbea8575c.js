import $_$ from "./$_$.js";
$_$();
import {
  formatMoney_formatMoney as c,
  index_getConfigs as X,
  useGlobalStore as Y,
  useAccountStore as Z,
  index_useT as V,
  useNotifications_useNotifications as I,
  useFormatCurrency_useFormatCurrency as tt,
  index_useLogger as ot,
  index_useCookies as et,
  index_useHttpModule as nt,
  index_useClientHeaders as rt,
  runtimeCore_esmBundler_computed as r,
  reactivity_esmBundler_ref as p,
  reactivity_esmBundler_unref as t,
  fixFloatTwoDigits as ut,
  runtimeCore_esmBundler_watch as it,
  showAuthorizationBlock_showAuthorizationBlock as at,
  execAsync as v,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { getNewCouponAmount as ct } from "./32064d16d1.js";
import { saleCoupon as lt } from "./5389ac53d9.js";
import {
  useBettingHistoryConfigs as st,
  BettingHistoryApi as mt,
} from "./978e9c7c45.js";
import { useCouponAnalytics as At } from "./entry-50afb6f36c.js";
const dt = (l, a, o) => $_$() && c(((l - a) * o) / l),
  vt = ({
    couponId: l,
    account: a,
    saleInfo: o,
    onUpdateCouponSaleInfoCallback: x,
    onSaleCouponCallback: B,
  }) => {
    $_$();
    const [f, b] = X(-1008, 633),
      h = Y(),
      O = Z(),
      g = V(),
      { trackSellDone: k, trackSellError: w, trackSellAutoAcceptAll: M } = At(),
      { notificationError: H } = I(),
      { formatAmountWithCurrency: z } = tt({
        geoCurrency: f,
        amountTemplate: b,
      }),
      T = ot(),
      $ = et(),
      F = nt(),
      L = rt(),
      { bettingHistoryConfig: N } = st(),
      P = new mt({
        $httpModule: F,
        $clientHeaders: L,
        $cookies: $,
        $logger: T,
        config: N,
      }),
      D = r(() => h.getUserId),
      E = r(() => O.activeId),
      s = p(!1),
      i = p(t(o).maxAutoSaleOrder),
      u = p(t(o).maxAutoSaleOrder),
      U = r(() => $_$() && t(o).currentAutoSaleAmount),
      G = r(() => $_$() && t(a).iso),
      W = r(() => {
        $_$();
        var n;
        return (n = t(a)) == null ? void 0 : n.symbol;
      }),
      m = r(() => {
        $_$();
        const n = (t(o).minBetAmount * t(i)) / t(o).availableBetAmount;
        return c(n);
      }),
      A = r(() => $_$() && ut(t(i) - t(m))),
      d = r(() => {
        $_$();
        const n = ct(t(o).availableBetAmount, t(u), t(i));
        return t(u) > t(A) ? 0 : n;
      }),
      S = r(() => {
        $_$();
        const n = dt(t(o).availableBetAmount, t(d), t(o).maxSaleAmount);
        return t(u) < t(o).limitAmountPartSale && t(u) !== t(o).minSaleAmount
          ? Math.abs(n)
          : t(u);
      }),
      _ = r(() =>
        $_$() && t(S) < t(o).availableBetAmount
          ? c(t(o).availableBetAmount - t(S))
          : t(S)
      ),
      y = r(() => $_$() && t(o).maxAutoSaleOrder <= 2),
      j = r(() => $_$() && t(_) >= t(o).availableBetAmount),
      q = (n) => {
        $_$();
        let e = n != null ? n : t(i);
        e >= t(o).maxAutoSaleOrder
          ? (e = t(o).maxAutoSaleOrder)
          : e <= t(o).minAutoSaleOrder
          ? (e = t(o).minAutoSaleOrder)
          : t(y) && (e = c(e)),
          e !== t(i) && (i.value = e);
      },
      C = (n) => {
        $_$();
        let e = n != null ? n : t(u);
        if (t(o).isOnlyMaxSale) {
          u.value = t(i);
          return;
        }
        e > t(A)
          ? (e = t(i))
          : e <= t(m)
          ? (e = t(m))
          : e >= t(o).maxAutoSaleOrder
          ? (e = t(o).maxAutoSaleOrder)
          : t(y) && (e = c(e)),
          e !== t(u) && (u.value = e);
      },
      J = async () => {
        $_$();
        let n, e;
        const { toggleAuthorizationBlock: R } = at();
        if (!t(D)) {
          ([n, e] = v(() => H(g("main_authorize_v2")))), await n, e(), R();
          return;
        }
        if (!t(s))
          try {
            (s.value = !0),
              ([n, e] = v(
                () =>
                  $_$() &&
                  lt(
                    { T: g },
                    {
                      couponSaleApi: P,
                      activeAccountId: t(E),
                      account: t(a),
                      amount: t(u),
                      couponId: t(l),
                      newCouponAmount: t(d),
                      order: t(i),
                      onUpdateCouponSaleInfo: t(x),
                      onSaleCoupon: t(B),
                      formatAmountWithCurrency: z,
                    }
                  )
              )),
              await n,
              e(),
              k();
          } catch (St) {
            w();
          } finally {
            M(), (s.value = !1);
          }
      },
      K = r({ get: () => $_$() && t(i), set: (n) => q(n) }),
      Q = r({ get: () => $_$() && t(u), set: (n) => C(n) });
    return (
      it([i, u, o], () => C(), { immediate: !0 }),
      {
        isLoadingSaleCoupon: s,
        saleAmount: u,
        currentAutoSaleAmount: U,
        currencyIso: G,
        currencySymbol: W,
        minSaleAmount: m,
        limitAmountPartSale: A,
        newCouponAmount: d,
        profitAmount: _,
        isProfitSale: j,
        orderModel: K,
        saleAmountModel: Q,
        onSaleCoupon: J,
      }
    );
  };
export { vt as useCouponSellLater };
