import { useCommonAnalytics as n } from "./entry-50afb6f36c.js";
import { createSharedComposable_createSharedComposable_2 as s } from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
const d = s(() => {
    const { sendGTagEvent: o, sendGoogleAndFatmanEvent: t } = n({
        analyticsCategory: "v3_Экспресс дня",
      }),
      c = (e) => (e ? "Live Экспресс дня" : "Экспресс дня");
    return {
      sendMarketsToCoupon: (e) => {
        o("v3_Добавить в купон", c(e));
      },
      clickGame: (e) => {
        o("v3_Клик на игру", c(e));
      },
      sendMarketToCoupon: (e) => {
        o("v3_Клик на исход", c(e));
      },
      clickNextPage: (e) => {
        o("v3_Клик на следующий экспресс", c(e));
      },
      clickDelete: (e) => {
        o("v3_Клик на Удалить", c(e));
      },
      clickMobileExpressLink: (e) => {
        t({
          google: e
            ? "click_on_live_acumulators_of_the_day"
            : "click_on_acumulators_of_the_day",
        });
      },
    };
  }),
  u = 50;
export { u as COUPON_MAX_BETS_DEFAULT, d as useExpressDayAnalytics };
