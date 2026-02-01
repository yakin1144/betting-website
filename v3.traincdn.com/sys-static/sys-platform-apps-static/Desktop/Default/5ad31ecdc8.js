import $_$ from "./$_$.js";
$_$();
import {
  OSTypes as r,
  usePlatformAppsFatmanAnalytics as m,
  platformAppsSourceNames as A,
  useShowPlatformAppsDownloadedModal as y,
  getIsAndroidLinkApk as g,
} from "./entry-76ec3b33ac.js";
import {
  FooterType_FooterType as u,
  sendAnalyticsEvent_sendAnalyticsEvent as e,
  runtimeCore_esmBundler_computed as w,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const a = {
    widget: "v3_Правый блок_приложение",
    mobile: "v3_Мобильные приложения",
    [u.DEFAULT]: "v3_Футер",
    [u.COMPACT]: "v3_Компактный футер",
  },
  S = { [r.ANDROID]: "Android", [r.IOS]: "App store" },
  D = () => {
    const { sendFatmanEvent: n } = m();
    return {
      trackCloseStoreLinks: () => {
        $_$();
        e("v3_Клик на Закрыть", { event_category: a.widget });
      },
      trackSelectAppStore: (t, l = !1) => {
        $_$();
        e("v3_Клик на скачать мобильное приложение", {
          event_category: a.widget,
          event_type: `Клик на Скачать бесплатно ${S[t]}`,
        }),
          e("main_menu_install_download", { option: `${t}${l ? "_qr" : ""}` }),
          n({ event: 1046, data: { s1: t } });
      },
      trackSelectDeviceOS: (t) => {
        $_$();
        e("v3_Клик на платформу", {
          event_category: a.widget,
          event_label: `Клик на ${t}`,
        });
      },
      trackMobileAppClick: (t) => {
        $_$();
        e("v3_Клик на Мобильные приложения", { event_category: a[t] });
      },
      trackRouteOnInstallAppPage: () => {
        $_$();
        e("main_menu_install_call");
      },
      trackByDownloadApp: (t, l) => {
        $_$();
        const k = l ? "V3_клик_footer_приложение" : "V3_клик_меню_приложение",
          d = l ? A.footer : A.mainMenu;
        e(k, { event_category: a.mobile, app_name: t }),
          e("app_download_call", { option: t, screen: d }),
          n({ event: 10639, data: { s1: t, s2: d } });
      },
      trackMainMenuInstallClose: () => {
        $_$();
        e("main_menu_install_close");
      },
    };
  },
  B = ({ androidLink: n, isFooter: c }) => {
    $_$();
    const { showPlatformAppsDownloadedModal: i } = y(),
      { trackByDownloadApp: p } = D(),
      _ = w(() => {
        var o;
        return g((o = n == null ? void 0 : n.value) != null ? o : "");
      }),
      s = (o) => {
        p(o, !!(c != null && c.value));
      };
    return {
      handleClickButton: s,
      handleClickAndroidButton: () => {
        _.value && i(), s(r.ANDROID);
      },
    };
  };
export {
  D as useDownloadAppsAnalytics,
  B as usePlatformAppsWidgetButtonActions,
};
