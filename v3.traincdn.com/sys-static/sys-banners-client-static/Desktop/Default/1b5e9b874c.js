import $_$ from "./$_$.js";
$_$();
import {
  size_constants_sizeType as x,
  theme_constants_themeType as A,
  runtimeCore_esmBundler_defineComponent as E,
  runtimeCore_esmBundler_computed as $,
  runtimeCore_esmBundler_resolveComponent as L,
  runtimeCore_esmBundler_createBlock as d,
  runtimeCore_esmBundler_openBlock as o,
  shared_esmBundler_normalizeClass as M,
  shared_esmBundler_normalizeStyle as O,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_createSlots as F,
  runtimeCore_esmBundler_withCtx as a,
  runtimeCore_esmBundler_createCommentVNode as b,
  runtimeCore_esmBundler_createVNode as h,
  runtimeCore_esmBundler_createTextVNode as j,
  shared_esmBundler_toDisplayString as f,
  runtimeCore_esmBundler_createElementVNode as I,
  runtimeCore_esmBundler_createElementBlock as P,
  UiSkeleton_vue_default as q,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { UiSlider as G } from "./b352638092.js";
import {
  AnalyticsElementIds as J,
  _export_sfc as z,
  useBaseTemplate as K,
  WidgetElements as Q,
} from "./entry-8c01be4f19.js";
import {
  useBaseTemplateSlide as X,
  TemplatePicture as Y,
  AnalyticsWidgetAreaLayer as Z,
  useHydrate as ee,
} from "./3b90957c29.js";
import { UiSliderSlide as te } from "./daca530f49.js";
import { UiEventSlideContent as ne } from "./d780908c37.js";
import "./8bae841730.js";
import "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import "./646210e688.js";
import "./96f90aea0d.js";
const l = {
    navigationTheme: A.gray100,
    slideButtonTheme: A.accent,
    slideButtonSize: x.m,
    slideButtonCaptionSize: x.m,
    paginationSize: x.s,
    contentWidth: "600px",
    opacityAttack: "150px",
    imageWidth: "100%",
    imageHeight: 248,
  },
  ie = { key: 0, class: "template-slide-auto-shadow" },
  ae = { class: "template-slide__title" },
  le = { class: "template-slide__subtitle" },
  oe = E({
    __name: "TemplateSlide",
    props: { banner: {}, widget: {}, template: {}, slideIndex: {} },
    emits: ["clickByBannerArea"],
    setup(p, { emit: c }) {
      $_$();
      const r = p,
        u = $(() => r.banner),
        {
          gameData: _,
          isShowTeamLogos: k,
          title: g,
          subtitle: s,
          button: S,
          hasElementOptions: i,
          linkPath: y,
          openInNewWindow: v,
          mappedImageForTemplatePicture: C,
          loadingImgAttrValue: t,
          getSlideClasses: B,
          templateSlideStyle: T,
          hasAnyMarkets: w,
          isAutoShadowActive: U,
          imagesByBreakpoints: V,
        } = X(u, r.slideIndex, l),
        R = c,
        W = (m) => {
          R("clickByBannerArea", m);
        };
      return (m, N) => {
        $_$();
        const D = L("UiCaption"),
          H = L("UiButton");
        return (
          o(),
          d(
            te,
            {
              onClickByBannerArea: W,
              to: e(y),
              isExternalLink: e(v),
              isContentVerticalCentered: !e(i).event,
              widget: m.widget,
              banner: e(u),
              template: m.template,
              slideIndex: m.slideIndex,
              style: O(e(T)),
              class: M([e(B), "template-slide"]),
            },
            F(
              {
                analytics: a(() => $_$() && [h(Z)]),
                background: a(() => {
                  $_$();
                  var n;
                  return [
                    h(
                      Y,
                      {
                        breakpoints: e(V),
                        defaultImage: e(C),
                        alt: (n = e(g)) == null ? void 0 : n.text,
                        loading: e(t),
                        width: e(l).imageWidth,
                        height: e(l).imageHeight,
                        class: "template-slide__bg",
                      },
                      null,
                      8,
                      [
                        "breakpoints",
                        "defaultImage",
                        "alt",
                        "loading",
                        "width",
                        "height",
                      ]
                    ),
                    N[0] ||
                      (N[0] = I(
                        "span",
                        { class: "template-slide-content-backdrop" },
                        null,
                        -1
                      )),
                    e(U) ? (o(), P("span", ie)) : b("", !0),
                  ];
                }),
                default: a(
                  () =>
                    $_$() && [
                      e(i).event && e(_)
                        ? (o(),
                          d(
                            ne,
                            {
                              key: 0,
                              sportEvent: e(_),
                              isShowTeamLogos: e(k),
                              hasAnyMarkets: e(w),
                            },
                            null,
                            8,
                            ["sportEvent", "isShowTeamLogos", "hasAnyMarkets"]
                          ))
                        : b("", !0),
                      !e(i).event && e(i).button
                        ? (o(),
                          d(
                            H,
                            {
                              key: 1,
                              size: e(l).slideButtonSize,
                              theme: e(l).slideButtonTheme,
                              "data-analytics-id": e(J).SLIDE_BUTTON,
                              tag: "span",
                            },
                            {
                              default: a(
                                () =>
                                  $_$() && [
                                    h(
                                      D,
                                      { size: e(l).slideButtonCaptionSize },
                                      {
                                        default: a(() => {
                                          $_$();
                                          var n;
                                          return [
                                            j(
                                              f(
                                                (n = e(S)) == null
                                                  ? void 0
                                                  : n.text
                                              ),
                                              1
                                            ),
                                          ];
                                        }),
                                        _: 1,
                                      },
                                      8,
                                      ["size"]
                                    ),
                                  ]
                              ),
                              _: 1,
                            },
                            8,
                            ["size", "theme", "data-analytics-id"]
                          ))
                        : b("", !0),
                    ]
                ),
                _: 2,
              },
              [
                !e(i).event && e(i).title
                  ? {
                      name: "title",
                      fn: a(() => {
                        $_$();
                        var n;
                        return [
                          I(
                            "span",
                            ae,
                            f((n = e(g)) == null ? void 0 : n.text),
                            1
                          ),
                        ];
                      }),
                      key: "0",
                    }
                  : void 0,
                !e(i).event && e(i).subtitle
                  ? {
                      name: "text",
                      fn: a(() => {
                        $_$();
                        var n;
                        return [
                          I(
                            "span",
                            le,
                            f((n = e(s)) == null ? void 0 : n.text),
                            1
                          ),
                        ];
                      }),
                      key: "1",
                    }
                  : void 0,
              ]
            ),
            1032,
            [
              "to",
              "isExternalLink",
              "isContentVerticalCentered",
              "widget",
              "banner",
              "template",
              "slideIndex",
              "style",
              "class",
            ]
          )
        );
      };
    },
  }),
  se = z(oe, [["__scopeId", "data-v-0858618f"]]),
  re = E({
    __name: "TemplateLoader",
    setup(p) {
      return (c, r) =>
        $_$() &&
        (o(),
        d(e(q), { theme: e(A).primary_40, class: "template-loader" }, null, 8, [
          "theme",
        ]));
    },
  }),
  de = z(re, [["__scopeId", "data-v-013c2b83"]]),
  me = { class: "template-index" },
  pe = E({
    __name: "TemplateIndex",
    props: {
      loading: { type: Boolean },
      template: {},
      widget: {},
      isShowDecoration: { type: Boolean },
      paddingVertical: { type: Boolean },
    },
    emits: [
      "clickByBannerArea",
      "next-button-click",
      "prev-button-click",
      "pagination-button-click",
      "slider-swipe",
    ],
    setup(p, { emit: c }) {
      const r = p,
        { banners: u, isRtl: _, initialSlide: k, setInitialSlide: g } = K(r);
      ee();
      const s = c,
        S = (t) => {
          s("clickByBannerArea", t);
        },
        i = (t, B) => {
          s("slider-swipe", t, B);
        },
        y = (t) => {
          s("pagination-button-click", t);
        },
        v = (t) => {
          s("next-button-click", t);
        },
        C = (t) => {
          s("prev-button-click", t);
        };
      return (t, B) =>
        $_$() &&
        (o(),
        P("div", me, [
          r.loading
            ? (o(), d(de, { key: 0 }))
            : (o(),
              d(
                G,
                {
                  key: 1,
                  onNextButtonClick: v,
                  onPrevButtonClick: C,
                  onPaginationButtonClick: y,
                  onSliderSwipe: i,
                  onSlideChange: e(g),
                  slides: e(u),
                  isRtl: e(_),
                  arrowsTheme: e(l).navigationTheme,
                  nextButtonText: t.$T("main_slide_next"),
                  prevButtonText: t.$T("main_slide_prev"),
                  initialSlide: e(k),
                  widget: t.widget,
                  template: t.template,
                  paginationSize: e(l).paginationSize,
                  isRepeat: "",
                  isPagination: "",
                },
                {
                  slide: a(
                    ({ slide: T, slideIndex: w }) =>
                      $_$() && [
                        h(
                          se,
                          {
                            onClickByBannerArea: S,
                            banner: T,
                            slideIndex: w,
                            widget: t.widget,
                            template: t.template,
                            "data-widget-element": e(Q).BANNER_SLIDE,
                          },
                          null,
                          8,
                          [
                            "banner",
                            "slideIndex",
                            "widget",
                            "template",
                            "data-widget-element",
                          ]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                [
                  "onSlideChange",
                  "slides",
                  "isRtl",
                  "arrowsTheme",
                  "nextButtonText",
                  "prevButtonText",
                  "initialSlide",
                  "widget",
                  "template",
                  "paginationSize",
                ]
              )),
        ]));
    },
  }),
  Ce = z(pe, [["__scopeId", "data-v-17554614"]]);
export { Ce as default };
