import $_$ from "./$_$.js";
$_$();
import {
  reactivity_esmBundler_ref as M,
  runtimeCore_esmBundler_computed as C,
  reactivity_esmBundler_unref as e,
  sortBySearchString as te,
  runtimeCore_esmBundler_defineComponent as A,
  theme_constants_themeType as i,
  runtimeCore_esmBundler_resolveComponent as n,
  runtimeCore_esmBundler_createBlock as r,
  runtimeCore_esmBundler_openBlock as s,
  runtimeCore_esmBundler_withCtx as t,
  runtimeCore_esmBundler_createElementVNode as $,
  alignType as E,
  size_constants_sizeType as _,
  iconName as N,
  stopElements as ne,
  runtimeCore_esmBundler_createSlots as v,
  runtimeCore_esmBundler_createVNode as c,
  runtimeCore_esmBundler_createCommentVNode as k,
  reactivity_esmBundler_isRef as oe,
  runtimeCore_esmBundler_createElementBlock as se,
  runtimeCore_esmBundler_Fragment as ie,
  runtimeCore_esmBundler_renderList as re,
  runtimeCore_esmBundler_createTextVNode as m,
  shared_esmBundler_toDisplayString as h,
  shared_esmBundler_normalizeClass as ae,
  WeightType as le,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useLanguagesStore as ce } from "./1c8c17a20a.js";
import { fuse_esm_default as ue } from "../../../shared-assets/Desktop/__shared_1c5f097ec1.js";
import {
  _export_sfc as x,
  useHostAppAnalytics as de,
} from "./entry-85993dc44c.js";
const ge = (l) => {
    $_$();
    const o = M(""),
      d = C(
        () =>
          $_$() &&
          new ue(e(l), {
            ignoreLocation: !0,
            shouldSort: !1,
            threshold: 0.3,
            keys: ["title", "countryCode"],
          })
      ),
      y = C(() =>
        $_$() && e(o)
          ? te(
              e(d)
                .search(e(o))
                .map(({ item: S }) => S),
              e(o),
              "title"
            )
          : e(l)
      );
    return { searchQuery: o, languageOptionsFiltered: y };
  },
  pe = A({
    name: "LanguageSettingsDropdownLoaderStub",
    props: { theme: { type: String, default: i.default } },
  });
