import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as X } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as J,
  runtimeCore_esmBundler_getCurrentInstance as Y,
  reactivity_esmBundler_toRefs as Z,
  execAsync as ee,
  runtimeCore_esmBundler_resolveComponent as k,
  runtimeCore_esmBundler_resolveDirective as oe,
  runtimeCore_esmBundler_createElementBlock as U,
  runtimeCore_esmBundler_createCommentVNode as w,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_openBlock as n,
  shared_esmBundler_normalizeClass as te,
  runtimeCore_esmBundler_createElementVNode as d,
  runtimeCore_esmBundler_createBlock as r,
  runtimeCore_esmBundler_createVNode as o,
  runtimeCore_esmBundler_withDirectives as se,
  UiTabs_F_vue_default as ne,
  runtimeCore_esmBundler_withCtx as t,
  ICON_LOGOS_PATH as O,
  size_constants_sizeType as a,
  runtimeCore_esmBundler_createTextVNode as _,
  shared_esmBundler_toDisplayString as m,
  runtimeDom_esmBundler_withModifiers as ie,
  iconName as de,
  runtimeCore_esmBundler_resolveDynamicComponent as S,
  runtimeCore_esmBundler_mergeProps as g,
  UiColoredSvgBase_vue_default as ae,
  MEDIA_EXTENSIONS as le,
  WeightType as re,
  runtimeCore_esmBundler_Fragment as pe,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { QrcodeVue as _e, addOriginToPath as me } from "./8067c8de3c.js";
