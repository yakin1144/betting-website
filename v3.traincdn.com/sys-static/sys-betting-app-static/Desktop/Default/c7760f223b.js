import $_$ from "./$_$.js";
$_$();
import {
  _sfc_main as i,
  PLATFORM_APPS_MICRO_FRONTEND_URL as l,
  _export_sfc as a,
} from "./entry-50afb6f36c.js";
import {
  runtimeCore_esmBundler_defineComponent as _,
  index_injectRemoteComponent as s,
  runtimeCore_esmBundler_resolveComponent as o,
  runtimeCore_esmBundler_createBlock as c,
  runtimeCore_esmBundler_createCommentVNode as u,
  runtimeCore_esmBundler_openBlock as D,
  runtimeCore_esmBundler_withCtx as r,
  runtimeCore_esmBundler_createVNode as t,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { DownloadAppWidgetLoader as A } from "./d37a535062.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import "./32064d16d1.js";
import "./3fb5c2806a.js";
import "./5389ac53d9.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
import "./9de70556bb.js";
import "./7fd3152d11.js";
import "./1af6a171a2.js";
import "./978e9c7c45.js";
const f = _({
  name: "DownloadAppWidget",
  components: {
    DownloadAppWidgetLoader: A,
    DownloadAppWidgetDesktop: s(l, "DownloadAppWidgetDesktop"),
    DownloadAppError: i,
  },
  props: {
    closable: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !0 },
  },
});
function w(e, C, B, g, W, k) {
  $_$();
  const n = o("DownloadAppWidgetLoader"),
    p = o("DownloadAppError"),
    m = o("DownloadAppWidgetDesktop");
  return e.visible
    ? (D(),
      c(
        m,
        { key: 0, closable: e.closable },
        {
          preloader: r(() => $_$() && [t(n)]),
          error: r(
            ({ reload: d }) =>
              $_$() && [t(p, { onReload: d }, null, 8, ["onReload"])]
          ),
          _: 1,
        },
        8,
        ["closable"]
      ))
    : u("", !0);
}
const V = a(f, [["render", w]]);
export { V as default };
