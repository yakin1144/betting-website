//accept-language-parser@1.5.0
import "./__shared_chunk_LNU73JEK.js";
var u = {},
  p = {
    get exports() {
      return u;
    },
    set exports(t) {
      u = t;
    },
  },
  b = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g,
  C = function (t) {
    return typeof t == "string";
  };
function c(t) {
  var n = (t || "").match(b);
  return n
    .map(function (e) {
      if (e) {
        var r = e.split(";"),
          s = r[0].split("-"),
          o = s.length === 3;
        return {
          code: s[0],
          script: o ? s[1] : null,
          region: o ? s[2] : s[1],
          quality: r[1] ? parseFloat(r[1].split("=")[1]) : 1,
        };
      }
    })
    .filter(function (e) {
      return e;
    })
    .sort(function (e, r) {
      return r.quality - e.quality;
    });
}
function k(t, n, e) {
  if (((e = e || {}), !t || !t.length || !n)) return null;
  C(n) && (n = c(n));
  for (
    var r = t.map(function (y) {
        var f = y.split("-"),
          a = f.length === 3;
        return { code: f[0], script: a ? f[1] : null, region: a ? f[2] : f[1] };
      }),
      s = 0;
    s < n.length;
    s++
  )
    for (
      var o = n[s],
        x = o.code.toLowerCase(),
        l = o.region ? o.region.toLowerCase() : o.region,
        v = o.script ? o.script.toLowerCase() : o.script,
        i = 0;
      i < r.length;
      i++
    ) {
      var d = r[i].code.toLowerCase(),
        h = r[i].script ? r[i].script.toLowerCase() : r[i].script,
        w = r[i].region ? r[i].region.toLowerCase() : r[i].region;
      if (x === d && (e.loose || !v || v === h) && (e.loose || !l || l === w))
        return t[i];
    }
  return null;
}
p.exports.parse = c;
p.exports.pick = k;
var m, q;
Object.isExtensible(p.exports) &&
  Object.keys(p.exports).length === 2 &&
  ((m = p.exports.parse), (q = p.exports.pick));
var _ = p.exports;
export { m as parse, q as pick };
