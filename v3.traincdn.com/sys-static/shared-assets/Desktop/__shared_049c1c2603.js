import {
  runtimeCore_esmBundler_withAsyncContext as r,
  runtimeCore_esmBundler_getCurrentInstance as o,
} from "./__shared_base-app_0c5f9cda0c.js";
function s(t) {
  return r(() => {
    var e;
    const n = (e = o()) == null ? void 0 : e.appContext.app.$nuxt;
    return n ? n.runWithContext(t) : t();
  });
}
export { s as withAsyncContext };
