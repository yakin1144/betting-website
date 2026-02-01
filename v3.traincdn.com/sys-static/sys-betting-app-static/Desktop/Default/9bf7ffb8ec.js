import $_$ from "./$_$.js";
$_$();
import {
  defineDynamicBettingStore as x,
  useSelectedBettingEntitiesStore as st,
  useBettingState as ot,
  equalState as q,
} from "./9de70556bb.js";
import {
  isDef as L,
  reactivity_esmBundler_unref as s,
  runtimeCore_esmBundler_computed as l,
  useGlobalStore as rt,
  toDeepReadonly_toDeepReadonly as Rt,
  bettingType_BettingType as Tt,
  iconName as Nt,
  index_useLogger as It,
  uniqueBy as Lt,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  SportsMenuMarketGroup as o,
  useNormalizedData as K,
  combinePipelineModules as Ht,
  serverStorageShallowRef as f,
  compileName as nt,
  useBettingRouteData as Mt,
  useList as Q,
  ComponentListState as W,
  groupBy as tt,
} from "./entry-50afb6f36c.js";
import { useSportsMenuApi as Ct } from "./9e4e245c05.js";
import { useDashboardApi as Gt } from "./58a21526ee.js";
const Dt = (e) => e in o,
  Xt = (e, r = 0) => `${e}_${r}`,
  at = (e = "") => {
    $_$();
    const [r, n] = e.split("_").map(Number);
    return L(r) && L(n) && Dt(n) ? [`${r}`, n] : [];
  },
  ft = ({ bettingType: e, pageType: r, storeName: n }) => {
    $_$();
    const p = s(n),
      {
        list: u,
        setArray: _,
        getItem: d,
      } = K({ propKey: "id", cacheKey: `${p}-asia-sports` }),
      A = l(() => $_$() && s(u).length),
      R = l(() => $_$() && s(u).reduce((i, O) => i + O.gamesCount, 0)),
      S = l(() => $_$() && s(u)[0]),
      E = l(() => {
        $_$();
        var i;
        return (i = s(S)) == null ? void 0 : i.id;
      }),
      m = l(() => {
        $_$();
        var i;
        return (i = s(S)) == null ? void 0 : i.subs[0];
      }),
      N = l(() => {
        $_$();
        var i;
        return (i = s(m)) == null ? void 0 : i.marketGroup;
      });
    return {
      bettingType: e,
      pageType: r,
      storeName: n,
      sports: u,
      setSports: _,
      getSport: d,
      sportsCount: A,
      sportsEventsCount: R,
      sportFirst: S,
      sportFirstId: E,
      sportFirstMarketGroupFirst: m,
      sportFirstMarketGroupIdFirst: N,
    };
  },
  pt = x(
    "bettingSectionSportsAsiaStore",
    ({ bettingType: e, pageType: r, storeName: n, prevStore: p }) => {
      $_$();
      const u = p,
        _ = Ht(
          () => ({ bettingType: e, pageType: r, storeName: n, prevStore: p }),
          ft
        );
      return u && _.setSports(s(u.sports)), _;
    }
  ),
  gt = ({ bettingType: e, pageType: r }) => {
    $_$();
    const {
        listSelectedSectionSportIds: n,
        listSelectedSportMarketGroupIds: p,
      } = st({ bettingType: e, pageType: r }),
      { getSport: u } = pt({ bettingType: e, pageType: r }),
      _ = l(() => $_$() && s(n).slice(-1).shift()),
      d = l(() => $_$() && s(p).slice(-1).shift()),
      A = l(() => $_$() && at(s(d)).slice(-1).shift()),
      R = l(() => {
        $_$();
        const S = s(_);
        return L(S) ? u(Number(S)) : void 0;
      });
    return {
      lastSelectedSportMarketGroup: d,
      lastSelectedMarketGroup: A,
      lastSelectedSportId: _,
      lastSelectedSport: R,
    };
  },
  kt = x("sportsMenuAsia", ({ storeName: e, bettingType: r, pageType: n }) => {
    $_$();
    const p = s(e),
      u = rt(),
      { bettingStoreType: _ } = ot({ bettingType: r, pageType: n }),
      {
        listSelectedSectionSportIds: d,
        hasSelectedSectionSportId: A,
        toggleSelectedSectionSportId: R,
        setSelectedSectionSportIds: S,
        listSelectedSportMarketGroupIds: E,
        hasSelectedSportMarketGroupId: m,
        toggleSelectedSportMarketGroupId: N,
        setSelectedSportMarketGroupIds: i,
      } = st({ bettingType: r, pageType: n }),
      {
        sports: O,
        setSports: c,
        getSport: I,
        sportsCount: M,
        sportsEventsCount: P,
        sportFirst: V,
        sportFirstId: F,
        sportFirstMarketGroupFirst: v,
        sportFirstMarketGroupIdFirst: h,
      } = pt({ bettingType: r, pageType: n }),
      { sportsMenuApi: g } = Ct(),
      H = f(1, `${p}-sportsMenuAsiaUpdatesCounter`),
      C = l(
        () =>
          $_$() &&
          nt({
            pageType: s(n),
            bettingType: s(r),
            bettingView: u.getBettingViewType,
          })
      );
    return Rt({
      bettingStoreType: _,
      bettingType: r,
      pageType: n,
      sports: O,
      sportsCount: M,
      sportsEventsCount: P,
      sportsMenuApi: g,
      sportsMenuSetParsedData: (Z) => {
        c(Z);
      },
      sportsMenuClearData: () => {
        c([]);
      },
      sportsMenuTriggerUpdateData: () => {
        H.value += 1;
      },
      sportsMenuCancelRequest: () =>
        $_$() && g.cancelAllRequest(["asiaSports", s(C)].join(":")),
      sportsMenuRequestTypeName: C,
      sportsMenuUpdatesCounter: H,
      sportFirstMarketGroupFirst: v,
      sportFirstMarketGroupIdFirst: h,
      sportFirst: V,
      sportFirstId: F,
      getSport: I,
      listSelectedSportIds: d,
      hasSelectedSportId: A,
      toggleSelectedSportId: R,
      setSelectedSportIds: S,
      listSelectedSportMarketGroupIds: E,
      hasSelectedSportMarketGroupId: m,
      toggleSelectedSportMarketGroupId: N,
      setSelectedSportMarketGroupIds: i,
      sportsMenuClearSelectedEntities: () => {
        S([]), i([]);
      },
      sportsMenuClearSelectedSportMarketGroups: () => {
        i([]);
      },
    });
  }),
  yt = ({ bettingType: e, pageType: r }) => {
    $_$();
    const { routeSportId: n, routeMarketGroup: p } = Mt(),
      { lastSelectedSportId: u, lastSelectedSportMarketGroup: _ } = gt({
        bettingType: e,
        pageType: r,
      }),
      { getSport: d } = kt({ bettingType: e, pageType: r }),
      A = l(() => $_$() && d(s(n))),
      R = l(() => {
        $_$();
        var O, c;
        return (c = (O = s(A)) == null ? void 0 : O.subs[0]) == null
          ? void 0
          : c.marketGroup;
      }),
      S = l(() => $_$() && s(e) === Tt.LINE),
      E = l(() => $_$() && at(s(_))),
      m = l(() => {
        $_$();
        const O = s(n);
        return L(O) ? `${O}` : s(S) ? s(E)[0] : s(u);
      }),
      N = l(() => {
        $_$();
        var O, c;
        const I = s(E)[s(E).length - 1];
        return I &&
          (O = s(A)) != null &&
          O.subs.find((M) => M.marketGroup === I)
          ? I
          : (c = s(R)) != null
          ? c
          : o.HDP_AND_OU;
      });
    return {
      paramMarketGroup: l(() => {
        $_$();
        var O, c;
        return (c = (O = s(p)) != null ? O : s(S) ? s(N) : o.ALL_EVENTS) != null
          ? c
          : o.ALL_EVENTS;
      }),
      paramSportId: m,
    };
  },
  Ut = [
    {
      type: 0,
      caption: "betting_asia_tab_type_all",
      value: 0,
      name: "all",
      edit: !1,
      tooltip: "betting_asia_tab_type_all",
    },
    {
      type: 1,
      caption: "betting_asia_tab_type_favorites",
      value: 1,
      name: "favorites",
      edit: !1,
      tooltip: "betting_asia_tab_type_favorites",
      ico: Nt.FAVORITE,
    },
  ];
