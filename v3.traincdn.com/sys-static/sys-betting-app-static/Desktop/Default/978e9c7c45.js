import $_$ from "./$_$.js";
$_$();
import {
  BettingPageType as mt,
  disableReactivity_disableReactivity as Se,
  isDef as dt,
  index_default_46 as R,
  uniqueBy as ct,
  formatMoney_formatMoney as X,
  apiMethodFactory as v,
  browser_genAccountIdParam as F,
  browser_ACCOUNT_ID_SNAKE as U,
  genIdParam as pt,
  browser_genLngParam as fe,
  browser_genTypedDateParam as D,
  browser_DATE_TO as oe,
  browser_DATE_FROM as ie,
  browser_createParamBoolean as _t,
  browser_createParamInt as pe,
  browser_createParamString as ht,
  browser_createParamArray as yt,
  execAsync as P,
  index_default_51 as E,
  index_getConfigs as be,
  index_useT as St,
  useFormatCurrency_useFormatCurrency as ft,
  useAccountStore as gt,
  runtimeCore_esmBundler_computed as Y,
  reactivity_esmBundler_unref as H,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  SPORTS_WITH_STATISTIC as vt,
  getCouponBetStatusDictionaryKey as At,
  getSportNameForUrl as Tt,
  getGameNameForUrl as It,
  getChampNameForUrl as Pt,
  convertToView as V,
  isSpecialCoefMarket as ke,
  SPECIAL_COEF_MARKET_TITLE as Fe,
  generateMarketId as Bt,
  getPlayersDuelMarketId as Ct,
  BaseCoupon as Ot,
  minus as w,
  divide as Q,
  createMarket as Et,
  CouponBet as Nt,
  parseCouponType as ge,
  COUPON_TYPES_WITH_SYSTEM as ve,
  multiply as z,
  add as xt,
  COUPON_TYPES_WITH_BLOCKS as bt,
  CouponBetChampNames as Ce,
  defaultParamsWrapper as A,
  bet as kt,
  genSortByParam as W,
  timestampTo as ee,
  timestampFrom as te,
  couponStatusIds as Ft,
  genCoefViewIdParam as L,
  COEF_VIEW_SNAKE as ne,
  genCouponIdParam as Ae,
  multi as Lt,
  betGuid as Kt,
  order as Mt,
  sumSale as Ht,
  newSumCoupon as Dt,
  notCalc as Le,
  genSortIntParam as Gt,
  jackpotTypes as Vt,
  COEF_VIEW_TYPE as re,
  curIso as Ut,
  couponId as Ke,
  totoTypes as Wt,
  feedTypes as Te,
  genBetTypesParam as ae,
  genGlobalChampId as Me,
  betsWithAutoSaleOrder as He,
  calculateSummaryInfo as De,
  genIncludeTerminalBetsParam as Ie,
  useArchive as Ge,
  onlyBetsForSale as Ve,
  byBetSettlingDates as Ue,
  feedType as We,
  calculateSaleInfo as qe,
  lastBetId as Ye,
  genCountParam as $e,
  genPartnerParam as we,
  genGroupParam as Ze,
  genUserIdParam as Je,
  betStatuses as je,
  GLOBAL_CHAMP_ID_CAPITALIZE as ze,
  COUNT_CAPITALIZE as Xe,
  LANGUAGE_CAPITALIZE as Qe,
  PARTNER_ID_CAPITALIZE as Re,
  PARTNER_GROUP_ID_CAPITALIZE as et,
  BONUS_USER_ID_CAPITALIZE as tt,
  COEF_VIEW_CAPITALIZE as at,
  DATE_TO_CAPITALIZE as st,
  DATE_FROM_CAPITALIZE as ot,
  couponSum as qt,
  isCalculatedDateType as it,
  betCommonStatuses as nt,
  SORT_TYPE_SNAKE as le,
  SORT as Yt,
  percent as $t,
  betId as wt,
  sum as Zt,
  INCLUDE_TERMINAL_BETS_CAPITALIZE as rt,
  SORT_TYPE_CAPITALIZE as lt,
  BET_TYPES_CAPITALIZE as ut,
  BET_TYPES_SNAKE as Pe,
  COUPON_ID_SNAKE as Jt,
  INCLUDE_TERMINAL_BETS_SNAKE as jt,
  createErrorResult as Oe,
} from "./entry-50afb6f36c.js";
var zt = ((e) => (
    (e.FIFTEEN = "fifteen"),
    (e.SCORE = "score"),
    (e.FOOTBALL = "football"),
    (e.HOCKEY = "hockey"),
    (e.BASKETBALL = "basket"),
    (e.CYBERFOOTBALL = "cyberfootball"),
    (e.CYBERSPORT = "cybersport"),
    (e.FREE = "free"),
    (e.JACKPOT = "jackpot"),
    (e.CRICKET = "cricket"),
    e
  ))(zt || {}),
  O = ((e) => (
    (e[(e.FIFTEEN = 1)] = "FIFTEEN"),
    (e[(e.SCORE = 2)] = "SCORE"),
    (e[(e.FOOTBALL = 3)] = "FOOTBALL"),
    (e[(e.HOCKEY = 4)] = "HOCKEY"),
    (e[(e.BASKETBALL = 12)] = "BASKETBALL"),
    (e[(e.CYBERFOOTBALL = 6)] = "CYBERFOOTBALL"),
    (e[(e.CYBERSPORT = 9)] = "CYBERSPORT"),
    (e[(e.FREE = 7)] = "FREE"),
    (e[(e.JACKPOT = 8)] = "JACKPOT"),
    (e[(e.CRICKET = 11)] = "CRICKET"),
    e
  ))(O || {}),
  Xt = Object.defineProperty,
  Qt = (e, t, s) =>
    t in e
      ? Xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  x = (e, t, s) => Qt(e, typeof t != "symbol" ? t + "" : t, s);
class _e {
  constructor({
    couponId: t,
    availableBetAmount: s,
    hasAutoSaleOrder: a,
    limitAmountPartSale: i,
    maxAutoSaleOrder: r,
    maxSaleAmount: n,
    minAutoSaleOrder: o,
    minBetAmount: l,
    minSaleAmount: u,
    currentAutoSaleAmount: c,
    elevateInfo: d,
  }) {
    x(this, "couponId"),
      x(this, "availableBetAmount"),
      x(this, "hasAutoSaleOrder"),
      x(this, "limitAmountPartSale"),
      x(this, "maxAutoSaleOrder"),
      x(this, "maxSaleAmount"),
      x(this, "minAutoSaleOrder"),
      x(this, "minBetAmount"),
      x(this, "minSaleAmount"),
      x(this, "currentAutoSaleAmount"),
      x(this, "elevateInfo"),
      (this.couponId = t),
      (this.availableBetAmount = s),
      (this.hasAutoSaleOrder = a),
      (this.limitAmountPartSale = i),
      (this.maxAutoSaleOrder = r),
      (this.maxSaleAmount = n),
      (this.minAutoSaleOrder = o),
      (this.minBetAmount = l),
      (this.minSaleAmount = u),
      (this.currentAutoSaleAmount = c),
      (this.elevateInfo = d);
  }
  get isSaleAllowed() {
    return this.limitAmountPartSale === this.maxSaleAmount;
  }
  get isOnlyMinAndMaxSale() {
    return (
      this.limitAmountPartSale > 0 &&
      this.limitAmountPartSale === this.minSaleAmount
    );
  }
  get isOnlyMaxSale() {
    return this.limitAmountPartSale === 0;
  }
  get isOnlyPartAndMaxSale() {
    return !(
      this.isSaleAllowed ||
      this.isOnlyMinAndMaxSale ||
      this.isOnlyMaxSale
    );
  }
}
var Rt = Object.defineProperty,
  ea = (e, t, s) =>
    t in e
      ? Rt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  _ = (e, t, s) => ea(e, typeof t != "symbol" ? t + "" : t, s);
