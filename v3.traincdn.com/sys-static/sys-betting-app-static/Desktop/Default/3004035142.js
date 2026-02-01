import $_$ from "./$_$.js";
$_$();
import {
  useBettingLastSelectedEntities as q,
  useBettingChampRoute as bt,
} from "./37dd3dae1b.js";
import {
  useSelectedBettingEntitiesStore as D,
  useBettingStateInjector as Q,
  defineDynamicBettingStore as vt,
  useBettingClearSelectedData as Ft,
} from "./9de70556bb.js";
import {
  runtimeCore_esmBundler_computed as l,
  reactivity_esmBundler_unref as t,
  router_useRoute as X,
  useGlobalStore as tt,
  omitNotDefined_omitNotDefined as Rt,
  BettingPageType as Lt,
  bettingRouteName_BettingRouteName as Et,
  useUserConfigStore as et,
  index_getConfig as O,
  bettingType_BettingType as L,
  uniqueBy as A,
  execAsync as v,
  HttpClient as k,
  bettingTimerName_BettingTimerName as Ut,
  runtimeCore_esmBundler_defineComponent as ot,
  runtimeCore_esmBundler_defineAsyncComponent as Pt,
  runtimeCore_esmBundler_createBlock as nt,
  runtimeCore_esmBundler_openBlock as st,
  reactivity_esmBundler_toRefs as Nt,
  reactivity_esmBundler_ref as rt,
  index_useLogger as at,
  reactivity_esmBundler_onScopeDispose as it,
  equalComputed_equalComputed as ct,
  useTimeSettings_useTimeSettings as Gt,
  runtimeCore_esmBundler_watch as Z,
  equalWatch as w,
  runtimeCore_esmBundler_onMounted as At,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useBettingPageData as ut } from "./4a993370c6.js";
