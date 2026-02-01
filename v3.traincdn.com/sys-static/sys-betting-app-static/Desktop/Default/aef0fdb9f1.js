import $_$ from "./$_$.js";
$_$();
import {
  getDrawingMarketTitle as D,
  DrawingMarket as O,
} from "./entry-50afb6f36c.js";
import {
  index_useLogger as C,
  reactivity_esmBundler_shallowRef as h,
  runtimeCore_esmBundler_computed as f,
  reactivity_esmBundler_unref as r,
  index_useT as T,
  reactivity_esmBundler_ref as j,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useDashboardStore as L } from "./f2a7591ae9.js";
import {
  defineDynamicBettingStore as E,
  useBettingStateInjector as N,
} from "./9de70556bb.js";
import { sortDashboardGroups as P } from "./58a21526ee.js";
import { useDashboardAnalytics as R } from "./88fe5c8d91.js";
const V = E("dashboardSortMarketsStore", ({ bettingType: I, pageType: b }) => {
    $_$();
    const M = C(),
      { marketsByGameId: _, marketGroupsBySportId: k } = L({
        bettingType: I,
        pageType: b,
      }),
      g = h({}),
      u = h([]),
      n = f(() =>
        $_$() && Object.keys(r(g)).length
          ? Object.fromEntries(
              Object.entries(r(k)).map(([s, a]) => {
                $_$();
                var e;
                const l = (e = r(g)[s]) != null ? e : {};
                return [
                  s,
                  a
                    .map((o, i) => {
                      var c;
                      const t = (c = l[o.groupId]) != null ? c : i;
                      return { group: o, index: t };
                    })
                    .sort((o, i) => o.index - i.index)
                    .map(({ group: o }) => o),
                ];
              })
            )
          : r(k)
      ),
      p = f(() => $_$() && P(r(n)));
    return {
      sortedMarketsByGameId: f(() =>
        $_$() && r(u).length
          ? Object.fromEntries(
              Object.entries(r(_)).map(
                ([s, a]) =>
                  $_$() && [
                    s,
                    r(u).reduce((e, l) => {
                      var o, i;
                      if (Number(s) !== l.gameId) return e;
                      const c = e.find((m) => m.groupId === l.groupId),
                        t =
                          (o = c == null ? void 0 : c.additionalMarkets) == null
                            ? void 0
                            : o.find((m) => {
                                var v;
                                return (
                                  ((v = m.marketList[1]) == null
                                    ? void 0
                                    : v.id) === l.marketId
                                );
                              });
                      if (!t) return e;
                      const d = e.findIndex((m) => m.groupId === t.groupId);
                      return d === -1
                        ? (M.error(
                            `error update default market at groupId ${
                              t.groupId
                            }, in champ:${
                              (i = t.marketList[1]) == null
                                ? void 0
                                : i.champName
                            }`
                          ),
                          e)
                        : ((e = e.slice()),
                          e.splice(d, 1, { ...a[d], marketList: t.marketList }),
                          e);
                    }, a),
                  ]
              )
            )
          : r(_)
      ),
      sortedMarketGroupsBySportId: n,
      dropDownMarketGroupsBySportId: p,
      dashboardResortMarkets: ({
        groupId: s,
        sportId: a,
        currentGroupId: e,
      }) => {
        $_$();
        var l, o, i, c;
        const t = (l = r(k)[a]) != null ? l : [],
          d = (o = r(g)[a]) != null ? o : {},
          m = t.findIndex((S) => S.groupId === s),
          v = t.findIndex((S) => S.groupId === e);
        if (m === -1 || v === -1) return;
        const x = (i = d[s]) != null ? i : m,
          w = (c = d[e]) != null ? c : v;
        g.value = { ...r(g), [a]: { ...d, [e]: x, [s]: w } };
      },
      updateDefaultCenterMarket: (s) => {
        $_$();
        var a, e, l;
        const o = {
            marketId: (a = s.marketList[1]) == null ? void 0 : a.id,
            gameId: (e = s.marketList[1]) == null ? void 0 : e.gameId,
            groupId: (l = s.marketList[1]) == null ? void 0 : l.groupId,
          },
          i = r(u).findIndex(
            (c) => c.gameId === o.gameId && c.groupId === o.groupId
          );
        i !== -1 ? r(u).splice(i, 1, o) : r(u).push(o), (u.value = [...r(u)]);
      },
    };
  }),
  $ = ({ marketNameGroups: I, marketGroups: b, T: M }) =>
    $_$() &&
    r(I).flatMap((_, k) => {
      $_$();
      const g = [],
        u = r(b)[k];
      return !u || Number(u.groupId) === 0
        ? []
        : (u.marketList.forEach((n, p) => {
            $_$();
            var B, G, y;
            if (
              ((B = n == null ? void 0 : n.coef) != null ? B : "-") !== "-" &&
              (!(n != null && n.isParam) || p !== 1)
            ) {
              const a = D({
                title: _.groupTitles[p],
                groupTitle: _.groupTitles[1],
                ...(p !== 1 ? { param: n == null ? void 0 : n.param } : {}),
                groupId: u.groupId,
                typeId: (G = n == null ? void 0 : n.typeId) != null ? G : 0,
                T: M,
              });
              g.push(
                new O({
                  key: `market-${p}-${u.groupId}${k}`,
                  type: n ? 1 : 0,
                  title: a,
                  coefByView: String(
                    (y = n == null ? void 0 : n.coefByView) != null ? y : ""
                  ),
                  ...(p === 0 ? { coef: n == null ? void 0 : n.coef } : {}),
                  market: n,
                })
              );
            }
          }),
          g);
    }),
  A = 3,
  J = (I) => {
    $_$();
    const { longMarketGroups: b, marketsGroupCount: M } = L(),
      { sortedMarketGroupsBySportId: _, sortedMarketsByGameId: k } = V(),
      { isLive: g } = N(),
      { trackShowMarketsClick: u } = R(),
      n = T(),
      p = j(!1),
      B = f(() => {
        $_$();
        var t;
        return (t = r(I)) != null && t.isLong ? r(M) * A : r(M);
      }),
      G = f(() => {
        $_$();
        var t;
        return !!((t = r(I)) != null && t.isLong);
      }),
      y = f(() => {
        $_$();
        var t, d, m, v;
        return r(G)
          ? (t = r(b)[r(I).id]) != null
            ? t
            : []
          : (v =
              r(_)[
                (m = (d = r(I)) == null ? void 0 : d.sportId) != null ? m : ""
              ]) != null
          ? v
          : [];
      }),
      s = f(() => {
        $_$();
        var t, d;
        return (d = r(k)[(t = r(I)) == null ? void 0 : t.id]) != null ? d : [];
      }),
      a = f(() => $_$() && Object.fromEntries(r(s).map((t) => [t.groupId, t]))),
      e = f(() => {
        $_$();
        if (r(G)) return r(s);
        const t = r(a);
        return r(y)
          .map((d) => t[d.groupId])
          .filter(Boolean);
      }),
      l = f(() => $_$() && r(I).numberOfMarkets),
      o = f(
        () => $_$() && $({ marketNameGroups: r(y), marketGroups: r(e), T: n })
      ),
      i = f(() => $_$() && r(o).filter((t) => t.type !== 0));
    return {
      isMarketsVisible: p,
      numberOfMarkets: l,
      marketGroupsCount: B,
      isLong: G,
      drawingMarkets: o,
      drawingMarketsExcludeEmpty: i,
      marketGroups: e,
      marketNameGroups: y,
      toggleMarketsVisibility: () => {
        $_$();
        (p.value = !r(p)), r(p) && u(r(g));
      },
    };
  };
export { V as useDashboardSortMarketsStore, J as useMarketsData };
