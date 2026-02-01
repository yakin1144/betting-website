import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as l,
  size_constants_sizeType as i,
  runtimeCore_esmBundler_createBlock as c,
  runtimeCore_esmBundler_openBlock as r,
  runtimeCore_esmBundler_resolveDynamicComponent as m,
  shared_esmBundler_normalizeClass as _,
  reactivity_esmBundler_unref as s,
  runtimeCore_esmBundler_withCtx as a,
  runtimeCore_esmBundler_createElementVNode as u,
  runtimeCore_esmBundler_renderSlot as t,
  runtimeCore_esmBundler_createElementBlock as d,
  runtimeCore_esmBundler_createCommentVNode as p,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useCouponThemeInject as C } from "./32064d16d1.js";
import { _export_sfc as B } from "./entry-50afb6f36c.js";
const k = { class: "ui-coupon-block__title ui-coupon-block-title" },
  f = { class: "ui-coupon-block-title__label" },
  v = { key: 0, class: "ui-coupon-block-title__value" },
  h = l({
    __name: "UiCouponBlock",
    props: {
      tag: { type: String, default: "div" },
      size: { type: String, default: i.m },
    },
    setup(o) {
      const { uiCouponBlockTheme: n } = C();
      return (e, b) =>
        $_$() &&
        (r(),
        c(
          m(o.tag),
          {
            class: _([
              {
                [`ui-coupon-block--size-${o.size}`]: o.size,
                [`ui-coupon-block--theme-${s(n)}`]: s(n),
              },
              "ui-coupon-block",
            ]),
          },
          {
            default: a(
              () =>
                $_$() && [
                  u("div", k, [
                    u("span", f, [t(e.$slots, "title", {}, void 0, !0)]),
                    e.$slots.value
                      ? (r(),
                        d("span", v, [t(e.$slots, "value", {}, void 0, !0)]))
                      : p("", !0),
                  ]),
                  t(e.$slots, "default", {}, void 0, !0),
                ]
            ),
            _: 3,
          },
          8,
          ["class"]
        ));
    },
  }),
  g = B(h, [["__scopeId", "data-v-e7e52f7d"]]);
export { g as UiCouponBlock };
