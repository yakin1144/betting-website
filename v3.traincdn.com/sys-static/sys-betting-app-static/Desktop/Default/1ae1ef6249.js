import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as d,
  runtimeCore_esmBundler_resolveComponent as u,
  runtimeCore_esmBundler_createBlock as _,
  runtimeCore_esmBundler_openBlock as a,
  reactivity_esmBundler_unref as e,
  theme_constants_themeType as p,
  index_injectRemoteComponent as B,
  runtimeCore_esmBundler_createCommentVNode as C,
  runtimeCore_esmBundler_withCtx as g,
  runtimeCore_esmBundler_renderSlot as f,
  runtimeCore_esmBundler_createVNode as h,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as m,
  BANNERS_MICRO_FRONTEND_URL as w,
  useBannersClientWidget as S,
} from "./entry-50afb6f36c.js";
import "./9341f38cd0.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
const y = d({
    __name: "BannersWidgetLoader_F",
    setup(r) {
      return (n, o) => {
        $_$();
        const t = u("UiSkeleton");
        return (
          a(),
          _(
            t,
            { theme: e(p).primary_40, class: "banners-widget-loader" },
            null,
            8,
            ["theme"]
          )
        );
      };
    },
  }),
  W = m(y, [["__scopeId", "data-v-dc73eb8b"]]),
  k = d({
    __name: "BannersClientWidget",
    props: {
      widgetIdKey: {},
      isShowDecoration: { type: Boolean, default: !1 },
      needSsr: { type: Boolean, default: !0 },
    },
    setup(r) {
      $_$();
      const n = r,
        o = B(w, "Widget", { needSSR: n.needSsr }),
        {
          showBannersComponentBlock: t,
          widgetId: l,
          hideWidget: s,
          errorHandler: c,
        } = S(n.widgetIdKey);
      return (i, E) =>
        $_$() && e(t)
          ? (a(),
            _(
              e(o),
              {
                key: 0,
                onEmpty: e(s),
                onFail: e(s),
                onError: e(c),
                widget: e(l),
                isShowDecoration: i.isShowDecoration,
                class: "banners-client-widget",
              },
              {
                preloader: g(
                  () =>
                    $_$() && [
                      f(i.$slots, "default", {}, () => $_$() && [h(W)], !0),
                    ]
                ),
                _: 3,
              },
              8,
              ["onEmpty", "onFail", "onError", "widget", "isShowDecoration"]
            ))
          : C("", !0);
    },
  }),
  v = m(k, [["__scopeId", "data-v-2d8979f9"]]);
export { v as default };
