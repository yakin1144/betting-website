import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_inject as V,
  runtimeCore_esmBundler_provide as $,
  reactivity_esmBundler_reactive as pe,
  runtimeCore_esmBundler_defineComponent as E,
  reactivity_esmBundler_toRefs as de,
  runtimeCore_esmBundler_onBeforeUnmount as ye,
  runtimeCore_esmBundler_renderSlot as Ce,
  index_useLogger as ge,
  index_getConfigs as fe,
  useGlobalStore as he,
  useUserConfigStore as Se,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as Be,
  runtimeCore_esmBundler_computed as r,
  size_constants_sizeType as O,
  reactivity_esmBundler_ref as I,
  reactivity_esmBundler_unref as e,
  sortBySearchString as Te,
  execAsync as C,
  BettingPageType as ve,
  runtimeCore_esmBundler_watch as M,
  runtimeCore_esmBundler_onMounted as Oe,
  runtimeCore_esmBundler_resolveComponent as p,
  runtimeCore_esmBundler_createBlock as D,
  runtimeCore_esmBundler_openBlock as L,
  reactivity_esmBundler_isRef as be,
  runtimeCore_esmBundler_withCtx as a,
  runtimeCore_esmBundler_createVNode as g,
  runtimeCore_esmBundler_createTextVNode as w,
  shared_esmBundler_toDisplayString as k,
  runtimeCore_esmBundler_createCommentVNode as xe,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { BETTING_PROPS as P } from "./858ab97c10.js";
import {
  useBettingCommonData as Fe,
  useBettingClearSelectedData as Ue,
} from "./9de70556bb.js";
import {
  useCountryFilterApi as ze,
  CountryFilterType as b,
  useCountryFilterStore as Ae,
} from "./aa92bf211f.js";
import { toUnwrapGetters as Re } from "./1af6a171a2.js";
import {
  _export_sfc as N,
  useCommonAnalytics as Ie,
  loadCountryFilterSelectConfigDesktop as Me,
} from "./entry-50afb6f36c.js";
import { withAsyncContext as De } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import { fuse_esm_default as Le } from "../../../shared-assets/Desktop/__shared_1c5f097ec1.js";
import { useDashboardStore as we } from "./9bf7ffb8ec.js";
const G = Symbol("central menu context"),
  Ke = (i) => $_$() && $(G, pe(i)),
  We = () => $_$() && V(G),
  ke = E({
    name: "CountryFilterAppDataProvider",
    props: { pageType: P.pageType, bettingType: P.bettingType },
    setup(i) {
      $_$();
      const { countryFilterApi: s } = ze(),
        { pageType: l, bettingType: u } = de(i);
      ye(() => s.cancelAllRequest()),
        $(
          "countryFilterProvidedData",
          Re({ ...Fe({ pageType: l, bettingType: u }) })
        );
    },
  });
