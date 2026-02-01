import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as G } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as K,
  execAsync as S,
  reactivity_esmBundler_toRefs as I,
  index_useAppStorage as Y,
  index_useLogger as $,
  index_useVModal as N,
  reactivity_esmBundler_ref as w,
  runtimeCore_esmBundler_onMounted as L,
  runtimeCore_esmBundler_resolveComponent as c,
  runtimeCore_esmBundler_createElementBlock as P,
  runtimeCore_esmBundler_openBlock as q,
  runtimeCore_esmBundler_createVNode as l,
  reactivity_esmBundler_unref as e,
  stopElements as W,
  runtimeCore_esmBundler_withCtx as _,
  runtimeCore_esmBundler_createTextVNode as X,
  shared_esmBundler_toDisplayString as j,
  runtimeDom_esmBundler_withKeys as F,
  runtimeDom_esmBundler_withModifiers as g,
  reactivity_esmBundler_isRef as J,
  AppStorageKey as E,
  uniqueBy as Q,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useTooltipOptions as Z,
  loadGamesSearchConfigDesktop as ee,
  MAX_SEARCH_SYMBOL_COUNT as te,
  cloneDeep as oe,
  createGameSearchModal as re,
  _export_sfc as ne,
} from "./entry-50afb6f36c.js";
import { createGameSearchConfig as se } from "./60e9c9f553.js";
const pe = "sports",
  ae = { class: "games-search-app" },
  ie = K({
    __name: "GamesSearchApp",
    props: {
      bettingType: {},
      uiSearchSize: {},
      uiSearchButtonSize: {},
      configVariant: { default: () => "default" },
    },
    async setup(U) {
      $_$();
      let m, f, p, y;
      const C = U,
        { tooltipTheme: x } = Z(),
        B = (([p, y] = G(() => ee())),
        (p = (([m, f] = S(() => p)), (m = await m), f(), m)),
        y(),
        p)(),
        i = B[C.configVariant],
        { styles: M } = B;
      se(i);
      const { bettingType: O } = I(C),
        T = Y(),
        b = $(),
        k = N(),
        n = w(""),
        s = w([]),
        H = async () => {
          $_$();
          let t, o;
          try {
            const r =
              (([t, o] = S(
                () => $_$() && T.getItem(E.GAMES_SEARCH_HISTORY_KEY)
              )),
              (t = await t),
              o(),
              t);
            s.value = r != null ? r : [];
          } catch (r) {
            b.error("loadSearchHistory error", r);
          }
        },
        v = () => {
          $_$();
          k.show(re(), { text: e(n), bettingType: e(O), config: i, styles: M });
        },
        A = async (t) => {
          $_$();
          let o, r;
          if ((t(), v(), e(n) !== "")) {
            s.value.push(e(n)), (s.value = Q(e(s)).slice(-5));
            try {
              ([o, r] = S(
                () => $_$() && T.setItem(E.GAMES_SEARCH_HISTORY_KEY, oe(e(s)))
              )),
                await o,
                r();
            } catch (u) {
              b.error("onSearchSubmit error", u);
            }
          }
        },
        z = (t, o) => {
          o(), (n.value = t), v();
        };
      return (
        L(H),
        (t, o) => {
          $_$();
          const r = c("UiSearchButton"),
            u = c("UiSearch"),
            D = c("UiSelectOptions"),
            R = c("UiSelectContent"),
            V = c("UiDropdown");
          return (
            q(),
            P("div", ae, [
              l(
                V,
                {
                  disabled: !e(s).length,
                  stopElementsStore: e(W),
                  theme: e(i).uiDropdownTheme,
                  triangle: !1,
                  sameWidth: "",
                  class: "games-search-app__dropdown",
                },
                {
                  customTrigger: _(
                    ({ toggle: h, close: a }) =>
                      $_$() && [
                        l(
                          u,
                          {
                            modelValue: e(n),
                            "onUpdate:modelValue":
                              o[0] ||
                              (o[0] = (d) =>
                                $_$() && J(n) ? (n.value = d) : null),
                            modelModifiers: { trim: !0 },
                            onClick: g(h, ["stop"]),
                            onKeyup: F(
                              g((d) => A(a), ["stop"]),
                              ["enter"]
                            ),
                            theme: e(i).uiSearchTheme,
                            placeholder: t.$T(
                              "betting_games_matches_search_placeholder"
                            ),
                            class:
                              "games-search-app__search games-search-app-search",
                            size: t.uiSearchSize,
                            maxlength: e(te),
                          },
                          {
                            buttons: _(
                              () =>
                                $_$() && [
                                  l(
                                    r,
                                    {
                                      onClick: g(
                                        (d) => A(a),
                                        ["prevent", "stop"]
                                      ),
                                      tooltipText: t.$T(
                                        "betting_games_do_search"
                                      ),
                                      tooltipTheme: e(x),
                                      "aria-label": t.$T(
                                        "betting_games_do_search"
                                      ),
                                      size: t.uiSearchButtonSize,
                                      class: "games-search-app-search__button",
                                    },
                                    null,
                                    8,
                                    [
                                      "onClick",
                                      "tooltipText",
                                      "tooltipTheme",
                                      "aria-label",
                                      "size",
                                    ]
                                  ),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          [
                            "modelValue",
                            "onClick",
                            "onKeyup",
                            "theme",
                            "placeholder",
                            "size",
                            "maxlength",
                          ]
                        ),
                      ]
                  ),
                  default: _(
                    ({ close: h }) =>
                      $_$() && [
                        l(
                          R,
                          { class: "games-search-app__content" },
                          {
                            default: _(
                              () =>
                                $_$() && [
                                  l(
                                    D,
                                    {
                                      onSetOption: (a) => z(a, h),
                                      theme: e(i).uiSelectOptionsTheme,
                                      options: e(s),
                                    },
                                    {
                                      caption: _(
                                        ({ option: a }) => $_$() && [X(j(a), 1)]
                                      ),
                                      _: 2,
                                    },
                                    1032,
                                    ["onSetOption", "theme", "options"]
                                  ),
                                ]
                            ),
                            _: 2,
                          },
                          1024
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["disabled", "stopElementsStore", "theme"]
              ),
            ])
          );
        }
      );
    },
  }),
  ue = ne(ie, [["__scopeId", "data-v-bf4e984a"]]);
export { ue as GamesSearchApp, pe as SPORTS_NAME_PATH };
