import $_$ from "./$_$.js";
$_$();
import {
  theme_constants_themeType as e,
  ColorType as r,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedFeature as a,
  Platforms as o,
} from "./entry-c0d89b7160.js";
const t = a("RegistrationColorScheme", !0, [o.Desktop, o.Mobile]),
  i = t.defineEntityImplementation(
    () =>
      $_$() && {
        UiButton: e.primary,
        UiTabsWidget: e.gray,
        UiTabsModal: e.gray,
        UiModal: e.gray100,
        UiModalImage: e.default,
        UiModalTitle: r.clrStrong,
        UIWidgetContainer: e.gray30,
      }
  ),
  m = Object.freeze(
    Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  n = t.defineEntityImplementation(
    () =>
      $_$() && {
        UiButton: e.gray,
        UiTabsWidget: e.primary5,
        UiTabsModal: e.gray,
        UIWidgetContainer: e.gray_70,
      }
  ),
  y = Object.freeze(
    Object.defineProperty({ __proto__: null, default: n }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  l = t.defineEntityImplementation(
    () =>
      $_$() && {
        UiButton: e.primary,
        UiTabsWidget: e.gray,
        UiTabsModal: e.gray,
        UiModal: e.primary_20,
        UiModalImage: e.gray_100,
        UiModalTitle: r.clr,
      }
  ),
  u = Object.freeze(
    Object.defineProperty({ __proto__: null, default: l }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  g = t.defineEntityImplementation(
    () =>
      $_$() && {
        UiButton: e.gray_40,
        UiTabsWidget: e.gray,
        UiTabsModal: e.gray,
      }
  ),
  _ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: g }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function c() {
  throw new Error("You can't use sync loaders on client");
}
const S = Object.freeze(
  Object.defineProperty({ __proto__: null, default: c }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  S as loadRegistrationColorSchemeSync,
  m as registrationColorScheme,
  y as registrationColorScheme$1,
  u as registrationColorScheme$2,
  _ as registrationColorScheme$3,
};
