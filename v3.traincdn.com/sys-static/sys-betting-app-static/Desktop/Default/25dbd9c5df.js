import $_$ from "./$_$.js";
$_$();
import {
  serverStorageShallowRef as L,
  ComponentListState as r,
  defineProvider as I,
} from "./entry-50afb6f36c.js";
import {
  defineDynamicBettingStore as _,
  useBettingStateProvider as h,
  useBettingSectionSportsStore as B,
} from "./9de70556bb.js";
import { useSportsMenuStore as P } from "./e063df8dd1.js";
import { useSportsMenuFiltersStore as C } from "./6550e9bfb1.js";
import {
  reactivity_esmBundler_ref as A,
  reactivity_esmBundler_unref as o,
  runtimeCore_esmBundler_computed as l,
  equalWatch as D,
  isDef as F,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const N = _(
  "sportsMenuComponentState",
  ({ storeName: e, bettingType: t, pageType: u, prevStore: p }) => {
    $_$();
    const S = p,
      { sportsMenuFilteredSportsCount: n } = C({ bettingType: t, pageType: u }),
      i = A(!1),
      s = L(r.LOADING, `${o(e)}-sportsMenuComponentState`),
      m = l(() => $_$() && o(s) === r.LOADING),
      c = l(() => $_$() && o(s) === r.EMPTY),
      M = l(() => $_$() && o(s) === r.FULL),
      v = (f) => {
        i.value = f;
      },
      a = (f) => {
        s.value = f;
      },
      d = () => {
        $_$();
        a(o(n) ? r.FULL : r.EMPTY);
      };
    return (
      D(n, () => {
        d();
      }),
      S && a(o(S.sportsMenuComponentState)),
      {
        sportsMenuComponentState: s,
        sportsMenuIsHidden: i,
        sportsMenuIsLoading: m,
        sportsMenuIsEmpty: c,
        sportsMenuIsFull: M,
        sportsMenuSetIsHidden: v,
        sportsMenuSetComponentState: a,
        sportsMenuUpdateComponentState: d,
      }
    );
  }
);
class O {
  constructor({ Sports: t, Sport: u, Champ: p } = {}) {
    (this.Sports = t), (this.Sport = u), (this.Champ = p);
  }
}
const { provide: U, inject: Y } = I(
  ({
    pageType: e,
    bettingType: t,
    componentsThemes: u = new O(),
    groupByCategories: p = !1,
    isTranslationDisabled: S = !1,
    shouldUseBroadcastEventsFilter: n,
  }) => {
    $_$();
    const {
      isLive: i,
      isLine: s,
      bettingStoreType: m,
      bettingStoreNamespace: c,
    } = h({ bettingType: t, pageType: e });
    B({ bettingType: t, pageType: e }), P({ bettingType: t, pageType: e });
    const { sportsMenuSetIsUseOnlyBroadcastEventsFilter: M } = C({
      bettingType: t,
      pageType: e,
    });
    return (
      F(o(n)) && M(o(n)),
      N({ bettingType: t, pageType: e }),
      {
        pageType: e,
        bettingType: t,
        isLive: i,
        isLine: s,
        bettingStoreType: m,
        bettingStoreNamespace: c,
        componentsThemes: u,
        groupByCategories: p,
        isTranslationDisabled: S,
        shouldUseBroadcastEventsFilter: n,
      }
    );
  }
);
export {
  O as SportMenuColorTheme,
  Y as useSportsMenuAppInjector,
  U as useSportsMenuAppProvider,
  N as useSportsMenuComponentStateStore,
};
