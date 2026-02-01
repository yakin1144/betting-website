import {
  GAMES_SEARCH_CONFIG_TOP_EVENTS as e,
  GAMES_SEARCH_CONFIG_COMMON as t,
} from "./3e34d5417a.js";
import {
  defineMultiImplementedFeature as o,
  Platforms as n,
} from "./entry-50afb6f36c.js";
const r = o("GamesSearchConfigDesktop", !0, [n.Desktop]),
  a = r.defineEntityImplementation(() => ({ default: t, topEvents: e })),
  f = Object.freeze(
    Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { r as Contract, f as GameSearchConfig };
