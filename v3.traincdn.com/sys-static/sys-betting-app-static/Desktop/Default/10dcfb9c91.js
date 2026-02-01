import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_computed as M,
  reactivity_esmBundler_unref as g,
  equalWatch as H,
  reactivity_esmBundler_onScopeDispose as h,
  execAsync as f,
  iconName as i,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useIntervalUpdate as K,
  tryOnMounted as G,
  groupBy as C,
  TimelineEventViewModel as w,
  PERIODS_TOTAL_NUMBER_BY_SPORT_ID as W,
  PERIOD_DURATION_BY_SPORT_ID as x,
  OVERTIME_PERIODS_TOTAL_NUMBER_BY_SPORT_ID as V,
  OVERTIME_PERIOD_DURATION_BY_SPORT_ID as $,
} from "./entry-50afb6f36c.js";
import { usePageLeave as Q } from "./11286bfc75.js";
const j = 3e4,
  Le = ({
    interval: e,
    onUpdateData: r,
    onCancelIntervalRequest: t,
    startTimerAfterComeBack: a,
  }) => {
    $_$();
    const { hasLeftPage: o } = Q(),
      {
        timerLoading: s,
        timerPaused: O,
        timerStart: n,
        timerPause: L,
        timerDestroy: T,
        timerForceUpdate: c,
      } = K({ interval: e, onUpdateData: r, onCancelIntervalRequest: t });
    let m;
    const Y = () => {
        clearTimeout(m), (m = setTimeout(L, j));
      },
      N = M(() => {
        $_$();
        var l;
        return (l = g(a)) != null ? l : !0;
      }),
      u = async () => {
        $_$();
        let l, I;
        clearTimeout(m),
          g(O && g(N)) && (([l, I] = f(() => c())), await l, I(), n());
      },
      S = async () => {
        $_$();
        n(), g(o) && L();
      };
    return (
      H(o, () => {
        $_$();
        g(o) ? Y() : u();
      }),
      G(S),
      h(T),
      {
        loading: s,
        forceUpdateData: c,
        timerDestroy: T,
        timerPause: L,
        timerStart: n,
      }
    );
  };
var A = ((e) => (
    (e.REGULAR = "regular"),
    (e.OWN = "own"),
    (e.DISALLOWED = "disallowed"),
    (e.PENALTY = "penalty"),
    e
  ))(A || {}),
  _ = ((e) => (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.FOOTBALL_GOAL = 1)] = "FOOTBALL_GOAL"),
    (e[(e.FOOTBALL_SUBSTITUTION = 2)] = "FOOTBALL_SUBSTITUTION"),
    (e[(e.FOOTBALL_YELLOW_CARD = 3)] = "FOOTBALL_YELLOW_CARD"),
    (e[(e.FOOTBALL_RED_CARD = 4)] = "FOOTBALL_RED_CARD"),
    (e[(e.FOOTBALL_PENALTY_MISS = 5)] = "FOOTBALL_PENALTY_MISS"),
    (e[(e.FOOTBALL_YELLOW_RED_CARD = 6)] = "FOOTBALL_YELLOW_RED_CARD"),
    (e[(e.FOOTBALL_OWN_GOAL = 7)] = "FOOTBALL_OWN_GOAL"),
    (e[(e.FOOTBALL_QUESTION = 8)] = "FOOTBALL_QUESTION"),
    (e[(e.HOCKEY_GOAL = 9)] = "HOCKEY_GOAL"),
    (e[(e.HOCKEY_PENALTY_TIME_2 = 10)] = "HOCKEY_PENALTY_TIME_2"),
    (e[(e.HOCKEY_PENALTY_TIME_5 = 11)] = "HOCKEY_PENALTY_TIME_5"),
    (e[(e.HOCKEY_PENALTY_TIME_10 = 12)] = "HOCKEY_PENALTY_TIME_10"),
    (e[(e.HOCKEY_PENALTY_TIME_END = 13)] = "HOCKEY_PENALTY_TIME_END"),
    (e[(e.HOCKEY_BULLIT_MISS = 14)] = "HOCKEY_BULLIT_MISS"),
    (e[(e.HOCKEY_OWN_GOAL = 15)] = "HOCKEY_OWN_GOAL"),
    (e[(e.HOCKEY_SUBSTITUTION = 16)] = "HOCKEY_SUBSTITUTION"),
    (e[(e.REGBY_GOAL = 18)] = "REGBY_GOAL"),
    (e[(e.FOOTBALL_PENALTY = 26)] = "FOOTBALL_PENALTY"),
    (e[(e.UNCOUNTED_GOAL = 29)] = "UNCOUNTED_GOAL"),
    e
  ))(_ || {}),
  d = ((e) => (
    (e[(e.FOOTBALL_FIRST_HALF = 1)] = "FOOTBALL_FIRST_HALF"),
    (e[(e.FOOTBALL_SECOND_HALF = 3)] = "FOOTBALL_SECOND_HALF"),
    (e[(e.FOOTBALL_EXTRA_TIME = 4)] = "FOOTBALL_EXTRA_TIME"),
    (e[(e.FOOTBALL_PENALTY = 5)] = "FOOTBALL_PENALTY"),
    (e[(e.HOCKEY_PERIOD_1 = 6)] = "HOCKEY_PERIOD_1"),
    (e[(e.HOCKEY_PERIOD_2 = 7)] = "HOCKEY_PERIOD_2"),
    (e[(e.HOCKEY_PERIOD_3 = 8)] = "HOCKEY_PERIOD_3"),
    e
  ))(d || {});
