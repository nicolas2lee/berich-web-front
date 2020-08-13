// @ts-nocheck
import React from "react";
import {Line} from "react-chartjs-2";
import {Paper} from "@material-ui/core";

class FundDetailLineChart extends React.Component {

    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
    }

    render() {
        let title = this.props.title;
        let labels = this.props.labels;
        let data = this.props.data;
        console.log('chart parameters')
        console.log(title)
        console.log(labels)
        console.log(data)
        const graph= {
            labels: labels,
                datasets: [{
                label: title,
                data: data,
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
                <Line ref={this.chartReference} data={graph}  />
         )
    }
}

export default FundDetailLineChart;

