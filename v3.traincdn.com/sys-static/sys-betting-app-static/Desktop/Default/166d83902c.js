import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as C,
  index_useAppStorage as y,
  index_useLogger as A,
  execAsync as c,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useCommonAnalytics as S,
  useAnalyticsAppStorage as u,
} from "./entry-50afb6f36c.js";
const b = C(() => {
  $_$();
  const { sendGoogleAndFatmanEvent: _ } = S(),
    i = y(),
    m = A(),
    p = async () => {
      $_$();
      var a, o;
      let e, t;
      const { getStorage: l } = u({ appStorage: i, logger: m }),
        n =
          (a = (([e, t] = c(() => l())), (e = await e), t(), e)) != null
            ? a
            : {},
        g = (o = n.regTryCounter) != null ? o : 0,
        r = n.lastRegCallTime,
        s = r ? Math.trunc((Date.now() - r) / 1e3) : "";
      return { storage: n, count: g, timeFromLastRegCall: s };
    };
  return {
    trackRegistrationPageCall: async (a) => {
      $_$();
      var o;
      let e, t;
      const { getStorage: l, updateActionsMetrics: n } = u({
          appStorage: i,
          logger: m,
        }),
        g =
          (o = (([e, t] = c(() => l())), (e = await e), t(), e)) != null
            ? o
            : {},
        { count: r } = (([e, t] = c(() => p())), (e = await e), t(), e),
        s = r + 1;
      _(
        { google: "reg_page_call", fatman: 1518 },
        { google: { ...a, count: s }, fatman: { s1: a.screen } }
      ),
        ([e, t] = c(() =>
          n(g, { regTryCounter: s, lastRegCallTime: Date.now(), hasDone: !1 })
        )),
        await e,
        t();
    },
  };
});
export { b as useRegistrationEventsAnalytics };
