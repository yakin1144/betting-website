import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as g,
  reactivity_esmBundler_toRefs as B,
  runtimeCore_esmBundler_resolveComponent as _,
  runtimeCore_esmBundler_createElementBlock as p,
  runtimeCore_esmBundler_openBlock as n,
  runtimeCore_esmBundler_createBlock as C,
  runtimeCore_esmBundler_createCommentVNode as T,
  runtimeCore_esmBundler_renderSlot as t,
  runtimeCore_esmBundler_createElementVNode as f,
  reactivity_esmBundler_unref as o,
  shared_esmBundler_normalizeClass as S,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useLeftSide as b, _export_sfc as k } from "./entry-50afb6f36c.js";
const v = ["aria-label"],
  h = { class: "left-side-template__box" },
  y = g({
    __name: "LeftSideTemplate",
    props: {
      bettingType: {},
      pageType: {},
      uiColumnToggleButtonClass: { type: Boolean },
      uiColumnToggleButtonNarrow: { type: Boolean },
      uiColumnToggleButtonDecent: { type: Boolean },
      uiColumnToggleButtonTheme: {},
      uiColumnToggleButtonIconSize: {},
      uiColumnToggleButtonTextSize: {},
    },
    setup(l) {
      $_$();
      const i = l,
        { bettingType: r, pageType: u } = B(i),
        {
          isLeftSectionHover: s,
          isLeftSectionHidden: m,
          isLowResolutionScreen: a,
          toggleLeftHidden: d,
        } = b({ pageType: u, bettingType: r });
      return (e, z) => {
        $_$();
        const c = _("UiColumnToggleButton");
        return (
          n(),
          p(
            "aside",
            { "aria-label": e.$T("main_sidebar"), class: "left-side-template" },
            [
              o(a)
                ? T("", !0)
                : (n(),
                  C(
                    c,
                    {
                      key: 0,
                      onClick: o(d),
                      isHidden: o(m),
                      compact: o(s),
                      "aria-label": e.$T("main_toggle_text"),
                      hideTo: "start",
                      textFixBlock: e.$T("main_fix_block"),
                      textHideBlock: e.$T("main_hide_block"),
                      theme: e.uiColumnToggleButtonTheme,
                      decent: e.uiColumnToggleButtonDecent,
                      narrow: e.uiColumnToggleButtonNarrow,
                      iconSize: e.uiColumnToggleButtonIconSize,
                      textSize: e.uiColumnToggleButtonTextSize,
                      class: S({
                        "left-side-template__button":
                          e.uiColumnToggleButtonClass,
                      }),
                    },
                    null,
                    8,
                    [
                      "onClick",
                      "isHidden",
                      "compact",
                      "aria-label",
                      "textFixBlock",
                      "textHideBlock",
                      "theme",
                      "decent",
                      "narrow",
                      "iconSize",
                      "textSize",
                      "class",
                    ]
                  )),
              t(e.$slots, "uiNav", {}, void 0, !0),
              f("div", h, [
                t(e.$slots, "sportMenuAppDataProvider", {}, void 0, !0),
                t(e.$slots, "bottomButtons", {}, void 0, !0),
              ]),
            ],
            8,
            v
          )
        );
      };
    },
  }),
  $ = k(y, [["__scopeId", "data-v-97e57064"]]);
export { $ as LeftSideTemplate };
