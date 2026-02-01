import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as C,
  index_useT as N,
  useGlobalStore as v,
  runtimeCore_esmBundler_computed as o,
  useRouterMethodsWithLang as b,
  useToggle_useToggle as y,
  reactivity_esmBundler_unref as t,
  getFormattedLicenseText_getFormattedLicenseText as $,
  runtimeCore_esmBundler_resolveComponent as B,
  runtimeCore_esmBundler_createElementBlock as p,
  runtimeCore_esmBundler_openBlock as u,
  runtimeCore_esmBundler_createVNode as f,
  runtimeCore_esmBundler_createCommentVNode as z,
  ColorType as H,
  runtimeCore_esmBundler_withCtx as g,
  runtimeCore_esmBundler_createTextVNode as S,
  shared_esmBundler_toDisplayString as M,
  omitNotDefined_omitNotDefined as w,
  runtimeCore_esmBundler_createBlock as D,
  runtimeCore_esmBundler_mergeProps as O,
  runtimeCore_esmBundler_toHandlers as F,
  runtimeCore_esmBundler_renderSlot as U,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as x } from "./entry-85993dc44c.js";
const V = { class: "footer-license-text" },
  I = C({
    __name: "FooterLicenseText",
    props: { license: {}, textColor: {}, textSize: {} },
    setup(e) {
      $_$();
      const n = e,
        r = N(),
        i = v(),
        s = o(() => i.getLanguage),
        { getLinkWithLang: m } = b(s),
        [c, a] = y(!1),
        T = o(() =>
          $_$() && t(a)
            ? `${n.license.content} ${n.license.contentHideable}`
            : n.license.content
        ),
        L = o(
          () => $_$() && $({ licenseText: t(T), lng: t(s), getLinkWithLang: m })
        ),
        h = o(() => $_$() && r(t(a) ? "footer_show_less" : "footer_show_more"));
      return (l, _) => {
        $_$();
        const d = B("UiCaption");
        return (
          u(),
          p("div", V, [
            f(
              d,
              {
                color: l.textColor,
                size: l.textSize,
                class: "footer-license-text__text",
                innerHTML: t(L),
              },
              null,
              8,
              ["color", "size", "innerHTML"]
            ),
            l.license.contentHideable
              ? (u(),
                p(
                  "button",
                  {
                    key: 0,
                    onClick:
                      _[0] || (_[0] = (...k) => $_$() && t(c) && t(c)(...k)),
                    type: "button",
                    class: "footer-license-text__more",
                  },
                  [
                    f(
                      d,
                      {
                        size: l.textSize,
                        color: t(H).clrPrimary,
                        class: "footer-license-text__caption",
                      },
                      { default: g(() => $_$() && [S(M(t(h)), 1)]), _: 1 },
                      8,
                      ["size", "color"]
                    ),
                  ]
                ))
              : z("", !0),
          ])
        );
      };
    },
  }),
  E = x(I, [["__scopeId", "data-v-571c78f2"]]),
  A = (e) => {
    switch (e.item.actionType) {
      case 3:
      case 5:
        return { props: { to: e.item.link } };
      case 2:
        return { props: { href: e.item.link }, attrs: { target: "_blank" } };
      case 4:
        return { props: { fake: !0 } };
      default:
        return { props: { href: e.item.link } };
    }
  },
  P = C({
    name: "MenuItemHOC",
    props: { item: { type: Object, required: !0 } },
    setup(e, { attrs: n }) {
      $_$();
      const r = o(() => A(e)),
        i = o(() => $_$() && { ...n, ...t(r).attrs, ...t(r).props }),
        s = o(() => $_$() && w({ ...e.item.on }));
      return { vNodeData: r, vNodeAttrs: i, vNodeListeners: s };
    },
  });
function W(e, n, r, i, s, m) {
  $_$();
  const c = B("UiButtonBase");
  return (
    u(),
    D(
      c,
      O(F(e.vNodeListeners), e.vNodeAttrs, { class: e.item.classList }),
      { default: g(() => $_$() && [U(e.$slots, "default")]), _: 3 },
      16,
      ["class"]
    )
  );
}
const G = x(P, [["render", W]]);
export { E as FooterLicenseText, G as MenuItemHOC };
