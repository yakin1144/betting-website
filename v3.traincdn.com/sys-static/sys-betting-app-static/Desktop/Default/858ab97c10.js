import $_$ from "./$_$.js";
$_$();
import {
  BettingPageType as c,
  createSharedComposable_createSharedComposable_2 as i,
  reactivity_esmBundler_ref as s,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useGetAllDynamicStoresByName as l } from "./9de70556bb.js";
const E = (t, a) => t.reduce((e, r, n) => ((e[a(r, n)] = r), e), {}),
  p = "line",
  d = "live",
  u = { LIVE: d, LINE: p },
  T = (t) => Object.values(u).includes(t),
  b = (t) => $_$() && Object.values(c).includes(t),
  S = i(() => {
    $_$();
    const t = s(0),
      a = s(0),
      e = s(!1);
    return { liveTab: t, lineTab: a, skipUpdate: e };
  }),
  _ = {
    pageType: { type: String, validator: b, required: !0 },
    bettingType: { type: String, validator: T, required: !0 },
  },
  D = ({ pageType: t, bettingType: a } = {}) => {
    const { getAllDynamicStoresByName: e } = l({ pageType: t, bettingType: a }),
      r = () => {
        e("dashboardPollingStore").forEach(
          ({ dashboardPollingForceUpdate: o }) => {
            o();
          }
        );
      },
      n = () => {
        e("sportsMenuPollingStore").forEach(
          ({ sportsMenuPollingForceUpdate: o }) => {
            o();
          }
        );
      };
    return {
      bettingUpdateDashboard: r,
      bettingUpdateSportMenu: n,
      bettingUpdateData: () => {
        try {
          r(), n();
        } catch (o) {
          console.error("bettingUpdateData", o);
        }
      },
    };
  };
export {
  _ as BETTING_PROPS,
  E as toMap,
  D as useBettingUpdateData,
  S as useMatchTabFilter,
};
