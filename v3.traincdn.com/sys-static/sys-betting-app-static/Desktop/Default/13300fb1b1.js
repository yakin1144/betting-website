import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as o,
  runtimeCore_esmBundler_defineAsyncComponent as i,
  runtimeCore_esmBundler_onBeforeUnmount as m,
  runtimeCore_esmBundler_createElementBlock as _,
  runtimeCore_esmBundler_openBlock as a,
  runtimeCore_esmBundler_createVNode as e,
  page_default as s,
  reactivity_esmBundler_unref as u,
  runtimeCore_esmBundler_withCtx as c,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useBettingClearSelectedData as d } from "./9de70556bb.js";
import {
  loadBettingMain as l,
  useSyncBetsWithStorage as p,
  _export_sfc as B,
} from "./entry-50afb6f36c.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "./7fd3152d11.js";
import "./1af6a171a2.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
const C = { class: "betting-content" },
  f = o({
    __name: "BettingContent",
    setup(g) {
      $_$();
      const n = i(l);
      p();
      const { bettingClearAllFilters: r } = d();
      return (
        m(r),
        (b, x) => {
          $_$();
          const t = s;
          return (
            a(),
            _("main", C, [
              e(t, { key: "bettingHeader", name: "bettingHeader" }),
              e(
                u(n),
                { class: "betting-content__main" },
                {
                  default: c(() => $_$() && [e(t, { name: "defaultAsian" })]),
                  _: 1,
                }
              ),
            ])
          );
        }
      );
    },
  }),
  M = B(f, [["__scopeId", "data-v-cd292d8b"]]);
export { M as default };
