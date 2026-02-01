import $_$ from "./$_$.js";
$_$();
import {
  reactivity_esmBundler_ref as W,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_defineComponent as F,
  theme_constants_themeType as M,
  runtimeCore_esmBundler_resolveComponent as d,
  runtimeCore_esmBundler_createBlock as g,
  runtimeCore_esmBundler_openBlock as s,
  runtimeCore_esmBundler_withCtx as n,
  runtimeCore_esmBundler_createElementVNode as y,
  runtimeCore_esmBundler_createElementBlock as w,
  runtimeCore_esmBundler_Fragment as ne,
  runtimeCore_esmBundler_renderList as se,
  runtimeCore_esmBundler_createVNode as l,
  bettingType_BettingType as ce,
  runtimeCore_esmBundler_computed as A,
  runtimeDom_esmBundler_withModifiers as pe,
  runtimeCore_esmBundler_renderSlot as Ee,
  runtimeCore_esmBundler_createCommentVNode as V,
  size_constants_sizeType as T,
  runtimeCore_esmBundler_createTextVNode as C,
  shared_esmBundler_toDisplayString as U,
  execAsync as K,
  index_useT as ve,
  index_getConfigs as ae,
  useGlobalStore as Ve,
  MarketsNameTypes as me,
  defineEmit_defineEmit as fe,
  runtimeCore_esmBundler_onMounted as le,
  runtimeCore_esmBundler_onUpdated as $e,
  runtimeCore_esmBundler_nextTick as Ie,
  shared_esmBundler_normalizeClass as x,
  useTimeSettings_useTimeSettings as we,
  reactivity_esmBundler_isRef as re,
  shared_esmBundler_normalizeStyle as Oe,
  runtimeCore_esmBundler_createSlots as De,
  isDef as Ne,
  runtimeCore_esmBundler_resolveDynamicComponent as Le,
  index_useDateTimeService as Ae,
  clientOnly_default as ye,
  useCoreBus as Me,
  runtimeCore_esmBundler_useTemplateRef as Fe,
  runtimeCore_esmBundler_onBeforeUnmount as Ge,
  runtimeCore_esmBundler_resolveDirective as Re,
  UiDropdown_vue_default as de,
  stopElements as _e,
  alignType as ue,
  runtimeCore_esmBundler_withDirectives as ge,
  iconName as oe,
  MEDIA_EXTENSIONS as He,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { withAsyncContext as ee } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  DropdownFormSection as Pe,
  useViewSettingsStoreInjector as We,
  useSiteViewOptions as Ze,
  useDecorations as Ye,
  ViewSettingsCoefficientsFormat as je,
  ViewSettingsTimeFormat as Qe,
  ViewSettingsOther as qe,
  ViewSettingsDecorToggle as Xe,
  ViewSettingsConfettiToggle as Je,
  useSearchTimezoneOptions as Ke,
  TimeSettingsDropdownLoaderStub as xe,
  useDateNow as et,
  useViewSettingsStoreProvider as tt,
  useTimezoneSettings as ot,
} from "./1649e8033c.js";
import {
  _export_sfc as X,
  loadAppSettingsToolbarConfigDesktop as te,
  useHostAppAnalytics as ke,
} from "./entry-85993dc44c.js";
import { useLanguagesStore as Ce } from "./1c8c17a20a.js";
import {
  useSearchLanguageOptions as nt,
  LanguageSettingsDropdownLoaderStub as st,
} from "./4461966886.js";
const it = 10,
  at = ({ isRtl: h, offsetBound: o = it }) => {
    $_$();
    const a = W(!1),
      t = W(!0),
      i = W(!1),
      r = W(!0);
    return {
      onScroll: (c) => {
        $_$();
        const { target: p } = c;
        if (p) {
          const {
              clientWidth: v,
              clientHeight: B,
              scrollLeft: z,
              scrollTop: $,
              scrollWidth: b,
              scrollHeight: m,
            } = p,
            k = e(h) ? -1 : 1;
          (a.value = v + z * k >= b - o),
            (t.value = z * k <= o),
            (i.value = B + $ >= m - o),
            (r.value = $ <= o);
        }
      },
      isHorizontalScrollEndLimitReached: a,
      isHorizontalScrollStartLimitReached: t,
      isVerticalScrollEndLimitReached: i,
      isVerticalScrollStartLimitReached: r,
    };
  },
  lt = (h) => {
    $_$();
    const o = W(!1),
      a = W(!1);
    return {
      isElementScrollableHorizontal: a,
      isElementScrollableVertical: o,
      checkIsElementScrollable: () => {
        $_$();
        if (!e(h)) return;
        const {
          clientWidth: i,
          scrollWidth: r,
          clientHeight: _,
          scrollHeight: c,
        } = e(h).$el;
        (a.value = i !== r), (o.value = _ !== c);
      },
    };
  },
  rt = {
    class:
      "header-navigation-third-party-loader__nav header-navigation-third-party-loader__nav--five-col",
  },
  ct = {
    class:
      "header-navigation-third-party-loader__nav header-navigation-third-party-loader__nav--two-col",
  },
  he = 10,
  Jt = F({
    __name: "HeaderNavigationThirdPartyLoader",
    props: { skeletonTheme: { default: M.gray100 } },
    setup(h) {
      return (o, a) => {
        $_$();
        const t = d("UiSkeleton");
        return (
          s(),
          g(
            t,
            {
              theme: o.skeletonTheme,
              class: "header-navigation-third-party-loader",
            },
            {
              default: n(
                () =>
                  $_$() && [
                    y("div", rt, [
                      (s(),
                      w(
                        ne,
                        null,
                        se(
                          he,
                          (i) =>
                            $_$() &&
                            y("div", {
                              key: `header-navigation-third-party-loader-links-list-image-${i}`,
                              class:
                                "header-navigation-third-party-loader__image",
                            })
                        ),
                        64
                      )),
                    ]),
                    y("div", ct, [
                      (s(),
                      w(
                        ne,
                        null,
                        se(
                          he,
                          (i) =>
                            $_$() &&
                            y("div", {
                              key: `header-navigation-third-party-loader-links-list-link-${i}`,
                              class:
                                "header-navigation-third-party-loader__link",
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
  pt = { class: "header-navigation-promo-dropdown-loader" },
  Kt = F({
    __name: "HeaderNavigationPromoDropdownLoader",
    props: { skeletonTheme: { default: M.gray100 } },
    setup(h) {
      return (o, a) => {
        $_$();
        const t = d("UiSkeleton");
        return (
          s(),
          w("div", pt, [
            l(
              t,
              {
                theme: o.skeletonTheme,
                repeat: 4,
                class: "header-navigation-promo-dropdown-loader__cards",
              },
              {
                default: n(
                  () =>
                    ($_$() && a[0]) ||
                    (a[0] = [
                      y(
                        "div",
                        {
                          class:
                            "header-navigation-promo-dropdown-loader__card",
                        },
                        null,
                        -1
                      ),
                    ])
                ),
                _: 1,
              },
              8,
              ["theme"]
            ),
            l(
              t,
              {
                theme: o.skeletonTheme,
                repeat: 2,
                class: "header-navigation-promo-dropdown-loader__links",
              },
              {
                default: n(
                  () =>
                    ($_$() && a[1]) ||
                    (a[1] = [
                      y(
                        "div",
                        {
                          class:
                            "header-navigation-promo-dropdown-loader__link",
                        },
                        null,
                        -1
                      ),
                    ])
                ),
                _: 1,
              },
              8,
              ["theme"]
            ),
            l(
              t,
              { theme: o.skeletonTheme },
              {
                default: n(
                  () =>
                    ($_$() && a[2]) ||
                    (a[2] = [
                      y(
                        "div",
                        {
                          class: "header-navigation-promo-dropdown-loader__all",
                        },
                        null,
                        -1
                      ),
                    ])
                ),
                _: 1,
              },
              8,
              ["theme"]
            ),
          ])
        );
      };
    },
  }),
  mt = { 2: ce.LIVE, 1: ce.LINE },
  xt = ({ menuItemType: h, route: o }) => {
    var a, t;
    const r = (
        (t = (a = o.meta) == null ? void 0 : a[12]) != null ? t : []
      ).includes(h),
      c = mt[h] === o.params.section;
    return r && c;
  },
  dt = { key: 0, class: "dropdown-form__buttons dropdown-form-buttons" },
  _t = F({
    __name: "DropdownForm",
    props: {
      isShowSubmitButton: { type: Boolean, default: !0 },
      isShowResetButton: { type: Boolean, default: !0 },
    },
    emits: ["submit", "reset"],
    setup(h) {
      $_$();
      const o = h,
        a = A(() => o.isShowSubmitButton || o.isShowResetButton);
      return (t, i) => {
        $_$();
        const r = d("UiCaption"),
          _ = d("UiButton");
        return (
          s(),
          w(
            "form",
            {
              onSubmit:
                i[0] || (i[0] = pe((c) => t.$emit("submit", c), ["prevent"])),
              onReset:
                i[1] || (i[1] = pe((c) => t.$emit("reset", c), ["prevent"])),
              class: "dropdown-form",
            },
            [
              Ee(t.$slots, "default", {}, void 0, !0),
              e(a)
                ? (s(),
                  w("div", dt, [
                    t.isShowSubmitButton
                      ? (s(),
                        g(
                          _,
                          {
                            key: 0,
                            type: "submit",
                            theme: e(M).accent,
                            narrow: "",
                            block: "",
                            uppercase: !1,
                            class: "dropdown-form-buttons__submit",
                          },
                          {
                            default: n(
                              () =>
                                $_$() && [
                                  l(
                                    r,
                                    { size: e(T).m },
                                    {
                                      default: n(
                                        () =>
                                          $_$() && [C(U(t.$T("main_save")), 1)]
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
                        ))
                      : V("", !0),
                    t.isShowResetButton
                      ? (s(),
                        g(
                          _,
                          {
                            key: 1,
                            type: "reset",
                            theme: e(M).gray,
                            narrow: "",
                            block: "",
                            uppercase: !1,
                            class: "dropdown-form-buttons__reset",
                          },
                          {
                            default: n(
                              () =>
                                $_$() && [
                                  l(
                                    r,
                                    { size: e(T).m },
                                    {
                                      default: n(
                                        () =>
                                          $_$() && [C(U(t.$T("main_clear")), 1)]
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
                        ))
                      : V("", !0),
                  ]))
                : V("", !0),
            ],
            32
          )
        );
      };
    },
  }),
  ut = X(_t, [["__scopeId", "data-v-027205ca"]]),
  gt = { class: "app-settings-toolbar-selection__options" },
  ht = F({
    __name: "AppSettingsToolbarSelection",
    props: {
      modelValue: {},
      sectionTitle: {},
      options: {},
      uiSelectionTheme: { default: M.gray60 },
    },
    emits: ["update:modelValue"],
    setup(h, { emit: o }) {
      const a = o,
        t = ({ value: i }) => {
          a("update:modelValue", i);
        };
      return (i, r) => {
        $_$();
        const _ = d("UiCaption"),
          c = d("UiSelection");
        return (
          s(),
          g(
            Pe,
            { class: "app-settings-toolbar-selection" },
            {
              title: n(() => $_$() && [C(U(i.sectionTitle), 1)]),
              default: n(
                () =>
                  $_$() && [
                    y("div", gt, [
                      (s(!0),
                      w(
                        ne,
                        null,
                        se(
                          i.options,
                          (p) =>
                            $_$() &&
                            (s(),
                            g(
                              c,
                              {
                                key: p.value,
                                onChange: (v) => t(p),
                                value: p.value,
                                selectedValue: i.modelValue,
                                hasInnerOffset: !1,
                                type: "radio",
                                name: p.name,
                                theme: i.uiSelectionTheme,
                              },
                              {
                                default: n(
                                  () =>
                                    $_$() && [
                                      l(
                                        _,
                                        { size: e(T).xs },
                                        {
                                          default: n(
                                            () => $_$() && [C(U(p.caption), 1)]
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
                              [
                                "onChange",
                                "value",
                                "selectedValue",
                                "name",
                                "theme",
                              ]
                            ))
                        ),
                        128
                      )),
                    ]),
                  ]
              ),
              _: 1,
            }
          )
        );
      };
    },
  }),
  Se = X(ht, [["__scopeId", "data-v-b653c532"]]),
  St = { key: 0, class: "app-settings-toolbar-view-tab__row" },
  bt = { class: "app-settings-toolbar-view-tab__col" },
  Tt = { key: 1, class: "app-settings-toolbar-view-tab__row" },
  vt = { class: "app-settings-toolbar-view-tab__col" },
  ft = { key: 2, class: "app-settings-toolbar-view-tab__row" },
  wt = { class: "app-settings-toolbar-view-tab__col" },
  yt = { key: 3, class: "app-settings-toolbar-view-tab__row" },
  kt = { class: "app-settings-toolbar-view-tab__col" },
  Ct = { class: "app-settings-toolbar-view-tab__row" },
  Ut = { key: 4, class: "app-settings-toolbar-view-tab__row" },
  Bt = { key: 5, class: "app-settings-toolbar-view-tab__row" },
  zt = { class: "app-settings-toolbar-view-tab__action" },
  Et = F({
    __name: "AppSettingsToolbarViewTab",
    props: { dropdownToggle: { type: Function, default: () => {} } },
    emits: ["saveSiteSettings"],
    async setup(h) {
      $_$();
      let o, a, t, i;
      const {
          config: {
            uiInputSelectTheme: r,
            uiOptionTheme: _,
            uiMultiSelectTheme: c,
            uiSelectionRadioTheme: p,
          },
        } = (([t, i] = ee(() => te())),
        (t = (([o, a] = K(() => t)), (o = await o), a(), o)),
        i(),
        t)(),
        v = ve(),
        [B, z, $, b] = ae(349, 602, 62, 506),
        { settings: m, updateSettings: k, setSettingsFromStore: O } = We(),
        Z = Ve(),
        G = A(() => Z.isRtl),
        L = W(),
        { isViewOptionsVisible: j } = Ze(),
        { isShowDecorationToggle: Y } = Ye(),
        { onScroll: I, isVerticalScrollEndLimitReached: R } = at({ isRtl: G }),
        { isElementScrollableVertical: S, checkIsElementScrollable: D } = lt(L),
        f = [
          { caption: v("european"), value: 0 },
          { caption: v("asian"), value: 1 },
        ],
        H = A(
          () =>
            $_$() && [
              { caption: v("settings_markets_name_full"), value: me.full },
              { caption: v("settings_markets_name_short"), value: me.short },
            ]
        ),
        Q = fe("saveSiteSettings"),
        J = () => {
          $_$();
          Object.assign(e(m), O());
        },
        E = A(
          () =>
            $_$() && {
              "app-settings-toolbar-view-tab--is-scroll-end": !e(S) || e(R),
            }
        );
      return (
        le(D),
        $e(async () => {
          $_$();
          let u, N;
          ([u, N] = K(() => $_$() && Ie())), await u, N(), D();
        }),
        (u, N) => {
          $_$();
          const Ue = d("UiScrollbar"),
            Be = d("UiCaption"),
            ze = d("UiButton");
          return (
            s(),
            w(
              "div",
              { class: x([e(E), "app-settings-toolbar-view-tab"]) },
              [
                l(
                  Ue,
                  {
                    ref_key: "scrollbarElement",
                    ref: L,
                    onScroll: e(I),
                    theme: e(M).gray,
                    limitedHeight: !1,
                    class: "app-settings-toolbar-view-tab__scrollbar",
                  },
                  {
                    default: n(
                      () =>
                        $_$() && [
                          l(
                            ut,
                            {
                              onSubmit: e(Q),
                              isShowSubmitButton: !1,
                              isShowResetButton: !1,
                            },
                            {
                              default: n(
                                () =>
                                  $_$() && [
                                    e(j)
                                      ? (s(),
                                        w("div", St, [
                                          y("div", bt, [
                                            l(
                                              Se,
                                              {
                                                modelValue: e(m).viewType,
                                                "onUpdate:modelValue":
                                                  N[0] ||
                                                  (N[0] = (q) => {
                                                    $_$();
                                                    e(m).viewType = q;
                                                  }),
                                                options: f,
                                                sectionTitle:
                                                  u.$T("settings_view_site"),
                                                uiSelectionTheme: e(M).gray60,
                                              },
                                              null,
                                              8,
                                              [
                                                "modelValue",
                                                "sectionTitle",
                                                "uiSelectionTheme",
                                              ]
                                            ),
                                          ]),
                                        ]))
                                      : V("", !0),
                                    e(B)
                                      ? (s(),
                                        w("div", Tt, [
                                          y("div", vt, [
                                            l(
                                              je,
                                              {
                                                modelValue:
                                                  e(m).coefficientViewId,
                                                "onUpdate:modelValue":
                                                  N[1] ||
                                                  (N[1] = (q) => {
                                                    $_$();
                                                    e(m).coefficientViewId = q;
                                                  }),
                                                inputSelectTheme: e(r),
                                                optionsTheme: e(_),
                                                multiSelectTheme: e(c),
                                              },
                                              null,
                                              8,
                                              [
                                                "modelValue",
                                                "inputSelectTheme",
                                                "optionsTheme",
                                                "multiSelectTheme",
                                              ]
                                            ),
                                          ]),
                                        ]))
                                      : V("", !0),
                                    e(b)
                                      ? (s(),
                                        w("div", ft, [
                                          y("div", wt, [
                                            l(
                                              Qe,
                                              {
                                                modelValue: e(m).timeFormat,
                                                "onUpdate:modelValue":
                                                  N[2] ||
                                                  (N[2] = (q) => {
                                                    $_$();
                                                    e(m).timeFormat = q;
                                                  }),
                                              },
                                              null,
                                              8,
                                              ["modelValue"]
                                            ),
                                          ]),
                                        ]))
                                      : V("", !0),
                                    e($)
                                      ? (s(),
                                        w("div", yt, [
                                          y("div", kt, [
                                            l(
                                              Se,
                                              {
                                                modelValue:
                                                  e(m).marketsNameType,
                                                "onUpdate:modelValue":
                                                  N[3] ||
                                                  (N[3] = (q) => {
                                                    $_$();
                                                    e(m).marketsNameType = q;
                                                  }),
                                                options: e(H),
                                                sectionTitle: u.$T(
                                                  "settings_markets_name"
                                                ),
                                                uiSelectionTheme: e(p),
                                              },
                                              null,
                                              8,
                                              [
                                                "modelValue",
                                                "options",
                                                "sectionTitle",
                                                "uiSelectionTheme",
                                              ]
                                            ),
                                          ]),
                                        ]))
                                      : V("", !0),
                                    y("div", Ct, [
                                      l(
                                        qe,
                                        {
                                          onUpdateSettings: e(k),
                                          onDiscardUnsavedSettings: J,
                                          settings: e(m),
                                          uiSelectionTheme: e(M).gray60,
                                        },
                                        null,
                                        8,
                                        [
                                          "onUpdateSettings",
                                          "settings",
                                          "uiSelectionTheme",
                                        ]
                                      ),
                                    ]),
                                    e(Y)
                                      ? (s(), w("div", Ut, [l(Xe)]))
                                      : V("", !0),
                                    e(z)
                                      ? (s(), w("div", Bt, [l(Je)]))
                                      : V("", !0),
                                  ]
                              ),
                              _: 1,
                            },
                            8,
                            ["onSubmit"]
                          ),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["onScroll", "theme"]
                ),
                y("div", zt, [
                  l(
                    ze,
                    { onClick: e(Q), block: "", theme: e(M).accent },
                    {
                      default: n(
                        () =>
                          $_$() && [
                            l(
                              Be,
                              { size: e(T).m },
                              {
                                default: n(
                                  () => $_$() && [C(U(u.$T("main_save")), 1)]
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
                    ["onClick", "theme"]
                  ),
                ]),
              ],
              2
            )
          );
        }
      );
    },
  }),
  ie = X(Et, [["__scopeId", "data-v-494a319b"]]),
  P = { SETTINGS: 1, TIMEZONE: 2, LANGUAGE: 3 },
  Vt = F({
    __name: "AppSettingsToolbarTimeTab",
    emits: ["setTimeZone"],
    async setup(h) {
      $_$();
      let o, a, t, i;
      const {
          config: {
            uiSelectContentTheme: r,
            uiSearchTheme: _,
            uiSelectOptionsTheme: c,
            uiMessageBlockTheme: p,
            uiOptionTheme: v,
            uiSelectContentSrollbarTheme: B,
            skeletonTheme: z,
          },
        } = (([t, i] = ee(() => te())),
        (t = (([o, a] = K(() => t)), (o = await o), a(), o)),
        i(),
        t)(),
        { loadTimezones: $, timezone: b, timezoneOptions: m } = we(),
        { searchQuery: k, timezoneOptionsFiltered: O } = Ke(m),
        Z = fe("setTimezone");
      return (
        le($),
        (G, L) => {
          $_$();
          const j = d("UiSearch"),
            Y = d("UiCaption"),
            I = d("UiOption"),
            R = d("UiSelectOptions"),
            S = d("UiMessageBlockV2"),
            D = d("UiSelectContent");
          return e(m).length
            ? (s(),
              g(
                D,
                {
                  key: 0,
                  theme: e(r),
                  scrollbarTheme: e(B),
                  limitedHeight: !1,
                  size: e(T).l,
                  class: "app-settings-toolbar-time-tab",
                },
                {
                  top: n(
                    () =>
                      $_$() && [
                        l(
                          j,
                          {
                            modelValue: e(k),
                            "onUpdate:modelValue":
                              L[0] ||
                              (L[0] = (f) =>
                                $_$() && re(k) ? (k.value = f) : null),
                            placeholder: G.$T("link_menu_search"),
                            theme: e(_),
                            size: e(T).m,
                            isSearchButtonDisabled: "",
                            class: "app-settings-toolbar-time-tab__search",
                          },
                          null,
                          8,
                          ["modelValue", "placeholder", "theme", "size"]
                        ),
                      ]
                  ),
                  default: n(
                    () =>
                      $_$() && [
                        e(O).length
                          ? (s(),
                            g(
                              R,
                              {
                                key: 0,
                                options: e(O),
                                theme: e(c),
                                hasSeparator: "",
                                class: "app-settings-toolbar-time-tab__content",
                              },
                              {
                                item: n(
                                  ({ option: f }) =>
                                    $_$() && [
                                      l(
                                        I,
                                        {
                                          onClick: (H) => $_$() && e(Z)(f),
                                          isSelected: f.value === e(b),
                                          theme: e(v),
                                        },
                                        {
                                          caption: n(
                                            () => $_$() && [C(U(f.caption), 1)]
                                          ),
                                          additional: n(
                                            () =>
                                              $_$() && [
                                                l(
                                                  Y,
                                                  { size: e(T).xs },
                                                  {
                                                    default: n(
                                                      () =>
                                                        $_$() && [
                                                          C(
                                                            U(f.description),
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
                                        ["onClick", "isSelected", "theme"]
                                      ),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["options", "theme"]
                            ))
                          : (s(),
                            g(
                              S,
                              { key: 1, placeholder: "", theme: e(p) },
                              {
                                title: n(
                                  () =>
                                    $_$() && [
                                      C(U(G.$T("main_search_not_found")), 1),
                                    ]
                                ),
                                default: n(
                                  () =>
                                    $_$() && [
                                      C(
                                        U(
                                          G.$T(
                                            "betting_games_search_result_empty_subtitle"
                                          )
                                        ),
                                        1
                                      ),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["theme"]
                            )),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["theme", "scrollbarTheme", "size"]
              ))
            : (s(), g(xe, { key: 1, theme: e(z) }, null, 8, ["theme"]));
        }
      );
    },
  }),
  $t = X(Vt, [["__scopeId", "data-v-a88f3015"]]),
  It = { class: "app-settings-toolbar-language-tab-option__content" },
  Ot = 8,
  Dt = F({
    __name: "AppSettingsToolbarLanguageTab",
    async setup(h) {
      $_$();
      let o, a, t, i;
      const {
          config: {
            uiSelectContentTheme: r,
            uiSearchTheme: _,
            uiSelectOptionsTheme: c,
            uiMessageBlockTheme: p,
            uiOptionTheme: v,
            uiSelectContentSrollbarTheme: B,
            skeletonTheme: z,
          },
          style: $,
        } = (([t, i] = ee(() => te())),
        (t = (([o, a] = K(() => t)), (o = await o), a(), o)),
        i(),
        t)(),
        { languages: b, currentLanguageCode: m, setLanguage: k } = Ce(),
        { searchQuery: O, languageOptionsFiltered: Z } = nt(b),
        G = ke(),
        L = W(e(m)),
        j = e(b).length > Ot,
        Y = (I) => {
          G.modules.header.setLanguage(I.countryCode), (L.value = I.code), k(I);
        };
      return (I, R) => {
        $_$();
        const S = d("UiSearch"),
          D = d("UiIcoCountry"),
          f = d("UiCaption"),
          H = d("UiOption"),
          Q = d("UiSelectOptions"),
          J = d("UiMessageBlockV2"),
          E = d("UiSelectContent");
        return e(b).length
          ? (s(),
            g(
              E,
              {
                key: 0,
                style: Oe(e($)),
                theme: e(r),
                scrollbarTheme: e(B),
                limitedHeight: !1,
                size: e(T).l,
                rounded: !1,
                class: "app-settings-toolbar-language-tab",
              },
              De(
                {
                  default: n(
                    () =>
                      $_$() && [
                        e(Z).length
                          ? (s(),
                            g(
                              Q,
                              {
                                key: 0,
                                options: e(Z),
                                theme: e(c),
                                hasSeparator: "",
                                class:
                                  "app-settings-toolbar-language-tab__content",
                              },
                              {
                                item: n(
                                  ({ option: u }) =>
                                    $_$() && [
                                      l(
                                        H,
                                        {
                                          onClick: (N) => Y(u),
                                          isSelected: u.code === e(L),
                                          theme: e(v),
                                          class: x([
                                            "app-settings-toolbar-language-tab-option",
                                            {
                                              "app-settings-toolbar-language-tab-option--is-selected":
                                                u.code === e(L),
                                            },
                                          ]),
                                        },
                                        {
                                          default: n(
                                            () =>
                                              $_$() && [
                                                y("span", It, [
                                                  l(
                                                    D,
                                                    {
                                                      class:
                                                        "app-settings-toolbar-language-tab-option__ico",
                                                      ico: u.picture,
                                                    },
                                                    null,
                                                    8,
                                                    ["ico"]
                                                  ),
                                                  l(
                                                    f,
                                                    {
                                                      size: e(T).xs,
                                                      uppercase: "",
                                                      class:
                                                        "app-settings-toolbar-language-tab-option__country",
                                                    },
                                                    {
                                                      default: n(
                                                        () =>
                                                          $_$() && [
                                                            C(
                                                              U(u.countryCode),
                                                              1
                                                            ),
                                                          ]
                                                      ),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ["size"]
                                                  ),
                                                  l(
                                                    f,
                                                    {
                                                      size: e(T).xs,
                                                      class:
                                                        "app-settings-toolbar-language-tab-option__title",
                                                    },
                                                    {
                                                      default: n(
                                                        () =>
                                                          $_$() && [
                                                            C(U(u.title), 1),
                                                          ]
                                                      ),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ["size"]
                                                  ),
                                                ]),
                                              ]
                                          ),
                                          _: 2,
                                        },
                                        1032,
                                        [
                                          "onClick",
                                          "isSelected",
                                          "theme",
                                          "class",
                                        ]
                                      ),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["options", "theme"]
                            ))
                          : (s(),
                            g(
                              J,
                              { key: 1, placeholder: "", theme: e(p) },
                              {
                                title: n(
                                  () =>
                                    $_$() && [
                                      C(U(I.$T("main_search_not_found")), 1),
                                    ]
                                ),
                                default: n(
                                  () =>
                                    $_$() && [
                                      C(
                                        U(
                                          I.$T(
                                            "betting_games_search_result_empty_subtitle"
                                          )
                                        ),
                                        1
                                      ),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["theme"]
                            )),
                      ]
                  ),
                  _: 2,
                },
                [
                  j
                    ? {
                        name: "top",
                        fn: n(
                          () =>
                            $_$() && [
                              l(
                                S,
                                {
                                  modelValue: e(O),
                                  "onUpdate:modelValue":
                                    R[0] ||
                                    (R[0] = (u) =>
                                      $_$() && re(O) ? (O.value = u) : null),
                                  theme: e(_),
                                  placeholder: I.$T("link_menu_search"),
                                  size: e(T).m,
                                  isSearchButtonDisabled: "",
                                  class:
                                    "app-settings-toolbar-language-tab__search",
                                },
                                null,
                                8,
                                ["modelValue", "theme", "placeholder", "size"]
                              ),
                            ]
                        ),
                        key: "0",
                      }
                    : void 0,
                ]
              ),
              1032,
              ["style", "theme", "scrollbarTheme", "size"]
            ))
          : (s(), g(st, { key: 1, theme: e(z) }, null, 8, ["theme"]));
      };
    },
  }),
  Nt = X(Dt, [["__scopeId", "data-v-77e7292e"]]),
  Lt = () => {
    $_$();
    const h = ve(),
      [o = [], a] = ae(1164, 1709),
      t = o.map(Number),
      r = t.includes(P.TIMEZONE) ? P.TIMEZONE : P.LANGUAGE,
      _ = [
        {
          name: h("link_menu_settings"),
          value: P.SETTINGS,
          component: ie,
          visible: t.includes(P.SETTINGS),
        },
        {
          name: h("settings_language_title"),
          value: P.LANGUAGE,
          component: Nt,
          visible: t.length ? t.includes(P.LANGUAGE) : !0,
        },
        {
          name: h("settings_time_zone_title"),
          value: P.TIMEZONE,
          component: $t,
          visible: t.length ? t.includes(P.TIMEZONE) : !0,
        },
      ].filter(({ visible: b }) => b),
      c = t.map((b) => _.find((m) => m.value === b)).filter(Ne),
      p = a && c.length,
      v = p ? c : _,
      B = W(Number(p ? c[0].value : r)),
      z = A(() => {
        var b, m;
        return (m =
          (b = _.find((k) => $_$() && Number(k.value) === e(B))) == null
            ? void 0
            : b.component) != null
          ? m
          : ie;
      });
    return {
      appSettingsTabsSorted: v,
      appSettingsCurrentTab: B,
      currentTabComponent: z,
      appSettingsOnChangeTab: (b) => {
        B.value = Number(b.value);
      },
    };
  },
  At = { class: "app-settings-toolbar-dropdown-tabs" },
  Mt = { class: "app-settings-toolbar-dropdown-tabs__header" },
  Ft = F({
    __name: "AppSettingsToolbarDropdownTabs",
    emits: ["setTimezone", "saveSiteSettings"],
    setup(h) {
      const {
        appSettingsCurrentTab: o,
        appSettingsTabsSorted: a,
        currentTabComponent: t,
      } = Lt();
      return (i, r) => {
        $_$();
        const _ = d("UiCaption"),
          c = d("UiTabs");
        return (
          s(),
          w("div", At, [
            y("div", Mt, [
              l(
                c,
                {
                  modelValue: e(o),
                  "onUpdate:modelValue":
                    r[0] ||
                    (r[0] = (p) => ($_$() && re(o) ? (o.value = p) : null)),
                  options: e(a),
                  name: "app-settings-toolbar-dropdown_tabs",
                  equal: "",
                  indent: "",
                  theme: e(M).gray,
                },
                {
                  default: n(
                    ({ item: p }) =>
                      $_$() && [
                        l(
                          _,
                          { size: e(T).m },
                          {
                            default: n(() => $_$() && [C(U(p.name), 1)]),
                            _: 2,
                          },
                          1032,
                          ["size"]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["modelValue", "options", "theme"]
              ),
            ]),
            e(t)
              ? (s(),
                g(
                  Le(e(t)),
                  {
                    key: 0,
                    onSetTimezone:
                      r[1] || (r[1] = (p) => i.$emit("setTimezone", p)),
                    onSaveSiteSettings:
                      r[2] || (r[2] = (p) => i.$emit("saveSiteSettings")),
                  },
                  null,
                  32
                ))
              : V("", !0),
          ])
        );
      };
    },
  }),
  be = X(Ft, [["__scopeId", "data-v-f9706bbf"]]),
  Gt = F({
    __name: "AppSettingsToolbarPanel",
    props: {
      isLanguageBefore: { type: Boolean, default: !0 },
      hasPadding: { type: Boolean, default: !1 },
      theme: { default: void 0 },
    },
    setup(h) {
      $_$();
      const o = h,
        { currentLanguage: a, currentLanguageCountryCode: t } = Ce(),
        { date: i } = et(),
        r = Ae(),
        _ = A(() => $_$() && r.formatTimeByDate(e(i))),
        c = A(() => $_$() && e(a).picture),
        p = A(() => ({
          [`app-settings-toolbar-panel--theme-${o.theme}`]: !!o.theme,
          "app-settings-toolbar-panel--has-padding": o.hasPadding,
        })),
        v = A(() => (o.isLanguageBefore ? t : _)),
        B = A(() => (o.isLanguageBefore ? _ : t));
      return (z, $) => {
        $_$();
        const b = d("UiIcoCountry"),
          m = d("UiCaption"),
          k = ye;
        return (
          s(),
          w(
            "span",
            { class: x([e(p), "app-settings-toolbar-panel"]) },
            [
              l(k, null, {
                default: n(
                  () =>
                    $_$() && [
                      z.isLanguageBefore
                        ? (s(),
                          g(b, { key: 0, size: e(T).s, ico: e(c) }, null, 8, [
                            "size",
                            "ico",
                          ]))
                        : V("", !0),
                      l(
                        m,
                        { size: e(T).xs, uppercase: "" },
                        { default: n(() => $_$() && [C(U(e(v)), 1)]), _: 1 },
                        8,
                        ["size"]
                      ),
                      l(
                        m,
                        { size: e(T).xs },
                        {
                          default: n(
                            () => ($_$() && $[0]) || ($[0] = [C(" / ")])
                          ),
                          _: 1,
                        },
                        8,
                        ["size"]
                      ),
                      z.isLanguageBefore
                        ? V("", !0)
                        : (s(),
                          g(b, { key: 1, size: e(T).s, ico: e(c) }, null, 8, [
                            "size",
                            "ico",
                          ])),
                      l(
                        m,
                        { size: e(T).xs, uppercase: "" },
                        { default: n(() => $_$() && [C(U(e(B)), 1)]), _: 1 },
                        8,
                        ["size"]
                      ),
                    ]
                ),
                _: 1,
              }),
            ],
            2
          )
        );
      };
    },
  }),
  Te = X(Gt, [["__scopeId", "data-v-89fa6dd9"]]),
  Rt = { key: 0, class: "app-settings-toolbar-dropdown-toggle-event" },
  Ht = ["src"],
  Pt = { class: "app-settings-toolbar-dropdown__content" },
  Wt = { class: "app-settings-toolbar-dropdown__content" },
  eo = F({
    __name: "AppSettingsToolbar",
    props: {
      theme: { default: void 0 },
      noTabsInSettingsDropdown: { type: Boolean, default: !0 },
      size: { default: T.m },
    },
    async setup(h) {
      $_$();
      let o, a, t, i;
      const r = h,
        {
          config: { uiDropdownToolbarTheme: _ },
        } = (([t, i] = ee(() => te())),
        (t = (([o, a] = K(() => t)), (o = await o), a(), o)),
        i(),
        t)(),
        c = Me(),
        p = ke(),
        { saveSettings: v, updateSettings: B } = tt(),
        { timezone: z } = we(),
        { saveTimezoneOffset: $ } = ot(),
        [b, m, k, O] = ae(608, 605, 850, 331),
        Z = b && (m || k),
        G = A(() => ({
          [`app-settings-toolbar--theme-${r.theme}`]: !!r.theme,
          [`app-settings-toolbar--size-${r.size}`]: !!r.size,
        })),
        L = { "app-settings-toolbar-dropdown__trigger--rounded-left": !O },
        j = () => {
          p.modules.office.trackClickAccMenuSettings();
        },
        Y = async (S, D) => {
          $_$();
          let f, H;
          p.modules.header.setTimeZone(S.caption),
            (z.value = S.value),
            D(),
            ([f, H] = K(() => $(S.value))),
            await f,
            H();
        },
        I = Fe("bettingSettingsDropdown"),
        R = (S) => {
          $_$();
          var D;
          O && (B(S), (D = e(I)) == null || D.open());
        };
      return (
        le(() => {
          c.on("onShowSettingsWithPreinstall", R);
        }),
        Ge(() => {
          c.off("onShowSettingsWithPreinstall", R);
        }),
        (S, D) => {
          $_$();
          const f = d("UiIco"),
            H = ye,
            Q = d("UiDropdownTrigger"),
            J = Re("tooltip");
          return (
            s(),
            w(
              "div",
              { class: x([e(G), "app-settings-toolbar"]) },
              [
                e(O)
                  ? (s(),
                    g(
                      e(de),
                      {
                        key: 0,
                        ref_key: "bettingSettingsDropdown",
                        ref: I,
                        align: e(ue).END,
                        stopElementsStore: e(_e),
                        theme: e(_),
                        rounded: !1,
                        class:
                          "app-settings-toolbar__dropdown app-settings-toolbar-dropdown",
                      },
                      {
                        customTrigger: n(
                          ({ isOpen: E, toggle: u }) =>
                            $_$() && [
                              ge(
                                (s(),
                                g(
                                  Q,
                                  {
                                    ref: "dropdownBtn",
                                    onClick: u,
                                    "aria-label": S.$T("link_menu_settings"),
                                    toggled: E,
                                    "aria-expanded": E,
                                    theme: S.theme,
                                    rounded: !1,
                                    class:
                                      "app-settings-toolbar-dropdown__settings",
                                  },
                                  {
                                    default: n(
                                      () =>
                                        $_$() && [
                                          l(H, null, {
                                            default: n(
                                              () =>
                                                $_$() && [
                                                  e(Z)
                                                    ? (s(),
                                                      w("span", Rt, [
                                                        e(k)
                                                          ? (s(),
                                                            g(
                                                              f,
                                                              {
                                                                key: 0,
                                                                ico: e(oe)
                                                                  .FIRE_GRADIENT,
                                                                size: e(T).xl,
                                                                class:
                                                                  "app-settings-toolbar-dropdown-toggle-event__decor",
                                                              },
                                                              null,
                                                              8,
                                                              ["ico", "size"]
                                                            ))
                                                          : V("", !0),
                                                        l(
                                                          f,
                                                          {
                                                            ico: e(oe).SETTINGS,
                                                            class:
                                                              "app-settings-toolbar-dropdown-toggle-event__ico",
                                                          },
                                                          null,
                                                          8,
                                                          ["ico"]
                                                        ),
                                                        e(m)
                                                          ? (s(),
                                                            w(
                                                              "img",
                                                              {
                                                                key: 1,
                                                                src: S.$mediaUrl(
                                                                  "partners_event_holiday_settings_decor",
                                                                  e(He).SVG
                                                                ),
                                                                alt: "",
                                                                class:
                                                                  "app-settings-toolbar-dropdown-toggle-event__img",
                                                              },
                                                              null,
                                                              8,
                                                              Ht
                                                            ))
                                                          : V("", !0),
                                                      ]))
                                                    : (s(),
                                                      g(
                                                        f,
                                                        {
                                                          key: 1,
                                                          ico: e(oe).SETTINGS,
                                                          class:
                                                            "app-settings-toolbar-dropdown__ico",
                                                        },
                                                        null,
                                                        8,
                                                        ["ico"]
                                                      )),
                                                ]
                                            ),
                                            _: 1,
                                          }),
                                        ]
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  [
                                    "onClick",
                                    "aria-label",
                                    "toggled",
                                    "aria-expanded",
                                    "theme",
                                  ]
                                )),
                                [[J, S.$T("link_menu_settings")]]
                              ),
                            ]
                        ),
                        default: n(
                          ({ close: E }) =>
                            $_$() && [
                              y("div", Pt, [
                                S.noTabsInSettingsDropdown
                                  ? (s(),
                                    g(
                                      ie,
                                      {
                                        key: 0,
                                        onClick: j,
                                        onSaveSiteSettings: (u) =>
                                          $_$() && e(v)(E),
                                      },
                                      null,
                                      8,
                                      ["onSaveSiteSettings"]
                                    ))
                                  : (s(),
                                    g(
                                      be,
                                      {
                                        key: 1,
                                        onSetTimezone: (u) => Y(u, E),
                                        onSaveSiteSettings: (u) =>
                                          $_$() && e(v)(E),
                                      },
                                      null,
                                      8,
                                      ["onSetTimezone", "onSaveSiteSettings"]
                                    )),
                              ]),
                            ]
                        ),
                        _: 1,
                      },
                      8,
                      ["align", "stopElementsStore", "theme"]
                    ))
                  : V("", !0),
                S.noTabsInSettingsDropdown
                  ? (s(),
                    g(
                      e(de),
                      {
                        key: 1,
                        align: e(ue).END,
                        stopElementsStore: e(_e),
                        theme: e(_),
                        triggerTheme: S.theme,
                        triggerTooltip: S.$T("settings_language_title"),
                        class:
                          "app-settings-toolbar__dropdown app-settings-toolbar-dropdown",
                      },
                      {
                        customTrigger: n(
                          ({ isOpen: E, toggle: u }) =>
                            $_$() && [
                              ge(
                                (s(),
                                g(
                                  Q,
                                  {
                                    ref: "dropdownBtn",
                                    onClick: u,
                                    "aria-label": S.$T(
                                      "settings_language_and_time_zone_title"
                                    ),
                                    toggled: E,
                                    "aria-expanded": E,
                                    theme: S.theme,
                                    rounded: !1,
                                    class: x([
                                      "app-settings-toolbar-dropdown__trigger",
                                      L,
                                    ]),
                                  },
                                  { default: n(() => $_$() && [l(Te)]), _: 2 },
                                  1032,
                                  [
                                    "onClick",
                                    "aria-label",
                                    "toggled",
                                    "aria-expanded",
                                    "theme",
                                  ]
                                )),
                                [
                                  [
                                    J,
                                    S.$T(
                                      "settings_language_and_time_zone_title"
                                    ),
                                  ],
                                ]
                              ),
                            ]
                        ),
                        default: n(
                          ({ close: E }) =>
                            $_$() && [
                              y("div", Wt, [
                                l(
                                  be,
                                  { onSetTimezone: (u) => Y(u, E) },
                                  null,
                                  8,
                                  ["onSetTimezone"]
                                ),
                              ]),
                            ]
                        ),
                        _: 1,
                      },
                      8,
                      [
                        "align",
                        "stopElementsStore",
                        "theme",
                        "triggerTheme",
                        "triggerTooltip",
                      ]
                    ))
                  : (s(),
                    g(
                      Te,
                      {
                        key: 2,
                        theme: S.theme,
                        isLanguageBefore: !1,
                        hasPadding: "",
                      },
                      null,
                      8,
                      ["theme"]
                    )),
              ],
              2
            )
          );
        }
      );
    },
  });
export {
  Jt as _sfc_main,
  Kt as _sfc_main$1,
  eo as _sfc_main$2,
  xt as isLineOrLiveHeaderMenuItemActive,
};
