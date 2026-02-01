import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as d,
  reactivity_esmBundler_ref as i,
  runtimeCore_esmBundler_computed as u,
  reactivity_esmBundler_unref as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const B = d(() => {
    $_$();
    const r = i(!1);
    return {
      isBetBuilderMode: r,
      setBetBuilderMode: (o) => {
        r.value = o;
      },
    };
  }),
  c = 13589,
  m = 2880,
  l = { 1: 5400, 2: 3600, 3: 2400, 13: 3600 },
  _ = (r, t) =>
    $_$() && {
      progress: u(() => {
        $_$();
        var s;
        const e = a(r),
          n = e.champId === c ? m : (s = l[e.sportId]) != null ? s : 1;
        return `--progress-width :${
          a(t) || e.isNotStarted || !e.sportId || !e.timeInSeconds
            ? 1
            : Math.min(100, (100 / n) * e.timeInSeconds)
        }%`;
      }),
    };
export { B as useBetBuilderMode, _ as useGamesSliderGameProgress };
