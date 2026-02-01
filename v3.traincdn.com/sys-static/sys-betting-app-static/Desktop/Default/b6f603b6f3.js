import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as t,
  runtimeCore_esmBundler_resolveComponent as _,
  runtimeCore_esmBundler_createBlock as o,
  runtimeCore_esmBundler_openBlock as e,
  reactivity_esmBundler_unref as m,
  theme_constants_themeType as s,
  runtimeCore_esmBundler_withCtx as i,
  runtimeCore_esmBundler_createElementBlock as u,
  runtimeCore_esmBundler_Fragment as d,
  runtimeCore_esmBundler_renderList as l,
  runtimeCore_esmBundler_createElementVNode as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as c } from "./entry-50afb6f36c.js";
const B = t({
    __name: "BannersWidgetLoader_F",
    setup(p) {
      return (C, f) => {
        $_$();
        const r = _("UiSkeleton");
        return (
          e(),
          o(
            r,
            { theme: m(s).primary, class: "banners-widget-loader" },
            {
              default: i(
                () =>
                  $_$() && [
                    (e(),
                    u(
                      d,
                      null,
                      l(
                        6,
                        (h, n) =>
                          $_$() &&
                          a("div", {
                            key: n,
                            class: "banners-widget-loader__item",
                          })
                      ),
                      64
                    )),
                  ]
              ),
              _: 1,
            },
            8,
            ["theme"]
          )
        );
      };
    },
  }),
  b = c(B, [["__scopeId", "data-v-30bcebf0"]]);
export { b as BannersWidgetLoader };
