import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_inject as O,
  reactivity_esmBundler_toRefs as A,
  reactivity_esmBundler_reactive as U,
  runtimeCore_esmBundler_provide as V,
  reactivity_esmBundler_markRaw as w,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_defineComponent as F,
  router_useRouter as P,
  router_useRoute as M,
  runtimeCore_esmBundler_computed as n,
  reactivity_esmBundler_toRef as x,
  runtimeCore_esmBundler_createBlock as b,
  runtimeCore_esmBundler_openBlock as g,
  runtimeDom_esmBundler_withModifiers as j,
  useGlobalStore as q,
  bettingType_BettingType as Z,
  bettingTimerName_BettingTimerName as z,
  runtimeCore_esmBundler_watch as $,
  runtimeCore_esmBundler_resolveComponent as R,
  shared_esmBundler_normalizeStyle as H,
  runtimeCore_esmBundler_withCtx as N,
  runtimeCore_esmBundler_createElementBlock as J,
  runtimeCore_esmBundler_Fragment as K,
  runtimeCore_esmBundler_renderList as Q,
  runtimeCore_esmBundler_createVNode as W,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useUiSportsEventProviderByOldGame as X,
  UiSportsEvent as Y,
} from "./669f85a6b8.js";
import { useBettingCommonData as ee } from "./9de70556bb.js";
import { useFavoritesStore as te } from "./6e5c097416.js";
import { useBettingGameRoute as re } from "./944eab39d4.js";
import { useFavoritesAnalytics as oe } from "./e2e2382b6a.js";
import { AnalyticsBetSourceName as ne } from "./entry-50afb6f36c.js";
import { useSportsRoute as E } from "./f1156f93a8.js";
import { useBettingTimerInterval as ae } from "./bb0d3b59f5.js";
import { useStartIntervalUpdate as se } from "./10dcfb9c91.js";
const ie = (a) => {
    $_$();
    const r = {};
    return (
      Object.keys(a).forEach((t) => {
        Object.defineProperty(r, t, {
          enumerable: !0,
          configurable: !1,
          get: () => $_$() && e(a[t]),
        });
      }),
      w(r)
    );
  },
  Ie = (a) => {
    $_$();
    const {
        pageType: r,
        bettingType: t,
        isTranslationDisabled: m,
        config: c,
        styles: u,
      } = A(U(a)),
      i = ie({
        ...ee({ pageType: r, bettingType: t }),
        isTranslationDisabled: m,
        config: c,
        styles: u,
        favoriteStore: te(),
      });
    return V("BETTING_FAVORITES_PROVIDED_DATA", i), i;
  },
  L = () => $_$() && O("BETTING_FAVORITES_PROVIDED_DATA"),
  me = F({
    __name: "FavoriteGame",
    props: { game: {} },
    setup(a) {
      $_$();
      const r = a,
        { game: t } = A(r),
        {
          trackLeftSideGameOpen: m,
          trackLeftSideVideoEnable: c,
          trackLeftSideAddGameMarket: u,
          trackLeftSideAddGameToFavorites: i,
        } = oe(),
        B = P(),
        I = M(),
        s = L(),
        { sport: v } = E(),
        f = n(() => s.bettingType),
        T = n(() => s.isTranslationDisabled),
        y = n(() => s.config.uiSportsEvent),
        S = n(() => s.config.uiMarket),
        k = n(() => {
          var o;
          return (o = r.game.markets) != null ? o : [];
        }),
        C = n(() => {
          var o;
          return (o = r.game.champName) != null ? o : "";
        }),
        {
          gameRouteLink: d,
          gameSelectedInBetting: l,
          toggleGameRoute: D,
        } = re(t, { pageType: x(() => s.pageType), bettingType: f }),
        p = n(() =>
          $_$() && e(v) ? e(I).params.game === r.game.gameNameForUrl : e(l)
        ),
        _ = () => {
          $_$();
          if (e(v)) {
            B.push(e(d));
            return;
          }
          e(l) || (D(), m({ gameId: e(t).id, sportId: e(t).sportId }));
        };
      return (
        X({
          to: d,
          gameLink: d,
          game: t,
          champName: C,
          markets: k,
          isActive: p,
          isTranslationDisabled: T,
          theme: y,
          marketTheme: S,
          bettingType: f,
          source: ne.Favorite,
          onMarketToCouponAdd: (o) => {
            u({ isAdded: o });
          },
          onVideoEnable: (o) => {
            $_$();
            c({ isEnabled: o, sportId: e(t).sportId });
          },
          onFavoriteAdd: (o) => {
            $_$();
            i({ isAdded: o, sportId: e(t).sportId });
          },
        }),
        (o, h) =>
          $_$() &&
          (g(),
          b(
            Y,
            { onClick: j(_, ["stop"]), fakeLink: e(l), hasDetailedScore: "" },
            null,
            8,
            ["fakeLink"]
          ))
      );
    },
  }),
  Te = F({
    __name: "FavoriteList",
    setup(a) {
      $_$();
      const r = q(),
        t = L(),
        {
          favoritesApi: m,
          favoriteGamesLine: c,
          favoriteGamesLive: u,
          loadFavoriteGames: i,
          checkGameIsFavorite: B,
        } = t.favoriteStore,
        { sport: I } = E(),
        s = n(() => r.coefViewId),
        v = n(() => r.timeZone),
        f = n(() => r.is12h),
        T = n(() => r.userId),
        y = n(() => ($_$() && t.bettingType === Z.LINE ? e(c) : e(u))),
        S = n(() => {
          $_$();
          const p = e(I);
          return e(y).filter((_) => B(_.id) && (p ? _.sportId === p.id : !0));
        }),
        k = n(() => $_$() && [t.bettingType, e(s), e(v), e(f), e(T)]),
        C = async () => i(t.bettingType),
        d = () => {
          m.cancelAllRequest();
        },
        l = ae({ name: z.FAVORITES_COMPONENT }),
        { forceUpdateData: D } = se({
          interval: l,
          onUpdateData: C,
          onCancelIntervalRequest: d,
        });
      return (
        $(k, () => D()),
        (p, _) => {
          $_$();
          const o = R("UiNavItem"),
            h = R("UiNavItems");
          return (
            g(),
            b(
              h,
              {
                theme: e(t).config.uiNavItems,
                isSeparated: !1,
                style: H(e(t).styles),
                class: "favorites-list",
              },
              {
                default: N(
                  () =>
                    $_$() && [
                      (g(!0),
                      J(
                        K,
                        null,
                        Q(
                          e(S),
                          (G) =>
                            $_$() &&
                            (g(),
                            b(
                              o,
                              {
                                key: G.id,
                                isRounded: e(t).config.uiNavItemIsRounded,
                              },
                              {
                                default: N(
                                  () =>
                                    $_$() && [
                                      W(me, { game: G }, null, 8, ["game"]),
                                    ]
                                ),
                                _: 2,
                              },
                              1032,
                              ["isRounded"]
                            ))
                        ),
                        128
                      )),
                    ]
                ),
                _: 1,
              },
              8,
              ["theme", "style"]
            )
          );
        }
      );
    },
  });
export { Te as _sfc_main, Ie as useFavoritesDataProvider };
