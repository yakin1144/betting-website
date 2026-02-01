import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as b,
  reactivity_esmBundler_toRefs as $,
  runtimeCore_esmBundler_computed as v,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_resolveComponent as B,
  runtimeCore_esmBundler_createBlock as l,
  runtimeCore_esmBundler_openBlock as m,
  runtimeDom_esmBundler_withModifiers as w,
  theme_constants_themeType as A,
  useGlobalStore as D,
  runtimeCore_esmBundler_watch as x,
  runtimeCore_esmBundler_onUnmounted as F,
  runtimeCore_esmBundler_withCtx as d,
  runtimeCore_esmBundler_createElementBlock as I,
  runtimeCore_esmBundler_createCommentVNode as S,
  runtimeCore_esmBundler_createVNode as u,
  runtimeCore_esmBundler_createTextVNode as M,
  shared_esmBundler_toDisplayString as O,
  reactivity_esmBundler_isRef as P,
  iconName as L,
  shared_esmBundler_normalizeClass as j,
  runtimeDom_esmBundler_Transition as W,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  UiSportsEvent as q,
  useUiSportsEventProviderByOldGame as z,
} from "./669f85a6b8.js";
import {
  defineProvider as H,
  AnalyticsBetSourceName as J,
  _export_sfc as N,
  useBettingRouteData as K,
} from "./entry-50afb6f36c.js";
import { useBettingStateProvider as Q } from "./9de70556bb.js";
import { useBettingGameRoute as X } from "./944eab39d4.js";
import { useTopGamesAnalytics as Y } from "./6646ee1d1c.js";
import { UiGamesLoaderStub as Z } from "./60d766cde4.js";
import { UiBettingStepper as ee } from "./626f06f14d.js";
import { useTopGamesApp as te } from "./f3262a3d13.js";
import { LeftSideNavItem as oe, LeftSideNavItems as ne } from "./53db7ae5ba.js";
import { useBettingStore as re } from "./1af6a171a2.js";
const { provide: ae, inject: V } = H(({ pageType: n, bettingType: t }) => {
    const {
      isLive: a,
      isLine: s,
      bettingStoreType: i,
      bettingStoreNamespace: r,
    } = Q({ bettingType: t, pageType: n });
    return {
      pageType: n,
      bettingType: t,
      isLive: a,
      isLine: s,
      bettingStoreType: i,
      bettingStoreNamespace: r,
    };
  }),
  se = b({
    name: "TopGame_F",
    components: { UiSportsEvent: q },
    props: { game: { type: Object, required: !0 } },
    setup(n) {
      $_$();
      const { game: t } = $(n),
        { bettingType: a, pageType: s } = V(),
        {
          gameRouteLink: i,
          gameSelectedInBetting: r,
          toggleGameRoute: p,
        } = X(t, { pageType: s, bettingType: a }),
        c = v(() => {
          var o;
          return (o = n.game.markets) != null ? o : [];
        }),
        _ = v(() => {
          var o;
          return (o = n.game.champName) != null ? o : "";
        }),
        {
          trackGameOpen: k,
          trackAddGameToFavorites: g,
          trackAddGameMarket: G,
          trackVideoEnable: h,
        } = Y(),
        T = () => {
          $_$();
          k({ gameId: e(t).id, sportId: e(t).sportId });
        },
        y = (o) => {
          $_$();
          g({ isAdded: o, sportId: e(t).sportId });
        },
        C = (o) => {
          G({ isAdded: o });
        },
        f = (o) => {
          $_$();
          h({ isEnabled: o, sportId: e(t).sportId });
        };
      return (
        z({
          game: t,
          markets: c,
          gameLink: i,
          champName: _,
          isActive: r,
          bettingType: a,
          source: J.TopGames,
          onFavoriteAdd: y,
          onMarketToCouponAdd: C,
          onVideoEnable: f,
        }),
        {
          toggle: () => {
            $_$();
            e(r) || (p(), T());
          },
          isActive: r,
        }
      );
    },
  });
