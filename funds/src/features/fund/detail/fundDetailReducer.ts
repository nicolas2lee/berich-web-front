import {FETCH_FUND_DETAIL_SUCCESS, FETCHING_FUND_DETAIL, PREPARE_GRAPH_DATA} from "./FundDetailAction";
import {FundDetail} from "../FundModel";

const initialState = {
    fundDetails: [],
    loading: true,
    error: null,
};

function getGraphLabelFromFundDetails(fundDetails: FundDetail[]){
    console.log('in get graph label ')
    console.log(fundDetails)
    let labels = fundDetails.map(e=> e.day);
    console.log('labels are:')
    console.log(labels)
    return labels;
}

const fundDetailReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCHING_FUND_DETAIL:
            return Object.assign({}, state, {
                loading: true
            });
        case FETCH_FUND_DETAIL_SUCCESS:
            console.log(action)
            return Object.assign({}, state, {
                fundDetails: action.payload.fundDetails,
                loading: false
            });
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
        default:
            return state
    }
};

export default fundDetailReducer