import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as O,
  reactivity_esmBundler_toRefs as Ce,
  useNotifications_useNotifications as Oe,
  index_useT as ce,
  runtimeCore_esmBundler_computed as s,
  runtimeCore_esmBundler_createBlock as _,
  runtimeCore_esmBundler_openBlock as l,
  reactivity_esmBundler_unref as e,
  size_constants_sizeType as te,
  runtimeCore_esmBundler_withCtx as a,
  runtimeCore_esmBundler_createTextVNode as B,
  shared_esmBundler_toDisplayString as R,
  useGlobalStore as fe,
  runtimeCore_esmBundler_useTemplateRef as Ue,
  reactivity_esmBundler_ref as we,
  useToggle_useToggle as ae,
  runtimeCore_esmBundler_watch as Ee,
  runtimeCore_esmBundler_watchEffect as xe,
  execAsync as Me,
  delay as ze,
  runtimeCore_esmBundler_createVNode as C,
  runtimeCore_esmBundler_createCommentVNode as H,
  runtimeDom_esmBundler_withModifiers as w,
  runtimeCore_esmBundler_createElementBlock as A,
  runtimeCore_esmBundler_Fragment as U,
  runtimeCore_esmBundler_renderList as $,
  reactivity_esmBundler_toRef as Y,
  index_getConfigs as Fe,
  runtimeCore_esmBundler_resolveComponent as N,
  shared_esmBundler_normalizeClass as L,
  runtimeCore_esmBundler_createSlots as me,
  index_getConfig as le,
  runtimeCore_esmBundler_onMounted as De,
  whenever as He,
  runtimeCore_esmBundler_createElementVNode as $e,
  isDef as Ie,
  MENU_SECTION_LANG_KEY_MAP as ie,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as We,
  constants_MENU_SECTION_URL_NAME_MAP as Ve,
  omitNotDefined_omitNotDefined as je,
  theme_constants_themeType as Pe,
  hasProp as qe,
  BettingPageType as Ke,
  runtimeCore_esmBundler_withDirectives as Qe,
  runtimeDom_esmBundler_vShow as Ye,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useSportsMenuFiltersStore as P } from "./6550e9bfb1.js";
