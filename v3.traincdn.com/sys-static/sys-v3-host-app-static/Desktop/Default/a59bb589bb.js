import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as Ce,
  index_getConfig as Ko,
  runtimeCore_esmBundler_resolveComponent as oe,
  runtimeCore_esmBundler_createBlock as d,
  runtimeCore_esmBundler_openBlock as s,
  reactivity_esmBundler_unref as e,
  theme_constants_themeType as Oe,
  runtimeCore_esmBundler_withCtx as c,
  runtimeCore_esmBundler_createElementBlock as W,
  runtimeCore_esmBundler_createCommentVNode as y,
  runtimeCore_esmBundler_createElementVNode as ve,
  runtimeCore_esmBundler_Fragment as ge,
  runtimeCore_esmBundler_renderList as Xe,
  index_getConfigs as Me,
  reactivity_esmBundler_ref as he,
  router_useRoute as Co,
  useGlobalStore as Ee,
  index_useSharedStore as Yo,
  reactivity_esmBundler_toRefs as qo,
  runtimeCore_esmBundler_computed as i,
  defineEmit_defineEmit as Fe,
  whenever as ko,
  runtimeCore_esmBundler_nextTick as Ke,
  shared_esmBundler_normalizeClass as se,
  runtimeCore_esmBundler_createVNode as v,
  nuxtLink_default as ao,
  runtimeCore_esmBundler_resolveDynamicComponent as wo,
  runtimeCore_esmBundler_renderSlot as jo,
  size_constants_sizeType as j,
  runtimeCore_esmBundler_createTextVNode as ce,
  shared_esmBundler_toDisplayString as me,
  index_injectRemoteComponent as Se,
  useCoreBus as bo,
  runtimeCore_esmBundler_onMounted as Ze,
  runtimeCore_esmBundler_onBeforeUnmount as yo,
  runtimeDom_esmBundler_Transition as Jo,
  runtimeCore_esmBundler_withDirectives as le,
  shared_esmBundler_normalizeStyle as Qo,
  runtimeDom_esmBundler_withModifiers as So,
  runtimeDom_esmBundler_vShow as Xo,
  execAsync as Z,
  runtimeCore_esmBundler_mergeProps as Lo,
  isDef as je,
  promoBonuses_BonusSections as Ge,
  ThirdPartyRouteName_ThirdPartyRouteName as ze,
  index_useT as Zo,
  index_useLogger as en,
  router_useRouter as on,
  useRouterMethodsWithLang as Bo,
  uniqueBy as nn,
  BettingPageType as tn,
  debounce as sn,
  reactivity_esmBundler_onScopeDispose as To,
  equalWatch as Io,
  noop as Je,
  unrefElement as ro,
  runtimeCore_esmBundler_watchEffect as Mo,
  runtimeCore_esmBundler_useTemplateRef as an,
  watchOnce_watchOnce as rn,
  runtimeCore_esmBundler_Suspense as ln,
  runtimeCore_esmBundler_resolveDirective as Ao,
  WeightType as uo,
  iconName as Ye,
  useUserConfigStore as cn,
  ICON_LOGOS_PATH as dn,
  iconLogos as un,
  clientOnly_default as _n,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { withAsyncContext as Ue } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  _sfc_main as pn,
  _sfc_main$1 as hn,
  isLineOrLiveHeaderMenuItemActive as mn,
  _sfc_main$2 as vn,
} from "./bcd6fb1c88.js";
import {
  _export_sfc as de,
  useDashboardSingleSportLink as fn,
  CYBER_APP_MICRO_FRONTEND_URL as gn,
  NUXT_THIRD_PARTY_MICRO_FRONTEND_URL as Cn,
  PROMOTIONS_AND_BONUSES_MICRO_FRONTEND_URL as kn,
  _sfc_main$3 as Ro,
  loadHeaderNavigationListDesktopConfig as wn,
  useBettingClearSelectedData as bn,
  useHostAppAnalytics as Do,
  useNavigationLinkHandler as yn,
  SlotsRouteSection as Qe,
  useWindowResize as Sn,
  useResizeObserver as Ln,
  loadBalanceConfig as Bn,
  loadUserOfficeConfigDesktop as Tn,
  OFFICE_APP_MICRO_FRONTEND_URL as No,
  WELCOME_APP_MICRO_FRONTEND_URL as In,
  THIRD_PARTY_PROMOTION_MICRO_FRONTEND_URL as Mn,
  loadUserControlConfig as An,
  loadHeaderTopConfig as Rn,
  useUserControlBonuses as Dn,
  useUserControlRoutes as Nn,
  usePaymentPageAvailable as Pn,
  useHeaderData as On,
  useRegistrationButtonDynamicText as zn,
  useLayoutThemes as Un,
  useRegistrationButtonAnimate as En,
  ICON_THIRD_PARTY_PATH as _o,
  iconThirdParty as po,
  ICON_GAMES_PATH as ho,
  iconGames as mo,
} from "./entry-85993dc44c.js";
import {
  MENU_IMG_SIZE as xe,
  useTrackMenuItemClick as Hn,
} from "./1c8c17a20a.js";
import {
  HeaderLogoThirdPartyProduct as $n,
  useHeaderBanner as Wn,
  useHeaderMenuElements as Fn,
} from "./ceb415ff7e.js";
import {
  useUserControlRegistration as Gn,
  useFirstDepositBonus as xn,
  useFirstDepositBonusVisibility as Vn,
  _sfc_main as Kn,
  _sfc_main$1 as Yn,
} from "./11ddbeb33d.js";
import {
  Bonuses as Po,
  useUserControlQuestion as qn,
  usePaymentsIcon as jn,
  useSupportCallback as Jn,
  UserControlExternalBtn as Qn,
  UserMessagesDropdown as Xn,
  ApplicationSettingsPanel as Zn,
} from "./1649e8033c.js";
import { useBalanceDropdown as Oo, Balance as et } from "./1ba58be09f.js";
const ot = (n) => {
    var o;
    return (
      typeof n == "function" && !((o = n.prototype) != null && o.constructor)
    );
  },
  nt = { key: 0, class: "header-navigation-cyber-loader__banner" },
  tt = { class: "header-navigation-cyber-loader__nav" },
  st = 10,
  it = Ce({
    __name: "HeaderNavigationCyberLoader",
    setup(n) {
      $_$();
      const o = Ko(55);
      return (r, a) => {
        $_$();
        const l = oe("UiSkeleton");
        return (
          s(),
          d(
            l,
            { theme: e(Oe).gray100, class: "header-navigation-cyber-loader" },
            {
              default: c(
                () =>
                  $_$() && [
                    e(o) ? (s(), W("div", nt)) : y("", !0),
                    ve("div", tt, [
                      (s(),
                      W(
                        ge,
                        null,
                        Xe(
                          st,
                          (h) =>
                            $_$() &&
                            ve("div", {
                              key: `header-navigation-cyber-loader-item-${h}`,
                              class: "header-navigation-cyber-loader__item",
                            })
                        ),
                        64
                      )),
                    ]),
                  ]
              ),
              _: 1,
            },
            8,
            ["theme"]
          )
        );
      };
    },
  }),
  at = de(it, [["__scopeId", "data-v-92c6d831"]]),
  rt = (n) => {
    $_$();
    const [o, r, a, l, h, m, T, C, w, A, R, D] = Me(
        2089,
        54,
        1714,
        1713,
        1724,
        1723,
        1721,
        1722,
        1718,
        1716,
        1976,
        2184
      ),
      u = he(0),
      S = he(),
      f = he(),
      _ = Co(),
      L = Ee(),
      E = Yo().get("thirdParty/isHeaderLoaded"),
      { menuItem: I, isCompact: F } = qo(n),
      P = he(!1),
      H = he(!1),
      ie = i(() => $_$() && e(I).type === 9),
      $ = i(() => $_$() && e(I).type === 5),
      ne = i(() => $_$() && e(I).type === 6),
      V = i(() => $_$() && ["slots", "casino"].includes(e(I).provider_type)),
      J = i(() => $_$() && e(I).type === 2),
      ue = i(() => $_$() && e(I).id === "headerGroupEsports"),
      ae = i(() => $_$() && r === "0" && e(ue)),
      g = i(() => $_$() && o && e($)),
      b = i(() => L.isRtl),
      N = i(
        () =>
          $_$() && {
            "header-navigation-links--two-col": e($) || (e(ie) && e(F)),
            [`header-navigation-links--theme-${A}`]: A,
          }
      ),
      G = i(() => {
        $_$();
        var O;
        return {
          "header-navigation-section-dropdown--alone": !(
            (O = e(I).dropdownContent) != null && O.allLinksMenuItem
          ),
          "header-navigation-section-dropdown--fill": m,
          [`header-navigation-section-dropdown--size-${a}`]: a,
          [`header-navigation-section-dropdown--theme-${l}`]: l,
          "header-navigation-section-dropdown--rounded": w,
        };
      }),
      t = i(
        () =>
          $_$() && {
            "header-navigation-section--active": e(I).isActive,
            "header-navigation-section--rounded": w,
            "header-navigation-section--underlined": h,
            "header-navigation-section--decent": R,
          }
      ),
      p = i(
        () =>
          $_$() && {
            "header-navigation-section-link--active": e(I).isActive,
            "header-navigation-section-link--promo": e($) && T,
            [`header-navigation-section-link--theme-${D}`]: D,
          }
      ),
      M = i(() => ({
        "header-navigation-section-link__label--capitalize": !C,
      })),
      B = i(() => $_$() && !!e(I).isDropdownOpen),
      x = i(() => {
        $_$();
        var O;
        return (O = e(I).dropdownContent) == null ? void 0 : O.links;
      }),
      Q = i(() => {
        $_$();
        var O;
        const X = (O = e(x)) != null ? O : [];
        return Object.values(X).some((we) => we.visible);
      }),
      ke = i(() => {
        $_$();
        var O;
        return !!((O = e(I).dropdownContent) != null && O.images);
      }),
      te = i(() => {
        $_$();
        var O;
        const { allLinksMenuItem: X } =
            (O = e(I).dropdownContent) != null ? O : {},
          we = (X == null ? void 0 : X.href) === e(_).fullPath;
        return !!(X != null && X.visible) && !we && !e($);
      }),
      Le = i(() => ($_$() && e(Q)) || e(ke) || e(te) || e(ae) || e(g)),
      Ae = i(() => $_$() && e(B) && e(Le)),
      Be = i(() => $_$() && e(Q) && !e(V) && !e($)),
      Re = i(() => $_$() && e(V) && (e(B) || e(E))),
      Te = i(() => $_$() && e(ae) && e(H)),
      K = i(() => $_$() && e(g) && e(H)),
      be = Fe("hoverSection"),
      ye = Fe("leaveSection"),
      De = Fe("closeSection"),
      Ie = Fe("menuItemClick"),
      { setDashboardSportFilter: Ne } = fn(),
      Y = () => {
        P.value = !0;
      },
      Pe = () => {
        P.value = !1;
      },
      eo = () => {
        $_$();
        e(P) || be();
      },
      oo = (O, X) => {
        X == null || X.preventDefault(),
          De(),
          Ie(O),
          (O == null ? void 0 : O.actionType) === 5 && Ne(O.href);
      };
    return (
      ko(B, () => {
        H.value = !0;
      }),
      {
        left: u,
        onHover: () => {
          $_$();
          be(),
            Ke(() => {
              $_$();
              if (S.value) {
                const { left: O, right: X } = S.value.getBoundingClientRect();
                if (!f.value) return;
                const we = f.value.clientWidth + O,
                  He = X - f.value.clientWidth;
                we > document.body.clientWidth && !e(b)
                  ? (u.value = -(we - document.body.clientWidth + 10))
                  : He < 0 && e(b)
                  ? (u.value = He - 10)
                  : (u.value = 0);
              }
            });
        },
        dropdownBtn: S,
        dropdownBlock: f,
        modifiedMenuItem: I,
        isOpen: B,
        isShowDropdownContent: Ae,
        isShowDropdownContentLinks: Be,
        isPromoSection: $,
        isThirdPartySection: V,
        isSlotsSection: ne,
        isLiveSection: J,
        isShowThirdPartyDropdownContent: Re,
        isESportsDropdownSection: ae,
        isShowCyberDropdownContent: Te,
        headerNavigationLinksClasses: N,
        headerNavigationSectionClasses: t,
        hasDropdownContent: Le,
        hasDropdownContentShowAllButton: te,
        hoverSection: be,
        leaveSection: ye,
        onMenuClick: oo,
        dropdownContentLinks: x,
        onDropdownClosingStart: Y,
        onDropdownClosingEnd: Pe,
        isShowPromoDropdownContent: K,
        onHoverDropdown: eo,
        headerNavigationDropdownClasses: G,
        headerNavigationSectionLinkClasses: p,
        headerNavigationSectionLinkLabelClasses: M,
      }
    );
  },
  lt = de(pn, [["__scopeId", "data-v-890f436e"]]),
  ct = Ce({
    __name: "HeaderNavigationLinks",
    props: {
      dropdownContentLinks: { default: () => [] },
      headerNavigationLinksClasses: { default: () => ({}) },
    },
    emits: ["linkClick"],
    setup(n, { emit: o }) {
      const r = o,
        a = (h, m) => {
          r("linkClick", h, m);
        },
        l = (h) => ({
          "header-navigation-links__link--is-active": !!h.isActive,
        });
      return (h, m) => {
        $_$();
        const T = oe("UiCaption"),
          C = ao;
        return (
          s(),
          W(
            "ul",
            {
              class: se([
                h.headerNavigationLinksClasses,
                "header-navigation-links",
              ]),
            },
            [
              (s(!0),
              W(
                ge,
                null,
                Xe(
                  h.dropdownContentLinks,
                  (w, A) =>
                    $_$() &&
                    (s(),
                    W(
                      ge,
                      null,
                      [
                        w.visible
                          ? (s(),
                            W(
                              "li",
                              {
                                key: A,
                                class: "header-navigation-links__item",
                              },
                              [
                                v(
                                  C,
                                  { to: w.href, custom: "" },
                                  {
                                    default: c(
                                      ({ href: R }) =>
                                        $_$() && [
                                          (s(),
                                          d(
                                            wo(w.href ? "a" : "button"),
                                            {
                                              onClick: (D) => a(w, D),
                                              href: w.href ? R : void 0,
                                              class: se([
                                                l(w),
                                                "header-navigation-links__link",
                                              ]),
                                            },
                                            {
                                              default: c(
                                                () =>
                                                  $_$() && [
                                                    jo(
                                                      h.$slots,
                                                      "prependInner",
                                                      { link: w },
                                                      void 0,
                                                      !0
                                                    ),
                                                    v(
                                                      T,
                                                      { size: e(j).m },
                                                      {
                                                        default: c(
                                                          () =>
                                                            $_$() && [
                                                              ce(
                                                                me(w.title),
                                                                1
                                                              ),
                                                            ]
                                                        ),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      ["size"]
                                                    ),
                                                  ]
                                              ),
                                              _: 2,
                                            },
                                            1032,
                                            ["onClick", "href", "class"]
                                          )),
                                        ]
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  ["to"]
                                ),
                              ]
                            ))
                          : y("", !0),
                      ],
                      64
                    ))
                ),
                256
              )),
            ],
            2
          )
        );
      };
    },
  }),
  dt = de(ct, [["__scopeId", "data-v-82039a15"]]),
  ut = de(hn, [["__scopeId", "data-v-f03f9922"]]),
  _t = { key: 0, class: "header-navigation-section-link__dot" },
  pt = { key: 1 },
  ht = ["srcset"],
  mt = ["width", "height", "src"],
  vt = Ce({
    __name: "HeaderNavigationSection",
    props: {
      menuItem: {},
      isCompact: { type: Boolean },
      showMoreDots: { type: Boolean },
    },
    setup(n) {
      $_$();
      const o = Se(gn, "CyberHeaderNavigation"),
        r = Se(Cn, "HeaderNavigationSection"),
        a = Se(kn, "HeaderNavigationPromoDropdown"),
        l = n,
        [h, m, T, C, w, A = j.m, R] = Me(
          1712,
          1725,
          1722,
          1720,
          1715,
          1883,
          1855
        ),
        {
          left: D,
          onHover: u,
          dropdownBtn: S,
          dropdownBlock: f,
          modifiedMenuItem: _,
          isOpen: L,
          isShowDropdownContent: k,
          isShowDropdownContentLinks: E,
          isLiveSection: I,
          isPromoSection: F,
          isESportsDropdownSection: P,
          isThirdPartySection: H,
          isShowCyberDropdownContent: ie,
          isShowPromoDropdownContent: $,
          isShowThirdPartyDropdownContent: ne,
          headerNavigationLinksClasses: V,
          hasDropdownContent: J,
          hasDropdownContentShowAllButton: ue,
          leaveSection: ae,
          onMenuClick: g,
          dropdownContentLinks: b,
          onDropdownClosingStart: N,
          onDropdownClosingEnd: G,
          onHoverDropdown: t,
          headerNavigationSectionClasses: p,
          headerNavigationDropdownClasses: M,
          headerNavigationSectionLinkClasses: B,
          headerNavigationSectionLinkLabelClasses: x,
        } = rt(l),
        Q = bo(),
        ke = i(() => $_$() && e(I) && C),
        te = i(() => ($_$() && e(_).href ? "a" : "button")),
        Le = i(() => $_$() && `--offset-dropdown: ${e(D)}px;`),
        Ae = i(() => $_$() && e(_).type === 9),
        Be = i(
          () =>
            $_$() && {
              original: `${e(_).ico_path}_${xe.DESKTOP}.png`,
              default: `${e(_).ico_path}_${xe.DESKTOP}.webp`,
            }
        ),
        Re = i(() => $_$() && e(J) && l.showMoreDots && e(Ae));
      return (
        Ze(() => {
          $_$();
          e(P) && Q.on("linkClickCyberNavigationMenu", g),
            e(H) && Q.on("linkClickThirdPartyNavigationMenu", g),
            e(F) && Q.on("linkClickPromoNavigationMenu", g);
        }),
        yo(() => {
          $_$();
          e(P) && Q.off("linkClickCyberNavigationMenu", g),
            e(H) && Q.off("linkClickThirdPartyNavigationMenu", g),
            e(F) && Q.off("linkClickPromoNavigationMenu", g);
        }),
        (Te, K) => {
          $_$();
          const be = oe("UiIco"),
            ye = oe("UiCaption"),
            De = oe("UiAngle"),
            Ie = ao,
            Ne = oe("UiButton");
          return (
            s(),
            W(
              "li",
              {
                ref_key: "dropdownBtn",
                ref: S,
                onMouseover:
                  K[3] || (K[3] = (...Y) => $_$() && e(u) && e(u)(...Y)),
                onMouseout:
                  K[4] || (K[4] = (...Y) => $_$() && e(ae) && e(ae)(...Y)),
                class: se(["header-navigation-section", e(p)]),
              },
              [
                v(
                  Ie,
                  { to: e(_).href, custom: "" },
                  {
                    default: c(
                      ({ href: Y }) =>
                        $_$() && [
                          (s(),
                          d(
                            wo(e(te)),
                            {
                              onClick:
                                K[0] ||
                                (K[0] = (Pe) => $_$() && e(g)(e(_), Pe)),
                              href: Y,
                              "aria-expanded": e(L),
                              class: se([
                                "header-navigation-section-link",
                                e(B),
                              ]),
                            },
                            {
                              default: c(
                                () =>
                                  $_$() && [
                                    e(ke) ? (s(), W("span", _t)) : y("", !0),
                                    e(_).ico_path
                                      ? (s(),
                                        W("picture", pt, [
                                          ve(
                                            "source",
                                            {
                                              srcset: e(Be).default,
                                              type: "image/webp",
                                            },
                                            null,
                                            8,
                                            ht
                                          ),
                                          ve(
                                            "img",
                                            {
                                              width: e(xe).DESKTOP,
                                              height: e(xe).DESKTOP,
                                              src: e(Be).original,
                                              alt: "",
                                              class:
                                                "header-navigation-section-link__icon",
                                            },
                                            null,
                                            8,
                                            mt
                                          ),
                                        ]))
                                      : y("", !0),
                                    e(_).ico_id
                                      ? (s(),
                                        d(
                                          be,
                                          {
                                            key: 2,
                                            ico: e(_).ico_id,
                                            path: e(_).ico_section,
                                            class:
                                              "header-navigation-section-link__icon",
                                          },
                                          null,
                                          8,
                                          ["ico", "path"]
                                        ))
                                      : y("", !0),
                                    v(
                                      ye,
                                      {
                                        size: e(A),
                                        noWrap: "",
                                        uppercase: e(T),
                                        weight: e(w),
                                        class: se([
                                          e(x),
                                          "header-navigation-section-link__label",
                                        ]),
                                      },
                                      {
                                        default: c(
                                          () => $_$() && [ce(me(e(_).title), 1)]
                                        ),
                                        _: 1,
                                      },
                                      8,
                                      ["size", "uppercase", "weight", "class"]
                                    ),
                                    e(Re)
                                      ? (s(),
                                        d(
                                          ye,
                                          {
                                            key: 3,
                                            class:
                                              "header-navigation-section-link__dots",
                                          },
                                          {
                                            default: c(
                                              () =>
                                                ($_$() && K[5]) ||
                                                (K[5] = [ce(" ... ")])
                                            ),
                                            _: 1,
                                          }
                                        ))
                                      : e(J)
                                      ? (s(),
                                        d(De, {
                                          key: 4,
                                          class:
                                            "header-navigation-section-link__angle",
                                        }))
                                      : y("", !0),
                                  ]
                              ),
                              _: 2,
                            },
                            1032,
                            ["href", "aria-expanded", "class"]
                          )),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["to"]
                ),
                v(
                  Jo,
                  {
                    onBeforeLeave: e(N),
                    onAfterLeave: e(G),
                    name: "t-header-navigation-section-dropdown",
                  },
                  {
                    default: c(
                      () =>
                        $_$() && [
                          le(
                            ve(
                              "div",
                              {
                                ref_key: "dropdownBlock",
                                ref: f,
                                onMouseover:
                                  K[2] ||
                                  (K[2] = So(
                                    (...Y) => $_$() && e(t) && e(t)(...Y),
                                    ["stop"]
                                  )),
                                style: Qo(e(Le)),
                                class: se([
                                  e(M),
                                  "header-navigation-section__dropdown header-navigation-section-dropdown",
                                ]),
                              },
                              [
                                e($)
                                  ? (s(),
                                    d(
                                      e(a),
                                      { key: 0 },
                                      {
                                        preloader: c(
                                          () =>
                                            $_$() && [
                                              v(
                                                ut,
                                                { skeletonTheme: e(R) },
                                                null,
                                                8,
                                                ["skeletonTheme"]
                                              ),
                                            ]
                                        ),
                                        _: 1,
                                      }
                                    ))
                                  : y("", !0),
                                v(Ro, null, {
                                  default: c(
                                    () =>
                                      $_$() && [
                                        e(ne)
                                          ? (s(),
                                            d(
                                              e(r),
                                              { key: 0, menuItem: e(_) },
                                              {
                                                preloader: c(
                                                  () =>
                                                    $_$() && [
                                                      v(
                                                        lt,
                                                        { skeletonTheme: e(R) },
                                                        null,
                                                        8,
                                                        ["skeletonTheme"]
                                                      ),
                                                    ]
                                                ),
                                                _: 1,
                                              },
                                              8,
                                              ["menuItem"]
                                            ))
                                          : y("", !0),
                                      ]
                                  ),
                                  _: 1,
                                }),
                                e(ie)
                                  ? (s(),
                                    d(
                                      e(o),
                                      {
                                        key: 1,
                                        eSportRoute: Te.menuItem.href,
                                        class:
                                          "header-navigation-section-dropdown__cyber",
                                      },
                                      {
                                        preloader: c(() => $_$() && [v(at)]),
                                        _: 1,
                                      },
                                      8,
                                      ["eSportRoute"]
                                    ))
                                  : y("", !0),
                                e(E)
                                  ? (s(),
                                    d(
                                      dt,
                                      {
                                        key: 2,
                                        onLinkClick: e(g),
                                        dropdownContentLinks: e(b),
                                        headerNavigationLinksClasses: e(V),
                                        class:
                                          "header-navigation-section-dropdown__items",
                                      },
                                      null,
                                      8,
                                      [
                                        "onLinkClick",
                                        "dropdownContentLinks",
                                        "headerNavigationLinksClasses",
                                      ]
                                    ))
                                  : y("", !0),
                                e(ue)
                                  ? (s(),
                                    d(
                                      Ne,
                                      {
                                        key: 3,
                                        onClick:
                                          K[1] ||
                                          (K[1] = (Y) =>
                                            $_$() &&
                                            e(g)(
                                              e(_).dropdownContent
                                                .allLinksMenuItem
                                            )),
                                        size: e(j).m,
                                        theme: e(h),
                                        class:
                                          "header-navigation-section-dropdown__more",
                                        uppercase: e(m),
                                      },
                                      {
                                        default: c(
                                          () =>
                                            $_$() && [
                                              v(
                                                ye,
                                                { size: e(A) },
                                                {
                                                  default: c(() => {
                                                    $_$();
                                                    var Y;
                                                    return [
                                                      ce(
                                                        me(
                                                          (Y =
                                                            e(_).dropdownContent
                                                              .allLinksMenuItem) ==
                                                            null
                                                            ? void 0
                                                            : Y.title
                                                        ),
                                                        1
                                                      ),
                                                    ];
                                                  }),
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
                                      ["size", "theme", "uppercase"]
                                    ))
                                  : y("", !0),
                              ],
                              38
                            ),
                            [[Xo, e(k)]]
                          ),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["onBeforeLeave", "onAfterLeave"]
                ),
              ],
              34
            )
          );
        }
      );
    },
  }),
  ft = de(vt, [["__scopeId", "data-v-03e4997a"]]),
  gt = Ce({
    __name: "HeaderNavigationList",
    props: {
      isCompact: { type: Boolean, default: !1 },
      hasBGHighlight: { type: Boolean, default: !1 },
      hasEventLogo: { type: Boolean, default: !1 },
      processedMenuItems: {},
      hasActiveMenuItems: { type: Boolean, default: !1 },
    },
    emits: ["menuItemClick", "hoverSection", "leaveSection"],
    async setup(n) {
      $_$();
      let o, r, a, l;
      const h = n,
        m =
          (([a, l] = Ue(() => wn())),
          (a = (([o, r] = Z(() => a)), (o = await o), r(), o)),
          l(),
          a),
        {
          config: {
            hasHeaderNavigationListSelected: T,
            hasHeaderNavigationListMoreDots: C,
          },
          style: w,
        } = m(),
        [A, R, D, u = []] = Me(1719, 1717, 1718, 1726),
        S = i(() => ({
          "header-navigation-list--selected": h.hasActiveMenuItems && T,
          "header-navigation-list--wide": R,
          "header-navigation-list--narrow": A,
          "header-navigation-list--rounded": D,
          "header-navigation-list--has-bg-highlight": h.hasBGHighlight,
          "header-navigation-list--with-logo": h.hasEventLogo,
        })),
        f = {
          ...Object.fromEntries(u.map(({ label: _, value: L }) => [_, L])),
          ...w,
        };
      return (_, L) =>
        $_$() &&
        (s(),
        W(
          "ul",
          Lo(_.$attrs, { class: ["header-navigation-list", e(S)], style: f }),
          [
            (s(!0),
            W(
              ge,
              null,
              Xe(
                _.processedMenuItems,
                (k) =>
                  $_$() &&
                  (s(),
                  W(
                    ge,
                    null,
                    [
                      k.isThirdParty
                        ? (s(),
                          d(
                            $n,
                            {
                              key: k.id,
                              tag: "li",
                              hasActiveMenuItems: _.hasActiveMenuItems,
                              product: k,
                              class: "header-navigation-list__logo",
                            },
                            null,
                            8,
                            ["hasActiveMenuItems", "product"]
                          ))
                        : (s(),
                          d(
                            ft,
                            {
                              key: `header-navigation-section--${k.id}`,
                              onMenuItemClick:
                                L[0] ||
                                (L[0] = (E) => _.$emit("menuItemClick", E)),
                              onHoverSection: (E) => _.$emit("hoverSection", k),
                              onLeaveSection:
                                L[1] || (L[1] = (E) => _.$emit("leaveSection")),
                              menuItem: k,
                              isCompact: _.isCompact,
                              showMoreDots: e(C),
                              class: "header-navigation-list__item",
                            },
                            null,
                            8,
                            [
                              "onHoverSection",
                              "menuItem",
                              "isCompact",
                              "showMoreDots",
                            ]
                          )),
                    ],
                    64
                  ))
              ),
              256
            )),
          ],
          16
        ));
    },
  }),
  Ct = de(gt, [["__scopeId", "data-v-7b817996"]]),
  kt = 300,
  wt = ["headerGroupSlots", "headerGroupLiveCasino", "headerGroupEsports"],
  bt = () => {
    $_$();
    const { bettingClearAllFilters: n } = bn(),
      o = Ee(),
      r = Do(),
      { trackMenuItemClick: a } = Hn(),
      { linkNavigate: l } = yn(),
      h = i(() => o.isRtl),
      m = he(),
      T = he(),
      C = ({ id: u, href: S }) => {
        $_$();
        if (je(u)) {
          const f = e(m) !== u;
          if (e(m) === "headerGroupGames" && f) {
            r.modules.header.trackMenuItemClickGames(u, S);
            return;
          }
          if (f && wt.includes(e(m))) return;
          u === "headerGroupEsports" &&
            r.modules.header.trackCyberMenuShowAllClick(),
            a({
              trackMenuItemClick: r.modules.header.trackMenuItemClick,
              itemId: u,
              parentItemId: f ? e(m) : void 0,
              itemLink: S,
              itemIdsWithLink: ["topEvent"],
              itemIdsWithId: ["casinoTournaments"],
            });
        }
      },
      w = (u) => {
        $_$();
        je(u.id) &&
          ["headerGroupLive", "headerGroupLine"].includes(u.id) &&
          n(),
          C(u),
          (m.value = void 0),
          (T.value = void 0),
          l({ actionType: u.actionType, link: u.href });
      },
      A = () => {
        T.value && (clearTimeout(T.value), (T.value = void 0));
      };
    return {
      isRtl: h,
      openedItemId: m,
      onMenuItemClick: w,
      onHoverSection: (u) => {
        A(), (m.value = u.id);
      },
      onLeaveSection: () => {
        T.value = setTimeout(() => {
          (m.value = void 0), (T.value = void 0);
        }, kt);
      },
      clearCloseSectionTimer: A,
    };
  },
  yt = (n, o) => {
    var r;
    const a = n.resolve(o),
      l = (r = a.matched.at(-1)) == null ? void 0 : r.redirect;
    return l ? (ot(l) ? l(a) : l) : o;
  },
  so = ({ menuItemType: n, route: o }) => {
    var r, a;
    return (
      (a = (r = o.meta) == null ? void 0 : r[12]) != null ? a : []
    ).includes(n);
  },
  St = (n) =>
    n
      ? decodeURIComponent(n)
          .replace(/[^\d,]/g, "")
          .split(",")
          .map((o) => parseInt(o, 10))
      : [],
  vo = (n) => {
    var o, r, a;
    return (a =
      (r = (o = n.match(/products=([0-9,]+)/)) == null ? void 0 : o[1]) == null
        ? void 0
        : r.split(",").map((l) => Number.parseInt(l, 10))) == null
      ? void 0
      : a[0];
  },
  fo = (n, o) => St(o.query.products || "").includes(n),
  go = (n) =>
    n
      .replace(/^\/?[a-z]{2}\//, "/")
      .replace(/\/?\?/, "/?")
      .replace(/\/?$/, "/"),
  Lt = (n, { route: o }) => {
    $_$();
    var r, a;
    if (n.href.includes(`/bonus/${Ge.RULES}`)) {
      const L =
          o.name === "bonuses" &&
          ((r = o.params) == null ? void 0 : r.section) === Ge.RULES,
        k = o.name === "bonus";
      return L || k;
    }
    if (n.href.includes(`/bonus/${Ge.GAMES}`)) {
      const L =
          o.name === "bonuses" &&
          ((a = o.params) == null ? void 0 : a.section) === Ge.GAMES,
        k = o.name === "bonusGames";
      return L || k;
    }
    if (n.href.includes("/toto")) return o.fullPath.includes("/toto/");
    if (o.fullPath.includes("/lotto")) return n.href.includes("/lotto");
    const C = n.href.includes("/slots"),
      w = n.href.includes("/casino"),
      A = o.name === ze.SLOTS;
    if (C) {
      const L = A && o.params.section === Qe.SLOTS,
        k = vo(n.href);
      if (k) return L && fo(k, o);
    }
    if (w) {
      const L = A && o.params.section === Qe.LIVE_CASINO,
        k = vo(n.href);
      if (k) return L && fo(k, o);
    }
    const R = o.path.includes("/marble"),
      D = o.path.includes("/betsonyour/live"),
      u = o.path.includes("/betsonyour/line");
    if (D) return n.href.includes("/betsonyour/live");
    if (u) return n.href.includes("/betsonyour/line");
    if (R) return n.href.includes("/marble/");
    if (n.href.includes("/champions")) return o.path.includes("/champions");
    if (
      o.path === n.href ||
      (n.href.includes("/cyber/real") &&
        (o.path.includes("/cyber/virtual") || o.path.includes("/cyber/stream")))
    )
      return !0;
    if (!n.href) return !1;
    const f = go(o.fullPath),
      _ = go(n.href);
    return !!_ && f.includes(_);
  },
  Ve = (n, o, r) => {
    var a, l;
    return !!((l = (a = n.dropdownContent) == null ? void 0 : a.links) == null
      ? void 0
      : l.find((m) => qe({ menuItem: m, route: o, logger: r })));
  },
  io = (n, o) =>
    n.path.replace(/^\/[a-z]{2}/, "") === o.replace(/^\/[a-z]{2}/, ""),
  Bt = (n) =>
    $_$() &&
    [ze.SLOTS, ze.SLOTS_GAME].includes(n.name) &&
    n.params.section === Qe.SLOTS,
  Tt = (n) =>
    $_$() &&
    [ze.SLOTS, ze.LIVE_CASINO_GAME].includes(n.name) &&
    n.params.section === Qe.LIVE_CASINO,
  qe = ({ menuItem: n, route: o, logger: r }) => {
    if (!n.type) return Lt(n, { route: o });
    switch (n.type) {
      case 1:
      case 2:
        return mn({ menuItemType: n.type, route: o }) || Ve(n, o, r);
      case 16:
      case 8:
      case 15:
      case 14:
      case 19:
      case 4:
      case 12:
      case 18:
        return so({ menuItemType: n.type, route: o });
      case 9:
        return Ve(n, o, r);
      case 6:
        return !Tt(o) && so({ menuItemType: n.type, route: o });
      case 7:
        return !Bt(o) && so({ menuItemType: n.type, route: o });
      case 3:
        return (n.href && io(o, n.href)) || Ve(n, o, r);
      case 5:
        return (n.href && io(o, n.href)) || Ve(n, o, r);
      case 10:
      case -1:
        return !1;
      case 11:
        return io(o, n.href);
      case 13:
        return o.name === "ourPartnersApp";
      case 17:
        return !1;
      default:
        return (
          r.error(
            "isHeaderMenuItemActive error. Unknown menu item type: ",
            n.type
          ),
          !1
        );
    }
  },
  It = (n) => {
    $_$();
    const { mainMenuProductItem: o } = Wn(),
      r = i(() => {
        $_$();
        var t;
        return je(e(o)) && ((t = e(o)) == null ? void 0 : t.isVisibleInNav);
      }),
      a = Ee(),
      [l, h, m] = Me(54, 194, 2132),
      T = Zo(),
      C = en(),
      w = Co(),
      A = on(),
      { getLinkWithLang: R } = Bo(i(() => a.getLanguage)),
      D = i(() => a.isUserAuth),
      { headerMenuData: u } = Fn(D),
      S = he(m),
      f = (t) =>
        t.reduce((p, M) => {
          var B, x;
          return [
            ...p,
            ...(M.actionType === 4
              ? (x = (B = M.dropdownContent) == null ? void 0 : B.links) != null
                ? x
                : []
              : [M]),
          ];
        }, []),
      _ = i(
        () =>
          $_$() && {
            id: "headerGroupMore",
            type: 9,
            actionType: 4,
            langKey: "header_group_more",
            visible: !0,
            dropdownContent: { links: f(e(u).slice(e(S))) },
          }
      ),
      L = (t) =>
        $_$() && {
          allLinksMenuItem: {
            href:
              t.href ||
              R({
                name: "cyberRouteMain",
                params: { pageType: tn.CYBER, type: "real" },
              }),
            langKey: "header_item_promo_show_all",
            visible: !0,
            id: "headerGroupEsports",
          },
          ...t.dropdownContent,
        },
      k = (t) => {
        var p;
        let M;
        switch (t.actionType) {
          case 4:
            M = "";
            break;
          case 2:
          case 1:
            M = t.href || "";
            break;
          default:
            M = R(yt(A, t.href || ""));
        }
        return {
          href: M,
          title:
            t.title || T((p = t.langKey) != null ? p : "") || t.langKey || "",
        };
      },
      E = (t) => {
        var p, M;
        let { dropdownContent: B } = t;
        if ((l === "0" && t.id === "headerGroupEsports" && (B = L(t)), !B))
          return;
        const x =
            (p = B.links) == null
              ? void 0
              : p.map((te) => ({ ...te, ...k(te) })),
          Q =
            (M = B.images) == null
              ? void 0
              : M.map((te) => ({ ...te, ...k(te) })),
          ke = B.allLinksMenuItem
            ? {
                ...B.allLinksMenuItem,
                ...k(B.allLinksMenuItem),
                isAllLinksMenuItem: !0,
              }
            : void 0;
        return {
          ...(x ? { links: x } : {}),
          ...(Q ? { images: Q } : {}),
          ...(ke ? { allLinksMenuItem: ke } : {}),
        };
      },
      I = (t, p) => {
        $_$();
        const M = p >= e(S),
          B = E(t);
        return {
          ...t,
          ...k(t),
          isSubMenuItem: M,
          ...(B ? { dropdownContent: B } : {}),
        };
      },
      F = i(() => $_$() && e(u).length >= e(S)),
      P = i(() => {
        $_$();
        const t = e(u).slice(0, e(S)),
          p = t.some((B) => B.id === "headerGroupMore");
        return e(F) && !p && e(u).length > e(S) && t.push(e(_)), nn(t).map(I);
      }),
      H = i(() => $_$() && e(P).find(({ type: t }) => t === 9)),
      ie = i(() => $_$() && e(P).filter((t) => $_$() && t !== e(H))),
      $ = i(() => $_$() && e(ie).slice(0, e(S))),
      ne = i(() => $_$() && e(ie).slice(e(S))),
      V = (t) => ($_$() && t === "headerItemPromoCheckSport" ? h && e(D) : !0),
      J = () =>
        $_$() &&
        e(ne).map((t) => {
          var p;
          return {
            ...t,
            title: String((p = t.title) != null ? p : "").toUpperCase(),
            visible: !0,
          };
        }),
      ue = i(() => {
        $_$();
        var t, p;
        return e(H)
          ? {
              ...e(H),
              dropdownContent: {
                links: [
                  ...J(),
                  ...((p =
                    (t = e(H).dropdownContent) == null ? void 0 : t.links) !=
                  null
                    ? p
                    : []),
                ],
              },
            }
          : void 0;
      }),
      ae = (t) => {
        var p, M;
        return (
          t.actionType === 4 &&
          !!(
            (M = (p = t.dropdownContent) == null ? void 0 : p.links) != null &&
            M.some((B) => $_$() && qe({ menuItem: B, route: e(w), logger: C }))
          )
        );
      },
      g = i(() => {
        $_$();
        const t = [...e($), e(ue)].filter(je).map((p) => {
          $_$();
          var M, B;
          return {
            ...p,
            isActive: qe({ menuItem: p, route: e(w), logger: C }) || ae(p),
            isDropdownOpen: e(n) === p.id,
            ...(p.dropdownContent
              ? {
                  dropdownContent: {
                    ...p.dropdownContent,
                    links:
                      (B =
                        p.id === "headerGroupPromo"
                          ? (M = p.dropdownContent.links) == null
                            ? void 0
                            : M.filter(({ id: x }) => V(x))
                          : p.dropdownContent.links) == null
                        ? void 0
                        : B.map(
                            (x) =>
                              $_$() && {
                                ...x,
                                isActive: qe({
                                  menuItem: x,
                                  route: e(w),
                                  logger: C,
                                }),
                              }
                          ),
                  },
                }
              : void 0),
          };
        });
        return e(r) ? [e(o), ...t] : t;
      }),
      b = i(() => $_$() && e(g).some(({ isActive: t }) => !!t));
    return {
      hasMenuItems: i(() => $_$() && e(P).length > 0),
      hasActiveMenuItems: b,
      processedMenuItems: g,
      updateVisibleItemsCount: (t) => {
        $_$();
        e(u).length <= t
          ? (S.value = e(r) ? t - 1 : t)
          : (S.value = Math.max(e(r) ? t - 1 : t, 1) - (e(H) ? 1 : 0));
      },
      headerMenuData: u,
      headerNavSsrItems: m,
    };
  },
  Mt = ({
    target: n,
    items: o,
    initialVisibleCount: r,
    minVisibleCount: a = 0,
    maxVisibleCount: l = 1 / 0,
    indent: h = 0,
    forceInitialOverflow: m,
  }) => {
    $_$();
    var T;
    const C = Ee(),
      { watchWindowResize: w, unwatchWindowResize: A } = Sn();
    let R = Je,
      D = Je;
    const u = he((T = e(r)) != null ? T : 0),
      S = 0.5,
      f = i(() => C.isRtl),
      _ = i(() => $_$() && e(o).length),
      L = i(() => $_$() && e(o).slice(0, e(u))),
      k = i(() => $_$() && e(o).slice(e(u))),
      E = (g) => {
        u.value = g;
      },
      I = () => $_$() && ro(n),
      F = (g) => {
        $_$();
        if (!g) return F(I());
        const { left: b, right: N } = g.getBoundingClientRect();
        return e(f)
          ? e(h) - Math.round(b * 10) / 10
          : Math.round(N * 10) / 10 - e(h);
      },
      P = () => F(I()),
      H = () => {
        const g = I(),
          { lastElementChild: b } = g != null ? g : {};
        return F(b);
      },
      ie = async (g) => {
        $_$();
        var b;
        let N, G;
        const t = I();
        if (t) {
          const p = (b = e(m)) != null ? b : t.style.overflow;
          (t.style.overflow = "hidden"),
            ([N, G] = Z(() => g())),
            await N,
            G(),
            (t.style.overflow = p);
        }
      },
      $ = async (g = !1) => {
        $_$();
        let b, N;
        const G = P(),
          t = H(),
          p = e(u) + 1,
          M = p <= e(_) && p <= e(l),
          B = g && e(r) ? M && p <= e(r) : M;
        t <= G + S &&
          B &&
          (E(p),
          ([b, N] = Z(() => $_$() && Ke())),
          await b,
          N(),
          ([b, N] = Z(() => $())),
          await b,
          N());
      },
      ne = async () => {
        $_$();
        let g, b;
        const N = P(),
          G = H(),
          t = e(u) - 1;
        G > N + S &&
          t >= e(a) &&
          (E(t),
          ([g, b] = Z(() => $_$() && Ke())),
          await g,
          b(),
          ([g, b] = Z(() => ne())),
          await g,
          b());
      },
      V = async ({ isInit: g = !1 } = {}) => {
        $_$();
        let b, N;
        ([b, N] = Z(() => $_$() && Ke())),
          await b,
          N(),
          ([b, N] = Z(() =>
            ie(async () => {
              $_$();
              let G, t;
              ([G, t] = Z(() => $(g))),
                await G,
                t(),
                ([G, t] = Z(() => ne())),
                await G,
                t();
            })
          )),
          await b,
          N();
      },
      J = sn(() => V(), 200, { leading: !0 }),
      ue = () => {
        R(), D(), A(J);
      };
    return (
      Ze(() => {
        $_$();
        ue(),
          (R = Io(() => $_$() && e(o).length, J)),
          (D = w(J)),
          V({ isInit: !0 });
      }),
      To(ue),
      {
        visibleCount: u,
        visibleItems: L,
        invisibleItems: k,
        maxItemsCount: _,
        setVisibleCount: E,
        updateCount: V,
        debounceUpdateCount: J,
      }
    );
  },
  At = (n, o) => {
    $_$();
    const { resizeObserve: r } = Ln();
    let a = Je,
      l = Je;
    const h = () => {
      l(), a();
    };
    return (
      (l = Mo(() => {
        $_$();
        const m = ro(n);
        a(), (a = r(m, o));
      })),
      To(h),
      h
    );
  },
  Zt = Ce({
    __name: "HeaderNavigation",
    props: { resizeTrigger: { default: () => [] } },
    setup(n) {
      $_$();
      const o = n,
        [r, a] = Me(660, 659),
        {
          openedItemId: l,
          onMenuItemClick: h,
          onHoverSection: m,
          onLeaveSection: T,
          clearCloseSectionTimer: C,
        } = bt(),
        {
          hasMenuItems: w,
          processedMenuItems: A,
          hasActiveMenuItems: R,
          updateVisibleItemsCount: D,
          headerMenuData: u,
          headerNavSsrItems: S,
        } = It(l),
        f = an("headerNavigationRef"),
        _ = he(),
        {
          visibleCount: L,
          debounceUpdateCount: k,
          updateCount: E,
        } = Mt({
          target: f,
          items: u,
          initialVisibleCount: S,
          maxVisibleCount: a,
          indent: r,
          forceInitialOverflow: _,
        }),
        I = () => {
          At(f, k);
        };
      return (
        Mo(() => $_$() && D(e(L))),
        Io(
          () => o.resizeTrigger,
          () => E()
        ),
        rn(f, () => {
          $_$();
          var F, P;
          (_.value =
            (P = (F = ro(f)) == null ? void 0 : F.style) == null
              ? void 0
              : P.overflow),
            I();
        }),
        yo(C),
        (F, P) =>
          $_$() && e(w)
            ? (s(),
              d(
                ln,
                { key: 0 },
                {
                  default: c(
                    () =>
                      $_$() && [
                        v(
                          Ct,
                          Lo(
                            {
                              ref_key: "headerNavigationRef",
                              ref: f,
                              onMenuItemClick: e(h),
                              onHoverSection: e(m),
                              onLeaveSection: e(T),
                            },
                            F.$attrs,
                            {
                              processedMenuItems: e(A),
                              hasActiveMenuItems: e(R),
                            }
                          ),
                          null,
                          16,
                          [
                            "onMenuItemClick",
                            "onHoverSection",
                            "onLeaveSection",
                            "processedMenuItems",
                            "hasActiveMenuItems",
                          ]
                        ),
                      ]
                  ),
                  _: 1,
                }
              ))
            : y("", !0)
      );
    },
  }),
  Rt = Ce({
    __name: "DoubleRowHeaderBalanceLoader",
    setup(n) {
      return (o, r) => {
        $_$();
        const a = oe("UiSkeleton");
        return (
          s(),
          d(
            a,
            { theme: e(Oe).primary, class: "double-row-header-balance-loader" },
            {
              default: c(
                () =>
                  ($_$() && r[0]) ||
                  (r[0] = [
                    ve(
                      "div",
                      { class: "double-row-header-balance-loader__currency" },
                      null,
                      -1
                    ),
                    ve(
                      "div",
                      { class: "double-row-header-balance-loader__points" },
                      null,
                      -1
                    ),
                  ])
              ),
              _: 1,
            },
            8,
            ["theme"]
          )
        );
      };
    },
  }),
  Dt = de(Rt, [["__scopeId", "data-v-c552b3d9"]]),
  Nt = { class: "double-row-header-balance-info__content" },
  Pt = { class: "double-row-header-balance-info__currency" },
  Ot = { key: 0, class: "double-row-header-balance-info__points" },
  zt = Ce({
    __name: "DoubleRowHeaderBalance",
    props: { hasActiveAccount: { type: Boolean, default: !1 } },
    async setup(n) {
      $_$();
      let o, r, a, l;
      const {
          config: {
            UiButtonTheme: h,
            balanceInfoTheme: m,
            doubleRowHeaderBalanceIsShowBonuses: T,
            doubleRowHeaderBalanceCurrencyColor: C,
            doubleRowHeaderBalanceCurrencyWeight: w,
          },
        } = (([a, l] = Ue(() => Bn())),
        (a = (([o, r] = Z(() => a)), (o = await o), r(), o)),
        l(),
        a)(),
        A = n,
        {
          mainAccount: R,
          activeAccountMoneyFormatted: D,
          accountActiveCurrencyIso: u,
          refreshBalance: S,
          activeAccountLabelWithIso: f,
          isLoading: _,
        } = Oo(),
        L = i(() => ($_$() && e(_)) || !A.hasActiveAccount),
        k = { [`double-row-header-balance--theme-${m}`]: !!m },
        E = i(
          () =>
            $_$() && { "double-row-header-balance-refresh--is-active": e(_) }
        ),
        I = i(() => $_$() && T && !!e(R)),
        F = { "double-row-header-balance-info--only-currency": !T },
        P = i(() => ($_$() && !T && e(f) ? e(f) : e(u)));
      return (H, ie) => {
        $_$();
        const $ = oe("UiCaption"),
          ne = oe("UiIco"),
          V = oe("UiButton"),
          J = Ao("tooltip");
        return (
          s(),
          W("div", { class: se([k, "double-row-header-balance"]) }, [
            e(L)
              ? (s(), d(Dt, { key: 1 }))
              : (s(),
                W(
                  "div",
                  {
                    key: 0,
                    class: se([
                      "double-row-header-balance__info double-row-header-balance-info",
                      F,
                    ]),
                  },
                  [
                    ve("div", Nt, [
                      ve("div", Pt, [
                        v(
                          $,
                          { color: e(C), size: e(j).xxs },
                          {
                            default: c(() => $_$() && [ce(me(e(P)), 1)]),
                            _: 1,
                          },
                          8,
                          ["color", "size"]
                        ),
                        v(
                          $,
                          { weight: e(w), size: e(j).xxs },
                          {
                            default: c(() => $_$() && [ce(me(e(D)), 1)]),
                            _: 1,
                          },
                          8,
                          ["weight", "size"]
                        ),
                      ]),
                      e(I)
                        ? (s(),
                          W("div", Ot, [
                            v(
                              $,
                              { weight: e(uo).BOLD, size: e(j).xxs },
                              {
                                default: c(
                                  () =>
                                    $_$() && [
                                      ce(me(H.$T("header_balance_points")), 1),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["weight", "size"]
                            ),
                            v(
                              $,
                              { weight: e(uo).BOLD, size: e(j).xxs },
                              {
                                default: c(
                                  () => $_$() && [ce(me(e(R).points), 1)]
                                ),
                                _: 1,
                              },
                              8,
                              ["weight", "size"]
                            ),
                          ]))
                        : y("", !0),
                    ]),
                  ]
                )),
            le(
              (s(),
              d(
                V,
                {
                  onClick: e(S),
                  "aria-label": H.$T("main_dictionary_header_refresh_balance"),
                  theme: e(h),
                  rounded: !1,
                  narrow: "",
                  class: se([
                    e(E),
                    "double-row-header-balance__refresh double-row-header-balance-refresh",
                  ]),
                },
                {
                  container: c(
                    () =>
                      $_$() && [
                        v(
                          ne,
                          {
                            size: e(j).xxs,
                            ico: e(Ye).REFRESH,
                            class: "double-row-header-balance-refresh__ico",
                          },
                          null,
                          8,
                          ["size", "ico"]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["onClick", "aria-label", "theme", "class"]
              )),
              [[J, H.$T("main_dictionary_header_refresh_balance")]]
            ),
          ])
        );
      };
    },
  }),
  Ut = de(zt, [["__scopeId", "data-v-8bc61fe1"]]),
  Et = { class: "user-office__main" },
  Ht = Ce({
    __name: "UserOffice",
    async setup(n) {
      $_$();
      let o, r, a, l;
      const {
          config: { userOfficeShowBonuses: h, userOfficeSize: m },
        } = (([a, l] = Ue(() => Tn())),
        (a = (([o, r] = Z(() => a)), (o = await o), r(), o)),
        l(),
        a)(),
        T = Se(No, "DoubleRowHeaderUserOfficeDropdown"),
        { accountUpdateData: C, isShowBalance: w, activeAccount: A } = Oo(),
        R = { [`user-office--size-${m}`]: !!m },
        D = i(() => $_$() && !!e(A));
      return (
        Ze(C),
        (u, S) =>
          $_$() &&
          (s(),
          W("div", { class: se(["user-office", R]) }, [
            ve("div", Et, [
              v(e(T), { isLoading: !e(D) }, null, 8, ["isLoading"]),
              e(w)
                ? (s(),
                  d(
                    Ut,
                    {
                      key: 0,
                      hasActiveAccount: e(D),
                      class: "user-office__balance",
                    },
                    null,
                    8,
                    ["hasActiveAccount"]
                  ))
                : y("", !0),
            ]),
            e(h)
              ? (s(), d(Po, { key: 0, class: "user-office__bonuse" }))
              : y("", !0),
          ]))
      );
    },
  }),
  $t = de(Ht, [["__scopeId", "data-v-15f3c3f2"]]),
  Wt = de(vn, [["__scopeId", "data-v-dd4b1ac0"]]),
  Ft = () => {
    $_$();
    const n = cn(),
      o = i(() => !!n.isActivationTypePhone),
      r = i(() => !!n.isActivationTypeEmail),
      a = i(() => !!n.countryCode),
      l = i(() => !!n.isRequiredFieldsFilled);
    return {
      isRequiredFieldsFilledAndActivated: i(
        () => $_$() && e(l) && e(o) && e(r) && e(a)
      ),
    };
  },
  Gt = Ce({
    __name: "UserControlDashboard",
    async setup(n) {
      $_$();
      let o, r, a, l;
      const h = Se(In, "Dummy"),
        m = Se(Mn, "JackpotWidget"),
        T = Se(No, "UserOfficeDropdownWrapper"),
        {
          config: {
            uiButtonTheme: C,
            settingsToolbarTheme: w,
            isUppercasePaymentBtn: A,
            isUppercaseRegistrationBtn: R,
            isCompactUserControlDashboardPayment: D,
            isAppSettingsToolbar: u,
            hasPadding: S,
            size: f,
            isSplittedUserOffice: _,
            showCompactSettingsToolbarOnLaptop: L,
            btnsTextSize: k,
            btnsTextWeight: E,
          },
        } = (([a, l] = Ue(() => An())),
        (a = (([o, r] = Z(() => a)), (o = await o), r(), o)),
        l(),
        a)(),
        I =
          (([a, l] = Ue(() => Rn())),
          (a = (([o, r] = Z(() => a)), (o = await o), r(), o)),
          l(),
          a),
        {
          config: { showUserBonus: F },
        } = I(),
        P = Do(),
        [H, ie, $, ne, V, J, ue, ae, g, b = ""] = Me(
          158,
          352,
          351,
          361,
          1886,
          1398,
          2106,
          2060,
          2117,
          2168
        ),
        N = bo(),
        { showRegistration: G, isEnableRegistration: t } = Gn(),
        { hideBalance: p, shouldShowBonuses: M } = Dn(),
        {
          isAuthorized: B,
          isNotAuthorizedStateShown: x,
          navigateToBonusRoute: Q,
          paymentRoute: ke,
          navigateToPaymentRoute: te,
          rechargeRoute: Le,
          navigateToRechargeRoute: Ae,
          mobileAppRoute: Be,
          navigateToMobileAppRoute: Re,
          tournamentRoute: Te,
          officeAccountRoute: K,
        } = Nn(),
        be = Ee(),
        ye = i(() => be.getLanguage),
        { useLangLocation: De, getLinkWithLang: Ie } = Bo(ye),
        { openQuestion: Ne } = qn(),
        { paymentsIcon: Y } = jn(),
        Pe = De({ name: "registration" }),
        { isShowCallback: eo } = Jn(),
        { isPaymentPageAvailable: oo } = Pn(),
        { loadFirstDepositBonusInfo: no } = xn(),
        { isShowFirstDepositBonus: O } = Vn(),
        { isCompact: X } = On(),
        { isRequiredFieldsFilledAndActivated: we } = Ft(),
        He = "menu_top",
        zo = i(() => $_$() && ae && !e(we)),
        Uo = i(() => $_$() && !e(p) && _),
        $e = (z, We) => {
          P.modules.header.bonusCupClick(), Q(z, We);
        },
        Eo = i(() => $_$() && u && (!L || !e(X)));
      Ze(no), ko(B, no);
      const Ho = () => {
          P.modules.header.goToBonus();
        },
        { registrationButtonCode: $o } = zn(),
        Wo = () => {
          N.emit("showSupportBtn"),
            N.emit("disableSupportBanner"),
            P.modules.header.sendAnalyticsSupportButton("header");
        },
        { layoutThemes: Fo } = Un(),
        lo = i(() => ($_$() && e(Fo).header ? Oe.thirdPartyGray15 : C)),
        Go = { "user-control-dashboard--padding-right": S },
        co = i(() => $_$() && e(X) && D),
        xo = En();
      return (z, We) => {
        $_$();
        const _e = oe("UiIco"),
          re = oe("UiButton"),
          pe = ao,
          to = oe("UiCaption"),
          Vo = _n,
          fe = Ao("tooltip");
        return (
          s(),
          W("div", { class: se([Go, "user-control-dashboard"]) }, [
            e(g)
              ? (s(),
                d(
                  Ro,
                  { key: 0 },
                  { default: c(() => $_$() && [v(e(m))]), _: 1 }
                ))
              : y("", !0),
            (s(!0),
            W(
              ge,
              null,
              Xe(
                e(ue),
                (U, q) =>
                  $_$() &&
                  (s(),
                  d(
                    Qn,
                    {
                      key: q,
                      link: U.link,
                      icon: U.icon,
                      text: U.translateKey,
                      isAccentClr: U.isAccentClr,
                      theme: e(C),
                      newWindow: U.isOpenNewWindow,
                    },
                    null,
                    8,
                    [
                      "link",
                      "icon",
                      "text",
                      "isAccentClr",
                      "theme",
                      "newWindow",
                    ]
                  ))
              ),
              128
            )),
            e(F) && e(O)
              ? (s(),
                d(Kn, { key: 1, onClick: Ho, size: e(f) }, null, 8, ["size"]))
              : y("", !0),
            e(x)
              ? (s(),
                W(
                  ge,
                  { key: 2 },
                  [
                    e(V)
                      ? (s(),
                        d(
                          pe,
                          { key: 0, to: e(V), custom: "" },
                          {
                            default: c(
                              ({ href: U }) =>
                                $_$() && [
                                  le(
                                    (s(),
                                    d(
                                      re,
                                      {
                                        tag: "a",
                                        target: "_blank",
                                        href: U,
                                        "aria-label": z.$T(
                                          "header_become_agent"
                                        ),
                                        theme: e(C),
                                        narrow: "",
                                        class: "user-control-dashboard-ticket",
                                      },
                                      {
                                        default: c(
                                          () =>
                                            $_$() && [
                                              v(
                                                _e,
                                                {
                                                  ico: e(Ye).TICKET,
                                                  class:
                                                    "user-control-dashboard-ticket__ico",
                                                },
                                                null,
                                                8,
                                                ["ico"]
                                              ),
                                            ]
                                        ),
                                        _: 2,
                                      },
                                      1032,
                                      ["href", "aria-label", "theme"]
                                    )),
                                    [[fe, z.$T("header_become_agent")]]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ))
                      : y("", !0),
                    !e(H) && e(oo)
                      ? (s(),
                        d(
                          pe,
                          { key: 1, to: e(ke), custom: "" },
                          {
                            default: c(
                              ({ href: U, navigate: q }) =>
                                $_$() && [
                                  le(
                                    (s(),
                                    d(
                                      re,
                                      {
                                        onClick: (ee) => $_$() && e(te)(q, ee),
                                        tag: "a",
                                        href: U,
                                        "aria-label": z.$T("header_payment"),
                                        theme: e(C),
                                        narrow: "",
                                        class: "user-control-dashboard-payment",
                                      },
                                      {
                                        default: c(
                                          () =>
                                            $_$() && [
                                              v(
                                                _e,
                                                {
                                                  ico: e(Y),
                                                  class:
                                                    "user-control-dashboard-payment__ico user-control-dashboard-payment__ico--accent",
                                                },
                                                null,
                                                8,
                                                ["ico"]
                                              ),
                                            ]
                                        ),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick", "href", "aria-label", "theme"]
                                    )),
                                    [[fe, z.$T("header_payment")]]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ))
                      : y("", !0),
                    e(ie)
                      ? (s(),
                        d(
                          pe,
                          { key: 2, to: e(Be), custom: "" },
                          {
                            default: c(
                              ({ href: U, navigate: q }) =>
                                $_$() && [
                                  le(
                                    (s(),
                                    d(
                                      re,
                                      {
                                        onClick: (ee) => $_$() && e(Re)(q, ee),
                                        tag: "a",
                                        href: U,
                                        "aria-label": z.$T("link_menu_android"),
                                        theme: e(C),
                                        narrow: "",
                                      },
                                      {
                                        default: c(
                                          () =>
                                            $_$() && [
                                              v(
                                                _e,
                                                {
                                                  ico: e(un).ANDROID,
                                                  path: e(dn),
                                                  size: e(j).l,
                                                },
                                                null,
                                                8,
                                                ["ico", "path", "size"]
                                              ),
                                            ]
                                        ),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick", "href", "aria-label", "theme"]
                                    )),
                                    [[fe, z.$T("link_menu_android")]]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ))
                      : y("", !0),
                    e($)
                      ? (s(),
                        d(
                          pe,
                          { key: 3, to: e(Te), custom: "" },
                          {
                            default: c(
                              ({ href: U, navigate: q }) =>
                                $_$() && [
                                  le(
                                    (s(),
                                    d(
                                      re,
                                      {
                                        onClick: (ee) => $e(q, ee),
                                        tag: "a",
                                        href: U,
                                        "aria-label": z.$T(
                                          "header_item_promo_tournaments"
                                        ),
                                        theme: e(C),
                                        narrow: "",
                                      },
                                      {
                                        default: c(
                                          () =>
                                            $_$() && [
                                              v(
                                                _e,
                                                {
                                                  ico: e(po).CUP,
                                                  path: e(_o),
                                                  size: e(j).l,
                                                },
                                                null,
                                                8,
                                                ["ico", "path", "size"]
                                              ),
                                            ]
                                        ),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick", "href", "aria-label", "theme"]
                                    )),
                                    [
                                      [
                                        fe,
                                        z.$T("header_item_promo_tournaments"),
                                      ],
                                    ]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ))
                      : y("", !0),
                    e(b)
                      ? (s(),
                        d(
                          pe,
                          { key: 4, to: e(Ie)(e(b)), custom: "" },
                          {
                            default: c(
                              ({ href: U, navigate: q }) =>
                                $_$() && [
                                  le(
                                    (s(),
                                    d(
                                      re,
                                      {
                                        onClick: (ee) => $e(q, ee),
                                        tag: "a",
                                        href: U,
                                        "aria-label": z.$T(
                                          "header_item_promo_lucky_wheel"
                                        ),
                                        theme: e(C),
                                        narrow: "",
                                      },
                                      {
                                        default: c(
                                          () =>
                                            $_$() && [
                                              v(
                                                _e,
                                                {
                                                  ico: e(mo).LUCKY_WHEEL,
                                                  path: e(ho),
                                                  size: e(j).l,
                                                },
                                                null,
                                                8,
                                                ["ico", "path", "size"]
                                              ),
                                            ]
                                        ),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick", "href", "aria-label", "theme"]
                                    )),
                                    [
                                      [
                                        fe,
                                        z.$T("header_item_promo_lucky_wheel"),
                                      ],
                                    ]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ))
                      : y("", !0),
                    e(t)
                      ? (s(),
                        d(
                          pe,
                          { key: 5, custom: "", to: e(Pe) },
                          {
                            default: c(
                              ({ href: U }) =>
                                $_$() && [
                                  v(
                                    re,
                                    {
                                      onClick:
                                        We[0] ||
                                        (We[0] = So(
                                          (q) =>
                                            $_$() && e(G)({ screen: e(He) }),
                                          ["prevent"]
                                        )),
                                      tag: "a",
                                      href: U,
                                      theme: e(Oe).accent,
                                      uppercase: e(R),
                                      class: se(e(xo)),
                                      size: e(f),
                                    },
                                    {
                                      default: c(
                                        () =>
                                          $_$() && [
                                            v(
                                              to,
                                              { size: e(k), weight: e(E) },
                                              {
                                                default: c(
                                                  () =>
                                                    $_$() && [
                                                      ce(me(z.$T(e($o))), 1),
                                                    ]
                                                ),
                                                _: 1,
                                              },
                                              8,
                                              ["size", "weight"]
                                            ),
                                          ]
                                      ),
                                      _: 2,
                                    },
                                    1032,
                                    [
                                      "href",
                                      "theme",
                                      "uppercase",
                                      "class",
                                      "size",
                                    ]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ))
                      : y("", !0),
                    v(
                      Yn,
                      {
                        triggerSize: e(f),
                        loginButtonUppercase: e(R),
                        textSize: e(k),
                        textWeight: e(E),
                      },
                      null,
                      8,
                      [
                        "triggerSize",
                        "loginButtonUppercase",
                        "textSize",
                        "textWeight",
                      ]
                    ),
                  ],
                  64
                ))
              : (s(),
                W(
                  ge,
                  { key: 3 },
                  [
                    v(e(h)),
                    v(Vo, null, {
                      default: c(
                        () =>
                          $_$() && [
                            e(zo)
                              ? (s(),
                                d(
                                  pe,
                                  {
                                    key: 0,
                                    to: e(K),
                                    class:
                                      "user-control-dashboard-reminder-button",
                                  },
                                  {
                                    default: c(
                                      () =>
                                        $_$() && [
                                          v(
                                            to,
                                            { size: e(j).m, uppercase: "" },
                                            {
                                              default: c(
                                                () =>
                                                  $_$() && [
                                                    ce(
                                                      me(
                                                        z.$T(
                                                          "main_complete_details"
                                                        )
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
                              : y("", !0),
                          ]
                      ),
                      _: 1,
                    }),
                    e(Uo)
                      ? (s(),
                        W(
                          ge,
                          { key: 0 },
                          [
                            v(et),
                            e(M)
                              ? (s(),
                                d(Po, { key: 0, theme: e(lo) }, null, 8, [
                                  "theme",
                                ]))
                              : y("", !0),
                          ],
                          64
                        ))
                      : y("", !0),
                    e(_) ? y("", !0) : (s(), d($t, { key: 1 })),
                    v(
                      pe,
                      {
                        key: "header_payment_authorized",
                        to: e(Le),
                        custom: "",
                      },
                      {
                        default: c(
                          ({ href: U, navigate: q }) =>
                            $_$() && [
                              v(
                                re,
                                {
                                  onClick: (ee) => $_$() && e(Ae)(q, ee),
                                  tag: "a",
                                  href: U,
                                  theme: e(Oe).accent,
                                  narrow: e(co),
                                  uppercase: e(A),
                                  size: e(f),
                                  class: "user-control-dashboard-payment",
                                },
                                {
                                  default: c(
                                    () =>
                                      $_$() && [
                                        e(co)
                                          ? (s(),
                                            d(
                                              _e,
                                              {
                                                key: 0,
                                                ico: e(Y),
                                                class:
                                                  "user-control-dashboard-payment__ico",
                                              },
                                              null,
                                              8,
                                              ["ico"]
                                            ))
                                          : (s(),
                                            d(
                                              to,
                                              {
                                                key: 1,
                                                size: e(k),
                                                weight: e(E),
                                              },
                                              {
                                                default: c(
                                                  () =>
                                                    $_$() && [
                                                      ce(me(z.$T(e(ne))), 1),
                                                    ]
                                                ),
                                                _: 1,
                                              },
                                              8,
                                              ["size", "weight"]
                                            )),
                                      ]
                                  ),
                                  _: 2,
                                },
                                1032,
                                [
                                  "onClick",
                                  "href",
                                  "theme",
                                  "narrow",
                                  "uppercase",
                                  "size",
                                ]
                              ),
                            ]
                        ),
                        _: 1,
                      },
                      8,
                      ["to"]
                    ),
                    v(Xn, { triggerButtonSize: e(f), rounded: !1 }, null, 8, [
                      "triggerButtonSize",
                    ]),
                    e(_)
                      ? (s(),
                        d(e(T), { key: 2, size: e(f), theme: e(lo) }, null, 8, [
                          "size",
                          "theme",
                        ]))
                      : y("", !0),
                    e($)
                      ? (s(),
                        d(
                          pe,
                          { key: 3, to: e(Te), custom: "" },
                          {
                            default: c(
                              ({ href: U, navigate: q }) =>
                                $_$() && [
                                  le(
                                    (s(),
                                    d(
                                      re,
                                      {
                                        onClick: (ee) => $e(q, ee),
                                        tag: "a",
                                        href: U,
                                        "aria-label": z.$T(
                                          "header_item_promo_tournaments"
                                        ),
                                        theme: e(C),
                                        narrow: "",
                                      },
                                      {
                                        default: c(
                                          () =>
                                            $_$() && [
                                              v(
                                                _e,
                                                {
                                                  ico: e(po).CUP,
                                                  path: e(_o),
                                                  size: e(j).l,
                                                },
                                                null,
                                                8,
                                                ["ico", "path", "size"]
                                              ),
                                            ]
                                        ),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick", "href", "aria-label", "theme"]
                                    )),
                                    [
                                      [
                                        fe,
                                        z.$T("header_item_promo_tournaments"),
                                      ],
                                    ]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ))
                      : y("", !0),
                    e(b)
                      ? (s(),
                        d(
                          pe,
                          { key: 4, to: e(Ie)(e(b)), custom: "" },
                          {
                            default: c(
                              ({ href: U, navigate: q }) =>
                                $_$() && [
                                  le(
                                    (s(),
                                    d(
                                      re,
                                      {
                                        onClick: (ee) => $e(q, ee),
                                        tag: "a",
                                        href: U,
                                        "aria-label": z.$T(
                                          "header_item_promo_lucky_wheel"
                                        ),
                                        theme: e(C),
                                        narrow: "",
                                      },
                                      {
                                        default: c(
                                          () =>
                                            $_$() && [
                                              v(
                                                _e,
                                                {
                                                  ico: e(mo).LUCKY_WHEEL,
                                                  path: e(ho),
                                                  size: e(j).l,
                                                },
                                                null,
                                                8,
                                                ["ico", "path", "size"]
                                              ),
                                            ]
                                        ),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick", "href", "aria-label", "theme"]
                                    )),
                                    [
                                      [
                                        fe,
                                        z.$T("header_item_promo_lucky_wheel"),
                                      ],
                                    ]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ))
                      : y("", !0),
                  ],
                  64
                )),
            e(Eo)
              ? (s(),
                d(Wt, { key: 4, theme: e(w), size: e(f) }, null, 8, [
                  "theme",
                  "size",
                ]))
              : e(L)
              ? (s(), d(Zn, { key: 5, size: e(f) }, null, 8, ["size"]))
              : y("", !0),
            e(eo)
              ? le(
                  (s(),
                  d(
                    re,
                    {
                      key: 6,
                      onClick: e(Ne),
                      "aria-label": z.$T("header_callback"),
                      theme: e(C),
                      narrow: "",
                      class: "user-control-dashboard-callback",
                    },
                    {
                      default: c(
                        () =>
                          $_$() && [
                            v(
                              _e,
                              {
                                ico: e(Ye).PHONE,
                                size: e(j).s,
                                class: "user-control-dashboard-callback__ico",
                              },
                              null,
                              8,
                              ["ico", "size"]
                            ),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["onClick", "aria-label", "theme"]
                  )),
                  [[fe, z.$T("header_callback")]]
                )
              : y("", !0),
            e(J)
              ? le(
                  (s(),
                  d(
                    re,
                    {
                      key: 7,
                      onClick: Wo,
                      "aria-label": z.$T("support_multi_button_title"),
                      theme: e(C),
                      narrow: "",
                      class: "user-control-dashboard__item",
                    },
                    {
                      default: c(
                        () =>
                          $_$() && [
                            v(
                              _e,
                              { ico: e(Ye).CUSTOMER_SERVICE, size: e(j).m },
                              null,
                              8,
                              ["ico", "size"]
                            ),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["aria-label", "theme"]
                  )),
                  [[fe, z.$T("support_multi_button_title")]]
                )
              : y("", !0),
          ])
        );
      };
    },
  }),
  es = de(Gt, [["__scopeId", "data-v-423678c9"]]);
export {
  Wt as AppSettingsToolbar,
  es as UserControlDashboard,
  Zt as _sfc_main,
  Mt as useResizableList,
  At as useTemplateResizeObserver,
};
