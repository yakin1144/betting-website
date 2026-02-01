import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as d,
  defaultThemeType as C,
  runtimeCore_esmBundler_createElementBlock as n,
  runtimeCore_esmBundler_openBlock as o,
  shared_esmBundler_normalizeClass as f,
  runtimeCore_esmBundler_createCommentVNode as i,
  runtimeCore_esmBundler_renderSlot as t,
  runtimeCore_esmBundler_createElementVNode as m,
  runtimeCore_esmBundler_resolveComponent as B,
  runtimeCore_esmBundler_createBlock as v,
  runtimeCore_esmBundler_createVNode as S,
  reactivity_esmBundler_unref as s,
  size_constants_sizeType as l,
  runtimeCore_esmBundler_withCtx as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as c } from "./entry-50afb6f36c.js";
import { useSportsMenuAppConfig as $ } from "./9816d50199.js";
const M = { key: 0, class: "ui-sports-menu-head__title" },
  g = { class: "ui-sports-menu-head__row" },
  z = { class: "ui-sports-menu-head__content" },
  N = { key: 0, class: "ui-sports-menu-head__controls" },
  k = d({
    __name: "UiSportsMenuHead",
    props: { theme: { default: C } },
    setup(p) {
      return (e, u) =>
        $_$() &&
        (o(),
        n(
          "div",
          {
            class: f([
              `ui-sports-menu-head--theme-${e.theme}`,
              "ui-sports-menu-head",
            ]),
          },
          [
            e.$slots.title
              ? (o(), n("span", M, [t(e.$slots, "title", {}, void 0, !0)]))
              : i("", !0),
            t(e.$slots, "filter", {}, void 0, !0),
            m("div", g, [
              m("span", z, [t(e.$slots, "default", {}, void 0, !0)]),
              e.$slots.controls
                ? (o(), n("div", N, [t(e.$slots, "controls", {}, void 0, !0)]))
                : i("", !0),
            ]),
          ],
          2
        ));
    },
  }),
  A = c(k, [["__scopeId", "data-v-52fb390b"]]),
  w = { class: "ui-sports-menu-section-name" },
  y = d({
    __name: "UiSportsMenuSectionName",
    setup(p) {
      const {
        sportsMenuAppConfig: {
          uiSportsMenuSectionNameWeight: e,
          uiSportsMenuSectionCountWeight: u,
          uiSportsMenuSectionNameColor: h,
        },
      } = $();
      return (r, U) => {
        $_$();
        const _ = B("UiCaption");
        return (
          o(),
          n("div", w, [
            r.$slots.count
              ? (o(),
                v(
                  _,
                  {
                    key: 0,
                    size: s(l).m,
                    weight: s(u),
                    class: "ui-sports-menu-section-name__count",
                  },
                  {
                    default: a(
                      () => $_$() && [t(r.$slots, "count", {}, void 0, !0)]
                    ),
                    _: 3,
                  },
                  8,
                  ["size", "weight"]
                ))
              : i("", !0),
            S(
              _,
              {
                size: s(l).m,
                color: s(h),
                weight: s(e),
                class: "ui-sports-menu-section-name__label",
              },
              {
                default: a(
                  () => $_$() && [t(r.$slots, "default", {}, void 0, !0)]
                ),
                _: 3,
              },
              8,
              ["size", "color", "weight"]
            ),
          ])
        );
      };
    },
  }),
  E = c(y, [["__scopeId", "data-v-77c3649b"]]);
export { A as UiSportsMenuHead, E as UiSportsMenuSectionName };
