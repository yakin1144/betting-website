import {
  defineMultiImplementedFeature as e,
  Platforms as o,
} from "./entry-85993dc44c.js";
import { size_constants_sizeType as t } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const n = e("HeaderDesktopDoubleRowConfig", !0, [o.Desktop]),
  i = {
    eventLogoHasDivider: !1,
    eventLogoHasAdditionalGutter: !0,
    eventLogoSingleFlag: !1,
    eventLogoSize: t.m,
    doubleRowLogo: !1,
    isVisibleNavigationBannerInHeaderTop: !1,
    isBlackIconGameLogo: !1,
  },
  a = n.defineEntityImplementation(() => ({ config: i, style: {} })),
  r = Object.freeze(
    Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  n as Contract,
  i as DEFAULT_HEADER_DESKTOP_DOUBLE_ROW_CONFIG,
  r as HeaderDesktopDoubleRowConfig,
};
