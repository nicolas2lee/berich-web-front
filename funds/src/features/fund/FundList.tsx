// @ts-nocheck
import React from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {Fund, FundTableCol} from "./FundModel";
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {mockFetchFunds} from "./FundsAction";

const columns: FundTableCol[] = [
        new FundTableCol('code', 'Name', 170, 'right', ''),
        new FundTableCol('chineseName', 'ISO\u00a0Code', 100, 'right', ''),
        new FundTableCol('pseudo', 'ISO\u00a0Code', 100, 'right', ''),
        new FundTableCol('value', 'Value', 170, 'right', ''),
    ];

class FundList extends React.Component{

    componentDidMount(): void {
        this.props.dispatch(mockFetchFunds())
    }

    render() {
        console.log( 'state');
        console.log( this.props);
        const { error, loading, funds } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <Paper >
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column: FundTableCol) => (
                                    <TableCell
                                        key={column.id}
                                        align="right"
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {funds.map((fund: Array<Fund>) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={fund[0]}>
                                        {columns.map((column: FundTableCol) => {
                                            const value = fund[column.id];
                                            return (
                                                <TableCell key={column.id} align="right">
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        );
    }
}

FundList.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    funds: state.fundsReducer.funds,
    loading: state.fundsReducer.loading,
    error: state.fundsReducer.error
});

export default connect(
    mapStateToProps,
)(FundList)
