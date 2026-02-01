import $_$ from "./$_$.js";
$_$();
import {
  useGlobalStore as we,
  runtimeCore_esmBundler_computed as o,
  useRouterMethodsWithLang as Ae,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_inject as se,
  reactivity_esmBundler_ref as ne,
  router_useRouter as Ce,
  index_getConfig as ke,
  reactivity_esmBundler_shallowRef as ue,
  reactivity_esmBundler_toValue as g,
  debounce as De,
  IS_PROVIDED_COMPONENT as Ne,
  runtimeCore_esmBundler_getCurrentInstance as xe,
  runtimeCore_esmBundler_onMounted as $e,
  runtimeCore_esmBundler_defineComponent as ge,
  runtimeCore_esmBundler_createElementBlock as G,
  runtimeCore_esmBundler_openBlock as H,
  shared_esmBundler_normalizeClass as he,
  runtimeCore_esmBundler_Fragment as ce,
  runtimeCore_esmBundler_renderList as ve,
  reactivity_esmBundler_toRef as _e,
  index_useCDN as Ge,
  runtimeCore_esmBundler_createCommentVNode as te,
  runtimeCore_esmBundler_createElementVNode as He,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  ImageTypes as Oe,
  ElementTypes as P,
  useBaseTemplate as Ve,
  AnalyticsWidgetTemplates as Me,
  _export_sfc as fe,
} from "./entry-8c01be4f19.js";
var oe = ((e) => ((e.LENGTH_6 = "6"), (e.LENGTH_9 = "9"), e))(oe || {}),
  ie = ((e) => ((e.HORIZONTAL = "horizontal"), (e.VERTICAL = "vertical"), e))(
    ie || {}
  ),
  x = ((e) => (
    (e.A1 = "A1"),
    (e.A2 = "A2"),
    (e.A3 = "A3"),
    (e.B1 = "B1"),
    (e.B2 = "B2"),
    (e.B3 = "B3"),
    (e.C1 = "C1"),
    (e.C2 = "C2"),
    (e.C3 = "C3"),
    e
  ))(x || {});
const re = [x.A1, x.A2, x.A3, x.B1, x.B2, x.B3, x.C1, x.C2, x.C3];
var Fe = ((e) => (
  (e.H1 = "h1"),
  (e.H2 = "h2"),
  (e.H3 = "h3"),
  (e.H4 = "h4"),
  (e.H5 = "h5"),
  (e.H6 = "h6"),
  (e.PARAGRAPH = "p"),
  (e.DIV = "div"),
  (e.SPAN = "span"),
  e
))(Fe || {});
const X = { LTR: "ltr", RTL: "rtl" };
var de = ((e) => ((e.HTTP = "http"), (e.HTTPS = "https"), e))(de || {}),
  ae = ((e) => ((e.LAZY = "lazy"), (e.EAGER = "eager"), e))(ae || {});
const We = (e = "") =>
    e.includes(`${de.HTTP}://`) || e.includes(`${de.HTTPS}://`),
  j = (e) => e === Oe.WEBP;
