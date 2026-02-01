import $_$ from "./$_$.js";
$_$();
import { Contract as e } from "./9c0cba3598.js";
import {
  defaultSizeType as n,
  theme_constants_themeType as o,
  WeightType as r,
  size_constants_sizeType as i,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const t = {
    uiButtonTheme: o.primary,
    uiButtonUppercase: !0,
    uiButtonSize: n,
    uiCaptionSize: n,
    hasAuthDropdownTriggerOutline: !1,
  },
  u = e.defineEntityImplementation(() => ({ config: t })),
  d = Object.freeze(
    Object.defineProperty({ __proto__: null, default: u }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  p = e.defineEntityImplementation(() => ({
    config: { ...t, uiButtonUppercase: !1 },
  })),
  _ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: p }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  g = e.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          ...t,
          uiButtonTheme: o.accentSecondary,
          uiButtonUppercase: !1,
        },
      }
  ),
  D = Object.freeze(
    Object.defineProperty({ __proto__: null, default: g }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  a = e.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          ...t,
          uiCaptionSize: i.l,
          uiCaptionWeight: r.BOLD,
          uiButtonUppercase: !1,
        },
      }
  ),
  T = Object.freeze(
    Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  l = e.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          ...t,
          uiButtonTheme: o.primary_40,
          hasAuthDropdownTriggerOutline: !0,
        },
      }
  ),
  y = Object.freeze(
    Object.defineProperty({ __proto__: null, default: l }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function f() {
  throw new Error("You can't use sync loaders on client");
}
const m = Object.freeze(
  Object.defineProperty({ __proto__: null, default: f }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  d as AuthDropdownTriggerConfigDesktop,
  _ as AuthDropdownTriggerConfigDesktop$1,
  D as AuthDropdownTriggerConfigDesktop$2,
  T as AuthDropdownTriggerConfigDesktop$3,
  y as AuthDropdownTriggerConfigDesktop$4,
  m as loadAuthDropdownTriggerConfigDesktopSync,
};
