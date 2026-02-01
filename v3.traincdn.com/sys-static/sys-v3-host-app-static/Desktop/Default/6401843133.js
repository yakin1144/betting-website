import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./5a4af09de3.js",
      "./entry-85993dc44c.js",
      "./c955f88782.css",
      "./11ddbeb33d.js",
      "./d1f43a9a3f.css",
      "./e008545bc6.css",
      "./98040dd2a0.js",
      "./7c99329783.js",
      "./3c75c51e0d.css",
      "./315194f4dd.css",
      "./5304df1d77.js",
      "./e610088ad0.css",
      "./ceb415ff7e.js",
      "./9c3e998947.css",
      "./bd590bc04f.js",
      "./176e145739.js",
      "./d9c20b1993.css",
      "./a59bb589bb.js",
      "./bcd6fb1c88.js",
      "./1649e8033c.js",
      "./8587dda9c5.js",
      "./1ba58be09f.js",
      "./967ad8dbb9.css",
      "./4461966886.js",
      "./1c8c17a20a.js",
      "./47bfb96ae5.css",
      "./e82a9da1a1.css",
      "./83428dd975.css",
      "./9e054ec028.css",
    ])
) => i.map((i) => d[i]);
import { withAsyncContext as Y } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as Z,
  execAsync as w,
  index_getConfig as ge,
  useGlobalStore as ae,
  runtimeCore_esmBundler_computed as v,
  useRouterMethodsWithLang as ne,
  runtimeCore_esmBundler_resolveComponent as ee,
  runtimeCore_esmBundler_resolveDirective as he,
  runtimeCore_esmBundler_createElementBlock as F,
  runtimeCore_esmBundler_openBlock as r,
  shared_esmBundler_normalizeClass as j,
  shared_esmBundler_normalizeStyle as re,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_createVNode as L,
  runtimeCore_esmBundler_createBlock as g,
  runtimeCore_esmBundler_createCommentVNode as R,
  runtimeCore_esmBundler_withDirectives as ve,
  clientOnly_default as be,
  runtimeCore_esmBundler_withCtx as M,
  nuxtLink_default as fe,
  iconName as oe,
  size_constants_sizeType as Be,
  runtimeCore_esmBundler_createTextVNode as ye,
  shared_esmBundler_toDisplayString as Ce,
  index_useDateTimeService as Le,
  index_useT as we,
  index_useHttpModule as He,
  index_getConfigs as q,
  reactivity_esmBundler_ref as J,
  runtimeCore_esmBundler_defineAsyncComponent as I,
  runtimeCore_esmBundler_onMounted as se,
  runtimeCore_esmBundler_Fragment as ie,
  runtimeCore_esmBundler_renderList as le,
  runtimeCore_esmBundler_resolveDynamicComponent as Ee,
  runtimeCore_esmBundler_mergeProps as ke,
  runtimeCore_esmBundler_getCurrentInstance as De,
  runtimeCore_esmBundler_createElementVNode as Te,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  loadHeaderDoubleRowNavbarConfig as Ne,
  useHeaderData as Ie,
  useUserControlRoutes as Pe,
  _export_sfc as Q,
  useHostAppAnalytics as Re,
  loadHeaderTopConfig as Se,
  __vitePreload as P,
  loadHeaderDesktopDoubleRowConfig as Ve,
  useLayoutThemes as Ae,
  setElementHeightGlobalCssVar as Ge,
  defineMultiImplementedComponent as Oe,
  Platforms as xe,
} from "./entry-85993dc44c.js";
import { useEventsLogo as ze, HeaderEventLogo as te } from "./176e145739.js";
import { _sfc_main as $e, HeaderLogo as Fe } from "./2f7edc691a.js";
import { _sfc_main as Ue, UserControlDashboard as Me } from "./a59bb589bb.js";
import {
  useHeaderNavigationGameLogo as X,
  HeaderNavigationGameLogo as We,
  useHeaderBanner as de,
} from "./ceb415ff7e.js";
import { useSocialLinks as Ke } from "./7c99329783.js";
import "./bcd6fb1c88.js";
import "./1649e8033c.js";
import "./8587dda9c5.js";
import "./1ba58be09f.js";
import "../../../shared-assets/Desktop/__shared_1c5f097ec1.js";
import "./4461966886.js";
import "./1c8c17a20a.js";
import "../../../shared-assets/__shared_accept_language_parser_LEQ4UAP5.js";
import "./11ddbeb33d.js";
const Ye = Z({
    __name: "HeaderDoubleRowNavbar",
    props: { showNavigationBanner: { type: Boolean, default: !0 } },
    async setup(H) {
      $_$();
      let a, s, n, i;
      const S = (([n, i] = Y(() => Ne())),
        (n = (([a, s] = w(() => n)), (a = await a), s(), a)),
        i(),
        n)(),
        {
          config: {
            hasBottomAngle: f,
            hasBottomGradient: u,
            showRulesLinkInHeaderBottom: l,
            showAppsLinkInHeaderBottom: B,
            hasBGHighlight: c,
            isCentered: E,
          },
          style: y,
        } = S,
        o = ge(1993),
        { isVisibleNotCompactNavigationGameLogo: d, gameBannerData: m } = X(),
        { isCompact: V } = Ie(),
        { mobileAppRoute: A } = Pe(),
        G = ae(),
        k = v(() => G.getLanguage),
        { useLangLocation: D } = ne(k),
        O = D("/information/rules"),
        x = {
          [`header-double-row-navbar--theme-${o}`]: !!o,
          "header-double-row-navbar--gradient": u,
          "header-double-row-navbar--angle": f,
          "header-double-row-navbar--centered": E,
        };
      return (_, p) => {
        $_$();
        const z = be,
          T = ee("UiIco"),
          $ = ee("UiCaption"),
          h = fe,
          C = he("tooltip");
        return (
          r(),
          F(
            "div",
            { style: re(e(y)), class: j(["header-double-row-navbar", x]) },
            [
              L(
                Ue,
                {
                  isCompact: e(V),
                  hasBGHighlight: e(c),
                  class: "header-double-row-navbar__nav",
                },
                null,
                8,
                ["isCompact", "hasBGHighlight"]
              ),
              _.showNavigationBanner
                ? (r(),
                  g(
                    z,
                    { key: 0 },
                    {
                      default: M(
                        () =>
                          $_$() && [
                            e(d)
                              ? (r(),
                                g(
                                  We,
                                  {
                                    key: 0,
                                    gameBannerData: e(m),
                                    class:
                                      "header-double-row-navbar__game-banner",
                                  },
                                  null,
                                  8,
                                  ["gameBannerData"]
                                ))
                              : R("", !0),
                          ]
                      ),
                      _: 1,
                    }
                  ))
                : R("", !0),
              e(B)
                ? (r(),
                  g(
                    h,
                    {
                      key: 1,
                      to: e(A),
                      class:
                        "header-double-row-navbar__link header-double-row-navbar-link",
                    },
                    {
                      default: M(
                        () =>
                          $_$() && [
                            L(T, { ico: e(oe).MOBILE_ARROW_DOWN }, null, 8, [
                              "ico",
                            ]),
                            L(
                              $,
                              {
                                size: e(Be).xs,
                                class: "header-double-row-navbar-link__text",
                              },
                              {
                                default: M(
                                  () =>
                                    $_$() && [
                                      ye(
                                        Ce(
                                          _.$T("main_download_app_page_mobile")
                                        ),
                                        1
                                      ),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["size"]
                            ),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ))
                : R("", !0),
              e(l)
                ? ve(
                    (r(),
                    g(
                      h,
                      {
                        key: 2,
                        to: e(O),
                        "aria-label": _.$T("header_rules"),
                        class:
                          "header-double-row-navbar__link header-double-row-navbar-link",
                      },
                      {
                        default: M(
                          () =>
                            $_$() && [
                              L(
                                T,
                                {
                                  ico: e(oe).BOOK_OPEN,
                                  class: "header-double-row-navbar-link__ico",
                                },
                                null,
                                8,
                                ["ico"]
                              ),
                            ]
                        ),
                        _: 1,
                      },
                      8,
                      ["to", "aria-label"]
                    )),
                    [[C, _.$T("header_rules")]]
                  )
                : R("", !0),
            ],
            4
          )
        );
      };
    },
  }),
  Ze = Q(Ye, [["__scopeId", "data-v-e68b607a"]]),
  je = () => {
    $_$();
    const H = Le(),
      a = we(),
      s = Re(),
      n = ae(),
      { useLangLocation: i } = ne(v(() => n.getLanguage)),
      b = He(),
      [S] = q(988),
      f = H.toUserTimeZone(Date.now()),
      u = 5,
      l = J(!1),
      B = (o) => i({ name: "bonus", params: { id: o } }),
      c = v(
        () =>
          $_$() &&
          [
            {
              route: B("for_their"),
              onClick: (o, d) => {
                s.modules.header.trackBonusEventsClick(
                  "activity_bonus_friday_topbutton"
                ),
                  o(d);
              },
              caption: a("header_friday_event"),
              isVisible: e(l),
            },
          ].filter(({ isVisible: o }) => o)
      );
    return {
      isShowEvents: v(() => $_$() && !!e(c).length),
      daysEventsButtons: c,
      loadFridayEvent: async () => {
        $_$();
        let o, d;
        try {
          if (f.getDay() === u && S) {
            const m =
              (([o, d] = w(() =>
                b("/web-api/api/v3/bonuses/for_their", {
                  method: "post",
                }).execute()
              )),
              (o = await o),
              d(),
              o);
            m != null && m.success && (l.value = !0);
          }
        } catch (m) {
          l.value = !1;
        }
      },
    };
  },
  qe = Z({
    __name: "HeaderTop",
    props: {
      isVisibleNavigationBannerInHeaderTop: { type: Boolean, default: !1 },
      showEventsNearLogo: { type: Boolean, default: !1 },
    },
    async setup(H) {
      $_$();
      let a, s, n, i;
      const b = H,
        f = (([n, i] = Y(() => Se())),
        (n = (([a, s] = w(() => n)), (a = await a), s(), a)),
        i(),
        n)(),
        {
          config: {
            isOldUserControl: u,
            blocks: l,
            widthLogoThirdPartyProduct: B,
            heightLogoThirdPartyProduct: c,
            sizeLogoThirdPartyProduct: E,
            headerTopControlsOutside: y,
          },
          style: o,
        } = f,
        [d, m, V] = q(165, 189, 443),
        { mainMenuProductItem: A, isVisibleProduct: G } = de(),
        { isVisibleNavigationGameLogo: k, gameBannerData: D } = X(),
        { isShowEvents: O, daysEventsButtons: x, loadFridayEvent: _ } = je(),
        p = J(!1),
        z = I(() =>
          P(
            () => import("./5a4af09de3.js"),
            __vite__mapDeps([0, 1, 2, 3, 4, 5]),
            import.meta.url
          )
        ),
        T = I(() =>
          P(
            () => import("./98040dd2a0.js").then((t) => t.HeaderSocial$1),
            __vite__mapDeps([6, 7, 1, 2, 8, 9]),
            import.meta.url
          )
        ),
        $ = I(() =>
          P(
            () => import("./5304df1d77.js"),
            __vite__mapDeps([10, 1, 2, 11]),
            import.meta.url
          )
        ),
        h = I(() =>
          P(
            () =>
              import("./ceb415ff7e.js").then(
                (t) => t.HeaderNavigationGameLogo$1
              ),
            __vite__mapDeps([12, 1, 2, 13]),
            import.meta.url
          )
        ),
        C = I(() =>
          P(
            () =>
              import("./ceb415ff7e.js").then(
                (t) => t.HeaderLogoThirdPartyProduct$1
              ),
            __vite__mapDeps([12, 1, 2, 13]),
            import.meta.url
          )
        ),
        U = I(() =>
          P(
            () => import("./bd590bc04f.js"),
            __vite__mapDeps([
              14, 15, 1, 2, 16, 17, 18, 19, 20, 21, 7, 8, 22, 23, 24, 25, 26,
              27, 12, 13, 3, 4, 28,
            ]),
            import.meta.url
          )
        ),
        { hasSocialLinks: _e } = Ke(3),
        ue = _e && V && !u,
        W = v(
          () =>
            $_$() && {
              HeaderInformation: { component: z },
              HeaderSocial: { component: T, isVisible: ue },
              HeaderDaysEvents: {
                component: $,
                props: { daysEventsButtons: x.value },
                isVisible: e(O) && !p.value,
              },
              HeaderNavigationGameLogo: {
                component: h,
                props: { gameBannerData: D.value },
                isVisible:
                  (e(k) || m) &&
                  !d &&
                  b.isVisibleNavigationBannerInHeaderTop &&
                  !p.value,
              },
              HeaderLogoThirdPartyProduct: {
                component: C,
                props: {
                  product: A.value,
                  logoWidth: B,
                  logoHeight: c,
                  logoSize: E,
                },
                isVisible: !!G.value && !p.value,
              },
              HeaderEvents: {
                component: U,
                isVisible: !b.showEventsNearLogo && !p.value,
              },
            }
        ),
        ce = v(() =>
          l
            .filter((t) => $_$() && e(W)[t] && e(W)[t].isVisible !== !1)
            .map((t) => $_$() && { id: t, ...e(W)[t] })
        ),
        me = async () => {
          $_$();
          let t, N;
          p.value = !0;
          try {
            ([t, N] = w(() => _())), await t, N();
          } finally {
            p.value = !1;
          }
        };
      se(async () => {
        $_$();
        let t, N;
        ([t, N] = w(() => me())), await t, N();
      });
      const pe = { "header-top__controls--outside": y };
      return (t, N) =>
        $_$() &&
        (r(),
        F(
          "div",
          { class: "header-top", style: re(e(o)) },
          [
            (r(!0),
            F(
              ie,
              null,
              le(
                e(ce),
                (K) =>
                  $_$() &&
                  (r(),
                  g(
                    Ee(K.component),
                    ke({ key: K.id, ref_for: !0 }, K.props),
                    null,
                    16
                  ))
              ),
              128
            )),
            e(u)
              ? (r(), g($e, { key: 0, class: "header-top__controls" }))
              : (r(),
                g(Me, { key: 1, class: j([pe, "header-top__controls"]) })),
          ],
          4
        ));
    },
  }),
  Je = Q(qe, [["__scopeId", "data-v-5bd201bf"]]),
  Qe = { class: "header__logo" },
  Xe = Z({
    __name: "Header",
    async setup(H) {
      $_$();
      let a, s, n, i;
      const b = {
        defineEntityImplementation: () =>
          $_$() && { props: H, emit: De().emit },
      };
      Oe("HeaderDesktop", {}, !0, [xe.Desktop]), b.defineEntityImplementation();
      const f = (([n, i] = Y(() => Ve())),
        (n = (([a, s] = w(() => n)), (a = await a), s(), a)),
        i(),
        n)(),
        {
          config: {
            eventLogoHasDivider: u,
            eventLogoHasAdditionalGutter: l,
            eventLogoSingleFlag: B,
            eventLogoSize: c,
            doubleRowLogo: E,
            showEventsNearLogo: y,
            isVisibleNavigationBannerInHeaderTop: o,
          },
          style: d,
        } = f,
        [m = {}, V, A] = q(1619, 1483, 2044),
        { layoutThemes: G } = Ae(),
        k = v(() => ($_$() && e(G).header) || V),
        D = J(),
        { allEventList: O, loadLogotypes: x, markLogo: _ } = ze(),
        { loadBannerId: p } = X(),
        { loadBanner: z } = de(),
        T = { ...d, ...m },
        $ = v(
          () =>
            $_$() && {
              [`header--theme-${e(k)}`]: !!e(k),
              "header--indented": A,
              "header--big-logo": E,
            }
        );
      return (
        se(async () => {
          $_$();
          let h, C;
          Ge(D, "header-height", { useBorderBoxSize: !0 }),
            ([h, C] = w(() => Promise.all([p(), x(), z()]))),
            await h,
            C();
        }),
        (h, C) =>
          $_$() &&
          (r(),
          F(
            "header",
            { ref_key: "header", ref: D, style: T, class: j([e($), "header"]) },
            [
              Te("div", Qe, [
                e(_)
                  ? (r(),
                    g(
                      te,
                      {
                        key: e(_).title,
                        logo: e(_),
                        divider: e(u),
                        hasAdditionalGutter: e(l),
                        size: e(c),
                        class: "header__pattern",
                      },
                      null,
                      8,
                      ["logo", "divider", "hasAdditionalGutter", "size"]
                    ))
                  : R("", !0),
                L(Fe, { class: "header__img" }),
                e(y)
                  ? (r(!0),
                    F(
                      ie,
                      { key: 1 },
                      le(
                        e(O),
                        (U) =>
                          $_$() &&
                          (r(),
                          g(
                            te,
                            {
                              key: U.title,
                              logo: U,
                              divider: e(u),
                              hasAdditionalGutter: e(l),
                              singleFlag: e(B),
                              size: e(c),
                            },
                            null,
                            8,
                            [
                              "logo",
                              "divider",
                              "hasAdditionalGutter",
                              "singleFlag",
                              "size",
                            ]
                          ))
                      ),
                      128
                    ))
                  : R("", !0),
              ]),
              L(
                Je,
                {
                  isVisibleNavigationBannerInHeaderTop: e(o),
                  showEventsNearLogo: e(y),
                  class: "header__top",
                },
                null,
                8,
                ["isVisibleNavigationBannerInHeaderTop", "showEventsNearLogo"]
              ),
              L(
                Ze,
                { showNavigationBanner: !e(o), class: "header__bottom" },
                null,
                8,
                ["showNavigationBanner"]
              ),
            ],
            2
          ))
      );
    },
  }),
  bo = Q(Xe, [["__scopeId", "data-v-98ff0d5d"]]);
export { bo as default };
