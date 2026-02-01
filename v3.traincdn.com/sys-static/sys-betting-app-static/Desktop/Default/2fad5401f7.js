import $_$ from "./$_$.js";
$_$();
import {
  iconName as h,
  runtimeCore_esmBundler_defineComponent as ge,
  index_getConfig as be,
  useGlobalStore as pe,
  index_getConfigs as he,
  index_useT as Se,
  useRouterMethodsWithLang as Be,
  reactivity_esmBundler_toRefs as ye,
  runtimeCore_esmBundler_computed as c,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_resolveComponent as m,
  runtimeCore_esmBundler_resolveDirective as ve,
  runtimeCore_esmBundler_createElementBlock as a,
  runtimeCore_esmBundler_openBlock as o,
  runtimeCore_esmBundler_createCommentVNode as B,
  runtimeCore_esmBundler_Fragment as y,
  runtimeCore_esmBundler_renderList as G,
  runtimeCore_esmBundler_withDirectives as v,
  shared_esmBundler_normalizeClass as F,
  runtimeDom_esmBundler_withModifiers as V,
  runtimeCore_esmBundler_createVNode as r,
  size_constants_sizeType as u,
  runtimeCore_esmBundler_createBlock as w,
  runtimeCore_esmBundler_withCtx as l,
  theme_constants_themeType as N,
  runtimeCore_esmBundler_createTextVNode as j,
  shared_esmBundler_toDisplayString as q,
  isDef as Ce,
  execAsync as C,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useMediaStore as Ie,
  MediaType as I,
  MediaTarget as J,
  _export_sfc as fe,
} from "./entry-50afb6f36c.js";
import { useGameVideoAvailability as ke } from "./c7ea6bc74a.js";
import { BETTING_PROPS as Oe } from "./858ab97c10.js";
import { useBettingGameStatistic as Te } from "./9b71e2792e.js";
import { useBettingGameRoute as Ae } from "./944eab39d4.js";
import { useDashboardAnalytics as Ee } from "./88fe5c8d91.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "./9de70556bb.js";
import "./7fd3152d11.js";
import "./1af6a171a2.js";
import "./4a993370c6.js";
import "./9eb49f27d6.js";
const p = {
    SHOW_VIDEO: h.TRANSLATION,
    SHOW_ZONE: h.FIELD_ZONE,
    SHOW_SCORE: h.ZERO_ZERO,
    SHOW_INSIGHTS: h.BULB,
  },
  ze = { class: "dashboard-game-action-bar" },
  De = { key: 0, class: "dashboard-game-action-bar__group" },
  Ge = ["onClick", "aria-label"],
  Ve = { key: 1, class: "dashboard-game-action-bar__group" },
  we = ["onClick", "aria-label"],
  Ne = ["onClick", "aria-label"],
  Ue = ["aria-label"],
  He = ge({
    __name: "DashboardGameActionBar",
    props: {
      game: { type: Object, required: !0 },
      isBettingMoreScoreActive: { type: Boolean, default: !1 },
      isBettingMoreScoreTitleVisible: { type: Boolean, default: !1 },
      bettingType: Oe.bettingType,
      hasDropdown: { type: Boolean, default: !1 },
    },
    emits: ["toggleScore"],
    setup(U, { emit: K }) {
      $_$();
      const f = U,
        Q = K,
        H = be(2007),
        k = Ie(),
        { trackGameVideoIconClick: X, trackGameZoneIconClick: Y } = Ee(),
        Z = pe(),
        [ee, te, ie, oe] = he(412, 243, 485, 332),
        O = Se(),
        { routerPushWithLang: ae } = Be(() => Z.language),
        { game: _, bettingType: M } = ye(f),
        { statisticButtons: T } = Te({ game: _, bettingType: M }),
        { gameRouteLink: A } = Ae(_, { bettingType: M }),
        { checkGameVideoAvailable: se } = ke(),
        R = c(() =>
          k.mediaEntities.filter(({ gameId: t }) => $_$() && t === e(_).id)
        ),
        E = c(() => $_$() && e(R).find(({ type: t }) => t === I.VIDEO)),
        z = c(() => $_$() && e(R).find(({ type: t }) => t === I.ZONE)),
        ne = c(() => $_$() && e(E) !== void 0),
        re = c(() => $_$() && e(z) !== void 0),
        ce = c(() => Z.isZoneAvailable),
        le = c(() => $_$() && oe && e(T).length > 0),
        W = c(() => $_$() && ie && te && e(_).hasInsights),
        x = (t) => k.mediaSelectMedia(t, H),
        L = (t) => k.mediaUnselectMedia(t, H),
        _e = async () => {
          $_$();
          let t, s;
          const { id: n, videoId: g, sportId: d } = e(_),
            b = !Ce(e(E));
          b
            ? (([t, s] = C(
                () =>
                  $_$() &&
                  x({
                    type: I.VIDEO,
                    target: J.SIDE,
                    gameLink: e(A),
                    videoId: g,
                    gameId: n,
                    sportId: d,
                  })
              )),
              await t,
              s())
            : (([t, s] = C(() => $_$() && L(e(E)))), await t, s()),
            X({ sportId: d, isEnabled: b });
        },
        de = async () => {
          $_$();
          let t, s;
          const { id: n, zoneId: g, sportId: d } = e(_);
          e(z) === void 0
            ? (([t, s] = C(
                () =>
                  $_$() &&
                  x({
                    type: I.ZONE,
                    target: J.SIDE,
                    gameLink: e(A),
                    zoneId: g,
                    gameId: n,
                    sportId: d,
                  })
              )),
              await t,
              s(),
              Y(d))
            : (([t, s] = C(() => $_$() && L(e(z)))), await t, s());
        },
        $ = c(
          () =>
            $_$() &&
            [
              {
                title: O("media_show_video"),
                ico: p.SHOW_VIDEO,
                action: _e,
                visible: ee && se(_),
                isActive: e(ne),
              },
              {
                title: O("media_show_zone"),
                ico: p.SHOW_ZONE,
                action: de,
                visible: e(ce) && !!e(_).zoneId,
                isActive: e(re),
              },
              {
                title: O("betting_more_score"),
                ico: p.SHOW_SCORE,
                action: () => Q("toggleScore"),
                visible: f.isBettingMoreScoreTitleVisible,
                isActive: f.isBettingMoreScoreActive,
              },
            ].filter((t) => t.visible)
        ),
        P = () => ae(A);
      return (t, s) => {
        $_$();
        const n = m("UiIco"),
          g = m("UiAngleV2"),
          d = m("UiOption"),
          b = m("UiSelectItem"),
          me = m("UiSelectOptions"),
          ue = m("UiDropdown"),
          S = ve("tooltip");
        return (
          o(),
          a("span", ze, [
            e($).length
              ? (o(),
                a("div", De, [
                  (o(!0),
                  a(
                    y,
                    null,
                    G(
                      e($),
                      (i, D) =>
                        $_$() &&
                        v(
                          (o(),
                          a(
                            "button",
                            {
                              key: D,
                              onClick: V(i.action, ["prevent"]),
                              "aria-label": i.title,
                              type: "button",
                              class: F([
                                {
                                  "dashboard-game-action-bar__item--is-active":
                                    i.isActive,
                                },
                                "dashboard-game-action-bar__item",
                              ]),
                            },
                            [
                              r(
                                n,
                                {
                                  ico: i.ico,
                                  size: e(u).xs,
                                  class: "dashboard-game-action-bar__ico",
                                },
                                null,
                                8,
                                ["ico", "size"]
                              ),
                            ],
                            10,
                            Ge
                          )),
                          [[S, i.title]]
                        )
                    ),
                    128
                  )),
                ]))
              : B("", !0),
            e(le)
              ? (o(),
                a("div", Ve, [
                  U.hasDropdown
                    ? (o(),
                      w(
                        ue,
                        {
                          key: 0,
                          class: "dashboard-game-action-bar__dropdown",
                        },
                        {
                          customTrigger: l(
                            ({ isOpen: i, toggle: D }) =>
                              $_$() && [
                                v(
                                  (o(),
                                  a(
                                    "button",
                                    {
                                      onClick: D,
                                      "aria-label": t.$T(
                                        "betting_statistic_statistic"
                                      ),
                                      class: F([
                                        {
                                          "dashboard-game-action-bar__trigger--is-open":
                                            i,
                                        },
                                        "dashboard-game-action-bar__trigger",
                                      ]),
                                      type: "button",
                                    },
                                    [
                                      r(
                                        n,
                                        {
                                          ico: e(h).STATS,
                                          size: e(u).xs,
                                          class:
                                            "dashboard-game-action-bar__ico",
                                        },
                                        null,
                                        8,
                                        ["ico", "size"]
                                      ),
                                      r(g, {
                                        class:
                                          "dashboard-game-action-bar__angle",
                                      }),
                                    ],
                                    10,
                                    we
                                  )),
                                  [[S, t.$T("betting_statistic_statistic")]]
                                ),
                              ]
                          ),
                          default: l(
                            () =>
                              $_$() && [
                                r(
                                  me,
                                  {
                                    theme: e(N).gray100,
                                    class: "dashboard-game-action-bar__actions",
                                  },
                                  {
                                    default: l(
                                      () =>
                                        $_$() && [
                                          (o(!0),
                                          a(
                                            y,
                                            null,
                                            G(
                                              e(T),
                                              (i) =>
                                                $_$() &&
                                                (o(),
                                                w(
                                                  b,
                                                  { key: i.title },
                                                  {
                                                    default: l(
                                                      () =>
                                                        $_$() && [
                                                          r(
                                                            d,
                                                            {
                                                              onClick: V(
                                                                i.action,
                                                                ["prevent"]
                                                              ),
                                                              theme:
                                                                e(N).gray100,
                                                            },
                                                            {
                                                              ico: l(
                                                                () =>
                                                                  $_$() && [
                                                                    r(
                                                                      n,
                                                                      {
                                                                        ico: i.ico,
                                                                        size: e(
                                                                          u
                                                                        ).xs,
                                                                        class:
                                                                          "dashboard-game-action-bar__ico",
                                                                      },
                                                                      null,
                                                                      8,
                                                                      [
                                                                        "ico",
                                                                        "size",
                                                                      ]
                                                                    ),
                                                                  ]
                                                              ),
                                                              caption: l(
                                                                () =>
                                                                  $_$() && [
                                                                    j(
                                                                      q(
                                                                        i.title
                                                                      ),
                                                                      1
                                                                    ),
                                                                  ]
                                                              ),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick", "theme"]
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
                                          e(W)
                                            ? (o(),
                                              w(
                                                b,
                                                { key: 0 },
                                                {
                                                  default: l(
                                                    () =>
                                                      $_$() && [
                                                        r(
                                                          d,
                                                          {
                                                            onClick: P,
                                                            theme: e(N).gray100,
                                                          },
                                                          {
                                                            ico: l(
                                                              () =>
                                                                $_$() && [
                                                                  r(
                                                                    n,
                                                                    {
                                                                      ico: e(p)
                                                                        .SHOW_INSIGHTS,
                                                                      size: e(u)
                                                                        .xs,
                                                                      class:
                                                                        "dashboard-game-action-bar__ico",
                                                                    },
                                                                    null,
                                                                    8,
                                                                    [
                                                                      "ico",
                                                                      "size",
                                                                    ]
                                                                  ),
                                                                ]
                                                            ),
                                                            caption: l(
                                                              () =>
                                                                $_$() && [
                                                                  j(
                                                                    q(
                                                                      t.$T(
                                                                        "game_insight_insights"
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
                                                        ),
                                                      ]
                                                  ),
                                                  _: 1,
                                                }
                                              ))
                                            : B("", !0),
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
                      ))
                    : (o(),
                      a(
                        y,
                        { key: 1 },
                        [
                          (o(!0),
                          a(
                            y,
                            null,
                            G(
                              e(T),
                              (i) =>
                                $_$() &&
                                v(
                                  (o(),
                                  a(
                                    "button",
                                    {
                                      key: i.title,
                                      onClick: V(i.action, ["prevent"]),
                                      type: "button",
                                      "aria-label": i.title,
                                      class: "dashboard-game-action-bar__item",
                                    },
                                    [
                                      r(
                                        n,
                                        {
                                          ico: i.ico,
                                          size: e(u).xs,
                                          class:
                                            "dashboard-game-action-bar__ico",
                                        },
                                        null,
                                        8,
                                        ["ico", "size"]
                                      ),
                                    ],
                                    8,
                                    Ne
                                  )),
                                  [[S, i.title]]
                                )
                            ),
                            128
                          )),
                          e(W)
                            ? v(
                                (o(),
                                a(
                                  "button",
                                  {
                                    key: 0,
                                    onClick: P,
                                    type: "button",
                                    "aria-label": t.$T("game_insight_insights"),
                                    class: "dashboard-game-action-bar__item",
                                  },
                                  [
                                    r(
                                      n,
                                      {
                                        ico: e(p).SHOW_INSIGHTS,
                                        size: e(u).xs,
                                        class: "dashboard-game-action-bar__ico",
                                      },
                                      null,
                                      8,
                                      ["ico", "size"]
                                    ),
                                  ],
                                  8,
                                  Ue
                                )),
                                [[S, t.$T("game_insight_insights")]]
                              )
                            : B("", !0),
                        ],
                        64
                      )),
                ]))
              : B("", !0),
          ])
        );
      };
    },
  }),
  Xe = fe(He, [["__scopeId", "data-v-6d9e1cc0"]]);
export { Xe as default };
