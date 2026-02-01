import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as L,
  reactivity_esmBundler_toRefs as z,
  reactivity_esmBundler_toRef as U,
  reactivity_esmBundler_unref as o,
  runtimeCore_esmBundler_computed as m,
  bettingType_BettingType as I,
  theme_constants_themeType as O,
  ColorType as N,
  size_constants_sizeType as G,
  runtimeCore_esmBundler_resolveComponent as d,
  runtimeCore_esmBundler_createElementBlock as k,
  runtimeCore_esmBundler_openBlock as _,
  runtimeCore_esmBundler_createVNode as a,
  nuxtLink_default as R,
  runtimeDom_esmBundler_withModifiers as M,
  runtimeCore_esmBundler_withCtx as y,
  runtimeCore_esmBundler_createBlock as v,
  runtimeCore_esmBundler_createCommentVNode as F,
  runtimeCore_esmBundler_createTextVNode as B,
  shared_esmBundler_toDisplayString as S,
  shared_esmBundler_normalizeClass as V,
  ImagesSizeType as E,
  ResizedImagesTeamLogoSizeType as W,
  WeightType as j,
  iconName as q,
  runtimeCore_esmBundler_createElementVNode as g,
  reactivity_esmBundler_ref as K,
  runtimeCore_esmBundler_Fragment as J,
  runtimeCore_esmBundler_renderList as Q,
  useGlobalStore as X,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as Y,
  router_useRoute as D,
  BettingPageType as w,
  runtimeCore_esmBundler_defineAsyncComponent as Z,
  index_getConfigs as x,
  execAsync as ee,
  bettingRouteName_BettingRouteName as oe,
  runtimeCore_esmBundler_onBeforeUnmount as te,
  shared_esmBundler_normalizeStyle as se,
  page_default as ae,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { withAsyncContext as re } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import { useBettingClearSelectedData as H } from "./9de70556bb.js";
import {
  _export_sfc as b,
  groupBy as ne,
  useCouponStore as ie,
  loadBettingMain as pe,
  loadBettingContentConfigDesktop as le,
  useSyncBetsWithStorage as me,
  _sfc_main$1 as de,
} from "./entry-50afb6f36c.js";
import { UiSwipeSlider as ce } from "./70ca59e60b.js";
import { useBettingPageData as ue } from "./4a993370c6.js";
import { UiToggleFavoriteButton as _e } from "./e37cc43aaf.js";
import { useToggleFavoriteGame as ge } from "./6e5c097416.js";
import { UiBettingStepper as ye } from "./626f06f14d.js";
import { useGameCardMarkets as he } from "./37e7e2d438.js";
import { useMarketsData as fe } from "./7fd3152d11.js";
import { useTopGamesApp as A } from "./f3262a3d13.js";
import { _sfc_main as Ce } from "./cdd6bf1c6a.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "./1af6a171a2.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "./8fb686e8dc.js";
import "./edc84b4da7.js";
import "./a0e9c441b8.js";
import "./bb0d3b59f5.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
import "./914ab66f1a.js";
import "./c7ea6bc74a.js";
import "./58a21526ee.js";
import "./30806a74d6.js";
const Te = L({
    name: "PopularGamesSliderCardHeader",
    components: { UiToggleFavoriteButton: _e },
    props: {
      game: { type: Object, required: !0 },
      champLink: { type: String, default: "" },
    },
    emits: ["open-champ"],
    setup(e) {
      $_$();
      const { game: t } = z(e),
        i = U(() => $_$() && o(t).bettingType),
        s = U(() => $_$() && o(t).id),
        { isFavorite: c, toggleFavorite: p } = ge({
          bettingType: i,
          gameId: s,
        });
      return {
        isLive: m(() => $_$() && o(t).bettingType === I.LIVE),
        sizeType: G,
        ColorType: N,
        themeType: O,
        isFavorite: c,
        toggleFavorite: p,
      };
    },
  }),
  Se = { class: "popular-games-slider-card-header" };
