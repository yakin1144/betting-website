import $_$ from "./$_$.js";
$_$();
import {
  size_constants_sizeType as e,
  theme_constants_themeType as t,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedFeature as o,
  Platforms as n,
} from "./entry-c0d89b7160.js";
const i = o("AuthDropdownTriggerConfigDesktop", !0, [n.Desktop]),
  r = i.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          uiButtonTheme: t.primary5,
          uiButtonUppercase: !1,
          uiButtonSize: e.s,
          uiCaptionSize: e.m,
        },
      }
  ),
  u = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { u as AuthDropdownTriggerConfigDesktop, i as Contract };
