import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as zr,
  index_useLogger as Da,
  runtimeCore_esmBundler_h as Xr,
  bettingType_BettingType as ce,
  isDef as ue,
  useGlobalStore as Zr,
  index_useAppStorage as Jr,
  index_getConfig as es,
  index_useApiInstances as ts,
  useNotifications_useNotifications as as,
  index_useT as rs,
  reactivity_esmBundler_ref as d,
  runtimeCore_esmBundler_computed as o,
  reactivity_esmBundler_unref as t,
  AppStorageDynamicKeys as Ze,
  index_default_46 as ss,
  index_default_6 as os,
  uniqueBy as Pe,
  execAsync as l,
  HttpClient as le,
  reactivity_esmBundler_toRaw as ns,
  AppStorageKey as Ee,
  clamp as is,
  MarketsNameType as ls,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  TimelineEventViewModel as cs,
  PERIODS_TOTAL_NUMBER_BY_SPORT_ID as us,
  PERIOD_DURATION_BY_SPORT_ID as ds,
  OVERTIME_PERIOD_DURATION_BY_SPORT_ID as ms,
  SPORTS_WITH_SUB_SCORES_INSTEAD_OF_MAIN_SCORES as ps,
  useMediaStore as _s,
  DUMMY_GAME_ID as Ca,
  DEFAULT_MARKET_GRID_COLUMNS_COUNT_OPTION as Je,
  MARKET_PAGE_SIZE as he,
  DEFAULT_MARKET_TYPE as Ss,
  DEFAULT_ALL_MARKET_GROUPS_COLLAPSED_STATE as wa,
  DEFAULT_MARKET_GRID_MAX_COLUMNS_COUNT as gs,
  createBettingGameDummy as ys,
  GAME_TYPE_DUEL as et,
  ungroupedGroupPath as Ts,
  fixKeyboardLayoutTypos as Aa,
  getHomeAwayPlayersRecords as W,
  PlayerType as k,
  LineupsPlayerGroup as H,
  getGoalsByTeamNumber as La,
  MediaTarget as Is,
  isGameWeatherDataEmpty as vs,
  getIsSinglePlayerEvent as bs,
  SPORTS_WITHOUT_SCORES as fs,
  SPORTS_WITH_TIMELINE as Gs,
  SPORTS_WITH_FINAL_SCORES_IN_PERIODS as ks,
  WIDE_SCREEN_SCOREBOARD_SPORTS as Ms,
  toggleCollectionElement as Ps,
  MarketGridCategory as Na,
  useStatisticModule as Es,
  useBetModelsManager as hs,
  MarketsParser as Cs,
  fetchValueFromAppStorage as Ce,
  encodeEventsForRequest as ws,
  BettingMarketType as As,
  useMarketLayoutService as Ls,
  filterByText as Ns,
  MarketGroup as Ds,
  compileName as Rs,
} from "./entry-50afb6f36c.js";
const qs = zr({
  name: "VSwitch",
  props: { value: { type: [Number, String], required: !0 } },
  setup: (b, { slots: v }) =>
    $_$() &&
    (Da(),
    () => {
      $_$();
      var p, I, _, m;
      const [f] =
        (m =
          (_ = (p = v[b.value]) == null ? void 0 : p.call(v)) != null
            ? _
            : (I = v == null ? void 0 : v.default) == null
            ? void 0
            : I.call(v)) != null
          ? m
          : [];
      return (
        f && (f.key || (f.key = `step-${b.value}`)), f != null ? f : Xr("div")
      );
    }),
});
function Us({ timelineEvents: b, currentGame: v }) {
  var p;
  const { sportId: I } = v,
    _ = us[I],
    m = ds[I];
  if (!_ || !m) return [];
  const f = _ * m,
    E = (p = ms[I]) != null ? p : 0,
    T = (S, G) => (G ? _ + Math.ceil((S - f) / E) : Math.ceil(S / m)),
    R = (S, G) => (G ? f + (S - _ - 1) * E : (S - 1) * m),
    O = (S, G, P) => {
      const N = P ? E : m;
      return Math.ceil(((S - G) / N) * 100);
    };
  if (!m) return [];
  const h = (S) => {
    var G;
    let P = S.timeInMinutes + (S.periodNumber ? (S.periodNumber - 1) * m : 0);
    return (
      I === 13 &&
        (P = ((G = S.periodNumber) != null ? G : 0) * m - S.timeInMinutes),
      P
    );
  };
  return b.map((S) => {
    var G;
    const P = h(S),
      N = P > f && !!E,
      ee = (G = S.periodNumber) != null ? G : T(P, N),
      _e = R(ee, N),
      $ = O(P, _e, N);
    return new cs({
      timeInMinutes: P,
      name: S.name,
      playerName: S.playerName,
      teamNumber: S.teamNumber,
      code: S.code,
      sportId: I,
      timeInPercent: $,
      periodNumber: ee,
      additionalTimeInMinutes: S.additionalTimeInMinutes,
    });
  });
}
function Os({ currentGame: b, sectionType: v }) {
  $_$();
  const { matchInfo: p, statistics: I, sportId: _ } = b;
  if (_ === 41) {
    if (v === ce.LIVE) return b.firstOpponentName;
    if (v === ce.LINE) return b.champName;
  }
  return [
    p == null ? void 0 : p.scoreLabel,
    p == null ? void 0 : p.country,
    p == null ? void 0 : p.fieldType,
    p == null ? void 0 : p.stage,
    p == null ? void 0 : p.gameType,
    I == null ? void 0 : I.info,
  ]
    .filter(Boolean)
    .join(". ")
    .trim();
}
function Fs({ currentGame: b, standingsGroups: v }) {
  const { firstOpponentName: p, secondOpponentName: I } = b,
    _ = (T, R) =>
      T.some((O) => {
        var h;
        return ((h = O.team.name) == null ? void 0 : h.localeCompare(R)) === 0;
      }),
    m = v.find((T) => _(T, p) && _(T, I));
  if (m) return m;
  const f = v.find((T) => _(T, p)),
    E = v.find((T) => _(T, I));
  return f && E ? [f, E] : [];
}
function Bs({ currentGame: b }) {
  $_$();
  var m;
  const {
    sportId: v,
    firstOpponentScoreLabel: p,
    secondOpponentScoreLabel: I,
    statistics: _,
  } = b;
  if (ps.includes(v)) {
    const { firstOpponentScore: f, secondOpponentScore: E } =
      (m = _ == null ? void 0 : _.subScore) != null ? m : {};
    return [ue(f) ? String(f) : void 0, ue(E) ? String(E) : void 0];
  }
  return [p, I];
}
const xs = 4,
  js = () => {
    $_$();
    const b = Zr(),
      v = _s(),
      p = Jr(),
      { id: I } = es(-1004),
      { gameApi: _ } = ts(),
      m = Da(),
      { notificationSuccess: f, notificationError: E } = as(),
      T = rs(),
      R = d(void 0),
      O = d(Ca),
      h = d({}),
      S = d([]),
      G = d(void 0),
      P = d([]),
      N = d([]),
      ee = d(!1),
      _e = d(!0),
      $ = d(Je),
      Q = d([]),
      q = d([]),
      Se = d([]),
      F = d([]),
      de = d(he),
      ge = d(Ss),
      j = d(""),
      z = d(wa),
      we = d([]),
      tt = d(!1),
      at = d(!1),
      Ae = d([]),
      ye = d(gs),
      Le = d([]),
      Ne = d([]),
      De = d([]),
      Re = d([]),
      te = d({}),
      rt = d(""),
      ae = d([[]]),
      st = d(!1),
      re = d([]),
      ot = d([]),
      Ue = d({}),
      Oe = d(!1),
      nt = d(0),
      it = d(0),
      C = d([]),
      w = d([]),
      lt = d([0]),
      ct = d(void 0),
      c = o(() => {
        $_$();
        var e;
        return (e = t(h)[t(O)]) != null ? e : ys();
      }),
      Ra = o(() => ($_$() && t(c).marketsCountByType) || {}),
      ut = o(
        () =>
          $_$() &&
          t(N)
            .map((e) => $_$() && t(h)[e])
            .filter(Boolean)
      ),
      Te = o(() => {
        $_$();
        const e = t(c);
        if (e.isSubGame || t(R) === ce.LINE) {
          const a = t(Ue);
          return e.typeId === et && a ? a[t(ge)] : e.numberOfMarkets || 0;
        }
        return t(ut).reduce((a, r) => a + (r.numberOfMarkets || 0), 0);
      }),
      dt = o(() => {
        $_$();
        const e = t(c);
        return e.isSubGame ? t(h)[e.mainGameId] : e;
      }),
      mt = o(
        () =>
          $_$() &&
          (t(S) || []).map((e) => (e.marketColumns || []).flat()).flat()
      ),
      pt = o(() => ($_$() && t(c).isSubGame ? [Ts] : ["gameName"])),
      Ua = o(() => {
        $_$();
        const e = b.getLanguage;
        return Aa(t(j), { language: e });
      }),
      _t = o(() => {
        $_$();
        const e = t(mt).length,
          a = t(Te);
        return (
          e > a &&
            m.error(
              "game store, areAllMarketsLoaded getter",
              `Loaded markets count is greater than the total markets count,
            loaded markets count - ${e}, total markets count - ${a}`
            ),
          e >= a
        );
      }),
      Oa = o(() => $_$() && t(ye) > 1),
      Fe = o(() => {
        $_$();
        const { id: e } = t(dt);
        return Ze.GAME_ARE_ALL_MARKET_GROUPS_COLLAPSED.compile(e);
      }),
      Ie = o(() => {
        $_$();
        const { id: e } = t(c);
        return Ze.GAME_COLLAPSED_MARKET_GROUPS.compile(e);
      }),
      ve = o(() => {
        $_$();
        const { id: e } = t(c);
        return Ze.GAME_EXPANDED_MARKET_GROUPS.compile(e);
      }),
      se = o(() => {
        $_$();
        const e = ss(t(c).startUnixTimestamp),
          a = Date.now();
        return Number(e) > a ? e : os(a, 1);
      }),
      B = o(() => {
        $_$();
        var e;
        return ((e = t(Le)) != null ? e : []).map((a) => $_$() && t(te)[a]);
      }),
      St = o(() => {
        $_$();
        var e;
        return ((e = t(Ne)) != null ? e : []).map((a) => $_$() && t(te)[a]);
      }),
      x = o(() => {
        $_$();
        var e;
        return ((e = t(De)) != null ? e : []).map((a) => $_$() && t(te)[a]);
      }),
      gt = o(() => {
        $_$();
        var e;
        return ((e = t(Re)) != null ? e : []).map((a) => $_$() && t(te)[a]);
      }),
      yt = o(() => $_$() && W(t(St), t(gt))),
      Tt = o(
        () =>
          $_$() &&
          W(
            t(B).filter((e) => e.type === k.MANAGER),
            t(x).filter((e) => e.type === k.MANAGER)
          )
      ),
      It = o(
        () =>
          $_$() &&
          W(
            t(B).filter((e) => e.type === k.FIRST_LINE),
            t(x).filter((e) => e.type === k.FIRST_LINE)
          )
      ),
      vt = o(
        () =>
          $_$() &&
          W(
            t(B).filter((e) => e.type === k.SECOND_LINE),
            t(x).filter((e) => e.type === k.SECOND_LINE)
          )
      ),
      bt = o(
        () =>
          $_$() &&
          W(
            t(B).filter((e) => e.type === k.THIRD_LINE),
            t(x).filter((e) => e.type === k.THIRD_LINE)
          )
      ),
      ft = o(
        () =>
          $_$() &&
          W(
            t(B).filter((e) => e.type === k.FOURTH_LINE),
            t(x).filter((e) => e.type === k.FOURTH_LINE)
          )
      ),
      Gt = o(
        () =>
          $_$() &&
          W(
            t(B).filter((e) => e.type === k.FIFTH_LINE),
            t(x).filter((e) => e.type === k.FIFTH_LINE)
          )
      ),
      kt = o(
        () =>
          $_$() &&
          W(
            t(B).filter((e) => e.type === k.SUBSTITUTION),
            t(x).filter((e) => e.type === k.SUBSTITUTION)
          )
      ),
      Mt = o(
        () =>
          $_$() &&
          W(
            t(B).filter((e) => e.type === k.STARTING_LINEUPS),
            t(x).filter((e) => e.type === k.STARTING_LINEUPS)
          )
      ),
      Fa = o(
        () =>
          $_$() &&
          [
            new H({
              label: T("game_scoreboard_info_starting_lineups"),
              playerPairs: t(Mt),
            }),
            new H({
              label: T("game_scoreboard_lineups_substitutions"),
              playerPairs: t(kt),
            }),
            new H({
              label: T("game_scoreboard_lineups_managers"),
              playerPairs: t(Tt),
            }),
            new H({
              label: T("game_scoreboard_lineups_line", { lineNumber: 1 }),
              playerPairs: t(It),
            }),
            new H({
              label: T("game_scoreboard_lineups_line", { lineNumber: 2 }),
              playerPairs: t(vt),
            }),
            new H({
              label: T("game_scoreboard_lineups_line", { lineNumber: 3 }),
              playerPairs: t(bt),
            }),
            new H({
              label: T("game_scoreboard_lineups_line", { lineNumber: 4 }),
              playerPairs: t(ft),
            }),
            new H({
              label: T("game_scoreboard_lineups_line", { lineNumber: 5 }),
              playerPairs: t(Gt),
            }),
            new H({
              label: T("game_scoreboard_absent_players_label"),
              playerPairs: t(yt),
            }),
          ].filter((e) => e.playerPairs.length > 0)
      ),
      Pt = o(() => $_$() && Us({ timelineEvents: t(Ae), currentGame: t(c) })),
      Be = o(() => {
        $_$();
        const e = t(Pt).filter((r) => r.code === 200);
        return e.every((r) => !!r.playerName) ? e : [];
      }),
      Et = o(() => $_$() && La(t(Be), 1)),
      ht = o(() => $_$() && La(t(Be), 2)),
      Ct = o(() => $_$() && Os({ currentGame: t(c), sectionType: t(R) })),
      xe = o(() => $_$() && t(c).matchInfo.stadium),
      Ba = o(() => {
        $_$();
        var e, a;
        return (a =
          (e = t(c).statistics.penaltyStatistics) == null
            ? void 0
            : e.firstTeamSeries) != null
          ? a
          : [];
      }),
      xa = o(() => {
        $_$();
        var e, a;
        return (a =
          (e = t(c).statistics.penaltyStatistics) == null
            ? void 0
            : e.secondTeamSeries) != null
          ? a
          : [];
      }),
      Va = o(() => {
        $_$();
        var e;
        return (e = t(c).statistics) == null
          ? void 0
          : e.firstTeamFoulStatistics;
      }),
      Ka = o(() => {
        $_$();
        var e;
        return (e = t(c).statistics) == null
          ? void 0
          : e.secondTeamFoulStatistics;
      }),
      Wa = o(() => $_$() && Fs({ currentGame: t(c), standingsGroups: t(ae) })),
      Ha = o(() => $_$() && Bs({ currentGame: t(c) })),
      wt = o(() => $_$() && !!t(c).hasTimeline),
      Qa = o(() => {
        const { mediaEntities: e = [] } = v != null ? v : {};
        return (
          e
            .filter(({ gameId: a }) => $_$() && t(c).id === a)
            .filter(({ target: a }) => a === Is.FULLSCREEN).length === 0
        );
      }),
      qa = o(() => {
        $_$();
        var e;
        return !!(
          (e = t(c).cyberGameScores) != null && e.fightingPeriodsScores
        );
      }),
      Ve = o(() => {
        $_$();
        const { weatherData: e } = t(c);
        return !vs(e);
      }),
      ja = o(() => $_$() && !!(t(Ve) || t(Ct) || t(xe))),
      Ya = o(() => $_$() && !!(t(Ve) || t(xe) || t(c).champName)),
      $a = o(() => {
        $_$();
        var e, a, r, s;
        return [
          Object.keys(t(c).summary).length > 0,
          !!(
            (a =
              (e = t(c).statistics.cricket) == null
                ? void 0
                : e.inningsStatistic) != null && a.length
          ),
          !!(
            (s =
              (r = t(c).statistics.alpineSkiingCyber) == null
                ? void 0
                : r.table) != null && s.length
          ),
        ].some((i) => !!i);
      }),
      za = o(() => $_$() && !!t(c).hasLineups && t(R) === ce.LIVE),
      At = o(() => {
        $_$();
        const e = t(c).statisticStageType === 2;
        return !!t(c).stageId && e;
      }),
      Xa = o(
        () =>
          $_$() && t(c).sportId === 1 && (t(Et).length > 0 || t(ht).length > 0)
      ),
      Za = o(() => {
        $_$();
        var e, a;
        return (
          ((a =
            (e = t(c).cyberGameScores) == null
              ? void 0
              : e.fightingPeriodsScores) == null
            ? void 0
            : a.length) > 0
        );
      }),
      Ja = o(() => $_$() && t(c).periodScores.length > 0),
      er = o(() => {
        $_$();
        const { isDummy: e, sportId: a } = t(c),
          r = bs(t(c));
        return !e && !r && !fs.includes(a);
      }),
      Lt = o(() => $_$() && t(wt) && Gs.includes(t(c).sportId)),
      tr = o(() => ($_$() && !!t(c).hasLineups) || t(Lt) || t(At)),
      ar = o(() => {
        $_$();
        const { sportId: e } = t(c);
        return ks.includes(e);
      }),
      rr = o(() => $_$() && Ms.includes(t(c).sportId)),
      sr = o(() => $_$() && !t(ee) && t(Oe)),
      or = o(() => $_$() && t(c).typeId === et),
      nr = o(() => $_$() && t(C).map((e) => e.id)),
      ir = o(() => $_$() && t(w).map((e) => e.id)),
      Nt = (e) => {
        Re.value = e;
      },
      Dt = (e) => {
        Ne.value = e;
      },
      lr = (e) => {
        _e.value = e;
      },
      cr = (e) => {
        at.value = e;
      },
      ur = (e) => {
        ye.value = e;
      },
      Ke = (e) => {
        te.value = e;
      },
      dr = (e) => {
        tt.value = e;
      },
      Rt = (e) => {
        ae.value = e;
      },
      mr = (e) => {
        nt.value = e;
      },
      pr = (e) => {
        Oe.value = e;
      },
      _r = (e) => {
        it.value = e;
      },
      Ut = (e) => {
        De.value = e;
      },
      Ot = (e) => {
        Le.value = e;
      },
      Sr = () => {
        (C.value = []), (w.value = []);
      },
      gr = (e) => {
        R.value = e;
      },
      Ft = (e) => {
        ee.value = e;
      },
      me = (e) => {
        re.value = e;
      },
      Bt = (e) => {
        G.value = e;
      },
      xt = (e) => {
        st.value = e;
      },
      Vt = (e) => {
        lt.value = e;
      },
      be = (e) => {
        Ue.value = e;
      },
      X = (e) => {
        P.value = e;
      },
      oe = (e) => {
        S.value = e;
      },
      We = (e) => {
        z.value = e;
      },
      V = async ({ marketGroups: e = t(P) } = {}) => {
        $_$();
        const a = Ls();
        try {
          const r = a.createLayout(e, {
            columnsCount: t($),
            groupingPaths: t(pt),
            collapseAllMarketGroups: t(z),
            collapseByMarketsCount: b.getMarketDisplaySettings === 1,
            collapseMarketsCountLimit: xs,
            expandedMarketGroupIdsByUser: t(q),
            collapsedMarketGroupIdsByUser: t(Q),
            collapsedGridGroupNames: t(Se),
            pinnedMarketGroupForeignIds: t(F),
          });
          me(r);
        } catch (r) {
          m.error("gameUpdateMarketGridLayout error", r);
        }
      },
      Kt = async () => {
        $_$();
        let e, a;
        const r =
          (([e, a] = l(() => $_$() && Ce(p, t(Fe), wa))),
          (e = await e),
          a(),
          e);
        We(r);
      },
      He = (e) => {
        $_$();
        Q.value = Pe(e);
      },
      Wt = async () => {
        $_$();
        let e, a;
        const r =
          (([e, a] = l(() => $_$() && Ce(p, t(Ie), []))),
          (e = await e),
          a(),
          e);
        He(r);
      },
      Qe = (e) => {
        $_$();
        q.value = Pe(e);
      },
      Ht = async () => {
        $_$();
        let e, a;
        const r =
          (([e, a] = l(() => $_$() && Ce(p, t(ve), []))),
          (e = await e),
          a(),
          e);
        Qe(r);
      },
      qe = (e) => {
        F.value = e;
      },
      Qt = async (e) => {
        $_$();
        let a, r;
        if (!e) return qe([]);
        const s = Ee.GAME_PINNED_MARKET_GROUP_FOREIGN_IDS,
          n = (([a, r] = l(() => Ce(p, s, []))), (a = await a), r(), a);
        qe(n);
      },
      qt = async (e) => {
        $_$();
        let a, r;
        ([a, r] = l(() => Kt())),
          await a,
          r(),
          ([a, r] = l(() => Wt())),
          await a,
          r(),
          ([a, r] = l(() => Ht())),
          await a,
          r(),
          ([a, r] = l(() => Qt(e))),
          await a,
          r();
      },
      jt = (e) => {
        j.value = e;
      },
      je = (e, a) => {
        $_$();
        const r = t(j),
          s = t(P),
          i = Aa(e, { language: a }).toLowerCase(),
          u = r.toLowerCase(),
          g = i.startsWith(u) ? s : t(S),
          M = i
            ? g
                .map((D) => {
                  const J = D.marketColumns
                    .map((K) => K.filter((A) => Ns(A, i)))
                    .filter((K) => K.length);
                  return new Ds({ ...D, marketColumns: J });
                })
                .filter((D) => D.marketColumns.length)
            : t(S);
        jt(e), X(M);
      },
      Yt = async () => {
        $_$();
        let e, a;
        be({}), X([]), oe([]), ([e, a] = l(() => V())), await e, a();
      },
      $t = async ({
        language: e,
        gameId: a,
        team1Ids: r,
        team2Ids: s,
        coefView: n,
        userId: i,
        optionForParser: u,
      }) => {
        $_$();
        var y, g, M, D, J, K;
        let A, Y;
        if (!r.length && !s.length) {
          ([A, Y] = l(() => Yt())), await A, Y();
          return;
        }
        const ne =
          (([A, Y] = l(
            () =>
              $_$() &&
              _.buildDuel({
                game: t(c),
                language: e,
                gameId: a,
                team1Ids: r,
                team2Ids: s,
                coefView: n,
                userId: i,
                optionForParser: u,
              })
          )),
          (A = await A),
          Y(),
          A);
        return (
          be(
            (g = (y = ne.duel) == null ? void 0 : y.marketsCountByTypeDuel) !=
              null
              ? g
              : {}
          ),
          oe(
            (D = (M = ne.duel) == null ? void 0 : M.marketGroups) != null
              ? D
              : []
          ),
          X(
            (K = (J = ne.duel) == null ? void 0 : J.marketGroups) != null
              ? K
              : []
          ),
          j && je(t(j), e),
          ([A, Y] = l(() => V())),
          await A,
          Y(),
          ne
        );
      },
      zt = async ({
        lng: e,
        marketsNameType: a,
        coefViewId: r,
        userId: s,
        betsModelsManager: n,
      }) => {
        $_$();
        let i, u;
        const y = { betsModelsManager: n, language: e, marketsNameType: a };
        ([i, u] = l(
          () =>
            $_$() &&
            $t({
              language: e,
              gameId: String(t(c).id),
              team1Ids: t(C).map((g) => g.id),
              team2Ids: t(w).map((g) => g.id),
              coefView: r,
              userId: s,
              optionForParser: y,
            })
        )),
          await i,
          u();
      },
      Xt = (e) => {
        ge.value = e;
      },
      Zt = (e) => {
        O.value = e;
      },
      Jt = (e) => {
        h.value = e;
      },
      ea = (e) => {
        N.value = e;
      },
      yr = (e) => {
        ct.value = e;
      },
      Tr = o(() => $_$() && t(R)),
      Ir = o(() => $_$() && t(ge)),
      vr = o(() => $_$() && t(N)),
      ta = o(() => $_$() && t(h)),
      br = o(() => $_$() && t(S)),
      fe = async ({
        currentUrl: e = "",
        sectionType: a = t(Tr),
        gameId: r = t(O),
        marketType: s = t(Ir),
        fetchMarkets: n = !0,
        skipUrlValidation: i = !0,
        skipRestoreUiState: u = !1,
        bettingView: y,
        marketsNameType: g,
        lng: M,
        timeZone: D,
        coefViewId: J,
        userId: K,
        isUserAuth: A,
        isCoeffCutLine: Y,
        isCoeffCutLive: ne,
        refId: Kr,
        geoCountryId: Wr,
        logger: Ma,
        betsModelsManager: Hr,
      } = {}) => {
        $_$();
        var Pa, Ea, ha;
        let L, U;
        if (r === Ca) return;
        const Qr = Rs({ bettingType: t(a), bettingView: t(y) });
        let ie;
        try {
          const Ge = t(g) === ls.short ? 4 : 0,
            qr = (t(Y) && t(a) === ce.LINE) || (t(ne) && t(a) === ce.LIVE);
          if (
            ((ie =
              (([L, U] = l(
                () =>
                  $_$() &&
                  _.loadGame(
                    Qr,
                    {
                      gameId: r,
                      lng: t(M),
                      timeZone: t(D),
                      coefViewId: t(J),
                      userId: qr ? t(K) : void 0,
                      eventsCount: n ? t(de) : 1,
                      topGroups: t(F).join(","),
                      marketType: t(s),
                      groupEvents: !0,
                      isSubGames: !0,
                      groupMode: Ge,
                      partner: Kr,
                      country: Wr,
                      isNewBuilder: !0,
                    },
                    { marketsNameType: t(g) }
                  )
              )),
              (L = await L),
              U(),
              L)),
            ie.status !== le.STATUS_SUCCESS)
          ) {
            ie.status !== le.STATUS_CLOSE &&
              Ma.error("use game gameUpdate status", {
                gameId: r,
                status: ie.status,
              });
            return;
          }
          const {
              currentGameId: ke = r,
              gameIds: jr = t(vr),
              marketGroups: Xe = t(br),
              unparsedMarketGroupsByGameId: Ws,
              gamesById: Me = { ...t(ta), [r]: t(ta)[t(ke)] },
            } = ie.data,
            Yr =
              !Object.keys(ie.data).length ||
              !Me[ke] ||
              !!((Pa = Me[ke]) != null && Pa.isGameOver),
            $r = ((Ea = t(c)) == null ? void 0 : Ea.typeId) === et;
          Xt(s),
            Zt(ke),
            Jt(Me),
            ea(jr),
            $r
              ? (([L, U] = l(
                  () =>
                    $_$() &&
                    zt({
                      lng: t(M),
                      marketsNameType: t(g),
                      coefViewId: t(J),
                      userId: t(K),
                      betsModelsManager: Hr,
                    })
                )),
                await L,
                U())
              : (be({}), X([]), oe([])),
            Xe.length && (oe(Xe), X(Xe)),
            xt(Yr),
            Vt((ha = Me[r]) == null ? void 0 : ha.menuSections[0]),
            t(j) && je(t(j), t(M)),
            u || (([L, U] = l(() => $_$() && qt(t(A)))), await L, U()),
            ([L, U] = l(() => V())),
            await L,
            U(),
            Ft(!1);
        } catch (Ge) {
          Ma.error("gameUpdate", e, a, r, s, n, i, u, Ge),
            ([L, U] = l(() => Promise.reject(Ge))),
            await L,
            U();
        }
      },
      Ye = (e) => {
        de.value = e;
      },
      fr = async ({ sectionT: e, gameUpdateDependencies: a } = {}) => {
        $_$();
        let r, s;
        t(_t) ||
          (Ye(t(Te)),
          ([r, s] = l(() => fe({ sectionType: e, ...a }))),
          await r,
          s());
      },
      Z = async ({ key: e, value: a, options: r }) => {
        $_$();
        let s, n;
        try {
          ([s, n] = l(() => $_$() && p.setItem(e, ns(a), r))), await s, n();
        } catch (i) {
          m.error(
            "GameApp, gamePersistValueInAppStorage",
            `error while saving value in app storage: ${i}`
          );
        }
      },
      aa = async (e) => {
        $_$();
        let a, r;
        He(e),
          ([a, r] = l(
            () =>
              $_$() &&
              Z({ key: t(Ie), value: e, options: { expireDate: t(se) } })
          )),
          await a,
          r();
      },
      ra = async (e) => {
        $_$();
        let a, r;
        Qe(e),
          ([a, r] = l(
            () =>
              $_$() &&
              Z({ key: t(ve), value: e, options: { expireDate: t(se) } })
          )),
          await a,
          r();
      },
      pe = async (e) => {
        $_$();
        let a, r;
        We(e),
          ([a, r] = l(
            () =>
              $_$() &&
              Z({ key: t(Fe), value: e, options: { expireDate: t(se) } })
          )),
          await a,
          r();
      },
      sa = async () => {
        $_$();
        let e, a;
        const r = !t(z);
        ([e, a] = l(() => aa([]))),
          await e,
          a(),
          ([e, a] = l(() => ra([]))),
          await e,
          a(),
          me([]),
          ([e, a] = l(() => pe(r))),
          await e,
          a(),
          ([e, a] = l(() => V())),
          await e,
          a();
      },
      Gr = () => {
        $_$();
        const e = is(t(de) + he, he, t(Te));
        Ye(e);
      },
      oa = () => {
        de.value = he;
      },
      kr = async ({
        gameId: e,
        sectionType: a,
        marketType: r = As.ALL,
        gameUpdateDependencies: s,
      } = {}) => {
        $_$();
        let n, i;
        oa(),
          ([n, i] = l(() =>
            fe({ gameId: e, sectionType: a, marketType: r, ...s })
          )),
          await n,
          i();
      },
      $e = (e) => {
        we.value = e;
      },
      na = ({ subscribedEvents: e = [] } = {}) => {
        $_$();
        const a = (r = [], s = []) => {
          r.forEach((n) => {
            const i = s.find(({ id: u }) => u === n.id);
            i && ((i.isDisabled = !1), a(n.events, i.events));
          });
        };
        a(e, t(we));
      },
      ia = async ({ sectionType: e, gameId: a, userId: r }) => {
        $_$();
        let s,
          n,
          i = [];
        try {
          i =
            (([s, n] = l(() =>
              _.getActiveGameEventSubscriptions(e, { gameId: a, userId: r })
            )),
            (s = await s),
            n(),
            s);
        } catch (u) {
          m.error("gameLoadActiveEventSubscriptions action", u);
        }
        na({ subscribedEvents: i });
      },
      Mr = async ({ sectionType: e, gameId: a }) => {
        $_$();
        let r, s;
        const n = b.isUserAuth,
          i = b.getLanguage,
          { data: u, status: y } =
            (([r, s] = l(() =>
              _.getGameEventsToSubscribe(e, { gameId: a, lng: i })
            )),
            (r = await r),
            s(),
            r);
        y === le.STATUS_SUCCESS &&
          ($e(u),
          n &&
            (([r, s] = l(() =>
              ia({ gameId: a, sectionType: e, userId: b.getUserId })
            )),
            await r,
            s()));
      },
      Pr = async ({ events: e, gameId: a, sectionType: r }) => {
        $_$();
        let s, n;
        const i = ws(e);
        let u = { success: !1, msg: T("main_query_error") };
        try {
          u =
            (([s, n] = l(() =>
              _.saveGameEventSubscriptions({
                events: i,
                gameId: a,
                sectionType: r,
              })
            )),
            (s = await s),
            n(),
            s);
        } catch (y) {
          m.error("gameSaveEventSubscriptions action", y);
        }
        if (!u.success) {
          ([s, n] = l(() => E(u.msg))), await s, n();
          return;
        }
        $e(e),
          ([s, n] = l(() => f(u.msg || T("main_save_success")))),
          await s,
          n();
      },
      Er = async (e) => {
        $_$();
        let a, r;
        try {
          switch (e) {
            case 2:
              t(z) || (([a, r] = l(() => pe(!0))), await a, r());
              break;
            default:
              t(z) && (([a, r] = l(() => pe(!1))), await a, r());
              break;
          }
          ([a, r] = l(() => V())), await a, r();
        } catch (s) {
          m.error("gameUpdateMarketDisplay action", s);
        }
      },
      ze = (e) => {
        $.value = e;
      },
      hr = async ({ columnsCount: e = t($), skipStorage: a = !1 } = {}) => {
        $_$();
        let r, s;
        const n = Math.min(t(ye), e);
        if (t($) !== n && (ze(n), ([r, s] = l(() => V())), await r, s(), !a))
          try {
            ([r, s] = l(() => $_$() && p.setItem(Ee.MARKET_COLUMNS_COUNT, n))),
              await r,
              s();
          } catch (i) {
            m.error(
              "gameSetMarketGridColumnsCount action",
              "error while saving market columns count to app storage",
              i
            );
          }
      },
      Cr = async () => {
        $_$();
        var e;
        let a,
          r,
          s = Je;
        try {
          s =
            (e =
              (([a, r] = l(() => $_$() && p.getItem(Ee.MARKET_COLUMNS_COUNT))),
              (a = await a),
              r(),
              a)) != null
              ? e
              : Je;
        } catch (n) {
          m.error(
            "gameRestoreMarketGridColumnsCount action",
            "error while obtaining market columns count from app storage"
          );
        }
        ze(s);
      },
      la = ({ events: e } = { events: [] }) => {
        Ae.value = e;
      },
      wr = async () => {
        $_$();
        let e, a;
        try {
          const { data: r, status: s } =
            (([e, a] = l(
              () => $_$() && _.getTimelineData({ gameId: t(O), language: I })
            )),
            (e = await e),
            a(),
            e);
          if (s !== le.STATUS_SUCCESS) throw new Error("server side error");
          la({ events: r });
        } catch (r) {
          m.error(`Error while loading game timeline data, ${r}`);
        }
      },
      Ar = async () => {
        $_$();
        let e, a;
        ([e, a] = l(() => pe(!1))), await e, a();
      },
      Lr = async (e) => {
        $_$();
        let a, r;
        const s = hs();
        if (t(G)) {
          const n = new Cs(s, I, { marketsNameType: e }),
            u = (([a, r] = l(
              () =>
                $_$() &&
                Promise.all(
                  Object.entries(t(G)).map(
                    ([y, g]) => $_$() && n.parseMarketGroups(t(h)[y], g)
                  )
                )
            )),
            (a = await a),
            r(),
            a).flat();
          oe(u), X(u), ([a, r] = l(() => V())), await a, r(), Bt(void 0);
        }
      },
      ca = (e) => {
        $_$();
        const a = new Set(t(F));
        a.delete(e), (F.value = [...a]);
      },
      ua = (e) => {
        $_$();
        const a = new Set([...t(F), e].filter(ue));
        F.value = [...a];
      },
      Nr = async (e, a) => {
        $_$();
        var r, s;
        let n, i;
        !e.isPinned
          ? (ua((r = e.data) == null ? void 0 : r.foreignId),
            ([n, i] = l(() => V())),
            await n,
            i())
          : (ca((s = e.data) == null ? void 0 : s.foreignId),
            ([n, i] = l(() => fe({ skipRestoreUiState: !0, ...a }))),
            await n,
            i()),
          ([n, i] = l(
            () =>
              $_$() &&
              Z({ key: Ee.GAME_PINNED_MARKET_GROUP_FOREIGN_IDS, value: t(F) })
          )),
          await n,
          i();
      },
      Dr = async () => {
        $_$();
        let e,
          a,
          r = {};
        try {
          r =
            (([e, a] = l(
              () =>
                $_$() &&
                _.getLineups({
                  statisticGameId: t(c).statisticGameId,
                  language: I,
                })
            )),
            (e = await e),
            a(),
            e);
        } catch (s) {
          m.error("gameEnsureLineupsAreLoaded action", s);
        }
        Ke(r.playerByIds),
          Ke(r.playerByIds),
          Ut(r.awayTeamActivePlayerIds),
          Ot(r.homeTeamActivePlayerIds),
          Nt(r.awayTeamAbsentPlayerIds),
          Dt(r.homeTeamAbsentPlayerIds);
      },
      Rr = async () => {
        $_$();
        const e = (u, y) =>
            u.some((g) => {
              var M;
              return (
                ((M = g.team.name) == null ? void 0 : M.localeCompare(y)) === 0
              );
            }),
          {
            sportId: a,
            stageId: r,
            firstOpponentName: s,
            secondOpponentName: n,
          } = t(c);
        let i = t(ae).some((u) => e(u, s) && e(u, n));
        if (!i) {
          const u = t(ae).some((g) => e(g, s)),
            y = t(ae).some((g) => e(g, n));
          i = u && y;
        }
        if (!i)
          return _.getStandingsData({ stageId: r, sportId: a, language: I })
            .catch(
              (u) => (
                m.error("gameEnsureStandingsDataIsLoaded action", u), [[]]
              )
            )
            .then((u) => Rt(u));
      },
      da = (e) => {
        rt.value = e;
      },
      Ur = async ({ gameStatsData: e }) => {
        $_$();
        let a, r;
        const s = Es(),
          { gameId: n, sportId: i, permanentId: u } = e,
          { statisticGameId: y } =
            (([a, r] = l(() =>
              _.checkIfFinishedGameStatsExist({ sportId: i, gameId: n })
            )),
            (a = await a),
            r(),
            a);
        if (ue(y))
          try {
            const g = s.getStatisticGameUrl({
              gameId: n,
              permanentId: u,
              statisticGameId: y,
              sportId: i,
            });
            return da(g), g;
          } catch (g) {
            m.error("gameLoadFinishedGameStatsData", g);
            return;
          }
      },
      ma = async (e) => {
        $_$();
        const a = t(re).map((r) =>
          r.groups.some((s) => s.id === e.id) ? Na.rebuildGroup(r, e.id, e) : r
        );
        me(a);
      },
      pa = (e) => {
        $_$();
        q.value = Pe([...t(q), e].filter(ue));
      },
      _a = (e) => {
        $_$();
        const a = new Set(t(q));
        a.delete(e), (q.value = [...a]);
      },
      Sa = (e) => {
        $_$();
        Q.value = Pe([...t(Q), e].filter(ue));
      },
      ga = (e) => {
        $_$();
        const a = new Set(t(Q));
        a.delete(e), (Q.value = [...a]);
      },
      Or = async (e) => {
        $_$();
        var a, r, s;
        let n, i;
        const u = !e.isCollapsed;
        ([n, i] = l(() => ma({ id: e.id, isCollapsed: u }))),
          await n,
          i(),
          u ? (_a(e.id), Sa(e.id)) : (pa(e.id), ga(e.id)),
          ([n, i] = l(
            () =>
              $_$() &&
              Promise.all([
                Z({ key: t(Ie), value: t(Q), options: { expireDate: t(se) } }),
                Z({ key: t(ve), value: t(q), options: { expireDate: t(se) } }),
              ])
          )),
          await n,
          i();
        const y =
          (s =
            (r =
              (a = t(re).find((M) => M.groups.length)) == null
                ? void 0
                : a.groups[0]) == null
              ? void 0
              : r.isCollapsed) != null
            ? s
            : !1;
        !t(re).some((M) => M.groups.some((D) => y !== D.isCollapsed)) &&
          y !== t(z) &&
          (([n, i] = l(() => sa())), await n, i());
      },
      ya = (e) => {
        Se.value = e;
      },
      Fr = (e) => {
        $_$();
        const a = Ps(t(Se), e.categoryName),
          r = t(re).map((s) =>
            s.id === e.id ? Na.rebuild(s, { isCollapsed: !s.isCollapsed }) : s
          );
        ya(a), me(r);
      },
      Ta = (e) => {
        ot.value = e;
      },
      Br = async ({ sectionType: e, language: a, gameId: r }) => {
        $_$();
        let s, n;
        const { data: i, status: u } =
          (([s, n] = l(() =>
            _.getAvailablePlayersForDuel({
              sectionType: e,
              language: a,
              gameId: r,
            })
          )),
          (s = await s),
          n(),
          s);
        u === le.STATUS_SUCCESS
          ? Ta(i)
          : u !== le.STATUS_CLOSE &&
            m.error("get available players for duel request fail");
      },
      Ia = (e) => {
        $_$();
        C.value = [...t(C), e];
      },
      va = (e) => {
        $_$();
        w.value = [...t(w), e];
      },
      ba = (e) => {
        $_$();
        C.value = t(C).filter((a) => a.id !== e.id);
      },
      fa = (e) => {
        $_$();
        w.value = t(w).filter((a) => a.id !== e.id);
      },
      xr = (e) => {
        $_$();
        t(C).find((r) => r.id === e.id) ? ba(e) : Ia(e);
      },
      Vr = (e) => {
        $_$();
        t(w).find((r) => r.id === e.id) ? fa(e) : va(e);
      },
      Ga = ({ selectedPlayerIndex: e, newPlayer: a }) => {
        $_$();
        C.value = t(C).map((r, s) => (s === e ? a : r));
      },
      ka = ({ selectedPlayerIndex: e, newPlayer: a }) => {
        $_$();
        w.value = t(w).map((r, s) => (s === e ? a : r));
      };
    return {
      sectionType: R,
      currentGameId: O,
      gamesById: h,
      marketGroups: S,
      unparsedMarketGroupsByGameId: G,
      filteredMarketGroups: P,
      gameIds: N,
      isLoadingInProgress: ee,
      isScoreboardLoadingInProgress: _e,
      marketGridColumnsCount: $,
      collapsedMarketGroupIdsByUser: Q,
      expandedMarketGroupIdsByUser: q,
      collapsedGridGroupNames: Se,
      pinnedMarketGroupForeignIds: F,
      marketsPerPage: de,
      marketType: ge,
      filterQuery: j,
      areAllMarketGroupsCollapsed: z,
      gameEventsToSubscribe: we,
      isScoreboardCompactView: tt,
      isMarketsPanelCompactView: at,
      timelineEvents: Ae,
      maxMarketGridColumnsCount: ye,
      homeTeamActivePlayerIds: Le,
      homeTeamAbsentPlayerIds: Ne,
      awayTeamActivePlayerIds: De,
      awayTeamAbsentPlayerIds: Re,
      playersByIds: te,
      statisticUrl: rt,
      standingsGroups: ae,
      isGameOver: st,
      marketGridCategories: re,
      playerListForDuel: ot,
      marketsCountByTypeDuel: Ue,
      isMarketGridStoredColumnsCountLoaded: Oe,
      marketGridWrapperWidth: nt,
      scoreboardSize: it,
      selectedDuelPlayersTeamFirst: C,
      selectedDuelPlayersTeamSecond: w,
      menuSections: lt,
      gameFromRoute: ct,
      marketsCountByType: Ra,
      totalMarketsCount: Te,
      currentGame: c,
      currentMainGame: dt,
      games: ut,
      markets: mt,
      gridGroupingPaths: pt,
      getFilterQuery: Ua,
      areAllMarketsLoaded: _t,
      shouldShowMarketsSettings: Oa,
      allMarketGroupsCollapsedStorageKey: Fe,
      collapsedMarketGroupsStorageKey: Ie,
      expandedMarketGroupsStorageKey: ve,
      gameStorageValueExpireDate: se,
      homeTeamActivePlayers: B,
      homeTeamAbsentPlayers: St,
      awayTeamActivePlayers: x,
      awayTeamAbsentPlayers: gt,
      lineupsAbsentPlayers: yt,
      lineupsManagers: Tt,
      lineupsFirstLinePlayers: It,
      lineupsSecondLinePlayers: vt,
      lineupsThirdLinePlayers: bt,
      lineupsFourthLinePlayers: ft,
      lineupsFifthLinePlayers: Gt,
      lineupsSubstitutions: kt,
      lineupsStartingLineupPlayers: Mt,
      lineupsPlayerGroups: Fa,
      timelineEventViewModels: Pt,
      timelineGoalsWithPlayerNames: Be,
      firstTeamGoalsWithPlayerNames: Et,
      secondTeamGoalsWithPlayerNames: ht,
      scoreboardMatchInfoLabel: Ct,
      scoreboardStadiumName: xe,
      firstTeamPenaltiesSeries: Ba,
      secondTeamPenaltiesSeries: xa,
      firstTeamFoulStatistics: Va,
      secondTeamFoulStatistics: Ka,
      standingsGroup: Wa,
      mainScoreLabels: Ha,
      hasTimeline: wt,
      shouldShowScoreboard: Qa,
      shouldShowScoreboardCyberGameScores: qa,
      shouldShowScoreboardInfoTab: Ya,
      shouldShowScoreboardWeather: Ve,
      shouldShowScoreboardHeader: ja,
      shouldShowScoreboardStatistics: $a,
      shouldShowScoreboardLineups: za,
      shouldShowScoreboardStandings: At,
      shouldShowScoreboardGoalsTab: Xa,
      shouldShowScoreboardCyberPeriods: Za,
      shouldShowScoreboardPeriods: Ja,
      shouldShowScoreboardScores: er,
      shouldShowScoreboardTimeline: Lt,
      shouldShowScoreboardFooter: tr,
      shouldShowFinalScoreInPeriods: ar,
      isWideScreenScoreboard: rr,
      isMarketGridReady: sr,
      isDuelGame: or,
      getSelectedDuelPlayersIdTeamFirst: nr,
      getSelectedDuelPlayersIdTeamSecond: ir,
      gameUpdate: fe,
      gameLoadAllMarkets: fr,
      gameFilterMarketsByText: je,
      gameUpdateMarketGridLayout: V,
      gameToggleAllMarketGroupsCollapsedState: sa,
      gameIncreaseMarketsPerPageCount: Gr,
      gameRequestMarketsByMarketType: kr,
      gameLoadEventsToSubscribe: Mr,
      gameLoadActiveEventSubscriptions: ia,
      gameSaveEventSubscriptions: Pr,
      gameUpdateMarketDisplay: Er,
      gamePersistMarketGridColumnsCount: hr,
      gameRestoreMarketGridColumnsCount: Cr,
      gameUpdateTimelineEvents: wr,
      gameRestoreUIState: qt,
      gameRestoreAllMarketGroupsCollapsedState: Kt,
      gameRestoreCollapsedMarketGroupIds: Wt,
      gameRestoreExpandedMarketGroupIds: Ht,
      gameRestorePinnedMarketGroupForeignIds: Qt,
      gameClearUIState: Ar,
      gameParseUnparsedMarketGroups: Lr,
      gamePersistAllMarketGroupsCollapsedState: pe,
      gamePersistCollapsedMarketGroupIds: aa,
      gamePersistExpandedMarketGroupIds: ra,
      gameToggleMarketGroupPinnedState: Nr,
      gameEnsureLineupsAreLoaded: Dr,
      gameEnsureStandingsDataIsLoaded: Rr,
      gameLoadFinishedGameStatsData: Ur,
      gamePersistValueInAppStorage: Z,
      gameToggleMarketGroupCollapsedState: Or,
      gameRebuildMarketGridGroup: ma,
      gameToggleCategoryCollapsedState: Fr,
      loadGameAvailablePlayersForDuel: Br,
      gameBuildDuel: $t,
      gameResetDuel: Yt,
      gameUpdateDuel: zt,
      gameSelectDuelPlayerFirstTeam: xr,
      gameSelectDuelPlayerSecondTeam: Vr,
      gameReplaceDuelPlayerFirstTeam: ({ selectedPlayer: e, newPlayer: a }) => {
        $_$();
        const r = t(C).findIndex((s) => s.id === e.id);
        Ga({ selectedPlayerIndex: r, newPlayer: a });
      },
      gameReplaceDuelPlayerSecondTeam: ({
        selectedPlayer: e,
        newPlayer: a,
      }) => {
        $_$();
        const r = t(w).findIndex((s) => s.id === e.id);
        ka({ selectedPlayerIndex: r, newPlayer: a });
      },
      gameDeletePinnedMarketGroupForeignId: ca,
      gameSetPinnedMarketGroupForeignId: ua,
      gameUpdateSubscribedEvents: na,
      gameSetAreAllMarketGroupsCollapsed: We,
      gameSetAwayTeamAbsentPlayerIds: Nt,
      gameSetCollapsedGridGroupNames: ya,
      gameSetCurrentGameId: Zt,
      gameSetFilterQuery: jt,
      gameSetFilteredMarketGroups: X,
      gameSetGameEventsToSubscribe: $e,
      gameSetGameIds: ea,
      gameSetGamesById: Jt,
      gameSetHomeTeamAbsentPlayerIds: Dt,
      gameSetIsGameOverFlag: xt,
      gameSetIsLoadingInProgress: Ft,
      gameSetIsScoreboardLoadingInProgress: lr,
      gameSetMarketGridCategories: me,
      gameSetMarketGridColumnsCount: ze,
      gameSetMarketGroups: oe,
      gameSetUnparsedMarketGroupsByGameId: Bt,
      gameSetMarketType: Xt,
      gameSetMarketsPanelCompactViewFlag: cr,
      gameSetMarketsPerPageCount: Ye,
      gameSetMaxMarketGridColumnsCount: ur,
      gameSetPinnedMarketGroupForeignIds: qe,
      gameSetPlayersByIds: Ke,
      gameSetScoreboardCompactViewFlag: dr,
      gameSetStandingsGroups: Rt,
      gameSetStatisticUrl: da,
      gameSetMarketGridWrapperWidth: mr,
      gameSetIsMarketGridStoredColumnsCountLoaded: pr,
      gameSetScoreboardSize: _r,
      gameSetDuelTeams: Ta,
      gameSetMarketsCountByTypeDuel: be,
      gameSetMenuSection: Vt,
      gameSetSectionType: gr,
      gameSetGameFromRoute: yr,
      gameSetCollapsedMarketGroupIdByUser: Sa,
      gameSetCollapsedMarketGroupIds: He,
      gameDeleteCollapsedMarketGroupIdByUser: ga,
      gameSetExpandedMarketGroupIdByUser: pa,
      gameSetExpandedMarketGroupIds: Qe,
      gameDeleteExpandedMarketGroupIdByUser: _a,
      gameResetMarketsPerPageCount: oa,
      gameSetTimelineEvents: la,
      gameSetAwayTeamActivePlayerIds: Ut,
      gameSetHomeTeamActivePlayerIds: Ot,
      unSelectAllPlayers: Sr,
      addDuelPlayerFirstTeam: Ia,
      addDuelPlayerSecondTeam: va,
      removeDuelPlayerFirstTeam: ba,
      removeDuelPlayerSecondTeam: fa,
      replaceDuelPlayerFirstTeam: Ga,
      replaceDuelPlayerSecondTeam: ka,
    };
  };
export { qs as VSwitch, js as useGame };
