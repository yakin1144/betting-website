import { GameOpenSource as o } from "./1af6a171a2.js";
import { useCommonAnalytics as i } from "./entry-50afb6f36c.js";
import { createSharedComposable_createSharedComposable_2 as m } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const p = m(() => {
  const { sendGTagEvent: n, sendGoogleAndFatmanEvent: t } = i({
    analyticsCategory: "v3_Левый блок",
  });
  return {
    trackLeftSideVideoEnable: ({ sportId: e, isEnabled: a }) => {
      a &&
        t(
          { google: "bet_video_online_call", fatman: 1064 },
          {
            google: { position: o.FAVORITE, sportId: e },
            fatman: { s1: o.FAVORITE, i1: e },
          }
        );
    },
    trackLeftSideAddGameMarket: ({ isAdded: e }) => {
      e && n("v3_Добавить событие в купон", "Избранные игры");
    },
    trackLeftSideAddGameToFavorites: ({ sportId: e, isAdded: a }) => {
      const r = a ? "remove" : "add_favor";
      t(
        { google: "bet_add_favor", fatman: 1081 },
        { google: { action: r, sport_id: e }, fatman: { s1: r, i1: e } }
      );
    },
    trackLeftSideGameOpen: ({ gameId: e, sportId: a }) => {
      n('v3_Клик "Избранные игры"', String(a)),
        t(
          { google: "bet_game_open", fatman: 1065 },
          {
            google: { bookmark_source: o.FAVORITE, gameId: e },
            fatman: { s1: o.FAVORITE, i1: e },
          }
        );
    },
    trackGameOpen: ({ gameId: e, sportId: a }) => {
      n('v3_Клик "Избранные игры"', String(a), { category: "" }),
        t(
          { google: "bet_game_open", fatman: 1065 },
          {
            google: { bookmark_source: o.FAVORITE, gameId: e },
            fatman: { s1: o.FAVORITE, i1: e },
          }
        );
    },
  };
});
export { p as useFavoritesAnalytics };
