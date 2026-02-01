import $_$ from "./$_$.js";
$_$();
import { BETTING_PROPS as M } from "./858ab97c10.js";
import {
  runtimeCore_esmBundler_inject as ee,
  runtimeCore_esmBundler_provide as te,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as oe,
  runtimeCore_esmBundler_computed as y,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_defineComponent as L,
  reactivity_esmBundler_toRef as pe,
  index_getConfig as ne,
  runtimeCore_esmBundler_resolveComponent as g,
  runtimeCore_esmBundler_createBlock as T,
  runtimeCore_esmBundler_openBlock as _,
  runtimeCore_esmBundler_withCtx as c,
  runtimeCore_esmBundler_createVNode as C,
  runtimeDom_esmBundler_withModifiers as $,
  runtimeCore_esmBundler_createTextVNode as E,
  shared_esmBundler_toDisplayString as b,
  bettingType_BettingType as U,
  useGlobalStore as V,
  index_getConfigs as se,
  index_useLogger as ae,
  index_useCookies as ie,
  index_useHttpModule as re,
  index_useClientHeaders as me,
  bettingTimerName_BettingTimerName as ce,
  execAsync as W,
  HttpClient as le,
  reactivity_esmBundler_ref as H,
  shared_esmBundler_normalizeClass as D,
  runtimeCore_esmBundler_createElementVNode as S,
  runtimeCore_esmBundler_withDirectives as x,
  runtimeCore_esmBundler_createCommentVNode as ue,
  runtimeCore_esmBundler_createElementBlock as w,
  runtimeCore_esmBundler_Fragment as q,
  runtimeCore_esmBundler_renderList as _e,
  runtimeDom_esmBundler_vShow as z,
  reactivity_esmBundler_toRefs as he,
  reactivity_esmBundler_readonly as de,
  runtimeCore_esmBundler_mergeProps as ge,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useSelectedBettingEntitiesStore as Ce,
  useBettingStateProvider as F,
} from "./9de70556bb.js";
import { withAsyncContext as Te } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import { _sfc_main as fe } from "./762b07d264.js";
import { useBettingChampRoute as Be } from "./37dd3dae1b.js";
import {
  useBettingRouteData as G,
  ChampParser as ve,
  RequestManager as ye,
  liveGetTopMenuChampsZipApi as ke,
  lineGetTopMenuChampsZipApi as Ae,
  loadTopChampsAppConfigDesktop as Ie,
  useToggleTitle as Se,
  _export_sfc as N,
} from "./entry-50afb6f36c.js";
import { useMainMenuAnalytics as Z } from "./30806a74d6.js";
import { LeftSideNavItem as K, LeftSideNavItems as be } from "./53db7ae5ba.js";
import { useBettingTimerInterval as Le } from "./bb0d3b59f5.js";
import { useStartIntervalUpdate as Re } from "./10dcfb9c91.js";
import { useBettingStore as De } from "./1af6a171a2.js";
const j = Symbol("topChampsProvidedData"),
  $e = (o) => $_$() && te(j, o),
  P = () => $_$() && ee(j),
  Ne = (o) => {
    $_$();
    const { toggleSelectedTopChampId: t, clearSelectedEntities: p } = Ce(),
      { changeBettingRoute: s } = oe(),
      {
        champSelectedInBetting: a,
        champRouteLink: i,
        getChampRoute: n,
        routerReplace: r,
        toggleChampInBetting: m,
        lastChampRouteLink: l,
      } = Be(o),
      h = y(() => $_$() && n(o, e(r)));
    return {
      champSelectedInBetting: a,
      champRouteLink: i,
      getChampRoute: n,
      toggleTopChampRoute: (u = !e(a)) =>
        $_$() &&
        (p(),
        t({ item: e(o).sectionChampId, value: u }),
        s(u ? e(h) : e(l)),
        u),
      toggleChampInBetting: m,
    };
  },
  Pe = L({
    __name: "TopChampItem",
    props: { champ: {}, theme: {}, noWrap: { type: Boolean }, size: {} },
    setup(o) {
      $_$();
      const t = o,
        p = pe(t, "champ"),
        { bettingType: s } = P(),
        { trackTopChampSelect: a } = Z(),
        { routePageType: i } = G();
      F({ pageType: i, bettingType: s });
      const {
          champSelectedInBetting: n,
          champRouteLink: r,
          toggleTopChampRoute: m,
        } = Ne(p),
        l = () => {
          m(), a(t.champ.id);
        },
        h = ne(328);
      return (d, u) => {
        $_$();
        const f = g("UiNavLink");
        return (
          _(),
          T(
            K,
            { class: "top-champ-item" },
            {
              default: c(
                () =>
                  $_$() && [
                    C(
                      f,
                      {
                        onClick: $(l, ["stop"]),
                        to: e(r),
                        theme: d.theme,
                        isToggled: e(n),
                        noWrap: d.noWrap,
                        size: d.size,
                      },
                      {
                        ico: c(
                          () =>
                            $_$() && [
                              C(
                                fe,
                                { champ: e(p), isDefaultIcon: !e(h) },
                                null,
                                8,
                                ["champ", "isDefaultIcon"]
                              ),
                            ]
                        ),
                        default: c(() => $_$() && [E(" " + b(e(p).name), 1)]),
                        _: 1,
                      },
                      8,
                      ["to", "theme", "isToggled", "noWrap", "size"]
                    ),
                  ]
              ),
              _: 1,
            }
          )
        );
      };
    },
  }),
  Me = ({ champs: o = [], navigationTopChamp: t }) =>
    o.map((p) => {
      var s;
      const [a] = (s = p.MSs) != null ? s : [];
      return ve.parseChampWithParams({
        navigationTopChamp: t,
        data: p,
        params: { menuSection: a },
      });
    }),
  Ue = ({ champs: o, navigationTopChamp: t }) =>
    Me({ navigationTopChamp: t, champs: o });
