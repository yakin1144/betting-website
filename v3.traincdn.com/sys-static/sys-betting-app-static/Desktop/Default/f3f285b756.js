import $_$ from "./$_$.js";
$_$();
import {
  index_getConfigs as je,
  useFormatCurrency_useFormatCurrency as Qe,
  runtimeCore_esmBundler_computed as u,
  reactivity_esmBundler_unref as o,
  createSharedComposable_createSharedComposable_2 as de,
  reactivity_esmBundler_ref as v,
  runtimeCore_esmBundler_onMounted as We,
  execAsync as T,
  index_useT as ze,
  index_useLogger as Ge,
  index_useDateTimeService as qe,
  useAccountStore as Ye,
  useGlobalStore as Je,
  useNotifications_useNotifications as Ke,
  index_useCookies as Xe,
  index_useHttpModule as Ze,
  index_useClientHeaders as eo,
  runtimeCore_esmBundler_inject as oo,
  reactivity_esmBundler_shallowRef as p,
  index_default_11 as le,
  index_default_15 as ie,
  runtimeCore_esmBundler_defineComponent as to,
  index_injectRemoteComponent as so,
  runtimeCore_esmBundler_createBlock as no,
  runtimeCore_esmBundler_openBlock as ao,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useCouponStatusesFilters as ro,
  COUPON_AUTOSALE_STATUS_FILTERS as co,
  BETTING_COUPON_TYPE_IDS as uo,
  getIsFilterPeriodTooLong as lo,
  CouponIntStatusFilters as io,
  CouponAutosaleIntStatusFilters as po,
  useSearchPromoCode as fo,
  useCouponContext as mo,
} from "./9afba2de88.js";
import { fuse_esm_default as pe } from "../../../shared-assets/Desktop/__shared_1c5f097ec1.js";
import {
  useBettingHistoryConfigs as _o,
  BettingHistoryApi as yo,
} from "./978e9c7c45.js";
import {
  useInitTopEvents as Co,
  OFFICE_APP_MICRO_FRONTEND_URL as go,
} from "./entry-50afb6f36c.js";
const Uo = (n, c, l) => {
    const r = n.indexOf(c);
    return r === -1 ? n.push(c) : n.splice(r, 1), r === -1;
  },
  To = (n, c, l) => {
    const r = n.indexOf(c);
    return r !== -1 && n.splice(r, 1), r === -1;
  },
  So = (n) => n !== 2,
  Ro = (n) => {
    $_$();
    const [c, l, r] = je(-1008, 633, 1469),
      { formatAmountWithCurrency: i, formatCurrency: f } = Qe({
        geoCurrency: c,
        amountTemplate: l,
      }),
      A = u(() => $_$() && r && o(n).payoutType === 1 && So(o(n).statusId)),
      w = u(() => {
        $_$();
        var B;
        return i({
          amount: (B = o(n).possiblePayoutSum) != null ? B : 0,
          currencyIso: o(n).currencyIso,
          currencySymbol: f(o(n).currencyIso),
          needAmountFormat: !0,
        });
      });
    return { showPossiblePayout: A, possiblePayoutSumFormatted: w };
  },
  Io = (
    { t: n, dateTimeService: c },
    {
      dateFrom: l,
      dateTo: r,
      errorMessage: i,
      couponsCount: f,
      filteredCouponsCount: A,
      searchQuery: w,
    }
  ) => {
    const B = c.getFullDateFormattedByDate(l),
      U = c.getFullDateFormattedByDate(r);
    return (
      i ||
      (f
        ? A
          ? ""
          : n("office_history_coupon_search_empty_v2", { query: w })
        : n("office_history_bets_message_text", { dateFrom: B, dateTo: U }))
    );
  },
  q = { ignoreLocation: !0, shouldSort: !1, threshold: 0.1 },
  Vo = { ...q, threshold: 0.3, keys: ["nameEng", "name"] },
  ho = {
    ...q,
    keys: [
      "id",
      "bets.market.champName",
      "bets.market.gameName",
      "bets.market.sportName",
    ],
  },
  vo = ({ coupons: n, query: c }) =>
    $_$() && {
      filteredCoupons: u(() =>
        $_$() && c.value
          ? new pe(o(n), ho).search(o(c)).map(({ item: r }) => r)
          : o(n)
      ),
    },
  bo = {
    ...q,
    keys: [
      "coupon.id",
      "bet.market.champName",
      "bet.market.gameName",
      "bet.market.sportName",
    ],
  },
  Ao = ({ coupons: n, query: c }) => {
    $_$();
    const l = u(
      () =>
        $_$() &&
        o(n)
          .map((i) =>
            i.bets.map((f) => ({ bet: f, coupon: i, id: `${i.id}_${f.id}` }))
          )
          .flat()
    );
    return {
      filteredBets: u(() =>
        $_$() && c.value
          ? new pe(o(l), bo).search(o(c)).map(({ item: i }) => i)
          : o(l)
      ),
    };
  },
  Bo = de(() => {
    $_$();
    const n = v([]);
    return (
      We(async () => {
        $_$();
        let l, r;
        n.value = (([l, r] = T(() => Co())), (l = await l), r(), l);
      }),
      { events: n }
    );
  }),
  $o = de(() => {
    $_$();
    const n = ze(),
      c = Ge(),
      l = qe(),
      r = Ye(),
      i = Je(),
      { notificationSuccess: f } = Ke(),
      { events: A } = Bo(),
      { couponStatusesFilters: w, filterStatuses: B } = ro(),
      U = Xe(),
      fe = Ze(),
      me = eo(),
      { bettingHistoryConfig: _e } = _o(),
      m = new yo({
        $httpModule: fe,
        $clientHeaders: me,
        $cookies: U,
        $logger: c,
        config: _e,
      });
    let H;
    const ye = oo("topEventId", void 0),
      P = p(r.activeId),
      I = p(le(Date.now())),
      h = p(ie(Date.now())),
      L = v(w),
      R = v(co.slice()),
      Y = v(uo.slice()),
      F = v([0, 1]),
      D = p(!1),
      b = p(1),
      _ = v([]),
      J = v(),
      K = p([]),
      k = p(""),
      N = p(),
      V = p("1"),
      $ = p(!1),
      X = p(!1),
      Ce = u(() => ($_$() && o($)) || o(X)),
      j = p(""),
      Z = p(!1),
      ee = u(() => i.isUserAuth),
      E = u(() => i.getCoefViewId),
      M = u(() => {
        $_$();
        var e;
        return (e = o(P)) != null ? e : r.activeId;
      }),
      x = u(() =>
        $_$() && o(P) && r.allAccounts.length > 0
          ? r.allAccounts.find((e) => $_$() && e.id === o(P))
          : r.activeAccount
      ),
      ge = u(() => $_$() && o(_).flatMap((e) => e.bets)),
      O = u(
        () =>
          $_$() &&
          o(Y)
            .slice()
            .sort((e, s) => e - s)
      ),
      Te = u(() => $_$() && o(_).find((e) => $_$() && e.id === o(N))),
      Se = u(() => {
        $_$();
        var e, s;
        return (s = (e = o(x)) == null ? void 0 : e.iso) != null
          ? s
          : i.currencyIso;
      }),
      Ie = u(() => {
        $_$();
        var e;
        return (e = o(x)) == null ? void 0 : e.symbol;
      }),
      he = u(() => $_$() && !!o(N)),
      oe = u(() => $_$() && o(_).length),
      Q = u(() => $_$() && lo({ dateFrom: o(I), dateTo: o(h) })),
      { filteredCoupons: te } = vo({ coupons: _, query: k }),
      { filteredBets: ve } = Ao({ coupons: _, query: k }),
      se = u(() => $_$() && o(te).length),
      be = u(
        () =>
          $_$() &&
          Io(
            { t: n, dateTimeService: l },
            {
              dateTo: o(h),
              dateFrom: o(I),
              searchQuery: o(k),
              errorMessage: o(j),
              couponsCount: o(oe),
              filteredCouponsCount: o(se),
            }
          )
      ),
      Ae = u(() => {
        $_$();
        var e, s;
        return (s = o(ye)) != null
          ? s
          : (e = o(A).find((t) => $_$() && t.title === o(V))) == null
          ? void 0
          : e.id;
      }),
      ne = v(0),
      Be = (e) => {
        ne.value = e;
      },
      Fe = ({ id: e, ...s }) => {
        $_$();
        const t = o(_).find((a) => a.id === e);
        t && o(_).splice(o(_).indexOf(t), 1, { ...t, ...s });
      },
      ae = (e) => {
        $_$();
        o(_).forEach((s) => {
          s.saleInfo = e.find(({ couponId: t }) => t === s.id);
        });
      },
      xe = (e) => {
        To(_.value, e);
      },
      we = (e) => {
        P.value = e;
      },
      Pe = (e) => {
        L.value = e;
      },
      De = (e) => {
        R.value = e;
      },
      re = (e, s = io) =>
        $_$() && Array.isArray(e)
          ? (typeof e[0] == "string" &&
              (e = o(e)
                .slice()
                .map((a) => s[a])
                .flat()),
            B(e))
          : [],
      ke = (e) => {
        Y.value = e;
      },
      d = (e) => {
        _.value = e;
      },
      Ee = (e) => {
        J.value = e;
      },
      Oe = (e) => {
        $_$();
        I.value = le(e);
      },
      He = (e) => {
        $_$();
        h.value = ie(e);
      },
      S = (e) => {
        j.value = e;
      },
      Le = (e) => {
        F.value = e;
      },
      Ne = (e) => {
        (b.value = e ? void 0 : 1), (D.value = e);
      },
      C = (e) => {
        $.value = e;
      },
      W = (e) => {
        X.value = e;
      },
      ce = (e) => {
        K.value = e;
      },
      Me = (e) => {
        k.value = e;
      },
      Ue = (e) => {
        N.value = e;
      },
      Re = (e) => {
        b.value = e;
      },
      Ve = (e) => {
        V.value = e;
      },
      ue = () => {
        H == null || H.abort(), (H = void 0);
      },
      $e = (e) => {
        Z.value = e;
      },
      z = async () => {
        $_$();
        let e, s;
        ue(), W(!0);
        const t = { accountId: o(M), abortController: H };
        try {
          const a =
            (([e, s] = T(() => m.getCouponSaleInfos(t))),
            (e = await e),
            s(),
            e);
          W(!1), a.success && ae(a.data.couponSaleInfos);
        } catch (a) {
          const { isCancel: y } = a;
          y || c.error("Loading sale info failed", a);
        } finally {
          W(!1);
        }
      };
    return {
      currencyIso: Se,
      currencySymbol: Ie,
      dateTo: h,
      dateFrom: I,
      account: x,
      accountId: M,
      coefViewId: E,
      coupons: _,
      summaryInfo: J,
      bets: ge,
      selectedCoupon: Te,
      selectedTabId: V,
      sortType: b,
      isLoadingData: $,
      isLoading: Ce,
      hasSelectedCoupon: he,
      errorMessage: j,
      searchQuery: k,
      isCalculatedDateType: D,
      filteredCoupons: te,
      filteredBets: ve,
      couponStatuses: L,
      autosaleStatuses: R,
      feedTypes: F,
      couponTypes: O,
      selectedCouponId: N,
      saleTransactions: K,
      couponsCount: oe,
      contentMessage: be,
      filteredCouponsCount: se,
      totoSortBy: ne,
      topEventId: Ae,
      isCouponCompact: Z,
      setTotoSortType: Be,
      setSortType: Re,
      loadCashboxCoupons: async () => {
        $_$();
        let e, s;
        if ((C(!0), d([]), S(""), o(Q))) {
          S(n("office_history_filter_max_period_error")), C(!1);
          return;
        }
        const t = {
          dateFrom: o(I),
          dateTo: o(h),
          accountId: o(M),
          coefViewId: o(E),
          feedTypes: o(F),
          couponStatuses: o(L),
          couponTypes: o(O),
          sortType: o(b),
          isCalculatedDateType: o(D),
        };
        try {
          const {
            coupons: a = [],
            success: y,
            error: g,
          } = (([e, s] = T(() => m.getCashboxCoupons(t))),
          (e = await e),
          s(),
          e);
          !y || g ? (d([]), S(g.message)) : d(a);
        } catch (a) {
          a.isCancel || m.consoleError(a);
        }
        C(!1);
      },
      setAccountId: we,
      setSearchQuery: Me,
      setCouponStatuses: Pe,
      setAutosaleStatuses: De,
      setCouponTypes: ke,
      setDateFrom: Oe,
      setDateTo: He,
      setFeedTypes: Le,
      setIsCalculatedDateType: Ne,
      loadBettingCoupons: async ({
        topEventIdParam: e,
        couponsCountParam: s,
      } = {}) => {
        $_$();
        let t, a;
        if (!(!o(ee) || !o(x))) {
          if ((C(!0), S(""), o(Q))) {
            S(n("office_history_filter_max_period_error")), C(!1), d([]);
            return;
          }
          try {
            const y = {
                account: o(x),
                coefViewId: o(E),
                couponStatuses: re(o(L)),
                couponTypes: o(O),
                count: s,
                dateFrom: o(I),
                dateTo: o(h),
                feedTypes: o(F),
                isCalculatedDateType: o(D),
                sortType: o(b),
                globalChampId: e,
              },
              { summaryInfo: g, coupons: G = [] } =
                (([t, a] = T(() => m.getBetsHistory(y))),
                (t = await t),
                a(),
                t);
            Ee(g),
              Array.isArray(G) ? d(G) : d([]),
              G.length > 0 && (([t, a] = T(() => z())), await t, a());
          } catch (y) {
            y.isCancel || m.consoleError(y);
          } finally {
            C(!1);
          }
        }
      },
      loadUncalculatedCoupons: async () => {
        $_$();
        let e, s;
        C(!0), d([]), S("");
        try {
          const t = {
              accountId: o(M),
              coefViewId: o(E),
              couponTypes: o(O),
              dateFrom: o(I),
              dateTo: o(h),
              feedTypes: o(F),
              sortType: o(b),
            },
            {
              coupons: a = [],
              success: y,
              error: g,
            } = (([e, s] = T(() => m.getBetsUncalculated(t))),
            (e = await e),
            s(),
            e);
          !y || g ? (d([]), S(g)) : d(a);
        } catch (t) {
          t.isCancel || m.consoleError(t);
        } finally {
          C(!1);
        }
      },
      loadAutoSaleCoupons: async () => {
        $_$();
        let e, s;
        if (o(ee)) {
          if ((C(!0), d([]), S(""), o(Q))) {
            S(n("office_history_filter_max_period_error")), C(!1);
            return;
          }
          try {
            const t = {
                account: o(x),
                coefViewId: o(E),
                couponStatuses: re(o(R), po),
                couponTypes: o(O),
                dateFrom: o(I),
                dateTo: o(h),
                feedTypes: o(F),
                isCalculatedDateType: o(D),
                sortType: o(b),
                betsWithAutoSaleOrder: !0,
              },
              { coupons: a = [] } =
                (([e, s] = T(() => m.getBetsHistory(t))),
                (e = await e),
                s(),
                e);
            Array.isArray(a) ? d(a) : d([]),
              a.length > 0 && (([e, s] = T(() => z())), await e, s());
          } catch (t) {
            t.isCancel || m.consoleError(t);
          } finally {
            C(!1);
          }
        }
      },
      setSelectedCouponId: Ue,
      loadSaleInfo: z,
      cancelLoadSaleInfo: ue,
      loadSaleTransactions: async ({ couponId: e, initialCouponAmount: s }) => {
        $_$();
        let t, a;
        ce([]);
        const y = { couponId: e, initialCouponAmount: s };
        try {
          const g =
            (([t, a] = T(() => m.getCouponSaleTransactions(y))),
            (t = await t),
            a(),
            t);
          ce(g);
        } catch (g) {
          c.error("error load coupon sale transactions", g);
        }
      },
      patchCoupon: Fe,
      setCouponsSaleInfos: ae,
      setCoupons: d,
      setSelectedTabId: Ve,
      deleteCoupon: async (e) => {
        $_$();
        let s, t;
        try {
          ([s, t] = T(
            () =>
              $_$() &&
              m.deleteBetsHistoryCoupon({ accountId: o(P), couponId: e.id })
          )),
            await s,
            t(),
            xe(e),
            ([s, t] = T(() => f(n("main_done")))),
            await s,
            t();
        } catch (a) {
          a.isCancel || m.consoleError(a);
        }
      },
      setIsBettingHistoryCouponCompact: $e,
    };
  }),
  Fo = to({
    __name: "CouponPromocodeAdd",
    setup(n) {
      $_$();
      const c = so(go, "OfficePromoCodeAdd"),
        { promoCodes: l } = fo(),
        { manualPromoCode: r } = mo(),
        i = (f) => {
          l.value.push(f), (r.value = f);
        };
      return (f, A) => $_$() && (ao(), no(o(c), { onApplyPromoCode: i }));
    },
  }),
  jo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Fo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  jo as CouponPromocodeAdd,
  Io as getBetsHistoryContentMessage,
  Vo as sportMenuFuseOptions,
  Uo as toggleArrayItem,
  $o as useBetsHistoryBettingStore,
  Bo as useBetsHistoryTopEvents,
  Ro as useCouponPossiblePayout,
};
