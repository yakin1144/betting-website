import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable as j,
  browser_useSharedStore as Q,
  reactivity_esmBundler_ref as V,
  runtimeCore_esmBundler_computed as s,
  reactivity_esmBundler_unref as n,
  toCommonFraction_toCommonFraction as Z,
  useGlobalStore as z,
  index_useDateTimeService as J,
  runtimeCore_esmBundler_inject as b,
  reactivity_esmBundler_shallowRef as W,
  reactivity_esmBundler_toRef as B,
  reactivity_esmBundler_toValue as ee,
  execAsync as oe,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { NSportEvent as _, formatSeconds as ne } from "./entry-8c01be4f19.js";
const te = j(() => {
    $_$();
    const e = Q(),
      u = V([]),
      c = s(
        () =>
          $_$() &&
          n(u).map((l) => {
            var S;
            return (S = l.market) == null ? void 0 : S.id;
          })
      );
    return (
      e.bind("coupon/bets", u),
      {
        couponBetIds: c,
        couponAddBet: (l) => {
          window.coreBus.emit("couponAddBet", l);
        },
      }
    );
  }),
  re = ";",
  h = (e, u) => {
    if (!e) return "";
    const c = e == null ? void 0 : e[_.ExtraInfoKey.INNS_STATS],
      d = c == null ? void 0 : c.split(re),
      l = u === _.TeamSide.TEAM_1,
      S = l ? 1 : 2,
      A = l ? _.ExtraInfoKey.TEAM_1_SCORES : _.ExtraInfoKey.TEAM_2_SCORES,
      p = Number(d == null ? void 0 : d[0]) || 1,
      v = (d == null ? void 0 : d[2]) || 0,
      E = S === p && v ? `(${v})` : "";
    return `${(e == null ? void 0 : e[A]) || ""} ${E}`;
  },
  se = (e) => parseFloat(e.toFixed(3)),
  m = (e) => se(e).toString(),
  M = (e) => m(e),
  ce = (e) =>
    e >= 2
      ? `+${Math.round((e - 1) * 100)}`
      : e > 1
      ? `-${Math.round(100 / (e - 1))}`
      : "1",
  ae = (e) => {
    $_$();
    const [u, c] = Z(e - 1);
    return `${u}/${c}`;
  },
  w = (e) => m(e - 1),
  O = (e) => (e >= 2 ? m(e - 1) : e > 1 ? m(-1 / (e - 1)) : "1"),
  R = (e) => (e > 2 ? m(1 / (1 - e)) : e > 1 ? m(e - 1) : "1"),
  ie = (e, u) => {
    var c;
    return (
      (c = { 0: M, 2: ce, 1: ae, 4: w, 5: O, 6: R, 14: w, 15: O, 16: R }[u]) !=
        null
        ? c
        : M
    )(e);
  };