class ta {
  constructor({
    market: t,
    blockId: s,
    statusId: a = -2,
    typeId: i,
    cyberTypeId: r,
    sportNameEng: n,
    subSportNameForUrl: o,
    champNameEng: l,
    calculatedDateTime: u,
    gameNumber: c,
    gameIsFinished: d,
    gameIsLiveInLive: p,
    gamePermanentId: m,
    gameStatusId: h,
    gameStartDateTime: f,
    gameStartDateTimeFormatted: y,
    gameTimeSec: g,
    firstOpponentNameEng: T,
    secondOpponentNameEng: B,
    firstOpponentFullScore: C,
    secondOpponentFullScore: b,
    scoreFormatted: K,
    status: k,
    isBlocked: N = !1,
    isDepend: M = !1,
    expressId: G,
    statisticId: q,
    pageType: Z = mt.HOME,
    pageSubType: J,
    broadcastingId: ue,
    isOurRegion: me = !1,
    champCountryId: de,
    isCyber: I = !1,
    menuSectionNameForUrl: ce,
    builderMarkets: Be = [],
  }) {
    _(this, "additionalType"),
      _(this, "market"),
      _(this, "blockId"),
      _(this, "statusId"),
      _(this, "typeId"),
      _(this, "cyberTypeId"),
      _(this, "sportNameEng"),
      _(this, "subSportNameForUrl"),
      _(this, "champNameEng"),
      _(this, "calculatedDateTime"),
      _(this, "gameNumber"),
      _(this, "gameIsFinished"),
      _(this, "gameIsLiveInLive"),
      _(this, "gamePermanentId"),
      _(this, "gameStatusId"),
      _(this, "gameStartDateTime"),
      _(this, "gameStartDateTimeFormatted"),
      _(this, "gameTimeSec"),
      _(this, "firstOpponentNameEng"),
      _(this, "secondOpponentNameEng"),
      _(this, "firstOpponentFullScore"),
      _(this, "secondOpponentFullScore"),
      _(this, "scoreFormatted"),
      _(this, "status"),
      _(this, "isBlocked"),
      _(this, "isDepend"),
      _(this, "expressId"),
      _(this, "statisticId"),
      _(this, "pageType"),
      _(this, "pageSubType"),
      _(this, "menuSectionNameForUrl"),
      _(this, "broadcastingId"),
      _(this, "isOurRegion"),
      _(this, "champCountryId"),
      _(this, "isCyber"),
      _(this, "builderMarkets"),
      (this.market = t),
      (this.blockId = s),
      (this.statusId = a),
      (this.typeId = i),
      (this.cyberTypeId = r),
      (this.sportNameEng = n),
      (this.subSportNameForUrl = o),
      (this.champNameEng = l),
      (this.calculatedDateTime = u),
      (this.gameNumber = c),
      (this.gameIsFinished = d),
      (this.gameIsLiveInLive = p),
      (this.gamePermanentId = m),
      (this.gameStatusId = h),
      (this.gameStartDateTime = f),
      (this.gameStartDateTimeFormatted = y),
      (this.gameTimeSec = g),
      (this.firstOpponentNameEng = T),
      (this.secondOpponentNameEng = B),
      (this.firstOpponentFullScore = C),
      (this.secondOpponentFullScore = b),
      (this.scoreFormatted = K),
      (this.status = k),
      (this.isBlocked = N != null ? N : !1),
      (this.isDepend = M != null ? M : !1),
      (this.expressId = G),
      (this.statisticId = q),
      (this.pageType = Z),
      (this.pageSubType = J),
      (this.broadcastingId = ue),
      (this.isOurRegion = me),
      (this.champCountryId = de),
      (this.isCyber = I),
      (this.menuSectionNameForUrl = ce),
      (this.builderMarkets = Be),
      Se(this);
  }
  get id() {
    return this.market.id;
  }
  get isGameFinished() {
    return this.gameIsFinished || this.gameStatusId === 4;
  }
  get isLocked() {
    return this.isBlocked || this.isDepend;
  }
  get isLive() {
    return (
      !this.isGameFinished &&
      (!!this.gameTimeSec ||
        this.gameIsLiveInLive ||
        this.gameStatusId === 2 ||
        this.gameStatusId === 3)
    );
  }
  get hasStatistic() {
    return !!this.statisticId && vt.includes(this.market.sportId);
  }
  get statusLabel() {
    return At(this.statusId);
  }
  get sportNameForUrl() {
    return Tt({
      sportName: this.market.sportName,
      sportNameEng: this.sportNameEng,
    });
  }
  get gameNameForUrl() {
    return It({
      id: this.market.gameId,
      permanentId: this.isLive ? this.market.gameId : this.gamePermanentId,
      firstOpponentName: this.market.firstOpponentName,
      firstOpponentNameEng: this.firstOpponentNameEng,
      secondOpponentName: this.market.secondOpponentName,
      secondOpponentNameEng: this.secondOpponentNameEng,
      champName: this.market.champName,
      champNameEng: this.champNameEng,
    });
  }
  get champNameForUrl() {
    return Pt({
      champId: this.market.champId,
      champName: this.market.champName,
      champNameEng: this.champNameEng,
    });
  }
}
const aa = (e) => (typeof e == "number" ? parseFloat(e.toFixed(3)) : e),
  sa = (e, t, s) => (typeof t == "number" ? V(t, s) : e),
  oa = (e) => {
    try {
      return JSON.parse(e).Result.map(({ P: t }) => $_$() && t).join(`
`);
    } catch (t) {
      return e;
    }
  },
  is = (e) => {
    const t = e.split(`
`);
    return t.length > 1 ? t : e;
  },
  se = (e, t) =>
    e.events.map((a) => {
      $_$();
      var i, r, n, o, l, u;
      const c = ke(a.event_type_id) && !dt(a.coef),
        d = {
          id: Bt({
            gameId: a.game_id,
            param: a.param,
            typeId: a.event_type_id,
            playerId: 0,
            duelMarketAdditionalId: Ct(a),
          }),
          additionalType: a.game_vid_title,
          name: a.event_type_title,
          groupName: (i = a.event_type_small_group_name) != null ? i : "",
          coef: c ? void 0 : aa(a.coef),
          firstOpponentName: a.opp1_name,
          secondOpponentName: a.opp2_name,
          gameId: a.game_id,
          champId: a.champ_id,
          sportId: a.sport_id,
          kind: a.game_kind,
          sportName: a.sport_name,
          gameName: a.game_name,
          periodName: a.period_name,
          champName: a.champ_name,
          coefByView: c ? Fe : sa(a.coef_view, a.coef, t),
          typeId: a.event_type_id,
          gameType: a.game_type_title,
          groupId: a.groupId,
          param: a.param,
        };
      return new ta({
        market: d,
        blockId: a.block_level,
        statusId: (r = a.result_type) != null ? r : -2,
        sportNameEng: (n = a.sport_name_en) != null ? n : a.sport_name,
        champNameEng: (o = a.champ_name_en) != null ? o : a.champ_name,
        firstOpponentNameEng: (l = a.opp1_name_en) != null ? l : a.opp1_name,
        secondOpponentNameEng: (u = a.opp2_name_en) != null ? u : a.opp2_name,
        scoreFormatted: oa(a.score),
        gameIsFinished: a.is_finished,
        gameIsLiveInLive: a.is_live_game_in_live,
        gamePermanentId: a.const_id,
        gameStatusId: a.game_status,
        gameStartDateTime: a.game_start_date
          ? new Date(a.game_start_date * 1e3)
          : void 0,
        gameTimeSec: a.live_game_time_sec,
        calculatedDateTime: a.calculation_date
          ? new Date(a.calculation_date * 1e3)
          : void 0,
        statisticId: a.statId,
        pageType: a.pageType,
        broadcastingId: a.broadcasting_id,
        isOurRegion: a.is_our_region,
        champCountryId: a.champ_country_id,
        isCyber: a.is_cyber,
      });
    }),
  Ee = (e, t = !1) => {
    $_$();
    var s, a, i, r, n, o, l, u, c;
    const d = t ? "JackpotType" : "TotoType",
      p = t ? "JackpotWord" : "TotoWord",
      m = t ? "" : `${e.TotoName}`;
    return {
      approveId: (s = e.BetApproveId) != null ? s : 0,
      coef: (a = e.Coef) != null ? a : 0,
      coefFormatted:
        (n =
          (r = e.ConvertedCoef) != null
            ? r
            : (i = e.Coef) == null
            ? void 0
            : i.toString()) != null
          ? n
          : "",
      currencyIso: (o = e.CurIso) != null ? o : e.CurISO,
      amount: e.BetSum,
      winAmount: (l = e.WinSum) != null ? l : 0,
      createdAt: R(e.BetDate),
      id: e.CouponNumber,
      isApproved: (u = e.IsApproved) != null ? u : !1,
      isPromo: (c = e.IsPromoBet) != null ? c : !1,
      statusId: e.BetStatus,
      typeId: e[d],
      typeLabel: `${e[p]} ${m}`,
    };
  },
  ia = ({ bets: e, coefViewId: t }, s) => {
    $_$();
    var a;
    return {
      id: s.id,
      bettingId: s.bet_id,
      statusId: s.status,
      coef: s.coef,
      coefByView: V(s.coef, t),
      coefViewId: t,
      typeLabel: s.bet_type_title,
      currencyIso: s.currency_code,
      amount: s.bet_sum,
      cancelReason: (a = s.cancel_reason) != null ? a : void 0,
      createdAt: R(s.date),
      bets: e,
    };
  },
  na = {
    [O.FIFTEEN]: [1, 2, 3],
    [O.SCORE]: [20, 30, 31, 40, 41, 42, 11, 12, 13, 22, 23, 33, 10, 21, 32, 43],
    [O.FOOTBALL]: [1, 2, 3],
    [O.HOCKEY]: [
      20, 30, 31, 40, 41, 42, 50, 51, 52, 53, 60, 61, 62, 63, 64, 11, 12, 13,
      14, 15, 22, 23, 33, 24, 34, 44, 25, 35, 45, 55, 10, 21, 32, 43, 54, 65,
    ],
    [O.BASKETBALL]: [4, 5, 2, 6, 7],
    [O.CYBERSPORT]: [4, 5, 2, 6, 7],
    [O.CRICKET]: [4, 5, 2, 6, 7],
    [O.CYBERFOOTBALL]: [1, 2, 3],
    [O.FREE]: [1, 2, 3],
    [O.JACKPOT]: [1, 2, 3],
  },
  Ne = (e, t = !1) => {
    const s = t ? e.JackpotType : e.TotoType,
      a = na[s],
      i = ![O.SCORE, O.HOCKEY].includes(s),
      r = s !== O.BASKETBALL && !i;
    return e.ChampsWithGames.map((o) =>
      o.GamesList.map((l) => {
        $_$();
        var u, c;
        return {
          gameNumber: l.GameNumber,
          createdAt: R(l.StartDate),
          sportId: l.SportId,
          gameId: l.BukGameId,
          gameName: l.GameName,
          champId: o.ChampId,
          champName: o.ChampName,
          couponId: e.CouponNumber,
          couponTypeId: s,
          statusId: (u = l.UserEventResult) != null ? u : -2,
          firstOpponentName: l.Opponent1Name,
          secondOpponentName: l.Opponent2Name,
          firstOpponentScore: l.Score
            ? parseInt(l.Score.split(":")[0], 10)
            : void 0,
          secondOpponentScore: l.Score
            ? parseInt(l.Score.split(":")[1], 10)
            : void 0,
          scoreFormatted: l.Score,
          isTotal: r,
          totalResult:
            (c = l.StringChosenOutcomes) == null ? void 0 : c.join(", "),
          result: l.Total,
          matrixScore: i
            ? a.map((d) => (l.ChosenOutcomes.includes(d) ? "1" : "0"))
            : [],
          matrixScoreResultIndex: i ? a.indexOf(l.EventResults) + 1 : void 0,
          isFinished: l.IsFinished,
        };
      })
    ).flat();
  },
  ra = (e) => {
    var t, s;
    const [a] = e.Games;
    return {
      couponId: e.BetId,
      firstTeamName: a.G.O1,
      secondTeamName: a.G.O2,
      timeStart: a.G.S,
      currentTime: (t = a.G.SC) == null ? void 0 : t.TS,
      period: (s = a.G.SC) == null ? void 0 : s.CPS,
    };
  },
  la = (e) =>
    ({
      1: "coupon_status_adopted",
      2: "coupon_status_lose",
      3: "coupon_status_win",
      4: "coupon_status_payment",
      5: "coupon_status_delete",
      6: "coupon_status_overdue_payment",
      7: "coupon_status_ban",
      8: "coupon_status_buy",
      9: "coupon_status_pending_acceptance",
      10: "coupon_status_calculated",
    }[e]);
