import $_$ from "./$_$.js";
$_$();
import {
  useNotifications_useNotifications as J,
  execAsync as c,
  createSharedComposable_createSharedComposable_2 as K,
  index_getConfigs as X,
  useAccountStore as Y,
  useGlobalStore as Z,
  router_useRoute as W,
  useFormatCurrency_useFormatCurrency as ee,
  index_useT as oe,
  index_useLogger as te,
  index_useCookies as ne,
  index_useHttpModule as se,
  index_useClientHeaders as ie,
  runtimeCore_esmBundler_computed as k,
  reactivity_esmBundler_unref as a,
  reactivity_esmBundler_ref as B,
  runtimeCore_esmBundler_watch as L,
  runtimeCore_esmBundler_onMounted as ae,
  runtimeCore_esmBundler_onUnmounted as re,
  fixFloat as le,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { CouponSaleErrorCodes as ce } from "./entry-50afb6f36c.js";
import { useStartIntervalUpdate as ue } from "./10dcfb9c91.js";
import {
  useBettingHistoryConfigs as de,
  BettingHistoryApi as me,
} from "./978e9c7c45.js";
const _e = (g, y, ...t) => {
    let _, f;
    const m = new Promise((h, p) => {
        (_ = h), (f = p);
      }),
      u = setTimeout(() => _(g(...t)), y);
    return Object.assign(m, { timeoutId: u, cancel: () => f(clearTimeout(u)) });
  },
  ye = "modal-id",
  Ie = "coupon-id",
  fe = "account-id",
  U = async (
    g,
    {
      couponSaleApi: y,
      account: t,
      activeAccountId: _ = t == null ? void 0 : t.id,
      amount: f,
      couponId: m,
      guid: u,
      newCouponAmount: S,
      order: h,
      onSaleCoupon: p,
      onUpdateCouponSaleInfo: C,
      formatAmountWithCurrency: I,
    }
  ) => {
    $_$();
    var x;
    let i, n;
    const {
        notificationQuestion: O,
        notificationSuccess: r,
        notificationError: b,
        notificationInfo: A,
      } = J(),
      { T: v } = g,
      N = !S,
      D = { amount: f, couponId: m, order: h, guid: u, newCouponAmount: S },
      {
        data: l,
        success: M,
        error: T,
      } = (([i, n] = c(() => y.saleCoupon(D))), (i = await i), n(), i);
    if (M) {
      if (l.waitTime)
        return _e(U, l.waitTime, g, {
          couponSaleApi: y,
          account: t,
          activeAccountId: _,
          amount: f,
          couponId: m,
          guid: l.guid,
          newCouponAmount: S,
          onUpdateCouponSaleInfo: C,
          onSaleCoupon: p,
          formatAmountWithCurrency: I,
        });
      p == null || p(l),
        h
          ? (([i, n] = c(() => r(v("coupon_was_ordered", { couponId: m })))),
            await i,
            n())
          : (t == null ? void 0 : t.id) === _ || !t
          ? (([i, n] = c(() =>
              r(
                v("coupon_was_sold_with_amount", {
                  couponId: m,
                  amount: I({
                    amount: l.couponSaleInfo.maxSaleAmount,
                    currencyIso: t == null ? void 0 : t.iso,
                    currencySymbol: t == null ? void 0 : t.symbol,
                  }),
                })
              )
            )),
            await i,
            n())
          : (([i, n] = c(() =>
              r(
                v("coupon_was_sold_to_account_with_amount", {
                  couponId: m,
                  account: t.label,
                  amount: I({
                    amount: l.couponSaleInfo.maxSaleAmount,
                    currencyIso: t.iso,
                    currencySymbol: t.symbol,
                  }),
                })
              )
            )),
            await i,
            n());
    } else if (T.code === ce.AMOUNT_CHANGED)
      if ((l !== void 0 && (C == null || C(l.couponSaleInfo)), N)) {
        if (
          (([i, n] = c(() => {
            var w;
            return O(
              v("coupon_sale_price_amount", {
                amount: I({
                  amount:
                    (w = l == null ? void 0 : l.couponSaleInfo) == null
                      ? void 0
                      : w.maxSaleAmount,
                  currencyIso: t == null ? void 0 : t.iso,
                  currencySymbol: t == null ? void 0 : t.symbol,
                }),
              }),
              { title: T.message }
            );
          })),
          (i = await i),
          n(),
          i).value
        )
          return U(g, {
            couponSaleApi: y,
            account: t,
            activeAccountId: _,
            amount:
              (x = l == null ? void 0 : l.couponSaleInfo.maxSaleAmount) != null
                ? x
                : f,
            couponId: m,
            onUpdateCouponSaleInfo: C,
            onSaleCoupon: p,
            formatAmountWithCurrency: I,
          });
      } else ([i, n] = c(() => A(T.message))), await i, n();
    else ([i, n] = c(() => b(T.message))), await i, n();
  },
  be = K(() => {
    $_$();
    const [g, y] = X(-1008, 633),
      t = Y(),
      _ = Z(),
      f = W(),
      { formatAmountWithCurrency: m } = ee({
        geoCurrency: g,
        amountTemplate: y,
      }),
      u = oe(),
      S = te(),
      h = ne(),
      p = se(),
      C = ie(),
      { bettingHistoryConfig: I } = de(),
      x = new me({
        $httpModule: p,
        $clientHeaders: C,
        $cookies: h,
        $logger: S,
        config: I,
      }),
      i = k(() => t.activeAccount),
      n = k(() => ($_$() && t.activeId) || Number(a(f).query[fe])),
      O = k(() => _.getCoefViewId),
      r = B([]),
      b = B(),
      A = B(!0),
      v = B(!0),
      N = k(() => ($_$() && a(A)) || a(v)),
      D = B([]),
      l = k(() => $_$() && !!a(n) && a(r).length > 0),
      M = async () => {
        $_$();
        let e, o;
        if (!a(n)) throw new Error(u("main_authorize_v2"));
        const { data: s, success: d } =
          (([e, o] = c(
            () => $_$() && x.getCouponsOpened({ coefViewId: a(O) })
          )),
          (e = await e),
          o(),
          e);
        if (!d) throw new Error(u("main_error"));
        return s.coupons;
      },
      T = async () => {
        $_$();
        let e, o;
        if (!a(n)) throw new Error(u("main_authorize_v2"));
        const { data: s, success: d } =
          (([e, o] = c(
            () => $_$() && x.getCouponSaleInfos({ accountId: a(n) })
          )),
          (e = await e),
          o(),
          e);
        if (!d) throw new Error(u("main_error"));
        return s;
      },
      H = async () => {
        $_$();
        let e, o;
        (r.value = (([e, o] = c(() => M())), (e = await e), o(), e)),
          (A.value = !1);
      },
      w = async () => {
        $_$();
        let e, o;
        const s = (([e, o] = c(() => T())), (e = await e), o(), e);
        (b.value = s == null ? void 0 : s.couponSaleInfos),
          (D.value = s == null ? void 0 : s.couponGamesInfo);
      },
      G = () => Promise.all([H(), w()]),
      {
        forceUpdateData: V,
        timerPause: P,
        timerStart: j,
        timerDestroy: q,
      } = ue({
        interval: 1e3 * 5,
        onUpdateData: () => w(),
        onCancelIntervalRequest: () => Promise.resolve(),
        startTimerAfterComeBack: l,
      }),
      $ = async () =>
        $_$() && a(n)
          ? H()
              .then(() => ($_$() && a(r).length > 0 ? j() : P()))
              .catch(() => P())
          : P();
    L([r, b], () => {
      $_$();
      a(r).forEach((e) => {
        $_$();
        var o;
        e.saleInfo =
          (o = a(b)) == null ? void 0 : o.find(({ couponId: s }) => s === e.id);
      });
    }),
      L(r, async (e) => {
        $_$();
        let o, s;
        e.length > 0 && (([o, s] = c(() => V())), await o, s()), (v.value = !1);
      }),
      L([n, O], () => $());
    const F = (e) => {
        $_$();
        var o;
        const s = a(r).findIndex((d) => d.id === e.couponId);
        s !== -1 && ((o = a(b)) == null || o.splice(s, 1, e));
      },
      z = (e) => {
        $_$();
        if (e.isOrder) {
          w();
          return;
        }
        const o = a(r).find(({ id: Q }) => Q === e.couponSaleInfo.couponId),
          s = a(r).indexOf(o),
          d = e.couponSaleInfo.availableBetAmount,
          E = le(o.saleAmount + e.amount);
        o.sell(d, E),
          !d && s !== -1 ? a(r).splice(s, 1) : w(),
          t.setNewBalance({
            account_id: e.accountId,
            new_balance: e.accountMoney,
          }),
          t.updateData();
      },
      R = async ({
        coupon: e,
        newCouponAmount: o,
        amount: s = e.saleInfo.maxSaleAmount,
      }) => {
        $_$();
        let d, E;
        if (!n) throw u("main_authorize_v2");
        e.isCanSale &&
          (([d, E] = c(
            () =>
              $_$() &&
              U(
                { T: u },
                {
                  couponSaleApi: x,
                  activeAccountId: a(n),
                  account: a(i),
                  amount: s,
                  couponId: e.id,
                  newCouponAmount: o,
                  onUpdateCouponSaleInfo: F,
                  onSaleCoupon: z,
                  formatAmountWithCurrency: m,
                }
              )
          )),
          await d,
          E());
      };
    return (
      ae(() => $()),
      re(() => q()),
      {
        coupons: r,
        saleInfos: b,
        gamesInfo: D,
        isLoadingCoupons: A,
        isLoadingSaleInfos: v,
        isLoading: N,
        updateCouponsWithSaleInfos: G,
        updateCoupons: H,
        updateSaleInfos: w,
        onUpdateCouponSaleInfo: F,
        onSaleCoupon: z,
        saleCoupon: R,
      }
    );
  });
export {
  fe as ACCOUNT_ID,
  Ie as COUPON_ID,
  ye as MODAL_ID,
  U as saleCoupon,
  be as useOpenedCouponsStore,
};
