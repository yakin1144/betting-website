import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as R,
  theme_constants_themeType as f,
  index_useT as K,
  runtimeCore_esmBundler_computed as c,
  iconName as k,
  runtimeCore_esmBundler_createElementBlock as p,
  runtimeCore_esmBundler_openBlock as a,
  shared_esmBundler_normalizeClass as v,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_createVNode as X,
  UiIco_vue_default_2 as H,
  size_constants_sizeType as q,
  runtimeCore_esmBundler_createBlock as m,
  runtimeCore_esmBundler_mergeProps as G,
  runtimeCore_esmBundler_withCtx as w,
  runtimeCore_esmBundler_createCommentVNode as C,
  runtimeCore_esmBundler_Fragment as E,
  runtimeCore_esmBundler_renderList as b,
  runtimeCore_esmBundler_renderSlot as Q,
  runtimeCore_esmBundler_createElementVNode as S,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useUiSlider as j,
  Swiper as J,
  SwiperSlide as M,
} from "./8bae841730.js";
import { _export_sfc as N } from "./entry-8c01be4f19.js";
var I = ((t) => ((t.AUTO = "auto"), t))(I || {}),
  o = ((t) => ((t.NEXT = "next"), (t.PREV = "prev"), t))(o || {}),
  B = ((t) => (
    (t.DEFAULT = "default"),
    (t.CIRCLE = "circle"),
    (t.SQUARE_ROUNDED = "square-rounded"),
    t
  ))(B || {});
