import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as g } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as m,
  reactivity_esmBundler_shallowRef as f,
  useNuxtApp as B,
  runtimeCore_esmBundler_onBeforeMount as C,
  isDevelopment as h,
  execAsync as c,
  runtimeCore_esmBundler_h as v,
  runtimeCore_esmBundler_computed as _,
  runtimeCore_esmBundler_createBlock as D,
  runtimeCore_esmBundler_openBlock as w,
  reactivity_esmBundler_unref as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  loadAuthDropdownDesktop as A,
  loadAuthDropdownTriggerConfigDesktop as k,
} from "./entry-c0d89b7160.js";
const y = m({
    setup(s, { slots: e, attrs: i }) {
      $_$();
      var o;
      const t = f(null);
      {
        const l =
          (o = B().$multiBuildPreloadComponents) == null
            ? void 0
            : o.AuthDropdownDesktop;
        l
          ? (t.value = l)
          : C(async () => {
              $_$();
              let n, p;
              if (e.loadingComponent) {
                const u = e.loadingComponent();
                u.length === 1 && (t.value = u[0]),
                  h &&
                    u.length > 1 &&
                    console.warn(
                      "[AuthDropdownDesktop] slot loadingComponent не имеет root ноды"
                    );
              }
              t.value = (([n, p] = c(() => A())), (n = await n), p(), n);
            });
      }
      return () =>
        $_$() &&
        v(
          t.value,
          { ...i, "data-mbc-__WELCOME_APP__": "AuthDropdownDesktop" },
          e
        );
    },
  }),
  b = m({
    __name: "AuthDropdown_F",
    props: {
      triggerSize: { default: void 0 },
      loginButtonUppercase: { type: Boolean, default: void 0 },
    },
    async setup(s) {
      $_$();
      let e, i, o, t;
      const l = s,
        {
          config: { uiButtonSize: n, uiButtonUppercase: p },
        } = (([o, t] = g(() => k())),
        (o = (([e, i] = c(() => o)), (e = await e), i(), e)),
        t(),
        o)(),
        u = _(() => {
          var r;
          return (r = l.triggerSize) != null ? r : n;
        }),
        d = _(() => {
          var r;
          return (r = l.loginButtonUppercase) != null ? r : p;
        });
      return (r, S) =>
        $_$() &&
        (w(),
        D(a(y), { triggerSize: a(u), loginButtonUppercase: a(d) }, null, 8, [
          "triggerSize",
          "loginButtonUppercase",
        ]));
    },
  });
export { b as default };
