import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_createElementBlock as f,
  runtimeCore_esmBundler_openBlock as n,
  runtimeCore_esmBundler_renderSlot as u,
  runtimeCore_esmBundler_defineComponent as i,
  useGlobalStore as B,
  runtimeCore_esmBundler_computed as m,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_createBlock as o,
  runtimeCore_esmBundler_withCtx as _,
  runtimeCore_esmBundler_createCommentVNode as C,
  runtimeCore_esmBundler_createVNode as c,
  UiSkeleton_vue_default as h,
  theme_constants_themeType as g,
  runtimeCore_esmBundler_resolveComponent as y,
  size_constants_sizeType as S,
  runtimeCore_esmBundler_createTextVNode as b,
  shared_esmBundler_toDisplayString as M,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { UiSportsMenuLoader as T } from "./2ac826c613.js";
import { _export_sfc as l } from "./entry-50afb6f36c.js";
const V = {},
  k = { class: "ui-sports-menu" };
function $(e, s) {
  $_$();
  return n(), f("div", k, [u(e.$slots, "default", {}, void 0, !0)]);
}
const d = l(V, [
    ["render", $],
    ["__scopeId", "data-v-761c3cd4"],
  ]),
  v = i({
    __name: "SportsMenuMainLoading",
    props: { hasTabs: { type: Boolean } },
    setup(e) {
      $_$();
      const s = e,
        a = B(),
        r = m(() => a.isLeftSectionVisible),
        p = m(() => $_$() && s.hasTabs && t(r));
      return (x, U) =>
        $_$() &&
        (n(),
        o(
          d,
          { class: "sports-menu-main-loading" },
          {
            default: _(
              () =>
                $_$() && [
                  t(p)
                    ? (n(),
                      o(
                        t(h),
                        {
                          key: 0,
                          theme: t(g).primary_20,
                          class: "sports-menu-main-loading__tabs",
                        },
                        null,
                        8,
                        ["theme"]
                      ))
                    : C("", !0),
                  c(
                    T,
                    {
                      isCompact: !t(r),
                      champsCount: 10,
                      class: "sports-menu-main-loading__loader",
                    },
                    null,
                    8,
                    ["isCompact"]
                  ),
                ]
            ),
            _: 1,
          }
        ));
    },
  }),
  L = l(v, [["__scopeId", "data-v-ac2d441d"]]),
  E = i({
    __name: "SportsMenuMainLoadingWithTabs",
    setup(e) {
      return (s, a) =>
        $_$() &&
        (n(),
        o(L, { hasTabs: "", class: "sports-menu-main-loading-with-tabs" }));
    },
  }),
  I = i({
    __name: "SportsMenuMainEmptyTemplate",
    props: {
      messageKey: { type: String, default: "sport_menu_result_empty" },
      rounded: { type: Boolean, default: !0 },
    },
    setup(e) {
      return (s, a) => {
        $_$();
        const r = y("UiMessageBlockV2");
        return (
          n(),
          o(
            d,
            { class: "sports-menu-main-empty-template" },
            {
              default: _(
                () =>
                  $_$() && [
                    u(s.$slots, "default"),
                    c(
                      r,
                      { rounded: !1, size: t(S).s },
                      {
                        default: _(
                          () => $_$() && [b(M(s.$T(e.messageKey)), 1)]
                        ),
                        _: 1,
                      },
                      8,
                      ["size"]
                    ),
                  ]
              ),
              _: 3,
            }
          )
        );
      };
    },
  });
export {
  L as SportsMenuMainLoading,
  d as UiSportsMenu,
  E as _sfc_main,
  I as _sfc_main$1,
};
