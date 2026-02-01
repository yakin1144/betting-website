import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as c,
  runtimeCore_esmBundler_getCurrentInstance as l,
  useGlobalStore as d,
  runtimeCore_esmBundler_computed as o,
  reactivity_esmBundler_unref as t,
  whenever as f,
  runtimeCore_esmBundler_createElementBlock as B,
  runtimeCore_esmBundler_openBlock as r,
  runtimeCore_esmBundler_createBlock as C,
  runtimeCore_esmBundler_createCommentVNode as M,
  runtimeCore_esmBundler_createVNode as S,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useSportsMenuRedirectIfEmptyLive as g,
  SportsMenuTabs as b,
  SportsMenuContent as I,
} from "./1c8d49ec28.js";
import { useBettingPageData as T } from "./4a993370c6.js";
import {
  useSportsMenuPollingData as k,
  useSportsMenuTriggerUpdate as v,
  useSportsMenuRouteMonitoring as y,
} from "./3004035142.js";
import {
  defineMultiImplementedComponent as D,
  Platforms as L,
  useBettingRouteData as U,
  _export_sfc as V,
} from "./entry-50afb6f36c.js";
import "./9de70556bb.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "./7fd3152d11.js";
import "./1af6a171a2.js";
import "./25dbd9c5df.js";
import "./e063df8dd1.js";
import "./9e4e245c05.js";
import "./58a21526ee.js";
import "./ff2996a70d.js";
import "./858ab97c10.js";
import "./6550e9bfb1.js";
import "./c7ea6bc74a.js";
import "./9816d50199.js";
import "./dd584157d6.js";
import "./b11db110fe.js";
import "./30806a74d6.js";
import "./e1e32a66a3.js";
import "./aa92bf211f.js";
import "./51ca376446.js";
import "./60d766cde4.js";
import "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import "./f867225f04.js";
import "./e37cc43aaf.js";
import "./6e5c097416.js";
import "./944eab39d4.js";
import "./d046664d0b.js";
import "./9afba2de88.js";
import "../../../shared-assets/Desktop/__shared_1c5f097ec1.js";
import "./669f85a6b8.js";
import "./f0c49800c9.js";
import "./fc0a56fa04.js";
import "./f1156f93a8.js";
import "./5f6b076bc4.js";
import "./6a64c59e39.js";
import "./4b4dfdeaaf.js";
import "./4e4f01046c.js";
import "./bb0d3b59f5.js";
import "./9f1a1c8555.js";
import "./53db7ae5ba.js";
import "./762b07d264.js";
import "./37dd3dae1b.js";
/* empty css          */ import "./2ac826c613.js";
import "./119c73ece6.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
const E = { class: "sports-menu" },
  N = c({
    __name: "SportsMenu",
    setup(i) {
      $_$();
      const m = {
        defineEntityImplementation: () => $_$() && { props: i, emit: l().emit },
      };
      D("SportsMenu", {}, !0, [L.Desktop]), m.defineEntityImplementation();
      const { loading: p, sportsMenuPollingForceUpdate: e } = k();
      e();
      const n = d(),
        { routeUrlGameName: s } = U(),
        { isMultiSection: u } = T(),
        _ = o(() => n.isLeftSectionVisible),
        a = o(() => $_$() && t(u) && t(_));
      return (
        v(),
        y(),
        g(),
        f(s, () => {
          $_$();
          t(p) || e();
        }),
        (P, R) =>
          $_$() &&
          (r(),
          B("div", E, [
            t(a)
              ? (r(), C(b, { key: 0, class: "sports-menu__tabs" }))
              : M("", !0),
            S(I, { class: "sports-menu__content" }),
          ]))
      );
    },
  }),
  Pt = V(N, [["__scopeId", "data-v-525c4530"]]);
export { Pt as default };
