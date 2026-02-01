import $_$ from "./$_$.js";
$_$();
import {
  isRemoteComponent as it,
  getMarketGroupTemplatesByGroupId as F,
  BettingGameParser as Ke,
  RequestManager as ze,
  liveGetTopGamesStatZipApi as lt,
  lineGetTopGamesStatZipApi as pt,
  liveAsiaGetTopGamesStatZipApi as ut,
  lineAsiaGetTopGamesStatZipApi as ct,
  useBetModelsManager as Qe,
  WeatherData as dt,
  MatchInfo as ht,
  ScoresDataResponseModelFields as C,
  getChampNameForUrl as mt,
  fixSsrMarketsByUnparsedGame as k,
  toDeepWritable as _t,
  ChampParser as vt,
  liveSportSectionGetGamesByChamp as St,
  lineSportSectionGetGamesByChamp as yt,
  liveSportSectionGetGamesByOpp as It,
  lineSportSectionGetGamesByOpp as ft,
  liveSportSectionGetSport1x2 as Tt,
  lineSportSectionGetSport1x2 as gt,
  liveSportsSectionGetChampsBySport as bt,
  lineSportsSectionGetChampsBySport as Ct,
  liveSportSectionGetTopChamps as Et,
  lineSportSectionGetTopChamps as Mt,
} from "./entry-50afb6f36c.js";
import {
  runtimeCore_esmBundler_inject as Gt,
  runtimeCore_esmBundler_getCurrentInstance as Bt,
  runtimeCore_esmBundler_onMounted as Lt,
  bettingType_BettingType as l,
  defineStore_defineStore as Ot,
  execAsync as A,
  index_useLogger as Ye,
  index_getConfigs as Je,
  useGlobalStore as Rt,
  useUserConfigStore as Nt,
  index_useCookies as H,
  index_useHttpModule as Xe,
  index_useClientHeaders as et,
  index_useT as tt,
  index_useDateTimeService as st,
  reactivity_esmBundler_ref as qt,
  runtimeCore_esmBundler_computed as w,
  reactivity_esmBundler_toValue as $,
  reactivity_esmBundler_unref as b,
  HttpClient as We,
  reactivity_esmBundler_markRaw as Dt,
  router_useRoute as At,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const Pt = () => ({
    hydrate: () => {
      $_$();
      var t, s, o, n;
      return (
        it() &&
        ((n =
          (o =
            (s = (t = Bt()) == null ? void 0 : t.provides) == null
              ? void 0
              : s.onVnodeMounted) != null
            ? o
            : Gt("onVnodeMounted")) == null
          ? void 0
          : n())
      );
    },
  }),
  rs = () => {
    $_$();
    const { hydrate: e } = Pt();
    Lt(e);
  },
  ot = { DEFAULT: !1 },
  Vt = () =>
    $_$() && {
      currentBettingType: l.LIVE,
      isGroupSportsByCategories: 0,
      cyberMatchesFilterType: 0,
      cyberType: 0,
      isOnlyWithVideos: ot.DEFAULT,
      filteredMarkets: "",
    },
  wt = () => ({
    bettingClearVideoFilter() {
      this.isOnlyWithVideos = ot.DEFAULT;
    },
    bettingClearFilters() {
      this.bettingClearVideoFilter(), (this.filteredMarkets = "");
    },
  }),
  $t = wt(),
  Ft = {
    bettingCurrentBettingType: (e) => e.currentBettingType,
    bettingSportsByCategories: (e) => e.isGroupSportsByCategories,
    bettingCyberMatchesFilterType: (e) =>
      e.cyberType ? { 1: 1, 2: 2 }[e.cyberType] : e.cyberMatchesFilterType,
    bettingIsOnlyWithVideos: (e) => e.isOnlyWithVideos,
    bettingFilteredMarkets: (e) =>
      e.filteredMarkets
        .split(",")
        .filter(Boolean)
        .reduce((t, s) => ((t[s] = !0), t), {}),
  },
  Ut = {
    bettingSetGroupByCategories(e) {
      this.isGroupSportsByCategories = e;
    },
    bettingSetCyberMatchesFilterType(e) {
      this.cyberMatchesFilterType = e;
    },
    bettingSetCyberType(e) {
      this.cyberType = e;
    },
    bettingSetIsOnlyWithVideos(e = !1) {
      this.isOnlyWithVideos = e;
    },
    bettingSetFilteredMarkets(e) {
      this.filteredMarkets = e;
    },
  },
  rt = Ot("betting", {
    useSharedStore: !0,
    state: Vt,
    actions: { ...$t, ...Ut },
    getters: Ft,
  }),
  jt = async ({
    betModelsManager: e,
    games: t,
    dateTimeService: s,
    marketsNameType: o,
    translationService: n,
    logger: i,
    siteConfig: u,
  }) => {
    $_$();
    let p, r;
    const a =
      (([p, r] = A(() =>
        F({ unparsedGames: t, betModelsManager: e, marketsNameType: o })
      )),
      (p = await p),
      r(),
      p);
    return t.map((h) =>
      Ke.parseGame({
        unparsedGameData: h,
        marketGroupTemplatesByGroupId: a,
        dateTimeService: s,
        translationService: n,
        logger: i,
        lng: u.lng,
        navigationTopChamp: u.navigationTopChamp,
      })
    );
  },
  xt = ({
    betModelsManager: e,
    response: t,
    kind: s,
    dateTimeService: o,
    marketsNameType: n,
    translationService: i,
    logger: u,
    siteConfig: p,
  }) => {
    var r;
    return jt({
      betModelsManager: e,
      games:
        (r = t == null ? void 0 : t.map((a) => Object.assign(a, { KI: s }))) !=
        null
          ? r
          : [],
      dateTimeService: o,
      marketsNameType: n,
      translationService: i,
      logger: u,
      siteConfig: p,
    });
  };
var kt = Object.defineProperty,
  Ht = (e, t, s) =>
    t in e
      ? kt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  x = (e, t, s) => Ht(e, typeof t != "symbol" ? t + "" : t, s);
class Wt {
  constructor(t) {
    x(this, "requestManager"),
      x(this, "requests"),
      x(this, "asiaRequests"),
      (this.requestManager = new ze(t));
    const s = (o, n) =>
      xt({
        betModelsManager: t.$betModelsManager,
        response: o.Value,
        kind: o.kind,
        dateTimeService: t.$dateTimeService,
        marketsNameType: n == null ? void 0 : n.marketsNameType,
        translationService: t.$T,
        logger: t.$logger,
        siteConfig: t.$siteConfig,
      });
    (this.requests = {
      [l.LINE]: { method: pt, parser: s },
      [l.LIVE]: { method: lt, parser: s },
    }),
      (this.asiaRequests = {
        [l.LINE]: { method: ct, parser: s },
        [l.LIVE]: { method: ut, parser: s },
      });
  }
  async load(t, s, o, n) {
    return this.requestManager.load({
      type: t,
      api: this.requests[t],
      params: s,
      abortController: o,
      options: n,
    });
  }
  async asiaLoad(t, s, o, n) {
    return this.requestManager.load({
      type: t,
      api: this.asiaRequests[t],
      params: s,
      abortController: o,
      options: n,
    });
  }
  cancelAllRequest(t) {
    this.requestManager.cancelAllRequest(t);
  }
}
const ns = ({
  bettingType: e,
  limit: t,
  antiSports: s,
  sports: o,
  countBySport: n,
  champs: i,
  methodName: u,
}) => {
  $_$();
  const p = Ye(),
    [r, { id: a }, h = {}] = Je(-1e3, -1004, 515),
    d = Rt(),
    m = Nt(),
    _ = H(),
    g = Xe(),
    T = et(),
    c = tt(),
    v = st(),
    M = Qe(),
    f = rt().bettingCyberMatchesFilterType,
    I = qt(!1),
    B = w(() => $_$() && m.isCoeffCutLine && $(e) === l.LINE),
    S = w(() => $_$() && m.isCoeffCutLive && $(e) === l.LIVE),
    y = w(() => ($_$() && b(B)) || b(S)),
    P = w(
      () =>
        $_$() && {
          partner: r,
          lng: d.getLanguage,
          coefViewId: d.getCoefViewId,
          cyberFlag: f,
          userId: b(y) ? d.getUserId : void 0,
          antiSports: b(s),
          limit: b(t),
          sports: b(o),
          countBySport: b(n),
          champs: b(i),
        }
    ),
    R = new Wt({
      $httpModule: g,
      $clientHeaders: T,
      $cookies: _,
      $logger: p,
      $betModelsManager: M,
      $siteConfig: { lng: a, navigationTopChamp: h },
      $dateTimeService: v,
      $T: c,
    }),
    N = () => {
      $_$();
      R == null || R.cancelAllRequest($(e));
    };
  return {
    getTopGames: async () => {
      $_$();
      let L, q, D;
      try {
        (I.value = !1), N();
        const { status: O, data: V } =
          (([L, q] = A(
            () =>
              $_$() &&
              R[u]($(e), b(P), void 0, { marketsNameType: d.marketsNameType })
          )),
          (L = await L),
          q(),
          L);
        O === We.STATUS_SUCCESS && (D = V);
      } catch (O) {
        O.status !== We.STATUS_CLOSE && p.error("Top games loading failed", O);
      } finally {
        I.value = !1;
      }
      return D;
    },
    cancelRequest: N,
    isLoading: I,
  };
};
var Zt = ((e) => (
  (e.FAVORITE = "favor"),
  (e.RECOMMENDED = "recommended"),
  (e.PINNED = "pinned"),
  (e.TOP_GAMES = "top_games"),
  (e.TOP_MENU = "top_menu"),
  (e.LEFT_MENU = "left_menu"),
  (e.FULL_SCREEN_MENU = "full_screen_menu"),
  (e.SEARCH = "search"),
  (e.SLIDER = "slider"),
  (e.DASHBOARD = "dashboard"),
  (e.PERSONALIZED_LIVE_DASHBOARD = "live-rec"),
  (e.PERSONALIZED_LINE_DASHBOARD = "line-rec"),
  e
))(Zt || {});
const as = (e) => {
    $_$();
    const t = {};
    return (
      Object.keys(e).forEach((s) => {
        Object.defineProperty(t, s, {
          enumerable: !0,
          configurable: !1,
          get: () => $_$() && b(e[s]),
        });
      }),
      Dt(t)
    );
  },
  W = ({
    unparsedGame: e,
    unparsedGameData: t,
    marketGroupTemplatesByGroupId: s,
    navigationTopChamp: o,
    dateTimeService: n,
    translationService: i,
    logger: u,
    lng: p,
  }) => {
    var r, a, h, d;
    const m =
      (d =
        (h =
          (a = (r = e.scores) == null ? void 0 : r.tabloStats) == null
            ? void 0
            : a[0]) == null
          ? void 0
          : h.map((_) => ({
              id: _.id,
              name: _.name,
              firstOpponentScore: _.s1,
              secondOpponentScore: _.s2,
            }))) != null
        ? d
        : [];
    return {
      ...Ke.parseGameForDashboard({
        unparsedGameData: t,
        marketGroupTemplatesByGroupId: s,
        dateTimeService: n,
        translationService: i,
        logger: u,
        lng: p,
        navigationTopChamp: o,
      }),
      summary: { 0: m },
      isSubGame: e.mainGameId !== e.id,
      matchInfo: ht.fromEncodedData(t.encodedMatchInfo),
      weatherData: dt.fromEncodedData(t.encodedWeatherData),
    };
  },
  is = () => {
    $_$();
    const e = At(),
      t = H(),
      s = rt(),
      o = e.query.cyber_type,
      n = t.get("cyber_type"),
      i = Number(o || n);
    [1, 2].includes(i) && (s.bettingSetCyberType(i), t.set("cyber_type", i));
  },
  Ze = (e) => (e ? [e.substring(e.lastIndexOf("/") + 1, e.length)] : []),
  Z = (e, t, s, o) => {
    $_$();
    var n,
      i,
      u,
      p,
      r,
      a,
      h,
      d,
      m,
      _,
      g,
      T,
      c,
      v,
      M,
      f,
      I,
      B,
      S,
      y,
      P,
      R,
      N,
      U,
      L,
      q,
      D,
      O,
      V,
      z,
      Q,
      Y,
      J,
      X,
      ee,
      te,
      se,
      oe,
      re,
      ne,
      ae,
      ie,
      le,
      pe,
      ue,
      ce,
      de,
      he,
      me,
      _e,
      ve,
      Se,
      ye,
      Ie,
      fe,
      Te,
      ge,
      be,
      Ce,
      Ee,
      Me,
      Ge,
      Be,
      Le,
      Oe,
      Re,
      Ne,
      qe,
      De,
      Ae,
      Pe,
      Ve,
      we,
      $e,
      Fe,
      Ue,
      je,
      xe;
    const nt =
      (n = e.eventGroups) != null && n.length
        ? e.eventGroups.reduce(
            (j, { events: ke = [], groupId: at }) => (
              ke.length &&
                j.push(
                  ...ke.flat().map((G) => {
                    var He;
                    return {
                      C: G.cf,
                      CV: G.cfView,
                      G: at,
                      T: G.type,
                      P: G.parameter,
                      B: G.blocked,
                      ...(G.player && {
                        PL: {
                          I: G.player.id,
                          N: (He = G.player.name) != null ? He : "",
                        },
                      }),
                    };
                  })
                ),
              j
            ),
            []
          )
        : [];
    return {
      I: e.id,
      SI:
        (u = s == null ? void 0 : s.id) != null
          ? u
          : (i = e.sport) == null
          ? void 0
          : i.id,
      LI:
        (r = o == null ? void 0 : o.id) != null
          ? r
          : (p = e.liga) == null
          ? void 0
          : p.id,
      MG: e.mainGameId,
      CI: t === l.LINE ? e.constId : void 0,
      COI: (a = o == null ? void 0 : o.countryId) != null ? a : e.countryId,
      SN:
        (d = s == null ? void 0 : s.name) != null
          ? d
          : (h = e.sport) == null
          ? void 0
          : h.name,
      SE:
        (_ = s == null ? void 0 : s.nameEng) != null
          ? _
          : (m = e.sport) == null
          ? void 0
          : m.nameEng,
      L:
        (T = o == null ? void 0 : o.name) != null
          ? T
          : (g = e.liga) == null
          ? void 0
          : g.name,
      CHIMG:
        (v = o == null ? void 0 : o.image) != null
          ? v
          : (c = e.liga) == null
          ? void 0
          : c.image,
      LE:
        (f = o == null ? void 0 : o.nameEng) != null
          ? f
          : (M = e.liga) == null
          ? void 0
          : M.nameEng,
      O1I:
        (B = (I = e.opponent1) == null ? void 0 : I.opps[0]) == null
          ? void 0
          : B.id,
      O1:
        (y = (S = e.opponent1) == null ? void 0 : S.opps[0]) == null
          ? void 0
          : y.name,
      O1C: (P = e.opponent1) == null ? void 0 : P.countryId,
      O1IMG: Ze(
        (N = (R = e.opponent1) == null ? void 0 : R.opps[0]) == null
          ? void 0
          : N.image
      ),
      O2I:
        (L = (U = e.opponent2) == null ? void 0 : U.opps[0]) == null
          ? void 0
          : L.id,
      O2:
        (D = (q = e.opponent2) == null ? void 0 : q.opps[0]) == null
          ? void 0
          : D.name,
      O2C: (O = e.opponent2) == null ? void 0 : O.countryId,
      O2IMG: Ze(
        (z = (V = e.opponent2) == null ? void 0 : V.opps[0]) == null
          ? void 0
          : z.image
      ),
      S: e.startTs,
      ICY: !1,
      TG: e.gameTypeName,
      TI: e.gameTypeId,
      N: e.num,
      VI: (Q = e.video) == null ? void 0 : Q.id,
      SSI: (Y = e.subSport) == null ? void 0 : Y.id,
      SSN: (J = e.subSport) == null ? void 0 : J.name,
      SSNE: (X = e.subSport) == null ? void 0 : X.nameEng,
      CMG: e.mainConstId,
      SS: (ee = e.statisticInfo) == null ? void 0 : ee.status,
      TN: e.periodName,
      PN: e.periodName,
      P: e.period,
      ZP: e.zonePlay,
      KI: e.kind,
      HLU: (te = e.statisticInfo) == null ? void 0 : te.hasLineUps,
      SGI: (se = e.statisticInfo) == null ? void 0 : se.gameId,
      E: nt,
      STI: (oe = e.statisticInfo) == null ? void 0 : oe.stageId,
      EC: e.eventsCount,
      F: e.isFinished,
      GNS: e.nonStarted,
      MS: e.menuSection,
      HSRT: (re = e.statisticInfo) == null ? void 0 : re.hasStatRatingTables,
      SST: (ne = e.statisticInfo) == null ? void 0 : ne.stageType,
      STD: e.homeAwayFlag,
      SC: {
        [C.TIME_IN_SECONDS]:
          (ie = (ae = e.scores) == null ? void 0 : ae.timer) == null
            ? void 0
            : ie.timeSec,
        [C.TIME_DIRECTION]:
          (pe = (le = e.scores) == null ? void 0 : le.timer) == null
            ? void 0
            : pe.timeDirection,
        [C.IS_TIME_RUNNING]:
          (ce = (ue = e.scores) == null ? void 0 : ue.timer) == null
            ? void 0
            : ce.timeRun,
        [C.CURRENT_PERIOD]: (de = e.scores) == null ? void 0 : de.currentPeriod,
        [C.CURRENT_PERIOD_LABEL]:
          (he = e.scores) == null ? void 0 : he.currentPeriodName,
        [C.PERIODS_COUNT]: (me = e.scores) == null ? void 0 : me.periodsCount,
        [C.STATISTIC]:
          ((ve = (_e = e.scores) == null ? void 0 : _e.statistic) == null
            ? void 0
            : ve.main) || [],
        [C.SERVER_TEAM]: (Se = e.scores) == null ? void 0 : Se.serve,
        [C.FULL_SCORES_DATA]: {
          S1:
            (Ie = (ye = e.scores) == null ? void 0 : ye.fullScoreDetail) == null
              ? void 0
              : Ie.scoreOpp1,
          S2:
            (Te = (fe = e.scores) == null ? void 0 : fe.fullScoreDetail) == null
              ? void 0
              : Te.scoreOpp2,
        },
      },
      encodedMatchInfo: {
        7: (ge = e.matchInfoObj) == null ? void 0 : ge.locationCity,
        11: (be = e.matchInfoObj) == null ? void 0 : be.locationCountry,
        1: (Ce = e.matchInfoObj) == null ? void 0 : Ce.tournamentStage,
        2: (Ee = e.matchInfoObj) == null ? void 0 : Ee.location,
        3: (Me = e.matchInfoObj) == null ? void 0 : Me.matchFormat,
        10: (Ge = e.matchInfoObj) == null ? void 0 : Ge.surface,
        4: (Be = e.matchInfoObj) == null ? void 0 : Be.seriesScore,
        34:
          (Le = e.matchInfoObj) == null
            ? void 0
            : Le.tennisSetsCountDescription,
        5: (Oe = e.matchInfoObj) == null ? void 0 : Oe.seedNum1,
        6: (Re = e.matchInfoObj) == null ? void 0 : Re.seedNum2,
      },
      encodedWeatherData: {
        9: (Ne = e.matchInfoObj) == null ? void 0 : Ne.temperature,
        21: (qe = e.matchInfoObj) == null ? void 0 : qe.weatherDescription,
        23: (De = e.matchInfoObj) == null ? void 0 : De.weatherWindParam,
        24: (Ae = e.matchInfoObj) == null ? void 0 : Ae.weatherWindDescription,
        25: (Pe = e.matchInfoObj) == null ? void 0 : Pe.weatherPressure,
        26:
          (Ve = e.matchInfoObj) == null
            ? void 0
            : Ve.weatherPressureDescription,
        27: (we = e.matchInfoObj) == null ? void 0 : we.weatherHumidity,
        28:
          ($e = e.matchInfoObj) == null
            ? void 0
            : $e.weatherHumidityDescription,
        29: (Fe = e.matchInfoObj) == null ? void 0 : Fe.weatherWaveHeight,
        30: (Ue = e.matchInfoObj) == null ? void 0 : Ue.weatherWaterTemperature,
        35:
          (je = e.matchInfoObj) == null
            ? void 0
            : je.weatherPrecipitationChance,
        36:
          (xe = e.matchInfoObj) == null
            ? void 0
            : xe.weatherPrecipitationChanceDescription,
      },
    };
  },
  K = ({ champ: e, unparsedGames: t = [], bettingType: s = l.LINE }) => {
    $_$();
    var o;
    const n = t.find((u) => {
        var p;
        return (p = u.statisticInfo) == null ? void 0 : p.stageId;
      }),
      i = mt({ champId: e.id, champName: e.name, champNameEng: e.nameEng });
    return {
      ...e,
      nameForUrl: i,
      hasLiveGames: s === l.LIVE,
      stageId:
        (o = n == null ? void 0 : n.statisticInfo) == null ? void 0 : o.stageId,
    };
  },
  Kt = async ({
    data: e,
    bettingType: t,
    responseSliceCount: s,
    logger: o,
    betModelsManager: n,
    T: i,
    navigationTopChamp: u,
    dateTimeService: p,
    lng: r,
  }) => {
    $_$();
    let a, h;
    try {
      const { games: d = [], sport: m, liga: _, gamesCount: g = 0 } = e,
        T = d.map((f) => [f, Z(f, t, m, _)]);
      T.forEach(([f, I]) => k(I));
      const c =
          (([a, h] = A(() =>
            F({ unparsedGames: T.map(([f, I]) => I), betModelsManager: n })
          )),
          (a = await a),
          h(),
          a),
        v = T.slice(0, s).map(([f, I]) =>
          W({
            unparsedGame: f,
            unparsedGameData: I,
            responseSliceCount: s,
            marketGroupTemplatesByGroupId: c,
            navigationTopChamp: u,
            dateTimeService: p,
            translationService: i,
            logger: o,
            lng: r,
          })
        ),
        M = _ ? K({ champ: _, bettingType: t, unparsedGames: d }) : void 0;
      return { games: v, gamesCount: g, champ: M, sport: m, hasError: !1 };
    } catch (d) {
      return (
        o.warn("error during parsing games by champ", { error: d }),
        { games: [], gamesCount: 0, hasError: !0 }
      );
    }
  },
  zt = async ({
    data: e,
    bettingType: t,
    marketsNameType: s,
    responseSliceCount: o,
    logger: n,
    betModelsManager: i,
    T: u,
    navigationTopChamp: p,
    dateTimeService: r,
    lng: a,
  }) => {
    $_$();
    let h, d;
    try {
      const m = e.map((c) => [c, Z(c, t)]);
      m.forEach(([, c]) => k(c));
      const _ =
          (([h, d] = A(() =>
            F({
              unparsedGames: m.map(([c, v]) => v),
              betModelsManager: i,
              marketsNameType: s,
            })
          )),
          (h = await h),
          d(),
          h),
        { games: g, champsMap: T } = m.slice(0, o).reduce(
          (c, [v, M]) => {
            var f, I, B;
            const S = W({
                unparsedGame: v,
                unparsedGameData: M,
                responseSliceCount: o,
                marketGroupTemplatesByGroupId: _,
                navigationTopChamp: p,
                dateTimeService: r,
                translationService: u,
                logger: n,
                lng: a,
              }),
              y =
                (f = c.champsMap[S.champUniqKey]) != null
                  ? f
                  : _t(
                      vt.parseChampFromBettingGame({
                        navigationTopChamp: p,
                        game: S,
                      })
                    );
            return (
              (y.gamesCount += 1),
              y.isLong || (y.isLong = (I = S.isLong) != null ? I : !1),
              S.sportId === 4 &&
                (B = S.matchInfo) != null &&
                B.fieldType &&
                (y.fieldType ||
                  ((y.name = `${y.name}. ${S.matchInfo.fieldType}`),
                  (y.fieldType = S.matchInfo.fieldType)),
                y.fieldType &&
                  y.fieldType !== S.matchInfo.fieldType &&
                  (y.name = S.champName || "")),
              c.games.push(S),
              (c.champsMap[S.champUniqKey] = y),
              c
            );
          },
          { games: [], champsMap: {} }
        );
      return { games: g, champsMap: T, hasError: !1 };
    } catch (m) {
      return (
        n.warn("response data by sport1x2 is null", { error: m }),
        { games: [], champsMap: {}, hasError: !0 }
      );
    }
  },
  Qt = async ({
    data: e,
    bettingType: t,
    responseSliceCount: s,
    logger: o,
    betModelsManager: n,
    T: i,
    navigationTopChamp: u,
    dateTimeService: p,
    lng: r,
  }) => {
    $_$();
    let a, h;
    try {
      const { games: d = [], sport: m } = e,
        _ = d.map((c) => [c, Z(c, t, m)]);
      _.forEach(([c, v]) => k(v));
      const g =
        (([a, h] = A(() =>
          F({ unparsedGames: _.map(([c, v]) => v), betModelsManager: n })
        )),
        (a = await a),
        h(),
        a);
      return {
        games: _.slice(0, s).map(([c, v]) =>
          W({
            unparsedGame: c,
            unparsedGameData: v,
            responseSliceCount: s,
            marketGroupTemplatesByGroupId: g,
            navigationTopChamp: u,
            dateTimeService: p,
            translationService: i,
            logger: o,
            lng: r,
          })
        ),
        sport: m,
        hasError: !1,
      };
    } catch (d) {
      return (
        o.warn("error during parsing games by opponent", { error: d }),
        { games: [], hasError: !0 }
      );
    }
  },
  Yt = async ({ data: e, bettingType: t, logger: s }) => {
    try {
      const { champs: o = [], sport: n } = e;
      return {
        champs: o.map((u) => K({ champ: u, bettingType: t })),
        sport: n,
        hasError: !1,
      };
    } catch (o) {
      return (
        s.warn("error during parsing top champs", { error: o }),
        { champs: [], hasError: !0 }
      );
    }
  },
  Jt = async ({ data: e, bettingType: t, logger: s }) => {
    try {
      const { champs: o = [], sport: n } = e;
      return {
        champs: o.map((u) => K({ champ: u, bettingType: t })),
        sport: n,
        hasError: !1,
      };
    } catch (o) {
      return (
        s.warn("error during parsing champs by sport", { error: o }),
        { champs: [], hasError: !0 }
      );
    }
  };
var Xt = Object.defineProperty,
  es = (e, t, s) =>
    t in e
      ? Xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  E = (e, t, s) => es(e, typeof t != "symbol" ? t + "" : t, s);
class ts {
  constructor(t) {
    E(this, "gamesByChampRequests"),
      E(this, "gamesByOppRequests"),
      E(this, "gamesBySport1x2Requests"),
      E(this, "champsBySportRequests"),
      E(this, "topChampsRequests"),
      E(this, "requestManager"),
      E(this, "limitCountItemsOnSSR", 10),
      E(this, "T"),
      E(this, "dateTimeService"),
      (this.requestManager = new ze(t)),
      (this.T = t.$T),
      (this.dateTimeService = t.$dateTimeService);
    const s = {
        betModelsManager: t.$betModelsManager,
        logger: t.$logger,
        T: this.T,
        responseSliceCount: void 0,
        navigationTopChamp: t.$navigationTopChamp,
        dateTimeService: this.dateTimeService,
        lng: t.$lng,
      },
      o = (r, a) => Kt({ ...s, bettingType: a, data: r }),
      n = (r, a) => Qt({ ...s, bettingType: a, data: r }),
      i = (r, a) => zt({ ...s, bettingType: a, data: r }),
      u = (r, a) => Yt({ data: r, bettingType: a, logger: s.logger }),
      p = (r, a) => Jt({ data: r, bettingType: a, logger: s.logger });
    (this.gamesByChampRequests = {
      [l.LINE]: { method: yt, parser: (r) => $_$() && o(r, l.LINE) },
      [l.LIVE]: { method: St, parser: (r) => $_$() && o(r, l.LIVE) },
    }),
      (this.gamesByOppRequests = {
        [l.LINE]: { method: ft, parser: (r) => $_$() && n(r, l.LINE) },
        [l.LIVE]: { method: It, parser: (r) => $_$() && n(r, l.LIVE) },
      }),
      (this.gamesBySport1x2Requests = {
        [l.LINE]: { method: gt, parser: (r) => $_$() && i(r, l.LINE) },
        [l.LIVE]: { method: Tt, parser: (r) => $_$() && i(r, l.LIVE) },
      }),
      (this.champsBySportRequests = {
        [l.LINE]: { method: Ct, parser: (r) => $_$() && p(r, l.LINE) },
        [l.LIVE]: { method: bt, parser: (r) => $_$() && p(r, l.LIVE) },
      }),
      (this.topChampsRequests = {
        [l.LINE]: { method: Mt, parser: (r) => $_$() && u(r, l.LINE) },
        [l.LIVE]: { method: Et, parser: (r) => $_$() && u(r, l.LIVE) },
      });
  }
  loadGamesByChamp(t, s, o) {
    return this.requestManager.load({
      type: t,
      api: this.gamesByChampRequests[t],
      params: s,
      options: o,
    });
  }
  loadGamesByOpp(t, s, o) {
    return this.requestManager.load({
      type: t,
      api: this.gamesByOppRequests[t],
      params: s,
      options: o,
    });
  }
  loadGamesBySport1x2(t, s, o) {
    return this.requestManager.load({
      type: t,
      api: this.gamesBySport1x2Requests[t],
      params: s,
      options: o,
    });
  }
  loadTopChamps(t, s, o) {
    return this.requestManager.load({
      type: t,
      api: this.topChampsRequests[t],
      params: s,
      options: o,
    });
  }
  loadChampsBySport(t, s, o) {
    return this.requestManager.load({
      type: t,
      api: this.champsBySportRequests[t],
      params: s,
      options: o,
    });
  }
  cancelAllRequest(t) {
    this.requestManager.cancelAllRequest(t);
  }
}
const ls = () => {
  $_$();
  const e = tt(),
    t = Ye(),
    s = H(),
    o = Xe(),
    [n, i] = Je(-1004, 515),
    u = et(),
    p = st(),
    r = Qe();
  return new ts({
    $httpModule: o,
    $clientHeaders: u,
    $cookies: s,
    $logger: t,
    $lng: n.id,
    $navigationTopChamp: i != null ? i : {},
    $T: e,
    $dateTimeService: p,
    $betModelsManager: r,
  });
};
export {
  Zt as GameOpenSource,
  W as getParsedSportSectionGame,
  as as toUnwrapGetters,
  rt as useBettingStore,
  rs as useHydrate,
  is as useParamsInit,
  ls as useSportSectionApi,
  ns as useTopGamesRequest,
};
