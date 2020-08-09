// @ts-nocheck
import React from "react";
import {Line} from "react-chartjs-2";
import {Paper} from "@material-ui/core";
import {FundDetail} from "../FundModel";

class BarChart extends React.Component {

    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
    }

    getLabelFromFundDetails : string[] = (fundDetails: FundDetail[]) =>{
        return fundDetails.map(e=>e.day)
    }

    getClosePriceFromFundDetails : string[] = (fundDetails: FundDetail[]) =>{
        return fundDetails.map(e=>e.close)
    }

    render() {
        let fundDetails = this.props.data;
        const graph= {
            labels: this.getLabelFromFundDetails(fundDetails),
                datasets: [{
                label: '# of Votes',
                data: this.getClosePriceFromFundDetails(fundDetails),
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

        return (
            <Paper>
                <Line ref={this.chartReference} data={graph}  />
            </Paper>)
    }
}

export default BarChart;

