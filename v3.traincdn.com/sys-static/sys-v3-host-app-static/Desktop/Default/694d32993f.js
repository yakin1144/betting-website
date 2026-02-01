import { Contract as o } from "./387182de80.js";
import { theme_constants_themeType as e } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const t = {
    uiDropdownToolbarTheme: e.gray100,
    uiSearchTheme: e.gray60,
    uiSelectOptionsTheme: e.gray100,
    uiOptionTheme: e.gray100,
    uiSelectContentTheme: e.gray100,
    uiSelectContentSrollbarTheme: e.gray,
    uiMessageBlockTheme: e.gray100,
    skeletonTheme: e.gray100,
    uiSelectionRadioTheme: e.gray60,
    uiInputSelectTheme: e.default,
    uiMultiSelectTheme: e.gray,
    isLanguageBefore: !0,
  },
  n = o.defineEntityImplementation(() => ({ config: t })),
  l = Object.freeze(
    Object.defineProperty({ __proto__: null, default: n }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function r() {
  throw new Error("You can't use sync loaders on client");
}
const c = Object.freeze(
  Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  l as AppSettingsToolbarDesktopConfig,
  c as loadAppSettingsToolbarConfigDesktopSync,
};
