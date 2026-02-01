import $_$ from "./$_$.js";
$_$();
import { execAsync as u } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { DOMAIN_SW_SCRIPT_SCOPE as d } from "./entry-85993dc44c.js";
var i,
  g = new Uint8Array(16);
function l() {
  if (
    !i &&
    ((i =
      (typeof crypto != "undefined" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto != "undefined" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !i)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return i(g);
}
const p =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function m(e) {
  return typeof e == "string" && p.test(e);
}
var n = [];
for (var c = 0; c < 256; ++c) n.push((c + 256).toString(16).substr(1));
function v(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = (
      n[e[t + 0]] +
      n[e[t + 1]] +
      n[e[t + 2]] +
      n[e[t + 3]] +
      "-" +
      n[e[t + 4]] +
      n[e[t + 5]] +
      "-" +
      n[e[t + 6]] +
      n[e[t + 7]] +
      "-" +
      n[e[t + 8]] +
      n[e[t + 9]] +
      "-" +
      n[e[t + 10]] +
      n[e[t + 11]] +
      n[e[t + 12]] +
      n[e[t + 13]] +
      n[e[t + 14]] +
      n[e[t + 15]]
    ).toLowerCase();
  if (!m(r)) throw TypeError("Stringified UUID is invalid");
  return r;
}
function y(e, t, r) {
  e = e || {};
  var o = e.random || (e.rng || l)();
  return (o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), v(o);
}
const _ = () => y(),
  h = (e) => !1,
  w = (e) => {
    e.set("che_g", _(), {
      expires: new Date(Date.now() + 864e5 * 30),
      path: "/",
    });
  },
  f = (e, t) => {
    const r = new MessageChannel();
    (r.port1.onmessage = async (o) => {
      var s;
      const { params: a } = o.data;
      a &&
        e.set(
          "che_i",
          String(a.index - Number((s = e.get("che_r")) != null ? s : 0) + 1),
          { expires: new Date(Date.now() + 864e5 * 30), path: "/" }
        );
    }),
      t.postMessage({}, [r.port2]);
  },
  x = async (e) => {
    $_$();
    let t, r;
    const o =
        (([t, r] = u(() => navigator.serviceWorker.getRegistration(d))),
        (t = await t),
        r(),
        t),
      s = o == null ? void 0 : o.active;
    s
      ? f(e, s)
      : navigator.serviceWorker.addEventListener("controllerchange", () => {
          const a = navigator.serviceWorker.controller;
          a && f(e, a);
        });
  },
  C = async (e) => {
    $_$();
    let t, r;
    e.get("che_g") || w(e),
      !h(e.get("force_redirect_off")) &&
        (([t, r] = u(() => x(e))), await t, r());
  };
export { C as initDomainsChecker };
