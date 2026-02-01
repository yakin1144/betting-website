import $_$ from "./$_$.js";
$_$();
import {
  index_useLogger as k,
  useGlobalStore as B,
  useUserConfigStore as N,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as F,
  index_getConfigs as P,
  reactivity_esmBundler_unref as t,
  execAsync as p,
  runtimeCore_esmBundler_computed as d,
  BettingPageType as C,
  reactivity_esmBundler_ref as b,
  runtimeCore_esmBundler_watch as A,
  bettingType_BettingType as O,
  watchOnce_watchOnce as w,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useTopGames as U, useTopGamesPolling as x } from "./a0e9c441b8.js";
import { usePopularEventParamsStore as D } from "./914ab66f1a.js";
import { BETTING_STORE_TYPE_MAP as H } from "./7fd3152d11.js";
import {
  useMediaStore as W,
  MediaTarget as Y,
  MediaType as z,
} from "./entry-50afb6f36c.js";
import { useGameVideoAvailability as j } from "./c7ea6bc74a.js";
import { useDashboardApi as q } from "./58a21526ee.js";
import { useMainMenuAnalytics as J } from "./30806a74d6.js";
const K = ({ topGamesList: s, bettingType: _ }) => {
    $_$();
    const S = k(),
      i = B(),
      f = q(),
      G = N(),
      n = W(),
      { checkGameVideoAvailable: I } = j(),
      { getBettingRouteUrl: r } = F(),
      [v, { id: c }, V, M] = P(339, -1012, -1e3, -1001),
      { loadParams: h, params: R } = D(),
      m = 5,
      l = 1,
      E = (o) => o.find((a) => I(a) && !a.isGameOver),
      u = () =>
        n.mediaUnselectMedia(
          n.getMediaEntities().find(({ isRecommended: o }) => o)
        ),
      g = async () => {
        $_$();
        let o, a;
        try {
          ([o, a] = p(() => h())), await o, a();
          const e = {
              country: c,
              partner: V,
              groupId: M,
              lng: i.getLanguage,
              coefViewId: i.getCoefViewId,
              userId: G.isCoeffCutLive ? i.getUserId : void 0,
              count: m,
              zve: l,
              isRecommendations: !0,
              mode: 4,
              cyberFlag: 3,
              countryFirst: v,
              ...t(R),
            },
            {
              data: { games: L = [] },
            } =
              (([o, a] = p(
                () =>
                  $_$() &&
                  t(f).load1x2(H.HOME_LIVE, e, {
                    marketsNameType: i.marketsNameType,
                  })
              )),
              (o = await o),
              a(),
              o);
          return L;
        } catch (e) {
          return S.error("Load recommended games for video failed", e), [];
        }
      };
    return {
      loadRecommendedGameVideo: async () => {
        $_$();
        let o, a;
        const e =
          E(t(s)) || E((([o, a] = p(() => g())), (o = await o), a(), o));
        if (e) {
          const L = n
            .getMediaEntities()
            .find(
              (T) =>
                T.isRecommended && T.videoId !== e.videoId && T.gameId !== e.id
            );
          L && (([o, a] = p(() => n.mediaUnselectMedia(L))), await o, a()),
            n.mediaSelectMedia({
              type: z.VIDEO,
              target: Y.SIDE,
              gameLink: r({
                lng: i.getLanguage,
                section: t(_),
                menuSection: e.menuSectionNameForUrl,
                sport: e.sportNameForUrl,
                champ: e.champNameForUrl,
                game: e.gameNameForUrl,
              }),
              videoId: e.videoId,
              gameId: e.id,
              sportId: e.sportId,
              isRecommended: !0,
            });
        }
      },
      removeRecommendedGameVideo: u,
    };
  },
  se = ({ bettingType: s, pageType: _, methodName: S }) => {
    $_$();
    const [i, f] = P(492, 321),
      G = B(),
      { trackClickMenuNav: n } = J(),
      I = U({
        bettingType: s,
        pageType: _,
        sportIds: i ? [...i] : void 0,
        methodName: S,
      }),
      { topGamesList: r, isFirstLoad: v } = I;
    x(I);
    const { loadRecommendedGameVideo: c, removeRecommendedGameVideo: V } = K({
        topGamesList: r,
        bettingType: s,
      }),
      { getBettingRouteUrl: M } = F(),
      h = d(
        () =>
          $_$() && M({ lng: G.getLanguage, pageType: C.TOPGAME, section: t(s) })
      ),
      R = { RIGHT: "top_games_previous", LEFT: "top_games_next" },
      m = b(1),
      l = b("LEFT"),
      E = d(() => $_$() && t(r)[t(m) - 1]),
      u = d(() => G.isLeftSectionVisible),
      g = d(() => ($_$() && t(v)) || !!t(r).length),
      y = d(() => $_$() && t(g) && t(u)),
      o = d(() => $_$() && t(g) && !t(u));
    return (
      A(m, (a, e) => {
        $_$();
        (l.value = e - a === 1 || a - e > 1 ? "RIGHT" : "LEFT"), n(R[t(l)]);
      }),
      A(
        () => $_$() && t(s),
        async () => {
          $_$();
          let a, e;
          if ((t(_) === C.HOME && (m.value = 1), f)) {
            if (t(s) !== O.LIVE) {
              ([a, e] = p(() => V())), await a, e();
              return;
            }
            w(r, c);
          }
        }
      ),
      f && t(s) === O.LIVE && (t(g) ? c() : w(r, c)),
      {
        topGamesLink: h,
        topGamesList: r,
        slideNumber: m,
        topGamesSwipeDirection: l,
        currentGame: E,
        isFirstLoad: v,
        isLeftSectionVisible: u,
        isVisibleExpanded: y,
        isVisibleIcon: o,
      }
    );
  };
export { se as useTopGamesApp };
