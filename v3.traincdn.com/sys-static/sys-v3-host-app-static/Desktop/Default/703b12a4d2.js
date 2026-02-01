import {
  defineMultiImplementedFeature as e,
  Platforms as t,
} from "./entry-85993dc44c.js";
import { theme_constants_themeType as o } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const r = e("HeaderTopConfig", !0, [t.Desktop]),
  i = {
    isOldUserControl: !1,
    blocks: ["HeaderEvents"],
    isHeaderSocialRounded: !1,
    headerSocialTheme: o.default,
    headerSocialPositionRight: !1,
    widthLogoThirdPartyProduct: "60px",
    heightLogoThirdPartyProduct: "28px",
    sizeLogoThirdPartyProduct: "48px",
    showUserBonus: !0,
    headerTopControlsOutside: !0,
  },
  a = { "--header-navigation-margin-left": "0" },
  n = r.defineEntityImplementation(() => ({ config: i, style: a })),
  l = Object.freeze(
    Object.defineProperty({ __proto__: null, default: n }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  r as Contract,
  i as DEFAULT_HEADER_TOP_CONFIG,
  a as DEFAULT_HEADER_TOP_STYLE,
  l as HeaderTopConfig,
};