var ua = Object.defineProperty,
  ma = (e, t, s) =>
    t in e
      ? ua(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  S = (e, t, s) => ma(e, typeof t != "symbol" ? t + "" : t, s);
const da = [
  "amount",
  "hasSaleTransactions",
  "isAllowPrint",
  "isAllowSale",
  "saleAmount",
  "saleInfo",
  "autoSaleSum",
  "autosaleStatus",
  "statusId",
];
class ca extends Ot {
  constructor({
    blocks: t,
    createdDateTime: s,
    createdDateTimeFormatted: a,
    hasSaleTransactions: i = !1,
    isAllowEdit: r = !1,
    isAllowPrint: n = !1,
    isAllowRepeat: o = !1,
    isAllowSale: l = !1,
    isPromo: u = !1,
    isPowerBet: c = !1,
    initialAmount: d,
    closedPrepaidAmount: p,
    toPrepaidAmount: m,
    saleAmount: h = 0,
    saleInfo: f,
    autoSaleSum: y,
    autoSaleStatus: g,
    statusId: T = 10,
    tax: B,
    possibleWinAmount: C = 0,
    possiblePayoutSum: b,
    payoutType: K,
    winAmount: k,
    maxPayout: N,
    currencyIso: M,
    currencySymbol: G = "",
    cancelReason: q = "",
    typeLabel: Z = "",
    ...J
  }) {
    super(J),
      S(this, "blocks"),
      S(this, "createdDateTime"),
      S(this, "createdDateTimeFormatted"),
      S(this, "hasSaleTransactions"),
      S(this, "isAllowEdit"),
      S(this, "isAllowPrint"),
      S(this, "isAllowRepeat"),
      S(this, "isAllowSale"),
      S(this, "isPromo"),
      S(this, "initialAmount"),
      S(this, "closedPrepaidAmount"),
      S(this, "toPrepaidAmount"),
      S(this, "saleAmount"),
      S(this, "saleInfo"),
      S(this, "autoSaleSum"),
      S(this, "statusId"),
      S(this, "tax"),
      S(this, "possibleWinAmount"),
      S(this, "possiblePayoutSum"),
      S(this, "payoutType"),
      S(this, "winAmount"),
      S(this, "maxPayout"),
      S(this, "currencyIso"),
      S(this, "currencySymbol"),
      S(this, "cancelReason"),
      S(this, "typeLabel"),
      S(this, "isPowerBet"),
      S(this, "autoSaleStatus"),
      (this.blocks = t),
      (this.createdDateTime = s),
      (this.createdDateTimeFormatted = a),
      (this.hasSaleTransactions = i),
      (this.isAllowEdit = r),
      (this.isAllowPrint = n),
      (this.isAllowRepeat = o),
      (this.isAllowSale = l),
      (this.isPromo = u),
      (this.isPowerBet = c),
      (this.initialAmount = d),
      (this.closedPrepaidAmount = p),
      (this.toPrepaidAmount = m),
      (this.saleAmount = h),
      (this.saleInfo = f),
      (this.autoSaleSum = y),
      (this.autoSaleStatus = g),
      (this.statusId = T),
      (this.tax = B),
      (this.possibleWinAmount = C),
      (this.possiblePayoutSum = b),
      (this.payoutType = K),
      (this.winAmount = k),
      (this.maxPayout = N),
      (this.currencyIso = M),
      (this.currencySymbol = G),
      (this.cancelReason = q),
      (this.typeLabel = Z),
      Se(this, da);
  }
  get cutAmount() {
    return w(this.initialAmount, this.amount);
  }
  get saleCoef() {
    return Q(this.saleAmount, this.cutAmount);
  }
  get saleCoefByView() {
    return V(this.saleCoef, this.coefViewId);
  }
  get winCoef() {
    return Q(this.winAmount, this.amount);
  }
  get winCoefByView() {
    return V(this.winCoef, this.coefViewId);
  }
  get isCanRepeat() {
    return !!(this.isAllowRepeat && !this.hasSpecialCoef && !this.hasBonus);
  }
  get isCanEdit() {
    return !!(this.isAllowEdit && !this.hasSpecialCoef && !this.hasBonus);
  }
  get isCanSale() {
    return !!(this.isAllowSale && !this.hasSpecialCoef && this.saleInfo);
  }
  get statusLabel() {
    return la(this.statusId);
  }
  sell(t = 0, s = this.initialAmount) {
    t ||
      ((this.statusId = 8), (this.isAllowPrint = !1), (this.isAllowSale = !1)),
      (this.amount = t),
      (this.saleAmount = s),
      (this.hasSaleTransactions = !0);
  }
}
const pa = (e) => (Number.isNaN(parseFloat(e)) ? e : parseFloat(e)),
  _a = (e, t, s) => (Number.isNaN(parseFloat(e)) ? t : V(parseFloat(e), s)),
  ha = (e, t) =>
    Et({
      gameId: e.id_game,
      groupId: e.id_group,
      playerId: e.id_player,
      sportId: e.id_sport,
      subSportId: e.subSportId,
      typeId: e.type,
      firstOpponentName: e.opp1,
      secondOpponentName: e.opp2,
      opponents: e.opp,
      coef: pa(e.coef),
      coefByView: _a(e.coef, e.coef_text, t),
      param: e.dopv,
      kind: e.direction,
      name: e.bet_name,
      champName: e.champ_name,
      sportName: e.sport_name,
      groupName: e.group_name,
      gameName: e.period,
      gameType: e.gameType,
      champId: e.champId,
    }),
  ya = (e, t, s) => {
    var a, i, r;
    return new Nt({
      additionalType: e.GameVid,
      blockId: (a = e.level) != null ? a : s + 1,
      statusId: (i = e.eventStatus) != null ? i : -2,
      type: e.type,
      scoreFormatted: (r = e.score) != null ? r : void 0,
      market: ha(e, t),
      sportNameEng: e.sportNameEn,
      champNameEng: e.champNameEn,
      firstOpponentNameEng: e.opp1NameEn,
      secondOpponentNameEng: e.opp2NameEn,
    });
  },
  Sa = (e, t) => {
    $_$();
    const s = e.bets.map((n, o) => ya(n, t, o)),
      a = e.bets.map((n) => ({
        id: n.level,
        coef: n.level_coef,
        amount: n.level_summa,
      })),
      r = ct(a.map(({ id: n }) => n).filter((n) => typeof n == "number")).map(
        (n) => ({
          ...a.find((o) => o.id === n),
          bets: s.filter((o) => o.blockId === n),
        })
      );
    return { bets: s, blocks: r };
  },
  fa = (e, t, s) => {
    $_$();
    var d, p;
    const { bets: a, blocks: i } = Sa(t, s),
      {
        typeId: r,
        systemValue: n,
        systemOffset: o,
      } = ge(
        ve.includes(t.info.vid) ? t.info.system_type : t.info.vid,
        a.length
      ),
      l = t.info.amount ? parseFloat(t.info.amount) : void 0,
      u = (s === 0 && parseFloat(t.info.coef_res)) || 0,
      c =
        (d = t.info.possibleWinSum) != null ? d : u !== void 0 ? X(z(l, u)) : 0;
    return new ca({
      id: parseInt(e, 10),
      amount: l,
      initialAmount: t.info.amount
        ? X(parseFloat(t.info.amount) + t.info.sum_cut)
        : void 0,
      bets: a,
      blocks: i,
      coef: u,
      coefByView: t.info.coef_res,
      createdDateTimeFormatted: t.info.date,
      gameId: t.info.id_game,
      isAllowEdit: t.info.allow_edit,
      isAllowPrint: !0,
      isAllowRepeat: t.info.allow_repeat,
      isAllowSale: t.info.allow_sale,
      isPowerBet: t.info.isPowerBet,
      sportId: t.info.id_sport,
      statusId: t.info.status,
      systemOffset: o,
      systemValue: n,
      tax: t.info.sum_cut,
      typeId: r,
      currencyIso: t.info.currencyIso,
      currencySymbol: t.info.currencySymbol,
      possibleWinAmount: c,
      possiblePayoutSum: t.info.possiblePayoutSum,
      payoutType: (p = t.info.payoutType) != null ? p : 0,
      maxPayout: t.info.maxPayout,
      prepaidAmount: t.info.summ_prepayment,
    });
  },
  ga = (e) => {
    if (e.bet_sum) return e.bet_sum;
    if (e.sum) return e.old_sale_sum ? w(e.sum, e.old_sale_sum) : e.sum;
  },
  va = (e, t, s, a) => {
    const i = e.betTaxPercent > 0,
      r = e.payoutTaxPercent > 0,
      n = i || r,
      { hasReturnTax: o } = e,
      l = i && t > 0,
      u = l ? Q(z(t, 100), xt(100, e.betTaxPercent)) : t,
      c = w(t, u),
      d = z(u, s),
      p = a ? Math.min(a, d) : d,
      m = w(p, t),
      h = r && p > e.winAmountThreshold && s > e.coefThreshold,
      f = l || h,
      y = h
        ? e.taxType === 1
          ? z(p, Q(e.payoutTaxPercent, 100))
          : Math.max(z(m, Q(e.payoutTaxPercent, 100)), 0)
        : 0,
      g = o ? p : w(p, y),
      T = w(g, t);
    return {
      amountAfterBetTax: u,
      betTaxAmount: c,
      hasBetTaxes: i,
      hasPayoutTaxes: r,
      hasTaxes: n,
      isBetTaxable: l,
      isPayoutTaxable: h,
      isTaxable: f,
      payoutTaxAmount: y,
      profitAfterBetTax: m,
      profitAfterPayoutTax: T,
      winAmountAfterBetTax: p,
      winAmountAfterPayoutTax: g,
    };
  },
  $ = () => ({ name: "", value: 0 }),
  Aa = () => ({
    sumAfterTax: $(),
    vat: $(),
    payout: $(),
    tax: $(),
    taxRefund: $(),
    potentialWinning: $(),
  }),
  Ta = (e) => {
    const t = Aa();
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s)) {
        const a = s;
        e[a] && (t[a] = e[a]);
      }
    return t;
  },
  Ia = (e, t, s) => {
    if (typeof e.coef == "number") return V(e.coef, s);
    if (t.some(({ market: a }) => ke(a.typeId) || a.coef === void 0)) return Fe;
  },
  he = (e, t, s, a, i, r) => {
    $_$();
    var n, o, l, u, c, d, p;
    const {
        typeId: m,
        systemValue: h,
        systemOffset: f,
      } = ge(ve.includes(t.type) ? t.system_type : t.type, s.length),
      y = (n = t.coef) != null ? n : void 0,
      g = ga(t),
      T = va(e, g != null ? g : 0, y != null ? y : 0, t.max_payout),
      B = y !== void 0 ? t.possible_win_sum || g * y : void 0,
      C = B !== void 0 ? T.winAmountAfterBetTax : void 0,
      b =
        B !== void 0
          ? (o = t.possible_win_sum_with_tax) != null
            ? o
            : T.winAmountAfterPayoutTax
          : void 0,
      K = !y && t.possible_win_sum ? t.possible_win_sum : void 0,
      k = (l = t.win_sum) != null ? l : void 0,
      N = k !== void 0 ? T.winAmountAfterBetTax : void 0,
      M =
        k !== void 0
          ? (u = t.win_sum_with_tax) != null
            ? u
            : T.winAmountAfterPayoutTax
          : void 0,
      G = t.max_sum_increasing_request_status || void 0;
    return {
      autoSaleSum: t.auto_sale_sum,
      autoSaleStatus: t.auto_sale_status,
      saleInfo: void 0,
      accountId: r,
      possibleWinAmount: B,
      possibleWinAmountAfterBetTax: C,
      possibleWinAmountAfterPayoutTax: b,
      maxPossibleWinAfterMaxPayout: K,
      statusId: t.status,
      createdAt: R(t.date),
      hasSaleTransactions: t.can_show_sale_logs,
      isCanPrint: t.can_print,
      isCanSale: t.can_sell,
      isPromo: t.is_used_promo_code,
      isPowerBet: t.isPowerBet,
      blocks: a,
      id: t.id,
      amount: g,
      initialAmount: t.sum,
      bets: s,
      cashoutSum: t.cashout_sum,
      coef: y,
      coefByView: Ia(t, s, i),
      coefViewId: i,
      prepaidAmount: t.prepayment_sum || void 0,
      closedPrepaidAmount: t.closed_prepayment_sum || void 0,
      toPrepaidAmount: t.to_prepayment_sum || void 0,
      saleAmount: t.out_sum || void 0,
      systemOffset: f,
      systemValue: h,
      typeId: m,
      winAmount: k,
      winAmountAfterBetTax: N,
      winAmountAfterPayoutTax: M,
      vipBetStatus: G,
      currencyIso: t.currency_code,
      maxPayout: t.max_payout,
      taxBet: Ta((c = t.taxBet) != null ? c : {}),
      possiblePayoutSum:
        (d = t.possible_payout_sum) != null ? d : t.possiblePayoutSum,
      payoutType: (p = t.payout_type) != null ? p : t.payoutType,
      organizer: t.organizer,
      qrLink: t.qr_link,
    };
  },
  ye = (e, t, s) => {
    const { typeId: a } = ge(
      ve.includes(e.type) ? e.system_type : e.type,
      t.length
    );
    return bt.includes(a)
      ? e.events.reduce((r, n) => {
          var o;
          return (
            r.find(({ id: l }) => l === n.block_level) ||
              r.push({
                amount: (o = n.block_sum) != null ? o : void 0,
                coef: n.block_coef,
                coefByView: V(n.block_coef, s),
                coefViewId: s,
                couponId: e.id,
                couponTypeId: a,
                id: n.block_level,
                result: n.block_result,
                bets: t.filter((l) => l.blockId === n.block_level),
              }),
            r
          );
        }, [])
      : void 0;
  },
  Pa = { 7: !0, 5: !0, 8: !0 },
  Ba = { 3: !0, 4: !0, 5: !0 },
  xe = {
    1: (e, t) => {
      if ((e == null ? void 0 : e.champNameEng) === Ce.BONUS) return 1;
      if ((t == null ? void 0 : t.champNameEng) === Ce.BONUS) return -1;
      if (
        e != null &&
        e.gameStartDateTime &&
        t != null &&
        t.gameStartDateTime
      ) {
        const s = new Date(e.gameStartDateTime),
          a = new Date(t.gameStartDateTime);
        return s.getTime() - a.getTime();
      }
      return -1;
    },
    3: (e, t) => {
      var s, a, i;
      return (
        (i = (s = e == null ? void 0 : e.market) == null ? void 0 : s.coef) !=
        null
          ? i
          : (a = t == null ? void 0 : t.market) != null && a.coef
      )
        ? Number(t.market.coef) - Number(e.market.coef)
        : -1;
    },
    4: (e, t) =>
      e != null && e.statusId && t != null && t.statusId
        ? e.statusId - t.statusId
        : -1,
  },
  Ca = (e, t) => {
    e &&
      !(e.statusId in Pa) &&
      !(e.typeId in Ba) &&
      t in xe &&
      e.bets.sort(xe[t]);
  },
  Oa = (e, t) => {
    var s, a, i, r;
    return {
      additional_game_info: "",
      block_coef: e.BlockCoef,
      block_level: e.BlockLevel,
      block_result: e.BlockResult,
      block_sum: e.BlockSum,
      calculation_date: e.BetEventSettlingDate,
      champ_id: e.ChampId,
      champ_image: e.ChampImage,
      champ_name: e.ChampName,
      champ_name_en: e.ChampNameEng,
      coef: e == null ? void 0 : e.Coef,
      coef_view:
        (s = e == null ? void 0 : e.Coef) == null ? void 0 : s.toString(),
      const_id: e.ConstGameId,
      event_type_id: e.EventTypeId,
      event_type_small_group_id: e.EventTypeSmallGroupId,
      event_type_small_group_name: e.EventTypeSmallGroupName,
      event_type_title: e.EventTypeName,
      groupId: e.GroupId,
      game_id: e.GameId,
      game_kind: e.GameKind,
      game_name: e.GameName,
      game_start_date: e.StartDate,
      game_status: e.GameStatus,
      game_type_title: e.GameTypeName,
      game_vid_title: e.GameVidName,
      has_translation: !1,
      is_cyber: (a = e.isCyber) != null ? a : !1,
      is_finished: e.IsFinished,
      is_home_away_game: e.IsHomeAwayGame,
      is_live_game_in_live: e.IsLiveGameInLive,
      is_score_json: e.IsScoreJson,
      live_game_time_sec: e.LiveGameTimeInSeconds,
      main_game_id: e.MainGameId,
      opp1_id: e.Opp1Id,
      opp1_images: e.Opp1Images,
      opp1_name: e.Opp1Name,
      opp1_name_en: e.Opp1NameEng,
      opp2_id: e.Opp2Id,
      opp2_images: e.Opp2Images,
      opp2_name: e.Opp2Name,
      opp2_name_en: e.Opp2NameEng,
      param: e.Param,
      period_name: e.PeriodName,
      player_name: t.PlayerName,
      result_type: e.Result,
      returned_bet_event_reason_name: e.ReturnedBetEventReasonName,
      returned_bet_event_status_id: void 0,
      returned_bet_event_status_name: e.ReturnedBetEventStatusName,
      score: e.Score,
      sport_id: (i = e.Sport) != null ? i : 0,
      sport_name: e.SportName,
      sport_name_en: e.SportNameEng,
      statId: e.StatId,
      broadcasting_id: e.Broadcasting,
      is_our_region: (r = e.IsOurRegion) != null ? r : !1,
      champ_country_id: e.ChampCountry,
    };
  },
  Ea = (e) => {
    var t, s, a, i, r, n, o, l, u, c, d, p;
    if (!e) return;
    const m = {};
    return (
      e != null &&
        e.Payout &&
        (m.payout = {
          name: (t = e == null ? void 0 : e.Payout) == null ? void 0 : t.Name,
          value: (s = e == null ? void 0 : e.Payout) == null ? void 0 : s.Value,
        }),
      e != null &&
        e.PotentialWinning &&
        (m.potentialWinning = {
          name:
            (a = e == null ? void 0 : e.PotentialWinning) == null
              ? void 0
              : a.Name,
          value:
            (i = e == null ? void 0 : e.PotentialWinning) == null
              ? void 0
              : i.Value,
        }),
      e != null &&
        e.SumAfterTax &&
        (m.sumAfterTax = {
          name:
            (r = e == null ? void 0 : e.SumAfterTax) == null ? void 0 : r.Name,
          value:
            (n = e == null ? void 0 : e.SumAfterTax) == null ? void 0 : n.Value,
        }),
      e != null &&
        e.Tax &&
        (m.tax = {
          name: (o = e == null ? void 0 : e.Tax) == null ? void 0 : o.Name,
          value: (l = e == null ? void 0 : e.Tax) == null ? void 0 : l.Value,
        }),
      e != null &&
        e.TaxRefund &&
        (m.taxRefund = {
          name:
            (u = e == null ? void 0 : e.TaxRefund) == null ? void 0 : u.Name,
          value:
            (c = e == null ? void 0 : e.TaxRefund) == null ? void 0 : c.Value,
        }),
      e != null &&
        e.VAT &&
        (m.vat = {
          name: (d = e == null ? void 0 : e.VAT) == null ? void 0 : d.Name,
          value: (p = e == null ? void 0 : e.VAT) == null ? void 0 : p.Value,
        }),
      m
    );
  },
  Na = (e) => {
    var t;
    return {
      auto_sale_status: e == null ? void 0 : e.AutoSaleStatus,
      auto_sale_sum: e == null ? void 0 : e.AutoSaleSum,
      can_be_returned: !1,
      can_print: e.CanPrint,
      can_sell: e.CanSell,
      can_show_sale_logs: e.HasSaleTransactions,
      cashout_sum: e == null ? void 0 : e.CashoutSum,
      closed_prepayment_sum: e == null ? void 0 : e.ClosedPrepaymentSum,
      coef: e.Coef,
      coef_view: e.CoefView,
      currency_code: e.CurrencyCode,
      date: e.BetDate,
      events: e.Events.map((a) => Oa(a, e)),
      formatted_system_type: e.FormattedBetSystemType,
      has_alternative_info: !1,
      id: e.BetId,
      is_used_promo_code:
        (t = e == null ? void 0 : e.ByPromoCode) != null ? t : !1,
      max_payout: e == null ? void 0 : e.MaxPayout,
      max_sum_increasing_request_status: e.MaxSumIncreasingRequestStatus,
      out_sum: e.OutSum,
      old_sale_sum: e.OldSaleSum,
      payout_sum: e.PayoutSum,
      possible_win_sum: e == null ? void 0 : e.PossibleWinSum,
      possible_win_sum_with_tax: e == null ? void 0 : e.PossiblePayoutSum,
      possible_payout_sum: e == null ? void 0 : e.PossiblePayoutSum,
      payout_type: e == null ? void 0 : e.PayoutType,
      prepayment_sum: e == null ? void 0 : e.PrepaymentSum,
      status: e.BetStatus,
      sum: e.BetSum,
      system_type: e.BetSystemType,
      taxBet: Ea(e.TaxBet),
      to_prepayment_sum: e.ToPrepaymentSum,
      type: e.BetTypeId,
      type_title: e.BetTypeName,
      win_sum: e.BetStatus === 4 ? e.WinSum : void 0,
      win_sum_with_tax: e.BetStatus === 4 ? e.PayoutSum : void 0,
      isPowerBet: e == null ? void 0 : e.IsPowerBet,
      vipBetStatus: e == null ? void 0 : e.MaxSumIncreasingRequestStatus,
      organizer: e == null ? void 0 : e.Organizer,
      qr_link: e == null ? void 0 : e.QrLink,
    };
  },
  xa = ({
    coupons: e,
    coefViewId: t,
    accountId: s,
    bettingTaxes: a,
    withSaleInfo: i,
  }) =>
    e
      .map((o) => {
        var l, u, c, d, p, m;
        return {
          BetDate: o.BetDate,
          BetId: o.BetId,
          BetSum: o.BetSum,
          PayoutSum: (l = o == null ? void 0 : o.PayoutSum) != null ? l : 0,
          BetStatus: o.BetStatus,
          BetSystemType: o.BetSystemType,
          BetTypeId: (u = o.BetTypeId) != null ? u : 0,
          BetTypeName: o.BetTypeName,
          BetTypeNameRus: o.BetTypeNameRus,
          Coef: o.Coef,
          CoefView: o.CoefView,
          CurrencyCode: o.CurrencyCode,
          Events: o.Events,
          BetSettlingDate: o == null ? void 0 : o.BetSettlingDate,
          TaxBet: o == null ? void 0 : o.TaxBet,
          CanPrint: o.CanPrint,
          CanSell: o.CanSell,
          HasSaleTransactions: (c = o.HasSaleTransactions) != null ? c : !1,
          ToPrepaymentSum: o == null ? void 0 : o.ToPrepaymentSum,
          PrepaymentSum:
            (d = o == null ? void 0 : o.PrepaymentSum) != null ? d : 0,
          ClosedPrepaymentSum:
            (p = o == null ? void 0 : o.ClosedPrepaymentSum) != null ? p : 0,
          ByPromoCode: o == null ? void 0 : o.ByPromoCode,
          WinSum: o == null ? void 0 : o.WinSum,
          OutSum: o == null ? void 0 : o.OutSum,
          OldSaleSum: o == null ? void 0 : o.OldSaleSum,
          AutoSaleSum: o == null ? void 0 : o.AutoSaleSum,
          AutoSaleStatus: o == null ? void 0 : o.AutoSaleStatus,
          CashoutSum: o == null ? void 0 : o.CashoutSum,
          MaxSumIncreasingRequestStatus:
            o == null ? void 0 : o.MaxSumIncreasingRequestStatus,
          BetSaleInfo: o == null ? void 0 : o.BetSaleInfo,
          IsPowerBet: o == null ? void 0 : o.IsPowerBet,
          MaxPayout: o == null ? void 0 : o.MaxPayout,
          PossiblePayoutSum: o == null ? void 0 : o.PossiblePayoutSum,
          PossibleWinSum: o == null ? void 0 : o.PossibleWinSum,
          PayoutType: (m = o == null ? void 0 : o.PayoutType) != null ? m : 0,
          Organizer: o == null ? void 0 : o.Organizer,
          QrLink: o == null ? void 0 : o.QrLink,
        };
      })
      .map((o) => {
        var l, u, c, d, p, m, h, f, y;
        const g = Na(o),
          T = se(g, t),
          B = ye(g, T, t),
          C = he(a, g, T, B, t, s);
        return (
          B || Ca(C, 1),
          i &&
            (C.saleInfo = new _e({
              couponId: o.BetId,
              availableBetAmount:
                (l = o.BetSaleInfo) == null ? void 0 : l.AvailableBetSum,
              hasAutoSaleOrder:
                (u = o.BetSaleInfo) == null ? void 0 : u.HasOrder,
              limitAmountPartSale:
                ((c = o.BetSaleInfo) == null ? void 0 : c.PartSaleLimitSum) ||
                0,
              maxAutoSaleOrder:
                (d = o.BetSaleInfo) == null ? void 0 : d.MaxAutoSaleOrder,
              maxSaleAmount:
                (p = o.BetSaleInfo) == null ? void 0 : p.MaxSaleSum,
              minAutoSaleOrder:
                (m = o.BetSaleInfo) == null ? void 0 : m.MinAutoSaleOrder,
              minBetAmount: (h = o.BetSaleInfo) == null ? void 0 : h.MinBetSum,
              minSaleAmount:
                (f = o.BetSaleInfo) == null ? void 0 : f.MinSaleSum,
              elevateInfo: (y = o.BetSaleInfo) == null ? void 0 : y.ElevateInfo,
            })),
          C
        );
      });
