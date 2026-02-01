import $_$ from "./$_$.js";
$_$();
import {
  defineProvider as S,
  DEFAULT_MENU_SECTION as m,
} from "./entry-50afb6f36c.js";
import { useBettingStateProvider as _ } from "./9de70556bb.js";
import { useBettingStore as a } from "./1af6a171a2.js";
import {
  index_useSharedStore as f,
  index_getConfig as l,
  runtimeCore_esmBundler_computed as E,
  reactivity_esmBundler_unref as v,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const { provide: D, inject: P } = S(({ pageType: r, bettingType: t }) => {
  $_$();
  const {
      isLive: o,
      isLine: i,
      bettingStoreType: n,
    } = _({ bettingType: t, pageType: r }),
    c = f().get("EXPRESS_DAY/sports"),
    p = a(),
    d = l(87),
    s = `${m}_40`,
    u = E(() => {
      $_$();
      const e = v(c);
      return e
        ? e.live.includes(s) ||
            e.line.includes(s) ||
            (!d && p.cyberMatchesFilterType === 1)
        : !1;
    });
  return {
    pageType: r,
    bettingType: t,
    isLive: o,
    isLine: i,
    isCyberSport: u,
    bettingStoreType: n,
  };
});
export { P as useExpressDayAppInjector, D as useExpressDayAppProvider };
