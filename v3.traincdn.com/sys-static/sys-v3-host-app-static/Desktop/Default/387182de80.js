import $_$ from "./$_$.js";
$_$();
import {
  defineMultiImplementedFeature as t,
  Platforms as r,
} from "./entry-85993dc44c.js";
import { theme_constants_themeType as e } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const o = t("AppSettingsToolbarConfigDesktop", !0, [r.Desktop]),
  i = o.defineEntityImplementation(
    () =>
      $_$() && {
        config: {
          uiDropdownToolbarTheme: e.primary_20,
          uiSearchTheme: e.primary,
          uiSelectOptionsTheme: e.primary_20,
          uiOptionTheme: e.primary_20,
          uiSelectContentTheme: e.primary_20,
          uiSelectContentSrollbarTheme: e.default,
          uiMessageBlockTheme: e.primary_20,
          skeletonTheme: e.primary_20,
          uiSelectionRadioTheme: e.gray30,
          uiInputSelectTheme: e.primary,
          uiMultiSelectTheme: e.primary_20,
          isLanguageBefore: !1,
        },
        style: {
          "--settings-toolbar-is-selected-border-left-color":
            "var(--primary-15-bg)",
        },
      }
  ),
  n = Object.freeze(
    Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { n as AppSettingsToolbarDesktopConfig, o as Contract };
