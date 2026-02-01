import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as _,
  iconName as s,
  index_useT as m,
  runtimeCore_esmBundler_computed as o,
  runtimeCore_esmBundler_resolveComponent as p,
  runtimeCore_esmBundler_resolveDirective as C,
  runtimeCore_esmBundler_withDirectives as f,
  runtimeCore_esmBundler_createElementBlock as c,
  runtimeCore_esmBundler_openBlock as d,
  shared_esmBundler_normalizeClass as B,
  runtimeCore_esmBundler_createVNode as T,
  runtimeCore_esmBundler_createCommentVNode as y,
  shared_esmBundler_toDisplayString as g,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as v } from "./entry-50afb6f36c.js";
const i = { red: s.FOOTBALL_RED_CARDS, yellow: s.FOOTBALL_YELLOW_CARDS },
  G = _({
    name: "UiFoulGameCard",
    props: {
      cardType: { type: String, validator: (e) => i[e], required: !0 },
      count: { type: Number, required: !0 },
    },
    setup(e) {
      $_$();
      const r = m(),
        t = o(() => i[e.cardType]),
        a = o(() => ({ [`foul-game-card--type-${e.cardType}`]: !!e.cardType })),
        n = o(() =>
          e.cardType === "red"
            ? r("game_foul_statistics_red_cards")
            : r("game_foul_statistics_yellow_cards")
        );
      return { cardIco: t, foulGameCardClasses: a, foulGameCardTipText: n };
    },
  }),
  h = ["aria-label"],
  D = { key: 0, class: "foul-game-card__count" };
function L(e, r, t, a, n, I) {
  $_$();
  const l = p("UiIco"),
    u = C("tooltip");
  return f(
    (d(),
    c(
      "span",
      {
        class: B([e.foulGameCardClasses, "foul-game-card"]),
        "aria-label": e.foulGameCardTipText,
      },
      [
        T(l, { ico: e.cardIco, class: "foul-game-card__ico" }, null, 8, [
          "ico",
        ]),
        e.count > 1 ? (d(), c("span", D, g(e.count), 1)) : y("", !0),
      ],
      10,
      h
    )),
    [[u, e.foulGameCardTipText]]
  );
}
const A = v(G, [
  ["render", L],
  ["__scopeId", "data-v-0f6e2e09"],
]);
export { A as UiFoulGameCard };
