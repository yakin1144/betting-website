import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as w,
  reactivity_esmBundler_toRefs as A,
  index_useDateTimeService as E,
  reactivity_esmBundler_ref as p,
  runtimeCore_esmBundler_computed as u,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_onActivated as O,
  runtimeCore_esmBundler_onDeactivated as U,
  runtimeCore_esmBundler_onBeforeUnmount as M,
  runtimeCore_esmBundler_h as N,
  dateTimeFormatTypes as S,
  DEFAULT_TIME_DATE_FORMAT_TYPE as V,
  setInterval as Z,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
var C;
const x = w({
  name: "TimeCountingHOC",
  props: {
    modelValue: { type: Number, required: !0 },
    format: {
      type: String,
      default: (C = S[V]) == null ? void 0 : C.timeFullFormat,
    },
    inverse: { type: Boolean, default: !1 },
    timeout: { type: Number, default: 1e3 },
    stopOnZeroDateFormatted: { type: Boolean, default: !1 },
  },
  setup(m, { emit: l, slots: i }) {
    $_$();
    const {
        modelValue: B,
        inverse: o,
        timeout: D,
        stopOnZeroDateFormatted: F,
      } = A(m),
      y = E(),
      s = p(),
      d = p(Date.now()),
      r = u({
        get() {
          $_$();
          return t(B);
        },
        set(e) {
          l("update:modelValue", e), l("change", e);
        },
      }),
      c = u(() => $_$() && new Date(t(r))),
      I = u(() => $_$() && y.formatTimeWithCustomFormatter(t(c), m.format)),
      a = () => {
        $_$();
        clearInterval(t(s));
      },
      v = (e) => $_$() && t(F) && ((t(o) && e < 1e3) || (!t(o) && e > 1e3)),
      g = (e) => {
        $_$();
        const n = t(r) + e;
        v(n) ? (r.value = 0) : (r.value = n);
      },
      h = (e) => {
        $_$();
        const n = t(r) - e;
        v(n) ? (r.value = 0) : (r.value = n);
      },
      _ = () => {
        $_$();
        const e = Date.now(),
          n = e - t(d);
        (d.value = e), t(o) ? h(n) : g(n);
      },
      f = () => {
        $_$();
        s.value = Z(() => _(), t(D));
      },
      T = () => {
        _();
      };
    return (
      T(),
      f(),
      O(() => {
        T(), f();
      }),
      U(a),
      M(a),
      () => {
        $_$();
        var e;
        return N(
          "div",
          (e = i.default) == null
            ? void 0
            : e.call(i, { date: t(c), dateFormatted: t(I), cancel: a })
        );
      }
    );
  },
});
export { x as TimeCounting };
