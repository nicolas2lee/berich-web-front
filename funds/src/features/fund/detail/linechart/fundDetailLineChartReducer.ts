import {Period} from "./FunDetailLineChartModel";
import {PERIOD_CHANGE} from "./FundDetailLineChartAction";


export const LAST_MONTH = new Period(1, "last 1 month")
export const LAST_THREE_MONTHS = new Period(3, "last 3 months")
export const LAST_SIX_MONTHS = new Period(6, "last 6 months")
export const LAST_YEAR =  new Period(12, "last year")
export const LAST_THREE_YEARS = new Period(36, "last 3 years")


export const PERIODS = [
    LAST_THREE_YEARS,
    LAST_YEAR,
    LAST_SIX_MONTHS,
    LAST_THREE_MONTHS,
    LAST_MONTH
];

const initialState = {
   selectedPeriod: LAST_THREE_YEARS
};


const fundDetailLineChartReducer = (state = initialState, action: any) => {
    switch (action.type) {
     /*   case PREPARE_GRAPH_DATA:
            let fundDetails = action.payload.fundDetails;
            console.log('log fundDetails action')
            console.log(fundDetails)
            if (Array.isArray(fundDetails) && fundDetails.length===0) return Object.assign({}, state)
            else return Object.assign({}, state, {
                graph: {
                    labels: getGraphLabelFromFundDetails(fundDetails),
                    datasets: [{
                        label: '# of Votes',
                        data: getClosePriceFromFundDetails(fundDetails),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            });*/
        case PERIOD_CHANGE:
            return Object.assign({}, state, {
                selectedPeriod: action.payload.selectedPeriod
            })
        default:
            return state
    }
};

export default fundDetailLineChartReducer