import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as m } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as a,
  runtimeCore_esmBundler_defineAsyncComponent as d,
  index_loadDictionary as _,
  index_loadMediaResources as p,
  execAsync as u,
  runtimeCore_esmBundler_createBlock as c,
  runtimeCore_esmBundler_openBlock as f,
  reactivity_esmBundler_unref as B,
  shared_esmBundler_normalizeProps as A,
  runtimeCore_esmBundler_guardReactiveProps as C,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useFetchPlatformAppsLinks as h,
  loadDownloadAppsWidget as w,
} from "./entry-76ec3b33ac.js";
import { downloadAppsWidgetThemeNames as y } from "./b41b3ff6b7.js";
import "./ee3a878630.js";
const v = a({
  __name: "DownloadAppsWidgetProvider",
  props: {
    widgetThemeName: { default: y.default },
    closable: { type: Boolean, default: !0 },
  },
  async setup(n) {
    $_$();
    let e, o, r, t;
    const s = n,
      { fetchMobileLinks: i } = h(),
      l = d(w);
    return (
      ([r, t] = m(() => $_$() && Promise.all([i(), _([3]), p([72])]))),
      ([e, o] = u(() => r)),
      (e = await e),
      o(),
      t(),
      (g, x) => $_$() && (f(), c(B(l), A(C(s)), null, 16))
    );
  },
});
export { v as default };
