import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./f986a79eac.js",
      "./entry-50afb6f36c.js",
      "./1b1940fd00.js",
      "./737aa0ba6f.css",
      "./f9ccf7bc98.js",
      "./10dcfb9c91.js",
      "./11286bfc75.js",
      "./9de70556bb.js",
      "./7fd3152d11.js",
      "./1af6a171a2.js",
      "./aec9b867d8.css",
    ])
) => $_$() && i.map((i) => d[i]);
import {
  __vitePreload as X,
  MediaTarget as Y,
  loadRightSideConfigDesktop as Z,
  _export_sfc as M,
  useCommonAnalytics as ee,
  useBetsCount as oe,
  useShowRegistrationForm as te,
  createCouponSellSettingsModal as se,
} from "./entry-50afb6f36c.js";
import {
  index_default_4 as ie,
  index_default_5 as ne,
  runtimeCore_esmBundler_defineComponent as V,
  theme_constants_themeType as P,
  runtimeCore_esmBundler_defineAsyncComponent as re,
  runtimeCore_esmBundler_createBlock as D,
  runtimeCore_esmBundler_openBlock as S,
  reactivity_esmBundler_unref as o,
  execAsync as B,
  runtimeCore_esmBundler_resolveComponent as y,
  runtimeCore_esmBundler_createElementBlock as A,
  runtimeCore_esmBundler_createVNode as E,
  runtimeCore_esmBundler_withCtx as ae,
  runtimeCore_esmBundler_createElementVNode as h,
  index_useAppStorage as z,
  useGlobalStore as f,
  index_getConfig as R,
  reactivity_esmBundler_ref as U,
  runtimeCore_esmBundler_computed as s,
  runtimeCore_esmBundler_onBeforeMount as le,
  AppStorageKey as I,
  createSharedComposable_createSharedComposable_2 as F,
  index_useT as ce,
  index_useLogger as H,
  index_getConfigs as N,
  LanguageCode as de,
  useRouterMethodsWithLang as $,
  useAccountStore as G,
  useUserConfigStore as x,
  size_constants_sizeType as ue,
  runtimeCore_esmBundler_resolveDirective as ge,
  shared_esmBundler_normalizeClass as W,
  runtimeCore_esmBundler_withDirectives as _e,
  ICON_COLORED_SVG_PATH as pe,
  runtimeCore_esmBundler_renderSlot as me,
  index_useVModal as he,
  runtimeCore_esmBundler_onMounted as we,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { withAsyncContext as Se } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import { useCouponModalThemeProvider as fe } from "./32064d16d1.js";
import { useOpenedCouponsStore as Ce } from "./5389ac53d9.js";
function Be(n) {
  $_$();
  return ie(1, arguments), ne(n).getTime() < Date.now();
}
const Pe = V({
    __name: "RightSideMedia",
    props: { theme: { default: P.primary } },
    setup(n) {
      $_$();
      const t = re(() =>
          X(
            () => import("./f986a79eac.js").then((e) => e.MediaApp$1),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            import.meta.url
          )
        ),
        r = Y.SIDE;
      return (e, i) =>
        $_$() &&
        (S(),
        D(o(t), { target: o(r), theme: e.theme }, null, 8, [
          "target",
          "theme",
        ]));
    },
  }),
  be = { class: "download-app-widget-loader" },
  ve = V({
    __name: "DownloadAppWidgetLoader",
    async setup(n) {
      $_$();
      let t, r, e, i;
      const {
        config: {
          downloadAppWidgetTabsUiSkeletonTheme: d,
          downloadAppWidgetContentUiSkeletonTheme: l,
        },
      } = (([e, i] = Se(() => Z())),
      (e = (([t, r] = B(() => e)), (t = await t), r(), t)),
      i(),
      e)();
      return (c, a) => {
        $_$();
        const u = y("UiSkeleton");
        return (
          S(),
          A("div", be, [
            E(
              u,
              { theme: o(d), class: "download-app-widget-loader__tabs" },
              null,
              8,
              ["theme"]
            ),
            E(
              u,
              { theme: o(l), class: "download-app-widget-loader__content" },
              {
                default: ae(
                  () =>
                    ($_$() && a[0]) ||
                    (a[0] = [
                      h(
                        "div",
                        { class: "download-app-widget-loader__qr" },
                        null,
                        -1
                      ),
                      h(
                        "ul",
                        { class: "download-app-widget-loader__info" },
                        [
                          h("li", { class: "download-app-widget-loader__row" }),
                          h("li", { class: "download-app-widget-loader__row" }),
                          h(
                            "li",
                            { class: "download-app-widget-loader__cols" },
                            [
                              h("p", {
                                class: "download-app-widget-loader__col",
                              }),
                              h("p", {
                                class: "download-app-widget-loader__col",
                              }),
                            ]
                          ),
                          h("li", { class: "download-app-widget-loader__row" }),
                          h("li", { class: "download-app-widget-loader__row" }),
                        ],
                        -1
                      ),
                    ])
                ),
                _: 1,
              },
              8,
              ["theme"]
            ),
          ])
        );
      };
    },
  }),
  ze = M(ve, [["__scopeId", "data-v-b9038615"]]),
  Ae = ({ isSyncVisibleFlagBeforeMount: n = !1 } = {}) => {
    $_$();
    const t = z(),
      r = f(),
      e = R(67),
      i = U(!1),
      d = s(() => $_$() && r.isRightSectionVisible && o(i)),
      l = async () => {
        $_$();
        let c, a;
        const u =
          (([c, a] = B(() => $_$() && t.getItem(I.DOWNLOAD_APP_WIDGET_SHOWED))),
          (c = await c),
          a(),
          c);
        i.value = typeof u == "boolean" ? u && e : !u && e;
      };
    return (
      n &&
        le(() => {
          l();
        }),
      { isVisible: i, isDownloadAppWidgetVisibleInRightMenu: d }
    );
  },
  Re = F(() => {
    const { sendGTagEvent: n, sendGoogleAndFatmanEvent: t } = ee({
      analyticsCategory: "v3_Правый блок_регистрация",
    });
    return {
      trackClickOnRulesLinkBonusAccount: () => {
        t({ google: "promo_games_rules_main_page_call", fatman: 10756 });
      },
      trackClickOnRightSideRegister: () => {
        n("v3_Регистрация");
      },
      trackClickOnActivateBonusAccount: () => {
        n("v3_Клик на кнопку Активировать бонусный счет"),
          t({ google: "promo_games_main_page_call", fatman: 10755 });
      },
      toggleCompactView: (l = !1) => {
        n(l ? "v3_Скрыть блок" : "v3_Зафиксировать блок");
      },
    };
  }),
  Fe = ({ hasRegistration: n }) => {
    $_$();
    const t = ce(),
      r = oe(),
      e = f(),
      { toggleCompactView: i } = Re(),
      d = H(),
      [l, { id: c }, a, u] = N(253, -1004, 553, 617),
      { isEnableRegistration: p } = te(),
      g = s(() => e.isUserAuth),
      _ = s(() => e.isRightSectionHidden),
      m = s(() => e.isRightSectionVisible),
      w = s(() => e.isRightSectionHover),
      k = s(() => e.isLowResolutionScreen),
      b = s(() => $_$() && l && o(m) && !o(g) && !o(r) && o(p)),
      C = s(() => $_$() && o(p) && !o(g) && !o(m) && o(n)),
      v = s(() => !1),
      q = s(() => $_$() && o(m) && c === de.RU && a),
      K = s(() => $_$() && o(g) && o(_) && u),
      j = s(() => $_$() && { "right-side-controls--are-compact": !o(m) }),
      J = s(() => ($_$() && o(_) ? t("main_toggle_text") : ""));
    return {
      isAuthorized: g,
      isRightSectionHidden: _,
      isRightSectionVisible: m,
      isRightSectionHover: w,
      isLowResolutionScreen: k,
      isRightSideRegistrationButtonVisible: C,
      isRegistrationShown: b,
      isRightSideBetConstructorVisible: v,
      isShowOneClickBet: K,
      columnToggleButtonTooltip: J,
      couponColumnControlsClasses: j,
      compactViewToggle: async () => {
        $_$();
        let L, T;
        const O = o(_);
        i(O);
        try {
          ([L, T] = B(() => e.installIsRightSectionHidden(!O))), await L, T();
        } catch (Q) {
          d.error("Unable to toggle right side visible mode.", Q);
        }
      },
      isRightSideBookmakerRatingVisible: q,
    };
  },
  ke = () => {
    $_$();
    const n = f(),
      { getLinkWithLang: t } = $(() => n.language),
      r = G(),
      [e, i] = N(610, 572),
      d = t("/bonus/rules/1st"),
      l = t("/office/account"),
      c = s(() => n.isUserAuth),
      a = s(() => r.isAvailableFirstDepositBonus);
    return {
      isShowBonusWidget: s(() => $_$() && e && i && o(c) && o(a)),
      bonusPageRoute: d,
      officeAccountPageRoute: l,
    };
  },
  We = () => {
    $_$();
    const n = R(2182),
      t = G(),
      r = f(),
      e = x(),
      i = s(() => r.isUserAuth),
      d = s(() => t.isAvailableFirstDepositBonus),
      l = s(() => e.getUserData.firstDepositBonus),
      c = s(() => ($_$() && n ? (o(i) ? o(d) : !0) : !1)),
      { getLinkWithLang: a } = $(() => r.language),
      u = a("/registration"),
      p = a("/office/settings"),
      g = a("/office/account"),
      _ = a("/bonus/rules/slot_first_deposit"),
      m = a("/bonus/rules/first-bet"),
      w = s(() => ($_$() && o(i) ? (o(l) === -1 ? o(p) : o(g)) : o(u))),
      k = s(() => {
        $_$();
        var b;
        const C = o(p),
          v = o(m);
        return o(i)
          ? (b = { [-1]: C, 16: v, 1: o(_), 2: C }[o(l)]) != null
            ? b
            : C
          : v;
      });
    return { isShowNewUserBonusWidget: c, activateRoute: w, detailsRoute: k };
  },
  De = ["aria-label"],
  ye = ["src", "alt"],
  Ie = { class: "right-side-compact-widgets-dropdown__content" },
  Ve = V({
    __name: "RightSideCompactWidgetsDropdown",
    props: {
      tooltip: {},
      ico: { default: "" },
      coloredSvg: { default: "" },
      image: { default: "" },
      icoSize: { default: ue.m },
      isReverseIcon: { type: Boolean, default: !1 },
      theme: { default: P.primary_40 },
    },
    setup(n) {
      $_$();
      const t = U(!1),
        r = (e) => {
          t.value = e;
        };
      return (e, i) => {
        $_$();
        const d = y("UiIco"),
          l = y("UiColoredSvg"),
          c = ge("tooltip");
        return (
          S(),
          A(
            "div",
            {
              class: W([
                "right-side-compact-widgets-dropdown",
                [
                  `right-side-compact-widgets-dropdown--theme-${e.theme}`,
                  { "right-side-compact-widgets-dropdown--is-fixed": o(t) },
                ],
              ]),
            },
            [
              _e(
                (S(),
                A(
                  "button",
                  {
                    class: "right-side-compact-widgets-dropdown__toggle",
                    "aria-label": e.tooltip,
                    type: "button",
                  },
                  [
                    e.ico
                      ? (S(),
                        D(
                          d,
                          {
                            key: 0,
                            ico: e.ico,
                            size: e.icoSize,
                            class: W([
                              "right-side-compact-widgets-dropdown__icon",
                              {
                                "right-side-compact-widgets-dropdown__icon--reverse":
                                  e.isReverseIcon,
                              },
                            ]),
                          },
                          null,
                          8,
                          ["ico", "size", "class"]
                        ))
                      : e.coloredSvg
                      ? (S(),
                        D(
                          l,
                          {
                            key: 1,
                            name: e.coloredSvg,
                            path: o(pe),
                            class: W([
                              "right-side-compact-widgets-dropdown__icon",
                              {
                                "right-side-compact-widgets-dropdown__icon--reverse":
                                  e.isReverseIcon,
                              },
                            ]),
                          },
                          null,
                          8,
                          ["name", "path", "class"]
                        ))
                      : (S(),
                        A(
                          "img",
                          { key: 2, src: e.image, alt: e.tooltip },
                          null,
                          8,
                          ye
                        )),
                  ],
                  8,
                  De
                )),
                [[c, e.tooltip]]
              ),
              h("div", Ie, [
                me(
                  e.$slots,
                  "default",
                  { pinned: o(t), updatePinned: r },
                  void 0,
                  !0
                ),
              ]),
            ],
            2
          )
        );
      };
    },
  }),
  He = M(Ve, [["__scopeId", "data-v-f4fd0559"]]),
  Ne = () => {
    $_$();
    const n = he(),
      t = fe(),
      { updateCouponsWithSaleInfos: r } = Ce(),
      e = async () => {
        $_$();
        let p, g;
        ([p, g] = B(() => r())), await p, g(), n.show(se(), { theme: t() });
      },
      { isVisible: i } = Ae({ isSyncVisibleFlagBeforeMount: !0 }),
      { isShowBonusWidget: d } = ke(),
      { isShowNewUserBonusWidget: l } = We(),
      c = f(),
      a = R(35),
      u = s(() => c.isUserAuth && a);
    return {
      sellCoupons: e,
      isShowBonusWidget: d,
      isShowSaleCouponWidget: u,
      isShowNewUserBonusWidget: l,
      isDownloadAppWidgetVisible: i,
    };
  },
  $e = F(() => {
    $_$();
    const n = f(),
      t = x(),
      r = H(),
      e = z(),
      i = U(!1),
      d = () => {
        $_$();
        e.setItem(I.EMAIL_SUBSCRIPION, new Date(Date.now() + 864e5)),
          (i.value = !1);
      },
      l = async () => {
        $_$();
        let _, m;
        try {
          const w =
            (([_, m] = B(() => $_$() && e.getItem(I.EMAIL_SUBSCRIPION))),
            (_ = await _),
            m(),
            _);
          i.value = !(w && !Be(w));
        } catch (w) {
          r.error("fail get emailFormHiddenTime", w);
        }
      },
      c = R(555),
      a = s(() => n.isUserAuth),
      u = s(() => t.email),
      p = s(() => t.isInstalled),
      g = s(() => $_$() && o(a) && !o(u) && o(p) && c && o(i));
    return we(l), { isShowEmailSubscription: g, hideEmailWidget: d };
  });
export {
  ze as DownloadAppWidgetLoader,
  He as RightSideCompactWidgetsDropdown,
  Pe as _sfc_main,
  ke as useBonusWidget,
  Ne as useCompactWidgetsData,
  Ae as useDownloadAppWidgetVisibleControls,
  $e as useEmailSubscriptionWidget,
  We as useNewUserBonusWidget,
  Re as useRegistrationWidgetAnalytics,
  Fe as useRightSideData,
};