function Be(e, t, i, s, c, p) {
  $_$();
  const r = d("UiIcoSport"),
    n = d("UiCaption"),
    u = d("UiTag"),
    l = R,
    C = d("UiToggleFavoriteButton");
  return (
    _(),
    k("div", Se, [
      a(
        l,
        {
          onClick: t[0] || (t[0] = M((h) => e.$emit("open-champ"), ["stop"])),
          to: e.champLink,
          class: "popular-games-slider-card-header__link",
        },
        {
          default: y(
            () =>
              $_$() && [
                a(
                  r,
                  {
                    ico: e.game.sportId,
                    class: "popular-games-slider-card-header__ico",
                  },
                  null,
                  8,
                  ["ico"]
                ),
                a(
                  n,
                  {
                    size: e.sizeType.xxs,
                    color: e.ColorType.clrStrong,
                    class: "popular-games-slider-card-header__title",
                  },
                  {
                    default: y(() => $_$() && [B(S(e.game.champName), 1)]),
                    _: 1,
                  },
                  8,
                  ["size", "color"]
                ),
                e.isLive
                  ? (_(),
                    v(
                      u,
                      { key: 0, theme: e.themeType.bad, size: e.sizeType.s },
                      {
                        default: y(
                          () => $_$() && [B(S(e.$T("betting_live")), 1)]
                        ),
                        _: 1,
                      },
                      8,
                      ["theme", "size"]
                    ))
                  : F("", !0),
              ]
          ),
          _: 1,
        },
        8,
        ["to"]
      ),
      a(
        C,
        {
          onClick: M(e.toggleFavorite, ["stop"]),
          isActive: e.isFavorite,
          size: e.sizeType.m,
          class: V([
            {
              "popular-games-slider-card-header__favorite--is-active":
                e.isFavorite,
            },
            "popular-games-slider-card-header__favorite",
          ]),
        },
        null,
        8,
        ["onClick", "isActive", "size", "class"]
      ),
    ])
  );
}
const ve = b(Te, [
    ["render", Be],
    ["__scopeId", "data-v-3c808a7e"],
  ]),
  ke = { class: "popular-games-slider-card-body-team" },
  Le = L({
    __name: "PopularGamesSliderCardBodyTeam",
    props: { team: {} },
    setup(e) {
      return (t, i) => {
        $_$();
        const s = d("UiIcoTeam"),
          c = d("UiCaption");
        return (
          _(),
          k("div", ke, [
            a(
              s,
              {
                image: t.team.logo,
                presetSize: o(W).S50,
                boxSize: o(E).S50,
                class: "popular-games-slider-card-body-team__ico",
              },
              null,
              8,
              ["image", "presetSize", "boxSize"]
            ),
            a(
              c,
              { size: o(G).xxs },
              { default: y(() => $_$() && [B(S(t.team.name), 1)]), _: 1 },
              8,
              ["size"]
            ),
          ])
        );
      };
    },
  }),
  be = b(Le, [["__scopeId", "data-v-d46d73e3"]]),
  $e = L({
    name: "PopularGamesSliderCardBody",
    components: { PopularGamesSliderCardBodyTeam: be },
    props: {
      game: { type: Object, required: !0 },
      gameLink: { type: String, default: "" },
    },
    setup(e) {
      $_$();
      const { game: t } = z(e),
        i = m(
          () =>
            $_$() && {
              name: o(t).firstOpponentName,
              logo: o(t).firstOpponentLogo,
              score: o(t).firstOpponentFullScore,
            }
        ),
        s = m(
          () =>
            $_$() && {
              name: o(t).secondOpponentName,
              logo: o(t).secondOpponentLogo,
              score: o(t).secondOpponentFullScore,
            }
        );
      return {
        iconName: q,
        firstOpponent: i,
        secondOpponent: s,
        ColorType: N,
        WeightType: j,
        sizeType: G,
      };
    },
  }),
  ze = { key: 0, class: "popular-games-slider-card-body__info" },
  Ge = { class: "popular-games-slider-card-body__timer" },
  Pe = { key: 1, class: "popular-games-slider-card-body__info" },
  Ue = { class: "popular-games-slider-card-body__timer" };
