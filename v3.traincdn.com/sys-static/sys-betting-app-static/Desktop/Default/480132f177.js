import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as y } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as i,
  execAsync as B,
  runtimeCore_esmBundler_computed as C,
  reactivity_esmBundler_toRefs as S,
  runtimeCore_esmBundler_defineAsyncComponent as A,
  runtimeCore_esmBundler_createBlock as m,
  runtimeCore_esmBundler_openBlock as u,
  reactivity_esmBundler_unref as M,
  runtimeCore_esmBundler_resolveComponent as g,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  SportMenuColorTheme as v,
  useSportsMenuAppProvider as D,
} from "./25dbd9c5df.js";
import { createSportsMenuAppConfig as T } from "./9816d50199.js";
import {
  loadSportsMenuAppConfigDesktop as h,
  useBettingRouteData as x,
  loadSportsMenu as P,
  _export_sfc as b,
} from "./entry-50afb6f36c.js";
import { useBettingStore as $ } from "./1af6a171a2.js";
import "./9de70556bb.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "./7fd3152d11.js";
import "./e063df8dd1.js";
import "./9e4e245c05.js";
import "./58a21526ee.js";
import "./ff2996a70d.js";
import "./858ab97c10.js";
import "./6550e9bfb1.js";
import "./c7ea6bc74a.js";
import "./dd584157d6.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
const k = i({
    __name: "SportMenuAppDataProvider",
    props: {
      componentsThemes: { type: Object, default: () => new v() },
      groupByCategories: { type: Boolean, default: !1 },
      isTranslationDisabled: { type: Boolean, default: !1 },
      shouldUseBroadcastEventsFilter: { type: Boolean, default: void 0 },
    },
    async setup(p) {
      $_$();
      let e, o, t, r;
      const s = p,
        n =
          (([t, r] = y(() => h())),
          (t = (([e, o] = B(() => t)), (e = await e), o(), e)),
          r(),
          t),
        { config: a, styles: c } = n(),
        _ = $(),
        { routePageType: l } = x(),
        d = C(() => _.currentBettingType);
      D({ bettingType: d, pageType: l, ...S(s) }),
        T({ sportsMenuAppConfig: a, sportsMenuAppStyles: c });
      const f = A(P);
      return (j, E) => $_$() && (u(), m(M(f)));
    },
  }),
  w = i({ name: "SportMenuApp", components: { SportMenuAppDataProvider: k } });
function R(p, e, o, t, r, s) {
  $_$();
  const n = g("SportMenuAppDataProvider");
  return u(), m(n);
}
const ee = b(w, [["render", R]]);
export { ee as default };
