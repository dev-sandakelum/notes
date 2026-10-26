/**
 * All data-driven Economics chart specs in one place.
 *
 * Each spec is a serialisable EconChartSpec: the numbers that drive the
 * drawing are the same numbers that appear in the data table and the
 * generated caption, and the unit tests recompute every claim from the
 * exported constants.
 */

export {
  PPC_FRONTIER_CHART,
  PPC_SHIFTS_CHART,
  PPC_POINTS,
  PPC_STEP_COSTS,
  PPC_BASE,
  PPC_GROWTH,
  PPC_DECLINE,
} from "./ppc";

export {
  MARKET_EQUILIBRIUM_CHART,
  DS_MARKET,
} from "./demand-supply";

export {
  BUFFER_STOCK_CHART,
  BUFFER_STOCK,
  PRICE_CEILING_CHART,
  PRICE_FLOOR_CHART,
  CONSUMER_PRODUCER_SURPLUS_CHART,
  CSPS,
  DWL_MAX_PRICE_CHART,
  PER_UNIT_TAX_CHART,
  TAX,
  PER_UNIT_SUBSIDY_CHART,
  SUBSIDY,
  BASE_MARKET,
  BASE_EQ,
} from "./intervention";

export {
  TOTAL_PRODUCT_CHART,
  MP_AP_CHART,
  TOTAL_COSTS_CHART,
  UNIT_COSTS_CHART,
  LRATC_CHART,
  PROD_TABLE,
  MP_L,
  AP_L,
  COST_FN,
} from "./production-cost";

export {
  TU_MU_CHART,
  BUSINESS_CYCLE_CHART,
  MU_VALUES,
  TU_VALUES,
  CYCLE,
} from "./utility-macro";

import type { EconChartSpec } from "@/content/types";
import { PPC_FRONTIER_CHART, PPC_SHIFTS_CHART } from "./ppc";
import { MARKET_EQUILIBRIUM_CHART } from "./demand-supply";
import {
  BUFFER_STOCK_CHART,
  PRICE_CEILING_CHART,
  PRICE_FLOOR_CHART,
  CONSUMER_PRODUCER_SURPLUS_CHART,
  DWL_MAX_PRICE_CHART,
  PER_UNIT_TAX_CHART,
  PER_UNIT_SUBSIDY_CHART,
} from "./intervention";
import {
  TOTAL_PRODUCT_CHART,
  MP_AP_CHART,
  TOTAL_COSTS_CHART,
  UNIT_COSTS_CHART,
  LRATC_CHART,
} from "./production-cost";
import { TU_MU_CHART, BUSINESS_CYCLE_CHART } from "./utility-macro";

/** Every Economics chart, in book order (used by the test suite). */
export const ALL_ECON_CHARTS: EconChartSpec[] = [
  PPC_FRONTIER_CHART,
  PPC_SHIFTS_CHART,
  MARKET_EQUILIBRIUM_CHART,
  BUFFER_STOCK_CHART,
  PRICE_CEILING_CHART,
  PRICE_FLOOR_CHART,
  CONSUMER_PRODUCER_SURPLUS_CHART,
  DWL_MAX_PRICE_CHART,
  PER_UNIT_TAX_CHART,
  PER_UNIT_SUBSIDY_CHART,
  TOTAL_PRODUCT_CHART,
  MP_AP_CHART,
  TOTAL_COSTS_CHART,
  UNIT_COSTS_CHART,
  LRATC_CHART,
  TU_MU_CHART,
  BUSINESS_CYCLE_CHART,
];
