import $_$ from "./$_$.js";
$_$();
import {
  index_useHttpModule as F,
  index_getConfigs as $,
  execAsync as k,
  runtimeCore_esmBundler_defineComponent as V,
  runtimeCore_esmBundler_resolveComponent as N,
  runtimeCore_esmBundler_createElementBlock as R,
  runtimeCore_esmBundler_openBlock as X,
  runtimeCore_esmBundler_createVNode as w,
  reactivity_esmBundler_unref as g,
  size_constants_sizeType as G,
  runtimeCore_esmBundler_withCtx as A,
  runtimeCore_esmBundler_createTextVNode as P,
  shared_esmBundler_toDisplayString as v,
  theme_constants_themeType as j,
  createSharedComposable_createSharedComposable_2 as K,
  index_useAppStorage as Y,
  index_useT as q,
  index_useMediaUrl as J,
  runtimeCore_esmBundler_computed as E,
  useState as L,
  debounce as Q,
  runtimeCore_esmBundler_watch as Z,
  runtimeCore_esmBundler_onMounted as ee,
  AppStorageKey as O,
  MEDIA_EXTENSIONS as te,
  isNumber as se,
  parseNumber as ie,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  expressHighlight as oe,
  createErrorResult as re,
  _export_sfc as ne,
  useCouponStore as ae,
  useNotifyExtended as ce,
  COUPON_TYPES_WITH_HIGHLIGHT as le,
} from "./entry-50afb6f36c.js";
const ge = () => {
    $_$();
    const h = F(),
      [_, m] = $(-1001, -1004),
      f = m.id,
      H = async ({ eventTypes: l, games: n }) => {
        $_$();
        let s, r;
        try {
          const { execute: i } = oe(h, {
            params: { partner: _, lng: f, eventTypes: l, games: n },
          });
          return (([s, r] = k(() => i())), (s = await s), r(), s).Value;
        } catch (i) {
          throw re(i);
        }
      },
      y = (l = []) =>
        l.reduce((n, s) => {
          const r = s.MG,
            i = s.M.map(
              (c) =>
                $_$() && {
                  gameType: c.GT,
                  marketTypes: c.ET,
                  period: c.P,
                  isAllMarketsAllowed: c.AM,
                }
            );
          return (n[r] = { markets: i }), n;
        }, {});
    return {
      getExpressHighlightedMarkets: async ({ eventTypes: l, games: n }) => {
        $_$();
        let s, r;
        const i =
          (([s, r] = k(() => H({ eventTypes: l, games: n }))),
          (s = await s),
          r(),
          s);
        return y(i);
      },
      createGamesParam: (l) => {
        $_$();
        const n = new Map();
        for (const s of l) {
          const {
              mainGameId: r,
              market: { sportId: i, gameId: c, typeId: B },
              typeId: I,
              gamePeriodId: M,
            } = s,
            C = { GI: c, GT: I != null ? I : 1, ET: B, P: M || 0 };
          n.has(r) ? n.get(r).SL.push(C) : n.set(r, { SI: i, MG: r, SL: [C] });
        }
        return Array.from(n.values());
      },
    };
  },
  he = { class: "market-highlight-notification" },
  _e = V({
    __name: "MarketHighlightNotification",
    emits: ["handleCloseClick"],
    setup(h) {
      return (_, m) => {
        $_$();
        const f = N("UiCaption"),
          H = N("UiButton");
        return (
          X(),
          R("div", he, [
            w(
              f,
              { size: g(G).xs },
              {
                default: A(
                  () =>
                    $_$() && [
                      P(
                        v(
                          _.$T(
                            "betting_dictionary_markets_highlight_description"
                          )
                        ),
                        1
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              ["size"]
            ),
            w(
              H,
              {
                onClick: m[0] || (m[0] = (y) => _.$emit("handleCloseClick")),
                uppercase: !1,
                block: "",
                size: g(G).s,
                theme: g(j).accent,
                class: "market-highlight-notification__accept",
              },
              {
                default: A(
                  () => $_$() && [P(v(_.$T("main_dictionary_exellent")), 1)]
                ),
                _: 1,
              },
              8,
              ["size", "theme"]
            ),
          ])
        );
      };
    },
  }),
  me = ne(_e, [["__scopeId", "data-v-96ba2dd0"]]),
  de = K(() => {
    $_$();
    const [h, _] = $(2077, 2078),
      m = Y(),
      f = ae(),
      H = ce(),
      y = q(),
      x = J(),
      b = E(() => f.couponBets),
      l = E(() => $_$() && g(b).length),
      n = E(() => le.includes(f.couponTypeId)),
      { getExpressHighlightedMarkets: s, createGamesParam: r } = ge(),
      i = L("highlightedMarkets", () => ({})),
      c = L("isExpressHighlightNotificationShown", () => !1),
      B = E(() => $_$() && r(g(b))),
      I = Q(async () => {
        $_$();
        let e, t;
        if (!h) return;
        const o = g(B);
        if (!o.length || !n) {
          i.value = {};
          return;
        }
        i.value = (([e, t] = k(() => s({ games: o }))), (e = await e), t(), e);
      }, 500);
    Z(l, I);
    const M = (e) => {
        const t = new Map();
        for (const o of e) {
          const a = `${o.gameType}-${o.period}`;
          t.has(a) || t.set(a, []), t.get(a).push(o);
        }
        return t;
      },
      C = (e, t) => {
        $_$();
        const { typeId: o } = e;
        return (
          se(ie(e.coef)) &&
          !e.isLocked &&
          t.some((a) => a.isAllMarketsAllowed || a.marketTypes.includes(o))
        );
      },
      U = ({ gameId: e, marketSource: t, getKey: o }) => {
        $_$();
        if (!h) return {};
        const a = g(i)[e];
        if (!a) return {};
        const T = M(a.markets),
          u = {};
        for (const p of t)
          if (p && p.id) {
            const S = o(p),
              d = T.get(S);
            d && (u[p.id] = C(p, d));
          }
        return u;
      },
      z = ({ gameId: e, marketGroups: t }) => {
        $_$();
        if (!h) return {};
        const o = g(i)[e];
        if (!o) return {};
        const a = M(o.markets),
          T = {};
        for (const u of t) {
          const p = `${u.gameTypeId}-${u.period}`,
            S = a.get(p);
          if (S && Array.isArray(u.marketList)) {
            for (const d of u.marketList)
              if (d && d.id) {
                const D = C(d, S);
                T[d.id] = D;
              }
          }
        }
        return T;
      },
      W = async () => {
        $_$();
        let e, t;
        ([e, t] = k(
          () =>
            $_$() && m.setItem(O.IS_EXPRESS_HIGHLIGHT_NOTIFICATION_SHOWN, !0)
        )),
          await e,
          t();
      };
    return (
      ee(async () => {
        $_$();
        let e, t;
        ([e, t] = k(() => I())), await e, t();
        const o =
          (([e, t] = k(
            () => $_$() && m.getItem(O.IS_EXPRESS_HIGHLIGHT_NOTIFICATION_SHOWN)
          )),
          (e = await e),
          t(),
          e);
        !h ||
          !_ ||
          g(c) ||
          o ||
          (H({
            title: y("betting_dictionary_markets_highlight"),
            customDescription: me,
            buttonCloseTitle: y("close"),
            image: {
              image: x("betting_notifications_markets_highlight"),
              imageWEBP: x("betting_notifications_markets_highlight", te.WEBP),
            },
            closeClickCallback: W,
          }),
          (c.value = !0));
      }),
      {
        highlightedMarkets: i,
        getHighlightedMarkets: U,
        getHighlightedMarketsFromGroups: z,
      }
    );
  });
export { de as useExpressHighlight };
