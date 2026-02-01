import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as g,
  size_constants_sizeType as B,
  ColorType as y,
  runtimeCore_esmBundler_computed as k,
  runtimeCore_esmBundler_createElementBlock as r,
  runtimeCore_esmBundler_openBlock as o,
  shared_esmBundler_normalizeClass as l,
  reactivity_esmBundler_unref as n,
  runtimeCore_esmBundler_Fragment as x,
  runtimeCore_esmBundler_renderList as z,
  runtimeCore_esmBundler_createBlock as a,
  runtimeCore_esmBundler_createCommentVNode as s,
  runtimeCore_esmBundler_createElementVNode as T,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useHostAppAnalytics as L,
  useAnjouanGamingValidator as S,
  _sfc_main$4 as v,
  _export_sfc as A,
} from "./entry-85993dc44c.js";
import { useDMCAValidator as j, FooterDMCA as F } from "./22cae739fa.js";
import { FooterLicenseText as V } from "./37be8e46f5.js";
const D = ["href"],
  I = ["src"],
  M = ["src", "width", "height"],
  U = g({
    __name: "FooterLicenses",
    props: {
      licenses: { default: () => [] },
      theme: { default: void 0 },
      licenseTextColor: { default: y.clrDecent },
      licenseTextSize: { default: B.xs },
      isSolid: { type: Boolean, default: !1 },
      anjouanImgSize: { default: void 0 },
    },
    setup(m) {
      $_$();
      const i = m,
        c = L(),
        { hasAnjouanGaming: u } = S(),
        { hasDMCA: _ } = j(),
        d = "anjouanGaming",
        f = "DMCA",
        C = () => {
          c.modules.footer.trackLicenseLogoClick();
        },
        p = k(() => ({
          [`footer-licenses--theme-${i.theme}`]: !!i.theme,
          "footer-licenses--is-solid": !!i.isSolid,
        })),
        h = (t) => ({ "footer-licenses__container--full-width": !!t.content });
      return (t, w) =>
        $_$() &&
        (o(),
        r(
          "div",
          { class: l([n(p), "footer-licenses"]) },
          [
            (o(!0),
            r(
              x,
              null,
              z(
                t.licenses,
                (e) =>
                  $_$() &&
                  (o(),
                  r(
                    "div",
                    {
                      key: e.id,
                      class: l([h(e), "footer-licenses__container"]),
                    },
                    [
                      e.validatorType === n(d) && n(u)
                        ? (o(),
                          a(v, { key: 0, imgSize: t.anjouanImgSize }, null, 8, [
                            "imgSize",
                          ]))
                        : s("", !0),
                      e.validatorType === n(f) && n(_)
                        ? (o(), a(F, { key: 1 }))
                        : s("", !0),
                      e.imageUrl || e.externalImageUrl
                        ? (o(),
                          r(
                            "a",
                            {
                              key: 2,
                              onClick: C,
                              href: e.url,
                              target: "_blank",
                            },
                            [
                              T(
                                "img",
                                {
                                  src: e.imageUrl || e.externalImageUrl,
                                  alt: "",
                                  class: "footer-licenses__img",
                                },
                                null,
                                8,
                                I
                              ),
                            ],
                            8,
                            D
                          ))
                        : s("", !0),
                      e.content
                        ? (o(),
                          a(
                            V,
                            {
                              key: 3,
                              textColor: t.licenseTextColor,
                              textSize: t.licenseTextSize,
                              license: e,
                            },
                            null,
                            8,
                            ["textColor", "textSize", "license"]
                          ))
                        : s("", !0),
                      e.iframe
                        ? (o(),
                          r(
                            "iframe",
                            {
                              key: 4,
                              src: e.iframe,
                              width: e.iframeWidth,
                              height: e.iframeHeight,
                              class: "footer-licenses__iframe",
                            },
                            null,
                            8,
                            M
                          ))
                        : s("", !0),
                    ],
                    2
                  ))
              ),
              128
            )),
          ],
          2
        ));
    },
  }),
  H = A(U, [["__scopeId", "data-v-36c5b38c"]]);
export { H as FooterLicenses };
