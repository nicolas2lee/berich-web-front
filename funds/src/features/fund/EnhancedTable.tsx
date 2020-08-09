// @ts-nocheck
import {withStyles} from "@material-ui/core/styles";
import React from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import {mockFetchFunds} from "./FundsAction";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Fund, TableCol} from "./FundModel";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import FundDetail
    from "./detail/FundDetail";

const styles = (theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
});

class EnhancedTable extends React.Component{
    componentDidMount(): void {
        this.props.dispatch(mockFetchFunds())
    }

    render() {
        console.log(this.props)
        const { funds, order, orderBy, error, loading,  classes} = this.props;

        function descendingComparator(a, b, orderBy) {
            if (b[orderBy] < a[orderBy]) return -1;
            if (b[orderBy] > a[orderBy]) return 1;
            return 0;
        }

        function stableSort(array: Array<any>, comparator: any) {
            const stabilizedThis = array.map((el, index) => [el, index]);
            stabilizedThis.sort((a, b) => {
                const order = comparator(a[0], b[0]);
                if (order !== 0) return order;
                return a[1] - b[1];
            });
            return stabilizedThis.map((el) => el[0]);
        }

        function getComparator(order, orderBy) {
            return order === 'desc'
                ? (a, b) => descendingComparator(a, b, orderBy)
                : (a, b) => -descendingComparator(a, b, orderBy);
        }

        const columns: TableCol[] = [
            new TableCol('code', false,'Code', 170, 'right', ''),
            new TableCol('chineseName', false, 'Name', 100, 'right', ''),
            new TableCol('pseudo',false, 'Pseudo', 100, 'right', ''),
            new TableCol('value', true,'Value', 170, 'right', ''),
        ];

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

/*        function showFundDetail(event, fund: Fund){
            console.log(fund)
        }*/

        return (
            <div className={classes.root}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/funds/:id" component={FundDetail}>
                        </Route>
                        <Route exact path="/">
                            <Paper className={classes.paper}>
                                <EnhancedTableToolbar />
                                <TableContainer>
                                    <Table className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
                                        <EnhancedTableHead
                                            classes={classes}
                                        />
                                        <TableBody>
                                            {stableSort(funds, getComparator(order, orderBy))
                                                .map((fund: Fund, index) => {
                                                    const singleFundLink = '/funds/'+fund.code
                                                    return (
                                                        <TableRow hover
                                                                  role="checkbox"
                                                                  /*onClick={(event) => showFundDetail(event, fund)}*/
                                                                  tabIndex={-1}
                                                                  key={index}>
                                                            {columns.map((column: TableCol) => {
                                                                const value = fund[column.id];
                                                                return (
                                                                    <TableCell key={column.id}
                                                                               align={column.isNumeric ? 'right' : 'left'}
                                                                    >
                                                                        <Link to={singleFundLink}>
                                                                            {value}
                                                                        </Link>

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
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

EnhancedTable.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    funds: state.fundsReducer.funds,
    order: state.fundsReducer.order,
    orderBy: state.fundsReducer.orderBy,
    loading: state.fundsReducer.loading,
    error: state.fundsReducer.error
});

export default connect(
    mapStateToProps,
)(withStyles(styles)(EnhancedTable))