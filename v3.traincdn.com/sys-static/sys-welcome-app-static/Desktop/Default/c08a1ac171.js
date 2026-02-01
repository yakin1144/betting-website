import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./f45ba1c10c.js",
      "./entry-c0d89b7160.js",
      "./4a6f49a18e.css",
      "./6eb4ffe1e9.js",
      "./51749edb14.js",
      "./7a2be4a49c.css",
      "./faff2b00a9.css",
      "./2e0e7c3d1b.js",
      "./b466f58b3e.css",
      "./df7f08c774.js",
      "./d38b956196.css",
    ])
) => i.map((i) => d[i]);
import {
  __vitePreload as m,
  _export_sfc as y,
  useAuthFormStore as Q,
  useAnalytics as W,
  authDropdownConfig as X,
  defineMultiImplementedComponent as Y,
  Platforms as Z,
} from "./entry-c0d89b7160.js";
import {
  createModal_createModal as D,
  notCloseByClickOutside_notCloseByClickOutside as I,
  UiPreloader_default as k,
  runtimeCore_esmBundler_defineComponent as P,
  runtimeCore_esmBundler_createBlock as F,
  runtimeCore_esmBundler_openBlock as l,
  reactivity_esmBundler_unref as e,
  UiSkeleton_vue_default as ee,
  theme_constants_themeType as te,
  runtimeCore_esmBundler_withCtx as a,
  runtimeCore_esmBundler_createElementBlock as B,
  runtimeCore_esmBundler_createElementVNode as o,
  runtimeCore_esmBundler_Fragment as v,
  runtimeCore_esmBundler_renderList as w,
  runtimeCore_esmBundler_defineAsyncComponent as oe,
  runtimeCore_esmBundler_getCurrentInstance as re,
  reactivity_esmBundler_toRefs as ne,
  reactivity_esmBundler_ref as ie,
  router_useRoute as le,
  useCoreBus as se,
  index_getConfig as ue,
  runtimeCore_esmBundler_computed as ae,
  index_useVModal as me,
  runtimeCore_esmBundler_watch as de,
  runtimeCore_esmBundler_onMounted as _e,
  runtimeCore_esmBundler_nextTick as ce,
  runtimeCore_esmBundler_onBeforeUnmount as pe,
  UiDropdown_vue_default as fe,
  stopElements as ge,
  alignType as he,
  runtimeCore_esmBundler_createVNode as E,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useAuthDropdown as Ce,
  AuthDropdownTrigger as Ae,
  AuthCallSource as Be,
} from "./df7f08c774.js";
import "../../../shared-assets/Desktop/__shared_049c1c2603.js";
const ve = () =>
    $_$() &&
    D({
      name: "PHONE_ACTIVATION_MODAL",
      component: () =>
        m(
          () => import("./f45ba1c10c.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
          import.meta.url
        ),
      componentLoader: k,
      middleware: [I],
    }),
  we = () =>
    $_$() &&
    D({
      name: "PHONE_VERIFICATION_MODAL",
      component: () =>
        m(
          () => import("./2e0e7c3d1b.js"),
          __vite__mapDeps([7, 1, 2, 3, 4, 5, 8]),
          import.meta.url
        ),
      componentLoader: k,
      middleware: [I],
    }),
  Ee = P({
    __name: "AuthFormFieldsPreloader",
    setup(s) {
      return (d, r) =>
        $_$() &&
        (l(),
        F(
          e(ee),
          { theme: e(te).gray40, class: "auth-form-fields-preloader" },
          {
            default: a(
              () =>
                $_$() && [
                  (l(),
                  B(
                    v,
                    null,
                    w(
                      2,
                      (n) =>
                        $_$() &&
                        o("div", {
                          key: `top${n}`,
                          class: "auth-form-fields-preloader__field",
                        })
                    ),
                    64
                  )),
                  r[0] ||
                    (r[0] = o(
                      "div",
                      { class: "auth-form-fields-preloader__row" },
                      [
                        o("div", {
                          class: "auth-form-fields-preloader__reestablish",
                        }),
                        o("div", {
                          class: "auth-form-fields-preloader__reestablish",
                        }),
                      ],
                      -1
                    )),
                  (l(),
                  B(
                    v,
                    null,
                    w(
                      2,
                      (n) =>
                        $_$() &&
                        o("div", {
                          key: `bottom${n}`,
                          class: "auth-form-fields-preloader__field",
                        })
                    ),
                    64
                  )),
                ]
            ),
            _: 1,
          },
          8,
          ["theme"]
        ));
    },
  }),
  ye = y(Ee, [["__scopeId", "data-v-613913aa"]]),
  De = { class: "auth-dropdown__content" },
  Ie = P({
    __name: "AuthDropdown",
    props: { triggerSize: {}, loginButtonUppercase: { type: Boolean } },
    emits: ["toggle"],
    setup(s, { emit: d }) {
      $_$();
      var r;
      const n = oe({
          loader: () =>
            m(
              () => import("./df7f08c774.js").then((t) => t.AuthFormApp),
              __vite__mapDeps([9, 1, 2, 10]),
              import.meta.url
            ),
          loadingComponent: ye,
        }),
        T = s,
        M = d,
        L = {
          defineEntityImplementation: () =>
            $_$() && { props: s, emit: re().emit },
        };
      Y("AuthDropdownDesktop", { props: T, emit: M }, !0, [Z.Desktop]);
      const { props: O, emit: S } = L.defineEntityImplementation(),
        { triggerSize: U, loginButtonUppercase: N } = ne(O),
        {
          cannotOpen: R,
          defaultAuthForm: V,
          twoFactorCheck: x,
          returnUrl: z,
          maybeResetReturnState: b,
          showLoginForm: $,
        } = Ce(),
        { loading: H, currentForm: j } = Q(),
        _ = W(),
        c = ie(),
        q = le(),
        p = se(),
        G = (r = ue(213)) != null ? r : 0,
        f = ae(() => $_$() && e(q).name === "login"),
        g = () =>
          $_$() &&
          ce(() => {
            var t;
            return (t = c.value) == null ? void 0 : t.toggle();
          }),
        i = () => {
          $_$();
          if (!e(f)) return G === 1 ? $() : g();
        },
        J = (t) => {
          $_$();
          e(f) ||
            (_.modules.header.clickOnButtonAuthIn(),
            _.modules.auth.trackAuthPageCall({ source: Be.MENU_TOP }),
            (t || !e(R)) && i(),
            S("toggle", !t),
            p.emit("toggleAuthDropdown", !t));
        },
        K = (t) => {
          t || (p.emit("triggerHideAuthorizationModal"), b());
        },
        h = me(),
        C = {
          phone_activation: () => h.show(ve()),
          phone_verification: () => h.show(we()),
        };
      return (
        de(j, (t) => {
          var u;
          (u = C[t]) == null || u.call(C);
        }),
        _e(() => {
          $_$();
          document.addEventListener("toggleAuthForm", i),
            x() && g(),
            e(z) && i();
        }),
        pe(() => document.removeEventListener("toggleAuthForm", i)),
        (t, u) =>
          $_$() &&
          (l(),
          F(
            e(fe),
            {
              ref_key: "dropdown",
              ref: c,
              onChange: K,
              align: e(he).END,
              stopElementsStore: e(ge),
              cannotClose: e(H),
              class: "auth-dropdown",
            },
            {
              customTrigger: a(
                ({ isOpen: A }) =>
                  $_$() && [
                    E(
                      Ae,
                      {
                        onClick: (ke) => J(A),
                        toggled: A,
                        triggerSize: e(U),
                        uppercase: e(N),
                      },
                      null,
                      8,
                      ["onClick", "toggled", "triggerSize", "uppercase"]
                    ),
                  ]
              ),
              default: a(
                () =>
                  $_$() && [
                    o("div", De, [
                      E(e(n), { formsProps: e(X), form: e(V) }, null, 8, [
                        "formsProps",
                        "form",
                      ]),
                    ]),
                  ]
              ),
              _: 1,
            },
            8,
            ["align", "stopElementsStore", "cannotClose"]
          ))
      );
    },
  }),
  Le = y(Ie, [["__scopeId", "data-v-22d69645"]]);
export { Le as default };
