import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as C,
  ColorType as g,
  size_constants_sizeType as B,
  runtimeCore_esmBundler_computed as n,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_resolveComponent as h,
  runtimeCore_esmBundler_createBlock as y,
  runtimeCore_esmBundler_openBlock as r,
  shared_esmBundler_normalizeClass as L,
  shared_esmBundler_normalizeStyle as S,
  runtimeCore_esmBundler_withCtx as z,
  runtimeCore_esmBundler_createElementBlock as k,
  runtimeCore_esmBundler_renderSlot as a,
  runtimeCore_esmBundler_createCommentVNode as i,
  runtimeCore_esmBundler_createTextVNode as o,
  shared_esmBundler_toDisplayString as u,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { ElementTag as x } from "./3b90957c29.js";
import { _export_sfc as U } from "./entry-8c01be4f19.js";
const w = { key: 0, class: "ui-slide-caption__text" },
  b = C({
    __name: "UiSlideCaption",
    props: {
      tag: { default: x.SPAN },
      label: { default: "" },
      maxLines: { default: null },
      maxLinesHighLanguages: { default: null },
      size: { default: B.m },
      weight: { default: void 0 },
      color: { default: g.clr },
      uppercase: { type: Boolean, default: !1 },
      firstLetterUppercase: { type: Boolean, default: !1 },
    },
    setup(m) {
      $_$();
      const s = m,
        l = n(() => s.maxLines > 1),
        p = n(
          () =>
            $_$() && {
              "ui-slide-caption--max-lines": t(l),
              "ui-slide-caption--first-letter-uppercase":
                s.firstLetterUppercase,
            }
        ),
        d = n(() => ($_$() && t(l) ? s.maxLines : null)),
        c = n(() => s.maxLines === 1),
        _ = n(
          () =>
            $_$() && {
              "--ui-slide-caption-max-lines": t(d),
              "--ui-slide-caption-max-lines-high-languages":
                s.maxLinesHighLanguages,
            }
        );
      return (e, v) => {
        $_$();
        const f = h("UiCaption");
        return (
          r(),
          y(
            f,
            {
              tag: e.tag,
              uppercase: e.uppercase,
              style: S(t(_)),
              size: e.size,
              weight: e.weight,
              color: e.color,
              noWrap: t(c),
              class: L([t(p), "ui-slide-caption"]),
            },
            {
              default: z(
                () =>
                  $_$() && [
                    t(l)
                      ? (r(),
                        k("span", w, [
                          e.$slots.default
                            ? a(
                                e.$slots,
                                "default",
                                { key: 0 },
                                () => $_$() && [o(u(e.label), 1)],
                                !0
                              )
                            : i("", !0),
                        ]))
                      : e.$slots.default
                      ? a(
                          e.$slots,
                          "default",
                          { key: 1 },
                          () => $_$() && [o(u(e.label), 1)],
                          !0
                        )
                      : i("", !0),
                  ]
              ),
              _: 3,
            },
            8,
            [
              "tag",
              "uppercase",
              "style",
              "size",
              "weight",
              "color",
              "noWrap",
              "class",
            ]
          )
        );
      };
    },
  }),
  W = U(b, [["__scopeId", "data-v-f123f4b8"]]);
export { W as UiSlideCaption };