class ba {
  constructor(t, s, a, i) {
    (this.amount = t),
      (this.date = s),
      (this.couponAmount = a),
      (this.couponAmountCut = i),
      Se(this);
  }
}
const ka = (e) =>
    $_$() &&
    new ba(X(e.sum), R(e.timestamp), X(e.sum_after_sale), X(e.sum_cut)),
  Fa = (e) => e.map(ka),
  La = A(
    v({
      url: "/web-api/api/internal/v1/betHistory/cancelAutobetHistoryById",
      method: "POST",
      expectedParams: { ...F({ apiKey: U }), ...Ae() },
    })
  ),
  Ka = A(
    v({
      url: "/web-api/api/internal/v1/betHistory/getAutobetHistory",
      method: "POST",
      expectedParams: {
        ...F({ apiKey: U }),
        ...L({ apiKey: ne, defaultValue: null }),
        couponStatusIds: Ft,
        timestampFrom: te,
        timestampTo: ee,
        ...W({ apiKey: le }),
      },
    })
  ),
  Ma = A(
    v({
      url: "/web-api/datalinelive/couponprice",
      method: "GET",
      expectedParams: { multi: Lt, ...F() },
    })
  ),
  Ha = A(
    v({
      url: "/web-api/toto-api-v2/jackpotweb/v1/coupons",
      method: "GET",
      isUseXAuth: !0,
      expectedUrlParams: { couponId: Ke },
      expectedParams: { curIso: Ut, ...L({ apiKey: re, defaultValue: null }) },
    })
  ),
  Da = A(
    v({
      url: "/web-api/toto-api-v2/jackpotweb/v1/account",
      method: "GET",
      isUseXAuth: !0,
      expectedUrlParams: { ...F() },
      expectedParams: {
        ...D({ key: ie }),
        ...D({ key: oe }),
        jackpotTypes: Vt,
        ...Gt({ defaultValue: null }),
        ...L({ apiKey: re, defaultValue: null }),
        notCalc: Le,
        ...fe(),
      },
    })
  ),
  Ga = A(
    v({
      url: "/web-api/datalinelive/lastcoupons?isFinance=0&isEdit=1",
      method: "GET",
    })
  ),
  Va = A(
    v({
      url: "/web-api/api/toto/proxy/coupon",
      method: "GET",
      isUseXAuth: !0,
      expectedUrlParams: { couponId: Ke },
      expectedParams: { ...L({ apiKey: re, defaultValue: null }) },
    })
  ),
  Ua = A(
    v({
      url: "/web-api/api/toto/proxy/getHistory",
      method: "GET",
      expectedParams: {
        ...F(),
        ...D({ key: ie }),
        ...D({ key: oe }),
        totoTypes: Wt,
        ...W({ apiKey: Yt }),
        ...L({ apiKey: re, defaultValue: null }),
        notCalc: Le,
      },
    })
  );
