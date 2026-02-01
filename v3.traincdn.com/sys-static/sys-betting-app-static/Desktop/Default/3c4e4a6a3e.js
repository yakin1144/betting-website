import $_$ from "./$_$.js";
$_$();
import { useCommonAnalytics as m } from "./entry-50afb6f36c.js";
import {
  createSharedComposable_createSharedComposable_2 as _,
  useGlobalStore as u,
  useUserConfigStore as d,
  BettingPageType as k,
  bettingType_BettingType as g,
  runtimeCore_esmBundler_computed as p,
  equalWatch as v,
  reactivity_esmBundler_unref as G,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useTopGames as f } from "./a0e9c441b8.js";
import { useStartIntervalUpdate as B } from "./10dcfb9c91.js";
const E = _(() => {
    const { sendEventGoogle: e } = m();
    return {
      trackProductClick: (t) => {
        e("main_menu_chapter", { screen: "showcase", option: t });
      },
      trackBetMenuFilterGameCall: (t, o) => {
        e("bet_menu_filter_game_call", {
          sport_id: t,
          screen: "B2B_showcase",
          ...(o && { index: o }),
        });
      },
      trackMainSportsEventsScroll: () => {
        e("main_sport_events_scroll");
      },
      trackMainSportsEventsAll: () => {
        e("main_sport_events_all");
      },
      trackBetGameOpen: (t, o) => {
        e("bet_game_open", { sport_id: t, ...(o && { bookmark_source: o }) });
      },
      trackBetAddFavorite: (t, o) => {
        e("bet_add_favor", { sport_id: t, action: o });
      },
      trackBetVideoOnlineCall: (t) => {
        e("bet_video_online_call", {
          sport_id: t,
          position: "main_universal_sport",
        });
      },
      trackBetOpenInfo: (t) => {
        e("bet_event_info", { screen: t });
      },
    };
  }),
  C = 1e3 * 15,
  S = 10,
  h = () => {
    $_$();
    const e = u(),
      s = d(),
      {
        topGamesList: r,
        topGamesRefresh: n,
        topGamesCancelRequest: a,
        areTopGamesLoading: c,
      } = f({ bettingType: g.LINE, pageType: k.HOME, limit: S }),
      { forceUpdateData: i } = B({
        interval: C,
        onUpdateData: n,
        onCancelIntervalRequest: a,
      }),
      l = p(() => [
        e.getCoefViewId,
        e.getTimeZone,
        e.getIs12h,
        e.getUserId,
        e.marketsNameType,
        s.isInstalled,
        s.isCoeffCutLine,
        s.isCoeffCutLive,
      ]);
    return v(l, i), { topGames: r, isTopGamesLoading: c };
  },
  L = (e) =>
    $_$() && {
      marketGroupsBySportId: p(
        () =>
          $_$() &&
          G(e).reduce((r, n) => {
            var a;
            const c = (a = n.marketGroups) == null ? void 0 : a[1],
              { sportId: i } = n;
            return (
              !c ||
                !i ||
                (r[i] = [{ groupId: 1, groupHints: [], groupTitles: [] }]),
              r
            );
          }, {})
      ),
    };
export {
  E as useHomeShowcaseAnalytics,
  h as useHomeShowcaseTopEvents,
  L as useVictoryMarketGroupsBySportId,
};
