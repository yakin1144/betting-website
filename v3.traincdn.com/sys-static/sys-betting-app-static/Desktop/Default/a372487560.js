import $_$ from "./$_$.js";
$_$();
import {
  isLineByType as I,
  useBettingStateInjector as P,
  SPORTS_WITHOUT_PERIOD_SCORES as L,
} from "./9de70556bb.js";
import { useGameInfo as N } from "./4e4f01046c.js";
import {
  useBettingRouteWithLang as O,
  getIsSinglePlayerEvent as R,
} from "./entry-50afb6f36c.js";
import { useDashboardStore as E } from "./9bf7ffb8ec.js";
import {
  runtimeCore_esmBundler_computed as o,
  reactivity_esmBundler_unref as e,
  BettingPageType as D,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useBettingPageData as U } from "./4a993370c6.js";
const H = (t) => {
  $_$();
  const { bettingType: s } = E(),
    { getBettingRouteWithLang: n } = O(),
    a = o(() => $_$() && I(e(s))),
    { isTeamPage: i } = U(),
    { pageType: c } = P(),
    {
      firstTeamName: m,
      secondTeamName: p,
      firstTeamSeed: u,
      secondTeamSeed: d,
      firstOpponentScoreLabel: l,
      secondOpponentScoreLabel: S,
      currentPeriodLabel: T,
    } = N(t, a),
    f = o(() => {
      $_$();
      var r;
      return !!((r = e(t).markets) != null && r.length);
    }),
    h = o(() => $_$() && R(e(t))),
    v = o(() => $_$() && !!(e(t).hasScores && !L.includes(e(t).sportId))),
    b = o(() => {
      $_$();
      var r;
      return (r = e(t).statistics) == null ? void 0 : r.subScore;
    }),
    g = o(() => $_$() && e(t).periodScores),
    B = o(() => {
      $_$();
      var r;
      return (r = e(t).statistics) == null ? void 0 : r.serverTeamNumber;
    }),
    _ = o(() => $_$() && e(t).sportId),
    y = o(
      () =>
        $_$() &&
        n({
          pageType: e(i) ? D.HOME : e(c),
          section: e(s),
          sport: e(t).sportNameForUrl,
          champ: e(t).champNameForUrl,
          game: e(t).gameNameForUrl,
        })
    );
  return {
    shouldShowScores: v,
    firstTeamName: m,
    secondTeamName: p,
    firstTeamSeed: u,
    secondTeamSeed: d,
    isMarketsLoaded: f,
    isSinglePlayerEvent: h,
    subScore: b,
    firstOpponentScoreLabel: l,
    secondOpponentScoreLabel: S,
    currentPeriodLabel: T,
    periodScores: g,
    serverTeamNumber: B,
    sportId: _,
    gameRouteParams: y,
  };
};
export { H as useDashboardGameInfo };