var xe = Object.defineProperty,
  we = (o, t, p) =>
    t in o
      ? xe(o, t, { enumerable: !0, configurable: !0, writable: !0, value: p })
      : (o[t] = p),
  O = (o, t, p) => we(o, typeof t != "symbol" ? t + "" : t, p);
class qe {
  constructor(t) {
    O(this, "requestManager"),
      O(this, "requests"),
      (this.requestManager = new ye(t));
    const p = (s) =>
      Ue({
        champs: s.Value,
        navigationTopChamp: t.$siteConfig.navigationTopChamp,
      });
    this.requests = {
      [U.LINE]: { method: Ae, parser: p },
      [U.LIVE]: { method: ke, parser: p },
    };
  }
  async load(t, p, s) {
    return this.requestManager.load({
      type: t,
      api: this.requests[t],
      params: p,
      abortController: s,
    });
  }
  cancelAllRequest(t) {
    this.requestManager.cancelAllRequest(t);
  }
}
const ze = () => {
    $_$();
    const o = V(),
      [t = {}, { id: p }, s] = se(515, -1012, -1001),
      a = ae(),
      i = ie(),
      n = re(),
      r = me(),
      { bettingType: m, topChamps: l, setTopChamps: h } = P(),
      d = Le({ name: ce.TOP_CHAMPS }),
      u = new qe({
        $httpModule: n,
        $clientHeaders: r,
        $cookies: i,
        $logger: a,
        $siteConfig: { navigationTopChamp: t },
      }),
      { loading: f, forceUpdateData: R } = Re({
        interval: d,
        onUpdateData: async () => {
          $_$();
          let B, k;
          try {
            const { status: A, data: I } =
              (([B, k] = W(
                () =>
                  $_$() &&
                  u.load(e(m), {
                    lng: o.getLanguage,
                    userId: o.getUserId,
                    country: p,
                    groupId: s,
                  })
              )),
              (B = await B),
              k(),
              B);
            A === le.STATUS_SUCCESS && h(I);
          } catch (A) {
            a.error("TopChampsApp loadData", A);
          } finally {
            window.coreBus.emit("onTopChampsUpdate", !e(l).length);
          }
        },
        onCancelIntervalRequest: () => $_$() && u.cancelAllRequest(e(m)),
      });
    return { loading: f, forceUpdateData: R };
  },
  Oe = () => {
    $_$();
    const { topChamps: o } = P(),
      t = V(),
      { trackClickMenuNav: p, trackTopChampsToggle: s } = Z(),
      a = H(!1),
      i = y(() => t.isLeftSectionVisible);
    return {
      isOpen: a,
      topChamps: o,
      isLeftSectionVisible: i,
      toggleOpen: () => {
        $_$();
        (a.value = !e(a)), p("top_championship"), s(e(a));
      },
      startTopChampsImmediateIntervalFetching: () => {
        $_$();
        const { loading: m, forceUpdateData: l } = ze();
        !e(m) && !e(o).length && l();
      },
    };
  },
  Ee = { class: "top-champs-app__content" },
  Ve = { class: "top-champs-app__expanded" },
  We = { class: "top-champs-app__text" },
  He = { class: "top-champs-app__text" },
  Fe = L({
    __name: "TopChampsApp",
    async setup(o) {
      $_$();
      let t, p, s, a;
      const i =
          (([s, a] = Te(() => Ie())),
          (s = (([t, p] = W(() => s)), (t = await t), p(), t)),
          a(),
          s),
        { config: n } = i(),
        {
          isOpen: r,
          isLeftSectionVisible: m,
          topChamps: l,
          toggleOpen: h,
          startTopChampsImmediateIntervalFetching: d,
        } = Oe();
      d();
      const { getToggleTitle: u } = Se(),
        f = y(() => $_$() && e(r) && n.topChampsAppIsCustom),
        R = y(() => $_$() && u(e(r))),
        B = y(() =>
          $_$() && e(f)
            ? n.topChampsAppLinkOpenedTheme
            : n.topChampsAppLinkTheme
        );
      return (k, A) => {
        $_$();
        const I = g("UiIco"),
          J = g("T"),
          Q = g("UiNavLinkToggle"),
          X = g("UiNavLink"),
          Y = g("UiButton");
        return (
          _(),
          T(
            K,
            {
              isRounded: "",
              class: D([
                { "top-champs-app--is-opened": e(f) },
                "top-champs-app",
              ]),
            },
            {
              default: c(
                () =>
                  $_$() && [
                    S("div", Ee, [
                      x(
                        S(
                          "div",
                          Ve,
                          [
                            C(
                              X,
                              {
                                onClick: $(e(h), ["stop"]),
                                theme: e(B),
                                clickable: e(n).topChampsAppLinkClickable,
                                separated: e(n).topChampsAppIsSeparated,
                                size: e(n).topChampsAppLinkSize,
                                class: "top-champs-app__link",
                              },
                              {
                                ico: c(
                                  () =>
                                    $_$() && [
                                      C(
                                        I,
                                        {
                                          ico: e(n).topChampsAppLinkIco,
                                          class: D([
                                            {
                                              "top-champs-app__ico--is-decent":
                                                e(n).topChampsAppToggleIsDecent,
                                            },
                                            "top-champs-app__ico",
                                          ]),
                                        },
                                        null,
                                        8,
                                        ["ico", "class"]
                                      ),
                                    ]
                                ),
                                after: c(
                                  () =>
                                    $_$() && [
                                      C(
                                        Q,
                                        {
                                          onClick: $(e(h), ["stop"]),
                                          isToggled: e(r),
                                          "aria-expanded": e(r),
                                          title: e(R),
                                          class: D([
                                            {
                                              "top-champs-app__toggle--is-decent":
                                                e(n).topChampsAppToggleIsDecent,
                                            },
                                            "top-champs-app__toggle",
                                          ]),
                                        },
                                        null,
                                        8,
                                        [
                                          "onClick",
                                          "isToggled",
                                          "aria-expanded",
                                          "title",
                                          "class",
                                        ]
                                      ),
                                    ]
                                ),
                                default: c(
                                  () =>
                                    $_$() && [
                                      e(n).topChampsAppIsCustom
                                        ? (_(),
                                          T(
                                            J,
                                            {
                                              key: 0,
                                              tmp: "main_top_champs_tags",
                                            },
                                            {
                                              top: c(
                                                (v) =>
                                                  $_$() && [
                                                    S("span", We, b(v), 1),
                                                  ]
                                              ),
                                              champs: c(
                                                (v) =>
                                                  $_$() && [
                                                    S("span", He, b(v), 1),
                                                  ]
                                              ),
                                              _: 1,
                                            }
                                          ))
                                        : (_(),
                                          w(
                                            q,
                                            { key: 1 },
                                            [E(b(k.$T("main_top_champs")), 1)],
                                            64
                                          )),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              [
                                "onClick",
                                "theme",
                                "clickable",
                                "separated",
                                "size",
                              ]
                            ),
                            e(r)
                              ? (_(),
                                T(
                                  be,
                                  {
                                    key: 0,
                                    theme: e(n).topChampsAppNavItemsTheme,
                                  },
                                  {
                                    default: c(
                                      () =>
                                        $_$() && [
                                          (_(!0),
                                          w(
                                            q,
                                            null,
                                            _e(
                                              e(l),
                                              (v) =>
                                                $_$() &&
                                                (_(),
                                                T(
                                                  Pe,
                                                  {
                                                    key: v.id,
                                                    champ: v,
                                                    theme:
                                                      e(n)
                                                        .topChampsAppItemLinkTheme,
                                                    size: e(n)
                                                      .topChampsAppLinkSize,
                                                    noWrap:
                                                      e(n)
                                                        .topChampsAppLinkIsNoWrap,
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "champ",
                                                    "theme",
                                                    "size",
                                                    "noWrap",
                                                  ]
                                                ))
                                            ),
                                            128
                                          )),
                                        ]
                                    ),
                                    _: 1,
                                  },
                                  8,
                                  ["theme"]
                                ))
                              : ue("", !0),
                          ],
                          512
                        ),
                        [[z, e(m)]]
                      ),
                      x(
                        C(
                          Y,
                          {
                            tag: "span",
                            narrow: "",
                            theme: e(n).topChampsAppButtonTheme,
                          },
                          {
                            default: c(
                              () =>
                                $_$() && [
                                  C(
                                    I,
                                    { ico: e(n).topChampsAppLinkIco },
                                    null,
                                    8,
                                    ["ico"]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["theme"]
                        ),
                        [[z, !e(m)]]
                      ),
                    ]),
                  ]
              ),
              _: 1,
            },
            8,
            ["class"]
          )
        );
      };
    },
  }),
  Ge = N(Fe, [["__scopeId", "data-v-5e822a27"]]),
  Ze = L({
    name: "TopChampsAppDataProvider",
    components: { TopChampsApp: Ge },
    props: { pageType: M.pageType, bettingType: M.bettingType },
    setup(o) {
      $_$();
      const { pageType: t, bettingType: p } = he(o),
        s = H([]),
        a = (i) => {
          s.value = i;
        };
      return (
        F({ pageType: t, bettingType: p }),
        $e({ bettingType: p, topChamps: s, setTopChamps: a }),
        {}
      );
    },
  });
function Ke(o, t, p, s, a, i) {
  $_$();
  const n = g("TopChampsApp");
  return _(), T(n);
}
const je = N(Ze, [["render", Ke]]),
  Je = L({
    name: "TopChampsApp",
    components: { TopChampsAppDataProvider: je },
    props: { bettingType: { type: String, default: void 0 } },
    setup(o) {
      $_$();
      const t = De(),
        { routePageType: p } = G(),
        s = y(() => {
          var i;
          return (i = o.bettingType) != null ? i : t.currentBettingType;
        });
      return { providerData: de({ pageType: p, bettingType: s }) };
    },
  });
function Qe(o, t, p, s, a, i) {
  $_$();
  const n = g("TopChampsAppDataProvider");
  return (
    _(),
    T(
      n,
      ge({ key: `top-champs-${o.providerData.bettingType}` }, o.providerData),
      null,
      16
    )
  );
}
const ct = N(Je, [["render", Qe]]);
export { ct as TopChampsApp };
