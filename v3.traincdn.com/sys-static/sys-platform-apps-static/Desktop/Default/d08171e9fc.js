import $_$ from "./$_$.js";
$_$();
import {
  downloadAppsWidgetThemes as t,
  downloadAppsWidgetThemeNames as u,
} from "./b41b3ff6b7.js";
import {
  iconLogos as m,
  runtimeCore_esmBundler_computed as d,
  theme_constants_themeType as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  OSTypes as p,
  defineMultiImplementedFeature as f,
  Platforms as g,
} from "./entry-76ec3b33ac.js";
const c = Object.freeze({ [p.ANDROID]: m.ANDROID, [p.IOS]: m.APPLE }),
  i = f("useDownloadAppsWidgetInternalSettings", !0, [g.Desktop]),
  _ = i.defineEntityImplementation(
    ({ themeName: n }) =>
      $_$() && {
        theme: d(() => {
          var e;
          return (e = t[n.value]) != null ? e : t.default;
        }),
        tabIcons: c,
      }
  ),
  D = Object.freeze(
    Object.defineProperty({ __proto__: null, default: _ }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  b = i.defineEntityImplementation(({ themeName: n }) => {
    $_$();
    const o = Object.freeze({
        ...t.default,
        theme: a.primary_40,
        closeButtonTheme: a.default,
        logo: "header_logo_light",
      }),
      e = Object.freeze({ ...t, [u.default]: o }),
      r = d(() => {
        var s;
        return (s = e[n.value]) != null ? s : e.default;
      }),
      l = { ...c, [p.ANDROID]: m.GOOGLE_PLAY };
    return { theme: r, tabIcons: l };
  }),
  T = Object.freeze(
    Object.defineProperty({ __proto__: null, default: b }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  y = i.defineEntityImplementation(({ themeName: n }) => {
    $_$();
    const o = Object.freeze({
        ...t.default,
        tabsTheme: a.gray,
        closeButtonTheme: a.primary_20,
        theme: a.primary_20,
      }),
      e = Object.freeze({ ...t.cyber, storeLinkTheme: a.cyberAccentGradient }),
      r = Object.freeze({ ...t, [u.default]: o, [u.cyber]: e });
    return {
      theme: d(() => {
        var s;
        return (s = r[n.value]) != null ? s : r.default;
      }),
      tabIcons: c,
    };
  }),
  w = Object.freeze(
    Object.defineProperty({ __proto__: null, default: y }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  h = i.defineEntityImplementation(({ themeName: n }) => {
    $_$();
    const o = Object.freeze({ ...t.default, closeButtonTheme: a.primary5 }),
      e = Object.freeze({ ...t, [u.default]: o });
    return {
      theme: d(() => {
        var l;
        return (l = e[n.value]) != null ? l : e.default;
      }),
      tabIcons: c,
    };
  }),
  v = Object.freeze(
    Object.defineProperty({ __proto__: null, default: h }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  S = i.defineEntityImplementation(({ themeName: n }) => {
    $_$();
    const o = Object.freeze({
        ...t.default,
        theme: a.primary_20,
        logo: "header_logo_light",
      }),
      e = Object.freeze({ ...t, [u.default]: o });
    return {
      theme: d(() => {
        var l;
        return (l = e[n.value]) != null ? l : e.default;
      }),
      tabIcons: c,
    };
  }),
  z = Object.freeze(
    Object.defineProperty({ __proto__: null, default: S }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function I() {
  throw new Error("You can't use sync loaders on client");
}
const W = Object.freeze(
  Object.defineProperty({ __proto__: null, default: I }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  W as loaduseDownloadAppsWidgetInternalSettingsSync,
  D as useDownloadAppsWidgetInternalSettings,
  T as useDownloadAppsWidgetInternalSettings$1,
  w as useDownloadAppsWidgetInternalSettings$2,
  v as useDownloadAppsWidgetInternalSettings$3,
  z as useDownloadAppsWidgetInternalSettings$4,
};
