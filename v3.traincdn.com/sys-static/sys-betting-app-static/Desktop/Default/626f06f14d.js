import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as y,
  runtimeCore_esmBundler_computed as N,
  useStepper as U,
  reactivity_esmBundler_toRef as E,
  runtimeCore_esmBundler_resolveComponent as d,
  runtimeCore_esmBundler_resolveDirective as h,
  runtimeCore_esmBundler_createElementBlock as s,
  runtimeCore_esmBundler_openBlock as l,
  runtimeCore_esmBundler_withDirectives as C,
  runtimeCore_esmBundler_createElementVNode as k,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_createVNode as i,
  iconName as B,
  size_constants_sizeType as n,
  runtimeCore_esmBundler_withCtx as b,
  runtimeCore_esmBundler_createTextVNode as v,
  shared_esmBundler_toDisplayString as f,
  ColorType as D,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as I } from "./entry-50afb6f36c.js";
const R = { class: "ui-betting-stepper" },
  S = ["aria-label"],
  $ = { class: "ui-betting-stepper__status" },
  H = ["aria-label"],
  w = y({
    __name: "UiBettingStepper",
    props: { modelValue: {}, total: {} },
    emits: ["update:modelValue"],
    setup(z, { emit: g }) {
      $_$();
      const _ = z,
        x = g,
        T = N({
          get: () => _.modelValue,
          set: (t) => x("update:modelValue", t),
        }),
        {
          position: V,
          increment: m,
          decrement: u,
        } = U({
          position: T,
          min: 1,
          max: E(() => _.total),
          step: 1,
          carousel: !0,
        });
      return (t, o) => {
        $_$();
        const a = d("UiIco"),
          p = d("UiCaption"),
          c = h("tooltip");
        return (
          l(),
          s("div", R, [
            C(
              (l(),
              s(
                "button",
                {
                  onClick:
                    o[0] || (o[0] = (...r) => $_$() && e(u) && e(u)(...r)),
                  type: "button",
                  "aria-label": t.$T("main_prev"),
                  class: "ui-betting-stepper__control",
                },
                [
                  i(a, { size: e(n).xxs, ico: e(B).CHEVRON_LEFT }, null, 8, [
                    "size",
                    "ico",
                  ]),
                ],
                8,
                S
              )),
              [[c, t.$T("main_prev")]]
            ),
            k("div", $, [
              i(
                p,
                { size: e(n).xs },
                { default: b(() => $_$() && [v(f(e(V)), 1)]), _: 1 },
                8,
                ["size"]
              ),
              i(
                p,
                {
                  size: e(n).xs,
                  color: e(D).clrDecent,
                  class: "ui-betting-stepper__total",
                },
                { default: b(() => $_$() && [v(f(t.total), 1)]), _: 1 },
                8,
                ["size", "color"]
              ),
            ]),
            C(
              (l(),
              s(
                "button",
                {
                  onClick:
                    o[1] || (o[1] = (...r) => $_$() && e(m) && e(m)(...r)),
                  type: "button",
                  "aria-label": t.$T("main_next"),
                  class: "ui-betting-stepper__control",
                },
                [
                  i(a, { size: e(n).xxs, ico: e(B).CHEVRON_RIGHT }, null, 8, [
                    "size",
                    "ico",
                  ]),
                ],
                8,
                H
              )),
              [[c, t.$T("main_next")]]
            ),
          ])
        );
      };
    },
  }),
  G = I(w, [["__scopeId", "data-v-9843f70f"]]);
export { G as UiBettingStepper };
