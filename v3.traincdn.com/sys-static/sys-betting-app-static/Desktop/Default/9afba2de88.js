import $_$ from "./$_$.js";
$_$();
import {
  useCouponStore as Ao,
  useBettingRouteData as et,
  useCouponAnalytics as go,
  COUPON_TYPES_WITH_BET_AMOUNT as tt,
  COUPON_TYPES_WITH_BLOCK_AMOUNT as nt,
  calculateBonusCoef as st,
  BONUS_MARKET_TYPE_ID as ct,
  convertToView as ut,
  CouponBet as fo,
  useNotifyExtended as at,
  useRtlInfo as it,
  MAX_BET_VALUE as lt,
} from "./entry-50afb6f36c.js";
import {
  useNotifications_useNotifications as rt,
  execAsync as A,
  createSharedComposable_createSharedComposable_2 as pt,
  index_useT as Io,
  useGlobalStore as dt,
  useAccountStore as Bt,
  index_useAnalytics as mt,
  index_getConfig as To,
  reactivity_esmBundler_toRef as _t,
  runtimeCore_esmBundler_computed as e,
  reactivity_esmBundler_unref as t,
  isDef as Ct,
  reactivity_esmBundler_ref as St,
  index_useMediaUrl as yt,
  vueNotification_NotificationType as At,
  MEDIA_EXTENSIONS as So,
  bettingRouteName_BettingRouteName as gt,
  bettingType_BettingType as yo,
  whenever as ft,
  index_getConfigs as It,
  statusType as g,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { fuse_esm_default as Tt } from "../../../shared-assets/Desktop/__shared_1c5f097ec1.js";
var U = ((s) => (
  (s.QUICK_COUPON = "quick_coupon"), (s.REGULAR_COUPON = "regular_coupon"), s
))(U || {});
const bt = () => {
    $_$();
    const { notificationError: s } = rt();
    return {
      couponPlaceBetHandleError: async (a) => {
        $_$();
        let o, i;
        ([o, i] = A(() => s(a.error.message))), await o, i();
      },
    };
  },
  Y = (s) =>
    ({
      0: "coupon_type_single",
      1: "coupon_type_express",
      2: "coupon_type_system",
      3: "coupon_type_chain",
      4: "coupon_type_multibet",
      5: "coupon_type_conditional",
      6: "coupon_type_antiexpress",
      7: "coupon_type_lucky",
      8: "coupon_type_patent",
      10001: "coupon_type_singles",
      9: "coupon_type_bet_builder",
    }[s]),
  vt = (s = 0, c = 0) => [c || s, s * 2, s * 5],
  Et = () => {
    $_$();
    const s = Io(),
      c = dt(),
      a = Bt(),
      o = Ao(),
      { routeBettingType: i, routeName: d } = et(),
      { couponPlaceBetHandleError: _ } = bt(),
      I = mt(),
      {
        trackBetButtonClick: T,
        clickOnIcoRemoveAllBets: r,
        trackClearCall: V,
      } = go(),
      b = To(2036),
      x = _t(() => c.coefViewId),
      P = e(() => c.isAsianView),
      H = e({ get: () => o.couponTab, set: (n) => o.couponSetTab(n) }),
      v = e({
        get: () => o.couponAccountId,
        set: (n) => o.couponSetAccountId(n),
      }),
      B = e(() => o.couponAccount),
      E = e(() => o.couponAccountMoney),
      p = e(() => {
        $_$();
        var n;
        return (n = t(B)) == null ? void 0 : n.symbol;
      }),
      f = e(() => o.couponCurrencyIso),
      vo = e(() => o.couponCurrencySymbol),
      Eo = e({
        get: () => o.addedAtByBetId,
        set: (n) => o.couponSetAddedAtByBetId(n),
      }),
      k = e({ get: () => o.couponAmount, set: (n) => o.couponSetAmount(n) }),
      G = e({
        get: () => o.couponAmountByBetId,
        set: (n) => o.couponSetAmountByBetId(n),
      }),
      K = e({
        get: () => o.couponAmountByBlockId,
        set: (n) => o.couponSetAmountByBlockId(n),
      }),
      Q = e(() => o.couponAvailablePrepaidAmount),
      C = e({ get: () => o.couponBets, set: (n) => o.couponSetBets(n) }),
      ko = e(() => o.couponBetIds),
      w = e(() => $_$() && t(C).length),
      q = e(() => {
        $_$();
        var n, u, l;
        const m = o.couponTypeId;
        if (tt.includes(m))
          return t(C).reduce((y, ot) => {
            $_$();
            var Co;
            return y + ((Co = t(G)[ot.id]) != null ? Co : 0);
          }, 0);
        if (nt.includes(m)) {
          const y = (n = t(C)[0]) == null ? void 0 : n.blockId;
          return y && (u = t(K)[y]) != null ? u : 0;
        }
        return (l = t(k)) != null ? l : 0;
      }),
      ho = e(() => o.couponCoef),
      xo = e(() => o.couponCoefByView),
      Po = e(() => o.couponHasCoef),
      Oo = e(() => o.couponHasSpecialCoef),
      z = e(() => o.couponHasBonusBet),
      Mo = e(() => o.couponHasOnlyLineBets),
      No = e(() => o.couponHasAmount),
      Lo = e(() => o.couponHasBetAmount),
      Ro = e(() => o.couponHasMinAmount),
      Uo = e(() => o.couponHasMaxAmount),
      j = e(() => {
        $_$();
        var n, u;
        return (
          ((n = a.mainBalance) != null ? n : 0) < ((u = t(k)) != null ? u : 0)
        );
      }),
      Vo = e(() => {
        $_$();
        var n, u, l;
        return (
          ((u = (n = t(B)) == null ? void 0 : n.money) != null ? u : 0) +
            ((l = t(Q)) != null ? l : 0) <
          t(q)
        );
      }),
      Ho = e(() =>
        $_$() && t(j)
          ? s("coupon_quick_coupon_bet_amount_higher_than_balance")
          : ""
      ),
      wo = e(() => o.couponHasPossibleWin),
      Do = e(() => o.couponHasMinPossibleWin),
      J = e(() => o.couponInitialAmount),
      Wo = e(() => o.couponIsActivePlaceBet),
      Fo = e(() => o.couponMaxBetAmount),
      Xo = e(() => o.couponMaxAmountByBlockId),
      Yo = e(() => o.couponMinBetAmount),
      Go = e(() => o.couponPossibleWin),
      Ko = e(() => o.couponMinPossibleWin),
      Qo = e(() => o.couponAntiExpressCoef),
      D = e(() => $_$() && st(1, t(w))),
      Z = e(
        () =>
          $_$() && {
            name: s("coupon_bonus_from_company"),
            coef: t(D),
            coefByView: ut(t(D), t(x)),
            sportId: 0,
            sportName: s("coupon_bonus_express"),
            typeId: ct,
          }
      ),
      $ = e(() => $_$() && new fo({ market: t(Z) })),
      qo = e(() => ($_$() && t(z) ? t(C).concat(t($)) : t(C))),
      h = e({
        get: () => o.couponTypeId,
        set: (n) => o.couponSetCouponTypeId(n),
      }),
      zo = e(() => o.couponHasSystem),
      jo = e(() => $_$() && s(Y(t(h)))),
      Jo = e(() => o.couponHasExpress),
      Zo = e(() => o.couponHasSinglesBets),
      oo = e({
        get: () => o.couponSystemValue,
        set: (n) => o.couponSetSystemValue(n),
      }),
      $o = e({
        get: () => o.isActiveAutoMax,
        set: (n) => {
          o.couponSetIsActiveAutoMax(n);
        },
      }),
      oe = e({
        get: () => o.isActiveVipBet,
        set: (n) => {
          o.couponSetIsActiveVipBet(n);
        },
      }),
      eo = e(() => o.couponSystemValues),
      ee = e(() => {
        $_$();
        const n = t(eo).find((u) => $_$() && u.value === t(oo));
        return n == null ? void 0 : n.combo;
      }),
      te = e({
        get: () => o.getAmountStep,
        set: (n) => o.couponSettingsSetAmountStep(n),
      }),
      ne = e(() => o.getAmountStepMore),
      se = e(() => o.getAmountStepLess),
      ce = e({
        get: () => o.settings.changeCoefAction,
        set: (n) => o.couponSettingsSetChangeCoefAction(n),
      }),
      W = e({
        get: () => o.settings.oneClickAmount,
        set: (n) => o.couponSettingsSetOneClickAmount(n),
      }),
      ue = e({
        get: () => o.settings.isDropOnScoreChange,
        set: (n) => o.couponSettingsSetIsDropOnScoreChange(n),
      }),
      O = e({
        get: () => o.settings.isActiveOneClick,
        set: (n) => o.couponSettingsSetIsActiveOneClick(n),
      }),
      ae = e({
        get: () => o.settings.isCouponFixed,
        set: (n) => o.couponSettingsSetIsCouponFixed(n),
      }),
      ie = e(() => o.couponIsCouponLoadedFromCode),
      le = e(() => o.couponBetsByBlockId),
      re = e(() => $_$() && t(w) > 0),
      pe = e(() => o.couponHasBlocks),
      de = e(() => o.couponHasSystemWithBanker),
      Be = e(() => o.couponHasBlockAmount),
      me = e(() => o.isActiveSystemBanker),
      _e = e(() => o.couponBlockIds),
      Ce = e(
        () =>
          ($_$() && t(C).some((n) => n.isLocked)) || o.marketsLocked.length > 0
      ),
      Se = e({
        get: () => o.couponSuccessCoupon,
        set: (n) => o.couponSetSuccessCoupon(n),
      }),
      ye = e(() => o.couponIsAccessedPromoCode),
      to = e({
        get: () => o.couponPromoCode,
        set: (n) => o.couponSetPromoCode(n),
      }),
      M = e({
        get: () => o.couponManualPromoCode,
        set: (n) => o.couponSetManualPromoCode(n),
      }),
      no = e(() => {
        $_$();
        const { couponPromoCodes: n } = o;
        return t(M)
          ? [t(M)].concat(
              n.filter((u) => {
                $_$();
                var l;
                return u.id !== ((l = t(M)) == null ? void 0 : l.id);
              })
            )
          : n;
      }),
      Ae = e(
        () =>
          $_$() &&
          t(no).find((n) => $_$() && (n == null ? void 0 : n.id) === t(to))
      ),
      ge = e(() => o.couponActivePlaceBetIds),
      fe = e({
        get: () => o.couponSinglesResultCoupons,
        set: (n) => o.couponSetSinglesResultCoupons(n),
      }),
      Ie = e({
        get: () => o.settings.exactCoef || 0,
        set: (n) => o.couponSettingsSetExactCoef(n),
      }),
      Te = e(() => o.couponHasExactCoef),
      be = e({
        get: () => o.couponLoadInputValue,
        set: (n) => o.couponSetLoadCouponInputValue(n),
      }),
      so = e(() => o.couponVipBetAvailable),
      ve = e(() => $_$() && o.isActiveVipBet && t(so)),
      Ee = e({
        get: () => o.isVisibleQuickCoupon,
        set: (n) => o.couponSetIsVisibleQuickCoupon(n),
      }),
      co = e(() => o.couponEventCountToBoost),
      uo = e(() => o.minEventCoefToBoost),
      ao = e(() => o.minEventCountToBoost),
      ke = e(() => $_$() && t(C).some((n) => !!n.builderMarkets.length)),
      io = e(() => o.isExpressBoost),
      he = e(() => o.manuallyDeletedExpressBoost),
      xe = e(() => $_$() && (t(io) || !!(t(co) && t(uo) && t(ao))) && !t(he)),
      Pe = e({
        get: () =>
          ($_$() && o.settings.stakes) || vt(t(J), o.couponMinBetAmount),
        set: (n) => o.couponSettingsSetStakes(n),
      }),
      Oe = (n) => o.couponDeleteExpressBoost(n),
      lo = () => o.couponSettingsResetExactCoef(),
      Me = (n) => o.couponSettingsMergeState(n),
      Ne = () => o.couponUpdate(),
      Le = (n) => o.couponDeleteBet({ id: n }),
      Re = async (n) => {
        $_$();
        let u, l;
        const m =
          (([u, l] = A(() => o.couponPutBet(n))), (u = await u), l(), u);
        (m == null ? void 0 : m.success) === !1 &&
          (([u, l] = A(() => _(m))), await u, l());
      },
      N = async (n) => {
        $_$();
        var u;
        let l, m;
        T(
          (u = o.couponBaseCoupons[0]) == null ? void 0 : u.bets,
          n == null ? void 0 : n.placeBetSource
        ),
          I.modules.yandexEvents.trackPlayBet();
        const y =
          (([l, m] = A(() => o.couponPutRegularBet(n))), (l = await l), m(), l);
        (y == null ? void 0 : y.success) === !1 &&
          (([l, m] = A(() => _(y))), await l, m());
      },
      Ue = async () => {
        $_$();
        let n, u;
        const l =
          (([n, u] = A(() => o.couponPutBetBuilderBet())),
          (n = await n),
          u(),
          n);
        (l == null ? void 0 : l.success) === !1 &&
          (([n, u] = A(() => _(l))), await n, u());
      },
      Ve = () =>
        $_$() && t(d) === gt.CYBER_SECTION
          ? N({ pageType: t(d), placeBetSource: U.REGULAR_COUPON })
          : t(i) === yo.LINE || t(i) === yo.LIVE
          ? N({ pageType: t(i), placeBetSource: U.REGULAR_COUPON })
          : N({ placeBetSource: U.REGULAR_COUPON }),
      He = () => o.couponLoadAvailablePrepaidAmount(),
      we = () => o.couponSaveCoupon(),
      De = (n) => {
        o.couponSettingsSetManualAmountStep(n);
      },
      We = () => o.couponLoadCoupon(),
      Fe = () => {
        (C.value = []), lo(), r(), V();
      },
      Xe = e(() => $_$() && t(h) === 1),
      ro = e(() => $_$() && t(h) === 10001),
      Ye = e(() => $_$() && t(h) === 5),
      po = e(() => o.getHyperBonusPercent),
      Ge = e(() => o.getMinHyperBonusBetLimit),
      Ke = e(() => o.getMaxHyperBonusLimit),
      Qe = e(() => $_$() && !!t(po) && t(Xe)),
      qe = e(() => o.couponMaxPayout),
      ze = e(() => $_$() && t(P) && !t(ro) && !t(Ye)),
      je = e(() => {
        var n;
        return (n = a.bonusAccount) == null ? void 0 : n.id;
      }),
      L = e(() => $_$() && Ct(t(v)) && t(v) === t(je)),
      F = e({
        get: () => o.getBonusAccountOneClickAmount,
        set: (n) => o.couponSettingsSetBonusAccountOneClickAmount(n),
      }),
      Je = e({
        get: () => o.getCurrencyIsoUsed,
        set: (n) => o.couponSettingsSetCurrencyIsoUsed(n),
      }),
      Bo = e({
        get: () => ($_$() && t(L) ? t(F) : t(W)),
        set: (n) => {
          $_$();
          (F.value = n), t(L) || (W.value = n);
        },
      }),
      X = St(t(Bo)),
      Ze = e({
        get: () => ($_$() && t(O) ? t(X) : t(k)),
        set: (n) => {
          $_$();
          t(O) && (X.value = n), (k.value = n);
        },
      }),
      $e = () => {
        v.value = a.activeId;
      },
      mo = at(),
      R = yt(),
      { isRtl: _o } = it();
    return {
      accountId: v,
      accountMoney: E,
      accountSymbol: p,
      activePlaceBetIds: ge,
      addedAtByBetId: Eo,
      amount: k,
      amountError: Ho,
      amountByBetId: G,
      amountByBlockId: K,
      amountStep: te,
      amountStepMore: ne,
      amountStepLess: se,
      antiExpressCoef: Qo,
      availablePrepaidAmount: Q,
      bets: C,
      betsByBlockId: le,
      betsCount: w,
      betsAmount: q,
      betsIds: ko,
      betsWithBonus: qo,
      blockIds: _e,
      bonusBet: $,
      bonusCoef: D,
      bonusMarket: Z,
      changeCoefAction: ce,
      coef: ho,
      coefByView: xo,
      couponLoadInputValue: be,
      currencyIso: f,
      currencySymbol: vo,
      currencyIsoUsed: Je,
      exactCoef: Ie,
      hasAmount: No,
      hasBetAmount: Lo,
      hasBetsAmountError: Vo,
      hasBetCount: re,
      hasBlockAmount: Be,
      hasBlocks: pe,
      hasSystemWithBanker: de,
      isActiveSystemBanker: me,
      hasLocked: Ce,
      hasBonusBet: z,
      hasCoef: Po,
      hasExactCoef: Te,
      hasMaxAmount: Uo,
      hasMinAmount: Ro,
      hasAmountError: j,
      hasMinPossibleWin: Do,
      hasPossibleWin: wo,
      hasSpecialCoef: Oo,
      hasSystem: zo,
      hasExpress: Jo,
      hasSinglesBets: Zo,
      hasOnlyLineBets: Mo,
      initialAmount: J,
      isAccessedPromoCode: ye,
      isActiveOneClick: O,
      isActiveAutoMax: $o,
      isActiveVipBet: oe,
      isCouponFixed: ae,
      isDropOnScoreChange: ue,
      isPlaceBetActive: Wo,
      isCouponLoadedFromCode: ie,
      maxAmountByBlockId: Xo,
      maxBetAmount: Fo,
      minBetAmount: Yo,
      minPossibleWin: Ko,
      oneClickAmount: W,
      possibleWin: Go,
      promoCode: to,
      manualPromoCode: M,
      promoCodes: no,
      promoCodeData: Ae,
      resultCoupons: fe,
      successCoupon: Se,
      systemValue: oo,
      systemValues: eo,
      systemMinCoef: ee,
      tab: H,
      typeId: h,
      couponTypeLabel: jo,
      hyperBonusPercent: po,
      minHyperBonusBetLimit: Ge,
      maxHyperBonusLimit: Ke,
      isActiveHyperBonus: Qe,
      couponMaxPayout: qe,
      isVipBetAvailable: so,
      isVipBetTabVisible: ve,
      isAsianView: P,
      isStakesVisible: ze,
      isBonusAccountSelected: L,
      isVisibleQuickCoupon: Ee,
      bonusAccountOneClickAmount: F,
      oneClickAmountModel: Bo,
      localOneClickAmountModel: X,
      currentAmount: Ze,
      eventCountToBoost: co,
      minEventCoefToBoost: uo,
      minEventCountToBoost: ao,
      isExpressBoost: io,
      hasBoost: xe,
      stakes: Pe,
      hasBetBuilderMarkets: ke,
      showImageInNotifications: b,
      isSinglesCouponType: ro,
      deleteBet: Le,
      loadAvailablePrepaidAmount: He,
      loadCoupon: We,
      mergeSettings: Me,
      putBet: Re,
      putRegularBet: Ve,
      putRegularBetCoupon: N,
      resetExactCoef: lo,
      saveCoupon: we,
      setManualAmountStep: De,
      updateCoupon: Ne,
      clearBets: Fe,
      updateAccountType: () => {
        $_$();
        if (t(O))
          if (t(L)) {
            const n = t(_o)
                ? "notifications_info_rtl_1x"
                : "notifications_info_1x",
              u = t(_o) ? "notifications_info_rtl_2x" : "notifications_info_2x";
            $e(),
              mo({
                status: At.WARNING,
                title: s("coupon_notify_title_enabled_general_account"),
                text: s("coupon_notify_text_enabled_general_account"),
                buttonCloseTitle: s("main_close"),
                image: b
                  ? {
                      image: R(n),
                      imageWEBP: R(n, So.WEBP),
                      image2x: R(u),
                      imageWEBP2x: R(u, So.WEBP),
                    }
                  : void 0,
              });
          } else mo({ clean: !0 });
      },
      deleteExpressBoost: Oe,
      putBetBuilderBet: Ue,
    };
  },
  S = pt(Et),
  Rt = (s) => {
    $_$();
    const { amountByBetId: c } = S();
    return e({
      get: () => $_$() && t(c)[t(s)],
      set: (a) => {
        $_$();
        c.value = { ...t(c), [t(s)]: a };
      },
    });
  },
  Ut = (s) => {
    $_$();
    const { amountByBlockId: c } = S();
    return e({
      get: () => $_$() && t(c)[t(s)],
      set: (a) => {
        $_$();
        c.value = { ...t(c), [t(s)]: a };
      },
    });
  },
  Vt = (s) => {
    $_$();
    const { maxAmountByBlockId: c } = S();
    return e(() => $_$() && t(c)[t(s)]);
  },
  kt = (s) => {
    $_$();
    const c = Ao(),
      { bets: a } = S();
    return e({
      get: () => $_$() && t(a).find((o) => $_$() && o.id === t(s)),
      set: (o) => c.couponReplaceBet({ bet: o }),
    });
  },
  Ht = (s) => {
    $_$();
    const c = kt(s);
    return e({
      get: () => $_$() && t(c).blockId,
      set: (a) => {
        $_$();
        c.value = new fo({ ...t(c), blockId: a });
      },
    });
  },
  ht = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10001, 9],
  bo = (s) => {
    $_$();
    const [c = [], a] = It(75, 50),
      o = c.map(Number),
      {
        betsCount: i,
        antiExpressCoef: d,
        hasBlocks: _,
        hasSystemWithBanker: I,
        blockIds: T,
        bets: r,
      } = S(),
      V = e(() => {
        var B, E;
        return (E =
          (B =
            s == null
              ? void 0
              : s.filter((p) => {
                  var f;
                  return (f = o == null ? void 0 : o.includes(p)) != null
                    ? f
                    : !0;
                })) != null
            ? B
            : o) != null
          ? E
          : ht;
      }),
      b = e(() => $_$() && t(T).filter(Boolean).length),
      x = e(() => ($_$() && !t(_)) || t(b) >= 3),
      P = e(() =>
        $_$() && t(I)
          ? t(i) > 2 && t(i) <= a && t(b) >= 3
          : t(i) > 2 && t(i) <= a
      ),
      H = e(() => {
        $_$();
        var B;
        if (t(r).some((f) => f.builderMarkets.length > 0)) return [[9, !0]];
        const p = t(i);
        return [
          [0, p <= 1],
          [1, p > 1],
          [2, t(P)],
          [3, p > 1],
          [4, p > 2 && p <= a && t(x)],
          [5, p > 2 && t(x)],
          [6, p > 1 && ((B = t(d)) != null ? B : 0) > 1.01],
          [7, p > 1 && p < 9],
          [8, p > 2 && p < 9],
          [10001, p > 1],
        ];
      });
    return e(
      () =>
        $_$() &&
        t(H)
          .filter(([B]) => $_$() && t(V).includes(B))
          .filter(([, B]) => B)
          .map(([B]) => B)
    );
  },
  wt = (s) => {
    $_$();
    const c = bo(s),
      { antiExpressCoef: a, typeId: o } = S(),
      i = e(() => $_$() && !t(c).includes(t(o)));
    ft(
      i,
      () => {
        $_$();
        const d = t(c)[0];
        t(o) === 6 ? t(a) !== 0 && (o.value = d) : (o.value = d);
      },
      { immediate: !0 }
    );
  },
  Dt = ({ isActiveAutoMax: s }) => {
    $_$();
    const { maxBetAmount: c } = S();
    return e(() => ($_$() && t(s) ? t(c) : lt));
  },
  Wt = () => {
    $_$();
    const { promoCode: s, promoCodes: c, isAccessedPromoCode: a } = S(),
      o = e(
        () =>
          $_$() &&
          new Tt(t(c), {
            ignoreLocation: !0,
            shouldSort: !1,
            threshold: 0.3,
            keys: ["id"],
          })
      ),
      i = e(() =>
        $_$() && t(s)
          ? t(o)
              .search(t(s))
              .map(({ item: d }) => d)
          : t(c)
      );
    return {
      promoCode: s,
      promoCodes: c,
      isAccessedPromoCode: a,
      promoCodesFuse: o,
      filteredPromoCodes: i,
    };
  },
  xt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10001, 9],
  Ft = (s = xt) => {
    $_$();
    const c = Io(),
      { trackTypeBet: a } = go(),
      o = bo(s),
      { typeId: i } = S(),
      d = e(() =>
        s.map(
          (r) =>
            $_$() && {
              label: c(Y(r)),
              caption: c(Y(r)),
              value: r,
              checked: r === t(i),
              disabled: !t(o).includes(r),
            }
        )
      ),
      _ = e(() => $_$() && t(d).filter(({ disabled: r }) => !r)),
      I = e(() => ($_$() && t(o).length < 2) || t(i) === 9),
      T = e({
        get: () => $_$() && t(d).find(({ value: r }) => $_$() && r === t(i)),
        set: ({ value: r } = {}) => {
          $_$();
          t(o).includes(r) && ((i.value = r), a(r));
        },
      });
    return {
      accessedCouponTypeIds: o,
      couponTypeId: i,
      couponTypeOptions: d,
      couponTypeOptionsAccessed: _,
      isDisabledSelector: I,
      selectedCouponTypeOption: T,
    };
  },
  Xt = (s) => {
    $_$();
    switch (s) {
      case 2:
        return g.LOSS;
      case 3:
      case 4:
        return g.WIN;
      case 1:
      case 5:
      default:
        return g.PENDING;
    }
  },
  Yt = (s, c) => {
    $_$();
    if (s === 8 || s === 5) return g.PENDING;
    switch (c) {
      case 0:
        return g.LOSS;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return g.WIN;
      case -2:
      case -1:
      default:
        return g.PENDING;
    }
  },
  Gt = () => {
    $_$();
    var s;
    const a = ((s = To(460)) != null ? s : []).map(Number),
      o = (d) => d.filter((_) => !a.includes(_)),
      i = o([1, 2, 3, 4, 5, 6, 7, 8]);
    return { filterStatuses: o, couponStatusesFilters: i };
  },
  Kt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  Qt = { sold: [8], uncalculated: [1], lose: [2], win: [3, 4] },
  qt = { calculated: [2, 3, 4, 6, 7, 8, 9], uncalculated: [1], deleted: [5] },
  zt = [0, 1],
  jt = ["calculated", "uncalculated", "deleted"],
  Jt = ["sold", "uncalculated", "lose", "win"],
  Zt = Object.freeze({
    XXXS: 1152,
    XXS: 1280,
    XS: 1366,
    S: 1440,
    M: 1680,
    L: 1920,
    XL: 2560,
    XXL: 3840,
  }),
  $t = 6,
  Pt = 31,
  on = 5,
  en = ({ dateFrom: s, dateTo: c }) => (c.getTime() - s.getTime()) / 864e5 > Pt;
