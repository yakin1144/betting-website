import $_$ from "./$_$.js";
$_$();
import {
  defineDynamicBettingStore as k,
  useSelectedBettingEntitiesStore as M,
  useBettingClearSelectedData as F,
  useBettingStateProvider as x,
} from "./9de70556bb.js";
import {
  createSelectedBettingEntitiesStore as O,
  useBettingRouteData as v,
  useMediaStore as w,
  useBettingRoute as H,
  useCouponAnalytics as K,
  useCouponStore as V,
  EXPRESS_DAY_BONUS_MARKET_TYPE_ID as Y,
} from "./entry-50afb6f36c.js";
import {
  runtimeCore_esmBundler_computed as r,
  reactivity_esmBundler_unref as e,
  router_useRoute as P,
  equalWatch as z,
  useGlobalStore as N,
  size_constants_sizeType as A,
  bettingRouteName_BettingRouteName as R,
  runtimeCore_esmBundler_onBeforeUnmount as W,
  omitNotDefined_omitNotDefined as q,
  BettingPageType as X,
  index_useT as j,
  router_useRouter as J,
  useNotifications_useNotifications as Q,
  useRouterMethodsWithLang as Z,
  execAsync as G,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useBettingPageData as U } from "./4a993370c6.js";
import { useBettingStore as $ } from "./1af6a171a2.js";
const re = k("selectedDashboardEntitiesStore", O),
  ue = (o, s = !0) => {
    $_$();
    const { toggleSelectedSectionChampId: t, hasSelectedSectionChampId: d } =
        M(),
      c = r(() => {
        $_$();
        var n;
        return d((n = e(o)) == null ? void 0 : n.sectionChampId);
      });
    return {
      champSelectedInBetting: c,
      toggleChampInBetting: (n = !e(c)) => {
        $_$();
        const i = e(o);
        i &&
          t({
            item: i.sectionChampId,
            bindKeys: [i.sectionSportId],
            isClear: !e(s),
            value: n,
          });
      },
    };
  },
  ee = ({ pageType: o, bettingType: s }) => {
    const t = $(),
      {
        routeBettingType: d,
        routeMenuSection: c,
        routeMenuSectionId: m,
        routeSectionSportId: n,
        routeSectionChampId: i,
        routeGameId: y,
      } = v(),
      {
        setSelectedGameIds: _,
        hasSelectedSectionSportId: h,
        toggleSelectedSectionSportId: I,
        toggleSelectedSectionChampId: B,
        toggleSelectedMenuSectionId: u,
        champIdsDeleteByBindKey: p,
      } = M({ pageType: o, bettingType: s }),
      T = () => {
        $_$();
        t.currentBettingType = e(d);
      },
      a = (l) => {
        $_$();
        const f = e(m),
          C = e(n);
        (e(c) || C) && u({ item: f, isClear: !l, value: !0 });
      },
      g = (l) => {
        $_$();
        const f = e(m),
          C = e(n);
        C && !h(C) && I({ item: C, bindKeys: [f], isClear: !l, value: !0 });
      },
      S = (l) => {
        $_$();
        const f = e(n),
          C = e(i);
        C && f
          ? B({ item: C, bindKeys: [f], isClear: !l, value: !0 })
          : f && p(f);
      },
      b = () => {
        $_$();
        const l = e(y);
        _(l ? [String(l)] : []);
      };
    return {
      handleRouteBettingType: T,
      handleRouteMenuSection: a,
      handleRouteSport: g,
      handleRouteChamp: S,
      handleRouteGame: b,
      handleRouteData: (l = !0) => {
        T(), a(l), g(l), S(l), b();
      },
    };
  },
  te = ({ pageType: o, bettingType: s, appViewType: t }) => {
    $_$();
    const d = P(),
      { handleRouteData: c, handleRouteBettingType: m } = ee({
        pageType: o,
        bettingType: s,
      });
    z(
      [() => d.params, () => $_$() && e(s)],
      () => ($_$() && e(t) === 1 ? m() : c()),
      { immediate: !0 }
    );
  },
  le = () => {
    const { routeBettingType: o, routePageType: s } = v(),
      {
        setSelectedSectionSportIds: t,
        toggleSelectedSectionChampId: d,
        setSelectedSectionChampIds: c,
      } = M({ pageType: s, bettingType: o });
  },
  L = { 0: "asideLeft", 1: "asideLeftAsian" },
  D = { 0: "default", 1: "defaultAsian" },
  de = () => {
    $_$();
    const o = N(),
      s = w(),
      t = P(),
      { routePageType: d } = v(),
      { currentBettingType: c } = U(),
      { bettingClearAllFilters: m } = F(),
      n = r(() => o.isRightSectionHidden),
      i = r(() => o.isLeftSectionHidden),
      y = r(
        () =>
          $_$() &&
          e(t).matched.some((a) => {
            var g;
            return (g = a.components) == null ? void 0 : g.asideLeft;
          })
      ),
      _ = r(() => ($_$() && e(i) ? A.xxs : "")),
      h = r(() => ($_$() && e(n) ? A.xxs : "")),
      I = r(() => o.getAppViewType),
      B = r(
        () =>
          $_$() &&
          [
            R.HOME,
            R.MAIN_SECTION,
            R.MAIN_GAME,
            R.TEAM_GAMES_INFO,
            R.BETSONYOUR_SECTION,
            R.MARBLE_SECTION,
            R.MARBLE_GAME,
          ].includes(e(t).name)
      ),
      u = r(() => ($_$() && e(B) ? L[e(I)] : L[0])),
      p = r(() => ($_$() && e(B) ? e(I) : 0)),
      T = r(() => ($_$() && e(B) ? D[e(I)] : D[0]));
    return (
      x({ pageType: d, bettingType: c }),
      m(),
      te({ pageType: d, bettingType: c, appViewType: I }),
      W(() => {
        s.mediaClearMedia();
      }),
      {
        hasLeftSidebar: y,
        leftSidebarSize: _,
        rightSidebarSize: h,
        currentRightSideType: p,
        currentLeftSideComponent: u,
        currentMainComponentLayoutName: T,
      }
    );
  },
  ne = (o, s = !1) => {
    $_$();
    const { toggleSelectedGameId: t, hasSelectedGameId: d } = M(),
      c = r(() => {
        $_$();
        var n;
        return d((n = e(o)) == null ? void 0 : n.gameIdForUrl);
      });
    return {
      gameSelectedInBetting: c,
      toggleGameInBetting: (n = !e(c)) => {
        $_$();
        const i = e(o);
        i &&
          (i.gameIdForUrl &&
            t({ item: i.gameIdForUrl, isClear: !e(s), value: n }),
          i.mainGameIdForUrl && t({ item: i.mainGameIdForUrl, value: !0 }));
      },
    };
  },
  pe = (o, { pageType: s, bettingType: t }) => {
    $_$();
    const d = N(),
      { getRouteUrl: c, changeRoute: m } = H(),
      { gameSelectedInBetting: n, toggleGameInBetting: i } = ne(o),
      { isTeamPage: y } = U(),
      _ = (u) => {
        $_$();
        const p = e(o);
        return q({
          lng: d.getLanguage,
          pageType: e(y) ? X.HOME : e(s),
          section: e(t),
          menuSection: (p == null ? void 0 : p.menuSectionNameForUrl) || void 0,
          sport: p == null ? void 0 : p.sportNameForUrl,
          champ: p == null ? void 0 : p.champNameForUrl,
          game: u ? (p == null ? void 0 : p.gameNameForUrl) : void 0,
        });
      },
      h = r(() => c(_(!0)));
    return {
      gameSelectedInBetting: n,
      gameRouteLink: h,
      getGameRoute: _,
      toggleGameRoute: (u = !e(n)) => $_$() && (m(_(u)), i(u), u),
      toggleGameInBetting: i,
      toggleSubGameRoute: (u = !e(n)) => $_$() && (m(_(u)), u),
    };
  },
  ge = {
    1: "betting_market_type_1_name",
    2: "betting_dashboard_draw",
    3: "betting_market_type_3_name",
    401: "betting_market_type_1_name",
    402: "betting_market_type_3_name",
  },
  me = ({ coupon: o, ui: s = "popup" }) => {
    $_$();
    const t = j(),
      { trackBetNoncalcCouponCall: d } = K(),
      c = J(),
      m = N(),
      n = V(),
      { notificationInfoWithControls: i } = Q(),
      { getLinkWithLang: y } = Z(() => m.language),
      _ = r(() => n.couponBets.length > 0),
      h = r(() => {
        $_$();
        const { typeId: a, bets: g } = e(o);
        return [0, 7, 8, 9].includes(a)
          ? []
          : g.filter(
              ({ gameStatusId: b, gameIsFinished: E, market: l }) =>
                b !== 4 && !E && l.typeId !== Y
            );
      }),
      I = r(() => $_$() && e(h).length > 0),
      B = r(() => {
        $_$();
        const { systemValue: a } = e(o);
        return a && (e(h).length > a ? a : 0);
      }),
      u = async (a) => {
        $_$();
        let g, S;
        n.couponPatchState({
          bets: e(h),
          typeId: e(o).typeId,
          systemValues: [],
        }),
          e(B) !== void 0 && n.couponSetSystemValue(e(B)),
          ([g, S] = G(() => n.couponUpdate())),
          await g,
          S(),
          ([g, S] = G(() => c.push(y(a)))),
          await g,
          S();
      },
      p = async () => {
        $_$();
        let a, g;
        const S = "/",
          b = "/user/coupon",
          E = s === "popup" ? S : b;
        if ((d(), !e(_))) return u(E);
        if (s === "snackbar")
          return i(t("coupon_repeat_tooltip_description"), {
            title: t("coupon_repeat_info_title"),
            cancelButtonText: t("main_continue"),
            confirmButtonText: t("main_undo"),
            showCancelButton: !0,
            onCancel: () => u(b),
          });
        const { isConfirmed: l } =
          (([a, g] = G(() =>
            i(t("coupon_repeat_tooltip_description"), {
              title: t("coupon_repeat_info_title"),
              cancelButtonText: t("main_undo"),
              confirmButtonText: t("main_continue"),
              showCancelButton: !0,
            })
          )),
          (a = await a),
          g(),
          a);
        if (l) return u(S);
      };
    return {
      availableBets: h,
      canRepeat: I,
      repeatCoupon: p,
      repeatOpenedCoupon: () =>
        $_$() && {
          caption: t("coupon_opened_action_repeat"),
          isDisabled: !e(I),
          isHidden: !1,
          onClick: p,
        },
    };
  };
export {
  ge as MARKET_TYPE_LANG_KEY_MAP,
  ue as useBettingChampSelected,
  me as useBettingCouponRepeat,
  pe as useBettingGameRoute,
  de as useBettingLayout,
  te as useBettingRouteMonitoring,
  ee as useBettingRouteMonitoringMethods,
  le as useBettingSetDefaultValuesFromRoute,
  re as useSelectedDashboardEntitiesStore,
};