function _e(l, o, d, y, S, L) {
  $_$();
  const U = n("UiSkeleton");
  return (
    s(),
    r(
      U,
      {
        repeat: 5,
        class: "language-settings-dropdown-loader-stub",
        theme: l.theme,
      },
      {
        default: t(
          () =>
            ($_$() && o[0]) ||
            (o[0] = [
              $(
                "div",
                { class: "language-settings-dropdown-loader-stub__item" },
                null,
                -1
              ),
            ])
        ),
        _: 1,
      },
      8,
      ["theme"]
    )
  );
}
const me = x(pe, [
    ["render", _e],
    ["__scopeId", "data-v-a9a90091"],
  ]),
  he = (l) => {
    $_$();
    const o = l ? "left" : "bottom",
      d = l ? E.START : E.END;
    return { directionDropdown: o, alignDropdown: d };
  },
  p = {
    UiButton: i.primary,
    UiDropdownTrigger: i.primary,
    UiDropdown: i.gray100,
    UiScrollbar: i.gray,
    UiSearch: i.gray60,
    UiEmptyMessage: i.gray100,
    UiMessageBlock: i.gray100,
    UiSelectContent: i.gray100,
    UiSelectOptions: i.gray100,
    UiOption: i.gray100,
    UiSelection: void 0,
    UiTabs: i.gray,
  },
  u = {
    dropdownTriangle: !0,
    dropdownInline: !1,
    languageDropdownIco: N.GLOBE_ASIA,
    showLanguageLinkIco: !0,
    captionSize: _.xs,
    tabSize: _.m,
    tabCaptionSize: _.m,
    tabEqual: !1,
    customSearchButtons: !1,
    hasCompact: !0,
    showCountryCode: !0,
  },
  Se = { class: "language-settings-dropdown-option__content" },
  ye = 8,
  we = A({
    __name: "LanguageSettingsDropdown",
    props: {
      optionMode: { type: Boolean, required: !1 },
      buttonMode: { type: Boolean, required: !1 },
    },
    setup(l) {
      $_$();
      const o = l,
        {
          languages: d,
          currentLanguageCode: y,
          currentLanguageCountryCode: S,
          setLanguage: L,
          currentLanguage: U,
        } = ce(),
        V = C(() => $_$() && e(U).picture),
        F = C(() => o.optionMode || o.buttonMode),
        { searchQuery: f, languageOptionsFiltered: z } = ge(d),
        G = de(),
        D = M(e(y)),
        { directionDropdown: q, alignDropdown: H } = he(o.optionMode),
        R = e(d).length > ye,
        P = (g) => {
          G.modules.header.setLanguage(g.countryCode), (D.value = g.code), L(g);
        };
      return (g, b) => {
        $_$();
        const T = n("UiIcoCountry"),
          w = n("UiCaption"),
          I = n("UiIco"),
          Q = n("UiButton"),
          O = n("UiOption"),
          W = n("UiSearchButton"),
          j = n("UiSearch"),
          J = n("UiSelectItem"),
          K = n("UiSelectOptions"),
          X = n("UiEmptyMessage"),
          Y = n("UiScrollbar"),
          Z = n("UiDropdownContent"),
          ee = n("UiDropdown");
        return (
          s(),
          r(
            ee,
            {
              align: e(H),
              direction: e(q),
              stopElementsStore: e(ne),
              triangle: e(u).dropdownTriangle,
              triggerTooltip: g.$T("settings_language_title"),
              theme: e(p).UiDropdown,
              inline: e(u).dropdownInline,
              class: "language-settings-dropdown",
            },
            v(
              {
                customContent: t(
                  () =>
                    $_$() && [
                      c(
                        Z,
                        {
                          theme: e(p).UiDropdown,
                          class: "language-settings-dropdown__content",
                        },
                        {
                          default: t(
                            () =>
                              $_$() && [
                                R
                                  ? (s(),
                                    r(
                                      j,
                                      {
                                        key: 0,
                                        modelValue: e(f),
                                        "onUpdate:modelValue":
                                          b[0] ||
                                          (b[0] = (a) =>
                                            $_$() && oe(f)
                                              ? (f.value = a)
                                              : null),
                                        theme: e(p).UiSearch,
                                        placeholder: g.$T("link_menu_search"),
                                        isSearchButtonDisabled: "",
                                        class:
                                          "language-settings-dropdown__search language-settings-dropdown-search",
                                      },
                                      v({ _: 2 }, [
                                        e(u).customSearchButtons
                                          ? {
                                              name: "buttons",
                                              fn: t(
                                                () =>
                                                  $_$() && [
                                                    c(W, {
                                                      isDisabled: "",
                                                      class:
                                                        "language-settings-dropdown-search__button",
                                                    }),
                                                  ]
                                              ),
                                              key: "0",
                                            }
                                          : void 0,
                                      ]),
                                      1032,
                                      ["modelValue", "theme", "placeholder"]
                                    ))
                                  : k("", !0),
                                e(d).length
                                  ? (s(),
                                    r(
                                      Y,
                                      {
                                        key: 1,
                                        theme: e(p).UiScrollbar,
                                        class:
                                          "language-settings-dropdown__scroll",
                                      },
                                      {
                                        default: t(
                                          () =>
                                            $_$() && [
                                              e(z).length
                                                ? (s(),
                                                  r(
                                                    K,
                                                    {
                                                      key: 0,
                                                      theme:
                                                        e(p).UiSelectOptions,
                                                    },
                                                    {
                                                      default: t(
                                                        () =>
                                                          $_$() && [
                                                            (s(!0),
                                                            se(
                                                              ie,
                                                              null,
                                                              re(
                                                                e(z),
                                                                (a) =>
                                                                  $_$() &&
                                                                  (s(),
                                                                  r(
                                                                    J,
                                                                    {
                                                                      key: a.code,
                                                                    },
                                                                    {
                                                                      default:
                                                                        t(
                                                                          () =>
                                                                            $_$() && [
                                                                              c(
                                                                                O,
                                                                                {
                                                                                  onClick:
                                                                                    (
                                                                                      B
                                                                                    ) =>
                                                                                      P(
                                                                                        a
                                                                                      ),
                                                                                  isSelected:
                                                                                    a.code ===
                                                                                    e(
                                                                                      D
                                                                                    ),
                                                                                  theme:
                                                                                    e(
                                                                                      p
                                                                                    )
                                                                                      .UiOption,
                                                                                  class:
                                                                                    "language-settings-dropdown-option",
                                                                                },
                                                                                {
                                                                                  default:
                                                                                    t(
                                                                                      () =>
                                                                                        $_$() && [
                                                                                          $(
                                                                                            "span",
                                                                                            Se,
                                                                                            [
                                                                                              e(
                                                                                                u
                                                                                              )
                                                                                                .showLanguageLinkIco
                                                                                                ? (s(),
                                                                                                  r(
                                                                                                    T,
                                                                                                    {
                                                                                                      key: 0,
                                                                                                      ico: a.picture,
                                                                                                      class:
                                                                                                        "language-settings-dropdown-option__ico",
                                                                                                    },
                                                                                                    null,
                                                                                                    8,
                                                                                                    [
                                                                                                      "ico",
                                                                                                    ]
                                                                                                  ))
                                                                                                : k(
                                                                                                    "",
                                                                                                    !0
                                                                                                  ),
                                                                                              e(
                                                                                                u
                                                                                              )
                                                                                                .showCountryCode
                                                                                                ? (s(),
                                                                                                  r(
                                                                                                    w,
                                                                                                    {
                                                                                                      key: 1,
                                                                                                      size: e(
                                                                                                        _
                                                                                                      )
                                                                                                        .xs,
                                                                                                      uppercase:
                                                                                                        "",
                                                                                                      class:
                                                                                                        "language-settings-dropdown-option__country-code",
                                                                                                    },
                                                                                                    {
                                                                                                      default:
                                                                                                        t(
                                                                                                          () =>
                                                                                                            $_$() && [
                                                                                                              m(
                                                                                                                h(
                                                                                                                  a.countryCode
                                                                                                                ),
                                                                                                                1
                                                                                                              ),
                                                                                                            ]
                                                                                                        ),
                                                                                                      _: 2,
                                                                                                    },
                                                                                                    1032,
                                                                                                    [
                                                                                                      "size",
                                                                                                    ]
                                                                                                  ))
                                                                                                : k(
                                                                                                    "",
                                                                                                    !0
                                                                                                  ),
                                                                                              c(
                                                                                                w,
                                                                                                {
                                                                                                  size: e(
                                                                                                    u
                                                                                                  )
                                                                                                    .captionSize,
                                                                                                  class:
                                                                                                    "language-settings-dropdown-option__title",
                                                                                                },
                                                                                                {
                                                                                                  default:
                                                                                                    t(
                                                                                                      () =>
                                                                                                        $_$() && [
                                                                                                          m(
                                                                                                            h(
                                                                                                              a.title
                                                                                                            ),
                                                                                                            1
                                                                                                          ),
                                                                                                        ]
                                                                                                    ),
                                                                                                  _: 2,
                                                                                                },
                                                                                                1032,
                                                                                                [
                                                                                                  "size",
                                                                                                ]
                                                                                              ),
                                                                                            ]
                                                                                          ),
                                                                                        ]
                                                                                    ),
                                                                                  _: 2,
                                                                                },
                                                                                1032,
                                                                                [
                                                                                  "onClick",
                                                                                  "isSelected",
                                                                                  "theme",
                                                                                ]
                                                                              ),
                                                                            ]
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1024
                                                                  ))
                                                              ),
                                                              128
                                                            )),
                                                          ]
                                                      ),
                                                      _: 1,
                                                    },
                                                    8,
                                                    ["theme"]
                                                  ))
                                                : (s(),
                                                  r(
                                                    X,
                                                    {
                                                      key: 1,
                                                      theme:
                                                        e(p).UiEmptyMessage,
                                                    },
                                                    {
                                                      default: t(
                                                        () =>
                                                          $_$() && [
                                                            m(
                                                              h(
                                                                g.$T(
                                                                  "main_search_not_found"
                                                                )
                                                              ),
                                                              1
                                                            ),
                                                          ]
                                                      ),
                                                      _: 1,
                                                    },
                                                    8,
                                                    ["theme"]
                                                  )),
                                            ]
                                        ),
                                        _: 1,
                                      },
                                      8,
                                      ["theme"]
                                    ))
                                  : (s(), r(me, { key: 2 })),
                              ]
                          ),
                          _: 1,
                        },
                        8,
                        ["theme"]
                      ),
                    ]
                ),
                _: 2,
              },
              [
                e(F)
                  ? {
                      name: "customTrigger",
                      fn: t(
                        ({ isOpen: a, toggle: B }) =>
                          $_$() && [
                            l.buttonMode
                              ? (s(),
                                r(
                                  Q,
                                  {
                                    key: 0,
                                    onClick: B,
                                    captionSize: e(u).captionSize,
                                    uppercase: !1,
                                    class: ae([
                                      "language-settings-dropdown__btn",
                                      {
                                        "language-settings-dropdown__btn--is-open":
                                          a,
                                      },
                                    ]),
                                  },
                                  {
                                    container: t(
                                      () =>
                                        $_$() && [
                                          c(
                                            T,
                                            {
                                              size: e(_).l,
                                              ico: e(V),
                                              bordered: !1,
                                              class:
                                                "language-settings-dropdown__icon",
                                            },
                                            null,
                                            8,
                                            ["size", "ico"]
                                          ),
                                          c(
                                            w,
                                            {
                                              size: e(_).m,
                                              weight: e(le).BOLD,
                                              uppercase: "",
                                              class:
                                                "language-settings-dropdown__lang",
                                            },
                                            {
                                              default: t(
                                                () => $_$() && [m(h(e(S)), 1)]
                                              ),
                                              _: 1,
                                            },
                                            8,
                                            ["size", "weight"]
                                          ),
                                          c(
                                            I,
                                            {
                                              size: e(_).xxxs,
                                              ico: e(N).ANGLE,
                                              class:
                                                "language-settings-dropdown__angle",
                                            },
                                            null,
                                            8,
                                            ["size", "ico"]
                                          ),
                                        ]
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  ["onClick", "captionSize", "class"]
                                ))
                              : (s(),
                                r(
                                  O,
                                  {
                                    key: 1,
                                    onClick: B,
                                    isSelected: a,
                                    theme: e(p).UiOption,
                                    captionSize: e(u).captionSize,
                                    class: "language-settings-dropdown__option",
                                  },
                                  {
                                    ico: t(
                                      () =>
                                        $_$() && [
                                          c(
                                            I,
                                            { ico: e(u).languageDropdownIco },
                                            null,
                                            8,
                                            ["ico"]
                                          ),
                                        ]
                                    ),
                                    caption: t(
                                      () =>
                                        $_$() && [
                                          m(
                                            h(g.$T("settings_language_title")),
                                            1
                                          ),
                                        ]
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  [
                                    "onClick",
                                    "isSelected",
                                    "theme",
                                    "captionSize",
                                  ]
                                )),
                          ]
                      ),
                      key: "0",
                    }
                  : {
                      name: "trigger",
                      fn: t(
                        () =>
                          $_$() && [
                            c(
                              w,
                              { size: e(_).xs, uppercase: "" },
                              {
                                default: t(() => $_$() && [m(h(e(S)), 1)]),
                                _: 1,
                              },
                              8,
                              ["size"]
                            ),
                          ]
                      ),
                      key: "1",
                    },
              ]
            ),
            1032,
            [
              "align",
              "direction",
              "stopElementsStore",
              "triangle",
              "triggerTooltip",
              "theme",
              "inline",
            ]
          )
        );
      };
    },
  }),
  ke = x(we, [["__scopeId", "data-v-ff6e1575"]]);
export {
  ke as LanguageSettingsDropdown,
  me as LanguageSettingsDropdownLoaderStub,
  u as applicationSettingsConfig,
  p as applicationSettingsPanelColorScheme,
  he as useApplicationSettingsDropdownsProps,
  ge as useSearchLanguageOptions,
};
