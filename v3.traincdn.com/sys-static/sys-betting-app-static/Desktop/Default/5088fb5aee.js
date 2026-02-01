import $_$ from "./$_$.js";
$_$();
var Ce = Object.defineProperty;
var Ue = (a, t, n) =>
  t in a
    ? Ce(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (a[t] = n);
var Y = (a, t, n) => Ue(a, typeof t != "symbol" ? t + "" : t, n);
import {
  runtimeCore_esmBundler_defineComponent as O,
  reactivity_esmBundler_ref as q,
  runtimeCore_esmBundler_watch as we,
  execAsync as oe,
  runtimeCore_esmBundler_resolveComponent as g,
  runtimeCore_esmBundler_createElementBlock as S,
  runtimeCore_esmBundler_createCommentVNode as L,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_openBlock as s,
  shared_esmBundler_normalizeClass as K,
  shared_esmBundler_normalizeStyle as Ge,
  runtimeCore_esmBundler_createElementVNode as $,
  runtimeCore_esmBundler_createVNode as T,
  iconName as Le,
  index_useDateTimeService as ne,
  index_getConfigs as me,
  runtimeCore_esmBundler_computed as r,
  runtimeCore_esmBundler_resolveDirective as J,
  runtimeCore_esmBundler_createBlock as y,
  size_constants_sizeType as M,
  runtimeCore_esmBundler_withCtx as d,
  runtimeCore_esmBundler_Fragment as V,
  runtimeCore_esmBundler_renderList as F,
  runtimeCore_esmBundler_createTextVNode as E,
  shared_esmBundler_toDisplayString as I,
  runtimeCore_esmBundler_withDirectives as W,
  index_useT as x,
  reactivity_esmBundler_isRef as ue,
  index_useLogger as _e,
  reactivity_esmBundler_shallowRef as X,
  stopElements as pe,
  alignType as Me,
  index_getConfig as Be,
  runtimeCore_esmBundler_onMounted as be,
  runtimeCore_esmBundler_nextTick as $e,
  LeavingPage_LeavingPage as Z,
  runtimeCore_esmBundler_onUnmounted as Ee,
  clientOnly_default as Ne,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as he,
  BettingPageType as De,
  useGlobalStore as Ae,
  reactivity_esmBundler_toRef as Oe,
  whenever as Pe,
  runtimeCore_esmBundler_renderSlot as ze,
  runtimeCore_esmBundler_onBeforeUnmount as Re,
  clamp as Ve,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { UiTeamScoreName as Fe } from "./f1156f93a8.js";
import { UiTeamIcons as We } from "./5f6b076bc4.js";
import { UiFoulGameCard as qe } from "./6a64c59e39.js";
import { withAsyncContext as He } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  loadUiGameGoalConfigDesktop as je,
  _export_sfc as P,
  requiredString as ie,
  defineProvider as Ye,
  useRtlInfo as Ke,
  useLeavingPage as re,
  useBettingRouteWithLang as Je,
  getIsSinglePlayerEvent as Qe,
  GROUP_IDS_WITH_ADDITIONAL_EVENTS as ce,
  useCouponStore as Xe,
  useToggleSelected as Ze,
} from "./entry-50afb6f36c.js";
import { _sfc_main as fe } from "./762b07d264.js";
import {
  shouldShowTeamStats as xe,
  shouldShowIndividualStats as ea,
} from "./11286bfc75.js";
import { useDashboardAnalytics as ee } from "./88fe5c8d91.js";
import {
  convertPlayersToViewModels as aa,
  convertShortPlayersInfoToViewModels as ta,
  useDashboardStore as H,
} from "./f2a7591ae9.js";
import { useTeamStats as sa } from "./a77daa8d5b.js";
import { useIcoTeamInfo as oa } from "./58a21526ee.js";
import {
  useBettingStateInjector as le,
  isLineByType as na,
  SPORTS_WITHOUT_PERIOD_SCORES as la,
} from "./9de70556bb.js";
import { useGameInfo as ia } from "./4e4f01046c.js";
import { useBettingPageData as ra } from "./4a993370c6.js";
import { GameCardVarEvent as ca } from "./4b4dfdeaaf.js";
import { DASHBOARD_CONFIG_COMMON as da } from "./9e41c420a0.js";
const te = (a) => {
    if (a instanceof HTMLElement) return a;
    if ((a == null ? void 0 : a.$el) instanceof HTMLElement) return a.$el;
  },
  ma = { class: "ui-game-goal__container" },
  ua = O({
    __name: "UiGameGoal",
    props: { score: {} },
    async setup(a) {
      $_$();
      let t, n, o, l;
      const c = a,
        i = q(!1);
      we(
        () => c.score,
        (h, k, f) => {
          i.value = !0;
          const m = setTimeout(() => {
            i.value = !1;
          }, 1e3 * 2);
          f(() => clearTimeout(m));
        }
      );
      const u =
          (([o, l] = He(() => je())),
          (o = (([t, n] = oe(() => o)), (t = await t), n(), t)),
          l(),
          o),
        { config: _, styles: p } = u();
      return (h, k) => {
        $_$();
        const f = g("UiIco");
        return e(i)
          ? (s(),
            S(
              "div",
              {
                key: 0,
                style: Ge(e(p)),
                class: K([
                  { "ui-game-goal--bordered": e(_).uiGameGoalBordered },
                  "ui-game-goal",
                ]),
              },
              [
                $("div", ma, [
                  $(
                    "span",
                    {
                      class: K([
                        `ui-game-goal__text--size-${e(_).uiGameGoalTextSize}`,
                        "ui-game-goal__text",
                      ]),
                    },
                    " GOAL ",
                    2
                  ),
                  T(
                    f,
                    {
                      size: e(_).uiGameGoalIconSize,
                      ico: e(Le).FOOTBALL_BALL,
                      class: "ui-game-goal__ico",
                    },
                    null,
                    8,
                    ["size", "ico"]
                  ),
                ]),
              ],
              6
            ))
          : L("", !0);
      };
    },
  }),
  _a = P(ua, [["__scopeId", "data-v-7478c7cc"]]),
  z = {
    RECENT_GAMES: "last_games",
    PREVIOUS_MEETINGS: "previous_games",
    ABSENT_PLAYERS: "absent_players",
  };
class se {
  constructor({
    value: t = ie("value"),
    name: n = ie("name"),
    title: o = n,
    isHidden: l = !1,
  }) {
    Y(this, "value");
    Y(this, "name");
    Y(this, "title");
    Y(this, "isHidden");
    (this.value = t), (this.name = n), (this.title = o), (this.isHidden = l);
  }
}
const pa = ({
    t: a,
    shouldShowRecentGames: t = !0,
    shouldShowPreviousMeetings: n = !0,
    shouldShowAbsentPlayers: o = !0,
  }) =>
    [
      new se({
        value: z.RECENT_GAMES,
        name: a("game_team_stats_recent_games"),
        isHidden: !t,
      }),
      new se({
        name: a("game_team_stats_previous_meetings"),
        value: z.PREVIOUS_MEETINGS,
        isHidden: !n,
      }),
      new se({
        name: a("game_team_stats_absent_players"),
        value: z.ABSENT_PLAYERS,
        isHidden: !o,
      }),
    ].filter((l) => !l.isHidden),
  { provide: Yt, inject: R } = Ye((a) => a, da),
  ba = { class: "team-stats-matches-table" },
  ha = { class: "team-stats-table-label team-stats-matches-table-champ" },
  fa = {
    class:
      "team-stats-matches-table__player team-stats-matches-table-player team-stats-matches-table-player--align-end",
  },
  ga = {
    class: "team-stats-matches-table__player team-stats-matches-table-player",
  },
  Ta = O({
    __name: "TeamStatsMatchesTable",
    props: { matches: { default: () => [] }, placeholder: { default: "" } },
    setup(a) {
      $_$();
      const t = a,
        {
          dashboardTeamStatsUiTableTheme: n,
          dashboardTeamStatsUiTableScrollTheme: o,
          dashboardTeamStatsUiMessageBlockTheme: l,
          dashboardTeamStatsMatchesTeamIcons: c,
        } = R(),
        i = ne(),
        [u, _] = me(327, 328),
        p = t.matches.map((w) => ({
          ...w,
          date: i.getFullDateFormatted(w.unixTimestamp),
        })),
        h = r(() => p.length > 0),
        k = r(() => (p.length > 2 ? "bottom" : "right")),
        f = r(() => (p.length > 2 ? "bottom" : "left")),
        m = u && c;
      return (w, C) => {
        $_$();
        const v = g("UiCaption"),
          G = g("UiTableCell"),
          N = g("UiIcoTeam"),
          B = g("UiTableRow"),
          A = g("UiTable"),
          D = g("UiMessageBlockV2"),
          U = J("tooltip");
        return (
          s(),
          S("div", ba, [
            e(h)
              ? (s(),
                y(
                  A,
                  {
                    key: 0,
                    size: e(M).s,
                    alternate: "",
                    theme: e(n),
                    scrollTheme: e(o),
                  },
                  {
                    default: d(
                      () =>
                        $_$() && [
                          (s(!0),
                          S(
                            V,
                            null,
                            F(
                              e(p),
                              (b) =>
                                $_$() &&
                                (s(),
                                y(
                                  B,
                                  {
                                    key: `team-stats-matches-table-row-${b.id}`,
                                  },
                                  {
                                    default: d(
                                      () =>
                                        $_$() && [
                                          T(
                                            G,
                                            {
                                              class:
                                                "team-stats-matches-table__champ",
                                            },
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    $("span", ha, [
                                                      T(
                                                        fe,
                                                        {
                                                          champ: b.champ,
                                                          isDefaultIcon: !e(_),
                                                          class:
                                                            "team-stats-table-label__ico",
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "champ",
                                                          "isDefaultIcon",
                                                        ]
                                                      ),
                                                      T(
                                                        v,
                                                        {
                                                          size: e(M).xs,
                                                          class:
                                                            "team-stats-table-label__caption",
                                                        },
                                                        {
                                                          default: d(
                                                            () =>
                                                              $_$() && [
                                                                E(I(b.date), 1),
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
                                            1024
                                          ),
                                          T(
                                            G,
                                            null,
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    $("div", fa, [
                                                      W(
                                                        (s(),
                                                        y(
                                                          v,
                                                          {
                                                            "aria-label":
                                                              b.firstOpponentName,
                                                            size: e(M).xs,
                                                            class:
                                                              "team-stats-matches-table-player__name",
                                                          },
                                                          {
                                                            default: d(
                                                              () =>
                                                                $_$() && [
                                                                  E(
                                                                    I(
                                                                      b.firstOpponentName
                                                                    ),
                                                                    1
                                                                  ),
                                                                ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["aria-label", "size"]
                                                        )),
                                                        [
                                                          [
                                                            U,
                                                            {
                                                              content:
                                                                b.firstOpponentName,
                                                              placement: e(k),
                                                            },
                                                          ],
                                                        ]
                                                      ),
                                                      e(m)
                                                        ? (s(),
                                                          y(
                                                            N,
                                                            {
                                                              key: 0,
                                                              label:
                                                                b.firstOpponentName,
                                                              image:
                                                                b.firstOpponentLogoPath,
                                                              countryIco:
                                                                b.champ
                                                                  .countryId,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              "label",
                                                              "image",
                                                              "countryIco",
                                                            ]
                                                          ))
                                                        : L("", !0),
                                                    ]),
                                                  ]
                                              ),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                          T(
                                            G,
                                            {
                                              class:
                                                "team-stats-matches-table__scores",
                                            },
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    T(
                                                      v,
                                                      {
                                                        size: e(M).xs,
                                                        noWrap: "",
                                                      },
                                                      {
                                                        default: d(
                                                          () =>
                                                            $_$() && [
                                                              E(
                                                                I(
                                                                  `${b.firstTeamScore} : ${b.secondTeamScore}`
                                                                ),
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
                                            1024
                                          ),
                                          T(
                                            G,
                                            null,
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    $("div", ga, [
                                                      e(m)
                                                        ? (s(),
                                                          y(
                                                            N,
                                                            {
                                                              key: 0,
                                                              label:
                                                                b.secondOpponentName,
                                                              image:
                                                                b.secondOpponentLogoPath,
                                                              countryIco:
                                                                b.champ
                                                                  .countryId,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              "label",
                                                              "image",
                                                              "countryIco",
                                                            ]
                                                          ))
                                                        : L("", !0),
                                                      W(
                                                        (s(),
                                                        y(
                                                          v,
                                                          {
                                                            "aria-label":
                                                              b.secondOpponentName,
                                                            size: e(M).xs,
                                                            class:
                                                              "team-stats-matches-table-player__name",
                                                          },
                                                          {
                                                            default: d(
                                                              () =>
                                                                $_$() && [
                                                                  E(
                                                                    I(
                                                                      b.secondOpponentName
                                                                    ),
                                                                    1
                                                                  ),
                                                                ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["aria-label", "size"]
                                                        )),
                                                        [
                                                          [
                                                            U,
                                                            {
                                                              content:
                                                                b.secondOpponentName,
                                                              placement: e(f),
                                                            },
                                                          ],
                                                        ]
                                                      ),
                                                    ]),
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
                                  1024
                                ))
                            ),
                            128
                          )),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["size", "theme", "scrollTheme"]
                ))
              : (s(),
                y(
                  D,
                  {
                    key: 1,
                    size: e(M).s,
                    theme: e(l),
                    class: "team-stats-matches-table__placeholder",
                  },
                  { default: d(() => $_$() && [E(I(w.placeholder), 1)]), _: 1 },
                  8,
                  ["size", "theme"]
                )),
          ])
        );
      };
    },
  }),
  de = P(Ta, [["__scopeId", "data-v-a6387cd7"]]),
  ya = { class: "team-stats-players-table" },
  va = { class: "team-stats-table-label" },
  Sa = { class: "team-stats-table-label" },
  ka = O({
    __name: "TeamStatsPlayersTable",
    props: { players: {}, placeholder: { default: "" } },
    setup(a) {
      $_$();
      const t = a,
        {
          dashboardTeamStatsUiTableTheme: n,
          dashboardTeamStatsUiMessageBlockTheme: o,
        } = R(),
        l = r(() => (t.players.length > 2 ? "bottom" : "right")),
        c = r(() => (t.players.length > 2 ? "bottom" : "left"));
      return (i, u) => {
        $_$();
        const _ = g("UiIcoCountry"),
          p = g("UiCaption"),
          h = g("UiTableCell"),
          k = g("UiIco"),
          f = g("UiTableRow"),
          m = g("UiTable"),
          w = g("UiMessageBlockV2"),
          C = J("tooltip");
        return (
          s(),
          S("div", ya, [
            i.players.length > 0
              ? (s(),
                y(
                  m,
                  { key: 0, size: e(M).s, alternate: "", theme: e(n) },
                  {
                    default: d(
                      () =>
                        $_$() && [
                          (s(!0),
                          S(
                            V,
                            null,
                            F(
                              i.players,
                              (v) =>
                                $_$() &&
                                (s(),
                                y(
                                  f,
                                  {
                                    key: `team-stats-players-table-row-${v.id}`,
                                  },
                                  {
                                    default: d(
                                      () =>
                                        $_$() && [
                                          T(
                                            h,
                                            {
                                              class:
                                                "team-stats-players-table__status",
                                            },
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    $("span", va, [
                                                      T(
                                                        _,
                                                        {
                                                          ico: v.countryId,
                                                          class:
                                                            "team-stats-table-label__ico",
                                                        },
                                                        null,
                                                        8,
                                                        ["ico"]
                                                      ),
                                                      W(
                                                        (s(),
                                                        y(
                                                          p,
                                                          {
                                                            "aria-label":
                                                              v.name,
                                                            size: e(M).xs,
                                                          },
                                                          {
                                                            default: d(
                                                              () =>
                                                                $_$() && [
                                                                  E(
                                                                    I(v.name),
                                                                    1
                                                                  ),
                                                                ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["aria-label", "size"]
                                                        )),
                                                        [
                                                          [
                                                            C,
                                                            {
                                                              content: v.name,
                                                              placement: e(l),
                                                            },
                                                          ],
                                                        ]
                                                      ),
                                                    ]),
                                                  ]
                                              ),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                          T(
                                            h,
                                            {
                                              class:
                                                "team-stats-players-table__status",
                                            },
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    $("span", Sa, [
                                                      T(
                                                        k,
                                                        {
                                                          ico: v.absenceReasonIcon,
                                                          class:
                                                            "team-stats-table-label__ico",
                                                        },
                                                        null,
                                                        8,
                                                        ["ico"]
                                                      ),
                                                      W(
                                                        (s(),
                                                        y(
                                                          p,
                                                          {
                                                            "aria-label":
                                                              v.absenceReasonDescription,
                                                            size: e(M).xs,
                                                          },
                                                          {
                                                            default: d(
                                                              () =>
                                                                $_$() && [
                                                                  E(
                                                                    I(
                                                                      v.absenceReasonDescription
                                                                    ),
                                                                    1
                                                                  ),
                                                                ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["aria-label", "size"]
                                                        )),
                                                        [
                                                          [
                                                            C,
                                                            {
                                                              content:
                                                                v.absenceReasonDescription,
                                                              placement: e(c),
                                                            },
                                                          ],
                                                        ]
                                                      ),
                                                    ]),
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
                                  1024
                                ))
                            ),
                            128
                          )),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["size", "theme"]
                ))
              : (s(),
                y(
                  w,
                  {
                    key: 1,
                    size: e(M).s,
                    theme: e(o),
                    class: "team-stats-players-table__placeholder",
                  },
                  { default: d(() => $_$() && [E(I(i.placeholder), 1)]), _: 1 },
                  8,
                  ["size", "theme"]
                )),
          ])
        );
      };
    },
  }),
  Ia = P(ka, [["__scopeId", "data-v-f211ccf7"]]),
  Ca = { class: "team-stats-table-loader" },
  Ua = O({
    __name: "TeamStatsTableLoader",
    setup(a) {
      const {
        dashboardTeamStatsUiSkeletonTheme: t,
        dashboardTeamStatsUiSkeletonSecondTheme: n,
      } = R();
      return (o, l) => {
        $_$();
        const c = g("UiSkeleton");
        return (
          s(),
          S("div", Ca, [
            (s(),
            S(
              V,
              null,
              F(
                3,
                (i) =>
                  $_$() &&
                  $("div", { key: `team-stats-table-loader-row-${i}` }, [
                    T(
                      c,
                      {
                        theme: e(t),
                        class: "team-stats-table-loader__skeleton",
                      },
                      null,
                      8,
                      ["theme"]
                    ),
                    T(
                      c,
                      {
                        theme: e(n),
                        class: "team-stats-table-loader__skeleton",
                      },
                      null,
                      8,
                      ["theme"]
                    ),
                  ])
              ),
              64
            )),
          ])
        );
      };
    },
  }),
  ge = P(Ua, [["__scopeId", "data-v-7db2b1d0"]]),
  wa = { class: "team-stats" },
  Ga = { class: "team-stats__tab team-stats-tab" },
  La = { class: "team-stats-tab__caption" },
  Ma = O({
    __name: "TeamStats",
    props: {
      recentGames: { type: Array, required: !0 },
      previousMeetings: { type: Array, required: !0 },
      absentPlayers: { type: Array, required: !0 },
      loading: { type: Boolean },
      isGameView: { type: Boolean },
    },
    emits: ["tabClick"],
    setup(a, { emit: t }) {
      $_$();
      const n = a,
        o = t,
        { dashboardTeamStatsUiTabsTheme: l } = R(),
        c = x(),
        i = q(z.RECENT_GAMES),
        u = r(() => pa({ t: c, shouldShowAbsentPlayers: !n.isGameView })),
        _ = r(() => i.value === z.RECENT_GAMES),
        p = r(() => i.value === z.PREVIOUS_MEETINGS),
        h = r(() => i.value === z.ABSENT_PLAYERS),
        k = (f) => {
          o("tabClick", f);
        };
      return (f, m) => {
        $_$();
        const w = g("UiTabs");
        return (
          s(),
          S("div", wa, [
            T(
              w,
              {
                modelValue: e(i),
                "onUpdate:modelValue": [
                  m[0] ||
                    (m[0] = (C) => ($_$() && ue(i) ? (i.value = C) : null)),
                  k,
                ],
                options: e(u),
                name: "team-stats-tab",
                value: e(i),
                size: e(M).s,
                equal: "",
                indent: "",
                theme: e(l),
                class: "team-stats__tabs",
              },
              {
                default: d(
                  ({ item: C }) =>
                    $_$() && [$("div", Ga, [$("div", La, I(C.name), 1)])]
                ),
                _: 1,
              },
              8,
              ["modelValue", "options", "value", "size", "theme"]
            ),
            a.loading
              ? (s(), y(ge, { key: 0 }))
              : e(_)
              ? (s(),
                y(
                  de,
                  {
                    key: e(z).RECENT_GAMES,
                    placeholder: f.$T(
                      "betting_games_search_result_empty_title"
                    ),
                    matches: a.recentGames,
                    class: "team-stats__table",
                  },
                  null,
                  8,
                  ["placeholder", "matches"]
                ))
              : e(p)
              ? (s(),
                y(
                  de,
                  {
                    key: e(z).PREVIOUS_MEETINGS,
                    placeholder: f.$T(
                      "betting_games_search_result_empty_title"
                    ),
                    matches: a.previousMeetings,
                    class: "team-stats__table",
                  },
                  null,
                  8,
                  ["placeholder", "matches"]
                ))
              : L("", !0),
            e(h)
              ? (s(),
                y(
                  Ia,
                  {
                    key: 3,
                    placeholder: f.$T("game_team_stats_full_teams_present"),
                    players: a.absentPlayers,
                    class: "team-stats__table",
                  },
                  null,
                  8,
                  ["placeholder", "players"]
                ))
              : L("", !0),
          ])
        );
      };
    },
  }),
  Ba = P(Ma, [["__scopeId", "data-v-df1caca9"]]),
  $a = { class: "individual-stats-matches-table team-stats-matches-table" },
  Ea = { class: "team-stats-table-label team-stats-matches-table-champ" },
  Na = {
    class:
      "team-stats-matches-table__player team-stats-matches-table-player team-stats-matches-table-player--align-end",
  },
  Da = {
    class: "team-stats-matches-table__player team-stats-matches-table-player",
  },
  Aa = O({
    __name: "IndividualStatsMatchesTable",
    props: { matches: { default: () => [] }, placeholder: { default: "" } },
    setup(a) {
      $_$();
      const t = a,
        {
          dashboardTeamStatsUiTableTheme: n,
          dashboardTeamStatsUiMessageBlockTheme: o,
          dashboardTeamStatsMatchesTeamIcons: l,
        } = R(),
        c = ne(),
        [i, u] = me(328, 327),
        _ = t.matches.map((m) => ({
          ...m,
          date: c.getFullDateFormatted(m.unixTimestamp),
        })),
        p = r(() => _.length > 0),
        h = r(() => (_.length > 2 ? "bottom" : "right")),
        k = r(() => (_.length > 2 ? "bottom" : "left")),
        f = r(() => u && l);
      return (m, w) => {
        $_$();
        const C = g("UiCaption"),
          v = g("UiTableCell"),
          G = g("UiIcoTeam"),
          N = g("UiTableRow"),
          B = g("UiTable"),
          A = g("UiMessageBlockV2"),
          D = J("tooltip");
        return (
          s(),
          S("div", $a, [
            e(p)
              ? (s(),
                y(
                  B,
                  { key: 0, size: e(M).s, alternate: "", theme: e(n) },
                  {
                    default: d(
                      () =>
                        $_$() && [
                          (s(!0),
                          S(
                            V,
                            null,
                            F(
                              e(_),
                              (U) =>
                                $_$() &&
                                (s(),
                                y(
                                  N,
                                  {
                                    key: `team-stats-matches-table-row-${U.id}`,
                                  },
                                  {
                                    default: d(
                                      () =>
                                        $_$() && [
                                          T(
                                            v,
                                            {
                                              class:
                                                "team-stats-matches-table__champ",
                                            },
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    $("span", Ea, [
                                                      T(
                                                        fe,
                                                        {
                                                          champ: U.champ,
                                                          isDefaultIcon: !e(i),
                                                          class:
                                                            "team-stats-table-label__ico",
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "champ",
                                                          "isDefaultIcon",
                                                        ]
                                                      ),
                                                      T(
                                                        C,
                                                        { size: e(M).xs },
                                                        {
                                                          default: d(
                                                            () =>
                                                              $_$() && [
                                                                E(I(U.date), 1),
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
                                            1024
                                          ),
                                          T(
                                            v,
                                            null,
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    $("div", Na, [
                                                      W(
                                                        (s(),
                                                        y(
                                                          C,
                                                          {
                                                            "aria-label":
                                                              U.firstOpponentName,
                                                            size: e(M).xs,
                                                            class:
                                                              "team-stats-matches-table-player__name",
                                                          },
                                                          {
                                                            default: d(
                                                              () =>
                                                                $_$() && [
                                                                  E(
                                                                    I(
                                                                      U.firstOpponentName
                                                                    ),
                                                                    1
                                                                  ),
                                                                ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["aria-label", "size"]
                                                        )),
                                                        [
                                                          [
                                                            D,
                                                            {
                                                              content:
                                                                U.firstOpponentName,
                                                              position: e(h),
                                                            },
                                                          ],
                                                        ]
                                                      ),
                                                      e(f)
                                                        ? (s(),
                                                          y(
                                                            G,
                                                            {
                                                              key: 0,
                                                              label:
                                                                U.firstOpponentName,
                                                              image:
                                                                U.firstOpponentLogoPath,
                                                              countryIco:
                                                                U.champ
                                                                  .countryId,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              "label",
                                                              "image",
                                                              "countryIco",
                                                            ]
                                                          ))
                                                        : L("", !0),
                                                    ]),
                                                  ]
                                              ),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                          T(
                                            v,
                                            {
                                              class:
                                                "team-stats-matches-table__scores",
                                            },
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    T(
                                                      C,
                                                      {
                                                        size: e(M).xs,
                                                        noWrap: "",
                                                      },
                                                      {
                                                        default: d(
                                                          () =>
                                                            $_$() && [
                                                              E(
                                                                I(
                                                                  `${U.firstTeamScore} : ${U.secondTeamScore}`
                                                                ),
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
                                            1024
                                          ),
                                          T(
                                            v,
                                            null,
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    $("div", Da, [
                                                      e(f)
                                                        ? (s(),
                                                          y(
                                                            G,
                                                            {
                                                              key: 0,
                                                              label:
                                                                U.secondOpponentName,
                                                              image:
                                                                U.secondOpponentLogoPath,
                                                              countryIco:
                                                                U.champ
                                                                  .countryId,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              "label",
                                                              "image",
                                                              "countryIco",
                                                            ]
                                                          ))
                                                        : L("", !0),
                                                      W(
                                                        (s(),
                                                        y(
                                                          C,
                                                          {
                                                            "aria-label":
                                                              U.secondOpponentName,
                                                            size: e(M).xs,
                                                            class:
                                                              "team-stats-matches-table-player__name",
                                                          },
                                                          {
                                                            default: d(
                                                              () =>
                                                                $_$() && [
                                                                  E(
                                                                    I(
                                                                      U.secondOpponentName
                                                                    ),
                                                                    1
                                                                  ),
                                                                ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["aria-label", "size"]
                                                        )),
                                                        [
                                                          [
                                                            D,
                                                            {
                                                              content:
                                                                U.secondOpponentName,
                                                              position: e(k),
                                                            },
                                                          ],
                                                        ]
                                                      ),
                                                    ]),
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
                                  1024
                                ))
                            ),
                            128
                          )),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["size", "theme"]
                ))
              : (s(),
                y(
                  A,
                  {
                    key: 1,
                    size: e(M).s,
                    theme: e(o),
                    class: "team-stats-matches-table__placeholder",
                  },
                  { default: d(() => $_$() && [E(I(m.placeholder), 1)]), _: 1 },
                  8,
                  ["size", "theme"]
                )),
          ])
        );
      };
    },
  }),
  Oa = P(Aa, [["__scopeId", "data-v-c3fdd20c"]]),
  Pa = { class: "individual-stats-short-player-info-table" },
  za = { key: 0 },
  Ra = { class: "team-stats-table-title" },
  Va = { class: "team-stats-table-label" },
  Fa = { class: "team-stats-table-label" },
  Wa = O({
    __name: "IndividualStatsShortPlayerInfoTable",
    props: { playerInfo: { default: () => [] }, placeholder: { default: "" } },
    setup(a) {
      $_$();
      const t = a,
        {
          dashboardTeamStatsUiTableTheme: n,
          dashboardTeamStatsUiMessageBlockTheme: o,
        } = R(),
        l = r(() => t.playerInfo.length > 0);
      return (c, i) => {
        $_$();
        const u = g("UiCaption"),
          _ = g("UiTableCell"),
          p = g("UiTableRow"),
          h = g("UiTable"),
          k = g("UiMessageBlockV2");
        return (
          s(),
          S("div", Pa, [
            e(l)
              ? (s(),
                S("div", za, [
                  (s(!0),
                  S(
                    V,
                    null,
                    F(
                      c.playerInfo,
                      (f) =>
                        $_$() &&
                        (s(),
                        y(
                          h,
                          {
                            key: f.title,
                            size: e(M).s,
                            alternate: "",
                            theme: e(n),
                          },
                          {
                            default: d(
                              () =>
                                $_$() && [
                                  T(
                                    p,
                                    null,
                                    {
                                      default: d(
                                        () =>
                                          $_$() && [
                                            T(
                                              _,
                                              {
                                                class:
                                                  "individual-stats-short-player-info-table__status",
                                              },
                                              {
                                                default: d(
                                                  () =>
                                                    $_$() && [
                                                      $("span", Ra, [
                                                        T(
                                                          u,
                                                          { size: e(M).xs },
                                                          {
                                                            default: d(
                                                              () =>
                                                                $_$() && [
                                                                  E(
                                                                    I(f.title),
                                                                    1
                                                                  ),
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
                                              1024
                                            ),
                                          ]
                                      ),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                  (s(!0),
                                  S(
                                    V,
                                    null,
                                    F(
                                      f.info,
                                      ({ key: m, value: w }) =>
                                        $_$() &&
                                        (s(),
                                        y(
                                          p,
                                          { key: m },
                                          {
                                            default: d(
                                              () =>
                                                $_$() && [
                                                  w
                                                    ? (s(),
                                                      S(
                                                        V,
                                                        { key: 0 },
                                                        [
                                                          T(
                                                            _,
                                                            {
                                                              class:
                                                                "individual-stats-short-player-info-table__status",
                                                            },
                                                            {
                                                              default: d(
                                                                () =>
                                                                  $_$() && [
                                                                    $(
                                                                      "span",
                                                                      Va,
                                                                      [
                                                                        T(
                                                                          u,
                                                                          {
                                                                            size: e(
                                                                              M
                                                                            )
                                                                              .xs,
                                                                          },
                                                                          {
                                                                            default:
                                                                              d(
                                                                                () =>
                                                                                  $_$() && [
                                                                                    E(
                                                                                      I(
                                                                                        m
                                                                                      ),
                                                                                      1
                                                                                    ),
                                                                                  ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1032,
                                                                          [
                                                                            "size",
                                                                          ]
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                              ),
                                                              _: 2,
                                                            },
                                                            1024
                                                          ),
                                                          T(
                                                            _,
                                                            {
                                                              class:
                                                                "individual-stats-short-player-info-table__status",
                                                            },
                                                            {
                                                              default: d(
                                                                () =>
                                                                  $_$() && [
                                                                    $(
                                                                      "span",
                                                                      Fa,
                                                                      [
                                                                        T(
                                                                          u,
                                                                          {
                                                                            size: e(
                                                                              M
                                                                            )
                                                                              .xs,
                                                                          },
                                                                          {
                                                                            default:
                                                                              d(
                                                                                () =>
                                                                                  $_$() && [
                                                                                    E(
                                                                                      I(
                                                                                        w
                                                                                      ),
                                                                                      1
                                                                                    ),
                                                                                  ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1032,
                                                                          [
                                                                            "size",
                                                                          ]
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                              ),
                                                              _: 2,
                                                            },
                                                            1024
                                                          ),
                                                        ],
                                                        64
                                                      ))
                                                    : L("", !0),
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
                            _: 2,
                          },
                          1032,
                          ["size", "theme"]
                        ))
                    ),
                    128
                  )),
                ]))
              : (s(),
                y(
                  k,
                  {
                    key: 1,
                    size: e(M).s,
                    theme: e(o),
                    class:
                      "individual-stats-short-player-info-table__placeholder",
                  },
                  { default: d(() => $_$() && [E(I(c.placeholder), 1)]), _: 1 },
                  8,
                  ["size", "theme"]
                )),
          ])
        );
      };
    },
  }),
  qa = P(Wa, [["__scopeId", "data-v-5723a02c"]]),
  Ha = () => {
    $_$();
    const a = x(),
      t = q("individual_recent_games"),
      n = r(() => [
        {
          name: a("game_team_stats_recent_games"),
          value: "individual_recent_games",
        },
        {
          name: a("game_individual_stats_short_info"),
          value: "individual_player_info",
        },
      ]),
      o = r(() => t.value === "individual_recent_games"),
      l = r(() => t.value === "individual_player_info");
    return {
      individualStatsTabs: n,
      individualStatsCurrentTab: t,
      isRecentGamesTabActive: o,
      isShortPlayersTabActive: l,
    };
  },
  ja = { key: 0, class: "individual-stats team-stats" },
  Ya = { class: "team-stats__tab team-stats-tab" },
  Ka = { class: "team-stats-tab__caption" },
  Ja = O({
    __name: "IndividualStats",
    props: {
      recentGames: { type: Array, required: !0 },
      shortPlayerInfo: { type: Array, required: !0 },
      loading: { type: Boolean },
    },
    emits: ["tabClick"],
    setup(a) {
      $_$();
      const t = a,
        {
          dashboardTeamStatsUiTabsTheme: n,
          dashboardTeamStatsUiTableScrollTheme: o,
        } = R(),
        {
          individualStatsTabs: l,
          individualStatsCurrentTab: c,
          isRecentGamesTabActive: i,
          isShortPlayersTabActive: u,
        } = Ha(),
        _ = r(() => t.shortPlayerInfo.length > 0 || t.recentGames.length > 0);
      return (p, h) => {
        $_$();
        const k = g("UiTabs"),
          f = g("UiScrollbar");
        return e(_)
          ? (s(),
            S("div", ja, [
              T(
                k,
                {
                  modelValue: e(c),
                  "onUpdate:modelValue": [
                    h[0] ||
                      (h[0] = (m) => ($_$() && ue(c) ? (c.value = m) : null)),
                    h[1] || (h[1] = (m) => p.$emit("tabClick", m)),
                  ],
                  options: e(l),
                  name: "team-stats-tab",
                  value: e(c),
                  size: e(M).s,
                  equal: "",
                  indent: "",
                  theme: e(n),
                  class: "team-stats__tabs",
                },
                {
                  default: d(
                    ({ item: m }) =>
                      $_$() && [$("div", Ya, [$("div", Ka, I(m.name), 1)])]
                  ),
                  _: 1,
                },
                8,
                ["modelValue", "options", "value", "size", "theme"]
              ),
              T(
                f,
                { theme: e(o), class: "team-stats__scrollbar" },
                {
                  default: d(
                    () =>
                      $_$() && [
                        a.loading
                          ? (s(), y(ge, { key: 0 }))
                          : e(i)
                          ? (s(),
                            y(
                              Oa,
                              {
                                key: "individual_recent_games",
                                placeholder: p.$T(
                                  "betting_games_search_result_empty_title"
                                ),
                                matches: a.recentGames,
                                class: "team-stats__table",
                              },
                              null,
                              8,
                              ["placeholder", "matches"]
                            ))
                          : e(u)
                          ? (s(),
                            y(
                              qa,
                              {
                                key: 2,
                                placeholder: p.$T(
                                  "game_individual_stats_no_info"
                                ),
                                playerInfo: a.shortPlayerInfo,
                                class: "team-stats__table",
                              },
                              null,
                              8,
                              ["placeholder", "playerInfo"]
                            ))
                          : L("", !0),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["theme"]
              ),
            ]))
          : L("", !0);
      };
    },
  }),
  Qa = P(Ja, [["__scopeId", "data-v-822f4ccd"]]),
  Xa = ({ sportId: a, tabType: t, isLive: n, logger: o }) => {
    const { trackTeamStatsClick: l, trackTeamStatsTabClick: c } = ee();
    let i;
    switch (t) {
      case z.RECENT_GAMES:
        i = "Последние игры";
        break;
      case z.PREVIOUS_MEETINGS:
        i = "Предыдущие встречи";
        break;
      case z.ABSENT_PLAYERS:
        i = "Отсутствующие игроки";
        break;
      case "individual_player_info":
        i = "Клик на Краткие сведения (индивидуальные спорты)";
        break;
      case "individual_recent_games":
        i = "Клик на Последние игры (индивидуальные спорты)";
        break;
      default:
        o.error("trackTeamStatsTabClick error", `Unsupported tab type - ${t}`);
    }
    l({ sportId: a, isLive: n }), c({ tabName: i, isLive: n });
  },
  Za = O({
    __name: "DashboardGameTeamInfoDropdown",
    props: {
      game: {},
      trigger: {},
      isLive: { type: Boolean },
      isAwayTeam: { type: Boolean },
    },
    setup(a) {
      $_$();
      const t = a,
        n = x(),
        o = _e(),
        { isRtl: l } = Ke(),
        { trackTeamStatsShow: c } = ee(),
        { loadStats: i } = sa(),
        u = ne(),
        { dashboardUiDropdownTheme: _ } = R(),
        p = X([]),
        h = X([]),
        k = X([]),
        f = X([]),
        m = q(!0),
        w = r(() => !xe(t.game)),
        C = r(() => ea(t.game)),
        v = (B) =>
          Xa({
            sportId: t.game.sportId,
            isLive: t.isLive,
            tabType: B,
            logger: o,
          }),
        G = (B) => u.getFullDateFormatted(B),
        N = async () => {
          $_$();
          let B, A;
          const D =
            (([B, A] = oe(() =>
              i({
                gameId: t.game.id,
                statisticGameId: t.game.statisticGameId,
                isAwayTeam: t.isAwayTeam,
              })
            )),
            (B = await B),
            A(),
            B);
          (p.value = D.matchesSchedule.recentGames.slice(0, 5)),
            (h.value = D.matchesSchedule.previousMeetings),
            (k.value = aa(D.lineup.absentPlayers, n)),
            (f.value = ta(D.shortPlayerInfo, G, n)),
            c({ sportId: t.game.sportId, isLive: t.isLive }),
            (m.value = !1);
        };
      return (B, A) => {
        $_$();
        const D = g("UiDropdown");
        return (
          s(),
          y(
            D,
            {
              onOpen: N,
              align: e(Me).START,
              triggerElement: B.trigger,
              hoverableTimeout: 2e3,
              stopElementsStore: e(pe),
              isRtl: e(l),
              disabled: e(w),
              overlay: "",
              hoverable: "",
              triangle: "",
              theme: e(_),
              class: "dashboard-game-team-info-dropdown",
            },
            {
              customTrigger: d(
                () => ($_$() && A[0]) || (A[0] = [$("span", null, null, -1)])
              ),
              default: d(
                () =>
                  $_$() && [
                    e(C)
                      ? (s(),
                        y(
                          Qa,
                          {
                            key: 0,
                            onTabClick: v,
                            loading: e(m),
                            recentGames: e(p),
                            shortPlayerInfo: e(f),
                            class: "dashboard-game-team-info-dropdown__stats",
                          },
                          null,
                          8,
                          ["loading", "recentGames", "shortPlayerInfo"]
                        ))
                      : (s(),
                        y(
                          Ba,
                          {
                            key: 1,
                            onTabClick: v,
                            loading: e(m),
                            recentGames: e(p),
                            previousMeetings: e(h),
                            absentPlayers: e(k),
                            class: "dashboard-game-team-info-dropdown__stats",
                          },
                          null,
                          8,
                          [
                            "loading",
                            "recentGames",
                            "previousMeetings",
                            "absentPlayers",
                          ]
                        )),
                  ]
              ),
              _: 1,
            },
            8,
            [
              "align",
              "triggerElement",
              "stopElementsStore",
              "isRtl",
              "disabled",
              "theme",
            ]
          )
        );
      };
    },
  }),
  xa = P(Za, [["__scopeId", "data-v-cba6da3f"]]);
function et(a, t) {
  var n, o, l, c, i, u;
  return t
    ? (l =
        (o =
          (n = a.statistics) == null ? void 0 : n.secondTeamFoulStatistics) ==
        null
          ? void 0
          : o.redCardsCount) != null
      ? l
      : 0
    : (u =
        (i = (c = a.statistics) == null ? void 0 : c.firstTeamFoulStatistics) ==
        null
          ? void 0
          : i.redCardsCount) != null
    ? u
    : 0;
}
function at(a, t) {
  return t && [1, 2, 5].includes(a.sportId);
}
function tt(a, t) {
  var n, o, l, c, i, u;
  return t
    ? (l =
        (o = (n = a.statistics) == null ? void 0 : n.alternativeNames) == null
          ? void 0
          : o.secondTeamName) != null
      ? l
      : a.secondOpponentName
    : (u =
        (i = (c = a.statistics) == null ? void 0 : c.alternativeNames) == null
          ? void 0
          : i.firstTeamName) != null
    ? u
    : a.firstOpponentName;
}
function st(a, t) {
  return t ? a.secondOpponentScoreLabel : a.firstOpponentScoreLabel;
}
const ot = ({ game: a, isLive: t }) => {
    $_$();
    const n = r(() => $_$() && at(e(a), e(t))),
      o = q(!0),
      l = r(() => $_$() && e(o) && e(n));
    let c;
    const i = () => {
        (o.value = !1),
          (c = setTimeout(() => {
            o.value = !0;
          }, 5e3));
      },
      u = () => {
        o.value = !1;
      };
    return (
      be(async () => {
        $_$();
        let _, p;
        ([_, p] = oe(() => $_$() && $e())), await _, p();
        const h = re();
        h.on(Z.COME_BACK, i), h.on(Z.LEAVING, u);
      }),
      Ee(() => {
        $_$();
        const _ = re();
        clearTimeout(c), _.remove(Z.COME_BACK, i), _.remove(Z.LEAVING, u);
      }),
      l
    );
  },
  nt = O({
    name: "DashboardGameTeamInfo",
    components: {
      UiTeamScoreName: Fe,
      UiTeamIcons: We,
      UiFoulGameCard: qe,
      UiGameGoal: _a,
      DashboardGameTeamInfoDropdown: xa,
    },
    props: {
      gameId: { type: Number, required: !0 },
      isLive: { type: Boolean, required: !0 },
      canWrapScores: { type: Boolean },
      awayTeam: { type: Boolean },
    },
    setup(a) {
      $_$();
      const t = Be(327),
        { dashboardGetGame: n } = H(),
        o = r(() => n(a.gameId) || {}),
        l = r(() => $_$() && et(e(o), a.awayTeam)),
        c = ot({ game: o, isLive: r(() => a.isLive) }),
        i = r(() => {
          $_$();
          const { matchInfo: G } = e(o),
            N = a.awayTeam
              ? G == null
                ? void 0
                : G.secondOpponentSeed
              : G == null
              ? void 0
              : G.firstOpponentSeed;
          return N ? `(${N})` : "";
        }),
        u = r(() => $_$() && Object.keys(e(o)).length),
        _ = r(() => ($_$() && e(u) ? tt(e(o), a.awayTeam) : "")),
        p = r(() => ($_$() && e(u) ? st(e(o), a.awayTeam) : "")),
        h = q(),
        k = r(() => {
          $_$();
          var G;
          return (G = e(h)) == null ? void 0 : G.$el;
        }),
        {
          images: f,
          countryIco: m,
          opponentsCount: w,
        } = oa({ game: o, secondTeam: () => a.awayTeam }),
        C = r(() => $_$() && t && e(f) && e(w)),
        v = r(() =>
          $_$() && a.awayTeam
            ? e(o).awayTeamAdditionalInfo
            : e(o).homeTeamAdditionalInfo
        );
      return {
        game: o,
        trigger: h,
        triggerElement: k,
        images: f,
        countryIco: m,
        opponentsCount: w,
        redCardsCount: l,
        shouldShowGoal: c,
        teamName: _,
        seed: i,
        scoreLabel: p,
        teamAdditionalInfo: v,
        hasTeamIcons: C,
        sizeType: M,
      };
    },
  }),
  lt = { class: "dashboard-game-team-info" },
  it = { key: 0, class: "dashboard-game-team-info__additional" };
function rt(a, t, n, o, l, c) {
  $_$();
  const i = g("UiTeamIcons"),
    u = g("UiCaption"),
    _ = g("UiFoulGameCard"),
    p = g("UiGameGoal"),
    h = Ne,
    k = g("UiTeamScoreName"),
    f = g("DashboardGameTeamInfoDropdown");
  return (
    s(),
    S("div", lt, [
      T(
        k,
        { ref: "trigger", canWrap: a.canWrapScores },
        {
          default: d(
            () =>
              $_$() && [
                a.hasTeamIcons
                  ? (s(),
                    y(
                      i,
                      {
                        key: 0,
                        images: a.images,
                        opponentsCount: a.opponentsCount,
                        countryIco: a.countryIco,
                      },
                      null,
                      8,
                      ["images", "opponentsCount", "countryIco"]
                    ))
                  : L("", !0),
                T(
                  u,
                  {
                    size: a.sizeType.m,
                    class: "dashboard-game-team-info__name",
                    dir: "auto",
                  },
                  {
                    default: d(
                      () =>
                        $_$() && [
                          E(I(a.teamName) + " " + I(a.seed) + " ", 1),
                          a.teamAdditionalInfo
                            ? (s(), S("span", it, I(a.teamAdditionalInfo), 1))
                            : L("", !0),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["size"]
                ),
                T(h, null, {
                  default: d(
                    () =>
                      $_$() && [
                        a.redCardsCount
                          ? (s(),
                            y(
                              _,
                              {
                                key: 0,
                                cardType: "red",
                                count: a.redCardsCount,
                              },
                              null,
                              8,
                              ["count"]
                            ))
                          : L("", !0),
                        a.shouldShowGoal
                          ? (s(),
                            y(
                              p,
                              {
                                key: 1,
                                score: a.scoreLabel,
                                class: "dashboard-game-team-info__goal",
                              },
                              null,
                              8,
                              ["score"]
                            ))
                          : L("", !0),
                      ]
                  ),
                  _: 1,
                }),
              ]
          ),
          _: 1,
        },
        8,
        ["canWrap"]
      ),
      T(h, null, {
        default: d(
          () =>
            $_$() && [
              T(
                f,
                {
                  game: a.game,
                  isLive: a.isLive,
                  trigger: a.triggerElement,
                  isAwayTeam: a.awayTeam,
                },
                null,
                8,
                ["game", "isLive", "trigger", "isAwayTeam"]
              ),
            ]
        ),
        _: 1,
      }),
    ])
  );
}
const Kt = P(nt, [
    ["render", rt],
    ["__scopeId", "data-v-f07046e8"],
  ]),
  ct = (a) => {
    $_$();
    const {
        bettingType: t,
        dashboardTypeUpcomingEvents: n,
        dashboardOverrideBettingType: o,
      } = H(),
      { isTeamPage: l } = ra(),
      { pageType: c } = le(),
      { getBettingRouteUrl: i } = he(),
      { getBettingRouteWithLang: u } = Je(),
      _ = r(
        () =>
          $_$() &&
          i({
            section: e(t),
            menuSection: e(a).menuSectionNameForUrl,
            sport: e(a).sportNameForUrl,
            champ: e(a).champNameForUrl,
            game: e(a).gameNameForUrl,
          })
      ),
      p = r(() => ($_$() && na(e(t))) || e(n)),
      {
        firstTeamName: h,
        secondTeamName: k,
        infoList: f,
        gameDate: m,
        gameTime: w,
        firstOpponentScoreLabel: C,
        secondOpponentScoreLabel: v,
        currentPeriodLabel: G,
        firstTeamSeed: N,
        secondTeamSeed: B,
        isCheckingVAR: A,
        gameInfoTitle: D,
      } = ia(a, p),
      U = r(() => $_$() && Qe(e(a))),
      b = r(() => $_$() && !!(e(a).hasScores && !la.includes(e(a).sportId))),
      ae = r(() => $_$() && [e(h), e(k)].filter(Boolean).join(" - ")),
      Q = r(() => (($_$() && !e(b)) || e(U) ? "" : `[${e(C)}:${e(v)}]`)),
      Te = r(() => {
        $_$();
        var j;
        return (j = e(a).statistics) == null ? void 0 : j.subScore;
      }),
      ye = r(() => $_$() && e(a).numberOfMarkets),
      ve = r(() => ($_$() && e(a).periodScores) || []),
      Se = r(() => {
        $_$();
        var j;
        return (j = e(a).statistics) == null ? void 0 : j.serverTeamNumber;
      }),
      ke = r(() => $_$() && e(a).sportId),
      Ie = r(
        () =>
          $_$() &&
          u({
            section: e(o),
            menuSection: e(a).menuSectionNameForUrl || void 0,
            sport: e(a).sportNameForUrl,
            champ: e(a).champNameForUrl,
            game: e(a).gameNameForUrl,
            pageType: e(l) ? De.HOME : e(c),
          })
      );
    return {
      isLineGamesShowed: p,
      shouldShowScores: b,
      title: ae,
      firstTeamName: h,
      secondTeamName: k,
      firstTeamSeed: N,
      secondTeamSeed: B,
      isSinglePlayerEvent: U,
      infoList: f,
      score: Q,
      subScore: Te,
      gameUrl: _,
      gameDate: m,
      gameTime: w,
      firstOpponentScoreLabel: C,
      secondOpponentScoreLabel: v,
      currentPeriodLabel: G,
      numberOfMarkets: ye,
      periodScores: ve,
      serverTeamNumber: Se,
      sportId: ke,
      gameRouteParams: Ie,
      isCheckingVAR: A,
      gameInfoTitle: D,
    };
  },
  dt = O({
    name: "DashboardGameInfo",
    components: { GameCardVarEvent: ca },
    props: { gameId: { type: Number, required: !0 } },
    setup(a) {
      $_$();
      const t = Ae(),
        n = r(() => a.gameId && t.isShowGameIdEnabled),
        { dashboardGetGame: o } = H(),
        l = r(() => o(a.gameId)),
        {
          gameDate: c,
          gameTime: i,
          currentPeriodLabel: u,
          isCheckingVAR: _,
        } = ct(l),
        p = r(() => {
          $_$();
          var v;
          return (v = e(l).statistics) == null ? void 0 : v.extraTimeLabel;
        }),
        h = r(() => $_$() && e(l).additionalType),
        k = r(() => $_$() && e(l).additionalInfo),
        f = r(() => $_$() && e(l).type),
        m = r(() => {
          $_$();
          var v;
          return (v = e(l).matchInfo) == null ? void 0 : v.stage;
        }),
        w = r(() => {
          $_$();
          var v;
          return (
            e(c) ||
            e(i) ||
            ((v = e(l).statistics) == null ? void 0 : v.extraTimeLabel) ||
            e(u) ||
            e(l).additionalType ||
            e(f) ||
            e(l).additionalInfo
          );
        }),
        { dashboardGameBlockClr: C } = R();
      return {
        gameDate: c,
        gameTime: i,
        gameExtraTimeLabel: p,
        gameAdditionalType: h,
        gameAdditionalInfo: k,
        gameType: f,
        gameMatchInfoStage: m,
        currentPeriodLabel: u,
        shouldShowDashboardGameInfo: w,
        hasGameId: n,
        isCheckingVAR: _,
        dashboardGameBlockClr: C,
      };
    },
  }),
  mt = { key: 0, class: "dashboard-game-info" },
  ut = { key: 0, class: "dashboard-game-info__item dashboard-game-info__date" },
  _t = { key: 1, class: "dashboard-game-info__item dashboard-game-info__time" },
  pt = {
    key: 2,
    class: "dashboard-game-info__item dashboard-game-info__extra-time",
  },
  bt = {
    key: 3,
    class: "dashboard-game-info__item dashboard-game-info__period",
  },
  ht = {
    key: 4,
    class: "dashboard-game-info__item dashboard-game-info__additional-type",
  },
  ft = { key: 5, class: "dashboard-game-info__item dashboard-game-info__type" },
  gt = { key: 6, class: "dashboard-game-info__item dashboard-game-info__id" },
  Tt = {
    key: 7,
    class: "dashboard-game-info__item dashboard-game-info__additional-info",
  },
  yt = {
    key: 8,
    class: "dashboard-game-info__item dashboard-game-info__match-info-stage",
  };
function vt(a, t, n, o, l, c) {
  $_$();
  const i = g("GameCardVarEvent"),
    u = g("UiCaption"),
    _ = J("tooltip");
  return a.shouldShowDashboardGameInfo
    ? (s(),
      S("span", mt, [
        a.isCheckingVAR ? (s(), y(i, { key: 0 })) : L("", !0),
        T(
          u,
          { noWrap: "", color: a.dashboardGameBlockClr },
          {
            default: d(
              () =>
                $_$() && [
                  a.gameDate
                    ? (s(), S("span", ut, I(a.gameDate), 1))
                    : L("", !0),
                  a.gameTime
                    ? (s(), S("span", _t, I(a.gameTime), 1))
                    : L("", !0),
                  a.gameExtraTimeLabel
                    ? (s(),
                      S(
                        "span",
                        pt,
                        I(a.gameExtraTimeLabel) +
                          " " +
                          I(a.$T("main_minutes_short")),
                        1
                      ))
                    : L("", !0),
                  a.currentPeriodLabel
                    ? (s(), S("span", bt, I(a.currentPeriodLabel), 1))
                    : L("", !0),
                  a.gameAdditionalType
                    ? (s(), S("span", ht, I(a.gameAdditionalType), 1))
                    : L("", !0),
                  a.gameType
                    ? (s(), S("span", ft, I(a.gameType), 1))
                    : L("", !0),
                  a.hasGameId
                    ? (s(), S("span", gt, "ID: " + I(a.gameId), 1))
                    : L("", !0),
                  a.gameAdditionalInfo
                    ? W((s(), S("span", Tt, [E(I(a.gameAdditionalInfo), 1)])), [
                        [_, a.gameAdditionalInfo],
                      ])
                    : L("", !0),
                  a.gameMatchInfoStage
                    ? (s(), S("span", yt, I(a.gameMatchInfoStage), 1))
                    : L("", !0),
                ]
            ),
            _: 1,
          },
          8,
          ["color"]
        ),
      ]))
    : L("", !0);
}
const Jt = P(dt, [
    ["render", vt],
    ["__scopeId", "data-v-aac525ec"],
  ]),
  St = ["onClick", "aria-label"],
  kt = { class: "dashboard-markets-dropdown__content" },
  It = { key: 1, class: "dashboard-markets-dropdown__plug" },
  Ct = ["onClick"],
  Ut = { key: 3, class: "dashboard-markets-dropdown__plug" },
  wt = O({
    __name: "DashboardMarketsDropdown",
    props: {
      additionalMarkets: { type: Array, required: !0 },
      defaultMarket: { type: Object, required: !0 },
      groupId: { type: Number, required: !0, validator: (a) => ce.includes(a) },
    },
    emits: ["setDefaultMarket", "addMarketToCoupon"],
    setup(a, { emit: t }) {
      $_$();
      const n = a,
        o = t,
        {
          dashboardMarketsDropdownUiDropdownTriangle: l,
          dashboardUiDropdownTheme: c,
          dashboardMarketsDropdownUiMarketDefaultTheme: i,
          dashboardMarketsDropdownUiMarketTheme: u,
          dashboardMarketsDropdownMarketsTheme: _,
        } = R(),
        p = _e(),
        h = x(),
        k = Oe(n, "groupId"),
        f = Xe(),
        m = r(() => f.couponBetIds),
        w = r(() => h("dashboard_dropdown_change_param")),
        C = ({ marketGroup: G, selectedMarket: N, toggle: B }) => {
          o("setDefaultMarket", G), o("addMarketToCoupon", N), B();
        },
        v = ({ marketGroup: G, toggle: N }) => {
          o("setDefaultMarket", G), N();
        };
      return (
        Pe(
          () => $_$() && !ce.includes(e(k)),
          () => $_$() && p.error(`wrong market group id ${e(k)}`),
          { immediate: !0 }
        ),
        (G, N) => {
          $_$();
          const B = g("UiMarket"),
            A = g("UiDropdown"),
            D = J("tooltip");
          return (
            s(),
            y(
              A,
              {
                triangle: e(l),
                stopElementsStore: e(pe),
                theme: e(c),
                overlay: "",
                class: "dashboard-markets-dropdown",
              },
              {
                customTrigger: d(
                  ({ toggle: U }) =>
                    $_$() && [
                      W(
                        (s(),
                        S(
                          "button",
                          {
                            onClick: U,
                            "aria-label": e(w),
                            type: "button",
                            class: "dashboard-markets-dropdown__toggle",
                          },
                          [ze(G.$slots, "default", {}, void 0, !0)],
                          8,
                          St
                        )),
                        [[D, e(w)]]
                      ),
                    ]
                ),
                default: d(
                  ({ toggle: U }) =>
                    $_$() && [
                      $("ul", kt, [
                        (s(!0),
                        S(
                          V,
                          null,
                          F(
                            a.additionalMarkets,
                            (b, ae) =>
                              $_$() &&
                              (s(),
                              S(
                                "li",
                                {
                                  key: `additionalMarketsDropdown-${b.groupId}-${ae}`,
                                  class: K([
                                    [
                                      {
                                        "dashboard-markets-dropdown__markets--lead":
                                          a.defaultMarket.marketList[1].id ===
                                          b.marketList[1].id,
                                      },
                                      `dashboard-markets-dropdown__markets--theme-${e(
                                        _
                                      )}`,
                                    ],
                                    "dashboard-markets-dropdown__markets",
                                  ]),
                                },
                                [
                                  b.marketList[0]
                                    ? (s(),
                                      y(
                                        B,
                                        {
                                          key: 0,
                                          onClick: (Q) =>
                                            C({
                                              marketGroup: b,
                                              selectedMarket: b.marketList[0],
                                              toggle: U,
                                            }),
                                          coefByView:
                                            b.marketList[0].coefByView,
                                          coef: b.marketList[0].coef,
                                          isActive: e(m).includes(
                                            b.marketList[0].id
                                          ),
                                          isLocked: b.marketList[0].isLocked,
                                          theme:
                                            a.defaultMarket.marketList[1].id ===
                                            b.marketList[1].id
                                              ? e(i)
                                              : e(u),
                                          name: b.marketList[0].name,
                                          class:
                                            "dashboard-markets-dropdown__market",
                                        },
                                        null,
                                        8,
                                        [
                                          "onClick",
                                          "coefByView",
                                          "coef",
                                          "isActive",
                                          "isLocked",
                                          "theme",
                                          "name",
                                        ]
                                      ))
                                    : (s(), S("span", It, " - ")),
                                  $(
                                    "button",
                                    {
                                      onClick: (Q) =>
                                        v({ marketGroup: b, toggle: U }),
                                      type: "button",
                                      class: K([
                                        "dashboard-markets-dropdown__coef",
                                        {
                                          "dashboard-markets-dropdown__coef--is-active":
                                            a.defaultMarket.marketList[1].id ===
                                            b.marketList[1].id,
                                        },
                                      ]),
                                    },
                                    I(b.marketList[1].coef),
                                    11,
                                    Ct
                                  ),
                                  b.marketList[2]
                                    ? (s(),
                                      y(
                                        B,
                                        {
                                          key: 2,
                                          onClick: (Q) =>
                                            C({
                                              marketGroup: b,
                                              selectedMarket: b.marketList[2],
                                              toggle: U,
                                            }),
                                          coefByView:
                                            b.marketList[2].coefByView,
                                          coef: b.marketList[2].coef,
                                          isActive: e(m).includes(
                                            b.marketList[2].id
                                          ),
                                          isLocked: b.marketList[2].isLocked,
                                          theme:
                                            a.defaultMarket.marketList[1].id ===
                                            b.marketList[1].id
                                              ? e(i)
                                              : e(u),
                                          name: b.marketList[2].name,
                                          class:
                                            "dashboard-markets-dropdown__market",
                                        },
                                        null,
                                        8,
                                        [
                                          "onClick",
                                          "coefByView",
                                          "coef",
                                          "isActive",
                                          "isLocked",
                                          "theme",
                                          "name",
                                        ]
                                      ))
                                    : (s(), S("span", Ut, " - ")),
                                ],
                                2
                              ))
                          ),
                          128
                        )),
                      ]),
                    ]
                ),
                _: 3,
              },
              8,
              ["triangle", "stopElementsStore", "theme"]
            )
          );
        }
      );
    },
  }),
  Qt = P(wt, [["__scopeId", "data-v-f88f28a2"]]),
  Xt = ({ mainGameId: a }) => {
    $_$();
    const {
        dashboardGetGame: t,
        dashboardOverrideBettingType: n,
        dashboardSubGamesByParentId: o,
      } = H(),
      { isLive: l } = le(),
      { getBettingRouteUrl: c } = he(),
      { trackSelectSubGameClick: i } = ee(),
      { has: u, toggle: _ } = Ze(),
      p = r(() => $_$() && t(e(a))),
      h = r(() => {
        $_$();
        var m;
        return (m = e(o)[e(a)]) != null ? m : [];
      });
    return {
      game: p,
      subGames: h,
      getIsGameVisibleById: u,
      toggleGameVisibility: _,
      buildSubGameUrl: (m) => {
        $_$();
        var w;
        return c({
          section: e(n),
          menuSection: (w = m.menuSectionNameForUrl) != null ? w : void 0,
          sport: e(p).sportNameForUrl,
          champ: m.champNameForUrl,
          game: m.gameNameForUrl,
        });
      },
      openSubGame: (m) => {
        $_$();
        i(e(l), m.typeId, m.gamePeriodId);
      },
    };
  },
  Zt = ({ game: a, onLoading: t, beforeOpen: n }) => {
    $_$();
    const {
        toggleOpenedGamesWithSubGames: o,
        dashboardSubGamesByParentId: l,
        hasOpenedGamesWithSubGames: c,
      } = H(),
      { isLive: i } = le(),
      { trackShowSubGamesClick: u } = ee(),
      _ = q(!1),
      p = r(() => {
        $_$();
        var C;
        return (C = e(l)[e(a).id]) != null ? C : [];
      }),
      h = r(() => $_$() && !!e(a).subGamesCount),
      k = r(() => $_$() && Number(e(a).subGamesCount)),
      f = r(() => $_$() && c(e(a).id)),
      m = (C) => {
        (_.value = C), t == null || t(C);
      };
    return {
      subGames: p,
      subGamesCount: k,
      hasSubGames: h,
      isVisibleSubGames: f,
      isSubGamesLoading: _,
      updateSubGamesLoadingStatus: m,
      toggleSubGamesVisibility: () => {
        $_$();
        e(f) || (u(e(i), e(a).sportId), m(!e(p).length), n == null || n()),
          o({ item: e(a).id });
      },
    };
  },
  Gt = O({
    __name: "DashboardSubGamesLoader_F",
    props: { subGameCount: {}, rounded: { type: Boolean } },
    setup(a) {
      const { dashboardUiSkeletonTheme: t } = R();
      return (n, o) => {
        $_$();
        const l = g("UiSkeleton");
        return (
          s(),
          S(
            "div",
            {
              class: K([
                { "dashboard-sub-games-loader--rounded": n.rounded },
                "dashboard-sub-games-loader",
              ]),
            },
            [
              (s(!0),
              S(
                V,
                null,
                F(
                  n.subGameCount,
                  (c) =>
                    $_$() &&
                    (s(),
                    S(
                      "div",
                      { key: c, class: "dashboard-sub-games-loader__item" },
                      [
                        T(
                          l,
                          {
                            theme: e(t),
                            class:
                              "dashboard-sub-games-loader__cell dashboard-sub-games-loader__block",
                          },
                          null,
                          8,
                          ["theme"]
                        ),
                        T(
                          l,
                          {
                            theme: e(t),
                            class:
                              "dashboard-sub-games-loader__cell dashboard-sub-games-loader__markets",
                          },
                          null,
                          8,
                          ["theme"]
                        ),
                        T(
                          l,
                          {
                            theme: e(t),
                            class:
                              "dashboard-sub-games-loader__cell dashboard-sub-games-loader__open",
                          },
                          null,
                          8,
                          ["theme"]
                        ),
                      ]
                    ))
                ),
                128
              )),
            ],
            2
          )
        );
      };
    },
  }),
  xt = P(Gt, [["__scopeId", "data-v-448560f5"]]),
  es = [188],
  as = (a, t) => a.filter(({ groupId: n }) => $_$() && e(t).includes(n)),
  ts = () => {
    $_$();
    const { setMarketsGroupCount: a } = H(),
      t = q();
    let n, o;
    const l = () => {
      $_$();
      var c;
      const i = te(e(t)),
        u = (c = i == null ? void 0 : i.offsetWidth) != null ? c : 0,
        k = Ve(Math.floor((u - 450 - 74) / 218), 1, 6);
      a(k);
    };
    return (
      be(() => {
        $_$();
        const c = te(e(t));
        typeof ResizeObserver != "undefined" && c
          ? ((o = new ResizeObserver(l)), o.observe(c))
          : (window.addEventListener("resize", l), (n = setTimeout(l, 1e3)));
      }),
      Re(() => {
        $_$();
        const c = te(e(t));
        typeof ResizeObserver != "undefined" && c
          ? o == null || o.unobserve(c)
          : (clearTimeout(n), window.removeEventListener("resize", l));
      }),
      { dashboardVM: t }
    );
  };
export {
  Jt as DashboardGameInfo,
  Kt as DashboardGameTeamInfo,
  Qt as DashboardMarketsDropdown,
  xt as DashboardSubGamesLoader,
  es as SportsWithExtraDashboardMarkets,
  Yt as createDashboardConfig,
  as as getAvailableMarketGroups,
  R as useDashboardConfig,
  ct as useDashboardGameInfo,
  Xt as useDashboardSubGames,
  Zt as useDashboardSubGamesLoader,
  ts as useUpdateMarketCount,
};
