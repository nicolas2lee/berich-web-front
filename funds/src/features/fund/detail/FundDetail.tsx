// @ts-nocheck
import React from "react";
import FundDetailLineChart from "./FundDetailLineChart";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {mockFundDetailByFundCode} from "./FundDetailAction";
import {Card, Paper} from "@material-ui/core";


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

        const {fundDetails, loading, error} = this.props
        console.log('in fund detail render')
        console.log(this.props)
        console.log(fundDetails)

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        let labels = fundDetails.map(e => e.day);
        let closePrices = fundDetails.map(e=>e.close);
        let volumes = fundDetails.map(e=>e.volume)
        return (
            <div>
                <Card>
                    Fund Detail
                </Card>
                <Card>
                    <FundDetailLineChart title={'Close price'} labels={labels} data={closePrices}></FundDetailLineChart>
                </Card>
                <Card>
                    <FundDetailLineChart title={'Volume'} labels={labels} data={volumes}></FundDetailLineChart>
                </Card>
            </div>
        )
        ;
    }
}

FundDetail.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    fundDetails: state.fundDetailReducer.fundDetails,
    loading: state.fundDetailReducer.loading,
    error: state.fundDetailReducer.error
})

export default connect(
    mapStateToProps
)(FundDetail)