export {
  $t as BETS_HISTORY_DEFAULT_PERIOD_DAYS,
  Pt as BETS_HISTORY_MAX_PERIOD_DAYS,
  Kt as BETTING_COUPON_TYPE_IDS,
  Jt as COUPON_AUTOSALE_STATUS_FILTERS,
  jt as COUPON_STATUS_FILTERS,
  Qt as CouponAutosaleIntStatusFilters,
  qt as CouponIntStatusFilters,
  zt as FEED_TYPE_FILTERS,
  Zt as ScreenSizes,
  on as TOP_EVENTS_BETS_HISTORY_DEFAULT_COUNT,
  U as analyticsPlaceBetSourceType,
  Et as createCouponContext,
  Yt as getBetStatusThemeType,
  Xt as getCouponStatusThemeType,
  Y as getCouponTypeDictionaryKey,
  en as getIsFilterPeriodTooLong,
  Rt as useBetAmount,
  Ut as useBlockAmount,
  Ht as useCouponBetBlockId,
  S as useCouponContext,
  Dt as useCouponMaxInputValue,
  bt as useCouponPlaceBetErrorHandler,
  Gt as useCouponStatusesFilters,
  Ft as useCouponTypeSelector,
  Vt as useMaxBlockAmount,
  Wt as useSearchPromoCode,
  wt as useSelectCouponType,
};