function Ie(e, t, i, s, c, p) {
  $_$();
  const r = d("PopularGamesSliderCardBodyTeam"),
    n = d("UiCaption"),
    u = d("UiIco"),
    l = R;
  return (
    _(),
    v(
      l,
      { class: "popular-games-slider-card-body", to: e.gameLink },
      {
        default: y(
          () =>
            $_$() && [
              a(r, { team: e.firstOpponent }, null, 8, ["team"]),
              e.game.hasScores
                ? (_(),
                  k("div", ze, [
                    g("div", Ge, [
                      a(
                        n,
                        { size: e.sizeType.xxs, color: e.ColorType.clrDecent },
                        {
                          default: y(
                            () => $_$() && [B(S(e.game.currentPeriodLabel), 1)]
                          ),
                          _: 1,
                        },
                        8,
                        ["size", "color"]
                      ),
                      a(
                        u,
                        {
                          ico: e.iconName.CLOCK,
                          size: e.sizeType.xs,
                          class: "popular-games-slider-card-body__ico",
                        },
                        null,
                        8,
                        ["ico", "size"]
                      ),
                      a(
                        n,
                        { size: e.sizeType.xxs, color: e.ColorType.clrDecent },
                        {
                          default: y(
                            () => $_$() && [B(S(e.game.timeFormatted), 1)]
                          ),
                          _: 1,
                        },
                        8,
                        ["size", "color"]
                      ),
                    ]),
                    a(
                      n,
                      { weight: e.WeightType.BOLD },
                      {
                        default: y(
                          () =>
                            $_$() && [
                              B(
                                S(e.firstOpponent.score) +
                                  " : " +
                                  S(e.secondOpponent.score),
                                1
                              ),
                            ]
                        ),
                        _: 1,
                      },
                      8,
                      ["weight"]
                    ),
                  ]))
                : (_(),
                  k("div", Pe, [
                    g("div", Ue, [
                      a(
                        u,
                        {
                          ico: e.iconName.CLOCK,
                          size: e.sizeType.xs,
                          class: "popular-games-slider-card-body__ico",
                        },
                        null,
                        8,
                        ["ico", "size"]
                      ),
                      a(
                        n,
                        { size: e.sizeType.xxs, color: e.ColorType.clrDecent },
                        {
                          default: y(
                            () => $_$() && [B(S(e.game.startTimeFormatted), 1)]
                          ),
                          _: 1,
                        },
                        8,
                        ["size", "color"]
                      ),
                    ]),
                    a(
                      n,
                      { weight: e.WeightType.BOLD },
                      {
                        default: y(
                          () =>
                            $_$() && [B(S(e.game.startShortDateFormatted), 1)]
                        ),
                        _: 1,
                      },
                      8,
                      ["weight"]
                    ),
                  ])),
              a(r, { team: e.secondOpponent }, null, 8, ["team"]),
            ]
        ),
        _: 1,
      },
      8,
      ["to"]
    )
  );
}
const Fe = b($e, [
    ["render", Ie],
    ["__scopeId", "data-v-4048c791"],
  ]),
  Oe = L({
    name: "PopularGamesSliderCardBets",
    components: { UiBettingStepper: ye },
    props: { game: { type: Object, required: !0 } },
    setup(e) {
      $_$();
      const { game: t } = z(e),
        { drawingMarketsExcludeEmpty: i } = fe(t),
        s = K(1),
        c = m(
          () =>
            $_$() &&
            ne(o(i), ({ market: f }) => {
              var T;
              return (T = f == null ? void 0 : f.groupName) != null ? T : "";
            })
        ),
        p = m(() => $_$() && Object.entries(o(c))),
        r = m(() => $_$() && o(p).length),
        n = m(() => {
          $_$();
          var f;
          return (f = o(p)[o(s) - 1]) != null ? f : [];
        }),
        u = m(() => $_$() && o(n)[0]),
        l = ie(),
        C = m(() => {
          $_$();
          const f = o(n)[1];
          return f
            ? f.map((T) => {
                const P = l.couponBetIds.includes(T.market.id);
                return { ...T, isActive: P };
              })
            : [];
        }),
        { addMarketToCoupon: h } = he({ game: t, marketsForRender: i });
      return {
        slideIndex: s,
        slidesLength: r,
        slideTitle: u,
        slideMarkets: C,
        addMarketToCoupon: h,
        sizeType: G,
        indicationType: 2,
        ColorType: N,
        themeType: O,
      };
    },
  }),
  Ne = { class: "popular-games-slider-card-bets" },
  Me = { class: "popular-games-slider-card-bets__type" },
  we = { class: "popular-games-slider-card-bets__list" };
