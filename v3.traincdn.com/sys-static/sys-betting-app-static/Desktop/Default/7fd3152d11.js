import $_$ from "./$_$.js";
$_$();
import {
  trimChar_trimChar as D,
  execAsync as y,
  reactivity_esmBundler_unref as M,
  index_useT as V,
  index_useLogger as S,
  reactivity_esmBundler_ref as P,
  runtimeCore_esmBundler_computed as A,
  runtimeCore_esmBundler_onMounted as H,
  runtimeCore_esmBundler_watch as C,
  bettingType_BettingType as g,
  BettingPageType as L,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  groupHeaderTextByGroupId as U,
  DEFAULT_TITLE as b,
  findDashboardGroupTitle as G,
  marketHintByMarketTypeId as Y,
  marketGroupHintsByGroupId as K,
  marketTypesByGroupId as F,
  LONG_MARKET_LIMIT as v,
  getDrawingMarketTitle as x,
  DrawingMarket as $,
  useBetModelsManager as j,
  GROUP_IDS_WITH_SPECIAL_SIGN as W,
} from "./entry-50afb6f36c.js";
const X = (...r) =>
    $_$() && D(r.filter(Boolean).join("/").replace(/[/]+/g, "/"), "/"),
  R = async ({ betModelsManager: r }, t, o) =>
    r.getGroupTemplateById({ groupId: t, marketsNameType: o }),
  q = (r, { T: t }) => {
    const o = U[r];
    return o ? t(o) : void 0;
  },
  h = ({ T: r }, { groupId: t, name: o }) => {
    const e = q(t, { T: r }),
      n = [];
    return (
      (n[1] = e != null ? e : o),
      {
        groupTitles: n,
        groupHints: [],
        fullTitle: o != null ? o : e,
        groupId: t,
      }
    );
  },
  z = ({ logger: r, T: t }, o, e) => {
    switch (e.length) {
      case 2:
        return [
          G(e[0], { logger: r, T: t }),
          o.groupTitles[1],
          G(e[1], { logger: r, T: t }),
        ];
      case 3:
        return e.map((n) => G(n, { logger: r, T: t }));
      default:
        return (
          r.error(
            "dashboard market group titles not found for market types:",
            e
          ),
          new Array(3).fill(b)
        );
    }
  },
  J = ({ T: r }, t, o) => {
    var e, n;
    const _ = o.map((l, u) => {
      var i;
      const p = Y[l];
      return p ? r(p) : (i = t.groupTitles[u]) != null ? i : "";
    });
    if (_.length === 2) {
      const l = K[t.groupId],
        u = l
          ? r(l)
          : (n = (e = t.fullTitle) != null ? e : t.groupTitles[1]) != null
          ? n
          : "";
      _.splice(1, 0, u);
    }
    return _;
  },
  Q = async ({ betModelsManager: r, logger: t, T: o }, e, n) => {
    $_$();
    var _, l;
    let u, i;
    try {
      const p =
        (([u, i] = y(() => R({ betModelsManager: r }, e, n))),
        (u = await u),
        i(),
        u);
      if (!p) throw new Error(`not found groupTemplateModel for ${e} groupId`);
      const s = (_ = p == null ? void 0 : p.groupId) != null ? _ : e,
        I = p == null ? void 0 : p.name,
        O = (l = p == null ? void 0 : p.markets) != null ? l : [],
        d = h({ T: o }, { groupId: s, name: I }),
        a = F[s],
        c = Object.values(O).map(({ templateTypeId: E }) => E),
        T = a != null ? a : c;
      return (
        (d.groupTitles = z({ logger: t, T: o }, d, T)),
        (d.groupHints = J({ T: o }, d, T)),
        d
      );
    } catch (p) {
      throw (t.error(`dashboard market group ${e} load error`, p), p);
    }
  },
  Z = async ({
    groupId: r,
    betModelsManager: t,
    marketsNameType: o,
    typeId: e,
  }) => {
    $_$();
    var n, _;
    let l, u;
    const i =
      (([l, u] = y(() => R({ betModelsManager: t }, r, o))),
      (l = await l),
      u(),
      l);
    return (_ =
      (n = i == null ? void 0 : i.markets[e]) == null
        ? void 0
        : n.nameTemplate) != null
      ? _
      : "";
  },
  rr = async (r, t, o) => {
    $_$();
    let e, n;
    const { playerName: _, typeId: l, groupId: u } = r;
    return {
      name:
        _ ||
        (([e, n] = y(() =>
          Z({ typeId: l, groupId: u, marketsNameType: t, betModelsManager: o })
        )),
        (e = await e),
        n(),
        e),
      groupId: u,
    };
  },
  tr = ({ T: r }) => h({ T: r }, { groupId: 0, name: b }),
  er = async (
    { betModelsManager: r, T: t },
    { markets: o, marketsNameType: e }
  ) => {
    $_$();
    let n, _;
    const l = o.slice(0, v),
      u =
        (([n, _] = y(() =>
          Promise.all(
            l.map(async (p) => {
              $_$();
              let s, I;
              const O =
                  (([s, I] = y(() => rr(p, e, r))), (s = await s), I(), s),
                d = h({ T: t }, O);
              return (
                (d.groupHints = d.groupTitles.map((a) =>
                  a && a !== b ? a : ""
                )),
                d
              );
            })
          )
        )),
        (n = await n),
        _(),
        n),
      i = u.length;
    return (
      i < v && u.push(...new Array(v - i).fill(void 0).map(() => tr({ T: t }))),
      u
    );
  },
  k = 0,
  or = 1,
  B = 1,
  nr = 2,
  sr = 1,
  ar = 2,
  lr = 0,
  ur = ({ isLong: r, marketNameGroups: t, marketGroups: o, T: e }) =>
    $_$() &&
    M(t).flatMap((n, _) => {
      var l;
      const u = [],
        i = r
          ? new Array(
              (l = o == null ? void 0 : o[n.groupId]) == null ? void 0 : l[_]
            )
          : o[n.groupId];
      return !i || Number(n.groupId) === 0
        ? []
        : (i
            .slice()
            .sort((s, I) => s.typeId - I.typeId)
            .forEach((s, I) => {
              var O, d, a, c;
              if (
                ((O = s == null ? void 0 : s.coef) != null ? O : "-") !== "-" &&
                (!(s != null && s.isParam) || I !== B)
              ) {
                const E = I === B && i.length === ar ? nr : I,
                  f = x({
                    title: n.groupTitles[r ? sr : E],
                    groupTitle: n.groupTitles[or],
                    ...(E !== B ? { param: s == null ? void 0 : s.param } : {}),
                    groupId:
                      (d = s == null ? void 0 : s.groupId) != null ? d : k,
                    typeId: (a = s == null ? void 0 : s.typeId) != null ? a : k,
                    T: e,
                  });
                u.push(
                  new $({
                    key: `market-${E}-${s == null ? void 0 : s.groupId}${_}`,
                    type: s ? 1 : 0,
                    title: f,
                    coefByView: String(
                      (c = s == null ? void 0 : s.coefByView) != null ? c : ""
                    ),
                    ...(E === lr ? { coef: s == null ? void 0 : s.coef } : {}),
                    market: s,
                  })
                );
              }
            }),
          u);
    }),
  ir = (r) => {
    $_$();
    const t = V(),
      o = j(),
      e = S(),
      n = P([]),
      _ = A(() => {
        $_$();
        var a;
        return !!((a = M(r)) != null && a.isLong);
      }),
      l = A(() => $_$() && M(r).marketGroups),
      u = A(() => $_$() && M(r).numberOfMarkets),
      i = async (a) => {
        $_$();
        let c, T;
        try {
          return (
            ([c, T] = y(() =>
              Q({ betModelsManager: o, logger: e, T: t }, Number(a))
            )),
            (c = await c),
            T(),
            c
          );
        } catch (E) {
          e.error("create dashboard market group by sport error", E);
          return;
        }
      },
      p = async (a) => {
        $_$();
        let c, T;
        try {
          return (
            ([c, T] = y(() =>
              er({ betModelsManager: o, T: t }, { markets: a != null ? a : [] })
            )),
            (c = await c),
            T(),
            c
          );
        } catch (E) {
          return e.error("create long market groups error", E), [];
        }
      },
      s = async () => {
        $_$();
        var a;
        let c, T;
        if (M(r).isLong)
          n.value =
            (([c, T] = y(() => {
              $_$();
              var E;
              return p((E = M(r).markets) != null ? E : []);
            })),
            (c = await c),
            T(),
            c);
        else {
          const E = Object.keys((a = M(l)) != null ? a : {}),
            f =
              (([c, T] = y(() => Promise.all(E.map((w) => i(w))))),
              (c = await c),
              T(),
              c);
          n.value = f.filter(Boolean);
        }
      },
      I = A(() => {
        $_$();
        var a;
        return ur({
          isLong: M(_),
          marketNameGroups: M(n),
          marketGroups: (a = M(l)) != null ? a : {},
          T: t,
        });
      }),
      O = A(() => {
        $_$();
        var a;
        return !!(
          Object.keys((a = M(l)) != null ? a : {}).length && !M(I).length
        );
      }),
      d = A(() => $_$() && M(I).filter((a) => a.type !== 0));
    return (
      H(s),
      C(l, s),
      {
        drawingMarketsExcludeEmpty: d,
        drawingMarketsLoading: O,
        numberOfMarkets: u,
      }
    );
  },
  m = (r, t) => {
    const o = [r, t].filter((e) => !!e);
    return X(...o);
  },
  N = {
    HOME_LIVE: m(L.HOME, g.LIVE),
    HOME_LINE: m(L.HOME, g.LINE),
    BETSONYOUR_LIVE: m(L.BETSONYOUR, g.LIVE),
    BETSONYOUR_LINE: m(L.BETSONYOUR, g.LINE),
    MARBLE_LIVE: m(L.MARBLE, g.LIVE),
    MARBLE_LINE: m(L.MARBLE, g.LINE),
    TEAM_LINE: m(L.TEAM, g.LINE),
    TEAM_LIVE: m(L.TEAM, g.LIVE),
    TOPGAME_LIVE: m(L.TOPGAME, g.LIVE),
    TOPGAME_LINE: m(L.TOPGAME, g.LINE),
    RECOMMENDATION_LIVE: m(L.RECOMMENDATION, g.LIVE),
    RECOMMENDATION_LINE: m(L.RECOMMENDATION, g.LINE),
  },
  pr = [
    N.HOME_LIVE,
    N.BETSONYOUR_LIVE,
    N.MARBLE_LIVE,
    N.TEAM_LIVE,
    N.TOPGAME_LIVE,
    N.RECOMMENDATION_LIVE,
  ],
  Er = ({
    marketList: r,
    groupId: t,
    additionalMarkets: o,
    gameTypeId: e,
    period: n,
  }) => ({
    marketList: r,
    groupId: t,
    additionalMarkets: o,
    hasAdditionalMarkets: !1,
    specialSign: W.includes(t),
    gameTypeId: e,
    period: n,
  });
export {
  pr as BETTING_STORE_TYPE_LIVE_LIST,
  N as BETTING_STORE_TYPE_MAP,
  m as compileBettingStoreType,
  X as concatStoreNames,
  Er as createDashboardMarketGroup,
  Q as createGroup,
  er as createLongGroups,
  ir as useMarketsData,
};
