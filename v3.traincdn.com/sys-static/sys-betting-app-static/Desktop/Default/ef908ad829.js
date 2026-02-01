import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as l,
  index_useLogger as p,
  reactivity_esmBundler_onScopeDispose as d,
  noop as b,
  runtimeCore_esmBundler_watchEffect as f,
  unrefElement as m,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const w = l(() => {
    $_$();
    const v = p();
    let r;
    const s = new Map(),
      o = window && "ResizeObserver" in window,
      i = (e) =>
        e.forEach((t) => {
          var c;
          return (c = s.get(t.target)) == null
            ? void 0
            : c.forEach((u) => u(t));
        }),
      n = (e) => {
        !r || !e || (r.unobserve(e), s.delete(e));
      },
      a = (e, t) => {
        $_$();
        if (!r || !e) return b;
        const c = () => n(e);
        r.observe(e);
        const u = s.get(e);
        return u ? u.add(t) : s.set(e, new Set([t])), c;
      };
    if (o)
      try {
        r = new ResizeObserver(i);
      } catch (e) {
        v.error("useResizeObserver", e);
      }
    return (
      d(() => {
        r == null || r.disconnect(), (r = void 0);
      }),
      { resizeObserve: a, resizeUnobserve: n }
    );
  }),
  O = (v, r) => {
    $_$();
    const { resizeObserve: s } = w();
    let o = b,
      i = b;
    const n = () => {
      i(), o();
    };
    return (
      (i = f(() => {
        $_$();
        const a = m(v);
        o(), (o = s(a, r));
      })),
      d(n),
      n
    );
  };
export { w as useResizeObserver, O as useTemplateResizeObserver };
