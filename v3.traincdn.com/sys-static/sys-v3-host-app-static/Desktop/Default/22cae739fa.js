import $_$ from "./$_$.js";
$_$();
import {
  appendScript as E,
  index_getConfig as U,
  runtimeCore_esmBundler_defineComponent as A,
  index_useMediaUrl as v,
  runtimeCore_esmBundler_computed as m,
  MEDIA_EXTENSIONS as z,
  runtimeCore_esmBundler_onMounted as $,
  runtimeCore_esmBundler_createElementBlock as S,
  runtimeCore_esmBundler_openBlock as B,
  reactivity_esmBundler_unref as a,
  runtimeCore_esmBundler_createElementVNode as k,
  shared_esmBundler_normalizeClass as O,
  useGlobalStore as x,
  useRouterMethodsWithLang as R,
  officeRouteName_OfficeRouteName as V,
  apiMethodFactory as G,
  browser_genLngParam as W,
  browser_genRefParam as j,
  LanguageCode as H,
  index_getConfigs as T,
  index_useLogger as K,
  index_useHttpModule as X,
  reactivity_esmBundler_ref as w,
  execAsync as F,
  index_loadMediaResources as q,
  runtimeCore_esmBundler_resolveComponent as J,
  runtimeCore_esmBundler_createBlock as Q,
  runtimeCore_esmBundler_createCommentVNode as Y,
  WeightType as Z,
  size_constants_sizeType as ee,
  runtimeCore_esmBundler_withCtx as D,
  runtimeCore_esmBundler_createTextVNode as te,
  shared_esmBundler_toDisplayString as oe,
  runtimeCore_esmBundler_Fragment as se,
  runtimeCore_esmBundler_renderList as ne,
  runtimeCore_esmBundler_createVNode as re,
  nuxtLink_default as ae,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as N, paymentsGeo as ce } from "./entry-85993dc44c.js";