const W = ["aria-label"],
  Y = R({
    __name: "UiSliderNavigationButton",
    props: {
      theme: { default: f.gray },
      type: { default: B.DEFAULT },
      directionType: {},
    },
    emits: ["onClick"],
    setup(t) {
      $_$();
      const n = t,
        i = K(),
        g = c(() => ({
          [`ui-slider-navigation-button--theme-${n.theme}`]: !!n.theme,
          [`ui-slider-navigation-button--type-${n.type}`]: !!n.type,
          [`ui-slider-navigation-button--direction-type-${n.directionType}`]:
            !!n.directionType,
        })),
        s = { [o.NEXT]: i("main_slide_next"), [o.PREV]: i("main_slide_prev") },
        y = { [o.NEXT]: k.CHEVRON_RIGHT, [o.PREV]: k.CHEVRON_LEFT };
      return (u, _) =>
        $_$() &&
        (a(),
        p(
          "button",
          {
            onClick: _[0] || (_[0] = (T) => u.$emit("onClick")),
            "aria-label": s[u.directionType],
            class: v([e(g), "ui-slider-navigation-button"]),
          },
          [
            X(
              e(H),
              {
                ico: y[u.directionType],
                class: "ui-slider-navigation-button__ico",
              },
              null,
              8,
              ["ico"]
            ),
          ],
          10,
          W
        ));
    },
  }),
  P = N(Y, [["__scopeId", "data-v-cfa02cb5"]]),
  Z = { class: "ui-slider-pagination__list" },
  ee = ["onClick", "aria-label"],
  ie = R({
    __name: "UiSlider",
    props: {
      slides: { default: () => [] },
      arrowsTheme: { default: f.gray },
      delay: { default: 5e4 },
      isPagination: { type: Boolean, default: !1 },
      hasNavigation: { type: Boolean, default: !0 },
      isRtl: { type: Boolean, default: !1 },
      nextButtonText: { default: "" },
      prevButtonText: { default: "" },
      isRepeat: { type: Boolean, default: !1 },
      getAriaLabelBulletKey: {
        type: Function,
        default: (t) => {
          var n;
          return (n = t.title) == null ? void 0 : n.text;
        },
      },
      paginationSize: { default: q.m },
      paginationTheme: { default: f.default },
      isSeparatePagination: { type: Boolean, default: !1 },
      initialSlide: { default: 0 },
      widget: {},
      template: {},
      slidesPerView: { default: 1 },
      navigationButtonType: { default: B.DEFAULT },
    },
    emits: [
      "slide-change",
      "next-button-click",
      "prev-button-click",
      "pagination-button-click",
      "slider-swipe",
    ],
    setup(t, { emit: n }) {
      $_$();
      const i = t,
        g = n,
        s = c(() => i.slides),
        y = c(() => (i.slides[i.initialSlide] ? i.initialSlide : 0)),
        {
          activeBulletIndex: u,
          onPaginationClick: _,
          onPrevClick: T,
          onNextClick: V,
          initialize: x,
          showNavigation: h,
          showPagination: z,
          direction: $,
          swiperConfig: A,
          onResize: U,
          onSlideChange: L,
          onTouchEnd: O,
        } = j(
          {
            slides: s,
            hasNavigation: i.hasNavigation,
            isPagination: i.isPagination,
            isRtl: i.isRtl,
            widget: i.widget,
            template: i.template,
            slidesPerView: i.slidesPerView,
          },
          g,
          {
            grabCursor: !0,
            loop: i.isRepeat,
            autoplay: !0,
            initialSlide: e(y),
            lazyPreloadPrevNext: 1,
          }
        ),
        F = c(() => ({
          "ui-slider--is-separate-pagination": i.isSeparatePagination,
          "ui-slider--sliders-per-view-auto": i.slidesPerView === I.AUTO,
        })),
        D = c(() => ({
          [`ui-slider-pagination--size-${i.paginationSize}`]:
            !!i.paginationSize,
          [`ui-slider-pagination--theme-${i.paginationTheme}`]:
            !!i.paginationTheme,
        }));
      return (l, te) =>
        $_$() &&
        (a(),
        m(
          e(J),
          G(
            {
              onAfterInit: e(x),
              onRealIndexChange: e(L),
              onTouchEnd: e(O),
              onResize: e(U),
              class: e(F),
              dir: e($),
            },
            e(A),
            { class: "ui-slider" }
          ),
          {
            default: w(
              () =>
                $_$() && [
                  (a(!0),
                  p(
                    E,
                    null,
                    b(
                      e(s),
                      (r, d) =>
                        $_$() &&
                        (a(),
                        m(
                          e(M),
                          {
                            key: r.id,
                            virtualIndex: d,
                            class: "ui-slider__slide",
                          },
                          {
                            default: w(
                              () =>
                                $_$() && [
                                  Q(
                                    l.$slots,
                                    "slide",
                                    { key: r.id, slide: r, slideIndex: d },
                                    void 0,
                                    !0
                                  ),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          ["virtualIndex"]
                        ))
                    ),
                    128
                  )),
                  e(h)
                    ? (a(),
                      m(
                        P,
                        {
                          key: 0,
                          onOnClick: e(T),
                          directionType: e(o).PREV,
                          type: l.navigationButtonType,
                          theme: l.arrowsTheme,
                          class: "ui-slider__arrow ui-slider__arrow--prev",
                        },
                        null,
                        8,
                        ["onOnClick", "directionType", "type", "theme"]
                      ))
                    : C("", !0),
                  e(h)
                    ? (a(),
                      m(
                        P,
                        {
                          key: 1,
                          onOnClick: e(V),
                          directionType: e(o).NEXT,
                          type: l.navigationButtonType,
                          theme: l.arrowsTheme,
                          class: "ui-slider__arrow ui-slider__arrow--next",
                        },
                        null,
                        8,
                        ["onOnClick", "directionType", "type", "theme"]
                      ))
                    : C("", !0),
                  e(z)
                    ? (a(),
                      p(
                        "div",
                        {
                          key: 2,
                          class: v([
                            e(D),
                            "ui-slider__pagination ui-slider-pagination",
                          ]),
                        },
                        [
                          S("ul", Z, [
                            (a(!0),
                            p(
                              E,
                              null,
                              b(
                                e(s),
                                (r, d) =>
                                  $_$() &&
                                  (a(),
                                  p(
                                    "li",
                                    {
                                      key: r.id,
                                      class: "ui-slider-pagination__item",
                                    },
                                    [
                                      S(
                                        "button",
                                        {
                                          onClick: (ne) => $_$() && e(_)(d),
                                          "aria-label":
                                            l.getAriaLabelBulletKey(r),
                                          class: v([
                                            {
                                              "ui-slider-pagination-bullet--active":
                                                d === e(u),
                                            },
                                            "ui-slider-pagination-bullet",
                                          ]),
                                        },
                                        null,
                                        10,
                                        ee
                                      ),
                                    ]
                                  ))
                              ),
                              128
                            )),
                          ]),
                        ],
                        2
                      ))
                    : C("", !0),
                ]
            ),
            _: 3,
          },
          16,
          [
            "onAfterInit",
            "onRealIndexChange",
            "onTouchEnd",
            "onResize",
            "class",
            "dir",
          ]
        ));
    },
  }),
  re = N(ie, [["__scopeId", "data-v-5ac1405d"]]);
export {
  re as UiSlider,
  B as UiSliderNavigationButtonTypes,
  I as UiSliderPropSlidesPerView,
};
