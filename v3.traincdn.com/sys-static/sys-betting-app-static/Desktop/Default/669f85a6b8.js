import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as fe } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  isString_isString as po,
  isNumber as vo,
  runtimeCore_esmBundler_defineComponent as N,
  execAsync as ce,
  runtimeCore_esmBundler_resolveComponent as v,
  runtimeCore_esmBundler_createElementBlock as w,
  runtimeCore_esmBundler_openBlock as u,
  shared_esmBundler_normalizeStyle as _o,
  reactivity_esmBundler_unref as s,
  runtimeCore_esmBundler_createVNode as y,
  runtimeCore_esmBundler_createBlock as f,
  runtimeCore_esmBundler_createCommentVNode as g,
  size_constants_sizeType as P,
  runtimeCore_esmBundler_withCtx as I,
  runtimeCore_esmBundler_createTextVNode as O,
  shared_esmBundler_toDisplayString as G,
  iconName as To,
  runtimeCore_esmBundler_resolveDirective as ue,
  runtimeCore_esmBundler_withDirectives as Y,
  runtimeCore_esmBundler_mergeProps as de,
  runtimeDom_esmBundler_withModifiers as R,
  index_getConfig as be,
  runtimeCore_esmBundler_computed as n,
  shared_esmBundler_normalizeClass as Q,
  theme_constants_themeType as Z,
  runtimeCore_esmBundler_createSlots as So,
  runtimeCore_esmBundler_createElementVNode as le,
  runtimeDom_esmBundler_Transition as ho,
  runtimeDom_esmBundler_vShow as yo,
  runtimeCore_esmBundler_Fragment as go,
  runtimeCore_esmBundler_renderList as fo,
  reactivity_esmBundler_ref as bo,
  index_useT as Io,
  router_useRoute as Co,
  router_useRouter as wo,
  useGlobalStore as Eo,
  bettingType_BettingType as ko,
  reactivity_esmBundler_toRef as Go,
  uniqueBy as Uo,
  isDef as ye,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineProvider as F,
  loadUiSportsEventConfigDesktop as Ie,
  _export_sfc as A,
  PeriodScoresItem as Bo,
  useCouponStore as Lo,
  useBettingRouteData as No,
  SPORTS_MENU_1X2_MARKETS_LANG_MAP as Ao,
  SPORTS_MENU_WIN_MARKETS_LANG_MAP as $o,
  groupBy as Mo,
  SPORTS_MENU_MARKETS_LANG_MAP as Vo,
  MediaTarget as me,
  MediaType as Do,
  bettingGameAdapter as zo,
} from "./entry-50afb6f36c.js";
import { UiToggleFavoriteButton as Oo } from "./e37cc43aaf.js";
import { UiGameScores as Po } from "./f0c49800c9.js";
import { UiTeamScores as Ro } from "./fc0a56fa04.js";
import { UiTeamScoreName as Fo } from "./f1156f93a8.js";
import { UiTeamIcons as jo } from "./5f6b076bc4.js";
import { UiFoulGameCard as Ho } from "./6a64c59e39.js";
import { useBettingPageData as Wo } from "./4a993370c6.js";
import { GameCardVarEvent as Ko } from "./4b4dfdeaaf.js";
import {
  useHoveredProvider as qo,
  BETTING_HOVERED_INJECTION_KEY_SPORT_EVENT as Jo,
  useGameInfoLabel as Xo,
} from "./4e4f01046c.js";
import { useMatchTabFilter as Yo } from "./858ab97c10.js";
import { useGameVideoAvailability as Qo } from "./c7ea6bc74a.js";
import { useBettingGameMediaEntities as Zo } from "./bb0d3b59f5.js";
import { useToggleFavoriteGame as xo } from "./6e5c097416.js";
const ge = (e) => (($_$() && po(e)) || vo(e) ? String(e) : void 0),
  { provide: es, inject: os } = F((e) => e),
  ss = N({
    __name: "UiSportsEventGameChamp_F",
    async setup(e) {
      $_$();
      let o, r, i, m;
      const _ =
          (([i, m] = fe(() => Ie())),
          (i = (([o, r] = ce(() => i)), (o = await o), r(), o)),
          m(),
          i),
        { config: p, styles: c } = _(),
        { champName: S, champTag: T, sportIco: d } = os();
      return (b, C) => {
        $_$();
        const U = v("UiIcoSport"),
          B = v("UiTag"),
          L = v("UiCaption");
        return (
          u(),
          w(
            "span",
            { style: _o(s(c)), class: "ui-sports-event-game-champ" },
            [
              y(
                U,
                {
                  ico: s(d),
                  size: s(p).uiIcoSportSize,
                  class: "ui-sports-event-game-champ__ico",
                },
                null,
                8,
                ["ico", "size"]
              ),
              s(T)
                ? (u(),
                  f(
                    B,
                    {
                      key: 0,
                      size: s(P).xs,
                      class: "ui-sports-event-game-champ__marker",
                    },
                    { default: I(() => $_$() && [O(G(s(T)), 1)]), _: 1 },
                    8,
                    ["size"]
                  ))
                : g("", !0),
              y(
                L,
                {
                  noWrap: "",
                  size: s(P).xxs,
                  dir: "auto",
                  class: "ui-sports-event-game-champ__title",
                },
                { default: I(() => $_$() && [O(G(s(S)), 1)]), _: 1 },
                8,
                ["size"]
              ),
            ],
            4
          )
        );
      };
    },
  }),
  ts = A(ss, [["__scopeId", "data-v-711a5a4b"]]),
  as = { SHOW_VIDEO: To.TRANSLATION },
  ns = ["aria-label"],
  rs = N({
    __name: "UiSportsEventShowVideo",
    props: { isActive: { type: Boolean }, isDisabled: { type: Boolean } },
    setup(e) {
      return (o, r) => {
        $_$();
        const i = v("UiIco"),
          m = ue("tooltip");
        return Y(
          (u(),
          w(
            "button",
            de({ onClick: r[0] || (r[0] = R(() => {}, ["stop"])) }, o.$attrs, {
              "aria-label": o.$T("media_show_video"),
              class: [
                {
                  "ui-sports-event-show-video--is-toggled": o.isActive,
                  "ui-sports-event-show-video--is-disabled": o.isDisabled,
                },
                "ui-sports-event-show-video",
              ],
            }),
            [
              y(
                i,
                {
                  ico: s(as).SHOW_VIDEO,
                  size: s(P).xs,
                  class: "ui-sports-event-show-video__ico",
                },
                null,
                8,
                ["ico", "size"]
              ),
            ],
            16,
            ns
          )),
          [[m, o.$T("media_show_video")]]
        );
      };
    },
  }),
  is = A(rs, [["__scopeId", "data-v-1cd9dae5"]]),
  { provide: ms, inject: ls } = F((e) => {
    var o;
    return {
      isFavorite: e.isFavorite,
      isTranslationDisabled: (o = e.isTranslationDisabled) != null ? o : !1,
      isVideoAvailable: e.isVideoAvailable,
      isVideoActive: e.isVideoActive,
      toggleFavorite: e.toggleFavorite,
      onVideoClick: e.onVideoClick,
    };
  }),
  cs = { class: "ui-sports-event-game-controls" },
  us = N({
    __name: "UiSportsEventGameControls",
    async setup(e) {
      $_$();
      let o, r, i, m;
      const _ =
          (([i, m] = fe(() => Ie())),
          (i = (([o, r] = ce(() => i)), (o = await o), r(), o)),
          m(),
          i),
        { config: p } = _(),
        c = be(412),
        {
          isTranslationDisabled: S,
          isVideoAvailable: T,
          isVideoActive: d,
          isFavorite: b,
          onVideoClick: C,
          toggleFavorite: U,
        } = ls(),
        B = n(() => $_$() && c && s(T));
      return (L, $) =>
        $_$() &&
        (u(),
        w("span", cs, [
          s(B)
            ? (u(),
              f(
                is,
                {
                  key: 0,
                  onClick: R(s(C), ["stop", "prevent"]),
                  isActive: s(d),
                  isDisabled: s(S),
                  class: "ui-sports-event-game-controls__video",
                },
                null,
                8,
                ["onClick", "isActive", "isDisabled"]
              ))
            : g("", !0),
          y(
            Oo,
            {
              onClick: R(s(U), ["stop", "prevent"]),
              isActive: s(b),
              size: s(p).uiToggleFavoriteButtonSize,
              class: Q([
                { "ui-sports-event-game-controls__favorite--is-active": s(b) },
                "ui-sports-event-game-controls__favorite",
              ]),
            },
            null,
            8,
            ["onClick", "isActive", "size", "class"]
          ),
        ]));
    },
  }),
  ds = A(us, [["__scopeId", "data-v-a3a9341d"]]),
  { provide: ps, inject: vs } = F((e) => {
    $_$();
    var o;
    return {
      theme: (o = e.theme) != null ? o : Z.gray60,
      homeTeamName: e.homeTeamName,
      awayTeamName: e.awayTeamName,
      homeTeamSeed: e.homeTeamSeed,
      awayTeamSeed: e.awayTeamSeed,
      homeTeamRedCards: e.homeTeamRedCards,
      awayTeamRedCards: e.awayTeamRedCards,
      homeTeamAdditionalInfo: e.homeTeamAdditionalInfo,
      awayTeamAdditionalInfo: e.awayTeamAdditionalInfo,
      gameHasScores: e.gameHasScores,
      homeTeamScoreLabel: e.homeTeamScoreLabel,
      awayTeamScoreLabel: e.awayTeamScoreLabel,
      homeTeamSubScore: e.homeTeamSubScore,
      awayTeamSubScore: e.awayTeamSubScore,
      periodScores: e.periodScores,
      statisticsServerTeamNumber: e.statisticsServerTeamNumber,
      sportIco: e.sportIco,
      homeTeamIds: e.homeTeamIds,
      homeTeamLogo: e.homeTeamLogo,
      homeTeamLogos: e.homeTeamLogos,
      homeTeamCountryIco: e.homeTeamCountryIco,
      awayTeamIds: e.awayTeamIds,
      awayTeamLogo: e.awayTeamLogo,
      awayTeamLogos: e.awayTeamLogos,
      awayTeamCountryIco: e.awayTeamCountryIco,
    };
  }),
  _s = N({
    name: "UiSportsEventGameTeams",
    components: {
      UiTeamScores: Ro,
      UiTeamScoreName: Fo,
      UiGameScores: Po,
      UiTeamIcons: jo,
      UiFoulGameCard: Ho,
    },
    props: {
      hasDetailedScore: { type: Boolean },
      isOpenGameScore: { type: Boolean },
    },
    emits: ["toggleGameScore"],
    setup(e) {
      $_$();
      const o = n(() => ({
          "ui-sports-event-game-teams-details__header--is-toggled":
            e.isOpenGameScore,
        })),
        r = (E) => {
          E.style.height = E.scrollHeight + "px";
        },
        i = (E) => {
          E.style.height = "";
        },
        {
          theme: m,
          homeTeamName: _,
          awayTeamName: p,
          homeTeamSeed: c,
          awayTeamSeed: S,
          homeTeamRedCards: T,
          awayTeamRedCards: d,
          awayTeamAdditionalInfo: b,
          gameHasScores: C,
          homeTeamScoreLabel: U,
          awayTeamScoreLabel: B,
          homeTeamSubScore: L,
          awayTeamSubScore: $,
          periodScores: M,
          statisticsServerTeamNumber: V,
          sportIco: D,
          homeTeamIds: j,
          homeTeamLogos: x,
          homeTeamCountryIco: q,
          awayTeamIds: J,
          awayTeamLogos: ee,
          awayTeamCountryIco: oe,
        } = vs(),
        se = n(() => $_$() && !s(p)),
        te = n(() => {
          $_$();
          var E, z;
          return {
            firstOpponentScore: (E = s(L)) != null ? E : "",
            secondOpponentScore: (z = s($)) != null ? z : "",
          };
        }),
        ae = n(
          () =>
            $_$() &&
            s(M)
              .slice(e.hasDetailedScore ? 0 : -4)
              .map(
                ([E, z]) =>
                  new Bo({ firstTeamScoreLabel: E, secondTeamScoreLabel: z })
              )
        ),
        { isCyberPage: H } = Wo(),
        ne = be(327),
        re = n(() => $_$() && ne && !s(H));
      return {
        uiSportsEventGameTeamsDetailsHeaderClasses: o,
        startTransition: r,
        endTransition: i,
        sizeType: P,
        theme: m,
        homeTeamName: _,
        awayTeamName: p,
        homeTeamSeed: c,
        awayTeamSeed: S,
        homeTeamRedCards: T,
        awayTeamRedCards: d,
        isSinglePlayerEvent: se,
        awayTeamAdditionalInfo: b,
        gameHasScores: C,
        homeTeamScoreLabel: U,
        awayTeamScoreLabel: B,
        statisticsSubScore: te,
        periods: ae,
        statisticsServerTeamNumber: V,
        sportIco: D,
        homeTeamIds: j,
        homeTeamLogos: x,
        homeTeamCountryIco: q,
        awayTeamIds: J,
        awayTeamLogos: ee,
        awayTeamCountryIco: oe,
        shouldShowTeamIcons: re,
        themeType: Z,
      };
    },
  }),
  Ts = { key: 0, class: "ui-sports-event-game-teams__info" },
  Ss = { class: "ui-sports-event-game-teams-details" },
  hs = { class: "ui-sports-event-game-teams-details__body" };
