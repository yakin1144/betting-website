import $_$ from "./$_$.js";
$_$();
import {
  toFirstLetterUpperCase_toFirstLetterUpperCase as Q,
  bettingTimerName_BettingTimerName as y,
  bettingType_BettingType as q,
  runtimeCore_esmBundler_computed as a,
  reactivity_esmBundler_unref as e,
  reactivity_esmBundler_toRef as B,
  reactivity_esmBundler_ref as O,
  reactivity_esmBundler_toValue as E,
  noop as J,
  runtimeCore_esmBundler_onMounted as K,
  reactivity_esmBundler_onScopeDispose as z,
  index_useT as X,
  execAsync as A,
  MODAL_ID as D,
  runtimeCore_esmBundler_provide as Z,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  getGameStartDateMonth as $,
  getGameStartTimeFormatted as ee,
  getFirstTeamName as te,
  getSecondTeamName as oe,
  getCurrentLabel as ne,
  getInfoList as ae,
  getFirstOpponentScoreLabel as re,
  getSecondOpponentScoreLabel as se,
  createGetInfoLabelProps as R,
  getFirstTeamSeed as le,
  getSecondTeamSeed as ie,
  useIntervalUpdate as ce,
  useAddRouteQueryParam as de,
  BETTING_TYPE as N,
  GAME_ID as g,
} from "./entry-50afb6f36c.js";
import {
  BETTING_TIMERS as V,
  BETTING_TIMER_TYPE_DEFAULT as ue,
} from "./bb0d3b59f5.js";
const me = " / ",
  S = (t) =>
    t
      .map((o) => {
        $_$();
        const r = ((o == null ? void 0 : o.toString()) || "").trim();
        return Q(r);
      })
      .filter(Boolean)
      .join(me);
