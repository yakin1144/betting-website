import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as h,
  useState as m,
  runtimeCore_esmBundler_onMounted as f,
  reactivity_esmBundler_unref as p,
  index_useLogger as S,
  index_useHttpModule as E,
  index_getConfigs as y,
  execAsync as T,
  getServerData as b,
  useGlobalStore as C,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as k,
  runtimeCore_esmBundler_computed as B,
  BettingPageType as L,
  useTimeSettings_useTimeSettings as D,
  index_useCookies as w,
  runtimeCore_esmBundler_nextTick as x,
  runtimeCore_esmBundler_watch as P,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { serverStorageShallowRef as l } from "./entry-50afb6f36c.js";
const d = h(() => {
    $_$();
    const e = m("topEventsConfig", () => []);
    return (
      f(async () => {
        $_$();
        let t, r;
        if (p(e).length) return p(e);
        const g = S(),
          c = E(),
          [s, o, a, i] = y(-1012, -1001, -1e3, -1010);
        try {
          const { data: n } =
            (([t, r] = T(
              () =>
                $_$() &&
                c("/champs-api/v1/get-champs-by-params-web", {
                  headers: {
                    "X-Whence": i,
                    "X-Referral": a,
                    "X-FCountry": s.id,
                    "X-Project-Id": o,
                  },
                  params: { test: b("is") ? "true" : void 0 },
                  cache: {
                    key: `get-champs-by-params-web-${i}-${a}-${s.id}-${o}`,
                    expire: 600,
                  },
                }).execute()
            )),
            (t = await t),
            r(),
            t);
          e.value = Array.isArray(n.response) ? n.response : [];
        } catch (n) {
          g.error("useTopEventsInfoConfig error", n), (e.value = []);
        }
      }),
      { topEventsConfig: e }
    );
  }),
  _ = {
    1: "top_events_info_events_football_bg",
    66: "top_events_info_events_cricket_bg",
    3: "top_events_info_events_basketball_bg",
    2: "top_events_info_events_hockey_bg",
    40: "top_events_info_events_cyber_bg",
    default: "",
  },
  R = (e) => (_[e] ? _[e] : _.default),
  G = () => {
    $_$();
    const e = C(),
      { getBettingRouteUrl: u } = k(),
      { topEventsConfig: t } = d();
    return B(
      () =>
        $_$() &&
        u({
          lng: e.getLanguage,
          pageType: L.TOP_EVENTS,
          pageSubType: p(t)[0].routePageType,
        })
    );
  },
  X = () => {
    $_$();
    var e;
    const { topEventsConfig: u } = d(),
      { timezone: t } = D(),
      r = w(),
      c =
        ((e = p(u)[0].firstGameStart) != null ? e : Date.now()) -
        Date.now() / 1e3,
      s = () => r.get("isTopEventsStarted") || c <= 0,
      o = () =>
        r.get("isLessThanThreeDaysBeforeStartTopEvents") || c <= 864e5 * 4,
      a = l(s(), "isTopEventsStarted"),
      i = l(o(), "isLessThanThreeDaysBeforeStartTopEvents");
    return (
      f(async () => {
        $_$();
        let n, v;
        ([n, v] = T(() => $_$() && x())),
          await n,
          v(),
          (a.value = s()),
          (i.value = o());
      }),
      P(t, () => {
        (a.value = s()), (i.value = o());
      }),
      {
        millisecondsBeforeStart: c,
        isTopEventsStarted: a,
        isLessThanThreeDaysBeforeStartTopEvents: i,
        checkLessThanThreeDaysBeforeStartTopEvents: o,
        checkTopEventsStarted: s,
      }
    );
  };
export {
  R as getTopEventsInfoBackground,
  X as useCheckTopEventsDates,
  d as useTopEventsConfig,
  G as useTopEventsPageLink,
};
