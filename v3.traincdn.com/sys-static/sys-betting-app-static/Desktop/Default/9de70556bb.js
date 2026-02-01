import $_$ from "./$_$.js";
$_$();
import {
  reactivity_esmBundler_unref as i,
  runtimeCore_esmBundler_computed as S,
  bettingType_BettingType as _,
  index_useMemoryStorage as O,
  index_useLogger as T,
  reactivity_esmBundler_shallowRef as G,
  runtimeCore_esmBundler_watch as U,
  tryOnUnmounted_tryOnUnmounted as $,
  reactivity_esmBundler_onScopeDispose as W,
  runtimeCore_esmBundler_nextTick as V,
  reactivity_esmBundler_effectScope as q,
  toDeepReadonly_toDeepReadonly as H,
  index_default_11 as L,
  index_default_51 as M,
  index_default_6 as k,
  isDef as y,
  index_useDateTimeService as K,
  reactivity_esmBundler_ref as h,
  useGlobalStore as F,
  BettingPageType as j,
  runtimeCore_esmBundler_inject as z,
  reactivity_esmBundler_toRefs as Z,
  runtimeCore_esmBundler_provide as Y,
  index_getConfig as J,
  useNuxtApp as Q,
  execAsync as X,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as ee,
  router_useRouter as te,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineProvider as oe,
  serverStorageShallowRef as re,
  useNormalizedData as ne,
  combinePipelineModules as se,
  createSelectedBettingEntitiesStore as ie,
  getFilterByDayRequestConfig as ce,
  useStoreMap as ae,
  useBettingRouteData as le,
  postMessageToParentWindow as w,
  useBettingSportsStore as ue,
  getMenuSectionIdByMenuSectionUrlName as me,
  useGameStore as de,
} from "./entry-50afb6f36c.js";
import ge from "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import {
  concatStoreNames as Se,
  compileBettingStoreType as E,
  BETTING_STORE_TYPE_MAP as pe,
} from "./7fd3152d11.js";
import { useBettingStore as A, toUnwrapGetters as Ce } from "./1af6a171a2.js";
function xe(e) {
  $_$();
  var t, o;
  const s = (t = i(e).matches) != null ? t : [],
    n = (o = i(e).topChampMatches) != null ? o : [];
  return s.length > 0 || n.length > 0;
}
const fe = "betting",
  D = ({ name: e, type: t } = {}) => Se(fe, t, e),
  N = ({ pageType: e, bettingType: t }) => {
    $_$();
    const o = S(() => $_$() && E(i(e), i(t))),
      s = S(() => $_$() && `${D({ type: i(o) })}/`),
      n = S(() => $_$() && i(t) === _.LIVE),
      r = S(() => $_$() && i(t) === _.LINE);
    return {
      pageType: e,
      bettingType: t,
      isLive: n,
      isLine: r,
      bettingStoreType: o,
      bettingStoreNamespace: s,
    };
  },
  { inject: v, provide: Oe } = oe(N),
  be = (e, t) => {
    $_$();
    const o = re(e, `equalState-${t}`),
      s = (n) => {
        $_$();
        ge(i(o), n) || (o.value = n);
      };
    return [S(() => $_$() && i(o)), s];
  },
  ye = (e, t) => {
    $_$();
    const o = O(),
      s = T(),
      n = G();
    let r,
      c = !1;
    const a = (l) => o.getItem(l),
      p = (l) => {
        $_$();
        const u = q(!0);
        return u.run(() => {
          $_$();
          var f;
          try {
            const d = {
              name: l,
              registrationCounter: 0,
              scope: u,
              composable: H(
                t({
                  prevComposable: (f = a(r)) == null ? void 0 : f.composable,
                })
              ),
              inc: () => {
                d.registrationCounter += 1;
              },
              dec: () => {
                d.registrationCounter = Math.max(0, d.registrationCounter - 1);
              },
            };
            return d;
          } catch (d) {
            throw (s.error(`error create shared composable[${i(e)}]: `, d), d);
          }
        });
      },
      m = (l) => {
        if (!l) return;
        const u = a(l);
        u &&
          (u.dec(),
          u.registrationCounter === 0 && (o.removeItem(l), u.scope.stop()));
      },
      C = (l) => {
        l.registrationCounter === 0 && o.setItem(l.name, l), l.inc();
      };
    return (
      U(
        () => $_$() && i(e),
        () => {
          $_$();
          var l;
          const u = i(e);
          if (u === r || c) return;
          const f = (l = a(u)) != null ? l : p(u);
          C(f), m(r), (r = u), (n.value = f);
        },
        { immediate: !0 }
      ),
      $(() => {
        c = !0;
      }),
      W(() => {
        $_$();
        (c = !0), V(() => m(r));
      }),
      S(() => $_$() && i(n).composable)
    );
  },
  he = (e, t = Object.keys(i(e))) => {
    $_$();
    const o = {},
      s = {};
    return (
      Object.defineProperties(
        s,
        t.reduce(
          (n, r) => (
            (n[r] = {
              get: () => {
                $_$();
                let c = o[r];
                return (
                  c ||
                    (typeof i(e)[r] == "function"
                      ? (c = (...a) => $_$() && i(e)[r](...a))
                      : (c = S(() => $_$() && i(i(e)[r]))),
                    (o[r] = c)),
                  c
                );
              },
              enumerable: !0,
            }),
            n
          ),
          {}
        )
      ),
      s
    );
  },
  _e =
    (e, t) =>
    ({ pageType: o, bettingType: s } = {}) => {
      $_$();
      let n = o,
        r = s,
        c;
      n && r
        ? (c = N({ pageType: n, bettingType: r }).bettingStoreType)
        : ((c = v().bettingStoreType),
          (n = v().pageType),
          (r = v().bettingType));
      const a = S(() => $_$() && D({ name: e, type: i(c) }));
      return ye(
        a,
        ({ prevComposable: p } = {}) =>
          $_$() &&
          t({
            storeName: i(a),
            bettingType: i(r),
            pageType: i(n),
            prevStore: p,
          })
      );
    },
  R = (e, t) => {
    const o = _e(e, t);
    return ({ pageType: s, bettingType: n } = {}) => {
      const r = o({ pageType: s, bettingType: n });
      return he(r);
    };
  },
  Be = ({ bettingType: e, pageType: t, storeName: o }) => {
    $_$();
    const s = i(o),
      {
        list: n,
        setArray: r,
        getItem: c,
      } = ne({ propKey: "sectionSportId", cacheKey: `${s}-sports` }),
      [a, p] = be(!1, `${s}-loading`),
      m = S(() => $_$() && i(n).length),
      C = S(
        () =>
          $_$() &&
          i(n)
            .map((l) => l.gamesCount)
            .reduce((l, u) => l + u, 0)
      ),
      g = S(
        () =>
          $_$() &&
          i(n)
            .map((l) => l.gamesCountWithVideo)
            .reduce((l, u) => l + u, 0)
      );
    return {
      bettingType: e,
      pageType: t,
      storeName: o,
      bettingSectionSportsCount: m,
      bettingSectionSportsGamesCount: C,
      bettingSectionSportsGamesWithVideoCount: g,
      bettingSectionSportsLoading: a,
      bettingSectionSports: n,
      setBettingSectionSportsLoading: p,
      setBettingSectionSports: r,
      getBettingSectionSport: c,
    };
  },
  Ge = R(
    "bettingSectionSportsStore",
    ({ bettingType: e, pageType: t, storeName: o, prevStore: s }) => {
      $_$();
      const n = s,
        r = se(
          () => ({ bettingType: e, pageType: t, storeName: o, prevStore: s }),
          Be
        );
      return n && r.setBettingSectionSports(i(n.bettingSectionSports)), r;
    }
  ),
  Ue = R("selectedBettingEntitiesStore", ie),
  ve = (e) => ({ minOffset: e * 60 }),
  I = ({ dateFrom: e, dateTo: t, dateTimeService: o }) => {
    $_$();
    const s = -(o.timeZoneDiff * 60),
      n = L(e).setMinutes(s),
      r = t ? L(t).setMinutes(s) : void 0;
    return { tsFrom: M(n), tsTo: r ? M(k(r, 1)) : void 0 };
  },
  De = ({ dateTimeService: e, localConfig: t }) => {
    $_$();
    if (!t) return;
    const { hour: o, day: s, dateFrom: n, dateTo: r } = t;
    if (y(o)) return ve(o);
    if (y(s)) return ce({ day: s, dateTimeService: e });
    if (y(n) && y(r)) return I({ dateTimeService: e, dateFrom: n, dateTo: r });
    if (y(n)) return I({ dateTimeService: e, dateFrom: n });
  },
  $e = R("dateTimeFilterStore", () => {
    $_$();
    const e = K(),
      t = h();
    return {
      dateTimeFilterLocalConfig: S(() => $_$() && i(t)),
      dateTimeFilterSetLocalConfig: (c) => {
        t.value = c;
      },
      dateTimeFilterClearLocalConfig: () => {
        t.value = void 0;
      },
      getDateTimeFilterRequestConfig: () =>
        $_$() && De({ localConfig: i(t), dateTimeService: e }),
    };
  }),
  Te = ({ pageType: e, bettingType: t }) =>
    $_$() && {
      pageType: e,
      bettingType: t,
      bettingStoreType: S(() => {
        $_$();
        var o;
        return E((o = i(e)) != null ? o : j.HOME, i(t));
      }),
      isLive: S(() => $_$() && i(t) === _.LIVE),
      isLine: S(() => $_$() && i(t) === _.LINE),
      bettingStore: A(),
      globalStore: F(),
    },
  We = (e) => {
    $_$();
    const { pageType: t, bettingType: o, showScoreboard: s } = Z(e),
      n = Ce({ ...Te({ pageType: t, bettingType: o }), showScoreboard: s });
    return Y("dashboardProvidedData", n), n;
  },
  Ve = () => $_$() && z("dashboardProvidedData"),
  qe = (e) => {
    $_$();
    const t = J(2020);
    return S(
      () => ($_$() && t) || (!!i(e).champGroupId && i(e).sportId !== 40)
    );
  },
  x = ({ pageType: e, bettingType: t } = {}) => {
    $_$();
    const s = Q().vueApp.config.globalProperties.$memoryStorage;
    return {
      getAllDynamicStoresByName: (r) =>
        $_$() &&
        (e && t ? [E(i(e), i(t))] : Object.values(pe))
          .map((a) => s.getItem(D({ type: a, name: r })))
          .filter(Boolean)
          .map((a) => a.composable),
    };
  },
  Fe = ({ pageType: e, bettingType: t } = {}) => {
    $_$();
    const o = T(),
      s = ae();
    return {
      transactionForDynamicStore: async (r, c) => {
        $_$();
        let a, p;
        try {
          let m;
          if (e && t) {
            const { bettingStoreType: g } = N({ bettingType: t, pageType: e }),
              l = D({ name: r, type: i(g) });
            s.has(l) && (m = s.get(l));
          }
          const C = m
            ? [m]
            : [...s].filter((g) => g.includes(r)).map((g) => g[1]);
          ([a, p] = X(() =>
            Promise.all(C.filter(Boolean).map(async (g) => g[c]()))
          )),
            await a,
            p();
        } catch (m) {
          o.error("transactionForDynamicStore: ", m);
        }
      },
    };
  },
  Ee = ({ pageType: e, bettingType: t } = {}) => {
    $_$();
    const o = A(),
      s = T(),
      { routeBettingType: n } = le(),
      { transactionForDynamicStore: r } = Fe({ pageType: e, bettingType: t }),
      { getAllDynamicStoresByName: c } = x({ pageType: e, bettingType: t }),
      a = () => {
        $_$();
        o.currentBettingType = i(n);
      },
      p = () => {
        c("selectedBettingEntitiesStore").forEach(
          ({ clearSelectedEntities: d }) => {
            d();
          }
        );
      },
      m = () => {
        c("selectedSportsMenuEntitiesStore").forEach(
          ({ clearSelectedEntities: d }) => {
            d();
          }
        );
      },
      C = () => {
        c("selectedNavSportsMenuEntitiesStore").forEach(
          ({ clearSelectedEntities: d }) => {
            d();
          }
        );
      },
      g = () => {
        c("dateTimeFilterStore").forEach(
          ({ dateTimeFilterClearLocalConfig: d }) => {
            d();
          }
        );
      },
      l = () => {
        c("dashboardStore").forEach(({ dashboardClearData: d }) => {
          d();
        });
      },
      u = () => {
        o.bettingClearVideoFilter();
      };
    return {
      transactionForDynamicStore: r,
      bettingClearBettingSelectedEntities: p,
      bettingClearSportMenuSelectedEntities: m,
      bettingClearSelectedNavigationSportMenu: C,
      bettingClearDateFilter: g,
      bettingClearDashboard: l,
      bettingClearAllFilters: () => {
        const d = [a, p, m, C, g, u];
        try {
          for (const b of d) b();
        } catch (b) {
          s.error("bettingClearAllFilters", b);
        }
      },
      clearSectionType: a,
    };
  },
  He = (e) => $_$() && [_.LINE].includes(e),
  ke = [136, 194],
  Ke = () => {
    $_$();
    const { bettingType: e } = v(),
      t = F(),
      { getBettingRouteUrl: o } = ee(),
      s = S(() => t.language);
    return {
      sendWidgetCoefficientClickedMessage: (a) => {
        $_$();
        w({
          event: "widgetCoefficientClicked",
          payload: { url: `${window.origin}${i(a)}` },
        });
      },
      sendWidgetEventClickedMessage: (a) => {
        $_$();
        w({
          event: "widgetEventClicked",
          payload: { url: `${window.origin}${i(a)}` },
        });
      },
      getGameRouteLink: (a) =>
        $_$() &&
        S(
          () =>
            $_$() &&
            o({
              lng: i(s),
              section: i(e),
              menuSection: i(a).menuSectionNameForUrl,
              sport: i(a).sportNameForUrl,
              champ: i(a).champNameForUrl,
              game: i(a).gameNameForUrl,
            })
        ),
    };
  },
  je = () => {
    $_$();
    const e = te(),
      { bettingClearBettingSelectedEntities: t } = Ee(),
      { getAllDynamicStoresByName: o } = x(),
      { getBettingSportByNameForUrl: s } = ue();
    return {
      setDashboardSportFilter: (r) => {
        var c;
        t();
        const {
            params: { sport: a = "" },
          } = e.resolve(r),
          p = me(r) || 1e4,
          m = ((c = s(a)) == null ? void 0 : c.id) || 0,
          C = `${p}_${m}`;
        o("selectedBettingEntitiesStore").forEach(
          ({ setSelectedSectionSportIds: g }) => {
            g([C]);
          }
        );
      },
    };
  },
  Ne = 10,
  ze = (e = Ne) => {
    $_$();
    const t = F(),
      o = h(!1),
      s = h(!0),
      n = h(!1),
      r = h(!0),
      c = S(() => t.isRtl);
    return {
      onScroll: (p) => {
        $_$();
        const { target: m } = p;
        if (m) {
          const {
              clientWidth: C,
              clientHeight: g,
              scrollLeft: l,
              scrollTop: u,
              scrollWidth: f,
              scrollHeight: d,
            } = m,
            b = i(c) ? -1 : 1;
          (o.value = C + l * b >= f - e),
            (s.value = l * b <= e),
            (n.value = g + u >= d - e),
            (r.value = u <= e);
        }
      },
      isHorizontalScrollEndLimitReached: o,
      isHorizontalScrollStartLimitReached: s,
      isVerticalScrollEndLimitReached: n,
      isVerticalScrollStartLimitReached: r,
    };
  };
