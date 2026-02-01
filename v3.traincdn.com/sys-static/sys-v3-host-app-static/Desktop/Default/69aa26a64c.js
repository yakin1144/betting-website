import $_$ from "./$_$.js";
$_$();
import {
  theme_constants_themeType as e,
  iconName as n,
  size_constants_sizeType as r,
  WeightType as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedFeature as l,
  Platforms as i,
} from "./entry-85993dc44c.js";
const t = l("UserControlConfig", !0, [i.Desktop]),
  o = {
    uiButtonTheme: e.primary,
    balanceInfoTheme: e.primary,
    settingsToolbarTheme: e.primary,
    ico: n.REFRESH,
    isUppercasePaymentBtn: !0,
    isUppercaseRegistrationBtn: !0,
    isCompactUserControlDashboardPayment: !0,
    isAppSettingsToolbar: !0,
    showCompactSettingsToolbarOnLaptop: !1,
    hasPadding: !0,
    size: r.m,
    isSplittedUserOffice: !1,
    btnsTextSize: r.m,
    isAccentUserControlNotAuthorizedPaymentIco: !0,
    isAccentUserControlAuthorizedPaymentIco: !1,
    isAvailableCompactPayment: !0,
    userControlPanelCallbackIco: n.PHONE,
    isAvailableSocialLineLink: !1,
    isShowOnlyNotAuthorizedExternalBtns: !0,
    compactScreenSizeLogoutButton: 1366,
    isAvailableCompactLogoutButton: !0,
    uiDropdownTheme: e.gray100,
  },
  s = t.defineEntityImplementation(() => ({ config: o })),
  _ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: s }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  c = t.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          ...o,
          balanceInfoTheme: e.primary5,
          settingsToolbarTheme: e.primary5,
          uiButtonTheme: e.primary5,
          isAccentUserControlAuthorizedPaymentIco: !0,
          userControlPaymentCustomIco: n.WALLET,
          uiDropdownTheme: e.alternative,
        },
        style: {
          "--user-control-panel-group-balance-indent":
            "calc(var(--gutter) * 2)",
          "--user-control-panel-balance-min-width": "auto",
          "--user-control-panel-balance-short-min-width": "auto",
          "--user-control-panel-bonuses-min-width": "auto",
          "--user-control-panel-bonuses-short-min-width": "auto",
        },
      }
  ),
  h = Object.freeze(
    Object.defineProperty({ __proto__: null, default: c }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  u = t.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          ...o,
          ico: n.RENEW,
          isUppercasePaymentBtn: !1,
          isUppercaseRegistrationBtn: !1,
          isAvailableCompactPayment: !1,
          userControlPaymentCustomIco: n.PLUS_CIRCLE,
          uiDropdownTheme: e.primary,
        },
        style: {
          "--user-control-panel-group-indent": "var(--gutter)",
          "--user-control-panel-group-auth-indent": "var(--gutter)",
          "--user-control-panel-group-balance-indent": "var(--gutter)",
          "--user-control-panel-balance-min-width": "137px",
          "--user-control-panel-balance-short-min-width": "137px",
          "--user-control-panel-bonuses-min-width": "124px",
          "--user-control-panel-bonuses-short-min-width": "124px",
        },
      }
  ),
  S = Object.freeze(
    Object.defineProperty({ __proto__: null, default: u }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  p = t.defineEntityImplementation(() => ({
    config: {
      ...o,
      isUppercasePaymentBtn: !1,
      isUppercaseRegistrationBtn: !1,
      isCompactUserControlDashboardPayment: !1,
      isAppSettingsToolbar: !1,
      hasPadding: !1,
    },
  })),
  U = Object.freeze(
    Object.defineProperty({ __proto__: null, default: p }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  m = t.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          ...o,
          uiButtonTheme: e.primary,
          userControlPanelCallbackIco: n.PHONE_REVERT,
          customCompactScreenSizePaymentButton: 1024,
          compactScreenSizeLogoutButton: 1280,
          uiDropdownTheme: e.primary_30,
        },
        style: {
          "--user-control-panel-group-auth-indent": "var(--gutter)",
          "--user-control-panel-group-balance-indent": "var(--gutter)",
        },
      }
  ),
  T = Object.freeze(
    Object.defineProperty({ __proto__: null, default: m }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  f = t.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          ...o,
          hasPadding: !1,
          size: r.l,
          isSplittedUserOffice: !0,
          showCompactSettingsToolbarOnLaptop: !0,
          isUppercaseRegistrationBtn: !1,
          isUppercasePaymentBtn: !1,
          btnsTextSize: r.l,
          btnsTextWeight: a.BOLD,
        },
      }
  ),
  P = Object.freeze(
    Object.defineProperty({ __proto__: null, default: f }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  d = t.defineEntityImplementation(() => ({
    config: {
      ...o,
      isAvailableSocialLineLink: !0,
      isAccentUserControlNotAuthorizedPaymentIco: !1,
      isAvailableCompactLogoutButton: !1,
    },
    style: {
      "--user-control-panel-balance-min-width": "auto",
      "--user-control-panel-balance-short-min-width": "auto",
      "--user-control-panel-bonuses-min-width": "auto",
      "--user-control-panel-bonuses-short-min-width": "auto",
    },
  })),
  O = Object.freeze(
    Object.defineProperty({ __proto__: null, default: d }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  g = t.defineEntityImplementation(() => ({
    config: {
      ...o,
      isShowOnlyNotAuthorizedExternalBtns: !1,
      customCompactScreenSizePaymentButton: 1024,
      compactScreenSizeLogoutButton: 1280,
    },
  })),
  z = Object.freeze(
    Object.defineProperty({ __proto__: null, default: g }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function C() {
  throw new Error("You can't use sync loaders on client");
}
const E = Object.freeze(
  Object.defineProperty({ __proto__: null, default: C }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  _ as UserControlConfig,
  h as UserControlConfig$1,
  S as UserControlConfig$2,
  U as UserControlConfig$3,
  T as UserControlConfig$4,
  P as UserControlConfig$5,
  O as UserControlConfig$6,
  z as UserControlConfig$7,
  E as loadUserControlConfigSync,
};