import { useSelectedSportMenuEntitiesStore as oe } from "./aa92bf211f.js";
import { useBettingStore as ye } from "./1af6a171a2.js";
import {
  useSelectedBettingEntitiesStore as J,
  useIgnoreLogoType as Te,
  useBettingStateInjector as Je,
} from "./9de70556bb.js";
import {
  useGameStore$1 as Xe,
  useToggleTitle as ne,
  _export_sfc as X,
} from "./entry-50afb6f36c.js";
import { useSportsMenuAppConfig as E } from "./9816d50199.js";
import {
  UiSportsMenuHead as Ze,
  UiSportsMenuSectionName as et,
} from "./e1e32a66a3.js";
import { UiGamesLoaderStub as tt } from "./60d766cde4.js";
import { useBettingPageData as ot } from "./4a993370c6.js";
import { UiSubGameBlock as nt } from "./f867225f04.js";
import { useSportsMenuAppInjector as Z } from "./25dbd9c5df.js";
import {
  useBettingGameRoute as ke,
  useBettingChampSelected as st,
} from "./944eab39d4.js";
import { useSportsMenuAnalytics as se } from "./b11db110fe.js";
import { useBetBuilderMode as pt } from "./d046664d0b.js";
import { useCouponContext as rt } from "./9afba2de88.js";
import {
  useUiSportsEventProviderByGame as ut,
  UiSportsEvent as it,
} from "./669f85a6b8.js";
import { useSportsMenuStore as pe } from "./e063df8dd1.js";
import { injectScrollToActiveGame as ct } from "./9f1a1c8555.js";
import {
  LeftSideNavItem as j,
  LeftSideNavItems as q,
  LeftSideNav as at,
} from "./53db7ae5ba.js";
import { _sfc_main as de } from "./762b07d264.js";
import { useMatchTabFilter as mt } from "./858ab97c10.js";
import {
  useBettingChampRoute as lt,
  useMixedChampsAndChampGroupsWithSubGames as dt,
  useSportsMenuSportInfo as gt,
} from "./37dd3dae1b.js";
import {
  useBettingSportRoute as Be,
  useSportsMenuChampOnFetch as St,
  useSportsMenuChampCount as ht,
  isChampGroupWithSubChamps as _t,
  useBettingSportSelected as Ct,
  useSportsMenuSportOnFetch as ft,
} from "./3004035142.js";
/* empty css          */ import { UiSportsMenuLoader as Mt } from "./2ac826c613.js";
const It = O({
    __name: "SportsMenuSubGame",
    props: { subGame: {} },
    setup(p) {
      $_$();
      const o = p,
        { sportsMenuAppConfig: t } = E(),
        n = Xe(),
        { subGame: r } = Ce(o),
        { bettingType: u, pageType: i } = Z(),
        { hasSelectedGameId: c } = J(),
        { toggleSubGameRoute: g, gameSelectedInBetting: S } = ke(r, {
          pageType: i,
          bettingType: u,
        }),
        { trackSubgameClick: d } = se(),
        { isBetBuilderMode: m, setBetBuilderMode: M } = pt(),
        { notificationQuestion: h } = Oe(),
        { clearBets: v } = rt(),
        b = ce(),
        T = s(() => c(o.subGame.gameIdForUrl)),
        k = () => {
          $_$();
          d(o.subGame.id, e(u)), g();
        },
        I = () => {
          $_$();
          if (!e(T)) {
            if (
              n.currentMainGame.id === o.subGame.mainGameId &&
              e(m) &&
              !(n.games.findIndex((G) => G.id === o.subGame.id) !== -1)
            )
              return h(b("coupon_bet_builder_sub_game"), {
                onSubmit: () => {
                  M(!1), v(), k();
                },
              });
            k();
          }
        };
      return (y, G) =>
        $_$() &&
        (l(),
        _(
          nt,
          {
            onClickLink: I,
            gameId: e(r).id,
            bettingType: e(u),
            title: e(r).name,
            hasFavoriteButton: e(t).hasFavoriteButton,
            size: e(te).s,
            theme: e(t).subGame,
            isOpened: e(S),
            class: "sports-menu-sub-game",
          },
          { default: a(() => $_$() && [B(R(e(r).name), 1)]), _: 1 },
          8,
          [
            "gameId",
            "bettingType",
            "title",
            "hasFavoriteButton",
            "size",
            "theme",
            "isOpened",
          ]
        ));
    },
  }),
  yt = O({
    __name: "SportsMenuGame",
    props: { game: {} },
    setup(p) {
      $_$();
      const o = p,
        { sportsMenuAppConfig: t } = E(),
        { game: n } = Ce(o),
        r = fe(),
        u = Ue("uiSportsEventElement"),
        i = s(() => r.getIsLeftSectionHover),
        c = s(() => r.isLeftSectionHidden),
        g = we(!1),
        S = ct(),
        { bettingType: d, pageType: m, isTranslationDisabled: M } = Z(),
        { isCyberPage: h } = ot(),
        { hasSelectedGameId: v } = J(),
        {
          trackSportSelect: b,
          trackOpenGameClick: T,
          trackAddGameToFavoriteClick: k,
          trackVideoEnable: I,
        } = se(),
        {
          toggleGameRoute: y,
          gameRouteLink: G,
          gameSelectedInBetting: z,
        } = ke(n, { pageType: m, bettingType: d }),
        { sportsMenuSubGamesByGameId: F, getBettingSectionChamp: x } = pe(),
        [D, W] = ae(!1),
        re = s(() => !!o.game.subGamesCount),
        ue = s(() => {
          var f, V;
          return (V =
            (f = x(o.game.sectionChampId)) == null ? void 0 : f.name) != null
            ? V
            : "";
        }),
        K = s(() => {
          $_$();
          var f;
          return (f = e(F)[o.game.id]) != null ? f : [];
        }),
        ee = s(() => $_$() && e(K).some((f) => v(f.gameIdForUrl))),
        be = s(() => $_$() && e(K).some((f) => v(f.gameIdForUrl))),
        Se = s(() => ($_$() && e(z)) || e(be)),
        Ge = () => {
          $_$();
          var f;
          y(),
            b((f = o.game.sportId) != null ? f : 0, e(d)),
            T({ gameId: o.game.id });
        };
      return (
        Ee(
          ee,
          (f) => {
            W.value = f;
          },
          { immediate: !0 }
        ),
        xe(async () => {
          $_$();
          let f, V;
          const Q = e(Se),
            he = e(u),
            Ne = e(c),
            Le = e(i),
            Ae = e(g);
          if ((Q || (g.value = !1), !Q || !he || (Ne && !Le) || Ae)) return;
          ([f, V] = Me(() => $_$() && ze(0))), await f, V();
          const Re = he.$el.getBoundingClientRect();
          S(Re), (g.value = !0);
        }),
        ut({
          game: n,
          to: G,
          gameLink: G,
          theme: t.game,
          champName: ue,
          isCyber: h,
          showSubGames: re,
          isActive: Se,
          isExpanded: W,
          isTranslationDisabled: M,
          bettingType: d,
          onFavoriteAdd: (f) => {
            $_$();
            k({ isAdded: f, sportId: e(n).sportId });
          },
          onVideoEnable: (f) => {
            $_$();
            I({ isEnabled: f, sportId: e(n).sportId });
          },
        }),
        (f, V) =>
          $_$() &&
          (l(),
          _(
            j,
            {
              isRounded: e(t).sportsMenuGameIsRounded,
              class: "sports-menu-game",
            },
            {
              default: a(
                () =>
                  $_$() && [
                    C(
                      it,
                      {
                        ref_key: "uiSportsEventElement",
                        ref: u,
                        onClick: w(Ge, ["stop"]),
                        onExpandButtonClick: e(D),
                      },
                      null,
                      8,
                      ["onExpandButtonClick"]
                    ),
                    e(W)
                      ? (l(),
                        _(
                          q,
                          { key: 0, isSeparated: "" },
                          {
                            default: a(
                              () =>
                                $_$() && [
                                  (l(!0),
                                  A(
                                    U,
                                    null,
                                    $(
                                      e(K),
                                      (Q) =>
                                        $_$() &&
                                        (l(),
                                        _(
                                          j,
                                          { key: Q.id },
                                          {
                                            default: a(
                                              () =>
                                                $_$() && [
                                                  C(
                                                    It,
                                                    { subGame: Q },
                                                    null,
                                                    8,
                                                    ["subGame"]
                                                  ),
                                                ]
                                            ),
                                            _: 2,
                                          },
                                          1024
                                        ))
                                    ),
                                    128
                                  )),
                                ]
                            ),
                            _: 1,
                          }
                        ))
                      : H("", !0),
                  ]
              ),
              _: 1,
            },
            8,
            ["isRounded"]
          ))
      );
    },
  }),
  Tt = (p, o = !0) => {
    $_$();
    const { toggleSelectedSectionChampId: t, hasSelectedSectionChampId: n } =
        oe(),
      r = s(() => $_$() && n(e(p).sectionChampId));
    return {
      champSelectedInSportsMenu: r,
      toggleChampInSportsMenu: (i = !e(r)) => {
        $_$();
        t({
          item: e(p).sectionChampId,
          bindKeys: [e(p).sectionSportId],
          isClear: !e(o),
          value: i,
        });
      },
    };
  },
  kt = (p) => {
    $_$();
    const { getBettingSectionSport: o } = pe(),
      { sportsMenuFilteredGamesBySectionChampId: t } = P(),
      { champSelectedInSportsMenu: n, toggleChampInSportsMenu: r } = Tt(p),
      u = ye(),
      i = mt(),
      c = s(() => $_$() && o(e(p).sectionSportId)),
      g = s(() => $_$() && e(n)),
      S = s(() =>
        $_$() && u.bettingIsOnlyWithVideos && e(i.liveTab) !== 1
          ? e(p).gamesCountWithVideo
          : e(p).gamesCount
      ),
      d = s(() => {
        $_$();
        var m;
        return (m = e(t)[e(p).sectionChampId]) != null ? m : [];
      });
    return {
      sport: c,
      champSelectedInSportsMenu: n,
      champGamesCount: S,
      champIsOpened: g,
      champGames: d,
      toggleChampInSportsMenu: r,
    };
  },
  Bt = (p) => {
    const { bettingType: o } = pe(),
      {
        sport: t,
        champSelectedInSportsMenu: n,
        champGamesCount: r,
        champIsOpened: u,
        champGames: i,
        toggleChampInSportsMenu: c,
      } = kt(p),
      { champRouteLink: g, toggleChampRoute: S } = lt(p),
      { trackSportSelect: d, trackChampFilterSelect: m } = se(),
      { toggleSportRoute: M, sportSelectedInBetting: h } = Be(t);
    return {
      champSelectedInSportsMenu: n,
      champGamesCount: r,
      sport: t,
      champIsOpened: u,
      champGames: i,
      champRouteLink: g,
      toggleShowGamesOfChamp: () => {
        c();
      },
      toggleChampRouteInSportsMenu: async () => {
        $_$();
        let T, k;
        e(h) || M(),
          ([T, k] = Me(() => S())),
          (T = await T),
          k(),
          T && (d(e(p).sportId, e(o)), m(e(p).id));
      },
    };
  },
  vt = O({
    __name: "SportsMenuAppChampGroup",
    props: {
      champ: { type: Object, required: !0 },
      theme: { type: String, default: void 0 },
      isNested: { type: Boolean, default: !1 },
    },
    setup(p) {
      $_$();
      const o = p,
        { sportsMenuAppConfig: t } = E(),
        n = Y(o, "champ"),
        {
          champGamesCount: r,
          sport: u,
          champGames: i,
          champIsOpened: c,
          champRouteLink: g,
          toggleShowGamesOfChamp: S,
          toggleChampRouteInSportsMenu: d,
        } = Bt(n),
        { champSelectedInBetting: m } = st(n),
        { isLoading: M } = St({ champ: n, isOpen: c }),
        [h, v] = Fe(328, 320),
        { getToggleTitle: b } = ne(),
        T = s(() => {
          var D;
          return (D = o.theme) != null ? D : t.champ;
        }),
        k = s(() => $_$() && t.sportsMenuAppChampGroupHasTag && e(n).isNew),
        I = s(() => $_$() && e(c) && t.isCustom),
        y = s(() => o.isNested && t.isCustom),
        G = s(() =>
          ($_$() && e(y)) || (e(c) && o.isNested && (v || t.isCustom))
            ? t.groupChampCustomTheme
            : e(T)
        ),
        z = s(() =>
          $_$() && e(I) && e(y)
            ? t.sportsMenuAppChampGroupListNestedTheme
            : e(I)
            ? t.sportsMenuAppChampGroupListOpenedTheme
            : t.sportsMenuAppChampGroupListTheme
        ),
        F = s(() => $_$() && b(e(c))),
        x = Te(n);
      return (D, W) => {
        $_$();
        const re = N("UiTag"),
          ue = N("UiNavLinkToggle"),
          K = N("UiNavLink");
        return (
          l(),
          _(
            j,
            {
              class: L([
                {
                  "sports-menu-app-champ-group--is-opened": e(I),
                  "sports-menu-app-champ-group--is-nested": e(y),
                  "sports-menu-app-champ-group--has-border":
                    e(t).sportsMenuAppHasBorderBottom,
                },
                "sports-menu-app-champ-group",
              ]),
              isRounded: e(t).sportsMenuGroupIsRounded,
            },
            {
              default: a(
                () =>
                  $_$() && [
                    C(
                      K,
                      {
                        onClick: w(e(d), ["prevent", "stop"]),
                        to: e(g),
                        isToggled: e(m),
                        theme: e(G),
                        separated: e(t).isSeparated,
                        title: e(n).name,
                        size: e(t).sportsMenuAppNavLinkSize,
                        class: "sports-menu-app-champ-group__link",
                      },
                      me(
                        {
                          ico: a(
                            () =>
                              $_$() && [
                                C(
                                  de,
                                  {
                                    champ: e(n),
                                    isIgnoreLogoType: e(x),
                                    isDefaultIcon: !e(h),
                                  },
                                  null,
                                  8,
                                  ["champ", "isIgnoreLogoType", "isDefaultIcon"]
                                ),
                              ]
                          ),
                          after: a(
                            () =>
                              $_$() && [
                                C(
                                  ue,
                                  {
                                    onClick: w(e(S), ["prevent", "stop"]),
                                    isToggled: e(c),
                                    title: e(F),
                                    class: L([
                                      {
                                        "sports-menu-app-champ-group__toggle--is-decent":
                                          e(t).sportsMenuAppToggleIsDecent,
                                      },
                                      "sports-menu-app-champ-group__toggle",
                                    ]),
                                  },
                                  null,
                                  8,
                                  ["onClick", "isToggled", "title", "class"]
                                ),
                              ]
                          ),
                          default: a(
                            () => $_$() && [B(" " + R(e(n).name) + " ", 1)]
                          ),
                          _: 2,
                        },
                        [
                          e(r)
                            ? {
                                name: "count",
                                fn: a(() => $_$() && [B(R(e(r)), 1)]),
                                key: "0",
                              }
                            : void 0,
                          e(k)
                            ? {
                                name: "tag",
                                fn: a(
                                  () =>
                                    $_$() && [
                                      C(
                                        re,
                                        { size: e(te).s },
                                        {
                                          default: a(
                                            () =>
                                              ($_$() && W[0]) ||
                                              (W[0] = [B(" new ")])
                                          ),
                                          _: 1,
                                        },
                                        8,
                                        ["size"]
                                      ),
                                    ]
                                ),
                                key: "1",
                              }
                            : void 0,
                        ]
                      ),
                      1032,
                      [
                        "onClick",
                        "to",
                        "isToggled",
                        "theme",
                        "separated",
                        "title",
                        "size",
                      ]
                    ),
                    e(c)
                      ? (l(),
                        A(
                          U,
                          { key: 0 },
                          [
                            e(M)
                              ? (l(),
                                _(tt, { key: 0, gameCount: e(r) }, null, 8, [
                                  "gameCount",
                                ]))
                              : (l(),
                                _(
                                  q,
                                  {
                                    key: 1,
                                    theme: e(z),
                                    isSeparated: e(t).isSeparated,
                                    class: "sports-menu-app-champ-group__list",
                                  },
                                  {
                                    default: a(
                                      () =>
                                        $_$() && [
                                          (l(!0),
                                          A(
                                            U,
                                            null,
                                            $(
                                              e(i),
                                              (ee) =>
                                                $_$() &&
                                                (l(),
                                                _(
                                                  yt,
                                                  {
                                                    key: ee.id,
                                                    sport: e(u),
                                                    game: ee,
                                                  },
                                                  null,
                                                  8,
                                                  ["sport", "game"]
                                                ))
                                            ),
                                            128
                                          )),
                                        ]
                                    ),
                                    _: 1,
                                  },
                                  8,
                                  ["theme", "isSeparated"]
                                )),
                          ],
                          64
                        ))
                      : H("", !0),
                  ]
              ),
              _: 1,
            },
            8,
            ["class", "isRounded"]
          )
        );
      };
    },
  }),
  ge = X(vt, [["__scopeId", "data-v-dfc65a15"]]),
  bt = O({
    __name: "SportsMenuAppCountryGroup",
    props: {
      sportId: { type: Number, required: !0 },
      sectionSportId: { type: String, required: !0 },
      country: { type: Object, required: !0 },
      theme: { type: String, default: void 0 },
    },
    setup(p) {
      $_$();
      const o = p,
        { sportsMenuAppConfig: t } = E(),
        { sportsMenuFilteredChampsBySectionSportIdByCountryId: n } = P(),
        [r, u] = ae(),
        { hasSelectedSectionChampId: i } = J(),
        { hasSelectedSectionChampId: c } = oe(),
        g = le(328),
        S = s(() => $_$() && e(n)[o.sectionSportId][o.country.id]),
        d = s(() => $_$() && e(S).map(({ sectionChampId: h }) => h));
      De(() => {
        $_$();
        u.value = e(d).some((h) => c(h) || i(h));
      });
      const m = s(() => {
          var h;
          return (h = o.theme) != null ? h : t.countryGroup;
        }),
        M = s(() => $_$() && e(u) && t.isCustom);
      return (h, v) => {
        $_$();
        const b = N("UiNavLinkToggle"),
          T = N("UiNavLink");
        return (
          l(),
          _(
            j,
            {
              class: L([
                { "sports-menu-app-country-group--is-opened": e(M) },
                "sports-menu-app-country-group",
              ]),
              isRounded: e(t).sportsMenuGroupIsRounded,
            },
            {
              default: a(
                () =>
                  $_$() && [
                    C(
                      T,
                      {
                        onClick: w(e(r), ["prevent", "stop"]),
                        isToggled: e(u),
                        theme: e(m),
                        noWrap: "",
                        size: e(t).sportsMenuAppNavLinkSize,
                        class: "sports-menu-app-country-group__link",
                      },
                      {
                        ico: a(
                          () =>
                            $_$() && [
                              C(
                                de,
                                {
                                  champ: { countryId: o.country.id },
                                  isDefaultIcon: !e(g),
                                },
                                null,
                                8,
                                ["champ", "isDefaultIcon"]
                              ),
                            ]
                        ),
                        count: a(
                          () => $_$() && [B(R(o.country.champsCount), 1)]
                        ),
                        after: a(
                          () =>
                            $_$() && [
                              C(
                                b,
                                {
                                  isToggled: e(u),
                                  class: L([
                                    {
                                      "sports-menu-app-country-group__toggle--is-decent":
                                        e(t).sportsMenuAppToggleIsDecent,
                                    },
                                    "sports-menu-app-country-group__toggle",
                                  ]),
                                },
                                null,
                                8,
                                ["isToggled", "class"]
                              ),
                            ]
                        ),
                        default: a(
                          () => $_$() && [B(" " + R(o.country.name) + " ", 1)]
                        ),
                        _: 1,
                      },
                      8,
                      ["onClick", "isToggled", "theme", "size"]
                    ),
                    e(u)
                      ? (l(),
                        _(
                          q,
                          { key: 0, isSeparated: e(t).isSeparated },
                          {
                            default: a(
                              () =>
                                $_$() && [
                                  (l(!0),
                                  A(
                                    U,
                                    null,
                                    $(
                                      e(S),
                                      (k) =>
                                        $_$() &&
                                        (l(),
                                        _(
                                          ge,
                                          {
                                            key: `champ-${k.key}`,
                                            champ: k,
                                            theme: e(m),
                                          },
                                          null,
                                          8,
                                          ["champ", "theme"]
                                        ))
                                    ),
                                    128
                                  )),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["isSeparated"]
                        ))
                      : H("", !0),
                  ]
              ),
              _: 1,
            },
            8,
            ["class", "isRounded"]
          )
        );
      };
    },
  }),
  Gt = X(bt, [["__scopeId", "data-v-b580c5d7"]]),
  Nt = O({
    __name: "SportsMenuAppChampWithSubChampsGroup",
    props: {
      champ: { type: Object, required: !0 },
      theme: { type: String, default: void 0 },
    },
    setup(p) {
      $_$();
      const o = p,
        { sportsMenuAppConfig: t } = E(),
        n = Y(o, "champ"),
        r = n,
        [u, i] = ae(),
        c = Te(r),
        { count: g } = ht(n),
        S = le(328),
        { getToggleTitle: d } = ne(),
        { hasSelectedSectionChampId: m } = J(),
        { hasSelectedSectionChampId: M } = oe(),
        h = s(() => {
          $_$();
          var I, y;
          return (y =
            (I = e(n).subChamps) == null
              ? void 0
              : I.map(({ sectionChampId: G }) => G)) != null
            ? y
            : [];
        }),
        v = s(() => $_$() && e(h).some((I) => M(I) || m(I)));
      He(
        v,
        () => {
          i.value = !0;
        },
        { immediate: !0 }
      );
      const b = s(() => {
          var I;
          return (I = o.theme) != null ? I : t.champ;
        }),
        T = s(() => $_$() && d(e(i))),
        k = s(() => $_$() && e(i) && t.isCustom);
      return (I, y) => {
        $_$();
        const G = N("UiTag"),
          z = N("UiNavLinkToggle"),
          F = N("UiNavLink");
        return (
          l(),
          _(
            j,
            {
              class: L([
                {
                  "sports-menu-app-champ-with-sub-champs-group--is-opened":
                    e(k),
                  "sports-menu-app-champ-with-sub-champs-group--has-border":
                    e(t).sportsMenuAppHasBorderBottom,
                },
                "sports-menu-app-champ-with-sub-champs-group",
              ]),
              isRounded: e(t).sportsMenuGroupIsRounded,
            },
            {
              default: a(
                () =>
                  $_$() && [
                    C(
                      F,
                      {
                        onClick: w(e(u), ["prevent", "stop"]),
                        isToggled: e(i),
                        theme: e(b),
                        separated: e(t).isSeparated,
                        title: e(n).name,
                        size: e(t).sportsMenuAppNavLinkSize,
                        class: L([
                          {
                            "sports-menu-app-champ-with-sub-champs-group__link--is-opened":
                              e(i),
                          },
                          "sports-menu-app-champ-with-sub-champs-group__link",
                        ]),
                      },
                      me(
                        {
                          ico: a(
                            () =>
                              $_$() && [
                                C(
                                  de,
                                  {
                                    champ: e(r),
                                    isIgnoreLogoType: e(c),
                                    isDefaultIcon: !e(S),
                                  },
                                  null,
                                  8,
                                  ["champ", "isIgnoreLogoType", "isDefaultIcon"]
                                ),
                              ]
                          ),
                          count: a(() => $_$() && [B(R(e(g)), 1)]),
                          after: a(
                            () =>
                              $_$() && [
                                C(
                                  z,
                                  {
                                    isToggled: e(i),
                                    title: e(T),
                                    class: L([
                                      {
                                        "sports-menu-app-champ-with-sub-champs-group__toggle--is-decent":
                                          e(t).sportsMenuAppToggleIsDecent,
                                      },
                                      "sports-menu-app-champ-with-sub-champs-group__toggle",
                                    ]),
                                  },
                                  null,
                                  8,
                                  ["isToggled", "title", "class"]
                                ),
                              ]
                          ),
                          default: a(
                            () => $_$() && [B(" " + R(e(n).name) + " ", 1)]
                          ),
                          _: 2,
                        },
                        [
                          e(n).isNew
                            ? {
                                name: "tag",
                                fn: a(
                                  () =>
                                    $_$() && [
                                      C(
                                        G,
                                        { size: e(te).s },
                                        {
                                          default: a(
                                            () =>
                                              ($_$() && y[0]) ||
                                              (y[0] = [B(" new ")])
                                          ),
                                          _: 1,
                                        },
                                        8,
                                        ["size"]
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
                        "theme",
                        "separated",
                        "title",
                        "size",
                        "class",
                      ]
                    ),
                    e(i)
                      ? (l(),
                        _(
                          q,
                          {
                            key: 0,
                            theme:
                              e(t)
                                .sportsMenuAppChampWithSubChampsGroupOpenedTheme,
                            isSeparated: e(t).isSeparated,
                          },
                          {
                            default: a(
                              () =>
                                $_$() && [
                                  (l(!0),
                                  A(
                                    U,
                                    null,
                                    $(
                                      e(r).subChamps,
                                      (x) =>
                                        $_$() &&
                                        (l(),
                                        _(
                                          ge,
                                          {
                                            key: `champ-${x.key}`,
                                            champ: x,
                                            isNested: "",
                                            class:
                                              "sports-menu-app-champ-with-sub-champs-group__item",
                                          },
                                          null,
                                          8,
                                          ["champ"]
                                        ))
                                    ),
                                    128
                                  )),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["theme", "isSeparated"]
                        ))
                      : H("", !0),
                  ]
              ),
              _: 1,
            },
            8,
            ["class", "isRounded"]
          )
        );
      };
    },
  }),
  Lt = X(Nt, [["__scopeId", "data-v-4b15c472"]]),
  At = O({
    __name: "SportsMenuGroupByChamp",
    props: { champ: {}, theme: {}, isNested: { type: Boolean } },
    setup(p) {
      $_$();
      const o = p,
        t = s(() => _t(o.champ)),
        { sportsMenuAppConfig: n } = E(),
        r = s(() => {
          var u;
          return (u = o.theme) != null ? u : n.groupChamp;
        });
      return (u, i) =>
        $_$() && e(t)
          ? (l(),
            _(
              Lt,
              {
                key: 0,
                champ: u.champ,
                theme: e(r),
                isNested: u.isNested,
                class: "sports-menu-group-by-champ",
              },
              null,
              8,
              ["champ", "theme", "isNested"]
            ))
          : (l(),
            _(
              ge,
              {
                key: 1,
                champ: u.champ,
                theme: e(r),
                isNested: u.isNested,
                class: "sports-menu-group-by-champ",
              },
              null,
              8,
              ["champ", "theme", "isNested"]
            ));
    },
  }),
  Rt = O({
    __name: "SportsMenuGroupByCountry",
    props: { sportId: {}, sectionSportId: {}, isNested: { type: Boolean } },
    setup(p) {
      $_$();
      const o = p,
        { componentsThemes: t } = Z(),
        {
          sportsMenuAppConfig: { sportsMenuGroupByCountryIsSeparated: n },
        } = E(),
        {
          isGroupByCountry: r,
          sportsMenuFilteredCountriesBySectionSportId: u,
          sportsMenuFilteredChampsBySectionSportId: i,
        } = P(),
        c = s(() => {
          $_$();
          var m;
          return (m = e(i)[o.sectionSportId]) != null ? m : [];
        }),
        g = s(() => {
          $_$();
          var m;
          return (m = e(u)[o.sectionSportId]) != null ? m : [];
        }),
        S = s(() => $_$() && e(t).Champ),
        { mixedChampsAndChampGroupsWithSubGames: d } = dt(c);
      return (m, M) =>
        $_$() &&
        (l(),
        _(
          q,
          { isSeparated: e(n), class: "sports-menu-group-by-country" },
          {
            default: a(
              () =>
                $_$() && [
                  e(r)
                    ? (l(!0),
                      A(
                        U,
                        { key: 0 },
                        $(
                          e(g),
                          (h) =>
                            $_$() &&
                            (l(),
                            _(
                              Gt,
                              {
                                key: `country-${h.id}`,
                                sportId: m.sportId,
                                sectionSportId: m.sectionSportId,
                                country: h,
                                theme: e(S),
                              },
                              null,
                              8,
                              ["sportId", "sectionSportId", "country", "theme"]
                            ))
                        ),
                        128
                      ))
                    : (l(!0),
                      A(
                        U,
                        { key: 1 },
                        $(
                          e(d),
                          (h) =>
                            $_$() &&
                            (l(),
                            _(
                              At,
                              {
                                key: `champ-${h.key}`,
                                champ: h,
                                theme: e(S),
                                isNested: m.isNested,
                              },
                              null,
                              8,
                              ["champ", "theme", "isNested"]
                            ))
                        ),
                        128
                      )),
                ]
            ),
            _: 1,
          },
          8,
          ["isSeparated"]
        ));
    },
  }),
  Ot = (p) => {
    const { trackSportSelect: o } = se(),
      { bettingType: t } = pe(),
      {
        sportGamesCount: n,
        sportExpandedInSportsMenu: r,
        expandSportInSportsMenu: u,
      } = gt(p),
      { sportRouteLink: i, toggleSportRoute: c } = Be(p);
    return {
      sportRouteLink: i,
      sportGamesCount: n,
      sportExpandedInSportsMenu: r,
      toggleShowChampsOfSport: () => {
        u();
      },
      toggleSportRouteInSportsMenu: () => {
        $_$();
        c() && o(e(p).id, e(t));
      },
    };
  },
  Ut = O({
    __name: "SportsMenuAppSport",
    props: {
      sport: { type: Object, required: !0 },
      theme: { type: String, default: void 0 },
      isNested: { type: Boolean, default: !1 },
      isRounded: { type: Boolean, default: !1 },
    },
    setup(p) {
      $_$();
      const o = p,
        { sportsMenuAppConfig: t } = E(),
        n = Y(o, "sport"),
        {
          sportRouteLink: r,
          sportGamesCount: u,
          sportExpandedInSportsMenu: i,
          toggleShowChampsOfSport: c,
          toggleSportRouteInSportsMenu: g,
        } = Ot(n),
        { sportSelectedInBetting: S } = Ct(n),
        { isLoading: d } = ft({ sport: n, isOpen: i }),
        { getToggleTitle: m } = ne(),
        M = s(() => {
          var y;
          return (y = o.theme) != null ? y : t.sport;
        }),
        h = s(() => ($_$() && o.isNested ? t.sportNestedTheme : e(M))),
        v = s(() => o.isNested && t.sportsMenuAppSportGroupByCountryIsNested),
        b = s(() => $_$() && e(i) && t.isCustom),
        T = s(() => o.isNested && t.isCustom),
        k = s(() => $_$() && m(e(i))),
        I = s(
          () =>
            ($_$() && e(S)) || (t.isSportsMenuAppNavLinkCustomToggle && e(i))
        );
      return (y, G) => {
        $_$();
        const z = N("UiIcoSport"),
          F = N("UiTag"),
          x = N("UiNavLinkToggle"),
          D = N("UiNavLink");
        return (
          l(),
          _(
            j,
            {
              isRounded: e(t).sportsMenuAppSportIsRounded,
              class: L([
                {
                  "sports-menu-app-sport--is-opened": e(b),
                  "sports-menu-app-sport--is-nested": e(T),
                  "sports-menu-app-sport--has-border":
                    e(t).sportsMenuAppHasBorderBottom,
                },
                "sports-menu-app-sport",
              ]),
            },
            {
              default: a(
                () =>
                  $_$() && [
                    $e(
                      "div",
                      {
                        class: L([
                          "sports-menu-app-sport__content",
                          {
                            [`sports-menu-app-sport__content--theme-${
                              e(t).sportsMenuAppContentTheme
                            }`]: e(t).sportsMenuAppContentTheme,
                          },
                        ]),
                      },
                      [
                        C(
                          D,
                          {
                            onClick: w(e(g), ["prevent", "stop"]),
                            to: e(r),
                            isToggled: e(I),
                            theme: e(h),
                            size: e(t).sportsMenuAppNavLinkSize,
                            separated: e(t).isSeparated,
                            noWrap: e(t).sportsMenuAppSportInOneLine,
                            class: "sports-menu-app-sport__link",
                          },
                          me(
                            {
                              ico: a(
                                () =>
                                  $_$() && [
                                    C(
                                      z,
                                      {
                                        ico: e(n).ico,
                                        class: L([
                                          {
                                            "sports-menu-app-sport__ico--is-decent":
                                              e(t).sportsMenuAppToggleIsDecent,
                                          },
                                          "sports-menu-app-sport__ico",
                                        ]),
                                      },
                                      null,
                                      8,
                                      ["ico", "class"]
                                    ),
                                  ]
                              ),
                              after: a(
                                () =>
                                  $_$() && [
                                    C(
                                      x,
                                      {
                                        onClick: w(e(c), ["prevent", "stop"]),
                                        isToggled: e(i),
                                        title: e(k),
                                        class: L([
                                          {
                                            "sports-menu-app-sport__toggle--is-decent":
                                              e(t).sportsMenuAppToggleIsDecent,
                                          },
                                          "sports-menu-app-sport__toggle",
                                        ]),
                                      },
                                      null,
                                      8,
                                      ["onClick", "isToggled", "title", "class"]
                                    ),
                                  ]
                              ),
                              default: a(
                                () => $_$() && [B(" " + R(e(n).name) + " ", 1)]
                              ),
                              _: 2,
                            },
                            [
                              e(u)
                                ? {
                                    name: "count",
                                    fn: a(() => $_$() && [B(R(e(u)), 1)]),
                                    key: "0",
                                  }
                                : void 0,
                              e(n).isNew
                                ? {
                                    name: "tag",
                                    fn: a(
                                      () =>
                                        $_$() && [
                                          C(
                                            F,
                                            { size: e(te).s },
                                            {
                                              default: a(
                                                () =>
                                                  ($_$() && G[0]) ||
                                                  (G[0] = [B(" new ")])
                                              ),
                                              _: 1,
                                            },
                                            8,
                                            ["size"]
                                          ),
                                        ]
                                    ),
                                    key: "1",
                                  }
                                : void 0,
                            ]
                          ),
                          1032,
                          [
                            "onClick",
                            "to",
                            "isToggled",
                            "theme",
                            "size",
                            "separated",
                            "noWrap",
                          ]
                        ),
                        e(i)
                          ? (l(),
                            A(
                              U,
                              { key: 0 },
                              [
                                e(d)
                                  ? (l(),
                                    _(
                                      Mt,
                                      { key: 0, champsCount: e(n).champsCount },
                                      null,
                                      8,
                                      ["champsCount"]
                                    ))
                                  : (l(),
                                    _(
                                      Rt,
                                      {
                                        key: 1,
                                        sportId: e(n).id,
                                        sectionSportId: e(n).sectionSportId,
                                        isNested: e(v),
                                      },
                                      null,
                                      8,
                                      ["sportId", "sectionSportId", "isNested"]
                                    )),
                              ],
                              64
                            ))
                          : H("", !0),
                      ],
                      2
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            ["isRounded", "class"]
          )
        );
      };
    },
  }),
  wt = X(Ut, [["__scopeId", "data-v-ffebe07b"]]),
  Et = (p, o = !0) => {
    $_$();
    const { toggleSelectedMenuSectionId: t, hasSelectedMenuSectionId: n } =
        oe(),
      r = s(() => $_$() && n(e(p)));
    return {
      menuSectionSelectedInSportMenu: r,
      toggleMenuSectionInSportMenu: (i = !e(r)) => {
        $_$();
        const c = e(p);
        Ie(c) && t({ item: c, isClear: !e(o), value: i });
      },
    };
  },
  ve = (p) => {
    $_$();
    const o = ce(),
      t = ye(),
      { sportsMenuFilteredSportsByMenuSection: n } = P(),
      { menuSectionSelectedInSportMenu: r, toggleMenuSectionInSportMenu: u } =
        Et(p),
      i = s(() => $_$() && o(ie[e(p)])),
      c = s(() => $_$() && e(r)),
      g = s(() => {
        $_$();
        var d;
        return (d = e(n)[e(p)]) != null ? d : [];
      }),
      S = s(
        () =>
          $_$() &&
          e(g).reduce((d, m) => {
            $_$();
            const M = t.bettingIsOnlyWithVideos
              ? e(m).gamesCountWithVideo
              : e(m).gamesCount;
            return d + M;
          }, 0)
      );
    return {
      menuSectionTitle: i,
      menuSectionSelectedInSportMenu: r,
      menuSectionGamesCount: S,
      menuSectionSports: g,
      menuSectionIsOpened: c,
      toggleMenuSectionInSportMenu: u,
    };
  },
  xt = (p, o = !0) => {
    $_$();
    const { toggleSelectedMenuSectionId: t, hasSelectedMenuSectionId: n } = J(),
      r = s(() => $_$() && n(e(p)));
    return {
      menuSectionSelectedInBetting: r,
      toggleMenuSectionInBetting: (i = !e(r)) => {
        $_$();
        const c = e(p);
        Ie(c) && t({ item: c, isClear: !e(o), value: i });
      },
    };
  },
  zt = (p) => {
    $_$();
    const { bettingType: o } = Je(),
      { menuSectionSelectedInBetting: t, toggleMenuSectionInBetting: n } =
        xt(p),
      { getBettingRouteUrl: r, changeBettingRoute: u } = We(),
      i = fe(),
      c = (d) => {
        $_$();
        const m = e(p),
          M = m ? Ve[m] : void 0;
        return je({
          lng: i.getLanguage,
          section: e(o),
          menuSection: d ? M : void 0,
        });
      },
      g = s(() => r(c(!0)));
    return {
      menuSectionSelectedInBetting: t,
      menuSectionRouteLink: g,
      getMenuSectionRoute: c,
      toggleMenuSectionRoute: (d = !e(t)) => $_$() && (u(c(d)), n(d), d),
      toggleMenuSectionInBetting: n,
    };
  },
  Ft = (p) => {
    const {
        menuSectionTitle: o,
        menuSectionGamesCount: t,
        menuSectionIsOpened: n,
        toggleMenuSectionInSportMenu: r,
      } = ve(p),
      {
        menuSectionSelectedInBetting: u,
        menuSectionRouteLink: i,
        toggleMenuSectionRoute: c,
      } = zt(p);
    return {
      menuSectionTitle: o,
      menuSectionRouteLink: i,
      menuSectionGamesCount: t,
      menuSectionIsOpened: n,
      menuSectionSelectedInBetting: u,
      toggleShowSportsOfMenuSection: () => {
        r();
      },
      toggleMenuSectionRouteInSportsMenu: () => {
        c();
      },
    };
  },
  Dt = O({
    __name: "SportsMenuCategory",
    props: { menuSection: {} },
    setup(p) {
      $_$();
      const o = p,
        t = Y(() => o.menuSection),
        {
          menuSectionTitle: n,
          menuSectionRouteLink: r,
          menuSectionGamesCount: u,
          menuSectionIsOpened: i,
          menuSectionSelectedInBetting: c,
          toggleShowSportsOfMenuSection: g,
          toggleMenuSectionRouteInSportsMenu: S,
        } = Ft(t),
        { getToggleTitle: d } = ne(),
        m = s(() => $_$() && d(e(i)));
      return (M, h) => {
        $_$();
        const v = N("UiNavLinkToggle"),
          b = N("UiNavLink");
        return (
          l(),
          _(
            b,
            {
              onClick: w(e(S), ["prevent", "stop"]),
              to: e(r),
              isToggled: e(c),
              theme: e(Pe).gray100,
              noWrap: "",
              class: "sports-menu-category",
            },
            {
              count: a(() => $_$() && [B(R(e(u)), 1)]),
              after: a(
                () =>
                  $_$() && [
                    C(
                      v,
                      {
                        onClick: w(e(g), ["prevent", "stop"]),
                        isToggled: e(i),
                        title: e(m),
                      },
                      null,
                      8,
                      ["onClick", "isToggled", "title"]
                    ),
                  ]
              ),
              default: a(() => $_$() && [B(R(e(n)) + " ", 1)]),
              _: 1,
            },
            8,
            ["onClick", "to", "isToggled", "theme"]
          )
        );
      };
    },
  }),
  Ht = O({
    __name: "SportsMenuSectionName",
    props: { menuSection: {} },
    setup(p) {
      $_$();
      const o = p,
        t = ce(),
        n = le(828),
        r = s(() =>
          $_$() && o.menuSection === 1e4 ? t(n) : t(ie[o.menuSection])
        ),
        u = s(() => ($_$() && qe(ie, o.menuSection) ? e(r) : "")),
        { sportsMenuAppConfig: i } = E();
      return (c, g) =>
        $_$() &&
        (l(),
        _(
          Ze,
          { theme: e(i).sportsMenuHead, class: "sports-menu-section-name" },
          {
            default: a(
              () =>
                $_$() && [
                  C(et, null, {
                    default: a(() => $_$() && [B(R(e(u)), 1)]),
                    _: 1,
                  }),
                ]
            ),
            _: 1,
          },
          8,
          ["theme"]
        ));
    },
  }),
  _e = O({
    __name: "SportsMenuSports",
    props: { menuSection: {}, sort: { type: Boolean } },
    setup(p) {
      $_$();
      const o = p,
        { sportsMenuFilteredSportsByMenuSection: t } = P(),
        { componentsThemes: n } = Z(),
        r = s(() => {
          $_$();
          var c;
          return (c = e(t)[o.menuSection]) != null ? c : [];
        }),
        u = s(
          () =>
            $_$() &&
            e(r)
              .slice()
              .sort((c, g) => c.name.localeCompare(g.name, "en"))
        ),
        i = s(() => ($_$() && o.sort ? e(u) : e(r)));
      return (c, g) =>
        $_$() &&
        (l(),
        _(
          at,
          { class: "sports-menu-sports" },
          {
            default: a(
              () =>
                $_$() && [
                  C(
                    q,
                    { theme: e(n).Sports },
                    {
                      default: a(
                        () =>
                          $_$() && [
                            (l(!0),
                            A(
                              U,
                              null,
                              $(
                                e(i),
                                (S, d) =>
                                  $_$() &&
                                  (l(),
                                  _(
                                    wt,
                                    {
                                      key: d,
                                      sport: S,
                                      theme: e(n).Sport,
                                      isNested: "",
                                    },
                                    null,
                                    8,
                                    ["sport", "theme"]
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
                  ),
                ]
            ),
            _: 1,
          }
        ));
    },
  }),
  $t = { key: 0, class: "sports-menu-group" },
  Wt = O({
    __name: "SportsMenuGroup",
    props: { menuSection: {} },
    setup(p) {
      $_$();
      const o = p,
        t = Y(o, "menuSection"),
        { sportsMenuFilteredSportsByMenuSection: n } = P(),
        { menuSectionIsOpened: r } = ve(t),
        { groupByCategories: u, pageType: i } = Z(),
        c = s(() => $_$() && e(i) !== Ke.MARBLE),
        g = s(() => o.menuSection === 1e4),
        S = s(() => {
          $_$();
          var m;
          return (m = e(n)[o.menuSection]) != null ? m : [];
        }),
        d = s(() => $_$() && e(S).length > 0);
      return (m, M) =>
        $_$() && e(d)
          ? (l(),
            A("div", $t, [
              e(u)
                ? (l(),
                  A(
                    U,
                    { key: 0 },
                    [
                      C(
                        Dt,
                        {
                          key: "category",
                          menuSection: e(t),
                          class: L([
                            { "sports-menu-group__category--is-opened": e(r) },
                            "sports-menu-group__category",
                          ]),
                        },
                        null,
                        8,
                        ["menuSection", "class"]
                      ),
                      Qe(
                        C(
                          _e,
                          { key: "category-sports", menuSection: e(t) },
                          null,
                          8,
                          ["menuSection"]
                        ),
                        [[Ye, e(r)]]
                      ),
                    ],
                    64
                  ))
                : (l(),
                  A(
                    U,
                    { key: 1 },
                    [
                      e(c)
                        ? (l(),
                          _(
                            Ht,
                            { key: "sectionName", menuSection: e(t) },
                            null,
                            8,
                            ["menuSection"]
                          ))
                        : H("", !0),
                      C(
                        _e,
                        { key: "sports", menuSection: e(t), sort: e(g) },
                        null,
                        8,
                        ["menuSection", "sort"]
                      ),
                    ],
                    64
                  )),
            ]))
          : H("", !0);
    },
  }),
  fo = X(Wt, [["__scopeId", "data-v-430ada96"]]);
export { wt as SportsMenuAppSport, fo as SportsMenuGroup };
