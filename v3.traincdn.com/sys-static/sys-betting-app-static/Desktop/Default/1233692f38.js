import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as $e,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as Oe,
  runtimeCore_esmBundler_computed as g,
  reactivity_esmBundler_unref as t,
  bettingType_BettingType as J,
  runtimeCore_esmBundler_defineComponent as O,
  reactivity_esmBundler_toRefs as pe,
  runtimeCore_esmBundler_resolveComponent as s,
  runtimeCore_esmBundler_createBlock as v,
  runtimeCore_esmBundler_openBlock as S,
  runtimeDom_esmBundler_withModifiers as Te,
  size_constants_sizeType as j,
  dropdown_constants_dropdownProps as ce,
  reactivity_esmBundler_toRef as me,
  index_getConfig as ve,
  stopElements as Q,
  alignType as X,
  runtimeCore_esmBundler_withCtx as i,
  runtimeCore_esmBundler_createVNode as C,
  runtimeCore_esmBundler_createCommentVNode as V,
  runtimeCore_esmBundler_createTextVNode as b,
  shared_esmBundler_toDisplayString as M,
  runtimeCore_esmBundler_createElementBlock as F,
  runtimeCore_esmBundler_renderSlot as ue,
  shared_esmBundler_normalizeProps as Se,
  runtimeCore_esmBundler_guardReactiveProps as he,
  shared_esmBundler_normalizeClass as ge,
  sortBySearchString as De,
  uniqueBy as Fe,
  reactivity_esmBundler_ref as ae,
  MENU_SECTION_LANG_KEY_MAP as Ve,
  runtimeCore_esmBundler_Fragment as K,
  runtimeCore_esmBundler_renderList as re,
  nuxtLink_default as Le,
  runtimeCore_esmBundler_createElementVNode as le,
  useGlobalStore as Be,
  equalWatch as Ne,
  runtimeCore_esmBundler_onMounted as Ae,
  iconName as Ee,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useMatchTabFilter as ke, BETTING_PROPS as Ce } from "./858ab97c10.js";
import { NavigationSportMenuColorTheme as Ge } from "./60e9c9f553.js";
import {
  UiSportsMenuSectionName as Re,
  UiSportsMenuHead as ze,
} from "./e1e32a66a3.js";
import {
  useBettingChampRoute as Pe,
  useSportsMenuSportInfo as ye,
  useMixedChampsAndChampGroupsWithSubGames as He,
} from "./37dd3dae1b.js";
import { UiGamesLoaderStub as We } from "./60d766cde4.js";
import {
  defineProvider as qe,
  useCommonAnalytics as je,
  _export_sfc as D,
  useRtlInfo as Z,
  bettingFilterConfig as Ke,
  SORTED_MENU_SECTIONS as Ye,
  useResizableList as Je,
} from "./entry-50afb6f36c.js";
import {
  useSportsMenuAppProvider as Qe,
  useSportsMenuComponentStateStore as Xe,
} from "./25dbd9c5df.js";
import { useSelectedNavSportMenuEntitiesStore as x } from "./aa92bf211f.js";
import {
  UiSportsEvent as Ze,
  useUiSportsEventProviderByGame as xe,
} from "./669f85a6b8.js";
import { useBettingPageData as ee } from "./4a993370c6.js";
import { useBettingGameRoute as Ue } from "./944eab39d4.js";
import {
  useSelectedBettingEntitiesStore as oe,
  useIgnoreLogoType as Ie,
} from "./9de70556bb.js";
import { useSportsMenuStore as eo } from "./e063df8dd1.js";
import { GameOpenSource as Y, useBettingStore as oo } from "./1af6a171a2.js";
import { _sfc_main as be } from "./762b07d264.js";
import {
  useSportsMenuChampOnFetch as to,
  useSportsMenuChampCount as no,
  useBettingSportSelected as so,
  useBettingSportRoute as io,
  useSportsMenuSportOnFetch as ro,
  useSportsMenuPollingData as ao,
  useSportsMenuTriggerUpdate as po,
} from "./3004035142.js";
import { UiSportsMenuLoader as co } from "./2ac826c613.js";
import { useSportsMenuFiltersStore as mo } from "./6550e9bfb1.js";
import { useTemplateResizeObserver as _e } from "./ef908ad829.js";
import { MenuLoader as lo } from "./1304d73c92.js";
import { VSwitch as uo } from "./c6fc48d2a3.js";
import "./3e34d5417a.js";
import "./9816d50199.js";
import "./dd584157d6.js";
import "./c7ea6bc74a.js";
import "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "./7fd3152d11.js";
import "./e37cc43aaf.js";
import "./f0c49800c9.js";
import "./fc0a56fa04.js";
import "./f1156f93a8.js";
import "./5f6b076bc4.js";
import "./6a64c59e39.js";
import "./4b4dfdeaaf.js";
import "./4e4f01046c.js";
import "./bb0d3b59f5.js";
import "./6e5c097416.js";
import "./9e4e245c05.js";
import "./58a21526ee.js";
import "./ff2996a70d.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
const { provide: So, inject: N } = qe(
    ({
      pageType: e,
      bettingType: o,
      clickGame: n = () => {},
      onlyGameClick: m = !1,
      componentsThemes: l = new Ge(),
      groupByCategories: h = !1,
    }) => {
      const {
        isLive: a,
        isLine: c,
        bettingStoreType: d,
        bettingStoreNamespace: T,
      } = Qe({ bettingType: o, pageType: e, groupByCategories: h });
      return (
        x({ bettingType: o, pageType: e }),
        {
          pageType: e,
          bettingType: o,
          isLive: a,
          isLine: c,
          bettingStoreType: d,
          bettingStoreNamespace: T,
          componentsThemes: l,
          groupByCategories: h,
          clickGame: n,
          onlyGameClick: m,
        }
      );
    }
  ),
  te = $e(() => {
    const { sendGTagEvent: e, sendGoogleAndFatmanEvent: o } = je({
      analyticsCategory: "v3_Дашборд",
    });
    return {
      trackAddGameToFavoriteClick: ({ isLive: r, sportId: p, isAdded: u }) => {
        const _ = u ? "add_favor" : "remove";
        o(
          { google: "bet_add_favor", fatman: 1081 },
          {
            google: { action: _, sport_id: p },
            fatman: { s1: _, i1: Number(p) },
          }
        ),
          u ||
            e(
              r
                ? 'v3_Live Клик "Добавить в избранное"'
                : 'v3_Линия Клик "Добавить в избранное"',
              String(p)
            );
      },
      trackOpenGameClick: ({ gameId: r }) => {
        o(
          { google: "bet_game_open", fatman: 1065 },
          {
            google: { bookmark_source: Y.TOP_MENU, gameId: r },
            fatman: { s1: Y.TOP_MENU, i1: r },
          }
        );
      },
      trackCyberSportSelectionInDropdown: (r, p) => {
        r && e('v3_Live "Фильтр_киберспорт"', String(p));
      },
      trackSportSelection: (r, p) => {
        e(r ? 'v3_Live "Выбор спорта"' : 'v3_Линия "Выбор спорта"', String(p));
      },
      trackSportFilterSelection: (r) => {
        o(
          { google: "bet_menu_filter_game_call", fatman: 1077 },
          {
            google: { position: "top", sport_id: r },
            fatman: { s1: "top", i1: Number(r) },
          }
        );
      },
      trackChampFilterSelection: (r) => {
        o(
          { google: "bet_menu_filter_champ_call", fatman: 1080 },
          {
            google: { position: "top", championship_id: r, in_top: !1 },
            fatman: { s1: "top", i1: r },
          }
        );
      },
      trackSportSelectionInDropdown: (r, p) => {
        e(r ? 'v3_Live "Фильтр"' : 'v3_Линия "Фильтр"', String(p));
      },
      trackGameVideoIconClick: ({ sportId: r, isEnabled: p }) => {
        p &&
          o(
            { google: "bet_video_online_call", fatman: 1064 },
            {
              google: { position: Y.TOP_MENU, sportId: r },
              fatman: { s1: Y.TOP_MENU, i1: r },
            }
          ),
          e('v3_Live Клик "Видеотрансляция"', String(r));
      },
    };
  }),
  ho = ({ game: e, ...o }) => {
    $_$();
    const { getBettingSectionChamp: n } = eo(),
      { pageType: m, bettingType: l, clickGame: h, componentsThemes: a } = N(),
      { getBettingRoute: c } = Oe(),
      { listSelectedTopChampIds: d, clearSelectedEntities: T } = oe(),
      { getGameRoute: r } = Ue(e, { pageType: m, bettingType: l }),
      {
        trackOpenGameClick: p,
        trackAddGameToFavoriteClick: u,
        trackGameVideoIconClick: _,
      } = te(),
      k = g(() => $_$() && t(d).length >= 1),
      f = g(() => $_$() && t(a).UiSportsEvent),
      G = g(() => {
        $_$();
        var I, L;
        return (L = (I = n(t(e).sectionChampId)) == null ? void 0 : I.name) !=
          null
          ? L
          : "";
      });
    return {
      theme: f,
      champName: G,
      openGame: () => {
        $_$();
        t(k) && T(),
          o.onSelectGame(t(e).sportId),
          p({ gameId: t(e).id }),
          h({ route: c(r(!0)), game: t(e) });
      },
      clickGameVideo: (I) => {
        $_$();
        _({ isEnabled: I, sportId: t(e).sportId }),
          o.onClickVideo(t(e).sportId);
      },
      handleAddGameToFavorites: (I) => {
        $_$();
        o.onAddFavorites(t(e).sportId),
          u({ isAdded: I, sportId: t(e).sportId, isLive: t(l) === J.LIVE });
      },
    };
  },
  go = O({
    name: "MenuGame_F",
    components: { UiSportsEvent: Ze },
    props: { game: { type: Object, required: !0 } },
    emits: ["selectGame", "addGameToFavorites", "clickVideo"],
    setup(e, { emit: o }) {
      $_$();
      const { game: n } = pe(e),
        {
          theme: m,
          champName: l,
          ...h
        } = ho({
          game: n,
          onSelectGame: (u) => o("selectGame", u),
          onClickVideo: (u) => o("clickVideo", u),
          onAddFavorites: (u) => o("addGameToFavorites", u),
        }),
        { pageType: a, bettingType: c } = N(),
        { isMultiLivePage: d, isCyberPage: T } = ee(),
        { gameRouteLink: r, gameSelectedInBetting: p } = Ue(n, {
          pageType: a,
          bettingType: c,
        });
      return (
        xe({
          to: t(d) ? "" : r,
          game: n,
          champName: l,
          gameLink: r,
          isActive: p,
          theme: m,
          isTranslationDisabled: !1,
          isCyber: T,
          bettingType: c,
          onFavoriteAdd: h.handleAddGameToFavorites,
          onVideoEnable: h.clickGameVideo,
        }),
        { openGame: h.openGame }
      );
    },
  });
