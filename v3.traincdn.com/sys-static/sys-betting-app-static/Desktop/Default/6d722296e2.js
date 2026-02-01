import $_$ from "./$_$.js";
$_$();
import {
  useGlobalStore as w,
  useUserConfigStore as F,
  index_getConfigs as M,
  runtimeCore_esmBundler_computed as i,
  reactivity_esmBundler_unref as t,
  bettingType_BettingType as l,
  BettingPageType as q,
  execAsync as C,
  HttpClient as u,
  index_useLogger as x,
  useNotifications_useNotifications as V,
  RequestError as Y,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useSportsMenuParams as j,
  useDashboardStore as H,
} from "./9bf7ffb8ec.js";
import { useFavoritesStore as K } from "./6e5c097416.js";
import {
  useCountryFilterStore as W,
  useBettingRequestParamsStore as $,
} from "./aa92bf211f.js";
import { useDateTimeFilterStore as z } from "./9de70556bb.js";
import {
  useBettingRouteData as J,
  ComponentListState as m,
} from "./entry-50afb6f36c.js";
import { useBettingPageData as Q } from "./4a993370c6.js";
import { useDashboardStore as X } from "./f2a7591ae9.js";
const Z = ({ bettingType: o, pageType: e }) => {
    const { paramMarketGroup: s, paramSportId: r } = j({
      bettingType: o,
      pageType: e,
    });
    return { paramMarketGroup: s, paramSportId: r };
  },
  dt = ({ bettingType: o, pageType: e }) => {
    $_$();
    const s = w(),
      r = F(),
      [c, d, f] = M(-1e3, -1001, -1012),
      { currentCountryId: g } = W(),
      b = i(() => ($_$() && t(g)) || f.id),
      { paramLanguage: I } = $({ bettingType: o, pageType: e }),
      { getDateTimeFilterRequestConfig: h } = z({
        bettingType: o,
        pageType: e,
      }),
      { favoriteGamesIds: E } = K(),
      { paramMarketGroup: L, paramSportId: R } = Z({
        bettingType: o,
        pageType: e,
      }),
      {
        dashboardApi: _,
        dashboardRequestTypeName: T,
        dashboardLoadLimit: D,
        dashboardCurrentTab: N,
        dasboardSelectedChampIds: k,
        dashboardSetParsedData: y,
        dashboardCancelRequest: B,
      } = H({ bettingType: o, pageType: e }),
      { routeTeamId: G } = J(),
      { isMarblePage: P } = Q(),
      U = [t(G)].filter(Boolean);
    return {
      dashboardLoadGames: async () => {
        $_$();
        let a, n;
        const A =
            (r.isCoeffCutLine && t(o) === l.LINE) ||
            (r.isCoeffCutLive && t(o) === l.LIVE),
          S = {
            ...h(),
            lng: t(I),
            count: t(D),
            sports: [t(R)],
            coefViewId: s.getCoefViewId,
            sportMarket: t(L),
            sportList: t(P) ? 2 : 1,
            partner: c,
            groupId: d,
            country: t(b),
            countryOnly: t(e) === q.BETSONYOUR,
            games: [],
            teams: U,
            champs: t(k),
            userId: A ? s.getUserId : void 0,
          };
        if (t(N).value === 1) {
          const p = t(E);
          p.length && (S.games = [...p]);
        }
        const { data: O, status: v } =
          (([a, n] = C(
            () =>
              $_$() &&
              t(_).asiaLoad1x2(t(T), S, { marketsNameType: s.marketsNameType })
          )),
          (a = await a),
          n(),
          a);
        switch (v) {
          case u.STATUS_ERROR:
            break;
          case u.STATUS_SUCCESS:
            ([a, n] = C(() => y(O))), await a, n();
            break;
          case u.STATUS_NETWORK_ERROR:
            break;
        }
      },
      dashboardCancelRequest: B,
    };
  },
  ut = () => {
    $_$();
    const { dashboardComponentState: o } = X(),
      e = i(() => $_$() && t(o) === m.LOADING),
      s = i(() => $_$() && t(o) === m.EMPTY),
      r = i(() => $_$() && t(o) === m.FULL);
    return {
      dashboardComponentState: o,
      dashboardIsLoading: e,
      dashboardIsEmpty: s,
      dashboardIsFull: r,
    };
  },
  mt = () => {
    $_$();
    const o = x(),
      { notificationError: e } = V();
    return {
      notificationRESTError: (r, c) => {
        $_$();
        if (!(r instanceof Error)) {
          o.warn("notificationRESTError: error not instanceof Error");
          return;
        }
        const { message: d = "" } = r;
        if (!(r instanceof Y && r.isCancel)) return e(d, c);
      },
    };
  };
export {
  Z as useAsiaParams,
  mt as useCustomNotifications,
  ut as useDashboardComponentState,
  dt as useDashboardLoadGames,
};
