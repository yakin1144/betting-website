import $_$ from "./$_$.js";
$_$();
import {
  getMenuSection as v,
  getMenuSectionEntityIdForUrl as S,
  SportsMenuMarketGroupRouteParam as d,
  SORTED_MENU_SECTIONS as y,
  bettingGameAdapter as g,
  ChampParser as C,
  BettingGameParser as P,
  getSportNameForUrl as f,
  DEFAULT_MENU_SECTION as b,
} from "./entry-50afb6f36c.js";
import {
  normalizeUrl as A,
  translit_translit as R,
  disableReactivity_disableReactivity as M,
  constants_MENU_SECTION_URL_NAME_MAP as U,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const L = ({ unparsedSport: r }) => {
    $_$();
    var s, a, t, n, p, m;
    const e = r.I,
      o = (s = r.N) != null ? s : "",
      c = (a = r.E) != null ? a : "",
      l = r.IN,
      G = r.ICY,
      i = v({ menuSection: r.MS, categoryId: r.CID, isCyber: G, isNew: l }),
      u = A(R(c || o || ""));
    return M({
      id: e,
      name: o,
      nameEng: c,
      isCyber: G,
      nameForUrl: u,
      menuSection: i,
      gamesCount: (t = r.C) != null ? t : 0,
      gamesCountWithVideo: (n = r.V) != null ? n : 0,
      gamesCountWithZone: (p = r.Z) != null ? p : 0,
      champsCount: (m = r.CC) != null ? m : 0,
      menuSectionNameForUrl: U[i],
      ico: String(e),
      sectionSportId: S(i, e),
    });
  },
  F = (r) =>
    r.map(
      (s) =>
        $_$() &&
        M({
          marketGroup: s.Key,
          marketGroupNameForUrl: d[s.Key],
          count: s.Value.C,
        })
    );
var W = Object.defineProperty,
  D = (r, s, a) =>
    s in r
      ? W(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[s] = a),
  O = (r, s, a) => D(r, s + "", a);
const I = class {
  static parseGetSportsResponse({
    unparsedSports: s,
    dateTimeService: a,
    translationService: t,
    logger: n,
    lng: p,
    navigationTopChamp: m,
  }) {
    return s.reduce(
      (e, o) => {
        var c;
        const l = L({ unparsedSport: o }),
          G = (c = o.L) != null ? c : [];
        return (
          y.includes(l.menuSection) &&
            (e.sports.push(l),
            G.forEach((i) => {
              let u;
              if (Array.isArray(i.SC)) {
                const {
                  games: h,
                  champGroup: _,
                  champs: E,
                } = this.parseChampGroup({
                  rawChampGroup: i,
                  sport: l,
                  dateTimeService: a,
                  translationService: t,
                  logger: n,
                  lng: p,
                  navigationTopChamp: m,
                });
                e.champGroups.push(_), e.champs.push(...E), (u = h);
              } else {
                const { champ: h, games: _ } = this.parseChampAndGames({
                  rawChamp: i,
                  sport: l,
                  dateTimeService: a,
                  translationService: t,
                  logger: n,
                  lng: p,
                  navigationTopChamp: m,
                });
                e.champs.push(h), (u = _);
              }
              e.games.push(...u.map(g)),
                u.forEach((h) => {
                  var _;
                  (_ = h.subGames) == null ||
                    _.forEach((E) => {
                      e.subGames.push(g(E));
                    });
                });
            })),
          e
        );
      },
      { sports: [], champs: [], champGroups: [], subGames: [], games: [] }
    );
  }
  static parseChampGroup({
    rawChampGroup: s,
    sport: a,
    dateTimeService: t,
    translationService: n,
    logger: p,
    lng: m,
    navigationTopChamp: e,
  }) {
    var o;
    const { champGroup: c, champs: l } = C.parseChampGroupWithParams({
        navigationTopChamp: e,
        data: { SI: a.id, ...s },
        params: { menuSection: a.menuSection },
      }),
      G = (o = s.SC) != null ? o : [],
      i = [];
    return (
      G.forEach((u, h) => {
        var _;
        i.push(
          ...this.parseGames({
            champ: l[h],
            rawGames: (_ = u.G) != null ? _ : [],
            dateTimeService: t,
            translationService: n,
            logger: p,
            lng: m,
            navigationTopChamp: e,
          })
        );
      }),
      { champGroup: c, games: i, champs: l }
    );
  }
  static parseGames({
    champ: s,
    rawGames: a,
    dateTimeService: t,
    translationService: n,
    logger: p,
    lng: m,
    navigationTopChamp: e,
  }) {
    var o;
    return (o = a.map((c) =>
      this.parseGameByChamp({
        unparsedGame: c,
        champ: s,
        dateTimeService: t,
        translationService: n,
        logger: p,
        lng: m,
        navigationTopChamp: e,
      })
    )) != null
      ? o
      : [];
  }
  static parseGetChampsResponse({
    champs: s,
    menuSection: a,
    navigationTopChamp: t,
  }) {
    const n = [],
      p = [];
    return (
      s.forEach((m) => {
        if (Array.isArray(m.SC)) {
          const { champGroup: e, champs: o } = C.parseChampGroupWithParams({
            navigationTopChamp: t,
            data: m,
            params: { menuSection: a },
          });
          p.push(e), n.push(...o);
        } else
          n.push(
            C.parseChampWithParams({
              navigationTopChamp: t,
              data: m,
              params: { menuSection: a },
            })
          );
      }),
      { champs: n, champGroups: p }
    );
  }
  static parseGetChampResponse({
    unparsedChamp: s,
    menuSection: a,
    dateTimeService: t,
    translationService: n,
    logger: p,
    lng: m,
    navigationTopChamp: e,
  }) {
    var o;
    const c = C.parseChampWithParams({
        navigationTopChamp: e,
        data: s,
        params: { menuSection: a },
      }),
      l = (o = s == null ? void 0 : s.G) != null ? o : [],
      G = c
        ? l.map((u) =>
            this.parseGameByChamp({
              unparsedGame: u,
              champ: c,
              dateTimeService: t,
              translationService: n,
              logger: p,
              lng: m,
              navigationTopChamp: e,
            })
          )
        : [],
      i = G.flatMap((u) => {
        var h;
        return (h = u.subGames) != null ? h : [];
      });
    return { champ: c, games: G.map(g), subGames: i.map(g) };
  }
  static parseGameByChamp({
    unparsedGame: s,
    champ: a,
    dateTimeService: t,
    translationService: n,
    logger: p,
    lng: m,
    navigationTopChamp: e,
  }) {
    var o;
    return P.parseGame({
      unparsedGameData: {
        ...s,
        LI: a.id,
        CHIMG: a.logotype,
        L: a.name,
        LE: (o = s.LE) != null ? o : a.nameEng,
        MS: [a.menuSection],
      },
      dateTimeService: t,
      logger: p,
      translationService: n,
      lng: m,
      navigationTopChamp: e,
    });
  }
  static parseAsiaLineSportsResponse(s) {
    return s.map((a) => {
      $_$();
      var t, n, p, m, e;
      return M({
        id: a.I,
        ico: String(a.I),
        name: (t = a.N) != null ? t : "",
        nameEng: (n = a.E) != null ? n : "",
        nameForUrl: f({
          sportName: (p = a.N) != null ? p : "",
          sportNameEng: a.E,
        }),
        gamesCount: (m = a.C) != null ? m : 0,
        categoryId: a.CID,
        subs: F((e = a.AM) != null ? e : []),
        sectionSportId: void 0,
        sportListId: a.SportListId,
      });
    });
  }
};
O(
  I,
  "parseChampAndGames",
  ({
    rawChamp: r,
    sport: s,
    dateTimeService: a,
    translationService: t,
    logger: n,
    lng: p,
    navigationTopChamp: m,
  }) => {
    var e;
    const o = C.parseChampWithParams({
        navigationTopChamp: m,
        data: { SI: s.id, ...r },
        params: { menuSection: s.menuSection },
      }),
      c = (e = r.G) != null ? e : [];
    return {
      champ: o,
      games: I.parseGames({
        champ: o,
        rawGames: c,
        dateTimeService: a,
        translationService: t,
        logger: n,
        lng: p,
        navigationTopChamp: m,
      }),
    };
  }
);
let N = I;
const w = ({
    unparsedChamp: r,
    menuSectionFeed: s = [],
    dateTimeService: a,
    translationService: t,
    logger: n,
    siteConfig: p,
  }) => {
    const [m = b] = s || [];
    return N.parseGetChampResponse({
      unparsedChamp: r,
      menuSection: m,
      dateTimeService: a,
      translationService: t,
      logger: n,
      lng: p.lng,
      navigationTopChamp: p.navigationTopChamp,
    });
  },
  K = ({
    unparsedSports: r,
    dateTimeService: s,
    translationService: a,
    logger: t,
    siteConfig: n,
  }) =>
    N.parseGetSportsResponse({
      unparsedSports: r,
      dateTimeService: s,
      translationService: a,
      logger: t,
      lng: n.lng,
      navigationTopChamp: n.navigationTopChamp,
    }),
  Z = ({ champs: r, menuSectionFeed: s = [], siteConfig: a }) => {
    const [t = b] = s != null ? s : [];
    return N.parseGetChampsResponse({
      champs: r,
      menuSection: t,
      navigationTopChamp: a.navigationTopChamp,
    });
  };
export {
  N as SportMenuParser,
  w as parseChamp,
  Z as parseChamps,
  K as parseSports,
};