const F = { goals: [1, 9, 18], ownGoals: [7, 15] },
  ie = {
    [A.REGULAR]: "x",
    [A.DISALLOWED]: "-",
    [A.OWN]: "O",
    [A.PENALTY]: "P",
  },
  q = "UiIco",
  X = "ScoreboardLineupsScores";
function k(e) {
  $_$();
  switch (e) {
    case _.FOOTBALL_GOAL:
    case _.FOOTBALL_OWN_GOAL:
      return 1;
    case _.HOCKEY_GOAL:
    case _.HOCKEY_OWN_GOAL:
      return 2;
    case _.HOCKEY_SUBSTITUTION:
    case _.FOOTBALL_SUBSTITUTION:
      return i.FOOTBALL_SUBSTITUTION;
    case _.FOOTBALL_PENALTY_MISS:
      return i.PENALTY_MISSING;
    case _.FOOTBALL_QUESTION:
      return i.QUESTION;
    case _.FOOTBALL_YELLOW_CARD:
      return i.FOOTBALL_YELLOW_CARDS;
    case _.FOOTBALL_RED_CARD:
      return i.FOOTBALL_RED_CARDS;
    case _.FOOTBALL_YELLOW_RED_CARD:
      return i.FOOTBALL_RED_YELLOW_CARDS;
    case _.HOCKEY_PENALTY_TIME_2:
    case _.HOCKEY_PENALTY_TIME_5:
    case _.HOCKEY_PENALTY_TIME_10:
      return i.FOOTBALL_YELLOW_CARDS;
    case _.HOCKEY_PENALTY_TIME_END:
      return i.FOOTBALL_RED_CARDS;
    case _.HOCKEY_BULLIT_MISS:
      return i.BULLETS_NO;
    case _.REGBY_GOAL:
      return 7;
    default:
      return "";
  }
}
function z({ T: e, type: r }) {
  switch (r) {
    case _.HOCKEY_GOAL:
    case _.FOOTBALL_GOAL:
    case _.REGBY_GOAL:
      return e("game_scoreboard_lineups_goal");
    case _.HOCKEY_OWN_GOAL:
    case _.FOOTBALL_OWN_GOAL:
      return e("game_scoreboard_lineups_own_goal");
    case _.HOCKEY_SUBSTITUTION:
    case _.FOOTBALL_SUBSTITUTION:
      return e("game_scoreboard_lineups_substitution");
    case _.FOOTBALL_PENALTY_MISS:
      return e("game_scoreboard_lineups_penalty_miss");
    case _.FOOTBALL_QUESTION:
      return e("game_scoreboard_lineups_question");
    case _.FOOTBALL_YELLOW_CARD:
      return e("game_scoreboard_lineups_yellow_card");
    case _.FOOTBALL_RED_CARD:
      return e("game_scoreboard_lineups_red_card");
    case _.FOOTBALL_YELLOW_RED_CARD:
      return e("game_scoreboard_lineups_yellow_red_card");
    case _.HOCKEY_PENALTY_TIME_2:
      return e("game_scoreboard_lineups_penalty_time_plural_1", { minutes: 2 });
    case _.HOCKEY_PENALTY_TIME_5:
      return e("game_scoreboard_lineups_penalty_time_plural_2", { minutes: 5 });
    case _.HOCKEY_PENALTY_TIME_10:
      return e("game_scoreboard_lineups_penalty_time_plural_2", {
        minutes: 10,
      });
    case _.HOCKEY_PENALTY_TIME_END:
      return e("game_scoreboard_lineups_penalty_time_end");
    case _.HOCKEY_BULLIT_MISS:
      return e("game_scoreboard_lineups_bullet_miss");
    default:
      return "";
  }
}
function J({ T: e, type: r }) {
  switch (r) {
    case d.FOOTBALL_FIRST_HALF:
      return `1 ${e("game_scoreboard_football_half_label")}`;
    case d.FOOTBALL_SECOND_HALF:
      return `2 ${e("game_scoreboard_football_half_label")}`;
    case d.HOCKEY_PERIOD_1:
      return `1 ${e("game_scoreboard_period")}`;
    case d.HOCKEY_PERIOD_2:
      return `2 ${e("game_scoreboard_period")}`;
    case d.HOCKEY_PERIOD_3:
      return `3 ${e("game_scoreboard_period")}`;
    default:
      return "";
  }
}
const B = ({ name: e, type: r, sportId: t }) => ({
  name: e,
  type: r,
  count: 0,
  icon: t,
  componentName: X,
});
function Ae({ T: e, sportId: r, events: t }) {
  const a = {
    regular: B({
      sportId: r,
      type: A.REGULAR,
      name: e("game_scoreboard_lineups_goal"),
    }),
    own: B({
      sportId: r,
      type: A.OWN,
      name: e("game_scoreboard_lineups_own_goal"),
    }),
    disallowed: B({
      sportId: r,
      type: A.DISALLOWED,
      name: e("game_scoreboard_dropdown_unoffered_goals"),
    }),
    penalty: B({
      sportId: r,
      type: A.PENALTY,
      name: e("game_scoreboard_lineups_penalty"),
    }),
  };
  return [
    ...t.reduce(
      (s, O) =>
        F.goals.includes(O.type)
          ? (a.regular.count++, s.add(a.regular))
          : F.ownGoals.includes(O.type)
          ? (a.own.count++, s.add(a.own))
          : O.type === _.UNCOUNTED_GOAL
          ? (a.disallowed.count++, s.add(a.disallowed))
          : O.type === _.FOOTBALL_PENALTY
          ? (a.penalty.count++, s.add(a.penalty))
          : s.add({
              icon: k(O.type),
              name: z({ T: e, type: O.type }),
              periodName: J({ T: e, type: O.periodType }),
              minute: O.minute,
              assistantName: O.assistantName,
              componentName: q,
              sportId: r,
            }),
      new Set()
    ),
  ];
}
const Z = 5,
  y = 1,
  v = ({
    events: e,
    periodEndTimeInMinutes: r,
    endTimeThresholdInMinutes: t = y,
    aggregationStepInMinutes: a = Z,
  }) => {
    if (a <= 0 || !e) return {};
    const o = e.filter((c) => c && Object.keys(c).length),
      s = Object.entries(C(o, (c) => c.timeInMinutes)),
      [O] = s;
    if (!O) return {};
    const [n] = O,
      L = (c, [m, Y]) => {
        var N;
        const u = Number(c.currentTimeLabel) || Number(n),
          S = Number(m) - u,
          l = r - t,
          I = S >= a,
          R = Number(m) >= l,
          b = I && !R,
          P = R ? Math.max(u, l) : u,
          D = String(b ? Number(m) : P),
          U = (N = c.aggregatedByTime[D]) != null ? N : [];
        return {
          ...c,
          currentTimeLabel: D,
          aggregatedByTime: { ...c.aggregatedByTime, [D]: [...U, ...Y] },
        };
      },
      { aggregatedByTime: T } = s.reduce(L, {
        currentTimeLabel: "0",
        aggregatedByTime: {},
      });
    return T;
  },
  p = (e, [r, t]) => ({ ...e, [r]: w.aggregated(t) }),
  ee = (e, [r, t]) => {
    const a = Object.entries(C(t, (o) => o.teamNumber)).reduce(p, {});
    return { ...e, [r]: a };
  },
  re = (e, r) => {
    const t =
      v({
        events: e,
        periodEndTimeInMinutes: r,
        endTimeThresholdInMinutes: 0,
      }) || {};
    return Object.entries(t).reduce(ee, {});
  };
