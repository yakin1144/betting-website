import $_$ from "./$_$.js";
$_$();
import {
  createSharedComposable_createSharedComposable as I,
  useForm_useForm as j,
  useAccountStore as z,
  useUserConfigStore as G,
  router_useRouter as K,
  index_useT as P,
  useNotifications_useNotifications as Q,
  reactivity_esmBundler_ref as b,
  runtimeCore_esmBundler_computed as u,
  reactivity_esmBundler_unref as o,
  execAsync as n,
  runtimeCore_esmBundler_defineComponent as W,
  useGlobalStore as J,
  index_useVModal as X,
  runtimeCore_esmBundler_watchEffect as Y,
  runtimeCore_esmBundler_createElementBlock as Z,
  runtimeCore_esmBundler_openBlock as $,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useConvertAccountService as ee,
  useConvertAccountCheck as B,
  AccountStatusValues as N,
  parseError as w,
  createConvertAdditionalAccountModal as te,
  createConvertMainAccountModal as oe,
} from "./ff681391e2.js";
import { useValidators as ne } from "./entry-bc8f153a4a.js";
const re = I(() => {
    $_$();
    const { addFieldData: C } = j(),
      r = ee(),
      {
        validatorPhone: l,
        validatorRequired: A,
        validatorSmsCodeMinLength: h,
        validatorSmsCodeRequired: d,
      } = ne(),
      y = z(),
      p = G(),
      _ = K(),
      c = P(),
      { notificationSuccess: i, notificationError: S } = Q(),
      { accountStatus: D, isConvertMainAccount: g } = B(),
      s = b(!1),
      k = b(!1),
      m = b(0),
      T = 5,
      v = C(
        u(() => ({
          defaultValue: { ...p.phoneData },
          validator: [
            (e) => A(e == null ? void 0 : e.phoneNum),
            (e) =>
              l(e == null ? void 0 : e.phoneNum, {
                countryCode: e == null ? void 0 : e.countryCode,
              }),
          ],
        }))
      ),
      f = C(
        u(() => ({
          defaultValue: "",
          validator: [d, (e) => h(e, { minLength: T })],
        }))
      ),
      E = u(() => ($_$() && !o(m)) || !o(f).value),
      M = u(() => $_$() && o(m) > 0),
      L = u(() =>
        $_$() && o(g)
          ? "office_dictionary_convert_account_title_attention_main"
          : "office_dictionary_convert_account_title_attention_additional"
      ),
      R = u(() =>
        $_$() && o(g)
          ? "office_dictionary_convert_account_attention_btn_main"
          : "office_dictionary_convert_account_attention_btn_additional"
      ),
      V = async () => {
        $_$();
        let e, t;
        try {
          (s.value = !0),
            ([e, t] = n(
              () =>
                $_$() &&
                r.getSmsCode({
                  countryCode: o(v).value.phoneCode,
                  phone: o(v).value.phoneNum,
                })
            )),
            await e,
            t(),
            o(r.message) &&
              (([e, t] = n(() => $_$() && i(o(r.message)))), await e, t()),
            (m.value = o(r.resendTimeout) * 1e3),
            (k.value = !0);
        } catch (a) {
          ([e, t] = n(() => S(w(a, c("main_query_error"))))), await e, t();
        } finally {
          s.value = !1;
        }
      },
      q = async () => {
        $_$();
        let e, t;
        ([e, t] = n(() => v.validate())), (e = await e), t(), !e && V();
      },
      x = (e) => {
        window.location.replace(e);
      },
      O = async () => {
        $_$();
        let e, t;
        const { query: a } = o(_.currentRoute),
          { hrkTransfer: F, redirectToken: H } = a;
        F &&
          H &&
          (([e, t] = n(() =>
            _.replace({
              query: { ...a, hrkTransfer: void 0, redirectToken: void 0 },
            })
          )),
          await e,
          t());
      },
      U = async () => {
        $_$();
        let e, t;
        try {
          (s.value = !0),
            ([e, t] = n(() => {
              $_$();
              var a;
              return r.convertAccount((a = o(f).value) != null ? a : "");
            })),
            await e,
            t(),
            o(r.message) &&
              (([e, t] = n(() => $_$() && i(o(r.message)))), await e, t()),
            x(o(r.redirectUrl));
        } catch (a) {
          ([e, t] = n(() => S(w(a, c("main_query_error"))))), await e, t();
        } finally {
          s.value = !1;
        }
      };
    return {
      isLoading: s,
      isConvertAccountDisabled: E,
      isSendingSmsDisabled: M,
      codeHasBeenSent: k,
      smsSendingDisabledTime: m,
      phoneField: v,
      codeField: f,
      codeFieldLength: T,
      titleTextTKey: L,
      buttonTextTKey: R,
      onSubmit: async () => {
        $_$();
        let e, t;
        if ((([e, t] = n(() => f.validate())), (e = await e), t(), e))
          return !1;
        ([e, t] = n(() => U())), await e, t();
      },
      onGetSmsCode: q,
      convertAdditionalAccount: async () => {
        $_$();
        let e, t;
        try {
          return (
            (s.value = !0),
            ([e, t] = n(() => r.convertAdditionalAccount())),
            await e,
            t(),
            o(r.message) &&
              (([e, t] = n(() => $_$() && i(o(r.message)))), await e, t()),
            ([e, t] = n(() => y.updateData())),
            await e,
            t(),
            !0
          );
        } catch (a) {
          return (
            ([e, t] = n(() => S(w(a, c("main_query_error"))))), await e, t(), !1
          );
        } finally {
          s.value = !1;
        }
      },
      handleRedirectAfterConvertAccount: O,
      onConvertAccount: ({ onMain: e, onAdditional: t }) => {
        $_$();
        switch (o(D)) {
          case N.MAIN_ACCOUNT_ALLOWED:
            e();
            break;
          case N.ADDITIONAL_ACCOUNT_ALLOWED:
            t();
            break;
        }
      },
    };
  }),
  ae = W({
    __name: "ConvertAccountReminder",
    setup(C) {
      $_$();
      const r = J(),
        l = X(),
        {
          isUserNotReminded: A,
          isCheckAvailable: h,
          setUserReminded: d,
          checkConvertAvailability: y,
        } = B(),
        { onConvertAccount: p } = re(),
        _ = u(() => r.isUserAuth);
      return (
        Y(async () => {
          $_$();
          let c, i;
          !o(_) ||
            !o(h) ||
            (([c, i] = n(() => y())),
            await c,
            i(),
            o(A) &&
              p({
                onMain: () => {
                  l.show(oe()), d();
                },
                onAdditional: () => {
                  l.show(te()), d();
                },
              }));
        }),
        (c, i) => $_$() && ($(), Z("div"))
      );
    },
  }),
  me = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ae },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { me as ConvertAccountReminder, re as useConvertAccount };
