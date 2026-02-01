//fast-deep-equal@3.1.3
import "./__shared_chunk_LNU73JEK.js";
var s = {},
  l = {
    get exports() {
      return s;
    },
    set exports(f) {
      s = f;
    },
  };
l.exports = function f(r, e) {
  if (r === e) return !0;
  if (r && e && typeof r == "object" && typeof e == "object") {
    if (r.constructor !== e.constructor) return !1;
    var o, t, u;
    if (Array.isArray(r)) {
      if (((o = r.length), o != e.length)) return !1;
      for (t = o; t-- !== 0; ) if (!f(r[t], e[t])) return !1;
      return !0;
    }
    if (r.constructor === RegExp)
      return r.source === e.source && r.flags === e.flags;
    if (r.valueOf !== Object.prototype.valueOf)
      return r.valueOf() === e.valueOf();
    if (r.toString !== Object.prototype.toString)
      return r.toString() === e.toString();
    if (((u = Object.keys(r)), (o = u.length), o !== Object.keys(e).length))
      return !1;
    for (t = o; t-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, u[t])) return !1;
    for (t = o; t-- !== 0; ) {
      var n = u[t];
      if (!f(r[n], e[n])) return !1;
    }
    return !0;
  }
  return r !== r && e !== e;
};
var p = l.exports;
var d = p;
export { d as default };
