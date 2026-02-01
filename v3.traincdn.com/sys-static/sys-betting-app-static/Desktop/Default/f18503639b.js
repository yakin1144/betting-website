import $_$ from "./$_$.js";
$_$();
import {
  bettingType_BettingType as n,
  router_useRoute as y,
  runtimeCore_esmBundler_computed as r,
  reactivity_esmBundler_unref as t,
  createSharedComposable_createSharedComposable_2 as T,
  index_useT as m,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useBettingPageData as g } from "./4a993370c6.js";
const I = { now: "In-Play", today: "Today", upcoming: "Early" },
  l = { [n.LIVE]: "In-Play", [n.LINE]: "Today" },
  f = (e) => {
    $_$();
    const s = y();
    return {
      tabId: r(() => {
        $_$();
        const a = s.query.tab;
        if (typeof a == "string") {
          const i = I[a];
          if (i) return i;
        }
        return l[t(e)];
      }),
    };
  },
  B = T(() => {
    $_$();
    const e = m(),
      s = y(),
      { currentBettingType: o, isMultiSection: a } = g(),
      i = r(() => $_$() && t(o) === n.LINE),
      b = r(() => $_$() && t(o) === n.LIVE),
      { tabId: d } = f(o),
      c = r(
        () =>
          $_$() &&
          [
            {
              value: "In-Play",
              name: e("betting_tab_in_play"),
              caption: e("betting_tab_in_play"),
              visible: t(b) || t(a),
              alignLeft: t(b) && !t(a),
              to: { params: { section: n.LIVE }, query: { tab: "now" } },
            },
            {
              value: "Today",
              name: e("betting_tab_today"),
              caption: e("betting_tab_today"),
              visible: t(i) || t(a),
              alignLeft: !1,
              to: { params: { section: n.LINE }, query: { tab: "today" } },
            },
            {
              value: "Early",
              name: e("betting_tab_early"),
              caption: e("betting_tab_early"),
              visible: t(i) || t(a),
              alignLeft: !1,
              to: { params: { section: n.LINE }, query: { tab: "upcoming" } },
            },
          ].filter((u) => u.visible)
      ),
      p = r(() => {
        $_$();
        const u = s.query ? t(d) : l[t(o)];
        return t(c).find(({ value: _ }) => _ === u);
      });
    return { tabs: c, selectedTab: p };
  }),
  L = ["Today", "Early"],
  q = (e) => L.includes(e);
export { q as isTabInLine, B as useSportsMenuTabStore };