import { withAsyncContext as me } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
const ie = ({ dmcaIconToken: t }) => {
    const e = "https://images.dmca.com/Badges/DMCABadgeHelper.min.js",
      o = `//www.dmca.com/Protection/Status.aspx?ID=${t}`;
    return {
      addDMCAScripts: () => {
        $_$();
        E(e);
      },
      dmcaLink: o,
    };
  },
  le = () => {
    $_$();
    var t, e;
    const o = (t = U(-2e3)) != null ? t : [],
      { validatorId: n } =
        (e = o.find(({ validatorType: l }) => l === "DMCA")) != null ? e : {},
      i = !!n,
      _ = `https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=${n}`;
    return { hasDMCA: i, dmcaImageSrc: _, validatorId: n };
  },
  _e = ["href"],
  ue = ["srcset"],
  de = ["src"],
  b = "DMCA.com Protection Status",
  pe = A({
    __name: "FooterDMCA",
    props: { dmcaIconToken: {}, size: {} },
    setup(t) {
      $_$();
      const e = t,
        o = v(),
        { dmcaImageSrc: n, validatorId: i } = le(),
        _ = e.dmcaIconToken || i,
        l = m(() =>
          $_$() && e.dmcaIconToken
            ? {
                default: o("responsible_game_logos_dmca_protected"),
                webp: o("responsible_game_logos_dmca_protected", z.WEBP),
              }
            : { default: n, webp: n }
        ),
        { addDMCAScripts: p, dmcaLink: g } = ie({ dmcaIconToken: _ });
      $(p);
      const u = m(() => ({ [`footer-dmca__img--size-${e.size}`]: !!e.size }));
      return (y, f) =>
        $_$() &&
        (B(),
        S(
          "a",
          { href: a(g), title: b, target: "_blank", class: "footer-dmca" },
          [
            k("picture", null, [
              k(
                "source",
                { srcset: a(l).webp, type: "image/webp" },
                null,
                8,
                ue
              ),
              k(
                "img",
                {
                  src: a(l).default,
                  alt: b,
                  class: O(["footer-dmca__img", a(u)]),
                },
                null,
                10,
                de
              ),
            ]),
          ],
          8,
          _e
        ));
    },
  }),
  we = N(pe, [["__scopeId", "data-v-0fce6a66"]]),
  ge = () => {
    $_$();
    const t = x(),
      e = m(() => t.getLanguage),
      { getLinkWithLang: o } = R(e);
    return {
      paymentLink: m(
        () => $_$() && o({ name: t.isUserAuth ? V.RECHARGE : "registration" })
      ),
    };
  },
  ye = G({
    url: "/paysystems/information/systems",
    expectedParams: {
      ...j({ apiKey: "ref_id" }),
      paymentsGeo: ce,
      ...W({ apiKey: "lang", defaultValue: H.UNKNOWN }),
    },
  }),
  fe = (t) =>
    t ? Object.fromEntries(t.map(({ title: e, media_key: o }) => [e, o])) : {},
  Ce = ({ withdraws: t = [], deposits: e = [] }) => ({
    deposits: e,
    withdraws: t,
  }),
  he = () => {
    $_$();
    const [t, e = [], o, n, i] = T(124, 500, 128, -1e3, -1012),
      _ = K(),
      l = X(),
      p = x(),
      g = m(() => p.getLanguage),
      u = w(),
      y = m(() => {
        $_$();
        var s, c, h, d;
        return (d =
          (h = (s = a(u)) == null ? void 0 : s.deposits) != null
            ? h
            : (c = a(u)) == null
            ? void 0
            : c.withdraws) != null
          ? d
          : [];
      }),
      f = w(!1),
      P = fe(e),
      I = m(() => Object.entries(P).map(([s, c]) => ({ name: s, icon: c }))),
      r = m(() => ($_$() && o ? a(I) : a(y))),
      C = m(() => $_$() && !!a(r).length && t);
    return {
      getPayments: async (s = i.code) => {
        $_$();
        let c, h;
        if (!o)
          try {
            f.value = !0;
            const d =
              (([c, h] = F(
                () =>
                  $_$() &&
                  ye(l, {
                    params: { country: s.toUpperCase(), lng: a(g), ref: n },
                  }).execute()
              )),
              (c = await c),
              h(),
              c);
            d && (u.value = Ce(d));
          } catch (d) {
            _.error("getPaySystems error", d);
          } finally {
            f.value = !1;
          }
      },
      getCorrectImgPath: (s) => s.replace("paysytems", "paysystems"),
      payments: y,
      paymentsToShow: r,
      isPaymentsSliderVisible: C,
      isCmsPayments: o,
    };
  },
  Be = { class: "footer-payments-group" },
  ke = { class: "footer-payments-group__list" },
  Pe = ["src", "alt"],
  Se = A({
    __name: "FooterPaymentsGroup",
    props: {
      payments: { default: () => [] },
      isMediaUrl: { type: Boolean, default: !1 },
      showTitle: { type: Boolean, default: !1 },
    },
    async setup(t) {
      $_$();
      let e, o, n, i;
      const _ = t,
        [l, p] = T(1479, 128),
        g = v(),
        { paymentLink: u } = ge(),
        { getCorrectImgPath: y } = he(),
        f = (r) => (_.isMediaUrl ? g(r) : y(r)),
        P = (r) => {
          var C;
          return (C = r.info_link) != null ? C : l ? u : "";
        },
        I = (r) => (r.info_link ? "_blank" : "_self");
      return (
        p &&
          (([n, i] = me(() => $_$() && q([136]))),
          ([e, o] = F(() => n)),
          (e = await e),
          o(),
          i()),
        (r, C) => {
          $_$();
          const L = J("UiCaption"),
            M = ae;
          return (
            B(),
            S("div", Be, [
              r.showTitle
                ? (B(),
                  Q(
                    L,
                    {
                      key: 0,
                      tag: "h6",
                      uppercase: "",
                      size: a(ee).m,
                      weight: a(Z).BOLD,
                      class: "footer-payments-group__title",
                    },
                    {
                      default: D(
                        () => $_$() && [te(oe(r.$T("main_payment_methods")), 1)]
                      ),
                      _: 1,
                    },
                    8,
                    ["size", "weight"]
                  ))
                : Y("", !0),
              k("ul", ke, [
                (B(!0),
                S(
                  se,
                  null,
                  ne(
                    r.payments,
                    (s, c) =>
                      $_$() &&
                      (B(),
                      S(
                        "li",
                        {
                          key: `footer-payments-group-item-${c}`,
                          class: "footer-payments-group__item",
                        },
                        [
                          re(
                            M,
                            {
                              to: P(s),
                              title: s.name,
                              target: I(s),
                              class: "footer-payments-group__link",
                              custom: !P(s),
                            },
                            {
                              default: D(
                                () =>
                                  $_$() && [
                                    k(
                                      "img",
                                      {
                                        src: f(s.icon),
                                        alt: s.name,
                                        class: "footer-payments-group__logo",
                                      },
                                      null,
                                      8,
                                      Pe
                                    ),
                                  ]
                              ),
                              _: 2,
                            },
                            1032,
                            ["to", "title", "target", "custom"]
                          ),
                        ]
                      ))
                  ),
                  128
                )),
              ]),
            ])
          );
        }
      );
    },
  }),
  De = N(Se, [["__scopeId", "data-v-e8202706"]]);
export {
  we as FooterDMCA,
  De as FooterPaymentsGroup,
  le as useDMCAValidator,
  he as useFooterSliderPayments,
  ge as usePaymentLink,
};
