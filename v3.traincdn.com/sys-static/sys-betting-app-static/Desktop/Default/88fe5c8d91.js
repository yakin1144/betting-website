import $_$ from "./$_$.js";
$_$();
import {
  useCommonAnalytics as O,
  AnalyticsBetSourceName as S,
  useBettingRoute as I,
} from "./entry-50afb6f36c.js";
import { useGameVideoAvailability as y } from "./c7ea6bc74a.js";
import {
  createSharedComposable_createSharedComposable_2 as N,
  bettingType_BettingType as V,
  index_useVModal as Z,
  router_useRoute as R,
  router_useRouter as F,
  useGlobalStore as P,
  index_getConfig as $,
  runtimeCore_esmBundler_computed as s,
  BettingPageType as z,
  reactivity_esmBundler_unref as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { LANG_KEY_BY_CENTRAL_TAB_TYPE_MAP as H } from "./9eb49f27d6.js";
import { GameOpenSource as l } from "./1af6a171a2.js";
const M = N(() => {
  const { sendGTagEvent: e, sendGoogleAndFatmanEvent: i } = O({
      analyticsCategory: "v3_Дашборд",
    }),
    h = (o) => ($_$() && o === V.LIVE ? "Live" : "Линия");
  return {
    trackPinGameIconClick: ({ isLive: o, isPinned: t, sportId: n }) => {
      const c = t ? "check_in" : "check_out";
      i(
        { google: "bet_add_pin", fatman: 1082 },
        { google: { action: c, sport_id: n }, fatman: { s1: c, i1: n } }
      ),
        t &&
          e(
            o ? 'v3_Live Клик "Закрепить"' : 'v3_Линия Клик "Закрепить"',
            String(n)
          );
    },
    trackAddGameToFavoriteClick: ({ isLive: o, sportId: t, isAdded: n }) => {
      const c = n ? "remove" : "add_favor";
      i(
        { google: "bet_add_favor", fatman: 1081 },
        { google: { action: c, sport_id: t }, fatman: { s1: c, i1: Number(t) } }
      ),
        n ||
          e(
            o
              ? 'v3_Live Клик "Добавить в избранное"'
              : 'v3_Линия Клик "Добавить в избранное"',
            String(t)
          );
    },
    trackShowSubGamesClick: (o, t) => {
      e(
        o ? 'v3_Live Клик "Больше событий"' : 'v3_Линия Клик "Больше событий"',
        String(t)
      );
    },
    trackSelectSubGameClick: (o, t = 0, n = 0) => {
      e(
        o
          ? 'v3_Live Клик "Дополнительное событие"'
          : 'v3_Линия Клик "Дополнительное событие"',
        `${t}_${n}`
      );
    },
    trackShowMarketsClick: (o) => {
      e(
        o ? 'v3_Live Клик "Больше ставок"' : 'v3_Линия Клик "Больше ставок"',
        "+"
      );
    },
    trackOpenGameClick: ({
      isLive: o,
      gameId: t,
      isPinned: n,
      dashboardType: c,
    }) => {
      e(
        o ? 'v3_Live Клик "Больше ставок"' : 'v3_Линия Клик "Больше ставок"',
        "Игра"
      );
      const u = (n && l.PINNED) || (c && H[c]) || l.DASHBOARD;
      i(
        { google: "bet_game_open", fatman: 1065 },
        { google: { gameId: t, bookmark_source: u }, fatman: { s1: u, i1: t } }
      );
    },
    trackAddMarketToCoupon: ({
      isLive: o,
      isAdded: t,
      trackLegacy: n = !0,
    }) => {
      n &&
        t &&
        e("v3_Добавить событие в купон", o ? "Live_Дашборд" : "Линия_Дашборд");
    },
    trackGameVideoIconClick: ({ sportId: o, isEnabled: t }) => {
      e('v3_Live Клик "Видеотрансляция"', String(o)),
        t &&
          i(
            { google: "bet_video_online_call", fatman: 1064 },
            {
              google: { sport_id: o, position: l.DASHBOARD },
              fatman: { s1: l.DASHBOARD, i1: o },
            }
          );
    },
    trackGameZoneIconClick: (o) => {
      e('v3_Live Клик "1xZone"', String(o));
    },
    trackTeamStatsShow: ({ sportId: o, isLive: t } = {}) => {
      e(
        `${t ? "v3_Live" : "v3_Линия"} Появление статистики при наведении`,
        String(o)
      );
    },
    trackTeamStatsClick: ({ sportId: o, isLive: t } = {}) => {
      e(
        `${t ? "v3_Live" : "v3_Линия"} Клик на Появляющуюся статистику (спорт)`,
        String(o)
      );
    },
    trackTeamStatsTabClick: ({ tabName: o, isLive: t } = {}) => {
      e(
        `${
          t ? "v3_Live" : "v3_Линия"
        } Клик на Появляющуюся статистику (вкладка)`,
        o
      );
    },
    trackShowOddsMovementChart: ({ isLive: o, sportId: t = 0 }) => {
      e(
        o
          ? 'v3_Live Клик "График движения коэффициентов"'
          : 'v3_Линия Клик "График движения коэффициентов"',
        String(t)
      );
    },
    trackShowStatistics: ({ isLive: o, sportId: t = 0 }) => {
      e(
        o ? 'v3_Live Клик "Статистика"' : 'v3_Линия Клик "Статистика"',
        String(t)
      );
    },
    trackShowTournamentTable: ({ isLive: o, sportId: t = 0 }) => {
      e(
        o
          ? 'v3_Live Клик "Турнирная таблица"'
          : 'v3_Линия Клик "Турнирная таблица"',
        String(t)
      );
    },
    trackGameSelect: ({
      sportId: o,
      gameId: t,
      bettingType: n,
      source: c = l.DASHBOARD,
      trackLegacy: u = !0,
      isLive: w,
      index: g,
    }) => {
      u && e(`v3_${h(n)} Клик на игру`, String(o)),
        i(
          { google: "bet_game_open", fatman: 1065 },
          {
            google: {
              bookmark_source: c,
              gameId: t,
              ...(g && {
                dashboard_type: w ? S.LiveDashboard : S.LineDashboard,
                index: g,
              }),
            },
            fatman: {
              s1: c,
              i1: t,
              ...(g && { s2: w ? S.LiveDashboard : S.LineDashboard, i2: g }),
            },
          }
        );
    },
  };
});
var b = ((e) => (
  (e[(e.TABLE = 0)] = "TABLE"),
  (e[(e.GAME_X_ZONE = 1)] = "GAME_X_ZONE"),
  (e[(e.VIDEO = 2)] = "VIDEO"),
  (e[(e.STATISTIC = 3)] = "STATISTIC"),
  e
))(b || {});
const K = ({ game: e, bettingType: i }) => {
  $_$();
  const { trackGameVideoIconClick: h } = M(),
    G = Z(),
    T = R(),
    _ = F(),
    d = P(),
    { getRouteUrl: A } = I(),
    { checkGameVideoAvailable: p } = y(),
    f = $(338),
    L = s(() => d.isZoneAvailable),
    m = s(
      () =>
        $_$() &&
        A({
          lng: d.getLanguage,
          section: a(i),
          menuSection: a(e).menuSectionNameForUrl,
          sport: a(e).sportNameForUrl,
          champ: a(e).champNameForUrl,
          game: a(e).gameNameForUrl,
          pageType: z.HOME,
        })
    ),
    C = s(() => {
      $_$();
      var r;
      const { href: o } = _.resolve({
        path: a(m),
        query: { broadcast: (r = a(e).videoId) != null ? r : "" },
      });
      return p(e) ? o : "";
    }),
    k = s(() => {
      $_$();
      const { href: r } = _.resolve({
        path: a(m),
        query: { zone: a(e).zoneId ? String(a(e).zoneId) : "" },
      });
      return a(e).zoneId ? r : "";
    }),
    E = s(() => $_$() && !!a(k) && f && a(L)),
    v = ({ link: r }) => {
      $_$();
      a(T).fullPath === a(r) ? G.hide() : _.push(a(r));
    };
  return {
    gameRouteLink: m,
    videoLink: C,
    zoneLink: k,
    isGameZoneAvailable: E,
    openGameWithTab: v,
    showVideo: () => {
      $_$();
      v({ link: C, tab: b.VIDEO }), h({ sportId: a(e).sportId, isEnabled: !0 });
    },
    showZone: () => {
      v({ link: k, tab: b.GAME_X_ZONE });
    },
  };
};
export { M as useDashboardAnalytics, K as useDashboardGameShowBroadcast };