function Ae(e, t, i, s, c, p) {
  $_$();
  const r = d("UiCaption"),
    n = d("UiBettingStepper"),
    u = d("UiMarket");
  return (
    _(),
    k("div", Ne, [
      g("div", Me, [
        a(
          r,
          { size: e.sizeType.xs, color: e.ColorType.clrStrong },
          { default: y(() => $_$() && [B(S(e.slideTitle), 1)]), _: 1 },
          8,
          ["size", "color"]
        ),
        a(
          n,
          {
            modelValue: e.slideIndex,
            "onUpdate:modelValue": t[0] || (t[0] = (l) => (e.slideIndex = l)),
            total: e.slidesLength,
          },
          null,
          8,
          ["modelValue", "total"]
        ),
      ]),
      g("ul", we, [
        (_(!0),
        k(
          J,
          null,
          Q(
            e.slideMarkets,
            ({ market: l, key: C, title: h, isActive: f }) =>
              $_$() &&
              (_(),
              k(
                "li",
                { key: C, class: "popular-games-slider-card-bets__item" },
                [
                  a(
                    u,
                    {
                      onClick: (T) => e.addMarketToCoupon(l),
                      text: h,
                      coef: l.coef,
                      coefByView: l.coefByView,
                      locked: l.isLocked,
                      size: e.sizeType.s,
                      isActive: f,
                      indicationType: e.indicationType,
                      theme: e.themeType.gray30,
                      class: "popular-games-slider-card-bets__market",
                    },
                    null,
                    8,
                    [
                      "onClick",
                      "text",
                      "coef",
                      "coefByView",
                      "locked",
                      "size",
                      "isActive",
                      "indicationType",
                      "theme",
                    ]
                  ),
                ]
              ))
          ),
          128
        )),
      ]),
    ])
  );
}
const Re = b(Oe, [
    ["render", Ae],
    ["__scopeId", "data-v-87d492ca"],
  ]),
  De = L({
    name: "PopularGamesSliderCard",
    components: {
      PopularGamesSliderCardBody: Fe,
      PopularGamesSliderCardBets: Re,
      PopularGamesSliderCardHeader: ve,
    },
    props: { game: { type: Object, required: !0 } },
    setup(e) {
      $_$();
      const { game: t } = z(e),
        i = X(),
        s = m(
          () =>
            $_$() && {
              lng: i.getLanguage,
              section: o(t).bettingType,
              menuSection: o(t).menuSectionNameForUrl,
              sport: o(t).sportNameForUrl,
              champ: o(t).champNameForUrl,
            }
        ),
        { changeBettingRoute: c, getBettingRouteUrl: p } = Y(),
        r = m(() => $_$() && p(o(s))),
        n = D(),
        u = U(() => $_$() && o(t).bettingType),
        { bettingClearAllFilters: l } = H({ bettingType: u }),
        C = m(() => $_$() && { ...o(s), game: o(t).gameNameForUrl });
      return {
        gameLink: m(() => $_$() && p(o(C))),
        champLink: r,
        openChamp: () => {
          $_$();
          l();
          const T =
            o(n).path !== o(r)
              ? o(s)
              : { lng: i.getLanguage, section: o(t).bettingType };
          c(T);
        },
      };
    },
  }),
  He = { class: "popular-games-slider-card" };
function Ve(e, t, i, s, c, p) {
  $_$();
  const r = d("PopularGamesSliderCardHeader"),
    n = d("PopularGamesSliderCardBody"),
    u = d("PopularGamesSliderCardBets");
  return (
    _(),
    k("article", He, [
      a(
        r,
        {
          onOpenChamp: e.openChamp,
          champLink: e.champLink,
          game: e.game,
          class: "popular-games-slider-card__header",
        },
        null,
        8,
        ["onOpenChamp", "champLink", "game"]
      ),
      a(
        n,
        {
          game: e.game,
          gameLink: e.gameLink,
          class: "popular-games-slider-card__body",
        },
        null,
        8,
        ["game", "gameLink"]
      ),
      a(u, { game: e.game }, null, 8, ["game"]),
    ])
  );
}
const Ee = b(De, [
    ["render", Ve],
    ["__scopeId", "data-v-3b88a875"],
  ]),
  We = L({
    name: "PopularGamesSliderLoader",
    setup() {
      $_$();
      return { themeType: O };
    },
  });
