import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./f4c831ad7d.js",
      "./8f6d3b9a08.js",
      "./entry-bc8f153a4a.js",
      "./a0cbb222dc.css",
      "./a1c1207d1d.js",
      "./4b99400f48.js",
      "./457f633fdf.js",
      "./699938df7b.css",
      "./ca45681121.js",
      "./1b04bbe002.css",
    ])
) => i.map((i) => d[i]);
import {
  index_useHttpModule as h,
  createSharedComposable_createSharedComposable_2 as E,
  useGlobalStore as I,
  index_useLogger as M,
  reactivity_esmBundler_ref as O,
  runtimeCore_esmBundler_computed as A,
  reactivity_esmBundler_unref as u,
  execAsync as v,
  createSharedComposable_createSharedComposable as U,
  index_useT as k,
  index_useDateTimeService as w,
  useNotifications_useNotifications as P,
  index_getConfig as R,
  isDef as x,
  createModal_createModal as N,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { __vitePreload as S } from "./entry-bc8f153a4a.js";
const W = (e, c = "") => {
  var i, s;
  const { data: d, message: a } = e != null ? e : {},
    l = Array.isArray(d == null ? void 0 : d.errors)
      ? d == null
        ? void 0
        : d.errors[0]
      : {};
  return (s = (i = l == null ? void 0 : l.detail) != null ? i : a) != null
    ? s
    : c;
};
var T = ((e) => (
  (e[(e.NOT_ALLOWED = 0)] = "NOT_ALLOWED"),
  (e[(e.MAIN_ACCOUNT_ALLOWED = 1)] = "MAIN_ACCOUNT_ALLOWED"),
  (e[(e.ADDITIONAL_ACCOUNT_ALLOWED = 2)] = "ADDITIONAL_ACCOUNT_ALLOWED"),
  e
))(T || {});
const B = ({ countryCode: e, phone: c }) => ({ country_code: e, phone: c }),
  j = () => {
    $_$();
    const e = h();
    return {
      convertAccount: (a) =>
        e("/web-api/api/internal/v1/account/user-transfer/check-code/bgn", {
          method: "POST",
          body: { code: a },
        }).execute(),
      convertAdditionalAccount: () =>
        e(
          "/web-api/api/internal/v1/account/user-transfer/currency-transfer/bgn",
          { method: "POST" }
        ).execute(),
      getSmsCode: (a) =>
        e("/web-api/api/internal/v1/account/user-transfer/send-code/bgn", {
          method: "POST",
          body: { ...B(a) },
        }).execute(),
      checkConvertAvailability: () =>
        e(
          "/web-api/api/internal/v1/account/user-transfer/allowed-transfer-type/bgn"
        ).execute(),
    };
  },
  f = "bgn_ur",
  F = E(() => {
    $_$();
    const e = I(),
      { error: c } = M(),
      i = j(),
      s = O(),
      d = O(""),
      a = O(""),
      l = O(0),
      C = A(() => e.userId),
      g = A(() => $_$() && u(C) !== Number(sessionStorage.getItem(f))),
      _ = (r) => {
        s.value = r;
      };
    return {
      accountStatus: s,
      redirectUrl: d,
      message: a,
      resendTimeout: l,
      isUserNotReminded: g,
      setAccountStatus: _,
      setUserReminded: () => {
        $_$();
        sessionStorage.setItem(f, `${u(C)}`);
      },
      convertAccount: async (r) => {
        $_$();
        let o, t;
        try {
          const { redirect_url: n, message: m } =
            (([o, t] = v(() => i.convertAccount(r))), (o = await o), t(), o);
          (d.value = n), (a.value = m);
        } catch (n) {
          return (
            c("Convert Account Service: The account converting failed!", n),
            Promise.reject(n)
          );
        }
      },
      convertAdditionalAccount: async () => {
        $_$();
        let r, o;
        try {
          const { message: t } =
            (([r, o] = v(() => i.convertAdditionalAccount())),
            (r = await r),
            o(),
            r);
          (a.value = t), _(T.NOT_ALLOWED);
        } catch (t) {
          return (
            c(
              "Convert Account Service: The additional account converting failed!",
              t
            ),
            Promise.reject(t)
          );
        }
      },
      getSmsCode: async (r) => {
        $_$();
        let o, t;
        try {
          const { resend_timeout: n, message: m } =
            (([o, t] = v(() => i.getSmsCode(r))), (o = await o), t(), o);
          (l.value = n), (a.value = m);
        } catch (n) {
          return (
            c("Convert Account Service: Failed sending sms code!", n),
            Promise.reject(n)
          );
        }
      },
      getConvertAvailability: async () => {
        $_$();
        let r, o;
        try {
          const { transfer_allow: t } =
            (([r, o] = v(() => i.checkConvertAvailability())),
            (r = await r),
            o(),
            r);
          _(t);
        } catch (t) {
          return (
            c("Convert Account Service: Failed checking!", t), Promise.reject(t)
          );
        }
      },
    };
  }),
  $ = U(() => {
    $_$();
    const e = k(),
      c = w(),
      { notificationError: i } = P(),
      {
        accountStatus: s,
        isUserNotReminded: d,
        setAccountStatus: a,
        setUserReminded: l,
        getConvertAvailability: C,
      } = F(),
      g = R(2199),
      _ = c.parseDateToStandardFormat(`${g}`, void 0, "dd.MM.yyyy"),
      y = c.checkDateForValid(_) ? _.getTime() > Date.now() : !1,
      p = A(() => $_$() && u(s) === T.MAIN_ACCOUNT_ALLOWED),
      b = A(() => $_$() && u(s) === T.ADDITIONAL_ACCOUNT_ALLOWED),
      D = A(() => ($_$() && u(p)) || u(b)),
      r = A(() => $_$() && y && !x(u(s)));
    return {
      accountStatus: s,
      isConvertAccount: D,
      isConvertMainAccount: p,
      isUserNotReminded: d,
      isCheckAvailable: r,
      setAccountStatus: a,
      checkConvertAvailability: async () => {
        $_$();
        let t, n;
        try {
          ([t, n] = v(() => C())), await t, n();
        } catch (m) {
          ([t, n] = v(() => i(W(m, e("main_query_error"))))), await t, n();
        }
      },
      setUserReminded: l,
    };
  }),
  q = () =>
    $_$() &&
    N({
      name: "CONVERT_MAIN_ACCOUNT_MODAL",
      component: () =>
        S(
          () => import("./f4c831ad7d.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
          import.meta.url
        ),
    }),
  H = () =>
    $_$() &&
    N({
      name: "CONVERT_ADDITIONAL_ACCOUNT_MODAL",
      component: () =>
        S(
          () => import("./ca45681121.js"),
          __vite__mapDeps([8, 1, 2, 3, 5, 9]),
          import.meta.url
        ),
    });
export {
  T as AccountStatusValues,
  H as createConvertAdditionalAccountModal,
  q as createConvertMainAccountModal,
  W as parseError,
  $ as useConvertAccountCheck,
  F as useConvertAccountService,
};
