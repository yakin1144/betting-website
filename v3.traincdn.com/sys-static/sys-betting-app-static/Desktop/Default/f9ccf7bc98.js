import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable_2 as u,
  useGlobalStore as i,
  runtimeCore_esmBundler_computed as l,
  reactivity_esmBundler_ref as m,
  runtimeCore_esmBundler_watch as p,
  reactivity_esmBundler_unref as _,
  execAsync as f,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useStartIntervalUpdate as S } from "./10dcfb9c91.js";
import { useMediaStore as k } from "./entry-50afb6f36c.js";
const v = 6e4 * 10,
  C = u(() => {
    $_$();
    const a = k(),
      n = i(),
      s = l(() => n.getUserId),
      e = m(!1),
      d = () => a.mediaLoadUserVideoToken(),
      { forceUpdateData: t } = S({
        interval: v,
        onUpdateData: d,
        onCancelIntervalRequest: async () => {},
      }),
      c = async () => {
        $_$();
        let o, r;
        _(e) || ((e.value = !0), ([o, r] = f(() => t())), await o, r());
      };
    return p(s, t), { updateTokenOnMounted: c };
  });
export { C as useMediaTokenUpdater };