function je(e, t, i, s, c, p) {
  $_$();
  const r = d("UiSkeleton");
  return (
    _(),
    v(
      r,
      {
        repeat: 4,
        theme: e.themeType.primary_20,
        class: "popular-games-slider-loader",
      },
      {
        default: y(
          () =>
            ($_$() && t[0]) ||
            (t[0] = [
              g(
                "div",
                { class: "popular-games-slider-loader__item" },
                [
                  g("div", { class: "popular-games-slider-loader__head" }, [
                    g("div", { class: "popular-games-slider-loader__ico" }),
                    g("div", { class: "popular-games-slider-loader__name" }),
                  ]),
                  g("div", { class: "popular-games-slider-loader__body" }, [
                    g("div", { class: "popular-games-slider-loader__team" }),
                    g("div", { class: "popular-games-slider-loader__info" }),
                    g("div", { class: "popular-games-slider-loader__team" }),
                  ]),
                  g("div", { class: "popular-games-slider-loader__bottom" }, [
                    g("div", { class: "popular-games-slider-loader__type" }),
                    g("div", { class: "popular-games-slider-loader__bets" }),
                  ]),
                ],
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
const qe = b(We, [
    ["render", je],
    ["__scopeId", "data-v-ddb744ed"],
  ]),
  Ke = L({
    name: "PopularGamesSlider",
    components: {
      PopularGamesSliderCard: Ee,
      PopularGamesSliderLoader: qe,
      UiSwipeSlider: ce,
    },
    setup() {
      $_$();
      const { isLive: e, isLine: t, isHomePage: i } = ue(),
        { topGamesList: s, isFirstLoad: c } = A({
          bettingType: I.LIVE,
          pageType: w.HOME,
        }),
        { topGamesList: p, isFirstLoad: r } = A({
          bettingType: I.LINE,
          pageType: w.HOME,
        }),
        n = m(() => {
          $_$();
          const h = [...o(s), ...o(p)];
          return o(i) ? h : o(e) ? o(s) : o(t) ? o(p) : h;
        }),
        u = m(
          () =>
            $_$() && o(n).filter(({ markets: h }) => !!(h != null && h.length))
        ),
        l = m(() => $_$() && o(r) && o(c)),
        C = m(() => $_$() && `${o(e)}${o(t)}`);
      return {
        allTopGamesWithMarkets: u,
        isTopGamesSliderLoading: l,
        bettingTypeKey: C,
      };
    },
  });
function Je(e, t, i, s, c, p) {
  $_$();
  const r = d("PopularGamesSliderLoader"),
    n = d("PopularGamesSliderCard"),
    u = d("UiSwipeSlider");
  return e.isTopGamesSliderLoading
    ? (_(), v(r, { key: 0 }))
    : (_(),
      v(
        u,
        {
          key: e.bettingTypeKey,
          slides: e.allTopGamesWithMarkets,
          class: "popular-games-slider",
        },
        {
          default: y(
            ({ slide: l }) =>
              $_$() && [
                a(
                  n,
                  { game: l, class: "popular-games-slider__item" },
                  null,
                  8,
                  ["game"]
                ),
              ]
          ),
          _: 1,
        },
        8,
        ["slides"]
      ));
}
const Qe = b(Ke, [
    ["render", Je],
    ["__scopeId", "data-v-7df5c708"],
  ]),
  Xe = L({
    __name: "BettingContent",
    async setup(e) {
      $_$();
      let t, i, s, c;
      const p = D(),
        r = Z(pe),
        [n, u, l] = x(1871, 1873, 2118),
        { styles: C } = (([s, c] = re(() => le())),
        (s = (([t, i] = ee(() => s)), (t = await t), i(), t)),
        c(),
        s)();
      me();
      const { bettingClearAllFilters: h } = H(),
        f = m(() => $_$() && p.name === oe.MAIN_SECTION),
        T = m(() => $_$() && o(f) && n),
        P = m(
          () => !p.params.champ && !p.params.menuSection && !p.params.sport && l
        );
      return (
        te(h),
        (Ye, Ze) => {
          $_$();
          const $ = ae;
          return (
            _(),
            k(
              "main",
              { class: "betting-content", style: se(o(C)) },
              [
                o(T)
                  ? (_(), v(Qe, { key: 0 }))
                  : (_(),
                    v($, {
                      key: "bettingHeader",
                      name: "bettingHeader",
                      class: "betting-content__header",
                    })),
                o(P)
                  ? (_(),
                    v($, {
                      key: "highRankingTournamentsApp",
                      name: "highRankingTournamentsApp",
                    }))
                  : F("", !0),
                a(
                  o(r),
                  { class: "betting-content__main" },
                  { default: y(() => $_$() && [a($)]), _: 1 }
                ),
                a($, { key: "footer", name: "footer" }),
                o(u)
                  ? (_(),
                    v(
                      de,
                      { key: 3 },
                      { default: y(() => $_$() && [a(Ce)]), _: 1 }
                    ))
                  : F("", !0),
              ],
              4
            )
          );
        }
      );
    },
  }),
  bo = b(Xe, [["__scopeId", "data-v-74c71f40"]]);
export { bo as default };
