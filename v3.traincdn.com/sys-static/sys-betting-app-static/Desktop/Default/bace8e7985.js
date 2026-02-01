import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./1233692f38.js",
      "./858ab97c10.js",
      "./9de70556bb.js",
      "./entry-50afb6f36c.js",
      "./7fd3152d11.js",
      "./1af6a171a2.js",
      "./60e9c9f553.js",
      "./3e34d5417a.js",
      "./e1e32a66a3.js",
      "./9816d50199.js",
      "./dd584157d6.js",
      "./d31ab0f81e.css",
      "./37dd3dae1b.js",
      "./e063df8dd1.js",
      "./9e4e245c05.js",
      "./58a21526ee.js",
      "./ff2996a70d.js",
      "./944eab39d4.js",
      "./4a993370c6.js",
      "./6550e9bfb1.js",
      "./c7ea6bc74a.js",
      "./aa92bf211f.js",
      "./60d766cde4.js",
      "./d9b2a5f43f.css",
      "./25dbd9c5df.js",
      "./669f85a6b8.js",
      "./e37cc43aaf.js",
      "./21d225424a.css",
      "./f0c49800c9.js",
      "./3f699c5f61.css",
      "./fc0a56fa04.js",
      "./ec3ca45058.css",
      "./f1156f93a8.js",
      "./45960b1673.css",
      "./5f6b076bc4.js",
      "./5778b17fae.css",
      "./6a64c59e39.js",
      "./c4adc8e78d.css",
      "./4b4dfdeaaf.js",
      "./4e4f01046c.js",
      "./bb0d3b59f5.js",
      "./6e5c097416.js",
      "./8f9f3730d0.css",
      "./762b07d264.js",
      "./3004035142.js",
      "./10dcfb9c91.js",
      "./11286bfc75.js",
      "./2ac826c613.js",
      "./ef72a4a5b8.css",
      "./ef908ad829.js",
      "./1304d73c92.js",
      "./ecc6fae2c0.css",
      "./c6fc48d2a3.js",
      "./955aa4183c.css",
    ])
) => $_$() && i.map((i) => d[i]);
import { withAsyncContext as $ } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  createSharedComposable_createSharedComposable_2 as z,
  runtimeCore_esmBundler_defineComponent as h,
  runtimeCore_esmBundler_computed as f,
  runtimeCore_esmBundler_resolveComponent as I,
  runtimeCore_esmBundler_resolveDirective as P,
  runtimeCore_esmBundler_withDirectives as D,
  runtimeCore_esmBundler_createBlock as _,
  runtimeCore_esmBundler_openBlock as s,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_withCtx as b,
  runtimeCore_esmBundler_createVNode as y,
  runtimeCore_esmBundler_createTextVNode as E,
  shared_esmBundler_toDisplayString as F,
  index_getConfig as k,
  BettingPageType as N,
  runtimeCore_esmBundler_createElementBlock as S,
  shared_esmBundler_normalizeClass as U,
  runtimeCore_esmBundler_createCommentVNode as T,
  runtimeCore_esmBundler_createElementVNode as O,
  runtimeCore_esmBundler_defineAsyncComponent as W,
  useGlobalStore as R,
  useRouterMethodsWithLang as x,
  reactivity_esmBundler_toRef as G,
  clientOnly_default as H,
  runtimeCore_esmBundler_getCurrentInstance as j,
  useNuxtApp as w,
  execAsync as Y,
  runtimeCore_esmBundler_mergeProps as A,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useCentralMenuContext as M,
  CountryFilterAppDataProvider as q,
  CountryFilterSelect as J,
} from "./e874112bff.js";
import {
  BreadcrumbsAppDataProvider as K,
  MatchTabFilterApp as Q,
} from "./e721307dd7.js";
import { GamesSearchApp as X } from "./84227e1b8b.js";
import { useBettingStore as Z } from "./1af6a171a2.js";
import {
  useCommonAnalytics as ee,
  _export_sfc as C,
  __vitePreload as te,
  defineMultiImplementedComponent as ne,
  Platforms as oe,
  loadCentralMenuConfig as re,
} from "./entry-50afb6f36c.js";
import { useMatchTabFilter as V } from "./858ab97c10.js";
import { MenuLoader as ae } from "./1304d73c92.js";
import { NavigationSportMenuColorTheme as le } from "./60e9c9f553.js";
import { CountryFilterType as ie } from "./aa92bf211f.js";
const se = z(() => {
    const { sendGTagEvent: c, sendGoogleAndFatmanEvent: o } = ee({
      analyticsCategory: "v3_Дашборд",
    });
    return {
      trackLiveIconToggle: (n) => {
        c(`v3_Клик "${n ? "События с трансляцией" : "Все события"}"`);
        const a = n ? "live_online" : "live_all";
        o(
          { google: "main_filter_call", fatman: 1079 },
          { google: { option: a }, fatman: { s1: a } }
        );
      },
    };
  }),
  ce = h({
    __name: "CentralMenuLiveToggle",
    props: { config: {} },
    setup(c) {
      $_$();
      const { trackLiveIconToggle: o } = se(),
        t = Z(),
        n = f(() => t.bettingIsOnlyWithVideos),
        a = (r) => {
          $_$();
          t.bettingSetIsOnlyWithVideos(r), o(!e(n));
        };
      return (r, l) => {
        $_$();
        const i = I("UiCaption"),
          p = I("UiSelection"),
          d = P("tooltip");
        return D(
          (s(),
          _(
            p,
            {
              "onUpdate:modelValue": a,
              type: "tumbler",
              hasInnerOffset: !1,
              "aria-label": r.$T("menu_control_translation"),
              modelValue: e(n),
              theme: r.config.toggleSelectionTheme,
              class: "central-menu-live-toggle",
            },
            {
              default: b(
                () =>
                  $_$() && [
                    y(
                      i,
                      { size: r.config.toggleCaptionSize, noWrap: "" },
                      {
                        default: b(
                          () =>
                            $_$() && [
                              E(F(r.$T("menu_control_translation_short")), 1),
                            ]
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
            ["aria-label", "modelValue", "theme"]
          )),
          [[d, r.$T("menu_control_translation")]]
        );
      };
    },
  }),
  L = C(ce, [["__scopeId", "data-v-7ee68ef5"]]),
  ue = { class: "central-menu-header__block" },
  pe = h({
    __name: "CentralMenuHeader",
    props: { config: {}, isShowMenuToggleInHeader: { type: Boolean } },
    setup(c) {
      $_$();
      const o = c,
        t = M(),
        n = V(),
        a = k(412),
        r = f(() => $_$() && t.pageType !== N.MARBLE),
        l = f(
          () =>
            $_$() &&
            t.isLive &&
            a &&
            o.isShowMenuToggleInHeader &&
            e(n.liveTab) !== 1
        );
      return (i, p) =>
        $_$() &&
        (s(),
        S(
          "div",
          {
            class: U([
              [
                { "central-menu-header--is-rounded": i.config.roundedToolbar },
                `central-menu-header--theme-${i.config.headerBarTheme}`,
              ],
              "central-menu-header",
            ]),
          },
          [
            e(t).showSectionIndicator
              ? (s(),
                _(
                  e(K),
                  {
                    key: 0,
                    pageType: e(t).pageType,
                    bettingType: e(t).bettingType,
                    class: "central-menu-header__breadcrumbs",
                  },
                  null,
                  8,
                  ["pageType", "bettingType"]
                ))
              : T("", !0),
            O("div", ue, [
              e(r)
                ? (s(),
                  _(
                    e(Q),
                    {
                      key: `${e(t).pageType}-${e(t).bettingType}`,
                      pageType: e(t).pageType,
                      bettingType: e(t).bettingType,
                      tabs: e(t).filterTabs,
                      defaultTabType: e(t).defaultFilterTab,
                      class: "central-menu-header__filter",
                    },
                    null,
                    8,
                    ["pageType", "bettingType", "tabs", "defaultTabType"]
                  ))
                : T("", !0),
              e(l)
                ? (s(), _(L, { key: 1, config: i.config }, null, 8, ["config"]))
                : T("", !0),
              y(
                e(X),
                {
                  bettingType: e(t).bettingType,
                  uiSearchSize: i.config.gamesSearchSize,
                  uiSearchButtonSize: i.config.gamesButtonSearchSize,
                },
                null,
                8,
                ["bettingType", "uiSearchSize", "uiSearchButtonSize"]
              ),
            ]),
          ],
          2
        ));
    },
  }),
  me = C(pe, [["__scopeId", "data-v-59ed012d"]]),
  _e = { class: "central-menu-toolbar" },
  de = { class: "central-menu-toolbar__sports" },
  ge = h({
    __name: "CentralMenuToolbar",
    props: { config: {}, isShowMenuToggleInToolbar: { type: Boolean } },
    setup(c) {
      $_$();
      const o = c,
        t = W({
          loader: () =>
            te(
              () => import("./1233692f38.js"),
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
                34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                50, 51, 52, 53,
              ]),
              import.meta.url
            ),
          loadingComponent: ae,
          suspensible: !1,
          delay: 0,
        }),
        n = V(),
        a = R(),
        { routerPushWithLang: r } = x(G(() => a.language)),
        l = M(),
        i = k(412),
        p = new le(o.config.navigationSportMenuThemeOptions),
        d = f(
          () =>
            $_$() &&
            l.isLive &&
            i &&
            o.isShowMenuToggleInToolbar &&
            e(n.liveTab) !== 1
        ),
        v = ({ route: m }) => {
          r(m);
        };
      return (m, B) => {
        $_$();
        const u = H;
        return (
          s(),
          S("div", _e, [
            e(d)
              ? (s(),
                _(
                  L,
                  {
                    key: 0,
                    config: m.config,
                    class: "central-menu-toolbar__toggle",
                  },
                  null,
                  8,
                  ["config"]
                ))
              : T("", !0),
            O("div", de, [
              y(u, null, {
                default: b(
                  () =>
                    $_$() && [
                      y(
                        e(t),
                        {
                          clickGame: v,
                          pageType: e(l).pageType,
                          bettingType: e(l).bettingType,
                          componentsThemes: e(p),
                        },
                        null,
                        8,
                        ["pageType", "bettingType", "componentsThemes"]
                      ),
                    ]
                ),
                _: 1,
              }),
              e(l).isCountryDropdownVisible
                ? (s(),
                  _(
                    q,
                    {
                      key: 0,
                      pageType: e(l).pageType,
                      bettingType: e(l).bettingType,
                    },
                    {
                      default: b(
                        () =>
                          $_$() && [
                            y(
                              J,
                              {
                                class: "central-menu-toolbar__filter",
                                type: e(ie).TOOLBAR,
                              },
                              null,
                              8,
                              ["type"]
                            ),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["pageType", "bettingType"]
                  ))
                : T("", !0),
            ]),
          ])
        );
      };
    },
  }),
  ye = C(ge, [["__scopeId", "data-v-7c26d85e"]]),
  Te = { class: "central-menu" },
  fe = h({
    __name: "CentralMenu",
    props: {
      isShowMenuToggleInHeader: { type: Boolean, default: !1 },
      isShowMenuToggleInToolbar: { type: Boolean, default: !0 },
    },
    async setup(c) {
      $_$();
      let o, t, n, a;
      const r = c,
        l = {
          defineEntityImplementation: () =>
            $_$() && { props: c, emit: j().emit },
        };
      ne("CentralMenu", { props: r }, !0, [oe.Desktop]);
      const { props: i } = l.defineEntityImplementation(),
        p = (() => {
          $_$();
          var u, g;
          return (g =
            (u = w().$multiBuildConfig) == null ? void 0 : u.CentralMenu) ==
            null
            ? void 0
            : g.style;
        })(),
        d = {
          ...i,
          ...(() => {
            $_$();
            var u, g;
            return (g =
              (u = w().$multiBuildConfig) == null ? void 0 : u.CentralMenu) ==
              null
              ? void 0
              : g.props;
          })(),
        },
        v =
          (([n, a] = $(() => re())),
          (n = (([o, t] = Y(() => n)), (o = await o), t(), o)),
          a(),
          n),
        { config: m } = v(),
        B = M();
      return (u, g) =>
        $_$() &&
        (s(),
        S("div", Te, [
          y(
            me,
            A(d, { config: e(m), style: e(p), class: "central-menu__bar" }),
            null,
            16,
            ["config", "style"]
          ),
          e(B).showToolbar
            ? (s(),
              _(
                ye,
                A({ key: 0 }, d, {
                  config: e(m),
                  style: e(p),
                  class: [
                    { "central-menu__bar--rounded": e(m).roundedToolbar },
                    "central-menu__bar",
                  ],
                }),
                null,
                16,
                ["config", "style", "class"]
              ))
            : T("", !0),
        ]));
    },
  }),
  be = C(fe, [["__scopeId", "data-v-23b5e5e8"]]),
  Le = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: be },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function he() {
  throw new Error("You can't use sync loaders on client");
}
const $e = Object.freeze(
  Object.defineProperty({ __proto__: null, default: he }, Symbol.toStringTag, {
    value: "Module",
  })
);
export { Le as CentralMenu, $e as loadCentralMenuSync };
