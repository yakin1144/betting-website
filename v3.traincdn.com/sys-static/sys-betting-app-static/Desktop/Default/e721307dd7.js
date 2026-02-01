import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as M,
  size_constants_sizeType as ce,
  runtimeCore_esmBundler_resolveComponent as g,
  runtimeCore_esmBundler_resolveDirective as Ae,
  runtimeCore_esmBundler_withDirectives as Ee,
  runtimeCore_esmBundler_createBlock as D,
  runtimeCore_esmBundler_openBlock as E,
  runtimeCore_esmBundler_withCtx as v,
  runtimeCore_esmBundler_createVNode as y,
  runtimeCore_esmBundler_createTextVNode as ge,
  shared_esmBundler_toDisplayString as Te,
  theme_constants_themeType as A,
  iconName as we,
  alignType as Ie,
  stopElements as Ue,
  BettingPageType as se,
  index_useT as he,
  router_useRoute as Se,
  index_useLogger as Me,
  useGlobalStore as be,
  router_useRouter as De,
  reactivity_esmBundler_toRefs as fe,
  runtimeCore_esmBundler_computed as i,
  reactivity_esmBundler_unref as e,
  bettingType_BettingType as le,
  reactivity_esmBundler_ref as Pe,
  runtimeCore_esmBundler_watch as me,
  runtimeCore_esmBundler_onMounted as Re,
  execAsync as C,
  runtimeCore_esmBundler_createElementBlock as Oe,
  runtimeCore_esmBundler_createCommentVNode as Fe,
  MENU_SECTION_LANG_KEY_MAP as $e,
  UiBreadcrumbs_vue_default as Ne,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useBettingCommonData as ke,
  useBettingClearSelectedData as ve,
  useSelectedBettingEntitiesStore as Ce,
  useBettingStateInjector as Le,
  useBettingSectionSportsStore as Ge,
  useBettingStateProvider as Ve,
} from "./9de70556bb.js";
import { useBettingPageData as ae } from "./4a993370c6.js";
import {
  _export_sfc as L,
  useCommonAnalytics as ze,
  useBettingRoute as ye,
  pipe as Ye,
  useResizableList as qe,
  useBettingSportsStore as He,
  useBettingRouteData as Ke,
  loadBreadcrumbsAppConfigDesktop as je,
} from "./entry-50afb6f36c.js";
import {
  useMatchTabFilter as We,
  useBettingUpdateData as Be,
  BETTING_PROPS as ue,
} from "./858ab97c10.js";
import {
  CENTRAL_TAB_TYPE_VALIDATOR as de,
  ICONS_KEY_BY_CENTRAL_TAB_TYPE_MAP as Qe,
  TOOLTIP_LANG_KEY_BY_CENTRAL_TAB_TYPE_MAP as Je,
  LANG_KEY_BY_CENTRAL_TAB_TYPE_MAP as Xe,
  CENTRAL_TAB_TYPES as Ze,
} from "./9eb49f27d6.js";
import { usePopularEventParamsStore as xe } from "./914ab66f1a.js";
import { withAsyncContext as et } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import { useSportsMenuStore as _e } from "./e063df8dd1.js";
import { useBettingRouteMonitoringMethods as tt } from "./944eab39d4.js";
import { SPORTS_NAME_PATH as ot } from "./84227e1b8b.js";
const nt = M({
  name: "MatchTabFilterAppSwitch_F",
  props: {
    option: { type: Object, required: !0 },
    currentValue: { type: Number, required: !0 },
  },
  emits: ["change"],
  setup() {
    $_$();
    return { sizeType: ce };
  },
});
function rt(o, s, a, T, _, f) {
  $_$();
  const l = g("UiCaption"),
    h = g("UiSwitch"),
    c = Ae("tooltip");
  return Ee(
    (E(),
    D(
      h,
      {
        onInput: s[0] || (s[0] = (m) => o.$emit("change", o.option)),
        checked: o.option.value === o.currentValue,
        class: "match-tab-filter-app-switch",
      },
      {
        default: v(
          () =>
            $_$() && [
              y(
                l,
                { size: o.sizeType.s },
                {
                  default: v(() => $_$() && [ge(Te(o.option.caption), 1)]),
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
      ["checked"]
    )),
    [[c, o.option.tooltip]]
  );
}
const it = L(nt, [["render", rt]]),
  st = { square: !1, iconSize: ce.s },
  at = {
    UiDropdown: A.gray100,
    UiSearch: A.gray60,
    UiSelectContent: A.gray100,
    UiSelectOptions: A.gray100,
    UiOption: A.gray100,
    UiEmptyMessage: A.gray100,
  },
  ct = M({
    name: "MatchTabFilterDropdown",
    props: {
      items: { type: Array, required: !0 },
      selectedItem: { type: Object, default: void 0 },
    },
    emits: ["selected"],
    setup(o, { emit: s }) {
      $_$();
      return {
        stopElements: Ue,
        alignType: Ie,
        sizeType: ce,
        iconName: we,
        onSelected: (T, _) => {
          s("selected", T), _();
        },
        matchTabFilterDropdownThemes: at,
        MATCH_TAB_FILTER_DROPDOWN_TRIGGER_CONFIG: st,
      };
    },
  });
function pt(o, s, a, T, _, f) {
  $_$();
  const l = g("UiIco"),
    h = g("UiOption"),
    c = g("UiSelectOptions"),
    m = g("UiSelectContent"),
    u = g("UiDropdown");
  return (
    E(),
    D(
      u,
      {
        align: o.alignType.END,
        stopElementsStore: o.stopElements,
        triggerTooltip: o.$T("settings_other"),
        triggerDecent: "",
        theme: o.matchTabFilterDropdownThemes.UiDropdown,
        class: "match-tab-filter-dropdown",
      },
      {
        trigger: v(
          () =>
            $_$() && [
              y(
                l,
                {
                  square: o.MATCH_TAB_FILTER_DROPDOWN_TRIGGER_CONFIG.square,
                  size: o.MATCH_TAB_FILTER_DROPDOWN_TRIGGER_CONFIG.iconSize,
                  ico: o.iconName.MENU,
                },
                null,
                8,
                ["square", "size", "ico"]
              ),
            ]
        ),
        default: v(
          ({ close: d }) =>
            $_$() && [
              y(
                m,
                {
                  theme: o.matchTabFilterDropdownThemes.UiSelectContent,
                  class: "match-tab-filter-dropdown__content",
                },
                {
                  default: v(
                    () =>
                      $_$() && [
                        y(
                          c,
                          {
                            onSetOption: (r) => o.onSelected(r, d),
                            options: o.items,
                            theme:
                              o.matchTabFilterDropdownThemes.UiSelectOptions,
                          },
                          {
                            item: v(
                              ({ option: r }) =>
                                $_$() && [
                                  y(
                                    h,
                                    {
                                      onClick: (B) => o.onSelected(r, d),
                                      isSelected: r === o.selectedItem,
                                      captionSize: o.sizeType.s,
                                      theme:
                                        o.matchTabFilterDropdownThemes.UiOption,
                                    },
                                    {
                                      caption: v(
                                        () => $_$() && [ge(Te(r.caption), 1)]
                                      ),
                                      _: 2,
                                    },
                                    1032,
                                    [
                                      "onClick",
                                      "isSelected",
                                      "captionSize",
                                      "theme",
                                    ]
                                  ),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          ["onSetOption", "options", "theme"]
                        ),
                      ]
                  ),
                  _: 2,
                },
                1032,
                ["theme"]
              ),
            ]
        ),
        _: 1,
      },
      8,
      ["align", "stopElementsStore", "triggerTooltip", "theme"]
    )
  );
}
const lt = L(ct, [
    ["render", pt],
    ["__scopeId", "data-v-cc06e779"],
  ]),
  mt = {
    0: "all",
    1: "upcoming_events",
    2: "first_period",
    3: "second_period",
    6: "recommended",
  },
  ut = M({
    name: "MatchTabFilterApp",
    components: { MatchTabFilterAppSwitch: it, MatchTabFilterDropdown: lt },
    props: {
      pageType: { type: String, default: se.HOME },
      bettingType: { type: String, required: !0 },
      tabs: { type: Array, required: !0, validator: (o) => o.every(de) },
      defaultTabType: { type: Number, required: !0, validator: de },
    },
    setup(o) {
      $_$();
      const s = he(),
        a = Se(),
        T = Me(),
        { sendGTagEvent: _, sendGoogleAndFatmanEvent: f } = ze({
          analyticsCategory: "v3_Дашборд",
        }),
        l = be(),
        h = De(),
        c = We(),
        { pageType: m, bettingType: u, tabs: d } = fe(o),
        r = i({
          get() {
            $_$();
            return e(u) === le.LINE ? e(c.lineTab) : e(c.liveTab);
          },
          set(t) {
            $_$();
            e(u) === le.LINE ? (c.lineTab.value = t) : (c.liveTab.value = t);
          },
        }),
        B = ke({ pageType: m, bettingType: u }),
        { bettingClearAllFilters: G, bettingClearBettingSelectedEntities: V } =
          ve({ pageType: m, bettingType: u }),
        { bettingUpdateData: w } = Be({ pageType: m, bettingType: u }),
        { getRouteUrl: z, changeRoute: Y } = ye(),
        q = xe(),
        {
          isUfcPage: H,
          isPoliticsPage: P,
          isTeamPage: K,
          isHomePage: j,
        } = ae(),
        { listSelectedSectionSportIds: W } = Ce({
          pageType: e(m),
          bettingType: e(u),
        }),
        R = Pe(),
        O = i(() =>
          Ye(
            Object.values,
            (t) =>
              t.map((n) => {
                const p = Xe[n],
                  S = Je[n],
                  b = Qe[n];
                return [
                  n,
                  {
                    type: n,
                    icon: b,
                    caption: p ? s(p) : "",
                    value: n,
                    name: "match-type-filter",
                    tooltip: S ? s(S) : "",
                  },
                ];
              }),
            Object.fromEntries
          )(Ze)
        ),
        Q = i(() => {
          $_$();
          var t;
          return (t = e(O)) == null ? void 0 : t[e(r)];
        }),
        J = i(() => {
          $_$();
          var t;
          return (t = e(Q)) == null ? void 0 : t.value;
        }),
        X = i(() => $_$() && !!e(u) && !e(K)),
        F = i(() => $_$() && e(B.isLive)),
        I = i(() => $_$() && !e(H) && !e(P)),
        Z = i(
          () => $_$() && { 0: !0, 4: !0, 6: e(X), 1: e(F), 2: e(I), 3: e(I) }
        ),
        x = i(
          () =>
            $_$() &&
            e(d)
              .filter((t) => {
                $_$();
                const n = e(Z);
                if (t !== 5) return n[t];
              })
              .map((t) => {
                $_$();
                var n;
                return (n = e(O)) == null ? void 0 : n[t];
              })
              .filter(Boolean)
        ),
        {
          debounceUpdateCount: ee,
          visibleItems: te,
          invisibleItems: $,
        } = qe({ target: R, items: x }),
        oe = i(() => $_$() && e($).find(({ type: t }) => $_$() && e(r) === t)),
        N = async () => {
          $_$();
          let t, n;
          ([t, n] = C(
            () =>
              $_$() &&
              h.replace(
                z({ lng: l.getLanguage, section: e(u), routerReplace: !0 })
              )
          )),
            await t,
            n();
        },
        k = async () => {
          $_$();
          let t, n;
          G(), ([t, n] = C(() => N())), await t, n();
        },
        ne = async (t) => {
          $_$();
          let n, p;
          switch (t) {
            case 0: {
              a.params.game && Y({ ...a.params, game: void 0 });
              break;
            }
            case 6: {
              e(j) || (([n, p] = C(() => N())), await n, p()),
                V(),
                ([n, p] = C(() => q.loadParams())),
                await n,
                p();
              break;
            }
          }
          r.value = t;
        },
        U = async ({ type: t }) => {
          $_$();
          var n;
          let p, S;
          if (e(r) !== t)
            try {
              _(
                e(B.isLive)
                  ? 'v3_Live "Дашборд-меню"'
                  : 'v3_Линия "Дашборд-меню"',
                String(t)
              );
              const b = (n = mt[t]) != null ? n : "all";
              f(
                { google: "main_header_time_filter_call", fatman: 1451 },
                { google: { option: b }, fatman: { s1: b } }
              ),
                ([p, S] = C(() => ne(t))),
                await p,
                S();
            } catch (b) {
              T.error("MatchTabFilterApp onChange error", b),
                ([p, S] = C(() => k())),
                await p,
                S();
            } finally {
              w();
            }
        };
      return (
        me(W, () => {
          $_$();
          e(r) === 6 && ((r.value = 0), w());
        }),
        me(() => [l.isLeftSectionHidden, l.isRightSectionHidden], ee),
        Re(() => {
          $_$();
          if (e(c.skipUpdate)) c.skipUpdate.value = !1;
          else {
            const t = a.params.game ? 4 : 0;
            t !== e(r) && ((r.value = t), w());
          }
        }),
        {
          templateList: R,
          currentValue: J,
          optionsVisible: te,
          optionsDropdown: $,
          dropdownSelectedItem: oe,
          onChange: U,
        }
      );
    },
  }),
  dt = { class: "match-tab-filter-app" };
function _t(o, s, a, T, _, f) {
  $_$();
  const l = g("MatchTabFilterAppSwitch"),
    h = g("UiSwitches"),
    c = g("MatchTabFilterDropdown");
  return (
    E(),
    Oe("div", dt, [
      y(
        h,
        { ref: "templateList", options: o.optionsVisible },
        {
          default: v(
            ({ item: m }) =>
              $_$() && [
                y(
                  l,
                  {
                    onChange: o.onChange,
                    currentValue: o.currentValue,
                    option: m,
                  },
                  null,
                  8,
                  ["onChange", "currentValue", "option"]
                ),
              ]
          ),
          _: 1,
        },
        8,
        ["options"]
      ),
      o.optionsDropdown.length
        ? (E(),
          D(
            c,
            {
              key: 0,
              onSelected: o.onChange,
              selectedItem: o.dropdownSelectedItem,
              items: o.optionsDropdown,
              class: "match-tab-filter-app__dropdown",
            },
            null,
            8,
            ["onSelected", "selectedItem", "items"]
          ))
        : Fe("", !0),
    ])
  );
}
const Ut = L(ut, [
    ["render", _t],
    ["__scopeId", "data-v-ea23a031"],
  ]),
  gt = M({
    __name: "BreadcrumbsApp",
    async setup(o) {
      $_$();
      var s;
      let a, T, _, f;
      const l = he(),
        h = Se(),
        c = be(),
        { getRoute: m } = ye(),
        { isTeamPage: u } = ae(),
        { bettingType: d, pageType: r } = Le(),
        { sportsMenuGamesCount: B } = _e(),
        { bettingClearAllFilters: G } = ve({ bettingType: d, pageType: r }),
        { bettingUpdateData: V } = Be({ bettingType: d, pageType: r }),
        { getBettingSportById: w } = He(),
        {
          listSelectedSectionSportIds: z,
          clearSelectedMarketGroup: Y,
          clearSelectedEntities: q,
        } = Ce(),
        {
          routeSport: H,
          routeMenuSection: P,
          routeSectionSportId: K,
          routeChampId: j,
          routeMenuSectionId: W,
        } = Ke(),
        { isMarblePage: R } = ae(),
        { handleRouteSport: O, handleRouteChamp: Q } = tt({
          bettingType: d,
          pageType: r,
        }),
        { getBettingSectionSport: J } = Ge({ bettingType: d, pageType: r }),
        X = () => {
          O(!1), Q(!1);
        },
        F = () => {
          q(), X();
        },
        I = i(() => c.isAsianView),
        Z = i(() =>
          $_$() && e(R)
            ? `${l($e[8]).toUpperCase()} (${e(B)})`
            : e(I)
            ? `${e(d).toUpperCase()}`
            : `${e(d).toUpperCase()} (${e(B)})`
        ),
        x = parseInt(String((s = e(h).query) == null ? void 0 : s.sportId), 10),
        ee = i(() => w(x)),
        te = i(() => $_$() && e(z).slice(-1).shift()),
        $ = i(() => $_$() && J(e(te))),
        { getBettingSectionChamp: oe } = _e(),
        N =
          (([_, f] = et(() => je())),
          (_ = (([a, T] = C(() => _)), (a = await a), T(), a)),
          f(),
          _),
        { config: k } = N(),
        ne = i(() => {
          $_$();
          var U;
          const t = e(H) || e(ee) || e($),
            n = oe(`${e(W)}_${e(j)}`),
            p = e(P),
            S = e(d),
            b = e(K),
            re = b && n ? b === (n == null ? void 0 : n.sectionSportId) : !1,
            pe = e(d),
            ie = {
              home: m({ pageType: e(u) ? se.HOME : e(r), section: pe }),
              sport: m({
                pageType: e(u) ? se.HOME : e(r),
                section: pe,
                menuSection: e(P),
                sport: t == null ? void 0 : t.nameForUrl,
              }),
              champ: re
                ? m({
                    lng: c.getLanguage,
                    section: S,
                    menuSection: p,
                    sport: t == null ? void 0 : t.nameForUrl,
                    champ: re ? (n == null ? void 0 : n.champNameForUrl) : "",
                  })
                : void 0,
            };
          return [
            {
              id: "home",
              link: ie.home,
              ico: k.homeIcon,
              title: e(Z),
              onClick: () => {
                G(), V();
              },
            },
            {
              id: "sport",
              link: t ? ie.sport : void 0,
              ico: (U = t == null ? void 0 : t.id) != null ? U : 1,
              icoPath: ot,
              title: t == null ? void 0 : t.name,
              onClick: () => {
                $_$();
                e(I) ? Y() : F();
              },
            },
            {
              id: "champ",
              link: ie.champ,
              ico: k.champIcon,
              title: re ? (n == null ? void 0 : n.name) : "",
              onClick: F,
            },
          ];
        });
      return (U, t) =>
        $_$() && (E(), D(e(Ne), { items: e(ne) }, null, 8, ["items"]));
    },
  }),
  Tt = M({
    name: "BreadcrumbsAppDataProvider",
    components: { BreadcrumbsApp: gt },
    props: { pageType: ue.pageType, bettingType: ue.bettingType },
    setup(o) {
      $_$();
      const { pageType: s, bettingType: a } = fe(o);
      Ve({ bettingType: a, pageType: s });
    },
  });
function ht(o, s, a, T, _, f) {
  $_$();
  const l = g("BreadcrumbsApp");
  return E(), D(l);
}
const Mt = L(Tt, [["render", ht]]);
export { Mt as BreadcrumbsAppDataProvider, Ut as MatchTabFilterApp };
