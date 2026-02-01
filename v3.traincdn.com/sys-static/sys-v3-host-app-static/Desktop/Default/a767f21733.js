import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as k,
  runtimeCore_esmBundler_getCurrentInstance as y,
  runtimeCore_esmBundler_resolveComponent as e,
  runtimeCore_esmBundler_createElementBlock as I,
  runtimeCore_esmBundler_openBlock as o,
  shared_esmBundler_normalizeClass as T,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_createBlock as _,
  runtimeCore_esmBundler_createCommentVNode as p,
  runtimeCore_esmBundler_createElementVNode as m,
  runtimeCore_esmBundler_createVNode as n,
  iconName as a,
  size_constants_sizeType as s,
  statusType as g,
  WeightType as z,
  runtimeCore_esmBundler_withCtx as E,
  runtimeCore_esmBundler_createTextVNode as h,
  shared_esmBundler_toDisplayString as O,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useSupportMultiButton as R,
  SupportMultiButtonWidget as x,
} from "./ca27ec157f.js";
import {
  defineMultiImplementedComponent as N,
  Platforms as V,
  _export_sfc as D,
} from "./entry-85993dc44c.js";
const v = ["aria-label"],
  w = { class: "support-multi-button__wrapper" },
  L = k({
    __name: "SupportMultiButton",
    setup(c) {
      const d = {
        defineEntityImplementation: () => $_$() && { props: c, emit: y().emit },
      };
      N("SupportMultiButton", {}, !0, [V.Desktop]),
        d.defineEntityImplementation();
      const {
        supportMultiButtonClasses: C,
        toggleSupportMultiBtn: r,
        isSupportOptionsVisible: B,
        hasUnreadMessages: S,
        closeSupportOptions: b,
      } = R();
      return (u, i) => {
        $_$();
        const l = e("UiIco"),
          f = e("UiStatusMarker"),
          M = e("UiCaption");
        return (
          o(),
          I(
            "div",
            { class: T(["support-multi-button", t(C)]) },
            [
              t(B)
                ? (o(), _(x, { key: 0, onClose: t(b) }, null, 8, ["onClose"]))
                : p("", !0),
              m(
                "button",
                {
                  onClick:
                    i[0] || (i[0] = (...U) => $_$() && t(r) && t(r)(...U)),
                  "aria-label": u.$T("support_multi_button_title"),
                  type: "button",
                  class: "support-multi-button__btn",
                },
                [
                  m("span", w, [
                    n(
                      l,
                      {
                        size: t(s).m,
                        ico: t(a).CUSTOMER_SERVICE,
                        class: "support-multi-button__ico",
                      },
                      null,
                      8,
                      ["size", "ico"]
                    ),
                    t(S)
                      ? (o(),
                        _(
                          f,
                          {
                            key: 0,
                            status: t(g).SUCCESS,
                            class: "support-multi-button__marker",
                          },
                          null,
                          8,
                          ["status"]
                        ))
                      : p("", !0),
                    n(
                      M,
                      {
                        class: "support-multi-button__text",
                        uppercase: "",
                        size: t(s).m,
                        weight: t(z).BOLD,
                      },
                      {
                        default: E(
                          () =>
                            $_$() && [
                              h(O(u.$T("support_multi_button_title")), 1),
                            ]
                        ),
                        _: 1,
                      },
                      8,
                      ["size", "weight"]
                    ),
                  ]),
                  n(
                    l,
                    {
                      ico: t(a).ERROR_CROSS,
                      size: t(s).xxs,
                      class: "support-multi-button__close",
                    },
                    null,
                    8,
                    ["ico", "size"]
                  ),
                ],
                8,
                v
              ),
            ],
            2
          )
        );
      };
    },
  }),
  P = D(L, [["__scopeId", "data-v-913c14b5"]]);
export { P as default };