function ie(n, t, a, s, i, r) {
  $_$();
  const p = B("UiSportsEvent");
  return (
    m(),
    l(
      p,
      {
        onClick: w(n.toggle, ["stop"]),
        fakeLink: n.isActive,
        hasDetailedScore: "",
      },
      null,
      8,
      ["onClick", "fakeLink"]
    )
  );
}
const me = N(se, [["render", ie]]),
  pe = { UiButton: A.primary },
  de = { key: 0, class: "top-games-app__expanded" },
  ue = b({
    __name: "TopGames",
    emits: ["onUpdate"],
    setup(n, { emit: t }) {
      $_$();
      const a = t,
        { pageType: s, bettingType: i } = V(),
        r = D(),
        p = v(() => (r.isAsianView ? "asiaLoad" : "load")),
        {
          topGamesList: c,
          slideNumber: _,
          topGamesSwipeDirection: k,
          currentGame: g,
          isFirstLoad: G,
          isVisibleExpanded: h,
          isVisibleIcon: T,
          topGamesLink: y,
        } = te({ pageType: s, bettingType: i, methodName: e(p) });
      return (
        x(c, () => {
          $_$();
          a("onUpdate", !e(c).length);
        }),
        F(() => {
          a("onUpdate", void 0);
        }),
        (C, f) => {
          $_$();
          const U = B("UiIco"),
            o = B("UiNavLink"),
            E = B("UiButton");
          return (
            m(),
            l(
              oe,
              { class: "top-games-app", isRounded: "" },
              {
                default: d(
                  () =>
                    $_$() && [
                      e(h)
                        ? (m(),
                          I("div", de, [
                            u(
                              o,
                              { to: e(y), theme: e(A).primary },
                              {
                                ico: d(
                                  () =>
                                    $_$() && [
                                      u(U, { ico: e(L).AWARD }, null, 8, [
                                        "ico",
                                      ]),
                                    ]
                                ),
                                after: d(
                                  () =>
                                    $_$() && [
                                      u(
                                        ee,
                                        {
                                          modelValue: e(_),
                                          "onUpdate:modelValue":
                                            f[0] ||
                                            (f[0] = (R) =>
                                              $_$() && P(_)
                                                ? (_.value = R)
                                                : null),
                                          total: e(c).length || 1,
                                          class: "top-games-app__stepper",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "total"]
                                      ),
                                    ]
                                ),
                                default: d(
                                  () =>
                                    $_$() && [
                                      M(
                                        " " + O(C.$T("main_top_games")) + " ",
                                        1
                                      ),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["to", "theme"]
                            ),
                            e(G)
                              ? (m(), l(Z, { key: "loading", gameCount: 1 }))
                              : (m(),
                                l(
                                  ne,
                                  {
                                    key: 1,
                                    theme: e(A).gray30,
                                    class: j([
                                      `top-games-app-list--swipe-${e(k)}`,
                                      "top-games-app__list top-games-app-list",
                                    ]),
                                  },
                                  {
                                    default: d(
                                      () =>
                                        $_$() && [
                                          u(
                                            W,
                                            { name: "swipe", mode: "out-in" },
                                            {
                                              default: d(
                                                () =>
                                                  $_$() && [
                                                    e(g)
                                                      ? (m(),
                                                        I(
                                                          "li",
                                                          {
                                                            key: e(g).id,
                                                            class:
                                                              "top-games-app-list__item",
                                                          },
                                                          [
                                                            u(
                                                              me,
                                                              { game: e(g) },
                                                              null,
                                                              8,
                                                              ["game"]
                                                            ),
                                                          ]
                                                        ))
                                                      : S("", !0),
                                                  ]
                                              ),
                                              _: 1,
                                            }
                                          ),
                                        ]
                                    ),
                                    _: 1,
                                  },
                                  8,
                                  ["theme", "class"]
                                )),
                          ]))
                        : S("", !0),
                      e(T)
                        ? (m(),
                          l(
                            E,
                            {
                              key: 1,
                              tag: "span",
                              narrow: "",
                              theme: e(pe).UiButton,
                            },
                            {
                              default: d(
                                () =>
                                  $_$() && [
                                    u(U, { ico: e(L).AWARD }, null, 8, ["ico"]),
                                  ]
                              ),
                              _: 1,
                            },
                            8,
                            ["theme"]
                          ))
                        : S("", !0),
                    ]
                ),
                _: 1,
              }
            )
          );
        }
      );
    },
  }),
  le = N(ue, [["__scopeId", "data-v-8f572c30"]]),
  Ce = b({
    __name: "TopGamesApp",
    emits: ["onUpdate"],
    setup(n) {
      $_$();
      const t = re(),
        { routePageType: a } = K(),
        s = v(() => t.currentBettingType);
      return (
        ae({ pageType: a, bettingType: s }),
        (i, r) =>
          $_$() &&
          (m(),
          l(le, { onOnUpdate: r[0] || (r[0] = (p) => i.$emit("onUpdate", p)) }))
      );
    },
  });
export { Ce as _sfc_main };
