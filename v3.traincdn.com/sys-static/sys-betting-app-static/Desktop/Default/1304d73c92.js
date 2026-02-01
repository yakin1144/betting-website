import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as t,
  theme_constants_themeType as o,
  runtimeCore_esmBundler_resolveComponent as m,
  runtimeCore_esmBundler_createBlock as _,
  runtimeCore_esmBundler_openBlock as s,
  runtimeCore_esmBundler_withCtx as u,
  runtimeCore_esmBundler_createElementVNode as d,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as l } from "./entry-50afb6f36c.js";
const p = t({
  name: "MenuLoader",
  setup() {
    $_$();
    return { themeType: o };
  },
});
function a(r, e, i, c, C, f) {
  $_$();
  const n = m("UiSkeleton");
  return (
    s(),
    _(
      n,
      { theme: r.themeType.primary_20, repeat: 9, class: "menu-loader" },
      {
        default: u(
          () =>
            ($_$() && e[0]) ||
            (e[0] = [d("div", { class: "menu-loader__item" }, null, -1)])
        ),
        _: 1,
      },
      8,
      ["theme"]
    )
  );
}
const k = l(p, [
  ["render", a],
  ["__scopeId", "data-v-59d56d7a"],
]);
export { k as MenuLoader };
