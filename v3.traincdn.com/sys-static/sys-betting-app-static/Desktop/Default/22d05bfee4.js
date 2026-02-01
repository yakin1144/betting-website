import $_$ from "./$_$.js";
$_$();
import {
  size_constants_sizeType as i,
  runtimeCore_esmBundler_defineComponent as a,
  runtimeCore_esmBundler_computed as d,
  reactivity_esmBundler_unref as e,
  bettingType_BettingType as B,
  runtimeCore_esmBundler_resolveComponent as s,
  runtimeCore_esmBundler_createElementBlock as C,
  runtimeCore_esmBundler_openBlock as t,
  shared_esmBundler_normalizeStyle as f,
  runtimeCore_esmBundler_createBlock as o,
  runtimeCore_esmBundler_createCommentVNode as S,
  runtimeCore_esmBundler_renderSlot as y,
  runtimeCore_esmBundler_withCtx as M,
  iconName as m,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useSportsMenuStore as T } from "./e063df8dd1.js";
import { useSportsMenuAppConfig as z } from "./9816d50199.js";
import { _export_sfc as g } from "./entry-50afb6f36c.js";
const v = { UiButton: i.m },
  k = a({
    __name: "SportsMenuCompactTemplate",
    setup(A) {
      $_$();
      const { sportsMenuAppConfig: n, sportsMenuAppStyles: p } = z(),
        { bettingType: u } = T(),
        c = d(() => $_$() && e(u) === B.LIVE);
      return (_, U) => {
        $_$();
        const r = s("UiIcoV2"),
          l = s("UiButton");
        return (
          t(),
          C(
            "div",
            { class: "sports-menu-compact-template", style: f(e(p)) },
            [
              e(n).isLiveDotTopVisibleCompact
                ? S("", !0)
                : (t(),
                  o(
                    l,
                    {
                      key: 0,
                      tag: "span",
                      narrow: "",
                      rounded: !1,
                      theme: e(n).uiButton,
                      size: e(v).UiButton,
                      class: "sports-menu-compact-template__tab",
                    },
                    {
                      default: M(
                        () =>
                          $_$() && [
                            e(c)
                              ? (t(),
                                o(
                                  r,
                                  {
                                    key: 0,
                                    ico: e(m).SIGNAL_STREAM,
                                    size: e(i).m,
                                    class: "sports-menu-compact-template__ico",
                                  },
                                  null,
                                  8,
                                  ["ico", "size"]
                                ))
                              : (t(),
                                o(r, { key: 1, ico: e(m).STREAM }, null, 8, [
                                  "ico",
                                ])),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["theme", "size"]
                  )),
              y(_.$slots, "default", {}, void 0, !0),
            ],
            4
          )
        );
      };
    },
  }),
  E = g(k, [["__scopeId", "data-v-231269fc"]]);
export { E as SportsMenuCompactTemplate };