function Co(e, o, n, m, l, h) {
  $_$();
  const a = s("UiSportsEvent");
  return (
    S(),
    v(a, { onClick: Te(e.openGame, ["stop"]), class: "menu-game" }, null, 8, [
      "onClick",
    ])
  );
}
const _o = D(go, [["render", Co]]),
  z = { inBrackets: !1, size: j.s },
  de = (e, o) => (o ? `(${e})` : e),
  fo = O({
    name: "MenuChampDropdown",
    components: { UiGamesLoaderStub: We, MenuGame: _o, UiChampIcon: be },
    props: {
      champ: { type: Object, required: !0 },
      sport: { type: Object, required: !0 },
      direction: ce.direction,
    },
    emits: ["selectGame", "addGameToFavorites", "clickVideo"],
    setup(e, { emit: o }) {
      $_$();
      const n = me(e, "champ"),
        { trackChampFilterSelection: m } = te(),
        { isCyberPage: l } = ee(),
        { componentsThemes: h, onlyGameClick: a } = N(),
        { champSelectedInBetting: c, toggleChampRoute: d } = Pe(n),
        {
          hasSelectedSectionSportId: T,
          listSelectedTopChampIds: r,
          toggleSelectedSectionSportId: p,
          clearSelectedTopChamps: u,
        } = oe(),
        { toggleSelectedSectionChampId: _, hasSelectedSectionChampId: k } = x(),
        f = oo(),
        G = ke(),
        U = ve(328),
        { isRtl: w } = Z(),
        $ = g(() => k(e.champ.sectionChampId)),
        { isLoading: I, champGames: L } = to({ champ: n, isOpen: $ }),
        P = g(() => T(e.sport.sectionSportId)),
        H = g(() => $_$() && t(r).length >= 1),
        A = g(() =>
          $_$() && f.bettingIsOnlyWithVideos && t(G.liveTab) !== 1
            ? t(n).gamesCountWithVideo
            : t(n).gamesCount
        ),
        E = Ie(n),
        W = () => {
          _({
            item: e.champ.sectionChampId,
            bindKeys: [e.champ.sectionSportId],
            isClear: !0,
            value: !0,
          });
        },
        q = () => {
          _({
            item: e.champ.sectionChampId,
            bindKeys: [e.champ.sectionSportId],
            value: !1,
          });
        },
        y = (R) => {
          o("selectGame", R);
        },
        ne = (R) => {
          o("addGameToFavorites", R);
        },
        se = (R) => {
          o("clickVideo", R);
        },
        ie = () => {
          $_$();
          if (t(a)) return;
          m(e.champ.id),
            !t(c) && y(e.sport.id),
            t(P) ||
              p({
                item: e.sport.sectionSportId,
                bindKeys: [e.sport.menuSection],
                value: !0,
              }),
            t(H) && u(),
            d();
        },
        B = de(t(A), z.inBrackets);
      return {
        readonlyChamp: n,
        champGames: L,
        alignType: X,
        sizeType: j,
        isLoading: I,
        champGamesCount: A,
        componentsThemes: h,
        isChampActive: $,
        isChampSelected: c,
        isCyberPage: l,
        isIgnoreLogoType: E,
        onOpen: W,
        onClose: q,
        toggleSelected: ie,
        selectGame: y,
        handleAddGameToFavorites: ne,
        clickVideo: se,
        stopElements: Q,
        isRtl: w,
        isShowChampIcons: U,
        MENU_SPORT_COUNT_CONFIG: z,
        setCount: B,
      };
    },
  });
