import $_$ from "./$_$.js";
$_$();
import {
  reactivity_esmBundler_unref as O,
  reactivity_esmBundler_getCurrentScope as U,
  reactivity_esmBundler_onScopeDispose as Z,
  runtimeCore_esmBundler_onMounted as Q,
  runtimeCore_esmBundler_nextTick as X,
  reactivity_esmBundler_isRef as ee,
  runtimeCore_esmBundler_getCurrentInstance as $,
  runtimeCore_esmBundler_watch as K,
  reactivity_esmBundler_ref as B,
  runtimeCore_esmBundler_watchEffect as te,
  runtimeCore_esmBundler_computed as L,
  isVue2 as oe,
  reactivity_esmBundler_reactive as k,
  runtimeCore_esmBundler_inject as ne,
  useGlobalStore as re,
  unrefElement as le,
  runtimeCore_esmBundler_provide as ie,
  execAsync as se,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
function H(e) {
  $_$();
  return U() ? (Z(e), !0) : !1;
}
function b(e) {
  $_$();
  return typeof e == "function" ? e() : O(e);
}
const ce = typeof window != "undefined" && typeof document != "undefined";
typeof WorkerGlobalScope != "undefined" && window instanceof WorkerGlobalScope;
const ue = Object.prototype.toString,
  ae = (e) => ue.call(e) === "[object Object]",
  A = () => {};
function Y(e, o) {
  function t(...n) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => o.apply(this, n), { fn: o, thisArg: this, args: n })
      )
        .then(r)
        .catch(i);
    });
  }
  return t;
}
function fe(e, o = {}) {
  let t,
    n,
    r = A;
  const i = (d) => {
    clearTimeout(d), r(), (r = A);
  };
  return (d) => {
    const p = b(e),
      u = b(o.maxWait);
    return (
      t && i(t),
      p <= 0 || (u !== void 0 && u <= 0)
        ? (n && (i(n), (n = null)), Promise.resolve(d()))
        : new Promise((l, c) => {
            (r = o.rejectOnCancel ? c : l),
              u &&
                !n &&
                (n = setTimeout(() => {
                  t && i(t), (n = null), l(d());
                }, u)),
              (t = setTimeout(() => {
                n && i(n), (n = null), l(d());
              }, p));
          })
    );
  };
}
function de(...e) {
  $_$();
  let o = 0,
    t,
    n = !0,
    r = A,
    i,
    f,
    d,
    p,
    u;
  !ee(e[0]) && typeof e[0] == "object"
    ? ({
        delay: f,
        trailing: d = !0,
        leading: p = !0,
        rejectOnCancel: u = !1,
      } = e[0])
    : ([f, d = !0, p = !0, u = !1] = e);
  const l = () => {
    t && (clearTimeout(t), (t = void 0), r(), (r = A));
  };
  return (a) => {
    const v = b(f),
      _ = Date.now() - o,
      T = () => (i = a());
    return (
      l(),
      v <= 0
        ? ((o = Date.now()), T())
        : (_ > v && (p || !n)
            ? ((o = Date.now()), T())
            : d &&
              (i = new Promise((y, m) => {
                (r = u ? m : y),
                  (t = setTimeout(() => {
                    (o = Date.now()), (n = !0), y(T()), l();
                  }, Math.max(0, v - _)));
              })),
          !p && !t && (t = setTimeout(() => (n = !0), v)),
          (n = !1),
          i)
    );
  };
}
function me(e) {
  $_$();
  return $();
}
function pe(e, o = 200, t = {}) {
  return Y(fe(o, t), e);
}
function ve(e, o = 200, t = !1, n = !0, r = !1) {
  return Y(de(o, t, n, r), e);
}
function he(e, o = !0, t) {
  $_$();
  me() ? Q(e, t) : o ? e() : X(e);
}
function D(e) {
  var o;
  const t = b(e);
  return (o = t == null ? void 0 : t.$el) != null ? o : t;
}
const x = ce ? window : void 0;
function z(...e) {
  $_$();
  let o, t, n, r;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([t, n, r] = e), (o = x))
      : ([o, t, n, r] = e),
    !o)
  )
    return A;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const i = [],
    f = () => {
      i.forEach((l) => l()), (i.length = 0);
    },
    d = (l, c, a, v) => (
      l.addEventListener(c, a, v), () => l.removeEventListener(c, a, v)
    ),
    p = K(
      () => [D(o), b(r)],
      ([l, c]) => {
        if ((f(), !l)) return;
        const a = ae(c) ? { ...c } : c;
        i.push(...t.flatMap((v) => n.map((_) => d(l, v, _, a))));
      },
      { immediate: !0, flush: "post" }
    ),
    u = () => {
      p(), f();
    };
  return H(u), u;
}
function be() {
  $_$();
  const e = B(!1),
    o = $();
  return (
    o &&
      Q(
        () => {
          e.value = !0;
        },
        oe ? null : o
      ),
    e
  );
}
function q(e) {
  $_$();
  const o = be();
  return L(() => (o.value, !!e()));
}
function we(e, o = {}) {
  $_$();
  const { window: t = x } = o,
    n = q(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let r;
  const i = B(!1),
    f = (u) => {
      i.value = u.matches;
    },
    d = () => {
      r &&
        ("removeEventListener" in r
          ? r.removeEventListener("change", f)
          : r.removeListener(f));
    },
    p = te(() => {
      n.value &&
        (d(),
        (r = t.matchMedia(b(e))),
        "addEventListener" in r
          ? r.addEventListener("change", f)
          : r.addListener(f),
        (i.value = r.matches));
    });
  return (
    H(() => {
      p(), d(), (r = void 0);
    }),
    i
  );
}
function Te(e, o, t = {}) {
  $_$();
  const { window: n = x, ...r } = t;
  let i;
  const f = q(() => n && "ResizeObserver" in n),
    d = () => {
      i && (i.disconnect(), (i = void 0));
    },
    p = L(() => (Array.isArray(e) ? e.map((c) => D(c)) : [D(e)])),
    u = K(
      p,
      (c) => {
        if ((d(), f.value && n)) {
          i = new ResizeObserver(o);
          for (const a of c) a && i.observe(a, r);
        }
      },
      { immediate: !0, flush: "post" }
    ),
    l = () => {
      d(), u();
    };
  return H(l), { isSupported: f, stop: l };
}
const I = 1;
function _e(e, o = {}) {
  $_$();
  const {
      throttle: t = 0,
      idle: n = 200,
      onStop: r = A,
      onScroll: i = A,
      offset: f = { left: 0, right: 0, top: 0, bottom: 0 },
      eventListenerOptions: d = { capture: !1, passive: !0 },
      behavior: p = "auto",
      window: u = x,
      onError: l = (s) => {
        console.error(s);
      },
    } = o,
    c = B(0),
    a = B(0),
    v = L({
      get() {
        return c.value;
      },
      set(s) {
        T(s, void 0);
      },
    }),
    _ = L({
      get() {
        return a.value;
      },
      set(s) {
        T(void 0, s);
      },
    });
  function T(s, g) {
    var h, C, M;
    if (!u) return;
    const w = b(e);
    w &&
      ((M = w instanceof Document ? u.document.body : w) == null ||
        M.scrollTo({
          top: (h = b(g)) != null ? h : _.value,
          left: (C = b(s)) != null ? C : v.value,
          behavior: b(p),
        }));
  }
  const y = B(!1),
    m = k({ left: !0, right: !1, top: !0, bottom: !1 }),
    S = k({ left: !1, right: !1, top: !1, bottom: !1 }),
    W = (s) => {
      y.value &&
        ((y.value = !1),
        (S.left = !1),
        (S.right = !1),
        (S.top = !1),
        (S.bottom = !1),
        r(s));
    },
    N = pe(W, t + n),
    j = (s) => {
      var g;
      if (!u) return;
      const h =
          ((g = s == null ? void 0 : s.document) == null
            ? void 0
            : g.documentElement) ||
          (s == null ? void 0 : s.documentElement) ||
          D(s),
        { display: C, flexDirection: M } = getComputedStyle(h),
        w = h.scrollLeft;
      (S.left = w < c.value), (S.right = w > c.value);
      const P = Math.abs(w) <= (f.left || 0),
        V = Math.abs(w) + h.clientWidth >= h.scrollWidth - (f.right || 0) - I;
      C === "flex" && M === "row-reverse"
        ? ((m.left = V), (m.right = P))
        : ((m.left = P), (m.right = V)),
        (c.value = w);
      let E = h.scrollTop;
      s === u.document && !E && (E = u.document.body.scrollTop),
        (S.top = E < a.value),
        (S.bottom = E > a.value);
      const F = Math.abs(E) <= (f.top || 0),
        R =
          Math.abs(E) + h.clientHeight >= h.scrollHeight - (f.bottom || 0) - I;
      C === "flex" && M === "column-reverse"
        ? ((m.top = R), (m.bottom = F))
        : ((m.top = F), (m.bottom = R)),
        (a.value = E);
    },
    G = (s) => {
      var g;
      if (!u) return;
      const h = (g = s.target.documentElement) != null ? g : s.target;
      j(h), (y.value = !0), N(s), i(s);
    };
  return (
    z(e, "scroll", t ? ve(G, t, !0, !1) : G, d),
    he(() => {
      try {
        const s = b(e);
        if (!s) return;
        j(s);
      } catch (s) {
        l(s);
      }
    }),
    z(e, "scrollend", W, d),
    {
      x: v,
      y: _,
      isScrolling: y,
      arrivedState: m,
      directions: S,
      measure() {
        const s = b(e);
        u && s && j(s);
      },
    }
  );
}
const J = Symbol("scrollToActiveGame provider"),
  ye = (e) => $_$() && ie(J, e),
  ge = () => $_$() && ne(J),
  Ee = ({ leftSidebar: e }) => {
    $_$();
    const o = re(),
      t = L(() => o.isLeftSectionHidden),
      n = B(0),
      r = L(() => $_$() && le(e)),
      { y: i } = _e(r, { behavior: "instant" }),
      f = L(() => (t.value ? n.value : i.value)),
      d = async () => {
        $_$();
        let l, c;
        o.setLeftSectionHover(!0),
          ([l, c] = se(() => $_$() && X())),
          await l,
          c(),
          (i.value = O(f));
      },
      p = () => {
        $_$();
        (n.value = O(i)), o.setLeftSectionHover(!1);
      };
    return (
      ye((l) => {
        $_$();
        const c = O(r);
        if (!c) return;
        const a = c.getBoundingClientRect(),
          v = c.scrollTop,
          _ = l.top > a.bottom || l.bottom < a.top,
          T = l.bottom > a.bottom && l.top < a.bottom,
          y = l.top < a.top && l.bottom > a.top;
        let m;
        _
          ? (m = l.top - a.top + v - c.clientHeight / 2)
          : T
          ? (m = a.top + v)
          : y && (m = l.top - a.top + v),
          m && (c.scroll({ top: m, behavior: "smooth" }), (n.value = m));
      }),
      { onEnterSidebar: d, onLeaveSidebar: p }
    );
  };
export {
  ge as injectScrollToActiveGame,
  z as useEventListener,
  Ee as useLeftMenuScroll,
  we as useMediaQuery,
  Te as useResizeObserver,
  _e as useScroll,
};
