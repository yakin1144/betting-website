import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./2a3fc823b6.js", "./entry-50afb6f36c.js"])
) => $_$() && i.map((i) => d[i]);
import {
  reactivity_esmBundler_shallowRef as de,
  runtimeCore_esmBundler_computed as m,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_onMounted as me,
  runtimeCore_esmBundler_onUnmounted as _e,
  reactivity_esmBundler_toValue as ue,
  execAsync as ee,
  runtimeCore_esmBundler_nextTick as ye,
  runtimeCore_esmBundler_defineComponent as B,
  runtimeCore_esmBundler_resolveComponent as E,
  runtimeCore_esmBundler_createElementBlock as _,
  runtimeCore_esmBundler_openBlock as r,
  runtimeCore_esmBundler_createVNode as l,
  runtimeCore_esmBundler_withCtx as I,
  runtimeCore_esmBundler_createElementVNode as g,
  runtimeCore_esmBundler_Fragment as W,
  runtimeCore_esmBundler_renderList as X,
  createModal_createModal as ge,
  UiPreloader_default as fe,
  index_useT as j,
  index_useVModal as xe,
  index_getConfig as se,
  runtimeCore_esmBundler_resolveDirective as oe,
  shared_esmBundler_normalizeClass as G,
  runtimeCore_esmBundler_renderSlot as te,
  runtimeCore_esmBundler_withDirectives as V,
  size_constants_sizeType as q,
  runtimeCore_esmBundler_createTextVNode as S,
  shared_esmBundler_toDisplayString as v,
  iconName as he,
  shared_esmBundler_normalizeStyle as Z,
  nuxtLink_default as ke,
  runtimeCore_esmBundler_createCommentVNode as z,
  runtimeCore_esmBundler_createBlock as $,
  index_getConfigs as Ce,
  useNotifications_useNotifications as ve,
  runtimeCore_esmBundler_watch as ne,
  theme_constants_themeType as Ie,
  useGlobalStore as be,
  reactivity_esmBundler_toRef as F,
  reactivity_esmBundler_ref as Y,
  useTimeSettings_useTimeSettings as De,
  reactivity_esmBundler_isRef as Te,
  reactivity_esmBundler_toRefs as Ee,
  router_useRoute as Be,
  BettingPageType as Me,
  onNuxtReady as Se,
  bettingType_BettingType as P,
  clientOnly_default as $e,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as N,
  __vitePreload as ze,
  useGameLink as Le,
  useCouponAnalytics as we,
  useCouponStore as Oe,
  loadExpressDayConfigDesktop as Ue,
  useExpressDaySettings as Ne,
} from "./entry-50afb6f36c.js";
import { withAsyncContext as Ae } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  useExpressDayAppInjector as R,
  useExpressDayAppProvider as Ve,
} from "./4b18613dac.js";
import {
  useExpressDayAnalytics as J,
  COUPON_MAX_BETS_DEFAULT as Ge,
} from "./92d7aaf3bf.js";
import {
  useExpressDay as He,
  ExpressDayLoadingStatus as Pe,
} from "./a0e9c441b8.js";
import { UiBettingStepper as Re } from "./626f06f14d.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "./9de70556bb.js";
import "./7fd3152d11.js";
import "./1af6a171a2.js";
import "./bb0d3b59f5.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
const Ke = "header.header",
  Fe = (y) => {
    $_$();
    const o = de(),
      s = { observer: null, offset: 0 },
      n = m(() => {
        $_$();
        var a, d;
        return {
          "--betting-express-day-scroll-offset": `${
            (d = (a = e(o)) == null ? void 0 : a.offsetHeight) != null ? d : 0
          }px`,
        };
      }),
      i = (a) => a.scrollIntoView({ behavior: "instant", block: "start" }),
      f = (a) => {
        (s.observer = new IntersectionObserver(
          ([{ isIntersecting: d }]) => {
            const { offsetTop: c } = a,
              h = c > s.offset;
            if (((s.offset = c), h && !d)) return i(a);
            d || s.observer.disconnect();
          },
          { threshold: 0.3 }
        )),
          s.observer.observe(a);
      },
      u = async () => {
        $_$();
        let a, d;
        const c = ue(y);
        c instanceof HTMLElement &&
          (([a, d] = ee(() => $_$() && ye())), await a, d(), i(c), f(c));
      };
    return (
      me(() => {
        o.value = document.querySelector(Ke);
      }),
      _e(() => {
        var a;
        return (a = s.observer) == null ? void 0 : a.disconnect();
      }),
      { run: u, style: n }
    );
  },
  We = { class: "express-day-loader" },
  Xe = B({
    __name: "ExpressDayLoader",
    props: { config: {} },
    setup(y) {
      return (o, s) => {
        $_$();
        const n = E("UiSkeleton");
        return (
          r(),
          _("div", We, [
            l(
              n,
              {
                theme: o.config.expressDayLoaderHeaderTheme,
                class: "express-day-loader__header",
              },
              null,
              8,
              ["theme"]
            ),
            l(
              n,
              {
                theme: o.config.expressDayLoaderContentTheme,
                class: "express-day-loader__content",
              },
              {
                default: I(
                  () =>
                    $_$() && [
                      (r(),
                      _(
                        W,
                        null,
                        X(
                          3,
                          (i) =>
                            $_$() &&
                            g("div", {
                              key: "express-day-loader__game" + i,
                              class: "express-day-loader__game",
                            })
                        ),
                        64
                      )),
                      (r(),
                      _(
                        W,
                        null,
                        X(
                          2,
                          (i) =>
                            $_$() &&
                            g("div", {
                              key: `express-day-loader__info$+${i}`,
                              class: "express-day-loader__info",
                            })
                        ),
                        64
                      )),
                      s[0] ||
                        (s[0] = g(
                          "div",
                          { class: "express-day-loader__button" },
                          null,
                          -1
                        )),
                    ]
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
  Ye = N(Xe, [["__scopeId", "data-v-bb61ba11"]]),
  je = () =>
    $_$() &&
    ge({
      name: "EXPRESS_DAY_MODAL",
      component: () =>
        ze(
          () => import("./2a3fc823b6.js"),
          __vite__mapDeps([0, 1]),
          import.meta.url
        ),
      componentLoader: fe,
    }),
  qe = ["aria-label"],
  Ze = "express_day_live",
  Je = B({
    __name: "ExpressDayItemHeader",
    props: { page: {}, config: {} },
    setup(y) {
      $_$();
      var o;
      const s = j(),
        n = xe(),
        { clickDelete: i } = J(),
        { bettingType: f, isCyberSport: u, isLive: a } = R(),
        c = {
          live: {
            cyber: "express_cyber_day_live",
            default: (o = se(359)) != null ? o : Ze,
          },
          line: {
            cyber: "express_cyber_day_line",
            default: "express_day_line",
          },
        },
        h = m(() => {
          $_$();
          const x = e(a) ? "live" : "line",
            b = e(u) ? "cyber" : "default",
            D = c[x][b];
          return s(D);
        }),
        k = () => {
          $_$();
          n.show(je(), { bettingType: e(f) }), i(e(a));
        };
      return (x, b) => {
        $_$();
        const D = E("UiCaption"),
          L = E("UiIco"),
          w = oe("tooltip");
        return (
          r(),
          _(
            "div",
            {
              class: G([
                "express-day-item-header",
                `express-day-item-header--theme-${x.config.expressDayItemHeaderTheme}`,
              ]),
            },
            [
              te(x.$slots, "default", {}, void 0, !0),
              l(
                D,
                {
                  size: e(q).m,
                  weight: x.config.expressDayItemHeaderCaptionWeight,
                  class: "express-day-item-header__title",
                },
                { default: I(() => $_$() && [S(v(e(h)), 1)]), _: 1 },
                8,
                ["size", "weight"]
              ),
              V(
                (r(),
                _(
                  "button",
                  {
                    onClick: k,
                    "aria-label": x.$T("main_delete"),
                    type: "button",
                    class: "express-day-item-header__delete",
                  },
                  [
                    l(
                      L,
                      {
                        size: x.config.expressDayItemHeaderDeleteIcoSize,
                        ico: e(he).TIMES,
                      },
                      null,
                      8,
                      ["size", "ico"]
                    ),
                  ],
                  8,
                  qe
                )),
                [[w, { content: x.$T("main_delete") }]]
              ),
            ],
            2
          )
        );
      };
    },
  }),
  ae = N(Je, [["__scopeId", "data-v-d9966584"]]),
  Qe = { class: "express-day-game__wrapper" },
  es = { class: "express-day-game__content" },
  ss = { class: "express-day-game__date" },
  os = { class: "express-day-game__subtext" },
  ts = { class: "express-day-game__subtext" },
  ns = { key: 0, class: "express-day-game__player express-day-game-player" },
  as = { class: "express-day-game-player__name" },
  rs = { key: 1, class: "express-day-game__player express-day-game-player" },
  is = { class: "express-day-game-player__name" },
  ps = { class: "express-day-game__wrapper" },
  cs = { class: "express-day-game__champ express-day-game-champ" },
  ls = { class: "express-day-game__info" },
  ds = B({
    __name: "ExpressDayGame",
    props: { game: {}, couponMarketIds: {}, config: {}, styles: {} },
    emits: ["toggle:market"],
    setup(y, { emit: o }) {
      $_$();
      const s = y,
        n = o,
        { clickGame: i, sendMarketToCoupon: f } = J(),
        u = se(327),
        { bettingType: a, pageType: d, isLive: c } = R(),
        { gameLink: h } = Le({ game: s.game, bettingType: a, pageType: d }),
        k = m(() =>
          s.game.markets && s.game.markets.length > 0 ? s.game.markets[0] : {}
        ),
        x = m(() => $_$() && s.couponMarketIds.includes(e(k).id)),
        b = m(() => {
          $_$();
          const { groupName: p = "", name: M = "", gameName: t = "" } = e(k);
          return `${p} ${M} ${t}`;
        }),
        D = m(() => {
          const {
              number: p = "",
              champName: M = "",
              periodName: t = "",
            } = s.game,
            C = t && `/ ${t}`;
          return `${p} / ${M} ${C}`;
        }),
        L = () => {
          $_$();
          n("toggle:market", e(k)), f(e(c));
        },
        w = () => $_$() && i(e(c));
      return (p, M) => {
        $_$();
        const t = E("UiIcoTeam"),
          C = ke,
          O = E("UiMarket"),
          U = E("UiIcoSport"),
          T = oe("tooltip");
        return (
          r(),
          _(
            "div",
            {
              class: G([
                "express-day-game",
                `express-day-game--theme-${p.config.expressDayGameTheme}`,
              ]),
              style: Z(p.styles),
            },
            [
              g("div", Qe, [
                g("div", es, [
                  g("div", ss, [
                    g("p", os, v(p.game.dateMonth), 1),
                    g("p", ts, v(p.game.startTimeFormatted), 1),
                  ]),
                  l(
                    C,
                    {
                      onClick: w,
                      to: e(h),
                      class: "express-day-game__players",
                    },
                    {
                      default: I(
                        () =>
                          $_$() && [
                            p.game.firstOpponentName
                              ? (r(),
                                _("div", ns, [
                                  e(u)
                                    ? V(
                                        (r(),
                                        $(
                                          t,
                                          {
                                            key: 0,
                                            label: p.game.firstOpponentName,
                                            image: p.game.firstOpponentLogo,
                                            countryIco:
                                              p.game.firstOpponentCountryId,
                                            class:
                                              "express-day-game-player__ico",
                                          },
                                          null,
                                          8,
                                          ["label", "image", "countryIco"]
                                        )),
                                        [[T, p.game.firstOpponentName]]
                                      )
                                    : z("", !0),
                                  g("p", as, v(p.game.firstOpponentName), 1),
                                ]))
                              : z("", !0),
                            p.game.secondOpponentName
                              ? (r(),
                                _("div", rs, [
                                  e(u)
                                    ? V(
                                        (r(),
                                        $(
                                          t,
                                          {
                                            key: 0,
                                            label: p.game.secondOpponentName,
                                            image: p.game.secondOpponentLogo,
                                            countryIco:
                                              p.game.secondOpponentCountryId,
                                            class:
                                              "express-day-game-player__ico",
                                          },
                                          null,
                                          8,
                                          ["label", "image", "countryIco"]
                                        )),
                                        [[T, p.game.secondOpponentName]]
                                      )
                                    : z("", !0),
                                  g("p", is, v(p.game.secondOpponentName), 1),
                                ]))
                              : z("", !0),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ),
                ]),
                l(
                  O,
                  {
                    onClick: L,
                    coefByView: e(k).coefByView,
                    coef: e(k).coef,
                    theme: p.config.expressDayGameUiMarketTheme,
                    isActive: e(x),
                    class: "express-day-game__market",
                  },
                  null,
                  8,
                  ["coefByView", "coef", "theme", "isActive"]
                ),
              ]),
              g("div", ps, [
                V(
                  (r(),
                  _("span", cs, [
                    l(
                      U,
                      {
                        ico: p.game.sportId,
                        size: e(q).xs,
                        class: "express-day-game-champ__ico",
                      },
                      null,
                      8,
                      ["ico", "size"]
                    ),
                    S(" " + v(e(D)), 1),
                  ])),
                  [[T, e(D)]]
                ),
                V((r(), _("p", ls, [S(v(e(b)), 1)])), [[T, e(b)]]),
              ]),
            ],
            6
          )
        );
      };
    },
  }),
  ms = N(ds, [["__scopeId", "data-v-0354dcba"]]),
  _s = { class: "express-day-info" },
  us = B({
    __name: "ExpressDayInfo",
    props: { express: {}, config: {} },
    setup(y) {
      return (o, s) => {
        $_$();
        const n = E("UiCaption");
        return (
          r(),
          _("div", _s, [
            o.express.bonusMarket
              ? (r(),
                _(
                  "div",
                  {
                    key: 0,
                    class: G([
                      "express-day-info__item",
                      `express-day-info--theme-${o.config.expressDayInfoTheme}`,
                    ]),
                  },
                  [
                    l(
                      n,
                      {
                        size: o.config.expressDayInfoCaptionSize,
                        color: o.config.expressDayInfoTextClr,
                        class: "express-day-info__text",
                      },
                      {
                        default: I(
                          () => $_$() && [S(v(o.express.bonusMarket.name), 1)]
                        ),
                        _: 1,
                      },
                      8,
                      ["size", "color"]
                    ),
                    l(
                      n,
                      {
                        size: o.config.expressDayInfoCaptionSize,
                        color: o.config.expressDayInfoValueClr,
                        weight: o.config.expressDayInfoCaptionWeight,
                      },
                      {
                        default: I(
                          () =>
                            $_$() && [S(v(o.express.bonusMarket.coefByView), 1)]
                        ),
                        _: 1,
                      },
                      8,
                      ["size", "color", "weight"]
                    ),
                  ],
                  2
                ))
              : z("", !0),
            g(
              "div",
              {
                class: G([
                  "express-day-info__item",
                  `express-day-info--theme-${o.config.expressDayInfoTheme}`,
                ]),
              },
              [
                l(
                  n,
                  {
                    size: o.config.expressDayInfoCaptionSize,
                    color: o.config.expressDayInfoTextClr,
                    class: "express-day-info__text",
                  },
                  {
                    default: I(
                      () => $_$() && [S(v(o.$T("express_day_coef")), 1)]
                    ),
                    _: 1,
                  },
                  8,
                  ["size", "color"]
                ),
                l(
                  n,
                  {
                    size: o.config.expressDayInfoCaptionSize,
                    color: o.config.expressDayInfoValueClr,
                    weight: o.config.expressDayInfoCaptionWeight,
                  },
                  {
                    default: I(() => $_$() && [S(v(o.express.overallOdds), 1)]),
                    _: 1,
                  },
                  8,
                  ["size", "color", "weight"]
                ),
              ],
              2
            ),
          ])
        );
      };
    },
  }),
  ys = N(us, [["__scopeId", "data-v-e29c6eef"]]),
  gs = { class: "express-day-item__content" },
  fs = { class: "express-day-item__list" },
  xs = B({
    __name: "ExpressDayItem",
    props: {
      express: {},
      couponMarketIds: {},
      config: {},
      page: {},
      styles: {},
    },
    emits: ["update:coupon", "toggle:market", "add:bonus"],
    setup(y, { emit: o }) {
      $_$();
      const s = y,
        n = o,
        i = j(),
        { trackAddBetExpress: f } = we(),
        [u = Ge] = Ce(303),
        { notificationError: a } = ve(),
        d = (t) => {
          var C;
          const [O] = (C = t.markets) != null ? C : [];
          return O;
        },
        c = (t) => s.couponMarketIds.includes(t.id),
        h = m(() => s.express.games.every((t) => c(d(t)))),
        k = m(() => c(s.express.bonusMarket)),
        x = m(() =>
          $_$() && e(h)
            ? i("express_day_button_text_remove")
            : i("express_day_button_text")
        ),
        b = m(() => s.express.games.filter((t) => !c(d(t)))),
        D = m(() => {
          $_$();
          const t = e(k) ? 0 : 1;
          return s.couponMarketIds.length + e(b).length + t > u;
        }),
        L = () => {
          $_$();
          if (e(D))
            return a(i("coupon_max_bets", { maxCount: u }), {
              title: i("main_error"),
            });
          n("update:coupon", { express: s.express, games: e(b) });
        },
        w = () => {
          n("update:coupon", { express: s.express, games: s.express.games }),
            f(s.express.id);
        },
        p = () => {
          $_$();
          e(h) ? w() : L();
        },
        M = (t, C) => {
          n("toggle:market", {
            game: t,
            market: C,
            express: s.express,
            games: s.express.games,
          });
        };
      return (
        ne(k, async () => {
          $_$();
          e(h) &&
            !e(k) &&
            n("add:bonus", { express: s.express, games: s.express.games });
        }),
        (t, C) => {
          $_$();
          const O = E("UiCaption"),
            U = E("UiButton");
          return (
            r(),
            _(
              "article",
              {
                class: G([
                  "express-day-item",
                  `express-day-item--theme-${t.config.expressDayItemTheme}`,
                ]),
              },
              [
                l(
                  ae,
                  {
                    class: "express-day-item__header",
                    page: t.page,
                    config: t.config,
                  },
                  {
                    default: I(
                      () => $_$() && [te(t.$slots, "default", {}, void 0, !0)]
                    ),
                    _: 3,
                  },
                  8,
                  ["page", "config"]
                ),
                g("div", gs, [
                  g("ul", fs, [
                    (r(!0),
                    _(
                      W,
                      null,
                      X(
                        t.express.games,
                        (T) =>
                          $_$() &&
                          (r(),
                          _(
                            "li",
                            { key: T.id, class: "express-day-item__game" },
                            [
                              l(
                                ms,
                                {
                                  "onToggle:market": (K) => M(T, K),
                                  game: T,
                                  couponMarketIds: t.couponMarketIds,
                                  config: t.config,
                                  styles: t.styles,
                                },
                                null,
                                8,
                                [
                                  "onToggle:market",
                                  "game",
                                  "couponMarketIds",
                                  "config",
                                  "styles",
                                ]
                              ),
                            ]
                          ))
                      ),
                      128
                    )),
                  ]),
                  l(
                    ys,
                    {
                      express: t.express,
                      config: t.config,
                      class: "express-day-item__info",
                    },
                    null,
                    8,
                    ["express", "config"]
                  ),
                  l(
                    U,
                    {
                      onClick: p,
                      size: t.config.expressDayItemButtonSize,
                      theme: e(Ie).accent,
                      uppercase: t.config.expressDayItemButtonUppercase,
                      class: "express-day-item__button",
                    },
                    {
                      default: I(
                        () =>
                          $_$() && [
                            l(
                              O,
                              { size: t.config.expressDayItemCaptionSize },
                              {
                                default: I(() => $_$() && [S(v(e(x)), 1)]),
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
                    ["size", "theme", "uppercase"]
                  ),
                ]),
              ],
              2
            )
          );
        }
      );
    },
  }),
  hs = N(xs, [["__scopeId", "data-v-dac1983a"]]),
  ks = { class: "express-day-placeholder" },
  Cs = { class: "express-day-placeholder__wrapper" },
  vs = B({
    __name: "ExpressDayPlaceholder",
    props: { config: {} },
    setup(y) {
      $_$();
      const o = j(),
        { isLive: s } = R(),
        n = m(() =>
          $_$() && e(s)
            ? o("express_day_live_unavailable")
            : o("express_day_unavailable")
        );
      return (i, f) => {
        $_$();
        const u = E("UiMessageBlockV2");
        return (
          r(),
          _("div", ks, [
            l(
              ae,
              { config: i.config, class: "express-day-placeholder__header" },
              null,
              8,
              ["config"]
            ),
            g("div", Cs, [
              l(
                u,
                {
                  size: e(q).s,
                  theme: i.config.expressDayItemMessageBlockTheme,
                },
                { default: I(() => $_$() && [S(v(e(n)), 1)]), _: 1 },
                8,
                ["size", "theme"]
              ),
            ]),
          ])
        );
      };
    },
  }),
  Is = N(vs, [["__scopeId", "data-v-9cb661e1"]]),
  bs = B({
    __name: "ExpressDay",
    props: { expressDayConfig: {} },
    setup(y) {
      $_$();
      const o = y,
        s = m(() => o.expressDayConfig.config),
        n = m(() => o.expressDayConfig.styles),
        i = be(),
        f = Oe(),
        u = J(),
        { bettingType: a, isCyberSport: d, isLive: c, pageType: h } = R(),
        k = F(() => f.couponBetIds),
        {
          loadingStatus: x,
          expresses: b,
          sendGamesToCoupon: D,
          toggleMarketInCoupon: L,
          addBonusMarketToCoupon: w,
          fetchExpresses: p,
        } = He(a, h),
        M = m(() => $_$() && e(x) !== Pe.loaded),
        t = Y(0),
        C = m(() => $_$() && e(b).length),
        O = m(() => $_$() && e(b)[t.value]),
        U = m({
          get: () => t.value + 1,
          set: (H) => {
            $_$();
            const A = e(C);
            A !== 0 && (t.value = (H - 1 + A) % A);
          },
        }),
        { timezone: T, is12h: K } = De(),
        re = F(() => i.coefViewId),
        ie = F(() => i.marketsNameType),
        pe = (H) => {
          $_$();
          D(H), u.sendMarketsToCoupon(e(c));
        },
        ce = m(() => $_$() && e(b).length > 0);
      return (
        ne([h, re, T, K, ie, d], () => p(), { immediate: !0 }),
        (H, A) =>
          $_$() && e(M)
            ? (r(), $(Ye, { key: 0, config: e(s) }, null, 8, ["config"]))
            : (r(),
              _(
                "div",
                { key: 1, class: "express-day", style: Z(e(n)) },
                [
                  e(ce)
                    ? (r(),
                      $(
                        hs,
                        {
                          key: 0,
                          "onUpdate:coupon": pe,
                          "onToggle:market": e(L),
                          "onAdd:bonus": e(w),
                          express: e(O),
                          couponMarketIds: e(k),
                          isLoading: e(M),
                          page: e(t),
                          bettingType: e(a),
                          config: e(s),
                          styles: e(n),
                        },
                        {
                          default: I(
                            () =>
                              $_$() && [
                                l(
                                  Re,
                                  {
                                    modelValue: e(U),
                                    "onUpdate:modelValue":
                                      A[0] ||
                                      (A[0] = (le) =>
                                        $_$() && Te(U) ? (U.value = le) : null),
                                    total: e(C),
                                  },
                                  null,
                                  8,
                                  ["modelValue", "total"]
                                ),
                              ]
                          ),
                          _: 1,
                        },
                        8,
                        [
                          "onToggle:market",
                          "onAdd:bonus",
                          "express",
                          "couponMarketIds",
                          "isLoading",
                          "page",
                          "bettingType",
                          "config",
                          "styles",
                        ]
                      ))
                    : (r(),
                      $(Is, { key: 1, config: e(s) }, null, 8, ["config"])),
                ],
                4
              ))
      );
    },
  }),
  Q = B({
    __name: "ExpressDayApp",
    props: { pageType: {}, bettingType: {} },
    async setup(y) {
      $_$();
      let o, s, n, i;
      const f = y,
        a = (([n, i] = Ae(() => Ue())),
        (n = (([o, s] = ee(() => n)), (o = await o), s(), o)),
        i(),
        n)();
      return (
        Ve(Ee(f)),
        (d, c) =>
          $_$() &&
          (r(),
          $(bs, { expressDayConfig: e(a) }, null, 8, ["expressDayConfig"]))
      );
    },
  }),
  Ds = "#express",
  Ts = B({
    __name: "BettingExpressDay",
    setup(y) {
      $_$();
      const o = Be(),
        s = Y(),
        n = Y(Me.HOME),
        {
          isAccumulatorOfTheDayEnabled: i,
          isLiveAccumulatorOfTheDayEnabled: f,
          isAnyAccumulatorOfTheDayEnabled: u,
        } = Ne(),
        { run: a, style: d } = Fe(s);
      return (
        Se(() => {
          o.hash === Ds && a();
        }),
        (c, h) =>
          $_$() && e(u)
            ? (r(),
              _(
                "div",
                {
                  key: e(n),
                  ref_key: "wrapper",
                  ref: s,
                  class: "betting-express-day",
                  style: Z(e(d)),
                },
                [
                  e(i)
                    ? (r(),
                      $(
                        Q,
                        {
                          key: e(P).LINE,
                          bettingType: e(P).LINE,
                          pageType: e(n),
                          class: "betting-express-day__app",
                        },
                        null,
                        8,
                        ["bettingType", "pageType"]
                      ))
                    : z("", !0),
                  e(f)
                    ? (r(),
                      $(
                        Q,
                        {
                          key: e(P).LIVE,
                          bettingType: e(P).LIVE,
                          pageType: e(n),
                          class: "betting-express-day__app",
                        },
                        null,
                        8,
                        ["bettingType", "pageType"]
                      ))
                    : z("", !0),
                ],
                4
              ))
            : z("", !0)
      );
    },
  }),
  Es = N(Ts, [["__scopeId", "data-v-f3ae7e5d"]]),
  Rs = B({
    __name: "BettingExpressDayContainer",
    setup(y) {
      return (o, s) => {
        $_$();
        const n = $e;
        return r(), $(n, null, { default: I(() => $_$() && [l(Es)]), _: 1 });
      };
    },
  });
export { Rs as default };
