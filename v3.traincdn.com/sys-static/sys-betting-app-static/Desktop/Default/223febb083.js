import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./94486d1254.js",
      "./f18503639b.js",
      "./4a993370c6.js",
      "./1af6a171a2.js",
      "./entry-50afb6f36c.js",
      "./9de70556bb.js",
      "./7fd3152d11.js",
      "./8ffe551b09.js",
      "./10dcfb9c91.js",
      "./11286bfc75.js",
      "./bb0d3b59f5.js",
      "./6d722296e2.js",
      "./9bf7ffb8ec.js",
      "./9e4e245c05.js",
      "./58a21526ee.js",
      "./ff2996a70d.js",
      "./6e5c097416.js",
      "./aa92bf211f.js",
      "./858ab97c10.js",
      "./f2a7591ae9.js",
      "./c7ea6bc74a.js",
      "./e1e32a66a3.js",
      "./9816d50199.js",
      "./dd584157d6.js",
      "./d31ab0f81e.css",
      "./119c73ece6.js",
      "./2ac826c613.js",
      "./ef72a4a5b8.css",
      "./22ffd92dc8.css",
      "./b11db110fe.js",
      "./53db7ae5ba.js",
      "./ad8e67d6ba.css",
      "./991470c1ca.css",
    ])
) => i.map((i) => d[i]);
import {
  runtimeCore_esmBundler_defineComponent as L,
  reactivity_esmBundler_toRefs as W,
  runtimeCore_esmBundler_resolveComponent as C,
  runtimeCore_esmBundler_createElementBlock as S,
  runtimeCore_esmBundler_openBlock as l,
  runtimeCore_esmBundler_createBlock as T,
  runtimeCore_esmBundler_createCommentVNode as v,
  runtimeCore_esmBundler_renderSlot as U,
  runtimeCore_esmBundler_createElementVNode as y,
  reactivity_esmBundler_unref as e,
  shared_esmBundler_normalizeClass as E,
  index_useT as Q,
  useGlobalStore as Y,
  index_useAnalytics as X,
  useRouterMethodsWithLang as Z,
  officeRouteNames_OfficeRouteNames as ee,
  runtimeCore_esmBundler_computed as g,
  size_constants_sizeType as H,
  theme_constants_themeType as z,
  iconName as N,
  runtimeCore_esmBundler_withDirectives as R,
  runtimeCore_esmBundler_Fragment as G,
  runtimeCore_esmBundler_renderList as O,
  nuxtLink_default as te,
  runtimeCore_esmBundler_withCtx as r,
  runtimeCore_esmBundler_createVNode as u,
  runtimeCore_esmBundler_createTextVNode as oe,
  shared_esmBundler_toDisplayString as ne,
  runtimeDom_esmBundler_vShow as D,
  execAsync as j,
  runtimeCore_esmBundler_defineAsyncComponent as ie,
  clientOnly_default as se,
  BettingPageType as re,
  runtimeCore_esmBundler_onBeforeUnmount as ae,
  runtimeCore_esmBundler_watch as P,
  runtimeCore_esmBundler_nextTick as le,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { LayoutSidebar as me } from "./8378022687.js";
import {
  useLeftSide as q,
  _export_sfc as b,
  loadLeftSideAppConfigDesktop as ue,
  __vitePreload as ce,
} from "./entry-50afb6f36c.js";
import { withAsyncContext as pe } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import { BETTING_PROPS as M } from "./858ab97c10.js";
import { UiGamesLoaderStub as de } from "./60d766cde4.js";
import { _sfc_main as V } from "./119c73ece6.js";
import { _sfc_main as _e } from "./d9edcbfdf9.js";
import { LeftSideNav as ge, LeftSideNavItems as fe } from "./53db7ae5ba.js";
import { useBettingStore as Te } from "./1af6a171a2.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "./9de70556bb.js";
import "./7fd3152d11.js";
import "./2ac826c613.js";
import "./669f85a6b8.js";
import "./e37cc43aaf.js";
import "./f0c49800c9.js";
import "./fc0a56fa04.js";
import "./f1156f93a8.js";
import "./5f6b076bc4.js";
import "./6a64c59e39.js";
import "./4a993370c6.js";
import "./4b4dfdeaaf.js";
import "./4e4f01046c.js";
import "./bb0d3b59f5.js";
import "./c7ea6bc74a.js";
import "./6e5c097416.js";
import "./944eab39d4.js";
import "./6646ee1d1c.js";
import "./626f06f14d.js";
import "./f3262a3d13.js";
import "./a0e9c441b8.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
import "./914ab66f1a.js";
import "./58a21526ee.js";
import "./30806a74d6.js";
const Be = ["aria-label"],
  Ce = { class: "left-side-template__box" },
  Se = L({
    __name: "LeftSideTemplate",
    props: {
      bettingType: {},
      pageType: {},
      uiColumnToggleButtonClass: { type: Boolean },
      uiColumnToggleButtonDecent: { type: Boolean },
      uiColumnToggleButtonTheme: {},
      uiColumnToggleButtonIconSize: {},
      uiColumnToggleButtonTextSize: {},
    },
    setup(i) {
      $_$();
      const t = i,
        { bettingType: m, pageType: a } = W(t),
        {
          isLeftSectionHover: n,
          isLeftSectionHidden: c,
          isLowResolutionScreen: p,
          toggleLeftHidden: s,
        } = q({ pageType: a, bettingType: m });
      return (o, _) => {
        $_$();
        const f = C("UiColumnToggleButton");
        return (
          l(),
          S(
            "aside",
            { "aria-label": o.$T("main_sidebar"), class: "left-side-template" },
            [
              e(p)
                ? v("", !0)
                : (l(),
                  T(
                    f,
                    {
                      key: 0,
                      onClick: e(s),
                      isHidden: e(c),
                      compact: e(n),
                      "aria-label": o.$T("main_toggle_text"),
                      hideTo: "start",
                      textFixBlock: o.$T("main_fix_block"),
                      textHideBlock: o.$T("main_hide_block"),
                      theme: o.uiColumnToggleButtonTheme,
                      decent: o.uiColumnToggleButtonDecent,
                      iconSize: o.uiColumnToggleButtonIconSize,
                      textSize: o.uiColumnToggleButtonTextSize,
                      class: E({
                        "left-side-template__button":
                          o.uiColumnToggleButtonClass,
                      }),
                    },
                    null,
                    8,
                    [
                      "onClick",
                      "isHidden",
                      "compact",
                      "aria-label",
                      "textFixBlock",
                      "textHideBlock",
                      "theme",
                      "decent",
                      "iconSize",
                      "textSize",
                      "class",
                    ]
                  )),
              U(o.$slots, "uiNav", {}, void 0, !0),
              y("div", Ce, [
                U(o.$slots, "sportMenuAppDataProvider", {}, void 0, !0),
                U(o.$slots, "bottomButtons", {}, void 0, !0),
              ]),
            ],
            8,
            Be
          )
        );
      };
    },
  }),
  ye = b(Se, [["__scopeId", "data-v-18c63d73"]]),
  ve = { class: "left-side-bottom-buttons__container" },
  Le = L({
    __name: "LeftSideBottomButtons",
    props: { config: {} },
    setup(i) {
      $_$();
      const t = Q(),
        m = Y(),
        a = X(),
        { getLocationWithLang: n } = Z(() => m.language),
        c = n({ name: "statisticPageRoute" }),
        p = n({ name: "resultsMain" }),
        s = n({ name: ee.BETS_HISTORY }),
        o = g(() => m.isUserAuth),
        _ = g(() => m.isLeftSectionVisible),
        f = g(
          () =>
            $_$() &&
            [
              {
                name: t("main_menu_button_results"),
                route: p,
                ico: N.CHART_PIE_ALT,
                theme: z.gray,
                size: H.m,
              },
              {
                name: t("main_menu_button_statistic"),
                route: c,
                ico: N.STATS,
                theme: z.gray,
                size: H.m,
              },
              {
                name: t("main_menu_button_bets_history"),
                route: s,
                ico: N.HISTORY,
                theme: z.gray,
                size: H.m,
                hidden: !e(o),
              },
            ].filter(({ hidden: B }) => !B)
        ),
        w = (B) => {
          a.mainMenu.trackGoToPage(B.ico);
        };
      return (B, $) => {
        $_$();
        const I = C("UiCaption"),
          h = C("UiButton"),
          A = te,
          x = C("UiIco");
        return (
          l(),
          S(
            "div",
            {
              class: E([
                `left-side-bottom-buttons--theme-${B.config.leftSideBottomButtonsTheme}`,
                "left-side-bottom-buttons",
              ]),
            },
            [
              R(
                y(
                  "div",
                  ve,
                  [
                    (l(!0),
                    S(
                      G,
                      null,
                      O(
                        e(f),
                        (d) =>
                          $_$() &&
                          (l(),
                          T(
                            A,
                            { key: d.name, to: d.route, custom: "" },
                            {
                              default: r(
                                ({ href: k, navigate: J }) =>
                                  $_$() && [
                                    u(
                                      h,
                                      {
                                        onClick: (K) => {
                                          w(d), J(K);
                                        },
                                        tag: "a",
                                        href: k,
                                        theme: d.theme,
                                        narrow: "",
                                      },
                                      {
                                        default: r(
                                          () =>
                                            $_$() && [
                                              u(
                                                I,
                                                { size: e(H).m },
                                                {
                                                  default: r(
                                                    () =>
                                                      $_$() && [
                                                        oe(ne(d.name), 1),
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
                                      ["onClick", "href", "theme"]
                                    ),
                                  ]
                              ),
                              _: 2,
                            },
                            1032,
                            ["to"]
                          ))
                      ),
                      128
                    )),
                  ],
                  512
                ),
                [[D, e(_)]]
              ),
              (l(!0),
              S(
                G,
                null,
                O(
                  e(f),
                  (d) =>
                    $_$() &&
                    R(
                      (l(),
                      T(
                        h,
                        {
                          key: d.name,
                          tag: "span",
                          narrow: "",
                          rounded: !1,
                          theme: d.theme,
                        },
                        {
                          default: r(
                            () =>
                              $_$() && [
                                u(x, { ico: d.ico, size: d.size }, null, 8, [
                                  "ico",
                                  "size",
                                ]),
                              ]
                          ),
                          _: 2,
                        },
                        1032,
                        ["theme"]
                      )),
                      [[D, !e(_)]]
                    )
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
  be = b(Le, [["__scopeId", "data-v-bd24e6ec"]]),
  he = { class: "left-side-nav-loader" },
  ke = L({
    __name: "LeftSideNavLoader",
    props: { isCompact: { type: Boolean }, hasGame: { type: Boolean } },
    setup(i) {
      $_$();
      const t = i,
        m = g(() => !t.isCompact && t.hasGame);
      return (a, n) => {
        $_$();
        const c = C("UiSkeleton");
        return (
          l(),
          S("div", he, [
            u(
              c,
              { theme: e(z).primary, class: "left-side-nav-loader__skeleton" },
              {
                default: r(
                  () =>
                    $_$() && [
                      n[2] ||
                        (n[2] = y(
                          "div",
                          { class: "left-side-nav-loader__ico" },
                          null,
                          -1
                        )),
                      a.isCompact
                        ? v("", !0)
                        : (l(),
                          S(
                            G,
                            { key: 0 },
                            [
                              n[0] ||
                                (n[0] = y(
                                  "div",
                                  { class: "left-side-nav-loader__name" },
                                  null,
                                  -1
                                )),
                              n[1] ||
                                (n[1] = y(
                                  "div",
                                  { class: "left-side-nav-loader__arrow" },
                                  null,
                                  -1
                                )),
                            ],
                            64
                          )),
                    ]
                ),
                _: 1,
              },
              8,
              ["theme"]
            ),
            e(m) ? (l(), T(de, { key: 0, gameCount: 1 })) : v("", !0),
          ])
        );
      };
    },
  }),
  F = b(ke, [["__scopeId", "data-v-347de582"]]),
  He = L({
    __name: "LeftSide",
    props: { bettingType: M.bettingType, pageType: M.pageType },
    async setup(i) {
      $_$();
      let t, m, a, n;
      const c = i,
        { bettingType: p, pageType: s } = W(c),
        o =
          (([a, n] = pe(() => ue())),
          (a = (([t, m] = j(() => a)), (t = await t), m(), t)),
          n(),
          a),
        { config: _ } = o(),
        {
          isLeftSectionVisible: f,
          showTopEvents: w,
          onTopGamesUpdate: B,
          topGamesIsEmpty: $,
        } = q({ pageType: s, bettingType: p }),
        I = ie({
          loader: () =>
            ce(
              () => import("./94486d1254.js"),
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
              ]),
              import.meta.url
            ),
          loadingComponent: V,
          suspensible: !1,
          delay: 0,
        }),
        h = g(() => $_$() && e($) === !1),
        A = g(() => $_$() && e($) === void 0);
      return (x, d) => {
        $_$();
        const k = se;
        return (
          l(),
          T(
            ye,
            {
              bettingType: e(p),
              pageType: e(s),
              uiColumnToggleButtonClass: e(_).uiColumnToggleButtonClass,
              uiColumnToggleButtonTheme: e(_).uiColumnToggleButtonTheme,
              uiColumnToggleButtonDecent: e(_).uiColumnToggleButtonDecent,
              uiColumnToggleButtonIconSize: e(_).uiColumnToggleButtonIconSize,
              uiColumnToggleButtonTextSize: e(_).uiColumnToggleButtonTextSize,
              class: "left-side",
            },
            {
              uiNav: r(
                () =>
                  $_$() && [
                    u(
                      ge,
                      { isRounded: "" },
                      {
                        default: r(
                          () =>
                            $_$() && [
                              u(fe, null, {
                                default: r(
                                  () =>
                                    $_$() && [
                                      e(w)
                                        ? (l(),
                                          T(
                                            k,
                                            { key: 0 },
                                            {
                                              default: r(
                                                () =>
                                                  $_$() && [
                                                    R(
                                                      u(
                                                        _e,
                                                        {
                                                          onOnUpdate: e(B),
                                                          isCompact: !e(f),
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "onOnUpdate",
                                                          "isCompact",
                                                        ]
                                                      ),
                                                      [[D, e(h)]]
                                                    ),
                                                    e(A)
                                                      ? (l(),
                                                        T(
                                                          F,
                                                          {
                                                            key: 0,
                                                            isCompact: !e(f),
                                                            hasGame: "",
                                                          },
                                                          null,
                                                          8,
                                                          ["isCompact"]
                                                        ))
                                                      : v("", !0),
                                                  ]
                                              ),
                                              fallback: r(
                                                () =>
                                                  $_$() && [
                                                    u(
                                                      F,
                                                      {
                                                        hasGame: "",
                                                        isCompact: !e(f),
                                                      },
                                                      null,
                                                      8,
                                                      ["isCompact"]
                                                    ),
                                                  ]
                                              ),
                                              _: 1,
                                            }
                                          ))
                                        : v("", !0),
                                    ]
                                ),
                                _: 1,
                              }),
                            ]
                        ),
                        _: 1,
                      }
                    ),
                  ]
              ),
              sportMenuAppDataProvider: r(
                () =>
                  $_$() && [
                    u(k, null, {
                      fallback: r(() => $_$() && [u(V)]),
                      default: r(() => $_$() && [u(e(I))]),
                      _: 1,
                    }),
                  ]
              ),
              bottomButtons: r(
                () => $_$() && [u(be, { config: e(_) }, null, 8, ["config"])]
              ),
              _: 1,
            },
            8,
            [
              "bettingType",
              "pageType",
              "uiColumnToggleButtonClass",
              "uiColumnToggleButtonTheme",
              "uiColumnToggleButtonDecent",
              "uiColumnToggleButtonIconSize",
              "uiColumnToggleButtonTextSize",
            ]
          )
        );
      };
    },
  }),
  ze = b(He, [["__scopeId", "data-v-a9e6152f"]]),
  we = L({
    name: "BettingLeftAside",
    components: { LayoutSidebar: me, LeftSide: ze },
    props: {
      pageType: { type: String, default: re.HOME },
      bettingType: { type: String, default: void 0 },
    },
    setup(i) {
      $_$();
      const t = Y(),
        m = Te(),
        a = g(() => {
          var s;
          return (s = i.bettingType) != null ? s : m.bettingCurrentBettingType;
        }),
        n = g(() => t.getIsLeftSectionHover),
        c = g(() => t.isLeftSectionHidden),
        p = (s) => {
          t.setLeftSectionHover(s);
        };
      return (
        ae(() => {
          t.setLeftSectionHover(!1);
        }),
        P(a, () => {
          p(!1);
        }),
        P(c, async () => {
          $_$();
          let s, o;
          ([s, o] = j(() => $_$() && le())),
            await s,
            o(),
            window.dispatchEvent(new Event("toggleLeftSection"));
        }),
        {
          currentBettingType: a,
          onHoverLeftSection: p,
          isLeftSectionHover: n,
          isLeftSectionHidden: c,
        }
      );
    },
  });
function $e(i, t, m, a, n, c) {
  $_$();
  const p = C("LeftSide"),
    s = C("LayoutSidebar");
  return (
    l(),
    T(
      s,
      {
        onMouseenter: t[0] || (t[0] = (o) => i.onHoverLeftSection(!0)),
        onMouseleave: t[1] || (t[1] = (o) => i.onHoverLeftSection(!1)),
        leftSidebar: "",
        isCompact: i.isLeftSectionHidden,
        isSectionHover: i.isLeftSectionHover,
        class: E([
          {
            "betting-left-aside-asian-view--is-compact": i.isLeftSectionHidden,
            "betting-left-aside-asian-view--is-shown": i.isLeftSectionHover,
          },
          "betting-left-aside-asian-view",
        ]),
      },
      {
        default: r(
          () =>
            $_$() && [
              u(
                p,
                { pageType: i.pageType, bettingType: i.currentBettingType },
                null,
                8,
                ["pageType", "bettingType"]
              ),
            ]
        ),
        _: 1,
      },
      8,
      ["isCompact", "isSectionHover", "class"]
    )
  );
}
const gt = b(we, [
  ["render", $e],
  ["__scopeId", "data-v-7701a53e"],
]);
export { gt as default };
