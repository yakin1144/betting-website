//localforage@1.10.0
import { c as ae } from "./__shared_chunk_LNU73JEK.js";
var Se =
    (typeof window != "undefined" && window) ||
    (typeof self != "undefined" && self) ||
    (typeof global != "undefined" && global) ||
    (typeof globalThis != "undefined" && globalThis) ||
    {},
  ne = [],
  $ = new Proxy(Se, {
    get: function (U, O) {
      var G = Reflect.get(U, O);
      return ne.indexOf(O) !== -1
        ? G
        : typeof G == "function" && !G.prototype
        ? G.bind(Se)
        : G;
    },
    set: function (U, O, G) {
      return ne.push(O), Reflect.set(U, O, G);
    },
  }),
  Qe = function (O) {
    return Se.Function(O).bind($);
  };
Qe.prototype = Function.prototype;
(function (U, O, G, q, Ie, He, Hr) {
  (function (fe) {
    if (typeof He == "object" && typeof Ie != "undefined") Ie.exports = fe();
    else if (typeof define == "function" && define.amd) define([], fe);
    else {
      var k;
      typeof U != "undefined"
        ? (k = U)
        : typeof O != "undefined"
        ? (k = O)
        : typeof q != "undefined"
        ? (k = q)
        : (k = this),
        (k.localforage = fe());
    }
  })(function () {
    var fe, k, Xr;
    return (function H(Y, X, S) {
      function C(D, z) {
        if (!X[D]) {
          if (!Y[D]) {
            var d = typeof ae == "function" && ae;
            if (!z && d) return d(D, !0);
            if (b) return b(D, !0);
            var h = new Error("Cannot find module '" + D + "'");
            throw ((h.code = "MODULE_NOT_FOUND"), h);
          }
          var w = (X[D] = { exports: {} });
          Y[D][0].call(
            w.exports,
            function (A) {
              var W = Y[D][1][A];
              return C(W || A);
            },
            w,
            w.exports,
            H,
            Y,
            X,
            S
          );
        }
        return X[D].exports;
      }
      for (var b = typeof ae == "function" && ae, B = 0; B < S.length; B++)
        C(S[B]);
      return C;
    })(
      {
        1: [
          function (H, Y, X) {
            (function (S) {
              "use strict";
              var C = S.MutationObserver || S.WebKitMutationObserver,
                b;
              if (C) {
                var B = 0,
                  D = new C(A),
                  z = S.document.createTextNode("");
                D.observe(z, { characterData: !0 }),
                  (b = function () {
                    z.data = B = ++B % 2;
                  });
              } else if (
                !S.setImmediate &&
                typeof S.MessageChannel != "undefined"
              ) {
                var d = new S.MessageChannel();
                (d.port1.onmessage = A),
                  (b = function () {
                    d.port2.postMessage(0);
                  });
              } else
                "document" in S &&
                "onreadystatechange" in S.document.createElement("script")
                  ? (b = function () {
                      var T = S.document.createElement("script");
                      (T.onreadystatechange = function () {
                        A(),
                          (T.onreadystatechange = null),
                          T.parentNode.removeChild(T),
                          (T = null);
                      }),
                        S.document.documentElement.appendChild(T);
                    })
                  : (b = function () {
                      setTimeout(A, 0);
                    });
              var h,
                w = [];
              function A() {
                h = !0;
                for (var T, V, N = w.length; N; ) {
                  for (V = w, w = [], T = -1; ++T < N; ) V[T]();
                  N = w.length;
                }
                h = !1;
              }
              Y.exports = W;
              function W(T) {
                w.push(T) === 1 && !h && b();
              }
            }.call(
              this,
              typeof O != "undefined"
                ? O
                : typeof q != "undefined"
                ? q
                : typeof U != "undefined"
                ? U
                : {}
            ));
          },
          {},
        ],
        2: [
          function (H, Y, X) {
            "use strict";
            var S = H(1);
            function C() {}
            var b = {},
              B = ["REJECTED"],
              D = ["FULFILLED"],
              z = ["PENDING"];
            Y.exports = d;
            function d(l) {
              if (typeof l != "function")
                throw new TypeError("resolver must be a function");
              (this.state = z),
                (this.queue = []),
                (this.outcome = void 0),
                l !== C && W(this, l);
            }
            (d.prototype.catch = function (l) {
              return this.then(null, l);
            }),
              (d.prototype.then = function (l, p) {
                if (
                  (typeof l != "function" && this.state === D) ||
                  (typeof p != "function" && this.state === B)
                )
                  return this;
                var m = new this.constructor(C);
                if (this.state !== z) {
                  var E = this.state === D ? l : p;
                  w(m, E, this.outcome);
                } else this.queue.push(new h(m, l, p));
                return m;
              });
            function h(l, p, m) {
              (this.promise = l),
                typeof p == "function" &&
                  ((this.onFulfilled = p),
                  (this.callFulfilled = this.otherCallFulfilled)),
                typeof m == "function" &&
                  ((this.onRejected = m),
                  (this.callRejected = this.otherCallRejected));
            }
            (h.prototype.callFulfilled = function (l) {
              b.resolve(this.promise, l);
            }),
              (h.prototype.otherCallFulfilled = function (l) {
                w(this.promise, this.onFulfilled, l);
              }),
              (h.prototype.callRejected = function (l) {
                b.reject(this.promise, l);
              }),
              (h.prototype.otherCallRejected = function (l) {
                w(this.promise, this.onRejected, l);
              });
            function w(l, p, m) {
              S(function () {
                var E;
                try {
                  E = p(m);
                } catch (x) {
                  return b.reject(l, x);
                }
                E === l
                  ? b.reject(
                      l,
                      new TypeError("Cannot resolve promise with itself")
                    )
                  : b.resolve(l, E);
              });
            }
            (b.resolve = function (l, p) {
              var m = T(A, p);
              if (m.status === "error") return b.reject(l, m.value);
              var E = m.value;
              if (E) W(l, E);
              else {
                (l.state = D), (l.outcome = p);
                for (var x = -1, L = l.queue.length; ++x < L; )
                  l.queue[x].callFulfilled(p);
              }
              return l;
            }),
              (b.reject = function (l, p) {
                (l.state = B), (l.outcome = p);
                for (var m = -1, E = l.queue.length; ++m < E; )
                  l.queue[m].callRejected(p);
                return l;
              });
            function A(l) {
              var p = l && l.then;
              if (
                l &&
                (typeof l == "object" || typeof l == "function") &&
                typeof p == "function"
              )
                return function () {
                  p.apply(l, arguments);
                };
            }
            function W(l, p) {
              var m = !1;
              function E(F) {
                m || ((m = !0), b.reject(l, F));
              }
              function x(F) {
                m || ((m = !0), b.resolve(l, F));
              }
              function L() {
                p(x, E);
              }
              var P = T(L);
              P.status === "error" && E(P.value);
            }
            function T(l, p) {
              var m = {};
              try {
                (m.value = l(p)), (m.status = "success");
              } catch (E) {
                (m.status = "error"), (m.value = E);
              }
              return m;
            }
            d.resolve = V;
            function V(l) {
              return l instanceof this ? l : b.resolve(new this(C), l);
            }
            d.reject = N;
            function N(l) {
              var p = new this(C);
              return b.reject(p, l);
            }
            d.all = le;
            function le(l) {
              var p = this;
              if (Object.prototype.toString.call(l) !== "[object Array]")
                return this.reject(new TypeError("must be an array"));
              var m = l.length,
                E = !1;
              if (!m) return this.resolve([]);
              for (
                var x = new Array(m), L = 0, P = -1, F = new this(C);
                ++P < m;

              )
                K(l[P], P);
              return F;
              function K(te, ue) {
                p.resolve(te).then(de, function (ee) {
                  E || ((E = !0), b.reject(F, ee));
                });
                function de(ee) {
                  (x[ue] = ee), ++L === m && !E && ((E = !0), b.resolve(F, x));
                }
              }
            }
            d.race = j;
            function j(l) {
              var p = this;
              if (Object.prototype.toString.call(l) !== "[object Array]")
                return this.reject(new TypeError("must be an array"));
              var m = l.length,
                E = !1;
              if (!m) return this.resolve([]);
              for (var x = -1, L = new this(C); ++x < m; ) P(l[x]);
              return L;
              function P(F) {
                p.resolve(F).then(
                  function (K) {
                    E || ((E = !0), b.resolve(L, K));
                  },
                  function (K) {
                    E || ((E = !0), b.reject(L, K));
                  }
                );
              }
            }
          },
          { 1: 1 },
        ],
        3: [
          function (H, Y, X) {
            (function (S) {
              "use strict";
              typeof S.Promise != "function" && (S.Promise = H(2));
            }.call(
              this,
              typeof O != "undefined"
                ? O
                : typeof q != "undefined"
                ? q
                : typeof U != "undefined"
                ? U
                : {}
            ));
          },
          { 2: 2 },
        ],
        4: [
          function (H, Y, X) {
            "use strict";
            var S =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      typeof Symbol == "function" &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  };
            function C(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            }
            function b() {
              try {
                if (typeof indexedDB != "undefined") return indexedDB;
                if (typeof webkitIndexedDB != "undefined")
                  return webkitIndexedDB;
                if (typeof mozIndexedDB != "undefined") return mozIndexedDB;
                if (typeof OIndexedDB != "undefined") return OIndexedDB;
                if (typeof msIndexedDB != "undefined") return msIndexedDB;
              } catch (e) {
                return;
              }
            }
            var B = b();
            function D() {
              try {
                if (!B || !B.open) return !1;
                var e =
                    typeof openDatabase != "undefined" &&
                    /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                    !/Chrome/.test(navigator.userAgent) &&
                    !/BlackBerry/.test(navigator.platform),
                  n =
                    typeof fetch == "function" &&
                    fetch.toString().indexOf("[native code") !== -1;
                return (
                  (!e || n) &&
                  typeof indexedDB != "undefined" &&
                  typeof IDBKeyRange != "undefined"
                );
              } catch (r) {
                return !1;
              }
            }
            function z(e, n) {
              (e = e || []), (n = n || {});
              try {
                return new Blob(e, n);
              } catch (t) {
                if (t.name !== "TypeError") throw t;
                for (
                  var r =
                      typeof BlobBuilder != "undefined"
                        ? BlobBuilder
                        : typeof MSBlobBuilder != "undefined"
                        ? MSBlobBuilder
                        : typeof MozBlobBuilder != "undefined"
                        ? MozBlobBuilder
                        : WebKitBlobBuilder,
                    o = new r(),
                    i = 0;
                  i < e.length;
                  i += 1
                )
                  o.append(e[i]);
                return o.getBlob(n.type);
              }
            }
            typeof Promise == "undefined" && H(3);
            var d = Promise;
            function h(e, n) {
              n &&
                e.then(
                  function (r) {
                    n(null, r);
                  },
                  function (r) {
                    n(r);
                  }
                );
            }
            function w(e, n, r) {
              typeof n == "function" && e.then(n),
                typeof r == "function" && e.catch(r);
            }
            function A(e) {
              return (
                typeof e != "string" &&
                  (console.warn(e + " used as a key, but it is not a string."),
                  (e = String(e))),
                e
              );
            }
            function W() {
              if (
                arguments.length &&
                typeof arguments[arguments.length - 1] == "function"
              )
                return arguments[arguments.length - 1];
            }
            var T = "local-forage-detect-blob-support",
              V = void 0,
              N = {},
              le = Object.prototype.toString,
              j = "readonly",
              l = "readwrite";
            function p(e) {
              for (
                var n = e.length,
                  r = new ArrayBuffer(n),
                  o = new Uint8Array(r),
                  i = 0;
                i < n;
                i++
              )
                o[i] = e.charCodeAt(i);
              return r;
            }
            function m(e) {
              return new d(function (n) {
                var r = e.transaction(T, l),
                  o = z([""]);
                r.objectStore(T).put(o, "key"),
                  (r.onabort = function (i) {
                    i.preventDefault(), i.stopPropagation(), n(!1);
                  }),
                  (r.oncomplete = function () {
                    var i = navigator.userAgent.match(/Chrome\/(\d+)/),
                      t = navigator.userAgent.match(/Edge\//);
                    n(t || !i || parseInt(i[1], 10) >= 43);
                  });
              }).catch(function () {
                return !1;
              });
            }
            function E(e) {
              return typeof V == "boolean"
                ? d.resolve(V)
                : m(e).then(function (n) {
                    return (V = n), V;
                  });
            }
            function x(e) {
              var n = N[e.name],
                r = {};
              (r.promise = new d(function (o, i) {
                (r.resolve = o), (r.reject = i);
              })),
                n.deferredOperations.push(r),
                n.dbReady
                  ? (n.dbReady = n.dbReady.then(function () {
                      return r.promise;
                    }))
                  : (n.dbReady = r.promise);
            }
            function L(e) {
              var n = N[e.name],
                r = n.deferredOperations.pop();
              if (r) return r.resolve(), r.promise;
            }
            function P(e, n) {
              var r = N[e.name],
                o = r.deferredOperations.pop();
              if (o) return o.reject(n), o.promise;
            }
            function F(e, n) {
              return new d(function (r, o) {
                if (((N[e.name] = N[e.name] || Re()), e.db))
                  if (n) x(e), e.db.close();
                  else return r(e.db);
                var i = [e.name];
                n && i.push(e.version);
                var t = B.open.apply(B, i);
                n &&
                  (t.onupgradeneeded = function (a) {
                    var f = t.result;
                    try {
                      f.createObjectStore(e.storeName),
                        a.oldVersion <= 1 && f.createObjectStore(T);
                    } catch (u) {
                      if (u.name === "ConstraintError")
                        console.warn(
                          'The database "' +
                            e.name +
                            '" has been upgraded from version ' +
                            a.oldVersion +
                            " to version " +
                            a.newVersion +
                            ', but the storage "' +
                            e.storeName +
                            '" already exists.'
                        );
                      else throw u;
                    }
                  }),
                  (t.onerror = function (a) {
                    a.preventDefault(), o(t.error);
                  }),
                  (t.onsuccess = function () {
                    var a = t.result;
                    (a.onversionchange = function (f) {
                      f.target.close();
                    }),
                      r(a),
                      L(e);
                  });
              });
            }
            function K(e) {
              return F(e, !1);
            }
            function te(e) {
              return F(e, !0);
            }
            function ue(e, n) {
              if (!e.db) return !0;
              var r = !e.db.objectStoreNames.contains(e.storeName),
                o = e.version < e.db.version,
                i = e.version > e.db.version;
              if (
                (o &&
                  (e.version !== n &&
                    console.warn(
                      'The database "' +
                        e.name +
                        `" can't be downgraded from version ` +
                        e.db.version +
                        " to version " +
                        e.version +
                        "."
                    ),
                  (e.version = e.db.version)),
                i || r)
              ) {
                if (r) {
                  var t = e.db.version + 1;
                  t > e.version && (e.version = t);
                }
                return !0;
              }
              return !1;
            }
            function de(e) {
              return new d(function (n, r) {
                var o = new FileReader();
                (o.onerror = r),
                  (o.onloadend = function (i) {
                    var t = btoa(i.target.result || "");
                    n({
                      __local_forage_encoded_blob: !0,
                      data: t,
                      type: e.type,
                    });
                  }),
                  o.readAsBinaryString(e);
              });
            }
            function ee(e) {
              var n = p(atob(e.data));
              return z([n], { type: e.type });
            }
            function we(e) {
              return e && e.__local_forage_encoded_blob;
            }
            function Xe(e) {
              var n = this,
                r = n._initReady().then(function () {
                  var o = N[n._dbInfo.name];
                  if (o && o.dbReady) return o.dbReady;
                });
              return w(r, e, e), r;
            }
            function Je(e) {
              x(e);
              for (var n = N[e.name], r = n.forages, o = 0; o < r.length; o++) {
                var i = r[o];
                i._dbInfo.db && (i._dbInfo.db.close(), (i._dbInfo.db = null));
              }
              return (
                (e.db = null),
                K(e)
                  .then(function (t) {
                    return (e.db = t), ue(e) ? te(e) : t;
                  })
                  .then(function (t) {
                    e.db = n.db = t;
                    for (var a = 0; a < r.length; a++) r[a]._dbInfo.db = t;
                  })
                  .catch(function (t) {
                    throw (P(e, t), t);
                  })
              );
            }
            function Q(e, n, r, o) {
              o === void 0 && (o = 1);
              try {
                var i = e.db.transaction(e.storeName, n);
                r(null, i);
              } catch (t) {
                if (
                  o > 0 &&
                  (!e.db ||
                    t.name === "InvalidStateError" ||
                    t.name === "NotFoundError")
                )
                  return d
                    .resolve()
                    .then(function () {
                      if (
                        !e.db ||
                        (t.name === "NotFoundError" &&
                          !e.db.objectStoreNames.contains(e.storeName) &&
                          e.version <= e.db.version)
                      )
                        return e.db && (e.version = e.db.version + 1), te(e);
                    })
                    .then(function () {
                      return Je(e).then(function () {
                        Q(e, n, r, o - 1);
                      });
                    })
                    .catch(r);
                r(t);
              }
            }
            function Re() {
              return {
                forages: [],
                db: null,
                dbReady: null,
                deferredOperations: [],
              };
            }
            function Ze(e) {
              var n = this,
                r = { db: null };
              if (e) for (var o in e) r[o] = e[o];
              var i = N[r.name];
              i || ((i = Re()), (N[r.name] = i)),
                i.forages.push(n),
                n._initReady || ((n._initReady = n.ready), (n.ready = Xe));
              var t = [];
              function a() {
                return d.resolve();
              }
              for (var f = 0; f < i.forages.length; f++) {
                var u = i.forages[f];
                u !== n && t.push(u._initReady().catch(a));
              }
              var c = i.forages.slice(0);
              return d
                .all(t)
                .then(function () {
                  return (r.db = i.db), K(r);
                })
                .then(function (s) {
                  return (
                    (r.db = s), ue(r, n._defaultConfig.version) ? te(r) : s
                  );
                })
                .then(function (s) {
                  (r.db = i.db = s), (n._dbInfo = r);
                  for (var v = 0; v < c.length; v++) {
                    var y = c[v];
                    y !== n &&
                      ((y._dbInfo.db = r.db), (y._dbInfo.version = r.version));
                  }
                });
            }
            function je(e, n) {
              var r = this;
              e = A(e);
              var o = new d(function (i, t) {
                r.ready()
                  .then(function () {
                    Q(r._dbInfo, j, function (a, f) {
                      if (a) return t(a);
                      try {
                        var u = f.objectStore(r._dbInfo.storeName),
                          c = u.get(e);
                        (c.onsuccess = function () {
                          var s = c.result;
                          s === void 0 && (s = null),
                            we(s) && (s = ee(s)),
                            i(s);
                        }),
                          (c.onerror = function () {
                            t(c.error);
                          });
                      } catch (s) {
                        t(s);
                      }
                    });
                  })
                  .catch(t);
              });
              return h(o, n), o;
            }
            function qe(e, n) {
              var r = this,
                o = new d(function (i, t) {
                  r.ready()
                    .then(function () {
                      Q(r._dbInfo, j, function (a, f) {
                        if (a) return t(a);
                        try {
                          var u = f.objectStore(r._dbInfo.storeName),
                            c = u.openCursor(),
                            s = 1;
                          (c.onsuccess = function () {
                            var v = c.result;
                            if (v) {
                              var y = v.value;
                              we(y) && (y = ee(y));
                              var g = e(y, v.key, s++);
                              g !== void 0 ? i(g) : v.continue();
                            } else i();
                          }),
                            (c.onerror = function () {
                              t(c.error);
                            });
                        } catch (v) {
                          t(v);
                        }
                      });
                    })
                    .catch(t);
                });
              return h(o, n), o;
            }
            function ke(e, n, r) {
              var o = this;
              e = A(e);
              var i = new d(function (t, a) {
                var f;
                o.ready()
                  .then(function () {
                    return (
                      (f = o._dbInfo),
                      le.call(n) === "[object Blob]"
                        ? E(f.db).then(function (u) {
                            return u ? n : de(n);
                          })
                        : n
                    );
                  })
                  .then(function (u) {
                    Q(o._dbInfo, l, function (c, s) {
                      if (c) return a(c);
                      try {
                        var v = s.objectStore(o._dbInfo.storeName);
                        u === null && (u = void 0);
                        var y = v.put(u, e);
                        (s.oncomplete = function () {
                          u === void 0 && (u = null), t(u);
                        }),
                          (s.onabort = s.onerror =
                            function () {
                              var g = y.error ? y.error : y.transaction.error;
                              a(g);
                            });
                      } catch (g) {
                        a(g);
                      }
                    });
                  })
                  .catch(a);
              });
              return h(i, r), i;
            }
            function er(e, n) {
              var r = this;
              e = A(e);
              var o = new d(function (i, t) {
                r.ready()
                  .then(function () {
                    Q(r._dbInfo, l, function (a, f) {
                      if (a) return t(a);
                      try {
                        var u = f.objectStore(r._dbInfo.storeName),
                          c = u.delete(e);
                        (f.oncomplete = function () {
                          i();
                        }),
                          (f.onerror = function () {
                            t(c.error);
                          }),
                          (f.onabort = function () {
                            var s = c.error ? c.error : c.transaction.error;
                            t(s);
                          });
                      } catch (s) {
                        t(s);
                      }
                    });
                  })
                  .catch(t);
              });
              return h(o, n), o;
            }
            function rr(e) {
              var n = this,
                r = new d(function (o, i) {
                  n.ready()
                    .then(function () {
                      Q(n._dbInfo, l, function (t, a) {
                        if (t) return i(t);
                        try {
                          var f = a.objectStore(n._dbInfo.storeName),
                            u = f.clear();
                          (a.oncomplete = function () {
                            o();
                          }),
                            (a.onabort = a.onerror =
                              function () {
                                var c = u.error ? u.error : u.transaction.error;
                                i(c);
                              });
                        } catch (c) {
                          i(c);
                        }
                      });
                    })
                    .catch(i);
                });
              return h(r, e), r;
            }
            function nr(e) {
              var n = this,
                r = new d(function (o, i) {
                  n.ready()
                    .then(function () {
                      Q(n._dbInfo, j, function (t, a) {
                        if (t) return i(t);
                        try {
                          var f = a.objectStore(n._dbInfo.storeName),
                            u = f.count();
                          (u.onsuccess = function () {
                            o(u.result);
                          }),
                            (u.onerror = function () {
                              i(u.error);
                            });
                        } catch (c) {
                          i(c);
                        }
                      });
                    })
                    .catch(i);
                });
              return h(r, e), r;
            }
            function tr(e, n) {
              var r = this,
                o = new d(function (i, t) {
                  if (e < 0) {
                    i(null);
                    return;
                  }
                  r.ready()
                    .then(function () {
                      Q(r._dbInfo, j, function (a, f) {
                        if (a) return t(a);
                        try {
                          var u = f.objectStore(r._dbInfo.storeName),
                            c = !1,
                            s = u.openKeyCursor();
                          (s.onsuccess = function () {
                            var v = s.result;
                            if (!v) {
                              i(null);
                              return;
                            }
                            e === 0 || c ? i(v.key) : ((c = !0), v.advance(e));
                          }),
                            (s.onerror = function () {
                              t(s.error);
                            });
                        } catch (v) {
                          t(v);
                        }
                      });
                    })
                    .catch(t);
                });
              return h(o, n), o;
            }
            function or(e) {
              var n = this,
                r = new d(function (o, i) {
                  n.ready()
                    .then(function () {
                      Q(n._dbInfo, j, function (t, a) {
                        if (t) return i(t);
                        try {
                          var f = a.objectStore(n._dbInfo.storeName),
                            u = f.openKeyCursor(),
                            c = [];
                          (u.onsuccess = function () {
                            var s = u.result;
                            if (!s) {
                              o(c);
                              return;
                            }
                            c.push(s.key), s.continue();
                          }),
                            (u.onerror = function () {
                              i(u.error);
                            });
                        } catch (s) {
                          i(s);
                        }
                      });
                    })
                    .catch(i);
                });
              return h(r, e), r;
            }
            function ir(e, n) {
              n = W.apply(this, arguments);
              var r = this.config();
              (e = (typeof e != "function" && e) || {}),
                e.name ||
                  ((e.name = e.name || r.name),
                  (e.storeName = e.storeName || r.storeName));
              var o = this,
                i;
              if (!e.name) i = d.reject("Invalid arguments");
              else {
                var t = e.name === r.name && o._dbInfo.db,
                  a = t
                    ? d.resolve(o._dbInfo.db)
                    : K(e).then(function (f) {
                        var u = N[e.name],
                          c = u.forages;
                        u.db = f;
                        for (var s = 0; s < c.length; s++) c[s]._dbInfo.db = f;
                        return f;
                      });
                e.storeName
                  ? (i = a.then(function (f) {
                      if (f.objectStoreNames.contains(e.storeName)) {
                        var u = f.version + 1;
                        x(e);
                        var c = N[e.name],
                          s = c.forages;
                        f.close();
                        for (var v = 0; v < s.length; v++) {
                          var y = s[v];
                          (y._dbInfo.db = null), (y._dbInfo.version = u);
                        }
                        var g = new d(function (_, R) {
                          var I = B.open(e.name, u);
                          (I.onerror = function (M) {
                            var ie = I.result;
                            ie.close(), R(M);
                          }),
                            (I.onupgradeneeded = function () {
                              var M = I.result;
                              M.deleteObjectStore(e.storeName);
                            }),
                            (I.onsuccess = function () {
                              var M = I.result;
                              M.close(), _(M);
                            });
                        });
                        return g
                          .then(function (_) {
                            c.db = _;
                            for (var R = 0; R < s.length; R++) {
                              var I = s[R];
                              (I._dbInfo.db = _), L(I._dbInfo);
                            }
                          })
                          .catch(function (_) {
                            throw (
                              ((P(e, _) || d.resolve()).catch(function () {}),
                              _)
                            );
                          });
                      }
                    }))
                  : (i = a.then(function (f) {
                      x(e);
                      var u = N[e.name],
                        c = u.forages;
                      f.close();
                      for (var s = 0; s < c.length; s++) {
                        var v = c[s];
                        v._dbInfo.db = null;
                      }
                      var y = new d(function (g, _) {
                        var R = B.deleteDatabase(e.name);
                        (R.onerror = function () {
                          var I = R.result;
                          I && I.close(), _(R.error);
                        }),
                          (R.onblocked = function () {
                            console.warn(
                              'dropInstance blocked for database "' +
                                e.name +
                                '" until all open connections are closed'
                            );
                          }),
                          (R.onsuccess = function () {
                            var I = R.result;
                            I && I.close(), g(I);
                          });
                      });
                      return y
                        .then(function (g) {
                          u.db = g;
                          for (var _ = 0; _ < c.length; _++) {
                            var R = c[_];
                            L(R._dbInfo);
                          }
                        })
                        .catch(function (g) {
                          throw (
                            ((P(e, g) || d.resolve()).catch(function () {}), g)
                          );
                        });
                    }));
              }
              return h(i, n), i;
            }
            var ar = {
              _driver: "asyncStorage",
              _initStorage: Ze,
              _support: D(),
              iterate: qe,
              getItem: je,
              setItem: ke,
              removeItem: er,
              clear: rr,
              length: nr,
              key: tr,
              keys: or,
              dropInstance: ir,
            };
            function fr() {
              return typeof openDatabase == "function";
            }
            var J =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ur = "~~local_forage_type~",
              Ae = /^~~local_forage_type~([^~]+)~/,
              ce = "__lfsc__:",
              ve = ce.length,
              he = "arbf",
              ye = "blob",
              Te = "si08",
              Ne = "ui08",
              De = "uic8",
              xe = "si16",
              Be = "si32",
              Ce = "ur16",
              Oe = "ui32",
              Le = "fl32",
              Pe = "fl64",
              Fe = ve + he.length,
              Me = Object.prototype.toString;
            function Ue(e) {
              var n = e.length * 0.75,
                r = e.length,
                o,
                i = 0,
                t,
                a,
                f,
                u;
              e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
              var c = new ArrayBuffer(n),
                s = new Uint8Array(c);
              for (o = 0; o < r; o += 4)
                (t = J.indexOf(e[o])),
                  (a = J.indexOf(e[o + 1])),
                  (f = J.indexOf(e[o + 2])),
                  (u = J.indexOf(e[o + 3])),
                  (s[i++] = (t << 2) | (a >> 4)),
                  (s[i++] = ((a & 15) << 4) | (f >> 2)),
                  (s[i++] = ((f & 3) << 6) | (u & 63));
              return c;
            }
            function me(e) {
              var n = new Uint8Array(e),
                r = "",
                o;
              for (o = 0; o < n.length; o += 3)
                (r += J[n[o] >> 2]),
                  (r += J[((n[o] & 3) << 4) | (n[o + 1] >> 4)]),
                  (r += J[((n[o + 1] & 15) << 2) | (n[o + 2] >> 6)]),
                  (r += J[n[o + 2] & 63]);
              return (
                n.length % 3 === 2
                  ? (r = r.substring(0, r.length - 1) + "=")
                  : n.length % 3 === 1 &&
                    (r = r.substring(0, r.length - 2) + "=="),
                r
              );
            }
            function cr(e, n) {
              var r = "";
              if (
                (e && (r = Me.call(e)),
                e &&
                  (r === "[object ArrayBuffer]" ||
                    (e.buffer && Me.call(e.buffer) === "[object ArrayBuffer]")))
              ) {
                var o,
                  i = ce;
                e instanceof ArrayBuffer
                  ? ((o = e), (i += he))
                  : ((o = e.buffer),
                    r === "[object Int8Array]"
                      ? (i += Te)
                      : r === "[object Uint8Array]"
                      ? (i += Ne)
                      : r === "[object Uint8ClampedArray]"
                      ? (i += De)
                      : r === "[object Int16Array]"
                      ? (i += xe)
                      : r === "[object Uint16Array]"
                      ? (i += Ce)
                      : r === "[object Int32Array]"
                      ? (i += Be)
                      : r === "[object Uint32Array]"
                      ? (i += Oe)
                      : r === "[object Float32Array]"
                      ? (i += Le)
                      : r === "[object Float64Array]"
                      ? (i += Pe)
                      : n(new Error("Failed to get type for BinaryArray"))),
                  n(i + me(o));
              } else if (r === "[object Blob]") {
                var t = new FileReader();
                (t.onload = function () {
                  var a = ur + e.type + "~" + me(this.result);
                  n(ce + ye + a);
                }),
                  t.readAsArrayBuffer(e);
              } else
                try {
                  n(JSON.stringify(e));
                } catch (a) {
                  console.error(
                    "Couldn't convert value into a JSON string: ",
                    e
                  ),
                    n(null, a);
                }
            }
            function sr(e) {
              if (e.substring(0, ve) !== ce) return JSON.parse(e);
              var n = e.substring(Fe),
                r = e.substring(ve, Fe),
                o;
              if (r === ye && Ae.test(n)) {
                var i = n.match(Ae);
                (o = i[1]), (n = n.substring(i[0].length));
              }
              var t = Ue(n);
              switch (r) {
                case he:
                  return t;
                case ye:
                  return z([t], { type: o });
                case Te:
                  return new Int8Array(t);
                case Ne:
                  return new Uint8Array(t);
                case De:
                  return new Uint8ClampedArray(t);
                case xe:
                  return new Int16Array(t);
                case Ce:
                  return new Uint16Array(t);
                case Be:
                  return new Int32Array(t);
                case Oe:
                  return new Uint32Array(t);
                case Le:
                  return new Float32Array(t);
                case Pe:
                  return new Float64Array(t);
                default:
                  throw new Error("Unkown type: " + r);
              }
            }
            var pe = {
              serialize: cr,
              deserialize: sr,
              stringToBuffer: Ue,
              bufferToString: me,
            };
            function Ye(e, n, r, o) {
              e.executeSql(
                "CREATE TABLE IF NOT EXISTS " +
                  n.storeName +
                  " (id INTEGER PRIMARY KEY, key unique, value)",
                [],
                r,
                o
              );
            }
            function lr(e) {
              var n = this,
                r = { db: null };
              if (e)
                for (var o in e)
                  r[o] = typeof e[o] != "string" ? e[o].toString() : e[o];
              var i = new d(function (t, a) {
                try {
                  r.db = openDatabase(
                    r.name,
                    String(r.version),
                    r.description,
                    r.size
                  );
                } catch (f) {
                  return a(f);
                }
                r.db.transaction(function (f) {
                  Ye(
                    f,
                    r,
                    function () {
                      (n._dbInfo = r), t();
                    },
                    function (u, c) {
                      a(c);
                    }
                  );
                }, a);
              });
              return (r.serializer = pe), i;
            }
            function Z(e, n, r, o, i, t) {
              e.executeSql(
                r,
                o,
                i,
                function (a, f) {
                  f.code === f.SYNTAX_ERR
                    ? a.executeSql(
                        "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                        [n.storeName],
                        function (u, c) {
                          c.rows.length
                            ? t(u, f)
                            : Ye(
                                u,
                                n,
                                function () {
                                  u.executeSql(r, o, i, t);
                                },
                                t
                              );
                        },
                        t
                      )
                    : t(a, f);
                },
                t
              );
            }
            function dr(e, n) {
              var r = this;
              e = A(e);
              var o = new d(function (i, t) {
                r.ready()
                  .then(function () {
                    var a = r._dbInfo;
                    a.db.transaction(function (f) {
                      Z(
                        f,
                        a,
                        "SELECT * FROM " +
                          a.storeName +
                          " WHERE key = ? LIMIT 1",
                        [e],
                        function (u, c) {
                          var s = c.rows.length ? c.rows.item(0).value : null;
                          s && (s = a.serializer.deserialize(s)), i(s);
                        },
                        function (u, c) {
                          t(c);
                        }
                      );
                    });
                  })
                  .catch(t);
              });
              return h(o, n), o;
            }
            function vr(e, n) {
              var r = this,
                o = new d(function (i, t) {
                  r.ready()
                    .then(function () {
                      var a = r._dbInfo;
                      a.db.transaction(function (f) {
                        Z(
                          f,
                          a,
                          "SELECT * FROM " + a.storeName,
                          [],
                          function (u, c) {
                            for (
                              var s = c.rows, v = s.length, y = 0;
                              y < v;
                              y++
                            ) {
                              var g = s.item(y),
                                _ = g.value;
                              if (
                                (_ && (_ = a.serializer.deserialize(_)),
                                (_ = e(_, g.key, y + 1)),
                                _ !== void 0)
                              ) {
                                i(_);
                                return;
                              }
                            }
                            i();
                          },
                          function (u, c) {
                            t(c);
                          }
                        );
                      });
                    })
                    .catch(t);
                });
              return h(o, n), o;
            }
            function ze(e, n, r, o) {
              var i = this;
              e = A(e);
              var t = new d(function (a, f) {
                i.ready()
                  .then(function () {
                    n === void 0 && (n = null);
                    var u = n,
                      c = i._dbInfo;
                    c.serializer.serialize(n, function (s, v) {
                      v
                        ? f(v)
                        : c.db.transaction(
                            function (y) {
                              Z(
                                y,
                                c,
                                "INSERT OR REPLACE INTO " +
                                  c.storeName +
                                  " (key, value) VALUES (?, ?)",
                                [e, s],
                                function () {
                                  a(u);
                                },
                                function (g, _) {
                                  f(_);
                                }
                              );
                            },
                            function (y) {
                              if (y.code === y.QUOTA_ERR) {
                                if (o > 0) {
                                  a(ze.apply(i, [e, u, r, o - 1]));
                                  return;
                                }
                                f(y);
                              }
                            }
                          );
                    });
                  })
                  .catch(f);
              });
              return h(t, r), t;
            }
            function hr(e, n, r) {
              return ze.apply(this, [e, n, r, 1]);
            }
            function yr(e, n) {
              var r = this;
              e = A(e);
              var o = new d(function (i, t) {
                r.ready()
                  .then(function () {
                    var a = r._dbInfo;
                    a.db.transaction(function (f) {
                      Z(
                        f,
                        a,
                        "DELETE FROM " + a.storeName + " WHERE key = ?",
                        [e],
                        function () {
                          i();
                        },
                        function (u, c) {
                          t(c);
                        }
                      );
                    });
                  })
                  .catch(t);
              });
              return h(o, n), o;
            }
            function mr(e) {
              var n = this,
                r = new d(function (o, i) {
                  n.ready()
                    .then(function () {
                      var t = n._dbInfo;
                      t.db.transaction(function (a) {
                        Z(
                          a,
                          t,
                          "DELETE FROM " + t.storeName,
                          [],
                          function () {
                            o();
                          },
                          function (f, u) {
                            i(u);
                          }
                        );
                      });
                    })
                    .catch(i);
                });
              return h(r, e), r;
            }
            function pr(e) {
              var n = this,
                r = new d(function (o, i) {
                  n.ready()
                    .then(function () {
                      var t = n._dbInfo;
                      t.db.transaction(function (a) {
                        Z(
                          a,
                          t,
                          "SELECT COUNT(key) as c FROM " + t.storeName,
                          [],
                          function (f, u) {
                            var c = u.rows.item(0).c;
                            o(c);
                          },
                          function (f, u) {
                            i(u);
                          }
                        );
                      });
                    })
                    .catch(i);
                });
              return h(r, e), r;
            }
            function gr(e, n) {
              var r = this,
                o = new d(function (i, t) {
                  r.ready()
                    .then(function () {
                      var a = r._dbInfo;
                      a.db.transaction(function (f) {
                        Z(
                          f,
                          a,
                          "SELECT key FROM " +
                            a.storeName +
                            " WHERE id = ? LIMIT 1",
                          [e + 1],
                          function (u, c) {
                            var s = c.rows.length ? c.rows.item(0).key : null;
                            i(s);
                          },
                          function (u, c) {
                            t(c);
                          }
                        );
                      });
                    })
                    .catch(t);
                });
              return h(o, n), o;
            }
            function _r(e) {
              var n = this,
                r = new d(function (o, i) {
                  n.ready()
                    .then(function () {
                      var t = n._dbInfo;
                      t.db.transaction(function (a) {
                        Z(
                          a,
                          t,
                          "SELECT key FROM " + t.storeName,
                          [],
                          function (f, u) {
                            for (var c = [], s = 0; s < u.rows.length; s++)
                              c.push(u.rows.item(s).key);
                            o(c);
                          },
                          function (f, u) {
                            i(u);
                          }
                        );
                      });
                    })
                    .catch(i);
                });
              return h(r, e), r;
            }
            function br(e) {
              return new d(function (n, r) {
                e.transaction(
                  function (o) {
                    o.executeSql(
                      "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                      [],
                      function (i, t) {
                        for (var a = [], f = 0; f < t.rows.length; f++)
                          a.push(t.rows.item(f).name);
                        n({ db: e, storeNames: a });
                      },
                      function (i, t) {
                        r(t);
                      }
                    );
                  },
                  function (o) {
                    r(o);
                  }
                );
              });
            }
            function Er(e, n) {
              n = W.apply(this, arguments);
              var r = this.config();
              (e = (typeof e != "function" && e) || {}),
                e.name ||
                  ((e.name = e.name || r.name),
                  (e.storeName = e.storeName || r.storeName));
              var o = this,
                i;
              return (
                e.name
                  ? (i = new d(function (t) {
                      var a;
                      e.name === r.name
                        ? (a = o._dbInfo.db)
                        : (a = openDatabase(e.name, "", "", 0)),
                        e.storeName
                          ? t({ db: a, storeNames: [e.storeName] })
                          : t(br(a));
                    }).then(function (t) {
                      return new d(function (a, f) {
                        t.db.transaction(
                          function (u) {
                            function c(g) {
                              return new d(function (_, R) {
                                u.executeSql(
                                  "DROP TABLE IF EXISTS " + g,
                                  [],
                                  function () {
                                    _();
                                  },
                                  function (I, M) {
                                    R(M);
                                  }
                                );
                              });
                            }
                            for (
                              var s = [], v = 0, y = t.storeNames.length;
                              v < y;
                              v++
                            )
                              s.push(c(t.storeNames[v]));
                            d.all(s)
                              .then(function () {
                                a();
                              })
                              .catch(function (g) {
                                f(g);
                              });
                          },
                          function (u) {
                            f(u);
                          }
                        );
                      });
                    }))
                  : (i = d.reject("Invalid arguments")),
                h(i, n),
                i
              );
            }
            var Sr = {
              _driver: "webSQLStorage",
              _initStorage: lr,
              _support: fr(),
              iterate: vr,
              getItem: dr,
              setItem: hr,
              removeItem: yr,
              clear: mr,
              length: pr,
              key: gr,
              keys: _r,
              dropInstance: Er,
            };
            function Ir() {
              try {
                return (
                  typeof localStorage != "undefined" &&
                  "setItem" in localStorage &&
                  !!localStorage.setItem
                );
              } catch (e) {
                return !1;
              }
            }
            function We(e, n) {
              var r = e.name + "/";
              return e.storeName !== n.storeName && (r += e.storeName + "/"), r;
            }
            function wr() {
              var e = "_localforage_support_test";
              try {
                return (
                  localStorage.setItem(e, !0), localStorage.removeItem(e), !1
                );
              } catch (n) {
                return !0;
              }
            }
            function Rr() {
              return !wr() || localStorage.length > 0;
            }
            function Ar(e) {
              var n = this,
                r = {};
              if (e) for (var o in e) r[o] = e[o];
              return (
                (r.keyPrefix = We(e, n._defaultConfig)),
                Rr()
                  ? ((n._dbInfo = r), (r.serializer = pe), d.resolve())
                  : d.reject()
              );
            }
            function Tr(e) {
              var n = this,
                r = n.ready().then(function () {
                  for (
                    var o = n._dbInfo.keyPrefix, i = localStorage.length - 1;
                    i >= 0;
                    i--
                  ) {
                    var t = localStorage.key(i);
                    t.indexOf(o) === 0 && localStorage.removeItem(t);
                  }
                });
              return h(r, e), r;
            }
            function Nr(e, n) {
              var r = this;
              e = A(e);
              var o = r.ready().then(function () {
                var i = r._dbInfo,
                  t = localStorage.getItem(i.keyPrefix + e);
                return t && (t = i.serializer.deserialize(t)), t;
              });
              return h(o, n), o;
            }
            function Dr(e, n) {
              var r = this,
                o = r.ready().then(function () {
                  for (
                    var i = r._dbInfo,
                      t = i.keyPrefix,
                      a = t.length,
                      f = localStorage.length,
                      u = 1,
                      c = 0;
                    c < f;
                    c++
                  ) {
                    var s = localStorage.key(c);
                    if (s.indexOf(t) === 0) {
                      var v = localStorage.getItem(s);
                      if (
                        (v && (v = i.serializer.deserialize(v)),
                        (v = e(v, s.substring(a), u++)),
                        v !== void 0)
                      )
                        return v;
                    }
                  }
                });
              return h(o, n), o;
            }
            function xr(e, n) {
              var r = this,
                o = r.ready().then(function () {
                  var i = r._dbInfo,
                    t;
                  try {
                    t = localStorage.key(e);
                  } catch (a) {
                    t = null;
                  }
                  return t && (t = t.substring(i.keyPrefix.length)), t;
                });
              return h(o, n), o;
            }
            function Br(e) {
              var n = this,
                r = n.ready().then(function () {
                  for (
                    var o = n._dbInfo, i = localStorage.length, t = [], a = 0;
                    a < i;
                    a++
                  ) {
                    var f = localStorage.key(a);
                    f.indexOf(o.keyPrefix) === 0 &&
                      t.push(f.substring(o.keyPrefix.length));
                  }
                  return t;
                });
              return h(r, e), r;
            }
            function Cr(e) {
              var n = this,
                r = n.keys().then(function (o) {
                  return o.length;
                });
              return h(r, e), r;
            }
            function Or(e, n) {
              var r = this;
              e = A(e);
              var o = r.ready().then(function () {
                var i = r._dbInfo;
                localStorage.removeItem(i.keyPrefix + e);
              });
              return h(o, n), o;
            }
            function Lr(e, n, r) {
              var o = this;
              e = A(e);
              var i = o.ready().then(function () {
                n === void 0 && (n = null);
                var t = n;
                return new d(function (a, f) {
                  var u = o._dbInfo;
                  u.serializer.serialize(n, function (c, s) {
                    if (s) f(s);
                    else
                      try {
                        localStorage.setItem(u.keyPrefix + e, c), a(t);
                      } catch (v) {
                        (v.name === "QuotaExceededError" ||
                          v.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                          f(v),
                          f(v);
                      }
                  });
                });
              });
              return h(i, r), i;
            }
            function Pr(e, n) {
              if (
                ((n = W.apply(this, arguments)),
                (e = (typeof e != "function" && e) || {}),
                !e.name)
              ) {
                var r = this.config();
                (e.name = e.name || r.name),
                  (e.storeName = e.storeName || r.storeName);
              }
              var o = this,
                i;
              return (
                e.name
                  ? (i = new d(function (t) {
                      e.storeName
                        ? t(We(e, o._defaultConfig))
                        : t(e.name + "/");
                    }).then(function (t) {
                      for (var a = localStorage.length - 1; a >= 0; a--) {
                        var f = localStorage.key(a);
                        f.indexOf(t) === 0 && localStorage.removeItem(f);
                      }
                    }))
                  : (i = d.reject("Invalid arguments")),
                h(i, n),
                i
              );
            }
            var Fr = {
                _driver: "localStorageWrapper",
                _initStorage: Ar,
                _support: Ir(),
                iterate: Dr,
                getItem: Nr,
                setItem: Lr,
                removeItem: Or,
                clear: Tr,
                length: Cr,
                key: xr,
                keys: Br,
                dropInstance: Pr,
              },
              Mr = function (n, r) {
                return (
                  n === r ||
                  (typeof n == "number" &&
                    typeof r == "number" &&
                    isNaN(n) &&
                    isNaN(r))
                );
              },
              Ur = function (n, r) {
                for (var o = n.length, i = 0; i < o; ) {
                  if (Mr(n[i], r)) return !0;
                  i++;
                }
                return !1;
              },
              $e =
                Array.isArray ||
                function (e) {
                  return Object.prototype.toString.call(e) === "[object Array]";
                },
              oe = {},
              Ve = {},
              re = { INDEXEDDB: ar, WEBSQL: Sr, LOCALSTORAGE: Fr },
              Yr = [
                re.INDEXEDDB._driver,
                re.WEBSQL._driver,
                re.LOCALSTORAGE._driver,
              ],
              se = ["dropInstance"],
              ge = [
                "clear",
                "getItem",
                "iterate",
                "key",
                "keys",
                "length",
                "removeItem",
                "setItem",
              ].concat(se),
              zr = {
                description: "",
                driver: Yr.slice(),
                name: "localforage",
                size: 4980736,
                storeName: "keyvaluepairs",
                version: 1,
              };
            function Wr(e, n) {
              e[n] = function () {
                var r = arguments;
                return e.ready().then(function () {
                  return e[n].apply(e, r);
                });
              };
            }
            function _e() {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                if (n)
                  for (var r in n)
                    n.hasOwnProperty(r) &&
                      ($e(n[r])
                        ? (arguments[0][r] = n[r].slice())
                        : (arguments[0][r] = n[r]));
              }
              return arguments[0];
            }
            var $r = (function () {
                function e(n) {
                  C(this, e);
                  for (var r in re)
                    if (re.hasOwnProperty(r)) {
                      var o = re[r],
                        i = o._driver;
                      (this[r] = i), oe[i] || this.defineDriver(o);
                    }
                  (this._defaultConfig = _e({}, zr)),
                    (this._config = _e({}, this._defaultConfig, n)),
                    (this._driverSet = null),
                    (this._initDriver = null),
                    (this._ready = !1),
                    (this._dbInfo = null),
                    this._wrapLibraryMethodsWithReady(),
                    this.setDriver(this._config.driver).catch(function () {});
                }
                return (
                  (e.prototype.config = function (r) {
                    if (
                      (typeof r == "undefined" ? "undefined" : S(r)) ===
                      "object"
                    ) {
                      if (this._ready)
                        return new Error(
                          "Can't call config() after localforage has been used."
                        );
                      for (var o in r) {
                        if (
                          (o === "storeName" &&
                            (r[o] = r[o].replace(/\W/g, "_")),
                          o === "version" && typeof r[o] != "number")
                        )
                          return new Error(
                            "Database version must be a number."
                          );
                        this._config[o] = r[o];
                      }
                      return "driver" in r && r.driver
                        ? this.setDriver(this._config.driver)
                        : !0;
                    } else
                      return typeof r == "string"
                        ? this._config[r]
                        : this._config;
                  }),
                  (e.prototype.defineDriver = function (r, o, i) {
                    var t = new d(function (a, f) {
                      try {
                        var u = r._driver,
                          c = new Error(
                            "Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"
                          );
                        if (!r._driver) {
                          f(c);
                          return;
                        }
                        for (
                          var s = ge.concat("_initStorage"),
                            v = 0,
                            y = s.length;
                          v < y;
                          v++
                        ) {
                          var g = s[v],
                            _ = !Ur(se, g);
                          if ((_ || r[g]) && typeof r[g] != "function") {
                            f(c);
                            return;
                          }
                        }
                        var R = function () {
                          for (
                            var ie = function (Qr) {
                                return function () {
                                  var Gr = new Error(
                                      "Method " +
                                        Qr +
                                        " is not implemented by the current driver"
                                    ),
                                    Ke = d.reject(Gr);
                                  return (
                                    h(Ke, arguments[arguments.length - 1]), Ke
                                  );
                                };
                              },
                              be = 0,
                              Kr = se.length;
                            be < Kr;
                            be++
                          ) {
                            var Ee = se[be];
                            r[Ee] || (r[Ee] = ie(Ee));
                          }
                        };
                        R();
                        var I = function (ie) {
                          oe[u] &&
                            console.info("Redefining LocalForage driver: " + u),
                            (oe[u] = r),
                            (Ve[u] = ie),
                            a();
                        };
                        "_support" in r
                          ? r._support && typeof r._support == "function"
                            ? r._support().then(I, f)
                            : I(!!r._support)
                          : I(!0);
                      } catch (M) {
                        f(M);
                      }
                    });
                    return w(t, o, i), t;
                  }),
                  (e.prototype.driver = function () {
                    return this._driver || null;
                  }),
                  (e.prototype.getDriver = function (r, o, i) {
                    var t = oe[r]
                      ? d.resolve(oe[r])
                      : d.reject(new Error("Driver not found."));
                    return w(t, o, i), t;
                  }),
                  (e.prototype.getSerializer = function (r) {
                    var o = d.resolve(pe);
                    return w(o, r), o;
                  }),
                  (e.prototype.ready = function (r) {
                    var o = this,
                      i = o._driverSet.then(function () {
                        return (
                          o._ready === null && (o._ready = o._initDriver()),
                          o._ready
                        );
                      });
                    return w(i, r, r), i;
                  }),
                  (e.prototype.setDriver = function (r, o, i) {
                    var t = this;
                    $e(r) || (r = [r]);
                    var a = this._getSupportedDrivers(r);
                    function f() {
                      t._config.driver = t.driver();
                    }
                    function u(v) {
                      return (
                        t._extend(v),
                        f(),
                        (t._ready = t._initStorage(t._config)),
                        t._ready
                      );
                    }
                    function c(v) {
                      return function () {
                        var y = 0;
                        function g() {
                          for (; y < v.length; ) {
                            var _ = v[y];
                            return (
                              y++,
                              (t._dbInfo = null),
                              (t._ready = null),
                              t.getDriver(_).then(u).catch(g)
                            );
                          }
                          f();
                          var R = new Error(
                            "No available storage method found."
                          );
                          return (t._driverSet = d.reject(R)), t._driverSet;
                        }
                        return g();
                      };
                    }
                    var s =
                      this._driverSet !== null
                        ? this._driverSet.catch(function () {
                            return d.resolve();
                          })
                        : d.resolve();
                    return (
                      (this._driverSet = s
                        .then(function () {
                          var v = a[0];
                          return (
                            (t._dbInfo = null),
                            (t._ready = null),
                            t.getDriver(v).then(function (y) {
                              (t._driver = y._driver),
                                f(),
                                t._wrapLibraryMethodsWithReady(),
                                (t._initDriver = c(a));
                            })
                          );
                        })
                        .catch(function () {
                          f();
                          var v = new Error(
                            "No available storage method found."
                          );
                          return (t._driverSet = d.reject(v)), t._driverSet;
                        })),
                      w(this._driverSet, o, i),
                      this._driverSet
                    );
                  }),
                  (e.prototype.supports = function (r) {
                    return !!Ve[r];
                  }),
                  (e.prototype._extend = function (r) {
                    _e(this, r);
                  }),
                  (e.prototype._getSupportedDrivers = function (r) {
                    for (var o = [], i = 0, t = r.length; i < t; i++) {
                      var a = r[i];
                      this.supports(a) && o.push(a);
                    }
                    return o;
                  }),
                  (e.prototype._wrapLibraryMethodsWithReady = function () {
                    for (var r = 0, o = ge.length; r < o; r++) Wr(this, ge[r]);
                  }),
                  (e.prototype.createInstance = function (r) {
                    return new e(r);
                  }),
                  e
                );
              })(),
              Vr = new $r();
            Y.exports = Vr;
          },
          { 3: 3 },
        ],
      },
      {},
      [4]
    )(4);
  });
}.call($, $, $, $, $, void 0, void 0, Qe));
var Ge = ne.length !== 1 && $[ne[0]] !== $[ne[1]] ? $ : $[ne[0]];
var kr = Ge;
export { kr as default };
