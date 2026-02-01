import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as V,
  defaultThemeType as U,
  reactivity_esmBundler_ref as j,
  reactivity_esmBundler_reactive as F,
  runtimeCore_esmBundler_computed as $,
  runtimeCore_esmBundler_createElementBlock as T,
  runtimeCore_esmBundler_openBlock as C,
  shared_esmBundler_normalizeClass as G,
  reactivity_esmBundler_unref as S,
  runtimeCore_esmBundler_createVNode as W,
  runtimeCore_esmBundler_mergeProps as X,
  runtimeCore_esmBundler_withCtx as H,
  runtimeCore_esmBundler_createCommentVNode as Y,
  runtimeCore_esmBundler_Fragment as Z,
  runtimeCore_esmBundler_renderList as J,
  runtimeCore_esmBundler_createBlock as K,
  runtimeCore_esmBundler_renderSlot as Q,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  createElementIfNotDefined as ee,
  classesToSelector as se,
  Swiper as re,
  Navigation as le,
  SwiperSlide as ae,
} from "./8fb686e8dc.js";
import {
  getDocument as te,
  makeElementsArray as oe,
  classesToTokens as b,
  createElement as ie,
  nextTick as ne,
  elementOffset as ce,
} from "./edc84b4da7.js";
import { _export_sfc as de } from "./entry-50afb6f36c.js";
function pe(E) {
  let { swiper: e, extendParams: D, on: n, emit: u } = E;
  const g = te();
  let h = !1,
    v = null,
    y = null,
    w,
    a,
    c,
    p;
  D({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (e.scrollbar = { el: null, dragEl: null });
  function f() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: s, rtlTranslate: t } = e,
      { dragEl: r, el: l } = s,
      o = e.params.scrollbar,
      d = e.params.loop ? e.progressLoop : e.progress;
    let m = a,
      i = (c - a) * d;
    t
      ? ((i = -i), i > 0 ? ((m = a - i), (i = 0)) : -i + a > c && (m = c + i))
      : i < 0
      ? ((m = a + i), (i = 0))
      : i + a > c && (m = c - i),
      e.isHorizontal()
        ? ((r.style.transform = `translate3d(${i}px, 0, 0)`),
          (r.style.width = `${m}px`))
        : ((r.style.transform = `translate3d(0px, ${i}px, 0)`),
          (r.style.height = `${m}px`)),
      o.hide &&
        (clearTimeout(v),
        (l.style.opacity = 1),
        (v = setTimeout(() => {
          (l.style.opacity = 0), (l.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function O(s) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${s}ms`);
  }
  function _() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: s } = e,
      { dragEl: t, el: r } = s;
    (t.style.width = ""),
      (t.style.height = ""),
      (c = e.isHorizontal() ? r.offsetWidth : r.offsetHeight),
      (p =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (a = c * p)
        : (a = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (t.style.width = `${a}px`)
        : (t.style.height = `${a}px`),
      p >= 1 ? (r.style.display = "none") : (r.style.display = ""),
      e.params.scrollbar.hide && (r.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        s.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  function L(s) {
    return e.isHorizontal() ? s.clientX : s.clientY;
  }
  function k(s) {
    const { scrollbar: t, rtlTranslate: r } = e,
      { el: l } = t;
    let o;
    (o =
      (L(s) -
        ce(l)[e.isHorizontal() ? "left" : "top"] -
        (w !== null ? w : a / 2)) /
      (c - a)),
      (o = Math.max(Math.min(o, 1), 0)),
      r && (o = 1 - o);
    const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * o;
    e.updateProgress(d),
      e.setTranslate(d),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function I(s) {
    const t = e.params.scrollbar,
      { scrollbar: r, wrapperEl: l } = e,
      { el: o, dragEl: d } = r;
    (h = !0),
      (w =
        s.target === d
          ? L(s) -
            s.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      s.preventDefault(),
      s.stopPropagation(),
      (l.style.transitionDuration = "100ms"),
      (d.style.transitionDuration = "100ms"),
      k(s),
      clearTimeout(y),
      (o.style.transitionDuration = "0ms"),
      t.hide && (o.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      u("scrollbarDragStart", s);
  }
  function M(s) {
    const { scrollbar: t, wrapperEl: r } = e,
      { el: l, dragEl: o } = t;
    h &&
      (s.preventDefault && s.cancelable
        ? s.preventDefault()
        : (s.returnValue = !1),
      k(s),
      (r.style.transitionDuration = "0ms"),
      (l.style.transitionDuration = "0ms"),
      (o.style.transitionDuration = "0ms"),
      u("scrollbarDragMove", s));
  }
  function R(s) {
    const t = e.params.scrollbar,
      { scrollbar: r, wrapperEl: l } = e,
      { el: o } = r;
    h &&
      ((h = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (l.style.transitionDuration = "")),
      t.hide &&
        (clearTimeout(y),
        (y = ne(() => {
          (o.style.opacity = 0), (o.style.transitionDuration = "400ms");
        }, 1e3))),
      u("scrollbarDragEnd", s),
      t.snapOnRelease && e.slideToClosest());
  }
  function x(s) {
    const { scrollbar: t, params: r } = e,
      l = t.el;
    if (!l) return;
    const o = l,
      d = r.passiveListeners ? { passive: !1, capture: !1 } : !1,
      m = r.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!o) return;
    const i = s === "on" ? "addEventListener" : "removeEventListener";
    o[i]("pointerdown", I, d),
      g[i]("pointermove", M, d),
      g[i]("pointerup", R, m);
  }
  function q() {
    !e.params.scrollbar.el || !e.scrollbar.el || x("on");
  }
  function A() {
    !e.params.scrollbar.el || !e.scrollbar.el || x("off");
  }
  function z() {
    const { scrollbar: s, el: t } = e;
    e.params.scrollbar = ee(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const r = e.params.scrollbar;
    if (!r.el) return;
    let l;
    if (
      (typeof r.el == "string" && e.isElement && (l = e.el.querySelector(r.el)),
      !l && typeof r.el == "string")
    ) {
      if (((l = g.querySelectorAll(r.el)), !l.length)) return;
    } else l || (l = r.el);
    e.params.uniqueNavElements &&
      typeof r.el == "string" &&
      l.length > 1 &&
      t.querySelectorAll(r.el).length === 1 &&
      (l = t.querySelector(r.el)),
      l.length > 0 && (l = l[0]),
      l.classList.add(e.isHorizontal() ? r.horizontalClass : r.verticalClass);
    let o;
    l &&
      ((o = l.querySelector(se(e.params.scrollbar.dragClass))),
      o || ((o = ie("div", e.params.scrollbar.dragClass)), l.append(o))),
      Object.assign(s, { el: l, dragEl: o }),
      r.draggable && q(),
      l &&
        l.classList[e.enabled ? "remove" : "add"](
          ...b(e.params.scrollbar.lockClass)
        );
  }
  function B() {
    const s = e.params.scrollbar,
      t = e.scrollbar.el;
    t &&
      t.classList.remove(
        ...b(e.isHorizontal() ? s.horizontalClass : s.verticalClass)
      ),
      A();
  }
  n("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el) return;
    const s = e.params.scrollbar;
    let { el: t } = e.scrollbar;
    (t = oe(t)),
      t.forEach((r) => {
        r.classList.remove(s.horizontalClass, s.verticalClass),
          r.classList.add(
            e.isHorizontal() ? s.horizontalClass : s.verticalClass
          );
      });
  }),
    n("init", () => {
      e.params.scrollbar.enabled === !1 ? P() : (z(), _(), f());
    }),
    n("update resize observerUpdate lock unlock changeDirection", () => {
      _();
    }),
    n("setTranslate", () => {
      f();
    }),
    n("setTransition", (s, t) => {
      O(t);
    }),
    n("enable disable", () => {
      const { el: s } = e.scrollbar;
      s &&
        s.classList[e.enabled ? "remove" : "add"](
          ...b(e.params.scrollbar.lockClass)
        );
    }),
    n("destroy", () => {
      B();
    });
  const N = () => {
      e.el.classList.remove(...b(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...b(e.params.scrollbar.scrollbarDisabledClass)
          ),
        z(),
        _(),
        f();
    },
    P = () => {
      e.el.classList.add(...b(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...b(e.params.scrollbar.scrollbarDisabledClass)
          ),
        B();
    };
  Object.assign(e.scrollbar, {
    enable: N,
    disable: P,
    updateSize: _,
    setTranslate: f,
    init: z,
    destroy: B,
  });
}
const ue = {
    key: 0,
    class: "ui-swipe-slider-scrollbar ui-swipe-slider__scrollbar",
  },
  me = 0.3,
  fe = V({
    __name: "UiSwipeSlider",
    props: {
      slides: {},
      theme: { default: U },
      shadowStart: { type: Boolean, default: !0 },
      shadowEnd: { type: Boolean, default: !0 },
      hasScrollBar: { type: Boolean, default: !0 },
      nextElClass: {},
      prevElClass: {},
    },
    setup(E) {
      $_$();
      const e = E,
        D = j(),
        n = F({ start: !1, end: !1 }),
        u = (a) => {
          (n.start = !a.isBeginning), (n.end = !a.isEnd);
        },
        g = (a) => {
          var c;
          const p = a.params.scrollbar;
          p &&
            typeof p != "boolean" &&
            ((p.dragSize = a.width * me),
            (c = a.scrollbar) == null || c.updateSize());
        },
        h = (a) => {
          (D.value = a), g(a), u(a), a.on("update", u), a.on("resize", g);
        },
        v = {
          slidesPerView: "auto",
          resistanceRatio: 0,
          modules: [le, pe],
          direction: "horizontal",
          navigation: {
            nextEl: `.${e.nextElClass}`,
            prevEl: `.${e.prevElClass}`,
          },
          scrollbar: {
            el: ".ui-swipe-slider-scrollbar",
            draggable: !0,
            dragClass: "ui-swipe-slider-scrollbar__drag",
          },
        },
        y = $(() => e.shadowStart && n.start),
        w = $(() => e.shadowEnd && n.end);
      return (a, c) =>
        $_$() &&
        (C(),
        T(
          "div",
          {
            class: G([
              "ui-swipe-slider",
              [
                `ui-swipe-slider--theme-${a.theme}`,
                {
                  "ui-swipe-slider--shadow-start": S(y),
                  "ui-swipe-slider--shadow-end": S(w),
                  "ui-swipe-slider--has-scrollbar": a.hasScrollBar,
                },
              ],
            ]),
          },
          [
            W(
              S(re),
              X({ onSwiper: h, onFromEdge: u, onToEdge: u }, v, {
                class: "ui-swipe-slider__swiper",
              }),
              {
                default: H(
                  () =>
                    $_$() && [
                      (C(!0),
                      T(
                        Z,
                        null,
                        J(
                          a.slides,
                          (p, f) =>
                            $_$() &&
                            (C(),
                            K(
                              S(ae),
                              { key: f, class: "ui-swipe-slider__slide" },
                              {
                                default: H(
                                  () =>
                                    $_$() && [
                                      Q(
                                        a.$slots,
                                        "default",
                                        { slide: p, slideIndex: f },
                                        void 0,
                                        !0
                                      ),
                                    ]
                                ),
                                _: 2,
                              },
                              1024
                            ))
                        ),
                        128
                      )),
                      a.hasScrollBar ? (C(), T("div", ue)) : Y("", !0),
                    ]
                ),
                _: 3,
              },
              16
            ),
          ],
          2
        ));
    },
  }),
  we = de(fe, [["__scopeId", "data-v-aa8660f4"]]);
export { we as UiSwipeSlider };
