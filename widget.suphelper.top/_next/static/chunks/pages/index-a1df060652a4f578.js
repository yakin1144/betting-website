(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    17703: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(94504);
        },
      ]);
    },
    27713: () => {},
    94504: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { __N_SSP: () => r3, default: () => r6 });
      var a = r(6029),
        n = r(27189),
        i = r(38516),
        o = r(18505),
        s = r(71712),
        l = r(20036),
        c = r(92300),
        d = r(55729),
        u = r(74356),
        m = r(90202),
        p = r(74615),
        g = r(54578),
        f = r(20045),
        h = r(98578),
        x = r(45254),
        v = r(76590),
        b = r(47870),
        y = r(99786),
        k = r(22912),
        j = r(42024),
        w = r(6110),
        C = r(987),
        I = r(26500),
        N = r(86320);
      function M(e, t) {
        let r = h.A.getState().env;
        if (
          void 0 !== e &&
          e.trim() &&
          ((null == r ? void 0 : r.APP_ENV) !== "production" || t)
        )
          return { "data-testid": e };
      }
      var S = r(38169);
      let A = (0, S.r)((e, t) => {
        let { withShadow: r } = t;
        return {
          indicator: {
            position: "absolute",
            "&.enter": { opacity: 0, transform: "scale(0.9)" },
            "&.enter-active": {
              opacity: 1,
              transform: "scale(1)",
              transition: "opacity 400ms, transform 400ms",
            },
            "&.exit": { opacity: 1, transform: "scale(1)" },
            "&.exit-active": {
              opacity: 0,
              transform: "scale(0.9)",
              transition: "opacity 100ms, transform 100ms",
            },
          },
          button: {
            padding: "0 0px 2px 1px",
            ...(r && { boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .10)" }),
          },
        };
      });
      var R = r(37439);
      function T(e) {
        return !!e && "object" == typeof e;
      }
      let E = (e) => {
        let {
            onOpenWidget: t,
            opener: r,
            orientation: n,
            unreadMessageCount: i,
          } = e,
          o = (function (e) {
            if (!T(e)) return R.IH;
            if ("number" == typeof e.size) return e.size;
            let t = { small: R._, middle: R.IH, large: R.O2 };
            return e.size ? t[e.size] : R.IH;
          })(r),
          s = Math.round(0.6 * o),
          l = (function (e) {
            if (T(e)) return e.unreadIndicator;
          })(r),
          { classes: c } = A({
            withShadow: (function (e) {
              return !T(e) || "none" !== e.shadow;
            })(r),
          });
        return (0, a.jsx)(C.C, {
          className: c.indicator,
          color: "red.8",
          disabled: !i,
          label: "simple" === l ? null : i,
          offset: 8,
          size: "simple" === l ? 18 : 24,
          style: { [n]: 0, bottom: 0 },
          ...M("widget-button-indicator"),
          children: (0, a.jsx)(I.M, {
            className: c.button,
            color: "primaryColor",
            onClick: t,
            size: o,
            style: { borderRadius: "50%" },
            variant: "filled",
            ...M("open-widget-button", !0),
            children: (0, a.jsx)(N.bYO, { fill: "white", size: s }),
          }),
        });
      };
      var z = r(26257),
        B = r(61604),
        D = r.n(B);
      let _ = (0, S.r)((e, t) => {
        let { isMobile: r } = t;
        return {
          root: {
            height: "100%",
            padding: r ? 0 : R.el,
            position: "relative",
            width: "100%",
          },
          container: { height: "100%", position: "relative", width: "100%" },
        };
      });
      var F = r(58555),
        O = r(95070),
        L = r(10815),
        P = r(37948),
        H = r(24170),
        W = r.n(H);
      let G = (0, S.r)(() => ({
          wrapper: {
            textAlign: "center",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          },
          title: { fontSize: 20, fontWeight: 500, margin: "20px 0 1px 0" },
        })),
        $ = (e) => {
          let { img: t, alertTitle: r, alertMessage: n, testerId: i } = e,
            { classes: o } = G();
          return (0, a.jsxs)("div", {
            className: o.wrapper,
            ...M(i),
            children: [
              t && (0, a.jsx)(W(), { alt: "", src: t }),
              (0, a.jsx)(P.E, { className: o.title, children: r }),
              (0, a.jsx)(P.E, { children: n }),
            ],
          });
        },
        V = {
          src: "/_next/static/media/401-error.093d6ff7.svg",
          height: 160,
          width: 160,
          blurWidth: 0,
          blurHeight: 0,
        },
        U = {
          src: "/_next/static/media/5xx-error.0e2915f7.svg",
          height: 144,
          width: 138,
          blurWidth: 0,
          blurHeight: 0,
        },
        q = (0, d.memo)((e) => {
          let { appStatus: t, authError: r } = e,
            [n] = (0, L.Bd)(),
            { tonOfVoiceTemplate: i, tonOfVoiceTestId: o } = (0, d.useMemo)(
              () => ({
                tonOfVoiceTemplate: {
                  image: V,
                  message: n(
                    "Обратитесь в поддержку через другие \nканалы связи."
                  ),
                  title: n("Что-то пошло не так"),
                },
                tonOfVoiceTestId: "something-went-wrong",
              }),
              [n]
            ),
            s = (0, d.useMemo)(
              () => ({
                400: () => ({ errorTemplate: i, testId: o }),
                401: () => ({ errorTemplate: i, testId: o }),
                403: () => ({
                  errorTemplate: {
                    image: V,
                    message: n("Пожалуйста, попробуйте позже"),
                    title: n("Чат недоступен"),
                  },
                  testId: "client-banned-alert",
                }),
                404: () => ({ errorTemplate: i, testId: o }),
                408: () => ({ errorTemplate: i, testId: o }),
                409: () => ({ errorTemplate: i, testId: o }),
                410: () => ({ errorTemplate: i, testId: o }),
                429: () => ({ errorTemplate: i, testId: o }),
              }),
              [n, i, o]
            ),
            l = (0, d.useMemo)(() => {
              if (t !== z.i.Ready)
                return t === z.i.Error
                  ? {
                      color: "red",
                      message: n(
                        "Ошибка соединения. Попробуйте перезагрузить приложение или обратиться в поддержку."
                      ),
                    }
                  : t === z.i.Reconnecting
                  ? { color: "blue", message: n("Переподключение") + "..." }
                  : { color: "blue", message: n("Синхронизация") + "..." };
            }, [n, t]),
            c = (0, d.useMemo)(() => {
              if (r)
                return r >= 500
                  ? {
                      errorTemplate: {
                        image: U,
                        message: n(
                          "Мы уже решаем вопрос.\nСпасибо за ваше терпение!"
                        ),
                        title: n("Упс... Что-то сломалось"),
                      },
                      testId: "server-error-alert",
                    }
                  : s[r]();
            }, [n, r, s]);
          if (c) {
            let {
              errorTemplate: { image: e, message: t, title: r },
              testId: n,
            } = c;
            return (0, a.jsx)($, {
              alertMessage: (0, a.jsx)(O.oz, { children: t }),
              alertTitle: r,
              img: e,
              testerId: n,
            });
          }
          return l
            ? (0, a.jsx)(F.F, {
                color: l.color,
                icon: (0, a.jsx)(N.GBC, { size: 16 }),
                children: l.message,
              })
            : null;
        });
      q.displayName = "WidgetAppAlert";
      var X = r(78124),
        Y = r(11581);
      let J = (0, S.r)(() => ({
        root: {
          position: "absolute",
          borderRadius: "10px !important",
          overflow: "hidden",
        },
        overlay: { position: "absolute !important" },
        inner: { paddingLeft: 24, paddingRight: 24 },
        modal: { width: "100%", maxWidth: 300, borderRadius: 10 },
        close: { "&:focus": { outline: 0 }, "&:focus-visible": { outline: 0 } },
        header: { position: "absolute", right: 15, top: 10 },
      }));
      var Q = r(13445),
        Z = r(50433),
        K = r(13678),
        ee = r(29584),
        et = r(94408);
      let er = (0, S.r)((e, t) => {
          let { size: r = "default" } = t;
          return {
            root: {
              boxSizing: "border-box",
              display: "inline-block",
              margin: 0,
              padding: 0,
              color: e.colors.orange[3],
              fontVariant: "tabular-nums",
              fontFeatureSettings: "'tnum'",
              fontSize: 0,
              lineHeight: "unset",
              listStyle: "none",
              outline: "none",
              "&.rc-rate-disabled": {
                ".rc-rate-star": {
                  cursor: "default",
                  "> div:hover": { transform: "scale(1)" },
                },
              },
              ".rc-rate-star": {
                position: "relative",
                display: "inline-block",
                color: "inherit",
                cursor: "pointer",
                "&:not(:last-child)": {
                  marginRight: (() => {
                    switch (r) {
                      case "small":
                        return 4;
                      case "large":
                        return 10;
                      default:
                        return 8;
                    }
                  })(),
                },
                "> div": {
                  transition: "all 0.3s, outline 0s",
                  "&:hover": { transform: "scale(1.1)" },
                  "&:focus": { outline: 0 },
                  "&:focus-visible": {
                    outline: "1px dashed ".concat(e.colors.orange[3]),
                    transform: "scale(1.1)",
                  },
                },
              },
              ".rc-rate-star-first, .rc-rate-star-second": {
                color: e.colors.gray[3],
                transition: "all 0.3s",
                userSelect: "none",
                ".rcicon": { verticalAlign: "middle" },
              },
              ".rc-rate-star-first": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "100%",
                overflow: "hidden",
                opacity: 0,
              },
              ".rc-rate-star-half": {
                ".rc-rate-star-first, .rc-rate-star-second": { opacity: 1 },
              },
              ".rc-rate-star-half .rc-rate-star-first, .rc-rate-star-full .rc-rate-star-second":
                { color: "inherit" },
              ".rc-rate-text": {
                display: "inline-block",
                margin: (() => {
                  switch (r) {
                    case "small":
                      return "0 4px";
                    case "large":
                      return "0 10px";
                    default:
                      return "0 8px";
                  }
                })(),
                fontSize: 15,
              },
            },
          };
        }),
        ea = d.forwardRef((e, t) => {
          let {
              tooltips: r,
              character: n,
              size: i = "default",
              className: o,
              ...s
            } = e,
            l = (() => {
              switch (i) {
                case "small":
                  return 16;
                case "large":
                  return 30;
                default:
                  return 20;
              }
            })();
          n =
            n ||
            (0, a.jsx)(N.aGI, { style: { fill: "currentColor" }, size: l });
          let { classes: c, cx: d } = er({ size: i });
          return (0, a.jsx)(ee.A, {
            ...s,
            ref: t,
            className: d(c.root, o),
            character: n,
            characterRender: (e, t) => {
              let { index: n } = t;
              return r && void 0 !== n
                ? (0, a.jsx)(et.m, { label: r[n], withArrow: !0, children: e })
                : e;
            },
          });
        }),
        en = (0, S.r)((e) => ({
          form: { width: "100%" },
          mark: { color: e.colors.red[6], marginRight: 3 },
          rateBlock: { display: "block", paddingTop: 10 },
          errorsBlock: { color: e.colors.red[6], fontSize: 11 },
          requiredText: { marginTop: 15 },
        })),
        ei = (e) => {
          let { form: t } = e,
            [r] = (0, L.Bd)(),
            { classes: n } = en();
          return (0, a.jsx)("form", {
            className: n.form,
            ...M("feedback-form"),
            children: (0, a.jsxs)(Q.B, {
              spacing: 15,
              children: [
                (0, a.jsxs)(Z.a, {
                  children: [
                    (0, a.jsxs)(P.E, {
                      fz: "sm",
                      children: [
                        (0, a.jsx)("span", {
                          className: n.mark,
                          children: "*",
                        }),
                        r("Мы решили ваш вопрос?"),
                      ],
                    }),
                    (0, a.jsxs)(K.s.Group, {
                      ...t.getInputProps("resolved"),
                      children: [
                        (0, a.jsx)(K.s, {
                          label: r("Да"),
                          value: "true",
                          ...M("resolved-radio-button"),
                        }),
                        (0, a.jsx)(K.s, {
                          label: r("Нет"),
                          value: "false",
                          ...M("unresolved-radio-button"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(Z.a, {
                  children: [
                    (0, a.jsxs)(P.E, {
                      fz: "sm",
                      children: [
                        (0, a.jsx)("span", {
                          className: n.mark,
                          children: "*",
                        }),
                        r(
                          "Насколько вы удовлетворены работой консультантов нашей службы поддержки?"
                        ),
                      ],
                    }),
                    (0, a.jsx)(ea, {
                      ...t.getInputProps("rate"),
                      className: n.rateBlock,
                      size: "large",
                    }),
                    (0, a.jsx)(Z.a, {
                      className: n.errorsBlock,
                      mt: 5,
                      children: t.errors.rate,
                    }),
                  ],
                }),
                (0, a.jsxs)(P.E, {
                  fz: "xs",
                  className: n.requiredText,
                  children: [
                    (0, a.jsx)("span", { className: n.mark, children: "*" }),
                    r("обязательно к заполнению"),
                  ],
                }),
              ],
            }),
          });
        };
      var eo = r(16947),
        es = r(84335);
      let el = (0, S.r)(() => ({
          container: { textAlign: "center" },
          buttonGroup: { width: "80%" },
        })),
        ec = (e) => {
          let { onContinue: t, onLeave: r } = e,
            [n] = (0, L.Bd)(),
            { classes: i } = el();
          return (0, a.jsxs)(Q.B, {
            className: i.container,
            spacing: 15,
            children: [
              n("Вы действительно хотите закрыть форму?"),
              (0, a.jsxs)(eo.Y, {
                className: i.buttonGroup,
                m: "0 auto",
                spacing: 8,
                children: [
                  (0, a.jsx)(es.$, {
                    fullWidth: !0,
                    onClick: r,
                    type: "submit",
                    ...M("close-form-button"),
                    children: n("Да, закрыть"),
                  }),
                  (0, a.jsx)(es.$, {
                    fullWidth: !0,
                    onClick: t,
                    variant: "default",
                    ...M("return-to-form-button"),
                    children: n("Нет, продолжить"),
                  }),
                ],
              }),
            ],
          });
        },
        ed = (0, S.r)(() => ({ container: { textAlign: "center" } })),
        eu = () => {
          let [e] = (0, L.Bd)(),
            { classes: t } = ed();
          return (0, a.jsx)(Z.a, {
            className: t.container,
            m: "0 auto",
            children: e("Спасибо за оценку качества обслуживания"),
          });
        },
        em = (0, d.memo)((e) => {
          let { open: t, reset: r, submit: n } = e,
            [i] = (0, L.Bd)(),
            { classes: o } = J(),
            [s, l] = (0, d.useState)("form"),
            c = (0, d.useRef)(),
            u = (0, Y.m)({
              initialValues: { rate: 0, resolved: void 0 },
              validate: {
                rate: (e) => (e ? null : i("Оценка обязательна")),
                resolved: (e) => (e ? null : i("Выбор обязателен")),
              },
            }),
            m = (0, d.useCallback)(() => {
              r(), u.reset(), u.clearErrors(), l("form");
            }, [u, r]),
            p = (0, d.useCallback)(() => {
              "form" === s ? l("incomplete") : m();
            }, [s, m]),
            g = (0, d.useCallback)(() => l("form"), []),
            f = (0, d.useCallback)(
              () =>
                u.setFieldError(
                  "rate",
                  i("Не удалось отправить, попробуйте еще раз")
                ),
              [i, u]
            ),
            h = (0, d.useCallback)(() => {
              l("result"), (c.current = setTimeout(m, 3e3));
            }, [m]);
          return (
            (0, d.useEffect)(() => {
              u.values.rate > 0 &&
                u.values.resolved &&
                n({
                  onFailure: f,
                  onSuccess: h,
                  rate: u.values.rate,
                  resolved: "false" !== u.values.resolved,
                });
            }, [u.values.rate, u.values.resolved]),
            (0, d.useEffect)(
              () => () => {
                c.current && clearTimeout(c.current);
              },
              []
            ),
            (0, a.jsxs)(X.a, {
              centered: !0,
              classNames: o,
              onClose: p,
              opened: t,
              transition: "fade",
              transitionDuration: 0,
              withCloseButton: "incomplete" !== s,
              withinPortal: !1,
              children: [
                "form" === s && (0, a.jsx)(ei, { form: u }),
                "result" === s && (0, a.jsx)(eu, {}),
                "incomplete" === s &&
                  (0, a.jsx)(ec, { onContinue: g, onLeave: m }),
              ],
            })
          );
        });
      em.displayName = "FeedbackForm";
      var ep = r(58597);
      let eg = {
          src: "/_next/static/media/files-upload.cdddc3b1.svg",
          height: 113,
          width: 189,
          blurWidth: 0,
          blurHeight: 0,
        },
        ef = (0, S.r)((e, t) => ({
          dropzone: { height: "100%", outline: "none !important" },
          area: {
            backgroundColor: "rgba(16, 17, 19, 0.45)",
            borderRadius: 8,
            inset: 0,
            padding: t.inModal ? 0 : "50px 20px",
            position: "absolute",
            zIndex: 1,
          },
          container: {
            backgroundColor: "".concat(e.colors.gray[1]),
            borderRadius: 8,
            height: "100%",
            position: "relative",
            width: "100%",
          },
          content: {
            border: "1px dashed ".concat(e.colors.gray[5]),
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            fontSize: 16,
            gap: 16,
            height: "calc(100% - 40px)",
            justifyContent: "center",
            padding: 30,
            textAlign: "center",
            transform: "translate(20px, 20px)",
            width: "calc(100% - 40px)",
          },
        })),
        eh = (0, d.memo)((e) => {
          let {
              children: t,
              disabled: r,
              inModal: n,
              maxFiles: i,
              onDrop: o,
            } = e,
            [s] = (0, L.Bd)(),
            { classes: l } = ef({ inModal: n }),
            {
              getInputProps: c,
              getRootProps: d,
              isDragActive: u,
            } = (0, ep.VB)({
              disabled: r,
              maxFiles: i,
              multiple: i > 1,
              onDrop: o,
              noClick: !0,
            });
          return (0, a.jsxs)("div", {
            ...d({ className: l.dropzone }),
            children: [
              (0, a.jsx)("input", { ...c() }),
              t,
              u &&
                (0, a.jsx)("div", {
                  className: l.area,
                  children: (0, a.jsx)("div", {
                    className: l.container,
                    children: (0, a.jsxs)("div", {
                      className: l.content,
                      children: [
                        !n && (0, a.jsx)(W(), { alt: "", src: eg }),
                        (0, a.jsx)("span", {
                          children: s(
                            "Перетащите сюда файл(ы) для быстрой отправки"
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          });
        });
      eh.displayName = "WidgetMediaDropzone";
      var ex = r(66179),
        ev = r(43884);
      function eb(e) {
        let { interval: t, slowMode: r } = e,
          [, a] = (0, ev.A)({
            interval: t,
            leftTime: (0, d.useMemo)(() => {
              if (r.active) return r.getDiffMs(r.duration, r.activeSince);
            }, [r]),
          });
        return (0, d.useMemo)(() => {
          if (r.active)
            return {
              formatted: (function (e) {
                let { minutes: t, seconds: r } = e,
                  a = r + 1;
                return ""
                  .concat(t < 10 ? "0".concat(t) : "".concat(t), ":")
                  .concat(a < 10 ? "0".concat(a) : "".concat(a));
              })(a),
              minutes: a.minutes,
              seconds: a.seconds + 1,
              percentage:
                ((60 * a.minutes * 1e3 + 1e3 * a.seconds + a.milliseconds) /
                  (1e3 * r.duration)) *
                100,
            };
        }, [a, r]);
      }
      var ey = r(69344),
        ek = r(13692),
        ej = r(6242);
      let ew = { height: 147, width: 220 };
      function eC(e, t) {
        let r = document.createElement("a");
        r.setAttribute("href", e),
          r.setAttribute("download", t || "unknown"),
          r.setAttribute("target", "_blank"),
          r.click();
      }
      function eI(e) {
        var t;
        let r =
          null == (t = e.attributes)
            ? void 0
            : t.find((e) => "DocumentAttributeFileName" === e.$type);
        return (null == r ? void 0 : r.name) || "";
      }
      function eN(e) {
        return R.RJ.has(e.mimeType);
      }
      var eM = r(21681),
        eS = r(48855),
        eA = r(37593);
      let eR = new Map(),
        eT = { expiryIn: 0, uri: "" };
      function eE(e) {
        return {
          borderRadius: 6,
          color: e.colors.gray[1],
          cursor: "pointer",
          opacity: 0,
          position: "absolute",
          right: 0,
          top: 0,
        };
      }
      let ez = (0, S.r)((e) => ({
        root: {
          borderRadius: 6,
          height: "100%",
          overflow: "hidden",
          position: "relative",
          ".mantine-Image-root, .mantine-Image-figure, .mantine-Image-imageWrapper":
            { height: "100%", position: "relative", width: "100%" },
          img: {
            height: "100% !important",
            position: "absolute",
            width: "100%",
          },
          ":hover": { ".icon": { opacity: 1 } },
        },
        button: {
          alignItems: "center",
          display: "flex",
          height: 30,
          justifyContent: "center",
          padding: "0 5px",
          width: 30,
        },
        deleteButtonContainer: { ...eE(e), right: 4, top: 4 },
        downloadButtonContainer: {
          ...eE(e),
          right: "50%",
          top: "50%",
          transform: "translate(50%, -50%)",
        },
        refreshButtonContainer: {
          ...eE(e),
          right: "50%",
          top: "50%",
          transform: "translate(50%, -50%)",
        },
      }));
      var eB = r(4765),
        eD = r(75902);
      let e_ = (0, d.memo)((e) => {
        let { id: t, name: r, noActions: n, onDelete: i, src: o, type: s } = e,
          { classes: l, cx: c } = ez(),
          [u, m] = (0, ej.A)(!1),
          [p, g] = (0, ej.A)(!0),
          [f, h] = (0, d.useState)(0),
          [x, v] = (0, d.useState)(),
          b = (function (e) {
            let { id: t, src: r, type: a } = e,
              n = (0, eA.F)((0, eS.N)().api),
              [i, o] = (0, d.useState)(eT),
              s = (0, d.useRef)(null),
              l = (0, eM.A)(),
              c = (0, d.useCallback)(() => {
                s.current && (clearTimeout(s.current), (s.current = null));
              }, []),
              u = (0, d.useCallback)(
                async (e) => {
                  try {
                    return await n.current.getDownloadMediaLink(e);
                  } catch (e) {
                    return null;
                  }
                },
                [n]
              ),
              m = (0, d.useCallback)(
                async (e) => {
                  var t, r;
                  let a,
                    n = eR.get(e);
                  (a =
                    n &&
                    ((t = n.expiryIn), !D()(1e3 * t).isBefore(D()().valueOf()))
                      ? n
                      : await u(e)) &&
                    !l.current &&
                    (eR.set(e, a),
                    o(a),
                    (s.current = setTimeout(
                      () => m(e),
                      ((r = a.expiryIn), D()(1e3 * r).diff(D()(), "ms"))
                    )));
                },
                [u, l]
              );
            return ((0, d.useEffect)(
              () => ("external" === a && m(t), c),
              [c, t, m, a]
            ),
            "internal" === a)
              ? r
              : i.uri;
          })({ id: t, src: o, type: s }),
          y = (0, eD.A)((e) => e.country),
          k = (0, d.useCallback)(() => (null == i ? void 0 : i(t)), [t, i]),
          j = (0, d.useCallback)(() => eC(b, r), [r, b]),
          w = (0, d.useCallback)(async () => {
            try {
              f < 3
                ? setTimeout(() => {
                    h((e) => e + 1), v(Date.now()), g.setTrue();
                  }, 1500)
                : (m.setTrue(), g.setFalse());
            } catch (t) {
              let e = Error(
                JSON.stringify({
                  "image.src": b,
                  "page.url": window.location.href,
                  "user.agent": navigator.userAgent,
                  message: t.message,
                })
              );
              (e.name = "ImageLoadError"),
                eB.Cp(e, {
                  tags: {
                    error_type: "image_load_error",
                    image_src: b,
                    page_url: window.location.href,
                    user_agent: navigator.userAgent,
                    country: y,
                    status_img: t.status,
                  },
                });
            }
          }, [y, m, g, f, b]),
          C = (0, d.useCallback)(() => {
            m.setFalse(), g.setFalse();
          }, [m, g]),
          I = (0, d.useCallback)(() => {
            v(Date.now()), m.setFalse(), g.setTrue();
          }, [m, g]);
        return (0, a.jsxs)(Z.a, {
          className: l.root,
          children: [
            !!b &&
              (0, a.jsx)(
                ek._,
                {
                  alt: "media-image",
                  fit: "cover",
                  onError: w,
                  onLoad: C,
                  src: x ? "".concat(b, "?").concat(x) : b,
                },
                "".concat(t, "_").concat(f)
              ),
            !!i &&
              !u &&
              !p &&
              !n &&
              (0, a.jsx)("div", {
                className: c(l.deleteButtonContainer, "icon"),
                children: (0, a.jsx)(es.$, {
                  ...M("delete-media-".concat(t)),
                  className: l.button,
                  onClick: k,
                  children: (0, a.jsx)(N.Eau, { size: 18 }),
                }),
              }),
            !i &&
              !u &&
              !p &&
              !n &&
              (0, a.jsx)("div", {
                className: c(l.downloadButtonContainer, "icon"),
                children: (0, a.jsx)(es.$, {
                  ...M("".concat(t, "-image-download-button")),
                  className: l.button,
                  onClick: j,
                  children: (0, a.jsx)(N.i8u, {}),
                }),
              }),
            !i &&
              u &&
              !n &&
              (0, a.jsx)("div", {
                className: c(l.refreshButtonContainer, "icon"),
                children: (0, a.jsx)(es.$, {
                  ...M("refresh-media-".concat(t)),
                  className: l.button,
                  onClick: I,
                  children: (0, a.jsx)(N.H42, {}),
                }),
              }),
          ],
        });
      });
      e_.displayName = "MediaImage";
      let eF = (0, S.r)(() => ({
          container: { display: "flex", flexDirection: "column" },
          row: { display: "flex" },
          col: { position: "relative" },
        })),
        eO = {
          MAX_PHOTOS: 3,
          MIN_PHOTOS: 1,
          PADDING: 0,
          SINGLE_ROW_MAX_HEIGHT: 200,
          SPACING: 4,
          TARGET_ROW_HEIGHT: 100,
        },
        eL = (0, d.memo)((e) => {
          let {
              containerMaxWidth: t,
              items: r,
              onItemDelete: n,
              testIdPrefix: i,
            } = e,
            { classes: o } = eF(),
            s = (0, d.useMemo)(
              () =>
                Math.floor(
                  r.reduce(
                    (e, t) =>
                      e +
                      (t.width / t.height) * eO.SINGLE_ROW_MAX_HEIGHT -
                      2 * eO.PADDING,
                    eO.PADDING * r.length * 2 + eO.SPACING * (r.length - 1)
                  )
                ),
              [r]
            ),
            l = (0, d.useMemo)(
              () =>
                (0, ey.A)(
                  r,
                  eO.SPACING,
                  eO.PADDING,
                  Math.min(t, s),
                  eO.TARGET_ROW_HEIGHT,
                  eO.MIN_PHOTOS,
                  eO.MAX_PHOTOS
                ),
              [t, r, s]
            ),
            c = (0, d.useCallback)(
              (e) =>
                "photo" === e.variant
                  ? (0, a.jsx)(e_, {
                      id: e.id,
                      name: e.name,
                      onDelete: n,
                      src: e.src,
                      type: e.type,
                    })
                  : null,
              [n]
            );
          return r.length && l
            ? (0, a.jsx)("div", {
                className: o.container,
                style: { gap: eO.SPACING, width: l.containerWidth },
                ...M("".concat(i, "-media-gallery-view")),
                children: l.tracks.map((e, t) =>
                  (0, a.jsx)(
                    "div",
                    {
                      className: o.row,
                      style: { gap: eO.SPACING },
                      children: e.photos.map((e) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className: o.col,
                            style: {
                              aspectRatio: String(e.width / e.height),
                              width: "".concat(
                                (e.width / l.containerWidth) * 100,
                                "%"
                              ),
                            },
                            ...M(
                              ""
                                .concat(i, "-")
                                .concat(e.photo.id, "-media-gallery-view-item")
                            ),
                            children: c(e.photo),
                          },
                          e.photo.id
                        )
                      ),
                    },
                    t
                  )
                ),
              })
            : null;
        });
      eL.displayName = "WidgetMediaGalleryView";
      var eP = r(18255);
      let eH = (0, S.r)(() => ({
          list: {
            alignItems: "center",
            listStyleType: "none",
            width: "100%",
            ".mantine-List-root": { maxWidth: 300 },
            ".mantine-List-itemWrapper": { width: "100%" },
            ".list-view-item-container": { display: "flex" },
          },
        })),
        eW = (0, S.r)((e, t) => {
          let { threeColumned: r } = t;
          return {
            listItem: {
              alignItems: "center",
              display: "grid",
              gap: 8,
              gridTemplateColumns: "40px 1fr",
              width: "100%",
              ...(r && { gridTemplateColumns: "40px 1fr 32px" }),
            },
            listItemVariantImage: { "> div": { height: "100%" } },
            listItemVariantFile: {
              alignItems: "center",
              borderRadius: "50%",
              display: "flex",
              height: 40,
              justifyContent: "center",
              padding: 0,
              width: 40,
            },
            listItemInfo: { display: "grid" },
            listItemInfoRow: {
              fontSize: 12,
              lineHeight: "18px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
            },
            name: { fontSize: 14, lineHeight: "22px" },
            listItemAction: {
              margin: 0,
              button: { height: 32, padding: "0 5px", width: 32 },
            },
          };
        });
      var eG = r(2921),
        e$ = r.n(eG);
      let eV = (e) => {
          let { item: t, onDelete: r, testIdPrefix: n } = e,
            { api: i } = (0, eS.N)(),
            { classes: o, cx: s } = eW({ threeColumned: !!r }),
            l = (0, d.useCallback)(async () => {
              "external" === t.type
                ? eC((await i.getDownloadMediaLink(t.id)).uri, t.name)
                : eC(t.src, t.name);
            }, [i, t]);
          return (0, a.jsxs)("div", {
            className: s(o.listItem, "list-view-item"),
            ...M("".concat(n, "-").concat(t.id, "-media-list-view-item")),
            children: [
              "photo" === t.variant &&
                (0, a.jsx)("div", {
                  className: o.listItemVariantImage,
                  style: (function (e) {
                    return {
                      height: Math.max(
                        40,
                        Math.min(Math.round(40 / (e.width / e.height)), 100)
                      ),
                      width: 40,
                    };
                  })(t),
                  ...M(
                    ""
                      .concat(n, "-")
                      .concat(t.id, "-media-list-view-item-image")
                  ),
                  children: (0, a.jsx)(e_, {
                    id: t.id,
                    name: t.name,
                    src: t.src,
                    type: t.type,
                  }),
                }),
              "file" === t.variant &&
                (0, a.jsx)(es.$, {
                  className: s(
                    o.listItemVariantFile,
                    "media-list-item-variant-file"
                  ),
                  onClick: l,
                  ...M(
                    "".concat(n, "-").concat(t.id, "-media-list-view-item-file")
                  ),
                  children: (0, a.jsx)(N.g6N, {}),
                }),
              (0, a.jsxs)("div", {
                className: s(o.listItemInfo, "media-list-item-info"),
                children: [
                  (0, a.jsx)("div", {
                    className: s(o.listItemInfoRow, o.name),
                    children: (function () {
                      var e;
                      let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                      return t.length < 24
                        ? t
                        : ""
                            .concat(t.substring(0, 24), "...")
                            .concat(
                              null == (e = t.split(".")) ? void 0 : e.at(-1)
                            );
                    })(t.name || "-"),
                  }),
                  (0, a.jsx)("div", {
                    className: o.listItemInfoRow,
                    children: (function (e) {
                      var t;
                      return null != (t = e$()(e || 0, { unitSeparator: " " }))
                        ? t
                        : "";
                    })(t.size),
                  }),
                ],
              }),
              !!r &&
                (0, a.jsx)("div", {
                  className: o.listItemAction,
                  children: (0, a.jsx)(es.$, {
                    onClick: () => r(t.id),
                    size: "xs",
                    variant: "subtle",
                    children: (0, a.jsx)(N.Eau, { size: 20 }),
                  }),
                }),
            ],
          });
        },
        eU = (0, d.memo)((e) => {
          let { items: t, onItemDelete: r, testIdPrefix: n } = e,
            { classes: i, cx: o } = eH();
          return (0, a.jsx)(eP.B, {
            className: o(i.list, "list-view"),
            spacing: "sm",
            ...M("".concat(n, "-media-list-view")),
            children: t.map((e) =>
              (0, a.jsx)(
                eP.B.Item,
                {
                  className: "list-view-item-container",
                  children: (0, a.jsx)(eV, {
                    item: e,
                    onDelete: r,
                    testIdPrefix: n,
                  }),
                },
                e.id
              )
            ),
          });
        });
      function eq(e) {
        return eN(e)
          ? {
              ...(function (e) {
                var t;
                let r =
                  null == (t = e.attributes)
                    ? void 0
                    : t.find((e) => "DocumentAttributeImage" === e.$type);
                return r ? { height: r.height, width: r.width } : ew;
              })(e),
              id: e.id,
              name: eI(e),
              size: e.size,
              src:
                e.src ||
                (function (e) {
                  var t;
                  let r =
                    null == (t = e.thumbs)
                      ? void 0
                      : t.find((e) => "ImageStrippedSize" === e.$type);
                  return (
                    (null == r ? void 0 : r.bytes) &&
                    (function (e) {
                      let t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : "image/jpeg";
                      return ""
                        .concat(t ? "" : "data:".concat(r, ";base64,"))
                        .concat(e);
                    })(r.bytes)
                  );
                })(e) ||
                "",
              type: e.src ? "internal" : "external",
              variant: "photo",
            }
          : {
              height: 0,
              id: e.id,
              name: eI(e),
              size: e.size,
              src: e.src || "",
              type: e.src ? "internal" : "external",
              variant: "file",
              width: 0,
            };
      }
      eU.displayName = "MediaListView";
      var eX = r(83004);
      let eY = (0, eX.i7)({
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        }),
        eJ = (0, S.r)((e) => ({
          root: {
            display: "inline",
            maxHeight: "400px",
            overflowY: "auto",
            overflowX: "hidden",
            position: "relative",
          },
          ringProgress: {
            ".mantine-RingProgress-root, .mantine-rtl-RingProgress-root": {
              backgroundColor: e.colors.gray[9],
              left: "50%",
              position: "absolute",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            },
            ".mantine-RingProgress-root > svg, .mantine-rtl-RingProgress-root > svg":
              { animation: "".concat(eY, " 2s linear infinite") },
            ".mantine-ActionIcon-root, .mantine-rtl-ActionIcon-root": {
              color: e.white,
            },
          },
        }));
      var eQ = r(49914),
        eZ = r(58393);
      let eK = (0, eX.i7)({
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        }),
        e0 = (0, S.r)((e) => ({
          root: {
            background:
              "light" === e.colorScheme
                ? "rgba(0, 0, 0, .5)"
                : e.colors[e.primaryColor][6],
            borderRadius: "50%",
            "> svg": { animation: "".concat(eK, " 2s linear infinite") },
            "circle:first-of-type": { stroke: "transparent" },
          },
          icon: { color: e.white },
        })),
        e1 = (e) => {
          let { onIconClick: t, progress: r } = e,
            { classes: n } = e0();
          return (0, a.jsx)(eQ.W, {
            classNames: { root: n.root },
            roundCaps: !0,
            sections: [{ value: r, color: "white" }],
            size: 44,
            thickness: 2,
            label: (0, a.jsx)(eZ.o, {
              children: (0, a.jsx)(I.M, {
                className: n.icon,
                size: 28,
                onClick: t,
                variant: "transparent",
                children: (0, a.jsx)(N.MRt, {}),
              }),
            }),
          });
        },
        e2 = (0, d.memo)((e) => {
          let {
              containerMaxWidth: t,
              mediaDocuments: r = [],
              mediaUpload: n,
              onMediaDocumentDelete: i,
              testIdPrefix: o,
            } = e,
            { classes: s } = eJ(),
            l = (0, d.useMemo)(() => r.every(eN), [r]),
            c = (0, d.useMemo)(() => r.map(eq), [r]);
          return c.length
            ? (0, a.jsxs)("div", {
                className: s.root,
                children: [
                  l &&
                    (0, a.jsx)(eL, {
                      containerMaxWidth: t,
                      items: c,
                      onItemDelete: i,
                      testIdPrefix: o,
                    }),
                  !l &&
                    (0, a.jsx)(eU, {
                      items: c,
                      onItemDelete: i,
                      testIdPrefix: o,
                    }),
                  (null == n ? void 0 : n.progress) !== void 0 &&
                    (0, a.jsx)("div", {
                      className: s.ringProgress,
                      ...M("media-loader"),
                      children: (0, a.jsx)(e1, {
                        onIconClick: n.cancel,
                        progress: n.progress,
                      }),
                    }),
                ],
              })
            : null;
        });
      e2.displayName = "WidgetMedia";
      let e4 = (0, S.r)(() => ({
          root: { borderRadius: 10, overflow: "hidden", position: "absolute" },
          overlay: { inset: 25, position: "absolute" },
          modal: { borderRadius: 10, width: R.Jc.WIDTH },
        })),
        e5 = (0, S.r)((e) => ({
          root: {
            ".mantine-RingProgress-root, .mantine-rtl-RingProgress-root": {
              background:
                "dark" === e.colorScheme
                  ? e.colors[e.primaryColor][8]
                  : e.colors[e.primaryColor][6],
            },
            "circle:first-of-type": {
              stroke:
                "dark" === e.colorScheme
                  ? e.colors[e.primaryColor][8]
                  : e.colors[e.primaryColor][6],
            },
            ".mantine-ActionIcon-root, .mantine-rtl-ActionIcon-root": {
              color: e.white,
            },
          },
          submitButton: { pointerEvents: "auto !important" },
          textarea: { marginTop: 20 },
          tooltip: { textAlign: "center" },
        }));
      var e3 = r(90352),
        e6 = r(40113);
      function e7() {
        return { documents: [], files: new Map() };
      }
      async function e8(e) {
        let t = URL.createObjectURL(e),
          r = {
            $type: "MediaDocument",
            attributes: [{ $type: "DocumentAttributeFileName", name: e.name }],
            id: (0, e3.A)(),
            mimeType: e.type,
            size: e.size,
            src: t,
            thumbs: [],
          };
        if (R.RJ.has(e.type)) {
          let e = await (0, e6.N)(t);
          if (e) {
            var a;
            null == (a = r.attributes) ||
              a.push({
                $type: "DocumentAttributeImage",
                width: e.width,
                height: e.height,
              });
          }
        }
        return r;
      }
      let e9 = (0, d.memo)((e) => {
        let {
            blocked: t,
            comment: r,
            files: n,
            maxFiles: i,
            onCancel: o,
            onFilesChange: s,
            open: l,
            sendMessage: c,
            slowMode: u,
          } = e,
          [m] = (0, L.Bd)(),
          p = e4(),
          g = e5(),
          f = (0, d.useRef)(null),
          [h, x] = (0, d.useState)(""),
          [v, b] = (0, d.useState)(e7()),
          [y, k] = (0, d.useState)(""),
          j = eb({ interval: 1e3, slowMode: u }),
          w = (0, d.useCallback)(
            (e) => {
              let t = e.target.value;
              t.trim().length < R.N$.MAX
                ? x("")
                : x(
                    m("Описание должно быть не более {{max}} символов", {
                      max: R.N$.MAX,
                    })
                  ),
                k(t);
            },
            [m]
          ),
          C = (0, d.useCallback)((e) => s(n.concat(e)), [n, s]),
          I = (0, d.useCallback)(
            (e) => {
              s(
                Array.from(v.files.entries()).flatMap((t) => {
                  let [r, a] = t;
                  return r === e ? [] : [a];
                })
              );
            },
            [v.files, s]
          ),
          N = (0, d.useCallback)(
            (e) => {
              e.preventDefault(), h || c(y);
            },
            [h, c, y]
          );
        return (
          (0, d.useEffect)(() => {
            if (!n.length) return b(e7());
            !(async function () {
              b(
                (await Promise.all(n.map(e8))).reduce(
                  (e, t, r) => (
                    e.documents.push(t), e.files.set(t.id, n[r]), e
                  ),
                  e7()
                )
              );
            })();
          }, [n]),
          (0, d.useEffect)(() => {
            l ? k(r) : r && k("");
          }, [r, l]),
          (0, d.useEffect)(() => {
            l &&
              setTimeout(() => {
                var e, t;
                null == (e = f.current) || e.focus(),
                  null == (t = f.current) ||
                    t.setSelectionRange(r.length, r.length);
              }, 10);
          }, [l]),
          (0, a.jsx)(X.a, {
            centered: !0,
            classNames: p.classes,
            closeButtonLabel: m("Отменить"),
            onClose: o,
            opened: l,
            withCloseButton: !1,
            ...M("add-media-modal"),
            children: (0, a.jsx)(eh, {
              disabled: !1,
              inModal: !0,
              maxFiles: i,
              onDrop: C,
              children: (0, a.jsxs)("form", {
                className: g.classes.root,
                name: "add-media-modal-form",
                onSubmit: N,
                children: [
                  (0, a.jsx)(e2, {
                    containerMaxWidth: R.Jc.CONTENT_WIDTH,
                    mediaDocuments: v.documents,
                    onMediaDocumentDelete: I,
                    testIdPrefix: "add-media-modal",
                  }),
                  (0, a.jsx)(ex.T, {
                    autosize: !0,
                    className: g.classes.textarea,
                    error: h,
                    maxRows: 2,
                    minRows: 2,
                    onChange: w,
                    placeholder:
                      (null == j ? void 0 : j.formatted) || m("Описание"),
                    ref: f,
                    size: "sm",
                    value: y,
                    ...M("add-media-modal-message-textarea"),
                  }),
                  (0, a.jsxs)(eo.Y, {
                    position: "right",
                    mt: "xs",
                    children: [
                      (0, a.jsx)(es.$, {
                        loading: !1,
                        onClick: o,
                        size: "xs",
                        variant: "outline",
                        ...M("add-media-modal-cancel-button"),
                        children: m("Отменить"),
                      }),
                      (0, a.jsx)(et.m, {
                        className: g.classes.tooltip,
                        disabled: u.active,
                        label: m(
                          "Вы сможете отправить сообщение через {{time}}",
                          { time: null == j ? void 0 : j.formatted }
                        ),
                        multiline: !0,
                        withArrow: !0,
                        w: 170,
                        ...M("add-media-modal-slowmode-tooltip"),
                        children: (0, a.jsx)(es.$, {
                          className: g.classes.submitButton,
                          disabled: t || u.active,
                          size: "xs",
                          type: "submit",
                          ...M("add-media-modal-send-button"),
                          children: m("Отправить"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      });
      e9.displayName = "WidgetMediaModal";
      let te = {
          "&.enter": { opacity: 0 },
          "&.enter-active": { opacity: 1, transition: "opacity 200ms" },
          "&.exit": { opacity: 1 },
          "&.exit-active": { opacity: 0, transition: "opacity 200ms" },
        },
        tt = {
          "&.enter": { opacity: 0, transform: "scale(0.9)" },
          "&.enter-active": {
            opacity: 1,
            transform: "translateX(0)",
            transition: "opacity 200ms, transform 200ms",
          },
          "&.exit": { opacity: 1 },
          "&.exit-active": {
            opacity: 0,
            transform: "scale(0.9)",
            transition: "opacity 200ms, transform 200ms",
          },
        },
        tr = (0, S.r)((e, t) => {
          let { isMobile: r } = t;
          return {
            root: {
              backgroundColor:
                "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              maxHeight: r ? "100%" : R.P5,
              maxWidth: r ? "100%" : R.Uq,
              minHeight: 0,
              minWidth: 0,
              position: "relative",
              width: "100%",
              ...(r ? te : tt),
              ...(!r && {
                borderRadius: 10,
                boxShadow: "4px 0 24px rgba(0, 0, 0, .12)",
              }),
            },
            header: {
              borderBottom: "1px solid ".concat(
                "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
              ),
              flex: "none",
            },
            body: {
              display: "flex",
              flex: 1,
              flexDirection: "column",
              minHeight: 0,
            },
            footer: {
              borderTop: "1px solid ".concat(
                "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
              ),
              flex: "none",
            },
          };
        }),
        ta = (e) => {
          let { body: t, header: r, footer: n, isMobile: i } = e,
            { classes: o } = tr({ isMobile: i });
          return (0, a.jsxs)("div", {
            className: o.root,
            children: [
              (0, a.jsx)("div", { className: o.header, children: r }),
              (0, a.jsx)("div", { className: o.body, children: t }),
              !!n && (0, a.jsx)("div", { className: o.footer, children: n }),
            ],
          });
        };
      var tn = r(84206),
        ti = r(95816),
        to = r.n(ti),
        ts = r(7296),
        tl = r.n(ts);
      let tc = function (e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return tl()(
          e,
          (e, r) => {
            let a = r;
            return ("string" == typeof r && (a = r.trim()),
            ["string", "object", "array", "undefined", "null"].includes(
              typeof a
            ) &&
              t &&
              to()(a))
              ? ts.mapObjectSkip
              : [e, a];
          },
          { deep: !0 }
        );
      };
      var td = r(31278),
        tu = r(71943),
        tm = r(831),
        tp = r.n(tm),
        tg = r(82626),
        tf = r(60729);
      let th = (e) =>
        (0, tf.Ds)({
          styles: (e) => ({
            root: {
              backgroundColor: e.colors.red[0],
              "&::before": { backgroundColor: e.colors.red[5] },
              borderRadius: "8px",
              width: "350px",
              margin: "auto 10px 10px auto",
            },
            title: { color: e.colors.red },
            description: { color: e.colors.red[5] },
            closeButton: {
              color: e.colors.gray[6],
              "&:hover": { color: e.colors.gray[7] },
            },
          }),
          ...e,
        });
      var tx = r(42542);
      async function tv(e) {
        let { files: t, settings: r } = e,
          a = await Promise.allSettled([
            tb(t, r.maxFiles),
            ...t.map((e) => tk(e, r.restrictions)),
          ]),
          n = [],
          i = [];
        return (
          a.forEach((e) => {
            "fulfilled" === e.status && e.value
              ? i.push(e.value)
              : "rejected" === e.status && n.push(e.reason);
          }),
          n.length ? { errors: n } : { files: i }
        );
      }
      async function tb(e, t) {
        if (e.length > t)
          return Promise.reject({
            code: "too-many-files",
            details: { maxCount: t },
          });
      }
      let ty = {
        "application/rtf": {
          "application/msword": "application/rtf",
          "application/rtf": "application/rtf",
          "text/rtf": "application/rtf",
        },
        "application/vnd.ms-excel.sheet.macroEnabled.12": {
          "application/vnd.ms-excel.sheet.macroEnabled.12":
            "application/vnd.ms-excel.sheet.macroenabled.12",
          "application/vnd.ms-excel.sheet.macroenabled.12":
            "application/vnd.ms-excel.sheet.macroenabled.12",
        },
        "application/xml": { "image/svg+xml": "image/svg+xml" },
        "application/x-7z-compressed": {
          "application/octet-stream": "application/x-7z-compressed",
          "application/x-7z-compressed": "application/x-7z-compressed",
          "application/x-compressed": "application/x-7z-compressed",
        },
        "application/x-rar-compressed": {
          "application/octet-stream": "application/x-rar-compressed",
          "application/vnd.rar": "application/x-rar-compressed",
          "application/x-compressed": "application/x-rar-compressed",
          "application/x-rar-compressed": "application/x-rar-compressed",
        },
        "application/zip": {
          "application/octet-stream": "application/zip",
          "application/vnd.android.package-archive":
            "application/vnd.android.package-archive",
          "application/x-zip-compressed": "application/zip",
          "application/zip": "application/zip",
        },
        "image/gif": {
          "image/gif": "image/gif",
          "image/jpeg": "image/gif",
          "image/png": "image/gif",
        },
        "image/jpeg": {
          "image/gif": "image/jpeg",
          "image/jpeg": "image/jpeg",
          "image/png": "image/jpeg",
        },
        "image/png": {
          "image/gif": "image/png",
          "image/jpeg": "image/png",
          "image/png": "image/png",
        },
        "image/heif": {
          "image/heic": "image/heic",
          "image/heif": "image/heic",
          "image/png": "image/heic",
        },
        "video/vnd.avi": { "video/avi": "video/avi" },
        "video/x-ms-asf": {
          "video/x-ms-asf": "video/x-ms-wmv",
          "video/x-ms-wmv": "video/x-ms-wmv",
        },
      };
      async function tk(e, t) {
        var r;
        let a = e.stream(),
          n =
            (await (0, tx.Tm)(a)) ||
            ("text/plain" === (r = e).type
              ? { ext: "txt", mime: "text/plain" }
              : "image/svg+xml" === r.type
              ? { ext: "svg", mime: "image/svg+xml" }
              : "application/pdf" === r.type
              ? { ext: "pdf", mime: "application/pdf" }
              : void 0);
        if (!n)
          return Promise.reject({
            code: "invalid-file-format",
            details: { fileType: e.type },
          });
        let i = n.mime,
          o = (function (e) {
            var t;
            if (e.type) return e.type;
            switch (
              null == (t = e.name.split(".").pop()) ? void 0 : t.toLowerCase()
            ) {
              case "7z":
                return "application/x-7z-compressed";
              case "rar":
                return "application/x-rar-compressed";
              case "xlsm":
                return "application/vnd.ms-excel.sheet.macroEnabled.12";
              case "heic":
                return "image/heic";
              default:
                return "application/octet-stream";
            }
          })(e),
          s = i,
          l = ty[i];
        if (null == l ? void 0 : l[o]) s = l[o];
        else if (i !== o)
          return Promise.reject({ code: "invalid-file-contents" });
        let c = t.find((e) => {
          let { contentType: t } = e;
          return t === s;
        });
        return c
          ? e.size > c.lengthLimit
            ? Promise.reject({
                code: "file-too-large",
                details: { fileType: c.contentType, maxSize: c.lengthLimit },
              })
            : new File([e], e.name, { type: s })
          : Promise.reject({
              code: "invalid-file-format",
              details: { fileType: s },
            });
      }
      let tj = { comment: "", files: [] };
      var tw = r(925),
        tC = r.n(tw);
      function tI() {
        return {
          $type: "ChatParticipantMessage",
          createdAt: 0,
          deleted: !0,
          fromId: "",
          id: Math.random(),
        };
      }
      function tN() {
        return { listeners: new Set(), message: void 0 };
      }
      async function tM(e) {
        let t = Number(await e.get(R.Zv.messageSoundActive));
        return isNaN(t) || ![0, 1].includes(t) ? null : t;
      }
      async function tS(e, t) {
        await e.set(R.Zv.messageSoundActive, String(t), R.Es);
      }
      var tA = r(69943),
        tR = r(63887);
      let tT = (0, S.r)(() => ({
          container: {
            alignItems: "center",
            boxSizing: "content-box",
            display: "flex",
            flexDirection: "column",
            minHeight: 46,
            position: "relative",
          },
          column: { flex: "none" },
          columnComment: { flex: "auto" },
          grid: {
            alignItems: "center",
            margin: 0,
            padding: "4px 12px",
            width: "100%",
          },
        })),
        tE = (0, S.r)((e, t) => ({
          fileButton: {
            cursor: t ? "not-allowed" : "pointer",
            ".icon.icon-tabler-paperclip": {
              transform: "scale(".concat("rtl" === e.dir ? "-1" : "1", ", 1)"),
            },
            "&:hover": { color: e.colors.gray[7] },
          },
        })),
        tz = (0, S.r)(() => ({
          wrapper: {
            "textarea.mantine-Input-input": {
              fontSize: "16px",
              lineHeight: "24px",
            },
          },
        })),
        tB = (0, S.r)((e) => ({
          emojiButton: {
            ".icon": { stroke: "currentColor" },
            "&:disabled": { color: e.colors.gray[6], cursor: "not-allowed" },
            "&:hover": { color: e.colors.gray[7] },
          },
          emojiPicker: {
            bottom: 72,
            left: 24,
            position: "absolute",
            zIndex: 3,
            "em-emoji-picker": { maxHeight: 350 },
          },
        })),
        tD = (0, S.r)((e, t) => {
          let { inSlowMode: r } = t;
          return {
            sendButton: {
              backgroundColor:
                "dark" === e.colorScheme
                  ? e.colors[e.primaryColor][8]
                  : e.colors[e.primaryColor][6],
              "&:hover": {
                backgroundColor:
                  "dark" === e.colorScheme
                    ? e.colors[e.primaryColor][8]
                    : e.colors[e.primaryColor][7],
              },
              ".icon.icon-tabler-send": {
                marginRight: 3,
                transform: "rotateZ(".concat(
                  "rtl" === e.dir ? "220deg" : "40deg",
                  ")"
                ),
              },
            },
            slowModeCircle: { "> svg": { display: r ? "inherit" : "none" } },
            tooltip: { textAlign: "center" },
          };
        }),
        t_ = (0, S.r)((e) => ({
          invokeButton: {
            width: "100%",
            button: {
              border: "none",
              borderTop: "1px solid ".concat(
                "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
              ),
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            },
          },
        })),
        tF = (0, d.forwardRef)((e, t) => {
          let {
              blocked: r,
              changeComment: n,
              sendMessage: i,
              slowMode: o,
              value: s,
            } = e,
            [l] = (0, L.Bd)(),
            c = (0, d.useRef)(null),
            { classes: u } = tz(),
            m = eb({ interval: 1e3, slowMode: o }),
            p = (0, d.useCallback)(
              (e) => {
                n(e.target.value.replace(/[\u202A-\u202E\u2066-\u2069]/g, ""));
              },
              [n]
            ),
            g = (0, d.useCallback)(
              (e) => {
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), i());
              },
              [i]
            ),
            f = (0, d.useMemo)(
              () =>
                (null == m ? void 0 : m.formatted) ||
                l("Напишите сообщение") + "...",
              [l, null == m ? void 0 : m.formatted]
            );
          return (
            (0, d.useImperativeHandle)(
              t,
              () => ({
                blur: () => {
                  var e;
                  return null == (e = c.current) ? void 0 : e.blur();
                },
                focus: () => {
                  var e;
                  return null == (e = c.current) ? void 0 : e.focus();
                },
                getSelectionRange: () => {
                  var e, t, r, a;
                  return [
                    null !=
                    (r = null == (e = c.current) ? void 0 : e.selectionStart)
                      ? r
                      : 0,
                    null !=
                    (a = null == (t = c.current) ? void 0 : t.selectionEnd)
                      ? a
                      : 0,
                  ];
                },
              }),
              []
            ),
            (0, a.jsx)(ex.T, {
              autoFocus: !0,
              autosize: !0,
              classNames: { wrapper: u.wrapper },
              disabled: r,
              maxRows: 4,
              onChange: p,
              onKeyDown: g,
              placeholder: f,
              ref: c,
              size: "md",
              value: s,
              variant: "unstyled",
              ...M("write-message-textarea", !0),
            })
          );
        });
      tF.displayName = "WidgetFooterComment";
      var tO = r(99351),
        tL = r(46978),
        tP = r(61946);
      let tH = [
          "people",
          "nature",
          "foods",
          "activity",
          "places",
          "objects",
          "symbols",
        ],
        tW = (e) => {
          let { blocked: t, changeComment: r, comment: n, commentRef: i } = e,
            { classes: o } = tB(),
            [s, l] = (0, ej.A)(!1),
            c = (0, d.useRef)(null),
            u = (0, tP.xd)(),
            m = (0, d.useCallback)(
              (e) => {
                var t;
                (null == (t = c.current) ? void 0 : t.contains(e.target)) ||
                  l.setFalse();
              },
              [l]
            ),
            p = (0, d.useCallback)(
              (e) => {
                let t = e.native,
                  [a, o] = (null == i ? void 0 : i.getSelectionRange()) || [
                    0, 0,
                  ];
                r([n.slice(0, a), t, n.slice(o)].join("")),
                  requestAnimationFrame(() => {
                    null == i || i.focus(),
                      document.execCommand("insertText", !1, t);
                  });
              },
              [r, n, i]
            );
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(I.M, {
                className: o.emojiButton,
                disabled: t,
                ref: c,
                size: 24,
                variant: "transparent",
                children: (0, a.jsx)(N.N0L, {
                  name: "emoji-button",
                  onClick: l.toggle,
                }),
              }),
              s &&
                (0, a.jsx)("div", {
                  className: o.emojiPicker,
                  children: (0, a.jsx)(tL.A, {
                    autoFocus: !0,
                    categories: tH,
                    data: tO,
                    locale:
                      null === L.Ru || void 0 === L.Ru ? void 0 : L.Ru.language,
                    onClickOutside: m,
                    onEmojiSelect: p,
                    set: "emojione",
                    skinTonePosition: "search",
                    theme: u.colorScheme,
                  }),
                }),
            ],
          });
        };
      var tG = r(42035),
        t$ = r(88196);
      let tV = (e) => {
          let { blocked: t, maxFiles: r, onFilesChange: n } = e,
            { classes: i } = tE(t),
            o = (0, d.useRef)(null),
            s = t$.A.getState()
              .configuration.uploadMediaRestrictions.map((e) => e.contentType)
              .join(","),
            l = (0, d.useCallback)(
              (e) => {
                var t;
                n(e), null == (t = o.current) || t.call(o);
              },
              [n]
            );
          return (0, a.jsx)(tG.H, {
            disabled: t,
            multiple: r > 1,
            onChange: l,
            resetRef: o,
            accept: s,
            children: (e) =>
              (0, a.jsx)(I.M, {
                ...e,
                className: i.fileButton,
                size: 22,
                variant: "transparent",
                ...M("upload-button"),
                children: (0, a.jsx)(N.ETA, {}),
              }),
          });
        },
        tU = (e) => {
          let { onClick: t, show: r } = e,
            [n] = (0, L.Bd)(),
            { classes: i } = t_();
          return r
            ? (0, a.jsx)("div", {
                className: i.invokeButton,
                children: (0, a.jsx)(es.$, {
                  fullWidth: !0,
                  onClick: t,
                  size: "xs",
                  variant: "default",
                  ...M("invoke-operator-button"),
                  children: n("Позвать оператора"),
                }),
              })
            : null;
        },
        tq = (e) => {
          let { blocked: t, commentRef: r, sendMessage: n, slowMode: i } = e,
            [o] = (0, L.Bd)(),
            { classes: s } = tD({ inSlowMode: i.active }),
            l = (0, tP.xd)(),
            c = eb({ interval: 16, slowMode: i }),
            u = (0, d.useMemo)(() => {
              if (c)
                return o("Вы сможете отправить сообщение через {{time}}", {
                  time: c.formatted,
                });
            }, [o, c]),
            m = (0, d.useMemo)(
              () =>
                c
                  ? [
                      {
                        color: l.colors.primary[9] || "green",
                        value: c.percentage,
                      },
                    ]
                  : [],
              [c, l.colors.primary]
            ),
            p = (0, d.useCallback)(() => {
              n(), null == r || r.focus();
            }, [r, n]);
          return (0, a.jsx)(et.m, {
            className: s.tooltip,
            disabled: !i.active,
            label: u,
            multiline: !0,
            w: 170,
            withArrow: !0,
            ...M("send-button-slowmode-tooltip"),
            children: (0, a.jsx)(eQ.W, {
              className: s.slowModeCircle,
              label: (0, a.jsx)(eZ.o, {
                children: (0, a.jsx)(I.M, {
                  className: s.sendButton,
                  disabled: t || i.active,
                  onClick: p,
                  size: 32,
                  radius: "xl",
                  variant: "filled",
                  ...M("send-button", !0),
                  children: (0, a.jsx)(N.mDt, { size: 20 }),
                }),
              }),
              roundCaps: !0,
              sections: m,
              size: 46,
              thickness: 2,
              ...M("send-button-slowmode-loader"),
            }),
          });
        },
        tX = (0, d.memo)((e) => {
          let { invoke: t, messageCreation: r, slowMode: n } = e,
            { classes: i } = tT(),
            o = (0, d.useRef)(null);
          return (0, a.jsxs)("div", {
            className: i.container,
            children: [
              (0, a.jsxs)(tA.x, {
                align: "flex-end",
                className: i.grid,
                gutter: 8,
                children: [
                  (0, a.jsx)(tR.f, {
                    className: i.column,
                    children: (0, a.jsx)(tV, {
                      blocked: r.blocked,
                      maxFiles: r.maxFiles,
                      onFilesChange: r.onFilesChange,
                    }),
                  }),
                  (0, a.jsx)(tR.f, {
                    className: i.columnComment,
                    children: (0, a.jsx)(tF, {
                      blocked: r.blocked,
                      changeComment: r.onCommentChange,
                      ref: o,
                      sendMessage: r.sendMessage,
                      slowMode: n,
                      value: r.message.comment,
                    }),
                  }),
                  (0, a.jsx)(tR.f, {
                    className: i.column,
                    children: (0, a.jsx)(tW, {
                      blocked: r.blocked,
                      changeComment: r.onCommentChange,
                      comment: r.message.comment,
                      commentRef: o.current,
                    }),
                  }),
                  (0, a.jsx)(tR.f, {
                    className: i.column,
                    children: (0, a.jsx)(tq, {
                      blocked: r.blocked,
                      commentRef: o.current,
                      sendMessage: r.sendMessage,
                      slowMode: n,
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(tU, { onClick: t.invoke, show: t.allowed }),
            ],
          });
        });
      tX.displayName = "WidgetFooter";
      var tY = r(88728),
        tJ = r(24890),
        tQ = r.n(tJ);
      let tZ = [
          "red",
          "pink",
          "grape",
          "violet",
          "indigo",
          "blue",
          "cyan",
          "green",
          "lime",
          "yellow",
          "orange",
          "teal",
        ],
        tK = (0, S.r)(() => ({
          root: {
            ".mantine-Avatar-placeholder, .mantine-rtl-Avatar-placeholder": {
              fontWeight: 500,
            },
          },
        })),
        t0 = (e) => {
          let { testIdPrefix: t, user: r } = e,
            { classes: n } = tK(),
            i = (0, d.useMemo)(() => {
              if (r.id) {
                let e = Math.abs(tQ()(r.id).int32()) % tZ.length;
                return tZ[e];
              }
            }, [r.id]);
          return "Client" === r.$type
            ? null
            : "OperatorBot" === r.$type
            ? (0, a.jsx)(tY.e, {
                className: n.root,
                color: i,
                radius: "xl",
                size: 42,
                ...M("".concat(t, "-").concat(r.id, "-bot-avatar")),
                children: (0, a.jsx)(N.OW7, { size: 24 }),
              })
            : r.avatarLink
            ? (0, a.jsx)(tY.e, {
                className: n.root,
                radius: "xl",
                size: 42,
                src: r.avatarLink,
                ...M("".concat(t, "-").concat(r.id, "-image-avatar")),
              })
            : (0, a.jsx)(tY.e, {
                className: n.root,
                color: i,
                radius: "xl",
                size: 42,
                ...M("".concat(t, "-").concat(r.id, "-text-avatar")),
                children: r.name.slice(0, 2).toLocaleUpperCase(),
              });
        },
        t1 = (0, S.r)((e) => ({
          header: {
            alignItems: "center",
            display: "flex",
            gap: e.spacing.md,
            padding: e.spacing.lg,
          },
          avatar: { flex: "none" },
          info: { display: "flex", flex: 1, flexDirection: "column" },
          actions: { display: "flex", flex: "none", gap: e.spacing.md },
        })),
        t2 = (0, S.r)((e) => ({
          button: {
            color:
              "dark" === e.colorScheme ? e.colors.dark[1] : e.colors.gray[7],
            "&:hover": {
              color:
                "dark" === e.colorScheme ? e.colors.dark[0] : e.colors.gray[7],
            },
          },
          volume: { stroke: e.colors[e.primaryColor][9] },
        })),
        t4 = (e) => {
          let { close: t, sound: r } = e,
            [n] = (0, L.Bd)(),
            { classes: i } = t2();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(et.m, {
                label: n("Звуковые уведомления"),
                withArrow: !0,
                children: (0, a.jsx)(I.M, {
                  className: i.button,
                  size: 26,
                  variant: "transparent",
                  ...M("sound-button"),
                  children: r.enabled
                    ? (0, a.jsx)(N.C3L, {
                        className: i.volume,
                        onClick: r.toggle,
                      })
                    : (0, a.jsx)(N.XIB, { onClick: r.toggle }),
                }),
              }),
              (0, a.jsx)(I.M, {
                className: i.button,
                onClick: t,
                size: 26,
                variant: "transparent",
                ...M("close-widget-button"),
                children: (0, a.jsx)(N.MRt, {}),
              }),
            ],
          });
        },
        t5 = (0, eX.i7)({
          "0%, 80%, 100%": {
            boxShadow: "0 ".concat(5, "px 0 -0.7px"),
            opacity: 0.9,
          },
          "40%": { boxShadow: "0 ".concat(5, "px 0 0"), opacity: 1 },
        }),
        t3 = (0, S.r)((e, t) => ({
          root: {
            display: "flex",
            alignItems: "center",
            gap: 7,
            ".loader, .loader:before, .loader:after": {
              display: "inline-flex",
              width: 5,
              height: 5,
              borderRadius: "50%",
              animation: "".concat(t5, " 0.8s infinite ease-in-out"),
              animationFillMode: "both",
            },
            ".loader": {
              position: "relative",
              transform: "translateY(-".concat(5, "px)"),
              marginLeft: 7,
              marginRight: 7,
              "&:before, &:after": {
                content: '""',
                position: "absolute",
                top: 0,
              },
              "&:before": { left: -7, animationDelay: "-0.18s" },
              "&:after": { left: 7, animationDelay: "0.18s" },
            },
          },
        })),
        t6 = (e) => {
          let { data: t, ...r } = e,
            [n] = (0, L.Bd)(),
            { classes: i } = t3(),
            o = (0, u.G)((e) => e.users.byId),
            s = null == o ? void 0 : o[t.fromId],
            l = "Unknown";
          switch (null == s ? void 0 : s.$type) {
            case "Client":
              l = n("Клиент №{{n}}", { n: s.publicId });
              break;
            case "OperatorBot":
              l = n("Ассистент");
              break;
            case "Operator":
              var c;
              s.id !==
                (null == (c = t$.A.getState().currentUser.entity)
                  ? void 0
                  : c.id) && (l = s.name);
          }
          return (0, a.jsxs)("div", {
            className: i.root,
            children: [
              (0, a.jsx)("span", { className: "loader" }),
              " ",
              n("{{user}} печатает", { user: l }),
            ],
          });
        },
        t7 = (e) => {
          let { name: t, typingStatus: r } = e,
            [n] = (0, L.Bd)();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(P.E, {
                size: "sm",
                weight: 500,
                ...M("operator-name"),
                children: t,
              }),
              !!r &&
                (0, a.jsx)(P.E, {
                  size: "xs",
                  children: (0, a.jsx)(t6, { data: r }),
                }),
              !r &&
                (0, a.jsx)(P.E, {
                  color: "dimmed",
                  size: "xs",
                  children: n("Оператор").toLocaleLowerCase(),
                }),
            ],
          });
        },
        t8 = (0, d.memo)((e) => {
          let { close: t, operator: r, sound: n, typingStatus: i } = e,
            [o] = (0, L.Bd)(),
            { classes: s } = t1();
          return (0, a.jsxs)("div", {
            className: s.header,
            children: [
              !r &&
                (0, a.jsx)("div", {
                  className: s.info,
                  children: o("Чат с поддержкой"),
                }),
              !!r &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: s.avatar,
                      children: (0, a.jsx)(t0, {
                        testIdPrefix: "header",
                        user: r,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: s.info,
                      children: (0, a.jsx)(t7, {
                        name: r.name,
                        typingStatus: i,
                      }),
                    }),
                  ],
                }),
              (0, a.jsx)("div", {
                className: s.actions,
                children: (0, a.jsx)(t4, { close: t, sound: n }),
              }),
            ],
          });
        });
      t8.displayName = "WidgetHeader";
      var t9 = r(56266),
        re = r(31008),
        rt = r(26993);
      let rr = (0, S.r)((e) => {
          let t = "dark" === e.colorScheme ? e.colors.gray[8] : e.white,
            r = "dark" === e.colorScheme ? e.colors.gray[7] : e.colors.gray[0],
            a = "dark" === e.colorScheme ? e.colors.gray[7] : e.colors.gray[6],
            n = "dark" === e.colorScheme ? e.colors.gray[4] : e.colors.gray[7];
          return {
            container: {
              bottom: 10,
              height: 36,
              position: "absolute",
              right: 20,
              width: 36,
            },
            content: {
              position: "relative",
              button: {
                backgroundColor: t,
                borderRadius: "50%",
                boxShadow: "0 2px 3px ".concat(a),
                color: n,
                height: 36,
                width: 36,
                "&:before": { borderRadius: "50% !important" },
                "&:hover": { backgroundColor: r },
              },
            },
            loader: {
              position: "absolute",
              transform: "translate(-2.5px, -2.5px)",
            },
          };
        }),
        ra = (0, d.forwardRef)((e, t) => {
          let { onClick: r } = e,
            [n, i] = (0, d.useState)(!1),
            [o, s] = (0, d.useState)(!1),
            [l, c] = (0, d.useState)(0),
            { classes: u } = rr();
          return (
            (0, d.useImperativeHandle)(
              t,
              () => ({ setLoading: i, setShow: s, setUnreadCount: c }),
              []
            ),
            (0, a.jsx)(rt.e, {
              mounted: o,
              transition: "fade",
              children: (e) =>
                (0, a.jsx)("div", {
                  className: u.container,
                  style: e,
                  children: (0, a.jsx)("div", {
                    className: u.content,
                    children: (0, a.jsxs)(C.C, {
                      disabled: !l,
                      inline: !0,
                      label: l,
                      overflowCount: 99,
                      size: 22,
                      style: { transform: "translateX(-4px)" },
                      children: [
                        n &&
                          (0, a.jsx)(t9.a, { className: u.loader, size: 42 }),
                        (0, a.jsx)(I.M, {
                          disabled: n,
                          onClick: r,
                          ...M("go-to-the-end-button"),
                          children: (0, a.jsx)(N.RGe, {}),
                        }),
                      ],
                    }),
                  }),
                }),
            })
          );
        });
      ra.displayName = "BackToBottom";
      var rn = r(9329);
      function ri() {
        let e = (0, rn._)([
          "\n    from {\n        background-color: unset;\n    }\n    25% {\n        background-color: rgba(37, 140, 96, 0.2);\n    }\n    75% {\n        background-color: rgba(37, 140, 96, 0.2);\n    }\n    to {\n        background-color: unset;\n    }\n",
        ]);
        return (
          (ri = function () {
            return e;
          }),
          e
        );
      }
      function ro() {
        let e = (0, rn._)([
          "\n    from {\n        background-color: unset;\n    }\n    12.5% {\n        background-color: rgba(37, 140, 96, 0.2);\n    }\n    87.5% {\n        background-color: rgba(37, 140, 96, 0.2);\n    }\n    to {\n        background-color: unset;\n    }\n",
        ]);
        return (
          (ro = function () {
            return e;
          }),
          e
        );
      }
      function rs() {
        let e = (0, rn._)([
          "\n        from,\n        15% {\n            background-color: unset;\n        }\n        30%,\n        70% {\n            background-color: ",
          ";\n        }\n        85%,\n        to {\n            background-color: unset;\n        }\n    ",
        ]);
        return (
          (rs = function () {
            return e;
          }),
          e
        );
      }
      let rl = (0, S.r)((e) => ({
          wrapper: { height: "100%", position: "relative", width: "100%" },
          loader: {
            alignItems: "center",
            backgroundColor:
              "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
            display: "flex",
            inset: 0,
            justifyContent: "center",
            position: "absolute",
            zIndex: 2,
          },
        })),
        rc = (0, S.r)(() => ({
          chat: {
            boxSizing: "border-box",
            height: "100%",
            overflowY: "auto",
            position: "relative",
          },
        })),
        rd = { CLASSNAME: "basic-highlight", DURATION: 1500 },
        ru = (0, eX.i7)(ri()),
        rm = {
          CLASSNAME: "extended-highlight",
          DURATION: 3e3,
          QUOTE_CLASSNAME: "extended-highlight-quote",
        },
        rp = (0, eX.i7)(ro()),
        rg = (0, S.r)((e, t) => {
          let { operator: r } = t;
          return {
            root: {
              ["&.".concat(rd.CLASSNAME)]: {
                animationDuration: "".concat(rd.DURATION, "ms"),
                animationName: "".concat(ru),
              },
              ["&.".concat(rm.CLASSNAME)]: {
                animationDuration: "".concat(rm.DURATION, "ms"),
                animationName: "".concat(rp),
              },
              [".".concat(rm.QUOTE_CLASSNAME)]: {
                animationDuration: "".concat(rm.DURATION, "ms"),
                animationName: "".concat(
                  (0, eX.i7)(
                    rs(),
                    r ? "rgba(255, 255, 255, 0.3)" : "rgba(37, 140, 96, 0.45)"
                  )
                ),
              },
            },
          };
        });
      function rf(e) {
        return D().unix(e.createdAt).format("DD MMMM");
      }
      let rh = (0, S.r)((e, t) => ({
          root: {
            display: "flex",
            fontSize: e.fontSizes.sm,
            justifyContent: "center",
            lineHeight: "20px",
            height: "30px",
            margin: "0 auto 10px",
            maxWidth: "calc(100% - 40px)",
            padding: "4px 10px",
            position: "relative",
            textAlign: "center",
            whiteSpace: "pre-wrap",
            width: "100%",
            wordBreak: "break-word",
            ...(t.block && { display: "block" }),
            ...("filled" === t.view && {
              background:
                "dark" === e.colorScheme ? e.colors.dark[5] : e.colors.gray[2],
              borderRadius: "0.875rem",
              color: e.colors.green,
            }),
          },
        })),
        rx = (0, d.memo)((e) => {
          let [t] = (0, L.Bd)(),
            r = (0, d.useMemo)(
              () =>
                "message" in e
                  ? "Date" === e.message.type
                    ? { block: !1, text: rf(e.message), viewType: "base" }
                    : {
                        block: !0,
                        text: t("Непрочитанные сообщения"),
                        viewType: "filled",
                      }
                  : e,
              [t, e]
            ),
            { classes: n } = rh({ block: r.block, view: r.viewType });
          return (0, a.jsx)("div", {
            className: n.root,
            suppressHydrationWarning: !0,
            children: r.text,
          });
        });
      rx.displayName = "WidgetClientMessage";
      let rv = {
          MAX_WIDTH: 320,
          AVATAR_WIDTH: 42,
          AVATAR_AND_CONTENT_GAP: 10,
          PADDING_X: 6,
          PADDING_Y: 6,
        },
        rb = {
          CLIENT: rv.MAX_WIDTH - 2 * rv.PADDING_X,
          OPERATOR:
            rv.MAX_WIDTH -
            rv.AVATAR_WIDTH -
            rv.AVATAR_AND_CONTENT_GAP -
            2 * rv.PADDING_X,
        },
        ry = (0, S.r)((e, t) => ({
          container: {
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            marginBottom: 2,
            maxWidth: "calc(100% - 40px)",
            position: "relative",
            width: "100%",
            ...(t.isLastInGroup && { marginBottom: 10 }),
          },
          content: {
            alignItems: "flex-end",
            display: "flex",
            gap: rv.AVATAR_AND_CONTENT_GAP,
            maxWidth: rv.MAX_WIDTH,
            ...(t.isMe && { alignSelf: "flex-end", flexFlow: "row-reverse" }),
          },
          messageBlock: {
            display: "flex",
            flexDirection: "column",
            minWidth: 70,
            position: "relative",
          },
          messageContent: {
            background:
              "dark" === e.colorScheme ? e.colors.dark[5] : e.colors.gray[2],
            borderRadius: 10,
            borderBottomLeftRadius: 0,
            display: "inline-block",
            position: "relative",
            padding: "".concat(rv.PADDING_Y, "px ").concat(rv.PADDING_X, "px"),
            ...(t.isMe && {
              background:
                "dark" === e.colorScheme
                  ? e.colors[e.primaryColor][8]
                  : e.colors[e.primaryColor][6],
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 0,
              color: "white",
              ".mantine-List-root": { padding: 4 },
              ".media-list-item-variant-file, .media-list-item-variant-file:hover":
                { background: e.white, color: e.colors.gray[6] },
              ".media-list-item-variant-file:hover": { opacity: 0.9 },
              ".media-list-item-info": { color: e.white },
            }),
          },
        })),
        rk = (0, S.r)(() => ({
          avatar: {
            flex: "none",
            position: "relative",
            width: rv.AVATAR_WIDTH,
            "> div": { bottom: 0, position: "absolute" },
          },
        })),
        rj = (0, S.r)((e) => ({
          footer: {
            alignItems: "center",
            display: "flex",
            float: "right",
            gap: 4,
            height: 18,
            justifySelf: "flex-end",
            marginInlineStart: 8,
            transform: "translateY(3px)",
            userSelect: "none",
            span: { display: "flex", fontSize: e.fontSizes.sm },
          },
        })),
        rw = (0, S.r)((e) => {
          let t = e.colors.dark[3],
            r = e.colors.gray[6];
          return {
            header: {
              color: "dark" === e.colorScheme ? t : r,
              fontSize: e.fontSizes.sm,
              lineHeight: "20px",
              marginBottom: 2,
            },
          };
        }),
        rC = (0, S.r)(() => ({
          markupButtons: { marginInlineStart: 52, marginTop: 8 },
        })),
        rI = (0, S.r)((e) => ({
          markupRows: { color: e.colors[e.primaryColor][8] },
          markupRow: {
            fontSize: e.fontSizes.md,
            lineHeight: "24px",
            padding: "0 0 8px 20px",
            position: "relative",
            "&:before": {
              content: "'•'",
              fontSize: 26,
              left: 0,
              position: "absolute",
              top: -2,
            },
            "&:last-of-type": { paddingBottom: 0 },
          },
        })),
        rN = (0, S.r)((e) => ({
          container: {
            alignItems: "center",
            borderLeft: "2px solid ".concat(e.colors.primary[6]),
            cursor: "pointer",
            display: "flex",
            fontSize: 12,
            margin: 4,
            position: "relative",
          },
          details: { marginLeft: 5, overflow: "hidden" },
          image: {
            boxSizing: "border-box",
            height: 32,
            marginLeft: 8,
            minWidth: 32,
            width: 32,
            "> div": { borderRadius: 2 },
          },
          quoteIconContainer: {
            color: "".concat(e.colors.primary[6]),
            position: "absolute",
            right: 0,
            svg: { fill: "".concat(e.colors.primary[6]) },
            top: 0,
          },
          reserved: {
            borderLeft: "2px solid ".concat(e.colors.primary[6]),
            height: 40,
            margin: 4,
            width: 1,
          },
          text: {
            color: "#797d88",
            lineHeight: "20px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
          textQuoted: {
            "@supports (display: -webkit-box) and (-webkit-line-clamp: 4)": {
              display: "-webkit-box",
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": "4",
              whiteSpace: "normal",
              p: { marginTop: 0 },
              "p:last-of-type": { marginBottom: 0 },
            },
          },
          username: { lineHeight: "20px" },
          usernameQuoted: { paddingInlineEnd: 16 },
        })),
        rM = (0, S.r)((e, t) => ({
          container: {
            padding: "0 4px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          },
          content: {
            fontSize: e.fontSizes.md,
            lineHeight: "24px",
            marginBlockEnd: "0 !important",
            "*:first-of-type": { marginBlockStart: "0 !important" },
            "*:last-child": { marginBlockEnd: "0 !important" },
            "> p:last-child": { display: "inline-block" },
            a: {
              color: t ? e.colors.gray[3] : e.colors.green[7],
              textDecoration: "underline",
              "&:hover": { color: t ? e.colors.gray[4] : e.colors.green[6] },
            },
            ".markup": {
              display: "contents",
              p: { marginTop: 0 },
              "> p:last-child": { display: "inline-block", marginBottom: 0 },
              "ul, ol": { margin: 0, padding: 0, listStylePosition: "inside" },
              ul: { listStyle: "none" },
              "ul li::before": {
                content: '"•"',
                width: "10px",
                display: "inline-block",
                marginRight: "0.2em",
                lineHeight: 1,
                transform: "translateY(0.15em)",
                color: "currentColor",
                fontSize: "1.5em",
              },
            },
          },
        })),
        rS = (e) => {
          let { author: t, isLastInGroup: r, isMe: n, messageId: i } = e,
            { classes: o } = rk();
          return n
            ? null
            : (0, a.jsx)("div", {
                className: o.avatar,
                children:
                  r &&
                  (0, a.jsx)(t0, {
                    testIdPrefix: "".concat(i, "-message"),
                    user: t,
                  }),
              });
        },
        rA = (e) => {
          let { isMe: t, isMessageReadSub: r, message: n } = e,
            { classes: i } = rj(),
            o = D().unix(n.createdAt),
            [s, l] = (0, d.useState)(() => !!t && r.getInitialValue(n.id));
          return (
            (0, d.useEffect)(
              () => (
                t && r.subscribe(n.id, l),
                function () {
                  t && r.unsubscribe(n.id);
                }
              ),
              [t, r, n.id]
            ),
            (0, a.jsxs)("div", {
              className: i.footer,
              children: [
                "sending" === n.sendStatus &&
                  (0, a.jsx)("span", {
                    children: (0, a.jsx)(N._Ll, { size: 14 }),
                  }),
                "sending" !== n.sendStatus &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("span", {
                        suppressHydrationWarning: !0,
                        title: o.format("D MMMM YYYY, HH:mm:ss"),
                        children: o.format("HH:mm"),
                      }),
                      t &&
                        (0, a.jsx)("span", {
                          children: s
                            ? (0, a.jsx)(N.Zy7, { size: 16 })
                            : (0, a.jsx)(N.iWP, { size: 16 }),
                        }),
                    ],
                  }),
              ],
            })
          );
        };
      function rR(e) {
        let { client: t, message: r } = e;
        return r.fromId === (null == t ? void 0 : t.id);
      }
      function rT(e, t) {
        if (e) {
          if ("Client" === e.$type) return t("Вы");
          if ("OperatorBot" === e.$type) return e.name || t("Ассистент");
          if ("Operator" === e.$type) return e.name;
        }
      }
      function rE(e) {
        var t, r, a;
        let { __: n, reply: i, users: o } = e,
          s = rB((t = i)) ? t.replyToUserId : t.fromId;
        return {
          id: rB((r = i)) ? r.replyToMessageId : r.id,
          mediaInfo: rz(i.medias),
          quoted: rB((a = i)) && a.quote,
          text: (function (e, t) {
            var r;
            let a = rz(e.medias),
              n = e.text || "";
            return (r = e) &&
              "$type" in r &&
              "ChatParticipantMessage" === r.$type &&
              e.deleted
              ? t("Сообщение удалено")
              : (null == a ? void 0 : a.isImage)
              ? n || t("Изображение")
              : [null == a ? void 0 : a.name, n].filter(Boolean).join(" ");
          })(i, n),
          username: rT(o[s], n),
        };
      }
      function rz(e) {
        if (!(null == e ? void 0 : e.length)) return null;
        let t = e[0],
          r = t.attributes.find((e) => "DocumentAttributeFileName" === e.$type);
        return {
          id: t.id,
          isImage: R.RJ.has(t.mimeType),
          name: (null == r ? void 0 : r.name) || "",
        };
      }
      function rB(e) {
        return !!e && "replyToUserId" in e;
      }
      let rD = (e) => {
          let { author: t, isFirstInGroup: r, isMe: n } = e,
            [i] = (0, L.Bd)(),
            { classes: o } = rw(),
            s = rT(t, i);
          return !n && s && r
            ? (0, a.jsx)("div", { className: o.header, children: s })
            : null;
        },
        r_ = (e) => {
          var t, r;
          let { message: n, onClick: i } = e,
            { classes: o } = rC();
          return (
            null == (r = n.replyMarkup) || null == (t = r.buttons)
              ? void 0
              : t.length
          )
            ? (0, a.jsx)(eo.Y, {
                className: o.markupButtons,
                spacing: 6,
                ...M("".concat(n.id, "-message-markup-buttons")),
                children: n.replyMarkup.buttons.map((e) =>
                  (0, a.jsx)(
                    es.$,
                    {
                      compact: !0,
                      radius: "md",
                      variant: "outline",
                      onClick: ((e) => () => {
                        "ButtonVariant" === e.$type && i(e);
                      })(e),
                      ...M(
                        ""
                          .concat(n.id, "-message-")
                          .concat(e.text, "-markup-button")
                      ),
                      children: (0, a.jsx)("span", { children: e.text }),
                    },
                    e.id
                  )
                ),
              })
            : null;
        },
        rF = (e) => {
          let { messageId: t, onClick: r, rows: n } = e,
            { classes: i } = rI();
          return (null == n ? void 0 : n.length)
            ? (0, a.jsx)("div", {
                className: i.markupRows,
                ...M("".concat(t, "-message-markup-rows")),
                children: n.map((e) =>
                  (0, a.jsx)(
                    "div",
                    {
                      className: i.markupRow,
                      children: (0, a.jsx)(P.E, {
                        component: "span",
                        onClick: ((e) => () => {
                          "RowVariant" === e.$type && r(e);
                        })(e),
                        variant: ((e) => {
                          if ("RowVariant" === e.$type) return "link";
                        })(e),
                        ...M(
                          ""
                            .concat(t, "-message-")
                            .concat(e.text, "-markup-row")
                        ),
                        children: e.text,
                      }),
                    },
                    e.id
                  )
                ),
              })
            : null;
        },
        rO = (e) => {
          let { isMe: t, medias: r, messageId: n } = e,
            i = (0, u.G)((e) => (0, y.LA)(e)[n]);
          return (0, a.jsx)(e2, {
            containerMaxWidth: t ? rb.CLIENT : rb.OPERATOR,
            mediaDocuments: r,
            mediaUpload: i,
            testIdPrefix: "".concat(n, "-message"),
          });
        },
        rL = (e) => {
          var t;
          return (null == (t = e.author) ? void 0 : t.$type) === "OperatorBot"
            ? null
            : e.message.messageReplyHeader
            ? (0, a.jsx)(rP, {
                onClick: e.onClick,
                parentMessageId: e.message.id,
                replyHeader: e.message.messageReplyHeader,
                users: e.users,
              })
            : "number" == typeof e.message.replyMessageId
            ? (0, a.jsx)(rH, {
                messageSubscription: e.messageSubscription,
                onClick: e.onClick,
                parentMessageId: e.message.id,
                replyId: e.message.replyMessageId,
                users: e.users,
              })
            : null;
        },
        rP = (e) => {
          let { onClick: t, parentMessageId: r, replyHeader: n, users: i } = e,
            [o] = (0, L.Bd)(),
            { quoteOffset: s, text: l } = n;
          return (0, a.jsx)(rW, {
            parentId: r,
            replyMetadata: rE({ __: o, reply: n, users: i }),
            onClick: () =>
              t(
                n.replyToMessageId,
                n.quote ? { quoteOffset: s || 0, text: l || "" } : void 0
              ),
          });
        },
        rH = (e) => {
          let {
              messageSubscription: t,
              onClick: r,
              parentMessageId: n,
              replyId: i,
              users: o,
            } = e,
            { classes: s } = rN(),
            [l] = (0, L.Bd)(),
            c = (0, eM.A)(),
            [u, m] = (0, d.useState)(() => t.getByIdFromCache(i));
          return ((0, d.useEffect)(() => {
            let e = (e) => {
              c.current || m(e);
            };
            return t.subscribe(i, e), () => t.unsubscribe(i, e);
          }, [t, i, c]),
          u)
            ? (0, a.jsx)(rW, {
                parentId: n,
                replyMetadata: rE({ __: l, reply: u, users: o }),
                onClick: () => r(u.id),
              })
            : (0, a.jsx)("div", { className: s.reserved });
        },
        rW = (e) => {
          var t;
          let { parentId: r, replyMetadata: n, onClick: i } = e,
            { classes: o, cx: s } = rN(),
            l = (0, d.useCallback)(
              (e) => {
                ("Enter" === e.key || " " === e.key) &&
                  (e.preventDefault(), i());
              },
              [i]
            );
          return (0, a.jsxs)("div", {
            className: o.container,
            onClick: i,
            onKeyDown: l,
            role: "button",
            tabIndex: 0,
            ...M("".concat(r, "_message-reply")),
            children: [
              !!(null == (t = n.mediaInfo) ? void 0 : t.isImage) &&
                (0, a.jsx)("div", {
                  className: o.image,
                  ...M("".concat(r, "_message-reply-image")),
                  children: (0, a.jsx)(e_, {
                    id: n.mediaInfo.id,
                    name: n.mediaInfo.name,
                    noActions: !0,
                    src: "",
                    type: "external",
                  }),
                }),
              (0, a.jsxs)("div", {
                className: o.details,
                children: [
                  (0, a.jsx)("div", {
                    className: s(o.username, { [o.usernameQuoted]: n.quoted }),
                    ...M("".concat(r, "_message-reply-author")),
                    children: n.username,
                  }),
                  (0, a.jsxs)("div", {
                    className: s(o.text, { [o.textQuoted]: n.quoted }),
                    ...M("".concat(r, "_message-reply-text")),
                    children: [
                      n.quoted && (0, a.jsx)(O.oz, { children: n.text }),
                      !n.quoted && (0, a.jsx)(a.Fragment, { children: n.text }),
                    ],
                  }),
                ],
              }),
              n.quoted &&
                (0, a.jsx)("div", {
                  className: o.quoteIconContainer,
                  children: (0, a.jsx)(N.CGh, { size: 14 }),
                }),
            ],
          });
        },
        rG = (e) => {
          let { footer: t, isMe: r, message: n, onTextRef: i, rows: o } = e,
            { classes: s } = rM(r),
            { id: l, text: c, textMarkup: u } = n,
            m = (0, d.useMemo)(() => {
              if (u)
                return (function (e, t) {
                  let r = 0,
                    a = { target: "_blank" },
                    n = {};
                  return i(
                    "div",
                    { className: "markup" },
                    e.map(function e(r) {
                      switch (r.$type) {
                        case "bulletList":
                          return i("ul", null, r.content.map(e));
                        case "hardBreak":
                          return i("br");
                        case "listItem":
                          return i(
                            "li",
                            null,
                            r.content.map((t) =>
                              "paragraph" === t.$type ? t.content.map(e) : e(t)
                            )
                          );
                        case "orderedList":
                          return i("ol", r.attrs, r.content.map(e));
                        case "paragraph":
                          return i("p", n, r.content.map(e));
                        case "text":
                          var o,
                            s = r;
                          let { length: l, offset: c } = s,
                            u = t.slice(c, c + l),
                            m = i(d.Fragment, null, u);
                          return (null == (o = s.attrs) ? void 0 : o.length)
                            ? s.attrs.reduce((e, t) => {
                                switch (t.$type) {
                                  case "bold":
                                    return i("b", null, e);
                                  case "italic":
                                    return i("i", null, e);
                                  case "link":
                                    return i("a", { ...a, ...t }, e);
                                  case "strike":
                                    return i("s", null, e);
                                  case "underline":
                                    return i("u", null, e);
                                  default:
                                    return e;
                                }
                              }, m)
                            : m;
                        default:
                          return i(d.Fragment);
                      }
                    })
                  );
                  function i(e, t, a) {
                    return d.createElement(e, { ...t, key: r++ }, a);
                  }
                })(u, c || "");
            }, [c, u]),
            p = (0, d.useMemo)(
              () =>
                (null == c
                  ? void 0
                  : c.replace(/^(\d{4,})\.(?=\s|$)/gm, "$1")) || "",
              [c]
            );
          return (0, a.jsxs)("div", {
            className: s.container,
            children: [
              (0, a.jsxs)("span", {
                className: s.content,
                ref: (e) => i(l, e),
                children: [
                  !!u && m,
                  !u &&
                    !!p &&
                    (0, a.jsx)(O.oz, {
                      allowedConstructs: r ? [] : void 0,
                      children: p,
                    }),
                  o,
                ],
              }),
              t,
            ],
          });
        },
        r$ = (0, d.memo)((e) => {
          var t, r;
          let {
              client: n,
              isMessageReadSub: i,
              message: o,
              messageSubscription: s,
              nextMessage: l,
              onReplyClick: c,
              onSendMarkupVariant: d,
              onTextRef: u,
              prevMessage: m,
              users: p,
            } = e,
            g = p[o.fromId],
            f = (function (e) {
              let { message: t, prevMessage: r } = e;
              return (
                (null == r ? void 0 : r.$type) !== "ChatParticipantMessage" ||
                r.fromId !== t.fromId
              );
            })({ message: o, prevMessage: m }),
            h = (function (e) {
              let { message: t, nextMessage: r } = e;
              return (
                (null == r ? void 0 : r.$type) !== "ChatParticipantMessage" ||
                r.fromId !== t.fromId
              );
            })({ message: o, nextMessage: l }),
            x = rR({ client: n, message: o }),
            { classes: v } = ry({ isLastInGroup: h, isMe: x });
          return (0, a.jsxs)("div", {
            className: v.container,
            children: [
              (0, a.jsxs)("div", {
                className: v.content,
                children: [
                  (0, a.jsx)(rS, {
                    author: g,
                    isLastInGroup: h,
                    isMe: x,
                    messageId: o.id,
                  }),
                  (0, a.jsxs)("div", {
                    className: v.messageBlock,
                    ...M("".concat(o.id, "-message-content-block")),
                    children: [
                      (0, a.jsx)(rD, { author: g, isFirstInGroup: f, isMe: x }),
                      (0, a.jsxs)("div", {
                        className: v.messageContent,
                        children: [
                          (0, a.jsx)(rL, {
                            author: g,
                            message: o,
                            messageSubscription: s,
                            onClick: c,
                            users: p,
                          }),
                          !!(null == (t = o.medias) ? void 0 : t.length) &&
                            (0, a.jsx)(rO, {
                              isMe: x,
                              medias: o.medias,
                              messageId: o.id,
                            }),
                          (0, a.jsx)(rG, {
                            footer: (0, a.jsx)(rA, {
                              isMe: x,
                              isMessageReadSub: i,
                              message: o,
                            }),
                            isMe: x,
                            message: o,
                            onTextRef: u,
                            rows: (0, a.jsx)(rF, {
                              messageId: o.id,
                              onClick: d,
                              rows:
                                null == (r = o.replyMarkup) ? void 0 : r.rows,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(r_, { message: o, onClick: d }),
            ],
          });
        });
      r$.displayName = "WidgetParticipantMessage";
      let rV = (0, S.r)((e) => ({
          root: {
            display: "flex",
            fontSize: e.fontSizes.sm,
            justifyContent: "center",
            lineHeight: "20px",
            margin: "0 auto 10px",
            maxWidth: "calc(100% - 40px)",
            padding: "4px 0",
            position: "relative",
            textAlign: "center",
            whiteSpace: "pre-wrap",
            width: "fit-content",
            wordBreak: "break-word",
          },
        })),
        rU = (0, d.memo)((e) => {
          let { message: t, users: r } = e,
            [n] = (0, L.Bd)(),
            { classes: i } = rV();
          return (0, a.jsx)("div", {
            className: i.root,
            "data-message-id": t.id,
            suppressHydrationWarning: !0,
            children: (function (e) {
              let { action: t } = e.message;
              switch (t.$type) {
                case "LongOperatorSearch":
                  return (
                    (r = t),
                    {
                      High: "",
                      Low: (a = e).__(
                        "В настоящее время все сотрудники заняты, пожалуйста, ожидайте, вам ответит первый освободившийся оператор."
                      ),
                      Medium: a.__(
                        "К сожалению, мы не успеваем ответить всем нашим клиентам в короткие сроки. Пожалуйста, ожидайте, мы работаем над тем, чтобы в ближайшее время вам ответил первый освободившийся оператор."
                      ),
                    }[r.time] || ""
                  );
                case "OperatorAddedAction":
                  return (n = 0), e.__("В чат добавлен оператор");
                case "OperatorInvokeFailedAction":
                  return (
                    (i = t),
                    {
                      NoOnline: (o = e).__(
                        "Пожалуйста, воспользуйтесь альтернативными каналами поддержки или попробуйте найти ответ самостоятельно, написав сообщение боту или на сайте."
                      ),
                      Timeout: o.__(
                        "К сожалению, мы не успеваем ответить всем нашим клиентам. Пожалуйста, попробуйте обратиться позднее или воспользуйтесь альтернативными каналами поддержки или попробуйте найти ответ самостоятельно, написав сообщение боту или на сайте."
                      ),
                    }[i.reason] || ""
                  );
                case "OperatorInvokedAction":
                  return (
                    (s = 0),
                    e.__(
                      "Переключаем ваш диалог на оператора. Мы уже занимаемся вашим вопросом, ответим в ближайшее время."
                    )
                  );
                case "OperatorSetBanAction":
                  var r,
                    a,
                    n,
                    i,
                    o,
                    s,
                    l = t,
                    c = e;
                  let d = c.users[l.userId],
                    u = [
                      c.__("Клиент забанен оператором {{operator}}", {
                        operator:
                          (null == d ? void 0 : d.$type) === "Operator"
                            ? d.name
                            : "Unknown",
                      }),
                    ];
                  return (
                    l.reason &&
                      u.push(
                        c.__('Причина: "{{reason}}"', { reason: l.reason })
                      ),
                    u.push(
                      c.__("Длительность бана: {{duration}}", {
                        duration: l.timeSeconds,
                      })
                    ),
                    u.join(". ").concat(".")
                  );
                default:
                  return "Unknown service message";
              }
            })({ __: n, message: t, users: r }),
          });
        });
      rU.displayName = "ServiceMessage";
      let rq = (0, d.memo)((e) => {
        let {
            client: t,
            id: r,
            index: n,
            isMessageReadSub: i,
            message: o,
            messageSubscription: s,
            nextMessage: l,
            onRef: c,
            onReplyClick: d,
            onSendMarkupVariant: u,
            onTextRef: m,
            prevMessage: p,
            users: g,
          } = e,
          { classes: f } = rg({
            operator:
              (null == o ? void 0 : o.$type) === "ChatParticipantMessage" &&
              rR({ client: t, message: o }),
          });
        return (0, a.jsxs)("div", {
          className: f.root,
          "data-date": rf(o),
          "data-id": r,
          "data-index": n,
          ref: (e) => c(o.id, e),
          ...M("".concat(r, "-chat-message")),
          children: [
            (null == o ? void 0 : o.$type) === "ChatClientMessage" &&
              (0, a.jsx)(rx, { message: o }),
            (null == o ? void 0 : o.$type) === "ChatParticipantMessage" &&
              (0, a.jsx)(r$, {
                client: t,
                isMessageReadSub: i,
                message: o,
                messageSubscription: s,
                nextMessage: l,
                onReplyClick: d,
                onSendMarkupVariant: u,
                onTextRef: m,
                prevMessage: p,
                users: g,
              }),
            (null == o ? void 0 : o.$type) === "ChatSystemMessage" &&
              (0, a.jsx)(rU, { message: o, users: g }),
          ],
        });
      });
      rq.displayName = "WidgetBodyItem";
      let rX = { HEIGHT: 30, OFFSET_Y: 8, TOTAL_HEIGHT: 46 },
        rY = (0, S.r)((e) => ({
          pinnedDate: {
            height: rX.HEIGHT,
            margin: "".concat(rX.OFFSET_Y, "px auto"),
            maxWidth: "calc(100% - 40px)",
            position: "sticky",
            top: rX.OFFSET_Y,
            userSelect: "none",
            width: "100%",
            zIndex: 1,
            "> div": {
              background: "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
              borderRadius: 6,
              width: "fit-content",
            },
          },
        })),
        rJ = (0, d.forwardRef)((e, t) => {
          let { initialDate: r } = e,
            { classes: n } = rY(),
            [i, o] = (0, d.useState)(r);
          return (
            (0, d.useImperativeHandle)(t, () => ({ setDate: o }), []),
            (0, a.jsx)("div", {
              className: n.pinnedDate,
              children: (0, a.jsx)(rx, {
                block: !1,
                text: i,
                viewType: "base",
              }),
            })
          );
        });
      rJ.displayName = "PinnedDate";
      let rQ = rX.TOTAL_HEIGHT;
      function rZ(e) {
        let { onInView: t, rootMargin: r, scrollableRef: a, threshold: n } = e,
          i = (0, d.useRef)(),
          o = (0, d.useRef)(new Set()),
          s = (0, d.useRef)(new Map()),
          l = (0, d.useRef)(new Map()),
          c = (0, eA.F)(t),
          u = (0, d.useCallback)((e) => o.current.has(e), []),
          m = (0, d.useCallback)((e) => l.current.get(e), []),
          p = (0, d.useCallback)((e, t) => {
            t ? s.current.set(e, t) : s.current.delete(e);
          }, []),
          g = (0, d.useCallback)(
            (e, t) => {
              if (!i.current) return void p(e, t);
              let r = l.current.get(e);
              t
                ? (l.current.set(e, t), i.current.observe(t))
                : r &&
                  (i.current.unobserve(r),
                  l.current.delete(e),
                  o.current.delete(e));
            },
            [p]
          );
        return (
          (0, d.useEffect)(
            () => (
              a.current &&
                !i.current &&
                (i.current = new IntersectionObserver(
                  (e) => {
                    for (let t of e) {
                      let e = t.target,
                        r = Number(e.dataset.id);
                      t.isIntersecting
                        ? (o.current.add(r), c.current(e, r))
                        : o.current.delete(r);
                    }
                  },
                  { root: a.current, rootMargin: r, threshold: n }
                )),
              function () {
                i.current && (i.current.disconnect(), (i.current = void 0));
              }
            ),
            [c, r, a, n]
          ),
          (0, d.useEffect)(() => {
            i.current &&
              s.current.size &&
              (Array.from(s.current.values()).forEach((e) => {
                var t;
                null == (t = i.current) || t.observe(e);
              }),
              s.current.clear());
          }, []),
          (0, d.useMemo)(
            () => ({ getIsInView: u, getNode: m, observe: g }),
            [u, m, g]
          )
        );
      }
      function rK(e) {
        if (e) return rf(e);
      }
      var r0 = r(21666);
      let r1 = (0, d.memo)((e) => {
        var t;
        let {
            chat: r,
            client: n,
            invokeOperatorShown: i,
            messageSubscription: o,
            messages: s,
            onSendMarkupVariant: l,
            users: c,
          } = e,
          { classes: u } = rc(),
          m = (0, d.useRef)(null),
          p = (function (e) {
            let { chat: t, messages: r } = e,
              a = (0, d.useRef)({ computedOnce: !1, id: void 0 });
            if (!a.current.computedOnce) {
              var n;
              a.current = {
                computedOnce: !0,
                id: null == (n = t.unreadMessageIds) ? void 0 : n[0],
              };
            }
            let i = (0, d.useMemo)(
              () =>
                r.reduce(
                  (e, t, r, n) => {
                    var i, o;
                    let { id: s } = t,
                      l = rK(n[r - 1]),
                      c = rK(t);
                    return (
                      0 === r && c && (e.firstMessageDate = c),
                      c &&
                        l &&
                        c !== l &&
                        e.messages.push({
                          $type: "ChatClientMessage",
                          createdAt: (i = t).createdAt,
                          id: i.id + R.d4 + 1,
                          type: "Date",
                        }),
                      s > 1 &&
                        s === a.current.id &&
                        e.messages.push({
                          $type: "ChatClientMessage",
                          createdAt: (o = t).createdAt,
                          id: o.id + R.d4 + 2,
                          type: "Unread",
                        }),
                      e.messages.push(t),
                      (e.messageIndexById[s] = e.messages.length - 1),
                      e
                    );
                  },
                  { firstMessageDate: "", messageIndexById: {}, messages: [] }
                ),
              [r]
            );
            return {
              firstMessageDate: i.firstMessageDate,
              initialFirstUnreadId: a.current.id,
              messageIndexById: i.messageIndexById,
              messages: i.messages,
            };
          })({ chat: r, messages: s }),
          g = (function (e) {
            var t;
            let {
                clientId: r,
                initialFirstUnreadId: a,
                invokeOperatorShown: n,
                lastReadId: i,
                messageIndexById: o,
                originalMessages: s,
              } = e,
              [l, c] = (0, d.useState)(!1),
              u = (0, r0.A)(s),
              m = (0, d.useRef)(!1),
              p = (0, d.useRef)({ bottom: 0, top: 0 }),
              g = (0, d.useRef)(!1),
              f = (0, d.useRef)(null),
              h = (0, d.useRef)(!1),
              x = (0, d.useCallback)((e, t) => {
                if (f.current) {
                  var r, a;
                  f.current.scrollToIndex(e, {
                    align:
                      null != (r = null == t ? void 0 : t.align) ? r : "start",
                    offset:
                      null != (a = null == t ? void 0 : t.offset) ? a : -rQ,
                    smooth: null == t ? void 0 : t.smooth,
                  });
                }
              }, []),
              v = (0, d.useCallback)(
                () => x(1 / 0, { align: "end", offset: 0 }),
                [x]
              ),
              b = (0, d.useCallback)((e) => {
                h.current = e;
              }, []),
              y = (0, d.useCallback)((e) => {
                if (f.current && !m.current) {
                  let { scrollSize: t, viewportSize: r } = f.current;
                  (e -= rQ),
                    (p.current.bottom = t - r - e),
                    (p.current.top = e);
                }
                return p.current;
              }, []);
            return (
              (t = () => {
                f.current &&
                  ("number" == typeof a
                    ? requestAnimationFrame(() => {
                        var e;
                        return x((null != (e = o[a]) ? e : 0) - 1);
                      })
                    : "number" == typeof i && v(),
                  (g.current = !0),
                  c(!0));
              }),
              (0, d.useEffect)(t, []),
              (0, d.useLayoutEffect)(() => {
                if (!g.current || !(null == u ? void 0 : u.length)) return;
                let e = (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [];
                    if (!(null == t ? void 0 : t.length)) return !1;
                    let r = e.length,
                      a = t.length,
                      n = e[r - 1],
                      i = t[a - 1];
                    return (
                      r - a == 1 &&
                      (null == n ? void 0 : n.id) !==
                        (null == i ? void 0 : i.id)
                    );
                  })(s, u),
                  t = (function (e, t) {
                    let r = e[e.length - 1];
                    return (
                      (null == r ? void 0 : r.$type) ===
                        "ChatParticipantMessage" && r.fromId === t
                    );
                  })(s, r),
                  a = p.current.bottom <= 50;
                e && (t || a) && v();
              }, [r, s, u, v]),
              (0, d.useLayoutEffect)(() => {
                g.current &&
                  ((m.current = !0),
                  setTimeout(() => {
                    f.current &&
                      (f.current.scrollTo(
                        f.current.scrollSize -
                          f.current.viewportSize -
                          p.current.bottom +
                          rQ
                      ),
                      (m.current = !1));
                  }));
              }, [n]),
              {
                ready: l,
                scrollToIndex: x,
                setVirtualizerShift: b,
                trackScrollPosition: y,
                virtualizerRef: f,
                virtualizerShift: h.current,
              }
            );
          })({
            clientId: null == n ? void 0 : n.id,
            initialFirstUnreadId: p.initialFirstUnreadId,
            invokeOperatorShown: i,
            lastReadId: r.lastReadInboxMessageId,
            messageIndexById: p.messageIndexById,
            originalMessages: s,
          }),
          f = (function (e) {
            let { setVirtualizerShift: t } = e,
              { loadMore: r } = (0, k.on)(),
              a = (0, d.useRef)(!1),
              n = (0, d.useRef)(!1),
              i = (0, tg.YQ)(
                (e) => r({ direction: k.TN.Backwards, ...e }),
                500,
                { leading: !0, trailing: !1 }
              ),
              o = (0, tg.YQ)(() => r({ direction: k.TN.Forwards }), 500, {
                leading: !0,
                trailing: !1,
              });
            return {
              onScroll: (0, d.useCallback)(
                async (e) => {
                  e.top <= 150
                    ? n.current ||
                      ((n.current = !0),
                      await i({ onBeforeAddingMessages: () => t(!0) }),
                      t(!1))
                    : (n.current = !1),
                    e.bottom <= 150
                      ? a.current || ((a.current = !0), t(!1), o())
                      : (a.current = !1);
                },
                [i, o, t]
              ),
            };
          })({ setVirtualizerShift: g.setVirtualizerShift }),
          h = (function (e) {
            let { lastReadOutboxMessageId: t } = e,
              r = (0, eA.F)(t),
              a = (0, d.useRef)(new Map()),
              n = (0, d.useCallback)((e) => !!r.current && e <= r.current, [r]),
              i = (0, d.useCallback)((e) => {
                a.current.delete(e);
              }, []),
              o = (0, d.useCallback)(
                (e, t) => {
                  n(e) ? i(e) : a.current.set(e, t);
                },
                [n, i]
              );
            return (
              (0, d.useEffect)(() => {
                Array.from(a.current.entries()).forEach((e) => {
                  let [t, r] = e;
                  n(t) && (r(!0), i(t));
                });
              }, [n, t, i]),
              (0, d.useMemo)(
                () => ({ getInitialValue: n, subscribe: o, unsubscribe: i }),
                [n, o, i]
              )
            );
          })({ lastReadOutboxMessageId: r.lastReadOutboxMessageId }),
          x = (function (e) {
            let { chatId: t, lastReadId: r, scrollableRef: a } = e,
              n = (0, k.FW)(),
              i = (0, d.useRef)(null != r ? r : -1),
              o = (0, tg.dh)((e) => void n(t, e), 500, { leading: !1 }),
              s = rZ({
                onInView: (e, t) => {
                  !isNaN(t) &&
                    t > i.current &&
                    t < R.d4 &&
                    ((i.current = t), o(t));
                },
                rootMargin: "0px",
                scrollableRef: a,
                threshold: 0.1,
              });
            return (
              (0, d.useEffect)(() => {
                "number" == typeof r && (i.current = Math.max(i.current, r));
              }, [r]),
              { observe: s.observe }
            );
          })({
            chatId: r.id,
            lastReadId: r.lastReadInboxMessageId,
            scrollableRef: m,
          }),
          v = (function (e) {
            let { scrollableRef: t } = e,
              r = (0, d.useRef)(null),
              a = (0, d.useRef)(new Map()),
              n = (0, d.useRef)(null),
              i = rZ({
                onInView: async (e, t) => {
                  var r;
                  (null == (r = n.current) ? void 0 : r.id) === t &&
                    (await new Promise((e) => setTimeout(e, 150)),
                    o(n.current),
                    (n.current = null));
                },
                rootMargin: "0px",
                scrollableRef: t,
                threshold: 0.01,
              }),
              o = (0, d.useCallback)(
                async (e) => {
                  let { id: t, quote: n } = e,
                    o = i.getNode(t),
                    s = a.current.get(t);
                  function l() {
                    let e = r.current;
                    e &&
                      (e.messageNode
                        .querySelectorAll("[data-highlighted='true']")
                        .forEach((e) => {
                          e.replaceWith(
                            document.createTextNode(e.textContent || "")
                          );
                        }),
                      clearTimeout(e.timeout),
                      e.messageNode.classList.remove(rd.CLASSNAME),
                      e.messageNode.classList.remove(rm.CLASSNAME),
                      e.messageNode.offsetWidth,
                      (r.current = null));
                  }
                  l(),
                    o &&
                      ((function (e, t) {
                        if (!e || !t) return !1;
                        let r = e.innerText,
                          a = t.quoteOffset,
                          n = t.quoteOffset + t.text.length;
                        return r.slice(a, n) === t.text;
                      })(s, n)
                        ? ((function (e) {
                            let {
                              className: t = rm.QUOTE_CLASSNAME,
                              htmlTag: r = "span",
                              messageTextNode: a,
                              quoteOffset: n,
                              quoteText: i,
                            } = e;
                            if (!a) return;
                            let o = (function (e) {
                                let t = [],
                                  r = document.createTreeWalker(
                                    e,
                                    NodeFilter.SHOW_TEXT
                                  ),
                                  a = r.nextNode();
                                for (; a; ) t.push(a), (a = r.nextNode());
                                return t;
                              })(a),
                              s = n + i.length,
                              l = 0,
                              c = a.innerText;
                            o.forEach((e) => {
                              let a = e.wholeText,
                                i = l,
                                o = (function (e, t) {
                                  let [r, a] = e,
                                    [n, i] = t;
                                  return a < n || i < r
                                    ? null
                                    : [Math.max(r, n), Math.min(a, i)];
                                })([n, s], [i, l + e.length]);
                              if (o) {
                                let n = o[0] - i,
                                  s = n + (o[1] - o[0]),
                                  l = a.slice(0, n),
                                  c = a.slice(s),
                                  d = a.slice(n, s),
                                  u = document.createElement(r);
                                u.classList.add(t), (u.innerHTML = d);
                                let m = document.createElement("span");
                                (m.dataset.highlighted = "true"),
                                  m.appendChild(document.createTextNode(l)),
                                  m.appendChild(u),
                                  m.appendChild(document.createTextNode(c)),
                                  e.replaceWith(m);
                              }
                              let d = c.slice(e.length),
                                u = d.replace(/^[\n\r]+/, ""),
                                m = d.length - u.length;
                              (l += e.length), (l += m), (c = u);
                            });
                          })({
                            messageTextNode: s,
                            quoteOffset: n.quoteOffset,
                            quoteText: n.text,
                          }),
                          o.classList.add(rm.CLASSNAME),
                          (r.current = {
                            messageNode: o,
                            timeout: setTimeout(l, rm.DURATION),
                          }))
                        : (o.classList.add(rd.CLASSNAME),
                          (r.current = {
                            messageNode: o,
                            timeout: setTimeout(l, rd.DURATION),
                          })));
                },
                [i]
              ),
              s = (0, d.useCallback)((e, t) => {
                t ? a.current.set(e, t) : a.current.delete(e);
              }, []);
            return {
              highlight: (0, d.useCallback)(
                (e, t) => {
                  let r = { id: e, quote: t };
                  i.getIsInView(e) ? o(r) : (n.current = r);
                },
                [o, i]
              ),
              observe: i.observe,
              registerTextNode: s,
            };
          })({ scrollableRef: m }),
          b = (function (e) {
            let { initialDate: t, scrollableRef: r } = e,
              a = (0, d.useRef)(t),
              n = (0, d.useRef)(null),
              i = rZ({
                onInView: (e) => {
                  let t = e.dataset.date;
                  t && t !== a.current && o(t);
                },
                rootMargin: "0px 0px -99% 0px",
                scrollableRef: r,
                threshold: 0.01,
              }),
              o = (0, d.useCallback)((e) => {
                var t;
                (a.current = e), null == (t = n.current) || t.setDate(e);
              }, []);
            return (
              !(function (e, t) {
                let r = (0, r0.A)(t, () => !0);
                (0, d.useEffect)(() => e(r || []), t);
              })(
                (e) => {
                  let [r] = e;
                  !r && t && o(t);
                },
                [t]
              ),
              { initialDate: t, observe: i.observe, pinnedDateRef: n }
            );
          })({ initialDate: p.firstMessageDate, scrollableRef: m }),
          y = (function (e) {
            let {
                highlightMessage: t,
                lastId: r,
                messageIndexById: a,
                ready: n,
                scrollToIndex: i,
                setVirtualizerShift: o,
                unreadMessageCount: s,
                unreadMessageIds: l,
              } = e,
              { load: c } = (0, k.on)(),
              u = (0, d.useRef)(null),
              m = (0, d.useRef)(null),
              p = (0, d.useRef)(0),
              g = (0, d.useRef)(!1),
              f = (0, d.useCallback)(() => {
                var e, t, i;
                let o,
                  l = {
                    atBottom:
                      (e = {
                        distanceFromBottom: p.current,
                        lastId: r,
                        messageIndexById: a,
                        unreadMessageCount: s,
                      }).distanceFromBottom <= 50,
                    dialogueEndLoaded:
                      !(t = e).lastId ||
                      "number" == typeof t.messageIndexById[t.lastId],
                    farFromBottom: e.distanceFromBottom > 300,
                    hasUnreadMessages: e.unreadMessageCount > 0,
                  };
                if (
                  ((o =
                    !!n &&
                    (!l.dialogueEndLoaded ||
                      (!l.atBottom &&
                        (!!l.hasUnreadMessages || l.farFromBottom)))),
                  g.current !== o)
                ) {
                  null == (i = m.current) || i.setShow(o), (g.current = o);
                }
              }, [r, a, n, s]),
              h = (0, d.useCallback)(
                (e) => {
                  var t;
                  (u.current = e),
                    null == (t = m.current) || t.setLoading(!0),
                    o(!1),
                    c({ targetMessageId: e.id }).catch(() => {
                      u.current = null;
                    });
                },
                [c, o]
              ),
              x = (0, d.useCallback)(
                (e) => {
                  i(e.index, { smooth: e.smooth }), e.highlight && t(e.id);
                },
                [t, i]
              ),
              v = (0, eA.F)(() => {
                if (u.current) return;
                let { index: e, metadata: t } = (function (e) {
                  var t;
                  let r,
                    a = null == (t = e.unreadMessageIds) ? void 0 : t[0];
                  return (
                    (r = "number" == typeof a ? a : e.lastId || 0),
                    {
                      index: e.messageIndexById[r],
                      metadata: { highlight: r === a, id: r },
                    }
                  );
                })({ lastId: r, messageIndexById: a, unreadMessageIds: l });
                "number" == typeof e ? x({ ...t, index: e, smooth: !0 }) : h(t);
              }),
              b = (0, eA.F)((e) => {
                (p.current = e.bottom), f();
              });
            if (u.current) {
              let e = a[u.current.id];
              if ("number" == typeof e) {
                var y;
                x({ ...u.current, index: e }),
                  null == (y = m.current) || y.setLoading(!1),
                  (u.current = null);
              }
            }
            return (
              (0, d.useEffect)(f, [f]),
              (0, d.useEffect)(() => {
                var e;
                return null == (e = m.current) ? void 0 : e.setUnreadCount(s);
              }, [s]),
              { buttonRef: m, onClick: v.current, onScroll: b.current }
            );
          })({
            highlightMessage: v.highlight,
            lastId: null == (t = r.lastMessage) ? void 0 : t.id,
            messageIndexById: p.messageIndexById,
            ready: g.ready,
            scrollToIndex: g.scrollToIndex,
            setVirtualizerShift: g.setVirtualizerShift,
            unreadMessageCount: r.unreadMessageCount,
            unreadMessageIds: r.unreadMessageIds,
          }),
          j = (function (e) {
            let {
                highlightMessage: t,
                messageIndexById: r,
                scrollToIndex: a,
                setVirtualizerShift: n,
              } = e,
              { load: i } = (0, k.on)(),
              [o] = (0, L.Bd)(),
              s = (0, eA.F)((0, eS.N)().api),
              l = (0, d.useRef)(null),
              c = (0, d.useCallback)(
                (e) => {
                  let {
                    messageId: r,
                    messageIndex: n,
                    quote: i,
                    smooth: o,
                  } = e;
                  a(n, { smooth: o }), t(r, i);
                },
                [t, a]
              ),
              u = (0, d.useCallback)(
                async (e) =>
                  !!(await s.current.getMessages({ id: [e] })).messages[0],
                [s]
              ),
              m = (0, d.useCallback)(
                async (e, t) => {
                  if (l.current) return;
                  let a = r[e];
                  if ("number" == typeof a)
                    return c({ messageId: e, messageIndex: a, quote: t });
                  try {
                    if (!(await u(e)))
                      return th({ message: o("Сообщение не найдено") });
                    (l.current = { id: e, quote: t }),
                      n(!1),
                      i({ targetMessageId: e });
                  } catch (e) {
                    l.current = null;
                  }
                },
                [o, u, c, i, r, n]
              );
            if (l.current) {
              let { id: e, quote: t } = l.current,
                a = r[e];
              "number" == typeof a &&
                (c({ messageId: e, messageIndex: a, quote: t }),
                (l.current = null));
            }
            return { goToReplyMessage: m };
          })({
            highlightMessage: v.highlight,
            messageIndexById: p.messageIndexById,
            scrollToIndex: g.scrollToIndex,
            setVirtualizerShift: g.setVirtualizerShift,
          }),
          w = (0, eA.F)((e, t) => {
            x.observe(e, t), v.observe(e, t), b.observe(e, t);
          }),
          C = (0, eA.F)((e, t) => {
            v.registerTextNode(e, t);
          }),
          I = (0, eA.F)((e) => {
            let t = g.trackScrollPosition(e);
            y.onScroll(t), f.onScroll(t);
          }),
          N = (0, d.useMemo)(
            () =>
              p.messages.map((e, t, r) =>
                (0, a.jsx)(
                  rq,
                  {
                    client: n,
                    id: e.id,
                    index: t,
                    isMessageReadSub: h,
                    message: e,
                    messageSubscription: o,
                    nextMessage: r[t + 1],
                    onRef: w.current,
                    onReplyClick: j.goToReplyMessage,
                    onSendMarkupVariant: l,
                    onTextRef: C.current,
                    prevMessage: r[t - 1],
                    users: c,
                  },
                  e.id
                )
              ),
            [n, h, o, p.messages, w, C, l, j.goToReplyMessage, c]
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: u.chat,
              ref: m,
              children: [
                (0, a.jsx)(rJ, {
                  initialDate: b.initialDate,
                  ref: b.pinnedDateRef,
                }),
                (0, a.jsx)(re.YV, {
                  onScroll: I.current,
                  ref: g.virtualizerRef,
                  scrollRef: m,
                  shift: g.virtualizerShift,
                  startMargin: rQ,
                  children: N,
                }),
              ],
            }),
            (0, a.jsx)(ra, { onClick: y.onClick, ref: y.buttonRef }),
          ],
        });
      });
      r1.displayName = "WidgetBody";
      let r2 = (0, d.memo)((e) => {
        let { messages: t, ...r } = e,
          { classes: n } = rl();
        return (0, a.jsxs)("div", {
          className: n.wrapper,
          children: [
            !t &&
              (0, a.jsx)("div", {
                className: n.loader,
                children: (0, a.jsx)(t9.a, {}),
              }),
            !!t && (0, a.jsx)(r1, { messages: t, ...r }),
          ],
        });
      });
      r2.displayName = "WidgetBody";
      let r4 = (0, d.memo)((e) => {
        let { close: t, isMobile: r } = e,
          n = (0, u.G)(m._5),
          o = (0, u.G)(s.ZB),
          l = (0, u.G)(c.hd),
          p = (0, u.G)(x.xu),
          f = (0, u.G)(j.Ys),
          h = (0, u.G)(c.gq),
          y = (0, u.G)(j.o9),
          C = (0, u.G)(w.uN),
          I = (function () {
            let { api: e } = (0, eS.N)(),
              t = (0, u.j)(),
              r = (0, u.G)((e) => e.feedback),
              { runAsync: a } = (0, tn.A)(
                async (t) => {
                  let { dialogueId: r, rate: a, resolved: n } = t;
                  await e.setChatFeedback(r, { rate: a, resolved: n });
                },
                { loadingDelay: 300, manual: !0 }
              ),
              n = (0, d.useCallback)(() => t((0, b.v4)()), [t]),
              i = (0, d.useCallback)(
                async (e) => {
                  if (r.dialogId)
                    try {
                      await a({
                        dialogueId: r.dialogId,
                        ...tc({ rate: e.rate, resolved: e.resolved }),
                      }),
                        e.onSuccess();
                    } catch (t) {
                      e.onFailure();
                    }
                },
                [r.dialogId, a]
              );
            return { open: !!r.dialogId, reset: n, submit: i };
          })(),
          N = (function (e) {
            let { chat: t, operator: r } = e,
              { api: a } = (0, eS.N)(),
              n = !!((null == t ? void 0 : t.operatorInvokeAllowed) && !r);
            return (0, d.useMemo)(
              () => ({ allowed: n, invoke: a.invokeOperator }),
              [n, a.invokeOperator]
            );
          })({ chat: l, operator: h }),
          S = (function () {
            let { api: e } = (0, eS.N)(),
              t = (0, u.G)(j.o9),
              r = (0, u.G)(j.Tf),
              a = (0, d.useRef)(e),
              n = (0, d.useRef)(new Map()),
              i = (0, d.useRef)(r);
            (a.current = e), (i.current = r);
            let o = (0, d.useCallback)(
                (e) => (
                  n.current.has(e) || n.current.set(e, tN()), n.current.get(e)
                ),
                []
              ),
              s = (0, d.useCallback)(
                (e, t) => {
                  let r = { ...o(e), ...t };
                  n.current.set(e, r);
                },
                [o]
              ),
              l = (0, d.useCallback)(
                (e, t) => {
                  o(e).listeners.add(t);
                },
                [o]
              ),
              c = (0, d.useCallback)(
                (e, t) => {
                  o(e).listeners.delete(t);
                },
                [o]
              ),
              m = (0, d.useCallback)(
                (e) => {
                  let t = o(e);
                  t.listeners.forEach((e) => {
                    e(t.message);
                  });
                },
                [o]
              ),
              p = (0, d.useCallback)((e) => {
                var t;
                return null == (t = i.current) ? void 0 : t[e];
              }, []),
              g = (0, d.useCallback)(
                async (e) => {
                  try {
                    let t = p(e);
                    if (!t) {
                      let r = [e];
                      t =
                        (await a.current.getMessages({ id: r })).messages[0] ||
                        tI();
                    }
                    s(e, { message: t });
                  } catch (t) {
                    s(e, tN());
                  } finally {
                    m(e);
                  }
                },
                [p, m, s]
              ),
              f = (0, d.useCallback)(
                (e, t) => {
                  l(e, t), g(e);
                },
                [l, g]
              );
            return (
              (0, d.useEffect)(() => {
                Array.from(n.current.entries()).forEach((e) => {
                  let [a, n] = e,
                    i = tC()(t),
                    o = null == r ? void 0 : r[a],
                    l = !!i && i.id <= a;
                  !o && l
                    ? (s(a, { message: tI() }), m(a))
                    : o && o !== n.message && (s(a, { message: o }), m(a));
                });
              }, [t, r, m, s]),
              (0, d.useMemo)(
                () => ({ getByIdFromCache: p, subscribe: f, unsubscribe: c }),
                [p, c, f]
              )
            );
          })(),
          A = (function (e) {
            let { chat: t, lastSentMessage: r } = e,
              [a, n] = (0, d.useState)(!1),
              i = (0, d.useRef)(null),
              o = (0, d.useCallback)(() => {
                i.current && clearTimeout(i.current);
              }, []),
              s = (0, d.useCallback)((e, t) => {
                let r = D()(),
                  a = D().unix(t);
                return Math.max(0, 1e3 * e - r.diff(a, "milliseconds"));
              }, []);
            return (
              (0, d.useEffect)(() => {
                (null == t ? void 0 : t.slowModeDelay) &&
                  r &&
                  (o(),
                  n(!0),
                  (i.current = setTimeout(
                    () => n(!1),
                    s(t.slowModeDelay, r.createdAt)
                  )));
              }, [null == t ? void 0 : t.slowModeDelay, o, s, r]),
              (0, d.useEffect)(() => o, [o]),
              (0, d.useMemo)(() => {
                var e, n;
                return {
                  active: a,
                  activeSince:
                    null != (e = null == r ? void 0 : r.createdAt) ? e : 0,
                  duration:
                    null != (n = null == t ? void 0 : t.slowModeDelay) ? n : 0,
                  getDiffMs: s,
                };
              }, [
                a,
                null == t ? void 0 : t.slowModeDelay,
                s,
                null == r ? void 0 : r.createdAt,
              ])
            );
          })({ chat: l, lastSentMessage: f }),
          T = (function (e) {
            let { chat: t, inSlowMode: r } = e,
              [a] = (0, L.Bd)(),
              [n, i] = (0, d.useState)(tj),
              [o, s] = (0, ej.A)(!1),
              l = (0, eS.N)(),
              c = (0, u.G)(v.Jz),
              m = (0, u.G)(g.eC),
              p = !!(null == t ? void 0 : t.writeBlocked),
              f = Math.max(0, R.BE - n.files.length),
              h = (function () {
                let e = (0, u.j)();
                return (0, d.useCallback)(
                  (t) => {
                    e((0, v.Z_)(t));
                  },
                  [e]
                );
              })(),
              x = (0, k.bR)();
            (0, td.A)(() => {
              c && (i((e) => ({ comment: c || "", files: e.files })), h(""));
            }),
              (0, tu.A)(() => {
                n.comment && h(n.comment);
              });
            let b = (0, d.useCallback)(
                async (e) => {
                  try {
                    await x(e.comment, e.files), s.setFalse(), i({ ...tj });
                  } catch (e) {
                    th({
                      message: a("Не удалось отправить, попробуйте еще раз"),
                    });
                  }
                },
                [a, s, x]
              ),
              y = (0, d.useCallback)(
                (e) => {
                  let t = { ...n, comment: (null != e ? e : n.comment).trim() };
                  !p &&
                    !r &&
                    (t.files.length
                      ? t.comment.length <= R.N$.MAX
                      : t.comment.length >= R.N$.MIN &&
                        t.comment.length <= R.N$.MAX) &&
                    b(t);
                },
                [p, r, n, b]
              ),
              j = (0, d.useCallback)((e) => i((t) => ({ ...t, ...e })), []),
              w = (0, tg.dh)(
                (e) => void l.api.setMessageTyping(e).catch(),
                3e3,
                { trailing: !1 }
              ),
              C = (0, d.useCallback)(
                (e) => {
                  !p && e.length <= R.N$.MAX && (j({ comment: e }), w(e));
                },
                [p, w, j]
              ),
              I = (0, d.useCallback)(
                async (e) => {
                  if (p) return;
                  let t = await tv({
                    files: tp()(e, "name"),
                    settings: { maxFiles: R.BE, restrictions: m },
                  });
                  "errors" in t
                    ? t.errors.forEach((e) =>
                        th({
                          ...M("files-validation-err-notification"),
                          message:
                            "file-too-large" === e.code
                              ? a(
                                  "Размер файла {{fileType}} не должен превышать {{max}} Мб",
                                  {
                                    fileType: e.details.fileType,
                                    max: Math.round(
                                      e.details.maxSize / 1024 / 1024
                                    ),
                                  }
                                )
                              : "invalid-file-contents" === e.code
                              ? a("Файл не поддерживается")
                              : "invalid-file-format" === e.code
                              ? a("Формат {{fileType}} не поддерживается", {
                                  fileType: e.details.fileType,
                                })
                              : a("Вы не можете загрузить более {{n}} файлов", {
                                  n: e.details.maxCount,
                                }),
                          closeButtonProps: {
                            ...M("files-validation-err-notification-btn"),
                          },
                        })
                      )
                    : t.files.length
                    ? (j({ files: t.files }), s.setTrue())
                    : (j({ files: [] }), s.setFalse());
                },
                [a, p, s, m, j]
              ),
              N = (0, d.useCallback)(() => {
                s.setFalse(), j({ files: [] });
              }, [s, j]);
            return {
              dropzone: { disabled: p || o, maxFiles: f, onDrop: I },
              footer: {
                blocked: p,
                maxFiles: f,
                message: n,
                onCommentChange: C,
                onFilesChange: I,
                sendMessage: y,
              },
              modal: {
                blocked: p,
                comment: n.comment,
                files: n.files,
                maxFiles: f,
                onCancel: N,
                onFilesChange: I,
                open: o,
                sendMessage: y,
              },
            };
          })({ chat: l, inSlowMode: A.active }),
          E = (function (e) {
            let { inSlowMode: t } = e,
              r = (0, eA.F)(t),
              a = (0, k.bR)();
            return {
              send: (0, d.useCallback)(
                (e) => {
                  r.current ||
                    a(e.text, void 0, {
                      $type: "SelectVariantCommand",
                      variantId: e.id,
                    });
                },
                [a, r]
              ),
            };
          })({ inSlowMode: A.active }),
          B = (function () {
            let { cookies: e } = (0, i.L)(),
              t = (0, u.G)(m.jf),
              r = (0, u.j)();
            (0, td.A)(() => {
              (async () => {
                let t = await tM(e);
                null === t
                  ? (r((0, m.RJ)(!0)), await tS(e, 1))
                  : r((0, m.RJ)(!!t));
              })();
            });
            let a = (0, d.useCallback)(async () => {
              let a = +!t,
                n = !t;
              r((0, m.RJ)(n)), await tS(e, a);
            }, [e, r, t]);
            return (0, d.useMemo)(() => ({ enabled: !!t, toggle: a }), [t, a]);
          })(),
          _ = !!l && !o && n === z.i.Ready;
        return (
          !(function (e) {
            let t = (0, d.useCallback)(
              (t) => {
                if ("clipboardData" in t) {
                  var r;
                  (null == (r = t.clipboardData) ? void 0 : r.files.length) &&
                    e(Array.from(t.clipboardData.files));
                }
              },
              [e]
            );
            (0, d.useEffect)(
              () => (
                window.addEventListener("paste", t),
                () => {
                  window.removeEventListener("paste", t);
                }
              ),
              [t]
            );
          })(T.footer.onFilesChange),
          !(function (e) {
            let { messages: t } = e,
              r = (0, u.G)(c.hd),
              { load: a } = (0, k.on)();
            (0, d.useEffect)(() => {
              t || a({ syncUnreadIds: !0 });
            }, [r, a, t]);
          })({ messages: y }),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(ta, {
                isMobile: r,
                header: (0, a.jsx)(t8, {
                  close: t,
                  operator: h,
                  sound: B,
                  typingStatus: null == l ? void 0 : l.typingStatus,
                }),
                body: (0, a.jsxs)(eh, {
                  ...T.dropzone,
                  children: [
                    (0, a.jsx)(q, { appStatus: n, authError: o }),
                    _ &&
                      (0, a.jsx)(r2, {
                        chat: l,
                        client: p,
                        invokeOperatorShown: N.allowed,
                        messageSubscription: S,
                        messages: y,
                        onSendMarkupVariant: E.send,
                        users: C,
                      }),
                  ],
                }),
                footer:
                  _ &&
                  !!y &&
                  (0, a.jsx)(tX, {
                    invoke: N,
                    messageCreation: T.footer,
                    slowMode: A,
                  }),
              }),
              (0, a.jsx)(em, { ...I }),
              (0, a.jsx)(e9, { ...T.modal, slowMode: A }),
            ],
          })
        );
      });
      r4.displayName = "Widget";
      let r5 = () => {
        let { params: e } = (0, i.L)(),
          { classes: t } = _({ isMobile: e.isMobile }),
          r = (0, u.G)(c.hd),
          s = (0, u.G)(m.lq),
          v = (function () {
            let { params: e } = (0, i.L)();
            return (0, d.useMemo)(
              () =>
                (0, o.jP)({
                  isMobile: e.isMobile,
                  language: e.language,
                  position: e.position,
                }),
              [e.isMobile, e.language, e.position]
            ).orientation;
          })(),
          b = (function () {
            let e = (0, u.j)(),
              { params: t, setFrameSize: r } = (0, i.L)();
            return (0, d.useCallback)(async () => {
              await r("collapse", { isMobile: t.isMobile, opener: t.opener }),
                e((0, m.pj)(!1));
            }, [e, t, r]);
          })(),
          y = (function () {
            let e = (0, u.j)(),
              { params: t, setFrameSize: r } = (0, i.L)();
            return (0, d.useCallback)(async () => {
              await r("open", { isMobile: t.isMobile, opener: t.opener }),
                e((0, m.pj)(!0));
            }, [e, t, r]);
          })();
        return (
          !(function () {
            let e = (0, u.G)(m._5),
              t = (0, l.c)(),
              r = (function () {
                let { api: e } = (0, p.N)(),
                  t = (0, u.j)(),
                  r = (0, h.A)((e) => e.env),
                  a = (0, f.P)(r);
                return (0, d.useCallback)(async () => {
                  try {
                    let r = await e.getConfiguration();
                    if (!r) return;
                    t((0, g.xN)(r));
                  } catch (e) {
                    a.error(e);
                  }
                }, [e, t, a]);
              })(),
              a = (function () {
                let { api: e } = (0, p.N)(),
                  t = (0, u.j)(),
                  r = (0, h.A)((e) => e.env),
                  a = (0, f.P)(r);
                return (0, d.useCallback)(async () => {
                  try {
                    let r = await e.getCurrentUser();
                    if (!r) return;
                    t((0, x.lt)(r));
                  } catch (e) {
                    a.error(e);
                  }
                }, [e, t, a]);
              })(),
              n = (0, u.j)(),
              i = (0, h.A)((e) => e.env),
              o = (0, f.P)(i);
            (0, d.useEffect)(() => {
              e === z.i.Syncing &&
                Promise.all([t(), r(), a()])
                  .then(() => {
                    n((0, j.A3)()), n((0, m.KE)(z.i.Ready));
                  })
                  .catch((e) => {
                    o.error("Sync failed", e);
                  });
            }, [e, n, t, r, a, o]);
          })(),
          !(function () {
            let e = (0, u.j)(),
              { cookies: t } = (0, i.L)(),
              r = (0, u.G)(m.lq),
              a = (0, d.useRef)(),
              n = (0, d.useRef)(null),
              o = (0, d.useCallback)(() => {
                a.current && (clearTimeout(a.current), (a.current = null));
              }, []),
              s = (0, d.useCallback)(() => {
                n.current && (clearInterval(n.current), (n.current = null));
              }, []),
              l = (0, d.useCallback)(() => {
                let r = D()(),
                  a = r.toISOString();
                e((0, m.uV)(a)),
                  t.set(R.Zv.lastActivity, a, {
                    expires: r.add(R.xU).toDate(),
                    path: "/",
                  });
              }, [t, e]);
            (0, d.useEffect)(
              () => (r ? (l(), (n.current = setInterval(l, 15e3))) : s(), s),
              [s, l, r]
            ),
              (0, d.useEffect)(() => {
                function t() {
                  document.hidden
                    ? (a.current = setTimeout(() => e((0, m.pj)(!1)), R.xU))
                    : o();
                }
                return (
                  document.addEventListener("visibilitychange", t),
                  function () {
                    document.removeEventListener("visibilitychange", t), o();
                  }
                );
              }, [o, e]);
          })(),
          (0, a.jsx)("div", {
            className: t.root,
            children: (0, a.jsxs)("div", {
              className: t.container,
              children: [
                "hidden" !==
                  (function (e) {
                    return T(e) ? e.type : e;
                  })(e.opener) &&
                  (0, a.jsx)(n.A, {
                    in: !s,
                    timeout: { enter: 400, exit: 100 },
                    unmountOnExit: !0,
                    children: (0, a.jsx)(E, {
                      onOpenWidget: y,
                      opener: e.opener,
                      orientation: v,
                      unreadMessageCount:
                        null == r ? void 0 : r.unreadMessageCount,
                    }),
                  }),
                (0, a.jsx)(n.A, {
                  in: s,
                  timeout: 200,
                  unmountOnExit: !0,
                  children: (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(r4, {
                      close: b,
                      isMobile: e.isMobile,
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      };
      var r3 = !0;
      let r6 = () => (0, a.jsx)(r5, {});
    },
  },
  (e) => {
    e.O(0, [273, 307, 345, 895, 636, 593, 792], () => e((e.s = 17703))),
      (_N_E = e.O());
  },
]);
