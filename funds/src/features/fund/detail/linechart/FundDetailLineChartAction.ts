import {Period} from "./FunDetailLineChartModel";

export const PERIOD_CHANGE = 'PERIOD_CHANGE';

export function changePeriod(p: Period) {
    return {
        type: PERIOD_CHANGE,
        payload: {
            selectedPeriod: p
        }
    }
}
