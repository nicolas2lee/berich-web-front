export const FETCHING_FUNDS_LIST = 'FETCHING_FUNDS_LIST';
export const FETCH_FUNDS_LIST_SUCCESS = 'FETCH_FUNDS_LIST_SUCCESS';
export const SORT_FUNDS_LIST = 'SORT_FUNDS_LIST';
/*
 * action creators
 */




export function sortFundsList(orderBy: string) {
    return {
        type: SORT_FUNDS_LIST,
        payload: {
            orderBy: orderBy
        }
    }
}