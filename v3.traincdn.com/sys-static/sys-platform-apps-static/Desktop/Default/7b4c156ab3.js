import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./5a5d5783c5.js",
      "./8067c8de3c.js",
      "./entry-76ec3b33ac.js",
      "./6b9163d348.css",
      "./b41b3ff6b7.js",
      "./ee3a878630.js",
      "./7e393df490.js",
      "./845f45f3d7.css",
      "./f0815a9a22.css",
    ])
) => i.map((i) => d[i]);
import {
  index_useVModal as Q,
  createModal_createModal as $,
  index_getConfigs as H,
  index_useT as Y,
  runtimeCore_esmBundler_computed as e,
  reactivity_esmBundler_ref as S,
  size_constants_sizeType as J,
  index_default_4 as U,
  index_default_5 as X,
  index_default_3 as Z,
  index_useAppStorage as ee,
  runtimeCore_esmBundler_watch as te,
  AppStorageKey as y,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  __vitePreload as oe,
  usePlatformAppsLinksStoreAdapter as ne,
  usePlatformAppsLinks as ae,
  OSTypes as l,
  getDownloadButtonAttrs as se,
  getDownloadFormAttrs as ie,
  usePlatformAppsVisibilityAuth as re,
} from "./entry-76ec3b33ac.js";
import {
  usePlatformAppsInstructionLinks as le,
  getInstructionButtonAttrs as C,
} from "./4519216bec.js";
import { useDownloadAppsAnalytics as T } from "./5ad31ecdc8.js";
const ue = () => {
    $_$();
    const n = Q(),
      s = () =>
        $_$() &&
        $({
          name: "DOWNLOAD_APPS_WIDGET_MODAL",
          component: () =>
            oe(
              () => import("./5a5d5783c5.js"),
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url
            ),
        });
    return {
      showDownloadAppsWidgetModal: (a) => {
        n.show(s(), a);
      },
    };
  },
  me = ({ widgetThemeName: n, tabIcons: s }) => {
    $_$();
    const [t, a, r, o] = H(69, 70, 394, 524),
      u = Y(),
      { showInstructionIos: c } = ne(),
      {
        iosReferralLink: v,
        androidReferralPriorityLink: w,
        androidReferralStoreLink: M,
        showAndroidAppsFlyerPixel: x,
        showIosAppsFlyerPixel: F,
      } = ae("mainPage"),
      { trackSelectAppStore: k, trackSelectDeviceOS: N } = T(),
      { showDownloadAppsWidgetModal: W } = ue(),
      D = e(() => !!(c.value || r)),
      _ = e(() => !v.value && t),
      B = e(() => !!w.value),
      m = e(() => !w.value && a),
      {
        iosInstructionLink: I,
        androidInstructionLink: L,
        getLinkWithLang: R,
      } = le({
        showIosInstruction: D,
        showIosPwaInstruction: _,
        showAndroidInstruction: B,
        showAndroidPwaInstruction: m,
      }),
      p = S(l.ANDROID),
      g = e(() => (M.value ? R({ name: "mobileExternalApps" }) : w.value)),
      h = e(() => D.value || _.value),
      f = e(() => m.value),
      q = e(() => !!(g.value || a)),
      V = e(() => !!(v.value || t || r)),
      E = e(() =>
        [
          {
            value: l.ANDROID,
            name: u("mobile_android"),
            ico: s[l.ANDROID],
            isVisible: q.value,
          },
          {
            value: l.IOS,
            name: u("mobile_ios"),
            ico: s[l.IOS],
            isVisible: V.value,
          },
        ].filter(({ isVisible: d }) => d)
      ),
      z = e(() => {
        var d, P;
        return {
          [l.IOS]: {
            appLink: h.value ? I.value : v.value,
            instructionLink: I.value,
            appsFlyerPixelLink: v.value,
            qrCodeTitleKey: "download_app_apple_qr_alt",
            appLinkStoreName:
              (d = o == null ? void 0 : o[l.IOS]) != null ? d : "",
            appLinkStoreIcon: s[l.IOS],
            showAppsFlyerPixel: F.value,
            isInstructionLink: h.value,
          },
          [l.ANDROID]: {
            appLink: f.value ? L.value : g.value,
            instructionLink: L.value,
            appsFlyerPixelLink: w.value,
            qrCodeTitleKey: "download_app_android_qr_alt",
            appLinkStoreName:
              (P = o == null ? void 0 : o[l.ANDROID]) != null ? P : "",
            appLinkStoreIcon: s[l.ANDROID],
            showAppsFlyerPixel: x.value,
            isInstructionLink: f.value,
          },
        };
      }),
      i = e(() => z.value[p.value]),
      K = e(() =>
        $_$() && i.value.isInstructionLink
          ? { ...C(i.value.appLink), narrow: !0, block: !0 }
          : { ...se(i.value.appLink), size: J.xs, uppercase: !1 }
      ),
      j = e(() =>
        i.value.isInstructionLink
          ? C(i.value.appLink)
          : { tag: "button", type: "button" }
      ),
      O = e(() => ie(i.value.appLink)),
      G = e(() => !!O.value);
    return {
      tabs: E,
      selectedTab: p,
      selectedTabContent: i,
      downloadButtonAttrs: K,
      downloadFormAttrs: O,
      downloadQrCodeAttrs: j,
      isFormButton: G,
      handleClickOnTab: (d) => {
        (p.value = d), N(d);
      },
      handleClickOnQrCode: () => {
        i.value.isInstructionLink ||
          (k(p.value, !0),
          W({
            selectedTab: p.value,
            textKey: i.value.qrCodeTitleKey,
            appLink: i.value.appLink,
            instructionLink: i.value.instructionLink,
            widgetThemeName: n.value,
          }));
      },
      handleClickOnDownloadButton: () => {
        i.value.isInstructionLink || k(p.value);
      },
    };
  };
