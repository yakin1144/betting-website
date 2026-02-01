import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as a,
  reactivity_esmBundler_ref as r,
  LeavingPage_LeavingPage as s,
  reactivity_esmBundler_onScopeDispose as i,
  isDef as n,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { isHomeAwayGame as m } from "./9de70556bb.js";
import { INDIVIDUAL_SPORT_IDS as d } from "./entry-50afb6f36c.js";
const p = a(() => {
    $_$();
    const e = r(!1),
      o = new s();
    e.value = o.isHidden;
    const t = () => {
      e.value = o.isHidden;
    };
    return (
      o.on(s.LEAVING, t),
      o.on(s.COME_BACK, t),
      i(() => {
        $_$();
        o.remove(s.LEAVING, t), o.remove(s.COME_BACK, t);
      }),
      { hasLeftPage: e, leavingPage: o }
    );
  }),
  u = (e) => $_$() && n(e.statisticGameId) && !m(e),
  I = (e) => d.includes(e.sportId);
export {
  I as shouldShowIndividualStats,
  u as shouldShowTeamStats,
  p as usePageLeave,
};
