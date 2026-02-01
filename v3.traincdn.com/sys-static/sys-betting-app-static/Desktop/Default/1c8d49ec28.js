import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./4fbfcd976f.js",
      "./e063df8dd1.js",
      "./9de70556bb.js",
      "./entry-50afb6f36c.js",
      "./7fd3152d11.js",
      "./1af6a171a2.js",
      "./9e4e245c05.js",
      "./58a21526ee.js",
      "./ff2996a70d.js",
      "./858ab97c10.js",
      "./6550e9bfb1.js",
      "./c7ea6bc74a.js",
      "./3004035142.js",
      "./37dd3dae1b.js",
      "./944eab39d4.js",
      "./4a993370c6.js",
      "./aa92bf211f.js",
      "./25dbd9c5df.js",
      "./10dcfb9c91.js",
      "./11286bfc75.js",
      "./bb0d3b59f5.js",
      "./9816d50199.js",
      "./dd584157d6.js",
      "./22d05bfee4.js",
      "./c56b857b52.css",
      "./539bf85163.css",
    ])
) => $_$() && i.map((i) => d[i]);
import {
  runtimeCore_esmBundler_defineComponent as h,
  index_useT as fe,
  index_getConfigs as Le,
  reactivity_esmBundler_markRaw as Ve,
  bettingType_BettingType as j,
  runtimeCore_esmBundler_resolveComponent as S,
  runtimeCore_esmBundler_createBlock as m,
  runtimeCore_esmBundler_openBlock as s,
  reactivity_esmBundler_unref as e,
  theme_constants_themeType as ze,
  runtimeCore_esmBundler_withCtx as o,
  runtimeCore_esmBundler_createElementVNode as E,
  shared_esmBundler_normalizeClass as V,
  runtimeCore_esmBundler_createCommentVNode as U,
  runtimeCore_esmBundler_createVNode as a,
  iconName as Y,
  size_constants_sizeType as f,
  runtimeCore_esmBundler_createTextVNode as $,
  shared_esmBundler_toDisplayString as b,
  execAsync as Ae,
  runtimeCore_esmBundler_createElementBlock as F,
  runtimeCore_esmBundler_renderSlot as Z,
  runtimeCore_esmBundler_computed as _,
  runtimeCore_esmBundler_resolveDirective as ee,
  runtimeCore_esmBundler_withDirectives as te,
  reactivity_esmBundler_toRefs as Ee,
  runtimeCore_esmBundler_mergeModels as we,
  runtimeCore_esmBundler_useModel as Oe,
  useGlobalStore as Se,
  index_getConfig as ne,
  reactivity_esmBundler_ref as Re,
  runtimeCore_esmBundler_watch as pe,
  UiDropdown_vue_default as ce,
  stopElements as me,
  alignType as Q,
  runtimeCore_esmBundler_Fragment as oe,
  runtimeCore_esmBundler_renderList as Te,
  reactivity_esmBundler_isRef as _e,
  runtimeDom_esmBundler_withModifiers as Ke,
  runtimeCore_esmBundler_createSlots as ye,
  WeightType as de,
  runtimeCore_esmBundler_Suspense as Pe,
  runtimeCore_esmBundler_resolveDynamicComponent as se,
  BettingPageType as Ge,
  runtimeCore_esmBundler_defineAsyncComponent as He,
  runtimeCore_esmBundler_KeepAlive as Ne,
  router_useRoute as xe,
  router_useRouter as We,
  whenever as je,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useBettingClearSelectedData as Ye,
  useSelectedBettingEntitiesStore as qe,
  useDateTimeFilterStore as Je,
  useBettingStateInjector as Qe,
} from "./9de70556bb.js";
import { useBettingPageData as P } from "./4a993370c6.js";
import {
  useSportsMenuAppInjector as ie,
  useSportsMenuComponentStateStore as he,
} from "./25dbd9c5df.js";
import { useSportsMenuAppConfig as K } from "./9816d50199.js";
import {
  useBettingRoute as Xe,
  _export_sfc as z,
  defineProvider as Ze,
  useRtlInfo as et,
  ComponentListState as X,
  __vitePreload as tt,
} from "./entry-50afb6f36c.js";
import { useBettingStore as Me } from "./1af6a171a2.js";
import { useSportsMenuAnalytics as q } from "./b11db110fe.js";
import { useMainMenuAnalytics as ve } from "./30806a74d6.js";
import {
  UiSportsMenuHead as Ce,
  UiSportsMenuSectionName as nt,
} from "./e1e32a66a3.js";
import { useSportsMenuStore as G } from "./e063df8dd1.js";
import {
  useSelectedSportMenuEntitiesStore as ot,
  useCountryFilterStore as st,
} from "./aa92bf211f.js";
import {
  useSportsMenuFiltersStore as it,
  useSportsMenuDateTimeFilterData as rt,
} from "./6550e9bfb1.js";
import { BETTING_PROPS as ge } from "./858ab97c10.js";
import { SportsMenuGroup as lt } from "./51ca376446.js";
import {
  UiSportsMenu as at,
  _sfc_main$1 as ut,
  SportsMenuMainLoading as be,
} from "./119c73ece6.js";
const pt = h({
    __name: "SportsMenuTabs",
    setup(i) {
      $_$();
      const t = fe(),
        [n, r] = Le(357, 358),
        u = Me(),
        { trackMenuFilterLine: c } = ve(),
        { trackMenuBettingSectionSelect: d } = q(),
        { bettingType: l } = ie(),
        {
          sportsMenuAppConfig: {
            sportsMenuTabsIsUppercase: T,
            sportsMenuTabsIsDotTopRightPosition: g,
          },
        } = K(),
        { bettingClearAllFilters: M } = Ye(),
        { changeRoute: y } = Xe(),
        { isHomePage: p } = P(),
        v = Ve([
          { value: j.LIVE, name: t(r), isLive: !0 },
          { value: j.LINE, name: t(n), ico: "stream", isLive: !1 },
        ]),
        k = async (I) => {
          $_$();
          let D, B;
          I !== e(l) &&
            (M(),
            (u.currentBettingType = I),
            d(I),
            c(I),
            e(p) || (([D, B] = Ae(() => y({ section: I }))), await D, B()));
        };
      return (I, D) => {
        $_$();
        const B = S("UiIcoV2"),
          w = S("UiCaption"),
          H = S("UiTabs");
        return (
          s(),
          m(
            H,
            {
              "onUpdate:modelValue": k,
              modelValue: e(l),
              theme: e(ze).primary_20,
              name: "sport_menu_active_tab",
              options: e(v),
              equal: "",
              rounded: !1,
              class: "sports-menu-tabs",
            },
            {
              default: o(
                ({ item: A }) =>
                  $_$() && [
                    E(
                      "div",
                      {
                        class: V([
                          {
                            "sports-menu-tabs__item--is-active":
                              A.value === e(l),
                          },
                          "sports-menu-tabs__item",
                        ]),
                      },
                      [
                        A.isLive
                          ? (s(),
                            m(
                              B,
                              {
                                key: 0,
                                size: e(f).s,
                                ico: e(Y).SIGNAL_STREAM,
                                class: V([
                                  {
                                    "sports-menu-tabs__ico--position-top-right":
                                      e(g),
                                  },
                                  "sports-menu-tabs__ico",
                                ]),
                              },
                              null,
                              8,
                              ["size", "ico", "class"]
                            ))
                          : U("", !0),
                        a(
                          w,
                          { title: A.caption, size: e(f).m, uppercase: e(T) },
                          {
                            default: o(() => $_$() && [$(b(A.name), 1)]),
                            _: 2,
                          },
                          1032,
                          ["title", "size", "uppercase"]
                        ),
                      ],
                      2
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            ["modelValue", "theme", "options"]
          )
        );
      };
    },
  }),
  on = z(pt, [["__scopeId", "data-v-b0dfe3c0"]]),
  ct = h({
    __name: "UiSportsMenuToggle",
    props: { toggled: { type: Boolean } },
    setup(i) {
      const {
        sportsMenuAppConfig: { sportsMenuToggleTheme: t },
      } = K();
      return (n, r) =>
        $_$() &&
        (s(),
        F(
          "button",
          {
            class: V([
              {
                "ui-sports-menu-toggle--is-toggled": n.toggled,
                [`ui-sports-menu-toggle--theme-${e(t)}`]: e(t),
              },
              "ui-sports-menu-toggle",
            ]),
            type: "button",
          },
          [Z(n.$slots, "default", {}, void 0, !0)],
          2
        ));
    },
  }),
  Ie = z(ct, [["__scopeId", "data-v-ab16d7ee"]]),
  Be = h({
    __name: "SportsMenuToggleSelected",
    setup(i) {
      $_$();
      const t = fe(),
        { trackMainMenuEventsToggle: n } = q(),
        { bettingType: r } = G(),
        {
          listSelectedSectionSportIds: u,
          setSelectedSectionSportIds: c,
          listSelectedMenuSectionIds: d,
          setSelectedMenuSectionIds: l,
          setSelectedSectionChampIds: T,
        } = ot(),
        {
          listSelectedSectionSportIds: g,
          listSelectedMenuSectionIds: M,
          listSelectedSectionChampIds: y,
        } = qe(),
        { groupByCategories: p } = ie(),
        v = _(() => ($_$() && e(p) ? e(d).length > 0 : e(u).length > 0)),
        k = _(() =>
          $_$() && e(v) ? !0 : e(p) ? e(M).length > 0 : e(g).length > 0
        ),
        I = () => {
          $_$();
          e(p) ? l([]) : c([]);
        },
        D = () => {
          $_$();
          l(e(M)), c(e(g)), T(e(y));
        },
        B = () => {
          $_$();
          e(v) ? I() : D(), n(e(v), e(r));
        },
        w = _(() =>
          $_$() && e(v)
            ? t("menu_control_collapse_selected")
            : t("menu_control_expand_selected")
        );
      return (H, A) => {
        $_$();
        const J = S("UiIco"),
          N = ee("tooltip");
        return e(k)
          ? te(
              (s(),
              m(
                Ie,
                {
                  key: 0,
                  onClick: B,
                  "aria-label": e(w),
                  class: "sports-menu-toggle-selected",
                },
                {
                  default: o(
                    () =>
                      $_$() && [
                        a(
                          J,
                          { size: e(f).xxs, ico: e(Y).CHEVRON_DOUBLE_UP },
                          null,
                          8,
                          ["size", "ico"]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["aria-label"]
              )),
              [[N, e(w)]]
            )
          : U("", !0);
      };
    },
  }),
  $e = h({
    __name: "SportsMenuToggleByCountry",
    setup(i) {
      const { bettingType: t, sportsMenuTriggerUpdateData: n } = G(),
        { isGroupByCountry: r, sportsMenuToggleGroupByCountry: u } = it(),
        { trackGroupByCountry: c } = q(),
        d = () => {
          $_$();
          u(), c(e(r), e(t)), e(r) && n();
        };
      return (l, T) => {
        $_$();
        const g = S("UiIco"),
          M = ee("tooltip");
        return te(
          (s(),
          m(
            Ie,
            {
              onClick: d,
              "aria-label": l.$T("menu_control_group_by_country"),
              toggled: e(r),
              class: "sports-menu-toggle-by-country",
            },
            {
              default: o(
                () =>
                  $_$() && [
                    a(g, { size: e(f).s, ico: e(Y).GLOBE_ASIA }, null, 8, [
                      "size",
                      "ico",
                    ]),
                  ]
              ),
              _: 1,
            },
            8,
            ["aria-label", "toggled"]
          )),
          [[M, l.$T("menu_control_group_by_country")]]
        );
      };
    },
  }),
  { provide: mt, inject: _t } = Ze(({ pageType: i, bettingType: t }) => {
    $_$();
    Je({ pageType: i, bettingType: t });
    const n = _(() => $_$() && e(t) === j.LIVE);
    return { pageType: i, bettingType: t, isLive: n };
  }),
  re = h({
    name: "DateTimeFilterAppDataProvider",
    props: { pageType: ge.pageType, bettingType: ge.bettingType },
    setup(i, { slots: t }) {
      $_$();
      return (
        mt(Ee(i)),
        () => {
          var n;
          return (n = t.default) == null ? void 0 : n.call(t);
        }
      );
    },
  }),
  dt = h({
    __name: "SportsMenuFilterTimeOptions",
    props: we({ options: {} }, { modelValue: {}, modelModifiers: {} }),
    emits: ["update:modelValue"],
    setup(i) {
      $_$();
      const t = Oe(i, "modelValue"),
        { sportsMenuAppConfig: n } = K();
      return (r, u) => {
        $_$();
        const c = S("UiOption"),
          d = S("UiSelectOptions");
        return (
          s(),
          m(
            d,
            {
              options: r.options,
              theme: e(n).sportsMenuFilterTimeOptionsTheme,
              class: "sports-menu-filter-time-options",
            },
            {
              item: o(
                ({ option: l }) =>
                  $_$() && [
                    a(
                      c,
                      {
                        onClick: (T) => (t.value = l.value),
                        captionSize: e(f).m,
                        theme: e(n).sportsMenuFilterTimeOptionTheme,
                      },
                      { caption: o(() => $_$() && [$(b(l.caption), 1)]), _: 2 },
                      1032,
                      ["onClick", "captionSize", "theme"]
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            ["options", "theme"]
          )
        );
      };
    },
  }),
  gt = z(dt, [["__scopeId", "data-v-a147ee38"]]),
  ft = h({
    __name: "SportsMenuFilterTimeTrigger",
    props: { isOpen: { type: Boolean }, theme: {} },
    setup(i) {
      return (t, n) => {
        $_$();
        const r = S("UiIco"),
          u = S("UiCaption"),
          c = S("UiAngleV2");
        return (
          s(),
          F(
            "button",
            {
              type: "button",
              class: V([
                [
                  { "sports-menu-filter-time-trigger--is-open": t.isOpen },
                  `sports-menu-filter-time-trigger--theme-${t.theme}`,
                ],
                "sports-menu-filter-time-trigger",
              ]),
            },
            [
              a(
                r,
                {
                  ico: e(Y).FILTER,
                  class: "sports-menu-filter-time-trigger__ico",
                },
                null,
                8,
                ["ico"]
              ),
              t.$slots.default
                ? (s(),
                  m(
                    u,
                    { key: 0, size: e(f).m },
                    {
                      default: o(
                        () => $_$() && [Z(t.$slots, "default", {}, void 0, !0)]
                      ),
                      _: 3,
                    },
                    8,
                    ["size"]
                  ))
                : U("", !0),
              a(c, { class: "sports-menu-filter-time-trigger__angle" }),
            ],
            2
          )
        );
      };
    },
  }),
  St = z(ft, [["__scopeId", "data-v-0462f6a6"]]),
  Tt = { key: 1, class: "sports-menu-filter-time__content" },
  yt = { class: "sports-menu-filter-time__period" },
  ht = 900,
  Mt = h({
    __name: "SportsMenuFilterTime",
    setup(i) {
      $_$();
      const { isRtl: t } = et(),
        n = Se(),
        { id: r } = ne(-1012),
        u = Re(),
        { pageType: c, bettingType: d } = _t(),
        { sportsMenuAppConfig: l } = K(),
        { currentCountryId: T } = st(),
        { isBetsOnYourPage: g } = P(),
        {
          timeIntervalOptions: M,
          localConfigDateFrom: y,
          localConfigDateTo: p,
          disabledDates: v,
          disabledDatesForDateTo: k,
          currentTimeInterval: I,
          clearFilter: D,
          dateTimeFilterLocalConfig: B,
        } = rt({ pageType: c, bettingType: d }),
        w = _(() => n.getLanguage),
        H = _(() => {
          $_$();
          var C;
          if (e(g)) return (C = e(T)) != null ? C : r;
        }),
        A = _(() => {
          var C;
          return (C = n.windowSize) == null ? void 0 : C.height;
        }),
        J = _(() => ($_$() && e(t) ? "left" : "right")),
        N = _(() => (A.value !== void 0 && A.value > ht ? "bottom" : "top")),
        De = () => {
          n.setIsLeftSectionFiltersOpen(!0);
        },
        Ue = () => {
          n.setIsLeftSectionFiltersOpen(!1);
        };
      return (
        pe(H, () => {
          D();
        }),
        pe(B, () => {
          $_$();
          var C, O, x;
          (C = e(B)) != null &&
            C.dateFrom &&
            (O = e(B)) != null &&
            O.dateTo &&
            ((x = e(u)) == null || x.close());
        }),
        (C, O) => {
          $_$();
          const x = S("UiOption"),
            ae = S("UiCaption"),
            Fe = S("UiAngleV2"),
            ue = S("UiInputDatepicker");
          return (
            s(),
            F(
              "div",
              {
                class: V([
                  `sports-menu-filter-time--theme-${
                    e(l).sportsMenuFilterTimeTheme
                  }`,
                  "sports-menu-filter-time",
                ]),
              },
              [
                a(
                  e(ce),
                  {
                    ref_key: "dropdown",
                    ref: u,
                    onOpen: De,
                    onClose: Ue,
                    align: e(Q).START,
                    sameWidth: "",
                    triangle: !1,
                    theme: e(l).sportsMenuFilterTimeDropdownTheme,
                    stopElementsStore: e(me),
                  },
                  {
                    customTrigger: o(
                      ({ toggle: W, isOpen: L }) =>
                        $_$() && [
                          a(
                            St,
                            {
                              onClick: Ke(W, ["prevent"]),
                              isOpen: L,
                              theme: e(l).sportsMenuFilterTimeTriggerTheme,
                              class: "sports-menu-filter-time__trigger",
                            },
                            {
                              default: o(() => $_$() && [$(b(e(I)), 1)]),
                              _: 2,
                            },
                            1032,
                            ["onClick", "isOpen", "theme"]
                          ),
                        ]
                    ),
                    default: o(
                      ({ close: W }) =>
                        $_$() && [
                          a(
                            x,
                            {
                              onClick: (L) => {
                                $_$();
                                e(D)(), W();
                              },
                              captionSize: e(f).m,
                              theme: e(l).sportsMenuFilterTimeOptionTheme,
                              class: "sports-menu-filter-time__option",
                            },
                            {
                              caption: o(
                                () =>
                                  $_$() && [
                                    $(b(C.$T("betting_filter_all_events")), 1),
                                  ]
                              ),
                              _: 2,
                            },
                            1032,
                            ["onClick", "captionSize", "theme"]
                          ),
                          (s(!0),
                          F(
                            oe,
                            null,
                            Te(
                              e(M),
                              (L) =>
                                $_$() &&
                                (s(),
                                m(
                                  e(ce),
                                  {
                                    key: L.caption,
                                    direction: e(J),
                                    isRtl: e(t),
                                    align: e(Q).START,
                                    stopElementsStore: e(me),
                                    overlay: "",
                                    hoverable: "",
                                    triangle: !1,
                                    theme:
                                      e(l).sportsMenuFilterTimeDropdownTheme,
                                    class: "sports-menu-filter-time__dropdown",
                                  },
                                  {
                                    customTrigger: o(
                                      ({ isOpen: R }) =>
                                        $_$() && [
                                          E(
                                            "button",
                                            {
                                              type: "button",
                                              class: V([
                                                {
                                                  "sports-menu-filter-time__interval--is-open":
                                                    R,
                                                },
                                                "sports-menu-filter-time__interval",
                                              ]),
                                            },
                                            [
                                              a(
                                                ae,
                                                { size: e(f).m },
                                                {
                                                  default: o(
                                                    () =>
                                                      $_$() && [
                                                        $(b(L.caption), 1),
                                                      ]
                                                  ),
                                                  _: 2,
                                                },
                                                1032,
                                                ["size"]
                                              ),
                                              a(Fe, {
                                                class:
                                                  "sports-menu-filter-time__angle",
                                              }),
                                            ],
                                            2
                                          ),
                                        ]
                                    ),
                                    default: o(
                                      () =>
                                        $_$() && [
                                          L.options
                                            ? (s(),
                                              m(
                                                gt,
                                                {
                                                  key: 0,
                                                  modelValue: L.model.value,
                                                  "onUpdate:modelValue": [
                                                    (R) => (L.model.value = R),
                                                    W,
                                                  ],
                                                  options: L.options,
                                                  class:
                                                    "sports-menu-filter-time__content",
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "onUpdate:modelValue",
                                                  "options",
                                                ]
                                              ))
                                            : (s(),
                                              F("div", Tt, [
                                                a(
                                                  ae,
                                                  {
                                                    size: e(f).m,
                                                    class:
                                                      "sports-menu-filter-time__label",
                                                  },
                                                  {
                                                    default: o(
                                                      () =>
                                                        $_$() && [
                                                          $(
                                                            b(
                                                              C.$T(
                                                                "betting_filter_select_period"
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
                                                E("div", yt, [
                                                  a(
                                                    ue,
                                                    {
                                                      modelValue: e(y),
                                                      "onUpdate:modelValue":
                                                        O[0] ||
                                                        (O[0] = (R) =>
                                                          $_$() && _e(y)
                                                            ? (y.value = R)
                                                            : null),
                                                      placeholder: C.$T(
                                                        "betting_filter_date_from"
                                                      ),
                                                      size: e(f).s,
                                                      datepickerSize: e(f).s,
                                                      positionReverse: "",
                                                      disabledDates: e(v),
                                                      lng: e(w),
                                                      direction: e(N),
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                      "modelValue",
                                                      "placeholder",
                                                      "size",
                                                      "datepickerSize",
                                                      "disabledDates",
                                                      "lng",
                                                      "direction",
                                                    ]
                                                  ),
                                                  a(
                                                    ue,
                                                    {
                                                      modelValue: e(p),
                                                      "onUpdate:modelValue":
                                                        O[1] ||
                                                        (O[1] = (R) =>
                                                          $_$() && _e(p)
                                                            ? (p.value = R)
                                                            : null),
                                                      placeholder: C.$T(
                                                        "betting_filter_date_to"
                                                      ),
                                                      size: e(f).s,
                                                      datepickerAlign: e(Q).END,
                                                      datepickerSize: e(f).s,
                                                      disabledDates: e(k),
                                                      lng: e(w),
                                                      direction: e(N),
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                      "modelValue",
                                                      "placeholder",
                                                      "size",
                                                      "datepickerAlign",
                                                      "datepickerSize",
                                                      "disabledDates",
                                                      "lng",
                                                      "direction",
                                                    ]
                                                  ),
                                                ]),
                                              ])),
                                        ]
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  [
                                    "direction",
                                    "isRtl",
                                    "align",
                                    "stopElementsStore",
                                    "theme",
                                  ]
                                ))
                            ),
                            128
                          )),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["align", "theme", "stopElementsStore"]
                ),
              ],
              2
            )
          );
        }
      );
    },
  }),
  le = z(Mt, [["__scopeId", "data-v-57fc1939"]]),
  vt = h({
    __name: "SportsMenuLineHeader",
    setup(i) {
      $_$();
      const { sportsMenuGamesCount: t, pageType: n, bettingType: r } = G(),
        { isMultiSection: u, isTopGamePage: c } = P(),
        d = ne(357),
        {
          sportsMenuAppConfig: {
            sportMenuHeaderTheme: l,
            isShowSportMenuHeadTitle: T,
          },
        } = K(),
        g = _(() => $_$() && !e(u) && !e(c)),
        M = _(() => $_$() && !e(u) && T);
      return (y, p) =>
        $_$() &&
        (s(),
        m(
          Ce,
          { theme: e(l), class: "sports-menu-line-header" },
          ye(
            {
              filter: o(
                () =>
                  $_$() && [
                    e(g)
                      ? (s(),
                        m(
                          e(re),
                          { key: 0, pageType: e(n), bettingType: e(r) },
                          { default: o(() => $_$() && [a(le)]), _: 1 },
                          8,
                          ["pageType", "bettingType"]
                        ))
                      : U("", !0),
                  ]
              ),
              controls: o(() => $_$() && [a(Be), a($e)]),
              default: o(
                () =>
                  $_$() && [
                    a(nt, null, {
                      count: o(() => $_$() && [$(b(e(t)), 1)]),
                      default: o(
                        () => $_$() && [$(" " + b(y.$T("main_menu_events")), 1)]
                      ),
                      _: 1,
                    }),
                  ]
              ),
              _: 2,
            },
            [
              e(M)
                ? {
                    name: "title",
                    fn: o(() => $_$() && [$(b(y.$T(e(d))), 1)]),
                    key: "0",
                  }
                : void 0,
            ]
          ),
          1032,
          ["theme"]
        ));
    },
  }),
  Ct = { class: "sports-menu-live-header__tabs" },
  bt = { class: "sports-menu-live-header__caption" },
  It = { key: 0 },
  Bt = ["aria-label"],
  $t = h({
    __name: "SportsMenuLiveHeader",
    props: { headerTitleKey: { type: String, default: "betting_live" } },
    setup(i) {
      $_$();
      const { sportsMenuGamesCount: t, sportsMenuGamesWithVideoCount: n } = G(),
        { trackMenuFilterLive: r } = ve(),
        { trackOnlyBroadcastGamesFilterSelect: u } = q(),
        { isMultiSection: c } = P(),
        d = Me(),
        l = ne(412),
        { sportsMenuAppConfig: T } = K(),
        g = _(() => d.bettingIsOnlyWithVideos),
        M = _(() => $_$() && !e(c) && T.isShowSportMenuHeadTitle),
        y = (p) => {
          d.bettingSetIsOnlyWithVideos(p), r(p), u(p);
        };
      return (p, v) => {
        $_$();
        const k = S("UiCaption"),
          I = S("UiIco"),
          D = ee("tooltip");
        return (
          s(),
          m(
            Ce,
            {
              theme: e(T).sportMenuHeaderTheme,
              class: "sports-menu-live-header",
            },
            ye(
              {
                controls: o(() => $_$() && [a(Be), a($e)]),
                default: o(
                  () =>
                    $_$() && [
                      E("ul", Ct, [
                        E("li", null, [
                          E(
                            "button",
                            {
                              onClick: v[0] || (v[0] = (B) => y(!1)),
                              type: "button",
                              class: V([
                                {
                                  "sports-menu-live-header__tab--is-active":
                                    !e(g),
                                },
                                "sports-menu-live-header__tab",
                              ]),
                            },
                            [
                              a(
                                k,
                                {
                                  size: e(f).xs,
                                  uppercase: "",
                                  weight: e(g) ? void 0 : e(de).BOLD,
                                },
                                {
                                  default: o(
                                    () =>
                                      $_$() && [
                                        E(
                                          "span",
                                          bt,
                                          b(p.$T("main_menu_all_sports")),
                                          1
                                        ),
                                        e(t)
                                          ? (s(),
                                            F(
                                              oe,
                                              { key: 0 },
                                              [$(b(e(t)), 1)],
                                              64
                                            ))
                                          : U("", !0),
                                      ]
                                  ),
                                  _: 1,
                                },
                                8,
                                ["size", "weight"]
                              ),
                            ],
                            2
                          ),
                        ]),
                        e(n)
                          ? (s(),
                            F("li", It, [
                              e(l)
                                ? te(
                                    (s(),
                                    F(
                                      "button",
                                      {
                                        key: 0,
                                        onClick: v[1] || (v[1] = (B) => y(!0)),
                                        type: "button",
                                        "aria-label": p.$T(
                                          "menu_control_translation"
                                        ),
                                        class: V([
                                          {
                                            "sports-menu-live-header__tab--is-active":
                                              e(g),
                                          },
                                          "sports-menu-live-header__tab",
                                        ]),
                                      },
                                      [
                                        a(
                                          I,
                                          {
                                            ico: e(T)
                                              .sportsMenuAppLiveHeaderIcon,
                                            size: e(f).xs,
                                            class:
                                              "sports-menu-live-header__ico",
                                          },
                                          null,
                                          8,
                                          ["ico", "size"]
                                        ),
                                        a(
                                          k,
                                          {
                                            size: e(f).xs,
                                            uppercase: "",
                                            weight: e(g) ? e(de).BOLD : void 0,
                                          },
                                          {
                                            default: o(
                                              () => $_$() && [$(b(e(n)), 1)]
                                            ),
                                            _: 1,
                                          },
                                          8,
                                          ["size", "weight"]
                                        ),
                                      ],
                                      10,
                                      Bt
                                    )),
                                    [[D, p.$T("menu_control_translation")]]
                                  )
                                : U("", !0),
                            ]))
                          : U("", !0),
                      ]),
                    ]
                ),
                _: 2,
              },
              [
                e(M)
                  ? {
                      name: "title",
                      fn: o(() => $_$() && [$(b(p.$T(i.headerTitleKey)), 1)]),
                      key: "0",
                    }
                  : void 0,
              ]
            ),
            1032,
            ["theme"]
          )
        );
      };
    },
  }),
  kt = z($t, [["__scopeId", "data-v-fb17def1"]]),
  Dt = h({
    __name: "SportsMenuHeader",
    props: { headerTitleKey: {} },
    setup(i) {
      $_$();
      const { isLive: t } = ie(),
        n = _(() => ($_$() && e(t) ? kt : vt));
      return (r, u) =>
        $_$() &&
        (s(),
        m(Pe, null, {
          default: o(
            () =>
              $_$() && [
                (s(),
                m(
                  se(e(n)),
                  {
                    headerTitleKey: r.headerTitleKey,
                    class: "sports-menu-header",
                  },
                  null,
                  8,
                  ["headerTitleKey"]
                )),
              ]
          ),
          _: 1,
        }));
    },
  }),
  Ut = { class: "sports-menu-main-full__inner" },
  Ft = h({
    __name: "SportsMenuMainFull",
    props: { theme: {} },
    setup(i) {
      $_$();
      const t = i,
        { sportsMenuAppConfig: n } = K(),
        r = _(() => {
          var p;
          return (p = t.theme) != null ? p : n.sportsMenuMainTheme;
        }),
        { pageType: u, sportsMenuSortedMenuSections: c, bettingType: d } = G(),
        { isLine: l, isMultiSection: T, isTopGamePage: g } = P(),
        M = _(() => $_$() && e(l) && e(T) && !e(g)),
        y = _(() =>
          $_$() && e(u) === Ge.MARBLE ? "menu_section_marble_live" : void 0
        );
      return (p, v) =>
        $_$() &&
        (s(),
        m(
          at,
          {
            class: V([
              `sports-menu-main-full--theme-${e(r)}`,
              "sports-menu-main-full",
            ]),
          },
          {
            default: o(
              () =>
                $_$() && [
                  e(M)
                    ? (s(),
                      m(
                        e(re),
                        { key: 0, pageType: e(u), bettingType: e(d) },
                        {
                          default: o(
                            () =>
                              $_$() && [
                                a(le, {
                                  class: "sports-menu-main-full__time-filter",
                                }),
                              ]
                          ),
                          _: 1,
                        },
                        8,
                        ["pageType", "bettingType"]
                      ))
                    : U("", !0),
                  e(n).isShowSportsMenuHeader
                    ? (s(),
                      m(Dt, { key: 1, headerTitleKey: e(y) }, null, 8, [
                        "headerTitleKey",
                      ]))
                    : U("", !0),
                  E("div", Ut, [
                    Z(
                      p.$slots,
                      "default",
                      {},
                      () =>
                        $_$() && [
                          (s(!0),
                          F(
                            oe,
                            null,
                            Te(
                              e(c),
                              (k) =>
                                $_$() &&
                                (s(),
                                m(
                                  lt,
                                  {
                                    key: `menuSectionItem${k}`,
                                    menuSection: k,
                                    class: "sports-menu-main-full__section",
                                  },
                                  null,
                                  8,
                                  ["menuSection"]
                                ))
                            ),
                            128
                          )),
                        ],
                      !0
                    ),
                  ]),
                ]
            ),
            _: 3,
          },
          8,
          ["class"]
        ));
    },
  }),
  Lt = z(Ft, [["__scopeId", "data-v-705ce8dc"]]),
  ke = h({
    __name: "SportsMenuMainEmpty",
    props: {
      messageKey: {
        type: String,
        default: "main_bets_on_yours_events_not_found",
      },
      rounded: { type: Boolean, default: !0 },
    },
    setup(i) {
      $_$();
      const { pageType: t, bettingType: n } = G(),
        { isLine: r, isTopGamePage: u } = P(),
        c = _(() => $_$() && e(r) && !e(u));
      return (d, l) =>
        $_$() &&
        (s(),
        m(
          ut,
          {
            messageKey: i.messageKey,
            rounded: i.rounded,
            class: "sports-menu-main-empty",
          },
          {
            default: o(
              () =>
                $_$() && [
                  e(c)
                    ? (s(),
                      m(
                        e(re),
                        { key: 0, pageType: e(t), bettingType: e(n) },
                        { default: o(() => $_$() && [a(le)]), _: 1 },
                        8,
                        ["pageType", "bettingType"]
                      ))
                    : U("", !0),
                ]
            ),
            _: 1,
          },
          8,
          ["messageKey", "rounded"]
        ));
    },
  }),
  Vt = { [X.LOADING]: be, [X.EMPTY]: ke, [X.FULL]: Lt },
  zt = h({
    name: "SportsMenuMain",
    setup() {
      $_$();
      const { sportsMenuComponentState: i } = he();
      return {
        sportMenuMainComponent: _(() => {
          $_$();
          var n;
          return (n = Vt[e(i)]) != null ? n : ke;
        }),
      };
    },
  });
function At(i, t, n, r, u, c) {
  $_$();
  return s(), m(se(i.sportMenuMainComponent), { class: "sports-menu-main" });
}
const Et = z(zt, [["render", At]]),
  wt = He({
    loader: () =>
      tt(
        () => import("./4fbfcd976f.js"),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25,
        ]),
        import.meta.url
      ),
    loadingComponent: be,
    suspensible: !1,
    delay: 0,
  }),
  Ot = h({
    name: "SportsMenuContent",
    setup() {
      $_$();
      const i = Se(),
        t = _(() => i.isLeftSectionVisible);
      return { component: _(() => ($_$() && e(t) ? Et : wt)) };
    },
  }),
  Rt = { class: "sports-menu-content" };
function Kt(i, t, n, r, u, c) {
  $_$();
  return (
    s(), F("div", Rt, [(s(), m(Ne, null, [(s(), m(se(i.component)))], 1024))])
  );
}
const sn = z(Ot, [["render", Kt]]),
  rn = () => {
    $_$();
    const { sportsMenuIsEmpty: i } = he(),
      { isLive: t } = Qe(),
      n = xe(),
      r = We();
    je(
      () => $_$() && e(i) && e(t) && e(n).params.makeRedirectIfEmpty,
      () => $_$() && r.replace({ params: { section: j.LINE } })
    );
  };
export {
  sn as SportsMenuContent,
  on as SportsMenuTabs,
  rn as useSportsMenuRedirectIfEmptyLive,
};
