import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./4ac00e66c0.js",
      "./entry-50afb6f36c.js",
      "./b0e6fbbd7c.css",
      "./1ae1ef6249.js",
      "./9341f38cd0.js",
      "./ff36b6c0d4.css",
    ])
) => $_$() && i.map((i) => $_$() && d[i]);
import {
  useBettingRouteData as N,
  useBettingRouteWithLang as z,
  useFatmanService as M,
  useFatmanCollector as U,
  _export_sfc as E,
  __vitePreload as L,
  GAMES_MICRO_FRONTEND_URL as V,
  NUXT_THIRD_PARTY_MICRO_FRONTEND_URL as F,
  useRouteAccess as O,
  useBannersClientWidget as W,
  _sfc_main$1 as R,
} from "./entry-50afb6f36c.js";
import {
  runtimeCore_esmBundler_defineComponent as H,
  bettingType_BettingType as $,
  runtimeCore_esmBundler_computed as h,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_provide as K,
  index_useAnalytics as j,
  index_getConfig as Q,
  index_useLogger as X,
  index_useAppStorage as Y,
  runtimeCore_esmBundler_resolveComponent as q,
  runtimeCore_esmBundler_createElementBlock as x,
  runtimeCore_esmBundler_openBlock as t,
  runtimeCore_esmBundler_createElementVNode as J,
  runtimeCore_esmBundler_createBlock as r,
  runtimeCore_esmBundler_createVNode as d,
  size_constants_sizeType as v,
  WeightType as Z,
  runtimeCore_esmBundler_withCtx as m,
  runtimeCore_esmBundler_createTextVNode as A,
  shared_esmBundler_toDisplayString as P,
  nuxtLink_default as ee,
  theme_constants_themeType as G,
  runtimeCore_esmBundler_defineAsyncComponent as I,
  index_injectRemoteComponent as D,
  index_getConfigs as te,
  runtimeCore_esmBundler_createCommentVNode as n,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useBannersClientWidgetPlace as oe } from "./9341f38cd0.js";
