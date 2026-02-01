import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as b,
  reactivity_esmBundler_ref as v,
  index_useLogger as w,
  index_useSharedStore as Y,
  index_useHttpModule as C,
  index_getConfig as O,
  runtimeCore_esmBundler_computed as f,
  reactivity_esmBundler_unref as a,
  execAsync as N,
  isArray_isArray as H,
  runtimeCore_esmBundler_defineComponent as V,
  router_useRoute as U,
  useGlobalStore as D,
  useRouterMethodsWithLang as $,
  ThirdPartyRouteName_ThirdPartyRouteName as Z,
  runtimeCore_esmBundler_onMounted as P,
  index_loadMediaResources as y,
  runtimeCore_esmBundler_resolveDirective as x,
  runtimeCore_esmBundler_createBlock as k,
  runtimeCore_esmBundler_openBlock as h,
  runtimeCore_esmBundler_resolveDynamicComponent as ee,
  shared_esmBundler_normalizeClass as ne,
  runtimeCore_esmBundler_withCtx as B,
  runtimeCore_esmBundler_createCommentVNode as oe,
  nuxtLink_default as z,
  runtimeCore_esmBundler_withDirectives as K,
  runtimeCore_esmBundler_createElementVNode as F,
  shared_esmBundler_normalizeStyle as te,
  MEDIA_EXTENSIONS as ae,
  index_useCDN as se,
  runtimeCore_esmBundler_resolveComponent as re,
  runtimeCore_esmBundler_createElementBlock as I,
  runtimeCore_esmBundler_createVNode as R,
  runtimeCore_esmBundler_mergeProps as le,
  WeightType as ie,
  size_constants_sizeType as ue,
  runtimeCore_esmBundler_createTextVNode as ce,
  shared_esmBundler_toDisplayString as me,
  getGamesRoute_getGamesRoute as _e,
  isDef as E,
  index_getConfigs as de,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as W,
  loadHeaderDesktopDoubleRowConfig as pe,
  useHostAppAnalytics as ge,
  pickMenuItemAdditionalFields as Se,
  useMenuConfig as fe,
  getVisibilityState as Le,
  useGameLink as ve,
  useCompactHeader as Ge,
} from "./entry-85993dc44c.js";
import { withAsyncContext as Ae } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
const Me = 15;
var X = ((e) => (
  (e[(e.ALL = -1)] = "ALL"),
  (e[(e.SLOTS = 1)] = "SLOTS"),
  (e[(e.BINGO = 8)] = "BINGO"),
  (e[(e.KENO = 11)] = "KENO"),
  (e[(e.HUNTING_AND_FISHING = 12)] = "HUNTING_AND_FISHING"),
  (e[(e.LEGION_POKER = 24)] = "LEGION_POKER"),
  (e[(e.LIVE_CASINO = 37)] = "LIVE_CASINO"),
  (e[(e.ASIAN_GAMES = 39)] = "ASIAN_GAMES"),
  (e[(e.VIRTUAL_SPORTS = 41)] = "VIRTUAL_SPORTS"),
  (e[(e.TV_GAMES = 51)] = "TV_GAMES"),
  (e[(e.IDN_POKER = 64)] = "IDN_POKER"),
  (e[(e.VULKAN = 65)] = "VULKAN"),
  (e[(e.SCRATCHCARDS = 66)] = "SCRATCHCARDS"),
  (e[(e.OTHER_GAMES = 67)] = "OTHER_GAMES"),
  (e[(e.SPIGO = 74)] = "SPIGO"),
  (e[(e.ONE_X_CASINO = 75)] = "ONE_X_CASINO"),
  (e[(e.EXCLUSIVE = 89)] = "EXCLUSIVE"),
  (e[(e.WISEODDS = 92)] = "WISEODDS"),
  (e[(e.TOP_CHOICE = 94)] = "TOP_CHOICE"),
  (e[(e.CARD_GAMES = 99)] = "CARD_GAMES"),
  (e[(e.SKILL_GAMES = 103)] = "SKILL_GAMES"),
  (e[(e.CRASH_GAMES = 104)] = "CRASH_GAMES"),
  (e[(e.FAST_GAMES = 154)] = "FAST_GAMES"),
  (e[(e.FAST_BET = 175)] = "FAST_BET"),
  e
))(X || {});
const Fe = b(() => {
    $_$();
    const e = v(),
      n = v([]),
      o = w(),
      l = Y(),
      r = C(),
      s = O(1609),
      u = f(() => $_$() && a(e) && s),
      t = v(!1),
      m = v(!1),
      _ = async (d = !0) => {
        $_$();
        let i, g;
        if (!(!s || a(e) || !d || a(m)))
          try {
            m.value = !0;
            const { data: c } =
              (([i, g] = N(() =>
                r("/web-api/api/third-party/banner-for-header").execute()
              )),
              (i = await i),
              g(),
              i);
            H(c) && c.length
              ? ((t.value = c.length > 1),
                (e.value = { ...c[0], isThirdParty: !0 }),
                (n.value = a(t)
                  ? c.map((S) => ({ ...S, isThirdParty: !0 }))
                  : []))
              : c && (e.value = { ...c, isThirdParty: !0 });
          } catch (c) {
            o.error("[ThirdParty] error during loading banner in header", c);
          } finally {
            m.value = !1;
          }
      };
    return (
      l.bind("hostApp/mainMenuProductItem", e, !0),
      l.bind("hostApp/mainMenuProductItemList", n, !0),
      l.bind("hostApp/isMultipleProducts", t, !0),
      {
        mainMenuProductItem: e,
        mainMenuProductItemList: n,
        isMultipleProducts: t,
        loadBanner: _,
        isVisibleProduct: u,
      }
    );
  }),
  he = ["onClick", "href", "aria-label"],
  Be = V({
    __name: "HeaderLogoThirdPartyProduct",
    props: {
      tag: { default: "div" },
      product: {},
      hasActiveMenuItems: { type: Boolean, default: !1 },
      logoWidth: { default: "60px" },
      logoHeight: { default: "28px" },
      logoSize: { default: "48px" },
    },
    setup(e) {
      $_$();
      const n = e,
        o = U(),
        l = D(),
        { useLangLocation: r } = $(f(() => l.getLanguage)),
        s = v(!1),
        u =
          !n.product.gameUrl || n.product.gameUrl.startsWith("/")
            ? n.product.gameUrl
            : `/${n.product.gameUrl}`,
        t = r(
          u || {
            name: Z[X[n.product.sectionId]],
            query: { game: String(n.product.gameId) },
          }
        ),
        m = f(() => ({
          "header-logo-third-party-product--is-transparent":
            n.hasActiveMenuItems,
        })),
        _ = {
          "--tp-logo-width": n.logoWidth,
          "--tp-logo-height": n.logoHeight,
          "--tp-logo-size": n.logoSize,
        },
        d = (i, g) => {
          $_$();
          a(o).query.game === n.product.gameId.toString()
            ? window.location.assign(a(t))
            : i(g);
        };
      return (
        P(async () => {
          $_$();
          let i, g;
          n.product &&
            (([i, g] = N(() => $_$() && y([114]))),
            await i,
            g(),
            (s.value = !0));
        }),
        (i, g) => {
          $_$();
          const c = z,
            S = x("tooltip");
          return (
            h(),
            k(
              ee(i.tag),
              {
                class: ne(["header-logo-third-party-product", a(m)]),
                style: _,
              },
              {
                default: B(
                  () =>
                    $_$() && [
                      a(s)
                        ? (h(),
                          k(
                            c,
                            { key: 0, to: a(t), custom: "" },
                            {
                              default: B(
                                ({ href: G, navigate: M }) =>
                                  $_$() && [
                                    K(
                                      F(
                                        "a",
                                        {
                                          onClick: (p) => d(M, p),
                                          href: G,
                                          "aria-label": i.product.name,
                                          style: te(
                                            `background-image:url(${i.$mediaUrl(
                                              i.product.icon,
                                              a(ae).SVG
                                            )})`
                                          ),
                                          class:
                                            "header-logo-third-party-product__link",
                                        },
                                        null,
                                        12,
                                        he
                                      ),
                                      [[S, i.product.name]]
                                    ),
                                  ]
                              ),
                              _: 1,
                            },
                            8,
                            ["to"]
                          ))
                        : oe("", !0),
                    ]
                ),
                _: 1,
              },
              8,
              ["class"]
            )
          );
        }
      );
    },
  }),
  Ne = W(Be, [["__scopeId", "data-v-ba3cfbc5"]]),
  We = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ne },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ee = "/sfiles/games-images/game-animations/game-",
  be = "black",
  Oe = { class: "header-navigation-game-logo" },
  De = ["onClick", "href", "aria-label"],
  ke = ["src", "alt"],
  Ie = V({
    __name: "HeaderNavigationGameLogo",
    props: { gameBannerData: { default: () => ({}) } },
    async setup(e) {
      $_$();
      let n, o, l, r;
      const s = e,
        t = (([l, r] = Ae(() => pe())),
        (l = (([n, o] = N(() => l)), (n = await n), o(), n)),
        r(),
        l)(),
        {
          config: { isBlackIconGameLogo: m },
        } = t,
        _ = U(),
        d = ge(),
        i = D(),
        { getLinkWithLang: g } = $(f(() => i.getLanguage)),
        c = se(),
        S = f(() => {
          const p = m ? `-${be}` : "";
          return c(`${Ee}${s.gameBannerData.gameId}-animation${p}.svg`);
        }),
        G = f(() => g(s.gameBannerData.link)),
        M = (p, L) => {
          $_$();
          var A;
          d.modules.header.trackGameBannerClick(
            s.gameBannerData.gameId,
            (A = a(_).name) != null ? A : a(_).path
          ),
            p(L);
        };
      return (p, L) => {
        $_$();
        const A = re("UiCaption"),
          j = z,
          q = x("tooltip");
        return (
          h(),
          I("div", Oe, [
            R(
              j,
              { to: a(G), custom: "" },
              {
                default: B(
                  ({ href: T, navigate: J }) =>
                    $_$() && [
                      K(
                        (h(),
                        I(
                          "a",
                          le({ onClick: (Q) => M(J, Q) }, p.$attrs, {
                            href: T,
                            "aria-label": p.gameBannerData.gameName,
                            class: "header-navigation-game-logo__link",
                          }),
                          [
                            F(
                              "img",
                              {
                                src: a(S),
                                alt: p.gameBannerData.gameName,
                                width: "32",
                                height: "32",
                                class: "header-navigation-game-logo__img",
                              },
                              null,
                              8,
                              ke
                            ),
                            R(
                              A,
                              { size: a(ue).m, weight: a(ie).BOLD },
                              {
                                default: B(
                                  () =>
                                    $_$() && [
                                      ce(me(p.gameBannerData.gameName), 1),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["size", "weight"]
                            ),
                          ],
                          16,
                          De
                        )),
                        [[q, p.gameBannerData.gameName]]
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              ["to"]
            ),
          ])
        );
      };
    },
  }),
  Re = W(Ie, [["__scopeId", "data-v-6a4b6d40"]]),
  Xe = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Re },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  we = (e) =>
    $_$() && {
      gameId: e.GT,
      gameName: e.GN,
      gameFlag: e.GF,
      description: e.DS,
      bannerTitle: e.HD,
      link: e.R,
      oldLink: e.OR,
    },
  Ce = (e, n) => {
    $_$();
    const o = n.slice(0, Me),
      { getRouteNameByGameId: l } = _e(o);
    return {
      allLinksMenuItem: o.length
        ? {
            ...Se(e),
            href: e.href,
            langKey: "header_item_promo_show_all",
            visible: !0,
          }
        : void 0,
      links: o
        .map((r) => {
          const s = l(r.id);
          return {
            id: `headerItemGame_${r.id}`,
            title: r.name,
            href: `${e.href}/${s}`,
            visible: !!s,
          };
        })
        .filter((r) => r.visible),
    };
  },
  He = b((e) => {
    $_$();
    var n;
    const o = fe(),
      l = (n = O(-2003)) != null ? n : [],
      r = (u, t) => {
        $_$();
        var m;
        if (t(u)) {
          const _ = (m = u.dropdownContent) != null ? m : {},
            { links: d, allLinksMenuItem: i, images: g } = _,
            c = _
              ? {
                  dropdownContent: {
                    ...(g ? { images: g.map((S) => r(S, t)).filter(E) } : {}),
                    ...(d ? { links: d.map((S) => r(S, t)).filter(E) } : {}),
                    ...(i ? { allLinksMenuItem: r(i, t) } : {}),
                  },
                }
              : {};
          return { ...u, ...c };
        }
      };
    return {
      headerMenuData: f(() => {
        $_$();
        var u;
        return ((u = o.header) != null ? u : [])
          .map((t) => {
            const m = t.provider_type === "games";
            let _ = t;
            if (m) {
              const d = Ce(t, l);
              _ = { ...t, ...(d ? { dropdownContent: d } : {}) };
            }
            return r(_, ({ visibilityByAuth: d }) => $_$() && Le(d, a(e)));
          })
          .filter(E);
      }),
    };
  }),
  Ve = (e) => {
    $_$();
    const { headerMenuData: n } = He(e),
      o = (s, u = new Map()) => (
        s.forEach((t) => {
          var m, _;
          t.id && !u.has(t.id) && u.set(t.id, t),
            (m = t.dropdownContent) != null &&
              m.links &&
              o((_ = t.dropdownContent) == null ? void 0 : _.links, u);
        }),
        u
      ),
      l = f(() => $_$() && o(a(n)));
    return { getMenuItemById: (s) => $_$() && a(l).get(s) };
  },
  Ue = () => {
    $_$();
    const e = D(),
      n = f(() => e.isUserAuth),
      { getMenuItemById: o } = Ve(n);
    return {
      totoMenuItem: o("headerItemToto"),
      lottoMenuItem: o("menuItemLotto"),
      pokerMenuItem: o("menuItemPoker"),
      virtualSportMenuItem: o("menuItemVSport"),
      gamesMenuItem: o("headerGroupGames"),
      promoBonusesMenuItem: o("headerItemPromoBonuses"),
      slotsMenuItem: o("headerGroupSlots"),
      liveCasinoMenuItem: o("headerGroupLiveCasino"),
      liveMenuItem: o("headerGroupLive"),
      lineMenuItem: o("headerGroupLine"),
    };
  },
  $e = b(() => {
    $_$();
    const e = w(),
      [n, o, l, r, s] = de(-1e3, -1001, -1010, -1012, -1004),
      u = C(),
      { getGameLink: t } = ve(),
      m = v(!1),
      _ = v({}),
      d = v(!1);
    return {
      isLoadedGameLogo: m,
      gameBannerData: _,
      loadBannerId: async (g = !0) => {
        $_$();
        let c, S;
        try {
          const { gamesMenuItem: G } = Ue();
          if (!!!G || !g || a(d)) return;
          d.value = !0;
          const p =
            (([c, S] = N(() =>
              u("/service-api/gamespreview/getbanner", {
                params: { whence: l, ref: n, gr: o, lng: s.id, fCountry: r.id },
                headers: { accept: "application/json, text/plain" },
              }).execute()
            )),
            (c = await c),
            S(),
            c);
          if (!p || (H(p) && !p.length)) throw new Error("banner not found");
          const L = we(p),
            A = t(L.link, L.oldLink);
          return (L.link = A), (_.value = L), (m.value = !0), L;
        } catch (G) {
          e.error("Error of load games banner:", G), (m.value = !1);
          return;
        } finally {
          d.value = !1;
        }
      },
    };
  }),
  je = () => {
    $_$();
    const { isCompactSizeM: e } = Ge(),
      n = O(155),
      { isLoadedGameLogo: o, gameBannerData: l, loadBannerId: r } = $e(),
      s = f(() => $_$() && !!a(l).gameId && a(o)),
      u = f(() => $_$() && a(s) && !a(e) && n),
      t = f(() => $_$() && a(s) && n);
    return {
      hasGameLogo: s,
      isVisibleNavigationGameLogo: u,
      isVisibleNotCompactNavigationGameLogo: t,
      gameBannerData: l,
      loadBannerId: r,
    };
  };
export {
  Ne as HeaderLogoThirdPartyProduct,
  We as HeaderLogoThirdPartyProduct$1,
  Re as HeaderNavigationGameLogo,
  Xe as HeaderNavigationGameLogo$1,
  Fe as useHeaderBanner,
  He as useHeaderMenuElements,
  je as useHeaderNavigationGameLogo,
};
