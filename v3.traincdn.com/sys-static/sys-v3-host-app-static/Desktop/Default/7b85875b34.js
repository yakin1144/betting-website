import { theme_constants_themeType as e } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  Contract as t,
  DEFAULT_FOOTER_DESKTOP_CONFIG as o,
} from "./9bc9fed79f.js";
import "./entry-85993dc44c.js";
const s = {},
  i = {
    ...o,
    isShowLegal: !0,
    isShowSocials: !0,
    licensesTheme: e.primary_20,
    isShowMobileAppsInColumn: !1,
  },
  O = t.defineEntityImplementation(() => ({ config: i, style: s }));
export { O as default };