function de(n, s) {
  $_$();
  U(2, arguments);
  var t = X(n),
    a = Z(s);
  if (isNaN(a)) return new Date(NaN);
  if (!a) return t;
  var r = t.getDate(),
    o = new Date(t.getTime());
  o.setMonth(t.getMonth() + a + 1, 0);
  var u = o.getDate();
  return r >= u ? o : (t.setFullYear(o.getFullYear(), o.getMonth(), r), t);
}
const Ie = () => {
    $_$();
    const n = ee(),
      { trackCloseStoreLinks: s, trackMainMenuInstallClose: t } = T(),
      { showPlatformApps: a } = re(),
      r = S(a.value),
      o = () => {
        $_$();
        const u = de(new Date(), 1);
        n.setItem(y.DOWNLOAD_APP_WIDGET_SHOWED, !1, { expireDate: u }),
          t(),
          s(),
          (r.value = !1);
      };
    return (
      te(a, (u) => {
        $_$();
        n.getItem(y.DOWNLOAD_APP_WIDGET_SHOWED) && (r.value = u);
      }),
      { isVisible: r, handleCloseWidget: o }
    );
  },
  A = Object.freeze({
    level: "L",
    size: 70,
    renderAs: "svg",
    shapeRendering: "auto",
  }),
  pe = Object.freeze({
    ...A,
    background: "transparent",
    foreground: "#FFFFFF",
  }),
  b = Object.freeze({ default: A, thirdPartyDark: pe, cyber: A }),
  Le = ({ theme: n, themeName: s, closable: t }) => {
    $_$();
    const a = e(() => n.value.logo),
      r = e(() => {
        var c;
        return (c = b[s.value]) != null ? c : b.default;
      }),
      o = e(() => [
        `download-apps-widget--theme-${n.value.theme}`,
        `download-apps-widget--settings-${n.value.settings}`,
        { "download-apps-widget--closable": t.value },
      ]),
      u = e(
        () =>
          `download-apps-widget-tooltip download-apps-widget-tooltip--${n.value.settings}`
      );
    return { classes: o, qrCodeAttrs: r, projectLogo: a, tooltipClasses: u };
  };
export {
  me as useDownloadAppsWidget,
  Le as useDownloadAppsWidgetProperties,
  Ie as useDownloadAppsWidgetVisibility,
};
