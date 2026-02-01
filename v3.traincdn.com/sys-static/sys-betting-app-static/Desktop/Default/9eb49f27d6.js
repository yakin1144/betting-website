import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./652c96f11f.js",
      "./entry-50afb6f36c.js",
      "./fd60a5df5f.css",
      "./aa10bc0cb2.js",
      "./8e8ee6fa7c.css",
    ])
) => i.map((i) => d[i]);
import {
  iconName as _,
  createModal_createModal_2 as t,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { __vitePreload as e } from "./entry-50afb6f36c.js";
const n = [0, 1, 2, 3, 4, 5, 6],
  p = (o) => n.includes(o),
  m = {
    0: "betting_tab_type_matches",
    1: "betting_tab_type_upcoming_events",
    2: "betting_tab_type_time_1",
    3: "betting_tab_type_time_2",
    4: "betting_tab_type_event",
    5: "betting_tab_type_teams",
    6: "betting_tab_type_recommended",
  },
  T = {
    0: "betting_tab_type_matches_home_tooltip",
    1: "betting_tab_type_upcoming_events_tooltip",
    2: "betting_tab_type_time_1_tooltip",
    3: "betting_tab_type_time_2_tooltip",
    4: "betting_tab_type_event_tooltip",
    6: "betting_tab_type_recommended_tooltip",
  },
  b = {
    0: _.CROWN,
    1: _.CIRCLE_CALENDAR_DAYS,
    2: _.COURT_SPORT_LEFT,
    3: _.COURT_SPORT_RIGHT,
    4: _.BLOCKED,
    5: _.BLOCKED,
    6: _.THUMBS_UP,
  },
  A = () =>
    $_$() &&
    t({
      name: "COUPON_MODAL_SAVE",
      component: () =>
        e(
          () => import("./652c96f11f.js"),
          __vite__mapDeps([0, 1, 2]),
          import.meta.url
        ),
    }),
  E = () =>
    $_$() &&
    t({
      name: "COUPON_MODAL_LOAD",
      component: () =>
        e(
          () => import("./aa10bc0cb2.js"),
          __vite__mapDeps([3, 1, 4]),
          import.meta.url
        ),
    });
export {
  n as CENTRAL_TAB_TYPES,
  p as CENTRAL_TAB_TYPE_VALIDATOR,
  b as ICONS_KEY_BY_CENTRAL_TAB_TYPE_MAP,
  m as LANG_KEY_BY_CENTRAL_TAB_TYPE_MAP,
  T as TOOLTIP_LANG_KEY_BY_CENTRAL_TAB_TYPE_MAP,
  E as createCouponLoadModal,
  A as createCouponSaveModal,
};
