import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as $,
  runtimeCore_esmBundler_resolveComponent as w,
  runtimeCore_esmBundler_createBlock as S,
  runtimeCore_esmBundler_openBlock as h,
  reactivity_esmBundler_unref as o,
  theme_constants_themeType as O,
  runtimeCore_esmBundler_withCtx as f,
  runtimeCore_esmBundler_createVNode as I,
  runtimeCore_esmBundler_createTextVNode as K,
  shared_esmBundler_toDisplayString as Y,
  size_constants_sizeType as L,
  index_injectRemoteComponent as Ro,
  router_useRoute as Mo,
  runtimeDom_esmBundler_withModifiers as No,
  createSharedComposable_createSharedComposable_2 as co,
  index_getConfig as ho,
  runtimeCore_esmBundler_computed as a,
  runtimeCore_esmBundler_onMounted as Fo,
  runtimeCore_esmBundler_nextTick as Eo,
  runtimeCore_esmBundler_onBeforeUnmount as Oo,
  isDef as j,
  index_useLogger as $o,
  index_useHttpModule as xo,
  useGlobalStore as J,
  reactivity_esmBundler_ref as ro,
  index_getConfigs as G,
  useFormatCurrency_useFormatCurrency as Vo,
  execAsync as N,
  ColorType as Ho,
  iconName as X,
  defineEmit_defineEmit as Po,
  useRouterMethodsWithLang as fo,
  index_useMediaUrl as Wo,
  router_useRouter as Ko,
  reactivity_esmBundler_toRef as Yo,
  MEDIA_EXTENSIONS as io,
  runtimeCore_esmBundler_resolveDirective as lo,
  runtimeCore_esmBundler_createElementBlock as uo,
  shared_esmBundler_normalizeClass as wo,
  shared_esmBundler_normalizeStyle as Co,
  runtimeCore_esmBundler_createCommentVNode as q,
  runtimeCore_esmBundler_Fragment as Go,
  runtimeCore_esmBundler_createElementVNode as bo,
  WeightType as jo,
  nuxtLink_default as Jo,
  runtimeCore_esmBundler_withDirectives as _o,
  index_useT as Xo,
  index_loadMediaResources as qo,
  stopElements as Qo,
  alignType as Zo,
  useAccountStore as yo,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  WELCOME_APP_MICRO_FRONTEND_URL as oe,
  useHostAppAnalytics as Q,
  AUTH_SOURCE_BY_ROUTE_NAME as ee,
  useShowRegistrationForm as So,
  useUserControlRoutes as Uo,
  _export_sfc as Z,
  loadUserBonusDropdownConfig as ko,
  useHeaderData as ne,
} from "./entry-85993dc44c.js";
import { withAsyncContext as ao } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
const se = $({
    name: "AuthDropdownError",
    __name: "AuthDropdownError",
    props: { size: {}, weight: {} },
    emits: ["reload"],
    setup(l) {
      return (e, t) => {
        $_$();
        const n = w("UiCaption"),
          u = w("UiButton");
        return (
          h(),
          S(
            u,
            {
              onClick: t[0] || (t[0] = (r) => e.$emit("reload")),
              class: "auth_dropdown_error__action",
              theme: o(O).primary,
              size: e.size,
            },
            {
              default: f(
                () =>
                  $_$() && [
                    I(
                      n,
                      { weight: e.weight },
                      {
                        default: f(
                          () =>
                            $_$() && [K(Y(e.$T("main_refreshing_button")), 1)]
                        ),
                        _: 1,
                      },
                      8,
                      ["weight"]
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            ["theme", "size"]
          )
        );
      };
    },
  }),
  Se = $({
    __name: "AuthDropdown",
    props: {
      triggerSize: { default: void 0 },
      loginButtonUppercase: { type: Boolean, default: void 0 },
      textSize: { default: L.m },
      textWeight: { default: void 0 },
    },
    setup(l) {
      $_$();
      const e = Ro(oe, "AuthDropdown", { timeout: 1e3, retries: 5 }),
        t = Q(),
        n = Mo();
      function u() {
        var r, c;
        t.modules.auth.trackAuthPageCall({
          source: (r = ee[n.name]) != null ? r : "menu_top",
        }),
          t.modules.header.trackNavHeaderLogin(
            String((c = n.name) != null ? c : "")
          );
      }
      return (r, c) => {
        $_$();
        const _ = w("UiButton");
        return (
          h(),
          S(
            o(e),
            {
              onClick: No(u, ["stop"]),
              triggerSize: r.triggerSize,
              loginButtonUppercase: r.loginButtonUppercase,
            },
            {
              preloader: f(
                () =>
                  $_$() && [
                    I(
                      _,
                      {
                        class: "auth_dropdown_loading",
                        theme: o(O).primary,
                        size: r.triggerSize,
                        loading: !0,
                      },
                      null,
                      8,
                      ["theme", "size"]
                    ),
                  ]
              ),
              error: f(
                ({ reload: m }) =>
                  $_$() && [
                    I(
                      se,
                      {
                        onReload: m,
                        size: r.triggerSize,
                        weight: r.textWeight,
                      },
                      null,
                      8,
                      ["onReload", "size", "weight"]
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            ["triggerSize", "loginButtonUppercase"]
          )
        );
      };
    },
  }),
  te = co(() => {
    $_$();
    const l = Q(),
      { showRegistrationForm: e, isEnableRegistration: t } = So(),
      n = ho(172),
      u = (_) => {
        l.modules.registrationEvents.trackRegistrationPageCall(_),
          l.modules.header.showRegistrationForm(),
          e({ locationForAnalytics: "top" });
      },
      r = () => {
        e({ locationForAnalytics: "top" });
      },
      c = a(() => (n ? "button" : "a"));
    return (
      Fo(
        () =>
          $_$() &&
          Eo(() => document.addEventListener("showRegistrationForm", r))
      ),
      Oo(() => document.removeEventListener("showRegistrationForm", r)),
      {
        isEnableRegistration: t,
        showRegistration: u,
        isRegistrationButtonDisabled: n,
        buttonTag: c,
      }
    );
  }),
  re = (l) => {
    $_$();
    const {
        title: e,
        description: t,
        id: n,
        currencyCode: u,
        currencySymbol: r,
        maxBonus: c,
        summaryMaxBonus: _,
        bonusPercent: m,
      } = l,
      p = n != null ? n : -1,
      g = m != null ? m : 0,
      C = p === 1 ? _ : c,
      A = j(C) ? String(Math.trunc(C)) : "",
      y = j(_) ? String(Math.trunc(_)) : "";
    return {
      title: e,
      description: t,
      isCancelBonus: p === -1,
      bonusId: p,
      currencyCode: u,
      currencySymbol: r,
      bonusValue: A,
      summaryBonusValue: y,
      bonusPercent: g,
    };
  },
  ie = (l) => {
    $_$();
    const {
        title: e,
        description: t,
        id: n,
        currency_code: u,
        currency_symbol: r,
        max_bonus: c,
        percent: _,
      } = l.attributes,
      m = _ != null ? _ : 0,
      p = j(c) ? String(Math.trunc(c)) : "";
    return {
      title: e,
      description: t,
      isCancelBonus: n === -1,
      bonusId: n,
      currencyCode: u,
      currencySymbol: r,
      bonusValue: p,
      summaryBonusValue: p,
      bonusPercent: m,
    };
  },
  mo = co(() => {
    $_$();
    const l = $o(),
      e = xo(),
      t = J(),
      n = a(() => t.isUserAuth),
      u = ro(!1),
      r = ro(!1),
      c = ro(),
      [_, m, p] = G(933, -1008, 633),
      { formatAmountWithCurrency: g } = Vo({
        geoCurrency: m,
        amountTemplate: p,
      }),
      C = a(() => {
        $_$();
        const s = o(c);
        if (!(s != null && s.bonusValue)) return "";
        const { bonusValue: d, currencyCode: i, currencySymbol: B } = s;
        return g({ amount: d, currencyIso: i, currencySymbol: B });
      }),
      A = a(() => {
        $_$();
        const s = o(c);
        if (!(s != null && s.summaryBonusValue)) return "";
        const { summaryBonusValue: d, currencyCode: i, currencySymbol: B } = s;
        return g({ amount: d, currencyIso: i, currencySymbol: B });
      }),
      y = () => {
        (u.value = !1), (r.value = !1), (c.value = void 0);
      },
      U = async () => {
        $_$();
        let s, d;
        try {
          const i =
              (([s, d] = N(() =>
                e("/web-api/api/internal/office/bonus/first-deposit").execute()
              )),
              (s = await s),
              d(),
              s),
            { success: B = !1, data: k } = i;
          if (B && i) return re(k);
        } catch (i) {
          l.error("Error get first-deposit bonus:", i);
        }
      },
      D = async () => {
        $_$();
        let s, d;
        try {
          const { data: i = [] } =
              (([s, d] = N(() =>
                e("/web-api/api/v3/bonuses/welcome-bonuses").execute()
              )),
              (s = await s),
              d(),
              s),
            B = i.find(({ id: k }) => Number(k) === _);
          if (B) return ie(B);
        } catch (i) {
          l.error("Error fetching welcome bonuses: ", i);
        }
      };
    return {
      hasBonus: u,
      bonusInfo: c,
      bonusAmount: C,
      summaryBonusAmount: A,
      isBonusCanceled: r,
      loadFirstDepositBonusInfo: async () => {
        $_$();
        let s, d;
        y();
        let i;
        o(n)
          ? ((i = (([s, d] = N(() => U())), (s = await s), d(), s)),
            i != null &&
              i.isCancelBonus &&
              ((r.value = !0),
              (i = (([s, d] = N(() => D())), (s = await s), d(), s))))
          : (i = (([s, d] = N(() => D())), (s = await s), d(), s)),
          (u.value = j(i == null ? void 0 : i.bonusId)),
          (c.value = i);
      },
    };
  }),
  ue = ["src"],
  ae = ["src"],
  ce = $({
    __name: "UserBonusMessages",
    props: {
      bonusId: {},
      bonusText: { default: "" },
      buttonText: { default: "" },
      moreLink: { default: "" },
    },
    setup(l) {
      $_$();
      const e = l,
        [t = "", n = L.m, u, r, c, _ = Ho.clrStrong, m, p = X.INFO_CIRCLE] = G(
          1544,
          1545,
          1547,
          1548,
          1549,
          1546,
          1550,
          1551
        ),
        g = Po("navigate"),
        C = J(),
        { getLinkWithLang: A, useLangLocation: y } = fo(a(() => C.getLanguage)),
        U = Q(),
        { rechargeRoute: D, isAuthorized: R } = Uo(),
        s = Wo(),
        { showRegistrationForm: d } = So(),
        i = Ko(),
        B = Yo(e, "moreLink"),
        k = () => {
          U.modules.registrationEvents.trackRegistrationPageCall({
            screen: "menu_bonus",
          }),
            U.modules.header.clickOnBonusMessageBet(),
            d();
        },
        F = () => {
          $_$();
          U.modules.header.clickOnBonusMessageBet(),
            g(),
            i.push(t ? A(t) : o(D));
        },
        M = () => {
          $_$();
          o(R) ? F() : k();
        },
        T = (z, to) => {
          U.modules.header.trackMainFirstDepInfo(), g(), z(to);
        },
        v = a(() => e.bonusId === -1),
        x = a(() => e.bonusId === 0),
        V = a(() => e.bonusId === 1),
        H = a(() =>
          $_$() && o(x)
            ? "promotions_firstDeposit_sport_bg"
            : o(V)
            ? "promotions_firstDeposit_casino_bg"
            : "promotions_firstDeposit_no_bonus_bg"
        ),
        P = c
          ? [
              "promotions_firstDeposit_decor_left",
              "promotions_firstDeposit_decor_right",
            ]
          : ["promotions_firstDeposit_image_bg"],
        b = a(() =>
          $_$() && o(v)
            ? "promotions_firstDeposit_no_bonus_decor_left"
            : "promotions_firstDeposit_decor_left"
        ),
        po = a(() =>
          $_$() && o(v)
            ? "promotions_firstDeposit_no_bonus_decor_right"
            : "promotions_firstDeposit_decor_right"
        ),
        oo = "backgroundImage: " + P.map((z) => `url('${s(z)}')`).join(", "),
        eo = a(() => $_$() && `backgroundImage: url('${s(o(H), io.JPG)}')`),
        no = a(() => ($_$() && r ? o(eo) : oo)),
        so = {
          [`user-bonus-messages--size-${n}`]: !!n,
          "user-bonus-messages--multiple-bg": c && !r,
        },
        E = y(B);
      return (z, to) => {
        $_$();
        const go = w("UiCaption"),
          Bo = w("UiButton"),
          Ao = w("UiIco"),
          Do = Jo,
          Io = lo("tooltip");
        return (
          h(),
          uo(
            "div",
            { style: Co(o(no)), class: wo([so, "user-bonus-messages"]) },
            [
              o(u)
                ? (h(),
                  uo(
                    Go,
                    { key: 0 },
                    [
                      bo(
                        "img",
                        {
                          alt: "",
                          width: "170",
                          height: "183",
                          src: z.$mediaUrl(o(b), o(io).SVG),
                          class:
                            "user-bonus-messages__decor user-bonus-messages__decor--left",
                        },
                        null,
                        8,
                        ue
                      ),
                      bo(
                        "img",
                        {
                          alt: "",
                          width: "130",
                          height: "134",
                          src: z.$mediaUrl(o(po), o(io).SVG),
                          class:
                            "user-bonus-messages__decor user-bonus-messages__decor--right",
                        },
                        null,
                        8,
                        ae
                      ),
                    ],
                    64
                  ))
                : q("", !0),
              I(
                go,
                {
                  size: o(L).xl,
                  color: o(_),
                  weight: o(jo).BOLD,
                  class: "user-bonus-messages__title",
                },
                { default: f(() => $_$() && [K(Y(z.bonusText), 1)]), _: 1 },
                8,
                ["size", "color", "weight"]
              ),
              I(
                Bo,
                {
                  onClick: M,
                  uppercase: o(m),
                  class: "user-bonus-messages__make-bet",
                  theme: o(O).accent,
                },
                {
                  default: f(
                    () =>
                      $_$() && [
                        I(
                          go,
                          { size: o(L).m },
                          {
                            default: f(() => $_$() && [K(Y(z.buttonText), 1)]),
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
                ["uppercase", "theme"]
              ),
              I(
                Do,
                { to: o(E), custom: "" },
                {
                  default: f(
                    ({ href: To, navigate: vo }) =>
                      $_$() && [
                        _o(
                          (h(),
                          S(
                            Bo,
                            {
                              onClick: (Lo) => T(vo, Lo),
                              tag: "a",
                              href: To,
                              narrow: "",
                              "aria-label": z.$T("main_learn_more"),
                              class: "user-bonus-messages__more",
                            },
                            {
                              default: f(
                                () =>
                                  $_$() && [
                                    I(Ao, { ico: o(p) }, null, 8, ["ico"]),
                                  ]
                              ),
                              _: 2,
                            },
                            1032,
                            ["onClick", "href", "aria-label"]
                          )),
                          [[Io, z.$T("main_learn_more")]]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["to"]
              ),
            ],
            4
          )
        );
      };
    },
  }),
  le = Z(ce, [["__scopeId", "data-v-be22205b"]]),
  de = { class: "user-bonus-dropdown-trigger-ico" },
  _e = 1,
  me = $({
    __name: "UserBonusDropdownTriggerIco",
    props: {
      isShowBadge: { type: Boolean, default: !0 },
      icon: { default: X.BONUS },
      sizeIcon: { default: void 0 },
      badgeTheme: { default: O.accent },
      badgeSize: { default: L.m },
    },
    setup(l) {
      return (e, t) => {
        $_$();
        const n = w("UiBadge"),
          u = w("UiIco");
        return (
          h(),
          uo("div", de, [
            e.isShowBadge
              ? (h(),
                S(
                  n,
                  {
                    key: 0,
                    value: _e,
                    theme: e.badgeTheme,
                    size: e.badgeSize,
                    class: "user-bonus-dropdown-trigger-ico__badge",
                  },
                  null,
                  8,
                  ["theme", "size"]
                ))
              : q("", !0),
            I(
              u,
              {
                ico: e.icon,
                size: e.sizeIcon,
                class: "user-bonus-dropdown-trigger-ico__icon",
              },
              null,
              8,
              ["ico", "size"]
            ),
          ])
        );
      };
    },
  }),
  zo = Z(me, [["__scopeId", "data-v-e3a53251"]]),
  pe = 100,
  ge = $({
    __name: "UserBonusDropdown",
    props: {
      isShowBonusAmount: { type: Boolean },
      bonusId: {},
      bonusAmount: {},
      dropdownMoreLink: {},
      size: {},
    },
    async setup(l) {
      $_$();
      let e, t, n, u;
      const [
          r = "header_bonus",
          c,
          _ = X.BONUS,
          m = O.primary,
          p = O.gray100,
          g = "",
          C = "main_replenish_account",
        ] = G(1532, 1542, 1533, 1537, 1538, 1530, 1531),
        y = (([n, u] = ao(() => ko())),
        (n = (([e, t] = N(() => n)), (e = await e), t(), e)),
        u(),
        n)(),
        {
          config: {
            isShowHoverAnimation: U,
            isShowBtnCustomTheme: D,
            isUiButtonUserStrong: R,
            uiButtonUserIconSize: s,
            uiBadgeTheme: d,
            uiBadgeSize: i,
          },
          style: B,
        } = y,
        k = Xo(),
        F = Q(),
        { bonusInfo: M, summaryBonusAmount: T } = mo(),
        v = D ? "" : m,
        x = a(() => {
          $_$();
          var b;
          return (
            k(g, { sum: o(T), fsBonus: pe }) ||
            g ||
            ((b = o(M)) == null ? void 0 : b.description)
          );
        }),
        V = C ? k(C) : "",
        H = (b) => {
          F.modules.header.clickOnBonusMessageBet(), b();
        },
        P = (b) => ({
          "user-bonus-dropdown__btn--is-opened": b,
          "user-bonus-dropdown__btn--hover-animated": U,
          "user-bonus-dropdown__btn--theme-custom-accent-secondary": D,
        });
      return (
        ([n, u] = ao(() => $_$() && qo([126]))),
        ([e, t] = N(() => n)),
        (e = await e),
        t(),
        u(),
        (b, po) => {
          $_$();
          const oo = w("UiCaption"),
            eo = w("UiButton"),
            no = w("UiDropdown"),
            so = lo("tooltip");
          return (
            h(),
            S(
              no,
              {
                align: o(Zo).END,
                stopElementsStore: o(Qo),
                theme: o(p),
                class: "user-bonus-dropdown",
                style: Co(o(B)),
              },
              {
                customTrigger: f(
                  ({ isOpen: E, toggle: z }) =>
                    $_$() && [
                      _o(
                        (h(),
                        S(
                          eo,
                          {
                            ref: "dropdownBtn",
                            onClick: (to) => H(z),
                            "aria-label": b.$T(o(r)),
                            toggled: E,
                            theme: o(v),
                            size: b.size,
                            strong: o(R),
                            narrow: "",
                            "aria-expanded": E,
                            class: wo([P(E), "user-bonus-dropdown__btn"]),
                          },
                          {
                            default: f(
                              () =>
                                $_$() && [
                                  I(
                                    zo,
                                    {
                                      isShowBadge: o(c),
                                      icon: o(_),
                                      sizeIcon: o(s),
                                      badgeTheme: o(d),
                                      badgeSize: o(i),
                                      class: "user-bonus-dropdown__ico",
                                    },
                                    null,
                                    8,
                                    [
                                      "isShowBadge",
                                      "icon",
                                      "sizeIcon",
                                      "badgeTheme",
                                      "badgeSize",
                                    ]
                                  ),
                                  b.isShowBonusAmount
                                    ? (h(),
                                      S(
                                        oo,
                                        { key: 0, uppercase: "", size: o(L).m },
                                        {
                                          default: f(
                                            () =>
                                              $_$() && [K(Y(b.bonusAmount), 1)]
                                          ),
                                          _: 1,
                                        },
                                        8,
                                        ["size"]
                                      ))
                                    : q("", !0),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          [
                            "onClick",
                            "aria-label",
                            "toggled",
                            "theme",
                            "size",
                            "strong",
                            "aria-expanded",
                            "class",
                          ]
                        )),
                        [[so, b.$T(o(r))]]
                      ),
                    ]
                ),
                default: f(
                  ({ toggle: E }) =>
                    $_$() && [
                      I(
                        le,
                        {
                          onNavigate: E,
                          bonusId: b.bonusId,
                          moreLink: b.dropdownMoreLink,
                          buttonText: o(V),
                          bonusText: o(x),
                          class: "user-bonus-dropdown__content",
                        },
                        null,
                        8,
                        [
                          "onNavigate",
                          "bonusId",
                          "moreLink",
                          "buttonText",
                          "bonusText",
                        ]
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              ["align", "stopElementsStore", "theme", "style"]
            )
          );
        }
      );
    },
  }),
  Be = Z(ge, [["__scopeId", "data-v-9deae061"]]),
  be = $({
    __name: "UserBonusLink",
    props: {
      isShowBonusAmount: { type: Boolean },
      bonusAmount: {},
      bonusLink: {},
    },
    async setup(l) {
      $_$();
      let e, t, n, u;
      const r = l,
        _ = (([n, u] = ao(() => ko())),
        (n = (([e, t] = N(() => n)), (e = await e), t(), e)),
        u(),
        n)(),
        {
          config: {
            isUiButtonUserStrong: m,
            uiButtonUserIconSize: p,
            uiBadgeTheme: g,
            uiBadgeSize: C,
          },
        } = _,
        [A = "header_bonus", y, U = L.m, D = L.m, R = L.m, s = O.primary] = G(
          1532,
          1543,
          1534,
          1535,
          1536,
          1537
        ),
        d = yo(),
        i = a(() => d.isAvailableFirstDepositBonus),
        { showRegistration: B } = te(),
        k = J(),
        { routerPushWithLang: F } = fo(a(() => k.getLanguage)),
        M = () => (y ? B({ screen: "menu_top" }) : F(r.bonusLink));
      return (T, v) => {
        $_$();
        const x = w("UiIco"),
          V = w("UiCaption"),
          H = w("UiButton"),
          P = lo("tooltip");
        return _o(
          (h(),
          S(
            H,
            {
              onClick: M,
              "aria-label": T.$T(o(A)),
              theme: o(s),
              size: o(U),
              strong: o(m),
              narrow: "",
              class: "user-bonus-link",
            },
            {
              default: f(
                () =>
                  $_$() && [
                    o(i)
                      ? (h(),
                        S(
                          zo,
                          {
                            key: 0,
                            sizeIcon: o(p),
                            badgeTheme: o(g),
                            badgeSize: o(C),
                            class: "user-bonus-link__trigger",
                          },
                          null,
                          8,
                          ["sizeIcon", "badgeTheme", "badgeSize"]
                        ))
                      : (h(),
                        S(
                          x,
                          {
                            key: 1,
                            ico: o(X).BONUS,
                            size: o(D),
                            class: "user-bonus-link__ico",
                          },
                          null,
                          8,
                          ["ico", "size"]
                        )),
                    T.isShowBonusAmount
                      ? (h(),
                        S(
                          V,
                          { key: 2, uppercase: "", size: o(R) },
                          {
                            default: f(() => $_$() && [K(Y(T.bonusAmount), 1)]),
                            _: 1,
                          },
                          8,
                          ["size"]
                        ))
                      : q("", !0),
                  ]
              ),
              _: 1,
            },
            8,
            ["aria-label", "theme", "size", "strong"]
          )),
          [[P, T.$T(o(A))]]
        );
      };
    },
  }),
  he = Z(be, [["__scopeId", "data-v-1c258e47"]]),
  fe = (l) => {
    const e = {
      0: "/bonus/rules/1st",
      1: "/bonus/casino/promotions/slot_first_deposit",
      6: "/bonus/rules/freebet_first_deposit",
    };
    return (
      (l == null
        ? void 0
        : l.reduce((t, n) => ((t[n.bonus_id] = n.bonus_link), t), {})) || e
    );
  },
  Ue = $({
    __name: "UserBonus",
    props: { size: { default: L.m } },
    setup(l) {
      $_$();
      const { isCompact: e } = ne(),
        [t, n = "", u = "", r = "", c, _, m] = G(
          1539,
          1527,
          1528,
          1529,
          1540,
          1541,
          1559
        ),
        { isAuthorized: p, bonusRoute: g, firstBonusRoute: C } = Uo(),
        { bonusInfo: A, bonusAmount: y, isBonusCanceled: U } = mo(),
        D = fe(m),
        R = a(() => $_$() && !o(p) && c),
        s = a(() => $_$() && o(p) && _),
        d = a(() => ($_$() && o(R)) || o(s)),
        i = a(() => {
          $_$();
          var v;
          return (v = o(A)) == null ? void 0 : v.bonusId;
        }),
        B = a(() => $_$() && D[o(i)]),
        k = a(() => ($_$() && o(U) && u) || n || o(B) || o(g)),
        F = a(() => ($_$() && r) || o(B) || o(C)),
        M = a(() => $_$() && t && !!o(y)),
        T = a(() => $_$() && o(M) && !o(e));
      return (v, x) =>
        $_$() && o(d)
          ? (h(),
            S(
              Be,
              {
                key: 0,
                dropdownMoreLink: o(F),
                isShowBonusAmount: o(M),
                bonusId: o(i),
                bonusAmount: o(y),
                size: v.size,
              },
              null,
              8,
              [
                "dropdownMoreLink",
                "isShowBonusAmount",
                "bonusId",
                "bonusAmount",
                "size",
              ]
            ))
          : (h(),
            S(
              he,
              {
                key: 1,
                isShowBonusAmount: o(T),
                bonusLink: o(k),
                bonusAmount: o(y),
              },
              null,
              8,
              ["isShowBonusAmount", "bonusLink", "bonusAmount"]
            ));
    },
  }),
  W = { HIDDEN: 0, ALL: 1, AUTH_ONLY: 2, UNAUTH_ONLY: 3 },
  ke = co(() => {
    $_$();
    var l;
    const e = (l = ho(1595)) != null ? l : W.ALL,
      t = yo(),
      n = J(),
      u = a(() => n.isUserAuth),
      r = a(() => t.isAvailableFirstDepositBonus),
      { hasBonus: c } = mo();
    return {
      isShowFirstDepositBonus: a(() => {
        $_$();
        const m = o(c),
          p = o(u),
          g = o(r);
        return {
          [W.HIDDEN]: !1,
          [W.ALL]: p ? g && m : m,
          [W.AUTH_ONLY]: p && m && g,
          [W.UNAUTH_ONLY]: !p && m,
        }[e];
      }),
    };
  });
export {
  Ue as _sfc_main,
  Se as _sfc_main$1,
  mo as useFirstDepositBonus,
  ke as useFirstDepositBonusVisibility,
  te as useUserControlRegistration,
};
