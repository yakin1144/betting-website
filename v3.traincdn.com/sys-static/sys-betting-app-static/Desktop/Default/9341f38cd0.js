import $_$ from "./$_$.js";
$_$();
import {
  bettingRouteName_BettingRouteName as n,
  router_useRoute as r,
  runtimeCore_esmBundler_computed as u,
  index_getConfig as i,
  reactivity_esmBundler_unref as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const c = { [n.HOME]: 286, [n.CRICKET_HOME]: 1046 },
  m = (e) => c[e],
  d = () => {
    $_$();
    const e = r(),
      t = u(() => m(e.name)),
      o = i(a(t));
    return { widgetPlace: t, widgetId: o };
  };
export { d as useBannersClientWidgetPlace };
