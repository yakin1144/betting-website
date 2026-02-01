import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as s,
  index_getConfig as a,
  runtimeCore_esmBundler_createElementBlock as o,
  runtimeCore_esmBundler_openBlock as d,
  shared_esmBundler_normalizeClass as l,
  reactivity_esmBundler_unref as n,
  runtimeCore_esmBundler_renderSlot as r,
  runtimeCore_esmBundler_createElementVNode as u,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as m } from "./entry-50afb6f36c.js";
const S = { class: "layout__main" },
  b = s({
    __name: "Layout",
    props: {
      leftSidebarSize: { type: String, default: "" },
      rightSidebarSize: { type: String, default: "" },
    },
    setup(t) {
      $_$();
      const i = a(2044);
      return (e, f) =>
        $_$() &&
        (d(),
        o(
          "div",
          {
            class: l([
              "layout",
              {
                "layout--has-left-sidebar":
                  e.$slots.leftSidebar && !e.$slots.rightSidebar,
                "layout--has-right-sidebar":
                  e.$slots.rightSidebar && !e.$slots.leftSidebar,
                "layout--has-both-sidebars":
                  e.$slots.leftSidebar && e.$slots.rightSidebar,
                [`layout--left-sidebar-size-${t.leftSidebarSize}`]:
                  t.leftSidebarSize,
                [`layout--right-sidebar-size-${t.rightSidebarSize}`]:
                  t.rightSidebarSize,
                "layout--has-top-indent": !n(i),
              },
            ]),
          },
          [
            r(e.$slots, "leftSidebar", {}, void 0, !0),
            u("div", S, [r(e.$slots, "main", {}, void 0, !0)]),
            r(e.$slots, "rightSidebar", {}, void 0, !0),
            r(e.$slots, "default", {}, void 0, !0),
          ],
          2
        ));
    },
  }),
  y = m(b, [["__scopeId", "data-v-9813fa56"]]);
export { y as Layout };
