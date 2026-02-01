import $_$ from "./$_$.js";
$_$();
import {
  compileBettingStoreType as K,
  BETTING_STORE_TYPE_LIVE_LIST as Q,
} from "./7fd3152d11.js";
import {
  defineDynamicBettingStore as O,
  useSelectedBettingEntitiesStore as q,
  useBettingState as X,
  useDateTimeFilterStore as j,
} from "./9de70556bb.js";
import {
  createSelectedBettingEntitiesStore as k,
  RequestManager as ee,
  getCountries as te,
  LANGS_NAME_PATH as re,
  getSportMenuSectionParams as oe,
  FEEDS_CONFIG as x,
} from "./entry-50afb6f36c.js";
import {
  disableReactivity_disableReactivity as ne,
  index_useHttpModule as se,
  index_useClientHeaders as ie,
  index_useCookies as ae,
  index_useLogger as w,
  createSharedComposable_createSharedComposable_2 as ce,
  useGlobalStore as H,
  reactivity_esmBundler_ref as v,
  runtimeCore_esmBundler_computed as a,
  reactivity_esmBundler_unref as o,
  execAsync as ue,
  useUserConfigStore as le,
  index_getConfigs as de,
  index_useDateTimeService as Se,
  bettingType_BettingType as pe,
  uniqueBy as me,
  BettingPageType as ge,
  index_default_51 as m,
  index_default_11 as B,
  index_default_6 as b,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useMatchTabFilter as Ce } from "./858ab97c10.js";
import { useBettingStore as fe } from "./1af6a171a2.js";
const _e = O("selectedSportsMenuEntitiesStore", (e) => {
    const t = q({ pageType: e.pageType, bettingType: e.bettingType }),
      r = k(e);
    return (
      t.syncMethodsForMenuSectionId({
        setList: r.setSelectedMenuSectionIds,
        toggleItem: r.toggleSelectedMenuSectionId,
        immediate: !0,
      }),
      t.syncMethodsForSectionSportId({
        setList: r.setSelectedSectionSportIds,
        toggleItem: r.toggleSelectedSectionSportId,
        immediate: !0,
      }),
      t.syncMethodsForSectionChampId({
        setList: r.setSelectedSectionChampIds,
        toggleItem: r.toggleSelectedSectionChampId,
        immediate: !0,
      }),
      r
    );
  }),
  Me = O("selectedNavSportsMenuEntitiesStore", k),
  ye = ({ data: e }) =>
    e.map(({ id: t, code: r, countryName: i }) => ({
      id: t,
      alpha2: r,
      name: i,
    }));
var Ie = Object.defineProperty,
  Fe = (e, t, r) =>
    t in e
      ? Ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  he = (e, t, r) => Fe(e, t + "", r);
