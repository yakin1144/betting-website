import $_$ from "./$_$.js";
$_$();
import {
  useGlobalStore as Et,
  useUserConfigStore as ht,
  index_useLogger as It,
  runtimeCore_esmBundler_computed as M,
  reactivity_esmBundler_unref as t,
  bettingType_BettingType as S,
  index_getConfigs as bt,
  uniqueBy as u,
  BettingPageType as ft,
  execAsync as N,
  HttpClient as b,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useDashboardStore as _t } from "./f2a7591ae9.js";
import { useSelectedDashboardEntitiesStore as Tt } from "./944eab39d4.js";
import {
  useBettingRouteData as Ct,
  getRequestParamsForMenuSport as A,
  getSectionEntityId as Ft,
} from "./entry-50afb6f36c.js";
import {
  useBettingSectionSportsStore as Lt,
  useSelectedBettingEntitiesStore as Bt,
} from "./9de70556bb.js";
import { useBettingRequestParamsStore as Pt } from "./aa92bf211f.js";
import { usePopularEventParamsStore as Rt } from "./914ab66f1a.js";
import {
  compileBettingStoreType as Mt,
  BETTING_STORE_TYPE_LIVE_LIST as Nt,
  BETTING_STORE_TYPE_MAP as f,
} from "./7fd3152d11.js";
import { useMatchTabFilter as At } from "./858ab97c10.js";
import { useBettingStore as Ot } from "./1af6a171a2.js";
const Dt = (o) => {
    switch (o) {
      case 0:
      case 1:
        return {};
      case 6:
        return { isRecommendations: !0 };
      case 2:
        return { gameTypes: [1] };
      case 3:
        return { gameTypes: [2] };
    }
  },
  yt = 20,
  Ht = ({ bettingType: o, pageType: r }) => {
    $_$();
    const p = Et(),
      c = ht(),
      m = Ot(),
      g = Rt(),
      _ = It(),
      {
        bettingStoreType: O,
        dashboardApi: D,
        dashboardLoadLimit: y,
        dashboardLoadParams: v,
        pinnedGameIds: G,
        openedGamesWithSubGames: k,
        dashboardSetParsedData: U,
        dashboardUpdateComponentState: V,
      } = _t({ bettingType: o, pageType: r }),
      { bettingSectionSports: w } = Lt({ bettingType: o, pageType: r }),
      {
        listSelectedMenuSectionIds: x,
        listSelectedSectionSportIds: W,
        listSelectedSectionChampIds: q,
        clearSelectedEntities: $,
        paramsSelectedEntities: z,
      } = Bt({ bettingType: o, pageType: r }),
      { paramsSelectedEntities: H } = Tt({ bettingType: o, pageType: r }),
      T = At(),
      E = M(() => ($_$() && t(o) === S.LINE ? t(T.lineTab) : t(T.liveTab))),
      { getBettingCommonParamsForApi: K } = Pt({ bettingType: o, pageType: r }),
      { routeTeamId: Y } = Ct(),
      [Q, j] = bt(339, -1001),
      J = M(() => {
        $_$();
        if (t(W).length || t(q).length) return A([]);
        const i = t(x),
          l = [
            ...(m.bettingSportsByCategories ? t(w) : [])
              .filter((s) => i.includes(s.menuSection))
              .map((s) => s.sectionSportId),
            ...i.map((s) => Ft(s, 0)),
          ];
        return A(l);
      });
    return {
      loadDashboard: async (i = {}) => {
        $_$();
        var h, l, s, C, F;
        let n, d;
        const X = K(),
          {
            sports: Z = [],
            champs: tt = [],
            teams: et = [],
          } = t(E) === 6 ? t(g.params) : {},
          a = t(E) === 1 ? Mt(t(r), S.LINE) : t(O),
          {
            menuSectionParams: ot = [],
            sports: st = [],
            champs: rt = [],
          } = t(z),
          nt = [],
          { menuSectionParams: at = [], sports: it = [] } = t(J),
          { menuSectionParams: ct } = t(H),
          I = u([ot, at].flat()),
          L = u([st, Z, it].flat()),
          B = u([nt, rt, tt].flat()),
          mt = I.length || L.length || B.length,
          lt = Nt.includes(a) ? c.liveSportsBlackList : c.lineSportsBlackList,
          dt = (h = i.menuSectionParams) != null ? h : I.length ? I : ct,
          P = (l = u([t(Y), ...et]).filter(Boolean)) != null ? l : [],
          St = (s = i.sports) != null ? s : L,
          ut =
            (c.isCoeffCutLine && t(o) === S.LINE) ||
            (c.isCoeffCutLive && t(o) === S.LIVE);
        let e = {
          ...X,
          count: t(y),
          mode: 4,
          zve: Number(m.bettingIsOnlyWithVideos),
          sports: St,
          champs: B,
          ...(P.length ? { teams: P } : {}),
          coefViewId: p.getCoefViewId,
          userId: ut ? p.getUserId : void 0,
          subGames: t(k),
          menuSection: dt,
          antiSports: lt,
          pinnedGames: t(G),
          sportCategoriesFlag: m.bettingSportsByCategories,
          getEmpty: mt,
          groupId: j,
          countryFirst: Q,
          filterMarketGroups: m.filteredMarkets || void 0,
          ...t(v),
          ...Dt(t(E)),
        };
        a === f.MARBLE_LIVE &&
          (e.menuSection = e.menuSection.length ? e.menuSection : ["0|8"]),
          (a === f.TOPGAME_LINE || a === f.TOPGAME_LIVE) && (e.top = !0),
          r === ft.RECOMMENDATION &&
            ((e.getEmpty = !0),
            (e.isRecommendations = !0),
            (e.count = yt),
            !((C = e.sports) != null && C.length) &&
              !((F = e.champs) != null && F.length) &&
              (([n, d] = N(() => g.loadParams())),
              await n,
              d(),
              (e = { ...e, ...t(g.params) })));
        const {
          data: pt,
          status: gt,
          ...R
        } = (([n, d] = N(
          () =>
            $_$() && t(D).load1x2(a, e, { marketsNameType: p.marketsNameType })
        )),
        (n = await n),
        d(),
        n);
        switch (gt) {
          case b.STATUS_ERROR:
            _.error(`loadDashboard: REQUEST_FAIL, ${a}`, R), $();
            break;
          case b.STATUS_SUCCESS:
            U(pt), V();
            break;
          case b.STATUS_NETWORK_ERROR:
            _.error("loadDashboard: NETWORK_ERROR", R);
            break;
        }
      },
    };
  };
export { Ht as useLoadDashboard };