function To(e, o, n, m, l, h) {
  $_$();
  const a = s("UiChampIcon"),
    c = s("UiTag"),
    d = s("UiCaption"),
    T = s("UiOption"),
    r = s("UiGamesLoaderStub"),
    p = s("MenuGame"),
    u = s("UiSelectOptions"),
    _ = s("UiSelectContent"),
    k = s("UiDropdown");
  return (
    S(),
    v(
      k,
      {
        onOpen: e.onOpen,
        onClose: e.onClose,
        align: e.alignType.START,
        direction: e.direction,
        theme: e.componentsThemes.UiDropdown,
        flexible: "",
        flippable: "",
        hoverable: "",
        overlay: "",
        triangle: !1,
        stopElementsStore: e.stopElements,
        isRtl: e.isRtl,
        class: "menu-champ-dropdown",
      },
      {
        customTrigger: i(
          () =>
            $_$() && [
              C(
                T,
                {
                  onClick: e.toggleSelected,
                  isSelected: e.isChampSelected || e.isChampActive,
                  theme: e.componentsThemes.UiOption,
                },
                {
                  additional: i(
                    () =>
                      $_$() && [
                        C(
                          d,
                          { size: e.MENU_SPORT_COUNT_CONFIG.size },
                          {
                            default: i(() => $_$() && [b(M(e.setCount), 1)]),
                            _: 1,
                          },
                          8,
                          ["size"]
                        ),
                      ]
                  ),
                  default: i(
                    () =>
                      $_$() && [
                        e.isCyberPage
                          ? V("", !0)
                          : (S(),
                            v(
                              a,
                              {
                                key: 0,
                                champ: e.readonlyChamp,
                                isIgnoreLogoType: e.isIgnoreLogoType,
                                isDefaultIcon: !e.isShowChampIcons,
                                class: "menu-champ-dropdown__ico",
                              },
                              null,
                              8,
                              ["champ", "isIgnoreLogoType", "isDefaultIcon"]
                            )),
                        e.champ.tag
                          ? (S(),
                            v(
                              c,
                              {
                                key: 1,
                                size: e.sizeType.s,
                                class: "menu-champ-dropdown__marker",
                              },
                              {
                                default: i(
                                  () => $_$() && [b(M(e.champ.tag), 1)]
                                ),
                                _: 1,
                              },
                              8,
                              ["size"]
                            ))
                          : V("", !0),
                        C(
                          d,
                          { dir: "auto", size: e.sizeType.m },
                          {
                            default: i(() => $_$() && [b(M(e.champ.name), 1)]),
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
                ["onClick", "isSelected", "theme"]
              ),
            ]
        ),
        default: i(
          () =>
            $_$() && [
              C(
                _,
                {
                  theme: e.componentsThemes.UiSelectContent,
                  limitedHeight: !1,
                  class: "menu-champ-dropdown__content",
                },
                {
                  default: i(
                    () =>
                      $_$() && [
                        e.isLoading
                          ? (S(),
                            v(
                              r,
                              {
                                key: 0,
                                gameCount: e.champGamesCount,
                                theme: e.componentsThemes.UiGamesLoader,
                              },
                              null,
                              8,
                              ["gameCount", "theme"]
                            ))
                          : (S(),
                            v(
                              u,
                              {
                                key: 1,
                                options: e.champGames,
                                theme: e.componentsThemes.UiSelectOptions,
                              },
                              {
                                item: i(
                                  ({ option: f }) =>
                                    $_$() && [
                                      C(
                                        p,
                                        {
                                          onSelectGame: e.selectGame,
                                          onAddGameToFavorites:
                                            e.handleAddGameToFavorites,
                                          onClickVideo: e.clickVideo,
                                          game: f,
                                          class: "menu-champ-dropdown__game",
                                        },
                                        null,
                                        8,
                                        [
                                          "onSelectGame",
                                          "onAddGameToFavorites",
                                          "onClickVideo",
                                          "game",
                                        ]
                                      ),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["options", "theme"]
                            )),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["theme"]
              ),
            ]
        ),
        _: 1,
      },
      8,
      [
        "onOpen",
        "onClose",
        "align",
        "direction",
        "theme",
        "stopElementsStore",
        "isRtl",
      ]
    )
  );
}
const Me = D(fo, [
    ["render", To],
    ["__scopeId", "data-v-f09741f7"],
  ]),
  vo = O({
    name: "MenuChampWithSubChampsDropdown",
    components: { MenuChampDropdown: Me, UiChampIcon: be },
    props: {
      champ: { type: Object, required: !0 },
      sport: { type: Object, required: !0 },
      direction: ce.direction,
    },
    emits: ["selectGame", "addGameToFavorites", "clickVideo"],
    setup(e) {
      $_$();
      const o = me(e, "champ"),
        n = o,
        { isCyberPage: m } = ee(),
        { componentsThemes: l } = N(),
        { hasSelectedSectionChampId: h } = x(),
        { count: a } = no(o),
        c = ve(328),
        { isRtl: d } = Z(),
        { hasSelectedSectionChampId: T } = oe(),
        r = g(() => (e.direction === "left" ? "left" : "right")),
        p = g(() => {
          $_$();
          var f;
          return (f = t(o).subChamps) == null
            ? void 0
            : f.some(({ sectionChampId: G }) => h(G));
        }),
        u = g(() => {
          $_$();
          var f;
          return (f = t(o).subChamps) == null
            ? void 0
            : f.some(({ sectionChampId: G }) => T(G));
        }),
        _ = de(t(a), z.inBrackets),
        k = Ie(n);
      return {
        readonlyChamp: o,
        alignType: X,
        sizeType: j,
        componentsThemes: l,
        isChampActive: p,
        isChampSelected: u,
        champDropdownDirection: r,
        isCyberPage: m,
        stopElements: Q,
        isRtl: d,
        isShowChampIcons: c,
        isIgnoreLogoType: k,
        setCount: _,
        MENU_SPORT_COUNT_CONFIG: z,
      };
    },
  });
function ko(e, o, n, m, l, h) {
  $_$();
  const a = s("UiChampIcon"),
    c = s("UiTag"),
    d = s("UiCaption"),
    T = s("UiOption"),
    r = s("MenuChampDropdown"),
    p = s("UiSelectOptions"),
    u = s("UiSelectContent"),
    _ = s("UiDropdown");
  return (
    S(),
    v(
      _,
      {
        align: e.alignType.START,
        direction: e.direction,
        theme: e.componentsThemes.UiDropdown,
        flexible: "",
        flippable: "",
        hoverable: "",
        overlay: "",
        triangle: !1,
        stopElementsStore: e.stopElements,
        isRtl: e.isRtl,
        class: "menu-champ-with-sub-champs-dropdown",
      },
      {
        customTrigger: i(
          () =>
            $_$() && [
              C(
                T,
                {
                  theme: e.componentsThemes.UiOption,
                  isSelected: e.isChampSelected || e.isChampActive,
                },
                {
                  additional: i(
                    () =>
                      $_$() && [
                        C(
                          d,
                          { size: e.MENU_SPORT_COUNT_CONFIG.size },
                          {
                            default: i(() => $_$() && [b(M(e.setCount), 1)]),
                            _: 1,
                          },
                          8,
                          ["size"]
                        ),
                      ]
                  ),
                  default: i(
                    () =>
                      $_$() && [
                        e.isCyberPage
                          ? V("", !0)
                          : (S(),
                            v(
                              a,
                              {
                                key: 0,
                                champ: e.readonlyChamp,
                                isDefaultIcon: !e.isShowChampIcons,
                                isIgnoreLogoType: e.isIgnoreLogoType,
                                class:
                                  "menu-champ-with-sub-champs-dropdown__ico",
                              },
                              null,
                              8,
                              ["champ", "isDefaultIcon", "isIgnoreLogoType"]
                            )),
                        "tag" in e.champ && e.champ.tag
                          ? (S(),
                            v(
                              c,
                              {
                                key: 1,
                                size: e.sizeType.s,
                                class:
                                  "menu-champ-with-sub-champs-dropdown__marker",
                              },
                              {
                                default: i(
                                  () => $_$() && [b(M(e.champ.tag), 1)]
                                ),
                                _: 1,
                              },
                              8,
                              ["size"]
                            ))
                          : V("", !0),
                        C(
                          d,
                          { dir: "auto", size: e.sizeType.m },
                          {
                            default: i(() => $_$() && [b(M(e.champ.name), 1)]),
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
                ["theme", "isSelected"]
              ),
            ]
        ),
        default: i(
          () =>
            $_$() && [
              C(
                u,
                {
                  theme: e.componentsThemes.UiSelectContent,
                  class: "menu-champ-with-sub-champs-dropdown__content",
                  limitedHeight: !1,
                },
                {
                  default: i(
                    () =>
                      $_$() && [
                        C(
                          p,
                          {
                            options: e.readonlyChamp.subChamps,
                            theme: e.componentsThemes.UiSelectOptions,
                          },
                          {
                            item: i(
                              ({ option: k }) =>
                                $_$() && [
                                  C(
                                    r,
                                    {
                                      onSelectGame:
                                        o[0] ||
                                        (o[0] = (f) =>
                                          e.$emit("selectGame", f)),
                                      onAddGameToFavorites:
                                        o[1] ||
                                        (o[1] = (f) =>
                                          e.$emit("addGameToFavorites", f)),
                                      onClickVideo:
                                        o[2] ||
                                        (o[2] = (f) =>
                                          e.$emit("clickVideo", f)),
                                      sport: e.sport,
                                      champ: k,
                                      direction: e.champDropdownDirection,
                                    },
                                    null,
                                    8,
                                    ["sport", "champ", "direction"]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["options", "theme"]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["theme"]
              ),
            ]
        ),
        _: 1,
      },
      8,
      ["align", "direction", "theme", "stopElementsStore", "isRtl"]
    )
  );
}
const Go = D(vo, [
    ["render", ko],
    ["__scopeId", "data-v-b32f795e"],
  ]),
  yo = O({
    name: "MenuSportDropdown",
    components: {
      MenuChampWithSubChampsDropdown: Go,
      MenuChampDropdown: Me,
      UiSportsMenuLoader: co,
    },
    props: {
      sport: { type: Object, required: !0 },
      tag: { type: String, default: "div" },
      postfix: { type: String, default: "" },
      direction: ce.direction,
    },
    emits: ["selectGame", "addGameToFavorites", "clickVideo"],
    setup(e, { emit: o }) {
      $_$();
      const n = me(e, "sport"),
        { trackSportFilterSelection: m } = te(),
        { componentsThemes: l, onlyGameClick: h } = N(),
        { sportSelectedInBetting: a } = so(n),
        { sportRouteLink: c, toggleSportRoute: d } = io(n),
        { isHomePage: T, isMultiLivePage: r } = ee(),
        { sportGamesCount: p } = ye(n),
        { listSelectedTopChampIds: u, clearSelectedTopChamps: _ } = oe(),
        {
          toggleSelectedSectionSportId: k,
          setSelectedSectionSportIds: f,
          hasSelectedSectionSportId: G,
        } = x(),
        { isRtl: U } = Z(),
        w = g(() =>
          e.postfix
            ? `${e.sport.sectionSportId}_${e.postfix}`
            : e.sport.sectionSportId
        ),
        $ = g(() => $_$() && G(t(w))),
        I = g(() => (e.direction === "left" ? "left" : "right")),
        L = g(() => $_$() && t(u).length >= 1),
        P = g(() => ($_$() && t(r)) || Ke.isShowMenuSportDropdown),
        H = () => {
          $_$();
          f([t(w)]);
        },
        A = () => {
          $_$();
          k({ item: t(w), bindKeys: [e.sport.menuSection], value: !1 });
        },
        E = (B) => {
          o("selectGame", B), A();
        },
        W = (B) => {
          o("addGameToFavorites", B);
        },
        q = (B) => {
          o("clickVideo", B);
        },
        y = () => {
          $_$();
          if (t(h)) return;
          !t(a) && (m(e.sport.id), E(e.sport.id)), t(L) && _(), d();
        },
        { sportChamps: ne, isLoading: se } = ro({ sport: n, isOpen: $ }),
        { mixedChampsAndChampGroupsWithSubGames: ie } = He(ne);
      return {
        isLoading: se,
        componentsThemes: l,
        isActive: $,
        isSelected: a,
        champDropdownDirection: I,
        mixedChampsAndChampGroupsWithSubGames: ie,
        sportRouteLink: c,
        onOpen: H,
        onClose: A,
        selectGame: E,
        handleAddGameToFavorites: W,
        clickVideo: q,
        toggleSelected: y,
        sportGamesCount: p,
        stopElements: Q,
        isRtl: U,
        alignType: X,
        isShowDropdown: P,
      };
    },
  }),
  Uo = { key: 1, class: "menu-sport-dropdown" };
function Io(e, o, n, m, l, h) {
  $_$();
  const a = s("UiSportsMenuLoader"),
    c = s("MenuChampWithSubChampsDropdown"),
    d = s("MenuChampDropdown"),
    T = s("UiSelectOptions"),
    r = s("UiSelectContent"),
    p = s("UiDropdown");
  return e.isShowDropdown
    ? (S(),
      v(
        p,
        {
          key: 0,
          onOpen: e.onOpen,
          onClose: e.onClose,
          align: e.alignType.START,
          direction: e.direction,
          tag: e.tag,
          theme: e.componentsThemes.UiDropdown,
          triangle: !1,
          flexible: "",
          flippable: "",
          hoverable: "",
          overlay: "",
          stopElementsStore: e.stopElements,
          isRtl: e.isRtl,
          class: "menu-sport-dropdown",
        },
        {
          customTrigger: i(
            () =>
              $_$() && [
                ue(
                  e.$slots,
                  "trigger",
                  Se(
                    he({
                      isActive: e.isActive,
                      isSelected: e.isSelected,
                      sportRouteLink: e.sportRouteLink,
                      toggleSelected: e.toggleSelected,
                      sportGamesCount: e.sportGamesCount,
                    })
                  ),
                  void 0,
                  !0
                ),
              ]
          ),
          default: i(
            () =>
              $_$() && [
                C(
                  r,
                  {
                    theme: e.componentsThemes.UiSelectContent,
                    class: "menu-sport-dropdown__content",
                    limitedHeight: !1,
                  },
                  {
                    default: i(
                      () =>
                        $_$() && [
                          e.isLoading
                            ? (S(),
                              v(
                                a,
                                {
                                  key: 0,
                                  champsCount: e.sport.champsCount,
                                  theme: e.componentsThemes.UiOption,
                                },
                                null,
                                8,
                                ["champsCount", "theme"]
                              ))
                            : (S(),
                              v(
                                T,
                                {
                                  key: 1,
                                  options:
                                    e.mixedChampsAndChampGroupsWithSubGames,
                                  theme: e.componentsThemes.UiSelectOptions,
                                },
                                {
                                  item: i(
                                    ({ option: u }) =>
                                      $_$() && [
                                        u.subChamps
                                          ? (S(),
                                            v(
                                              c,
                                              {
                                                key: 0,
                                                onSelectGame: e.selectGame,
                                                onAddGameToFavorites:
                                                  e.handleAddGameToFavorites,
                                                onClickVideo: e.clickVideo,
                                                sport: e.sport,
                                                champ: u,
                                                direction:
                                                  e.champDropdownDirection,
                                              },
                                              null,
                                              8,
                                              [
                                                "onSelectGame",
                                                "onAddGameToFavorites",
                                                "onClickVideo",
                                                "sport",
                                                "champ",
                                                "direction",
                                              ]
                                            ))
                                          : (S(),
                                            v(
                                              d,
                                              {
                                                key: 1,
                                                onSelectGame: e.selectGame,
                                                onAddGameToFavorites:
                                                  e.handleAddGameToFavorites,
                                                onClickVideo: e.clickVideo,
                                                sport: e.sport,
                                                champ: u,
                                                direction:
                                                  e.champDropdownDirection,
                                              },
                                              null,
                                              8,
                                              [
                                                "onSelectGame",
                                                "onAddGameToFavorites",
                                                "onClickVideo",
                                                "sport",
                                                "champ",
                                                "direction",
                                              ]
                                            )),
                                      ]
                                  ),
                                  _: 1,
                                },
                                8,
                                ["options", "theme"]
                              )),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["theme"]
                ),
              ]
          ),
          _: 3,
        },
        8,
        [
          "onOpen",
          "onClose",
          "align",
          "direction",
          "tag",
          "theme",
          "stopElementsStore",
          "isRtl",
        ]
      ))
    : (S(),
      F("div", Uo, [
        ue(
          e.$slots,
          "trigger",
          Se(
            he({
              isActive: e.isActive,
              isSelected: e.isSelected,
              sportRouteLink: e.sportRouteLink,
              toggleSelected: e.toggleSelected,
              sportGamesCount: e.sportGamesCount,
            })
          ),
          void 0,
          !0
        ),
      ]));
}
const we = D(yo, [
    ["render", Io],
    ["__scopeId", "data-v-cbb92d0d"],
  ]),
  bo = O({
    name: "MenuSport",
    components: { MenuSportDropdown: we },
    props: {
      sport: { type: Object, required: !0 },
      isDropdownItem: { type: Boolean, default: !1 },
    },
    emits: ["selectGame", "toggleFavorite", "clickVideo"],
    setup(e) {
      $_$();
      const { sport: o, isDropdownItem: n } = pe(e),
        { sportGamesCount: m } = ye(o),
        { componentsThemes: l } = N(),
        h = g(() => $_$() && { "menu-dropdown-item": t(n) }),
        a = g(() => $_$() && { "menu-dropdown-item__option": t(n) }),
        c = de(t(m), z.inBrackets);
      return {
        ico: g(() => e.sport.ico),
        sizeType: j,
        componentsThemes: l,
        sportGamesCount: m,
        selectItemClass: h,
        selectOptionClass: a,
        setCount: c,
        MENU_SPORT_COUNT_CONFIG: z,
      };
    },
  });
function Mo(e, o, n, m, l, h) {
  $_$();
  const a = s("UiIcoSport"),
    c = s("UiCaption"),
    d = s("UiOption"),
    T = s("MenuSportDropdown"),
    r = s("UiSelectItem");
  return e.sportGamesCount
    ? (S(),
      v(
        r,
        { key: 0, class: ge(e.selectItemClass) },
        {
          default: i(
            () =>
              $_$() && [
                C(
                  T,
                  {
                    onSelectGame:
                      o[0] || (o[0] = (p) => e.$emit("selectGame", p)),
                    onToggleFavorite:
                      o[1] || (o[1] = (p) => e.$emit("toggleFavorite", p)),
                    onClickVideo:
                      o[2] || (o[2] = (p) => e.$emit("clickVideo", p)),
                    sport: e.sport,
                    direction: "left",
                    postfix: "menu-other",
                  },
                  {
                    trigger: i(
                      ({ isActive: p, isSelected: u, toggleSelected: _ }) =>
                        $_$() && [
                          C(
                            d,
                            {
                              onClick: _,
                              isSelected: u || p,
                              theme: e.componentsThemes.UiOption,
                              captionSize: e.sizeType.m,
                              class: ge(e.selectOptionClass),
                            },
                            {
                              ico: i(
                                () =>
                                  $_$() && [
                                    C(a, { ico: e.ico }, null, 8, ["ico"]),
                                  ]
                              ),
                              caption: i(
                                () => $_$() && [b(M(e.sport.name), 1)]
                              ),
                              additional: i(
                                () =>
                                  $_$() && [
                                    C(
                                      c,
                                      { size: e.MENU_SPORT_COUNT_CONFIG.size },
                                      {
                                        default: i(
                                          () => $_$() && [b(M(e.setCount), 1)]
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
                            [
                              "onClick",
                              "isSelected",
                              "theme",
                              "captionSize",
                              "class",
                            ]
                          ),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["sport"]
                ),
              ]
          ),
          _: 1,
        },
        8,
        ["class"]
      ))
    : V("", !0);
}
const wo = D(bo, [["render", Mo]]),
  fe = (e) =>
    e
      .trim()
      .replace(/\s{2,}/g, " ")
      .toLowerCase(),
  $o = O({
    name: "MenuDropdown",
    components: {
      UiSportsMenuHead: ze,
      UiSportsMenuSectionName: Re,
      MenuSport: wo,
    },
    props: {
      title: { type: String, required: !0 },
      icon: { type: String, required: !0 },
      sports: { type: Array, required: !0 },
      isSectioned: { type: Boolean, default: !1 },
    },
    emits: ["selectGame", "toggleFavorite", "clickVideo"],
    setup() {
      $_$();
      const { componentsThemes: e } = N(),
        { isRtl: o } = Z(),
        n = ae(""),
        m = g(() => fe(n.value)),
        l = g(() => $_$() && !t(m).length);
      return {
        alignType: X,
        MENU_SECTION_LANG_KEY_MAP: Ve,
        componentsThemes: e,
        stopElements: Q,
        isRtl: o,
        searchText: n,
        normalizedSearchText: m,
        isDropdownHoverable: l,
      };
    },
    computed: {
      sortedSportSectionIds() {
        $_$();
        const e = Fe(this.filteredSports.map((o) => o.menuSection));
        return Ye.filter((o) => e.includes(o));
      },
      filteredSportsBySectionId() {
        if (this.isSectioned)
          return this.filteredSports.reduce((e, o) => {
            var n;
            const m =
              (n = o.sectionSportId) != null
                ? n
                : `${o.subSportId}-${o.sportId}`;
            return e[o.menuSection].push({ ...o, sportKey: m }), e;
          }, Object.fromEntries(this.sortedSportSectionIds.map((e) => [e, []])));
      },
      filteredSports() {
        $_$();
        const { normalizedSearchText: e, sports: o, isSectioned: n } = this;
        if (!e) return o;
        const m = o.filter((l) => fe(l.name).includes(e));
        return n || De(m, e, "name"), m;
      },
    },
    methods: {
      selectGame(e) {
        this.$emit("selectGame", e);
      },
      toggleFavorite(e) {
        this.$emit("toggleFavorite", e);
      },
      clickVideo(e) {
        this.$emit("clickVideo", e);
      },
    },
  });
function Oo(e, o, n, m, l, h) {
  $_$();
  const a = s("UiIco"),
    c = s("UiSearch"),
    d = s("UiSportsMenuSectionName"),
    T = s("UiSportsMenuHead"),
    r = s("UiSelectItem"),
    p = s("MenuSport"),
    u = s("UiSelectOptions"),
    _ = s("UiEmptyMessage"),
    k = s("UiSelectContent"),
    f = s("UiDropdown");
  return (
    S(),
    v(
      f,
      {
        theme: e.componentsThemes.UiDropdown,
        align: e.alignType.START,
        flexible: "",
        flippable: "",
        overlay: "",
        stopElementsStore: e.stopElements,
        isRtl: e.isRtl,
        triggerTooltip: e.title,
        hoverable: e.isDropdownHoverable,
        triggerDecent: "",
        class: "menu-dropdown",
      },
      {
        trigger: i(() => $_$() && [C(a, { ico: e.icon }, null, 8, ["ico"])]),
        default: i(
          () =>
            $_$() && [
              C(
                k,
                {
                  theme: e.componentsThemes.UiSelectContent,
                  scrollbarTheme: e.componentsThemes.UiScrollbar,
                  limitedHeight: !1,
                  class: "menu-dropdown__content",
                },
                {
                  top: i(
                    () =>
                      $_$() && [
                        C(
                          c,
                          {
                            modelValue: e.searchText,
                            "onUpdate:modelValue":
                              o[0] || (o[0] = (G) => (e.searchText = G)),
                            theme: e.componentsThemes.UiSearch,
                            placeholder: e.$T("link_menu_search"),
                          },
                          null,
                          8,
                          ["modelValue", "theme", "placeholder"]
                        ),
                      ]
                  ),
                  default: i(
                    () =>
                      $_$() && [
                        e.isSectioned
                          ? (S(),
                            v(
                              u,
                              {
                                key: 0,
                                theme: e.componentsThemes.UiSelectOptions,
                              },
                              {
                                default: i(
                                  () =>
                                    $_$() && [
                                      (S(!0),
                                      F(
                                        K,
                                        null,
                                        re(
                                          e.sortedSportSectionIds,
                                          (G) =>
                                            $_$() &&
                                            (S(),
                                            F(
                                              K,
                                              { key: G },
                                              [
                                                C(
                                                  r,
                                                  null,
                                                  {
                                                    default: i(
                                                      () =>
                                                        $_$() && [
                                                          C(
                                                            T,
                                                            {
                                                              theme:
                                                                e
                                                                  .componentsThemes
                                                                  .UiSportsMenuHead,
                                                            },
                                                            {
                                                              default: i(
                                                                () =>
                                                                  $_$() && [
                                                                    C(
                                                                      d,
                                                                      null,
                                                                      {
                                                                        default:
                                                                          i(
                                                                            () =>
                                                                              $_$() && [
                                                                                b(
                                                                                  M(
                                                                                    e.$T(
                                                                                      e
                                                                                        .MENU_SECTION_LANG_KEY_MAP[
                                                                                        G
                                                                                      ]
                                                                                    )
                                                                                  ),
                                                                                  1
                                                                                ),
                                                                              ]
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1024
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
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                                (S(!0),
                                                F(
                                                  K,
                                                  null,
                                                  re(
                                                    e.filteredSportsBySectionId[
                                                      G
                                                    ],
                                                    (U) =>
                                                      $_$() &&
                                                      (S(),
                                                      v(
                                                        p,
                                                        {
                                                          key: U.sportKey,
                                                          onSelectGame:
                                                            e.selectGame,
                                                          onToggleFavorite:
                                                            e.toggleFavorite,
                                                          onClickVideo:
                                                            e.clickVideo,
                                                          sport: U,
                                                          isDropdownItem: "",
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "onSelectGame",
                                                          "onToggleFavorite",
                                                          "onClickVideo",
                                                          "sport",
                                                        ]
                                                      ))
                                                  ),
                                                  128
                                                )),
                                              ],
                                              64
                                            ))
                                        ),
                                        128
                                      )),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["theme"]
                            ))
                          : (S(),
                            v(
                              u,
                              {
                                key: 1,
                                theme: e.componentsThemes.UiSelectOptions,
                              },
                              {
                                default: i(
                                  () =>
                                    $_$() && [
                                      (S(!0),
                                      F(
                                        K,
                                        null,
                                        re(
                                          e.filteredSports,
                                          (G) =>
                                            $_$() &&
                                            (S(),
                                            v(
                                              p,
                                              {
                                                key: G.sportKey,
                                                onSelectGame: e.selectGame,
                                                onToggleFavorite:
                                                  e.toggleFavorite,
                                                onClickVideo: e.clickVideo,
                                                sport: G,
                                              },
                                              null,
                                              8,
                                              [
                                                "onSelectGame",
                                                "onToggleFavorite",
                                                "onClickVideo",
                                                "sport",
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
                              ["theme"]
                            )),
                        e.filteredSports.length
                          ? V("", !0)
                          : (S(),
                            v(
                              _,
                              {
                                key: 2,
                                theme: e.componentsThemes.UiEmptyMessage,
                              },
                              {
                                default: i(
                                  () =>
                                    $_$() && [
                                      b(M(e.$T("main_search_not_found")), 1),
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
                ["theme", "scrollbarTheme"]
              ),
            ]
        ),
        _: 1,
      },
      8,
      [
        "theme",
        "align",
        "stopElementsStore",
        "isRtl",
        "triggerTooltip",
        "hoverable",
      ]
    )
  );
}
const Do = D($o, [
    ["render", Oo],
    ["__scopeId", "data-v-13901dc4"],
  ]),
  Fo = "bold",
  Vo = O({
    name: "MenuSportList",
    components: { MenuSportDropdown: we },
    props: { items: { type: Array, required: !0 } },
    emits: ["selectGame", "addGameToFavorites", "clickVideo"],
    setup() {
      $_$();
      return { sizeType: j, UI_SWITCH_BUTTON_WEIGHT: Fo };
    },
  }),
  Lo = ["onClick", "href"];
function Bo(e, o, n, m, l, h) {
  $_$();
  const a = s("UiIcoSport"),
    c = s("UiCaption"),
    d = s("UiTag"),
    T = s("UiSwitch"),
    r = Le,
    p = s("MenuSportDropdown"),
    u = s("UiSwitches");
  return (
    S(),
    v(
      u,
      { options: e.items, class: "menu-sport-list" },
      {
        default: i(
          ({ item: _ }) =>
            $_$() && [
              (S(),
              v(
                p,
                {
                  key: _.sectionSportId,
                  onSelectGame:
                    o[0] || (o[0] = (k) => e.$emit("selectGame", k)),
                  onAddGameToFavorites:
                    o[1] || (o[1] = (k) => e.$emit("addGameToFavorites", k)),
                  onClickVideo:
                    o[2] || (o[2] = (k) => e.$emit("clickVideo", k)),
                  sport: _,
                  class: "menu-sport-list__item",
                },
                {
                  trigger: i(
                    ({
                      isActive: k,
                      isSelected: f,
                      toggleSelected: G,
                      sportRouteLink: U,
                    }) =>
                      $_$() && [
                        C(
                          T,
                          {
                            checked: k || f,
                            weight: e.UI_SWITCH_BUTTON_WEIGHT,
                            inputType: "checkbox",
                            class:
                              "menu-sport-list__switch menu-sport-list-switch",
                          },
                          {
                            default: i(
                              () =>
                                $_$() && [
                                  C(
                                    a,
                                    {
                                      ico: _.ico,
                                      class: "menu-sport-list-switch__ico",
                                    },
                                    null,
                                    8,
                                    ["ico"]
                                  ),
                                  C(
                                    c,
                                    { size: e.sizeType.xs },
                                    {
                                      default: i(
                                        () => $_$() && [b(M(_.name), 1)]
                                      ),
                                      _: 2,
                                    },
                                    1032,
                                    ["size"]
                                  ),
                                  _.isNew
                                    ? (S(),
                                      v(
                                        d,
                                        { key: 0, size: e.sizeType.s },
                                        {
                                          default: i(
                                            () =>
                                              ($_$() && o[3]) ||
                                              (o[3] = [b(" new ")])
                                          ),
                                          _: 1,
                                        },
                                        8,
                                        ["size"]
                                      ))
                                    : V("", !0),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          ["checked", "weight"]
                        ),
                        C(
                          r,
                          { to: U, custom: "" },
                          {
                            default: i(
                              ({ href: w }) =>
                                $_$() && [
                                  le(
                                    "a",
                                    {
                                      onClick: Te(G, ["prevent"]),
                                      href: w,
                                      class: "menu-sport-list__link",
                                    },
                                    null,
                                    8,
                                    Lo
                                  ),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          ["to"]
                        ),
                      ]
                  ),
                  _: 2,
                },
                1032,
                ["sport"]
              )),
            ]
        ),
        _: 1,
      },
      8,
      ["options"]
    )
  );
}
const No = D(Vo, [
    ["render", Bo],
    ["__scopeId", "data-v-44fca2c3"],
  ]),
  Ao = () => {
    $_$();
    const e = Be(),
      { isLive: o } = N(),
      {
        trackSportSelection: n,
        trackSportSelectionInDropdown: m,
        trackCyberSportSelectionInDropdown: l,
      } = te(),
      {
        sportsMenuFilteredSportsByMenuSection: h,
        sportsMenuFilteredSortedSportsSeparated: a,
        sportsMenuFilteredSortedSportsAll: c,
      } = mo(),
      d = ae(),
      T = ae(),
      r = g(() => {
        $_$();
        var y;
        return (y = t(h)[28]) != null ? y : [];
      }),
      p = g(() => $_$() && t(r).length),
      { debounceUpdateCount: u, visibleCount: _ } = Je({ target: d, items: c }),
      k = g(() => $_$() && t(c).slice(0, t(_))),
      f = g(() => $_$() && t(a).short.length),
      G = g(() => $_$() && t(a).other.length),
      U = g(() => $_$() && t(k).length),
      w = g(() => $_$() && t(c).length),
      $ = g(() => $_$() && t(f) > 0 && t(G) > 0 && t(f) < t(U)),
      I = g(() => $_$() && t(w) > t(U)),
      L = g(() => ($_$() && t(I)) || t($)),
      P = g(() => ($_$() && t($) ? t(a).short : t(k))),
      H = g(() => ($_$() && t($) ? t(a).other : t(c))),
      A = (y) => {
        $_$();
        n(t(o), y);
      },
      E = (y) => {
        $_$();
        m(t(o), y);
      },
      W = (y) => {
        $_$();
        l(t(o), y);
      },
      q = () => {
        _e(T, u), _e(d, u);
      };
    return (
      Ne(
        () =>
          $_$() && [t(f), t(p), e.isLeftSectionHidden, e.isRightSectionHidden],
        u
      ),
      {
        menuSportListItems: P,
        menuDropdownItems: H,
        templateSportList: d,
        templateFavorites: T,
        filteredCyberSports: r,
        isMenuDropdownVisible: L,
        trackSportMenuSelectGame: A,
        trackSportMenuFilterSelectGame: E,
        trackSportMenuCyberFilterSelectGame: W,
        navMenuObserveTarget: q,
      }
    );
  },
  Eo = O({
    name: "NavMenu_F",
    components: { MenuDropdown: Do, MenuSportList: No },
    setup() {
      $_$();
      const {
        menuSportListItems: e,
        menuDropdownItems: o,
        templateSportList: n,
        filteredCyberSports: m,
        isMenuDropdownVisible: l,
        trackSportMenuSelectGame: h,
        trackSportMenuFilterSelectGame: a,
        trackSportMenuCyberFilterSelectGame: c,
        navMenuObserveTarget: d,
      } = Ao();
      return (
        Ae(d),
        {
          menuSportListItems: e,
          menuDropdownItems: o,
          filteredCyberSports: m,
          templateSportList: n,
          iconName: Ee,
          isMenuDropdownVisible: l,
          trackSportMenuSelectGame: h,
          trackSportMenuFilterSelectGame: a,
          trackSportMenuCyberFilterSelectGame: c,
        }
      );
    },
  }),
  Ro = { class: "nav-menu" },
  zo = { class: "nav-menu__controls" },
  Po = { key: 0, class: "nav-menu__control" },
  Ho = { key: 1, class: "nav-menu__control" };
function Wo(e, o, n, m, l, h) {
  $_$();
  const a = s("MenuSportList"),
    c = s("MenuDropdown");
  return (
    S(),
    F("div", Ro, [
      C(
        a,
        {
          ref: "templateSportList",
          onSelectGame: e.trackSportMenuSelectGame,
          items: e.menuSportListItems,
          class: "nav-menu__list",
        },
        null,
        8,
        ["onSelectGame", "items"]
      ),
      le("ul", zo, [
        e.isMenuDropdownVisible
          ? (S(),
            F("li", Po, [
              C(
                c,
                {
                  onSelectGame: e.trackSportMenuFilterSelectGame,
                  title: e.$T("settings_other"),
                  icon: e.iconName.MENU,
                  sports: e.menuDropdownItems,
                  isSectioned: "",
                },
                null,
                8,
                ["onSelectGame", "title", "icon", "sports"]
              ),
            ]))
          : V("", !0),
        e.filteredCyberSports.length
          ? (S(),
            F("li", Ho, [
              C(
                c,
                {
                  onSelectGame: e.trackSportMenuCyberFilterSelectGame,
                  title: e.$T("menu_section_e"),
                  icon: e.iconName.CYBER,
                  sports: e.filteredCyberSports,
                },
                null,
                8,
                ["onSelectGame", "title", "icon", "sports"]
              ),
            ]))
          : V("", !0),
      ]),
    ])
  );
}
const qo = D(Eo, [
    ["render", Wo],
    ["__scopeId", "data-v-a6274449"],
  ]),
  jo = O({
    name: "NavSportMenuApp",
    components: { NavMenu: qo, MenuLoader: lo, VSwitch: uo },
    setup() {
      $_$();
      const { loading: e, sportsMenuPollingForceUpdate: o } = ao();
      t(e) || o();
      const { sportsMenuComponentState: n } = Xe();
      return po(), { sportsMenuComponentState: n };
    },
  }),
  Ko = { class: "nav-sport-menu-app" };
function Yo(e, o, n, m, l, h) {
  $_$();
  const a = s("MenuLoader"),
    c = s("NavMenu"),
    d = s("VSwitch");
  return (
    S(),
    F("div", Ko, [
      C(
        d,
        { value: e.sportsMenuComponentState },
        {
          0: i(() => $_$() && [C(a, { class: "nav-sport-menu-app__loader" })]),
          1: i(() => ($_$() && o[0]) || (o[0] = [le("div", null, null, -1)])),
          2: i(() => $_$() && [C(c, { class: "nav-sport-menu-app__menu" })]),
          _: 1,
        },
        8,
        ["value"]
      ),
    ])
  );
}
const Jo = D(jo, [
    ["render", Yo],
    ["__scopeId", "data-v-de83becd"],
  ]),
  Qo = O({
    name: "NavigationSportMenuAppDataProvider",
    components: { NavigationSportMenu: Jo },
    props: {
      pageType: Ce.pageType,
      bettingType: Ce.bettingType,
      clickGame: { type: Function, default: () => {} },
      componentsThemes: { type: Object, default: () => new Ge() },
      onlyGameClick: { type: Boolean, default: !1 },
      groupByCategories: { type: Boolean, default: !1 },
    },
    setup(e) {
      $_$();
      const { liveTab: o } = ke(),
        {
          pageType: n,
          componentsThemes: m,
          onlyGameClick: l,
          groupByCategories: h,
        } = pe(e),
        a = g(() =>
          ($_$() && e.bettingType === J.LINE) || t(o) === 1 ? J.LINE : J.LIVE
        );
      return (
        So({
          bettingType: a,
          pageType: n,
          componentsThemes: m,
          onlyGameClick: l,
          groupByCategories: h,
          clickGame: e.clickGame,
        }),
        {}
      );
    },
  });
function Xo(e, o, n, m, l, h) {
  $_$();
  const a = s("NavigationSportMenu");
  return S(), v(a);
}
const Ht = D(Qo, [["render", Xo]]);
export { Ht as default };
