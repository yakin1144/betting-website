import $_$ from "./$_$.js";
$_$();
import {
  apiMethodFactory as r,
  browser_genRefParam as i,
  browser_genLngParam as n,
  browser_genTypedDateParam as t,
  browser_DATE_TO as c,
  browser_DATE_FROM as d,
  browser_LNG as U,
  browser_genTextParam as Y,
  bettingType_BettingType as F,
  index_useT as oe,
  index_useLogger as le,
  index_useCookies as ie,
  index_useHttpModule as ne,
  useGlobalStore as pe,
  index_useClientHeaders as ue,
  index_useDateTimeService as ce,
  index_getConfigs as de,
  reactivity_esmBundler_unref as R,
  execAsync as q,
  HttpClient as K,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { BETTING_STORE_TYPE_MAP as me } from "./7fd3152d11.js";
import {
  genGroupIdParam as u,
  genGlobalChampId as ge,
  genCountryParam as p,
  defaultParamsWrapper as j,
  partner as he,
  vers as ye,
  dates as fe,
  language as ve,
  isOnlySports as be,
  isShowAll as Se,
  genHasBroadcastParam as y,
  genCyberTypeParam as _,
  genCyberFlagParam as J,
  genSubSportIdsParam as Q,
  genSportIdsParam as H,
  genChampIdParam as z,
  genGameIdParam as X,
  genChampIdsParam as _e,
  genCountParam as ee,
  isDef as Te,
  RequestManager as Ce,
  useMagickMock as Ie,
  liveGlobalChamp1x2ZipApi as ke,
  lineGlobalChamp1x2ZipApi as Ve,
  useTopEvents as xe,
  useBetModelsManager as we,
} from "./entry-50afb6f36c.js";
import {
  parseDashboardResponse as Me,
  useDashboardApi as Oe,
} from "./58a21526ee.js";
j(
  r({
    url: "/service-api/DbService/Translate/ViewGameResults1xZoneGroup",
    expectedParams: { language: ve, dates: fe, vers: ye, partner: he },
  })
);
j(
  r({
    url: "/web-api/results/getmain",
    expectedParams: {
      ...t({ key: d, isStringType: !0 }),
      ...t({ key: c, isStringType: !0 }),
      isShowAll: Se,
      isOnlySports: be,
    },
    overrideParams(o, e) {
      var s, a;
      (o.isShowAll = (s = e == null ? void 0 : e.isShowAll) != null ? s : !1),
        (o.isOnlySports =
          (a = e == null ? void 0 : e.isOnlySports) != null ? a : !1);
    },
  })
);
r({
  url: "/service-api/result/web/api/v1/sports",
  expectedParams: {
    ...p(),
    ...J(),
    ..._(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n(),
    ...y({ apiKey: "presenceOfVideoBroadcast", defaultValue: !1 }),
    ...i({ defaultValue: 0 }),
  },
});
r({
  url: "/service-api/result/web/api/v2/sports",
  expectedParams: {
    ...p(),
    ...J(),
    ..._(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n({ apiKey: U, defaultValue: null }),
    ...y({ apiKey: "presenceOfVideoBroadcast", defaultValue: !1 }),
    ...i({ defaultValue: 0 }),
  },
});
r({
  url: "/service-api/result/web/api/v1/champs",
  expectedParams: {
    ...p(),
    ..._(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n(),
    ...y({ apiKey: "presenceOfVideoBroadcast", defaultValue: !1 }),
    ...i({ defaultValue: 0 }),
    ...H(),
    ...Q(),
  },
});
r({
  url: "/service-api/result/web/api/v2/champs",
  expectedParams: {
    ...p(),
    ..._(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n({ apiKey: U, defaultValue: null }),
    ...y({ apiKey: "presenceOfVideoBroadcast", defaultValue: !1 }),
    ...i({ defaultValue: 0 }),
    ...H(),
    ...Q(),
  },
});
r({
  url: "/service-api/result/web/api/v1/games",
  expectedParams: {
    ...z(),
    ...p(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n(),
    ...y({ apiKey: "presenceOfVideoBroadcast", defaultValue: !1 }),
    ...i({ defaultValue: 0 }),
  },
});
r({
  url: "/service-api/result/web/api/v3/games",
  expectedParams: {
    ...z(),
    ...p(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n({ apiKey: U, defaultValue: null }),
    ...y({ apiKey: "presenceOfVideoBroadcast", defaultValue: !1 }),
    ...i({ defaultValue: 0 }),
  },
});
r({
  url: "/service-api/result/web/api/v1/champgames",
  expectedParams: { ...z(), ...p(), ..._(), ...n(), ...i() },
});
r({
  url: "/service-api/result/web/api/v1/subgames",
  expectedParams: {
    ...p(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...X(),
    ...u(),
    ...n(),
    ...i({ defaultValue: 0 }),
  },
});
r({
  url: "/service-api/result1xzone/web/api/v1/sports",
  expectedParams: {
    ...p(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n(),
    ...y({ apiKey: "presenceOfVideoBroadcast", defaultValue: !1 }),
    ...i({ defaultValue: 0 }),
  },
});
r({
  url: "/service-api/result1xzone/web/api/v1/champs",
  expectedParams: {
    ...p(),
    ..._(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n(),
    ...i({ defaultValue: 0 }),
    ...H(),
  },
});
r({
  url: "/service-api/result1xzone/web/api/v1/games",
  expectedParams: {
    ..._e(),
    ...p(),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n(),
    ...y({ apiKey: "presenceOfVideoBroadcast", defaultValue: !1 }),
    ...i({ defaultValue: 0 }),
  },
});
r({
  url: "/service-api/result1xzone/web/api/v1/game",
  expectedParams: { ...p(), ...X(), ...u(), ...n(), ...i({ defaultValue: 0 }) },
});
r({
  url: "/service-api/result/web/api/v1/search",
  expectedParams: {
    ...p(),
    ...ee({ defaultValue: 50 }),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n(),
    ...y({ apiKey: "hasVideo", defaultValue: !1 }),
    ...i({ defaultValue: 0 }),
    ...Y(),
  },
});
r({
  url: "/service-api/result1xzone/web/api/v1/search",
  expectedParams: {
    ...p(),
    ...ee({ defaultValue: 50 }),
    ...t({ key: d }),
    ...t({ key: c }),
    ...u(),
    ...n(),
    ...i({ defaultValue: 0 }),
    ...Y(),
  },
});
const Pe = r({
    url: "/service-api/result/web/api/v1/gamesByGlobalChamp",
    expectedParams: {
      ...p({ defaultValue: 1 }),
      ...ge(),
      ...n(),
      ...i(),
      ...u(),
    },
  }),
  W = 225,
  N = (o) => {
    const e = parseInt(o, 10);
    return Number.isNaN(e) ? "0" : e.toString();
  },
  Le = (o, e, s) =>
    !Te(e.items) || e.items.length === 0
      ? []
      : e.items
          .filter((a) => {
            var l, m;
            return (
              a.champId === o &&
              ((l = a.opp1Ids) == null ? void 0 : l.length) === 1 &&
              ((m = a.opp2Ids) == null ? void 0 : m.length) === 1
            );
          })
          .map((a) => {
            var l, m, V, x, w, M, O, T, C, P, L, D, I, E, v, B;
            const $ = s.getShortDateWithNumericMonth(a.dateStart),
              A = a.score.split("(")[0].trim().split(":"),
              g = A[0].split("-").length === 2 ? A[0].split("-") : A;
            return {
              id: (l = a.id) != null ? l : -1,
              gameId: (m = a.id) != null ? m : -1,
              firstOpponentName: (V = a.opp1) != null ? V : "",
              secondOpponentName: (x = a.opp2) != null ? x : "",
              firstOpponentId:
                (M = (w = a.opp1Ids) == null ? void 0 : w[0]) != null ? M : 0,
              secondOpponentId:
                (T = (O = a.opp2Ids) == null ? void 0 : O[0]) != null ? T : 0,
              firstOpponentLogo:
                (P = (C = a.opp1Images) == null ? void 0 : C[0]) != null
                  ? P
                  : "",
              secondOpponentLogo:
                (D = (L = a.opp2Images) == null ? void 0 : L[0]) != null
                  ? D
                  : "",
              firstOpponentCountryId:
                (E = (I = a.opp1CountryIds) == null ? void 0 : I[0]) != null
                  ? E
                  : W,
              secondOpponentCountryId:
                (B = (v = a.opp2CountryIds) == null ? void 0 : v[0]) != null
                  ? B
                  : W,
              isGameOver: !0,
              firstOpponentScoreLabel: N(g[0]),
              firstOpponentFullScore: N(g[0]),
              secondOpponentScoreLabel: N(g[1]),
              secondOpponentFullScore: N(g[1]),
              startTimestamp: a.dateStart * 1e3,
              startUnixTimestamp: a.dateStart,
              startShortDateFormatted: $,
              dateMonth: $,
              hasScores: !0,
              statisticStatus: 1,
              sportId: 1,
              permanentId: a.id,
              isLive: !1,
              isDummy: !1,
              isSubGame: !1,
              hasSubGame: !!a.hasSubGame,
              subGamesCount: 0,
            };
          })
          .sort((a, l) => a.startTimestamp - l.startTimestamp);
var De = Object.defineProperty,
  Ee = (o, e, s) =>
    e in o
      ? De(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (o[e] = s),
  f = (o, e, s) => Ee(o, typeof e != "symbol" ? e + "" : e, s);
class Ae {
  constructor(e) {
    f(this, "requests1x2"),
      f(this, "requestManager"),
      f(this, "limitCountItemsOnSSR", 10),
      f(this, "T"),
      f(this, "dateTimeService"),
      f(this, "magickMock"),
      f(this, "siteConfig"),
      (this.requestManager = new Ce(e)),
      (this.T = e.$T),
      (this.dateTimeService = e.$dateTimeService),
      (this.magickMock = Ie(e.$cookies)),
      (this.siteConfig = e.$siteConfig);
    const s = (a, l) =>
      Me({
        betModelsManager: e.$betModelsManager,
        logger: e.$logger,
        T: this.T,
        data: a,
        marketsNameType: l == null ? void 0 : l.marketsNameType,
        responseSliceCount: void 0,
        navigationTopChamp: e.$siteConfig.navigationTopChamp,
        dateTimeService: this.dateTimeService,
        translationService: this.T,
        lng: e.$siteConfig.lng,
      });
    this.requests1x2 = {
      [F.LINE]: { method: Ve, parser: s },
      [F.LIVE]: {
        method: ke,
        parser: async (a) =>
          s({ ...a, ...(await this.magickMock).GlobalChamp1x2 }),
      },
    };
  }
  async load(e, s, a) {
    return this.requestManager.load({
      type: e,
      api: this.requests1x2[e],
      params: s,
      options: a,
    });
  }
  async loadResult(e, s) {
    return this.requestManager.load({
      type: "",
      api: { method: Pe, parser: (a) => Le(s, a, this.dateTimeService) },
      params: e,
    });
  }
  cancelAllRequest() {
    this.requestManager.cancelAllRequest();
  }
}
const $e = () => {
  $_$();
  const o = oe(),
    e = le(),
    s = ie(),
    a = ne(),
    { routeEvent: l } = xe(),
    m = pe(),
    V = Oe(),
    x = ue(),
    w = ce(),
    M = we(),
    [O, T, C, P, L, D = {}] = de(-1012, -1001, -1e3, 336, -1004, 515),
    I = O.id,
    E = { lng: L.id, navigationTopChamp: D },
    v = new Ae({
      $httpModule: a,
      $clientHeaders: x,
      $cookies: s,
      $logger: e,
      $siteConfig: E,
      $T: o,
      $dateTimeService: w,
      $betModelsManager: M,
    });
  return {
    topEventsDashboardLoad: async ({
      bettingType: g,
      topEventId: k,
      topEventChampIds: b,
    }) => {
      $_$();
      let h, S;
      try {
        const G = {
            globalChampId: k != null ? k : R(l).id,
            count: 50,
            lng: m.getLanguage,
            coefViewId: m.getCoefViewId,
            country: I,
            userId: m.userId,
            partner: C,
            countryFirst: P,
            groupId: T,
            champs: b != null ? b : R(l).champIds,
          },
          Z = s.get("testChampId");
        if (Z && g === F.LIVE) {
          const { status: se, data: re } =
            (([h, S] = q(() =>
              V.load1x2(
                me.HOME_LIVE,
                { ...G, sports: [1], champs: [Z] },
                { marketsNameType: m.marketsNameType }
              )
            )),
            (h = await h),
            S(),
            h);
          switch (se) {
            case K.STATUS_SUCCESS:
              return re;
          }
        }
        const { status: ae, data: te } =
          (([h, S] = q(() =>
            v.load(g, G, { marketsNameType: m.marketsNameType })
          )),
          (h = await h),
          S(),
          h);
        switch (ae) {
          case K.STATUS_SUCCESS:
            return te;
        }
      } catch (G) {
        e.error("topEventsDashboardLoad: ", G);
      }
    },
    topEventsDashboardLoadResult: async () => {
      $_$();
      let g, k;
      try {
        const b = {
            globalChampId: R(l).id,
            lng: m.getLanguage,
            ref: C,
            groupId: T,
            country: I,
          },
          { status: h, data: S } =
            (([g, k] = q(() => $_$() && v.loadResult(b, R(l).champIds[0]))),
            (g = await g),
            k(),
            g);
        switch (h) {
          case K.STATUS_SUCCESS:
            return S;
        }
      } catch (b) {
        e.error("topEventsDashboardLoadResult: ", b);
      }
    },
    cancelAllRequest: async () => {
      v.cancelAllRequest();
    },
  };
};
export { W as UNNAMED_COUNTRY_ID, $e as useTopEventsDashboardLoad };
