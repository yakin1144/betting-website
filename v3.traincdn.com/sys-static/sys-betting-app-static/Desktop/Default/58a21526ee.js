import $_$ from "./$_$.js";
$_$();
import {
  index_default_4 as w,
  index_default_5 as A,
  BettingPageType as E,
  bettingType_BettingType as G,
  uniqueBy as re,
  execAsync as y,
  disableReactivity_disableReactivity as B,
  TIME_GROUP_1_KEY as ae,
  TIME_GROUP_2_KEY as se,
  TIME_GROUP_3_KEY as oe,
  isArray_isArray as Y,
  delay as $,
  index_useHttpModule as ne,
  index_useClientHeaders as ie,
  index_useCookies as pe,
  index_useLogger as ue,
  index_useT as de,
  index_useDateTimeService as le,
  index_getConfigs as ce,
  runtimeCore_esmBundler_computed as b,
  reactivity_esmBundler_toValue as h,
  useRemoteProvider as me,
  index_getConfig as he,
  Language_default as _e,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  compileName as v,
  MARKET_GROUP_IDS_MIN_LENGTH as H,
  BettingGameParser as Ie,
  toDeepWritable as ge,
  ChampParser as fe,
  createEmptyMarket as D,
  marketTypesByGroupId as R,
  createMarket as Me,
  groupBy as ye,
  GROUP_IDS_WITH_ADDITIONAL_EVENTS as j,
  LONG_MARKET_LIMIT as q,
  isRecord as P,
  fixSsrMarketsByUnparsedGame as F,
  getMarketGroupTemplatesByGroupId as K,
  FEEDS_CONFIG as m,
  RequestManager as Te,
  lineGet1x2ZipApi as S,
  liveGet1x2ZipApi as N,
  lineBetsOnYourGet1x2ZipApi as ke,
  liveBetsOnYourGet1x2ZipApi as Ee,
  liveAsiaGetGamesZipApi as C,
  lineAsiaGetGamesZipApi as x,
  useBetModelsManager as Ge,
} from "./entry-50afb6f36c.js";
import {
  createLongGroups as be,
  createDashboardMarketGroup as V,
  createGroup as ve,
  BETTING_STORE_TYPE_MAP as f,
} from "./7fd3152d11.js";
function at(e) {
  $_$();
  w(1, arguments);
  var t;
  if (e && typeof e.forEach == "function") t = e;
  else if (typeof e == "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else return new Date(NaN);
  var r;
  return (
    t.forEach(function (a) {
      $_$();
      var s = A(a);
      (r === void 0 || r > s || isNaN(s.getDate())) && (r = s);
    }),
    r || new Date(NaN)
  );
}
function st(e, t) {
  $_$();
  w(2, arguments);
  var r = A(e),
    a = A(t);
  return r.getTime() > a.getTime();
}
function ot(e, t) {
  $_$();
  w(2, arguments);
  var r = A(e),
    a = A(t);
  return r.getTime() < a.getTime();
}
const L = {
    ASIAN_HOME_LIVE: v({
      pageType: E.HOME,
      bettingType: G.LIVE,
      bettingView: "asian",
    }),
    ASIAN_HOME_LINE: v({
      pageType: E.HOME,
      bettingType: G.LINE,
      bettingView: "asian",
    }),
    ASIAN_TEAM_LINE: v({
      pageType: E.TEAM,
      bettingType: G.LINE,
      bettingView: "asian",
    }),
    ASIAN_BETSONYOUR_LINE: v({
      pageType: E.BETSONYOUR,
      bettingType: G.LINE,
      bettingView: "asian",
    }),
    ASIAN_BETSONYOUR_LIVE: v({
      pageType: E.BETSONYOUR,
      bettingType: G.LIVE,
      bettingView: "asian",
    }),
    ASIAN_MARBLE_LIVE: v({
      pageType: E.MARBLE,
      bettingType: G.LIVE,
      bettingView: "asian",
    }),
  },
  Le = (e) =>
    Object.keys(e).reduce(
      (t, r) =>
        $_$() &&
        ((t[r] = re(e[r])),
        t[r].length < H && t[r].push(...new Array(H - t[r].length).fill("0")),
        t),
      {}
    ),
  Z = ({
    unparsedGames: e,
    responseSliceCount: t,
    marketGroupTemplatesByGroupId: r,
    navigationTopChamp: a,
    dateTimeService: s,
    translationService: o,
    logger: p,
    lng: i,
  }) =>
    e.slice(0, t).reduce(
      (n, l) => {
        var d, u, _, M, T, g;
        const c = Ie.parseGameForDashboard({
            unparsedGameData: l,
            marketGroupTemplatesByGroupId: r,
            dateTimeService: s,
            translationService: o,
            logger: p,
            lng: i,
            navigationTopChamp: a,
          }),
          O = (d = n.groupsBySport[c.sportId]) != null ? d : [],
          I =
            (u = n.champsMap[c.champUniqKey]) != null
              ? u
              : ge(
                  fe.parseChampFromBettingGame({
                    navigationTopChamp: a,
                    game: c,
                  })
                );
        return (
          (I.gamesCount += 1),
          I.isLong || (I.isLong = (_ = c.isLong) != null ? _ : !1),
          I.isLong ||
            O.push(...Object.keys((M = c.marketGroups) != null ? M : [])),
          c.sportId === 4 &&
            (T = c.matchInfo) != null &&
            T.fieldType &&
            (I.fieldType ||
              ((I.name = `${I.name}. ${c.matchInfo.fieldType}`),
              (I.fieldType = c.matchInfo.fieldType)),
            I.fieldType &&
              I.fieldType !== c.matchInfo.fieldType &&
              (I.name = c.champName || "")),
          n.parsedGames.push(c),
          n.games.push(c, ...((g = c.subGames) != null ? g : [])),
          (n.champsMap[c.champUniqKey] = I),
          (n.groupsBySport[c.sportId] = O),
          n
        );
      },
      { parsedGames: [], games: [], champsMap: {}, groupsBySport: {} }
    ),
  Ae = async ({
    parsedGames: e,
    marketsNameType: t,
    T: r,
    betModelsManager: a,
  }) => {
    $_$();
    let s, o;
    const p = e.filter((n) => n.isLong);
    if (!p.length) return {};
    const i =
      (([s, o] = y(() =>
        Promise.all(
          p.map(async (n) => [
            n.id,
            await be(
              { betModelsManager: a, T: r },
              { markets: n.markets, marketsNameType: t }
            ),
          ])
        )
      )),
      (s = await s),
      o(),
      s);
    return Object.fromEntries(i);
  },
  Be = (e) => {
    var t;
    const r = (t = R[e]) != null ? t : [];
    return (r.length === 3 ? r : [r[0], 0, r[1]]).map((s) =>
      D({ groupId: e, typeId: s })
    );
  },
  Oe = (e) =>
    Me({
      ...e,
      isParam: !0,
      coef:
        (e != null && e.param) || (e == null ? void 0 : e.param) === 0
          ? String(e.param)
          : void 0,
    }),
  W = ({ groupId: e, gameTypeId: t, period: r }) =>
    V({
      marketList: [...new Array(3)].map(() => D({ groupId: e })),
      additionalMarkets: [],
      groupId: e,
      gameTypeId: t,
      period: r,
    }),
  Se = ({ markets: e, game: t, logger: r, groupId: a }) => {
    var s, o, p;
    const i = (s = R[a]) != null ? s : [],
      n = W({
        groupId: a,
        gameTypeId: t.typeId || 1,
        period: t.gamePeriodId || 0,
      }),
      l = Object.fromEntries(e.map((u) => [u.typeId, u])),
      d = [...i, 0, 0, 0].slice(0, 3).map((u) => l[u]);
    try {
      switch (e.length) {
        case 2:
          ([n.marketList[0], n.marketList[2]] = d),
            (((o = n.marketList[0]) != null && o.param) ||
              ((p = n.marketList[0]) == null ? void 0 : p.param) === 0) &&
              (n.marketList[1] = Oe(n.marketList[0]));
          break;
        case 3:
          n.marketList = d;
          break;
        default:
          r.error("что-то не так с маркетами", e, t);
      }
    } catch (u) {
      r.warn("dashboard parse full markets error.", u);
    }
    return n;
  },
  Ne = ({
    markets: e,
    logger: t,
    marketTypes: r,
    groupId: a,
    gameTypeId: s,
    period: o,
  }) => {
    const p = W({ groupId: a, gameTypeId: s, period: o });
    return r
      ? (e.forEach((i) => {
          const n = r.indexOf(i.typeId);
          n !== -1 &&
            (n >= 0 && n <= 2
              ? (p.marketList[n] = i)
              : t.error("market index goes beyond 3", e));
        }),
        p)
      : (t.error("нет карты для маркетов", e), p);
  },
  z = ({
    markets: e,
    game: t,
    logger: r,
    groupId: a,
    existedGroup: s,
    isValidMarketsCount: o,
  }) =>
    o
      ? Se({ markets: e, game: t, logger: r, groupId: a })
      : Ne({
          markets: e,
          logger: r,
          marketTypes: s,
          groupId: a,
          gameTypeId: t.typeId,
          period: t.gamePeriodId,
        }),
  J = (e) => {
    var t, r;
    const [a] = e,
      s = (t = a == null ? void 0 : a.groupId) != null ? t : 0,
      o = R[s],
      p = e.length === ((r = o == null ? void 0 : o.length) != null ? r : 3);
    return { groupId: s, existedGroup: o, isValidMarketsCount: p };
  },
  Pe = (e, t) => e.find((r) => r.groupId === t),
  Re = (e) => Object.values(ye(e, (t) => (t.param ? Math.abs(t.param) : ""))),
  Ce = (e) => {
    const t = [],
      a = e.filter(({ typeId: o }) => o === 7).slice(0, 2),
      s = e.filter(({ typeId: o }) => o === 8).slice(0, 2);
    for (let o = 0; o < a.length; o++) {
      const p = a[o],
        i = s.find(({ param: n }) =>
          (p == null ? void 0 : p.param) === void 0 ? !1 : n === p.param * -1
        );
      p && i && t.push([p, i]);
    }
    return t;
  },
  xe = (e) => {
    const t = [];
    return (
      e.forEach((r) => {
        var a, s;
        const o = (a = R[2]) != null ? a : [];
        ((s = r[0]) == null ? void 0 : s.groupId) === 2 && r.length > o.length
          ? t.push(...Ce(r))
          : t.push(r);
      }),
      t
    );
  },
  we = ({ game: e, groupId: t }) => {
    var r;
    const { additionalMarkets: a = [] } = e,
      s = Pe(a, t),
      o = Re(
        (r = s == null ? void 0 : s.additionalMarketsList) != null ? r : []
      );
    return xe(o);
  },
  De = ({ game: e, groupId: t, logger: r }) => {
    try {
      return e.additionalMarkets.length
        ? we({ game: e, groupId: t })
            .map((s) => {
              const {
                groupId: o,
                existedGroup: p,
                isValidMarketsCount: i,
              } = J(s);
              if (!(!i && j.includes(o)))
                return z({
                  markets: s,
                  game: e,
                  logger: r,
                  groupId: o,
                  existedGroup: p,
                  isValidMarketsCount: i,
                });
            })
            .filter(Boolean)
        : [];
    } catch (a) {
      r.warn("dashboard create additional markets error.", a);
    }
    return [];
  },
  Ve = ({ marketGroupsToRender: e, marketGroups: t, game: r, logger: a }) =>
    e
      .map((s) => {
        const o = Number(s),
          p = t[o] || Be(o);
        try {
          const { groupId: i, existedGroup: n, isValidMarketsCount: l } = J(p),
            d = z({
              markets: p,
              game: r,
              logger: a,
              groupId: i,
              existedGroup: n,
              isValidMarketsCount: l,
            });
          if (l && j.includes(i)) {
            const u = De({ game: r, groupId: i, logger: a });
            (d.additionalMarkets = u), (d.hasAdditionalMarkets = u.length > 1);
          }
          return d;
        } catch (i) {
          a.warn(`dashboard group ${o} parse fail`, i);
          return;
        }
      })
      .filter(Boolean),
  $e = () => $_$() && B(V({ marketList: [void 0, D(), void 0], groupId: 0 })),
  He = (e) =>
    $_$() && B(V({ marketList: [void 0, B(e), void 0], groupId: e.groupId })),
  qe = (e) =>
    new Array(Math.max(e.length, q)).fill(void 0).map((t, r) => {
      const a = e[r];
      return r >= q || !a ? $e() : He(a);
    }),
  Ue = ({ games: e, groupIdsBySportId: t, logger: r }) =>
    e.reduce((a, s) => {
      $_$();
      const o = s.isLong
        ? qe(s.markets)
        : Ve({
            marketGroupsToRender: t[s.sportId],
            marketGroups: { ...s.marketGroups },
            game: s,
            logger: r,
          });
      return (a[s.id] = B(o)), a;
    }, {}),
  nt = [ae, se, oe],
  U = {
    default: [1, 8, 17, 19, 2, 15, 62, 101, 2766],
    3: [101, 17, 2, 15, 62, 1, 2250, 8],
    13: [101, 17, 2, 15, 62, 1, 2250, 8],
  },
  it = 10,
  Ye = (e, [t, r]) => {
    var a;
    const s = Object.fromEntries(r.map((i) => [i.groupId, i])),
      p = ((i) => i.map((n) => s[n]).filter(Boolean))(
        (a = U[Number(t)]) != null ? a : U.default
      );
    return (
      (e[t] = [
        ...p,
        ...r
          .filter((i) => !p.includes(i))
          .sort((i, n) =>
            i.groupId === 0 ? 1 : n.groupId === 0 ? -1 : i.groupId - n.groupId
          ),
      ]),
      e
    );
  },
  je = (e) => {
    const t = Object.entries(e),
      r = {};
    return t.reduce((a, s) => Ye(a, s), r);
  },
  Fe = async (
    { groupIdsBySportId: e, marketsNameType: t },
    { betModelsManager: r, logger: a, T: s }
  ) => {
    $_$();
    let o, p;
    try {
      const i = Object.keys(e),
        n = async (d) => {
          $_$();
          let u, _;
          try {
            return (
              ([u, _] = y(() =>
                ve({ betModelsManager: r, logger: a, T: s }, Number(d), t)
              )),
              (u = await u),
              _(),
              u
            );
          } catch (M) {
            a.error("create dashboard market group by sport error", M);
            return;
          }
        },
        l = Object.fromEntries(
          (([o, p] = y(() =>
            Promise.all(
              i.map(async (d) => {
                $_$();
                let u, _;
                const T = (([u, _] = y(() => {
                  var g;
                  return Promise.all(((g = e[d]) != null ? g : []).map(n));
                })),
                (u = await u),
                _(),
                u).filter(Boolean);
                return [d, T];
              })
            )
          )),
          (o = await o),
          p(),
          o)
        );
      return je(l);
    } catch (i) {
      a.error("create dashboard market group by sport error", i);
      return;
    }
  },
  Ke = ({
    groupIdsBySportId: e,
    marketsNameType: t,
    T: r,
    betModelsManager: a,
    logger: s,
  }) =>
    Fe(
      { groupIdsBySportId: e, marketsNameType: t },
      { betModelsManager: a, logger: s, T: r }
    ),
  Ze = async ({
    data: e,
    marketsNameType: t,
    responseSliceCount: r,
    logger: a,
    betModelsManager: s,
    T: o,
    navigationTopChamp: p,
    dateTimeService: i,
    translationService: n,
    lng: l,
  }) => {
    $_$();
    let d, u;
    try {
      if (!e.Success) throw new Error("response data is null");
      const _ = P(e) && Y(e.Value) ? e.Value.filter(P) : [];
      _.forEach(F);
      const M =
        (([d, u] = y(() =>
          K({ unparsedGames: _, betModelsManager: s, marketsNameType: t })
        )),
        (d = await d),
        u(),
        d);
      ([d, u] = y(() => $_$() && $(0))), await d, u();
      const {
          parsedGames: T,
          games: g,
          champsMap: c,
          groupsBySport: O,
        } = Z({
          unparsedGames: _,
          responseSliceCount: r,
          marketGroupTemplatesByGroupId: M,
          navigationTopChamp: p,
          dateTimeService: i,
          translationService: n,
          logger: a,
          lng: l,
        }),
        I = Le(O);
      ([d, u] = y(() => $_$() && $(0))), await d, u();
      const Q = m.cleanMarkets
          ? {}
          : Ue({ games: g, groupIdsBySportId: I, logger: a }),
        [X, ee = {}] =
          (([d, u] = y(() =>
            Promise.all([
              Ae({
                parsedGames: T,
                marketsNameType: t,
                T: o,
                betModelsManager: s,
              }),
              m.cleanMarkets
                ? void 0
                : Ke({
                    groupIdsBySportId: I,
                    marketsNameType: t,
                    T: o,
                    betModelsManager: s,
                    logger: a,
                  }),
            ])
          )),
          (d = await d),
          u(),
          d),
        te = Object.values(c);
      return {
        games: g,
        champs: te,
        marketsByGameId: Q,
        marketGroupsBySportId: ee,
        longMarketGroupsByGameId: X,
      };
    } catch (_) {
      return (
        a.warn("response data is null", { error: _ }),
        {
          games: [],
          champs: [],
          marketsByGameId: {},
          marketGroupsBySportId: {},
          longMarketGroupsByGameId: {},
          hasError: !0,
        }
      );
    }
  },
  We = ({ games: e }) =>
    e.reduce((t, r) => {
      $_$();
      var a;
      return (t[r.id] = B((a = r.marketGroups) != null ? a : {})), t;
    }, {}),
  ze = async ({
    data: e,
    marketsNameType: t,
    logger: r,
    betModelsManager: a,
    navigationTopChamp: s,
    dateTimeService: o,
    translationService: p,
    lng: i,
  }) => {
    $_$();
    let n, l;
    const d = P(e) && Y(e.Value) ? e.Value.filter(P) : [];
    d.forEach(F);
    const u =
        (([n, l] = y(() =>
          K({ unparsedGames: d, betModelsManager: a, marketsNameType: t })
        )),
        (n = await n),
        l(),
        n),
      {
        parsedGames: _,
        games: M,
        champsMap: T,
      } = Z({
        unparsedGames: d,
        marketGroupTemplatesByGroupId: u,
        navigationTopChamp: s,
        dateTimeService: o,
        translationService: p,
        logger: r,
        lng: i,
      }),
      g = m.cleanMarkets ? {} : We({ games: _ }),
      c = Object.values(T);
    return { games: M, champs: c, marketsByGameId: g };
  };
var Je = Object.defineProperty,
  Qe = (e, t, r) =>
    t in e
      ? Je(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  k = (e, t, r) => Qe(e, typeof t != "symbol" ? t + "" : t, r);
class Xe {
  constructor(t) {
    k(this, "requests1x2"),
      k(this, "asiaRequests1x2"),
      k(this, "requestManager"),
      k(this, "limitCountItemsOnSSR", 10),
      k(this, "T"),
      k(this, "siteConfig"),
      k(this, "dateTimeService"),
      (this.requestManager = new Te(t)),
      (this.T = t.$T),
      (this.siteConfig = t.$siteConfig),
      (this.dateTimeService = t.$dateTimeService);
    const r = (s, o) =>
        Ze({
          betModelsManager: t.$betModelsManager,
          logger: t.$logger,
          T: this.T,
          data: s,
          marketsNameType: o == null ? void 0 : o.marketsNameType,
          responseSliceCount: void 0,
          navigationTopChamp: this.siteConfig.navigationTopChamp,
          dateTimeService: this.dateTimeService,
          translationService: this.T,
          lng: this.siteConfig.lng,
        }),
      a = (s, o) =>
        ze({
          navigationTopChamp: this.siteConfig.navigationTopChamp,
          betModelsManager: t.$betModelsManager,
          logger: t.$logger,
          data: s,
          marketsNameType: o == null ? void 0 : o.marketsNameType,
          dateTimeService: this.dateTimeService,
          translationService: this.T,
          lng: this.siteConfig.lng,
        });
    (this.requests1x2 = {
      [f.HOME_LIVE]: { method: N(m), parser: r },
      [f.HOME_LINE]: { method: S(m), parser: r },
      [f.TEAM_LINE]: { method: S(m), parser: r },
      [f.BETSONYOUR_LIVE]: { method: Ee(m), parser: r },
      [f.BETSONYOUR_LINE]: { method: ke(m), parser: r },
      [f.MARBLE_LIVE]: { method: N(m), parser: r },
      [f.TOPGAME_LIVE]: { method: N(m), parser: r },
      [f.TOPGAME_LINE]: { method: S(m), parser: r },
      [f.RECOMMENDATION_LIVE]: { method: N(m), parser: r },
      [f.RECOMMENDATION_LINE]: { method: S(m), parser: r },
    }),
      (this.asiaRequests1x2 = {
        [L.ASIAN_HOME_LINE]: { method: x(m), parser: a },
        [L.ASIAN_TEAM_LINE]: { method: x(m), parser: a },
        [L.ASIAN_HOME_LIVE]: { method: C(m), parser: a },
        [L.ASIAN_BETSONYOUR_LINE]: { method: x(m), parser: a },
        [L.ASIAN_BETSONYOUR_LIVE]: { method: C(m), parser: a },
        [L.ASIAN_MARBLE_LIVE]: { method: C(m), parser: a },
      });
  }
  load1x2(t, r, a) {
    return this.requestManager.load({
      type: t,
      api: this.requests1x2[t],
      params: r,
      options: a,
    });
  }
  asiaLoad1x2(t, r, a) {
    return this.requestManager.load({
      type: t,
      api: this.asiaRequests1x2[t],
      params: r,
      options: a,
    });
  }
  cancelAllRequest(t) {
    this.requestManager.cancelAllRequest(t);
  }
}
const pt = () => {
    $_$();
    const e = ne(),
      t = ie(),
      r = pe(),
      a = ue(),
      s = Ge(),
      o = de(),
      p = le(),
      [{ id: i }, n = {}] = ce(-1004, 515);
    return new Xe({
      $httpModule: e,
      $clientHeaders: t,
      $cookies: r,
      $logger: a,
      $betModelsManager: s,
      $T: o,
      $siteConfig: { lng: i, navigationTopChamp: n },
      $dateTimeService: p,
    });
  },
  ut = ({ game: e, secondTeam: t }) => {
    $_$();
    const r = b(() =>
        $_$() && h(t) ? h(e).secondOpponentName : h(e).firstOpponentName
      ),
      a = b(() => {
        $_$();
        const { matchInfo: n } = h(e),
          l = h(t)
            ? n == null
              ? void 0
              : n.secondOpponentSeed
            : n == null
            ? void 0
            : n.firstOpponentSeed;
        return l ? `(${l})` : "";
      }),
      s = b(() =>
        $_$() && h(t) ? h(e).secondOpponentLogo : h(e).firstOpponentLogo
      ),
      o = b(() => {
        $_$();
        var n, l;
        return String(
          h(t)
            ? (n = h(e).secondOpponentCountryId) != null
              ? n
              : ""
            : (l = h(e).firstOpponentCountryId) != null
            ? l
            : ""
        );
      }),
      p = b(() =>
        $_$() && h(t)
          ? h(e).secondOpponentLogoFileNames
          : h(e).firstOpponentLogoFileNames
      ),
      i = b(() => {
        $_$();
        var n, l;
        return h(t)
          ? (n = h(e).secondOpponentIds) == null
            ? void 0
            : n.length
          : (l = h(e).firstOpponentIds) == null
          ? void 0
          : l.length;
      });
    return {
      label: r,
      seed: a,
      image: s,
      images: p,
      countryIco: o,
      opponentsCount: i,
    };
  },
  dt = () => {
    $_$();
    const e = () => {
        $_$();
        const r = he(-1004);
        return new _e(r.id);
      },
      { inject: t } = me();
    try {
      return t("translation");
    } catch (r) {
      return e();
    }
  };
export {
  L as DASHBOARD_TYPE_MAP,
  Xe as DashboardApi,
  Ae as getDashboardParsedLongMarketGroupsByGameId,
  Ke as getDashboardParsedMarketGroupsBySportId,
  Ue as getDashboardParsedMarketsByGameId,
  Le as getGroupIdsBySportId,
  st as isAfter,
  ot as isBefore,
  at as min,
  Ze as parseDashboardResponse,
  je as sortDashboardGroups,
  it as ssrGamesLimit,
  nt as timeSort,
  pt as useDashboardApi,
  dt as useDatePickerTranslation,
  ut as useIcoTeamInfo,
};
