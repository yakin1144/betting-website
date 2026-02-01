import $_$ from "./$_$.js";
$_$();
import {
  bettingTimerName_BettingTimerName as u,
  reactivity_esmBundler_unref as i,
  execAsync as D,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { defineDynamicBettingStore as f } from "./9de70556bb.js";
import { useDashboardStore as _ } from "./f2a7591ae9.js";
import { useLoadDashboard as b } from "./464638d5f6.js";
import { useStartIntervalUpdate as h } from "./10dcfb9c91.js";
import { useBettingTimerInterval as U } from "./bb0d3b59f5.js";
import { tryOnMounted as g } from "./entry-50afb6f36c.js";
const y = f("dashboardPollingStore", ({ pageType: e, bettingType: t }) => {
  $_$();
  const { marketsIsLoaded: m, dashboardCancelRequest: l } = _({
      pageType: e,
      bettingType: t,
    }),
    { loadDashboard: o } = b({ pageType: e, bettingType: t }),
    c = U({ name: u.DASHBOARD_COMPONENT, bettingType: t });
  let r = o;
  const { loading: n, forceUpdateData: s } = h({
      interval: c,
      onUpdateData: async () => r(),
      onCancelIntervalRequest: l,
    }),
    p = (a = o) => {
      r = a;
    };
  return (
    g(async () => {
      $_$();
      let a, d;
      !i(m) && !i(n) && (([a, d] = D(() => s())), await a, d());
    }),
    { loading: n, updateOnUpdatedData: p, dashboardPollingForceUpdate: s }
  );
});
export { y as useDashboardPollingData };
