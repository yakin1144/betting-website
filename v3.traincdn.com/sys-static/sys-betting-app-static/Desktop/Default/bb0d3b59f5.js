import $_$ from "./$_$.js";
$_$();
import {
  bettingTimerName_BettingTimerName as N,
  bettingType_BettingType as e,
  runtimeCore_esmBundler_computed as c,
  reactivity_esmBundler_unref as t,
  isNumber as A,
  useNuxtApp as V,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useMediaStore as P, MediaType as m } from "./entry-50afb6f36c.js";
const O = "default",
  r = 1e3 * 2,
  _ = 1e3 * 3,
  d = 1e3 * 5,
  n = 1e3 * 10,
  E = 1e3 * 15,
  D = 1e3 * 30,
  C = 6e4 * 5,
  R = 6e4 * 10,
  s = {
    2566618: { [e.LINE]: E, [e.LIVE]: r },
    146: { [e.LINE]: E, [e.LIVE]: _ },
    284: { [e.LINE]: E, [e.LIVE]: _ },
    301: { [e.LINE]: E, [e.LIVE]: _ },
    153: { [e.LINE]: E, [e.LIVE]: _ },
    268: { [e.LINE]: E, [e.LIVE]: _ },
    235: { [e.LINE]: E, [e.LIVE]: _ },
    236: { [e.LINE]: E, [e.LIVE]: _ },
    210: { [e.LINE]: E, [e.LIVE]: _ },
    311: { [e.LINE]: E, [e.LIVE]: _ },
    [N.DASHBOARD_COMPONENT]: { [e.LINE]: E, [e.LIVE]: d },
    [N.GAME_COMPONENT]: { [e.LINE]: E, [e.LIVE]: d },
    [N.SYNTHETIC_GAME_COMPONENT]: { [e.LINE]: E, [e.LIVE]: r },
    [N.GAME_OVER_PANEL_COMPONENT]: { [e.LINE]: E, [e.LIVE]: n },
    [N.COUPON_COMPONENT]: { [O]: n },
    [N.COUPON_OPENED_COST_COMPONENT]: { [O]: E },
    [N.GAME_SLIDER_COMPONENT]: { [e.LINE]: D, [e.LIVE]: E },
    [N.MEDIA_COMPONENT]: { [O]: R },
    [N.MENU_COMPONENT]: { [e.LINE]: n, [e.LIVE]: d },
    [N.CHAMP_RESULTS_COMPONENT]: { [O]: E },
    [N.FAVORITES_COMPONENT]: { [e.LINE]: n, [e.LIVE]: d },
    [N.GAME_TIMELINE_DATA_PROVIDER_COMPONENT]: { [e.LIVE]: 6e4 },
    [N.CYBER_CALENDAR_COMPONENT]: { [e.LINE]: C, [e.LIVE]: C },
    [N.TOP_GAMES]: { [e.LINE]: 6e4, [e.LIVE]: n },
    [N.USER_MESSAGES]: { [O]: 6e4 },
    [N.TOP_CHAMPS]: { [O]: n },
    [N.RECOMMENDED_GAMES_COMPONENT]: { [e.LINE]: E, [e.LIVE]: n },
    [N.EXPRESS_OF_THE_DAY]: { [e.LINE]: E, [e.LIVE]: E },
    [N.COUPON_NOTIFICATION]: { [O]: n },
    [N.INSIGHTS]: { [O]: E },
  },
  u = 1e4,
  y = ({
    name: T,
    bettingType: I = "default",
    champId: a = NaN,
    sportId: o = NaN,
  }) =>
    $_$() &&
    c(() => {
      $_$();
      var M, S, l;
      let L = u;
      return (
        t(a) in s
          ? (L = (M = s[t(a)]) == null ? void 0 : M[t(I)])
          : t(o) in s
          ? (L = (S = s[t(o)]) == null ? void 0 : S[t(I)])
          : t(T) in s && (L = (l = s[t(T)]) == null ? void 0 : l[t(I)]),
        A(L) || (L = u),
        L
      );
    }),
  G = () => $_$() && V().vueApp.config.globalProperties.$layoutState,
  p = (T) => {
    $_$();
    G() || V().provide("layoutState", T);
  },
  F = (T) => {
    $_$();
    const I = P(),
      a = c(() => I.mediaEntities),
      o = c(() => $_$() && t(a).filter((i) => $_$() && i.gameId === t(T))),
      M = c(() => $_$() && t(o).find(({ type: i }) => i === m.VIDEO)),
      S = c(() => $_$() && t(M) !== void 0);
    return {
      mediaEntities: a,
      mediaEntitiesByGame: o,
      videoByGame: M,
      isVideoActive: S,
      selectMedia: (i) => {
        I.mediaSelectMedia(i);
      },
      unselectMedia: (i) => {
        I.mediaUnselectMedia(i);
      },
      clearMedia: () => {
        I.mediaClearMedia();
      },
      unselectMediaById: (i) => {
        I.mediaUnselectAllMediaGameId(i);
      },
    };
  };
export {
  s as BETTING_TIMERS,
  O as BETTING_TIMER_TYPE_DEFAULT,
  F as useBettingGameMediaEntities,
  y as useBettingTimerInterval,
  G as useLayoutStateInjector,
  p as useLayoutStateProvider,
};
