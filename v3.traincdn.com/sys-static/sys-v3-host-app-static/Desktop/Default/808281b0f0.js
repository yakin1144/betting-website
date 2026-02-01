import {
  defineMultiImplementedFeature as t,
  Platforms as i,
} from "./entry-85993dc44c.js";
const e = t("FooterGridSizeConfig", !0, [i.Desktop]),
  o = {
    footerDefault: { size: 3 },
    footerNav: { size: 12 },
    footerPartners: { size: 12 },
    footerLeagues: { size: 12 },
    footerAwards: { size: 12 },
    footerSpot: { size: 1 },
    footerLicensesMany: { size: 12 },
    footerLicensesFew: { size: 1, max: 1, strictExpand: !0 },
    footerResponsibleGambling: { size: 12 },
    footerCuracao: { size: 1, max: 3 },
    footerGamingCuracao: { size: 1, max: 3 },
    footerLegal: { size: 4, priority: !0, breakpoints: { XXL: { size: 5 } } },
    footerSupport: {
      size: 3,
      breakpoints: { XXL: { size: 4 }, XL: { size: 4 } },
    },
    footerActions: {
      size: 2,
      max: 2,
      strictExpand: !0,
      breakpoints: { XL: { size: 3 } },
    },
    footerPaymentsSlider: { size: 12 },
    footerTimer: { size: 12 },
  },
  r = e.defineEntityImplementation(() => o),
  S = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  n = e.defineEntityImplementation(() => ({
    ...o,
    footerLegal: { size: 6, priority: !0 },
    footerActions: { max: 2, size: 1, strictExpand: !0 },
    footerSubInfo: { size: 12 },
    footerSupport: { size: 2 },
    footerLicensesMany: { size: 4 },
    footerLinkStopInTime: {
      size: 3,
      breakpoints: { XL: { size: 4 }, XXL: { size: 6 } },
    },
    footerResponsibleGambling: { size: 8 },
  })),
  m = Object.freeze(
    Object.defineProperty({ __proto__: null, default: n }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  s = e.defineEntityImplementation(() => ({
    ...o,
    footerActions: {
      max: 2,
      size: 2,
      breakpoints: { XL: { size: 2 } },
      strictExpand: !0,
    },
  })),
  _ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: s }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  a = e.defineEntityImplementation(() => ({
    ...o,
    footerActions: { max: 3, size: 2, strictExpand: !0 },
    footerSupport: { size: 3, breakpoints: { XXL: { size: 4 } } },
  })),
  g = Object.freeze(
    Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  f = e.defineEntityImplementation(() => ({
    ...o,
    footerAbout: { size: 12 },
    footerLegal: { size: 5, priority: !0 },
    footerActions: {
      max: 3,
      size: 2,
      breakpoints: { XL: { size: 3 } },
      strictExpand: !0,
    },
    footerSupport: { size: 4, priority: !0 },
    footerEmailSupport: { size: 3, breakpoints: { XXL: { size: 4 } } },
  })),
  b = Object.freeze(
    Object.defineProperty({ __proto__: null, default: f }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  z = e.defineEntityImplementation(() => ({
    ...o,
    footerCookie: { size: 5, priority: !0 },
    footerActions: {
      max: 3,
      size: 2,
      priority: !0,
      breakpoints: { XL: { size: 4 }, XXL: { size: 3 } },
    },
    footerLegalities: { size: 12 },
  })),
  y = Object.freeze(
    Object.defineProperty({ __proto__: null, default: z }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  l = e.defineEntityImplementation(() => ({
    ...o,
    footerLegal: { size: 6, priority: !0 },
    footerActions: { max: 2, size: 1, strictExpand: !0 },
    footerSubInfo: { size: 12 },
    footerSupport: { size: 2 },
    footerLinkStopInTime: {
      size: 3,
      breakpoints: { XL: { size: 4 }, XXL: { size: 6 } },
    },
  })),
  L = Object.freeze(
    Object.defineProperty({ __proto__: null, default: l }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  p = e.defineEntityImplementation(() => ({
    ...o,
    footerAwards: { size: 3, breakpoints: { XL: { size: 2 } } },
    footerPartners: { size: 1, max: 1 },
    footerLicensesMany: {
      size: 8,
      max: 11,
      breakpoints: { XXL: { size: 6 }, XL: { size: 5 } },
    },
  })),
  X = Object.freeze(
    Object.defineProperty({ __proto__: null, default: p }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  d = e.defineEntityImplementation(() => ({
    ...o,
    footerLegal: { size: 5, priority: !0 },
    footerSupport: {
      size: 7,
      breakpoints: { XXL: { size: 5 }, XL: { size: 3 } },
    },
  })),
  C = Object.freeze(
    Object.defineProperty({ __proto__: null, default: d }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function u() {
  throw new Error("You can't use sync loaders on client");
}
const F = Object.freeze(
  Object.defineProperty({ __proto__: null, default: u }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  S as FooterGridSizeConfig,
  m as FooterGridSizeConfig$1,
  _ as FooterGridSizeConfig$2,
  g as FooterGridSizeConfig$3,
  b as FooterGridSizeConfig$4,
  y as FooterGridSizeConfig$5,
  L as FooterGridSizeConfig$6,
  X as FooterGridSizeConfig$7,
  C as FooterGridSizeConfig$8,
  F as loadFooterGridSizeConfigSync,
};
