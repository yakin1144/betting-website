import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as n,
  reactivity_esmBundler_ref as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const c = n(() => {
  $_$();
  const e = a();
  return {
    onSelect: (t) => {
      e.value = t;
    },
    highRankingTournamentsSelectedChamp: e,
  };
});
export { c as useHighRankingTouranmentsSelectedChamp };
