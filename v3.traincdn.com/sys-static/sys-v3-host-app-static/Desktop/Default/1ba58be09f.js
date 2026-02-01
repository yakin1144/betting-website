import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as _e } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as V,
  theme_constants_themeType as ee,
  runtimeCore_esmBundler_resolveComponent as g,
  runtimeCore_esmBundler_createBlock as y,
  runtimeCore_esmBundler_openBlock as _,
  runtimeCore_esmBundler_withCtx as r,
  runtimeCore_esmBundler_createElementVNode as U,
  alignType as re,
  execAsync as ie,
  runtimeCore_esmBundler_computed as n,
  runtimeCore_esmBundler_createElementBlock as P,
  reactivity_esmBundler_unref as e,
  stopElements as we,
  runtimeCore_esmBundler_renderSlot as oe,
  shared_esmBundler_normalizeClass as ce,
  runtimeCore_esmBundler_createVNode as p,
  index_getConfig as pe,
  formatMoney_formatMoney as ue,
  WeightType as de,
  runtimeCore_esmBundler_mergeProps as fe,
  runtimeCore_esmBundler_createCommentVNode as te,
  size_constants_sizeType as se,
  runtimeCore_esmBundler_Fragment as me,
  runtimeCore_esmBundler_createTextVNode as z,
  shared_esmBundler_toDisplayString as O,
  ColorType as he,
  index_useLogger as ze,
  useNotifications_useNotifications as Be,
  RequestError as Oe,
  ThirdPartyRouteName_ThirdPartyRouteName as Ue,
  useCoreBus as Ie,
  index_useT as Se,
  router_useRoute as Re,
  useAccountStore as Ee,
  useUserConfigStore as Ne,
  throttle as ke,
  reactivity_esmBundler_ref as $e,
  sortBySearchString as De,
  runtimeCore_esmBundler_createSlots as ye,
  reactivity_esmBundler_isRef as Le,
  iconName as Me,
  runtimeCore_esmBundler_onMounted as Fe,
  runtimeCore_esmBundler_resolveDirective as Pe,
  shared_esmBundler_normalizeStyle as Ve,
  runtimeCore_esmBundler_withDirectives as ge,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as H,
  loadUserControlConfig as He,
  useHostAppAnalytics as Ce,
  loadBalanceConfig as be,
  useCompactHeader as We,
} from "./entry-85993dc44c.js";
import { fuse_esm_default as Ge } from "../../../shared-assets/Desktop/__shared_1c5f097ec1.js";
import { BalanceCurrency as Qe } from "./7c99329783.js";
const je = V({
  name: "AccountSelectLoaderStub",
  setup() {
    $_$();
    return { themeType: ee };
  },
});
function Ye(i, t, l, o, u, d) {
  $_$();
  const a = g("UiSkeleton");
  return (
    _(),
    y(
      a,
      { theme: i.themeType.primary, class: "account-select-loader-stub" },
      {
        default: r(
          () =>
            ($_$() && t[0]) ||
            (t[0] = [
              U("div", { class: "account-select-loader-stub__name" }, null, -1),
              U(
                "div",
                { class: "account-select-loader-stub__currency" },
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
}
const qe = H(je, [
    ["render", Ye],
    ["__scopeId", "data-v-a69ed1e6"],
  ]),
  Je = { class: "account-select-dropdown__content" },
  Ke = { key: 1, class: "account-select-dropdown" },
  Xe = V({
    __name: "AccountSelectDropdown_F",
    props: {
      loading: { type: Boolean, default: !1 },
      align: { default: re.START },
      hasBorderRadiusRight: { type: Boolean, default: !0 },
    },
    async setup(i) {
      $_$();
      let t, l, o, u;
      const d = i,
        {
          config: { uiDropdownTheme: a },
        } = (([o, u] = _e(() => He())),
        (o = (([t, l] = ie(() => o)), (t = await t), l(), t)),
        u(),
        o)(),
        s = n(() => ({
          "account-select-dropdown__trigger--border-radius-right":
            d.hasBorderRadiusRight,
        }));
      return (m, C) => {
        $_$();
        const S = g("UiDropdown");
        return m.loading
          ? (_(), P("span", Ke, [p(qe)]))
          : (_(),
            y(
              S,
              {
                key: 0,
                ref: "dropdown",
                stopElementsStore: e(we),
                align: m.align,
                theme: e(a),
                class: "account-select-dropdown",
              },
              {
                customTrigger: r(
                  ({ isOpen: b, toggle: v, close: f }) =>
                    $_$() && [
                      U(
                        "div",
                        {
                          class: ce(["account-select-dropdown__trigger", e(s)]),
                        },
                        [
                          oe(
                            m.$slots,
                            "trigger",
                            { isOpen: b, toggle: v, close: f },
                            void 0,
                            !0
                          ),
                        ],
                        2
                      ),
                    ]
                ),
                default: r(
                  ({ close: b }) =>
                    $_$() && [
                      U("div", Je, [
                        oe(m.$slots, "default", { close: b }, void 0, !0),
                      ]),
                    ]
                ),
                _: 3,
              },
              8,
              ["stopElementsStore", "align", "theme"]
            ));
      };
    },
  }),
  Ze = H(Xe, [["__scopeId", "data-v-a3f8abae"]]),
  xe = { class: "balance-option__wrapper" },
  eo = { class: "balance-option__row" },
  oo = { key: 0, class: "balance-option__row" },
  to = V({
    __name: "BalanceOption",
    props: {
      isBalanceOptionCurrencyIcon: { type: Boolean },
      isBalanceOptionNameShort: { type: Boolean },
      balanceOptionLabelSize: {},
      balanceOptionNameSize: {},
      isBalanceOptionActiveRowBold: { type: Boolean },
      balanceOptionTheme: {},
      isActive: { type: Boolean, default: !1 },
      item: {},
    },
    setup(i) {
      $_$();
      const t = i,
        l = n(() => ({
          "balance-option--is-active": t.isActive,
          [`balance-option--theme-${t.balanceOptionTheme}`]:
            t.balanceOptionTheme,
        })),
        o = n(() => $_$() && t.isActive && pe(550)),
        u = n(() => $_$() && ue(t.item.money)),
        d = n(() => $_$() && ue(t.item.amountOfUnplacedBets)),
        a = n(() =>
          $_$() && t.isBalanceOptionActiveRowBold && t.isActive
            ? de.BOLD
            : de.LIGHT
        );
      return (s, m) => {
        $_$();
        const C = g("UiIcoCurrency"),
          S = g("UiCaption");
        return (
          _(),
          P(
            "button",
            fe(s.$attrs, { type: "button", class: ["balance-option", e(l)] }),
            [
              s.isBalanceOptionCurrencyIcon
                ? (_(),
                  y(
                    C,
                    {
                      key: 0,
                      ico: s.item.currencyId,
                      size: e(se).m,
                      class: "balance-option__ico",
                    },
                    null,
                    8,
                    ["ico", "size"]
                  ))
                : te("", !0),
              U("span", xe, [
                U("span", eo, [
                  p(
                    S,
                    { weight: e(a), size: s.balanceOptionNameSize },
                    {
                      default: r(
                        () =>
                          $_$() && [
                            s.isBalanceOptionNameShort
                              ? (_(),
                                P(me, { key: 0 }, [z(O(s.item.symbol), 1)], 64))
                              : (_(),
                                P(me, { key: 1 }, [z(O(s.item.label), 1)], 64)),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["weight", "size"]
                  ),
                  p(
                    S,
                    { weight: e(a), size: s.balanceOptionNameSize },
                    { default: r(() => $_$() && [z(O(e(u)), 1)]), _: 1 },
                    8,
                    ["weight", "size"]
                  ),
                ]),
                e(o)
                  ? (_(),
                    P("span", oo, [
                      p(
                        S,
                        {
                          size: s.balanceOptionLabelSize,
                          color: e(he).clrDecent,
                        },
                        {
                          default: r(
                            () =>
                              $_$() && [
                                z(O(s.$T("user_control_unplaced_bets")), 1),
                              ]
                          ),
                          _: 1,
                        },
                        8,
                        ["size", "color"]
                      ),
                      p(
                        S,
                        {
                          size: s.balanceOptionLabelSize,
                          color: e(he).clrDecent,
                        },
                        { default: r(() => $_$() && [z(O(e(d)), 1)]), _: 1 },
                        8,
                        ["size", "color"]
                      ),
                    ]))
                  : te("", !0),
              ]),
            ],
            16
          )
        );
      };
    },
  }),
  no = H(to, [["__scopeId", "data-v-5268d451"]]),
  ao = () => {
    $_$();
    const i = ze(),
      { notificationError: t } = Be();
    return {
      notificationRESTError: (o, u) => {
        $_$();
        if (!(o instanceof Error)) {
          i.warn("notificationRESTError: error not instanceof Error");
          return;
        }
        const { message: d = "" } = o;
        if (!(o instanceof Oe && o.isCancel)) return t(d, u);
      },
    };
  },
  co = [Ue.BINGO],
  Ae = () => {
    $_$();
    var i;
    const l = Ie(),
      o = Se(),
      u = Re(),
      d = Ce(),
      a = Ee(),
      s = Ne(),
      m = (i = pe(1865)) != null ? i : [],
      { notificationInfo: C, notificationSuccess: S } = Be(),
      { notificationRESTError: b } = ao(),
      v = n(() => a.getMainAndCurrencyAccounts),
      f = n(() => a.activeAccount),
      E = n(() => a.mainAccount),
      I = n(() => a.activeCurrencyIso),
      N = n(() => a.isChangeActiveAccountProcess),
      W = n(() => a.isUpdateBalanceProcess),
      k = n(() => a.isAccountFrozen),
      G = n(() => ($_$() && e(N)) || e(W)),
      Q = n(() => {
        $_$();
        var c, B;
        return ue((B = (c = e(f)) == null ? void 0 : c.money) != null ? B : 0);
      }),
      j = n(() => s.email),
      Y = n(() => s.userName),
      q = n(() => !s.hideBalance),
      R = n(() => {
        var c;
        return (c = a.activeAccount) == null ? void 0 : c.labelWithIso;
      }),
      $ = () => a.updateData(),
      D = (c) => a.installActiveAccount(c),
      J = n(() => $_$() && ke(() => $(), 4e3, { trailing: !1 })),
      T = n(() => $_$() && m.includes(e(u).params.gameRoute)),
      ne = n(() => ($_$() && m.includes(e(u).name)) || e(T)),
      K = n(() => $_$() && co.includes(e(u).name));
    return {
      accounts: v,
      mainAccount: E,
      activeAccount: f,
      activeAccountMoneyFormatted: Q,
      accountActiveCurrencyIso: I,
      configEmail: j,
      configUserName: Y,
      isLoading: G,
      isShowBalance: q,
      activeAccountLabelWithIso: R,
      accountUpdateData: $,
      refreshBalance: (c) => {
        $_$();
        d.modules.header.updateBalance(), e(J)(), typeof c == "function" && c();
      },
      onAccountSelect: async ({ id: c }, B) => {
        $_$();
        var L, A, M, F, w;
        let h, x;
        if (c === ((L = e(f)) == null ? void 0 : L.id)) return;
        const ve = (A = e(f)) == null ? void 0 : A.currencyId;
        if ((d.modules.office.trackChangeBillChoose(), e(k)))
          return C(o("main_account_frozen"));
        if ((M = e(E)) != null && M.isActive && e(ne))
          return C(o("main_multiaccount_support_atention"));
        const { success: Te, error: le } =
          (([h, x] = ie(() => D(c))), (h = await h), x(), h);
        Te && !e(K)
          ? (l.emit("accountChanged"),
            d.modules.office.trackChangeBillDone(
              (F = e(f)) == null ? void 0 : F.currencyId,
              ve
            ),
            S(o("main_account_will_set", [(w = e(f)) == null ? void 0 : w.id])))
          : le && (d.modules.office.trackChangeBillError(le), b(le)),
          B == null || B();
      },
      isActiveAccount: (c) => {
        $_$();
        var B;
        return c === ((B = e(f)) == null ? void 0 : B.id);
      },
      setAndFetchActiveAccount: D,
    };
  },
  so = 3,
  io = (i) => {
    $_$();
    const t = pe(622),
      l = $e(""),
      o = () => {
        l.value = "";
      },
      u = n(() => $_$() && t && e(i).length > so),
      d = n(
        () =>
          $_$() &&
          new Ge(e(i), {
            ignoreLocation: !0,
            shouldSort: !1,
            threshold: 0.3,
            keys: ["iso", "name"],
          })
      ),
      a = n(() =>
        $_$() && e(l) && t
          ? De(
              e(d)
                .search(e(l))
                .map(({ item: m }) => m),
              e(l),
              "iso"
            )
          : e(i)
      ),
      s = n(() => $_$() && t && !e(a).length);
    return {
      searchQuery: l,
      clearSearchQuery: o,
      isShowBalanceSearch: u,
      accountsFiltered: a,
      isEmptyAccountsFiltered: s,
    };
  },
  lo = V({
    __name: "BalanceDropdown",
    props: {
      searchable: { type: Boolean, default: !0 },
      scrollbarTheme: { default: ee.gray },
      wide: { type: Boolean, default: !0 },
      hasSearchSeparator: { type: Boolean, default: !1 },
    },
    async setup(i) {
      $_$();
      let t, l, o, u;
      const a = (([o, u] = _e(() => be())),
        (o = (([t, l] = ie(() => o)), (t = await t), l(), t)),
        u(),
        o)(),
        {
          config: {
            isBalanceOptionCurrencyIcon: s,
            isBalanceOptionNameShort: m,
            balanceOptionLabelSize: C,
            balanceOptionNameSize: S,
            isBalanceOptionActiveRowBold: b,
            balanceOptionTheme: v,
            uiSelectOptionsTheme: f,
            hasBorderRadiusRight: E,
          },
        } = a,
        I = i,
        {
          accounts: N,
          mainAccount: W,
          activeAccount: k,
          activeAccountMoneyFormatted: G,
          isLoading: Q,
          refreshBalance: j,
          onAccountSelect: Y,
          isActiveAccount: q,
        } = Ae(),
        {
          searchQuery: R,
          isShowBalanceSearch: $,
          accountsFiltered: D,
          clearSearchQuery: J,
          isEmptyAccountsFiltered: T,
        } = io(N),
        ne = n(() => $_$() && I.searchable && e($)),
        K = n(() => ({ "balance-dropdown--wide": I.wide })),
        ae = n(() => ({ "balance-dropdown__search": I.hasSearchSeparator })),
        { isCompactSizeL: X } = We(),
        Z = n(() => ($_$() && e(X) ? re.END : re.START));
      return (c, B) => {
        $_$();
        const L = g("UiSearch"),
          A = g("UiSelectOptions"),
          M = g("UiSelectContent"),
          F = g("UiEmptyMessage");
        return (
          _(),
          y(
            Ze,
            {
              onOpen: e(J),
              loading: !e(k),
              hasBorderRadiusRight: e(E),
              class: ce([e(K), "balance-dropdown"]),
              align: e(Z),
            },
            ye(
              {
                trigger: r(
                  ({ isOpen: w, toggle: h, close: x }) =>
                    $_$() && [
                      oe(
                        c.$slots,
                        "trigger",
                        {
                          isOpen: w,
                          onToggle: h,
                          mainAccount: e(W),
                          activeAccount: e(k),
                          accountMoney: e(G),
                          loading: e(Q),
                          refreshBalance: e(j),
                          close: x,
                        },
                        void 0,
                        !0
                      ),
                    ]
                ),
                _: 2,
              },
              [
                e(N).length
                  ? {
                      name: "default",
                      fn: r(
                        ({ close: w }) =>
                          $_$() && [
                            e(ne)
                              ? (_(),
                                P(
                                  "div",
                                  { key: 0, class: ce(e(ae)) },
                                  [
                                    p(
                                      L,
                                      {
                                        modelValue: e(R),
                                        "onUpdate:modelValue":
                                          B[0] ||
                                          (B[0] = (h) =>
                                            $_$() && Le(R)
                                              ? (R.value = h)
                                              : null),
                                        theme: e(ee).primary_20,
                                        placeholder: c.$T("currency_search"),
                                      },
                                      null,
                                      8,
                                      ["modelValue", "theme", "placeholder"]
                                    ),
                                  ],
                                  2
                                ))
                              : te("", !0),
                            p(
                              M,
                              { scrollbarTheme: c.scrollbarTheme },
                              {
                                default: r(
                                  () =>
                                    $_$() && [
                                      p(
                                        A,
                                        {
                                          options: e(D),
                                          theme: e(f),
                                          class: "balance-dropdown__options",
                                        },
                                        {
                                          item: r(
                                            ({ option: h }) =>
                                              $_$() && [
                                                p(
                                                  no,
                                                  {
                                                    onClick: (x) => {
                                                      $_$();
                                                      e(Y)(h, w);
                                                    },
                                                    isBalanceOptionCurrencyIcon:
                                                      e(s),
                                                    isBalanceOptionNameShort:
                                                      e(m),
                                                    balanceOptionLabelSize:
                                                      e(C),
                                                    balanceOptionNameSize: e(S),
                                                    isBalanceOptionActiveRowBold:
                                                      e(b),
                                                    balanceOptionTheme: e(v),
                                                    isActive: e(q)(h.id),
                                                    item: h,
                                                    class:
                                                      "balance-dropdown__option",
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "onClick",
                                                    "isBalanceOptionCurrencyIcon",
                                                    "isBalanceOptionNameShort",
                                                    "balanceOptionLabelSize",
                                                    "balanceOptionNameSize",
                                                    "isBalanceOptionActiveRowBold",
                                                    "balanceOptionTheme",
                                                    "isActive",
                                                    "item",
                                                  ]
                                                ),
                                              ]
                                          ),
                                          _: 2,
                                        },
                                        1032,
                                        ["options", "theme"]
                                      ),
                                    ]
                                ),
                                _: 2,
                              },
                              1032,
                              ["scrollbarTheme"]
                            ),
                            e(T)
                              ? (_(),
                                y(
                                  F,
                                  { key: 1, theme: e(ee).primary },
                                  {
                                    default: r(
                                      () =>
                                        $_$() && [
                                          z(
                                            O(c.$T("main_search_not_found")),
                                            1
                                          ),
                                        ]
                                    ),
                                    _: 1,
                                  },
                                  8,
                                  ["theme"]
                                ))
                              : te("", !0),
                          ]
                      ),
                      key: "0",
                    }
                  : void 0,
              ]
            ),
            1032,
            ["onOpen", "loading", "hasBorderRadiusRight", "class", "align"]
          )
        );
      };
    },
  }),
  ro = H(lo, [["__scopeId", "data-v-46510435"]]),
  uo = { class: "account-select-toggle__content" },
  _o = V({
    __name: "AccountSelectToggle_F",
    props: {
      loading: { type: Boolean, default: !1 },
      isToggled: { type: Boolean, default: !1 },
      theme: { default: ee.primary },
      withoutAngle: { type: Boolean, default: !1 },
      column: { type: Boolean, default: !1 },
      size: { default: se.m },
      textSize: { default: void 0 },
      angleSize: { default: se.xxxxs },
    },
    setup(i) {
      $_$();
      const t = i,
        l = n(() => ({
          "account-select-toggle--is-toggled": t.isToggled,
          "account-select-toggle--without-angle": t.withoutAngle,
          "account-select-toggle--column": t.column,
        }));
      return (o, u) => {
        $_$();
        const d = g("UiCaption"),
          a = g("UiIco"),
          s = g("UiButton");
        return (
          _(),
          y(
            s,
            fe(o.$attrs, {
              narrow: "",
              uppercase: !1,
              rounded: !1,
              toggled: o.isToggled,
              loading: o.loading,
              theme: o.theme,
              class: [e(l), "account-select-toggle"],
              size: o.size,
            }),
            {
              default: r(
                () =>
                  $_$() && [
                    U("span", uo, [
                      p(
                        d,
                        {
                          size: o.textSize,
                          class: "account-select-toggle__name",
                        },
                        {
                          default: r(
                            () =>
                              $_$() && [oe(o.$slots, "name", {}, void 0, !0)]
                          ),
                          _: 3,
                        },
                        8,
                        ["size"]
                      ),
                      p(
                        d,
                        {
                          size: o.textSize,
                          weight: e(de).BOLD,
                          class: "account-select-toggle__value",
                        },
                        {
                          default: r(
                            () =>
                              $_$() && [oe(o.$slots, "value", {}, void 0, !0)]
                          ),
                          _: 3,
                        },
                        8,
                        ["size", "weight"]
                      ),
                    ]),
                    p(
                      a,
                      {
                        ico: e(Me).ANGLE,
                        size: o.angleSize,
                        class: "account-select-toggle__angle",
                      },
                      null,
                      8,
                      ["ico", "size"]
                    ),
                  ]
              ),
              _: 3,
            },
            16,
            ["toggled", "loading", "theme", "class", "size"]
          )
        );
      };
    },
  }),
  po = H(_o, [["__scopeId", "data-v-ec545346"]]),
  mo = () => {
    $_$();
    const i = Se();
    return {
      getRefreshBalanceButtonTooltip: (o) =>
        $_$() && e(o)
          ? {}
          : {
              content: i("main_dictionary_header_refresh_balance"),
              classes: ["u-nowrap"],
            },
      getAccountSelectButtonTooltip: (o) =>
        $_$() && e(o)
          ? {}
          : { content: i("header_account_select"), classes: ["u-nowrap"] },
    };
  },
  ho = { class: "balance__value" },
  go = V({
    __name: "Balance_F",
    props: { hasRefreshSeparator: { type: Boolean, default: !0 } },
    async setup(i) {
      $_$();
      let t, l, o, u;
      const a = (([o, u] = _e(() => be())),
        (o = (([t, l] = ie(() => o)), (t = await t), l(), t)),
        u(),
        o)(),
        {
          config: {
            balanceDropdownScrollTheme: s,
            hasSearchSeparator: m,
            isRotateRefreshIcon: C,
            isCurrencyIcon: S,
            ico: b,
            UiButtonTheme: v,
            balanceTextSize: f,
            balanceSize: E,
            uiIconAngleSize: I,
            uiIconRefreshSize: N,
            hasBalanceName: W,
            hasBalanceCurrency: k,
            balanceValueSize: G,
          },
          style: Q,
        } = a,
        j = i,
        Y = n(() => ({
          "balance-refresh--rotated": C,
          "balance-refresh--separator": j.hasRefreshSeparator,
        })),
        q = Ce(),
        {
          getAccountSelectButtonTooltip: R,
          getRefreshBalanceButtonTooltip: $,
        } = mo(),
        { accountUpdateData: D } = Ae(),
        J = (T) => {
          T || q.modules.office.trackManageBillCall();
        };
      return (
        Fe(D),
        (T, ne) => {
          $_$();
          const K = g("UiIco"),
            ae = g("UiButton"),
            X = g("UiCaption"),
            Z = Pe("tooltip");
          return (
            _(),
            y(
              ro,
              {
                scrollbarTheme: e(s),
                hasSearchSeparator: e(m),
                class: "balance",
                style: Ve(e(Q)),
              },
              {
                trigger: r(
                  ({
                    isOpen: c,
                    refreshBalance: B,
                    onToggle: L,
                    activeAccount: A,
                    accountMoney: M,
                    loading: F,
                    close: w,
                  }) =>
                    $_$() && [
                      ge(
                        (_(),
                        y(
                          ae,
                          {
                            onClick: (h) => B(w),
                            "aria-label": T.$T(
                              "main_dictionary_header_refresh_balance"
                            ),
                            theme: e(v),
                            toggled: c,
                            rounded: !1,
                            narrow: "",
                            class: ce(["balance-refresh", e(Y)]),
                          },
                          {
                            container: r(
                              () =>
                                $_$() && [
                                  p(
                                    K,
                                    {
                                      size: e(N),
                                      ico: e(b),
                                      class: "balance-refresh__ico",
                                    },
                                    null,
                                    8,
                                    ["size", "ico"]
                                  ),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          ["onClick", "aria-label", "theme", "toggled", "class"]
                        )),
                        [[Z, e($)(c)]]
                      ),
                      ge(
                        (_(),
                        y(
                          po,
                          {
                            onClick: (h) => {
                              L(), J(c);
                            },
                            isToggled: c,
                            "aria-expanded": c,
                            "aria-label": T.$T("header_account_select"),
                            loading: F,
                            size: e(E),
                            theme: e(v),
                            textSize: e(f),
                            angleSize: e(I),
                            class: "balance__toggle",
                          },
                          ye(
                            {
                              value: r(
                                () =>
                                  $_$() && [
                                    U("div", ho, [
                                      p(
                                        X,
                                        { size: e(G) },
                                        {
                                          default: r(
                                            () => $_$() && [z(O(M), 1)]
                                          ),
                                          _: 2,
                                        },
                                        1032,
                                        ["size"]
                                      ),
                                      e(k)
                                        ? (_(),
                                          y(
                                            X,
                                            { key: 0, size: e(se).l },
                                            {
                                              default: r(
                                                () => $_$() && [z(O(A.iso), 1)]
                                              ),
                                              _: 2,
                                            },
                                            1032,
                                            ["size"]
                                          ))
                                        : te("", !0),
                                    ]),
                                  ]
                              ),
                              _: 2,
                            },
                            [
                              e(W)
                                ? {
                                    name: "name",
                                    fn: r(
                                      () =>
                                        $_$() && [
                                          p(
                                            Qe,
                                            {
                                              name: A.name,
                                              iso: A.iso,
                                              currencyId: A.currencyId,
                                              isIcon: e(S),
                                            },
                                            null,
                                            8,
                                            [
                                              "name",
                                              "iso",
                                              "currencyId",
                                              "isIcon",
                                            ]
                                          ),
                                        ]
                                    ),
                                    key: "0",
                                  }
                                : void 0,
                            ]
                          ),
                          1032,
                          [
                            "onClick",
                            "isToggled",
                            "aria-expanded",
                            "aria-label",
                            "loading",
                            "size",
                            "theme",
                            "textSize",
                            "angleSize",
                          ]
                        )),
                        [[Z, e(R)(c)]]
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              ["scrollbarTheme", "hasSearchSeparator", "style"]
            )
          );
        }
      );
    },
  }),
  fo = H(go, [["__scopeId", "data-v-efe6e827"]]),
  Ao = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: fo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  Ze as AccountSelectDropdown,
  po as AccountSelectToggle,
  fo as Balance,
  ro as BalanceDropdown,
  Ao as Balance_F,
  Ae as useBalanceDropdown,
};