function Ze() {
  $_$();
  const e = de();
  return S(() => e.shouldShowScoreboardTimeline);
}
var Re = Object.defineProperty,
  Le = (e, t, o) =>
    t in e
      ? Re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o),
  B = (e, t, o) => Le(e, typeof t != "symbol" ? t + "" : t, o);
class P {
  constructor({
    redCardsCount: t = 0,
    yellowCardsCount: o = 0,
    cornerKicksCount: s = 0,
    goalsCount: n = 0,
  } = {}) {
    B(this, "redCardsCount"),
      B(this, "yellowCardsCount"),
      B(this, "cornerKicksCount"),
      B(this, "goalsCount"),
      (this.redCardsCount = t),
      (this.yellowCardsCount = o),
      (this.cornerKicksCount = s),
      (this.goalsCount = n);
  }
}
const Ye = (e = []) => {
  if (!Array.isArray(e)) return [];
  const t = 1,
    o = 2;
  return e.map((s) =>
    s.events.reduce(
      (n, r) => {
        var c, a, p, m, C, g, l, u;
        return {
          ...n,
          [r.teamNumber]: {
            ...n[r.teamNumber],
            redCardsCount:
              ((a = (c = n[r.teamNumber]) == null ? void 0 : c.redCardsCount) !=
              null
                ? a
                : 0) + (r.code === 203 ? 1 : 0),
            yellowCardsCount:
              ((m =
                (p = n[r.teamNumber]) == null ? void 0 : p.yellowCardsCount) !=
              null
                ? m
                : 0) + (r.code === 202 ? 1 : 0),
            cornerKicksCount:
              ((g =
                (C = n[r.teamNumber]) == null ? void 0 : C.cornerKicksCount) !=
              null
                ? g
                : 0) + (r.code === 201 ? 1 : 0),
            goalsCount:
              ((u = (l = n[r.teamNumber]) == null ? void 0 : l.goalsCount) !=
              null
                ? u
                : 0) + (r.code === 200 ? 1 : 0),
          },
        };
      },
      { [t]: new P(), [o]: new P() }
    )
  );
};
export {
  Ne as DEFAULT_OFFSET,
  ke as SPORTS_WITHOUT_PERIOD_SCORES,
  D as bettingNestedName,
  R as defineDynamicBettingStore,
  be as equalState,
  Ye as getTimelineEventStatisticsViewModels,
  xe as isHomeAwayGame,
  He as isLineByType,
  Ee as useBettingClearSelectedData,
  Te as useBettingCommonData,
  Ge as useBettingSectionSportsStore,
  N as useBettingState,
  v as useBettingStateInjector,
  Oe as useBettingStateProvider,
  We as useDashboardDataProvider,
  Ve as useDashboardProvidedData,
  je as useDashboardSingleSportLink,
  $e as useDateTimeFilterStore,
  x as useGetAllDynamicStoresByName,
  qe as useIgnoreLogoType,
  ze as useScrollPosition,
  Ue as useSelectedBettingEntitiesStore,
  Ze as useShowScoreboardTimelineFlag,
  Ke as useWidgetTopGamesMessages,
};
