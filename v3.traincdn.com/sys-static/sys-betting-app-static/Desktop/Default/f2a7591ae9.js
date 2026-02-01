import $_$ from "./$_$.js";
$_$();
var se = (s) => {
  throw TypeError(s);
};
var ne = (s, a, r) => a.has(s) || se("Cannot " + r);
var re = (s, a, r) => (
    ne(s, a, "read from private field"), r ? r.call(s) : a.get(s)
  ),
  te = (s, a, r) =>
    a.has(s)
      ? se("Cannot add the same private member more than once")
      : a instanceof WeakSet
      ? a.add(s)
      : a.set(s, r),
  oe = (s, a, r, o) => (
    ne(s, a, "write to private field"), o ? o.call(s, r) : a.set(s, r), r
  );
import {
  runtimeCore_esmBundler_computed as t,
  reactivity_esmBundler_unref as e,
  AppStorageKey as S,
  createSharedComposable_createSharedComposable_2 as Ke,
  uniqueBy as _e,
  reactivity_esmBundler_ref as we,
  isDef as Ve,
  bettingType_BettingType as Y,
  index_getConfig as Te,
  useState as $e,
  equalWatch as qe,
  iconName as de,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useMatchTabFilter as We } from "./858ab97c10.js";
import {
  groupBy as D,
  useList as ue,
  tryOnMounted as xe,
  useBettingSportsStore as ze,
  useNormalizedData as ie,
  serverStorageShallowRef as M,
  ComponentListState as A,
  PlayerAbsenceReason as n,
  PlayerModel as Qe,
} from "./entry-50afb6f36c.js";
import {
  defineDynamicBettingStore as Xe,
  useBettingState as Ze,
  equalState as f,
} from "./9de70556bb.js";
import { useGameVideoAvailability as ea } from "./c7ea6bc74a.js";
import { BETTING_STORE_TYPE_MAP as B } from "./7fd3152d11.js";
import { useBettingStore as aa } from "./1af6a171a2.js";
import { useDashboardApi as sa } from "./58a21526ee.js";
const na = ({ games: s, champs: a }) => {
    $_$();
    const { checkGameVideoAvailable: r } = ea(),
      o = t(() => $_$() && e(s).filter((u) => r(u))),
      i = t(() => {
        $_$();
        const u = D(e(o), (l) => l.champUniqKey);
        return e(a).filter((l) => !!u[l.key]);
      });
    return { gamesWithVideo: o, champsWithVideo: i };
  },
  ce = (s, a) =>
    s.reduce((r, o) => {
      var i, u, l, I, b, g;
      const m = a((i = o.champUniqKey) != null ? i : "");
      return (
        m === void 0 ||
          o.timeBeforeStart === void 0 ||
          o.champUniqKey === void 0 ||
          ((l = r[(u = o.timeBeforeStart)]) != null || (r[u] = {}),
          (g = (I = r[o.timeBeforeStart])[(b = o.champUniqKey)]) != null ||
            (I[b] = { champ: m, games: [] }),
          r[o.timeBeforeStart][o.champUniqKey].games.push(o)),
        r
      );
    }, {}),
  le = {
    [B.HOME_LIVE]: S.DASHBOARD_LIVE_PINNED_GAMES,
    [B.HOME_LINE]: S.DASHBOARD_LINE_PINNED_GAMES,
    [B.BETSONYOUR_LINE]: S.DASHBOARD_LINE_PINNED_GAMES,
    [B.BETSONYOUR_LIVE]: S.DASHBOARD_LIVE_PINNED_GAMES,
    [B.MARBLE_LIVE]: S.DASHBOARD_MARBLE_PINNED_GAMES,
    [B.TEAM_LINE]: S.DASHBOARD_TEAM_LINE_PINNED_GAMES,
    [B.TOPGAME_LINE]: S.DASHBOARD_TOPGAME_LINE_PINNED_GAMES,
    [B.TOPGAME_LIVE]: S.DASHBOARD_TOPGAME_LIVE_PINNED_GAMES,
  },
  ra = (s) => le[s],
  ta = Ke(() => {
    $_$();
    const s = Object.fromEntries(
        _e(Object.values(le)).map((r) => [r, ue({ storageKey: r })])
      ),
      a = () => {
        $_$();
        Object.values(e(s)).forEach((r) => {
          r.restoreList();
        });
      };
    return (
      xe(() => {
        a();
      }),
      { pinnedGamesMap: s }
    );
  }),
  oa = ({ bettingStoreType: s }) => {
    $_$();
    var a;
    const { pinnedGamesMap: r } = ta(),
      o = ra(s),
      i = r[o],
      {
        list: u = we([]),
        hasItem: l = () => !1,
        toggleItem: I = () => {},
      } = (a = e(i)) != null ? a : {};
    return { pinnedGameIds: u, hasPinnedGameIds: l, togglePinnedGameIds: I };
  },
  da = ({
    isOnlyWithVideos: s,
    bettingStoreType: a,
    getGame: r,
    getChamp: o,
    champs: i,
    champsWithVideo: u,
  }) => {
    $_$();
    const {
        pinnedGameIds: l,
        hasPinnedGameIds: I,
        togglePinnedGameIds: b,
      } = oa({ bettingStoreType: e(a) }),
      g = t(() => ($_$() && e(s) ? e(u) : e(i))),
      m = t(
        () =>
          $_$() &&
          e(l)
            .map((c) => r(c))
            .filter(Boolean)
      ),
      y = t(() => $_$() && D(e(m), (c) => c.champUniqKey)),
      d = t(() => $_$() && D(e(m), (c) => c.timeBeforeStart)),
      h = t(() => $_$() && e(g).filter((c) => $_$() && e(y)[c.key])),
      E = t(() => $_$() && e(m).length),
      G = t(() => $_$() && ce(e(m), o));
    return {
      pinnedGameIds: l,
      hasPinnedGameIds: I,
      togglePinnedGameIds: b,
      dashboardPinnedGameList: m,
      dashboardPinnedGameListCount: E,
      dashboardPinnedGamesByChampId: y,
      dashboardPinnedGamesByDate: d,
      dashboardPinnedChampList: h,
      dashboardPinnedChampsGroupByDate: G,
    };
  },
  ia = ({
    isOnlyWithVideos: s,
    getChamp: a,
    games: r,
    champs: o,
    gamesWithVideo: i,
    champsWithVideo: u,
    dashboardTypePeriods: l,
    pinnedGameIds: I,
    dashboardPinnedGamesByChampId: b,
  }) => {
    $_$();
    const { getBettingSportById: g } = ze(),
      m = t(() => ($_$() && e(s) && e(i).length ? e(i) : e(r))),
      y = t(() => ($_$() && e(s) && e(u).length ? e(u) : e(o))),
      d = t(() => {
        $_$();
        const _ = e(l);
        return e(m)
          .filter((L) => _ || !L.isSubGame)
          .filter((L) => $_$() && !e(I).includes(L.id));
      }),
      h = t(() => $_$() && D(e(d), (_) => _.champUniqKey)),
      E = t(() => {
        $_$();
        const _ = e(b);
        return e(y).filter((L) => (_[L.key] || []).length < L.gamesCount);
      }),
      G = t(() => $_$() && ce(e(d), a)),
      c = t(() => $_$() && D(e(E), (_) => _.sportId)),
      O = t(() => $_$() && _e(e(m).map((_) => _.sportId))),
      C = t(
        () =>
          $_$() &&
          e(O)
            .map((_) => g(Number(_)))
            .filter(Ve)
      ),
      F = t(() => $_$() && e(d).length),
      U = t(
        () =>
          $_$() &&
          D(
            e(y),
            (_) => _.sportId,
            (_) => _.countryId
          )
      ),
      J = t(
        () =>
          $_$() &&
          Object.entries(e(U)).reduce(
            (_, [L, R]) => (
              (_[L] = Object.values(R).map((N) => {
                const [P] = N;
                return {
                  id: P.countryId,
                  name: P.countryName,
                  champsCount: N.length,
                };
              })),
              _
            ),
            {}
          )
      );
    return {
      dashboardFilteredGameList: d,
      dashboardFilteredGameListCount: F,
      dashboardFilteredGamesByChampId: h,
      dashboardFilteredChampList: E,
      dashboardFilteredChampsGroupByDate: G,
      dashboardFilteredChampsBySportId: c,
      dashboardFilteredCountriesBySportId: J,
      dashboardFilteredChampsBySportIdByCountry: U,
      dashboardFilteredSportList: C,
    };
  },
  _a = (s) => $_$() && [Y.LIVE].includes(s),
  Na = Xe(
    "dashboardStore",
    ({ storeName: s, bettingType: a, pageType: r, prevStore: o }) => {
      $_$();
      const i = o,
        u = sa(),
        l = aa(),
        I = Te(314),
        { bettingStoreType: b, bettingStoreNamespace: g } = Ze({
          bettingType: a,
          pageType: r,
        }),
        m = We(),
        y = t(() => ($_$() && e(a) === Y.LINE ? e(m.lineTab) : e(m.liveTab))),
        d = e(s),
        {
          list: h,
          setArray: E,
          getItem: G,
        } = ie({ propKey: "id", cacheKey: `${d}-games` }),
        {
          list: c,
          setArray: O,
          getItem: C,
        } = ie({ propKey: "key", cacheKey: `${d}-champs` }),
        { list: F, hasItem: U, toggleItem: J } = ue(),
        _ = M(I, `${d}-dashboardLoadLimit`),
        L = $e(`${d}-dashboardLoadParams`, () => ({})),
        R = M(A.LOADING, `${d}-dashboardComponentState`),
        N = M(0, `${d}-dashboardType`),
        [P, V] = f({}, `${d}-marketsByGameId`),
        [me, T] = f({}, `${d}-marketGroupsBySportId`),
        [pe, $] = f({}, `${d}-longMarketGroups`),
        [he, Ie] = f(3, `${d}-marketsGroupCount`),
        [be, ye] = f(!1, `${d}-marketsIsLoaded`),
        j = M(1, `${d}-updatesCounter`),
        q = t(
          () =>
            $_$() &&
            e(a) === Y.LIVE &&
            l.bettingIsOnlyWithVideos &&
            e(m.liveTab) !== 1
        ),
        W = t(() => $_$() && e(N) === 1),
        x = t(() => $_$() && e(N) === 2),
        z = t(() => ($_$() && e(x) ? Y.LINE : e(a))),
        Ee = t(() => $_$() && D(e(h), (p) => p.mainGameId)),
        ge = t(
          () =>
            $_$() &&
            e(c)
              .slice()
              .sort((p, He) => p.sportId - He.sportId)
        ),
        Le = t(() => $_$() && _a(e(z))),
        { gamesWithVideo: Ne, champsWithVideo: Q } = na({
          games: h,
          champs: c,
        }),
        {
          pinnedGameIds: X,
          hasPinnedGameIds: Ge,
          togglePinnedGameIds: Se,
          dashboardPinnedGameList: Be,
          dashboardPinnedGameListCount: H,
          dashboardPinnedGamesByChampId: Z,
          dashboardPinnedGamesByDate: De,
          dashboardPinnedChampList: Re,
          dashboardPinnedChampsGroupByDate: Ae,
        } = da({
          bettingStoreType: b,
          getGame: G,
          getChamp: C,
          champs: c,
          champsWithVideo: Q,
          isOnlyWithVideos: q,
        }),
        {
          dashboardFilteredGameList: fe,
          dashboardFilteredGameListCount: k,
          dashboardFilteredGamesByChampId: ve,
          dashboardFilteredChampList: Oe,
          dashboardFilteredChampsGroupByDate: Ce,
          dashboardFilteredChampsBySportId: Ue,
          dashboardFilteredCountriesBySportId: Pe,
          dashboardFilteredChampsBySportIdByCountry: ke,
          dashboardFilteredSportList: Me,
        } = ia({
          getChamp: C,
          games: h,
          champs: c,
          gamesWithVideo: Ne,
          champsWithVideo: Q,
          dashboardTypePeriods: W,
          pinnedGameIds: X,
          dashboardPinnedGamesByChampId: Z,
          isOnlyWithVideos: q,
        }),
        ee = (p = I) => {
          _.value = p;
        },
        Ye = (p) => {
          L.value = p;
        },
        Fe = () => {
          $_$();
          j.value = e(j) + 1;
        },
        K = (p) => {
          R.value = p;
        },
        Je = () => {
          O([]), E([]), V({}), T({}), $({}), ee(), K(A.LOADING);
        },
        je = async () => {
          $_$();
          u.cancelAllRequest(e(b));
        },
        w = () => {
          $_$();
          K(e(k) || e(H) ? A.FULL : A.EMPTY);
        },
        ae = (p) => {
          $_$();
          p.hasError ||
            (O(p.champs),
            E(p.games),
            V(p.marketsByGameId),
            T(p.marketGroupsBySportId),
            $(p.longMarketGroupsByGameId),
            ye(!!Object.keys(p.marketsByGameId).length),
            e(y) === 1
              ? (N.value = 2)
              : e(y) === 2 || e(y) === 3
              ? (N.value = 1)
              : (N.value = 0));
        };
      return (
        qe(k, () => {
          $_$();
          e(R) !== A.LOADING && w();
        }),
        i &&
          e(i.games).length &&
          (e(k) || e(H)) &&
          (ae({
            champs: e(i.champs),
            games: e(i.games),
            marketsByGameId: e(i.marketsByGameId),
            marketGroupsBySportId: e(i.marketGroupsBySportId),
            longMarketGroupsByGameId: e(i.longMarketGroups),
          }),
          (e(k) || e(H)) && w()),
        {
          pageType: r,
          bettingType: a,
          bettingStoreType: b,
          dashboardOverrideBettingType: z,
          bettingStoreNamespace: g,
          dashboardComponentState: R,
          games: h,
          champs: c,
          openedGamesWithSubGames: F,
          pinnedGameIds: X,
          dashboardType: N,
          marketsByGameId: P,
          marketGroupsBySportId: me,
          longMarketGroups: pe,
          marketsIsLoaded: be,
          marketsGroupCount: he,
          updatesCounter: j,
          currentTab: y,
          dashboardFilteredGameList: fe,
          dashboardPinnedGameList: Be,
          dashboardPinnedGamesByChampId: Z,
          dashboardPinnedGamesByDate: De,
          dashboardFilteredGamesByChampId: ve,
          dashboardSubGamesByParentId: Ee,
          dashboardChampListSortedBySportId: ge,
          dashboardFilteredChampList: Oe,
          dashboardPinnedChampList: Re,
          dashboardPinnedChampsGroupByDate: Ae,
          dashboardFilteredChampsGroupByDate: Ce,
          dashboardFilteredChampsBySportId: Ue,
          dashboardFilteredCountriesBySportId: Pe,
          dashboardFilteredChampsBySportIdByCountry: ke,
          dashboardFilteredSportList: Me,
          dashboardLoadLimit: _,
          dashboardLoadParams: L,
          dashboardApi: u,
          isDashboardOverrideIsLive: Le,
          dashboardTypeUpcomingEvents: x,
          dashboardTypePeriods: W,
          setDashboardLimit: ee,
          setDashboardLoadParams: Ye,
          setMarketsGroupCount: Ie,
          hasPinnedGameIds: Ge,
          togglePinnedGameIds: Se,
          dashboardCancelRequest: je,
          dashboardTriggerUpdateData: Fe,
          toggleOpenedGamesWithSubGames: J,
          hasOpenedGamesWithSubGames: U,
          dashboardClearData: Je,
          dashboardGetGame: G,
          dashboardSetParsedData: ae,
          dashboardSetComponentState: K,
          setGames: E,
          dashboardUpdateComponentState: w,
        }
      );
    }
  );