var M, C, U;
const w = (M = V[y.MENU_COMPONENT]) == null ? void 0 : M[q.LIVE],
  _e = (C = V[y.MENU_COMPONENT]) == null ? void 0 : C[ue],
  be = (U = w != null ? w : _e) != null ? U : 0,
  Te = 3 * 1e3,
  k = ({
    matchInfoStage: t,
    matchInfoFieldType: o,
    matchInfoScoreLabel: r,
    additionalInfo: n,
    additionalType: u,
    startDateFormatted: c,
    startTimeFormatted: s,
    currentPeriodLabel: p,
    startedAt: b = 0,
    matchInfoGameType: T,
    statsInfo: f,
    isGameOver: v = !1,
    currentDate: m = Date.now(),
    isShowDateTimeLabel: _,
    isCyberSport: L,
    gameTimeStatus: d,
  }) => {
    const I = L ? b : b + Te + be,
      h = m > I,
      F = L && v,
      G = [h ? p : void 0, d].filter(Boolean).join(", "),
      l = S([c, s]),
      i = (P) => S([P, n, u, t, r, o, T, F ? void 0 : f]),
      j = (P) => S(P),
      x = i(_ ? l : G),
      H = i(_ ? l : d),
      Y = j([_ ? l : d, o, T, F ? void 0 : f]);
    return {
      gameTimeStatus: d,
      infoLabel: x,
      infoLabelWithoutPeriod: H,
      periodTimeLabel: G,
      infoLabelWithoutPeriodAndStage: Y,
    };
  },
  fe = (t, o = !1) => {
    $_$();
    const r = a(() => $_$() && $(e(t), e(o))),
      n = a(() => $_$() && ee(e(t), e(o))),
      u = a(() => $_$() && te(e(t))),
      c = a(() => $_$() && oe(e(t))),
      s = a(() => $_$() && ne(e(t))),
      p = a(() => $_$() && ae(e(t))),
      b = a(() => $_$() && re(e(t))),
      T = a(() => $_$() && se(e(t))),
      f = a(() =>
        ($_$() && e(o)) || e(n)
          ? [e(r), e(n)].filter(Boolean).join(" ")
          : k(R(e(t), e(o))).infoLabelWithoutPeriodAndStage
      ),
      v = a(() => $_$() && le(e(t))),
      m = a(() => $_$() && ie(e(t))),
      _ = B(() => $_$() && e(t).gameStatus === 64);
    return {
      firstTeamName: u,
      secondTeamName: c,
      firstTeamSeed: v,
      secondTeamSeed: m,
      infoList: p,
      gameDate: r,
      gameTime: n,
      firstOpponentScoreLabel: b,
      secondOpponentScoreLabel: T,
      currentPeriodLabel: s,
      isCheckingVAR: _,
      gameInfoTitle: f,
    };
  },
  pe = (t, { isShowDateTimeLabel: o, shouldForceUpdateTime: r }) => {
    $_$();
    const n = O(Date.now()),
      u = a(() => $_$() && k(R(E(t), E(o), e(n)))),
      c = a(() => {
        $_$();
        var m, _, L;
        const d = E(t),
          I = (m = d.startedAt) != null ? m : d.startTimestamp;
        return {
          time:
            (L = (_ = d.stats) == null ? void 0 : _.timeInSeconds) != null
              ? L
              : d.timeInSeconds,
          startedAt: I,
        };
      }),
      s = a(() => $_$() && E(r) && !e(c).time),
      p = B(() => $_$() && e(u).infoLabel),
      b = B(() => $_$() && e(u).infoLabelWithoutPeriod),
      T = async () => {
        $_$();
        const { startedAt: m } = e(c);
        (e(s) || m > e(n)) && (n.value = Date.now());
      },
      { timerStart: f, timerDestroy: v } = ce({
        interval: 1e3 * 5,
        onUpdateData: T,
        onCancelIntervalRequest: J,
      });
    return K(f), z(v), { gameInfoLabel: p, gameInfoLabelWithoutPeriod: b };
  },
  Se = (t, o) => {
    $_$();
    const r = X(),
      { gameInfoLabel: n } = pe(t, {
        isShowDateTimeLabel: a(() => $_$() && e(o)),
        shouldForceUpdateTime: !1,
      });
    return {
      label: a(() => {
        $_$();
        var c;
        const s = e(t);
        return e(o)
          ? S([
              s.startDateFormatted,
              s.startTimeFormatted,
              r("game_bets_before_start"),
            ])
          : (s.currentPeriodLabel && s.timeInSeconds) || s.isNotStarted
          ? (c = e(n).split("/")[0]) != null
            ? c
            : ""
          : S([s.startDateFormatted, s.startTimeFormatted]);
      }),
    };
  },
  Ee = ({ game: t, bettingType: o, isLineGamesShowed: r }) => {
    $_$();
    const { addQueryParam: n } = de(),
      {
        firstTeamName: u,
        secondTeamName: c,
        firstTeamSeed: s,
        secondTeamSeed: p,
        infoList: b,
        gameDate: T,
        gameTime: f,
        firstOpponentScoreLabel: v,
        secondOpponentScoreLabel: m,
        currentPeriodLabel: _,
        isCheckingVAR: L,
        gameInfoTitle: d,
      } = fe(t, r),
      I = a(() => $_$() && e(b).join(" / "));
    return {
      firstTeamName: u,
      secondTeamName: c,
      firstTeamSeed: s,
      secondTeamSeed: p,
      infoList: b,
      gameDate: T,
      gameTime: f,
      gameInfoTitle: d,
      firstOpponentScoreLabel: v,
      secondOpponentScoreLabel: m,
      currentPeriodLabel: _,
      gameInfo: I,
      isCheckingVAR: L,
      showAbout: async () => {
        $_$();
        let l, i;
        ([l, i] = A(
          () =>
            $_$() &&
            n({
              [D]: "dashboard-event-about",
              [g]: e(t).gameIdForUrl,
              [N]: e(o),
            })
        )),
          await l,
          i();
      },
      showTopGameAbout: async () => {
        $_$();
        let l, i;
        ([l, i] = A(
          () =>
            $_$() &&
            n({
              [D]: "dashboard-top-event-about",
              [g]: e(t).gameIdForUrl,
              [N]: e(o),
            })
        )),
          await l,
          i();
      },
      showFavoriteGameAbout: async () => {
        $_$();
        let l, i;
        ([l, i] = A(
          () =>
            $_$() &&
            n({
              [D]: "favorites-event-about",
              [g]: e(t).gameIdForUrl,
              [N]: e(o),
            })
        )),
          await l,
          i();
      },
      showGamesSliderAbout: async () => {
        $_$();
        let l, i;
        ([l, i] = A(
          () =>
            $_$() &&
            n({
              [D]: "games-slider-event-about",
              [g]: e(t).gameIdForUrl,
              [N]: e(o),
            })
        )),
          await l,
          i();
      },
    };
  },
  Ae = (t) => {
    $_$();
    const o = O(!1),
      r = O();
    return (
      Z(t, { hovered: o, currentTarget: r }),
      {
        hovered: o,
        currentTarget: r,
        handleMouseover: (c) => {
          (r.value = c.currentTarget), (o.value = !0);
        },
        handleMouseleave: () => {
          o.value = !1;
        },
      }
    );
  },
  De = Symbol();
export {
  De as BETTING_HOVERED_INJECTION_KEY_SPORT_EVENT,
  me as SLASH_DELIMITER,
  k as getGameInfoLabel,
  Ee as useGameCard,
  fe as useGameInfo,
  pe as useGameInfoLabel,
  Se as useGamesSliderGameInfoLabel,
  Ae as useHoveredProvider,
};