var t = ((e) => (
  (e.FULL_TIME = "fullTime"),
  (e.FIRST_HALF = "firstHalf"),
  (e.HDP = "hdp"),
  (e.HANDICAP = "handicap"),
  (e.OVER_UNDER_SHORT = "overUnderShort"),
  (e.ONE_X_TWO = "oneXTwo"),
  (e.ONE = "one"),
  (e.X = "x"),
  (e.TWO = "two"),
  (e.HOME = "home"),
  (e.AWAY = "away"),
  (e.GOALS = "goals"),
  (e.OVER = "over"),
  (e.UNDER = "under"),
  (e.WINNER = "winner"),
  (e.TEAM_OVER_UNDER = "teamOverUnder"),
  (e.GAME_HANDICAP = "gameHandicap"),
  (e.GAME_OVER_UNDER = "gameOverUnder"),
  (e.GAMES_OVER_UNDER = "gamesOverUnder"),
  (e.POINTS_HANDICAP = "pointsHandicap"),
  (e.POINTS_OVER_UNDER = "pointsOverUnder"),
  (e.POINTS_ODD_EVEN = "pointsOddEven"),
  (e.SET_HANDICAP = "setHandicap"),
  (e.ODD_EVEN_SHORT = "oddEvenShort"),
  (e.ODD = "odd"),
  (e.EVEN = "even"),
  (e.MOST = "most"),
  (e.FOUR_SIX = "fourSix"),
  (e.ZERO = "zero"),
  (e.FIRST = "first"),
  (e.SECOND = "second"),
  (e.FIRST_GOAL = "firstGoal"),
  (e.LAST_GOAL = "lastGoal"),
  (e.NO_GOAL = "noGoal"),
  (e.HOME_HOME = "homeHome"),
  (e.HOME_DRAW = "homeDraw"),
  (e.HOME_AWAY = "homeAway"),
  (e.DRAW_HOME = "drawHome"),
  (e.DRAW_DRAW = "drawDraw"),
  (e.DRAW_AWAY = "drawAway"),
  (e.AWAY_HOME = "awayHome"),
  (e.AWAY_DRAW = "awayDraw"),
  (e.AWAY_AWAY = "awayAway"),
  (e.ZERO_ONE = "zeroOne"),
  (e.TWO_THREE = "twoTree"),
  (e.ZERO_ZERO = "zeroZero"),
  (e.ONE_ZERO = "oneZero"),
  (e.ONE_ONE = "oneOne"),
  (e.TWO_ZERO = "twoZero"),
  (e.ZERO_TWO = "zeroTwo"),
  (e.TWO_ONE = "twoOne"),
  (e.ONE_TWO = "oneTwo"),
  (e.THREE_ZERO = "threeZero"),
  (e.ZERO_THREE = "zeroThree"),
  (e.TWO_TWO = "twoTwo"),
  (e.THREE_ONE = "threeOne"),
  (e.ONE_THREE = "oneThree"),
  (e.THREE_TWO = "threeTwo"),
  (e.THREE_THREE = "threeThree"),
  (e.ONE_FOUR = "oneFour"),
  e
))(t || {});
const qt = (e) => Object.values(t).includes(e),
  Wt = [
    {
      topColumns: [t.FULL_TIME, t.FIRST_HALF],
      bottomColumns: [
        t.HDP,
        t.OVER_UNDER_SHORT,
        t.ONE_X_TWO,
        t.HDP,
        t.OVER_UNDER_SHORT,
        t.ONE_X_TWO,
      ],
      fullTimeColumnsCount: 3,
      firstHalfColumnsCount: 3,
      rules: {
        sports: 1,
        displayType: 0,
        marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS],
      },
    },
    {
      topColumns: [t.FULL_TIME, t.FIRST_HALF],
      bottomColumns: [t.HDP, t.OVER_UNDER_SHORT, t.HDP, t.OVER_UNDER_SHORT],
      fullTimeColumnsCount: 2,
      firstHalfColumnsCount: 2,
      rules: { sports: 1, displayType: 0, marketGroup: [o.MYANMAR] },
    },
    {
      topColumns: [t.FULL_TIME, t.FIRST_HALF],
      bottomColumns: [
        t.HDP,
        t.HOME,
        t.AWAY,
        t.GOALS,
        t.OVER,
        t.UNDER,
        t.HDP,
        t.HOME,
        t.AWAY,
        t.GOALS,
        t.OVER,
        t.UNDER,
      ],
      fullTimeColumnsCount: 6,
      firstHalfColumnsCount: 6,
      rules: {
        sports: 1,
        displayType: 1,
        marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS, o.MYANMAR],
      },
    },
    {
      bottomColumns: [
        t.WINNER,
        t.HANDICAP,
        t.OVER_UNDER_SHORT,
        t.TEAM_OVER_UNDER,
      ],
      rules: { sports: [3, 13], marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
      lastColumnWide: !0,
    },
    {
      bottomColumns: [t.WINNER, t.GAME_HANDICAP, t.GAMES_OVER_UNDER],
      rules: { sports: 4, marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
    },
    {
      bottomColumns: [
        t.WINNER,
        t.GAME_HANDICAP,
        t.POINTS_HANDICAP,
        t.POINTS_OVER_UNDER,
      ],
      rules: { sports: 10, marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
    },
    {
      bottomColumns: [
        t.WINNER,
        t.SET_HANDICAP,
        t.POINTS_HANDICAP,
        t.POINTS_OVER_UNDER,
        t.POINTS_ODD_EVEN,
      ],
      rules: { sports: [6, 29], marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
    },
    {
      bottomColumns: [
        t.WINNER,
        t.HANDICAP,
        t.OVER_UNDER_SHORT,
        t.ODD_EVEN_SHORT,
      ],
      rules: { sports: [5, 41, 30], marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
    },
    {
      bottomColumns: [t.WINNER, t.HANDICAP, t.OVER_UNDER_SHORT],
      rules: { sports: [66], marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
    },
    {
      bottomColumns: [t.ONE_X_TWO, t.HANDICAP, t.OVER_UNDER_SHORT],
      rules: { sports: [40], marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
    },
    {
      bottomColumns: [t.ONE_X_TWO, t.HANDICAP, t.OVER_UNDER_SHORT, t.MOST],
      rules: { sports: [21, 234], marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
    },
    {
      bottomColumns: [
        t.ONE_X_TWO,
        t.HANDICAP,
        t.OVER_UNDER_SHORT,
        t.TEAM_OVER_UNDER,
      ],
      rules: { sports: 13, marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
    },
    {
      bottomColumns: [t.HANDICAP, t.OVER_UNDER_SHORT, t.ONE_X_TWO],
      rules: {
        sports: [
          211, 232, 233, 240, 244, 245, 246, 247, 248, 250, 253, 254, 255, 260,
          261, 263, 265, 266,
        ],
        marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS],
      },
    },
    {
      bottomColumns: [
        t.ONE_X_TWO,
        t.HANDICAP,
        t.OVER_UNDER_SHORT,
        t.ODD_EVEN_SHORT,
      ],
      rules: { marketGroup: [o.HDP_AND_OU, o.ALL_EVENTS] },
    },
    {
      topColumns: [t.FULL_TIME, t.FIRST_HALF],
      bottomColumns: [t.ONE, t.X, t.TWO, t.ONE, t.X, t.TWO],
      fullTimeColumnsCount: 3,
      firstHalfColumnsCount: 3,
      rules: { marketGroup: o.ONLY_1x2_HT_FT },
    },
    {
      topColumns: [t.FULL_TIME, t.FIRST_HALF],
      bottomColumns: [t.ODD, t.EVEN, t.ODD, t.EVEN],
      fullTimeColumnsCount: 2,
      firstHalfColumnsCount: 2,
      rules: { marketGroup: o.GOALS_ODD_EVEN },
    },
    {
      topColumns: [t.FULL_TIME, t.FIRST_HALF],
      bottomColumns: [
        t.ONE_TWO,
        t.ONE_THREE,
        t.ONE_FOUR,
        t.TWO_THREE,
        t.ZERO_ONE,
        t.ZERO_TWO,
        t.ONE_TWO,
      ],
      fullTimeColumnsCount: 4,
      firstHalfColumnsCount: 3,
      rules: { marketGroup: o.TOTAL_GOALS },
    },
    {
      topColumns: [t.FULL_TIME, t.FIRST_HALF],
      bottomColumns: [
        t.FIRST_GOAL,
        t.LAST_GOAL,
        t.NO_GOAL,
        t.FIRST_GOAL,
        t.LAST_GOAL,
        t.NO_GOAL,
      ],
      fullTimeColumnsCount: 3,
      firstHalfColumnsCount: 3,
      rules: { marketGroup: o.FIRST_LAST_GOAL },
    },
    {
      bottomColumns: [
        t.HOME_HOME,
        t.HOME_DRAW,
        t.HOME_AWAY,
        t.DRAW_HOME,
        t.DRAW_DRAW,
        t.DRAW_AWAY,
        t.AWAY_HOME,
        t.AWAY_DRAW,
        t.AWAY_AWAY,
      ],
      rules: { marketGroup: o.HALFTIME_FULLTIME },
    },
    {
      bottomColumns: [
        t.ZERO_ZERO,
        t.ONE_ZERO,
        t.ZERO_ONE,
        t.ONE_ONE,
        t.TWO_ZERO,
        t.ZERO_TWO,
        t.TWO_ONE,
        t.ONE_TWO,
        t.THREE_ZERO,
        t.ZERO_THREE,
        t.TWO_TWO,
        t.THREE_ONE,
      ],
      rules: { sports: 1, marketGroup: o.CORRECT_SCORE },
    },
    {
      bottomColumns: [],
      rules: { marketGroup: o.CORRECT_SCORE },
      isDynamic: !0,
    },
    { bottomColumns: [], rules: { marketGroup: o.OUTRIGHTS } },
  ],
  Pt = (e, r) =>
    !Object.keys(e)
      .map((p) => {
        const u = r[p],
          _ = e[p];
        return Array.isArray(_) ? _.includes(u) : _ === u;
      })
      .includes(!1),
  Vt = 0,
  Ft = 14,
  vt = (e) => {
    $_$();
    if (!e.param) return;
    const [r, n] = `${e.param}`.split(".");
    if (L(r)) return L(n) ? `${r}-${Number(n)}` : `${r}-0`;
  },
  ht = (e) => {
    var r;
    const n = [],
      [p] = e;
    if (!p) return n;
    const { [136]: u = [] } = (r = p.marketGroups) != null ? r : {};
    return (
      u.forEach((_) => {
        const d = vt(_);
        d && n.push(d);
      }),
      n.slice(Vt, Ft)
    );
  },
  et = ({ games: e, rules: r, logger: n }) => {
    $_$();
    const p = Wt.find((u) => Pt(u.rules, r));
    return p != null && p.isDynamic
      ? { bottomColumns: ht(e), rules: p.rules, isDynamic: p.isDynamic }
      : (L(p) || n.info("DashboardLegend Configuration is undefined"), p);
  },
  bt = 40,
  Kt = x(
    "dashboardAsiaStore",
    ({ storeName: e, bettingType: r, pageType: n, prevStore: p }) => {
      $_$();
      const u = p,
        _ = It(),
        d = rt(),
        A = Gt(),
        { bettingStoreType: R, bettingStoreNamespace: S } = ot({
          bettingType: r,
          pageType: n,
        }),
        E = s(e),
        { list: m, setArray: N } = K({ propKey: "id", cacheKey: `${E}-games` }),
        { list: i, setArray: O } = K({
          propKey: "key",
          cacheKey: `${E}-champs`,
        }),
        {
          list: c,
          hasItem: I,
          toggleItem: M,
          setList: P,
        } = Q({ cacheKey: `${E}-collapsedChamps` }),
        {
          list: V,
          hasItem: F,
          toggleItem: v,
          setList: h,
        } = Q({ cacheKey: `${E}-selected-champs-ids` }),
        { paramSportId: g, paramMarketGroup: H } = yt({
          bettingType: r,
          pageType: n,
        }),
        C = l(
          () =>
            $_$() &&
            nt({
              pageType: s(n),
              bettingType: s(r),
              bettingView: d.getBettingViewType,
            })
        ),
        b = f(bt, `${E}-dashboardLoadLimit`),
        w = f(W.LOADING, `${E}-dashboardComponentState`),
        [G, j] = q(0, `${E}-dashboardDisplayType`),
        B = f(Ut[0], `${E}-dashboardCurrentTab`),
        [, z] = q({}, `${E}-marketsByGameId`),
        [Z, lt] = q(!0, `${E}-marketsIsLoaded`),
        k = f(1, `${E}-updatesCounter`),
        ut = l(() => $_$() && Lt(s(m).map((a) => a.sportId))),
        J = l(() => $_$() && s(m).filter((a) => !a.isSubGame)),
        $ = l(() => $_$() && tt(s(J), (a) => a.champUniqKey)),
        Y = l(
          () =>
            $_$() &&
            s(i)
              .slice()
              .sort((a, T) => a.sportId - T.sportId)
        ),
        _t = l(
          () =>
            $_$() &&
            Object.values(
              tt(s(Y), (a) => {
                $_$();
                var T, D, y;
                const U = et({
                  games: (T = s($)[a.key]) != null ? T : [],
                  rules: {
                    sports: a == null ? void 0 : a.sportId,
                    displayType: s(G),
                    marketGroup: s(H),
                  },
                  logger: _,
                });
                return [
                  a.sportId,
                  ...((D = U == null ? void 0 : U.bottomColumns) != null
                    ? D
                    : []),
                  ...((y = U == null ? void 0 : U.topColumns) != null ? y : []),
                ]
                  .filter(Boolean)
                  .join("_");
              })
            )
        ),
        Et = l(
          () =>
            $_$() &&
            s(Y).reduce((a, T) => {
              $_$();
              var D;
              const y = et({
                games: (D = s($)[T.key]) != null ? D : [],
                rules: {
                  sports: T == null ? void 0 : T.sportId,
                  displayType: s(G),
                  marketGroup: s(H),
                },
                logger: _,
              });
              return (a[T.key] = y), a;
            }, {})
        ),
        it = () => {
          $_$();
          k.value = s(k) + 1;
        },
        X = (a) => {
          w.value = a;
        },
        Ot = () => {
          X(W.LOADING);
        },
        St = () => {
          $_$();
          A.cancelAllRequest(s(C));
        },
        dt = () => {
          $_$();
          X(s(m).length ? W.FULL : W.EMPTY);
        },
        ct = (a) => {
          b.value = a;
        },
        At = (a) => {
          O(a.champs),
            N(a.games),
            z(a.marketsByGameId),
            lt(!!Object.keys(a.marketsByGameId).length),
            dt();
        },
        mt = (a) => {
          B.value = a;
        };
      return (
        u && (k.value = s(u.updatesCounter)),
        {
          pageType: n,
          bettingType: r,
          displayType: G,
          bettingStoreType: R,
          bettingStoreNamespace: S,
          dashboardComponentState: w,
          dashboardCurrentTab: B,
          updatesCounter: k,
          dashboardLoadLimit: b,
          dashboardApi: A,
          dashboardRequestTypeName: C,
          dashboardChamps: i,
          dashboardGames: m,
          dasboardSelectedChampIds: V,
          dashboardGamesGroupByChampId: $,
          dashboardDisplayType: G,
          dashboardMarketIsLoaded: Z,
          dashboardChampListSortedBySportId: Y,
          dashboardChampsGroupByEqualLegend: _t,
          dashboardChampLegendMap: Et,
          dashboardSetDisplayType: j,
          dashboardGamesExcludeSubs: J,
          sportIdsFromDashboardGames: ut,
          paramSportId: g,
          paramMarketGroup: H,
          dashboardCancelRequest: St,
          dashboardTriggerUpdateData: it,
          dashboardClearData: Ot,
          dashboardSetParsedData: At,
          dashboardSetComponentState: X,
          dashboardSetCurrentTab: mt,
          dashboardSetSelectedChampIds: h,
          dashboardHasSelectedChampId: F,
          dashboardToggleSelectedChampId: v,
          dashboardCollapsedChamps: c,
          dashboardHasCollapsedChamp: I,
          dashboardToggleCollapsedChamp: M,
          dashboardSetCollapsedChamps: P,
          setDashboardLoadLimit: ct,
        }
      );
    }
  );
export {
  Ft as CORRECT_SCORE_END_SLICE_INDEX,
  Vt as CORRECT_SCORE_START_SLICE_INDEX,
  t as DashboardColumn,
  Ut as Tabs,
  vt as buildKeyFromMarketParam,
  et as getDashboardLegendsConfig,
  Xt as getSportMarketGroupEntity,
  qt as isDashboardColumn,
  Pt as isEqualRules,
  at as parseSportMarketGroupEntity,
  Kt as useDashboardStore,
  gt as useSportsMenuLastSelectedEntities,
  yt as useSportsMenuParams,
  kt as useSportsMenuStore,
};