A(
  v({
    url: "/web-api/datalinelive/insurancebet",
    method: "POST",
    expectedParams: { sum: Zt, betId: wt, percent: $t },
  })
);
const Wa = A(
    v({
      url: "/web-api/datalinelive/removeautosale",
      method: "POST",
      expectedParams: { bet: kt },
    })
  ),
  qa = A(
    v({
      url: "/web-api/datalinelive/salecoupon",
      method: "POST",
      expectedParams: {
        ...pt(),
        newSumCoupon: Dt,
        sumSale: Ht,
        order: Mt,
        betGuid: Kt,
      },
    })
  ),
  Ya = A(
    v({
      url: "/bethistory-api/Web/GetBetInfoHistoryByBetIds",
      method: "POST",
      isUseXAuth: !0,
      expectedParams: {
        CfView: pe({ key: "CfView", apiKey: "CfView" }),
        BetIds: yt({ key: "BetIds", apiKey: "BetIds" }),
        BonusUserId: pe({ key: "BonusUserId", apiKey: "BonusUserId" }),
        Language: ht({ key: "Language", apiKey: "Language" }),
        PartnerGroupId: pe({ key: "PartnerGroupId", apiKey: "PartnerGroupId" }),
        CalculateSaleInfo: _t({
          key: "CalculateSaleInfo",
          apiKey: "CalculateSaleInfo",
        }),
      },
    })
  ),
  $a = A(
    v({
      url: "/web-api/api/internal/v1/betHistory/deleteBetHistoryById",
      method: "POST",
      expectedParams: { ...F({ apiKey: U }), ...Ae() },
    })
  ),
  wa = A(
    v({
      url: "/web-api/api/internal/v1/betHistory/deleteBetHistoryByPeriod",
      method: "POST",
      expectedParams: {
        ...F({ apiKey: U }),
        timestampFrom: te,
        timestampTo: ee,
      },
    })
  ),
  Za = A(
    v({
      url: "/bethistory-api/Web/GetBetInfoHistoryWithSummaryByDates",
      method: "POST",
      isUseXAuth: !0,
      expectedParams: {
        ...D({ key: ie, apiKey: ot }),
        ...D({ key: oe, apiKey: st }),
        ...L({ apiKey: at, defaultValue: null }),
        ...ae({ apiKey: ut }),
        betStatuses: je,
        ...W({ apiKey: lt }),
        ...Je({ apiKey: tt }),
        ...Ze({ apiKey: et }),
        ...we({ apiKey: Re }),
        ...fe({ apiKey: Qe, defaultValue: null }),
        ...$e({ apiKey: Xe }),
        lastBetId: Ye,
        calculateSaleInfo: qe,
        feedType: We,
        byBetSettlingDates: Ue,
        onlyBetsForSale: Ve,
        useArchive: Ge,
        ...Ie({ apiKey: rt, defaultValue: null }),
        calculateSummaryInfo: De,
        betsWithAutoSaleOrder: He,
        ...Me({ apiKey: ze }),
      },
    })
  ),
  Ja = A(
    v({
      url: "/bethistory-api/Web/GetBetInfoHistoryWithSummaryByGlobalChamp",
      method: "POST",
      isUseXAuth: !0,
      expectedParams: {
        ...D({ key: ie, apiKey: ot }),
        ...D({ key: oe, apiKey: st }),
        ...L({ apiKey: at, defaultValue: null }),
        ...ae({ apiKey: ut }),
        betStatuses: je,
        ...W({ apiKey: lt }),
        ...Je({ apiKey: tt }),
        ...Ze({ apiKey: et }),
        ...we({ apiKey: Re }),
        ...fe({ apiKey: Qe, defaultValue: null }),
        ...$e({ apiKey: Xe }),
        lastBetId: Ye,
        calculateSaleInfo: qe,
        feedType: We,
        byBetSettlingDates: Ue,
        onlyBetsForSale: Ve,
        useArchive: Ge,
        ...Ie({ apiKey: rt, defaultValue: null }),
        calculateSummaryInfo: De,
        betsWithAutoSaleOrder: He,
        ...Me({ apiKey: ze }),
      },
    })
  ),
  ja = A(
    v({
      url: "/web-api/api/internal/v1/betHistory/getchampionsinfo",
      method: "GET",
    })
  ),
  za = A(
    v({
      url: "/web-api/api/internal/v1/betHistory/getKassaBetHistoryList",
      method: "POST",
      expectedParams: {
        timestampFrom: te,
        timestampTo: ee,
        ...F({ apiKey: U }),
        ...L({ apiKey: ne, defaultValue: null }),
        feedTypes: Te,
        betCommonStatuses: nt,
        ...ae({ apiKey: Pe }),
        isCalculatedDateType: it,
        ...W({ apiKey: le }),
      },
    })
  ),
  Xa = A(
    v({
      url: "/web-api/api/internal/v1/betHistory/getSaleTransactions",
      method: "POST",
      expectedParams: { ...Ae({ apiKey: Jt }), couponSum: qt },
    })
  ),
  Qa = A(
    v({
      url: "/web-api/api/internal/v1/betHistory/getUncalculatedBetHistoryListFilterable",
      method: "POST",
      expectedParams: {
        ...F({ apiKey: U }),
        ...L({ apiKey: ne, defaultValue: null }),
        ...ae({ apiKey: Pe }),
        ...W({ apiKey: le }),
        feedTypes: Te,
        timestampFrom: te,
        timestampTo: ee,
      },
    })
  ),
  Ra = A(
    v({
      url: "/web-api/api/internal/v1/betHistory/sendBetHistoryToEmail",
      method: "POST",
      expectedParams: {
        timestampFrom: te,
        timestampTo: ee,
        ...F({ apiKey: U }),
        ...L({ apiKey: ne, defaultValue: null }),
        feedTypes: Te,
        betCommonStatuses: nt,
        ...ae({ apiKey: Pe }),
        ...W({ apiKey: le }),
        isCalculatedDateType: it,
        ...Ie({ apiKey: jt, defaultValue: null }),
      },
    })
  );
