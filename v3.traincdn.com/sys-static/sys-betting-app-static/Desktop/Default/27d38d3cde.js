import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as v } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as C,
  execAsync as L,
  useGlobalStore as y,
  reactivity_esmBundler_ref as h,
  runtimeCore_esmBundler_computed as i,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_watch as w,
  runtimeCore_esmBundler_createBlock as A,
  runtimeCore_esmBundler_openBlock as T,
  shared_esmBundler_normalizeClass as H,
  shared_esmBundler_normalizeStyle as M,
  runtimeCore_esmBundler_withCtx as k,
  runtimeCore_esmBundler_renderSlot as x,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { LayoutSidebar as z } from "./8378022687.js";
import { useLeftMenuScroll as E } from "./9f1a1c8555.js";
import {
  loadBettingLeftAsideTemplateConfigDesktop as $,
  _export_sfc as I,
} from "./entry-50afb6f36c.js";
const D = C({
    __name: "BettingLeftAsideTemplate",
    emits: ["mouseleave"],
    async setup(G, { emit: _ }) {
      $_$();
      let t, r, o, l;
      const f = _,
        u =
          (([o, l] = v(() => $())),
          (o = (([t, r] = L(() => o)), (t = await t), r(), t)),
          l(),
          o),
        { config: a, styles: p } = u(),
        m = y(),
        c = h(),
        { onEnterSidebar: S, onLeaveSidebar: b } = E({ leftSidebar: c }),
        d = i(() => m.getIsLeftSectionHover),
        s = i(() => m.isLeftSectionHidden),
        g = i(
          () =>
            $_$() && [
              `betting-left-aside-template--theme-${a.bettingLeftAsideTemplateTheme}`,
              `betting-left-aside-template--size-${a.bettingLeftAsideTemplateSize}`,
              {
                "betting-left-aside-template--is-compact": e(s),
                "betting-left-aside-template--is-shown": e(d),
              },
            ]
        ),
        B = (n) => {
          b(), f("mouseleave", n);
        };
      return (
        w(
          s,
          () => {
            window.dispatchEvent(new Event("toggleLeftSection"));
          },
          { flush: "post" }
        ),
        (n, j) =>
          $_$() &&
          (T(),
          A(
            z,
            {
              ref_key: "leftSidebar",
              ref: c,
              onMouseenter: e(S),
              onMouseleave: B,
              leftSidebar: "",
              style: M(e(p)),
              isSectionHover: e(d),
              isCompact: e(s),
              class: H([e(g), "betting-left-aside-template"]),
            },
            {
              default: k(
                () => $_$() && [x(n.$slots, "leftSide", {}, void 0, !0)]
              ),
              _: 3,
            },
            8,
            ["onMouseenter", "style", "isSectionHover", "isCompact", "class"]
          ))
      );
    },
  }),
  O = I(D, [["__scopeId", "data-v-3fa7061f"]]);
export { O as BettingLeftAsideTemplate };
