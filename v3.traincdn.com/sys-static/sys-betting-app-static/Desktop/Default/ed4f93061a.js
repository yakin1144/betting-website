import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as o,
  runtimeCore_esmBundler_resolveComponent as r,
  runtimeCore_esmBundler_createElementBlock as n,
  runtimeCore_esmBundler_openBlock as i,
  runtimeCore_esmBundler_createVNode as s,
  runtimeCore_esmBundler_createElementVNode as c,
  reactivity_esmBundler_unref as _,
  size_constants_sizeType as m,
  shared_esmBundler_toDisplayString as p,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as u } from "./entry-50afb6f36c.js";
const a = { class: "ui-coupon-bet-champ" },
  d = { class: "ui-coupon-bet-champ__caption" },
  l = o({
    __name: "UiCouponBetChamp",
    props: {
      caption: { type: String, required: !0 },
      sportId: { type: Number, required: !0 },
      sportName: { type: String, default: "" },
    },
    setup(e) {
      return (B, C) => {
        $_$();
        const t = r("UiIcoSport");
        return (
          i(),
          n("div", a, [
            s(
              t,
              {
                ico: e.sportId,
                title: e.sportName,
                size: _(m).xs,
                class: "ui-coupon-bet-champ__ico",
              },
              null,
              8,
              ["ico", "title", "size"]
            ),
            c("span", d, p(e.caption), 1),
          ])
        );
      };
    },
  }),
  y = u(l, [["__scopeId", "data-v-9b0e7e50"]]);
export { y as UiCouponBetChamp };
