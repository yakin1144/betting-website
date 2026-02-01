import $_$ from "./$_$.js";
$_$();
import {
  index_getConfigs as u,
  runtimeCore_esmBundler_defineComponent as h,
  useCoreBus as y,
  runtimeCore_esmBundler_createBlock as g,
  runtimeCore_esmBundler_openBlock as a,
  nuxtLink_default as w,
  shared_esmBundler_normalizeClass as x,
  reactivity_esmBundler_unref as e,
  runtimeDom_esmBundler_withModifiers as E,
  runtimeCore_esmBundler_withCtx as H,
  runtimeCore_esmBundler_createElementVNode as v,
  runtimeCore_esmBundler_createElementBlock as N,
  runtimeCore_esmBundler_createCommentVNode as S,
  MEDIA_EXTENSIONS as d,
  execAsync as U,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useHeaderData as W,
  _export_sfc as P,
  loadUserControlPanelDesktop as V,
} from "./entry-85993dc44c.js";
import { withAsyncContext as A } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
const G = () => {
    $_$();
    const n = { imgWidth: 102, imgHeight: 32 },
      [t = n.imgWidth, o = n.imgHeight] = u(1524, 1525);
    return { imgWidth: t, imgHeight: o };
  },
  I = ["src", "alt", "title", "width", "height"],
  O = ["src", "alt", "title", "height"],
  $ = h({
    __name: "HeaderLogo",
    setup(n) {
      $_$();
      const { companyName: t, homeRoute: o, clickByLogo: r } = W(),
        s = y(),
        [i, _, l, p] = u(608, 607, 433, 1526),
        { imgWidth: C, imgHeight: c } = G(),
        B = { "header-logo--indented": p },
        f = i && _ && l ? "header_logo_event_decor" : "header_logo_light",
        k = i && _ && !l,
        D = () => {
          r(), s.emit("headerClickOnLogo");
        };
      return (m, z) => {
        $_$();
        const L = w;
        return (
          a(),
          g(
            L,
            {
              onClick: E(D, ["prevent"]),
              to: e(o),
              class: x([B, "header-logo"]),
            },
            {
              default: H(
                () =>
                  $_$() && [
                    v(
                      "img",
                      {
                        src: m.$mediaUrl(e(f), e(d).SVG),
                        alt: e(t),
                        title: e(t),
                        width: e(C),
                        height: e(c),
                        class: "header-logo__img",
                      },
                      null,
                      8,
                      I
                    ),
                    e(k)
                      ? (a(),
                        N(
                          "img",
                          {
                            key: 0,
                            src: m.$mediaUrl(
                              "header_logo_event_decor",
                              e(d).SVG
                            ),
                            alt: e(t),
                            title: e(t),
                            height: e(c),
                            class: "header-logo__decor",
                          },
                          null,
                          8,
                          O
                        ))
                      : S("", !0),
                  ]
              ),
              _: 1,
            },
            8,
            ["to"]
          )
        );
      };
    },
  }),
  K = P($, [["__scopeId", "data-v-3918044a"]]),
  R = h({
    __name: "UserControlPanelDesktop",
    async setup(n) {
      $_$();
      let t, o, r, s;
      const i =
        (([r, s] = A(() => V())),
        (r = (([t, o] = U(() => r)), (t = await t), o(), t)),
        s(),
        r);
      return (_, l) => $_$() && (a(), g(e(i)));
    },
  });
export { K as HeaderLogo, R as _sfc_main };