function ze(e) {
  $_$();
  const u = we(),
    a = o(() => u.getLanguage),
    { getLocationWithLang: m } = Ae(a),
    _ = o(() => u.isRtl),
    c = t(e).element || null,
    h = (p) => {
      $_$();
      var B, d;
      return (
        ((d = (B = t(e)) == null ? void 0 : B.element) == null
          ? void 0
          : d.find((y) => y.type === p)) || null
      );
    },
    s = (p) => {
      $_$();
      var B, d;
      return (
        ((d = (B = t(e)) == null ? void 0 : B.element) == null
          ? void 0
          : d.filter((y) => y.type === p)) || null
      );
    },
    L = () => {
      $_$();
      var p;
      const B = ((p = t(e)) == null ? void 0 : p.images) || [],
        d = t(_) ? X.RTL : X.LTR;
      return B.find((I) => I.direction === d) || B[0] || null;
    },
    S = o(() => {
      $_$();
      var p;
      return !!((p = t(e)) != null && p.link);
    }),
    w = o(() => {
      $_$();
      var p;
      return S && m(((p = t(e).link) == null ? void 0 : p.path) || "");
    }),
    C = o(() => {
      $_$();
      var p;
      return (
        S && (((p = t(e).link) == null ? void 0 : p.openInNewWindow) || !1)
      );
    }),
    R = (p) => {
      const B = h(p);
      return B != null && B.text ? B : null;
    },
    k = o(() => c && R(P.TITLE)),
    O = o(() => c && R(P.SUBTITLE)),
    v = o(() => c && R(P.PROMO_PERIOD)),
    D = o(() => c && R(P.BUTTON)),
    N = o(() => c && L()),
    i = o(() => c && h(P.EVENT)),
    A = o(() => c && h(P.SHADOW)),
    E = o(() => c && h(P.AUTO_SHADOW_2K_4K)),
    $ = o(() => c && h(P.AUTO_SHADOW)),
    W = o(() => c && h(P.SHOW_TEAM_LOGOS)),
    z = o(() => {
      $_$();
      var p;
      return ((p = t(A)) == null ? void 0 : p.active) || !1;
    }),
    K = o(
      () =>
        $_$() && {
          title: !!t(k),
          subtitle: !!t(O),
          promo_period: !!t(v),
          button: !!t(D),
          image: !!t(N),
          event: !!t(i),
        }
    ),
    Z = o(() => c && h(P.ANIMATION_SPEED)),
    F = o(() => c && h(P.GRADIENT)),
    Y = o(() => c && s(P.TITLE)),
    q = o(() => c && s(P.LOOP_IMAGE));
  return {
    autoShadowBigScreen: E,
    autoShadow: $,
    showTeamLogos: W,
    title: k,
    subtitle: O,
    promoPeriod: v,
    button: D,
    image: N,
    event: i,
    shadow: A,
    isContentBackdrop: z,
    hasElementOptions: K,
    linkPath: w,
    openInNewWindow: C,
    animationSpeed: Z,
    gradient: F,
    titles: Y,
    loopImages: q,
  };
}
var le = ((e) => (
    (e.RIGHT_CENTER = "right-center"),
    (e.TOP_CENTER = "top-center"),
    (e.CENTER = "center"),
    e
  ))(le || {}),
  M = ((e) => ((e.WEBP = "webp"), (e.FALLBACK = "fallback"), e))(M || {}),
  T = ((e) => ((e.DPR_1 = "one"), (e.DPR_2 = "two"), e))(T || {});