class ve {
  constructor(t) {
    he(this, "requestManager"), (this.requestManager = new ee(t));
  }
  getCountries(t) {
    const i = { method: te, parser: (c) => $_$() && ne(ye({ data: c })) };
    return this.requestManager.loadRaw({ type: "country", api: i, params: t });
  }
  cancelAllRequest() {
    return this.requestManager.cancelAllRequest();
  }
}
const Be = () => {
  $_$();
  const e = se(),
    t = ie(),
    r = ae(),
    i = w();
  return {
    countryFilterApi: new ve({
      $httpModule: e,
      $clientHeaders: t,
      $cookies: r,
      $logger: i,
    }),
  };
};
var be = ((e) => (
  (e[(e.TOOLBAR = 0)] = "TOOLBAR"), (e[(e.DASHBOARD = 1)] = "DASHBOARD"), e
))(be || {});
const Oe = 225,
  N = (e) => ({
    text: e.name,
    ico: e.id === Oe ? "default" : e.id,
    path: re,
    strForSearch: e.name,
    ...e,
  }),
  Le = ce(() => {
    $_$();
    const e = H(),
      { countryFilterApi: t } = Be(),
      r = w(),
      i = v(!1),
      c = v([]),
      l = v(),
      M = a(() => {
        $_$();
        var n;
        return (n = o(l)) == null ? void 0 : n.id;
      }),
      g = a(() => {
        $_$();
        const n = o(l);
        if (n) return N(n);
      }),
      y = a(() => $_$() && o(c).map(N)),
      I = (n) => {
        l.value = n;
      },
      C = (n) => {
        c.value = n;
      };
    return {
      currentCountry: l,
      currentCountryId: M,
      currentCountryOption: g,
      countryOptions: y,
      setCurrentCountry: I,
      setCountries: C,
      loadCountries: async () => {
        $_$();
        let n, f;
        if (!(o(c).length || o(i)))
          try {
            i.value = !0;
            const p = e.getLanguage,
              { data: _ } =
                (([n, f] = ue(() => t.getCountries({ lng: p }))),
                (n = await n),
                f(),
                n);
            C(_);
          } catch (p) {
            r.error("countryFilterLoadCountries error", p);
          } finally {
            i.value = !1;
          }
      },
    };
  }),
  Ne = O("bettingRequestParamsStore", ({ bettingType: e, pageType: t }) => {
    $_$();
    const r = le(),
      i = fe(),
      c = H(),
      [l, { id: M }] = de(-1e3, -1012),
      g = Se(),
      { bettingStoreType: y } = X({ bettingType: e, pageType: t }),
      { listSelectedSectionSportIds: I } = q({ bettingType: e, pageType: t }),
      { listSelectedSectionSportIds: C } = _e({ bettingType: e, pageType: t }),
      { listSelectedSectionSportIds: L } = Me({ bettingType: e, pageType: t }),
      { dateTimeFilterLocalConfig: n } = j({ pageType: t, bettingType: e }),
      { liveTab: f } = Ce(),
      { currentCountryId: p } = Le(),
      _ = a(() => ($_$() && o(f) === 1 ? K(o(t), pe.LINE) : o(y))),
      G = () => {
        $_$();
        const { hour: s, dateFrom: S, dateTo: E, day: P } = o(n) || {},
          u = { tsTo: 0, tsFrom: 0, minOffset: 0 };
        if (s) return (u.minOffset = s * 60), u;
        const F = -(g.timeZoneDiff * 60);
        if (typeof P == "number") {
          const d = g.getCurrentUserDate(),
            h = B(b(d, P));
          h.setMinutes(F);
          const J = b(h, 1);
          return (u.tsFrom = m(h)), (u.tsTo = m(J)), u;
        }
        if (S) {
          const d = B(S);
          d.setMinutes(F), (u.tsFrom = m(d));
        }
        if (E) {
          const d = B(E);
          d.setMinutes(F), (u.tsTo = m(b(d, 1)));
        }
        return u;
      },
      U = a(
        () =>
          $_$() &&
          me(
            [o(I), o(C), o(L)].map((s) => oe(s)).flat(),
            (s) => s.sectionSportId
          ).map(({ sportId: s, menuSectionOriginal: S }) => ({
            sportId: s,
            menuSection: S,
          }))
      ),
      A = a(() => ($_$() && o(p)) || M),
      $ = a(() => {
        $_$();
        const s = Q.includes(o(_))
          ? r.liveSportsBlackList
          : r.lineSportsBlackList;
        return s.length ? s : void 0;
      }),
      T = a(() => i.bettingCyberMatchesFilterType),
      D = a(() => i.bettingSportsByCategories),
      R = a(() => c.getLanguage),
      Y = a(() => i.filteredMarkets || void 0),
      V = !0,
      W = x.virtualSportsFeed,
      Z = x.groupChamps,
      z = a(() => $_$() && o(t) === ge.BETSONYOUR);
    return {
      paramBettingStoreType: _,
      paramCountryId: A,
      paramAntiSports: $,
      paramCyberFlag: T,
      paramSportCategoriesFlag: D,
      paramLanguage: R,
      paramWithCountries: V,
      paramPartnerId: l,
      paramVirtualSports: W,
      paramCountryOnly: z,
      paramSelectedSportParams: U,
      getBettingCommonParamsForApi: () => {
        $_$();
        const s = G();
        s.tsFrom < m(new Date()) && (s.tsFrom = 0);
        const S = {
          country: o(A),
          cyberFlag: o(T),
          lng: o(R),
          sportCategoriesFlag: o(D),
          partner: o(l),
          filterMarketGroups: o(Y),
          groupChamps: o(Z),
        };
        return { ...s, ...S };
      },
    };
  });
export {
  be as CountryFilterType,
  Ne as useBettingRequestParamsStore,
  Be as useCountryFilterApi,
  Le as useCountryFilterStore,
  Me as useSelectedNavSportMenuEntitiesStore,
  _e as useSelectedSportMenuEntitiesStore,
};
