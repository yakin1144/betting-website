import $_$ from "./$_$.js";
$_$();
import {
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_defineComponent as de,
  execAsync as Q,
  reactivity_esmBundler_ref as re,
  runtimeCore_esmBundler_computed as X,
  runtimeCore_esmBundler_watch as xe,
  throttle as Xe,
  runtimeCore_esmBundler_onMounted as ue,
  runtimeCore_esmBundler_onUpdated as Ne,
  runtimeCore_esmBundler_onBeforeUnmount as Oe,
  runtimeCore_esmBundler_createElementBlock as x,
  runtimeCore_esmBundler_openBlock as s,
  shared_esmBundler_normalizeClass as V,
  runtimeCore_esmBundler_renderSlot as De,
  runtimeCore_esmBundler_getCurrentInstance as Re,
  index_getConfigs as Ue,
  index_getConfig as je,
  index_loadMediaResources as Ve,
  runtimeCore_esmBundler_createVNode as M,
  clientOnly_default as We,
  runtimeCore_esmBundler_withCtx as $,
  runtimeCore_esmBundler_createBlock as i,
  runtimeCore_esmBundler_createCommentVNode as r,
  runtimeCore_esmBundler_createElementVNode as z,
  MEDIA_EXTENSIONS as J,
  runtimeCore_esmBundler_resolveDynamicComponent as He,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { withAsyncContext as Y } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  useFooterMixedSocialLinks as me,
  useLicenses as _e,
  loadFooterGridSizeConfig as qe,
  useWindowResize as Je,
  _export_sfc as fe,
  loadFooterDesktopConfig as Ke,
  useSupportPhones as Qe,
  useLayoutThemes as Ye,
  useSupportEmailsV2 as Ze,
  defineMultiImplementedComponent as eo,
  Platforms as oo,
} from "./entry-85993dc44c.js";
import { _sfc_main as to } from "./9c7d87dd6f.js";
import { FooterCookie as so } from "./63a1cba8b1.js";
import {
  useCuracao as ro,
  useGamingCuracao as no,
  useFooterPartners as io,
  parseFooterLeagues as ao,
  FooterSlider as K,
  FooterPartnersLink as lo,
  FooterCuracao as co,
  FooterGamingCuracao as uo,
  FooterCookieRestriction as mo,
  FooterSpot as _o,
  FooterEmailSupport as fo,
  FooterLinkStopInTime as po,
  FooterPaymentsSlider as go,
  FooterTimer as ho,
} from "./4e97b6a6b9.js";
import { FooterCopyright as Co } from "./6a6c8c54d6.js";
import {
  useFooterSliderPayments as yo,
  FooterDMCA as So,
  FooterPaymentsGroup as ko,
} from "./22cae739fa.js";
/* empty css          */ import { FooterLicenses as ne } from "./ebe0bfeb21.js";
import {
  useCasinoMinAge as wo,
  FooterNav as Fo,
  FooterMinAge as ie,
} from "./91350561bf.js";
import {
  useFooter as Eo,
  FooterResponsibleGambling as ae,
} from "./feb5edaf5b.js";
import { _sfc_main as Lo } from "./b1416394cd.js";
import { FooterSupport as vo } from "./e8a920d0eb.js";
import "./37be8e46f5.js";
import "./aaa32f7483.js";
import "./1c8c17a20a.js";
import "../../../shared-assets/__shared_accept_language_parser_LEQ4UAP5.js";
/* empty css          */ var N = ((_) => (
  (_[(_.XXXL = 12)] = "XXXL"),
  (_[(_.XXL = 10)] = "XXL"),
  (_[(_.XL = 8)] = "XL"),
  _
))(N || {});
const bo = 2,
  le = 2,
  Bo = 1.5,
  Ao = 4,
  ce = { media: 1, text: 2 },
  Mo = ({ footerGridComponents: _, gridSize: k, gridSizesConfig: a }) => {
    const v = (() => {
      const { socialLinks: y, hasSocialLinks: B } = me(),
        { licenses: G } = _e(),
        f = () => {
          $_$();
          if (G.hasFew) {
            let t = bo;
            for (const u of Object.keys(ce)) t += ce[u] * G[u].length;
            a.footerLicensesFew.size = t;
          }
          if (e(B)) {
            const t = Math.ceil(e(y).length / Ao - 1),
              u = Math.max(0, t);
            (a.footerActions.size = Math.max(a.footerActions.size, le + u)),
              a.footerActions.breakpoints &&
                Object.entries(a.footerActions.breakpoints).forEach(
                  ([p, w]) => {
                    const { size: m } = w;
                    a.footerActions.breakpoints[p].size = Math.max(
                      m || a.footerActions.size,
                      le + u
                    );
                  }
                );
          }
        },
        F = () => {
          const t = { XXXL: {}, XXL: {}, XL: {} };
          return (
            Object.keys(a).forEach((u) => {
              const { breakpoints: p, ...w } = a[u];
              Object.keys(t).forEach((m) => {
                let o = { ...w };
                p && p[m] && (o = { ...o, ...p[m] }), (t[m][u] = o);
              });
            }),
            t
          );
        };
      return f(), F();
    })();
    return {
      updateFooterGrid: () => {
        $_$();
        const y = e(_),
          B = N[e(k)],
          G = v[B],
          f = e(k),
          F = Math.floor(f / Bo),
          t = [],
          u = () => {
            const o = { list: [], sum: 0 };
            return t.push(o), t.length - 1;
          },
          p = (o) => {
            const { list: l } = o;
            o.sum = l.reduce((n, { size: A }) => ((n += A), n), 0);
          },
          w = ({ list: o, sum: l }) => {
            let n = f - l;
            (() => {
              if (n === 0) return o;
              if (o.length === 1) return (o[0].size += n), (n = 0), o;
              const g = (E) => {
                  n !== 0 &&
                    E.forEach((d, S) => {
                      const D = Math.floor(n / (E.length - S));
                      d.max = d.max ? Math.max(d.max, d.size) : F;
                      const R = Math.min(D, d.max - d.size);
                      (d.size += R), (n -= R);
                    });
                },
                { priorityElements: c, commonElements: P } = o.reduce(
                  (E, d) => (
                    d.priority !== void 0
                      ? E.priorityElements.push(d)
                      : E.commonElements.push(d),
                    E
                  ),
                  { priorityElements: [], commonElements: [] }
                );
              g(c), g(P);
              const I = c.concat(P);
              for (; n > 0; ) {
                const E = I.reduce(
                  (d, S) => (
                    (S.strictExpand = S.strictExpand || !1),
                    (S.max = S.max || F),
                    !S.strictExpand && S.size + 1 <= S.max && S.size < d.size
                      ? S
                      : d
                  ),
                  I[0]
                );
                E.size++, n--;
              }
              return I;
            })().forEach(({ block: g, size: c }) => {
              g.dataset.columns = `${c}`;
            });
          };
        y.forEach((o) => {
          var l, n;
          o.classList.add("footer-grid__element");
          const A = (l = o.dataset.grid) != null ? l : "",
            g = { ...((n = G[A]) != null ? n : G.footerDefault), block: o };
          let c = t.length ? t.length - 1 : u();
          g.size > f && (g.size = f),
            t[c].sum + g.size > f && (c = u()),
            t[c].list.push(g),
            p(t[c]);
        }),
          (() => {
            t.forEach((o, l) => {
              if (l === 0) return;
              const { sum: n } = o,
                A = f - n;
              if (A) {
                const g = t[l - 1],
                  c = g.list,
                  P = c[c.length - 1].size <= A,
                  I = g.sum - c[c.length - 1].size - n <= 3;
                P &&
                  I &&
                  o.list.unshift(
                    t[l - 1].list.splice(t[l - 1].list.length - 1, 1)[0]
                  );
              }
            });
          })(),
          t.forEach(p),
          t.forEach(w);
      },
    };
  },
  zo = (_) =>
    Array.from(_).reduce((k, a) => (Math.imul(31, k) + a.charCodeAt(0)) | 0, 0),
  Go = async () => (await qe())(),
  Io = de({
    __name: "FooterGrid",
    async setup(_) {
      $_$();
      let k, a, C, v;
      const b =
          (([C, v] = Y(() => Go())),
          (C = (([k, a] = Q(() => C)), (k = await k), a(), k)),
          v(),
          C),
        y = re(),
        B = re([]),
        G = X(
          () =>
            $_$() &&
            zo(
              e(B).reduce((m, o) => {
                var l;
                return `${m}_${(l = o.dataset.grid) != null ? l : ""}`;
              }, "")
            )
        ),
        { windowWidth: f } = Je(),
        F = X(() => (f.value < 1280 ? N.XL : f.value < 1600 ? N.XXL : N.XXXL)),
        t = X(() => $_$() && { [`footer-grid--size-${e(F)}`]: e(F) }),
        { updateFooterGrid: u } = Mo({
          footerGridComponents: B,
          gridSize: F,
          gridSizesConfig: b,
        }),
        p = () => {
          var m;
          B.value = Array.from(
            ((m = y.value) == null ? void 0 : m.children) || []
          );
        };
      xe([f, G], Xe(u, 100));
      let w;
      return (
        ue(() => {
          $_$();
          e(y) &&
            (p(),
            (w = new MutationObserver(p)),
            w.observe(e(y), { childList: !0 }));
        }),
        Ne(p),
        Oe(() => {
          w == null || w.disconnect();
        }),
        (m, o) =>
          $_$() &&
          (s(),
          x(
            "div",
            { ref_key: "footerGrid", ref: y, class: V(["footer-grid", e(t)]) },
            [De(m.$slots, "default", { ref: "slotTest" }, void 0, !0)],
            2
          ))
      );
    },
  }),
  Po = fe(Io, [["__scopeId", "data-v-4ebde20c"]]),
  To = { class: "footer__league" },
  $o = ["srcset"],
  xo = ["srcset", "src", "alt"],
  Xo = ["srcset"],
  No = ["src", "alt"],
  Oo = { key: 4, "data-grid": "footerLegalities", class: "footer-legalities" },
  Do = { key: 1, class: "footer-legalities__dmca" },
  Ro = { "data-grid": "footerLegal", class: "footer__tile footer__legal" },
  Uo = { "data-grid": "footerActions", class: "footer__actions" },
  jo = { class: "footer__additional" },
  Vo = { key: 1, class: "footer__min-ages" },
  Wo = de({
    __name: "Footer",
    async setup(_) {
      $_$();
      var k, a;
      let C, v, b, y;
      const B = {
        defineEntityImplementation: () =>
          $_$() && { props: _, emit: Re().emit },
      };
      eo("FooterDesktop", {}, !0, [oo.Desktop]), B.defineEntityImplementation();
      const f = (([b, y] = Y(() => Ke())),
        (b = (([C, v] = Q(() => b)), (C = await C), v(), C)),
        y(),
        b)(),
        { licensesTheme: F, anjouanImgSize: t } = f.config,
        [
          u,
          p = [],
          w,
          m = [],
          o = "",
          l = "",
          n,
          A,
          O,
          g = "footer_partners_title",
          c,
          P,
          I,
          E,
          d,
          S,
          D,
          R,
        ] = Ue(
          130,
          132,
          279,
          133,
          399,
          502,
          378,
          379,
          368,
          1829,
          1845,
          1828,
          1846,
          1827,
          1843,
          1844,
          1039,
          2243
        ),
        pe = je(-1020),
        { responsibleGamblingLogos: W, isCyberPage: U } = Eo(),
        { hasSocialLinks: ge } = me(),
        {
          paymentsToShow: he,
          isPaymentsSliderVisible: Z,
          isCmsPayments: Ce,
          getPayments: ye,
        } = yo(),
        { hasCuracao: Se } = ro(),
        { hasGamingCuracao: ke } = no(),
        { hasCasinoMinAge: we } = wo(),
        { hasSupportPhones: Fe } = Qe(),
        { licenses: j } = _e(),
        { affiliateLinks: ee } = io(),
        { layoutThemes: T } = Ye(),
        { supportEmails: Ee } = Ze(pe, 1),
        H = (a = (k = Ee[0]) == null ? void 0 : k.value) != null ? a : "",
        Le = (H == null ? void 0 : H.length) > 0,
        q = !!W.length,
        ve = P && (q || !!o),
        be = q && !P,
        Be = n && A,
        Ae = X(() => $_$() && e(T).isFooterPartnersVisible && !!ee.length),
        oe = p.map((h) => h.award_name),
        te = !!oe.length,
        Me = ao(m),
        ze = Object.entries(Me).map(([h, se]) => ({ logo: h, alt: se })),
        Ge = X(
          () =>
            $_$() && {
              [`footer--theme-${e(T).footerComponent}`]: !!e(T).footerComponent,
              "footer--indent-consultant": e(Z),
            }
        ),
        Ie = { "footer__cookie-restriction--with-indents": I },
        Pe = {
          "footer__copyright--last": c,
          "footer__copyright--with-indents": I,
        },
        Te = w === 1 ? ko : go;
      return (
        te &&
          (([b, y] = Y(() => $_$() && Ve([296]))),
          ([C, v] = Q(() => b)),
          (C = await C),
          v(),
          y()),
        ue(() => {
          ye();
        }),
        (h, se) => {
          $_$();
          const $e = We;
          return (
            s(),
            x(
              "footer",
              { class: V([e(Ge), "footer"]) },
              [
                M($e, null, {
                  default: $(
                    () =>
                      $_$() && [
                        M(Po, null, {
                          default: $(
                            () =>
                              $_$() && [
                                M(
                                  Fo,
                                  {
                                    "data-grid": "footerNav",
                                    isNavGroupOnHoverDecent: e(d),
                                    isNavGroupColorDecent: e(S),
                                    class: "footer__tile",
                                  },
                                  null,
                                  8,
                                  [
                                    "isNavGroupOnHoverDecent",
                                    "isNavGroupColorDecent",
                                  ]
                                ),
                                e(Ae)
                                  ? (s(),
                                    i(
                                      K,
                                      {
                                        key: 0,
                                        title: h.$T(e(g)),
                                        slides: e(ee),
                                        isCyberPage: e(U),
                                        "data-grid": "footerPartners",
                                        class: "footer__tile",
                                      },
                                      {
                                        default: $(
                                          ({ item: L }) =>
                                            $_$() && [
                                              M(lo, { item: L }, null, 8, [
                                                "item",
                                              ]),
                                            ]
                                        ),
                                        _: 1,
                                      },
                                      8,
                                      ["title", "slides", "isCyberPage"]
                                    ))
                                  : r("", !0),
                                e(u)
                                  ? (s(),
                                    i(
                                      K,
                                      {
                                        key: 1,
                                        slides: e(ze),
                                        isCyberPage: e(U),
                                        "data-grid": "footerLeagues",
                                        class: "footer__tile",
                                      },
                                      {
                                        default: $(
                                          ({ item: L }) =>
                                            $_$() && [
                                              z("picture", To, [
                                                z(
                                                  "source",
                                                  {
                                                    srcset: `${h.$mediaUrl(
                                                      `${L.logo}_png`,
                                                      e(J).WEBP
                                                    )} 1x, ${h.$mediaUrl(
                                                      `${L.logo}_png_2x`,
                                                      e(J).WEBP
                                                    )} 2x`,
                                                    type: "image/webp",
                                                  },
                                                  null,
                                                  8,
                                                  $o
                                                ),
                                                z(
                                                  "img",
                                                  {
                                                    srcset: `${h.$mediaUrl(
                                                      `${L.logo}_png_2x`
                                                    )} 2x`,
                                                    src: h.$mediaUrl(
                                                      `${L.logo}_png`
                                                    ),
                                                    alt: h.$T(L.alt),
                                                  },
                                                  null,
                                                  8,
                                                  xo
                                                ),
                                              ]),
                                            ]
                                        ),
                                        _: 1,
                                      },
                                      8,
                                      ["slides", "isCyberPage"]
                                    ))
                                  : r("", !0),
                                e(te)
                                  ? (s(),
                                    i(
                                      K,
                                      {
                                        key: 2,
                                        title: h.$T("footer_awards"),
                                        slides: e(oe),
                                        isCyberPage: e(U),
                                        "data-grid": "footerAwards",
                                        class: "footer__tile",
                                      },
                                      {
                                        default: $(
                                          ({ item: L }) =>
                                            $_$() && [
                                              z("picture", null, [
                                                z(
                                                  "source",
                                                  {
                                                    srcset: h.$mediaUrl(
                                                      `footer_awards_${L}`,
                                                      e(J).WEBP
                                                    ),
                                                    type: "image/webp",
                                                  },
                                                  null,
                                                  8,
                                                  Xo
                                                ),
                                                z(
                                                  "img",
                                                  {
                                                    src: h.$mediaUrl(
                                                      `footer_awards_${L}`
                                                    ),
                                                    alt: h.$T("footer_awards"),
                                                  },
                                                  null,
                                                  8,
                                                  No
                                                ),
                                              ]),
                                            ]
                                        ),
                                        _: 1,
                                      },
                                      8,
                                      ["title", "slides", "isCyberPage"]
                                    ))
                                  : r("", !0),
                                e(j).hasMany
                                  ? (s(),
                                    i(
                                      ne,
                                      {
                                        key: 3,
                                        licenses: e(j).tiles,
                                        theme: e(F),
                                        "data-grid": "footerLicensesMany",
                                      },
                                      null,
                                      8,
                                      ["licenses", "theme"]
                                    ))
                                  : r("", !0),
                                e(ve)
                                  ? (s(),
                                    x("div", Oo, [
                                      e(q)
                                        ? (s(),
                                          i(
                                            ae,
                                            {
                                              key: 0,
                                              logos: e(W),
                                              class:
                                                "footer-legalities__responsible-gambling",
                                            },
                                            null,
                                            8,
                                            ["logos"]
                                          ))
                                        : r("", !0),
                                      e(o)
                                        ? (s(),
                                          x("div", Do, [
                                            M(
                                              So,
                                              { dmcaIconToken: e(o) },
                                              null,
                                              8,
                                              ["dmcaIconToken"]
                                            ),
                                          ]))
                                        : r("", !0),
                                    ]))
                                  : r("", !0),
                                e(be)
                                  ? (s(),
                                    i(
                                      ae,
                                      {
                                        key: 5,
                                        logos: e(W),
                                        isCyberPage: e(U),
                                        "data-grid":
                                          "footerResponsibleGambling",
                                        class: "footer__responsible-gambling",
                                      },
                                      null,
                                      8,
                                      ["logos", "isCyberPage"]
                                    ))
                                  : r("", !0),
                                e(j).hasFew
                                  ? (s(),
                                    i(
                                      ne,
                                      {
                                        key: 6,
                                        licenses: e(j).tiles,
                                        theme: e(F),
                                        anjouanImgSize: e(t),
                                        "data-grid": "footerLicensesFew",
                                      },
                                      null,
                                      8,
                                      ["licenses", "theme", "anjouanImgSize"]
                                    ))
                                  : r("", !0),
                                e(Se)
                                  ? (s(),
                                    i(co, {
                                      key: 7,
                                      "data-grid": "footerCuracao",
                                      class: "footer__tile",
                                    }))
                                  : r("", !0),
                                e(ke)
                                  ? (s(),
                                    i(uo, {
                                      key: 8,
                                      "data-grid": "footerGamingCuracao",
                                      class: "footer__tile",
                                    }))
                                  : r("", !0),
                                z("div", Ro, [
                                  e(D)
                                    ? (s(), i(mo, { key: 0, class: V(Ie) }))
                                    : r("", !0),
                                  M(Co, {
                                    class: V([Pe, "footer__copyright"]),
                                  }),
                                  M(so),
                                ]),
                                e(Fe)
                                  ? (s(),
                                    i(vo, {
                                      key: 9,
                                      "data-grid": "footerSupport",
                                      class: "footer__tile",
                                    }))
                                  : r("", !0),
                                e(R)
                                  ? (s(),
                                    i(_o, {
                                      key: 10,
                                      "data-grid": "footerSpot",
                                      class: "footer__tile",
                                    }))
                                  : r("", !0),
                                Le
                                  ? (s(),
                                    i(
                                      fo,
                                      {
                                        key: 11,
                                        email: e(H),
                                        "data-grid": "footerEmailSupport",
                                        class: "footer__tile",
                                      },
                                      null,
                                      8,
                                      ["email"]
                                    ))
                                  : r("", !0),
                                e(l)
                                  ? (s(),
                                    i(
                                      po,
                                      {
                                        key: 12,
                                        link: e(l),
                                        "data-grid": "footerLinkStopInTime",
                                        class: "footer__tile",
                                      },
                                      null,
                                      8,
                                      ["link"]
                                    ))
                                  : r("", !0),
                                z("div", Uo, [
                                  z("div", jo, [
                                    e(ge)
                                      ? (s(),
                                        i(
                                          Lo,
                                          {
                                            key: 0,
                                            theme: e(T).footerSocial,
                                            class:
                                              "footer__tile footer__socials",
                                          },
                                          null,
                                          8,
                                          ["theme"]
                                        ))
                                      : r("", !0),
                                    e(O)
                                      ? (s(),
                                        x("div", Vo, [
                                          M(
                                            ie,
                                            {
                                              hasIco: e(E),
                                              class:
                                                "footer__tile footer__min-age",
                                            },
                                            null,
                                            8,
                                            ["hasIco"]
                                          ),
                                          e(we)
                                            ? (s(),
                                              i(
                                                ie,
                                                {
                                                  key: 0,
                                                  hasIco: e(E),
                                                  isCasinoMinAge: "",
                                                  class:
                                                    "footer__tile footer__min-age",
                                                },
                                                null,
                                                8,
                                                ["hasIco"]
                                              ))
                                            : r("", !0),
                                        ]))
                                      : r("", !0),
                                  ]),
                                  M(
                                    to,
                                    {
                                      theme: e(T).footerAction,
                                      class: "footer__action",
                                    },
                                    null,
                                    8,
                                    ["theme"]
                                  ),
                                ]),
                                e(Z)
                                  ? (s(),
                                    i(
                                      He(e(Te)),
                                      {
                                        key: 13,
                                        payments: e(he),
                                        isMediaUrl: e(Ce),
                                        "data-grid": "footerPaymentsSlider",
                                        class: "footer__tile",
                                      },
                                      null,
                                      8,
                                      ["payments", "isMediaUrl"]
                                    ))
                                  : r("", !0),
                                e(Be)
                                  ? (s(),
                                    i(ho, {
                                      key: 14,
                                      "data-grid": "footerTimer",
                                      class: "footer__timer footer__tile",
                                    }))
                                  : r("", !0),
                              ]
                          ),
                          _: 1,
                        }),
                      ]
                  ),
                  _: 1,
                }),
              ],
              2
            )
          );
        }
      );
    },
  }),
  mt = fe(Wo, [["__scopeId", "data-v-820de0ea"]]);
export { mt as default };