var i = ((e) => (
  (e.UNIVERSAL = "universal"),
  (e.CYBER = "cyber"),
  (e.CRICKET = "cricket"),
  (e.TABLE_TENNIS = "table_tennis"),
  (e.ICE_HOCKEY = "hockey"),
  (e.BASKETBALL = "basketball"),
  (e.TENNIS = "tennis"),
  (e.VOLLEYBALL = "volleyball"),
  (e.FOOTBALL = "football"),
  e
))(i || {});
const T = {
    0: i.UNIVERSAL,
    1: i.FOOTBALL,
    85: i.FOOTBALL,
    66: i.CRICKET,
    10: i.TABLE_TENNIS,
    2: i.ICE_HOCKEY,
    3: i.BASKETBALL,
    4: i.TENNIS,
    6: i.VOLLEYBALL,
    cyber: i.CYBER,
  },
  y = "widget_banner_event",
  Te = { 1: "betting_first_time" },
  ue = 3,
  le = 5,
  D = { SPA: 2, SSR: 1 },
  de = "_small",
  ve = (e, u = !1) => {
    $_$();
    const { couponAddBet: c, couponBetIds: d } = te(),
      l = z(),
      S = J(),
      A = b("sportEventRequestCount", V(0)),
      p = b("isSsrMode", W(!1)),
      v = B(() => $_$() && n(A) > (ee(p) ? D.SSR : D.SPA)),
      E = s(() => {
        $_$();
        var o;
        return ((o = n(e)) == null ? void 0 : o.eventType) === _.EventType.Live;
      }),
      L = async (o) => {
        $_$();
        let t, a;
        if (!o || !o.coef) return;
        const r = n(e);
        ([t, a] = oe(() =>
          c({
            market: o,
            game: {
              firstOpponentNameEng: (r == null ? void 0 : r.homeNameEng) || "",
              secondOpponentNameEng: (r == null ? void 0 : r.awayNameEng) || "",
              firstOpponentFullScore: (r == null ? void 0 : r.homeScore) || 0,
              secondOpponentFullScore: (r == null ? void 0 : r.awayScore) || 0,
              number: r == null ? void 0 : r.gameNumber,
              champId: r == null ? void 0 : r.tournamentId,
              sportName: r == null ? void 0 : r.sportName,
              sportNameEng: r == null ? void 0 : r.sportNameEng,
              champNameEng: r == null ? void 0 : r.tournamentNameEng,
            },
          })
        )),
          await t,
          a();
      },
      C = (o) => ($_$() && o ? n(d).includes(o) : !1),
      $ = (o) =>
        $_$() &&
        s(() => {
          $_$();
          var t;
          const { timeInSeconds: a } = (t = n(e)) != null ? t : {};
          return a ? ne(a, o) : "";
        }),
      g = s(() => {
        $_$();
        const o = n(e);
        return (
          n(E) &&
          ((o == null ? void 0 : o.homeScore) !== void 0 ||
            (o == null ? void 0 : o.awayScore) !== void 0)
        );
      }),
      F = s(() => {
        $_$();
        var o, t;
        return (
          ((t = (o = n(e)) == null ? void 0 : o.extraInfo) == null
            ? void 0
            : t[_.ExtraInfoKey.ADD_TIME]) || ""
        );
      }),
      I = s(() => {
        $_$();
        var o;
        return ((o = n(e)) == null ? void 0 : o.scheduledInSeconds) || 0;
      }),
      U = s(() => $_$() && n(I) * 1e3 - new Date().getTime()),
      x = s(() => {
        $_$();
        const o = S.toUserTimeZone(n(I) * 1e3);
        return {
          date: `${String(o.getDate()).padStart(2, "0")}.${String(
            o.getMonth() + 1
          ).padStart(2, "0")}`,
          time: `${String(o.getHours()).padStart(2, "0")}:${String(
            o.getMinutes()
          ).padStart(2, "0")}`,
        };
      }),
      P = s(() => {
        $_$();
        const o = n(e);
        if (!o) return T[0];
        const { sportId: t = 0, isCyberSport: a } = o;
        return T[t] ? T[t] : a ? T.cyber : T[0];
      }),
      f = s(() => (u ? de : "")),
      Y = s(() => {
        $_$();
        const o = n(P);
        return { DEFAULT: `${y}_${o}${n(f)}`, SCALE_2X: `${y}_${o}${n(f)}_2x` };
      }),
      k = (o) => ie(Number(o || "0"), l.getCoefViewId),
      G = s(() => $_$() && n(I) + le + ue),
      K = Math.round(new Date().getTime() / 1e3) > n(G),
      H = s(() => {
        $_$();
        var o, t;
        return !!(
          K &&
          (o = n(e)) != null &&
          o.currentPeriod &&
          !((t = n(e)) != null && t.periodDescription)
        );
      }),
      N = B(() => {
        $_$();
        var o;
        return ((o = n(e)) == null ? void 0 : o.sportId) === 66;
      }),
      q = s(() => {
        $_$();
        var o, t;
        if (!n(e)) return "";
        const a = ((o = n(e)) == null ? void 0 : o.homeScore) || 0;
        return n(N)
          ? h((t = n(e)) == null ? void 0 : t.extraInfo, _.TeamSide.TEAM_1)
          : `${a}`;
      }),
      X = s(() => {
        $_$();
        var o, t;
        if (!n(e)) return "";
        const a = ((o = n(e)) == null ? void 0 : o.awayScore) || 0;
        return n(N)
          ? h((t = n(e)) == null ? void 0 : t.extraInfo, _.TeamSide.TEAM_2)
          : `${a}`;
      });
    return {
      isLive: E,
      isScoresAvailable: g,
      millisecondsLeft: U,
      scheduledDateTime: x,
      bannerImg: Y,
      extraTime: F,
      isGameDelayed: H,
      isCricket: N,
      homeTeamScore: q,
      awayTeamScore: X,
      isSportEventRequestCountMoreThanTwo: v,
      checkIsMarketSelected: C,
      getCoefByView: k,
      sendMarketToCoupon: L,
      createGameTime: $,
    };
  };
export { Te as FIRST_TIME_LANG_KEY_BY_SPORT_ID, ve as useUiEventSlide };
