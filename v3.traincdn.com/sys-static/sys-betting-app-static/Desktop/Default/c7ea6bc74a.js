import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as E,
  reactivity_esmBundler_shallowRef as b,
  runtimeCore_esmBundler_computed as d,
  reactivity_esmBundler_unref as o,
  runtimeCore_esmBundler_onMounted as y,
  execAsync as A,
  reactivity_esmBundler_ref as m,
  whenever as R,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useGameVideoAvailabilityService as V,
  useRtlInfo as u,
  useScrollPosition as S,
} from "./entry-50afb6f36c.js";
const C = E(() => {
    $_$();
    const r = V(),
      t = b(),
      c = d(() => $_$() && o(t)),
      n = async () => {
        $_$();
        let l, e;
        ([l, e] = A(() => r.loadConfig())), await l, e(), (t.value = r);
      },
      a = (l) => {
        $_$();
        var e;
        return !!((e = o(t)) != null && e.isAvailable(o(l)));
      },
      i = (l) => {
        $_$();
        var e;
        return !!((e = o(t)) != null && e.isCheckVideoAccess(o(l)));
      },
      s = (l) => {
        $_$();
        var e;
        return !!((e = o(t)) != null && e.isCheckVideoEnabled(o(l)));
      };
    return (
      y(() => {
        n();
      }),
      {
        isVideoAvailabilityServiceReady: c,
        checkGameVideoAvailable: a,
        checkGameVideoAccess: i,
        checkVideoEnabled: s,
      }
    );
  }),
  v = 10,
  k = (r = v) => {
    $_$();
    const { isRtl: t } = u(),
      {
        onScroll: c,
        isHorizontalScrollStartLimitReached: n,
        isHorizontalScrollEndLimitReached: a,
      } = S({ isRtl: t, offsetBound: r }),
      i = m(!0),
      s = m(),
      l = d(() => ($_$() && o(i)) || o(n)),
      e = d(() => ($_$() && o(i)) || o(a));
    return (
      R(
        s,
        ({ clientWidth: _, scrollWidth: h }) => {
          i.value = _ === h;
        },
        { immediate: !0 }
      ),
      { onScroll: c, scrollElement: s, isScrollStart: l, isScrollEnd: e }
    );
  },
  p = (r = v) => {
    $_$();
    const { isRtl: t } = u(),
      {
        onScroll: c,
        isHorizontalScrollStartLimitReached: n,
        isHorizontalScrollEndLimitReached: a,
      } = S({ isRtl: t, offsetBound: r }),
      i = m();
    return { onScroll: c, scrollElement: i, isScrollStart: n, isScrollEnd: a };
  };
export {
  C as useGameVideoAvailability,
  k as useScrollElement,
  p as useScrollElementMarkets,
};
