import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as n,
  index_injectRemoteComponent as _,
  runtimeCore_esmBundler_createBlock as u,
  runtimeCore_esmBundler_openBlock as m,
  reactivity_esmBundler_unref as o,
  index_getConfig as a,
  router_useRoute as s,
  runtimeCore_esmBundler_computed as i,
  HomepageType as c,
  bettingRouteName_BettingRouteName as d,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  V3_HOST_APP_MICRO_FRONTEND_URL as p,
  _export_sfc as f,
} from "./entry-50afb6f36c.js";
const l = n({
    __name: "HeaderMF",
    setup(t) {
      $_$();
      const e = _(p, "Header", { needSSR: !0, retries: 5, timeout: 1e3 });
      return (r, B) => $_$() && (m(), u(o(e), { class: "header-mf" }));
    },
  }),
  R = f(l, [["__scopeId", "data-v-a50820ee"]]),
  g = () => {
    $_$();
    const t = a(244),
      e = s();
    return {
      hideLayout: i(() => $_$() && t !== c.DEFAULT && o(e).name === d.HOME),
    };
  };
export { R as HeaderMF, g as useHideLayout };
