import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as i,
  reactivity_esmBundler_shallowRef as u,
  useNuxtApp as s,
  runtimeCore_esmBundler_onBeforeMount as c,
  isDevelopment as p,
  execAsync as d,
  runtimeCore_esmBundler_h as f,
  runtimeCore_esmBundler_createBlock as C,
  runtimeCore_esmBundler_openBlock as B,
  reactivity_esmBundler_unref as v,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { loadFooterSocials as S } from "./entry-85993dc44c.js";
const g = i({
    setup(m, { slots: e, attrs: t }) {
      $_$();
      var l;
      const o = u(null);
      {
        const _ =
          (l = s().$multiBuildPreloadComponents) == null
            ? void 0
            : l.FooterSocials;
        _
          ? (o.value = _)
          : c(async () => {
              $_$();
              let n, a;
              if (e.loadingComponent) {
                const r = e.loadingComponent();
                r.length === 1 && (o.value = r[0]),
                  p &&
                    r.length > 1 &&
                    console.warn(
                      "[FooterSocials] slot loadingComponent не имеет root ноды"
                    );
              }
              o.value = (([n, a] = d(() => S())), (n = await n), a(), n);
            });
      }
      return () =>
        $_$() &&
        f(o.value, { ...t, "data-mbc-__V3_HOST_APP__": "FooterSocials" }, e);
    },
  }),
  x = i({
    __name: "FooterSocials",
    setup(m) {
      return (e, t) => $_$() && (B(), C(v(g)));
    },
  });
export { x as _sfc_main };
