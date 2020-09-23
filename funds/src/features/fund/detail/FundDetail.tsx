// @ts-nocheck
import React from "react";
import FundDetailLineChart from "./linechart/FundDetailLineChart";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {mockFundDetailByFundCode} from "./FundDetailAction";
import {LineChartData, Point} from "./FundDetailModel";


class FundDetail extends React.Component{
    componentDidMount() {
        let fundCode = this.props.match.params.id
        this.props.dispatch(mockFundDetailByFundCode(fundCode))
    }

    getLabelFromFundDetails : string[] = (fundDetails: FundDetail[]) =>{
        return fundDetails.map(e=>e.day)
    }

    getClosePriceFromFundDetails : string[] = (fundDetails: FundDetail[]) =>{
        return fundDetails.map(e=>e.close)
    }

    render() {

        const {fundDetails, loading, error, value, dispatch} = this.props
        console.log('in fund detail render')
        console.log(this.props)
        console.log(fundDetails)

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        let closePrices = fundDetails.map(e => new Point(e.day, e.close));
        let volumes = fundDetails.map(e => new Point(e.day, e.volume))


        return (
            <div >
                <FundDetailLineChart title={'Close price'} data={closePrices} />
                <FundDetailLineChart title={'Volume'} data={volumes}  />
            </div>
        )
        ;
    }
}

FundDetail.propTypes = {
    dispatch: PropTypes.func.isRequired,
    fundDetails: PropTypes.arrayOf(FundDetail)
};

const mapStateToProps = state => ({
    fundDetails: state.fundDetailReducer.fundDetails,
    loading: state.fundDetailReducer.loading,
    error: state.fundDetailReducer.error,
    value: state.fundDetailReducer.tabValue
})

export default connect(
    mapStateToProps
)(FundDetail)