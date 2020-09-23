// @ts-nocheck
import React from "react";
import {Line} from "react-chartjs-2";
import {Button, ButtonGroup, Card, CardActions, CardContent} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {PERIODS} from "./fundDetailLineChartReducer";
import {Point} from "../FundDetailModel";
import {Period} from "./FunDetailLineChartModel";
import {changePeriod} from "./FundDetailLineChartAction";

const styles = (theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

class FundDetailLineChart extends React.Component {

    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
    }

    render() {
        const { title, data, selectedPeriod, classes, dispatch} = this.props;

        let rawData: Point[] = data.filter(p => {
            let now = Date.now()
            let startInMills = now -  selectedPeriod.value *30*24*60*60*1000
            return Date.parse(p.x) > new Date(startInMills)
        })

        const graph= {
            labels: rawData.map(e => e.x),
                datasets: [{
                label: title,
                data: rawData.map(e => e.y),
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

        function handlePeriodChange(p: Period){
            dispatch(changePeriod(p))
        }

        return (
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Line ref={this.chartReference} data={graph}  />
                    </CardContent>
                    <CardActions>
                        <ButtonGroup color="primary" aria-label="contained primary button group">
                            {PERIODS.map((period, index) => (
                                <Button key={period.value}
                                        color={period === selectedPeriod ? "secondary": "primary"}
                                        onClick={() => handlePeriodChange(period)}
                                >
                                    {period.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </CardActions>
                </Card>


            </div>
         )
    }
}

FundDetailLineChart.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(Point),
    selectedPeriod: PropTypes.objectOf(Period)
};

const mapStateToProps = state => ({
    selectedPeriod: state.fundDetailLineChartReducer.selectedPeriod,
})

export default connect(
    mapStateToProps,
)(withStyles(styles)(FundDetailLineChart));