function ua(s) {
  $_$();
  switch (s) {
    case n.GROIN_INJURY:
    case n.HEAD_INJURY:
    case n.KNEE_INJURY:
    case n.CALF_INJURY:
    case n.ANKLE_INJURY:
    case n.MUSCLE_INJURY:
    case n.ACHILLES_TENDON_INJURY:
    case n.HIP_INJURY:
    case n.BACK_INJURY:
    case n.SHOULDER_INJURY:
    case n.ILLNESS:
    case n.LEG_INJURY:
    case n.NOT_IN_BEST_FORM:
    case n.INJURED:
    case n.HEEL_INJURY:
    case n.FINGER_INJURY:
    case n.RIB_INJURY:
    case n.INJURY:
    case n.DOUBTFULLY_INJURED:
      return de.HEALTH;
    case n.RED_CARD:
      return de.FOOTBALL_RED_CARDS;
    default:
      return "";
  }
}
function ca(s, a) {
  switch (s) {
    case n.UNKNOWN:
      return a("game_lineups_player_absence_reason_unknown");
    case n.INJURED:
      return a("game_lineups_player_absence_reason_injured");
    case n.DOUBTFULLY_INJURED:
      return a("game_lineups_player_absence_reason_doubtfully_injured");
    case n.SUSPENDED:
      return a("game_lineups_player_absence_reason_suspended");
    case n.OTHER:
      return a("game_lineups_player_absence_reason_other");
    case n.INELIGIBLE:
      return a("game_lineups_player_absence_reason_ineligible");
    case n.SICK:
      return a("game_lineups_player_absence_reason_sick");
    case n.GROIN_INJURY:
      return a("game_lineups_player_absence_reason_groin_injury");
    case n.HEAD_INJURY:
      return a("game_lineups_player_absence_reason_head_injury");
    case n.KNEE_INJURY:
      return a("game_lineups_player_absence_reason_knee_injury");
    case n.CALF_INJURY:
      return a("game_lineups_player_absence_reason_calf_injury");
    case n.ANKLE_INJURY:
      return a("game_lineups_player_absence_reason_ankle_injury");
    case n.MUSCLE_INJURY:
      return a("game_lineups_player_absence_reason_muscle_injury");
    case n.ACHILLES_TENDON_INJURY:
      return a("game_lineups_player_absence_reason_achilles_tendon_injury");
    case n.HIP_INJURY:
      return a("game_lineups_player_absence_reason_hip_injury");
    case n.BACK_INJURY:
      return a("game_lineups_player_absence_reason_back_injury");
    case n.SHOULDER_INJURY:
      return a("game_lineups_player_absence_reason_shoulder_injury");
    case n.ILLNESS:
      return a("game_lineups_player_absence_reason_illness");
    case n.LEG_INJURY:
      return a("game_lineups_player_absence_reason_leg_injury");
    case n.NOT_IN_BEST_FORM:
      return a("game_lineups_player_absence_reason_not_in_bets_form");
    case n.RED_CARD:
      return a("game_lineups_player_absence_reason_red_card");
    case n.INJURY:
      return a("game_lineups_player_absence_reason_injury");
    case n.HEEL_INJURY:
      return a("game_lineups_player_absence_reason_heel_injury");
    case n.FINGER_INJURY:
      return a("game_lineups_player_absence_reason_finger_injury");
    case n.RIB_INJURY:
      return a("game_lineups_player_absence_reason_rib_injury");
    case n.BROKEN_ANKLE:
      return a("game_lineups_player_absence_reason_broken_ankle");
    case n.TOO_MANY_YELLOW_CARDS:
      return a("game_lineups_player_absence_reason_too_many_yellow_cards");
    case n.LOWER_LEG_INJURY:
      return a("game_lineups_player_absence_reason_lower_leg_injury");
    case n.ABDOMINAL_MUSCLE_INJURY:
      return a("game_lineups_player_absence_reason_abdominal_muscle_injury");
    default:
      return "";
  }
}
var v;
class la extends Qe {
  constructor({ T: r, ...o } = {}) {
    super(o);
    te(this, v);
    oe(this, v, r);
  }
  get absenceReasonIcon() {
    return ua(this.absenceReason);
  }
  get absenceReasonDescription() {
    return ca(this.absenceReason, re(this, v));
  }
}
v = new WeakMap();
function Ga(s, a) {
  return (s != null ? s : []).map((r) => new la({ ...r, T: a }));
}
const Sa = (s, a, r) => {
  var o, i, u, l, I, b, g, m, y;
  const d = [];
  if (
    ((o = s.personalInfo) != null &&
      o.height &&
      d.push({
        key: r("game_individual_stats_height"),
        value: s.personalInfo.height,
      }),
    (i = s.personalInfo) != null &&
      i.hand &&
      d.push({
        key: r("game_individual_stats_hand"),
        value: s.personalInfo.hand,
      }),
    (u = s.personalInfo) != null &&
      u.birthPlace &&
      d.push({
        key: r("game_individual_stats_birth_place"),
        value: s.personalInfo.birthPlace,
      }),
    (l = s.personalInfo) != null && l.playerOverview)
  ) {
    const G = s.personalInfo.playerOverview.map((c) => ({
      key: `${c.period} (${c.tournament})`,
      value: c.prize,
    }));
    d.push(...G);
  }
  const h = [];
  (I = s.breakdown) != null &&
    I.date &&
    h.push({
      key: r("game_individual_stats_date"),
      value: a(s.breakdown.date),
    }),
    (b = s.breakdown) != null &&
      b.tournament &&
      h.push({
        key: r("game_individual_stats_tournament"),
        value: s.breakdown.tournament,
      }),
    (g = s.breakdown) != null &&
      g.round &&
      h.push({
        key: r("game_individual_stats_round"),
        value: s.breakdown.round,
      }),
    (m = s.breakdown) != null &&
      m.points &&
      h.push({
        key: r("game_individual_stats_points"),
        value: s.breakdown.points,
      }),
    (y = s.breakdown) != null &&
      y.dateEnd &&
      h.push({
        key: r("game_individual_stats_end_date"),
        value: a(s.breakdown.dateEnd),
      });
  const E = [];
  return (
    d.length &&
      E.push({ title: r("game_individual_stats_personal_info"), info: d }),
    h.length &&
      E.push({ title: r("game_individual_stats_last_tournament"), info: h }),
    E
  );
};
export {
  Ga as convertPlayersToViewModels,
  Sa as convertShortPlayersInfoToViewModels,
  _a as isLiveByType,
  Na as useDashboardStore,
};