function Pe(i, s, l, u, f, h) {
  $_$();
  return Ce(i.$slots, "default");
}
const Xe = N(ke, [["render", Pe]]),
  Ve = () => $_$() && V("countryFilterProvidedData"),
  $e = E({
    __name: "CountryFilterSelect",
    props: { type: { default: b.TOOLBAR } },
    async setup(i) {
      $_$();
      let s, l, u, f;
      const h = i,
        Q = ge(),
        { sendGTagEvent: j } = Ie({ analyticsCategory: "v3_Дашборд" }),
        [{ id: x }, F] = fe(-1012, 465),
        U = he(),
        q = Se(),
        { isLive: Y, bettingType: H } = Ve(),
        { bettingClearAllFilters: J } = Ue(),
        { dashboardSetSelectedChampIds: K } = we(),
        {
          setCurrentCountry: S,
          loadCountries: W,
          currentCountry: X,
          countryOptions: m,
          currentCountryOption: Z,
        } = Ae(),
        { changeBettingRoute: ee } = Be(),
        z = r(() => q.countryId),
        te = r(() => U.isUserAuth),
        A = r(() => ($_$() && h.type === b.TOOLBAR ? O.xs : void 0)),
        B = r(() => ($_$() && h.type === b.TOOLBAR ? O.xs : O.m)),
        d = I(""),
        oe = (t) => {
          d.value = t.toLowerCase();
        },
        T = I(!0),
        ne = r(
          () =>
            $_$() &&
            new Le(e(m), {
              ignoreLocation: !0,
              shouldSort: !1,
              threshold: 0.3,
              keys: ["text"],
            })
        ),
        re = r(() =>
          $_$() && e(d)
            ? Te(
                e(ne)
                  .search(e(d))
                  .map(({ item: t }) => t),
                e(d),
                "text"
              )
            : e(m)
        ),
        v = r({
          get: () => $_$() && e(Z),
          set: async (t) => {
            $_$();
            let o, n;
            t.id &&
              (K([]),
              J(),
              ([o, n] = C(
                () =>
                  $_$() &&
                  ee({
                    lng: U.getLanguage,
                    pageType: ve.BETSONYOUR,
                    section: H,
                  })
              )),
              await o,
              n(),
              j(
                Y ? 'v3_Live "Выбрать страну"' : 'v3_Линия "Выбрать страну"',
                String(t.id)
              ),
              S(t));
          },
        }),
        ie = r(() => {
          $_$();
          var t;
          let o = x;
          return (
            F && (o = (t = e(z)) != null ? t : x),
            e(m).find(({ id: n }) => n === o)
          );
        }),
        y = r(() => {
          $_$();
          var t;
          return (t = e(ie)) != null ? t : e(m)[0];
        }),
        R = async () => {
          $_$();
          !e(X) && e(y) && S(e(y));
        },
        se = async () => {
          $_$();
          e(te) && e(y) && S(e(y));
        },
        ue = async () => {
          $_$();
          let t, o;
          try {
            (T.value = !0), ([t, o] = C(() => W())), await t, o();
          } catch (n) {
            Q.error("loadCountries", n);
          } finally {
            ([t, o] = C(() => R())), await t, o(), (T.value = !1);
          }
        };
      M(m, R), F && M(z, se), Oe(ue);
      const ce =
          (([u, f] = De(() => Me())),
          (u = (([s, l] = C(() => u)), (s = await s), l(), s)),
          f(),
          u),
        { config: _ } = ce();
      return (t, o) => {
        $_$();
        const n = p("UiIcoCountry"),
          ae = p("UiCaption"),
          le = p("UiSelectValue"),
          me = p("UiOption"),
          _e = p("UiInputSelect");
        return (
          L(),
          D(
            _e,
            {
              modelValue: e(v),
              "onUpdate:modelValue":
                o[0] || (o[0] = (c) => ($_$() && be(v) ? (v.value = c) : null)),
              onSearchChange: oe,
              options: e(re),
              class: "country-filter-select",
              theme: e(_).uiInputSelectTheme,
              uiMultiSelectTheme: e(_).uiMultiSelectTheme,
              uiSelectOptionTheme: e(_).uiSelectOptionTheme,
              uiEmptyMessageTheme: e(_).uiEmptyMessageTheme,
              size: e(B),
              config: { searchable: !0, internalSearch: !1 },
              noResultMessage: t.$T("main_search_not_found"),
            },
            {
              customSingleLabel: a(
                (c) =>
                  $_$() && [
                    e(T)
                      ? xe("", !0)
                      : (L(),
                        D(
                          le,
                          { key: 0 },
                          {
                            default: a(
                              () =>
                                $_$() && [
                                  g(
                                    n,
                                    { ico: c.option.ico, size: e(A) },
                                    null,
                                    8,
                                    ["ico", "size"]
                                  ),
                                  g(
                                    ae,
                                    { size: e(B) },
                                    {
                                      default: a(
                                        () => $_$() && [w(k(c.option.text), 1)]
                                      ),
                                      _: 2,
                                    },
                                    1032,
                                    ["size"]
                                  ),
                                ]
                            ),
                            _: 2,
                          },
                          1024
                        )),
                  ]
              ),
              customOption: a(
                (c) =>
                  $_$() && [
                    g(
                      me,
                      { captionSize: e(B), theme: e(_).uiOptionTheme },
                      {
                        ico: a(
                          () =>
                            $_$() && [
                              g(n, { ico: c.option.ico, size: e(A) }, null, 8, [
                                "ico",
                                "size",
                              ]),
                            ]
                        ),
                        caption: a(() => $_$() && [w(k(c.option.text), 1)]),
                        _: 2,
                      },
                      1032,
                      ["captionSize", "theme"]
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            [
              "modelValue",
              "options",
              "theme",
              "uiMultiSelectTheme",
              "uiSelectOptionTheme",
              "uiEmptyMessageTheme",
              "size",
              "noResultMessage",
            ]
          )
        );
      };
    },
  }),
  Ze = N($e, [["__scopeId", "data-v-855b5dc8"]]);
export {
  Xe as CountryFilterAppDataProvider,
  Ze as CountryFilterSelect,
  Ke as createCentralMenuContext,
  We as useCentralMenuContext,
};
