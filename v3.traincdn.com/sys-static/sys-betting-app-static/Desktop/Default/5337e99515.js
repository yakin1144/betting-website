import $_$ from "./$_$.js";
$_$();
import {
  useGlobalStore as B,
  useUserConfigStore as T,
  index_getConfig as L,
  runtimeCore_esmBundler_computed as a,
  reactivity_esmBundler_unref as e,
  equalWatch as U,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useDashboardStore as _ } from "./f2a7591ae9.js";
import { useSelectedDashboardEntitiesStore as M } from "./944eab39d4.js";
import { useSportsMenuStore as P } from "./e063df8dd1.js";
import {
  useBettingStateInjector as v,
  useSelectedBettingEntitiesStore as F,
} from "./9de70556bb.js";
import { useDashboardPollingData as O } from "./35e85afb99.js";
import { useBettingPageData as x } from "./4a993370c6.js";
import { useCountryFilterStore as E } from "./aa92bf211f.js";
import { useLoadDashboard as V } from "./464638d5f6.js";
import { useBettingStore as W } from "./1af6a171a2.js";
const H = () => {
  $_$();
  const { pageType: r, bettingType: s, bettingStoreType: d } = v(),
    { currentCountryId: c } = E(),
    { isBetsOnYourPage: u } = x(),
    { updatesCounter: S } = _(),
    { dashboardPollingForceUpdate: l, updateOnUpdatedData: p } = O({
      pageType: r,
      bettingType: s,
    }),
    { sportsMenuUpdatesCounter: g } = P(),
    {
      listSelectedMenuSectionIds: m,
      listSelectedSectionSportIds: b,
      listSelectedSectionChampIds: C,
    } = F(),
    { listSelectedSectionSportIds: I } = M(),
    { loadDashboard: f } = V({ pageType: r, bettingType: s }),
    t = B(),
    n = W(),
    o = T(),
    { id: h } = L(-1012),
    y = a(() => {
      $_$();
      var i;
      if (e(u)) return (i = e(c)) != null ? i : h;
    }),
    D = a(
      () =>
        $_$() && [
          e(d),
          e(S),
          e(g),
          e(y),
          t.getUserId,
          t.getTimeZone,
          t.getIs12h,
          n.bettingCyberMatchesFilterType,
          n.bettingIsOnlyWithVideos,
          o.isInstalled,
          t.getCoefViewId,
          t.marketsNameType,
          o.isCCLine,
          o.isCClive,
          e(I),
          e(m),
          e(b),
          e(C),
        ]
    );
  U(D, () => {
    p(f), l();
  });
};
export { H as useDashboardTriggerUpdate };
