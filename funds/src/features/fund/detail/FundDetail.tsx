// @ts-nocheck
import React from "react";
import BarChart from "./BarChart";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchFundDetailByFundCode, mockFundDetailByFundCode} from "./FundDetailAction";


class FundDetail extends React.Component{
    componentDidMount() {
        let fundCode = this.props.match.params.id
        this.props.dispatch(mockFundDetailByFundCode(fundCode))
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

        return  <BarChart data={fundDetails}></BarChart>;
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