function ys(e, o, r, i, m, _) {
  $_$();
  const p = v("UiTeamIcons"),
    c = v("UiCaption"),
    S = v("UiFoulGameCard"),
    T = v("UiTeamScoreName"),
    d = v("UiGameScores"),
    b = v("UiAngleV2"),
    C = v("UiTeamScores");
  return (
    u(),
    f(
      C,
      {
        size: e.sizeType.s,
        theme: e.theme,
        class: "ui-sports-event-game-teams",
      },
      So(
        {
          teams: I(
            () =>
              $_$() && [
                y(
                  T,
                  { canWrap: e.isSinglePlayerEvent },
                  {
                    default: I(
                      () =>
                        $_$() && [
                          e.shouldShowTeamIcons
                            ? (u(),
                              f(
                                p,
                                {
                                  key: 0,
                                  images: e.homeTeamLogos,
                                  opponentsCount: e.homeTeamIds.length,
                                  countryIco: e.homeTeamCountryIco,
                                  theme: e.themeType.gray30,
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
                            : g("", !0),
                          y(
                            c,
                            { dir: "auto" },
                            {
                              default: I(
                                () =>
                                  $_$() && [
                                    O(
                                      G(e.homeTeamName) +
                                        " " +
                                        G(e.homeTeamSeed),
                                      1
                                    ),
                                  ]
                              ),
                              _: 1,
                            }
                          ),
                          e.homeTeamRedCards
                            ? (u(),
                              f(
                                S,
                                {
                                  key: 1,
                                  cardType: "red",
                                  count: e.homeTeamRedCards,
                                },
                                null,
                                8,
                                ["count"]
                              ))
                            : g("", !0),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["canWrap"]
                ),
                e.isSinglePlayerEvent
                  ? g("", !0)
                  : (u(),
                    f(
                      T,
                      { key: 0 },
                      {
                        default: I(
                          () =>
                            $_$() && [
                              e.shouldShowTeamIcons
                                ? (u(),
                                  f(
                                    p,
                                    {
                                      key: 0,
                                      images: e.awayTeamLogos,
                                      opponentsCount: e.awayTeamIds.length,
                                      countryIco: e.awayTeamCountryIco,
                                      theme: e.themeType.gray30,
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
                                : g("", !0),
                              y(
                                c,
                                { dir: "auto" },
                                {
                                  default: I(
                                    () =>
                                      $_$() && [
                                        O(
                                          G(e.awayTeamName) +
                                            " " +
                                            G(e.awayTeamSeed) +
                                            " ",
                                          1
                                        ),
                                        e.awayTeamAdditionalInfo
                                          ? (u(),
                                            w(
                                              "span",
                                              Ts,
                                              G(e.awayTeamAdditionalInfo),
                                              1
                                            ))
                                          : g("", !0),
                                      ]
                                  ),
                                  _: 1,
                                }
                              ),
                              e.awayTeamRedCards
                                ? (u(),
                                  f(
                                    S,
                                    {
                                      key: 1,
                                      cardType: "red",
                                      count: e.awayTeamRedCards,
                                    },
                                    null,
                                    8,
                                    ["count"]
                                  ))
                                : g("", !0),
                            ]
                        ),
                        _: 1,
                      }
                    )),
              ]
          ),
          _: 2,
        },
        [
          e.gameHasScores
            ? {
                name: "scores",
                fn: I(
                  () =>
                    $_$() && [
                      y(
                        d,
                        {
                          homeTeamScoreLabel: e.homeTeamScoreLabel,
                          awayTeamScoreLabel: e.awayTeamScoreLabel,
                          subScore: e.statisticsSubScore,
                          periodScores: e.periods,
                          isSinglePlayerEvent: e.isSinglePlayerEvent,
                          feed: e.statisticsServerTeamNumber,
                          inningIco: e.sportIco,
                          size: e.sizeType.s,
                          theme: e.theme,
                          hasDetailedScore: e.hasDetailedScore,
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
                          "theme",
                          "hasDetailedScore",
                        ]
                      ),
                    ]
                ),
                key: "0",
              }
            : void 0,
          e.hasDetailedScore
            ? {
                name: "details",
                fn: I(
                  () =>
                    $_$() && [
                      le("div", Ss, [
                        e.gameHasScores
                          ? (u(),
                            w(
                              "button",
                              {
                                key: 0,
                                onClick:
                                  o[0] ||
                                  (o[0] = R(
                                    (U) =>
                                      e.$emit(
                                        "toggleGameScore",
                                        !e.isOpenGameScore
                                      ),
                                    ["stop", "prevent"]
                                  )),
                                type: "button",
                                class: Q([
                                  "ui-sports-event-game-teams-details__header",
                                  e.uiSportsEventGameTeamsDetailsHeaderClasses,
                                ]),
                              },
                              [
                                y(
                                  c,
                                  { size: e.sizeType.xs },
                                  {
                                    default: I(
                                      () =>
                                        $_$() && [
                                          O(G(e.$T("betting_more_score")), 1),
                                        ]
                                    ),
                                    _: 1,
                                  },
                                  8,
                                  ["size"]
                                ),
                                y(b, {
                                  class:
                                    "ui-sports-event-game-teams-details__ico",
                                }),
                              ],
                              2
                            ))
                          : g("", !0),
                        y(
                          ho,
                          {
                            onEnter: e.startTransition,
                            onAfterEnter: e.endTransition,
                            onBeforeLeave: e.startTransition,
                            onAfterLeave: e.endTransition,
                            name: "ui-sports-event-game-teams-details",
                          },
                          {
                            default: I(
                              () =>
                                $_$() && [
                                  Y(
                                    le(
                                      "div",
                                      hs,
                                      [
                                        y(
                                          d,
                                          {
                                            homeTeamScoreLabel:
                                              e.homeTeamScoreLabel,
                                            awayTeamScoreLabel:
                                              e.awayTeamScoreLabel,
                                            subScore: e.statisticsSubScore,
                                            periodScores: e.periods,
                                            isSinglePlayerEvent:
                                              e.isSinglePlayerEvent,
                                            feed: e.statisticsServerTeamNumber,
                                            size: e.sizeType.s,
                                            theme: e.theme,
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
                                            "size",
                                            "theme",
                                          ]
                                        ),
                                      ],
                                      512
                                    ),
                                    [[yo, e.isOpenGameScore]]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          [
                            "onEnter",
                            "onAfterEnter",
                            "onBeforeLeave",
                            "onAfterLeave",
                          ]
                        ),
                      ]),
                    ]
                ),
                key: "1",
              }
            : void 0,
        ]
      ),
      1032,
      ["size", "theme"]
    )
  );
}
const gs = A(_s, [
    ["render", ys],
    ["__scopeId", "data-v-c06a8276"],
  ]),
  { provide: fs, inject: bs } = F((e) => {
    const o = es(e),
      r = ms(e),
      i = ps(e);
    return {
      ...o,
      ...r,
      ...i,
      gameBetsType: e.gameBetsType,
      gameInfoLabel: e.gameInfoLabel,
      showChamp: e.showChamp,
      showGameInfo: e.showGameInfo,
      isCheckingVAR: e.isCheckingVAR,
    };
  }),
  Is = N({
    name: "UiSportsEventGame_F",
    components: {
      UiSportsEventGameChamp: ts,
      UiSportsEventGameControls: ds,
      UiSportsEventGameTeams: gs,
      GameCardVarEvent: Ko,
    },
    props: {
      hasDetailedScore: { type: Boolean },
      isOpenGameScore: { type: Boolean },
    },
    emits: ["toggleGameScore"],
    setup() {
      $_$();
      const {
        showChamp: e,
        gameInfoLabel: o,
        showGameInfo: r,
        gameBetsType: i,
        isCheckingVAR: m,
      } = bs();
      return {
        sizeType: P,
        showChamp: e,
        gameInfoLabel: o,
        showGameInfo: r,
        gameBetsType: i,
        isCheckingVAR: m,
      };
    },
  }),
  Cs = { class: "ui-sports-event-game" },
  ws = { key: 0, class: "ui-sports-event-game__header" },
  Es = { key: 3, class: "ui-sports-event-game__info" },
  ks = { class: "ui-sports-event-game__label" };
function Gs(e, o, r, i, m, _) {
  $_$();
  const p = v("UiSportsEventGameChamp"),
    c = v("UiSportsEventGameControls"),
    S = v("UiCaption"),
    T = v("UiSportsEventGameTeams"),
    d = v("GameCardVarEvent"),
    b = ue("tooltip");
  return (
    u(),
    w("div", Cs, [
      e.showChamp
        ? (u(),
          w("div", ws, [
            y(p, { class: "ui-sports-event-game__champ" }),
            y(c, { class: "ui-sports-event-game__controls" }),
          ]))
        : g("", !0),
      e.gameBetsType
        ? (u(),
          f(
            S,
            { key: 1, size: e.sizeType.xxs, noWrap: "" },
            {
              default: I(
                () =>
                  $_$() && [
                    O(G(e.$T("betting_bets_on")) + " " + G(e.gameBetsType), 1),
                  ]
              ),
              _: 1,
            },
            8,
            ["size"]
          ))
        : g("", !0),
      e.hasDetailedScore
        ? g("", !0)
        : (u(), f(T, { key: 2, class: "ui-sports-event-game__teams" })),
      e.showGameInfo && e.gameInfoLabel
        ? Y(
            (u(),
            w("span", Es, [
              e.isCheckingVAR
                ? (u(), f(d, { key: 0, class: "ui-sports-event-game__var" }))
                : g("", !0),
              le("span", ks, G(e.gameInfoLabel), 1),
            ])),
            [[b, e.gameInfoLabel]]
          )
        : g("", !0),
      e.hasDetailedScore
        ? (u(),
          f(
            T,
            {
              key: 4,
              onToggleGameScore:
                o[0] || (o[0] = (C) => e.$emit("toggleGameScore", C)),
              hasDetailedScore: "",
              isOpenGameScore: e.isOpenGameScore,
              class: "ui-sports-event-game__teams",
            },
            null,
            8,
            ["isOpenGameScore"]
          ))
        : g("", !0),
    ])
  );
}
const Us = A(Is, [
    ["render", Gs],
    ["__scopeId", "data-v-f4598b5c"],
  ]),
  { provide: Bs, inject: Ls } = F((e) => {
    $_$();
    var o, r;
    return {
      markets: (o = e.markets) != null ? o : [],
      marketTheme: (r = e.marketTheme) != null ? r : Z.gray,
      couponBetIds: e.couponBetIds,
      addMarketToCoupon: e.addMarketToCoupon,
    };
  }),
  Ns = N({
    name: "UiSportsEventMarkets_F",
    setup() {
      $_$();
      const {
        markets: e,
        marketTheme: o,
        couponBetIds: r,
        addMarketToCoupon: i,
      } = Ls();
      return {
        sizeType: P,
        marketTheme: o,
        markets: e,
        couponBetIds: r,
        addMarketToCoupon: i,
      };
    },
  }),
  As = { key: 0, class: "ui-sports-event-markets" };
function $s(e, o, r, i, m, _) {
  $_$();
  const p = v("UiMarket");
  return e.markets && e.markets.length
    ? (u(),
      w("div", As, [
        (u(!0),
        w(
          go,
          null,
          fo(
            e.markets,
            (c) =>
              $_$() &&
              (u(),
              f(
                p,
                de(
                  {
                    key: c.typeId,
                    onClick: R(
                      (S) => e.addMarketToCoupon(c),
                      ["stop", "prevent"]
                    ),
                    ref_for: !0,
                  },
                  e.$attrs,
                  {
                    text: c.title,
                    coefByView: c.coefByView,
                    isActive: e.couponBetIds.includes(c.id),
                    isLocked: c.isLocked,
                    theme: e.marketTheme,
                    size: e.sizeType.xs,
                    class: "ui-sports-event-markets__item",
                  }
                ),
                null,
                16,
                [
                  "onClick",
                  "text",
                  "coefByView",
                  "isActive",
                  "isLocked",
                  "theme",
                  "size",
                ]
              ))
          ),
          128
        )),
      ]))
    : g("", !0);
}
const Ms = A(Ns, [
    ["render", $s],
    ["__scopeId", "data-v-c98d1bf9"],
  ]),
  Vs = ["aria-label"],
  Ds = N({
    __name: "UiSportsEventToggleSubGames",
    props: { isExpanded: { type: Boolean } },
    emits: ["click"],
    setup(e) {
      return (o, r) => {
        $_$();
        const i = v("UiAngleV2"),
          m = ue("tooltip");
        return Y(
          (u(),
          w(
            "button",
            {
              onClick: r[0] || (r[0] = (_) => o.$emit("click")),
              type: "button",
              "aria-label": o.$T("betting_show_sub_games"),
              class: Q([
                "ui-sports-event-toggle-sub-games",
                {
                  "ui-sports-event-toggle-sub-games--is-toggled": o.isExpanded,
                },
              ]),
            },
            [y(i, { class: "ui-sports-event-toggle-sub-games__arrow" })],
            10,
            Vs
          )),
          [[m, o.$T("betting_show_sub_games")]]
        );
      };
    },
  }),
  zs = A(Ds, [["__scopeId", "data-v-a42780b3"]]),
  { provide: Os, inject: Ps } = F((e) => {
    $_$();
    var o, r, i, m, _;
    const p = fs(e),
      c = Bs(e);
    return {
      ...p,
      ...c,
      to: e.to,
      gameLink: e.gameLink,
      linkTitle: e.linkTitle,
      theme: (o = e.theme) != null ? o : Z.gray100,
      showSubGames: (r = e.showSubGames) != null ? r : !1,
      isActive: (i = e.isActive) != null ? i : !1,
      fakeLink: (m = e.fakeLink) != null ? m : !1,
      isExpanded: (_ = e.isExpanded) != null ? _ : !1,
    };
  }),
  Rs = N({
    name: "UiSportsEvent_F",
    components: {
      UiSportsEventGame: Us,
      UiSportsEventMarkets: Ms,
      UiSportsEventToggleSubGames: zs,
    },
    props: {
      hasDetailedScore: { type: Boolean, default: !1 },
      fakeLink: { type: Boolean, default: !1 },
    },
    emits: ["click", "expandButtonClick"],
    setup() {
      $_$();
      const e = bo(!1),
        {
          to: o,
          theme: r,
          isActive: i,
          showSubGames: m,
          isExpanded: _,
          linkTitle: p,
        } = Ps(),
        c = (d) => {
          e.value = d;
        },
        { handleMouseover: S, handleMouseleave: T } = qo(Jo);
      return {
        to: o,
        theme: r,
        isActive: i,
        showSubGames: m,
        isExpanded: _,
        isOpenGameScore: e,
        linkTitle: p,
        handleMouseover: S,
        handleMouseleave: T,
        toggleGameScore: c,
      };
    },
  });
function Fs(e, o, r, i, m, _) {
  $_$();
  const p = v("UiSportsEventGame"),
    c = v("UiButtonBase"),
    S = v("UiSportsEventToggleSubGames"),
    T = v("UiSportsEventMarkets");
  return (
    u(),
    w(
      "div",
      {
        onMouseover:
          o[2] ||
          (o[2] = (...d) => e.handleMouseover && e.handleMouseover(...d)),
        onMouseleave:
          o[3] ||
          (o[3] = (...d) => e.handleMouseleave && e.handleMouseleave(...d)),
        class: Q([
          "ui-sports-event",
          [
            `ui-sports-event--theme-${e.theme}`,
            { "ui-sports-event--is-active": e.isActive },
          ],
        ]),
      },
      [
        y(
          c,
          de(e.$attrs, {
            to: e.to,
            fake: e.fakeLink,
            title: e.linkTitle,
            class: "ui-sports-event__link",
          }),
          {
            default: I(
              () =>
                $_$() && [
                  y(
                    p,
                    {
                      onClick:
                        o[0] ||
                        (o[0] = R((d) => e.$emit("click", d), ["prevent"])),
                      onToggleGameScore: e.toggleGameScore,
                      isOpenGameScore: e.isOpenGameScore,
                      hasDetailedScore: e.hasDetailedScore,
                    },
                    null,
                    8,
                    ["onToggleGameScore", "isOpenGameScore", "hasDetailedScore"]
                  ),
                ]
            ),
            _: 1,
          },
          16,
          ["to", "fake", "title"]
        ),
        e.showSubGames
          ? (u(),
            f(
              S,
              {
                key: 0,
                onClick: o[1] || (o[1] = (d) => e.$emit("expandButtonClick")),
                isExpanded: e.isExpanded,
                class: "ui-sports-event__toggle-sub-games",
              },
              null,
              8,
              ["isExpanded"]
            ))
          : g("", !0),
        y(T),
      ],
      34
    )
  );
}
const ct = A(Rs, [
    ["render", Fs],
    ["__scopeId", "data-v-8727f49c"],
  ]),
  js = ({ champName: e, firstTeamName: o, secondTeamName: r }) => {
    const i = e ? `${e}. ` : "",
      m = r ? ` - ${r}` : "";
    return `${i}${o != null ? o : ""}${m}`.replace(/ +/g, " ");
  },
  Hs = ({
    to: e,
    game: o,
    markets: r,
    theme: i,
    gameLink: m,
    champName: _,
    isCyber: p,
    showSubGames: c,
    isActive: S,
    isExpanded: T,
    isTranslationDisabled: d,
    marketTheme: b,
    showChamp: C = !0,
    showGameInfo: U = !0,
    source: B,
    onFavoriteAdd: L,
    onMarketToCouponAdd: $,
    onVideoEnable: M,
    bettingType: V,
  }) => {
    $_$();
    const D = Io(),
      j = Co(),
      x = wo(),
      q = Eo(),
      J = Lo(),
      { checkGameVideoAvailable: ee } = Qo(),
      { routePageType: oe, routePageSubType: se } = No(),
      te = n(() => $_$() && s(oe)),
      ae = n(() => $_$() && s(se)),
      H = n(() => $_$() && s(o).id),
      {
        videoByGame: ne,
        selectMedia: re,
        unselectMedia: E,
        clearMedia: z,
        isVideoActive: Ce,
      } = Zo(H),
      { isFavorite: pe, toggleFavorite: we } = xo({
        gameId: H,
        bettingType: V,
      }),
      Ee = n(() => {
        $_$();
        var t, a;
        const l = s(o);
        return js({
          champName: s(_),
          firstTeamName: (t = l.homeTeam) == null ? void 0 : t.name,
          secondTeamName: (a = l.awayTeam) == null ? void 0 : a.name,
        });
      }),
      ke = n(() => {
        $_$();
        var t;
        return (t = s(o).name) != null ? t : "";
      }),
      { liveTab: Ge } = Yo(),
      ve = n(() => ($_$() && s(Ge) === 1) || s(V) === ko.LINE),
      Ue = n(() => $_$() && !s(ve)),
      Be = Go(() => $_$() && s(o).gameStatus === 64),
      { gameInfoLabel: Le } = Xo(o, {
        isShowDateTimeLabel: ve,
        shouldForceUpdateTime: Ue,
      }),
      Ne = n(() => $_$() && s(o).sportId),
      Ae = n(() => $_$() && String(s(o).sportId)),
      $e = n(() => $_$() && s(o).videoId),
      Me = n(() => $_$() && ee(s(o))),
      Ve = n(() => {
        $_$();
        var t, a, l, h, k;
        return (a = (t = s(o).stats) == null ? void 0 : t.alternativeNames) !=
          null && a.firstTeamName
          ? (h = (l = s(o).stats) == null ? void 0 : l.alternativeNames) == null
            ? void 0
            : h.firstTeamName
          : (k = s(o).homeTeam) == null
          ? void 0
          : k.name;
      }),
      De = n(() => {
        $_$();
        var t, a, l, h, k;
        return (a = (t = s(o).stats) == null ? void 0 : t.alternativeNames) !=
          null && a.secondTeamName
          ? (h = (l = s(o).stats) == null ? void 0 : l.alternativeNames) == null
            ? void 0
            : h.secondTeamName
          : (k = s(o).awayTeam) == null
          ? void 0
          : k.name;
      }),
      ze = n(() => {
        $_$();
        const { matchInfo: t } = s(o),
          a = t == null ? void 0 : t.firstOpponentSeed;
        return a ? `(${a})` : "";
      }),
      Oe = n(() => {
        $_$();
        const { matchInfo: t } = s(o),
          a = t == null ? void 0 : t.secondOpponentSeed;
        return a ? `(${a})` : "";
      }),
      Pe = n(() => {
        $_$();
        var t, a, l;
        return (l =
          (a = (t = s(o).stats) == null ? void 0 : t.homeTeam) == null
            ? void 0
            : a.foul) == null
          ? void 0
          : l.redCardsCount;
      }),
      Re = n(() => {
        $_$();
        var t, a, l;
        return (l =
          (a = (t = s(o).stats) == null ? void 0 : t.awayTeam) == null
            ? void 0
            : a.foul) == null
          ? void 0
          : l.redCardsCount;
      }),
      Fe = n(() => {
        $_$();
        var t, a;
        return (a = (t = s(o).stats) == null ? void 0 : t.homeTeam) == null
          ? void 0
          : a.additionalInfo;
      }),
      je = n(() => {
        $_$();
        var t, a;
        return (a = (t = s(o).stats) == null ? void 0 : t.awayTeam) == null
          ? void 0
          : a.additionalInfo;
      }),
      He = n(() => $_$() && s(o).hasScores),
      We = n(() => {
        $_$();
        var t, a;
        return (a = (t = s(o).stats) == null ? void 0 : t.homeTeam) == null
          ? void 0
          : a.scoreLabel;
      }),
      Ke = n(() => {
        $_$();
        var t, a;
        return (a = (t = s(o).stats) == null ? void 0 : t.awayTeam) == null
          ? void 0
          : a.scoreLabel;
      }),
      qe = n(() => {
        $_$();
        var t, a;
        return (a = (t = s(o).stats) == null ? void 0 : t.homeTeam) == null
          ? void 0
          : a.subScore;
      }),
      Je = n(() => {
        $_$();
        var t, a;
        return (a = (t = s(o).stats) == null ? void 0 : t.awayTeam) == null
          ? void 0
          : a.subScore;
      }),
      Xe = n(() => {
        $_$();
        var t, a, l, h, k, W;
        const K =
            (l =
              (a = (t = s(o).stats) == null ? void 0 : t.homeTeam) == null
                ? void 0
                : a.periodScores) != null
              ? l
              : [],
          X =
            (W =
              (k = (h = s(o).stats) == null ? void 0 : h.awayTeam) == null
                ? void 0
                : k.periodScores) != null
              ? W
              : [];
        return K.map((ie, Te) => {
          var Se, he;
          return [
            (Se = K[Te]) == null ? void 0 : Se.score,
            (he = X[Te]) == null ? void 0 : he.score,
          ];
        });
      }),
      Ye = n(() => {
        $_$();
        var t;
        return (t = s(o).stats) == null ? void 0 : t.servingTeamNumber;
      }),
      Qe = n(() => {
        $_$();
        var t;
        return ((t = s(o).homeTeam) == null ? void 0 : t.ids) || [];
      }),
      Ze = n(() => {
        $_$();
        var t;
        return (t = s(o).homeTeam) == null ? void 0 : t.logo;
      }),
      xe = n(() => {
        $_$();
        var t;
        return ((t = s(o).homeTeam) == null ? void 0 : t.logos) || [];
      }),
      eo = n(() => {
        $_$();
        var t;
        return ge((t = s(o).homeTeam) == null ? void 0 : t.countryId);
      }),
      oo = n(() => {
        $_$();
        var t;
        return ((t = s(o).awayTeam) == null ? void 0 : t.ids) || [];
      }),
      so = n(() => {
        $_$();
        var t;
        return (t = s(o).awayTeam) == null ? void 0 : t.logo;
      }),
      to = n(() => {
        $_$();
        var t;
        return ((t = s(o).awayTeam) == null ? void 0 : t.logos) || [];
      }),
      ao = n(() => {
        $_$();
        var t;
        return ge((t = s(o).awayTeam) == null ? void 0 : t.countryId);
      }),
      _e = n(() => J.couponBetIds),
      no = n(() => {
        $_$();
        var t;
        return ((t = s(r)) != null ? t : []).filter((l) => l.typeId in Ao);
      }),
      ro = n(() => {
        $_$();
        var t;
        return ((t = s(r)) != null ? t : []).filter((l) => l.typeId in $o);
      }),
      io = n(() => {
        $_$();
        var t;
        const a = (t = s(r)) != null ? t : [],
          l = Object.values(Mo(a, ({ groupId: h }) => h));
        return l.length ? Uo(l[0], ({ typeId: h }) => h) : [];
      }),
      mo = n(() => {
        $_$();
        const t = s(no),
          a = s(ro);
        return q.isAsianView ? s(io) : t.length ? t : a.length ? a : [];
      }),
      lo = n(
        () =>
          $_$() &&
          s(mo).map((t) => {
            var a, l;
            const h = Vo[t.typeId];
            return {
              ...t,
              title: q.isAsianView
                ? String(
                    (l = (a = t.paramView) != null ? a : t.param) != null
                      ? l
                      : D(h)
                  )
                : D(h),
            };
          })
      ),
      co = n(() => $_$() && s(o).champTag),
      uo = () => {
        $_$();
        re({
          type: Do.VIDEO,
          target: me.SIDE,
          gameLink: s(m),
          videoId: s($e),
          gameId: s(H),
          sportId: s(Ne),
        });
      };
    Os({
      to: e,
      theme: i,
      gameLink: m,
      showSubGames: c,
      isActive: S,
      isExpanded: T,
      isTranslationDisabled: d,
      showChamp: C,
      showGameInfo: U,
      marketTheme: b,
      isVideoActive: Ce,
      isCheckingVAR: Be,
      linkTitle: Ee,
      gameBetsType: ke,
      gameInfoLabel: Le,
      sportIco: Ae,
      champName: _,
      champTag: co,
      isVideoAvailable: Me,
      homeTeamName: Ve,
      awayTeamName: De,
      homeTeamSeed: ze,
      awayTeamSeed: Oe,
      homeTeamRedCards: Pe,
      awayTeamRedCards: Re,
      homeTeamAdditionalInfo: Fe,
      awayTeamAdditionalInfo: je,
      gameHasScores: He,
      homeTeamScoreLabel: We,
      awayTeamScoreLabel: Ke,
      homeTeamSubScore: qe,
      awayTeamSubScore: Je,
      periodScores: Xe,
      statisticsServerTeamNumber: Ye,
      homeTeamIds: Qe,
      homeTeamLogo: Ze,
      homeTeamLogos: xe,
      homeTeamCountryIco: eo,
      awayTeamIds: oo,
      awayTeamLogo: so,
      awayTeamLogos: to,
      awayTeamCountryIco: ao,
      markets: lo,
      couponBetIds: _e,
      isFavorite: pe,
      toggleFavorite: () => {
        $_$();
        we(), L == null || L(s(pe));
      },
      onVideoClick: () => {
        $_$();
        if (s(d)) return;
        const t = s(ne),
          a = !ye(t) || ![me.NONE, me.SIDE].includes(t.target);
        a
          ? (s(p) && s(j).fullPath !== s(m) && (z(), x.push(s(m))), uo())
          : E(t),
          M == null || M(a);
      },
      addMarketToCoupon: async (t) => {
        $_$();
        let a, l;
        ye(t == null ? void 0 : t.coefByView) &&
          (([a, l] = ce(() => {
            $_$();
            var h, k, W, K, X, ie;
            return J.couponAddBet({
              game: {
                firstOpponentNameEng:
                  (h = s(o).homeTeam) == null ? void 0 : h.nameEng,
                secondOpponentNameEng:
                  (k = s(o).awayTeam) == null ? void 0 : k.nameEng,
                firstOpponentFullScore: Number(
                  (K = (W = s(o).stats) == null ? void 0 : W.homeTeam) == null
                    ? void 0
                    : K.fullScore
                ),
                secondOpponentFullScore: Number(
                  (ie = (X = s(o).stats) == null ? void 0 : X.awayTeam) == null
                    ? void 0
                    : ie.fullScore
                ),
                number: s(o).number,
                champId: s(o).champId,
                sportNameEng: s(o).sportNameEng,
                champNameEng: s(o).champNameEng,
                menuSectionNameForUrl: s(o).menuSectionNameForUrl,
                mainGameId: s(o).mainGameId,
                id: s(o).id,
                name: s(o).name,
                isSubGame: s(o).isSubGame,
              },
              market: t,
              pageType: s(te),
              pageSubType: s(ae),
              source: s(B),
            });
          })),
          await a,
          l(),
          $ == null || $(t.id && s(_e).includes(t.id)));
      },
    });
  },
  ut = ({
    game: e,
    markets: o,
    theme: r,
    to: i,
    gameLink: m,
    champName: _,
    isCyber: p,
    showSubGames: c,
    isActive: S,
    isExpanded: T,
    isTranslationDisabled: d,
    showChamp: b,
    source: C,
    marketTheme: U,
    shouldMarkFavoriteTeam: B,
    onFavoriteAdd: L,
    onMarketToCouponAdd: $,
    onVideoEnable: M,
    bettingType: V,
  }) => {
    $_$();
    const D = n(() => $_$() && zo(s(e))),
      j = n(() => ({
        game: D,
        champName: _,
        markets: o,
        theme: r,
        to: i,
        gameLink: m,
        isCyber: p,
        showSubGames: c,
        isActive: S,
        isExpanded: T,
        isTranslationDisabled: d,
        showChamp: b,
        source: C,
        marketTheme: U,
        shouldMarkFavoriteTeam: B,
        bettingType: V,
        onFavoriteAdd: L,
        onMarketToCouponAdd: $,
        onVideoEnable: M,
      }));
    Hs(s(j));
  };
export {
  ct as UiSportsEvent,
  Hs as useUiSportsEventProviderByGame,
  ut as useUiSportsEventProviderByOldGame,
};