import { useBettingPageData as re } from "./4a993370c6.js";
import { useBettingCommonData as se } from "./9de70556bb.js";
import {
  GamesSliderAppLoader as ie,
  GamesSliderGameCard as ne,
} from "./a8a61ec9e7.js";
import { UiSwipeSlider as me } from "./70ca59e60b.js";
import { toUnwrapGetters as ae } from "./1af6a171a2.js";
import { createDashboardMarketGroup as _e } from "./7fd3152d11.js";
import {
  useHomeShowcaseTopEvents as le,
  useVictoryMarketGroupsBySportId as de,
} from "./3c4e4a6a3e.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "./e37cc43aaf.js";
import "./6e5c097416.js";
import "./4e4f01046c.js";
import "./bb0d3b59f5.js";
import "./f0c49800c9.js";
import "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import "./fc0a56fa04.js";
import "./f1156f93a8.js";
import "./5f6b076bc4.js";
import "./d046664d0b.js";
import "./8fb686e8dc.js";
import "./edc84b4da7.js";
import "./a0e9c441b8.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
const ce = { class: "home-top-games-slider" },
  pe = { class: "home-top-games-slider__header" },
  ue = H({
    __name: "HomeTopGamesSlider",
    setup(b) {
      $_$();
      const { topGames: s, isTopGamesLoading: S } = le(),
        c = $.LINE,
        { routePageType: y } = N(),
        p = se({ pageType: y, bettingType: c }),
        a = h(
          () =>
            $_$() &&
            e(s).reduce((o, _) => {
              var i;
              const l = (i = _.marketGroups) == null ? void 0 : i[1];
              return l && (o[_.id] = [_e({ groupId: 1, marketList: l })]), o;
            }, {})
        ),
        { marketGroupsBySportId: C } = de(s);
      K(
        "gamesSliderProvidedData",
        ae({
          ...p,
          gamesSliderStore: { marketGroupsBySportId: C, marketsByGameId: a },
        })
      );
      const B = j(),
        { getBettingRouteUrlWithLang: u } = z(),
        g = Q(509),
        { sendClickSportEventsAll: f } = M({
          fatmanCollector: U(),
          appStorage: Y(),
          logger: X(),
          isFatmanAnalyticsAvailable: g,
        }),
        k = () => {
          B.modules.homeShowcase.trackMainSportsEventsAll(), f();
        },
        T = u({ section: e(c) });
      return (o, _) => {
        $_$();
        const i = q("UiCaption"),
          l = ee;
        return (
          t(),
          x("div", ce, [
            J("div", pe, [
              d(
                i,
                { weight: e(Z).BOLD, size: e(v).xl },
                {
                  default: m(
                    () => $_$() && [A(P(o.$T("betting_top_events")), 1)]
                  ),
                  _: 1,
                },
                8,
                ["weight", "size"]
              ),
              d(
                l,
                { onClick: k, to: e(T), class: "home-top-games-slider__link" },
                {
                  default: m(
                    () =>
                      $_$() && [
                        d(
                          i,
                          { size: e(v).m },
                          {
                            default: m(
                              () =>
                                $_$() && [A(P(o.$T("betting_all_events")), 1)]
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
                ["to"]
              ),
            ]),
            e(S)
              ? (t(),
                r(ie, { key: 0, theme: e(G).primary }, null, 8, ["theme"]))
              : (t(),
                r(
                  me,
                  { key: e(s).length, slides: e(s) },
                  {
                    default: m(
                      ({ slide: w }) =>
                        $_$() && [
                          (t(),
                          r(
                            ne,
                            {
                              key: w.id,
                              game: w,
                              theme: e(G).primary,
                              marketsTheme: e(G).primary15,
                              favoriteButtonSize: e(v).l,
                              isTopEvents: "",
                              forceSuccessTimeline: "",
                              hideAllMarketsQuantity: "",
                              class: "home-top-games-slider__item",
                            },
                            null,
                            8,
                            [
                              "game",
                              "theme",
                              "marketsTheme",
                              "favoriteButtonSize",
                            ]
                          )),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["slides"]
                )),
          ])
        );
      };
    },
  }),
  ge = E(ue, [["__scopeId", "data-v-ad1e57bc"]]),
  he = { key: 0, class: "home-slider" },
  Se = H({
    __name: "HomeSlider_F",
    setup(b) {
      $_$();
      const s = I(() =>
          L(
            () => import("./4ac00e66c0.js"),
            __vite__mapDeps([0, 1, 2]),
            import.meta.url
          )
        ),
        S = I(() =>
          L(
            () => import("./1ae1ef6249.js"),
            __vite__mapDeps([3, 1, 4, 5]),
            import.meta.url
          )
        ),
        c = D(V, "GameSliders", { needSSR: !0 }),
        y = D(F, "HomeShowcase2Slots"),
        [p, a, C] = te(1496, 1073, 1872),
        { hasRouteAccess: B } = O(),
        u = B(8),
        { widgetPlace: g } = oe(),
        { showBannersComponentBlock: f } = W(e(g)),
        k = h(() => ($_$() && e(f)) || e(p) || e(u) || e(a)),
        { isHomePage: T } = re(),
        o = h(() => $_$() && e(T) && C),
        _ = h(() => ($_$() && a) || e(o));
      return (i, l) =>
        $_$() && e(k)
          ? (t(),
            x("div", he, [
              d(e(S), { widgetIdKey: e(g), isShowDecoration: "" }, null, 8, [
                "widgetIdKey",
              ]),
              e(p)
                ? (t(),
                  r(
                    R,
                    { key: 0 },
                    { default: m(() => $_$() && [d(e(s))]), _: 1 }
                  ))
                : n("", !0),
              e(u)
                ? (t(), r(e(c), { key: 1, id: "games-app-banners" }))
                : n("", !0),
              e(_)
                ? (t(),
                  r(
                    R,
                    { key: 2 },
                    {
                      default: m(
                        () =>
                          $_$() && [
                            e(a) ? (t(), r(e(y), { key: 0 })) : n("", !0),
                            e(o) ? (t(), r(ge, { key: 1 })) : n("", !0),
                          ]
                      ),
                      _: 1,
                    }
                  ))
                : n("", !0),
            ]))
          : n("", !0);
    },
  }),
  $e = E(Se, [["__scopeId", "data-v-ef1c5e08"]]);
export { $e as default };
