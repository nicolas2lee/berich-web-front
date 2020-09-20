// @ts-nocheck
import React from "react";
import FundDetailLineChart from "./FundDetailLineChart";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {mockFundDetailByFundCode} from "./FundDetailAction";
import {AppBar, Box, Tab, Tabs, Typography} from "@material-ui/core";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

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
        //const [value, setValue] = React.useState(0);
        var value = 0
        const handleChange = (event, newValue) => {
            //setValue(newValue);
            console.log(value)
            value = (value +1)%3
        };

        return (
            <div >
                <AppBar position="static">
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
                        <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
                        <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <FundDetailLineChart title={'Close price'} labels={labels} data={closePrices}></FundDetailLineChart>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <FundDetailLineChart title={'Volume'} labels={labels} data={volumes}></FundDetailLineChart>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Page Three
                </TabPanel>
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