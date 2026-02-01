import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as d,
  useGlobalStore as x,
  index_useAppStorage as b,
  reactivity_esmBundler_reactive as k,
  runtimeCore_esmBundler_computed as o,
  execAsync as M,
  AppStorageKey as V,
  isDef as O,
  index_getConfig as P,
  reactivity_esmBundler_unref as c,
  index_useT as y,
  reactivity_esmBundler_ref as W,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useCouponAnalytics as w,
  useCouponStore as I,
} from "./entry-50afb6f36c.js";
import { useCouponContext as A } from "./9afba2de88.js";
const T = {
    isAutoMax: "Автомаксимум",
    isBalanceShown: "Баланс",
    isPossibleWinShown: "Возможный выигрыш",
    isSelectAccountShown: "Выбор счета",
    isVipBet: "ВИП-ставка",
  },
  E = () => {
    $_$();
    const { clickOnSaveSettings: n } = w(),
      e = I(),
      u = x(),
      a = b(),
      t = k({
        isAutoMax: e.settings.isAutoMax,
        isAutoMaxShown: e.settings.isAutoMaxShown,
        isVipBet: e.settings.isVipBet,
        isVipBetShown: e.settings.isVipBetShown,
        isBalanceShown: e.settings.isBalanceShown,
        isPossibleWinShown: e.settings.isPossibleWinShown,
        isSelectAccountShown: e.settings.isSelectAccountShown,
        isActiveOneClick: e.settings.isActiveOneClick,
      }),
      i = o({
        get: () => e.settings.isAutoMax,
        set: (s) => {
          t.isAutoMax = s;
        },
      }),
      r = o({
        get: () => e.settings.isAutoMaxShown,
        set: (s) => {
          t.isAutoMaxShown = s;
        },
      }),
      h = o({
        get: () => e.settings.isVipBet,
        set: (s) => {
          t.isVipBet = s;
        },
      }),
      C = o({
        get: () => e.settings.isVipBetShown,
        set: (s) => {
          t.isVipBetShown = s;
        },
      }),
      f = o({
        get: () => e.settings.isBalanceShown,
        set: (s) => {
          t.isBalanceShown = s;
        },
      }),
      B = o({
        get: () => e.settings.isPossibleWinShown,
        set: (s) => {
          t.isPossibleWinShown = s;
        },
      }),
      v = o({
        get: () => e.settings.isSelectAccountShown,
        set: (s) => {
          t.isSelectAccountShown = s;
        },
      }),
      m = o({
        get: () => e.settings.isActiveOneClick,
        set: (s) => {
          t.isActiveOneClick = s;
        },
      }),
      _ = (s) => {
        e.couponSettingsMergeState({ ...s });
      };
    return {
      isAutoMax: i,
      isAutoMaxShown: r,
      isVipBet: h,
      isVipBetShown: C,
      isBalanceShown: f,
      isPossibleWinShown: B,
      isSelectAccountShown: v,
      isActiveOneClick: m,
      couponSettingsRaw: t,
      saveCouponSettings: () => {
        const s = Object.entries(t)
          .filter(([, S]) => !!S)
          .map(([S]) => {
            var g;
            return (g = T[S]) != null ? g : "";
          })
          .join(", ");
        n(s);
        const { isActiveOneClick: l = !1, ...p } = t;
        e.couponSettingsSetIsActiveOneClick(l), _(p);
      },
      loadCouponSettingsFromStorage: async () => {
        $_$();
        var s;
        let l, p;
        const S =
          (s =
            (([l, p] = M(() => $_$() && a.getItem(V.COUPON_SETTINGS))),
            (l = await l),
            p(),
            l)) != null
            ? s
            : {};
        S &&
          (Object.keys(t).forEach((g) => {
            $_$();
            O(S[g]) && (t[g] = S[g]);
          }),
          u.getUserId || (t.isActiveOneClick = !1),
          _(t));
      },
      updateCouponSettingsRaw: () => {
        (t.isAutoMax = e.settings.isAutoMax),
          (t.isAutoMaxShown = e.settings.isAutoMaxShown),
          (t.isVipBet = e.settings.isVipBet),
          (t.isVipBetShown = e.settings.isVipBetShown),
          (t.isBalanceShown = e.settings.isBalanceShown),
          (t.isPossibleWinShown = e.settings.isPossibleWinShown),
          (t.isSelectAccountShown = e.settings.isSelectAccountShown),
          (t.isActiveOneClick = e.settings.isActiveOneClick);
      },
    };
  },
  K = d(E),
  U = () => {
    $_$();
    const n = P(400),
      { isAsianView: e, typeId: u, stakes: a } = A(),
      t = o(() => $_$() && c(a).some((h) => h > 0)),
      i = o(() => ($_$() && c(n)) || (c(e) && c(u) !== 10001)),
      r = o(() => $_$() && c(t) && c(i));
    return { isShowCouponStakes: i, stakes: a, isCouponStakesVisible: r };
  },
  Y = () => {
    $_$();
    const n = y(),
      { trackCouponAutoAction: e } = w(),
      u = W([
        {
          caption: n("coupon_change_coef_actions_accept_after_increase"),
          label: n("coupon_change_coef_actions_accept_after_increase"),
          value: 2,
        },
        {
          caption: n("coupon_change_coef_actions_confirm"),
          label: n("coupon_change_coef_actions_confirm"),
          value: 0,
        },
        {
          caption: n("coupon_change_coef_actions_accept"),
          label: n("coupon_change_coef_actions_accept"),
          value: 1,
        },
      ]),
      { changeCoefAction: a } = A(),
      t = o({
        get: () => $_$() && c(u).find((i) => $_$() && c(i).value === c(a)),
        set: ({ value: i }) => {
          (a.value = i), e(i);
        },
      });
    return {
      changeCoefAction: a,
      changeCoefActions: u,
      changeCoefActionModel: t,
    };
  };
export {
  Y as useCouponChangeCoefActionSelector,
  K as useCouponSettings,
  U as useCouponStakes,
};
