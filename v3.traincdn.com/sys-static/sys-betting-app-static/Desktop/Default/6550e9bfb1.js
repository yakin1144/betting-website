import $_$ from "./$_$.js";
$_$();
import {
  index_getConfigs as st,
  useGlobalStore as it,
  index_getConfig as at,
  index_useAppStorage as ut,
  reactivity_esmBundler_shallowRef as K,
  runtimeCore_esmBundler_computed as e,
  reactivity_esmBundler_unref as t,
  bettingType_BettingType as k,
  uniqueBy as lt,
  toDeepReadonly_toDeepReadonly as ct,
  AppStorageKey as z,
  execAsync as R,
  index_useT as pt,
  index_useDateTimeService as Y,
  useTimeSettings_useTimeSettings as dt,
  index_default_11 as N,
  reactivity_esmBundler_ref as mt,
  reactivity_esmBundler_markRaw as _t,
  index_default_54 as M,
  runtimeCore_esmBundler_watch as St,
  runtimeCore_esmBundler_nextTick as J,
  reactivity_esmBundler_toValue as Q,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineDynamicBettingStore as gt,
  useDateTimeFilterStore as yt,
  useSelectedBettingEntitiesStore as X,
} from "./9de70556bb.js";
import { useGameVideoAvailability as ft } from "./c7ea6bc74a.js";
import { useSportsMenuStore as vt } from "./e063df8dd1.js";
import { useBettingStore as ht } from "./1af6a171a2.js";
import {
  useMatchTabFilter as Ct,
  useBettingUpdateData as bt,
} from "./858ab97c10.js";
import {
  groupBy as D,
  SORTED_MENU_SECTIONS as Ft,
} from "./entry-50afb6f36c.js";
const Tt = (a) => {
    const m = new Map(a == null ? void 0 : a.map((i, u) => [i, u]));
    return {
      getKey: (i) => [m.get(i.id), i.name],
      compareKeys: ([i, u], [g, b]) =>
        i !== void 0 && g !== void 0
          ? i - g
          : i !== void 0
          ? -1
          : g !== void 0
          ? 1
          : u.localeCompare(b),
    };
  },
  Vt = gt("sportsMenuFiltersStore", ({ bettingType: a, pageType: m }) => {
    $_$();
    const {
        bettingSectionSports: s,
        bettingSectionChamps: c,
        bettingGames: i,
        sportsMenuGamesWithVideoCount: u,
        sportsMenuGamesCount: g,
      } = vt({ bettingType: a, pageType: m }),
      b = ht(),
      { checkGameVideoAvailable: I } = ft(),
      [h, E = []] = st(311, 153),
      w = it(),
      A = at(2047),
      { getKey: F, compareKeys: G } = Tt(A),
      V = Ct(),
      x = ut(),
      T = K(!1),
      y = K(h),
      _ = K(!0),
      W = e(() => w.getIsGroupByCountry),
      L = e(() => ($_$() && E.includes("isGroupByCountry") ? t(W) : t(y))),
      o = e(() => $_$() && t(a) === k.LIVE),
      n = e(
        () => $_$() && t(o) && b.bettingIsOnlyWithVideos && t(V.liveTab) !== 1
      ),
      p = e(() => $_$() && t(s).filter((r) => r.gamesCountWithVideo)),
      d = e(() => ($_$() && t(n) && t(p).length ? t(p) : t(s))),
      C = e(() => $_$() && lt(t(d).map((r) => r.menuSection))),
      B = e(() => $_$() && D(t(d), (r) => r.menuSection)),
      f = e(() => {
        $_$();
        const r = t(B);
        return Ft.reduce(
          (l, v) => {
            const S = r[v];
            return (
              S &&
                ([1e4, 10001].includes(v)
                  ? (l.short = [...l.short, ...S])
                  : (l.other = [...l.other, ...S])),
              l
            );
          },
          { short: [], other: [] }
        );
      }),
      Z = e(() => $_$() && [...t(f).short, ...t(f).other]),
      $ = e(() => $_$() && t(d).length),
      tt = e(() => ($_$() && t(n) ? t(u) : t(g))),
      H = e(() => $_$() && t(c).filter((r) => r.gamesCountWithVideo)),
      O = e(() => ($_$() && t(n) && t(H).length ? t(H) : t(c))),
      et = e(() => $_$() && D(t(O), (r) => r.sectionSportId)),
      ot = e(() => $_$() && D(t(O), (r) => r.sportId)),
      j = e(() => $_$() && t(i).filter((r) => I(r))),
      P = e(() => ($_$() && t(n) && t(j).length ? t(j) : t(i))),
      rt = e(() => $_$() && D(t(P), (r) => r.sectionChampId)),
      q = e(
        () =>
          $_$() &&
          D(
            t(O),
            (r) => r.sectionSportId,
            (r) => r.countryId
          )
      ),
      nt = e(
        () =>
          $_$() &&
          Object.entries(t(q)).reduce(
            (r, [l, v]) => (
              (r[l] = Object.values(v)
                .map((S) => {
                  const [U] = S;
                  return {
                    id: U.countryId,
                    name: U.countryName,
                    champsCount: S.length,
                  };
                })
                .sort((S, U) => G(F(S), F(U)))),
              r
            ),
            {}
          )
      );
    return ct({
      isGroupByCountry: L,
      isShowSpecialEvents: _,
      isUseOnlyBroadcastEventsFilter: T,
      sportsMenuFilteredSports: d,
      sportsMenuFilteredMenuSections: C,
      sportsMenuFilteredSportsByMenuSection: B,
      sportsMenuFilteredSortedSportsSeparated: f,
      sportsMenuFilteredSortedSportsAll: Z,
      sportsMenuFilteredSportsCount: $,
      sportsMenuFilteredGamesCount: tt,
      sportsMenuFilteredChamps: O,
      sportsMenuFilteredChampsBySectionSportId: et,
      sportsMenuFilteredChampsBySportId: ot,
      sportsMenuFilteredGames: P,
      sportsMenuFilteredGamesBySectionChampId: rt,
      sportsMenuFilteredChampsBySectionSportIdByCountryId: q,
      sportsMenuFilteredCountriesBySectionSportId: nt,
      sportsMenuToggleGroupByCountry: () => {
        $_$();
        y.value = !t(y);
      },
      sportsMenuSetIsUseOnlyBroadcastEventsFilter: (r) => {
        T.value = r;
      },
      sportsMenuToggleGroupWithCountriesAndSpecialEvents: () => {
        $_$();
        x.setItem(z.IS_SHOW_SPECIAL_EVENTS, !t(_)), (_.value = !t(_));
      },
      getAndSetShowSpecialEventsFromStorage: async () => {
        $_$();
        var r;
        let l, v;
        _.value =
          (r =
            (([l, v] = R(() => $_$() && x.getItem(z.IS_SHOW_SPECIAL_EVENTS))),
            (l = await l),
            v(),
            l)) != null
            ? r
            : !0;
      },
    });
  }),
  Wt = ({ pageType: a, bettingType: m } = {}) => {
    $_$();
    const s = pt(),
      c = Y(),
      { timezone: i } = dt(),
      {
        dateTimeFilterLocalConfig: u,
        dateTimeFilterSetLocalConfig: g,
        dateTimeFilterClearLocalConfig: b,
      } = yt({ pageType: a, bettingType: m }),
      { bettingUpdateData: I } = bt({ pageType: a, bettingType: m }),
      h = async (o) => {
        $_$();
        let n, p;
        g(o), ([n, p] = R(() => $_$() && J())), await n, p(), I();
      },
      E = async () => {
        $_$();
        let o, n;
        b(), ([o, n] = R(() => $_$() && J())), await o, n(), I();
      },
      w = e({
        get: () => {
          $_$();
          var o;
          return (o = t(u)) == null ? void 0 : o.hour;
        },
        set: (o) => {
          h({ hour: o });
        },
      }),
      A = e({
        get: () => {
          $_$();
          var o;
          const n = (o = t(u)) == null ? void 0 : o.day;
          return typeof n == "number" ? n : -1;
        },
        set: (o) => {
          h({ day: o });
        },
      }),
      F = e({
        get: () => {
          $_$();
          var o;
          return (o = t(u)) == null ? void 0 : o.dateFrom;
        },
        set: (o) => {
          $_$();
          var n;
          h({ dateFrom: o, dateTo: (n = t(u)) == null ? void 0 : n.dateTo });
        },
      }),
      G = e({
        get: () => {
          $_$();
          var o;
          return (o = t(u)) == null ? void 0 : o.dateTo;
        },
        set: (o) => {
          $_$();
          var n, p;
          h({
            dateFrom:
              (p = (n = t(u)) == null ? void 0 : n.dateFrom) != null
                ? p
                : N(c.getCurrentUserDate()),
            dateTo: o,
          });
        },
      }),
      V = e(() => $_$() && { from: t(G), to: N(c.getCurrentUserDate()) }),
      x = e(() => $_$() && { to: t(F) || N(c.getCurrentUserDate()) }),
      T = mt(c.getCurrentUserDate()),
      y = _t([
        { caption: s("betting_filter_next_hour"), value: 1 },
        { caption: s("betting_filter_next_hours", { hour: 2 }), value: 2 },
        { caption: s("betting_filter_next_hours", { hour: 3 }), value: 3 },
        { caption: s("betting_filter_next_some_hours", { hour: 6 }), value: 6 },
        {
          caption: s("betting_filter_next_some_hours", { hour: 12 }),
          value: 12,
        },
        { caption: s("betting_filter_next_hours", { hour: 24 }), value: 24 },
      ]),
      _ = e(() =>
        Array.from(
          { length: 7 },
          (o, n) =>
            $_$() && {
              caption:
                s(
                  [
                    "betting_filter_today",
                    "betting_filter_tomorrow",
                    "betting_filter_after_tomorrow",
                  ][n]
                ) || M(c.addDays(t(T), n)),
              value: n,
            }
        )
      ),
      W = e(() => {
        $_$();
        var o, n;
        const { hour: p, dateFrom: d, dateTo: C, day: B } = t(u) || {};
        return p
          ? (o = y.find((f) => f.value === p)) == null
            ? void 0
            : o.caption
          : typeof B == "number"
          ? (n = t(_).find((f) => f.value === B)) == null
            ? void 0
            : n.caption
          : d && C
          ? s("betting_filter_from_to_date", { dateFrom: M(d), dateTo: M(C) })
          : d
          ? s("betting_filter_from_date", { dateFrom: M(d) })
          : C
          ? s("betting_filter_to_date", { dateTo: M(C) })
          : s("betting_filter_all_events");
      }),
      L = e(
        () =>
          $_$() && [
            {
              caption: s("betting_filter_by_hours"),
              value: 1,
              options: y,
              model: w,
            },
            {
              caption: s("betting_filter_by_days"),
              value: 2,
              options: t(_),
              model: A,
            },
            { caption: s("betting_filter_by_period"), value: 3 },
          ]
      );
    return (
      St(i, () => {
        (T.value = c.getCurrentUserDate()), E();
      }),
      {
        timeIntervalOptions: L,
        localConfigDateFrom: F,
        localConfigDateTo: G,
        disabledDates: V,
        disabledDatesForDateTo: x,
        currentTimeInterval: W,
        clearFilter: E,
        dateTimeFilterLocalConfig: u,
        dayOptions: _,
        hourOptions: y,
      }
    );
  },
  Lt = ({ pageType: a }) => {
    $_$();
    X({ pageType: a, bettingType: k.LIVE }),
      X({ pageType: a, bettingType: k.LINE });
  },
  Kt = (a) => {
    $_$();
    const m = Y(),
      s = e(() => {
        $_$();
        const { startUnixTimestamp: i } = Q(a);
        return i ? m.getShortDateWithNumericMonth(i) : void 0;
      }),
      c = e(() => {
        $_$();
        const { startUnixTimestamp: i } = Q(a);
        return i ? m.formatTimeByUnix(i) : void 0;
      });
    return { startDateFormatted: s, startTimeFormatted: c };
  };
export {
  Lt as useBettingStoreRegister,
  Kt as useGameTime,
  Wt as useSportsMenuDateTimeFilterData,
  Vt as useSportsMenuFiltersStore,
};