import {
  useBettingRoute as qt,
  useBettingRouteData as W,
  loadSportsMenuTabsMobile as Dt,
} from "./entry-50afb6f36c.js";
import {
  useSportsMenuComponentStateStore as x,
  SportMenuColorTheme as Ot,
  useSportsMenuAppProvider as kt,
  useSportsMenuAppInjector as wt,
} from "./25dbd9c5df.js";
import { useSportsMenuFiltersStore as P } from "./6550e9bfb1.js";
import {
  useSportsMenuStore as N,
  useBettingGamesStore as Wt,
  useBettingSubGamesStore as xt,
  useBettingSectionChampGroupsStore as Ht,
  useBettingSectionChampsStore as Kt,
} from "./e063df8dd1.js";
import {
  useSelectedSportMenuEntitiesStore as Vt,
  useSelectedNavSportMenuEntitiesStore as zt,
  useBettingRequestParamsStore as H,
  useCountryFilterStore as jt,
} from "./aa92bf211f.js";
import { useMatchTabFilter as G } from "./858ab97c10.js";
import {
  compileBettingStoreType as K,
  BETTING_STORE_TYPE_LIVE_LIST as $t,
} from "./7fd3152d11.js";
import { useBettingStore as V } from "./1af6a171a2.js";
import { useStartIntervalUpdate as Yt } from "./10dcfb9c91.js";
import { useBettingTimerInterval as Jt } from "./bb0d3b59f5.js";
const Me = (e) => e.subChamps !== void 0,
  Zt = (e, o = !0) => {
    $_$();
    const { toggleSelectedSectionSportId: s, hasSelectedSectionSportId: n } =
        D(),
      r = l(() => {
        $_$();
        var a;
        return n((a = t(e)) == null ? void 0 : a.sectionSportId);
      });
    return {
      sportSelectedInBetting: r,
      toggleSportInBetting: (a = !t(r)) => {
        $_$();
        const p = t(e);
        p &&
          s({
            item: p.sectionSportId,
            bindKeys: [p.menuSection],
            isClear: !t(o),
            value: a,
          });
      },
    };
  },
  Qt = (e) => {
    $_$();
    const o = X(),
      s = tt(),
      { bettingType: n, pageType: r } = Q(),
      { sportSelectedInBetting: u, toggleSportInBetting: a } = Zt(e),
      { getRouteUrl: p, changeRoute: c } = qt(),
      { isTeamPage: i } = ut(),
      {
        lastSelectedMenuSection: m,
        lastSelectedSectionSport: d,
        lastSelectedSectionChamp: g,
      } = q(),
      S = l(() => s.getLanguage),
      C = (_, T, h, b) => {
        $_$();
        const y = t(_),
          F = () => {
            $_$();
            const R = t(h),
              j = (R == null ? void 0 : R.champNameForUrl) || "";
            return (R == null ? void 0 : R.sectionSportId) ===
              (y == null ? void 0 : y.sectionSportId)
              ? j
              : "";
          };
        return Rt({
          lng: t(S),
          section: t(n),
          pageType: t(i) ? Lt.HOME : t(r),
          sport: y == null ? void 0 : y.nameForUrl,
          menuSection: y ? y.menuSectionNameForUrl : t(b),
          champ: F(),
          routerReplace: T,
        });
      },
      I = l(() => $_$() && !!t(o).params.sport && !t(o).params.game),
      f = l(() => $_$() && p(C(e, t(I)))),
      B = l(() => $_$() && C(d, t(I), g, m));
    return {
      sportSelectedInBetting: u,
      sportRouteLink: f,
      toggleSportRoute: (_ = !t(u)) => $_$() && (a(_), c(t(B)), _),
      toggleSportInBetting: a,
    };
  },
  z = [Et.TEAM_GAMES_INFO],
  Xt = ({ bettingType: e, pageType: o } = {}) => {
    $_$();
    const {
        bettingStoreType: s,
        sportsMenuApi: n,
        sportsMenuSharedPromise: r,
        sportsMenuSetParsedData: u,
        sportsMenuCancelRequest: a,
        sportsMenuAddSharedPromise: p,
        sportsMenuRemoveSharedPromise: c,
      } = N({ bettingType: e, pageType: o }),
      { sportsMenuUpdateComponentState: i } = x({
        bettingType: e,
        pageType: o,
      }),
      { isGroupByCountry: m, isUseOnlyBroadcastEventsFilter: d } = P({
        bettingType: e,
        pageType: o,
      }),
      g = et(),
      { paramsSelectedEntities: S } = D({ bettingType: e, pageType: o }),
      { paramsSelectedEntities: C } = Vt({ bettingType: e, pageType: o }),
      { paramsSelectedEntities: I } = zt({ bettingType: e, pageType: o }),
      { getBettingCommonParamsForApi: f } = H({ bettingType: e, pageType: o }),
      B = V(),
      { liveTab: M } = G(),
      _ = O(-1001),
      { routeTeamId: T, routeName: h } = W(),
      b = l(() => ($_$() && t(d) ? B.bettingIsOnlyWithVideos : !1)),
      y = l(() => ($_$() && t(e) === L.LIVE ? "sports-live" : "sports-line")),
      F = l(() => ($_$() && t(M) === 1 ? K(t(o), L.LINE) : t(s)));
    return {
      sportsMenuLoadSports: async () => {
        $_$();
        let E, $;
        const pt = f(),
          {
            menuSectionParams: lt = [],
            sports: mt = [],
            champs: St = [],
          } = t(S),
          {
            menuSectionParams: dt = [],
            sports: gt = [],
            champs: Ct = [],
          } = t(C),
          {
            menuSectionParams: ht = [],
            sports: _t = [],
            champs: Bt = [],
          } = t(I),
          Mt = A([lt, dt, ht].flat()),
          It = A([mt, gt, _t].flat()),
          yt = A([St, Ct, Bt].flat()),
          ft = $t.includes(t(F))
            ? g.liveSportsBlackList
            : g.lineSportsBlackList,
          Tt = !z.includes(t(h)),
          Y = {
            ...pt,
            zve: Number(t(b)),
            menuSection: Mt,
            sports: It,
            champs: yt,
            antiSports: ft,
            withCountries: t(m),
            groupId: _,
            teams: t(T) && Tt ? [t(T)] : [],
          },
          U = `${t(F)}${JSON.stringify(Y)}`;
        t(r)[U] || p(U, t(n).load(t(y), t(F), Y));
        const J = (([E, $] = v(() => $_$() && t(r)[U])), (E = await E), $(), E);
        c(U), J.status === k.STATUS_SUCCESS && (u(J.data), i());
      },
      sportsMenuCancelRequest: () => $_$() && a([t(y), t(F)].join(":")),
    };
  },
  te = vt("sportsMenuPollingStore", ({ bettingType: e, pageType: o }) => {
    $_$();
    const { sportsMenuLoadSports: s, sportsMenuCancelRequest: n } = Xt({
        bettingType: e,
        pageType: o,
      }),
      r = Jt({ name: Ut.MENU_COMPONENT, bettingType: e }),
      { loading: u, forceUpdateData: a } = Yt({
        interval: r,
        onUpdateData: s,
        onCancelIntervalRequest: n,
      });
    return { loading: u, sportsMenuPollingForceUpdate: a };
  }),
  Ie = () => {
    $_$();
    const {
        lastSelectedSectionSportId: e,
        lastSelectedSectionSport: o,
        lastSelectedSectionChamp: s,
      } = q(),
      n = l(() => {
        $_$();
        var c;
        return (c = t(s)) == null ? void 0 : c.sectionChampId;
      }),
      { toggleSportRoute: r } = Qt(o),
      { toggleChampRoute: u } = bt(s),
      a = () => {
        r(!0);
      };
    return {
      lastSelectedSectionSportId: e,
      lastSelectedSectionChampId: n,
      changeRouteToLastSelectedSport: a,
      changeRouteToLastSelectedChamp: () => {
        $_$();
        t(s) ? u(!0) : a();
      },
    };
  },
  ee = ot({
    __name: "SportsMenuTabs",
    setup(e) {
      $_$();
      const o = Pt(Dt);
      return (s, n) => $_$() && (st(), nt(t(o)));
    },
  }),
  ye = ot({
    __name: "SportsMenuTabsDataProvider",
    props: {
      pageType: {},
      bettingType: {},
      componentsThemes: { default: () => new Ot() },
      groupByCategories: { type: Boolean },
      isTranslationDisabled: { type: Boolean },
      shouldUseBroadcastEventsFilter: { type: Boolean },
    },
    setup(e) {
      $_$();
      return kt(Nt(e)), (s, n) => $_$() && (st(), nt(ee));
    },
  }),
  oe = () => {
    $_$();
    const {
        bettingStoreType: e,
        sportsMenuApi: o,
        bettingType: s,
        pageType: n,
      } = N(),
      { addBettingGames: r } = Wt({ bettingType: s, pageType: n }),
      { addBettingSubGames: u } = xt({ bettingType: s, pageType: n }),
      { sportsMenuUpdateComponentState: a } = x(),
      { getBettingCommonParamsForApi: p } = H({ bettingType: s, pageType: n }),
      { routeTeamId: c, routeName: i } = W(),
      { liveTab: m } = G(),
      d = l(() => ($_$() && t(m) === 1 ? K(t(n), L.LINE) : t(e)));
    return {
      sportsMenuLoadGamesByChamp: async ({
        sportId: S,
        menuSection: C,
        champId: I,
        abortController: f,
      }) => {
        $_$();
        let B, M;
        const _ = p(),
          T = !z.includes(t(i)),
          h =
            (([B, M] = v(
              () =>
                $_$() &&
                t(o).load(
                  "champ",
                  t(d),
                  {
                    ..._,
                    sportId: S,
                    champId: I,
                    menuSection: C ? [C] : [],
                    virtualSports: !0,
                    teams: t(c) && T ? [t(c)] : [],
                  },
                  f
                )
            )),
            (B = await B),
            M(),
            B);
        h.status === k.STATUS_SUCCESS &&
          (r(h.data.games), u(h.data.subGames), a());
      },
    };
  },
  ne = ({ sportId: e, champId: o, menuSection: s }) => {
    $_$();
    const n = rt(!1);
    let r;
    const u = at(),
      { sportsMenuLoadGamesByChamp: a } = oe(),
      p = async () => {
        $_$();
        let i, m;
        const d = t(e),
          g = t(o);
        if (!(!d || !g))
          try {
            (n.value = !0),
              (r = new AbortController()),
              ([i, m] = v(
                () =>
                  $_$() &&
                  a({
                    sportId: d,
                    champId: g,
                    menuSection: t(s),
                    abortController: r,
                  })
              )),
              await i,
              m();
          } catch (S) {
            u.error(S);
          } finally {
            (n.value = !1), (r = void 0);
          }
      },
      c = () => {
        r == null || r.abort();
      };
    return it(c), { loading: n, loadChampGames: p, cancelRequest: c };
  },
  fe = ({ champ: e, isOpen: o }) => {
    $_$();
    const {
        loading: s,
        loadChampGames: n,
        cancelRequest: r,
      } = ne({
        sportId: l(() => $_$() && t(e).sportId),
        champId: l(() => $_$() && t(e).id),
        menuSection: l(() => $_$() && t(e).menuSection),
      }),
      { sportsMenuFilteredGamesBySectionChampId: u } = P(),
      a = l(() => {
        $_$();
        var i;
        return (i = t(u)[t(e).sectionChampId]) != null ? i : [];
      }),
      p = ct(() => $_$() && t(s) && !t(a).length),
      { timezone: c } = Gt();
    return (
      Z(c, () => {
        $_$();
        if (t(o)) return n();
      }),
      Z(o, (i) => (i ? n() : r())),
      { isLoading: p, champGames: a }
    );
  },
  Te = (e) => {
    $_$();
    const { bettingType: o } = wt(),
      s = V(),
      n = G(),
      r = l(() => $_$() && t(o) === L.LIVE),
      u = l(
        () => $_$() && t(r) && s.bettingIsOnlyWithVideos && t(n.liveTab) !== 1
      );
    return {
      count: l(() =>
        $_$() && t(u) ? t(e).gamesCountWithVideo : t(e).gamesCount
      ),
    };
  },
  se = () => {
    $_$();
    const {
        bettingStoreType: e,
        sportsMenuApi: o,
        bettingType: s,
        pageType: n,
      } = N(),
      { addBettingChampGroups: r } = Ht({ bettingType: s, pageType: n }),
      { addBettingSectionChamps: u } = Kt({ bettingType: s, pageType: n }),
      { sportsMenuUpdateComponentState: a } = x(),
      { isGroupByCountry: p } = P(),
      { getBettingCommonParamsForApi: c } = H({ bettingType: s, pageType: n }),
      { routeTeamId: i, routeName: m } = W(),
      d = O(336),
      { liveTab: g } = G(),
      S = l(() => ($_$() && t(g) === 1 ? K(t(n), L.LINE) : t(e)));
    return {
      sportsMenuLoadChampsBySport: async ({
        menuSection: I,
        sportId: f,
        abortController: B,
      }) => {
        $_$();
        let M, _;
        const T = c(),
          h = !z.includes(t(m)),
          b =
            (([M, _] = v(
              () =>
                $_$() &&
                t(o).load(
                  "champs",
                  t(S),
                  {
                    ...T,
                    menuSection: I ? [I] : [],
                    sportCategories: [f],
                    sportId: f,
                    withCountries: t(p),
                    teams: t(i) && h ? [t(i)] : [],
                    countryFirst: d,
                  },
                  B
                )
            )),
            (M = await M),
            _(),
            M);
        b.status === k.STATUS_SUCCESS &&
          (u(b.data.champs), r(b.data.champGroups), a());
      },
    };
  },
  re = ({ sportId: e, menuSection: o }) => {
    $_$();
    const s = rt(!1);
    let n;
    const r = at(),
      { sportsMenuLoadChampsBySport: u } = se(),
      a = async () => {
        $_$();
        let c, i;
        const m = t(e);
        if (m)
          try {
            (s.value = !0),
              (n = new AbortController()),
              ([c, i] = v(
                () =>
                  $_$() &&
                  u({ menuSection: t(o), sportId: m, abortController: n })
              )),
              await c,
              i();
          } catch (d) {
            r.error(d);
          } finally {
            (s.value = !1), (n = void 0);
          }
      },
      p = () => {
        n == null || n.abort();
      };
    return it(p), { loading: s, loadSportChamps: a, cancelRequest: p };
  },
  be = ({ sport: e, isOpen: o }) => {
    $_$();
    const {
        loading: s,
        loadSportChamps: n,
        cancelRequest: r,
      } = re({
        sportId: l(() => $_$() && t(e).id),
        menuSection: l(() => $_$() && t(e).menuSection),
      }),
      { sportsMenuFilteredChampsBySectionSportId: u } = P(),
      a = l(() => {
        $_$();
        var i;
        return (i = t(u)[t(e).sectionSportId]) != null ? i : [];
      }),
      p = ct(() => $_$() && t(s) && !t(a).length),
      c = async () => {
        $_$();
        let i, m;
        t(o) && !t(a).length && (([i, m] = v(() => n())), await i, m());
      };
    return (
      w(o, (i) => {
        i ? n() : r();
      }),
      At(c),
      { isLoading: p, sportChamps: a }
    );
  },
  ve = ({ considerSelectedMenuSections: e = !1 } = {}) => {
    $_$();
    const o = X(),
      { toggleSelectedSectionChampId: s } = D(),
      { bettingClearBettingSelectedEntities: n } = Ft(),
      { lastSelectedSectionChamp: r, lastSelectedSectionSport: u } = q(),
      a = () => {
        $_$();
        const { sport: p, champ: c, menuSection: i } = t(o).params;
        !p && !c && !(t(e) || i) && n();
      };
    return (
      w([() => $_$() && t(o).params, () => $_$() && t(o).name], (p, c) => {
        $_$();
        var i, m, d, g;
        p[1], c[1];
        const S = (i = p[0]) != null ? i : {},
          C = (m = c[0]) != null ? m : {},
          I = !1,
          f = C.menuSection && !S.menuSection,
          B = C.sport && !S.sport,
          M = C.champ && !S.champ,
          _ = (d = t(u)) == null ? void 0 : d.sectionSportId,
          T = (g = t(r)) == null ? void 0 : g.sectionSportId,
          h = _ === T ? t(r) : {},
          b = f && e && !S.sport,
          y = B && !(e && S.menuSection);
        b || y || I
          ? n()
          : M &&
            h &&
            h.champNameForUrl === C.champ &&
            s({ item: h.sectionChampId, bindKeys: [h.sectionSportId] });
      }),
      { clearSelectedEntitiesAccordingToRoute: a }
    );
  },
  Fe = () => {
    $_$();
    const e = et(),
      o = tt(),
      s = V(),
      { id: n } = O(-1012),
      { pageType: r, bettingType: u } = Q(),
      { bettingStoreType: a, sportsMenuUpdatesCounter: p } = N({
        pageType: r,
        bettingType: u,
      }),
      { sportsMenuPollingForceUpdate: c } = te({ pageType: r, bettingType: u }),
      { currentCountryId: i } = jt(),
      { isBetsOnYourPage: m } = ut(),
      d = l(() => {
        $_$();
        var S;
        if (t(m)) return (S = t(i)) != null ? S : n;
      }),
      g = l(
        () =>
          $_$() && [
            t(a),
            t(p),
            t(d),
            o.getTimeZone,
            o.getIs12h,
            o.getUserId,
            s.bettingCyberMatchesFilterType,
            e.isInstalled,
          ]
      );
    return (
      w(g, async () => {
        $_$();
        let S, C;
        ([S, C] = v(() => c())), await S, C();
      }),
      { triggerUpdate: g }
    );
  };
export {
  ye as _sfc_main,
  Me as isChampGroupWithSubChamps,
  Qt as useBettingSportRoute,
  Zt as useBettingSportSelected,
  Ie as useCurrentSelectedEntity,
  Te as useSportsMenuChampCount,
  fe as useSportsMenuChampOnFetch,
  te as useSportsMenuPollingData,
  ve as useSportsMenuRouteMonitoring,
  be as useSportsMenuSportOnFetch,
  Fe as useSportsMenuTriggerUpdate,
};
