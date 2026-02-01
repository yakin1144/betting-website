import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as z } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as F,
  runtimeCore_esmBundler_resolveComponent as r,
  runtimeCore_esmBundler_createBlock as h,
  runtimeCore_esmBundler_openBlock as m,
  reactivity_esmBundler_unref as e,
  size_constants_sizeType as P,
  runtimeCore_esmBundler_withCtx as p,
  runtimeCore_esmBundler_createVNode as i,
  iconName as k,
  runtimeCore_esmBundler_computed as a,
  runtimeCore_esmBundler_createElementBlock as I,
  runtimeCore_esmBundler_Fragment as $,
  runtimeCore_esmBundler_withDirectives as b,
  shared_esmBundler_normalizeClass as O,
  theme_constants_themeType as A,
  runtimeCore_esmBundler_createTextVNode as q,
  shared_esmBundler_toDisplayString as Y,
  runtimeDom_esmBundler_vShow as S,
  runtimeCore_esmBundler_getCurrentInstance as j,
  execAsync as J,
  bettingType_BettingType as E,
  useGlobalStore as K,
  reactivity_esmBundler_ref as Q,
  runtimeCore_esmBundler_createElementVNode as W,
  runtimeCore_esmBundler_createCommentVNode as X,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as U,
  useToggleTitle as Z,
  defineMultiImplementedComponent as ee,
  Platforms as te,
  loadFavoritesAppConfigDesktop as oe,
  useBettingRouteData as ie,
} from "./entry-50afb6f36c.js";
import {
  useFavoritesDataProvider as ne,
  _sfc_main as re,
} from "./65d50a5e16.js";
import { useMatchTabFilter as se } from "./858ab97c10.js";
import { useBettingStateProvider as ae } from "./9de70556bb.js";
import { useFavoritesStore as me } from "./6e5c097416.js";
import { useBettingStore as pe } from "./1af6a171a2.js";
import { useSportsRoute as _e } from "./f1156f93a8.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "./669f85a6b8.js";
import "./e37cc43aaf.js";
import "./f0c49800c9.js";
import "./fc0a56fa04.js";
import "./5f6b076bc4.js";
import "./6a64c59e39.js";
import "./4a993370c6.js";
import "./4b4dfdeaaf.js";
import "./4e4f01046c.js";
import "./bb0d3b59f5.js";
import "./c7ea6bc74a.js";
import "./944eab39d4.js";
import "./e2e2382b6a.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
import "./7fd3152d11.js";
const ce = F({
    __name: "FavoriteEmpty",
    setup(u) {
      return (n, _) => {
        $_$();
        const t = r("UiIco"),
          s = r("T"),
          c = r("UiMessageBlockV2");
        return (
          m(),
          h(
            c,
            { size: e(P).s, rounded: !1, class: "favorite-empty" },
            {
              default: p(
                () =>
                  $_$() && [
                    i(
                      s,
                      { tmp: "betting_favorite_empty" },
                      {
                        icon: p(
                          () =>
                            $_$() && [
                              i(
                                t,
                                {
                                  square: "",
                                  ico: e(k).STAR_EMPTY,
                                  class: "favorite-empty__ico",
                                },
                                null,
                                8,
                                ["ico"]
                              ),
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
            ["size"]
          )
        );
      };
    },
  }),
  le = U(ce, [["__scopeId", "data-v-c487c432"]]),
  ue = F({
    __name: "FavoriteButton",
    props: { isHidden: { type: Boolean }, isOpen: { type: Boolean } },
    emits: ["toggle"],
    setup(u, { emit: n }) {
      $_$();
      const _ = u,
        t = n,
        { getToggleTitle: s } = Z(),
        c = a(() => $_$() && s(e(_.isOpen)));
      return (o, d) => {
        $_$();
        const f = r("UiIco"),
          B = r("UiNavLinkToggle"),
          T = r("UiNavLink"),
          g = r("UiButton");
        return (
          m(),
          I(
            $,
            null,
            [
              b(
                i(
                  T,
                  {
                    theme: e(A).primary,
                    clickable: !1,
                    class: O([
                      "favorites-button favorites-button__toggle",
                      { "favorites-button__toggle--is-opened": o.isOpen },
                    ]),
                  },
                  {
                    ico: p(
                      () =>
                        $_$() && [i(f, { ico: e(k).STAR }, null, 8, ["ico"])]
                    ),
                    after: p(
                      () =>
                        $_$() && [
                          i(
                            B,
                            {
                              onClick: d[0] || (d[0] = (v) => t("toggle")),
                              isToggled: o.isOpen,
                              "aria-expanded": o.isOpen,
                              title: e(c),
                            },
                            null,
                            8,
                            ["isToggled", "aria-expanded", "title"]
                          ),
                        ]
                    ),
                    default: p(
                      () =>
                        $_$() && [
                          q(" " + Y(o.$T("betting_favorite_games")) + " ", 1),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["theme", "class"]
                ),
                [[S, !o.isHidden]]
              ),
              b(
                i(
                  g,
                  { tag: "span", narrow: "", theme: e(A).primary },
                  {
                    default: p(
                      () =>
                        $_$() && [i(f, { ico: e(k).STAR }, null, 8, ["ico"])]
                    ),
                    _: 1,
                  },
                  8,
                  ["theme"]
                ),
                [[S, o.isHidden]]
              ),
            ],
            64
          )
        );
      };
    },
  }),
  de = U(ue, [["__scopeId", "data-v-8a6792ad"]]),
  fe = { class: "favorites-app__container" },
  ge = { key: 0 },
  ve = F({
    __name: "FavoritesApp",
    async setup(u) {
      $_$();
      let n, _, t, s;
      const c = {
        defineEntityImplementation: () => $_$() && { props: u, emit: j().emit },
      };
      ee("FavoritesApp", { props: {} }, !0, [te.Desktop]),
        c.defineEntityImplementation();
      const o =
          (([t, s] = z(() => oe())),
          (t = (([n, _] = J(() => t)), (n = await n), _(), n)),
          s(),
          t),
        { config: d } = o(),
        f = pe(),
        { routePageType: B } = ie(),
        { liveTab: T } = se(),
        g = a(() => $_$() && e(B)),
        v = a(() => ($_$() && e(T) === 1 ? E.LINE : f.currentBettingType));
      ae({ pageType: g, bettingType: v }),
        ne({ pageType: g, bettingType: v, config: d });
      const D = K(),
        {
          favoriteGamesLine: V,
          favoriteGamesLive: w,
          checkGameIsFavorite: G,
        } = me(),
        { sport: H } = _e(),
        l = Q(!1),
        M = a(() => {
          $_$();
          const y = e(H),
            C = e(v) === E.LINE ? e(V) : e(w);
          return C
            ? C.filter((L) => G(L.id) && (y ? L.sportId === y.id : !0))
            : [];
        }),
        R = a(() => $_$() && e(M).length),
        N = a(() => !D.isLeftSectionVisible),
        x = () => {
          $_$();
          l.value = !e(l);
        };
      return (y, C) =>
        $_$() &&
        (m(),
        I(
          "li",
          { class: O([{ "favorites-app--is-opened": e(l) }, "favorites-app"]) },
          [
            W("div", fe, [
              i(de, { onToggle: x, isHidden: e(N), isOpen: e(l) }, null, 8, [
                "isHidden",
                "isOpen",
              ]),
              e(l)
                ? b(
                    (m(),
                    I(
                      "div",
                      ge,
                      [
                        e(R)
                          ? (m(),
                            h(re, { key: 0, class: "favorites-app__list" }))
                          : (m(),
                            h(le, { key: 1, class: "favorites-app__empty" })),
                      ],
                      512
                    )),
                    [[S, !e(N)]]
                  )
                : X("", !0),
            ]),
          ],
          2
        ));
    },
  }),
  qe = U(ve, [["__scopeId", "data-v-a1f91a41"]]);
export { qe as default };