import {
  loadUseDownloadAppsWidgetInternalSettings as ce,
  PlatformAppsDownloadButtonWrapper as V,
  PlatformAppsFlyerPixel as ue,
  defineMultiImplementedComponent as we,
  Platforms as ge,
  _export_sfc as he,
} from "./entry-76ec3b33ac.js";
import {
  useDownloadAppsWidget as Ce,
  useDownloadAppsWidgetProperties as fe,
  useDownloadAppsWidgetVisibility as Be,
} from "./7b4c156ab3.js";
import { downloadAppsWidgetThemeNames as ke } from "./b41b3ff6b7.js";
import "./4519216bec.js";
import "./5ad31ecdc8.js";
import "./ee3a878630.js";
const Te = { class: "download-apps-widget__header" },
  ye = { class: "download-apps-widget-tabs__item" },
  be = { class: "download-apps-widget__body download-apps-widget-body" },
  ve = { class: "download-apps-widget-qr__image" },
  Ae = {
    class:
      "download-apps-widget-body__description download-apps-widget-description",
  },
  Ie = ["alt", "src"],
  De = { class: "download-apps-widget-description__wrapper" },
  ze = J({
    __name: "DownloadAppsWidget",
    props: {
      widgetThemeName: { default: ke.default },
      closable: { type: Boolean, default: !0 },
    },
    async setup(T) {
      $_$();
      let c, y, u, b;
      const F = {
        defineEntityImplementation: () => $_$() && { props: T, emit: Y().emit },
      };
      we("DownloadAppsWidget", {}, !0, [ge.Desktop]),
        F.defineEntityImplementation();
      const L = T,
        { closable: v, widgetThemeName: h } = Z(L),
        W =
          (([u, b] = X(() => ce())),
          (u = (([c, y] = ee(() => u)), (c = await c), y(), c)),
          b(),
          u),
        { theme: l, tabIcons: P } = W({ themeName: h }),
        {
          tabs: x,
          selectedTab: E,
          selectedTabContent: i,
          downloadButtonAttrs: C,
          downloadFormAttrs: A,
          downloadQrCodeAttrs: I,
          isFormButton: D,
          handleClickOnTab: $,
          handleClickOnQrCode: q,
          handleClickOnDownloadButton: z,
        } = Ce({ widgetThemeName: h, tabIcons: P }),
        {
          classes: R,
          tooltipClasses: M,
          qrCodeAttrs: Q,
          projectLogo: G,
        } = fe({ theme: l, themeName: h, closable: v }),
        { handleCloseWidget: j, isVisible: H } = Be();
      return (s, Ne) => {
        $_$();
        const f = k("UiIco"),
          p = k("UiCaption"),
          N = k("UiButton"),
          K = oe("tooltip");
        return e(H)
          ? (n(),
            U(
              "div",
              { key: 0, class: te(["download-apps-widget", e(R)]) },
              [
                d("div", Te, [
                  o(
                    e(ne),
                    {
                      "onUpdate:modelValue": e($),
                      class:
                        "download-apps-widget__tabs download-apps-widget-tabs",
                      modelValue: e(E),
                      theme: e(l).tabsTheme,
                      options: e(x),
                      rounded: !1,
                      equal: "",
                      name: "download-apps-widget-tabs",
                    },
                    {
                      default: t(
                        ({ item: B }) =>
                          $_$() && [
                            d("div", ye, [
                              B.ico
                                ? (n(),
                                  r(
                                    f,
                                    {
                                      key: 0,
                                      class: "download-apps-widget-tabs__ico",
                                      path: e(O),
                                      ico: B.ico,
                                    },
                                    null,
                                    8,
                                    ["path", "ico"]
                                  ))
                                : w("", !0),
                              o(
                                p,
                                { size: e(a).m },
                                {
                                  default: t(() => $_$() && [_(m(B.name), 1)]),
                                  _: 2,
                                },
                                1032,
                                ["size"]
                              ),
                            ]),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["onUpdate:modelValue", "modelValue", "theme", "options"]
                  ),
                  e(v)
                    ? se(
                        (n(),
                        r(
                          N,
                          {
                            key: 0,
                            onClick: ie(e(j), ["prevent"]),
                            class:
                              "download-apps-widget__close download-apps-widget-close",
                            theme: e(l).closeButtonTheme,
                            "aria-label": s.$T("close"),
                            size: e(a).s,
                            rounded: !1,
                          },
                          {
                            default: t(
                              () =>
                                $_$() && [
                                  o(
                                    f,
                                    {
                                      class: "download-apps-widget-close__icon",
                                      ico: e(de).ERROR_CROSS,
                                      size: e(a).xxs,
                                    },
                                    null,
                                    8,
                                    ["ico", "size"]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["onClick", "theme", "aria-label", "size"]
                        )),
                        [[K, { content: s.$T("close"), classes: e(M) }]]
                      )
                    : w("", !0),
                ]),
                d("div", be, [
                  (n(),
                  r(
                    S(e(I).tag),
                    g(
                      {
                        onClick: e(q),
                        class:
                          "download-apps-widget-body__qr download-apps-widget-qr",
                      },
                      e(I)
                    ),
                    {
                      default: t(
                        () =>
                          $_$() && [
                            o(
                              e(ae),
                              {
                                class: "download-apps-widget-qr__svg",
                                name: e(l).phoneIcon,
                                theme: e(l).phoneIconTheme,
                                height: 186,
                                cover: "",
                              },
                              null,
                              8,
                              ["name", "theme"]
                            ),
                            d("div", ve, [
                              o(
                                _e,
                                g(e(Q), {
                                  value: e(me)(e(i).appLink),
                                  title: s.$T(e(i).qrCodeTitleKey),
                                }),
                                null,
                                16,
                                ["value", "title"]
                              ),
                            ]),
                          ]
                      ),
                      _: 1,
                    },
                    16,
                    ["onClick"]
                  )),
                  d("div", Ae, [
                    o(
                      V,
                      {
                        class: "download-apps-widget-description__form",
                        formAttrs: e(A),
                        isFormButton: e(D),
                      },
                      {
                        default: t(
                          () =>
                            $_$() && [
                              (n(),
                              r(
                                S(e(C).tag),
                                g(
                                  {
                                    onClick: e(z),
                                    class:
                                      "download-apps-widget-description__download",
                                  },
                                  e(C)
                                ),
                                {
                                  default: t(
                                    () =>
                                      $_$() && [
                                        d(
                                          "img",
                                          {
                                            class:
                                              "download-apps-widget-description__logo",
                                            alt: s.$T("download_app_name"),
                                            src: s.$mediaUrl(e(G), e(le).SVG),
                                          },
                                          null,
                                          8,
                                          Ie
                                        ),
                                        o(
                                          p,
                                          {
                                            size: e(a).xs,
                                            weight: e(re).BOLD,
                                            uppercase: "",
                                            class:
                                              "download-apps-widget-description__title",
                                          },
                                          {
                                            default: t(
                                              () =>
                                                $_$() && [
                                                  _(
                                                    m(
                                                      s.$T("download_app_title")
                                                    ),
                                                    1
                                                  ),
                                                ]
                                            ),
                                            _: 1,
                                          },
                                          8,
                                          ["size", "weight"]
                                        ),
                                      ]
                                  ),
                                  _: 1,
                                },
                                16,
                                ["onClick"]
                              )),
                            ]
                        ),
                        _: 1,
                      },
                      8,
                      ["formAttrs", "isFormButton"]
                    ),
                    o(
                      V,
                      {
                        class: "download-apps-widget-description__form",
                        formAttrs: e(A),
                        isFormButton: e(D),
                      },
                      {
                        default: t(
                          () =>
                            $_$() && [
                              o(
                                N,
                                g(
                                  {
                                    onClick: e(z),
                                    class:
                                      "download-apps-widget-description__link",
                                  },
                                  e(C),
                                  { theme: e(l).storeLinkTheme }
                                ),
                                {
                                  default: t(
                                    () =>
                                      $_$() && [
                                        e(i).isInstructionLink
                                          ? (n(),
                                            r(
                                              p,
                                              { key: 0, size: e(a).m },
                                              {
                                                default: t(
                                                  () =>
                                                    $_$() && [
                                                      _(
                                                        m(
                                                          s.$T(
                                                            "download_app_instruction"
                                                          )
                                                        ),
                                                        1
                                                      ),
                                                    ]
                                                ),
                                                _: 1,
                                              },
                                              8,
                                              ["size"]
                                            ))
                                          : (n(),
                                            U(
                                              pe,
                                              { key: 1 },
                                              [
                                                o(
                                                  f,
                                                  {
                                                    class:
                                                      "download-apps-widget-description__ico",
                                                    ico: e(i).appLinkStoreIcon,
                                                    path: e(O),
                                                  },
                                                  null,
                                                  8,
                                                  ["ico", "path"]
                                                ),
                                                d("div", De, [
                                                  o(
                                                    p,
                                                    { size: e(a).xxs },
                                                    {
                                                      default: t(
                                                        () =>
                                                          $_$() && [
                                                            _(
                                                              m(
                                                                s.$T(
                                                                  "download_app_free"
                                                                )
                                                              ),
                                                              1
                                                            ),
                                                          ]
                                                      ),
                                                      _: 1,
                                                    },
                                                    8,
                                                    ["size"]
                                                  ),
                                                  o(
                                                    p,
                                                    { size: e(a).xs },
                                                    {
                                                      default: t(
                                                        () =>
                                                          $_$() && [
                                                            _(
                                                              m(
                                                                e(i)
                                                                  .appLinkStoreName
                                                              ),
                                                              1
                                                            ),
                                                          ]
                                                      ),
                                                      _: 1,
                                                    },
                                                    8,
                                                    ["size"]
                                                  ),
                                                ]),
                                              ],
                                              64
                                            )),
                                      ]
                                  ),
                                  _: 1,
                                },
                                16,
                                ["onClick", "theme"]
                              ),
                            ]
                        ),
                        _: 1,
                      },
                      8,
                      ["formAttrs", "isFormButton"]
                    ),
                  ]),
                ]),
                e(i).showAppsFlyerPixel
                  ? (n(),
                    r(ue, { key: 0, link: e(i).appsFlyerPixelLink }, null, 8, [
                      "link",
                    ]))
                  : w("", !0),
              ],
              2
            ))
          : w("", !0);
      };
    },
  }),
  Ee = he(ze, [["__scopeId", "data-v-2b77f505"]]);
export { Ee as default };
