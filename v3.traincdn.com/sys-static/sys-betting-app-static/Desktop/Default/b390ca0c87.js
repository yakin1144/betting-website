import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./c7760f223b.js",
      "./entry-50afb6f36c.js",
      "./d37a535062.js",
      "./32064d16d1.js",
      "./3fb5c2806a.js",
      "./5389ac53d9.js",
      "./10dcfb9c91.js",
      "./11286bfc75.js",
      "./9de70556bb.js",
      "./7fd3152d11.js",
      "./1af6a171a2.js",
      "./978e9c7c45.js",
      "./55bccab962.css",
      "./3d0608b82f.js",
      "./a042466034.js",
      "./8a75424771.js",
      "./274a688601.css",
      "./58141b7065.js",
      "./4b18613dac.js",
      "./f8b8bc9086.js",
      "./92d7aaf3bf.js",
      "./a0e9c441b8.js",
      "./bb0d3b59f5.js",
      "./c1a10e1b8c.css",
      "./6d5ad1c269.css",
      "./35e3a5959f.js",
      "./9afba2de88.js",
      "./6c95dc77cd.js",
      "./8403102940.js",
      "./f5056b878c.js",
      "./1ae929339b.js",
      "./ca00f22438.css",
      "./3233f19766.js",
      "./ffbea8575c.js",
      "./ea449998ee.css",
      "./190448d3a2.js",
      "./f3f285b756.js",
      "./d046664d0b.js",
      "./ed4f93061a.js",
      "./d323debb9e.css",
      "./ac9aa31026.js",
      "./205e0c7eee.css",
      "./86e625d686.js",
      "./b0f9ee5637.js",
      "./7fd1140098.css",
      "./bb970e93c8.css",
      "./148e0c87d2.js",
      "./57dd37fcbe.css",
      "./166d83902c.js",
      "./4a993370c6.js",
      "./2432a9e803.css",
      "./980383c012.js",
      "./3bb7d6d4b3.css",
    ])
) => $_$() && i.map((i) => $_$() && d[i]);
import {
  _export_sfc as te,
  useCouponStore as kt,
  useCouponAnalytics as St,
  loadCouponConfigsDesktop as yt,
  __vitePreload as f,
  OFFICE_APP_MICRO_FRONTEND_URL as we,
  V3_HOST_APP_MICRO_FRONTEND_URL as ae,
  useExpressDaySettings as Te,
  iconColoredSvg as he,
  loadRightSideConfigDesktop as Bt,
  WELCOME_APP_MICRO_FRONTEND_URL as be,
  GAMES_MICRO_FRONTEND_URL as ft,
  useShowRegistrationForm as wt,
  useRouteAccess as Tt,
} from "./entry-50afb6f36c.js";
import {
  runtimeCore_esmBundler_defineComponent as oe,
  useGlobalStore as ve,
  useRouterMethodsWithLang as Re,
  runtimeCore_esmBundler_resolveComponent as u,
  runtimeCore_esmBundler_resolveDirective as Ae,
  runtimeCore_esmBundler_createElementBlock as D,
  runtimeCore_esmBundler_openBlock as o,
  runtimeCore_esmBundler_createElementVNode as a,
  runtimeCore_esmBundler_withDirectives as ee,
  runtimeCore_esmBundler_createBlock as n,
  reactivity_esmBundler_unref as e,
  theme_constants_themeType as U,
  runtimeCore_esmBundler_withCtx as i,
  runtimeCore_esmBundler_createVNode as t,
  size_constants_sizeType as T,
  ICON_LOGOS_PATH as Ce,
  iconLogos as ke,
  reactivity_esmBundler_ref as vt,
  runtimeCore_esmBundler_computed as l,
  execAsync as Ee,
  alignType as Rt,
  stopElements as At,
  runtimeDom_esmBundler_withModifiers as De,
  runtimeCore_esmBundler_createTextVNode as P,
  shared_esmBundler_toDisplayString as $,
  ColorType as Et,
  reactivity_esmBundler_isRef as Se,
  shared_esmBundler_normalizeClass as le,
  iconName as Y,
  isDef as Dt,
  index_getConfig as Ut,
  MEDIA_EXTENSIONS as Z,
  runtimeCore_esmBundler_defineAsyncComponent as w,
  index_injectRemoteComponent as E,
  index_useMediaUrl as Wt,
  index_getConfigs as Ue,
  runtimeCore_esmBundler_createCommentVNode as r,
  shared_esmBundler_normalizeProps as Q,
  runtimeCore_esmBundler_useTemplateRef as Ot,
  index_useAnalytics as $t,
  runtimeCore_esmBundler_onMounted as It,
  runtimeCore_esmBundler_onUnmounted as Vt,
  runtimeDom_esmBundler_vShow as ye,
  nuxtLink_default as Nt,
  clientOnly_default as Lt,
  runtimeCore_esmBundler_Fragment as Pt,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { withAsyncContext as We } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  DownloadAppWidgetLoader as ce,
  useCompactWidgetsData as Mt,
  useRightSideData as Oe,
  useEmailSubscriptionWidget as $e,
  RightSideCompactWidgetsDropdown as A,
  useBonusWidget as zt,
  useNewUserBonusWidget as Ft,
  useDownloadAppWidgetVisibleControls as Gt,
  useRegistrationWidgetAnalytics as Ht,
  _sfc_main as xt,
} from "./d37a535062.js";
import { RegCallSource as Be } from "./32064d16d1.js";
import { useRegistrationEventsAnalytics as Kt } from "./166d83902c.js";
const Xt = { class: "column-apps" },
  jt = { class: "column-apps__item" },
  qt = { class: "column-apps__item" },
  Jt = oe({
    __name: "ColumnApps",
    setup(p) {
      $_$();
      const h = ve(),
        { routerPushWithLang: g } = Re(() => h.language),
        m = () => g({ name: "mobileExternalApps" });
      return (b, y) => {
        $_$();
        const _ = u("UiIco"),
          C = u("UiButton"),
          k = Ae("tooltip");
        return (
          o(),
          D("ul", Xt, [
            a("li", jt, [
              ee(
                (o(),
                n(
                  C,
                  {
                    onClick: m,
                    theme: e(U).primary,
                    class: "column-apps__link",
                    "aria-label": "ios app",
                  },
                  {
                    default: i(
                      () =>
                        $_$() && [
                          t(
                            _,
                            { ico: e(ke).APPLE, path: e(Ce), size: e(T).m },
                            null,
                            8,
                            ["ico", "path", "size"]
                          ),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["theme"]
                )),
                [[k, "ios app"]]
              ),
            ]),
            a("li", qt, [
              ee(
                (o(),
                n(
                  C,
                  {
                    onClick: m,
                    theme: e(U).primary,
                    title: "android app",
                    class: "column-apps__link",
                    "aria-label": "android app",
                  },
                  {
                    default: i(
                      () =>
                        $_$() && [
                          t(
                            _,
                            { ico: e(ke).ANDROID, path: e(Ce), size: e(T).m },
                            null,
                            8,
                            ["ico", "path", "size"]
                          ),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["theme"]
                )),
                [[k, "android app"]]
              ),
            ]),
          ])
        );
      };
    },
  }),
  Qt = te(Jt, [["__scopeId", "data-v-9fe5205d"]]),
  Yt = ["aria-label"],
  Zt = { class: "one-click-bet__legend" },
  fe = 0,
  eo = oe({
    __name: "OneClickBet",
    props: { isCyber: { type: Boolean } },
    async setup(p) {
      $_$();
      let h, g, m, b;
      const y = p,
        _ = kt(),
        C = vt(0),
        { trackOneClick: k, trackOneClickBetSave: M } = St(),
        z = l(() => _.getAmountStep),
        I = l(() => _.getAmountStepMore),
        F = l(() => _.getAmountStepLess),
        S = l({
          get() {
            $_$();
            return e(C);
          },
          set(d) {
            C.value = d;
          },
        }),
        V = l(() => _.settings.isActiveOneClick),
        W = l({
          get() {
            $_$();
            return e(V);
          },
          set() {
            $_$();
            const d = !e(V);
            _.couponSettingsSetIsActiveOneClick(d),
              k(d, y.isCyber ? "v3_Киберспорт" : void 0);
          },
        }),
        N = l(() => $_$() && e(S) > fe),
        G = () => {
          $_$();
          Dt(e(S)) && e(N) && _.couponSettingsSetOneClickAmount(e(S)),
            M(y.isCyber ? "v3_Киберспорт" : void 0);
        },
        H = () => {
          C.value = _.oneClickAmount;
        },
        x = (([m, b] = We(() => yt())),
        (m = (([h, g] = Ee(() => m)), (h = await h), g(), h)),
        b(),
        m)().default;
      return (d, v) => {
        $_$();
        const K = u("UiIco"),
          B = u("UiSelection"),
          s = u("UiCaption"),
          se = u("UiNumberInput"),
          X = u("UiButton"),
          j = u("UiDropdownContent"),
          q = u("UiDropdown");
        return (
          o(),
          D("div", null, [
            t(
              q,
              {
                onOpen: H,
                stopElementsStore: e(At),
                hoverable: "",
                align: e(Rt).START,
                direction: "left",
                triangle: !1,
                class: "one-click-bet",
              },
              {
                customTrigger: i(
                  ({ isOpen: O }) =>
                    $_$() && [
                      a(
                        "div",
                        {
                          "aria-label": d.$T("coupon_settings_one_click_bet"),
                          class: le([
                            { "one-click-bet__trigger--is-open": O },
                            "one-click-bet__trigger one-click-bet-trigger",
                          ]),
                        },
                        [
                          t(
                            K,
                            {
                              ico: e(Y).ONE_CLICK,
                              class: "one-click-bet-trigger__ico",
                            },
                            null,
                            8,
                            ["ico"]
                          ),
                          t(
                            B,
                            {
                              modelValue: e(W),
                              "onUpdate:modelValue":
                                v[0] ||
                                (v[0] = (J) =>
                                  $_$() && Se(W) ? (W.value = J) : null),
                              type: "tumbler",
                              class: "one-click-bet__tumbler",
                              icoSize: e(T).s,
                              theme: e(x).couponSelectionTumblerTheme,
                            },
                            null,
                            8,
                            ["modelValue", "icoSize", "theme"]
                          ),
                        ],
                        10,
                        Yt
                      ),
                    ]
                ),
                customContent: i(
                  () =>
                    $_$() && [
                      t(
                        j,
                        {
                          rounded: !1,
                          class:
                            "one-click-bet__dropdown one-click-bet-dropdown",
                        },
                        {
                          default: i(
                            () =>
                              $_$() && [
                                a(
                                  "form",
                                  {
                                    onSubmit: De(G, ["prevent"]),
                                    class: "one-click-bet__form",
                                  },
                                  [
                                    t(
                                      s,
                                      {
                                        class: "one-click-bet__header",
                                        uppercase: "",
                                        size: e(T).xs,
                                      },
                                      {
                                        default: i(
                                          () =>
                                            $_$() && [
                                              P(
                                                $(
                                                  d.$T(
                                                    "coupon_settings_one_click_bet"
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
                                    a("fieldset", null, [
                                      a("legend", Zt, [
                                        t(
                                          s,
                                          {
                                            size: e(T).xs,
                                            color: e(Et).clrDecent,
                                          },
                                          {
                                            default: i(
                                              () =>
                                                $_$() && [
                                                  P(
                                                    $(
                                                      d.$T(
                                                        "coupon_set_one_click_bet_sum"
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ]
                                            ),
                                            _: 1,
                                          },
                                          8,
                                          ["size", "color"]
                                        ),
                                      ]),
                                      t(
                                        se,
                                        {
                                          modelValue: e(S),
                                          "onUpdate:modelValue":
                                            v[1] ||
                                            (v[1] = (O) =>
                                              $_$() && Se(S)
                                                ? (S.value = O)
                                                : null),
                                          accuracy: 2,
                                          step: e(z),
                                          stepMore: e(I),
                                          stepLess: e(F),
                                          min: fe,
                                          unsigned: "",
                                          theme: e(U).gray100,
                                          buttonLessTooltip:
                                            d.$T("main_spinner_less"),
                                          buttonMoreTooltip:
                                            d.$T("main_spinner_more"),
                                        },
                                        null,
                                        8,
                                        [
                                          "modelValue",
                                          "step",
                                          "stepMore",
                                          "stepLess",
                                          "theme",
                                          "buttonLessTooltip",
                                          "buttonMoreTooltip",
                                        ]
                                      ),
                                    ]),
                                    t(
                                      X,
                                      {
                                        theme: e(U).accent,
                                        type: "submit",
                                        disabled: !e(N),
                                        block: "",
                                        class: "one-click-bet__save",
                                      },
                                      {
                                        default: i(
                                          () =>
                                            $_$() && [
                                              t(
                                                s,
                                                { size: e(T).m },
                                                {
                                                  default: i(
                                                    () =>
                                                      $_$() && [
                                                        P(
                                                          $(
                                                            d.$T(
                                                              "main_button_save"
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
                                      ["theme", "disabled"]
                                    ),
                                  ],
                                  32
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
              ["stopElementsStore", "align"]
            ),
          ])
        );
      };
    },
  }),
  to = te(eo, [["__scopeId", "data-v-fa16f377"]]),
  oo = oe({
    name: "RatingOfBookmakers",
    setup() {
      $_$();
      return { companyName: Ut(1), MEDIA_EXTENSIONS: Z };
    },
  }),
  io = { class: "rating-of-bookmakers" },
  so = { class: "rating-of-bookmakers__pic" },
  no = ["srcset"],
  ro = ["src"],
  ao = {
    class: "rating-of-bookmakers__description rating-of-bookmakers-description",
  },
  lo = ["src", "alt"],
  co = { class: "rating-of-bookmakers-description__info" };
function _o(p, h, g, m, b, y) {
  $_$();
  return (
    o(),
    D("div", io, [
      a("picture", so, [
        a(
          "source",
          {
            srcset: p.$mediaUrl(
              "right_side_rating_of_bookmakers_logo",
              p.MEDIA_EXTENSIONS.WEBP
            ),
            type: "image/webp",
          },
          null,
          8,
          no
        ),
        a(
          "img",
          {
            src: p.$mediaUrl("right_side_rating_of_bookmakers_logo"),
            alt: "ratingLogo",
            class: "rating-of-bookmakers__img",
          },
          null,
          8,
          ro
        ),
      ]),
      a("div", ao, [
        a(
          "img",
          {
            src: p.$mediaUrl("header_logo_light"),
            alt: p.companyName,
            class: "rating-of-bookmakers-description__logo",
          },
          null,
          8,
          lo
        ),
        a("p", co, $(p.$T("menu_section_rating_title")), 1),
      ]),
    ])
  );
}
const uo = te(oo, [
    ["render", _o],
    ["__scopeId", "data-v-2a3463c5"],
  ]),
  po = { class: "right-side-compact-widgets" },
  mo = { class: "right-side-compact-widgets__content" },
  go = { class: "right-side-compact-widgets__content" },
  ho = { class: "right-side-compact-widgets__content" },
  bo = { class: "right-side-compact-widgets__content" },
  Co = { class: "right-side-compact-widgets__content" },
  ko = { class: "right-side-compact-widgets__content" },
  So = { class: "right-side-compact-widgets__content" },
  yo = oe({
    __name: "RightSideCompactWidgets",
    props: { imageType: {} },
    setup(p) {
      $_$();
      const h = p,
        g = w({
          loader: () =>
            f(
              () => import("./c7760f223b.js"),
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
              import.meta.url
            ),
          loadingComponent: ce,
        }),
        m = w({
          loader: () =>
            f(
              () => import("./3d0608b82f.js").then((s) => s.BonusWidget),
              __vite__mapDeps([
                13, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16,
              ]),
              import.meta.url
            ),
        }),
        b = w({
          loader: () =>
            f(
              () => import("./3d0608b82f.js").then((s) => s.NewUserBonusWidget),
              __vite__mapDeps([
                13, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16,
              ]),
              import.meta.url
            ),
        }),
        y = w({
          loader: () =>
            f(
              () => import("./58141b7065.js"),
              __vite__mapDeps([
                17, 18, 1, 8, 9, 10, 19, 20, 21, 22, 6, 7, 23, 24,
              ]),
              import.meta.url
            ),
        }),
        _ = E(we, "EmailSubscription"),
        C = E(ae, "SupportBanner"),
        k = Wt(),
        {
          sellCoupons: M,
          isShowBonusWidget: z,
          isShowNewUserBonusWidget: I,
          isShowSaleCouponWidget: F,
          isDownloadAppWidgetVisible: S,
        } = Mt(),
        { isAnyAccumulatorOfTheDayEnabled: V } = Te(),
        [W, N, G, H] = Ue(1398, 172, 2035, 2019),
        { isRightSectionHidden: L } = Oe({ hasRegistration: !N }),
        ie = l(() => $_$() && W && e(L)),
        x = l(() => $_$() && G && e(L)),
        d = l(() => $_$() && H && e(L) && e(V)),
        { isShowEmailSubscription: v, hideEmailWidget: K } = $e(),
        B = l(
          () =>
            $_$() &&
            {
              image: {
                saleCoupon: k(
                  "betting_common_bonus_widget_coupon_small",
                  Z.SVG
                ),
                bonusWidget: k(
                  "betting_common_bonus_widget_present_small",
                  Z.SVG
                ),
                downloadAppWidget: k(
                  "betting_common_bonus_widget_mobile_small",
                  Z.SVG
                ),
              },
              ico: {
                saleCoupon: Y.TICKET_DOLLARS,
                bonusWidget: Y.BONUS,
                downloadAppWidget: Y.PHONE_REG,
                expressDayWidget: Y.BAR_CARD,
              },
            }[h.imageType]
        );
      return (s, se) => {
        $_$();
        const X = u("UiCaption"),
          j = u("UiButton"),
          q = u("InviteFriendBanner");
        return (
          o(),
          D("div", po, [
            e(d)
              ? (o(),
                n(
                  A,
                  Q({
                    key: 0,
                    class: "right-side-compact-widgets__item",
                    tooltip: s.$T("main_popular_accumulators_of_the_day"),
                    [s.imageType || ""]: e(B).expressDayWidget,
                    theme: e(U).gray30,
                  }),
                  {
                    default: i(
                      ({ pinned: O, updatePinned: J }) =>
                        $_$() && [
                          a("div", mo, [
                            t(
                              e(y),
                              { "onUpdate:pinned": J, pinned: O },
                              null,
                              8,
                              ["onUpdate:pinned", "pinned"]
                            ),
                          ]),
                        ]
                    ),
                    _: 1,
                  },
                  16,
                  ["tooltip", "theme"]
                ))
              : r("", !0),
            e(F)
              ? (o(),
                n(
                  A,
                  Q({
                    key: 1,
                    class: "right-side-compact-widgets__item",
                    tooltip: s.$T("coupon_sell_coupons"),
                    [s.imageType || ""]: e(B).saleCoupon,
                  }),
                  {
                    default: i(
                      () =>
                        $_$() && [
                          t(
                            j,
                            {
                              onClick: e(M),
                              class: "right-side-compact-widgets__sell-coupons",
                              "aria-label": s.$T("coupon_sell_coupons"),
                              theme: e(U).primary,
                              rounded: !1,
                            },
                            {
                              default: i(
                                () =>
                                  $_$() && [
                                    t(
                                      X,
                                      { size: e(T).m },
                                      {
                                        default: i(
                                          () =>
                                            $_$() && [
                                              P(
                                                $(s.$T("coupon_sell_coupons")),
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
                            ["onClick", "aria-label", "theme"]
                          ),
                        ]
                    ),
                    _: 1,
                  },
                  16,
                  ["tooltip"]
                ))
              : r("", !0),
            e(z)
              ? (o(),
                n(
                  A,
                  Q({
                    key: 2,
                    class: "right-side-compact-widgets__item",
                    tooltip: s.$T("betting_rightside_bonus_widget_title"),
                    [s.imageType || ""]: e(B).bonusWidget,
                  }),
                  {
                    default: i(() => $_$() && [a("div", go, [t(e(m))])]),
                    _: 1,
                  },
                  16,
                  ["tooltip"]
                ))
              : r("", !0),
            e(I)
              ? (o(),
                n(
                  A,
                  Q({
                    key: 3,
                    class: "right-side-compact-widgets__item",
                    tooltip: s.$T("betting_rightside_bonus_widget_title"),
                    [s.imageType || ""]: e(B).bonusWidget,
                  }),
                  {
                    default: i(() => $_$() && [a("div", ho, [t(e(b))])]),
                    _: 1,
                  },
                  16,
                  ["tooltip"]
                ))
              : r("", !0),
            e(S)
              ? (o(),
                n(
                  A,
                  Q({
                    key: 4,
                    class: "right-side-compact-widgets__item",
                    tooltip: s.$T("download_app_title"),
                    [s.imageType || ""]: e(B).downloadAppWidget,
                  }),
                  {
                    default: i(
                      () => $_$() && [a("div", bo, [t(e(g), { closable: !1 })])]
                    ),
                    _: 1,
                  },
                  16,
                  ["tooltip"]
                ))
              : r("", !0),
            e(v)
              ? (o(),
                n(
                  A,
                  {
                    key: 5,
                    class: "right-side-compact-widgets__item",
                    image: s.$mediaUrl(
                      "betting_common_bonus_widget_mail_small",
                      e(Z).SVG
                    ),
                    tooltip: s.$T("email_subscription_title"),
                  },
                  {
                    default: i(
                      () =>
                        $_$() && [
                          a("div", Co, [
                            t(e(_), { onHide: e(K) }, null, 8, ["onHide"]),
                          ]),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["image", "tooltip"]
                ))
              : r("", !0),
            e(ie)
              ? (o(),
                n(
                  A,
                  {
                    key: 6,
                    class: "right-side-compact-widgets__item",
                    coloredSvg: e(he).SUPPORT,
                    isReverseIcon: "",
                    tooltip: s.$T("support_multi_button_title"),
                  },
                  {
                    default: i(
                      () =>
                        $_$() && [
                          a("div", ko, [t(e(C), { isRoundedTopRight: !1 })]),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["coloredSvg", "tooltip"]
                ))
              : r("", !0),
            e(x)
              ? (o(),
                n(
                  A,
                  {
                    key: 7,
                    class: "right-side-compact-widgets__item",
                    coloredSvg: e(he).INVITE_FRIENDS_BONUS_COMPACT,
                    tooltip: s.$T("get_reward"),
                  },
                  {
                    default: i(
                      () =>
                        $_$() && [
                          a("div", So, [t(q, { isRoundedTopRight: !1 })]),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["coloredSvg", "tooltip"]
                ))
              : r("", !0),
          ])
        );
      };
    },
  }),
  Bo = te(yo, [["__scopeId", "data-v-91ea3bea"]]),
  fo = { class: "right-side" },
  wo = { key: 0, id: "registration-widget-app" },
  To = { key: 1, class: "right-side-controls__bet" },
  vo = oe({
    __name: "RightSide",
    async setup(p, { expose: h }) {
      $_$();
      let g, m, b, y;
      const _ = Ot("rightSideMedia");
      h({ rightSideMedia: _ });
      const {
          config: {
            uiColumnToggleButtonTheme: C,
            uiColumnToggleButtonDecent: k,
            uiColumnToggleButtonClass: M,
            uiColumnToggleButtonIconSize: z,
            showItemsCompactView: I,
            widgetLogoType: F,
            showRightSideReg: S,
            downloadAppWidgetClosable: V,
          },
        } = (([b, y] = We(() => Bt())),
        (b = (([g, m] = Ee(() => b)), (g = await g), m(), g)),
        y(),
        b)(),
        W = w(() =>
          f(
            () => import("./35e3a5959f.js").then((c) => c.CouponAppContainer),
            __vite__mapDeps([
              25, 3, 1, 4, 26, 27, 22, 6, 7, 8, 9, 10, 28, 5, 11, 29, 30, 31,
              32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
              48, 49, 50,
            ]),
            import.meta.url
          )
        ),
        N = w({
          loader: () =>
            f(
              () => import("./c7760f223b.js"),
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
              import.meta.url
            ),
          loadingComponent: ce,
        }),
        G = w({
          loader: () =>
            f(
              () => import("./3d0608b82f.js").then((c) => c.BonusWidget),
              __vite__mapDeps([
                13, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16,
              ]),
              import.meta.url
            ),
        }),
        H = w({
          loader: () =>
            f(
              () => import("./3d0608b82f.js").then((c) => c.NewUserBonusWidget),
              __vite__mapDeps([
                13, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16,
              ]),
              import.meta.url
            ),
        }),
        L = w({
          loader: () =>
            f(
              () => import("./980383c012.js"),
              __vite__mapDeps([
                51, 19, 1, 18, 8, 9, 10, 20, 21, 22, 6, 7, 23, 52,
              ]),
              import.meta.url
            ),
        }),
        ie = E(we, "EmailSubscription"),
        x = E(be, "RegistrationTrustlyDesktop"),
        d = E(be, "RegistrationApp"),
        v = E(ft, "GameWidgets"),
        K = E(ae, "SupportBanner"),
        B = E(ae, "InviteFriendBanner"),
        [s, se, X, j, q, O, J = [], Ie, Ve, Ne] = Ue(
          266,
          263,
          1398,
          172,
          2091,
          2035,
          586,
          -1012,
          2019,
          2224
        ),
        { showRegistrationForm: Le } = wt(),
        _e = ve(),
        { useLangLocation: Pe } = Re(() => _e.language),
        { isShowBonusWidget: Me } = zt(),
        { isShowNewUserBonusWidget: ze } = Ft(),
        Fe = Pe({ name: "registration" }),
        de = l(() => _e.isUserAuth),
        { hasRouteAccess: Ge } = Tt(),
        He = $t(),
        { isDownloadAppWidgetVisibleInRightMenu: xe } = Gt({
          isSyncVisibleFlagBeforeMount: !0,
        }),
        { trackRegistrationPageCall: Ke } = Kt(),
        { trackClickOnRightSideRegister: Xe } = Ht(),
        {
          isShowOneClickBet: je,
          isRightSectionHidden: ne,
          isRightSectionVisible: R,
          isRightSectionHover: ue,
          isRegistrationShown: pe,
          isRightSideRegistrationButtonVisible: qe,
          isRightSideBetConstructorVisible: Je,
          columnToggleButtonTooltip: Qe,
          couponColumnControlsClasses: Ye,
          compactViewToggle: Ze,
          isRightSideBookmakerRatingVisible: et,
        } = Oe({ hasRegistration: !j && S }),
        { isAnyAccumulatorOfTheDayEnabled: tt } = Te(),
        ot = l(() => $_$() && !e(ne) && Ve && e(tt)),
        it = Ge(8),
        st = l(() => $_$() && e(de) && e(R) && it),
        nt = J.includes(Ie.code),
        rt = l(() => $_$() && se && !nt && e(R) && !e(de)),
        at = () => {
          $_$();
          Ke({ screen: e(pe) ? Be.MenuLeftFull : Be.MenuLeftCollapsed }),
            Xe(),
            q || Le({ locationForAnalytics: "right_side" }),
            He.modules.yandexEvents.trackRegSidebar();
        },
        lt = l(() => $_$() && e(Me) && e(R)),
        ct = l(() => $_$() && e(ze) && e(R)),
        { isShowEmailSubscription: _t, hideEmailWidget: dt } = $e(),
        ut = l(() => $_$() && X && !e(ne)),
        pt = l(() => (($_$() && !e(ue)) || !e(ne) ? "end" : "start")),
        mt = l(() => $_$() && O && e(R));
      return (
        It(() => {
          var c;
          return (c = window.coreBus) == null
            ? void 0
            : c.emit("right-side:active", !0);
        }),
        Vt(() => {
          var c;
          return (c = window.coreBus) == null
            ? void 0
            : c.emit("right-side:active", !1);
        }),
        (c, Ro) => {
          $_$();
          const gt = u("UiColumnToggleButton"),
            me = u("UiCaption"),
            ge = u("UiButton"),
            ht = Nt,
            re = Lt,
            bt = Ae("tooltip");
          return (
            o(),
            D("aside", fo, [
              ee(
                t(
                  gt,
                  {
                    onClick: e(Ze),
                    isHidden: e(ne),
                    hideTo: e(pt),
                    compact: e(ue),
                    textFixBlock: c.$T("main_fix_block"),
                    textHideBlock: c.$T("main_hide_block"),
                    "aria-label": c.$T("main_toggle_text"),
                    iconSize: e(z),
                    theme: e(C),
                    decent: e(k),
                    class: le({ "right-side-button": e(M) }),
                  },
                  null,
                  8,
                  [
                    "onClick",
                    "isHidden",
                    "hideTo",
                    "compact",
                    "textFixBlock",
                    "textHideBlock",
                    "aria-label",
                    "iconSize",
                    "theme",
                    "decent",
                    "class",
                  ]
                ),
                [[bt, e(Qe)]]
              ),
              t(xt, { ref_key: "rightSideMedia", ref: _ }, null, 512),
              e(rt) ? (o(), n(e(x), { key: 0 })) : r("", !0),
              ee(
                a(
                  "div",
                  null,
                  [
                    e(Ne)
                      ? (o(), D("div", wo))
                      : (o(),
                        n(e(d), { key: 1, registrationLayout: "widget" })),
                  ],
                  512
                ),
                [[ye, e(pe)]]
              ),
              a(
                "div",
                { class: le([e(Ye), "right-side-controls"]) },
                [
                  !e(R) && e(I)
                    ? (o(),
                      n(
                        Bo,
                        {
                          key: 0,
                          imageType: e(F),
                          class: "right-side-controls__widgets",
                        },
                        null,
                        8,
                        ["imageType"]
                      ))
                    : r("", !0),
                  e(je) && e(I) ? (o(), D("div", To, [t(to)])) : r("", !0),
                  t(e(W)),
                  e(qe)
                    ? (o(),
                      n(
                        ht,
                        { key: 2, to: e(Fe), custom: "" },
                        {
                          default: i(
                            ({ href: Ct }) =>
                              $_$() && [
                                t(
                                  ge,
                                  {
                                    onClick: De(at, ["prevent"]),
                                    tag: "a",
                                    href: Ct,
                                    theme: e(U).accent,
                                    narrow: "",
                                    class:
                                      "right-side-controls__register right-side-register-button",
                                  },
                                  {
                                    default: i(
                                      () =>
                                        $_$() && [
                                          t(
                                            me,
                                            {
                                              size: e(T).xs,
                                              class:
                                                "right-side-register-button__caption",
                                            },
                                            {
                                              default: i(
                                                () =>
                                                  $_$() && [P($(c.$T(e(s))), 1)]
                                              ),
                                              _: 1,
                                            },
                                            8,
                                            ["size"]
                                          ),
                                        ]
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  ["href", "theme"]
                                ),
                              ]
                          ),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ))
                    : r("", !0),
                ],
                2
              ),
              e(ot) ? (o(), n(e(L), { key: 1 })) : r("", !0),
              t(re, null, {
                default: i(
                  () =>
                    $_$() && [
                      e(st)
                        ? (o(), n(e(v), { key: 0, id: "games-app-widgets" }))
                        : r("", !0),
                      e(lt) ? (o(), n(e(G), { key: 1 })) : r("", !0),
                      e(ct) ? (o(), n(e(H), { key: 2 })) : r("", !0),
                    ]
                ),
                _: 1,
              }),
              t(re, null, {
                fallback: i(
                  () => $_$() && [e(R) ? (o(), n(ce, { key: 0 })) : r("", !0)]
                ),
                default: i(
                  () =>
                    $_$() && [
                      t(e(N), { visible: e(xe), closable: e(V) }, null, 8, [
                        "visible",
                        "closable",
                      ]),
                    ]
                ),
                _: 1,
              }),
              t(re, null, {
                default: i(
                  () =>
                    $_$() && [
                      e(et)
                        ? (o(), n(uo, { key: 0, class: "right-side__rating" }))
                        : r("", !0),
                      e(Je)
                        ? (o(),
                          D(
                            Pt,
                            { key: 1 },
                            [
                              t(
                                ge,
                                { theme: e(U).primary },
                                {
                                  default: i(
                                    () =>
                                      $_$() && [
                                        t(
                                          me,
                                          { size: e(T).m },
                                          {
                                            default: i(
                                              () =>
                                                $_$() && [
                                                  P(
                                                    $(
                                                      c.$T(
                                                        "menu_section_bets_generator"
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
                                ["theme"]
                              ),
                              t(Qt),
                            ],
                            64
                          ))
                        : r("", !0),
                      e(ut) ? (o(), n(e(K), { key: 2 })) : r("", !0),
                      e(mt) ? (o(), n(e(B), { key: 3 })) : r("", !0),
                      e(_t)
                        ? ee(
                            (o(),
                            n(e(ie), { key: 4, onHide: e(dt) }, null, 8, [
                              "onHide",
                            ])),
                            [[ye, e(R)]]
                          )
                        : r("", !0),
                    ]
                ),
                _: 1,
              }),
            ])
          );
        }
      );
    },
  }),
  $o = te(vo, [["__scopeId", "data-v-14910c11"]]);
export { $o as RightSide };
