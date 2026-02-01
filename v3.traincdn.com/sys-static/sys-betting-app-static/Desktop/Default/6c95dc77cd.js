import $_$ from "./$_$.js";
$_$();
import {
  useAccountStore as V,
  runtimeCore_esmBundler_computed as R,
  whenever as U,
  runtimeCore_esmBundler_watch as O,
  reactivity_esmBundler_unref as e,
  execAsync as b,
  reactivity_esmBundler_ref as Y,
  runtimeCore_esmBundler_nextTick as q,
  runtimeCore_esmBundler_provide as G,
  runtimeCore_esmBundler_inject as J,
  useGlobalStore as K,
  bettingTimerName_BettingTimerName as W,
  equalWatch as z,
  createSharedComposable_createSharedComposable_2 as H,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  INITIAL_AMOUNT_BY_CURRENCY as w,
  useCouponStore as E,
  mapObjectValues as F,
} from "./entry-50afb6f36c.js";
import { useCouponContext as T } from "./9afba2de88.js";
import { useBettingTimerInterval as Q } from "./bb0d3b59f5.js";
import { useStartIntervalUpdate as X } from "./10dcfb9c91.js";
import { useCouponSettings as Z } from "./8403102940.js";
const $ = (o) => {
    var t;
    return (t = w[o]) != null ? t : w.RUB;
  },
  re = ({ updateCouponCallback: o } = {}) => {
    $_$();
    const {
        amount: t,
        amountByBetId: i,
        amountByBlockId: l,
        betsCount: a,
        betsIds: p,
        blockIds: _,
        initialAmount: s,
        isActiveOneClick: m,
        isCouponLoadedFromCode: A,
        oneClickAmount: I,
        amountStep: C,
        updateCoupon: B,
        isBonusAccountSelected: v,
        bonusAccountOneClickAmount: f,
      } = T(),
      r = E(),
      M = V(),
      h = R(() => M.activeAccount);
    U(h, (u, n) => {
      u.id !== (n == null ? void 0 : n.id) && (I.value = $(u.iso));
    }),
      O(
        s,
        async () => {
          $_$();
          var u;
          let n, c;
          const d = (u = e(s)) != null ? u : e(C);
          o
            ? (([n, c] = b(() => o())), await n, c())
            : (([n, c] = b(() => B())), await n, c()),
            (t.value = d),
            e(m) || (e(v) || (I.value = d), (f.value = d));
        },
        { immediate: !0 }
      );
    const N = Y(!1);
    U(A, async () => {
      $_$();
      let u, n;
      (N.value = !0),
        ([u, n] = b(() => $_$() && q())),
        await u,
        n(),
        (N.value = !1);
    }),
      O(a, (u, n) => {
        $_$();
        var c, d, k, S;
        if ((e(A) && !e(N) && r.couponSetIsCouponLoadedFromCode(!1), e(A))) {
          (t.value = (c = e(s)) != null ? c : e(C)), (m.value = !1);
          return;
        }
        const x = u === 0 && n > 0 && e(t),
          j = u > 0 && n === 0;
        if (x) {
          (t.value = void 0), r.couponSetAmountByBlockId({});
          return;
        }
        j && (t.value = (d = e(s)) != null ? d : e(C));
        const g = (S = (k = e(t)) != null ? k : e(s)) != null ? S : e(C),
          D = F(e(i), (y) => (y != null ? y : g)),
          L = F(e(l), (y) => (y != null ? y : g));
        r.couponSetAmountByBlockId(L), r.couponSetAmountByBetId(D);
      }),
      O(
        t,
        (u) => {
          $_$();
          var n;
          const c = (n = u != null ? u : e(s)) != null ? n : e(C),
            d = Object.fromEntries(e(p).map((S) => [S, c])),
            k = Object.fromEntries(e(_).map((S) => [S, c]));
          r.couponSetAmountByBetId(d), r.couponSetAmountByBlockId(k);
        },
        { immediate: !0 }
      );
  },
  ae = () => {
    $_$();
    const { amount: o, betsCount: t, initialAmount: i } = T(),
      l = R(() => $_$() && e(t) === 0);
    let a = !1;
    const p = "INPUT",
      _ = ({ currentTarget: m } = {}) => {
        $_$();
        (m && m.tagName !== p) ||
          (!a && e(o) === e(i) && ((o.value = void 0), (a = !0)));
      },
      s = () => {
        $_$();
        o.value = e(o);
      };
    return (
      U(
        l,
        () => {
          a = !1;
        },
        { immediate: !0 }
      ),
      { onClick: _, onBlur: s }
    );
  },
  P = "RESET_AMOUNT_ON_FIRST_TAP",
  ce = (o) => $_$() && G(P, o),
  ie = () => $_$() && J(P),
  le = () => {
    $_$();
    const o = K(),
      t = E(),
      {
        amount: i,
        amountStep: l,
        initialAmount: a,
        oneClickAmount: p,
        updateCoupon: _,
        isBonusAccountSelected: s,
        currencyIsoUsed: m,
      } = T(),
      A = R(() => o.currencyIso),
      I = async () => {
        $_$();
        var B;
        let v, f;
        (m.value = e(A)),
          t.couponSettingsSetIsManualAmountStep(!1),
          ([v, f] = b(() => _())),
          await v,
          f();
        const r = (B = e(a)) != null ? B : e(l);
        (i.value = r), e(s) || (p.value = r);
      },
      C = async () => {
        $_$();
        let B, v;
        const f = e(A),
          r = e(m);
        r !== f &&
          (r ? (([B, v] = b(() => I())), await B, v()) : (m.value = f));
      };
    return O(A, I), { checkCurrencyUpdate: C };
  },
  me = () => {
    $_$();
    const {
        accountId: o,
        betsIds: t,
        typeId: i,
        systemValue: l,
        updateCoupon: a,
      } = T(),
      p = Q({ name: W.COUPON_COMPONENT }),
      { loading: _, forceUpdateData: s } = X({
        interval: p,
        onUpdateData: () => a(),
        onCancelIntervalRequest: async () => {},
      });
    return (
      z(() => $_$() && [e(o), e(t), e(i), e(l)], s, { immediate: !0 }),
      { loading: _, forceUpdateData: s }
    );
  },
  de = H(() => {
    const { isActiveAutoMax: o, isActiveVipBet: t } = T(),
      { isVipBet: i, isAutoMax: l } = Z();
    return {
      restoreCouponPropertiesFromCouponSettings: () => {
        $_$();
        (o.value = e(l)), (t.value = e(i));
      },
    };
  });
export {
  de as useCouponRestoreSettings,
  re as useDefaultAmount,
  ae as useResetAmountOnFirstTap,
  ie as useResetAmountOnFirstTapInjector,
  ce as useResetAmountOnFirstTapProvider,
  me as useSubscribeCouponUpdate,
  le as useUpdateAmount,
};
