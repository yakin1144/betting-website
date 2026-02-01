import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as l,
  defaultSizeType as u,
  index_useT as a,
  runtimeCore_esmBundler_computed as r,
  iconName as m,
  runtimeCore_esmBundler_resolveComponent as _,
  runtimeCore_esmBundler_resolveDirective as c,
  runtimeCore_esmBundler_withDirectives as d,
  runtimeCore_esmBundler_createElementBlock as f,
  runtimeCore_esmBundler_openBlock as g,
  runtimeCore_esmBundler_mergeProps as v,
  runtimeDom_esmBundler_withModifiers as p,
  runtimeCore_esmBundler_createVNode as B,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as C } from "./entry-50afb6f36c.js";
const b = l({
    name: "UiToggleFavoriteButton",
    props: {
      isActive: { type: Boolean, default: !1 },
      narrow: { type: Boolean, default: !1 },
      size: { type: String, default: u },
      tooltipTheme: { type: String, default: "" },
    },
    setup(e) {
      $_$();
      const t = a(),
        o = r(() => ({
          "ui-toggle-favorite-button--is-active": e.isActive,
          "ui-toggle-favorite-button--narrow": e.narrow,
          [`ui-toggle-favorite-button--size-${e.size}`]: !!e.size,
        })),
        i = r(() =>
          e.isActive ? t("betting_remove_favorite") : t("betting_add_favorite")
        );
      return { iconName: m, uiToggleFavoriteButtonClasses: o, title: i };
    },
  }),
  T = ["aria-label"];
function y(e, t, o, i, $, w) {
  $_$();
  const n = _("UiIco"),
    s = c("tooltip");
  return d(
    (g(),
    f(
      "button",
      v({ onClick: t[0] || (t[0] = p(() => {}, ["stop"])) }, e.$attrs, {
        class: [e.uiToggleFavoriteButtonClasses, "ui-toggle-favorite-button"],
        type: "button",
        "aria-label": e.title,
      }),
      [
        B(
          n,
          {
            ico: e.iconName.FAVORITE,
            class: "ui-toggle-favorite-button__ico",
            square: "",
          },
          null,
          8,
          ["ico"]
        ),
      ],
      16,
      T
    )),
    [[s, { content: e.title, classes: e.tooltipTheme }]]
  );
}
const h = C(b, [
  ["render", y],
  ["__scopeId", "data-v-c1425afd"],
]);
export { h as UiToggleFavoriteButton };
