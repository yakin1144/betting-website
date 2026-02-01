import $_$ from "./$_$.js";
$_$();
import { UiToggleFavoriteButton as ve } from "./e37cc43aaf.js";
import {
  reactivity_esmBundler_toRef as Te,
  runtimeCore_esmBundler_inject as Se,
  runtimeCore_esmBundler_defineComponent as V,
  theme_constants_themeType as U,
  index_getConfig as ie,
  runtimeCore_esmBundler_computed as o,
  runtimeCore_esmBundler_resolveComponent as v,
  runtimeCore_esmBundler_createBlock as g,
  runtimeCore_esmBundler_openBlock as m,
  reactivity_esmBundler_unref as t,
  size_constants_sizeType as b,
  runtimeCore_esmBundler_createSlots as Ce,
  runtimeCore_esmBundler_withCtx as C,
  runtimeCore_esmBundler_createVNode as G,
  runtimeCore_esmBundler_createCommentVNode as M,
  runtimeCore_esmBundler_createTextVNode as D,
  shared_esmBundler_toDisplayString as z,
  reactivity_esmBundler_ref as me,
  index_useLogger as he,
  reactivity_esmBundler_toRefs as Z,
  runtimeCore_esmBundler_watch as Ge,
  execAsync as Be,
  runtimeDom_esmBundler_withModifiers as Q,
  iconName as K,
  runtimeCore_esmBundler_resolveDirective as Ie,
  runtimeCore_esmBundler_createElementBlock as I,
  runtimeCore_esmBundler_withDirectives as ee,
  runtimeCore_esmBundler_Fragment as w,
  shared_esmBundler_normalizeClass as Y,
  statusType as te,
  runtimeCore_esmBundler_createElementVNode as S,
  createSharedComposable_createSharedComposable_2 as Me,
  useRoute_useRoute as be,
  useGlobalStore as Le,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as ae,
  runtimeCore_esmBundler_resolveDynamicComponent as se,
  runtimeCore_esmBundler_renderList as X,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useWidgetTopGamesMessages as le,
  useBettingClearSelectedData as Ae,
  useBettingStateInjector as ze,
} from "./9de70556bb.js";
import { useToggleFavoriteGame as Ne } from "./6e5c097416.js";
import {
  useGamesSliderGameInfoLabel as $e,
  useHoveredProvider as Ue,
  BETTING_HOVERED_INJECTION_KEY_SPORT_EVENT as Oe,
} from "./4e4f01046c.js";
import { UiGameScores as Fe } from "./f0c49800c9.js";
import { UiTeamScores as Ee } from "./fc0a56fa04.js";
import { UiTeamScoreName as oe } from "./f1156f93a8.js";
import { UiTeamIcons as re } from "./5f6b076bc4.js";
import {
  useCouponStore as Re,
  useBetModelsManager as Pe,
  useBettingRouteData as We,
  src as we,
  _export_sfc as q,
  AnalyticsBetSourceName as De,
  useCommonAnalytics as Ve,
} from "./entry-50afb6f36c.js";
import {
  useBetBuilderMode as je,
  useGamesSliderGameProgress as Qe,
} from "./d046664d0b.js";
import { useHomeShowcaseAnalytics as qe } from "./3c4e4a6a3e.js";
import { GameOpenSource as ne } from "./1af6a171a2.js";
const de = (e, a) => Object.fromEntries(a.map((c) => $_$() && [c, Te(e, c)])),
  ce = () => $_$() && Se("gamesSliderProvidedData"),
  He = V({
    __name: "GamesSliderGameTeams",
    props: {
      game: { type: Object, required: !0 },
      teamIconsTheme: { type: String, default: U.gray30 },
    },
    setup(e) {
      $_$();
      const a = e,
        {
          firstOpponentName: c,
          secondOpponentName: r,
          firstOpponentLogoFileNames: l,
          secondOpponentLogoFileNames: d,
          firstOpponentIds: s,
          secondOpponentIds: u,
          firstOpponentCountryId: f,
          secondOpponentCountryId: h,
          firstOpponentScoreLabel: k,
          secondOpponentScoreLabel: y,
          hasScores: n,
          statistics: i,
          periodScores: _,
          secondOpponentId: B,
          sportId: L,
        } = a.game,
        O = ie(327),
        F = o(() => !B),
        N = o(() => O && s),
        E = o(() => O && u);
      return (j, H) => {
        $_$();
        const R = v("UiCaption");
        return (
          m(),
          g(
            Ee,
            { size: t(b).s, class: "games-slider-game-teams" },
            Ce(
              {
                teams: C(
                  () =>
                    $_$() && [
                      G(oe, null, {
                        default: C(
                          () =>
                            $_$() && [
                              t(N)
                                ? (m(),
                                  g(
                                    re,
                                    {
                                      key: 0,
                                      images: t(l),
                                      opponentsCount: t(s).length,
                                      countryIco: t(f),
                                      theme: e.teamIconsTheme,
                                      decreased: "",
                                    },
                                    null,
                                    8,
                                    [
                                      "images",
                                      "opponentsCount",
                                      "countryIco",
                                      "theme",
                                    ]
                                  ))
                                : M("", !0),
                              G(
                                R,
                                { size: t(b).m },
                                {
                                  default: C(() => $_$() && [D(z(t(c)), 1)]),
                                  _: 1,
                                },
                                8,
                                ["size"]
                              ),
                            ]
                        ),
                        _: 1,
                      }),
                      G(oe, null, {
                        default: C(
                          () =>
                            $_$() && [
                              t(E)
                                ? (m(),
                                  g(
                                    re,
                                    {
                                      key: 0,
                                      images: t(d),
                                      opponentsCount: t(u).length,
                                      countryIco: t(h),
                                      theme: e.teamIconsTheme,
                                      decreased: "",
                                    },
                                    null,
                                    8,
                                    [
                                      "images",
                                      "opponentsCount",
                                      "countryIco",
                                      "theme",
                                    ]
                                  ))
                                : M("", !0),
                              G(
                                R,
                                { size: t(b).m },
                                {
                                  default: C(() => $_$() && [D(z(t(r)), 1)]),
                                  _: 1,
                                },
                                8,
                                ["size"]
                              ),
                            ]
                        ),
                        _: 1,
                      }),
                    ]
                ),
                _: 2,
              },
              [
                t(n)
                  ? {
                      name: "scores",
                      fn: C(
                        () =>
                          $_$() && [
                            G(
                              Fe,
                              {
                                homeTeamScoreLabel: t(k),
                                awayTeamScoreLabel: t(y),
                                subScore: t(i).subScore,
                                periodScores: t(_),
                                isSinglePlayerEvent: t(F),
                                feed: t(i).serverTeamNumber,
                                inningIco: t(L),
                                size: t(b).s,
                              },
                              null,
                              8,
                              [
                                "homeTeamScoreLabel",
                                "awayTeamScoreLabel",
                                "subScore",
                                "periodScores",
                                "isSinglePlayerEvent",
                                "feed",
                                "inningIco",
                                "size",
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
            ["size"]
          )
        );
      };
    },
  }),
  Ke = 0,
  Ye = V({
    name: "UiGameCardMarket",
    props: {
      market: { type: Object, required: !0 },
      fixedMarketText: { type: String, default: "" },
      game: { type: Object, required: !0 },
      theme: { type: String, default: U.gray },
      size: { type: String, default: b.s },
      isWidget: { type: Boolean, default: !1 },
      source: { type: String, default: "" },
    },
    emits: ["addMarketToCoupon"],
    setup(e, { emit: a }) {
      $_$();
      const c = me(),
        r = Re(),
        l = Pe(),
        { id: d } = ie(-1004),
        s = he(),
        { routePageType: u, routePageSubType: f } = We(),
        { isBetBuilderMode: h, setBetBuilderMode: k } = je(),
        { sendWidgetCoefficientClickedMessage: y, getGameRouteLink: n } = le(),
        {
          market: i,
          game: _,
          fixedMarketText: B,
          isWidget: L,
          source: O,
        } = Z(e),
        F = o(() => $_$() && t(u)),
        N = o(() => $_$() && t(f)),
        E = o(() => r.couponBetIds),
        j = o(() => $_$() && t(E).includes(t(i).id)),
        H = n(_),
        R = async () => {
          $_$();
          let T, A;
          t(i).coefByView !== "-" &&
            (([T, A] = Be(
              () =>
                $_$() &&
                r.couponAddBet({
                  market: t(i),
                  game: t(_),
                  pageType: t(F),
                  pageSubType: t(N),
                  source: t(O),
                  isBetBuilderMode: t(h),
                  onSubmit: () => k(!1),
                })
            )),
            await T,
            A(),
            a("addMarketToCoupon", {
              market: t(i),
              isAdded: t(E).includes(t(i).id),
            }),
            t(L) && y(H));
        };
      return (
        Ge(
          i,
          (T) => {
            $_$();
            if (T.coef !== "-") {
              if (t(B)) {
                c.value = t(B);
                return;
              }
              const A = Number(T.groupId);
              l.getGroupTemplateById({
                groupId: Number(A),
                isDefaultGroup: !0,
                marketsNameType: Ke,
              })
                .then(($) => {
                  $_$();
                  var P;
                  const W =
                    $ == null
                      ? void 0
                      : $.markets[(P = t(i)) == null ? void 0 : P.typeId];
                  if (!W) {
                    c.value = "-";
                    return;
                  }
                  c.value = we.generateMarketName({
                    marketParam: T.param,
                    playerName: T.playerName,
                    marketType: T.typeId,
                    sportId: T.sportId,
                    marketTemplateType: W.templateTypeId,
                    marketNameTemplate: W.nameTemplate,
                    marketGroupId: T.groupId,
                    language: d,
                    firstOpponentName: T.firstOpponentName,
                    secondOpponentName: T.secondOpponentName,
                  });
                })
                .catch(($) => s.error("UiGameCardMarket error", $));
            }
          },
          { immediate: !0 }
        ),
        { marketText: c, isActive: j, sendMarketToCoupon: R }
      );
    },
  });
function Je(e, a, c, r, l, d) {
  $_$();
  const s = v("UiMarket");
  return (
    m(),
    g(
      s,
      {
        onClick: Q(e.sendMarketToCoupon, ["stop", "prevent"]),
        text: e.marketText,
        coefByView: e.market.coefByView,
        isActive: e.isActive,
        isLocked: e.market.isLocked,
        theme: e.theme,
        size: e.size,
        isBoldValue: "",
        class: "ui-game-card-market",
      },
      null,
      8,
      ["onClick", "text", "coefByView", "isActive", "isLocked", "theme", "size"]
    )
  );
}
const Xe = q(Ye, [["render", Je]]),
  Ze = V({
    name: "GamesSliderGameMarkets",
    components: { UiGameCardMarket: Xe },
    props: {
      game: { type: Object, required: !0 },
      gameMarkets: { type: Object, default: () => ({}) },
      marketGroups: { type: Object, default: () => ({}) },
      theme: { type: String, default: U.gray },
      onGameClick: { type: Function, default: () => {} },
      isWidget: { type: Boolean, default: !1 },
      hideAllMarketsQuantity: { type: Boolean, default: !1 },
    },
    emits: ["addMarketToCoupon"],
    setup(e) {
      $_$();
      const a = me(1),
        c = o(() => e.gameMarkets.map((n) => n.groupId)),
        r = o(
          () =>
            $_$() &&
            e.marketGroups.filter((i) => $_$() && t(c).includes(i.groupId))[
              t(a) - 1
            ]
        ),
        l = o(() => {
          $_$();
          var n;
          const i = (n = t(r)) == null ? void 0 : n.groupId;
          if (i) return e.gameMarkets.find((_) => _.groupId === i);
        }),
        d = o(() => {
          $_$();
          var n, i;
          return !(
            (i = (n = t(l)) == null ? void 0 : n.marketList) != null && i.length
          );
        }),
        s = o(() => {
          $_$();
          var n, i;
          return (i = (n = t(l)) == null ? void 0 : n.marketList) == null
            ? void 0
            : i.every((_) => _ && !_.name && _.coef === "-");
        }),
        u = o(() => ($_$() && t(d)) || t(s)),
        f = o(() => ` +${e.game.numberOfMarkets}`),
        h = o(() => {
          $_$();
          var n;
          return (n = t(l)) == null ? void 0 : n.marketList[0];
        }),
        k = o(() => {
          $_$();
          var n, i, _, B, L;
          return (i = (n = t(l)) == null ? void 0 : n.marketList[1]) != null &&
            i.id &&
            !(
              (B = (_ = t(l)) == null ? void 0 : _.marketList[1]) != null &&
              B.isParam
            )
            ? (L = t(l)) == null
              ? void 0
              : L.marketList[1]
            : void 0;
        }),
        y = o(() => {
          $_$();
          var n;
          return (n = t(l)) == null ? void 0 : n.marketList[2];
        });
      return {
        sizeType: b,
        showMarketsAll: u,
        marketsForRender: l,
        availableMarkets: f,
        firstMarketForRender: h,
        secondMarketForRender: k,
        thirdMarketForRender: y,
        AnalyticsBetSourceName: De,
        iconName: K,
      };
    },
  }),
  xe = { class: "games-slider-game-markets" };
function et(e, a, c, r, l, d) {
  $_$();
  const s = v("UiCaption"),
    u = v("UiButton"),
    f = v("UiGameCardMarket"),
    h = v("UiIco"),
    k = Ie("tooltip");
  return (
    m(),
    I("div", xe, [
      e.showMarketsAll
        ? ee(
            (m(),
            g(
              u,
              {
                key: 0,
                onClick: Q(e.onGameClick, ["stop", "prevent"]),
                uppercase: !1,
                theme: e.theme,
                class: "games-slider-game-markets__all",
              },
              {
                default: C(
                  () =>
                    $_$() && [
                      G(
                        s,
                        { size: e.sizeType.xs },
                        {
                          default: C(
                            () =>
                              $_$() && [D(z(e.$T("all_available_markets")), 1)]
                          ),
                          _: 1,
                        },
                        8,
                        ["size"]
                      ),
                      G(
                        s,
                        {
                          size: e.sizeType.xs,
                          class: "games-slider-game-markets__count",
                        },
                        {
                          default: C(
                            () => $_$() && [D(z(e.availableMarkets), 1)]
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
            )),
            [[k, e.$T("dashboard_show_all_markets")]]
          )
        : (m(),
          I(
            w,
            { key: 1 },
            [
              e.marketsForRender
                ? (m(),
                  I(
                    w,
                    { key: 0 },
                    [
                      e.firstMarketForRender
                        ? (m(),
                          g(
                            f,
                            {
                              key: 0,
                              onAddMarketToCoupon:
                                a[0] ||
                                (a[0] = (y) => e.$emit("addMarketToCoupon", y)),
                              market: e.firstMarketForRender,
                              game: e.game,
                              size: e.sizeType.m,
                              theme: e.theme,
                              isWidget: e.isWidget,
                              source: e.AnalyticsBetSourceName.GamesSliderGame,
                              class: "games-slider-game-markets__item",
                            },
                            null,
                            8,
                            [
                              "market",
                              "game",
                              "size",
                              "theme",
                              "isWidget",
                              "source",
                            ]
                          ))
                        : M("", !0),
                      e.secondMarketForRender
                        ? (m(),
                          g(
                            f,
                            {
                              key: 1,
                              onAddMarketToCoupon:
                                a[1] ||
                                (a[1] = (y) => e.$emit("addMarketToCoupon", y)),
                              market: e.secondMarketForRender,
                              game: e.game,
                              size: e.sizeType.m,
                              theme: e.theme,
                              isWidget: e.isWidget,
                              source: e.AnalyticsBetSourceName.GamesSliderGame,
                              fixedMarketText: "X",
                              class: "games-slider-game-markets__item",
                            },
                            null,
                            8,
                            [
                              "market",
                              "game",
                              "size",
                              "theme",
                              "isWidget",
                              "source",
                            ]
                          ))
                        : M("", !0),
                      e.thirdMarketForRender
                        ? (m(),
                          g(
                            f,
                            {
                              key: 2,
                              onAddMarketToCoupon:
                                a[2] ||
                                (a[2] = (y) => e.$emit("addMarketToCoupon", y)),
                              market: e.thirdMarketForRender,
                              game: e.game,
                              size: e.sizeType.m,
                              theme: e.theme,
                              isWidget: e.isWidget,
                              source: e.AnalyticsBetSourceName.GamesSliderGame,
                              class: "games-slider-game-markets__item",
                            },
                            null,
                            8,
                            [
                              "market",
                              "game",
                              "size",
                              "theme",
                              "isWidget",
                              "source",
                            ]
                          ))
                        : M("", !0),
                    ],
                    64
                  ))
                : M("", !0),
              ee(
                (m(),
                g(
                  u,
                  {
                    onClick: Q(e.onGameClick, ["stop", "prevent"]),
                    theme: e.theme,
                    uppercase: !1,
                    class: Y([
                      "games-slider-game-markets__all",
                      {
                        "games-slider-game-markets__all--icon":
                          e.hideAllMarketsQuantity,
                      },
                    ]),
                  },
                  {
                    container: C(
                      () =>
                        $_$() && [
                          e.hideAllMarketsQuantity
                            ? (m(),
                              g(
                                h,
                                { key: 0, ico: e.iconName.ELLIPSIS_VERTICAL },
                                null,
                                8,
                                ["ico"]
                              ))
                            : (m(),
                              g(
                                s,
                                {
                                  key: 1,
                                  size: e.sizeType.xs,
                                  uppercase: "",
                                  class: "games-slider-game-markets__count",
                                },
                                {
                                  default: C(
                                    () => $_$() && [D(z(e.availableMarkets), 1)]
                                  ),
                                  _: 1,
                                },
                                8,
                                ["size"]
                              )),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["onClick", "theme", "class"]
                )),
                [[k, e.$T("dashboard_show_all_markets")]]
              ),
            ],
            64
          )),
    ])
  );
}
const tt = q(Ze, [
    ["render", et],
    ["__scopeId", "data-v-41e05909"],
  ]),
  at = (e, a) =>
    $_$() && {
      ico: o(() => {
        $_$();
        var r, l, d;
        if (t(a)) return "";
        if (
          (d =
            (l =
              (r = t(e).statistics) == null ? void 0 : r.penaltyStatistics) ==
            null
              ? void 0
              : l.firstTeamSeries) != null &&
          d.length
        )
          return K.BULLETS;
        switch (t(e).gameStatus) {
          case 2:
            return K.PAUSE;
          case 8:
          case 16:
            return K.BULLETS;
          case 0:
          case 1:
          default:
            return "";
        }
      }),
    },
  st = V({
    name: "GamesSliderGameInfo",
    props: {
      game: { type: Object, required: !0 },
      forceSuccessTimeline: { type: Boolean, default: !1 },
    },
    setup(e) {
      $_$();
      const { game: a } = Z(e),
        { isLine: c, isLive: r } = de(ce(), ["isLine", "isLive"]),
        { progress: l } = Qe(a, c),
        d = o(() =>
          Number(l.value.replace("--progress-width :", "").replace("%", ""))
        ),
        { label: s } = $e(a, c),
        { ico: u } = at(a, c),
        f = o(() =>
          ($_$() && t(c)) || t(a).isNotStarted ? te.PENDING : te.SUCCESS
        ),
        h = o(() => {
          $_$();
          const k = t(a);
          return !!(
            t(r) &&
            ((k.currentPeriodLabel && k.timeInSeconds) || k.isNotStarted)
          );
        });
      return {
        sizeType: b,
        label: s,
        ico: u,
        isProgressVisible: h,
        numericProgress: d,
        statusTimeline: f,
      };
    },
  }),
  ot = { class: "games-slider-game-info__wrapper" },
  rt = { class: "games-slider-game-info__label" };
function nt(e, a, c, r, l, d) {
  $_$();
  const s = v("UiIco"),
    u = v("UiTimeline");
  return (
    m(),
    I(
      "div",
      {
        class: Y([
          { "games-slider-game-info--not-started": e.game.isNotStarted },
          "games-slider-game-info",
        ]),
      },
      [
        S("div", ot, [
          e.ico
            ? (m(),
              g(
                s,
                {
                  key: 0,
                  ico: e.ico,
                  size: e.sizeType.xs,
                  class: "games-slider-game-info__icon",
                },
                null,
                8,
                ["ico", "size"]
              ))
            : M("", !0),
          S("span", rt, z(e.label), 1),
        ]),
        e.isProgressVisible
          ? (m(),
            g(
              u,
              {
                key: 0,
                statusType: e.statusTimeline,
                percent: e.numericProgress,
              },
              null,
              8,
              ["statusType", "percent"]
            ))
          : M("", !0),
      ],
      2
    )
  );
}
const it = q(st, [
    ["render", nt],
    ["__scopeId", "data-v-56d4d07b"],
  ]),
  mt = Me(() => {
    const { sendGTagEvent: e, sendGoogleAndFatmanEvent: a } = Ve();
    return {
      trackOpenGameClick: ({ gameId: d }) => {
        a(
          { google: "bet_game_open", fatman: 1065 },
          {
            google: { bookmark_source: ne.SLIDER, gameId: d },
            fatman: { s1: ne.SLIDER, i1: d },
          }
        );
      },
      trackAddGameToFavoriteClick: ({ sportId: d, isAdded: s }) => {
        const u = s ? "add_favor" : "remove";
        a(
          { google: "bet_add_favor", fatman: 1081 },
          { google: { action: u, sport_id: d }, fatman: { s1: u, i1: d } }
        );
      },
      trackAddMarketToCoupon: ({ isLive: d, isAdded: s }) => {
        s &&
          e(
            "v3_Добавить событие в купон",
            d ? "Live_Слайдер" : "Линия_Слайдер"
          );
      },
    };
  }),
  lt = V({
    name: "GamesSliderGameCard",
    components: {
      GamesSliderGameInfo: it,
      GamesSliderGameMarkets: tt,
      GamesSliderGameTeams: He,
      UiToggleFavoriteButton: ve,
    },
    props: {
      game: { type: Object, required: !0 },
      theme: { type: String, default: U.gray100 },
      marketsTheme: { type: String, default: U.gray },
      teamIconsTheme: { type: String, default: U.gray30 },
      isTopEvents: { type: Boolean, default: !1 },
      isWidget: { type: Boolean, default: !1 },
      isHomeShowcase: { type: Boolean, default: !1 },
      forceSuccessTimeline: { type: Boolean, default: !1 },
      favoriteButtonSize: { type: String, default: b.s },
      hideAllMarketsQuantity: { type: Boolean, default: !1 },
    },
    setup(e) {
      $_$();
      const { game: a, isTopEvents: c, isHomeShowcase: r } = Z(e),
        l = be(),
        d = Le(),
        s = ce(),
        {
          trackAddGameToFavoriteClick: u,
          trackAddMarketToCoupon: f,
          trackOpenGameClick: h,
        } = mt(),
        { trackBetAddFavorite: k, trackBetGameOpen: y } = qe(),
        { changeBettingRoute: n, getBettingRouteUrl: i } = ae(),
        { sendWidgetEventClickedMessage: _ } = le();
      Ue(Oe);
      const {
          bettingType: B,
          pageType: L,
          isLive: O,
        } = de(s, ["bettingType", "pageType", "isLive"]),
        { bettingClearAllFilters: F } = Ae({ bettingType: B, pageType: L }),
        { isFavorite: N, toggleFavorite: E } = Ne({
          bettingType: B,
          gameId: o(() => $_$() && t(a).id),
        }),
        j = o(() => d.getLanguage),
        H = o(() => {
          $_$();
          var p;
          return (p = t(a).sportId) != null ? p : 1;
        }),
        R = o(() => {
          $_$();
          var p;
          return (p = t(s.gamesSliderStore.marketsByGameId)[t(a).id]) != null
            ? p
            : [];
        }),
        T = o(() => {
          $_$();
          var p;
          return (p = t(s.gamesSliderStore.marketGroupsBySportId)[t(H)]) != null
            ? p
            : [];
        }),
        A = o(() => {
          $_$();
          var p;
          const J = (p = t(a)) != null ? p : {};
          return {
            lng: t(j),
            section: s.bettingType,
            menuSection: J.menuSectionNameForUrl || void 0,
            sport: J.sportNameForUrl,
            champ: J.champNameForUrl,
          };
        }),
        $ = o(() => {
          $_$();
          var p;
          return {
            ...t(A),
            game: (p = t(a)) == null ? void 0 : p.gameNameForUrl,
          };
        }),
        P = o(() => $_$() && i(t(A))),
        W = o(() => $_$() && i(t($))),
        ue = () => {
          $_$();
          E(),
            t(r)
              ? k(t(a).sportId, t(N) ? "remove" : "add_favor")
              : u({ isAdded: t(N), sportId: t(a).sportId });
        },
        pe = () => {
          $_$();
          if ((F(), e.isWidget)) _(P);
          else {
            const p =
              t(l).path !== t(P) ? t(A) : { lng: t(j), section: s.bettingType };
            n(p);
          }
        },
        x = () => {
          $_$();
          F(), n(t($));
        },
        ge = ({ isAdded: p }) => {
          $_$();
          f({ isAdded: p, isLive: s.isLive }), t(c) && !e.isWidget && x();
        },
        ke = () => {
          $_$();
          t(r) ? y(t(a).sportId) : h({ gameId: t(a).id });
        },
        _e = () => {
          ke(), e.isWidget ? _(W) : x();
        },
        fe = o(() => ({
          [`games-slider-game-card--theme-${e.theme}`]: !!e.theme,
        })),
        ye = o(() =>
          e.isWidget ? { tag: "button", type: "button" } : { tag: "NuxtLink" }
        );
      return {
        sizeType: b,
        isFavorite: N,
        isLive: O,
        gameMarkets: R,
        marketGroups: T,
        champLink: P,
        gameLink: W,
        ...ae(),
        onFavoriteAdd: ue,
        openChamp: pe,
        openGame: _e,
        onAddMarketToCouponClick: ge,
        gamesSliderGameCardClasses: fe,
        champLinkComponent: ye,
      };
    },
  }),
  dt = { class: "games-slider-game-card__image" },
  ct = { class: "games-slider-game-card__content" },
  ut = {
    class: "games-slider-game-card__header games-slider-game-card-header",
  },
  pt = { class: "games-slider-game-card__champ" };
function gt(e, a, c, r, l, d) {
  $_$();
  const s = v("UiIcoSport"),
    u = v("UiTag"),
    f = v("UiToggleFavoriteButton"),
    h = v("GamesSliderGameTeams"),
    k = v("GamesSliderGameInfo"),
    y = v("GamesSliderGameMarkets");
  return (
    m(),
    I(
      "article",
      { class: Y(["games-slider-game-card", e.gamesSliderGameCardClasses]) },
      [
        S("div", dt, [
          G(
            s,
            { ico: e.game.sportId, class: "games-slider-game-card__ico" },
            null,
            8,
            ["ico"]
          ),
        ]),
        (m(),
        g(
          se(e.champLinkComponent.tag),
          {
            onClick: e.openGame,
            class: "games-slider-game-card__link",
            to: e.gameLink,
            type: e.champLinkComponent.type,
          },
          null,
          8,
          ["onClick", "to", "type"]
        )),
        S("section", ct, [
          S("div", ut, [
            (m(),
            g(
              se(e.champLinkComponent.tag),
              {
                onClick: Q(e.openChamp, ["stop"]),
                to: e.champLink,
                type: e.champLinkComponent.type,
                class: "games-slider-game-card-header__link",
              },
              {
                default: C(
                  () =>
                    $_$() && [
                      G(
                        s,
                        {
                          class: "games-slider-game-card-header__ico",
                          ico: e.game.sportId,
                        },
                        null,
                        8,
                        ["ico"]
                      ),
                      S("span", pt, z(e.game.champName), 1),
                      e.isLive
                        ? (m(),
                          g(
                            u,
                            {
                              key: 0,
                              size: e.sizeType.s,
                              class: "games-slider-game-card__tag",
                            },
                            {
                              default: C(
                                () => $_$() && [D(z(e.$T("betting_live")), 1)]
                              ),
                              _: 1,
                            },
                            8,
                            ["size"]
                          ))
                        : M("", !0),
                    ]
                ),
                _: 1,
              },
              8,
              ["onClick", "to", "type"]
            )),
            e.isWidget
              ? M("", !0)
              : (m(),
                g(
                  f,
                  {
                    key: 0,
                    onClick: Q(e.onFavoriteAdd, ["stop", "prevent"]),
                    isActive: e.isFavorite,
                    size: e.favoriteButtonSize,
                    class: "games-slider-game-card__favorite",
                  },
                  null,
                  8,
                  ["onClick", "isActive", "size"]
                )),
          ]),
          G(
            h,
            {
              game: e.game,
              teamIconsTheme: e.teamIconsTheme,
              class: "games-slider-game-card__teams",
            },
            null,
            8,
            ["game", "teamIconsTheme"]
          ),
          G(
            k,
            {
              game: e.game,
              forceSuccessTimeline: e.forceSuccessTimeline,
              class: "games-slider-game-card__info",
            },
            null,
            8,
            ["game", "forceSuccessTimeline"]
          ),
          G(
            y,
            {
              onAddMarketToCoupon: e.onAddMarketToCouponClick,
              onGameClick: e.openGame,
              game: e.game,
              gameMarkets: e.gameMarkets,
              marketGroups: e.marketGroups,
              theme: e.marketsTheme,
              isWidget: e.isWidget,
              hideAllMarketsQuantity: e.hideAllMarketsQuantity,
              class: "games-slider-game-card__markets",
            },
            null,
            8,
            [
              "onAddMarketToCoupon",
              "onGameClick",
              "game",
              "gameMarkets",
              "marketGroups",
              "theme",
              "isWidget",
              "hideAllMarketsQuantity",
            ]
          ),
        ]),
      ],
      2
    )
  );
}
const Nt = q(lt, [
    ["render", gt],
    ["__scopeId", "data-v-8820fe07"],
  ]),
  kt = { class: "games-slider-app-loader-card__wrapper" },
  _t = { class: "games-slider-app-loader-card__row" },
  ft = { class: "games-slider-app-loader-card__markets" },
  yt = V({
    __name: "GamesSliderAppLoader",
    props: { theme: { type: String, default: U.gray100 } },
    setup(e) {
      const { bettingType: a } = ze();
      return (c, r) => {
        $_$();
        const l = v("UiSkeleton");
        return (
          m(),
          I(
            "div",
            {
              class: Y([
                `games-slider-app-loader--${t(a)}`,
                "games-slider-app-loader",
              ]),
            },
            [
              (m(),
              I(
                w,
                null,
                X(
                  6,
                  (d) =>
                    $_$() &&
                    G(
                      l,
                      {
                        key: d,
                        class:
                          "games-slider-app-loader-card games-slider-app-loader__card",
                        theme: e.theme,
                      },
                      {
                        default: C(
                          () =>
                            $_$() && [
                              S("div", kt, [
                                S("div", _t, [
                                  (m(),
                                  I(
                                    w,
                                    null,
                                    X(
                                      3,
                                      (s) =>
                                        $_$() &&
                                        (m(),
                                        I(
                                          w,
                                          {
                                            key: `games-slider-app-loader-card-ico-${s}`,
                                          },
                                          [
                                            r[0] ||
                                              (r[0] = S(
                                                "div",
                                                {
                                                  class:
                                                    "games-slider-app-loader-card__ico",
                                                },
                                                null,
                                                -1
                                              )),
                                            r[1] ||
                                              (r[1] = S(
                                                "div",
                                                {
                                                  class:
                                                    "games-slider-app-loader-card__line",
                                                },
                                                null,
                                                -1
                                              )),
                                          ],
                                          64
                                        ))
                                    ),
                                    64
                                  )),
                                ]),
                                r[2] ||
                                  (r[2] = S(
                                    "div",
                                    {
                                      class:
                                        "games-slider-app-loader-card__favorite",
                                    },
                                    null,
                                    -1
                                  )),
                                r[3] ||
                                  (r[3] = S(
                                    "div",
                                    {
                                      class:
                                        "games-slider-app-loader-card__line",
                                    },
                                    null,
                                    -1
                                  )),
                              ]),
                              S("div", ft, [
                                (m(),
                                I(
                                  w,
                                  null,
                                  X(
                                    4,
                                    (s) =>
                                      $_$() &&
                                      S("div", {
                                        key: s,
                                        class:
                                          "games-slider-app-loader-card__market",
                                      })
                                  ),
                                  64
                                )),
                              ]),
                            ]
                        ),
                        _: 2,
                      },
                      1032,
                      ["theme"]
                    )
                ),
                64
              )),
            ],
            2
          )
        );
      };
    },
  }),
  $t = q(yt, [["__scopeId", "data-v-64066350"]]);
export {
  $t as GamesSliderAppLoader,
  Nt as GamesSliderGameCard,
  ce as useGamesSliderProvidedData,
};
