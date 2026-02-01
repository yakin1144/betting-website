import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as L,
  router_useRoute as S,
  runtimeCore_esmBundler_computed as e,
  bettingType_BettingType as p,
  reactivity_esmBundler_unref as t,
  bettingRouteName_BettingRouteName as o,
  BettingPageType as n,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useBettingStore as l } from "./1af6a171a2.js";
const R = L(() => {
  $_$();
  const a = S(),
    s = l(),
    g = e(() => $_$() && s.currentBettingType === p.LIVE),
    c = e(() => $_$() && s.currentBettingType === p.LINE),
    r = e(() => $_$() && t(a).name === o.HOME),
    m = e(() => $_$() && t(a).name === o.MULTI_LIVE),
    i = e(() => $_$() && t(a).params.pageType === n.BETSONYOUR),
    T = e(() => $_$() && t(a).params.pageType === n.CYBER),
    u = e(() => $_$() && t(a).params.pageType === n.MARBLE),
    y = e(() => $_$() && t(a).params.pageType === n.UFC),
    P = e(() => $_$() && t(a).params.pageType === n.POLITICS),
    B = e(() => $_$() && t(a).name === o.TEAM_GAMES_INFO),
    E = e(() => ($_$() && t(r)) || t(i)),
    _ = e(() => $_$() && t(a).params.pageType === n.TOPGAME),
    M = e(() => $_$() && t(a).params.pageType === n.RECOMMENDATION),
    O = e(() => $_$() && t(a).params.pageType === n.TOP_EVENTS);
  return {
    currentBettingType: e(() => s.currentBettingType),
    isLive: g,
    isLine: c,
    isUfcPage: y,
    isPoliticsPage: P,
    isMarblePage: u,
    isHomePage: r,
    isMultiSection: E,
    isCyberPage: T,
    isBetsOnYourPage: i,
    isTeamPage: B,
    isTopGamePage: _,
    isMultiLivePage: m,
    isRecommendationPage: M,
    isTopEventsPage: O,
  };
});
export { R as useBettingPageData };
