import $_$ from "./$_$.js";
$_$();
import {
  reactivity_esmBundler_ref as E,
  runtimeCore_esmBundler_onUpdated as R,
  runtimeCore_esmBundler_provide as A,
  runtimeCore_esmBundler_watch as W,
  runtimeCore_esmBundler_nextTick as $,
  runtimeCore_esmBundler_onMounted as M,
  runtimeCore_esmBundler_onBeforeUnmount as D,
  runtimeCore_esmBundler_h as C,
  runtimeCore_esmBundler_onBeforeUpdate as G,
  runtimeCore_esmBundler_computed as K,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defaults as Z,
  Swiper as J,
  elementChildren as Q,
  createElement as X,
  makeElementsArray as x,
} from "./edc84b4da7.js";
const q = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function O(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    n.constructor &&
    Object.prototype.toString.call(n).slice(8, -1) === "Object" &&
    !n.__swiper__
  );
}
function N(n, e) {
  const o = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((i) => o.indexOf(i) < 0)
    .forEach((i) => {
      typeof n[i] == "undefined"
        ? (n[i] = e[i])
        : O(e[i]) && O(n[i]) && Object.keys(e[i]).length > 0
        ? e[i].__swiper__
          ? (n[i] = e[i])
          : N(n[i], e[i])
        : (n[i] = e[i]);
    });
}
function H(n) {
  return (
    n === void 0 && (n = {}),
    n.navigation &&
      typeof n.navigation.nextEl == "undefined" &&
      typeof n.navigation.prevEl == "undefined"
  );
}
function F(n) {
  return (
    n === void 0 && (n = {}),
    n.pagination && typeof n.pagination.el == "undefined"
  );
}
function U(n) {
  return (
    n === void 0 && (n = {}),
    n.scrollbar && typeof n.scrollbar.el == "undefined"
  );
}
function V(n) {
  n === void 0 && (n = "");
  const e = n
      .split(" ")
      .map((i) => i.trim())
      .filter((i) => !!i),
    o = [];
  return (
    e.forEach((i) => {
      o.indexOf(i) < 0 && o.push(i);
    }),
    o.join(" ")
  );
}
function Y(n) {
  return (
    n === void 0 && (n = ""),
    n
      ? n.includes("swiper-wrapper")
        ? n
        : `swiper-wrapper ${n}`
      : "swiper-wrapper"
  );
}
function k(n) {
  let {
    swiper: e,
    slides: o,
    passedParams: i,
    changedParams: l,
    nextEl: f,
    prevEl: s,
    scrollbarEl: u,
    paginationEl: t,
  } = n;
  const m = l.filter(
      (r) => r !== "children" && r !== "direction" && r !== "wrapperClass"
    ),
    {
      params: a,
      pagination: p,
      navigation: w,
      scrollbar: h,
      virtual: d,
      thumbs: c,
    } = e;
  let g, v, b, y, _, j, T, P;
  l.includes("thumbs") &&
    i.thumbs &&
    i.thumbs.swiper &&
    a.thumbs &&
    !a.thumbs.swiper &&
    (g = !0),
    l.includes("controller") &&
      i.controller &&
      i.controller.control &&
      a.controller &&
      !a.controller.control &&
      (v = !0),
    l.includes("pagination") &&
      i.pagination &&
      (i.pagination.el || t) &&
      (a.pagination || a.pagination === !1) &&
      p &&
      !p.el &&
      (b = !0),
    l.includes("scrollbar") &&
      i.scrollbar &&
      (i.scrollbar.el || u) &&
      (a.scrollbar || a.scrollbar === !1) &&
      h &&
      !h.el &&
      (y = !0),
    l.includes("navigation") &&
      i.navigation &&
      (i.navigation.prevEl || s) &&
      (i.navigation.nextEl || f) &&
      (a.navigation || a.navigation === !1) &&
      w &&
      !w.prevEl &&
      !w.nextEl &&
      (_ = !0);
  const S = (r) => {
    e[r] &&
      (e[r].destroy(),
      r === "navigation"
        ? (e.isElement && (e[r].prevEl.remove(), e[r].nextEl.remove()),
          (a[r].prevEl = void 0),
          (a[r].nextEl = void 0),
          (e[r].prevEl = void 0),
          (e[r].nextEl = void 0))
        : (e.isElement && e[r].el.remove(),
          (a[r].el = void 0),
          (e[r].el = void 0)));
  };
  l.includes("loop") &&
    e.isElement &&
    (a.loop && !i.loop ? (j = !0) : !a.loop && i.loop ? (T = !0) : (P = !0)),
    m.forEach((r) => {
      if (O(a[r]) && O(i[r]))
        Object.assign(a[r], i[r]),
          (r === "navigation" || r === "pagination" || r === "scrollbar") &&
            "enabled" in i[r] &&
            !i[r].enabled &&
            S(r);
      else {
        const B = i[r];
        (B === !0 || B === !1) &&
        (r === "navigation" || r === "pagination" || r === "scrollbar")
          ? B === !1 && S(r)
          : (a[r] = i[r]);
      }
    }),
    m.includes("controller") &&
      !v &&
      e.controller &&
      e.controller.control &&
      a.controller &&
      a.controller.control &&
      (e.controller.control = a.controller.control),
    l.includes("children") && o && d && a.virtual.enabled
      ? ((d.slides = o), d.update(!0))
      : l.includes("virtual") &&
        d &&
        a.virtual.enabled &&
        (o && (d.slides = o), d.update(!0)),
    l.includes("children") && o && a.loop && (P = !0),
    g && c.init() && c.update(!0),
    v && (e.controller.control = a.controller.control),
    b &&
      (e.isElement &&
        (!t || typeof t == "string") &&
        ((t = document.createElement("div")),
        t.classList.add("swiper-pagination"),
        t.part.add("pagination"),
        e.el.appendChild(t)),
      t && (a.pagination.el = t),
      p.init(),
      p.render(),
      p.update()),
    y &&
      (e.isElement &&
        (!u || typeof u == "string") &&
        ((u = document.createElement("div")),
        u.classList.add("swiper-scrollbar"),
        u.part.add("scrollbar"),
        e.el.appendChild(u)),
      u && (a.scrollbar.el = u),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    _ &&
      (e.isElement &&
        ((!f || typeof f == "string") &&
          ((f = document.createElement("div")),
          f.classList.add("swiper-button-next"),
          (f.innerHTML = e.hostEl.constructor.nextButtonSvg),
          f.part.add("button-next"),
          e.el.appendChild(f)),
        (!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-prev"),
          (s.innerHTML = e.hostEl.constructor.prevButtonSvg),
          s.part.add("button-prev"),
          e.el.appendChild(s))),
      f && (a.navigation.nextEl = f),
      s && (a.navigation.prevEl = s),
      w.init(),
      w.update()),
    l.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
    l.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
    l.includes("direction") && e.changeDirection(i.direction, !1),
    (j || P) && e.loopDestroy(),
    (T || P) && e.loopCreate(),
    e.update();
}
function I(n, e) {
  n === void 0 && (n = {});
  const o = { on: {} },
    i = {},
    l = {};
  N(o, Z), (o._emitClasses = !0), (o.init = !1);
  const f = {},
    s = q.map((t) => t.replace(/_/, "")),
    u = Object.assign({}, n);
  return (
    Object.keys(u).forEach((t) => {
      typeof n[t] != "undefined" &&
        (s.indexOf(t) >= 0
          ? O(n[t])
            ? ((o[t] = {}), (l[t] = {}), N(o[t], n[t]), N(l[t], n[t]))
            : ((o[t] = n[t]), (l[t] = n[t]))
          : t.search(/on[A-Z]/) === 0 && typeof n[t] == "function"
          ? (o.on[`${t[2].toLowerCase()}${t.substr(3)}`] = n[t])
          : (f[t] = n[t]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((t) => {
      o[t] === !0 && (o[t] = {}), o[t] === !1 && delete o[t];
    }),
    { params: o, passedParams: l, rest: f, events: i }
  );
}
function ee(n, e) {
  let {
    el: o,
    nextEl: i,
    prevEl: l,
    paginationEl: f,
    scrollbarEl: s,
    swiper: u,
  } = n;
  H(e) &&
    i &&
    l &&
    ((u.params.navigation.nextEl = i),
    (u.originalParams.navigation.nextEl = i),
    (u.params.navigation.prevEl = l),
    (u.originalParams.navigation.prevEl = l)),
    F(e) &&
      f &&
      ((u.params.pagination.el = f), (u.originalParams.pagination.el = f)),
    U(e) &&
      s &&
      ((u.params.scrollbar.el = s), (u.originalParams.scrollbar.el = s)),
    u.init(o);
}
function ne(n, e, o, i, l) {
  const f = [];
  if (!e) return f;
  const s = (t) => {
    f.indexOf(t) < 0 && f.push(t);
  };
  if (o && i) {
    const t = i.map(l),
      m = o.map(l);
    t.join("") !== m.join("") && s("children"),
      i.length !== o.length && s("children");
  }
  return (
    q
      .filter((t) => t[0] === "_")
      .map((t) => t.replace(/_/, ""))
      .forEach((t) => {
        if (t in n && t in e)
          if (O(n[t]) && O(e[t])) {
            const m = Object.keys(n[t]),
              a = Object.keys(e[t]);
            m.length !== a.length
              ? s(t)
              : (m.forEach((p) => {
                  n[t][p] !== e[t][p] && s(t);
                }),
                a.forEach((p) => {
                  n[t][p] !== e[t][p] && s(t);
                }));
          } else n[t] !== e[t] && s(t);
      }),
    f
  );
}
const te = (n) => {
  !n ||
    n.destroyed ||
    !n.params.virtual ||
    (n.params.virtual && !n.params.virtual.enabled) ||
    (n.updateSlides(),
    n.updateProgress(),
    n.updateSlidesClasses(),
    n.parallax &&
      n.params.parallax &&
      n.params.parallax.enabled &&
      n.parallax.setTranslate());
};
function L(n, e, o) {
  n === void 0 && (n = {});
  const i = [],
    l = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    f = (s, u) => {
      Array.isArray(s) &&
        s.forEach((t) => {
          const m = typeof t.type == "symbol";
          u === "default" && (u = "container-end"),
            m && t.children
              ? f(t.children, u)
              : (t.type &&
                  (t.type.name === "SwiperSlide" ||
                    t.type.name === "AsyncComponentWrapper")) ||
                (t.componentOptions && t.componentOptions.tag === "SwiperSlide")
              ? i.push(t)
              : l[u] && l[u].push(t);
        });
    };
  return (
    Object.keys(n).forEach((s) => {
      if (typeof n[s] != "function") return;
      const u = n[s]();
      f(u, s);
    }),
    (o.value = e.value),
    (e.value = i),
    { slides: i, slots: l }
  );
}
function ie(n, e, o) {
  if (!o) return null;
  const i = (a) => {
      let p = a;
      return (
        a < 0 ? (p = e.length + a) : p >= e.length && (p = p - e.length), p
      );
    },
    l = n.value.isHorizontal()
      ? { [n.value.rtlTranslate ? "right" : "left"]: `${o.offset}px` }
      : { top: `${o.offset}px` },
    { from: f, to: s } = o,
    u = n.value.params.loop ? -e.length : 0,
    t = n.value.params.loop ? e.length * 2 : e.length,
    m = [];
  for (let a = u; a < t; a += 1) a >= f && a <= s && m.push(e[i(a)]);
  return m.map((a) => {
    $_$();
    if (
      (a.props || (a.props = {}),
      a.props.style || (a.props.style = {}),
      (a.props.swiperRef = n),
      (a.props.style = l),
      a.type)
    )
      return C(a.type, { ...a.props }, a.children);
    if (a.componentOptions)
      return C(
        a.componentOptions.Ctor,
        { ...a.props },
        a.componentOptions.children
      );
  });
}
const oe = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: "SWIPER-CONTAINER" },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "breakpointsBase",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slidesUpdated",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(n, e) {
      $_$();
      let { slots: o, emit: i } = e;
      const { tag: l, wrapperTag: f } = n,
        s = E("swiper"),
        u = E(null),
        t = E(!1),
        m = E(!1),
        a = E(null),
        p = E(null),
        w = E(null),
        h = { value: [] },
        d = { value: [] },
        c = E(null),
        g = E(null),
        v = E(null),
        b = E(null),
        { params: y, passedParams: _ } = I(n);
      L(o, h, d), (w.value = _), (d.value = h.value);
      const j = () => {
        L(o, h, d), (t.value = !0);
      };
      (y.onAny = function (S) {
        for (
          var r = arguments.length, B = new Array(r > 1 ? r - 1 : 0), z = 1;
          z < r;
          z++
        )
          B[z - 1] = arguments[z];
        i(S, ...B);
      }),
        Object.assign(y.on, {
          _beforeBreakpoint: j,
          _containerClasses(S, r) {
            s.value = r;
          },
        });
      const T = { ...y };
      if (
        (delete T.wrapperClass,
        (p.value = new J(T)),
        p.value.virtual && p.value.params.virtual.enabled)
      ) {
        p.value.virtual.slides = h.value;
        const S = {
          cache: !1,
          slides: h.value,
          renderExternal: (r) => {
            u.value = r;
          },
          renderExternalUpdate: !1,
        };
        N(p.value.params.virtual, S), N(p.value.originalParams.virtual, S);
      }
      R(() => {
        !m.value && p.value && (p.value.emitSlidesClasses(), (m.value = !0));
        const { passedParams: S } = I(n),
          r = ne(S, w.value, h.value, d.value, (B) => B.props && B.props.key);
        (w.value = S),
          (r.length || t.value) &&
            p.value &&
            !p.value.destroyed &&
            k({
              swiper: p.value,
              slides: h.value,
              passedParams: S,
              changedParams: r,
              nextEl: c.value,
              prevEl: g.value,
              scrollbarEl: b.value,
              paginationEl: v.value,
            }),
          (t.value = !1);
      }),
        A("swiper", p),
        W(u, () => {
          $_$();
          $(() => {
            te(p.value);
          });
        }),
        M(() => {
          a.value &&
            (ee(
              {
                el: a.value,
                nextEl: c.value,
                prevEl: g.value,
                paginationEl: v.value,
                scrollbarEl: b.value,
                swiper: p.value,
              },
              y
            ),
            i("swiper", p.value));
        }),
        D(() => {
          p.value && !p.value.destroyed && p.value.destroy(!0, !1);
        });
      function P(S) {
        return y.virtual
          ? ie(p, S, u.value)
          : (S.forEach((r, B) => {
              r.props || (r.props = {}),
                (r.props.swiperRef = p),
                (r.props.swiperSlideIndex = B);
            }),
            S);
      }
      return () => {
        $_$();
        const { slides: S, slots: r } = L(o, h, d);
        return C(l, { ref: a, class: V(s.value) }, [
          r["container-start"],
          C(f, { class: Y(y.wrapperClass) }, [
            r["wrapper-start"],
            P(S),
            r["wrapper-end"],
          ]),
          H(n) && [
            C("div", { ref: g, class: "swiper-button-prev" }),
            C("div", { ref: c, class: "swiper-button-next" }),
          ],
          U(n) && C("div", { ref: b, class: "swiper-scrollbar" }),
          F(n) && C("div", { ref: v, class: "swiper-pagination" }),
          r["container-end"],
        ]);
      };
    },
  },
  de = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(n, e) {
      $_$();
      let { slots: o } = e,
        i = !1;
      const { swiperRef: l } = n,
        f = E(null),
        s = E("swiper-slide"),
        u = E(!1);
      function t(p, w, h) {
        w === f.value && (s.value = h);
      }
      M(() => {
        !l || !l.value || (l.value.on("_slideClass", t), (i = !0));
      }),
        G(() => {
          i || !l || !l.value || (l.value.on("_slideClass", t), (i = !0));
        }),
        R(() => {
          !f.value ||
            !l ||
            !l.value ||
            (typeof n.swiperSlideIndex != "undefined" &&
              (f.value.swiperSlideIndex = n.swiperSlideIndex),
            l.value.destroyed &&
              s.value !== "swiper-slide" &&
              (s.value = "swiper-slide"));
        }),
        D(() => {
          !l || !l.value || l.value.off("_slideClass", t);
        });
      const m = K(() => ({
        isActive: s.value.indexOf("swiper-slide-active") >= 0,
        isVisible: s.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: s.value.indexOf("swiper-slide-prev") >= 0,
        isNext: s.value.indexOf("swiper-slide-next") >= 0,
      }));
      A("swiperSlide", m);
      const a = () => {
        u.value = !0;
      };
      return () =>
        $_$() &&
        C(
          n.tag,
          {
            class: V(`${s.value}`),
            ref: f,
            "data-swiper-slide-index":
              typeof n.virtualIndex == "undefined" &&
              l &&
              l.value &&
              l.value.params.loop
                ? n.swiperSlideIndex
                : n.virtualIndex,
            onLoadCapture: a,
          },
          n.zoom
            ? C(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof n.zoom == "number" ? n.zoom : void 0,
                },
                [
                  o.default && o.default(m.value),
                  n.lazy &&
                    !u.value &&
                    C("div", { class: "swiper-lazy-preloader" }),
                ]
              )
            : [
                o.default && o.default(m.value),
                n.lazy &&
                  !u.value &&
                  C("div", { class: "swiper-lazy-preloader" }),
              ]
        );
    },
  };
