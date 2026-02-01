import { defineProvider as c } from "./entry-50afb6f36c.js";
import { GAMES_SEARCH_CONFIG_COMMON as m } from "./3e34d5417a.js";
const { provide: E, inject: M } = c((e) => e, m);
var u = Object.defineProperty,
  f = (e, t, o) =>
    t in e
      ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o),
  i = (e, t, o) => f(e, typeof t != "symbol" ? t + "" : t, o);
class O {
  constructor({
    UiOption: t = void 0,
    UiSelectOptions: o = void 0,
    UiSelectContent: r = void 0,
    UiSelectValue: s = void 0,
    UiSportsEvent: n = void 0,
    UiSportsEventControl: h = void 0,
    UiScrollbar: a = void 0,
    UiSportsMenuHead: d = void 0,
    UiSearch: U = void 0,
    UiDropdown: l = void 0,
    UiSkeleton: p = void 0,
    UiGamesLoader: S = void 0,
    UiEmptyMessage: v = void 0,
  } = {}) {
    i(this, "UiOption"),
      i(this, "UiSelectOptions"),
      i(this, "UiSelectContent"),
      i(this, "UiSelectValue"),
      i(this, "UiSportsEvent"),
      i(this, "UiSportsEventControl"),
      i(this, "UiScrollbar"),
      i(this, "UiSportsMenuHead"),
      i(this, "UiSearch"),
      i(this, "UiDropdown"),
      i(this, "UiSkeleton"),
      i(this, "UiGamesLoader"),
      i(this, "UiEmptyMessage"),
      (this.UiOption = t),
      (this.UiSelectOptions = o),
      (this.UiSelectContent = r),
      (this.UiSelectValue = s),
      (this.UiSportsEvent = n),
      (this.UiSportsEventControl = h),
      (this.UiScrollbar = a),
      (this.UiSportsMenuHead = d),
      (this.UiSearch = U),
      (this.UiDropdown = l),
      (this.UiSkeleton = p),
      (this.UiGamesLoader = S),
      (this.UiEmptyMessage = v);
  }
}
export {
  O as NavigationSportMenuColorTheme,
  E as createGameSearchConfig,
  M as useGameSearchConfig,
};
