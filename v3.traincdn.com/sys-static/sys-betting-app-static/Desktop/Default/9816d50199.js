import { defineProvider as e } from "./entry-50afb6f36c.js";
import { SPORTS_MENU_APP_CONFIG_COMMON as p } from "./dd584157d6.js";
const { provide: i, inject: f } = e(
  ({ sportsMenuAppConfig: o, sportsMenuAppStyles: r }) => ({
    sportsMenuAppConfig: o,
    sportsMenuAppStyles: r,
  }),
  { sportsMenuAppConfig: p }
);
export { i as createSportsMenuAppConfig, f as useSportsMenuAppConfig };
