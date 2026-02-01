import $_$ from "./$_$.js";
$_$();
import {
  bettingType_BettingType as w,
  index_useLogger as te,
  index_getConfig as le,
  index_useAppStorage as ce,
  useGlobalStore as ae,
  useUserConfigStore as ue,
  runtimeCore_esmBundler_computed as R,
  reactivity_esmBundler_unref as u,
  execAsync as m,
  HttpClient as A,
  AppStorageKey as h,
  createSharedComposable_createSharedComposable_2 as me,
  index_useHttpModule as de,
  index_useClientHeaders as ve,
  index_useCookies as _e,
  index_getConfigs as ge,
  index_useT as Fe,
  index_useDateTimeService as we,
  index_useSharedStore as fe,
  reactivity_esmBundler_ref as C,
  runtimeCore_esmBundler_watch as pe,
  runtimeCore_esmBundler_onMounted as Ge,
  runtimeCore_esmBundler_onBeforeUnmount as Se,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  BettingGameParser as Ee,
  liveGetFavoritesZipApi as Le,
  lineGetFavoritesZipApi as he,
  RequestManager as Ie,
  getFavorite as Ae,
  setFavoriteGames as Re,
  createErrorResult as j,
  setFavoriteGamesBatch as ye,
  deleteFavoriteGames as Ce,
} from "./entry-50afb6f36c.js";
import { useBettingStore as be } from "./1af6a171a2.js";
const ke = ({
  data: _,
  $T: l,
  $siteConfig: i,
  $dateTimeService: f,
  $logger: d,
}) => {
  const { G: g = [] } = _.Value;
  return g.map((p) => ({
    ...Ee.parseGame({
      unparsedGameData: { ...p, KI: _.kind, CI: _.kind !== 1 ? p.CI : void 0 },
      dateTimeService: f,
      translationService: l,
      logger: d,
      lng: i.lng,
      navigationTopChamp: i.navigationTopChamp,
    }),
    permanentId: p.CI,
  }));
};
var Be = Object.defineProperty,
  Te = (_, l, i) =>
    l in _
      ? Be(_, l, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (_[l] = i),
  ee = (_, l, i) => Te(_, typeof l != "symbol" ? l + "" : l, i),
  Y = ((_) => (
    (_[(_.ALREADY_ADDED = 1)] = "ALREADY_ADDED"),
    (_[(_.ALREADY_REMOVED = 2)] = "ALREADY_REMOVED"),
    _
  ))(Y || {});
class Me {
  constructor(l) {
    ee(this, "requestManager"), ee(this, "favoriteRequests");
    const i = (g) => ke({ data: g, ...l }),
      f = { method: Le, parser: i },
      d = { method: he, parser: i };
    (this.favoriteRequests = { [w.LINE]: d, [w.LIVE]: f }),
      (this.requestManager = new Ie(l));
  }
  getFavoriteGamesZip(l, i) {
    return this.requestManager.load({
      type: l,
      api: this.favoriteRequests[l],
      params: i,
    });
  }
  getFavorites(l) {
    return this.requestManager.load({
      type: "",
      api: {
        method: Ae,
        parser: (i) => ({
          games: i.games.reduce(
            (d, g) => {
              switch (g.lifecycle) {
                case 2:
                  d.live = d.live.concat(g.games);
                  break;
                case 1:
                  d.line = d.line.concat(g.games);
                  break;
                default:
                  (d.live = d.live.concat(g.games)),
                    (d.line = d.line.concat(g.games));
                  break;
              }
              return d;
            },
            { line: [], live: [] }
          ),
        }),
      },
      params: { lng: l },
    });
  }
  setFavoriteGames(l, i) {
    return this.requestManager
      .loadRaw({
        type: "",
        api: {
          method: Re,
          parser: () => {},
          customHeaders: { "X-Language": i },
        },
        params: { gameId: l },
      })
      .catch((f) => j({ ...f, response: f == null ? void 0 : f.data }));
  }
  setFavoriteGamesBatch(l, i) {
    return this.requestManager.load({
      type: "",
      api: { method: ye, parser: () => {}, customHeaders: { "X-Language": i } },
      params: { gameIds: l },
    });
  }
  deleteFavoriteGames(l) {
    return this.requestManager
      .loadRaw({
        type: "",
        api: { method: Ce, parser: () => {} },
        params: { gameId: l },
      })
      .catch((i) => j({ ...i, response: i == null ? void 0 : i.data }));
  }
  cancelAllRequest() {
    return this.requestManager.cancelAllRequest();
  }
}
const Ve = ({ favoriteGames: _, favoritesApi: l }) => {
    $_$();
    const i = te(),
      f = le(-1e3),
      d = ce(),
      g = ae(),
      p = be(),
      E = ue(),
      F = R(() => !!g.userId),
      N = R(() => p.cyberMatchesFilterType),
      D = async ({ bettingType: c, games: o }) => {
        $_$();
        let e, r;
        try {
          const v =
              (E.isCoeffCutLine && u(c) === w.LINE) ||
              (E.isCoeffCutLive && u(c) === w.LIVE),
            { data: S, status: y } =
              (([e, r] = m(
                () =>
                  $_$() &&
                  l.getFavoriteGamesZip(u(c), {
                    lng: g.language,
                    mode: 4,
                    partner: f,
                    games: o,
                    userId: v ? g.userId : void 0,
                    ...(N ? { cyberFlag: u(N) } : {}),
                    coefViewId: g.coefViewId,
                  })
              )),
              (e = await e),
              r(),
              e);
          switch (y) {
            case A.STATUS_SUCCESS:
              return S;
            case A.STATUS_CLOSE: {
              i.info("loadFavoriteGamesZip: request was canceled");
              return;
            }
            default:
              throw new Error("no succeed.");
          }
        } catch (v) {
          i.error("loadFavoriteGamesZip: ", v);
        }
      },
      b = async (c) => {
        $_$();
        let o, e;
        return (
          ([o, e] = m(() => $_$() && d.setItem(h.FAVORITE_UNSYNC, c))),
          await o,
          e(),
          !0
        );
      },
      k = async () => $_$() && !!(await d.getItem(h.FAVORITE_UNSYNC)),
      B = async () => {
        $_$();
        let c, o;
        try {
          if (!u(F)) throw new Error("not authorized.");
          const { data: e, status: r } =
            (([c, o] = m(() => l.getFavorites(g.language))),
            (c = await c),
            o(),
            c);
          switch (r) {
            case A.STATUS_SUCCESS:
              return e;
            case A.STATUS_CLOSE: {
              i.info("getFavoritesRemote: request was canceled");
              return;
            }
            default:
              throw new Error("no succeed.");
          }
        } catch (e) {
          i.error("getFavoritesRemote: ", e);
        }
      },
      T = async (c) => {
        $_$();
        var o;
        let e, r;
        const v =
          u(c) === w.LINE ? h.FAVORITE_GAMES_LINE : h.FAVORITE_GAMES_LIVE;
        return (o =
          (([e, r] = m(() => d.getItem(v))), (e = await e), r(), e)) != null
          ? o
          : [];
      },
      I = async (c, o) => {
        $_$();
        let e, r;
        const v =
            u(o) === w.LINE ? h.FAVORITE_GAMES_LINE : h.FAVORITE_GAMES_LIVE,
          S = (([e, r] = m(() => d.getItem(v))), (e = await e), r(), e);
        return (
          ([e, r] = m(
            () => $_$() && d.setItem(v, [u(c)].concat(S != null ? S : []))
          )),
          await e,
          r(),
          !0
        );
      },
      U = async (c) => {
        $_$();
        let o, e;
        try {
          if (!u(F)) throw new Error("not authorized.");
          const { status: r, data: v } =
            (([o, e] = m(() => $_$() && l.setFavoriteGames(u(c), g.language))),
            (o = await o),
            e(),
            o);
          if (
            r === A.STATUS_SUCCESS ||
            (v == null ? void 0 : v.errorCode) === Y.ALREADY_ADDED
          )
            return !0;
          throw new Error(v);
        } catch (r) {
          i.error("setFavoriteGameRemote:", r);
        }
        return !1;
      },
      O = async (c, o) => {
        $_$();
        let e, r;
        if (u(F)) {
          const v = (([e, r] = m(() => U(c))), (e = await e), r(), e);
          return v && I(c, o);
        }
        return b(!0), I(c, o);
      },
      x = async (c) => {
        $_$();
        let o, e;
        try {
          if (!u(F)) throw new Error("not authorized.");
          const { status: r } =
            (([o, e] = m(
              () => $_$() && l.setFavoriteGamesBatch(u(c), g.language)
            )),
            (o = await o),
            e(),
            o);
          switch (r) {
            case A.STATUS_SUCCESS:
              return !0;
            case A.STATUS_CLOSE:
              return i.info("setFavoriteGamesRemote: request was canceled"), !1;
            default:
              throw new Error("no succeed.");
          }
        } catch (r) {
          i.error("setFavoriteGamesRemote:", r);
        }
        return !1;
      },
      $ = async (c, o) => {
        $_$();
        let e, r;
        const v =
          u(o) === w.LINE ? h.FAVORITE_GAMES_LINE : h.FAVORITE_GAMES_LIVE;
        return (
          ([e, r] = m(() => $_$() && d.setItem(v, u(c)))), await e, r(), !0
        );
      },
      q = async (c, o) => {
        $_$();
        let e, r;
        const v =
            u(o) === w.LINE ? h.FAVORITE_GAMES_LINE : h.FAVORITE_GAMES_LIVE,
          S = (([e, r] = m(() => d.getItem(v))), (e = await e), r(), e);
        return (
          ([e, r] = m(() =>
            d.setItem(
              v,
              (S != null ? S : []).filter((y) => $_$() && y !== u(c))
            )
          )),
          await e,
          r(),
          !0
        );
      },
      M = async (c) => {
        $_$();
        let o, e;
        try {
          if (!u(F)) throw new Error("not authorized.");
          const r = u(_).find((y) => $_$() && y.id === u(c));
          if (!r || !r.permanentId) throw new Error("game is not favorite.");
          const { status: v, data: S } =
            (([o, e] = m(() => l.deleteFavoriteGames(r.permanentId))),
            (o = await o),
            e(),
            o);
          if (
            v === A.STATUS_SUCCESS ||
            (S == null ? void 0 : S.errorCode) === Y.ALREADY_REMOVED
          )
            return !0;
          throw new Error(S);
        } catch (r) {
          i.error("deleteFavoriteGameRemote: ", r);
        }
        return !1;
      };
    return {
      loadFavoriteGamesZip: D,
      setFavoriteUnsync: b,
      checkFavoriteUnsync: k,
      getFavoritesRemote: B,
      getFavoriteGamesLocal: T,
      setFavoriteGameLocal: I,
      setFavoriteGameRemote: U,
      setFavoriteGame: O,
      setFavoriteGamesRemote: x,
      replaceFavoriteGamesLocal: $,
      deleteFavoriteGameLocal: q,
      deleteFavoriteGameRemote: M,
      deleteFavoriteGame: async (c, o) => {
        $_$();
        let e, r;
        if (u(F)) {
          const v = (([e, r] = m(() => M(c))), (e = await e), r(), e);
          return v && q(c, o);
        }
        return q(c, o);
      },
    };
  },
  De = me(() => {
    $_$();
    const _ = de(),
      l = ve(),
      i = _e(),
      f = te(),
      [{ id: d }, g = {}] = ge(-1004, 515),
      p = Fe(),
      E = we(),
      F = fe(),
      N = ae(),
      D = C([]),
      b = C([]),
      k = C([]),
      B = C([]),
      T = C(!1),
      I = C(!1);
    F.bind("favoriteGamesIdsLine", D),
      F.bind("favoriteGamesIdsLive", b),
      F.bind("favoriteGamesLine", k),
      F.bind("favoriteGamesLive", B),
      F.bind("isLoadedLiveFavorites", T),
      F.bind("isLoadedLineFavorites", I);
    const U = R(() => !!N.userId),
      O = R(() => $_$() && u(b).concat(u(D))),
      x = R(() => $_$() && u(B).concat(u(k))),
      $ = R(() => $_$() && u(T) && u(I)),
      q = R(() => $_$() && u(O).reduce((t, n) => ((t[n] = !0), t), {})),
      M = new Me({
        $httpModule: _,
        $clientHeaders: l,
        $cookies: i,
        $logger: f,
        $siteConfig: { lng: d, navigationTopChamp: g },
        $T: p,
        $dateTimeService: E,
      }),
      {
        loadFavoriteGamesZip: H,
        setFavoriteUnsync: c,
        checkFavoriteUnsync: o,
        getFavoritesRemote: e,
        getFavoriteGamesLocal: r,
        setFavoriteGame: v,
        setFavoriteGamesRemote: S,
        replaceFavoriteGamesLocal: y,
        deleteFavoriteGame: z,
      } = Ve({ favoriteGames: x, favoritesApi: M }),
      re = (t) => {
        $_$();
        var n;
        return (n = u(q)[u(t)]) != null ? n : !1;
      },
      P = async (t, n = []) => {
        $_$();
        let a, s;
        const G = n.map((L) => L.id);
        u(t) === w.LINE
          ? ((D.value = G), (k.value = n))
          : ((b.value = G), (B.value = n)),
          ([a, s] = m(() => y(G, t))),
          await a,
          s();
      },
      K = (t) => {
        $_$();
        t !== w.LINE && (T.value = !0), t !== w.LIVE && (I.value = !0);
      },
      V = async (t, n) => {
        $_$();
        let a, s;
        try {
          const G =
            n != null ? n : (([a, s] = m(() => r(t))), (a = await a), s(), a);
          if (G != null && G.length) {
            const L =
              (([a, s] = m(() => H({ bettingType: t, games: G }))),
              (a = await a),
              s(),
              a);
            L && P(t, L);
          } else P(t, []);
        } finally {
          K(t);
        }
      },
      oe = async () => {
        $_$();
        let t, n;
        const a =
            (([t, n] = m(() => $_$() && r(w.LINE))), (t = await t), n(), t),
          s = (([t, n] = m(() => $_$() && r(w.LIVE))), (t = await t), n(), t);
        ([t, n] = m(() => S([...a, ...s]))), await t, n();
      },
      se = async () => {
        $_$();
        var t, n;
        let a, s;
        try {
          (([a, s] = m(() => o())), (a = await a), s(), a) &&
            (([a, s] = m(() => oe())),
            await a,
            s(),
            ([a, s] = m(() => c(!1))),
            await a,
            s());
          const L = (([a, s] = m(() => e())), (a = await a), s(), a);
          if (L) {
            const ie =
                (t = L.games.line.map((Z) => Z.mainConstId)) != null ? t : [],
              ne =
                (n = L.games.live.map((Z) => Z.mainConstId)) != null ? n : [];
            ([a, s] = m(
              () => $_$() && Promise.all([V(w.LINE, ie), V(w.LIVE, ne)])
            )),
              await a,
              s();
          }
        } finally {
          K();
        }
      };
    pe(
      U,
      (t) => {
        $_$();
        t ? se() : Promise.all([V(w.LINE), V(w.LIVE)]);
      },
      { immediate: !0 }
    );
    const X = async () => {
        $_$();
        var t;
        let n, a;
        ([n, a] = m(() => M.cancelAllRequest())),
          await n,
          a(),
          (t = window.coreBus) == null ||
            t.emit("triggerFavoritesAllRequestCanceled");
      },
      J = async ({ gameId: t, bettingType: n }) => {
        $_$();
        var a;
        let s, G;
        const L = (([s, G] = m(() => v(t, n))), (s = await s), G(), s);
        (a = window.coreBus) == null || a.emit("triggerFavoriteGameSetted", L);
      },
      Q = async ({ gameId: t, bettingType: n }) => {
        $_$();
        var a;
        let s, G;
        const L = (([s, G] = m(() => z(t, n))), (s = await s), G(), s);
        (a = window.coreBus) == null || a.emit("triggerFavoriteGameDeleted", L);
      },
      W = async (t) => {
        $_$();
        var n;
        let a, s;
        ([a, s] = m(() => V(t))),
          await a,
          s(),
          (n = window.coreBus) == null || n.emit("triggerFavoriteGamesLoaded");
      };
    return (
      Ge(() => {
        var t, n, a, s;
        (t = window.coreBus) == null ||
          t.on("triggerFavoritesCancelAllRequest", X),
          (n = window.coreBus) == null || n.on("triggerSetFavoriteGame", J),
          (a = window.coreBus) == null || a.on("triggerDeleteFavoriteGame", Q),
          (s = window.coreBus) == null || s.on("triggerLoadFavoriteGames", W);
      }),
      Se(() => {
        var t, n, a, s;
        (t = window.coreBus) == null ||
          t.off("triggerFavoritesCancelAllRequest", X),
          (n = window.coreBus) == null || n.off("triggerSetFavoriteGame", J),
          (a = window.coreBus) == null || a.off("triggerDeleteFavoriteGame", Q),
          (s = window.coreBus) == null || s.off("triggerLoadFavoriteGames", W);
      }),
      {
        favoritesApi: M,
        favoriteGamesIds: O,
        favoriteGamesLine: k,
        favoriteGamesLive: B,
        favoriteGames: x,
        isLoadedLiveFavorites: T,
        isLoadedLineFavorites: I,
        isLoadedFavorites: $,
        setFavoriteGame: v,
        deleteFavoriteGame: z,
        checkGameIsFavorite: re,
        loadFavoriteGames: V,
      }
    );
  }),
  Oe = ({ gameId: _, bettingType: l }) => {
    $_$();
    const i = De(),
      f = R(() => i.checkGameIsFavorite(_)),
      d = C(!1);
    return {
      isFavorite: f,
      toggleFavorite: async () => {
        $_$();
        let p, E;
        const F = !u(f);
        return u(d)
          ? !F
          : ((d.value = !0),
            F
              ? (([p, E] = m(() => i.setFavoriteGame(_, l))), await p, E())
              : (([p, E] = m(() => i.deleteFavoriteGame(_, l))), await p, E()),
            ([p, E] = m(() => i.loadFavoriteGames(l))),
            await p,
            E(),
            (d.value = !1),
            F);
      },
    };
  };
export { De as useFavoritesStore, Oe as useToggleFavoriteGame };
