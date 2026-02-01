import $_$ from "./$_$.js";
$_$();
import { SportsMenuMarketGroup as e } from "./entry-50afb6f36c.js";
import {
  CORRECT_SCORE_START_SLICE_INDEX as h,
  CORRECT_SCORE_END_SLICE_INDEX as C,
  buildKeyFromMarketParam as c,
  isEqualRules as y,
} from "./9bf7ffb8ec.js";
import { isDef as R } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const w = {
    fullTimeCells: {
      hdp: { possibleMarketGroupIds: [2, 2854, 109, 7099] },
      "o/u": { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
      "1x2": { possibleMarketGroupIds: [1] },
    },
    firstHalfCells: {
      hdp: { possibleMarketGroupIds: [2, 2854, 109, 7099] },
      "o/u": { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
      "1x2": { possibleMarketGroupIds: [1] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [
        [2, 2854, 109, 7099],
        [99, 182, 17],
      ],
      marketGroupsToAddInFirstRow: [1],
    },
    config: { hideSubs: !0, hideScoreRow: !0 },
    rules: {
      sports: 1,
      displayType: 0,
      marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS],
    },
  },
  A = {
    fullTimeCells: {
      hdp: {
        possibleMarketTypeIds: [7, 3829],
        settings: { hideCoef: !0, hideTypeName: !0 },
      },
      home: {
        possibleMarketTypeIds: [7, 3829],
        settings: { hideTotalName: !0 },
      },
      away: {
        possibleMarketTypeIds: [8, 3830],
        settings: { hideTotalName: !0 },
      },
      goals: {
        possibleMarketTypeIds: [9, 3827],
        settings: { hideCoef: !0, hideTypeName: !0 },
      },
      over: {
        possibleMarketTypeIds: [9, 3827],
        settings: { hideTotalName: !0 },
      },
      under: {
        possibleMarketTypeIds: [10, 3828],
        settings: { hideTotalName: !0 },
      },
    },
    firstHalfCells: {
      hdp: {
        possibleMarketTypeIds: [7, 3829],
        settings: { hideCoef: !0, hideTypeName: !0 },
      },
      home: {
        possibleMarketTypeIds: [7, 3829],
        settings: { hideTotalName: !0 },
      },
      away: {
        possibleMarketTypeIds: [8, 3830],
        settings: { hideTotalName: !0 },
      },
      goals: {
        possibleMarketTypeIds: [9, 3827],
        settings: { hideCoef: !0, hideTypeName: !0 },
      },
      over: {
        possibleMarketTypeIds: [9, 3827],
        settings: { hideTotalName: !0 },
      },
      under: {
        possibleMarketTypeIds: [10, 3828],
        settings: { hideTotalName: !0 },
      },
    },
    config: {
      marketCentered: !0,
      hideSubs: !0,
      hideScoreRow: !0,
      hideAllMarketTypeNames: !0,
    },
    rules: {
      sports: 1,
      displayType: 1,
      marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS, e.MYANMAR],
    },
    marketsConfig: {
      ignoreEmptyMarkets: !0,
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [
        [2, 2854, 109, 7099],
        [99, 182, 17],
      ],
      marketGroupsToAddInFirstRow: [],
    },
  },
  u = [A, w],
  d = {
    fullTimeCells: {
      winner: { possibleMarketGroupIds: [1] },
      gameHandicap: { possibleMarketGroupIds: [2, 2854] },
      gamesOverUnder: { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [
        [109, 7099],
        [2, 2854],
        [17, 99, 182],
      ],
      marketGroupsToAddInFirstRow: [1],
    },
    config: {},
    rules: { sports: 4, marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS] },
  },
  n = {
    fullTimeCells: {
      winner: { possibleMarketGroupIds: [101] },
      handicap: { possibleMarketGroupIds: [2, 2854, 109, 7099] },
      "o/u": { possibleMarketGroupIds: [17, 99, 182, 2436] },
      teamOverUnderOver: { possibleMarketTypeIds: [11, 13] },
      teamOverUnderUnder: { possibleMarketTypeIds: [12, 14] },
    },
    marketsConfig: {
      marketGroupIdsInRow: [[2, 2854, 109, 7099], [17, 99, 182], [15], [62]],
      marketGroupsToAddInFirstRow: [101],
    },
    config: {},
    rules: { sports: 3, marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS] },
  },
  m = {
    fullTimeCells: {
      winner: { possibleMarketGroupIds: [1] },
      setHandicap: { possibleMarketGroupIds: [109] },
      pointsHandicap: { possibleMarketGroupIds: [2, 2854, 7099] },
      pointsOverUnder: { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
      pointsOddEven: { possibleMarketGroupIds: [14, 6643] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [[109], [2, 2854, 7099], [17, 99], [14]],
      marketGroupsToAddInFirstRow: [1],
    },
    config: {},
    rules: {
      sports: [6, 29],
      displayType: 0,
      marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS],
    },
  },
  k = {
    fullTimeCells: {
      winner: { possibleMarketGroupIds: [101] },
      handicap: { possibleMarketGroupIds: [2, 2854, 109, 7099] },
      "o/u": { possibleMarketGroupIds: [14, 6643] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [[17, 99, 182], [14]],
      marketGroupsToAddInFirstRow: [101],
    },
    config: { hideSubs: !0, hideScoreRow: !0 },
    rules: { sports: 66, marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS] },
  },
  I = {
    fullTimeCells: {
      winner: { possibleMarketGroupIds: [1] },
      gameHandicap: { possibleMarketGroupIds: [109, 7099] },
      pointsHandicap: { possibleMarketGroupIds: [2, 2854] },
      pointsOverUnder: { possibleMarketGroupIds: [17, 99] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [
        [109, 7099],
        [2, 2854],
        [17, 99],
      ],
      marketGroupsToAddInFirstRow: [1],
    },
    config: {},
    rules: { sports: 10, marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS] },
  },
  T = {
    fullTimeCells: {
      "1x2": { possibleMarketGroupIds: [1] },
      handicap: { possibleMarketGroupIds: [2, 2854, 109, 7099] },
      "o/u": { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
      most: { possibleMarketGroupIds: [1087] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [
        [2, 2854, 109],
        [17, 99, 182, 2436, 15],
        [14, 6643],
        [1087],
      ],
      marketGroupsToAddInFirstRow: [1],
    },
    config: { hideScoreRow: !0 },
    rules: { sports: [21, 234], marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS] },
  },
  M = {
    fullTimeCells: {
      "1x2": { possibleMarketGroupIds: [1] },
      handicap: { possibleMarketGroupIds: [2, 2854, 109, 7099, 2438] },
      "o/u": { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [
        [2, 2854, 109],
        [17, 99, 182, 2436, 15, 2438],
        [14, 6643],
      ],
      marketGroupsToAddInFirstRow: [1],
    },
    config: { hideScoreRow: !0 },
    rules: { sports: 40, marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS] },
  },
  b = {
    fullTimeCells: {
      "1x2": { possibleMarketGroupIds: [1] },
      handicap: { possibleMarketGroupIds: [2, 2854, 109, 7099] },
      "o/u": { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
      "o/e": { possibleMarketGroupIds: [14, 6643] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [[2, 2854, 109, 7099], [17, 99, 182], [14]],
      marketGroupsToAddInFirstRow: [1],
    },
    config: { hideScoreRow: !0 },
    rules: { sports: 2, marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS] },
  },
  G = {
    fullTimeCells: {
      handicap: { possibleMarketGroupIds: [2854, 2, 109, 7099] },
      "o/u": { possibleMarketGroupIds: [99, 15, 17, 182, 2436] },
      "1x2": { possibleMarketGroupIds: [1] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [[2854, 2, 109, 7099], [99, 17, 182], [14]],
      marketGroupsToAddInFirstRow: [1],
    },
    config: { hideScoreRow: !0 },
    rules: {
      sports: [
        211, 232, 233, 240, 244, 245, 246, 247, 248, 250, 253, 254, 255, 260,
        261, 263, 265, 266,
      ],
      marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS],
    },
  },
  f = {
    fullTimeCells: {
      "1x2": { possibleMarketGroupIds: [1] },
      handicap: { possibleMarketGroupIds: [2, 2854, 109, 7099] },
      "o/u": { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
      "o/e": { possibleMarketGroupIds: [14, 6643] },
    },
    marketsConfig: {
      marketGroupIdsCountInRow: 2,
      marketGroupIdsInRow: [
        [2, 2854, 109],
        [15, 17, 99, 182, 2436],
        [14, 6643],
      ],
      marketGroupsToAddInFirstRow: [1],
    },
    config: { hideSubs: !0, hideScoreRow: !0 },
    rules: { marketGroup: [e.HDP_AND_OU, e.ALL_EVENTS] },
  },
  g = [...u, d, I, n, m, k, T, b, M, G, f],
  N = [
    {
      fullTimeCells: {
        hdp: { possibleMarketGroupIds: [2, 2854, 109, 7099] },
        "o/u": { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
      },
      firstHalfCells: {
        hdp: { possibleMarketGroupIds: [2, 2854, 109, 7099] },
        "o/u": { possibleMarketGroupIds: [15, 17, 99, 182, 2436] },
      },
      marketsConfig: {
        marketGroupIdsCountInRow: 2,
        marketGroupIdsInRow: [
          [2, 2854, 109, 7099],
          [99, 182, 17],
        ],
        marketGroupsToAddInFirstRow: [1],
      },
      config: { hideSubs: !0, hideScoreRow: !0 },
      rules: { sports: 1, displayType: 0, marketGroup: [e.MYANMAR] },
    },
    {
      fullTimeCells: {
        hdp: {
          possibleMarketTypeIds: [7, 3829],
          settings: { hideCoef: !0, hideTypeName: !0 },
        },
        home: {
          possibleMarketTypeIds: [7, 3829],
          settings: { hideTotalName: !0 },
        },
        away: {
          possibleMarketTypeIds: [8, 3830],
          settings: { hideTotalName: !0 },
        },
        goals: {
          possibleMarketTypeIds: [9, 3827],
          settings: { hideCoef: !0, hideTypeName: !0 },
        },
        over: {
          possibleMarketTypeIds: [9, 3827],
          settings: { hideTotalName: !0 },
        },
        under: {
          possibleMarketTypeIds: [10, 3828],
          settings: { hideTotalName: !0 },
        },
      },
      firstHalfCells: {
        hdp: {
          possibleMarketTypeIds: [7, 3829],
          settings: { hideCoef: !0, hideTypeName: !0 },
        },
        home: {
          possibleMarketTypeIds: [7, 3829],
          settings: { hideTotalName: !0 },
        },
        away: {
          possibleMarketTypeIds: [8, 3830],
          settings: { hideTotalName: !0 },
        },
        goals: {
          possibleMarketTypeIds: [9, 3827],
          settings: { hideCoef: !0, hideTypeName: !0 },
        },
        over: {
          possibleMarketTypeIds: [9, 3827],
          settings: { hideTotalName: !0 },
        },
        under: {
          possibleMarketTypeIds: [10, 3828],
          settings: { hideTotalName: !0 },
        },
      },
      config: {
        marketCentered: !0,
        hideSubs: !0,
        hideScoreRow: !0,
        hideAllMarketTypeNames: !0,
      },
      rules: { sports: 1, displayType: 1, marketGroup: [e.MYANMAR] },
      marketsConfig: {
        ignoreEmptyMarkets: !0,
        marketGroupIdsCountInRow: 2,
        marketGroupIdsInRow: [
          [2, 2854, 109, 7099],
          [99, 182, 17],
        ],
        marketGroupsToAddInFirstRow: [],
      },
    },
  ],
  _ = [
    {
      fullTimeCells: {
        one: { possibleMarketTypeIds: [1] },
        x: { possibleMarketTypeIds: [2] },
        two: { possibleMarketTypeIds: [3] },
      },
      firstHalfCells: {
        one: { possibleMarketTypeIds: [1] },
        x: { possibleMarketTypeIds: [2] },
        two: { possibleMarketTypeIds: [3] },
      },
      marketsConfig: {
        marketGroupIdsInRow: [[2, 2854, 109, 7099], [99, 182, 17], [62]],
        marketGroupsToAddInFirstRow: [1],
      },
      config: {
        marketCentered: !0,
        hideAllTotalNames: !0,
        hideAllMarketTypeNames: !0,
        hideSubs: !0,
        hideScoreRow: !0,
      },
      rules: { marketGroup: e.ONLY_1x2_HT_FT },
    },
  ],
  S = [
    {
      fullTimeCells: {
        odd: { possibleMarketTypeIds: [182] },
        even: { possibleMarketTypeIds: [183] },
      },
      firstHalfCells: {
        odd: { possibleMarketTypeIds: [182] },
        even: { possibleMarketTypeIds: [183] },
      },
      marketsConfig: {
        marketGroupIdsInRow: [],
        marketGroupsToAddInFirstRow: [14],
      },
      config: {
        marketCentered: !0,
        hideScoreRow: !0,
        hideSubs: !0,
        hideAllMarketTypeNames: !0,
        hideAllTotalNames: !0,
      },
      rules: { marketGroup: e.GOALS_ODD_EVEN },
    },
  ],
  E = [
    {
      fullTimeCells: {
        oneTwo: {
          possibleMarketTypeIds: [6947],
          possibleMarketParamItems: [1.002],
        },
        oneThree: {
          possibleMarketTypeIds: [6947],
          possibleMarketParamItems: [1.003],
        },
        oneFour: {
          possibleMarketTypeIds: [6947],
          possibleMarketParamItems: [1.004],
        },
        "2-3": {
          possibleMarketTypeIds: [6947],
          possibleMarketParamItems: [2.003],
        },
      },
      firstHalfCells: {
        "0-1": {
          possibleMarketTypeIds: [6947],
          possibleMarketParamItems: [0.001],
        },
        zeroTwo: {
          possibleMarketTypeIds: [6947],
          possibleMarketParamItems: [0.002],
        },
        oneTwo: {
          possibleMarketTypeIds: [6947],
          possibleMarketParamItems: [1.002],
        },
      },
      marketsConfig: {
        marketGroupIdsInRow: [],
        marketGroupsToAddInFirstRow: [7961],
      },
      config: {
        marketCentered: !0,
        hideAllTotalNames: !0,
        hideSubs: !0,
        hideScoreRow: !0,
      },
      rules: { marketGroup: e.TOTAL_GOALS },
    },
  ],
  O = [
    {
      fullTimeCells: {
        "H-H": { possibleMarketTypeIds: [15] },
        "H-D": { possibleMarketTypeIds: [16] },
        "H-A": { possibleMarketTypeIds: [17] },
        "D-H": { possibleMarketTypeIds: [18] },
        "D-D": { possibleMarketTypeIds: [19] },
        "D-A": { possibleMarketTypeIds: [20] },
        "A-H": { possibleMarketTypeIds: [21] },
        "A-D": { possibleMarketTypeIds: [22] },
        "A-A": { possibleMarketTypeIds: [23] },
      },
      marketsConfig: {
        marketGroupIdsInRow: [],
        marketGroupsToAddInFirstRow: [11],
      },
      config: {
        marketCentered: !0,
        hideAllTotalNames: !0,
        hideAllMarketTypeNames: !0,
        hideScoreRow: !0,
        hideSubs: !0,
      },
      rules: { marketGroup: e.HALFTIME_FULLTIME },
    },
  ],
  L = {
    fullTimeCells: {
      zeroZero: { possibleMarketParamItems: [void 0, 0] },
      oneZero: { possibleMarketParamItems: [1] },
      "0-1": { possibleMarketParamItems: [0.001] },
      oneOne: { possibleMarketParamItems: [1.001] },
      twoZero: { possibleMarketParamItems: [2] },
      zeroTwo: { possibleMarketParamItems: [0.002] },
      twoOne: { possibleMarketParamItems: [2.001] },
      oneTwo: { possibleMarketParamItems: [0.002] },
      threeZero: { possibleMarketParamItems: [3] },
      zeroThree: { possibleMarketParamItems: [0.003] },
      twoTwo: { possibleMarketParamItems: [2.002] },
      threeOne: { possibleMarketParamItems: [3.001] },
    },
    marketsConfig: {
      marketGroupIdsInRow: [],
      marketGroupsToAddInFirstRow: [136],
    },
    config: {
      marketCentered: !0,
      hideAllTotalNames: !0,
      hideAllMarketTypeNames: !0,
      hideSubs: !0,
      hideScoreRow: !0,
    },
    rules: { sports: 1, marketGroup: e.CORRECT_SCORE },
  },
  D = {
    fullTimeCells: {},
    marketsConfig: {
      marketGroupIdsInRow: [],
      marketGroupsToAddInFirstRow: [136],
    },
    config: {
      isDynamic: !0,
      marketCentered: !0,
      hideAllTotalNames: !0,
      hideAllMarketTypeNames: !0,
      hideSubs: !0,
      hideScoreRow: !0,
    },
    rules: { marketGroup: e.CORRECT_SCORE },
  },
  H = [L, D],
  F = [
    {
      fullTimeCells: {
        firstGoal: { possibleMarketTypeIds: [388, 389] },
        lastGoal: { possibleMarketTypeIds: [475, 477] },
        noGoal: { possibleMarketTypeIds: [390] },
      },
      firstHalfCells: {
        firstGoal: { possibleMarketTypeIds: [388, 389] },
        lastGoal: { possibleMarketTypeIds: [475, 477] },
        noGoal: { possibleMarketTypeIds: [390] },
      },
      marketsConfig: {
        marketGroupsToAddInFirstRow: [154, 20],
        marketGroupIdsInRow: [],
      },
      config: { hideAllTotalNames: !0, hideSubs: !0, hideScoreRow: !0 },
      rules: { marketGroup: e.FIRST_LAST_GOAL },
    },
  ],
  P = [
    {
      fullTimeCells: {},
      marketsConfig: { marketGroupsToAddInFirstRow: [] },
      config: {
        marketCentered: !0,
        hideAllTotalNames: !0,
        hideAllMarketTypeNames: !0,
        hideSubs: !0,
        hideScoreRow: !0,
      },
      rules: {},
    },
  ],
  U = [...u, n, m, k, T, b, M, d, I, G, f],
  v = {
    [e.ALL_EVENTS]: U,
    [e.HDP_AND_OU]: g,
    [e.ONLY_1x2_HT_FT]: _,
    [e.GOALS_ODD_EVEN]: S,
    [e.TOTAL_GOALS]: E,
    [e.HALFTIME_FULLTIME]: O,
    [e.CORRECT_SCORE]: H,
    [e.FIRST_LAST_GOAL]: F,
    [e.OUTRIGHTS]: P,
    [e.MYANMAR]: N,
  },
  V = (a) => {
    var r;
    const [o] = a;
    if (!o) return {};
    const { [136]: p = [] } = (r = o.marketGroups) != null ? r : {};
    return p.slice(h, C).reduce((t, l) => {
      const i = c(l);
      return i && (t[i] = { possibleMarketParamItems: [l.param] }), t;
    }, {});
  },
  Z = ({ games: a, group: r, rules: o }) => {
    $_$();
    if (!R(r)) return;
    const { [r]: p } = v,
      s = p.find((t) => y(t.rules, o));
    return s != null && s.config.isDynamic
      ? {
          fullTimeCells: V(a),
          marketsConfig: s.marketsConfig,
          config: s.config,
          rules: s.rules,
        }
      : s;
  };
export { Z as getDashboardMarketGroupTemplate };
