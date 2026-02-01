import $_$ from "./$_$.js";
$_$();
import {
  useGlobalStore as x,
  runtimeCore_esmBundler_computed as l,
  reactivity_esmBundler_unref as e,
  useRouterMethodsWithLang as D,
  runtimeCore_esmBundler_defineComponent as N,
  size_constants_sizeType as T,
  reactivity_esmBundler_toRef as z,
  index_getConfig as F,
  runtimeCore_esmBundler_resolveDirective as H,
  runtimeCore_esmBundler_createElementBlock as f,
  runtimeCore_esmBundler_openBlock as C,
  shared_esmBundler_normalizeClass as k,
  runtimeCore_esmBundler_createVNode as W,
  runtimeCore_esmBundler_createCommentVNode as b,
  nuxtLink_default as M,
  runtimeCore_esmBundler_withCtx as G,
  runtimeCore_esmBundler_createElementVNode as B,
  runtimeCore_esmBundler_withDirectives as V,
  index_useHttpModule as U,
  index_useLogger as $,
  reactivity_esmBundler_ref as E,
  execAsync as J,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useHostAppAnalytics as O,
  useDashboardSingleSportLink as R,
  _export_sfc as j,
  groupBy as K,
} from "./entry-85993dc44c.js";
const Y = (n) => {
    $_$();
    const o = x(),
      s = l(() => $_$() && e(n).logotypeWebp),
      r = l(() => $_$() && e(n).logotypeImg),
      a = l(() => $_$() && e(n).logotypeSvg),
      d = l(() => $_$() && e(n).logoTypeId),
      t = l(() => $_$() && e(n).link),
      i = l(() => $_$() && e(n).title),
      u = l(() => o.getLanguage),
      { getLinkWithLang: g } = D(u),
      p = l(() => g(t)),
      _ = l(() => $_$() && e(d) === 2),
      v = l(() =>
        $_$() && e(_) ? "header-event-logo__flag" : "header-event-logo__img"
      );
    return {
      link: p,
      logotypeWebp: s,
      logotypeImg: r,
      logotypeSvg: a,
      title: i,
      headerEventLogoImgCurrentClass: v,
      isLogoTypeFlag: _,
    };
  },
  q = ["onClick"],
  P = ["srcset"],
  Q = ["srcset"],
  X = ["aria-label", "src", "alt"],
  Z = { key: 0, class: "header-event-logo__divider" },
  ee = N({
    __name: "HeaderEventLogo",
    props: {
      logo: {},
      divider: { type: Boolean, default: !1 },
      hasAdditionalGutter: { type: Boolean, default: !1 },
      singleFlag: { type: Boolean, default: !1 },
      size: { default: T.m },
      counter: { default: 1 },
    },
    setup(n) {
      $_$();
      const o = n,
        s = O(),
        r = z(o, "logo"),
        a = l(() => ({
          [`header-event-logo--size-${o.size}`]: o.size,
          "header-event-logo--additional-gutter":
            o.hasAdditionalGutter && !o.singleFlag,
          "header-event-logo--single-flag": o.singleFlag,
        })),
        {
          link: d,
          logotypeWebp: t,
          logotypeImg: i,
          logotypeSvg: u,
          title: g,
          headerEventLogoImgCurrentClass: p,
          isLogoTypeFlag: _,
        } = Y(r),
        v = l(() => $_$() && e(_) && o.divider),
        m = F(2123),
        h = l(
          () =>
            $_$() && { [`header-event-logo__img--${o.counter}`]: !e(_) && m }
        ),
        { setDashboardSportFilter: y } = R(),
        L = (c) => {
          $_$();
          y(c), s.modules.header.trackHeaderEventLogoClick(e(r).link);
        };
      return (c, S) => {
        $_$();
        const I = M,
          A = H("tooltip");
        return (
          C(),
          f(
            "div",
            { class: k(["header-event-logo", e(a)]) },
            [
              W(
                I,
                { to: e(d) },
                {
                  default: G(
                    ({ href: w }) =>
                      $_$() && [
                        B(
                          "picture",
                          { onClick: (se) => L(w) },
                          [
                            e(u)
                              ? (C(),
                                f(
                                  "source",
                                  {
                                    key: 0,
                                    srcset: e(u),
                                    type: "image/svg+xml",
                                  },
                                  null,
                                  8,
                                  P
                                ))
                              : b("", !0),
                            B(
                              "source",
                              { srcset: e(t), type: "image/webp" },
                              null,
                              8,
                              Q
                            ),
                            V(
                              B(
                                "img",
                                {
                                  "aria-label": e(g),
                                  src: e(i),
                                  alt: e(g),
                                  class: k([e(p), e(h)]),
                                },
                                null,
                                10,
                                X
                              ),
                              [[A, e(g)]]
                            ),
                          ],
                          8,
                          q
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["to"]
              ),
              e(v) ? (C(), f("div", Z)) : b("", !0),
            ],
            2
          )
        );
      };
    },
  }),
  ie = j(ee, [["__scopeId", "data-v-b55acf9c"]]),
  oe = ({ logosList: n = [], isSmallLogoTypes: o }) =>
    n.reduce((s, { link: r, title: a, logoTypeId: d, images: t }) => {
      const i = o
          ? t == null
            ? void 0
            : t.img24x24
          : t == null
          ? void 0
          : t.img32x32,
        u = o
          ? t == null
            ? void 0
            : t.webp24x24
          : t == null
          ? void 0
          : t.webp32x32,
        g = t == null ? void 0 : t.svg;
      return (
        s.push({
          link: r,
          title: a,
          logoTypeId: d,
          logotypeImg: i,
          logotypeWebp: u,
          logotypeSvg: g,
        }),
        s
      );
    }, []),
  te = {
    async set(n, o, s) {
      localStorage.setItem(n, JSON.stringify({ data: o, expire: s }));
    },
    async get(n) {
      const o = localStorage.getItem(n);
      if (!o) return null;
      const { data: s, expire: r } = JSON.parse(o),
        a = Date.now();
      return r && r > a
        ? s
        : r && r <= a
        ? (localStorage.removeItem(n), null)
        : s;
    },
  },
  ne = "SUITABLE_DATA",
  le = 7 * 6e4,
  ce = (n = !1) => {
    $_$();
    const o = U(),
      s = $(),
      r = x(),
      a = l(() => r.getLanguage),
      d = E(),
      t = E([]),
      i = E([]),
      u = l(() => $_$() && [...e(i), ...e(t)]);
    return {
      eventList: t,
      flagList: i,
      allEventList: u,
      loadLogotypes: async () => {
        $_$();
        var p, _, v;
        let m, h;
        try {
          const y =
              (([m, h] = J(
                () =>
                  $_$() &&
                  o("/bff-api/event-logo/v2/suitable.json", {
                    params: { lang: e(a) },
                    cacheService: te,
                    cache: { key: ne, expire: Date.now() + le },
                  }).execute()
              )),
              (m = await m),
              h(),
              m),
            L = oe({ logosList: y, isSmallLogoTypes: n }),
            c = K(L, ({ logoTypeId: S }) => S);
          (t.value = (p = c == null ? void 0 : c[1]) != null ? p : []),
            (i.value = (_ = c == null ? void 0 : c[2]) != null ? _ : []),
            (d.value = (v = c == null ? void 0 : c[3]) == null ? void 0 : v[0]);
        } catch (y) {
          s.error("Loading logos failed", y);
        }
      },
      markLogo: d,
    };
  };
export { ie as HeaderEventLogo, ce as useEventsLogo };