const Ke = (e) => {
    var u;
    return !e || !(e != null && e.imageVariants)
      ? null
      : (u = e == null ? void 0 : e.imageVariants) == null
      ? void 0
      : u.reduce((a, m) => {
          var _;
          if (
            !["screen", "path", "type", "width", "height"].every((C) => !!m[C])
          )
            return a;
          const s = { ...m },
            L = j(s.type) ? s.type : M.FALLBACK,
            S = s.isRetina ? T.DPR_2 : T.DPR_1,
            w = (_ = a[s.screen]) == null ? void 0 : _.extensions;
          return a[s.screen]
            ? ((w[L] = { ...w[L], [S]: s.path }), a)
            : ((a[s.screen] = {
                extensions: { [L]: { [S]: s.path } },
                size: { width: s.width || 0, height: s.height || 0 },
              }),
              a);
        }, {});
  },
  Ue = (e) =>
    !e || !e.length
      ? []
      : e.reduce((u, a) => {
          const m = (a == null ? void 0 : a.data) || void 0,
            _ = (m == null ? void 0 : m.imageVariants) || void 0;
          if (!m || !_ || !_.length) return u;
          const c = { [M.FALLBACK]: {}, [M.WEBP]: {} };
          _.forEach((s) => {
            if (!(s != null && s.path) || !(s != null && s.type)) return;
            const L = s != null && s.isRetina ? T.DPR_2 : T.DPR_1,
              S = j(s.type) ? M.WEBP : M.FALLBACK;
            c[S][L] = s.path;
          });
          const h = {
            extensions: c,
            size: { width: m.width || 0, height: m.height || 0 },
          };
          return (
            u.push({
              content: h,
              position: a == null ? void 0 : a.position,
              index: a == null ? void 0 : a.index,
              direction: m.direction || X.LTR,
            }),
            u
          );
        }, []),
  je = (e, u = 0, a = {}) => {
    $_$();
    var m, _;
    const c = se("eventsData", ne([])),
      h = Ce(),
      {
        autoShadow: s,
        autoShadowBigScreen: L,
        showTeamLogos: S,
        event: w,
        title: C,
        subtitle: R,
        promoPeriod: k,
        button: O,
        image: v,
        isContentBackdrop: D,
        hasElementOptions: N,
        linkPath: i,
        openInNewWindow: A,
        animationSpeed: E,
        gradient: $,
        titles: W,
        loopImages: z,
      } = ze(e),
      K = o(
        () =>
          ($_$() &&
            t(c).find((n) => {
              $_$();
              const r = t(w);
              return (
                n.id === (r == null ? void 0 : r.liveGameId) ||
                n.id === (r == null ? void 0 : r.lineGameId)
              );
            })) ||
          null
      ),
      Z = ke(560),
      F = o(() => {
        $_$();
        var n, r;
        return (
          !!((n = t(s)) != null && n.active) ||
          !!((r = t(L)) != null && r.active)
        );
      }),
      Y = o(() => {
        $_$();
        var n, r;
        return !!(
          (r = (n = t(w)) == null ? void 0 : n.marketList) != null && r.length
        );
      }),
      q = o(
        () =>
          $_$() && {
            "template-slide-bg--has-shadow": t(F),
            "template-slide-bg--filled": Z,
          }
      ),
      p = ue(
        (_ = (m = t(v)) == null ? void 0 : m.align) != null ? _ : le.CENTER
      ),
      B = o(() => $_$() && t(p) === le.CENTER),
      d = o(
        () => $_$() && { "template-slide-auto-shadow--is-image-center": !!t(B) }
      ),
      y = o(
        () =>
          $_$() && {
            "template-slide--autoshadow": t(F),
            "template-slide--content-backdrop": t(D),
            "template-slide--only-title": !!t(C) && !t(R),
            "template-slide--only-subtitle": !t(C) && !!t(R),
          }
      ),
      I = (n) => !(n != null && n.screen),
      l = (n) => {
        $_$();
        var r, b;
        return (
          ((b = (r = t(v)) == null ? void 0 : r.imageVariants) == null
            ? void 0
            : b.find(n)) || void 0
        );
      },
      f = o(() => l((n) => I(n) && j((n == null ? void 0 : n.type) || ""))),
      V = o(() =>
        l(
          (n) =>
            I(n) &&
            j((n == null ? void 0 : n.type) || "") &&
            !!(n != null && n.isRetina)
        )
      ),
      U = o(() => l((n) => I(n) && !j((n == null ? void 0 : n.type) || ""))),
      Be = o(() =>
        l(
          (n) =>
            I(n) &&
            !j((n == null ? void 0 : n.type) || "") &&
            !!(n != null && n.isRetina)
        )
      ),
      ye = o(() => {
        $_$();
        var n, r;
        return (r = (n = t(C)) == null ? void 0 : n.text) != null ? r : "";
      }),
      Te = o(() => {
        $_$();
        var n, r, b, J, Q, me;
        return {
          extensions: {
            [M.FALLBACK]: {
              [T.DPR_1]: ((n = t(U)) == null ? void 0 : n.path) || "",
              [T.DPR_2]: ((r = t(Be)) == null ? void 0 : r.path) || "",
            },
            [M.WEBP]: {
              [T.DPR_1]: ((b = t(f)) == null ? void 0 : b.path) || "",
              [T.DPR_2]: ((J = t(V)) == null ? void 0 : J.path) || "",
            },
          },
          size: {
            width: ((Q = t(v)) == null ? void 0 : Q.width) || 0,
            height: ((me = t(v)) == null ? void 0 : me.height) || 0,
          },
        };
      }),
      Ie = o(() => ($_$() && Ue(g(z))) || []),
      Le = o(() => (u ? void 0 : ae.EAGER)),
      Re = (n, r) => (n < r ? ae.EAGER : ae.LAZY),
      pe = o(() => {
        $_$();
        var n;
        return ((n = t(K)) == null ? void 0 : n.url) || t(i);
      }),
      Se = (n) => {
        $_$();
        var r;
        const b = t(A),
          J = We((r = t(e).link) == null ? void 0 : r.path);
        !b && !J && n.preventDefault();
        const Q = t(pe);
        !b && Q && !J && h.push(Q);
      },
      ee = o(() => ($_$() && Ke(t(v))) || {}),
      Ee = o(() => {
        $_$();
        var n;
        return (n = Object.keys(t(ee))) == null
          ? void 0
          : n.reduce(
              (r, b) =>
                $_$() && {
                  ...r,
                  [`--w-by-${b}`]: t(ee)[Number(b)].size.width,
                  [`--h-by-${b}`]: t(ee)[Number(b)].size.height,
                },
              {}
            );
      }),
      be = o(() => {
        $_$();
        var n, r;
        return {
          "--content-width": a.contentWidth,
          "--opacity-attack": a.opacityAttack,
          "--w-original": `${((n = t(v)) == null ? void 0 : n.width) || 0}`,
          "--h-original": `${((r = t(v)) == null ? void 0 : r.height) || 0}`,
          ...t(Ee),
        };
      }),
      Pe = o(() => {
        $_$();
        const n = t(S);
        return typeof (n == null ? void 0 : n.active) == "boolean"
          ? !!n.active
          : !0;
      });
    return {
      gameData: K,
      isShowTeamLogos: Pe,
      autoShadow: s,
      title: C,
      animationSpeed: E,
      gradient: $,
      titles: W,
      loopImages: z,
      subtitle: R,
      promoPeriod: k,
      button: O,
      isContentBackdrop: D,
      hasElementOptions: N,
      linkPath: pe,
      openInNewWindow: A,
      getSlideBackgroundClass: q,
      getSlideClasses: y,
      getTemplateSlideAutoShadowClasses: d,
      webpImage: f,
      defaultImage: U,
      imageAltText: ye,
      loadingImgAttrValue: Le,
      templateSlideStyle: be,
      getMobileLoadingImgAttrr: Re,
      onLinkClick: Se,
      hasAnyMarkets: Y,
      mappedImageForTemplatePicture: Te,
      mappedLoopImagesForTemplatePicture: Ie,
      isAutoShadowActive: F,
      imagesByBreakpoints: ee,
      isImageCenter: B,
      positionImage: p,
    };
  },
  st = (e) => {
    $_$();
    const u = o(() => e.banner),
      a = !1,
      m = !1,
      { isRtl: _ } = Ve(e),
      {
        titles: c,
        mappedLoopImagesForTemplatePicture: h,
        gradient: s,
        animationSpeed: L,
      } = je(u, e.bannerIndex),
      S = o(() => {
        $_$();
        var d;
        const y =
            ((d = g(c)) == null
              ? void 0
              : d.map((l) => {
                  $_$();
                  var f;
                  return {
                    type: "text",
                    content: ((f = g(l)) == null ? void 0 : f.text) || "",
                    position: g(l.position),
                  };
                })) || [],
          I = g(h)
            .filter((l) => {
              $_$();
              const f = l.direction.toLowerCase();
              return g(_) ? f === X.RTL : f === X.LTR;
            })
            .map(
              (l) =>
                $_$() && {
                  type: "image",
                  content: g(l.content),
                  position: g(l.position),
                  direction: g(l.direction),
                }
            );
        return [...y, ...I].sort(
          (l, f) => Number(l.position || 0) - Number(f.position || 0)
        );
      }),
      w = g(e.template) === Me.TEMPLATE_23,
      O = Math.ceil(2560 / (20 + 24)),
      v = w ? 20 : O,
      D = ne(),
      N = ne([]),
      i = ne(v),
      A = ue(1),
      E = ue(1),
      $ = () => {
        $_$();
        const d = g(D),
          y = g(N);
        if (!d || !y.length) return v;
        const I = d.clientWidth,
          l = y[0];
        if (!l || !l.children.length) return v;
        const f = Math.floor(l.getBoundingClientRect().width) || 1,
          V = I + f,
          U = V / f;
        return (
          (A.value = f),
          (E.value = V),
          Number.isNaN(U) || !Number.isFinite(U) ? v : Math.max(2, Math.ceil(U))
        );
      },
      W = () => {
        i.value = $();
      },
      z = De(() => {
        W();
      }, 10),
      K = 10,
      Z = (d) => (d <= 0 ? 0 : d * K),
      F = o(() => {
        $_$();
        var d;
        const y = Z(((d = g(L)) == null ? void 0 : d.value) || 0);
        if (y === 0) return 0;
        const I = g(N)[0],
          l = I ? getComputedStyle(I) : null,
          f = (l && parseFloat(l.gap || l.columnGap || "0")) || 0,
          V = g(A) + f;
        return Math.max(0.001, V / y);
      }),
      Y = o(() => {
        $_$();
        var d;
        return {
          "--animation-section-size": `${g(A)}px`,
          "--animation-container-width": `${g(E)}px`,
          "--animation-speed": `${g(F)}s`,
          "--animation-play-state":
            (d = g(L)) != null && d.value ? "running" : "paused",
        };
      }),
      q = o(() => ({ "template-slide__wrap--revers": m })),
      p = o(() => {
        $_$();
        var d, y, I;
        const l =
            ((y = (d = g(s)) == null ? void 0 : d.gradientList) == null
              ? void 0
              : y.filter((V) => V != null)) || [],
          f =
            (I = g(s)) != null && I.isMirrorGradient && g(_)
              ? "90deg"
              : "270deg";
        return l.length === 1
          ? { "--gradient-bg": `linear-gradient(${String(l[0])})` }
          : l.length === 2
          ? {
              "--gradient-bg": `linear-gradient(${f}, ${l[0]} 0%, ${l[1]} 100%)`,
            }
          : l.length === 3
          ? {
              "--gradient-bg": `linear-gradient(${f},
                ${l[0]} 0%,
                ${l[1]} 50%,
                ${l[2]} 100%)`,
            }
          : {};
      }),
      B = o(() => $_$() && { "template-slide--animation-enabled": !g(a) });
    return {
      tickerItems: S,
      wrapper: D,
      groupsList: N,
      groupsCount: i,
      onImgLoad: z,
      setGroups: W,
      animationSpeedStyle: Y,
      scrollDirectionClasses: q,
      gradientStyle: p,
      templateSlideClasses: B,
    };
  },
  Ze = () => ($_$() && se == null ? void 0 : se(Ne)),
  Ye = () => ({
    hydrate: () => {
      $_$();
      var u, a, m, _;
      return (
        Ze() &&
        ((_ =
          (m =
            (a = (u = xe()) == null ? void 0 : u.provides) == null
              ? void 0
              : a.onVnodeMounted) != null
            ? m
            : se("onVnodeMounted")) == null
          ? void 0
          : _())
      );
    },
  }),
  lt = () => {
    $_$();
    const { hydrate: e } = Ye();
    $e(e);
  },
  qe = ["data-area"],
  Je = 3,
  Qe = ge({
    __name: "AnalyticsWidgetAreaLayer",
    props: {
      lengthArea: { default: oe.LENGTH_9 },
      orientationArea: { default: ie.VERTICAL },
    },
    setup(e) {
      $_$();
      const u = e,
        a = o(() =>
          u.lengthArea === oe.LENGTH_6 && u.orientationArea === ie.VERTICAL
            ? re.filter((_, c) => $_$() && (c + 1) % t(Je) !== 0)
            : u.lengthArea === oe.LENGTH_6 &&
              u.orientationArea === ie.HORIZONTAL
            ? re.slice(0, 6)
            : re
        ),
        m = o(() => ({
          [`analytics-widget-area-layer--length-area-${u.lengthArea}`]:
            !!u.lengthArea,
          [`analytics-widget-area-layer--orientation-area-${u.orientationArea}`]:
            !!u.orientationArea,
        }));
      return (_, c) =>
        $_$() &&
        (H(),
        G(
          "div",
          { class: he([t(m), "analytics-widget-area-layer"]) },
          [
            (H(!0),
            G(
              ce,
              null,
              ve(
                t(a),
                (h, s) =>
                  $_$() &&
                  (H(),
                  G(
                    "div",
                    {
                      key: `analytics-widget-area-layer-${s}`,
                      "data-area": h,
                      class: "analytics-widget-area-layer__item",
                    },
                    null,
                    8,
                    qe
                  ))
              ),
              128
            )),
          ],
          2
        ));
    },
  }),
  rt = fe(Qe, [["__scopeId", "data-v-9b2ad44f"]]),
  Xe = ["srcset", "media"],
  et = ["srcset", "media"],
  tt = ["srcset"],
  nt = ["src", "srcset", "alt", "loading", "width", "height"],
  ot = ge({
    __name: "TemplatePicture",
    props: {
      breakpoints: { default: void 0 },
      defaultImage: {},
      alt: { default: "" },
      loading: {},
      width: {},
      height: {},
      objectPosition: { default: le.RIGHT_CENTER },
      isStretchImage: { type: Boolean, default: !1 },
      isAbsoluteImage: { type: Boolean, default: !0 },
      isVerticalImage: { type: Boolean, default: !1 },
    },
    emits: ["load"],
    setup(e, { emit: u }) {
      $_$();
      const a = e,
        m = o(() => ({
          "template-picture--is-stretch-image": a.isStretchImage,
          "template-picture--is-absolute-image": a.isAbsoluteImage,
          "template-picture--is-vertical-image": a.isVerticalImage,
          [`template-picture--object-position-${a.objectPosition}`]:
            !!a.objectPosition,
        })),
        _ = o(() =>
          a.breakpoints
            ? Object.entries(a.breakpoints).sort(
                (i, A) => Number(i[0]) - Number(A[0])
              )
            : []
        ),
        c = _e(!!t(_).length),
        h = (i) => (i ? `(max-width: ${i[0]}px)` : void 0),
        s = (i) => i[1].extensions,
        L = (i) => /^(https?:)?\/\//i.test(i),
        S = (i) => `/${i}`,
        w = _e(t(_).length - 1),
        C = Ge(),
        R = (i) => (L(i) ? i : C(S(i))),
        k = (i) =>
          i[T.DPR_2]
            ? `${R(i[T.DPR_1])} 1x, ${R(i[T.DPR_2])} 2x`
            : R(i[T.DPR_1]),
        O = o(() =>
          a.defaultImage.extensions.fallback[T.DPR_2]
            ? k(a.defaultImage.extensions.fallback)
            : void 0
        ),
        v = (i) => !!i && !!(i[T.DPR_1] || i[T.DPR_2]),
        D = u,
        N = (i) => {
          D("load", i);
        };
      return (i, A) =>
        $_$() &&
        (H(),
        G(
          "picture",
          { class: he([t(m), "template-picture"]) },
          [
            t(c)
              ? (H(!0),
                G(
                  ce,
                  { key: 0 },
                  ve(
                    t(_),
                    (E, $) =>
                      $_$() &&
                      (H(),
                      G(
                        ce,
                        { key: `template-picture-${$}` },
                        [
                          v(s(E).webp)
                            ? (H(),
                              G(
                                "source",
                                {
                                  key: 0,
                                  srcset: k(s(E).webp),
                                  media: h(t(w) !== $ ? E : null),
                                  type: "image/webp",
                                },
                                null,
                                8,
                                Xe
                              ))
                            : te("", !0),
                          v(s(E).fallback)
                            ? (H(),
                              G(
                                "source",
                                {
                                  key: 1,
                                  srcset: k(s(E).fallback),
                                  media: h(t(w) !== $ ? E : null),
                                },
                                null,
                                8,
                                et
                              ))
                            : te("", !0),
                        ],
                        64
                      ))
                  ),
                  128
                ))
              : te("", !0),
            v(i.defaultImage.extensions.webp)
              ? (H(),
                G(
                  "source",
                  {
                    key: 1,
                    srcset: k(i.defaultImage.extensions.webp),
                    type: "image/webp",
                  },
                  null,
                  8,
                  tt
                ))
              : te("", !0),
            He(
              "img",
              {
                onLoad: N,
                src: R(i.defaultImage.extensions.fallback[t(T).DPR_1]),
                srcset: t(O),
                alt: i.alt,
                loading: i.loading,
                width: i.width,
                height: i.height,
                class: "template-picture__img",
              },
              null,
              40,
              nt
            ),
          ],
          2
        ));
    },
  }),
  ut = fe(ot, [["__scopeId", "data-v-849dc58f"]]);
export {
  rt as AnalyticsWidgetAreaLayer,
  Fe as ElementTag,
  ae as ImageLoading,
  oe as LengthArea,
  le as ObjectPosition,
  ie as OrientationArea,
  ut as TemplatePicture,
  We as checkIsLinkForeign,
  je as useBaseTemplateSlide,
  lt as useHydrate,
  st as useLoopTemplate,
};
