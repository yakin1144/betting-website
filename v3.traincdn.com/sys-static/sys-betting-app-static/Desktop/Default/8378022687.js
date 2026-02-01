import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as s,
  index_getConfig as i,
  runtimeCore_esmBundler_computed as l,
  runtimeCore_esmBundler_resolveComponent as d,
  runtimeCore_esmBundler_createBlock as u,
  runtimeCore_esmBundler_openBlock as _,
  shared_esmBundler_normalizeClass as c,
  reactivity_esmBundler_unref as m,
  runtimeCore_esmBundler_withCtx as p,
  runtimeCore_esmBundler_renderSlot as b,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as B } from "./entry-50afb6f36c.js";
const C = s({
    __name: "LayoutSidebar",
    props: {
      leftSidebar: { type: Boolean },
      rightSidebar: { type: Boolean },
      isCompact: { type: Boolean },
      isSectionHover: { type: Boolean },
    },
    setup(r) {
      $_$();
      const e = r,
        o = i(2044),
        t = l(() => ({
          "layout-sidebar--left": e.leftSidebar,
          "layout-sidebar--right": e.rightSidebar,
          "layout-sidebar--is-compact": e.isCompact,
          "layout-sidebar--is-hover": e.isSectionHover,
          "layout-sidebar--has-top-indent": !o,
        }));
      return (a, y) => {
        $_$();
        const n = d("UiScrollbar");
        return (
          _(),
          u(
            n,
            { class: c([m(t), "layout-sidebar"]) },
            {
              default: p(
                () => $_$() && [b(a.$slots, "default", {}, void 0, !0)]
              ),
              _: 3,
            },
            8,
            ["class"]
          )
        );
      };
    },
  }),
  h = B(C, [["__scopeId", "data-v-daf79ccc"]]);
export { h as LayoutSidebar };
