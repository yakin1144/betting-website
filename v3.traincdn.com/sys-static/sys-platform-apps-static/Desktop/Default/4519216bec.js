import $_$ from "./$_$.js";
$_$();
import {
  OSTypes as h,
  usePlatformAppsFatmanAbTestPwaPriority as _,
  usePlatformAppsLinksStoreAdapter as x,
  usePlatformAppsLinks as C,
  usePlatformAppsVisibilityPwa as H,
  getDownloadButtonAttrs as k,
  getDownloadFormAttrs as D,
} from "./entry-76ec3b33ac.js";
import {
  useGlobalStore as T,
  runtimeCore_esmBundler_computed as t,
  useRouterMethodsWithLang as E,
  reactivity_esmBundler_unref as G,
  index_getConfigs as M,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const v = {
    ANDROID: h.ANDROID.toLowerCase(),
    IOS: h.IOS.toLowerCase(),
    PWA: "pwa",
    WEBAPP: "WEB APP",
  },
  $ = ({
    showIosInstruction: i,
    showAndroidInstruction: A,
    showAndroidPwaInstruction: I,
    showIosPwaInstruction: P,
  }) => {
    $_$();
    const p = T(),
      { needToPrioritiseIosPwa: o } = _(),
      n = t(() => p.getLanguage),
      { getLinkWithLang: l } = E(n),
      r = (a) => {
        const s = a ? `#${a}` : "";
        return l({ name: "mobileExternalApps", hash: s });
      },
      u = (a, s, e) => {
        $_$();
        if (!(e != null && e.value) && !G(s)) return r();
        const w = e != null && e.value ? a : v.PWA;
        return r(w);
      },
      c = t(() => (o.value ? r(v.PWA) : u(v.IOS, P, i))),
      m = t(() => u(v.ANDROID, I, A));
    return {
      iosInstructionLink: c,
      androidInstructionLink: m,
      getLinkWithLang: l,
      getPageLinkWithHash: r,
    };
  },
  b = (i) => ({ tag: "NuxtLink", to: i }),
  z = () => {
    $_$();
    const [i, A, I] = M(69, 394, 70),
      { showInstructionIos: P, showInstructionAndroid: p } = x(),
      { androidReferralPriorityLink: o, iosReferralLink: n } = C(),
      {
        isIosPwa: l,
        isAndroidPwa: r,
        isVisibleIosOnPwa: u,
        isVisibleAndroidOnPwa: c,
        setIsVisiblePwa: m,
      } = H(),
      a = t(() => P.value || A),
      s = t(() => !n.value && i),
      e = t(() => !!n.value && a.value),
      w = t(() => e.value || s.value),
      d = t(() => !o.value && I),
      { iosInstructionLink: L, androidInstructionLink: B } = $({
        showIosInstruction: e,
        showIosPwaInstruction: s,
        showAndroidInstruction: p,
        showAndroidPwaInstruction: d,
      }),
      O = t(() => (r.value ? c.value : !!o.value && !u.value)),
      W = t(() => (l.value ? u.value : (!!n.value || i) && !c.value)),
      F = t(() => (e.value || s.value ? L.value : n.value)),
      S = t(() => (d.value ? B.value : o.value)),
      R = t(() => (w.value ? b(L.value) : k(n.value))),
      g = t(() => D(n.value)),
      V = t(() => !!g.value),
      y = t(() => (d.value ? b(B.value) : k(o.value))),
      f = t(() => D(o.value)),
      N = t(() => !!f.value);
    return {
      iosLinkHref: F,
      androidLinkHref: S,
      iosButtonAttrs: R,
      iosFormButtonAttrs: g,
      androidButtonAttrs: y,
      androidFormButtonAttrs: f,
      androidReferralPriorityLink: o,
      showIosPwaInstruction: s,
      showAndroidPwaInstruction: d,
      isIosFormButton: V,
      isAndroidFormButton: N,
      isVisibleIosButton: W,
      isVisibleAndroidButton: O,
      setIsVisiblePwa: m,
    };
  };
export {
  b as getInstructionButtonAttrs,
  v as platformAppsAppNames,
  $ as usePlatformAppsInstructionLinks,
  z as usePlatformAppsWidgetButtons,
};
