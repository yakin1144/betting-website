import $_$ from "./$_$.js";
$_$();
import {
  AuthForm as B,
  loadAuthDropdownTriggerConfigDesktop as T,
  _export_sfc as F,
  authFormParser as l,
  useRouteReturnUrl as O,
  useShowLoginForm as k,
} from "./entry-c0d89b7160.js";
import { withAsyncContext as D } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as y,
  execAsync as g,
  runtimeCore_esmBundler_computed as p,
  runtimeCore_esmBundler_resolveComponent as d,
  runtimeCore_esmBundler_createBlock as P,
  runtimeCore_esmBundler_openBlock as R,
  runtimeCore_esmBundler_mergeProps as U,
  reactivity_esmBundler_unref as u,
  runtimeCore_esmBundler_withCtx as h,
  runtimeCore_esmBundler_createVNode as v,
  runtimeCore_esmBundler_createTextVNode as z,
  shared_esmBundler_toDisplayString as S,
  useGlobalStore as b,
  router_useRouter as M,
  index_useCookies as N,
  useRouterMethodsWithLang as x,
  reactivity_esmBundler_ref as L,
  index_getConfig as E,
  isDef as W,
  browser_useSharedStore as j,
  runtimeCore_esmBundler_onMounted as I,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const X = Object.freeze(
  Object.defineProperty({ __proto__: null, default: B }, Symbol.toStringTag, {
    value: "Module",
  })
);
var V = ((e) => (
  (e.MENU_TOP = "menu_top"),
  (e.MENU_BOTTOM = "menu_bottom"),
  (e.POPUP_PROMO = "popup_promo"),
  (e.POPUP_ENTER_ANONIM = "popup_enter_anonim"),
  (e.SHOWCASE_PROMO = "showcase_promo"),
  e
))(V || {});
const $ = y({
    __name: "AuthDropdownTrigger",
    props: { triggerSize: {}, uppercase: { type: Boolean, default: void 0 } },
    async setup(e) {
      $_$();
      let t, n, r, o;
      const s = e,
        {
          config: {
            uiButtonTheme: c,
            uiButtonUppercase: _,
            uiCaptionSize: i,
            uiCaptionWeight: m,
            hasAuthDropdownTriggerOutline: f,
          },
        } = (([r, o] = D(() => T())),
        (r = (([t, n] = g(() => r)), (t = await t), n(), t)),
        o(),
        r)(),
        w = p(() => {
          var a;
          return (a = s.uppercase) != null ? a : _;
        });
      return (a, q) => {
        $_$();
        const A = d("UiCaption"),
          C = d("UiButton");
        return (
          R(),
          P(
            C,
            U(a.$attrs, {
              theme: u(c),
              uppercase: u(w),
              size: a.triggerSize,
              outline: u(f),
              class: "auth-dropdown-trigger",
            }),
            {
              default: h(
                () =>
                  $_$() && [
                    v(
                      A,
                      { size: u(i), weight: u(m) },
                      {
                        default: h(() => $_$() && [z(S(a.$T("auth_in")), 1)]),
                        _: 1,
                      },
                      8,
                      ["size", "weight"]
                    ),
                  ]
              ),
              _: 1,
            },
            16,
            ["theme", "uppercase", "size", "outline"]
          )
        );
      };
    },
  }),
  Y = F($, [["__scopeId", "data-v-7cea9491"]]),
  G = () => {
    $_$();
    const e = b(),
      t = M(),
      n = N(),
      { getLocationWithLang: r } = x(p(() => e.getLanguage)),
      o = L("login_password"),
      s = () =>
        n.get("two_factor_check")
          ? (n.remove("two_factor_check"),
            (o.value = "login_password_two_step_code"),
            !0)
          : !1,
      c = p(
        () => $_$() && r({ name: "login", params: { defaultAuthForm: u(o) } })
      );
    return {
      defaultAuthForm: o,
      twoFactorCheck: s,
      checkAndRedirectToAuthorization: async () => {
        $_$();
        let i, m;
        s() && (([i, m] = g(() => $_$() && t.push(u(c)))), await i, m());
      },
    };
  },
  H = (e) => {
    $_$();
    const t = E(207);
    return {
      switchToDefaultFormAuth: (r) => {
        $_$();
        if (W(t) && t in l) {
          const o = l[t];
          r.includes(o) || (e.value = o);
        }
      },
    };
  },
  Z = () => {
    $_$();
    const e = j(),
      { defaultAuthForm: t, twoFactorCheck: n } = G(),
      { returnUrl: r, maybeResetReturnState: o } = O(),
      { switchToDefaultFormAuth: s } = H(t),
      c = ["social"],
      { showLoginForm: _ } = k(),
      i = e.get("welcomeApp/cannotOpenAuthDropdown", !1);
    return (
      I(() => {
        s(c);
      }),
      {
        cannotOpen: i,
        defaultAuthForm: t,
        twoFactorCheck: n,
        returnUrl: r,
        maybeResetReturnState: o,
        showLoginForm: _,
      }
    );
  };
export {
  V as AuthCallSource,
  Y as AuthDropdownTrigger,
  X as AuthFormApp,
  Z as useAuthDropdown,
};
