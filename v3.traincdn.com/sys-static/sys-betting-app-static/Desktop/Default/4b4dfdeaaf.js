import $_$ from "./$_$.js";
$_$();
import {
  size_constants_sizeType as n,
  runtimeCore_esmBundler_defineComponent as t,
  theme_constants_themeType as o,
  runtimeCore_esmBundler_resolveComponent as s,
  runtimeCore_esmBundler_createBlock as m,
  runtimeCore_esmBundler_openBlock as _,
  runtimeCore_esmBundler_withCtx as a,
  runtimeCore_esmBundler_createTextVNode as d,
  shared_esmBundler_toDisplayString as p,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as u } from "./entry-50afb6f36c.js";
const i = { VAR: "var" },
  c = n.xs,
  l = t({
    name: "GameCardVarEvent",
    props: { roundedTop: { type: Boolean, default: !0 } },
    setup() {
      $_$();
      return {
        themeType: o,
        GAME_CARD_VAR_EVENT_SIZE: c,
        GameSpecialEvents: i,
      };
    },
  });
function C(e, T, E, B, f, h) {
  $_$();
  const r = s("UiTag");
  return (
    _(),
    m(
      r,
      {
        size: e.GAME_CARD_VAR_EVENT_SIZE,
        theme: e.themeType.bad,
        roundedTop: e.roundedTop,
        class: "game-card-var-event",
      },
      { default: a(() => $_$() && [d(p(e.GameSpecialEvents.VAR), 1)]), _: 1 },
      8,
      ["size", "theme", "roundedTop"]
    )
  );
}
const A = u(l, [["render", C]]);
export { A as GameCardVarEvent };
