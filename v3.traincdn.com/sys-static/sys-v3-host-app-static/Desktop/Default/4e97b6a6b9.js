import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as q,
  index_useT as ye,
  runtimeCore_esmBundler_resolveComponent as Y,
  runtimeCore_esmBundler_createBlock as le,
  runtimeCore_esmBundler_openBlock as k,
  reactivity_esmBundler_unref as C,
  runtimeCore_esmBundler_withCtx as H,
  runtimeCore_esmBundler_createElementVNode as W,
  shared_esmBundler_toDisplayString as ie,
  runtimeCore_esmBundler_createElementBlock as N,
  runtimeCore_esmBundler_createVNode as R,
  reactivity_esmBundler_ref as D,
  unrefElement as de,
  MEDIA_EXTENSIONS as ne,
  useNuxtApp as qe,
  reactivity_esmBundler_toRefs as We,
  runtimeCore_esmBundler_computed as U,
  iconName as ee,
  runtimeCore_esmBundler_onMounted as se,
  shared_esmBundler_normalizeClass as Te,
  size_constants_sizeType as Z,
  runtimeCore_esmBundler_onUpdated as Be,
  runtimeCore_esmBundler_provide as Le,
  runtimeCore_esmBundler_watch as Xe,
  runtimeCore_esmBundler_nextTick as Pe,
  runtimeCore_esmBundler_onBeforeUnmount as re,
  runtimeCore_esmBundler_h as j,
  runtimeCore_esmBundler_onBeforeUpdate as Ye,
  chunk_chunk as Ke,
  runtimeCore_esmBundler_resolveDirective as Ie,
  runtimeCore_esmBundler_withDirectives as me,
  runtimeCore_esmBundler_createCommentVNode as ae,
  runtimeCore_esmBundler_mergeProps as Me,
  runtimeCore_esmBundler_Fragment as ge,
  runtimeCore_esmBundler_renderList as ve,
  shared_esmBundler_normalizeStyle as Ze,
  runtimeCore_esmBundler_renderSlot as Oe,
  index_useMediaUrl as Je,
  nuxtLink_default as Qe,
  WeightType as et,
  runtimeCore_esmBundler_createTextVNode as he,
  useGlobalStore as ze,
  reactivity_esmBundler_isRef as tt,
  index_getConfig as nt,
  useRouterMethodsWithLang as at,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  footerCookieRestrictionText as Ce,
  _sfc_main$1 as it,
  footerLinkStopInTimeText as Se,
  defaults as st,
  Swiper as lt,
  getDocument as De,
  getWindow as ke,
  elementParents as be,
  elementOffset as $e,
  now as X,
  nextTick as _e,
  elementChildren as rt,
  createElement as Ae,
  makeElementsArray as A,
  elementOuterSize as ot,
  elementIndex as Ee,
  classesToTokens as K,
  elementTransitionEnd as ue,
  useSessionTime as dt,
} from "./9c7d87dd6f.js";
import {
  _export_sfc as V,
  useDomainLicenses as Ne,
  useHostAppAnalytics as ut,
  useResizeObserver as ct,
  groupBy as ft,
} from "./entry-85993dc44c.js";
import { MenuItemHOC as pt } from "./37be8e46f5.js";
import {
  usePaymentLink as mt,
  useFooterSliderPayments as gt,
} from "./22cae739fa.js";
import { TimeCounting as vt } from "./aaa32f7483.js";
const ht =
    "http://www.juegosysorteos.gob.mx/es/Juegos_y_Sorteos/Atencion_al_Ludopata",
  bt = q({
    __name: "FooterCookieRestriction",
    setup(n) {
      $_$();
      const e = ye(),
        u = `${e("footer_cookie_play_responsibly")}. ${e(
          "footer_cookie_prohibited_for_minors"
        )}.`;
      return (i, d) => {
        $_$();
        const c = Y("UiCaption");
        return (
          k(),
          le(
            c,
            {
              size: C(Ce).size,
              color: C(Ce).color,
              class: "footer-cookie-restriction",
            },
            {
              default: H(
                () =>
                  $_$() && [
                    W(
                      "a",
                      {
                        href: ht,
                        target: "_blank",
                        class: "footer-cookie-restriction__link",
                      },
                      ie(u)
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            ["size", "color"]
          )
        );
      };
    },
  }),
  En = V(bt, [["__scopeId", "data-v-23528c78"]]),
  _t = () => {
    var n;
    const { getDomainLicenseInfo: e } = Ne(),
      { domain: u } = (n = e("curacao")) != null ? n : {},
      i = !!u,
      d = `https://accreditation.curacao-egaming.com/validateview.aspx?domain=${u}`,
      c = `https://accreditation.curacao-egaming.com/validate.ashx?domain=${u}`;
    return { hasCuracao: i, curacaoLink: d, curacaoLogoSrc: c };
  },
  yt = ["href"],
  wt = ["src"],
  Ct = q({
    __name: "FooterCuracao",
    setup(n) {
      const { curacaoLink: e, curacaoLogoSrc: u } = _t();
      return (i, d) =>
        $_$() &&
        (k(),
        N(
          "a",
          { href: C(e), target: "_blank", class: "footer-curacao" },
          [
            W(
              "img",
              { src: C(u), alt: "", class: "footer-curacao__img" },
              null,
              8,
              wt
            ),
          ],
          8,
          yt
        ));
    },
  }),
  xn = V(Ct, [["__scopeId", "data-v-c5779a0a"]]),
  Tn = V(it, [["__scopeId", "data-v-7520b4f8"]]),
  St = () => {
    var n;
    const { getDomainLicenseInfo: e } = Ne(),
      { lh: u } = (n = e("gaming-curacao")) != null ? n : {},
      i = !!u,
      d = `https://licensing.gaming-curacao.com/validator/?lh=${u}&template=tseal`;
    return { hasGamingCuracao: i, gamingCuracaoSrcFrame: d };
  },
  Et = { class: "footer-gaming-curacao" },
  xt = ["src"],
  Tt = q({
    __name: "FooterGamingCuracao",
    setup(n) {
      const { gamingCuracaoSrcFrame: e } = St();
      return (u, i) =>
        $_$() &&
        (k(),
        N("div", Et, [
          W(
            "iframe",
            { class: "footer-gaming-curacao__iframe", src: C(e) },
            null,
            8,
            xt
          ),
        ]));
    },
  }),
  Bn = V(Tt, [["__scopeId", "data-v-78bf4930"]]),
  Bt = { class: "footer-link-stop-in-time" },
  Lt = q({
    __name: "FooterLinkStopInTime",
    props: { link: {} },
    setup(n) {
      const u = `https://${n.link}`;
      return (i, d) => {
        $_$();
        const c = Y("T"),
          o = Y("UiCaption");
        return (
          k(),
          N("div", Bt, [
            R(
              o,
              {
                color: C(Se).color,
                size: C(Se).size,
                class: "footer-link-stop-in-time__text",
              },
              {
                default: H(
                  () =>
                    $_$() && [
                      R(
                        c,
                        { tmp: "footer_link_stop_in_time" },
                        {
                          linkStopInTime: H(
                            () =>
                              $_$() && [
                                W(
                                  "a",
                                  {
                                    href: u,
                                    target: "_blank",
                                    class: "footer-link-stop-in-time__link",
                                  },
                                  ie(i.link),
                                  1
                                ),
                              ]
                          ),
                          _: 1,
                        }
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              ["color", "size"]
            ),
          ])
        );
      };
    },
  }),
  Ln = V(Lt, [["__scopeId", "data-v-38247e35"]]),
  Pt = (n) => {
    $_$();
    const e = D(!0),
      u = () => {
        e.value = !1;
      },
      i = (o, g) => {
        o.forEach((s) => {
          $_$();
          s.isIntersecting && (u(), g.unobserve(de(n)));
        });
      },
      d = () => {
        $_$();
        if (!de(n)) {
          console.warn("[useLazyLoadImage] el is null");
          return;
        }
        new IntersectionObserver(i, { root: null, threshold: 0 }).observe(
          de(n)
        );
      };
    return {
      imageIsLoading: e,
      initLazyLoadImage: () => {
        window.IntersectionObserver ? d() : u();
      },
    };
  },
  ce = (n, e, u = "") =>
    $_$() && n.endsWith("." + ne.PNG)
      ? `${n.slice(0, -4)}_${e}.${u || ne.PNG}`
      : n,
  It = (n, e) => {
    $_$();
    var u, i, d, c, o;
    const g = qe().vueApp.config.globalProperties.$cdn,
      s = ut(),
      { item: p } = We(n),
      l = (u = C(p)) == null ? void 0 : u.name,
      v = D(),
      { imageIsLoading: h, initLazyLoadImage: y } = Pt(v),
      m = ((i = C(p)) == null ? void 0 : i.folderId) === 2,
      _ = U(() => {
        $_$();
        var f;
        switch ((f = C(p)) == null ? void 0 : f.folderId) {
          case 1:
            return ee.CHAMP;
          case 3:
            return ee.MEGAPHONE;
          default:
            return ee.CYBER;
        }
      }),
      E = (d = C(p)) != null && d.mediaFullPath ? g(C(p).mediaFullPath) : "",
      x = {
        original: ce(E, e),
        default: ce(E, e, ne.WEBP),
        retina: ce(E, e * 2, ne.WEBP),
      },
      a = {
        ...C(p),
        link: (c = C(p)) == null ? void 0 : c.value,
        actionType: (o = C(p)) == null ? void 0 : o.linkTypeId,
      };
    return {
      title: l,
      partnerData: a,
      menuItem: v,
      imageIsLoading: h,
      initLazyLoadImage: y,
      mediaSrc: x,
      isCyberPartner: m,
      iconType: _,
      onAnalytic: () => {
        $_$();
        var f, T;
        const I =
          (T = (f = C(p)) == null ? void 0 : f.shortName) != null ? T : "";
        if (m) {
          s.modules.footer.clickOnCyberSportPartners(I);
          return;
        }
        s.modules.footer.clickOnSportPartners(I);
      },
    };
  },
  Mt = { key: 0, class: "footer-partners-link__loader" },
  Ot = { key: 1, class: "footer-partners-link__content" },
  zt = ["srcset"],
  Dt = ["src", "alt"],
  fe = 70,
  kt = q({
    __name: "FooterPartnersLink_F",
    props: { item: {} },
    setup(n) {
      $_$();
      const e = n,
        {
          title: u,
          menuItem: i,
          imageIsLoading: d,
          initLazyLoadImage: c,
          mediaSrc: o,
          iconType: g,
          onAnalytic: s,
          partnerData: p,
        } = It(e, fe);
      se(() => {
        setTimeout(() => {
          c();
        }, 300);
      });
      const l = U(() => e.item.linkTypeId !== 4 && !e.item.value),
        v = U(() => $_$() && { "footer-partners-link--disabled": C(l) });
      return (h, y) => {
        $_$();
        const m = Y("UiIco");
        return (
          k(),
          N(
            "div",
            {
              ref_key: "menuItem",
              ref: i,
              class: Te([C(v), "footer-partners-link"]),
            },
            [
              R(
                pt,
                {
                  onClick: C(s),
                  rel: "nofollow noopener",
                  item: C(p),
                  title: C(u),
                },
                {
                  default: H(
                    () =>
                      $_$() && [
                        C(d)
                          ? (k(), N("span", Mt))
                          : (k(),
                            N("div", Ot, [
                              R(
                                m,
                                {
                                  ico: C(g),
                                  size: C(Z).xs,
                                  class: "footer-partners-link__ico",
                                },
                                null,
                                8,
                                ["ico", "size"]
                              ),
                              W("picture", null, [
                                W(
                                  "source",
                                  {
                                    srcset: `${C(o).default} 1x, ${
                                      C(o).retina
                                    } 2x`,
                                    type: "image/webp",
                                  },
                                  null,
                                  8,
                                  zt
                                ),
                                W(
                                  "img",
                                  {
                                    loading: "lazy",
                                    width: fe,
                                    height: fe,
                                    src: C(o).original,
                                    alt: C(u),
                                    class: "footer-partners-link__img",
                                  },
                                  null,
                                  8,
                                  Dt
                                ),
                              ]),
                            ])),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["onClick", "item", "title"]
              ),
            ],
            2
          )
        );
      };
    },
  }),
  Pn = V(kt, [["__scopeId", "data-v-2ef4100a"]]),
  Re = [
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
function J(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    n.constructor &&
    Object.prototype.toString.call(n).slice(8, -1) === "Object" &&
    !n.__swiper__
  );
}
function te(n, e) {
  const u = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((i) => u.indexOf(i) < 0)
    .forEach((i) => {
      typeof n[i] == "undefined"
        ? (n[i] = e[i])
        : J(e[i]) && J(n[i]) && Object.keys(e[i]).length > 0
        ? e[i].__swiper__
          ? (n[i] = e[i])
          : te(n[i], e[i])
        : (n[i] = e[i]);
    });
}
function He(n) {
  return (
    n === void 0 && (n = {}),
    n.navigation &&
      typeof n.navigation.nextEl == "undefined" &&
      typeof n.navigation.prevEl == "undefined"
  );
}
function Fe(n) {
  return (
    n === void 0 && (n = {}),
    n.pagination && typeof n.pagination.el == "undefined"
  );
}
function Ge(n) {
  return (
    n === void 0 && (n = {}),
    n.scrollbar && typeof n.scrollbar.el == "undefined"
  );
}
function je(n) {
  n === void 0 && (n = "");
  const e = n
      .split(" ")
      .map((i) => i.trim())
      .filter((i) => !!i),
    u = [];
  return (
    e.forEach((i) => {
      u.indexOf(i) < 0 && u.push(i);
    }),
    u.join(" ")
  );
}
function $t(n) {
  return (
    n === void 0 && (n = ""),
    n
      ? n.includes("swiper-wrapper")
        ? n
        : `swiper-wrapper ${n}`
      : "swiper-wrapper"
  );
}
function At(n) {
  let {
    swiper: e,
    slides: u,
    passedParams: i,
    changedParams: d,
    nextEl: c,
    prevEl: o,
    scrollbarEl: g,
    paginationEl: s,
  } = n;
  const p = d.filter(
      (r) => r !== "children" && r !== "direction" && r !== "wrapperClass"
    ),
    {
      params: l,
      pagination: v,
      navigation: h,
      scrollbar: y,
      virtual: m,
      thumbs: _,
    } = e;
  let E, x, a, t, f, T, I, O;
  d.includes("thumbs") &&
    i.thumbs &&
    i.thumbs.swiper &&
    l.thumbs &&
    !l.thumbs.swiper &&
    (E = !0),
    d.includes("controller") &&
      i.controller &&
      i.controller.control &&
      l.controller &&
      !l.controller.control &&
      (x = !0),
    d.includes("pagination") &&
      i.pagination &&
      (i.pagination.el || s) &&
      (l.pagination || l.pagination === !1) &&
      v &&
      !v.el &&
      (a = !0),
    d.includes("scrollbar") &&
      i.scrollbar &&
      (i.scrollbar.el || g) &&
      (l.scrollbar || l.scrollbar === !1) &&
      y &&
      !y.el &&
      (t = !0),
    d.includes("navigation") &&
      i.navigation &&
      (i.navigation.prevEl || o) &&
      (i.navigation.nextEl || c) &&
      (l.navigation || l.navigation === !1) &&
      h &&
      !h.prevEl &&
      !h.nextEl &&
      (f = !0);
  const L = (r) => {
    e[r] &&
      (e[r].destroy(),
      r === "navigation"
        ? (e.isElement && (e[r].prevEl.remove(), e[r].nextEl.remove()),
          (l[r].prevEl = void 0),
          (l[r].nextEl = void 0),
          (e[r].prevEl = void 0),
          (e[r].nextEl = void 0))
        : (e.isElement && e[r].el.remove(),
          (l[r].el = void 0),
          (e[r].el = void 0)));
  };
  d.includes("loop") &&
    e.isElement &&
    (l.loop && !i.loop ? (T = !0) : !l.loop && i.loop ? (I = !0) : (O = !0)),
    p.forEach((r) => {
      if (J(l[r]) && J(i[r]))
        Object.assign(l[r], i[r]),
          (r === "navigation" || r === "pagination" || r === "scrollbar") &&
            "enabled" in i[r] &&
            !i[r].enabled &&
            L(r);
      else {
        const M = i[r];
        (M === !0 || M === !1) &&
        (r === "navigation" || r === "pagination" || r === "scrollbar")
          ? M === !1 && L(r)
          : (l[r] = i[r]);
      }
    }),
    p.includes("controller") &&
      !x &&
      e.controller &&
      e.controller.control &&
      l.controller &&
      l.controller.control &&
      (e.controller.control = l.controller.control),
    d.includes("children") && u && m && l.virtual.enabled
      ? ((m.slides = u), m.update(!0))
      : d.includes("virtual") &&
        m &&
        l.virtual.enabled &&
        (u && (m.slides = u), m.update(!0)),
    d.includes("children") && u && l.loop && (O = !0),
    E && _.init() && _.update(!0),
    x && (e.controller.control = l.controller.control),
    a &&
      (e.isElement &&
        (!s || typeof s == "string") &&
        ((s = document.createElement("div")),
        s.classList.add("swiper-pagination"),
        s.part.add("pagination"),
        e.el.appendChild(s)),
      s && (l.pagination.el = s),
      v.init(),
      v.render(),
      v.update()),
    t &&
      (e.isElement &&
        (!g || typeof g == "string") &&
        ((g = document.createElement("div")),
        g.classList.add("swiper-scrollbar"),
        g.part.add("scrollbar"),
        e.el.appendChild(g)),
      g && (l.scrollbar.el = g),
      y.init(),
      y.updateSize(),
      y.setTranslate()),
    f &&
      (e.isElement &&
        ((!c || typeof c == "string") &&
          ((c = document.createElement("div")),
          c.classList.add("swiper-button-next"),
          (c.innerHTML = e.hostEl.constructor.nextButtonSvg),
          c.part.add("button-next"),
          e.el.appendChild(c)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = e.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          e.el.appendChild(o))),
      c && (l.navigation.nextEl = c),
      o && (l.navigation.prevEl = o),
      h.init(),
      h.update()),
    d.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
    d.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
    d.includes("direction") && e.changeDirection(i.direction, !1),
    (T || O) && e.loopDestroy(),
    (I || O) && e.loopCreate(),
    e.update();
}
function xe(n, e) {
  n === void 0 && (n = {});
  const u = { on: {} },
    i = {},
    d = {};
  te(u, st), (u._emitClasses = !0), (u.init = !1);
  const c = {},
    o = Re.map((s) => s.replace(/_/, "")),
    g = Object.assign({}, n);
  return (
    Object.keys(g).forEach((s) => {
      typeof n[s] != "undefined" &&
        (o.indexOf(s) >= 0
          ? J(n[s])
            ? ((u[s] = {}), (d[s] = {}), te(u[s], n[s]), te(d[s], n[s]))
            : ((u[s] = n[s]), (d[s] = n[s]))
          : s.search(/on[A-Z]/) === 0 && typeof n[s] == "function"
          ? (u.on[`${s[2].toLowerCase()}${s.substr(3)}`] = n[s])
          : (c[s] = n[s]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((s) => {
      u[s] === !0 && (u[s] = {}), u[s] === !1 && delete u[s];
    }),
    { params: u, passedParams: d, rest: c, events: i }
  );
}
function Nt(n, e) {
  let {
    el: u,
    nextEl: i,
    prevEl: d,
    paginationEl: c,
    scrollbarEl: o,
    swiper: g,
  } = n;
  He(e) &&
    i &&
    d &&
    ((g.params.navigation.nextEl = i),
    (g.originalParams.navigation.nextEl = i),
    (g.params.navigation.prevEl = d),
    (g.originalParams.navigation.prevEl = d)),
    Fe(e) &&
      c &&
      ((g.params.pagination.el = c), (g.originalParams.pagination.el = c)),
    Ge(e) &&
      o &&
      ((g.params.scrollbar.el = o), (g.originalParams.scrollbar.el = o)),
    g.init(u);
}
function Rt(n, e, u, i, d) {
  const c = [];
  if (!e) return c;
  const o = (s) => {
    c.indexOf(s) < 0 && c.push(s);
  };
  if (u && i) {
    const s = i.map(d),
      p = u.map(d);
    s.join("") !== p.join("") && o("children"),
      i.length !== u.length && o("children");
  }
  return (
    Re.filter((s) => s[0] === "_")
      .map((s) => s.replace(/_/, ""))
      .forEach((s) => {
        if (s in n && s in e)
          if (J(n[s]) && J(e[s])) {
            const p = Object.keys(n[s]),
              l = Object.keys(e[s]);
            p.length !== l.length
              ? o(s)
              : (p.forEach((v) => {
                  n[s][v] !== e[s][v] && o(s);
                }),
                l.forEach((v) => {
                  n[s][v] !== e[s][v] && o(s);
                }));
          } else n[s] !== e[s] && o(s);
      }),
    c
  );
}
const Ht = (n) => {
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
function pe(n, e, u) {
  n === void 0 && (n = {});
  const i = [],
    d = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    c = (o, g) => {
      Array.isArray(o) &&
        o.forEach((s) => {
          const p = typeof s.type == "symbol";
          g === "default" && (g = "container-end"),
            p && s.children
              ? c(s.children, g)
              : (s.type &&
                  (s.type.name === "SwiperSlide" ||
                    s.type.name === "AsyncComponentWrapper")) ||
                (s.componentOptions && s.componentOptions.tag === "SwiperSlide")
              ? i.push(s)
              : d[g] && d[g].push(s);
        });
    };
  return (
    Object.keys(n).forEach((o) => {
      if (typeof n[o] != "function") return;
      const g = n[o]();
      c(g, o);
    }),
    (u.value = e.value),
    (e.value = i),
    { slides: i, slots: d }
  );
}
function Ft(n, e, u) {
  if (!u) return null;
  const i = (l) => {
      let v = l;
      return (
        l < 0 ? (v = e.length + l) : v >= e.length && (v = v - e.length), v
      );
    },
    d = n.value.isHorizontal()
      ? { [n.value.rtlTranslate ? "right" : "left"]: `${u.offset}px` }
      : { top: `${u.offset}px` },
    { from: c, to: o } = u,
    g = n.value.params.loop ? -e.length : 0,
    s = n.value.params.loop ? e.length * 2 : e.length,
    p = [];
  for (let l = g; l < s; l += 1)
    l >= c && l <= o && p.length < e.length && p.push(e[i(l)]);
  return p.map((l) => {
    $_$();
    if (
      (l.props || (l.props = {}),
      l.props.style || (l.props.style = {}),
      (l.props.swiperRef = n),
      (l.props.style = d),
      l.type)
    )
      return j(l.type, { ...l.props }, l.children);
    if (l.componentOptions)
      return j(
        l.componentOptions.Ctor,
        { ...l.props },
        l.componentOptions.children
      );
  });
}
const Ue = {
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
      breakpointsBase: { type: String, default: void 0 },
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
      let { slots: u, emit: i } = e;
      const { tag: d, wrapperTag: c } = n,
        o = D("swiper"),
        g = D(null),
        s = D(!1),
        p = D(!1),
        l = D(null),
        v = D(null),
        h = D(null),
        y = { value: [] },
        m = { value: [] },
        _ = D(null),
        E = D(null),
        x = D(null),
        a = D(null),
        { params: t, passedParams: f } = xe(n);
      pe(u, y, m), (h.value = f), (m.value = y.value);
      const T = () => {
        pe(u, y, m), (s.value = !0);
      };
      (t.onAny = function (L) {
        for (
          var r = arguments.length, M = new Array(r > 1 ? r - 1 : 0), P = 1;
          P < r;
          P++
        )
          M[P - 1] = arguments[P];
        i(L, ...M);
      }),
        Object.assign(t.on, {
          _beforeBreakpoint: T,
          _containerClasses(L, r) {
            o.value = r;
          },
        });
      const I = { ...t };
      if (
        (delete I.wrapperClass,
        (v.value = new lt(I)),
        v.value.virtual && v.value.params.virtual.enabled)
      ) {
        v.value.virtual.slides = y.value;
        const L = {
          cache: !1,
          slides: y.value,
          renderExternal: (r) => {
            g.value = r;
          },
          renderExternalUpdate: !1,
        };
        te(v.value.params.virtual, L), te(v.value.originalParams.virtual, L);
      }
      Be(() => {
        !p.value && v.value && (v.value.emitSlidesClasses(), (p.value = !0));
        const { passedParams: L } = xe(n),
          r = Rt(L, h.value, y.value, m.value, (M) => M.props && M.props.key);
        (h.value = L),
          (r.length || s.value) &&
            v.value &&
            !v.value.destroyed &&
            At({
              swiper: v.value,
              slides: y.value,
              passedParams: L,
              changedParams: r,
              nextEl: _.value,
              prevEl: E.value,
              scrollbarEl: a.value,
              paginationEl: x.value,
            }),
          (s.value = !1);
      }),
        Le("swiper", v),
        Xe(g, () => {
          $_$();
          Pe(() => {
            Ht(v.value);
          });
        }),
        se(() => {
          l.value &&
            (Nt(
              {
                el: l.value,
                nextEl: _.value,
                prevEl: E.value,
                paginationEl: x.value,
                scrollbarEl: a.value,
                swiper: v.value,
              },
              t
            ),
            i("swiper", v.value));
        }),
        re(() => {
          v.value && !v.value.destroyed && v.value.destroy(!0, !1);
        });
      function O(L) {
        return t.virtual
          ? Ft(v, L, g.value)
          : (L.forEach((r, M) => {
              r.props || (r.props = {}),
                (r.props.swiperRef = v),
                (r.props.swiperSlideIndex = M);
            }),
            L);
      }
      return () => {
        $_$();
        const { slides: L, slots: r } = pe(u, y, m);
        return j(d, { ref: l, class: je(o.value) }, [
          r["container-start"],
          j(c, { class: $t(t.wrapperClass) }, [
            r["wrapper-start"],
            O(L),
            r["wrapper-end"],
          ]),
          He(n) && [
            j("div", { ref: E, class: "swiper-button-prev" }),
            j("div", { ref: _, class: "swiper-button-next" }),
          ],
          Ge(n) && j("div", { ref: a, class: "swiper-scrollbar" }),
          Fe(n) && j("div", { ref: x, class: "swiper-pagination" }),
          r["container-end"],
        ]);
      };
    },
  },
  Ve = {
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
      let { slots: u } = e,
        i = !1;
      const { swiperRef: d } = n,
        c = D(null),
        o = D("swiper-slide"),
        g = D(!1);
      function s(v, h, y) {
        h === c.value && (o.value = y);
      }
      se(() => {
        !d || !d.value || (d.value.on("_slideClass", s), (i = !0));
      }),
        Ye(() => {
          i || !d || !d.value || (d.value.on("_slideClass", s), (i = !0));
        }),
        Be(() => {
          !c.value ||
            !d ||
            !d.value ||
            (typeof n.swiperSlideIndex != "undefined" &&
              (c.value.swiperSlideIndex = n.swiperSlideIndex),
            d.value.destroyed &&
              o.value !== "swiper-slide" &&
              (o.value = "swiper-slide"));
        }),
        re(() => {
          !d || !d.value || d.value.off("_slideClass", s);
        });
      const p = U(() => ({
        isActive: o.value.indexOf("swiper-slide-active") >= 0,
        isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
        isNext: o.value.indexOf("swiper-slide-next") >= 0,
      }));
      Le("swiperSlide", p);
      const l = () => {
        g.value = !0;
      };
      return () =>
        $_$() &&
        j(
          n.tag,
          {
            class: je(`${o.value}`),
            ref: c,
            "data-swiper-slide-index":
              typeof n.virtualIndex == "undefined" &&
              d &&
              d.value &&
              d.value.params.loop
                ? n.swiperSlideIndex
                : n.virtualIndex,
            onLoadCapture: l,
          },
          n.zoom
            ? j(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof n.zoom == "number" ? n.zoom : void 0,
                },
                [
                  u.default && u.default(p.value),
                  n.lazy &&
                    !g.value &&
                    j("div", { class: "swiper-lazy-preloader" }),
                ]
              )
            : [
                u.default && u.default(p.value),
                n.lazy &&
                  !g.value &&
                  j("div", { class: "swiper-lazy-preloader" }),
              ]
        );
    },
  };
function Gt(n) {
  let { swiper: e, extendParams: u, on: i, emit: d } = n;
  const c = De(),
    o = ke();
  (e.keyboard = { enabled: !1 }),
    u({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
  function g(l) {
    if (!e.enabled) return;
    const { rtlTranslate: v } = e;
    let h = l;
    h.originalEvent && (h = h.originalEvent);
    const y = h.keyCode || h.charCode,
      m = e.params.keyboard.pageUpDown,
      _ = m && y === 33,
      E = m && y === 34,
      x = y === 37,
      a = y === 39,
      t = y === 38,
      f = y === 40;
    if (
      (!e.allowSlideNext &&
        ((e.isHorizontal() && a) || (e.isVertical() && f) || E)) ||
      (!e.allowSlidePrev &&
        ((e.isHorizontal() && x) || (e.isVertical() && t) || _))
    )
      return !1;
    if (
      !(h.shiftKey || h.altKey || h.ctrlKey || h.metaKey) &&
      !(
        c.activeElement &&
        c.activeElement.nodeName &&
        (c.activeElement.nodeName.toLowerCase() === "input" ||
          c.activeElement.nodeName.toLowerCase() === "textarea")
      )
    ) {
      if (e.params.keyboard.onlyInViewport && (_ || E || x || a || t || f)) {
        let T = !1;
        if (
          be(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
          be(e.el, `.${e.params.slideActiveClass}`).length === 0
        )
          return;
        const I = e.el,
          O = I.clientWidth,
          L = I.clientHeight,
          r = o.innerWidth,
          M = o.innerHeight,
          P = $e(I);
        v && (P.left -= I.scrollLeft);
        const S = [
          [P.left, P.top],
          [P.left + O, P.top],
          [P.left, P.top + L],
          [P.left + O, P.top + L],
        ];
        for (let b = 0; b < S.length; b += 1) {
          const w = S[b];
          if (w[0] >= 0 && w[0] <= r && w[1] >= 0 && w[1] <= M) {
            if (w[0] === 0 && w[1] === 0) continue;
            T = !0;
          }
        }
        if (!T) return;
      }
      e.isHorizontal()
        ? ((_ || E || x || a) &&
            (h.preventDefault ? h.preventDefault() : (h.returnValue = !1)),
          (((E || a) && !v) || ((_ || x) && v)) && e.slideNext(),
          (((_ || x) && !v) || ((E || a) && v)) && e.slidePrev())
        : ((_ || E || t || f) &&
            (h.preventDefault ? h.preventDefault() : (h.returnValue = !1)),
          (E || f) && e.slideNext(),
          (_ || t) && e.slidePrev()),
        d("keyPress", y);
    }
  }
  function s() {
    e.keyboard.enabled ||
      (c.addEventListener("keydown", g), (e.keyboard.enabled = !0));
  }
  function p() {
    e.keyboard.enabled &&
      (c.removeEventListener("keydown", g), (e.keyboard.enabled = !1));
  }
  i("init", () => {
    e.params.keyboard.enabled && s();
  }),
    i("destroy", () => {
      e.keyboard.enabled && p();
    }),
    Object.assign(e.keyboard, { enable: s, disable: p });
}
function jt(n) {
  let { swiper: e, extendParams: u, on: i, emit: d } = n;
  const c = ke();
  u({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel",
    },
  }),
    (e.mousewheel = { enabled: !1 });
  let o,
    g = X(),
    s;
  const p = [];
  function l(t) {
    let O = 0,
      L = 0,
      r = 0,
      M = 0;
    return (
      "detail" in t && (L = t.detail),
      "wheelDelta" in t && (L = -t.wheelDelta / 120),
      "wheelDeltaY" in t && (L = -t.wheelDeltaY / 120),
      "wheelDeltaX" in t && (O = -t.wheelDeltaX / 120),
      "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((O = L), (L = 0)),
      (r = O * 10),
      (M = L * 10),
      "deltaY" in t && (M = t.deltaY),
      "deltaX" in t && (r = t.deltaX),
      t.shiftKey && !r && ((r = M), (M = 0)),
      (r || M) &&
        t.deltaMode &&
        (t.deltaMode === 1 ? ((r *= 40), (M *= 40)) : ((r *= 800), (M *= 800))),
      r && !O && (O = r < 1 ? -1 : 1),
      M && !L && (L = M < 1 ? -1 : 1),
      { spinX: O, spinY: L, pixelX: r, pixelY: M }
    );
  }
  function v() {
    e.enabled && (e.mouseEntered = !0);
  }
  function h() {
    e.enabled && (e.mouseEntered = !1);
  }
  function y(t) {
    return (e.params.mousewheel.thresholdDelta &&
      t.delta < e.params.mousewheel.thresholdDelta) ||
      (e.params.mousewheel.thresholdTime &&
        X() - g < e.params.mousewheel.thresholdTime)
      ? !1
      : t.delta >= 6 && X() - g < 60
      ? !0
      : (t.direction < 0
          ? (!e.isEnd || e.params.loop) &&
            !e.animating &&
            (e.slideNext(), d("scroll", t.raw))
          : (!e.isBeginning || e.params.loop) &&
            !e.animating &&
            (e.slidePrev(), d("scroll", t.raw)),
        (g = new c.Date().getTime()),
        !1);
  }
  function m(t) {
    const f = e.params.mousewheel;
    if (t.direction < 0) {
      if (e.isEnd && !e.params.loop && f.releaseOnEdges) return !0;
    } else if (e.isBeginning && !e.params.loop && f.releaseOnEdges) return !0;
    return !1;
  }
  function _(t) {
    let f = t,
      T = !0;
    if (
      !e.enabled ||
      t.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
    )
      return;
    const I = e.params.mousewheel;
    e.params.cssMode && f.preventDefault();
    let O = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (O = document.querySelector(e.params.mousewheel.eventsTarget));
    const L = O && O.contains(f.target);
    if (!e.mouseEntered && !L && !I.releaseOnEdges) return !0;
    f.originalEvent && (f = f.originalEvent);
    let r = 0;
    const M = e.rtlTranslate ? -1 : 1,
      P = l(f);
    if (I.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(P.pixelX) > Math.abs(P.pixelY)) r = -P.pixelX * M;
        else return !0;
      else if (Math.abs(P.pixelY) > Math.abs(P.pixelX)) r = -P.pixelY;
      else return !0;
    else
      r = Math.abs(P.pixelX) > Math.abs(P.pixelY) ? -P.pixelX * M : -P.pixelY;
    if (r === 0) return !0;
    I.invert && (r = -r);
    let S = e.getTranslate() + r * I.sensitivity;
    if (
      (S >= e.minTranslate() && (S = e.minTranslate()),
      S <= e.maxTranslate() && (S = e.maxTranslate()),
      (T = e.params.loop
        ? !0
        : !(S === e.minTranslate() || S === e.maxTranslate())),
      T && e.params.nested && f.stopPropagation(),
      !e.params.freeMode || !e.params.freeMode.enabled)
    ) {
      const b = {
        time: X(),
        delta: Math.abs(r),
        direction: Math.sign(r),
        raw: t,
      };
      p.length >= 2 && p.shift();
      const w = p.length ? p[p.length - 1] : void 0;
      if (
        (p.push(b),
        w
          ? (b.direction !== w.direction ||
              b.delta > w.delta ||
              b.time > w.time + 150) &&
            y(b)
          : y(b),
        m(b))
      )
        return !0;
    } else {
      const b = { time: X(), delta: Math.abs(r), direction: Math.sign(r) },
        w =
          s &&
          b.time < s.time + 500 &&
          b.delta <= s.delta &&
          b.direction === s.direction;
      if (!w) {
        s = void 0;
        let B = e.getTranslate() + r * I.sensitivity;
        const z = e.isBeginning,
          F = e.isEnd;
        if (
          (B >= e.minTranslate() && (B = e.minTranslate()),
          B <= e.maxTranslate() && (B = e.maxTranslate()),
          e.setTransition(0),
          e.setTranslate(B),
          e.updateProgress(),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          ((!z && e.isBeginning) || (!F && e.isEnd)) && e.updateSlidesClasses(),
          e.params.loop &&
            e.loopFix({
              direction: b.direction < 0 ? "next" : "prev",
              byMousewheel: !0,
            }),
          e.params.freeMode.sticky)
        ) {
          clearTimeout(o), (o = void 0), p.length >= 15 && p.shift();
          const G = p.length ? p[p.length - 1] : void 0,
            $ = p[0];
          if (
            (p.push(b), G && (b.delta > G.delta || b.direction !== G.direction))
          )
            p.splice(0);
          else if (
            p.length >= 15 &&
            b.time - $.time < 500 &&
            $.delta - b.delta >= 1 &&
            b.delta <= 6
          ) {
            const oe = r > 0 ? 0.8 : 0.2;
            (s = b),
              p.splice(0),
              (o = _e(() => {
                e.destroyed ||
                  !e.params ||
                  e.slideToClosest(e.params.speed, !0, void 0, oe);
              }, 0));
          }
          o ||
            (o = _e(() => {
              if (e.destroyed || !e.params) return;
              const oe = 0.5;
              (s = b),
                p.splice(0),
                e.slideToClosest(e.params.speed, !0, void 0, oe);
            }, 500));
        }
        if (
          (w || d("scroll", f),
          e.params.autoplay &&
            e.params.autoplayDisableOnInteraction &&
            e.autoplay.stop(),
          I.releaseOnEdges &&
            (B === e.minTranslate() || B === e.maxTranslate()))
        )
          return !0;
      }
    }
    return f.preventDefault ? f.preventDefault() : (f.returnValue = !1), !1;
  }
  function E(t) {
    let f = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (f = document.querySelector(e.params.mousewheel.eventsTarget)),
      f[t]("mouseenter", v),
      f[t]("mouseleave", h),
      f[t]("wheel", _);
  }
  function x() {
    return e.params.cssMode
      ? (e.wrapperEl.removeEventListener("wheel", _), !0)
      : e.mousewheel.enabled
      ? !1
      : (E("addEventListener"), (e.mousewheel.enabled = !0), !0);
  }
  function a() {
    return e.params.cssMode
      ? (e.wrapperEl.addEventListener(event, _), !0)
      : e.mousewheel.enabled
      ? (E("removeEventListener"), (e.mousewheel.enabled = !1), !0)
      : !1;
  }
  i("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && a(),
      e.params.mousewheel.enabled && x();
  }),
    i("destroy", () => {
      e.params.cssMode && x(), e.mousewheel.enabled && a();
    }),
    Object.assign(e.mousewheel, { enable: x, disable: a });
}
function we(n, e, u, i) {
  return (
    n.params.createElements &&
      Object.keys(i).forEach((d) => {
        if (!u[d] && u.auto === !0) {
          let c = rt(n.el, `.${i[d]}`)[0];
          c || ((c = Ae("div", i[d])), (c.className = i[d]), n.el.append(c)),
            (u[d] = c),
            (e[d] = c);
        }
      }),
    u
  );
}
function Ut(n) {
  let { swiper: e, extendParams: u, on: i, emit: d } = n;
  u({
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
  function c(m) {
    let _;
    return m &&
      typeof m == "string" &&
      e.isElement &&
      ((_ = e.el.querySelector(m)), _)
      ? _
      : (m &&
          (typeof m == "string" && (_ = [...document.querySelectorAll(m)]),
          e.params.uniqueNavElements &&
          typeof m == "string" &&
          _ &&
          _.length > 1 &&
          e.el.querySelectorAll(m).length === 1
            ? (_ = e.el.querySelector(m))
            : _ && _.length === 1 && (_ = _[0])),
        m && !_ ? m : _);
  }
  function o(m, _) {
    const E = e.params.navigation;
    (m = A(m)),
      m.forEach((x) => {
        x &&
          (x.classList[_ ? "add" : "remove"](...E.disabledClass.split(" ")),
          x.tagName === "BUTTON" && (x.disabled = _),
          e.params.watchOverflow &&
            e.enabled &&
            x.classList[e.isLocked ? "add" : "remove"](E.lockClass));
      });
  }
  function g() {
    const { nextEl: m, prevEl: _ } = e.navigation;
    if (e.params.loop) {
      o(_, !1), o(m, !1);
      return;
    }
    o(_, e.isBeginning && !e.params.rewind), o(m, e.isEnd && !e.params.rewind);
  }
  function s(m) {
    m.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), d("navigationPrev"));
  }
  function p(m) {
    m.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), d("navigationNext"));
  }
  function l() {
    const m = e.params.navigation;
    if (
      ((e.params.navigation = we(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(m.nextEl || m.prevEl))
    )
      return;
    let _ = c(m.nextEl),
      E = c(m.prevEl);
    Object.assign(e.navigation, { nextEl: _, prevEl: E }),
      (_ = A(_)),
      (E = A(E));
    const x = (a, t) => {
      a && a.addEventListener("click", t === "next" ? p : s),
        !e.enabled && a && a.classList.add(...m.lockClass.split(" "));
    };
    _.forEach((a) => x(a, "next")), E.forEach((a) => x(a, "prev"));
  }
  function v() {
    let { nextEl: m, prevEl: _ } = e.navigation;
    (m = A(m)), (_ = A(_));
    const E = (x, a) => {
      x.removeEventListener("click", a === "next" ? p : s),
        x.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    m.forEach((x) => E(x, "next")), _.forEach((x) => E(x, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? y() : (l(), g());
  }),
    i("toEdge fromEdge lock unlock", () => {
      g();
    }),
    i("destroy", () => {
      v();
    }),
    i("enable disable", () => {
      let { nextEl: m, prevEl: _ } = e.navigation;
      if (((m = A(m)), (_ = A(_)), e.enabled)) {
        g();
        return;
      }
      [...m, ..._]
        .filter((E) => !!E)
        .forEach((E) => E.classList.add(e.params.navigation.lockClass));
    }),
    i("click", (m, _) => {
      let { nextEl: E, prevEl: x } = e.navigation;
      (E = A(E)), (x = A(x));
      const a = _.target;
      let t = x.includes(a) || E.includes(a);
      if (e.isElement && !t) {
        const f = _.path || (_.composedPath && _.composedPath());
        f && (t = f.find((T) => E.includes(T) || x.includes(T)));
      }
      if (e.params.navigation.hideOnClick && !t) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === a || e.pagination.el.contains(a))
        )
          return;
        let f;
        E.length
          ? (f = E[0].classList.contains(e.params.navigation.hiddenClass))
          : x.length &&
            (f = x[0].classList.contains(e.params.navigation.hiddenClass)),
          d(f === !0 ? "navigationShow" : "navigationHide"),
          [...E, ...x]
            .filter((T) => !!T)
            .forEach((T) =>
              T.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const h = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        l(),
        g();
    },
    y = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        v();
    };
  Object.assign(e.navigation, {
    enable: h,
    disable: y,
    update: g,
    init: l,
    destroy: v,
  });
}
function Q(n) {
  return (
    n === void 0 && (n = ""),
    `.${n
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Vt(n) {
  let { swiper: e, extendParams: u, on: i, emit: d } = n;
  const c = "swiper-pagination";
  u({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (a) => a,
      formatFractionTotal: (a) => a,
      bulletClass: `${c}-bullet`,
      bulletActiveClass: `${c}-bullet-active`,
      modifierClass: `${c}-`,
      currentClass: `${c}-current`,
      totalClass: `${c}-total`,
      hiddenClass: `${c}-hidden`,
      progressbarFillClass: `${c}-progressbar-fill`,
      progressbarOppositeClass: `${c}-progressbar-opposite`,
      clickableClass: `${c}-clickable`,
      lockClass: `${c}-lock`,
      horizontalClass: `${c}-horizontal`,
      verticalClass: `${c}-vertical`,
      paginationDisabledClass: `${c}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let o,
    g = 0;
  function s() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function p(a, t) {
    const { bulletActiveClass: f } = e.params.pagination;
    a &&
      ((a = a[`${t === "prev" ? "previous" : "next"}ElementSibling`]),
      a &&
        (a.classList.add(`${f}-${t}`),
        (a = a[`${t === "prev" ? "previous" : "next"}ElementSibling`]),
        a && a.classList.add(`${f}-${t}-${t}`)));
  }
  function l(a, t, f) {
    if (((a = a % f), (t = t % f), t === a + 1)) return "next";
    if (t === a - 1) return "previous";
  }
  function v(a) {
    const t = a.target.closest(Q(e.params.pagination.bulletClass));
    if (!t) return;
    a.preventDefault();
    const f = Ee(t) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === f) return;
      const T = l(e.realIndex, f, e.slides.length);
      T === "next"
        ? e.slideNext()
        : T === "previous"
        ? e.slidePrev()
        : e.slideToLoop(f);
    } else e.slideTo(f);
  }
  function h() {
    const a = e.rtl,
      t = e.params.pagination;
    if (s()) return;
    let f = e.pagination.el;
    f = A(f);
    let T, I;
    const O =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      L = e.params.loop
        ? Math.ceil(O / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((I = e.previousRealIndex || 0),
          (T =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex != "undefined"
        ? ((T = e.snapIndex), (I = e.previousSnapIndex))
        : ((I = e.previousIndex || 0), (T = e.activeIndex || 0)),
      t.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const r = e.pagination.bullets;
      let M, P, S;
      if (
        (t.dynamicBullets &&
          ((o = ot(r[0], e.isHorizontal() ? "width" : "height")),
          f.forEach((b) => {
            b.style[e.isHorizontal() ? "width" : "height"] = `${
              o * (t.dynamicMainBullets + 4)
            }px`;
          }),
          t.dynamicMainBullets > 1 &&
            I !== void 0 &&
            ((g += T - (I || 0)),
            g > t.dynamicMainBullets - 1
              ? (g = t.dynamicMainBullets - 1)
              : g < 0 && (g = 0)),
          (M = Math.max(T - g, 0)),
          (P = M + (Math.min(r.length, t.dynamicMainBullets) - 1)),
          (S = (P + M) / 2)),
        r.forEach((b) => {
          const w = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (B) => `${t.bulletActiveClass}${B}`
            ),
          ]
            .map((B) =>
              typeof B == "string" && B.includes(" ") ? B.split(" ") : B
            )
            .flat();
          b.classList.remove(...w);
        }),
        f.length > 1)
      )
        r.forEach((b) => {
          const w = Ee(b);
          w === T
            ? b.classList.add(...t.bulletActiveClass.split(" "))
            : e.isElement && b.setAttribute("part", "bullet"),
            t.dynamicBullets &&
              (w >= M &&
                w <= P &&
                b.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),
              w === M && p(b, "prev"),
              w === P && p(b, "next"));
        });
      else {
        const b = r[T];
        if (
          (b && b.classList.add(...t.bulletActiveClass.split(" ")),
          e.isElement &&
            r.forEach((w, B) => {
              w.setAttribute("part", B === T ? "bullet-active" : "bullet");
            }),
          t.dynamicBullets)
        ) {
          const w = r[M],
            B = r[P];
          for (let z = M; z <= P; z += 1)
            r[z] &&
              r[z].classList.add(...`${t.bulletActiveClass}-main`.split(" "));
          p(w, "prev"), p(B, "next");
        }
      }
      if (t.dynamicBullets) {
        const b = Math.min(r.length, t.dynamicMainBullets + 4),
          w = (o * b - o) / 2 - S * o,
          B = a ? "right" : "left";
        r.forEach((z) => {
          z.style[e.isHorizontal() ? B : "top"] = `${w}px`;
        });
      }
    }
    f.forEach((r, M) => {
      if (
        (t.type === "fraction" &&
          (r.querySelectorAll(Q(t.currentClass)).forEach((P) => {
            P.textContent = t.formatFractionCurrent(T + 1);
          }),
          r.querySelectorAll(Q(t.totalClass)).forEach((P) => {
            P.textContent = t.formatFractionTotal(L);
          })),
        t.type === "progressbar")
      ) {
        let P;
        t.progressbarOpposite
          ? (P = e.isHorizontal() ? "vertical" : "horizontal")
          : (P = e.isHorizontal() ? "horizontal" : "vertical");
        const S = (T + 1) / L;
        let b = 1,
          w = 1;
        P === "horizontal" ? (b = S) : (w = S),
          r.querySelectorAll(Q(t.progressbarFillClass)).forEach((B) => {
            (B.style.transform = `translate3d(0,0,0) scaleX(${b}) scaleY(${w})`),
              (B.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      t.type === "custom" && t.renderCustom
        ? ((r.innerHTML = t.renderCustom(e, T + 1, L)),
          M === 0 && d("paginationRender", r))
        : (M === 0 && d("paginationRender", r), d("paginationUpdate", r)),
        e.params.watchOverflow &&
          e.enabled &&
          r.classList[e.isLocked ? "add" : "remove"](t.lockClass);
    });
  }
  function y() {
    const a = e.params.pagination;
    if (s()) return;
    const t =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
        ? e.slides.length / Math.ceil(e.params.grid.rows)
        : e.slides.length;
    let f = e.pagination.el;
    f = A(f);
    let T = "";
    if (a.type === "bullets") {
      let I = e.params.loop
        ? Math.ceil(t / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && I > t && (I = t);
      for (let O = 0; O < I; O += 1)
        a.renderBullet
          ? (T += a.renderBullet.call(e, O, a.bulletClass))
          : (T += `<${a.bulletElement} ${
              e.isElement ? 'part="bullet"' : ""
            } class="${a.bulletClass}"></${a.bulletElement}>`);
    }
    a.type === "fraction" &&
      (a.renderFraction
        ? (T = a.renderFraction.call(e, a.currentClass, a.totalClass))
        : (T = `<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`)),
      a.type === "progressbar" &&
        (a.renderProgressbar
          ? (T = a.renderProgressbar.call(e, a.progressbarFillClass))
          : (T = `<span class="${a.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      f.forEach((I) => {
        a.type !== "custom" && (I.innerHTML = T || ""),
          a.type === "bullets" &&
            e.pagination.bullets.push(...I.querySelectorAll(Q(a.bulletClass)));
      }),
      a.type !== "custom" && d("paginationRender", f[0]);
  }
  function m() {
    e.params.pagination = we(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const a = e.params.pagination;
    if (!a.el) return;
    let t;
    typeof a.el == "string" && e.isElement && (t = e.el.querySelector(a.el)),
      !t &&
        typeof a.el == "string" &&
        (t = [...document.querySelectorAll(a.el)]),
      t || (t = a.el),
      !(!t || t.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof a.el == "string" &&
          Array.isArray(t) &&
          t.length > 1 &&
          ((t = [...e.el.querySelectorAll(a.el)]),
          t.length > 1 &&
            (t = t.filter((f) => be(f, ".swiper")[0] === e.el)[0])),
        Array.isArray(t) && t.length === 1 && (t = t[0]),
        Object.assign(e.pagination, { el: t }),
        (t = A(t)),
        t.forEach((f) => {
          a.type === "bullets" &&
            a.clickable &&
            f.classList.add(...(a.clickableClass || "").split(" ")),
            f.classList.add(a.modifierClass + a.type),
            f.classList.add(
              e.isHorizontal() ? a.horizontalClass : a.verticalClass
            ),
            a.type === "bullets" &&
              a.dynamicBullets &&
              (f.classList.add(`${a.modifierClass}${a.type}-dynamic`),
              (g = 0),
              a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)),
            a.type === "progressbar" &&
              a.progressbarOpposite &&
              f.classList.add(a.progressbarOppositeClass),
            a.clickable && f.addEventListener("click", v),
            e.enabled || f.classList.add(a.lockClass);
        }));
  }
  function _() {
    const a = e.params.pagination;
    if (s()) return;
    let t = e.pagination.el;
    t &&
      ((t = A(t)),
      t.forEach((f) => {
        f.classList.remove(a.hiddenClass),
          f.classList.remove(a.modifierClass + a.type),
          f.classList.remove(
            e.isHorizontal() ? a.horizontalClass : a.verticalClass
          ),
          a.clickable &&
            (f.classList.remove(...(a.clickableClass || "").split(" ")),
            f.removeEventListener("click", v));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((f) =>
          f.classList.remove(...a.bulletActiveClass.split(" "))
        );
  }
  i("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const a = e.params.pagination;
    let { el: t } = e.pagination;
    (t = A(t)),
      t.forEach((f) => {
        f.classList.remove(a.horizontalClass, a.verticalClass),
          f.classList.add(
            e.isHorizontal() ? a.horizontalClass : a.verticalClass
          );
      });
  }),
    i("init", () => {
      e.params.pagination.enabled === !1 ? x() : (m(), y(), h());
    }),
    i("activeIndexChange", () => {
      typeof e.snapIndex == "undefined" && h();
    }),
    i("snapIndexChange", () => {
      h();
    }),
    i("snapGridLengthChange", () => {
      y(), h();
    }),
    i("destroy", () => {
      _();
    }),
    i("enable disable", () => {
      let { el: a } = e.pagination;
      a &&
        ((a = A(a)),
        a.forEach((t) =>
          t.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass
          )
        ));
    }),
    i("lock unlock", () => {
      h();
    }),
    i("click", (a, t) => {
      const f = t.target,
        T = A(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        T &&
        T.length > 0 &&
        !f.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && f === e.navigation.nextEl) ||
            (e.navigation.prevEl && f === e.navigation.prevEl))
        )
          return;
        const I = T[0].classList.contains(e.params.pagination.hiddenClass);
        d(I === !0 ? "paginationShow" : "paginationHide"),
          T.forEach((O) => O.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const E = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: a } = e.pagination;
      a &&
        ((a = A(a)),
        a.forEach((t) =>
          t.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        m(),
        y(),
        h();
    },
    x = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: a } = e.pagination;
      a &&
        ((a = A(a)),
        a.forEach((t) =>
          t.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        _();
    };
  Object.assign(e.pagination, {
    enable: E,
    disable: x,
    render: y,
    update: h,
    init: m,
    destroy: _,
  });
}
function qt(n) {
  let { swiper: e, extendParams: u, on: i, emit: d } = n;
  const c = De();
  let o = !1,
    g = null,
    s = null,
    p,
    l,
    v,
    h;
  u({
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
  function y() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: S, rtlTranslate: b } = e,
      { dragEl: w, el: B } = S,
      z = e.params.scrollbar,
      F = e.params.loop ? e.progressLoop : e.progress;
    let G = l,
      $ = (v - l) * F;
    b
      ? (($ = -$), $ > 0 ? ((G = l - $), ($ = 0)) : -$ + l > v && (G = v + $))
      : $ < 0
      ? ((G = l + $), ($ = 0))
      : $ + l > v && (G = v - $),
      e.isHorizontal()
        ? ((w.style.transform = `translate3d(${$}px, 0, 0)`),
          (w.style.width = `${G}px`))
        : ((w.style.transform = `translate3d(0px, ${$}px, 0)`),
          (w.style.height = `${G}px`)),
      z.hide &&
        (clearTimeout(g),
        (B.style.opacity = 1),
        (g = setTimeout(() => {
          (B.style.opacity = 0), (B.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function m(S) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${S}ms`);
  }
  function _() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: S } = e,
      { dragEl: b, el: w } = S;
    (b.style.width = ""),
      (b.style.height = ""),
      (v = e.isHorizontal() ? w.offsetWidth : w.offsetHeight),
      (h =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (l = v * h)
        : (l = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (b.style.width = `${l}px`)
        : (b.style.height = `${l}px`),
      h >= 1 ? (w.style.display = "none") : (w.style.display = ""),
      e.params.scrollbar.hide && (w.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        S.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  function E(S) {
    return e.isHorizontal() ? S.clientX : S.clientY;
  }
  function x(S) {
    const { scrollbar: b, rtlTranslate: w } = e,
      { el: B } = b;
    let z;
    (z =
      (E(S) -
        $e(B)[e.isHorizontal() ? "left" : "top"] -
        (p !== null ? p : l / 2)) /
      (v - l)),
      (z = Math.max(Math.min(z, 1), 0)),
      w && (z = 1 - z);
    const F = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * z;
    e.updateProgress(F),
      e.setTranslate(F),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function a(S) {
    const b = e.params.scrollbar,
      { scrollbar: w, wrapperEl: B } = e,
      { el: z, dragEl: F } = w;
    (o = !0),
      (p =
        S.target === F
          ? E(S) -
            S.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      S.preventDefault(),
      S.stopPropagation(),
      (B.style.transitionDuration = "100ms"),
      (F.style.transitionDuration = "100ms"),
      x(S),
      clearTimeout(s),
      (z.style.transitionDuration = "0ms"),
      b.hide && (z.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      d("scrollbarDragStart", S);
  }
  function t(S) {
    const { scrollbar: b, wrapperEl: w } = e,
      { el: B, dragEl: z } = b;
    o &&
      (S.preventDefault && S.cancelable
        ? S.preventDefault()
        : (S.returnValue = !1),
      x(S),
      (w.style.transitionDuration = "0ms"),
      (B.style.transitionDuration = "0ms"),
      (z.style.transitionDuration = "0ms"),
      d("scrollbarDragMove", S));
  }
  function f(S) {
    const b = e.params.scrollbar,
      { scrollbar: w, wrapperEl: B } = e,
      { el: z } = w;
    o &&
      ((o = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (B.style.transitionDuration = "")),
      b.hide &&
        (clearTimeout(s),
        (s = _e(() => {
          (z.style.opacity = 0), (z.style.transitionDuration = "400ms");
        }, 1e3))),
      d("scrollbarDragEnd", S),
      b.snapOnRelease && e.slideToClosest());
  }
  function T(S) {
    const { scrollbar: b, params: w } = e,
      B = b.el;
    if (!B) return;
    const z = B,
      F = w.passiveListeners ? { passive: !1, capture: !1 } : !1,
      G = w.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!z) return;
    const $ = S === "on" ? "addEventListener" : "removeEventListener";
    z[$]("pointerdown", a, F),
      c[$]("pointermove", t, F),
      c[$]("pointerup", f, G);
  }
  function I() {
    !e.params.scrollbar.el || !e.scrollbar.el || T("on");
  }
  function O() {
    !e.params.scrollbar.el || !e.scrollbar.el || T("off");
  }
  function L() {
    const { scrollbar: S, el: b } = e;
    e.params.scrollbar = we(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const w = e.params.scrollbar;
    if (!w.el) return;
    let B;
    if (
      (typeof w.el == "string" && e.isElement && (B = e.el.querySelector(w.el)),
      !B && typeof w.el == "string")
    ) {
      if (((B = c.querySelectorAll(w.el)), !B.length)) return;
    } else B || (B = w.el);
    e.params.uniqueNavElements &&
      typeof w.el == "string" &&
      B.length > 1 &&
      b.querySelectorAll(w.el).length === 1 &&
      (B = b.querySelector(w.el)),
      B.length > 0 && (B = B[0]),
      B.classList.add(e.isHorizontal() ? w.horizontalClass : w.verticalClass);
    let z;
    B &&
      ((z = B.querySelector(Q(e.params.scrollbar.dragClass))),
      z || ((z = Ae("div", e.params.scrollbar.dragClass)), B.append(z))),
      Object.assign(S, { el: B, dragEl: z }),
      w.draggable && I(),
      B &&
        B.classList[e.enabled ? "remove" : "add"](
          ...K(e.params.scrollbar.lockClass)
        );
  }
  function r() {
    const S = e.params.scrollbar,
      b = e.scrollbar.el;
    b &&
      b.classList.remove(
        ...K(e.isHorizontal() ? S.horizontalClass : S.verticalClass)
      ),
      O();
  }
  i("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el) return;
    const S = e.params.scrollbar;
    let { el: b } = e.scrollbar;
    (b = A(b)),
      b.forEach((w) => {
        w.classList.remove(S.horizontalClass, S.verticalClass),
          w.classList.add(
            e.isHorizontal() ? S.horizontalClass : S.verticalClass
          );
      });
  }),
    i("init", () => {
      e.params.scrollbar.enabled === !1 ? P() : (L(), _(), y());
    }),
    i("update resize observerUpdate lock unlock changeDirection", () => {
      _();
    }),
    i("setTranslate", () => {
      y();
    }),
    i("setTransition", (S, b) => {
      m(b);
    }),
    i("enable disable", () => {
      const { el: S } = e.scrollbar;
      S &&
        S.classList[e.enabled ? "remove" : "add"](
          ...K(e.params.scrollbar.lockClass)
        );
    }),
    i("destroy", () => {
      r();
    });
  const M = () => {
      e.el.classList.remove(...K(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...K(e.params.scrollbar.scrollbarDisabledClass)
          ),
        L(),
        _(),
        y();
    },
    P = () => {
      e.el.classList.add(...K(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...K(e.params.scrollbar.scrollbarDisabledClass)
          ),
        r();
    };
  Object.assign(e.scrollbar, {
    enable: M,
    disable: P,
    updateSize: _,
    setTranslate: y,
    init: L,
    destroy: r,
  });
}
function Wt(n) {
  let { swiper: e, extendParams: u, emit: i, once: d } = n;
  u({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function c() {
    if (e.params.cssMode) return;
    const s = e.getTranslate();
    e.setTranslate(s),
      e.setTransition(0),
      (e.touchEventsData.velocities.length = 0),
      e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function o() {
    if (e.params.cssMode) return;
    const { touchEventsData: s, touches: p } = e;
    s.velocities.length === 0 &&
      s.velocities.push({
        position: p[e.isHorizontal() ? "startX" : "startY"],
        time: s.touchStartTime,
      }),
      s.velocities.push({
        position: p[e.isHorizontal() ? "currentX" : "currentY"],
        time: X(),
      });
  }
  function g(s) {
    let { currentPos: p } = s;
    if (e.params.cssMode) return;
    const {
        params: l,
        wrapperEl: v,
        rtlTranslate: h,
        snapGrid: y,
        touchEventsData: m,
      } = e,
      E = X() - m.touchStartTime;
    if (p < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (p > -e.maxTranslate()) {
      e.slides.length < y.length
        ? e.slideTo(y.length - 1)
        : e.slideTo(e.slides.length - 1);
      return;
    }
    if (l.freeMode.momentum) {
      if (m.velocities.length > 1) {
        const L = m.velocities.pop(),
          r = m.velocities.pop(),
          M = L.position - r.position,
          P = L.time - r.time;
        (e.velocity = M / P),
          (e.velocity /= 2),
          Math.abs(e.velocity) < l.freeMode.minimumVelocity && (e.velocity = 0),
          (P > 150 || X() - L.time > 300) && (e.velocity = 0);
      } else e.velocity = 0;
      (e.velocity *= l.freeMode.momentumVelocityRatio),
        (m.velocities.length = 0);
      let x = 1e3 * l.freeMode.momentumRatio;
      const a = e.velocity * x;
      let t = e.translate + a;
      h && (t = -t);
      let f = !1,
        T;
      const I = Math.abs(e.velocity) * 20 * l.freeMode.momentumBounceRatio;
      let O;
      if (t < e.maxTranslate())
        l.freeMode.momentumBounce
          ? (t + e.maxTranslate() < -I && (t = e.maxTranslate() - I),
            (T = e.maxTranslate()),
            (f = !0),
            (m.allowMomentumBounce = !0))
          : (t = e.maxTranslate()),
          l.loop && l.centeredSlides && (O = !0);
      else if (t > e.minTranslate())
        l.freeMode.momentumBounce
          ? (t - e.minTranslate() > I && (t = e.minTranslate() + I),
            (T = e.minTranslate()),
            (f = !0),
            (m.allowMomentumBounce = !0))
          : (t = e.minTranslate()),
          l.loop && l.centeredSlides && (O = !0);
      else if (l.freeMode.sticky) {
        let L;
        for (let r = 0; r < y.length; r += 1)
          if (y[r] > -t) {
            L = r;
            break;
          }
        Math.abs(y[L] - t) < Math.abs(y[L - 1] - t) ||
        e.swipeDirection === "next"
          ? (t = y[L])
          : (t = y[L - 1]),
          (t = -t);
      }
      if (
        (O &&
          d("transitionEnd", () => {
            e.loopFix();
          }),
        e.velocity !== 0)
      ) {
        if (
          (h
            ? (x = Math.abs((-t - e.translate) / e.velocity))
            : (x = Math.abs((t - e.translate) / e.velocity)),
          l.freeMode.sticky)
        ) {
          const L = Math.abs((h ? -t : t) - e.translate),
            r = e.slidesSizesGrid[e.activeIndex];
          L < r
            ? (x = l.speed)
            : L < 2 * r
            ? (x = l.speed * 1.5)
            : (x = l.speed * 2.5);
        }
      } else if (l.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      l.freeMode.momentumBounce && f
        ? (e.updateProgress(T),
          e.setTransition(x),
          e.setTranslate(t),
          e.transitionStart(!0, e.swipeDirection),
          (e.animating = !0),
          ue(v, () => {
            !e ||
              e.destroyed ||
              !m.allowMomentumBounce ||
              (i("momentumBounce"),
              e.setTransition(l.speed),
              setTimeout(() => {
                e.setTranslate(T),
                  ue(v, () => {
                    !e || e.destroyed || e.transitionEnd();
                  });
              }, 0));
          }))
        : e.velocity
        ? (i("_freeModeNoMomentumRelease"),
          e.updateProgress(t),
          e.setTransition(x),
          e.setTranslate(t),
          e.transitionStart(!0, e.swipeDirection),
          e.animating ||
            ((e.animating = !0),
            ue(v, () => {
              !e || e.destroyed || e.transitionEnd();
            })))
        : e.updateProgress(t),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    } else if (l.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else l.freeMode && i("_freeModeNoMomentumRelease");
    (!l.freeMode.momentum || E >= l.longSwipesMs) &&
      (i("_freeModeStaticRelease"),
      e.updateProgress(),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: { onTouchStart: c, onTouchMove: o, onTouchEnd: g },
  });
}
const Xt = {
    modules: [Vt],
    pagination: {
      el: ".footer-group-slider__pagination",
      type: "bullets",
      bulletElement: "li",
      bulletActiveClass: "footer-group-slider__bullet--active",
      bulletClass: "footer-group-slider__bullet",
    },
  },
  Yt = {
    modules: [Ut],
    navigation: {
      prevEl: ".footer-group-slider__button--prev",
      nextEl: ".footer-group-slider__button--next",
      disabledClass: "footer-group-slider__button--invisible",
    },
  },
  Kt = 3,
  Zt = { class: "footer-group-slider" },
  Jt = ["aria-label", "title"],
  Qt = ["aria-label", "title"],
  en = { key: 2, class: "footer-group-slider__pagination" },
  tn = q({
    __name: "FooterGroupSlider",
    props: {
      sliderOptions: { default: () => Xt },
      slides: {},
      itemsInSlide: { default: Kt },
      isShowPagination: { type: Boolean, default: !0 },
      isShowNavigation: { type: Boolean, default: !1 },
    },
    setup(n) {
      $_$();
      const e = n,
        u = D(),
        i = (o) => {
          u.value = o;
        },
        d = U(() => $_$() && Ke(e.slides, e.itemsInSlide)),
        c = U(() => `--slide-items-count: ${e.itemsInSlide}`);
      return (o, g) => {
        $_$();
        const s = Y("UiIco"),
          p = Ie("tooltip");
        return (
          k(),
          N("div", Zt, [
            R(
              C(Ue),
              Me({ onSwiper: i }, o.sliderOptions),
              {
                default: H(
                  () =>
                    $_$() && [
                      (k(!0),
                      N(
                        ge,
                        null,
                        ve(
                          C(d),
                          (l, v) =>
                            $_$() &&
                            (k(),
                            le(
                              C(Ve),
                              {
                                key: `footer-group-slider-slide-${v}`,
                                style: Ze(C(c)),
                                class: "footer-group-slider__slide",
                              },
                              {
                                default: H(
                                  () =>
                                    $_$() && [
                                      (k(!0),
                                      N(
                                        ge,
                                        null,
                                        ve(
                                          l,
                                          (h, y) =>
                                            $_$() &&
                                            Oe(
                                              o.$slots,
                                              "default",
                                              {
                                                key: `footer-group-slider-item-${y}`,
                                                item: h,
                                              },
                                              void 0,
                                              !0
                                            )
                                        ),
                                        128
                                      )),
                                    ]
                                ),
                                _: 2,
                              },
                              1032,
                              ["style"]
                            ))
                        ),
                        128
                      )),
                    ]
                ),
                _: 3,
              },
              16
            ),
            o.isShowNavigation
              ? me(
                  (k(),
                  N(
                    "button",
                    {
                      key: 0,
                      "aria-label": o.$T("main_slider_prev"),
                      title: o.$T("main_slider_prev"),
                      class:
                        "footer-group-slider__button footer-group-slider__button--prev",
                      type: "button",
                    },
                    [
                      R(
                        s,
                        {
                          size: C(Z).xxs,
                          ico: C(ee).ANGLE_LEFT,
                          class: "footer-group-slider__icon",
                        },
                        null,
                        8,
                        ["size", "ico"]
                      ),
                    ],
                    8,
                    Jt
                  )),
                  [[p, o.$T("main_slider_prev")]]
                )
              : ae("", !0),
            o.isShowNavigation
              ? me(
                  (k(),
                  N(
                    "button",
                    {
                      key: 1,
                      "aria-label": o.$T("main_slider_next"),
                      title: o.$T("main_slider_next"),
                      class:
                        "footer-group-slider__button footer-group-slider__button--next",
                      type: "button",
                    },
                    [
                      R(
                        s,
                        {
                          size: C(Z).xxs,
                          ico: C(ee).ANGLE_RIGHT,
                          class: "footer-group-slider__icon",
                        },
                        null,
                        8,
                        ["size", "ico"]
                      ),
                    ],
                    8,
                    Qt
                  )),
                  [[p, o.$T("main_slider_next")]]
                )
              : ae("", !0),
            o.isShowPagination ? (k(), N("ul", en)) : ae("", !0),
          ])
        );
      };
    },
  }),
  nn = V(tn, [["__scopeId", "data-v-e720b823"]]),
  an = ["src", "alt"],
  sn = 1260,
  ln = 1040,
  rn = q({
    __name: "FooterPaymentsSlider_F",
    props: {
      payments: { default: () => [] },
      isMediaUrl: { type: Boolean, default: !1 },
    },
    setup(n) {
      $_$();
      const e = n,
        u = Je(),
        { resizeObserve: i, resizeUnobserve: d } = ct(),
        c = D(),
        { paymentLink: o } = mt(),
        { getCorrectImgPath: g } = gt(),
        s = D(3),
        p = (y) => ($_$() && e.isMediaUrl ? u(y, ne.SVG) : g(y)),
        l = (y) => {
          var m;
          return (m = y.info_link) != null ? m : o;
        },
        v = (y) => (y.info_link ? "_blank" : "_self"),
        h = (y) => {
          $_$();
          let m = 3;
          y > ln && (m = 5), y > sn && (m = 10), C(s) !== m && (s.value = m);
        };
      return (
        se(() => {
          $_$();
          i(C(c), (y) => {
            const { width: m } = y.contentRect;
            h(m);
          });
        }),
        re(() => {
          $_$();
          d(C(c));
        }),
        (y, m) => {
          $_$();
          const _ = Qe;
          return (
            k(),
            N(
              "div",
              {
                ref_key: "paymentsSlider",
                ref: c,
                class: "footer-payments-slider",
              },
              [
                R(
                  nn,
                  {
                    slides: y.payments,
                    itemsInSlide: C(s),
                    sliderOptions: C(Yt),
                    isShowNavigation: "",
                    isShowPagination: !1,
                  },
                  {
                    default: H(
                      ({ item: E }) =>
                        $_$() && [
                          R(
                            _,
                            {
                              to: l(E),
                              title: E.name,
                              target: v(E),
                              class: "footer-payments-slider__item",
                            },
                            {
                              default: H(
                                () =>
                                  $_$() && [
                                    W(
                                      "img",
                                      {
                                        src: p(E.icon),
                                        alt: E.name,
                                        class: "footer-payments-slider__logo",
                                      },
                                      null,
                                      8,
                                      an
                                    ),
                                  ]
                              ),
                              _: 2,
                            },
                            1032,
                            ["to", "title", "target"]
                          ),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["slides", "itemsInSlide", "sliderOptions"]
                ),
              ],
              512
            )
          );
        }
      );
    },
  }),
  In = V(rn, [["__scopeId", "data-v-47781bdf"]]),
  on = { class: "footer-slider" },
  dn = q({
    __name: "FooterSlider_F",
    props: {
      title: { default: "" },
      slides: {},
      isCyberPage: { type: Boolean, default: !1 },
    },
    setup(n) {
      $_$();
      const e = n,
        u = D(100),
        i = D(null),
        d = D(!0),
        c = D(!1),
        o = () => {
          $_$();
          const h = C(i);
          h && ((d.value = h.isBeginning), (c.value = h.isEnd));
        },
        g = () => {
          $_$();
          const h = C(i);
          h != null &&
            h.el &&
            ((u.value = Math.round(h.el.offsetWidth * 0.3)),
            h.scrollbar && h.scrollbar.updateSize());
        },
        s = (h) => {
          $_$();
          (i.value = h),
            Pe(() => {
              g(), o();
            }),
            h.on("setTranslate", o),
            h.on("touchEnd", o);
        };
      se(() => {
        window.addEventListener("resize", g);
      }),
        re(() => {
          window.removeEventListener("resize", g);
        });
      const p = U(
          () =>
            $_$() && {
              modules: [Gt, qt, Wt, jt],
              spaceBetween: 10,
              slidesPerView: "auto",
              keyboard: { enabled: !0 },
              resistanceRatio: 0,
              freeMode: { enabled: !0 },
              scrollbar: { draggable: !0, snapOnRelease: !1, dragSize: C(u) },
              mousewheel: { forceToAxis: !0 },
            }
        ),
        l = U(() => ({
          "footer-slider__item--theme-cyber": e.isCyberPage,
          "footer-slider__item--theme-primary--30": !e.isCyberPage,
        })),
        v = U(
          () =>
            $_$() && {
              "footer-slider__swiper--on-scroll-start": C(d),
              "footer-slider__swiper--on-scroll-end": C(c),
            }
        );
      return (h, y) => {
        $_$();
        const m = Y("UiCaption");
        return (
          k(),
          N("div", on, [
            h.title
              ? (k(),
                le(
                  m,
                  {
                    key: 0,
                    tag: "h4",
                    uppercase: "",
                    size: C(Z).m,
                    weight: C(et).BOLD,
                    class: "footer-slider__title",
                  },
                  { default: H(() => $_$() && [he(ie(h.title), 1)]), _: 1 },
                  8,
                  ["size", "weight"]
                ))
              : ae("", !0),
            R(
              C(Ue),
              Me(
                {
                  onSwiper: s,
                  onFromEdge: o,
                  onSlideChange: o,
                  onResize: o,
                  onSlidesUpdated: o,
                  class: ["footer-slider__swiper", v.value],
                },
                p.value
              ),
              {
                default: H(
                  () =>
                    $_$() && [
                      (k(!0),
                      N(
                        ge,
                        null,
                        ve(
                          h.slides,
                          (_, E) =>
                            $_$() &&
                            (k(),
                            le(
                              C(Ve),
                              {
                                key: E,
                                class: Te(["footer-slider__item", l.value]),
                              },
                              {
                                default: H(
                                  () =>
                                    $_$() && [
                                      Oe(
                                        h.$slots,
                                        "default",
                                        { item: _ },
                                        void 0,
                                        !0
                                      ),
                                    ]
                                ),
                                _: 2,
                              },
                              1032,
                              ["class"]
                            ))
                        ),
                        128
                      )),
                    ]
                ),
                _: 3,
              },
              16,
              ["class"]
            ),
          ])
        );
      };
    },
  }),
  Mn = V(dn, [["__scopeId", "data-v-0aeb5dcf"]]),
  un = () => {
    $_$();
    const n = ye(),
      e = ze(),
      { time: u } = dt(),
      i = U(() => e.isUserAuth),
      d = D(Date.now());
    return {
      text: n("gaming_session"),
      time: u,
      isAuthorized: i,
      currentDate: d,
    };
  },
  cn = { color: void 0 },
  fn = { class: "footer-timer" },
  pn = ["aria-label"],
  mn = q({
    __name: "FooterTimer",
    setup(n) {
      const { time: e, text: u, isAuthorized: i, currentDate: d } = un();
      return (c, o) => {
        $_$();
        const g = Y("UiIco"),
          s = Y("UiCaption"),
          p = Ie("tooltip");
        return (
          k(),
          N("div", fn, [
            C(i)
              ? me(
                  (k(),
                  N(
                    "div",
                    {
                      key: 0,
                      "aria-label": C(u),
                      class: "footer-timer__session",
                    },
                    [
                      R(
                        g,
                        {
                          class: "footer-timer__ico",
                          size: C(Z).xs,
                          ico: C(ee).TIMER,
                        },
                        null,
                        8,
                        ["size", "ico"]
                      ),
                      R(
                        s,
                        { size: C(Z).xs },
                        { default: H(() => $_$() && [he(ie(C(e)), 1)]), _: 1 },
                        8,
                        ["size"]
                      ),
                    ],
                    8,
                    pn
                  )),
                  [[p, C(u)]]
                )
              : ae("", !0),
            R(
              C(vt),
              {
                modelValue: C(d),
                "onUpdate:modelValue":
                  o[0] ||
                  (o[0] = (l) => ($_$() && tt(d) ? (d.value = l) : null)),
                format: "dd.MM.yyyy / HH:mm ('UTC' xxx)",
              },
              {
                default: H(
                  ({ dateFormatted: l }) =>
                    $_$() && [
                      R(
                        s,
                        { color: C(cn).color, size: C(Z).xs },
                        { default: H(() => $_$() && [he(ie(l), 1)]), _: 2 },
                        1032,
                        ["color", "size"]
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              ["modelValue"]
            ),
          ])
        );
      };
    },
  }),
  On = V(mn, [["__scopeId", "data-v-7ce8c2c5"]]),
  gn = { class: "footer-spot" },
  vn = ["src"],
  hn = q({
    __name: "FooterSpot",
    setup(n) {
      return (e, u) =>
        $_$() &&
        (k(),
        N("div", gn, [
          W(
            "img",
            {
              alt: "",
              width: "75",
              height: "75",
              src: e.$mediaUrl("footer_licenses_spot", C(ne).SVG),
            },
            null,
            8,
            vn
          ),
        ]));
    },
  }),
  zn = V(hn, [["__scopeId", "data-v-d9e22baf"]]),
  Dn = () => {
    $_$();
    var n;
    const e = ze(),
      u = (n = nt(-2001)) != null ? n : [],
      i = ye(),
      d = U(() => e.getLanguage),
      { getLinkWithLang: c } = at(d),
      o = u.map((p) => {
        const l = { ...p };
        return l.linkTypeId === 3 && (l.value = c(l.value)), l;
      }),
      g = ft(o, (p) => (p == null ? void 0 : p.folderId));
    return {
      affiliateLinks: o,
      sortedGroup: g,
      getAffiliateLinksGroupTitle: (p) => {
        var l;
        const v =
            ((l = g == null ? void 0 : g[p]) == null ? void 0 : l.length) === 1
              ? "_single_title"
              : "_title",
          h =
            {
              1: "footer_partners_sport",
              2: "footer_partners_cyber",
              3: "footer_partners_media",
            }[p] || "";
        return h ? i(`${h}${v}`) : "";
      },
    };
  },
  kn = (n) => {
    var e;
    return (e =
      n == null
        ? void 0
        : n.reduce((u, i) => ((u[i.media_key] = i.alt_name), u), {})) != null
      ? e
      : {};
  };
export {
  En as FooterCookieRestriction,
  xn as FooterCuracao,
  Tn as FooterEmailSupport,
  Bn as FooterGamingCuracao,
  Ln as FooterLinkStopInTime,
  Pn as FooterPartnersLink,
  In as FooterPaymentsSlider,
  Mn as FooterSlider,
  zn as FooterSpot,
  On as FooterTimer,
  kn as parseFooterLeagues,
  _t as useCuracao,
  Dn as useFooterPartners,
  St as useGamingCuracao,
};
