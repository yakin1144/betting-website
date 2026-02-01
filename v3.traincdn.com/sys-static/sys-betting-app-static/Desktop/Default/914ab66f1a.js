import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./b1c4fc1551.js",
      "./6550e9bfb1.js",
      "./9de70556bb.js",
      "./entry-50afb6f36c.js",
      "./7fd3152d11.js",
      "./1af6a171a2.js",
      "./c7ea6bc74a.js",
      "./e063df8dd1.js",
      "./9e4e245c05.js",
      "./58a21526ee.js",
      "./ff2996a70d.js",
      "./858ab97c10.js",
      "./a83a3b39b8.js",
      "./3027c05c5c.js",
      "./661eb77899.js",
    ])
) => $_$() && i.map((i) => d[i]);
import {
  createSharedComposable_createSharedComposable_2 as v,
  index_useHttpModule as D,
  reactivity_esmBundler_ref as o,
  reactivity_esmBundler_unref as f,
  execAsync as A,
  createModal_createModal_2 as m,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { __vitePreload as i } from "./entry-50afb6f36c.js";
const B = v(() => {
    $_$();
    const n = D(),
      t = o(!1),
      s = o({ sports: [], champs: [], teams: [] }),
      r = o(!1);
    let e;
    return {
      isLoading: t,
      params: s,
      isTriedLoad: r,
      loadPromise: e,
      loadParams: async ({ forceUpdate: c = !1 } = {}) => {
        $_$();
        let a, l;
        if (f(r) && !c) return;
        if (e) return e;
        t.value = !0;
        const _ = n("/web-api/api/v3/users/popular-events/params").execute();
        e = _;
        const {
          sports: u,
          leagues: p,
          teams: d,
        } = (([a, l] = A(() => _)), (a = await a), l(), a);
        (s.value = { sports: u, champs: p, teams: d }),
          (e = void 0),
          (t.value = !1),
          (r.value = !0);
      },
    };
  }),
  L = () =>
    $_$() &&
    m({
      name: "DASHBOARD_FILTER_BY_DATE_MODAL",
      component: () =>
        i(
          () => import("./b1c4fc1551.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
          import.meta.url
        ),
    }),
  T = () =>
    $_$() &&
    m({
      name: "DASHBOARD_FILTER_BY_TIME_MODAL",
      component: () =>
        i(
          () => import("./661eb77899.js"),
          __vite__mapDeps([14, 12, 3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 13]),
          import.meta.url
        ),
    });
export {
  L as createDashboardFilterByDateModal,
  T as createDashboardFilterByTimeModal,
  B as usePopularEventParamsStore,
};
