import $_$ from "./$_$.js";
$_$();
import {
  index_useLogger as v,
  index_useApiInstances as M,
  index_getConfigs as b,
  isDef as f,
  execAsync as P,
  createAppComposable as $,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const I = () => {
    $_$();
    const i = v(),
      { gameApi: h } = M(),
      [{ id: p }, { id: n }, c, m] = b(-1004, -1012, -1e3, -1001),
      u = {},
      e = {},
      l = ({ gameId: o }) =>
        h.loadMatchesSchedule({
          groupId: m,
          ref: c.toString(),
          fcountry: n,
          lng: p,
          gameId: o,
        });
    return {
      loadSchedule: async ({ gameId: o, isAwayTeam: r }) => {
        $_$();
        let t, d;
        const y = `${o}:${r}`;
        if (f(e[y])) return Promise.resolve(e[y]);
        f(u[o]) || (u[o] = l({ gameId: o }));
        try {
          const a = (([t, d] = P(() => u[o])), (t = await t), d(), t);
          return (
            (e[y] = {
              recentGames: r ? a.awayTeamGames : a.homeTeamGames,
              futureGames: r ? a.awayTeamFutureGames : a.homeTeamFutureGames,
              previousMeetings: a.previousMeetings,
            }),
            e[y]
          );
        } catch (a) {
          return (
            i.error("MatchesScheduleService error", a),
            { recentGames: [], futureGames: [], previousMeetings: [] }
          );
        }
      },
    };
  },
  L = () => {
    $_$();
    const i = v(),
      { gameApi: h } = M(),
      [{ id: p }] = b(-1004),
      n = {},
      c = {},
      m = (e) => h.getLineups({ statisticGameId: e, language: p });
    return {
      loadLineup: async ({ statisticGameId: e, isAwayTeam: l }) => {
        $_$();
        let s, o;
        const r = `${e}:${l}`;
        if (f(c[r])) return Promise.resolve(c[r]);
        f(n[e]) || (n[e] = m(e));
        try {
          const {
              awayTeamActivePlayerIds: t,
              homeTeamActivePlayerIds: d,
              awayTeamAbsentPlayerIds: y,
              homeTeamAbsentPlayerIds: a,
              playerByIds: g,
            } = (([s, o] = P(() => n[e])), (s = await s), o(), s),
            S = l ? t : d,
            R = l ? y : a;
          return (
            (c[r] = {
              activePlayers: S.map((_) => g[_]),
              absentPlayers: R.map((_) => g[_]),
            }),
            c[r]
          );
        } catch (t) {
          return (
            i.error("LineupsService error", t),
            { activePlayers: [], absentPlayers: [] }
          );
        }
      },
    };
  },
  x = () => {
    $_$();
    const i = v(),
      { gameApi: h } = M(),
      [{ id: p }] = b(-1004),
      n = {},
      c = {},
      m = (e) => h.loadShortPlayersInfo({ statisticGameId: e, language: p });
    return {
      loadInfo: async ({ statisticGameId: e, isAwayTeam: l }) => {
        $_$();
        let s, o;
        const r = `${e}:${l}`;
        if (f(c[r])) return Promise.resolve(c[r]);
        f(n[e]) || (n[e] = m(e));
        try {
          const { firstPlayerInfo: t, secondPlayerInfo: d } =
            (([s, o] = P(() => n[e])), (s = await s), o(), s);
          return (c[r] = l ? d : t), c[r];
        } catch (t) {
          return i.error("DefaultShortPlayersInfoService error", t), {};
        }
      },
    };
  },
  K = $(() => {
    const { loadSchedule: i } = I(),
      { loadLineup: h } = L(),
      { loadInfo: p } = x(),
      n = {};
    return {
      loadStats: async ({ gameId: u, statisticGameId: e, isAwayTeam: l }) => {
        $_$();
        let s, o;
        const r = `${e}:${l}`;
        if (f(n[r])) return n[r];
        const t = i({ gameId: u, isAwayTeam: l }),
          d = h({ statisticGameId: e, isAwayTeam: l }),
          y = p({ statisticGameId: e, isAwayTeam: l }),
          [a, g, S] =
            (([s, o] = P(() => Promise.all([t, d, y]))), (s = await s), o(), s);
        return (
          (n[r] = { lineup: g, shortPlayerInfo: S, matchesSchedule: a }), n[r]
        );
      },
      loadMatchesSchedule: ({ gameId: u, isAwayTeam: e }) =>
        i({ gameId: u, isAwayTeam: e }),
    };
  });
export { K as useTeamStats };
