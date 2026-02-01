import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as T,
  reactivity_esmBundler_ref as C,
  reactivity_esmBundler_unref as o,
  index_useLogger as B,
  runtimeCore_esmBundler_computed as d,
  isDef as G,
  execAsync as k,
  useState as h,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useCouponStore as S, DEFAULT_TITLE as w } from "./entry-50afb6f36c.js";
const y = T(() => {
    $_$();
    const s = C(Promise.resolve(!0));
    return {
      addPromiseToQueue: (r) =>
        new Promise((c, i) => {
          $_$();
          s.value = o(s).then(r).then(c).catch(i);
        }),
    };
  }),
  D = ({ game: s, marketsForRender: a, onMarketToCouponAdd: r, source: c }) => {
    $_$();
    const i = B(),
      p = S(),
      { addPromiseToQueue: l } = y(),
      u = C(new Set()),
      g = d(() => $_$() && !o(a).length),
      _ = d(() => p.couponBetIds),
      v = (n) => {
        $_$();
        const t = o(n).id;
        return G(t) && o(_).includes(t);
      };
    return {
      isEmpty: g,
      isMarketProcessing: (n) => {
        $_$();
        const t = o(n).id;
        return G(t) && u.value.has(t);
      },
      addMarketToCoupon: async (n, t) => {
        $_$();
        let e, L;
        if (n.coefByView === w) return;
        const m = n.id,
          f = G(m);
        f && !u.value.has(m) && u.value.add(m);
        try {
          ([e, L] = k(() =>
            l(
              () =>
                $_$() &&
                p.couponAddBet({
                  game: o(s),
                  market: n,
                  source: o(c),
                  gameCardPosition: t,
                })
            )
          )),
            await e,
            L(),
            ([e, L] = k(() => p.couponUpdate())),
            await e,
            L(),
            r == null || r(v(n));
        } catch (P) {
          i.error("Failed to add market to coupon", P);
        } finally {
          f && u.value.delete(m);
        }
      },
      isMarketAddedToCoupon: v,
    };
  },
  E = (s, a) => {
    $_$();
    const r = h(`${s}IsLoading`, () => !0),
      c = h(`${s}Line`, a),
      i = h(`${s}Live`, a),
      p = d(() => $_$() && o(c).games),
      l = d(() => $_$() && o(i).games),
      u = d(
        () =>
          $_$() &&
          o(p).filter(
            (e) => $_$() && !o(l).find((m) => m.permanentId === e.permanentId)
          )
      ),
      g = d(() => $_$() && o(l).concat(o(u))),
      _ = d(() => $_$() && new Set(o(l).map((e) => e.id))),
      v = (e) => {
        c.value = e;
      },
      I = (e) => {
        i.value = e;
      };
    return {
      line: c,
      live: i,
      isLoading: r,
      lineGames: u,
      liveGames: l,
      liveGamesSet: _,
      allGames: g,
      setLineGames: v,
      setLiveGames: I,
      setGamesLoading: (e) => {
        r.value = e;
      },
      clearLive: () => I(a()),
      clearLine: () => v(a()),
    };
  };
export { E as useCricketSportSectionGamesContext, D as useGameCardMarkets };
