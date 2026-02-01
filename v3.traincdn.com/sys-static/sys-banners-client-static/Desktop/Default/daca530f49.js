import $_$ from "./$_$.js";
$_$();
import {
  defaultSizeType as v,
  runtimeCore_esmBundler_defineComponent as L,
  runtimeCore_esmBundler_mergeDefaults as E,
  runtimeCore_esmBundler_createBlock as $,
  runtimeCore_esmBundler_openBlock as s,
  reactivity_esmBundler_unref as t,
  UiLink_vue_default as b,
  shared_esmBundler_normalizeClass as l,
  runtimeCore_esmBundler_withCtx as g,
  runtimeCore_esmBundler_renderSlot as i,
  runtimeCore_esmBundler_createElementBlock as r,
  runtimeCore_esmBundler_createCommentVNode as n,
  runtimeCore_esmBundler_createElementVNode as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  AnalyticsElementIds as u,
  _export_sfc as I,
} from "./entry-8c01be4f19.js";
import { useUiSliderSlide as T } from "./8bae841730.js";
const z = {
    to: "",
    isExternalLink: !1,
    isContentVerticalCentered: !0,
    isContentBottomCenter: !1,
    size: v,
    isPreserveTitleFormatting: !1,
    stabilizeLayer: !1,
  },
  h = { class: "ui-slider-slide__wrapper" },
  U = ["data-analytics-id"],
  V = ["data-analytics-id"],
  A = { key: 2, class: "ui-slider-slide__content" },
  w = L({
    __name: "UiSliderSlide",
    props: E(
      {
        to: {},
        isExternalLink: { type: Boolean },
        isContentVerticalCentered: { type: Boolean },
        isContentBottomCenter: { type: Boolean },
        size: {},
        isPreserveTitleFormatting: { type: Boolean },
        widget: {},
        template: {},
        banner: {},
        slideIndex: {},
        stabilizeLayer: { type: Boolean },
      },
      z
    ),
    emits: ["clickByBannerArea"],
    setup(m, { emit: _ }) {
      const o = m,
        {
          uiSliderSlideTitleClasses: c,
          uiSliderSlideClasses: B,
          uiSliderSlideContainerClasses: C,
          uiSliderSlideBackgroundClasses: p,
          onLinkClick: k,
        } = T(o),
        f = _,
        y = (e) => {
          k(e), f("clickByBannerArea", { index: o.slideIndex, event: e });
        };
      return (e, d) =>
        $_$() &&
        (s(),
        $(
          t(b),
          {
            onClick: d[0] || (d[0] = (S) => y(S)),
            to: e.to,
            isExternalLink: e.isExternalLink,
            class: l([t(B), "ui-slider-slide"]),
          },
          {
            default: g(
              () =>
                $_$() && [
                  i(e.$slots, "analytics", {}, void 0, !0),
                  e.$slots.background
                    ? (s(),
                      r(
                        "div",
                        {
                          key: 0,
                          class: l([t(p), "ui-slider-slide__background"]),
                        },
                        [i(e.$slots, "background", {}, void 0, !0)],
                        2
                      ))
                    : n("", !0),
                  a("div", h, [
                    i(
                      e.$slots,
                      "fullContent",
                      {},
                      () =>
                        $_$() && [
                          a(
                            "div",
                            {
                              class: l([
                                t(C),
                                "ui-slider-slide__container ui-slider-slide-container",
                              ]),
                            },
                            [
                              e.$slots.title
                                ? (s(),
                                  r(
                                    "p",
                                    {
                                      key: 0,
                                      "data-analytics-id": t(u).SLIDE_TITLE,
                                      class: l([
                                        t(c),
                                        "ui-slider-slide__title",
                                      ]),
                                    },
                                    [i(e.$slots, "title", {}, void 0, !0)],
                                    10,
                                    U
                                  ))
                                : n("", !0),
                              e.$slots.text
                                ? (s(),
                                  r(
                                    "p",
                                    {
                                      key: 1,
                                      "data-analytics-id": t(u).SLIDE_SUBTITLE,
                                      class: "ui-slider-slide__text",
                                    },
                                    [i(e.$slots, "text", {}, void 0, !0)],
                                    8,
                                    V
                                  ))
                                : n("", !0),
                              e.$slots.default
                                ? (s(),
                                  r("div", A, [
                                    i(e.$slots, "default", {}, void 0, !0),
                                  ]))
                                : n("", !0),
                            ],
                            2
                          ),
                        ],
                      !0
                    ),
                  ]),
                ]
            ),
            _: 3,
          },
          8,
          ["to", "isExternalLink", "class"]
        ));
    },
  }),
  F = I(w, [["__scopeId", "data-v-fdfb6bf3"]]);
export { F as UiSliderSlide };
