import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as u,
  runtimeCore_esmBundler_resolveComponent as c,
  runtimeCore_esmBundler_createElementBlock as n,
  runtimeCore_esmBundler_openBlock as m,
  runtimeCore_esmBundler_createVNode as d,
  runtimeCore_esmBundler_withCtx as l,
  runtimeCore_esmBundler_createElementVNode as i,
  shared_esmBundler_normalizeClass as _,
  runtimeCore_esmBundler_createCommentVNode as k,
  runtimeCore_esmBundler_renderSlot as C,
  reactivity_esmBundler_unref as o,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as h } from "./entry-50afb6f36c.js";
import { useDashboardStore as v } from "./f2a7591ae9.js";
import { useDashboardAnalytics as B } from "./88fe5c8d91.js";
const f = { class: "central-menu-loader" },
  M = u({
    __name: "CentralMenuLoader",
    props: { loaderHeaderTheme: {}, loaderToolbarTheme: {} },
    setup(s) {
      return (e, r) => {
        $_$();
        const a = c("UiSkeleton");
        return (
          m(),
          n("div", f, [
            d(
              a,
              {
                theme: e.loaderHeaderTheme,
                class: "central-menu-loader__header central-menu-loader-header",
              },
              {
                default: l(
                  () =>
                    ($_$() && r[0]) ||
                    (r[0] = [
                      i(
                        "div",
                        { class: "central-menu-loader-header__text" },
                        null,
                        -1
                      ),
                    ])
                ),
                _: 1,
              },
              8,
              ["theme"]
            ),
            d(
              a,
              {
                theme: e.loaderToolbarTheme,
                class: "central-menu-loader__bar central-menu-loader-bar",
              },
              {
                default: l(
                  () =>
                    ($_$() && r[1]) ||
                    (r[1] = [
                      i(
                        "div",
                        { class: "central-menu-loader-bar__text" },
                        null,
                        -1
                      ),
                    ])
                ),
                _: 1,
              },
              8,
              ["theme"]
            ),
          ])
        );
      };
    },
  }),
  U = h(M, [["__scopeId", "data-v-9fe972e4"]]),
  T = { key: 0, class: "dashboard-game-more__count" },
  y = u({
    __name: "DashboardGameMore",
    props: {
      theme: {},
      isActive: { type: Boolean },
      hasMarkets: { type: Boolean },
      hasMarker: { type: Boolean },
    },
    setup(s) {
      return (e, r) => {
        $_$();
        const a = c("UiStatusMarker");
        return (
          m(),
          n(
            "button",
            {
              type: "button",
              class: _([
                [
                  `dashboard-game-more--theme-${e.theme}`,
                  {
                    "dashboard-game-more--is-active": e.isActive,
                    "dashboard-game-more--is-empty": !e.hasMarkets,
                    "dashboard-game-more--has-marker": e.hasMarker,
                  },
                ],
                "dashboard-game-more",
              ]),
            },
            [
              e.hasMarkets
                ? (m(),
                  n("span", T, [
                    C(e.$slots, "default", {}, void 0, !0),
                    d(
                      a,
                      {
                        class: _([
                          {
                            "dashboard-game-more__marker--is-visible":
                              e.hasMarker,
                          },
                          "dashboard-game-more__marker",
                        ]),
                      },
                      null,
                      8,
                      ["class"]
                    ),
                  ]))
                : k("", !0),
            ],
            2
          )
        );
      };
    },
  }),
  $ = h(y, [["__scopeId", "data-v-955ba74c"]]),
  F = ({ game: s, isLive: e }) => {
    const { trackOpenGameClick: r, trackAddGameToFavoriteClick: a } = B(),
      { hasPinnedGameIds: p, currentTab: b } = v();
    return {
      onClickGame: () => {
        $_$();
        const { id: t } = o(s);
        r({ gameId: t, isLive: o(e), isPinned: p(t), dashboardType: o(b) });
      },
      handleAddGameToFavorites: (t) => {
        $_$();
        a({ isAdded: t, isLive: o(e), sportId: o(s).sportId });
      },
    };
  };
export {
  $ as DashboardGameMore,
  U as MenuLoadingComponent,
  F as useDashboardGameAnalytic,
};