var es = Object.defineProperty,
  ts = (e, t, s) =>
    t in e
      ? es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  j = (e, t, s) => ts(e, typeof t != "symbol" ? t + "" : t, s);
const as = 300;
class ns {
  constructor(t) {
    j(this, "httpModule"),
      j(this, "clientHeaders"),
      j(this, "cookies"),
      j(this, "logger"),
      j(this, "config"),
      (this.httpModule = t.$httpModule),
      (this.clientHeaders = t.$clientHeaders),
      (this.cookies = t.$cookies),
      (this.logger = t.$logger),
      (this.config = t.config);
  }
  async cancelCouponAutoSale(t) {
    $_$();
    let s, a;
    const i = { bet: t.id },
      r = (([s, a] = P(() => this.doRequest(Wa(), i))), (s = await s), a(), s);
    return { success: r.Success, error: r.ErrorCode ? r.Error : void 0 };
  }
  async getCouponsExact({
    accountId: t,
    coefViewId: s,
    couponStatusIds: a,
    dateFrom: i,
    dateTo: r,
    sortBy: n,
  }) {
    $_$();
    var o;
    let l, u;
    const c = {
        accountId: t,
        coefViewId: s,
        couponStatusIds: a,
        timestampFrom: E(i),
        timestampTo: E(r),
        sortBy: n,
      },
      {
        success: d,
        error: p,
        data: m,
      } = (([l, u] = P(() => this.doRequest(Ka(), c))), (l = await l), u(), l),
      h =
        (o = m.bets) == null
          ? void 0
          : o.map((f) => {
              const y = se(f, s);
              return ia({ bets: y, coefViewId: s }, f);
            });
    return { success: d, error: p, parsedCoupons: h };
  }
  async cancelCouponOrderExact({ accountId: t, couponId: s }) {
    const a = { accountId: t, id: s };
    return this.doRequest(La(), a);
  }
  async getCouponsOpened({ coefViewId: t }) {
    $_$();
    let s, a;
    const i =
      (([s, a] = P(() => this.doRequest(Ga(), {}))), (s = await s), a(), s);
    if (i.data === "empty_fields")
      return { data: { coupons: [] }, success: !0 };
    if (!i.success || !(i != null && i.data))
      return (
        this.logger.error("getCoupons error", i), { data: void 0, success: !1 }
      );
    const { currency: r, currencySymbol: n = "" } = i.data;
    return {
      data: {
        coupons: Object.entries(i.data.coupons).map(
          ([l, u]) => (
            (u.info.currencyIso = r), (u.info.currencySymbol = n), fa(l, u, t)
          )
        ),
      },
      success: !0,
    };
  }
  async getCouponSaleInfos({ accountId: t, abortController: s }) {
    $_$();
    let a, i;
    const r = { multi: !0, accountId: t },
      n =
        (([a, i] = P(() => this.doRequest(Ma(), r, s))), (a = await a), i(), a);
    if (!(n != null && n.Success)) return { data: void 0, success: !1 };
    const o = n.Value.map(
        (u) =>
          new _e({
            couponId: u.BetId,
            availableBetAmount: u.SaleBetInfo.AvailableBetSum,
            hasAutoSaleOrder: u.SaleBetInfo.HasOrder,
            limitAmountPartSale: u.SaleBetInfo.LimitSumPartSale,
            maxAutoSaleOrder: u.SaleBetInfo.MaxAutoSaleOrder,
            maxSaleAmount: u.SaleBetInfo.MaxSaleSum,
            minAutoSaleOrder: u.SaleBetInfo.MinAutoSaleOrder,
            minBetAmount: u.SaleBetInfo.MinBetSum,
            minSaleAmount: u.SaleBetInfo.MinSaleSum,
            currentAutoSaleAmount: u.SaleBetInfo.CurrentAutoSaleOrder,
            elevateInfo: u.SaleBetInfo.ElevateInfo,
          })
      ),
      l = n.Value.map((u) => ra(u));
    return { data: { couponSaleInfos: o, couponGamesInfo: l }, success: !0 };
  }
  async saleCoupon(t) {
    $_$();
    var s;
    let a, i;
    const r = {
        id: t.couponId,
        newSumCoupon: (s = t.newCouponAmount) != null ? s : 0,
        sumSale: t.amount,
        order: t.order,
        betGuid: t.guid,
      },
      n = (([a, i] = P(() => this.doRequest(qa(), r))), (a = await a), i(), a);
    return {
      data: n.Value
        ? {
            accountId: n.UserId,
            accountMoney: n.Balance,
            guid: n.Value.betGUID,
            waitTime: n.Value.waitTime,
            amount: t.amount,
            isOrder: t.order !== void 0,
            couponSaleInfo: new _e({
              couponId: t.couponId,
              availableBetAmount: n.Value.AvailableBetSum,
              hasAutoSaleOrder: n.Value.HasOrder || t.order !== void 0,
              limitAmountPartSale: n.Value.LimitSumPartSale,
              maxAutoSaleOrder: n.Value.MaxAutoSaleOrder,
              maxSaleAmount: n.Value.MaxSaleSum,
              minAutoSaleOrder: n.Value.MinAutoSaleOrder,
              minBetAmount: n.Value.MinBetSum,
              minSaleAmount: n.Value.MinSaleSum,
              currentAutoSaleAmount: n.Value.SaleSum,
            }),
          }
        : void 0,
      success: n.Success,
      error: n.Success ? void 0 : { code: n.ErrorCode, message: n.Error },
    };
  }
  async getCouponsJackpotToto({
    accountId: t,
    coefViewId: s,
    dateFrom: a,
    dateTo: i,
    isNotCalculated: r,
    sortBy: n,
    typeIds: o,
    lng: l,
  }) {
    $_$();
    var u, c;
    let d, p;
    const m = {
      accountId: t,
      dateFrom: E(a),
      dateTo: E(i),
      typeIds: o,
      sortBy: n,
      coefViewId: s,
      notCalc: r ? 1 : void 0,
      lng: l,
    };
    return {
      success: !0,
      error: void 0,
      coupons:
        (c =
          (u = (([d, p] = P(() => this.doRequest(Da(), m))),
          (d = await d),
          p(),
          d).BetsList) == null
            ? void 0
            : u.map((y) => Ee(y, !0))) != null
          ? c
          : [],
    };
  }
  async getBetsJackpotToto({ coefViewId: t, couponId: s, curIso: a }) {
    $_$();
    let i, r;
    const n = { curIso: a, coefViewId: t, couponId: s },
      o = (([i, r] = P(() => this.doRequest(Ha(), n))), (i = await i), r(), i);
    return { success: !0, error: void 0, bets: Ne(o, !0) };
  }
  async getCouponsToto({
    accountId: t,
    coefViewId: s,
    dateFrom: a,
    dateTo: i,
    isNotCalculated: r,
    sortBy: n,
    typeIds: o,
  }) {
    $_$();
    var l, u;
    let c, d;
    const p = {
      accountId: t,
      dateFrom: E(a),
      dateTo: E(i),
      typeIds: o,
      sortBy: n,
      coefViewId: s,
      notCalc: r ? 1 : void 0,
    };
    return {
      success: !0,
      error: void 0,
      coupons:
        (u =
          (l = (([c, d] = P(() => this.doRequest(Ua(), p))),
          (c = await c),
          d(),
          c).BetsList) == null
            ? void 0
            : l.map((f) => Ee(f))) != null
          ? u
          : [],
    };
  }
  async getBetsToto({ coefViewId: t, couponId: s }) {
    $_$();
    let a, i;
    const r = { coefViewId: t, couponId: s },
      n = (([a, i] = P(() => this.doRequest(Va(), r))), (a = await a), i(), a);
    return { success: !0, error: void 0, bets: Ne(n) };
  }
  async getBetsUncalculated({
    dateFrom: t,
    dateTo: s,
    accountId: a,
    coefViewId: i,
    feedTypes: r = [],
    couponTypes: n = [],
    sortType: o = 1,
  }) {
    $_$();
    var l;
    let u, c;
    const d = {
      accountId: a,
      coefViewId: i,
      betTypes: n,
      sortBy: o,
      feedTypes: r,
    };
    t && (d.timestampFrom = E(t)), s && (d.timestampTo = E(s));
    const {
        success: p,
        error: m,
        data: h,
      } = (([u, c] = P(() => this.doRequest(Qa(), d))), (u = await u), c(), u),
      f =
        (l = h.bets) == null
          ? void 0
          : l.map((y) => {
              const g = se(y, i),
                T = ye(y, g, i);
              return he(this.config.bettingTaxes, y, g, T, i, a);
            });
    return { success: p, error: m, coupons: f };
  }
  async getBetsHistory({
    account: t,
    coefViewId: s,
    couponStatuses: a = [],
    couponTypes: i = [],
    dateFrom: r,
    dateTo: n,
    feedTypes: o = [],
    isCalculatedDateType: l = !1,
    includeTerminalBets: u = !1,
    sortType: c = 1,
    lastBetId: d = void 0,
    count: p = as,
    betsWithAutoSaleOrder: m = !1,
    globalChampId: h,
  }) {
    $_$();
    var f, y, g, T, B, C, b, K, k;
    let N, M;
    const { groupId: G, refId: q, lng: Z } = this.config,
      J = {
        dateFrom: E(r),
        dateTo: E(n),
        coefViewId: s,
        betTypes: i,
        betStatuses: a,
        sortBy: c,
        userId: t == null ? void 0 : t.id,
        group: G,
        partner: q,
        lng: Z,
        count: p,
        lastBetId: d,
        calculateSaleInfo: !0,
        feedType: o.length === 1 ? o[0] : void 0,
        byBetSettlingDates: l,
        onlyBetsForSale: !1,
        useArchive: !1,
        includeTerminalBets: u,
        calculateSummaryInfo: !0,
        betsWithAutoSaleOrder: m,
        globalChampId: h,
      },
      ue = h ? Ja() : Za(),
      me = (([N, M] = P(() => this.doRequest(ue, J))), (N = await N), M(), N),
      { BetInfos: de, BetsSummaryInfo: I } = me,
      ce = xa({
        coupons: de,
        coefViewId: s,
        accountId: t.id,
        bettingTaxes: this.config.bettingTaxes,
      });
    return {
      summaryInfo: {
        periodStart: (f = I == null ? void 0 : I.PeriodStart) != null ? f : 0,
        periodEnd: (y = I == null ? void 0 : I.PeriodEnd) != null ? y : 0,
        count:
          ((g = I == null ? void 0 : I.Count) != null ? g : 0) +
          ((T = I == null ? void 0 : I.DeletedCount) != null ? T : 0),
        deletedCount: (B = I == null ? void 0 : I.DeletedCount) != null ? B : 0,
        betSum: (C = I == null ? void 0 : I.BetSum) != null ? C : 0,
        winSum: (b = I == null ? void 0 : I.WinSum) != null ? b : 0,
        unsettledSum: (K = I == null ? void 0 : I.UnsettledSum) != null ? K : 0,
        payoutWithSellSum:
          (k = I == null ? void 0 : I.PayoutWithSellSum) != null ? k : 0,
      },
      coupons: ce,
    };
  }
  async getBetInfoHistoryByBetIds(t) {
    $_$();
    let s, a;
    return ([s, a] = P(() => this.doRequest(Ya(), t))), (s = await s), a(), s;
  }
  async deleteBetsHistoryCoupon({ accountId: t, couponId: s }) {
    $_$();
    let a, i;
    const r = { accountId: t, id: s },
      n = (([a, i] = P(() => this.doRequest($a(), r))), (a = await a), i(), a);
    this.checkSuccess(n);
  }
  async deleteBetsHistory({ accountId: t, dateFrom: s, dateTo: a }) {
    $_$();
    let i, r;
    const n = { accountId: t, timestampFrom: E(s), timestampTo: E(a) },
      o = (([i, r] = P(() => this.doRequest(wa(), n))), (i = await i), r(), i);
    this.checkSuccess(o);
  }
  async getCouponSaleTransactions({ couponId: t, initialCouponAmount: s }) {
    $_$();
    let a, i;
    const r = { id: t, couponSum: s },
      n = (([a, i] = P(() => this.doRequest(Xa(), r))), (a = await a), i(), a);
    return this.checkSuccess(n), Fa(n.data.transactions);
  }
  async getChampionsInfo() {
    $_$();
    let t, s;
    const {
      promo_visible_league: a,
      promo_champions_league_points: i,
      promo_champions_status_bets: r,
      promo_champions_league_bets: n,
      success: o,
    } = (([t, s] = P(() => this.doRequest(ja(), {}))), (t = await t), s(), t);
    return (
      this.checkSuccess({ success: o }),
      {
        promoVisibleLeague: a,
        promoChampionsLeaguePoints: i,
        promoChampionsStatusBets: r,
        promoChampionsLeagueBets: n,
      }
    );
  }
  async sendBetsHistoryToUserEmail({
    accountId: t,
    coefViewId: s,
    couponStatuses: a = [],
    couponTypes: i = [],
    dateFrom: r,
    dateTo: n,
    feedTypes: o = [],
    includeTerminalBets: l = !1,
    isCalculatedDateType: u = !1,
    sortType: c = 1,
  }) {
    $_$();
    let d, p;
    const m = {
        timestampFrom: E(r),
        timestampTo: E(n),
        accountId: t,
        coefViewId: s,
        feedTypes: o,
        betCommonStatuses: a,
        betTypes: i,
        sortBy: c,
        isCalculatedDateType: u,
        includeTerminalBets: l,
      },
      h = (([d, p] = P(() => this.doRequest(Ra(), m))), (d = await d), p(), d);
    return this.checkSuccess(h), h.data;
  }
  async getCashboxCoupons({
    dateFrom: t,
    dateTo: s,
    accountId: a,
    coefViewId: i,
    feedTypes: r = [],
    couponStatuses: n = [],
    couponTypes: o = [],
    sortType: l = 1,
    isCalculatedDateType: u = !1,
    abortController: c = void 0,
  }) {
    $_$();
    var d;
    let p, m;
    const h = {
        timestampFrom: Math.floor(t.getTime() / 1e3),
        timestampTo: Math.floor(s.getTime() / 1e3),
        accountId: a,
        coefViewId: i,
        feedTypes: r,
        betCommonStatuses: n,
        betTypes: o,
        isCalculatedDateType: u,
        sortBy: l,
      },
      {
        success: f,
        error: y,
        data: g,
      } = (([p, m] = P(() => this.doRequest(za(), h, c))),
      (p = await p),
      m(),
      p),
      T =
        (d = g.bets) == null
          ? void 0
          : d.map((B) => {
              const C = se(B, i),
                b = ye(B, C, i);
              return he(
                this.config.bettingTaxes,
                { ...B, can_print: !1, can_sell: !1 },
                C,
                b,
                i,
                a
              );
            });
    return { success: f, error: y, coupons: T };
  }
  async doRequest(t, s, a) {
    $_$();
    let i, r;
    try {
      const { execute: n } = t(this.httpModule, {
        params: s,
        signal: a == null ? void 0 : a.signal,
        cache: !0,
      });
      return (
        ([i, r] = P(() =>
          n({
            headers: { ...this.clientHeaders },
            hookContext: {
              cookies: this.cookies,
              httpModule: this.httpModule,
              logger: this.logger,
            },
          })
        )),
        (i = await i),
        r(),
        i
      );
    } catch (n) {
      throw Oe(n);
    }
  }
  consoleError(t) {
    this.logger.error(t);
  }
  checkSuccess(t) {
    if (t && !t.success) throw Oe(t);
    return t;
  }
}
const rs = () => {
    $_$();
    var e, t, s, a, i;
    const [r, n, o, l] = be(1665, -1001, -1e3, -1004);
    return {
      bettingHistoryConfig: {
        bettingTaxes: {
          taxType: parseInt(
            (e = r == null ? void 0 : r.type) != null ? e : "0",
            10
          ),
          betTaxPercent: parseFloat(
            (t = r == null ? void 0 : r.stake_tax) != null ? t : "0"
          ),
          payoutTaxPercent: parseFloat(
            (s = r == null ? void 0 : r.payout_tax) != null ? s : "0"
          ),
          winAmountThreshold: parseFloat(
            (a = r == null ? void 0 : r.activate_tax_thereshold) != null
              ? a
              : "0"
          ),
          coefThreshold: parseFloat(
            (i = r == null ? void 0 : r.coef_tax_limit) != null ? i : "0"
          ),
          hasReturnTax: (r == null ? void 0 : r.has_return_tax) === "true",
        },
        groupId: n,
        refId: o,
        lng: l.id,
      },
    };
  },
  ls = (e) => {
    $_$();
    const t = St(),
      [s, a] = be(-1008, 633),
      { formatAmountWithCurrency: i } = ft({
        geoCurrency: s,
        amountTemplate: a,
      }),
      r = gt(),
      n = Y(() => {
        $_$();
        var m;
        return ((m = H(e)) == null ? void 0 : m.coef) || "-";
      }),
      o = Y(() => {
        $_$();
        var m;
        return ((m = H(e)) == null ? void 0 : m.coefFormatted) || "-";
      }),
      l = Y(() => ($_$() && H(e).currencyIso) || void 0),
      u = Y(() => {
        $_$();
        var m;
        return r.getCurrencySymbol((m = H(e)) == null ? void 0 : m.currencyIso);
      }),
      c = (m) =>
        m ? i({ amount: m, currencyIso: l, currencySymbol: u }) : "-",
      d = Y(() => {
        $_$();
        var m, h;
        return ((m = H(e)) == null ? void 0 : m.typeId) === O.FREE
          ? H(e).isApproved
            ? t("office_history_toto_free_confirmed")
            : t("office_history_toto_free_not_confirmed")
          : c((h = H(e)) == null ? void 0 : h.amount);
      }),
      p = Y(() => {
        $_$();
        var m;
        return c((m = H(e)) == null ? void 0 : m.winAmount);
      });
    return {
      coef: n,
      coefFormatted: o,
      currencyIso: l,
      amountFormatted: d,
      winAmountFormatted: p,
    };
  };
export {
  ns as BettingHistoryApi,
  ca as OpenedCoupon,
  zt as TotoType,
  O as TotoTypeId,
  Aa as createEmptyTaxes,
  la as getCouponStatusDictionaryKey,
  is as getSplitScores,
  xa as parseBetInfos,
  Ta as parseTaxes,
  ls as useBetsHistoryTotoCouponView,
  rs as useBettingHistoryConfigs,
};