function ae(n, e, o, i) {
  return (
    n.params.createElements &&
      Object.keys(i).forEach((l) => {
        if (!o[l] && o.auto === !0) {
          let f = Q(n.el, `.${i[l]}`)[0];
          f || ((f = X("div", i[l])), (f.className = i[l]), n.el.append(f)),
            (o[l] = f),
            (e[l] = f);
        }
      }),
    o
  );
}
function se(n) {
  let { swiper: e, extendParams: o, on: i, emit: l } = n;
  o({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  function f(d) {
    let c;
    return d &&
      typeof d == "string" &&
      e.isElement &&
      ((c = e.el.querySelector(d)), c)
      ? c
      : (d &&
          (typeof d == "string" && (c = [...document.querySelectorAll(d)]),
          e.params.uniqueNavElements &&
          typeof d == "string" &&
          c &&
          c.length > 1 &&
          e.el.querySelectorAll(d).length === 1
            ? (c = e.el.querySelector(d))
            : c && c.length === 1 && (c = c[0])),
        d && !c ? d : c);
  }
  function s(d, c) {
    const g = e.params.navigation;
    (d = x(d)),
      d.forEach((v) => {
        v &&
          (v.classList[c ? "add" : "remove"](...g.disabledClass.split(" ")),
          v.tagName === "BUTTON" && (v.disabled = c),
          e.params.watchOverflow &&
            e.enabled &&
            v.classList[e.isLocked ? "add" : "remove"](g.lockClass));
      });
  }
  function u() {
    const { nextEl: d, prevEl: c } = e.navigation;
    if (e.params.loop) {
      s(c, !1), s(d, !1);
      return;
    }
    s(c, e.isBeginning && !e.params.rewind), s(d, e.isEnd && !e.params.rewind);
  }
  function t(d) {
    d.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), l("navigationPrev"));
  }
  function m(d) {
    d.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), l("navigationNext"));
  }
  function a() {
    const d = e.params.navigation;
    if (
      ((e.params.navigation = ae(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(d.nextEl || d.prevEl))
    )
      return;
    let c = f(d.nextEl),
      g = f(d.prevEl);
    Object.assign(e.navigation, { nextEl: c, prevEl: g }),
      (c = x(c)),
      (g = x(g));
    const v = (b, y) => {
      b && b.addEventListener("click", y === "next" ? m : t),
        !e.enabled && b && b.classList.add(...d.lockClass.split(" "));
    };
    c.forEach((b) => v(b, "next")), g.forEach((b) => v(b, "prev"));
  }
  function p() {
    let { nextEl: d, prevEl: c } = e.navigation;
    (d = x(d)), (c = x(c));
    const g = (v, b) => {
      v.removeEventListener("click", b === "next" ? m : t),
        v.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    d.forEach((v) => g(v, "next")), c.forEach((v) => g(v, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? h() : (a(), u());
  }),
    i("toEdge fromEdge lock unlock", () => {
      u();
    }),
    i("destroy", () => {
      p();
    }),
    i("enable disable", () => {
      let { nextEl: d, prevEl: c } = e.navigation;
      if (((d = x(d)), (c = x(c)), e.enabled)) {
        u();
        return;
      }
      [...d, ...c]
        .filter((g) => !!g)
        .forEach((g) => g.classList.add(e.params.navigation.lockClass));
    }),
    i("click", (d, c) => {
      let { nextEl: g, prevEl: v } = e.navigation;
      (g = x(g)), (v = x(v));
      const b = c.target;
      if (e.params.navigation.hideOnClick && !v.includes(b) && !g.includes(b)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === b || e.pagination.el.contains(b))
        )
          return;
        let y;
        g.length
          ? (y = g[0].classList.contains(e.params.navigation.hiddenClass))
          : v.length &&
            (y = v[0].classList.contains(e.params.navigation.hiddenClass)),
          l(y === !0 ? "navigationShow" : "navigationHide"),
          [...g, ...v]
            .filter((_) => !!_)
            .forEach((_) =>
              _.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const w = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        a(),
        u();
    },
    h = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        p();
    };
  Object.assign(e.navigation, {
    enable: w,
    disable: h,
    update: u,
    init: a,
    destroy: p,
  });
}
function ue(n) {
  return (
    n === void 0 && (n = ""),
    `.${n
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
export {
  se as Navigation,
  oe as Swiper,
  de as SwiperSlide,
  ue as classesToSelector,
  ae as createElementIfNotDefined,
};