var _e = Object.defineProperty,
  te = (e, r, t) =>
    r in e
      ? _e(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  E = (e, r, t) => te(e, typeof r != "symbol" ? r + "" : r, t);
class ae {
  constructor({
    startTimeInMinutes: r,
    endTimeInMinutes: t,
    progressPercentage: a,
    events: o,
  }) {
    E(this, "startTimeInMinutes"),
      E(this, "endTimeInMinutes"),
      E(this, "durationInMinutes"),
      E(this, "progressPercentage"),
      E(this, "aggregatedEvents"),
      E(this, "events"),
      E(this, "timeLabels"),
      (this.startTimeInMinutes = r),
      (this.endTimeInMinutes = t),
      (this.durationInMinutes = t - r),
      (this.progressPercentage = a != null ? a : 0),
      (this.aggregatedEvents = re(o, t)),
      (this.events = o),
      (this.timeLabels = Object.keys(this.aggregatedEvents)
        .map(Number)
        .sort((s, O) => s - O));
  }
  get startTimeFormatted() {
    return this.startTimeInMinutes !== void 0
      ? `${this.startTimeInMinutes}'`
      : void 0;
  }
  get endTimeFormatted() {
    return this.endTimeInMinutes !== void 0
      ? `${this.endTimeInMinutes}'`
      : void 0;
  }
  get aggregatedEventGroups() {
    var r, t;
    return (t =
      (r = this.timeLabels) == null
        ? void 0
        : r.map((a) => this.aggregatedEvents[a])) != null
      ? t
      : [];
  }
  get isPeriodFinished() {
    return this.progressPercentage >= 100;
  }
}
const Oe = (e, r = 0) => {
    var n, L;
    const t = W[e],
      a = x[e];
    if (!t || !a) return console.warn("Unsupported sport id provided"), [];
    const o = t * a < r,
      s = (n = V[e]) != null ? n : 0,
      O = (L = $[e]) != null ? L : 0;
    return [...new Array(t).fill(a), ...(o ? new Array(s).fill(O) : [])];
  },
  oe = ({
    events: e = [],
    duration: r,
    startTimeInMinutes: t,
    periodIndex: a,
    gameTimeInMinutes: o,
  }) => {
    const s = t + r,
      O = Math.max(((o - t) / r) * 100, 0);
    return new ae({
      startTimeInMinutes: t,
      endTimeInMinutes: s,
      progressPercentage: O,
      events: e.filter((n) => n.periodNumber === a + 1),
    });
  },
  le = ({ events: e = [], gameTimeInMinutes: r = 0, sportId: t }) => {
    var a, o;
    const s = Math.max(
      r,
      (o = (a = e[0]) == null ? void 0 : a.timeInMinutes) != null ? o : 0
    );
    return Oe(t, s).map((O, n, L) =>
      oe({
        events: e,
        duration: O,
        startTimeInMinutes: L.slice(0, n).reduce((T, c) => T + c, 0),
        periodIndex: n,
        gameTimeInMinutes: r,
      })
    );
  };
export {
  A as GoalType,
  _ as LineupsEventType,
  ae as TimelinePeriodViewModel,
  v as aggregateTimelineEventsByTime,
  le as createTimelinePeriodViewModels,
  Ae as getEvents,
  ie as goalPrefixes,
  Le as useStartIntervalUpdate,
};
