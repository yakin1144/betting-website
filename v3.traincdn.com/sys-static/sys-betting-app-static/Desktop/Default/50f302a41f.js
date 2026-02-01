import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as l,
  index_useLogger as a,
  reactivity_esmBundler_onScopeDispose as v,
  noop as O,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const w = l(() => {
  $_$();
  const b = a();
  let r;
  const s = new Map(),
    t = window && "IntersectionObserver" in window,
    u = (e) => {
      e.forEach((n) => {
        const o = s.get(n.target);
        o == null || o(n);
      });
    },
    i = (e) => {
      !r || !e || (r.unobserve(e), s.delete(e));
    },
    d = (e, n, o = !0) => {
      $_$();
      if (!r || !e) return O;
      const c = () => i(e);
      return r.observe(e), s.set(e, n), o && v(c), c;
    },
    p = (e) => {
      if (t)
        try {
          r = new IntersectionObserver(u, e);
        } catch (n) {
          b.error("useIntersectionObserver", n);
        }
    };
  return (
    v(() => {
      r == null || r.disconnect(), (r = void 0);
    }),
    {
      isSupported: t,
      intersectionObserverInit: p,
      intersectionObserve: d,
      intersectionUnobserve: i,
    }
  );
});
export { w as useIntersectionObserver };
