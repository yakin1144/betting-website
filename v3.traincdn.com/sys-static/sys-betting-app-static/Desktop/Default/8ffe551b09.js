import $_$ from "./$_$.js";
$_$();
import {
  defineDynamicBettingStore as f,
  useDateTimeFilterStore as A,
} from "./9de70556bb.js";
import { useStartIntervalUpdate as L } from "./10dcfb9c91.js";
import { useBettingTimerInterval as P } from "./bb0d3b59f5.js";
import {
  bettingTimerName_BettingTimerName as U,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_computed as C,
  equalWatch as N,
  index_getConfig as R,
  execAsync as q,
  HttpClient as O,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useDashboardLoadGames as h } from "./6d722296e2.js";
import { useSportsMenuStore as I } from "./9bf7ffb8ec.js";
import {
  serverStorageShallowRef as B,
  ComponentListState as p,
} from "./entry-50afb6f36c.js";
import { useBettingRequestParamsStore as E } from "./aa92bf211f.js";
import { useBettingPageData as F } from "./4a993370c6.js";
const z = f("dashboardPollingAsiaStore", ({ pageType: e, bettingType: o }) => {
    $_$();
    const { dashboardLoadGames: a, dashboardCancelRequest: u } = h({
        bettingType: o,
        pageType: e,
      }),
      n = P({ name: U.DASHBOARD_COMPONENT, bettingType: o }),
      { loading: r, forceUpdateData: s } = L({
        interval: n,
        onUpdateData: a,
        onCancelIntervalRequest: u,
      });
    return { loading: r, dashboardPollingForceUpdate: s };
  }),
  b = f(
    "sportsMenuComponentStateAsia",
    ({ storeName: e, bettingType: o, pageType: a, prevStore: u }) => {
      $_$();
      const n = u,
        { sportsCount: r } = I({ bettingType: o, pageType: a }),
        s = B(p.LOADING, `${t(e)}-sportsMenuComponentStateAsia`),
        l = C(() => $_$() && t(s) === p.LOADING),
        d = C(() => $_$() && t(s) === p.EMPTY),
        S = C(() => $_$() && t(s) === p.FULL),
        m = (M) => {
          s.value = M;
        },
        i = () => {
          $_$();
          m(t(r) ? p.FULL : p.EMPTY);
        };
      return (
        N(r, () => {
          i();
        }),
        n && m(t(n.sportsMenuComponentState)),
        {
          sportsMenuComponentState: s,
          sportsMenuIsLoading: l,
          sportsMenuIsEmpty: d,
          sportsMenuIsFull: S,
          sportsMenuSetComponentState: m,
          sportsMenuUpdateComponentState: i,
        }
      );
    }
  ),
  y = ({ bettingType: e, pageType: o } = {}) => {
    $_$();
    const a = R(-1001),
      {
        sportsMenuApi: u,
        sportsMenuSetParsedData: n,
        sportsMenuCancelRequest: r,
        sportsMenuRequestTypeName: s,
      } = I({ bettingType: e, pageType: o }),
      { isMarblePage: l } = F(),
      { sportsMenuUpdateComponentState: d } = b({
        bettingType: e,
        pageType: o,
      }),
      { getDateTimeFilterRequestConfig: S } = A({
        bettingType: e,
        pageType: o,
      }),
      {
        paramCountryId: m,
        paramLanguage: i,
        paramPartnerId: M,
        paramCountryOnly: _,
      } = E({ bettingType: e, pageType: o });
    return {
      sportsMenuLoadSports: async () => {
        $_$();
        let c, g;
        const v = {
            ...S(),
            country: t(m),
            countryOnly: t(_),
            lng: t(i),
            partner: t(M),
            groupId: a,
            sportList: t(l) ? 2 : 1,
          },
          D =
            (([c, g] = q(() => $_$() && t(u).load("asiaSports", t(s), v))),
            (c = await c),
            g(),
            c);
        D.status === O.STATUS_SUCCESS && (n(D.data), d());
      },
      sportsMenuCancelRequest: r,
    };
  },
  J = f("sportsMenuPollingAsiaStore", ({ bettingType: e, pageType: o }) => {
    $_$();
    const { sportsMenuLoadSports: a, sportsMenuCancelRequest: u } = y({
        bettingType: e,
        pageType: o,
      }),
      n = P({ name: U.MENU_COMPONENT, bettingType: e }),
      { loading: r, forceUpdateData: s } = L({
        interval: n,
        onUpdateData: a,
        onCancelIntervalRequest: u,
      });
    return { loading: r, sportsMenuPollingForceUpdate: s };
  });
export {
  z as useDashboardPollingData,
  b as useSportsMenuComponentStateStore,
  J as useSportsMenuPollingData,
};
