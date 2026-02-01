import $_$ from "./$_$.js";
$_$();
import { useSportsMenuStore as k } from "./e063df8dd1.js";
import {
  runtimeCore_esmBundler_computed as o,
  reactivity_esmBundler_unref as t,
  constants_MENU_SECTION_URL_NAME_MAP as W,
  isDef as N,
  router_useRouter as v,
  router_useRoute as P,
  index_useLogger as U,
  useGlobalStore as x,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as V,
  omitNotDefined_omitNotDefined as w,
  BettingPageType as L,
  execAsync as T,
  index_useT as D,
  reactivity_esmBundler_toValue as H,
  useRouterMethodsWithLang as O,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useSelectedBettingEntitiesStore as q,
  useBettingStateInjector as j,
} from "./9de70556bb.js";
import { useBettingChampSelected as K } from "./944eab39d4.js";
import {
  useBettingRouteData as z,
  useBettingRoute as J,
  useBettingSportsStore as Q,
  useGameLinkParams as X,
} from "./entry-50afb6f36c.js";
import { useBettingPageData as Y } from "./4a993370c6.js";
import { useSportsMenuFiltersStore as Z } from "./6550e9bfb1.js";
import { useSelectedSportMenuEntitiesStore as $ } from "./aa92bf211f.js";
import { useMatchTabFilter as tt } from "./858ab97c10.js";
import { useBettingStore as et } from "./1af6a171a2.js";
import { useGameVideoAvailability as ot } from "./c7ea6bc74a.js";
const Bt = (e) => {
    $_$();
    const { getBettingChampGroup: n } = k();
    return {
      mixedChampsAndChampGroupsWithSubGames: o(
        () =>
          $_$() && [
            ...t(e)
              .reduce((s, r) => {
                var a;
                const { sectionChampGroupId: c } = r,
                  u = n(c);
                if (u) {
                  const p =
                    (a = s.get(u.sectionChampGroupId)) != null
                      ? a
                      : { ...u, subChamps: [] };
                  p.subChamps.push(r), s.set(u.sectionChampGroupId, p);
                } else s.set(r.sectionChampId, r);
                return s;
              }, new Map())
              .values(),
          ]
      ),
    };
  },
  nt = () => {
    $_$();
    const { routeChampId: e } = z(),
      {
        listSelectedMenuSectionIds: n,
        listSelectedSectionSportIds: i,
        listSelectedSectionChampIds: s,
      } = q(),
      { getBettingSectionSport: r, getBettingSectionChamp: a } = k(),
      c = o(() => $_$() && t(n).slice(-1).shift()),
      u = o(() => {
        $_$();
        const m = t(c);
        return N(m) ? W[m] : void 0;
      }),
      p = o(() => $_$() && t(i).slice(-1).shift()),
      d = o(() => $_$() && r(t(p))),
      h = o(() => $_$() && t(s).slice(-1).shift()),
      C = o(
        () =>
          $_$() &&
          t(s)
            .map((m) => a(m))
            .pop()
      ),
      I = o(() => {
        $_$();
        const m = t(s).find((B) => {
          $_$();
          const [, _] = B.split("_");
          return _ === String(t(e));
        });
        return a(m);
      });
    return {
      lastSelectedMenuSectionId: c,
      lastSelectedMenuSection: u,
      lastSelectedSectionSportId: p,
      lastSelectedSectionSport: d,
      lastSelectedSectionChampId: h,
      lastSelectedSectionChamp: C,
      currentSectionChamp: I,
    };
  },
  _t = (e) => {
    $_$();
    const n = v(),
      i = P(),
      s = U(),
      r = x(),
      { isSameRoute: a } = J(),
      { bettingType: c, pageType: u } = j(),
      { champSelectedInBetting: p, toggleChampInBetting: d } = K(e),
      { getBettingRouteUrl: h, getBettingRoute: C } = V(),
      { getBettingSportById: I } = Q(),
      { isTeamPage: m } = Y(),
      {
        lastSelectedMenuSection: B,
        lastSelectedSectionSport: _,
        lastSelectedSectionChamp: E,
      } = nt(),
      A = o(() => r.getLanguage),
      R = (f, S, g, y) => {
        $_$();
        const l = t(f),
          b = l ? I(l.sportId) : t(g);
        return w({
          lng: t(A),
          pageType: t(m) ? L.HOME : t(u),
          section: t(c),
          menuSection: l ? l.menuSectionNameForUrl : t(y),
          sport: b == null ? void 0 : b.nameForUrl,
          champ: l == null ? void 0 : l.champNameForUrl,
          routerReplace: S,
        });
      },
      M = o(() => $_$() && !!t(i).params.sport && !t(i).params.game),
      F = o(() => $_$() && h(R(e, t(M)))),
      G = o(() => $_$() && R(E, t(M), _, B));
    return {
      champSelectedInBetting: p,
      champRouteLink: F,
      lastChampRouteLink: G,
      getChampRoute: R,
      routerReplace: M,
      toggleChampRoute: async (f = !t(p)) => {
        $_$();
        let S, g;
        d(f);
        const y = { ...t(G), pageType: t(m) ? L.HOME : t(u) },
          l = C(y);
        if (a(y)) return f;
        try {
          t(M)
            ? (([S, g] = T(() => n.replace(l))), await S, g())
            : (([S, g] = T(() => n.push(l))), await S, g());
        } catch (b) {
          s.warn("changeBettingRoute: ", b);
        }
        return f;
      },
      toggleChampInBetting: d,
    };
  },
  st = (e, n = !0) => {
    $_$();
    const { toggleSelectedSectionSportId: i, hasSelectedSectionSportId: s } =
        $(),
      r = o(() => $_$() && s(t(e).sectionSportId));
    return {
      sportExpandedInSportsMenu: r,
      expandSportInSportsMenu: (c = !t(r)) => {
        $_$();
        i({
          item: t(e).sectionSportId,
          bindKeys: [t(e).menuSection],
          isClear: !t(n),
          value: c,
        });
      },
    };
  },
  ft = (e) => {
    $_$();
    const n = et(),
      i = tt(),
      { sportsMenuFilteredChampsBySectionSportId: s } = Z(),
      { sportExpandedInSportsMenu: r, expandSportInSportsMenu: a } = st(e),
      c = o(() => {
        $_$();
        var p;
        return (p = t(s)[t(e).sectionSportId]) != null ? p : [];
      });
    return {
      sportGamesCount: o(() =>
        $_$() && n.bettingIsOnlyWithVideos && t(i.liveTab) !== 1
          ? t(e).gamesCountWithVideo
          : t(e).gamesCount
      ),
      sportChamps: c,
      sportExpandedInSportsMenu: r,
      expandSportInSportsMenu: a,
    };
  },
  rt = (e, n) => {
    switch (e) {
      case -2:
      case -1:
        return n("office_history_bet_scores_pending");
      default:
        return n("office_history_bet_scores");
    }
  },
  Mt = (e) => {
    $_$();
    const n = D();
    return { title: o(() => $_$() && rt(H(e), n)) };
  },
  it = (e) => {
    $_$();
    const n = x(),
      { getLinkWithLang: i } = O(() => n.language),
      s = X(t(e));
    return { gameLink: o(() => (s ? i(s) : "")) };
  },
  yt = (e) => {
    $_$();
    const n = v(),
      { checkGameVideoAvailable: i } = ot(),
      { gameLink: s } = it(e),
      r = o(() => $_$() && n.resolve(t(s))),
      a = o(() => {
        $_$();
        const {
            market: d,
            isCyber: h,
            isOurRegion: C,
            champCountryId: I,
            broadcastingId: m,
          } = t(e),
          { champId: B, sportId: _ } = d;
        return {
          champId: B,
          sportId: _,
          isCyberSport: h,
          isOurRegion: C,
          countryId: I,
          videoId: m,
        };
      }),
      c = o(() => i(a)),
      u = o(() => $_$() && t(e).broadcastingId && t(c) && !t(e).isGameFinished);
    return {
      translationLink: o(() =>
        $_$() && t(u)
          ? n.resolve({
              path: t(r).path,
              query: { ...t(r).query, broadcast: t(e).broadcastingId },
            }).href
          : ""
      ),
    };
  };
export {
  it as useBetHistoryGameLink,
  yt as useBetHistoryGameTranslation,
  Mt as useBetStatusTitle,
  _t as useBettingChampRoute,
  nt as useBettingLastSelectedEntities,
  Bt as useMixedChampsAndChampGroupsWithSubGames,
  ft as useSportsMenuSportInfo,
};
