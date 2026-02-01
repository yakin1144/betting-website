import $_$ from "./$_$.js";
$_$();
import {
  equalState as M,
  defineDynamicBettingStore as h,
  useBettingState as k,
  useBettingSectionSportsStore as F,
} from "./9de70556bb.js";
import {
  reactivity_esmBundler_unref as i,
  runtimeCore_esmBundler_computed as S,
  uniqueBy as H,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useNormalizedData as l,
  groupBy as B,
  combinePipelineModules as b,
  serverStorageShallowRef as D,
  SORTED_MENU_SECTIONS as L,
} from "./entry-50afb6f36c.js";
import { useSportsMenuApi as J } from "./9e4e245c05.js";
import { toMap as N } from "./858ab97c10.js";
const Q = ({ bettingType: a, pageType: s, storeName: t }) => {
    $_$();
    const o = i(t),
      {
        list: e,
        setArray: r,
        addArray: u,
        getItem: p,
      } = l({ propKey: "sectionChampId", cacheKey: `${o}-champs` }),
      [c, m] = M(!1, `${o}-loading`),
      g = S(() => $_$() && B(i(e), (d) => d.sectionSportId));
    return {
      bettingType: a,
      pageType: s,
      storeName: t,
      bettingSectionChamps: e,
      bettingSectionChampsLoading: c,
      sectionChampsBySectionSportId: g,
      setBettingSectionChampsLoading: m,
      setBettingSectionChamps: r,
      addBettingSectionChamps: u,
      getBettingSectionChamp: p,
    };
  },
  X = h(
    "bettingSectionChampsStore",
    ({ bettingType: a, pageType: s, storeName: t, prevStore: o }) => {
      $_$();
      const e = o,
        r = b(() => ({ bettingType: a, pageType: s, storeName: t }), Q);
      return e && r.setBettingSectionChamps(i(e.bettingSectionChamps)), r;
    }
  ),
  Y = ({ bettingType: a, pageType: s, storeName: t }) => {
    $_$();
    const o = i(t),
      {
        list: e,
        setArray: r,
        addArray: u,
        getItem: p,
      } = l({ propKey: "id", cacheKey: `${o}-games` }),
      [c, m] = M(!1, `${o}-loading`),
      g = S(() => $_$() && B(i(e), (d) => d.sectionChampId));
    return {
      pageType: s,
      bettingType: a,
      storeName: t,
      bettingGames: e,
      gamesBySectionChampId: g,
      bettingGamesLoading: c,
      setBettingGamesLoading: m,
      setBettingGames: r,
      addBettingGames: u,
      getBettingGame: p,
    };
  },
  Z = h(
    "bettingGamesStore",
    ({ bettingType: a, pageType: s, storeName: t, prevStore: o }) => {
      $_$();
      const e = o,
        r = b(() => ({ bettingType: a, pageType: s, storeName: t }), Y);
      return e && r.setBettingGames(i(e.bettingGames)), r;
    }
  ),
  T = ({ bettingType: a, pageType: s, storeName: t }) => {
    $_$();
    const o = i(t),
      {
        list: e,
        setArray: r,
        addArray: u,
        getItem: p,
      } = l({ propKey: "id", cacheKey: `${o}-games` }),
      [c, m] = M(!1, `${o}-loading`),
      g = S(() => $_$() && B(i(e), (d) => d.id));
    return {
      bettingType: a,
      pageType: s,
      storeName: t,
      bettingSubGames: e,
      subGamesByGameId: g,
      bettingSubGamesLoading: c,
      setBettingSubGames: r,
      addBettingSubGames: u,
      getBettingSubGame: p,
      setBettingSubGamesLoading: m,
    };
  },
  tt = h(
    "bettingSubGamesStore",
    ({ bettingType: a, pageType: s, storeName: t, prevStore: o }) => {
      $_$();
      const e = o,
        r = b(() => ({ bettingType: a, pageType: s, storeName: t }), T);
      return e && r.setBettingSubGames(i(e.bettingSubGames)), r;
    }
  ),
  et = ({ bettingType: a, pageType: s, storeName: t }) => {
    $_$();
    const o = i(t),
      {
        list: e,
        setArray: r,
        addArray: u,
        getItem: p,
      } = l({ propKey: "sectionChampGroupId", cacheKey: `${o}-champGroups` }),
      [c, m] = M(!1, `${o}-loading`);
    return {
      bettingType: a,
      pageType: s,
      storeName: t,
      bettingChampGroups: e,
      bettingChampGroupsLoading: c,
      setBettingChampGroupsLoading: m,
      setBettingChampGroups: r,
      addBettingChampGroups: u,
      getBettingChampGroup: p,
    };
  },
  st = h(
    "bettingSectionChampGroupsStore",
    ({ bettingType: a, pageType: s, storeName: t, prevStore: o }) => {
      $_$();
      const e = o,
        r = b(() => ({ bettingType: a, pageType: s, storeName: t }), et);
      return e && r.setBettingChampGroups(i(e.bettingChampGroups)), r;
    }
  ),
  dt = h("sportsMenuStore", ({ storeName: a, bettingType: s, pageType: t }) => {
    $_$();
    const o = i(a),
      { bettingStoreType: e, bettingStoreNamespace: r } = k({
        bettingType: s,
        pageType: t,
      }),
      {
        bettingSectionSports: u,
        setBettingSectionSports: p,
        getBettingSectionSport: c,
        bettingSectionSportsCount: m,
        bettingSectionSportsGamesCount: g,
        bettingSectionSportsGamesWithVideoCount: d,
      } = F({ bettingType: s, pageType: t }),
      {
        bettingSectionChamps: R,
        setBettingSectionChamps: y,
        getBettingSectionChamp: x,
      } = X({ bettingType: s, pageType: t }),
      {
        bettingChampGroups: _,
        setBettingChampGroups: f,
        getBettingChampGroup: q,
      } = st({ bettingType: s, pageType: t }),
      {
        bettingGames: U,
        setBettingGames: I,
        getBettingGame: E,
      } = Z({ bettingType: s, pageType: t }),
      {
        bettingSubGames: A,
        setBettingSubGames: K,
        getBettingSubGame: O,
      } = tt({ bettingType: s, pageType: t }),
      { sportsMenuApi: v } = J(),
      P = D(1, `${o}-sportsMenuUpdatesCounter`),
      C = D({}, `${o}-sportsMenuSharedPromise`),
      V = S(() => $_$() && H(i(u).map((n) => n.menuSection))),
      W = S(() => $_$() && N(i(u), (n) => n.id)),
      $ = S(() => $_$() && B(i(u), (n) => n.menuSection)),
      w = S(() => {
        $_$();
        const n = i(V);
        return L.filter((G) => n.includes(G));
      }),
      z = S(() => {
        $_$();
        const n = i($);
        return L.map((G) => n[G])
          .filter(Boolean)
          .flat();
      }),
      j = S(() => $_$() && B(i(A), (n) => n.mainGameId));
    return {
      bettingType: s,
      pageType: t,
      sportsMenuApi: v,
      bettingStoreType: e,
      bettingStoreNamespace: r,
      bettingSectionSports: u,
      bettingSectionChamps: R,
      bettingChampGroups: _,
      bettingGames: U,
      bettingSubGames: A,
      sportsMenuUpdatesCounter: P,
      sportsMenuSportById: W,
      sportsMenuSportsByMenuSection: $,
      sportsMenuSportsCount: m,
      sportsMenuGamesCount: g,
      sportsMenuGamesWithVideoCount: d,
      sportsMenuSortedSports: z,
      sportsMenuSortedMenuSections: w,
      sportsMenuSubGamesByGameId: j,
      sportsMenuSharedPromise: C,
      getBettingSectionSport: c,
      getBettingSectionChamp: x,
      getBettingChampGroup: q,
      getBettingGame: E,
      getBettingSubGame: O,
      setBettingChampGroups: f,
      setBettingSectionSports: p,
      sportsMenuSetParsedData: (n) => {
        p(n.sports), y(n.champs), f(n.champGroups), I(n.games), K(n.subGames);
      },
      sportsMenuClearData: () => {
        p([]), y([]), I([]), K([]), f([]);
      },
      sportsMenuTriggerUpdateData: () => {
        P.value += 1;
      },
      sportsMenuCancelRequest: (n) => {
        v.cancelAllRequest(n), (C.value = {});
      },
      sportsMenuAddSharedPromise: (n, G) => {
        C.value[n] = G;
      },
      sportsMenuRemoveSharedPromise: (n) => {
        delete C.value[n];
      },
    };
  });
export {
  Z as useBettingGamesStore,
  st as useBettingSectionChampGroupsStore,
  X as useBettingSectionChampsStore,
  tt as useBettingSubGamesStore,
  dt as useSportsMenuStore,
};
