import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./b25042f23b.js",
      "./e2a43222d7.js",
      "./32064d16d1.js",
      "./entry-50afb6f36c.js",
      "./3fb5c2806a.js",
      "./ac9aa31026.js",
      "./205e0c7eee.css",
      "./375890a16c.css",
      "./f755fb67a3.js",
      "./dea221aeac.css",
      "./d92e928736.js",
      "./d9fb496265.css",
      "./290dda08f3.js",
      "./978e9c7c45.js",
      "./5389ac53d9.js",
      "./10dcfb9c91.js",
      "./11286bfc75.js",
      "./9de70556bb.js",
      "./7fd3152d11.js",
      "./1af6a171a2.js",
      "./42e221c537.css",
      "./ffbea8575c.js",
      "./ea449998ee.css",
      "./99164d54ad.css",
      "./5694ac9920.js",
      "./9afba2de88.js",
      "./35e3a5959f.js",
      "./6c95dc77cd.js",
      "./bb0d3b59f5.js",
      "./8403102940.js",
      "./f5056b878c.js",
      "./1ae929339b.js",
      "./ca00f22438.css",
      "./3233f19766.js",
      "./d046664d0b.js",
      "./ed4f93061a.js",
      "./d323debb9e.css",
      "./86e625d686.js",
      "./b0f9ee5637.js",
      "./7fd1140098.css",
      "./bb970e93c8.css",
      "./148e0c87d2.js",
      "./57dd37fcbe.css",
      "./166d83902c.js",
      "./f3f285b756.js",
      "./4a993370c6.js",
      "./2432a9e803.css",
      "./c5d615f160.css",
      "./7177090632.js",
      "./7e3513458c.js",
      "./993ff7c449.css",
      "./59cffda12c.css",
    ])
) => i.map((i) => d[i]);
import {
  COUPON_WITH_CUSTOM_STAKE_TRANSLATE as x,
  openSignIn as v,
  __vitePreload as B,
  useBettingRouteData as W,
  cyberPageTypes as D,
  useCouponStore as w,
} from "./entry-50afb6f36c.js";
import {
  index_useT as F,
  index_getConfigs as h,
  runtimeCore_esmBundler_computed as n,
  reactivity_esmBundler_unref as e,
  index_getConfig as G,
  paymentsIconType_PaymentsIconByType as H,
  createModal_createModal as I,
  UiPreloader_default as E,
  BettingPageType as Y,
  useGlobalStore as K,
  index_useVModal as M,
  router_useRouter as j,
  router_useRoute as N,
  useRouterMethodsWithLang as q,
  useFormatCurrency_useFormatCurrency as z,
  officeRouteName_OfficeRouteName as y,
  runtimeCore_esmBundler_watch as J,
  execAsync as Q,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  COUPON_CONFIG_CYBER as X,
  COUPON_CONFIG_TOP_EVENTS as Z,
  COUPON_CONFIG_COMMON as $,
} from "./3fb5c2806a.js";
import { useBetsHistoryBettingStore as ee } from "./f3f285b756.js";
const ae = (o) => {
    $_$();
    const t = F(),
      [s] = h(34),
      u = n(() => $_$() && x.includes(e(o)));
    return { stakeText: n(() => $_$() && t(e(u) ? s : "coupon_bet_amount")) };
  },
  ie = () => {
    $_$();
    const o = G(157);
    return { paymentsIcon: H[o] };
  },
  le = () =>
    $_$() &&
    I({
      name: "COUPON_SELL_SETTINGS",
      component: () =>
        B(
          () => import("./b25042f23b.js"),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23,
          ]),
          import.meta.url
        ),
      componentLoader: E,
      middleware: [v],
    }),
  oe = () =>
    $_$() &&
    I({
      name: "COUPON_POWER_BET_MODAL",
      component: () =>
        B(
          () => import("./5694ac9920.js"),
          __vite__mapDeps([
            24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 25, 26, 27, 28, 15, 16, 17, 18, 19,
            29, 14, 13, 30, 31, 32, 33, 21, 22, 34, 35, 36, 37, 38, 39, 40, 41,
            42, 43, 44, 45, 46, 47,
          ]),
          import.meta.url
        ),
      componentLoader: E,
      middleware: [v],
    }),
  b = () => {
    $_$();
    const { routePageType: o } = W(),
      t = n(() => $_$() && e(o) === Y.TOP_EVENTS),
      s = n(() => $_$() && D.includes(e(o)));
    return { theme: n(() => ($_$() && e(s) ? X : e(t) ? Z : $)) };
  },
  me = (o) => {
    $_$();
    var t;
    const s = w(),
      u = K(),
      d = M(),
      S = j(),
      P = N(),
      [C, T, O] = h(633, -1008, 298),
      { useLangLocation: r } = q(() => u.language),
      { theme: i } = b(),
      { formatAmountWithCurrency: a } = z({
        geoCurrency: T,
        amountTemplate: C,
      }),
      l = n(() => {
        $_$();
        var c, m, _, p;
        return O &&
          (p =
            (_ =
              (m = (c = e(o)) == null ? void 0 : c.saleInfo) == null
                ? void 0
                : m.elevateInfo) == null
              ? void 0
              : _.Sum) != null
          ? p
          : 0;
      }),
      R = n(() => {
        $_$();
        var c, m, _, p;
        return (p =
          (_ =
            (m = (c = e(o)) == null ? void 0 : c.saleInfo) == null
              ? void 0
              : m.elevateInfo) == null
            ? void 0
            : _.Param) != null
          ? p
          : 0;
      }),
      f = n(() => s.couponCurrencyIso),
      A = n(() => s.couponCurrencySymbol),
      L = n(() => {
        $_$();
        var c;
        return a({
          amount: (c = e(l)) != null ? c : 0,
          currencyIso: f,
          needAmountFormat: !0,
          currencySymbol: e(A),
        });
      }),
      U = () => {
        $_$();
        d.show(oe(), { coupon: o, powerBetParam: R, theme: e(i) });
      },
      k = () => {
        U();
      },
      V = e(P).name === y.BETS_HISTORY ? y.POWERBET : "powerbet",
      g = r({
        name: V,
        params: { couponId: String((t = e(o)) == null ? void 0 : t.id) },
      });
    return {
      formattedPowerBetPossibleWin: L,
      powerBetPossibleWin: l,
      currencyIso: f,
      mobilePowerBetModalUrl: g,
      onPowerBetClick: k,
      onMobilePowerBetClick: () => {
        $_$();
        S.push(e(g));
      },
    };
  },
  te = () =>
    $_$() &&
    I({
      name: "COUPON_SUCCESS",
      component: () =>
        B(
          () => import("./7177090632.js"),
          __vite__mapDeps([
            48, 3, 1, 2, 4, 5, 6, 7, 8, 9, 38, 39, 25, 30, 13, 31, 32, 10, 11,
            49, 50, 51,
          ]),
          import.meta.url
        ),
      componentLoader: E,
      middleware: [v],
    }),
  _e = (o) => {
    $_$();
    const t = w(),
      s = M(),
      u = N(),
      { theme: d } = b(),
      { loadBettingCoupons: S, topEventId: P } = ee(),
      C = n({
        get: () => t.couponSuccessCoupon,
        set: (r) => t.couponSetSuccessCoupon(r),
      }),
      T = n({
        get: () => t.isActiveVipBet,
        set: (r) => t.couponSetIsActiveVipBet(r),
      }),
      O = (r) => {
        $_$();
        const i = { coupon: r, isActiveVipBet: e(T), theme: o || e(d) },
          a = {
            clickToClose: !1,
            height: "auto",
            name: "coupon-modal-v-modal",
          };
        s.overShow(te(), i, a);
      };
    J(C, async (r, i) => {
      $_$();
      let a, l;
      !r ||
        i ||
        (r.isPowerBet &&
          (s.hide("COUPON_POWER_BET_MODAL"),
          u.name === y.BETS_HISTORY &&
            (([a, l] = Q(() => $_$() && S({ topEventIdParam: e(P) }))),
            await a,
            l())),
        O(r),
        (C.value = void 0));
    });
  };
export {
  le as createCouponSettingsModal,
  b as useCouponSpecialTheme,
  ae as useCouponStakeTranslate,
  _e as useCouponSuccess,
  ie as usePaymentsIcon,
  me as usePowerBetCouponItem,
};
