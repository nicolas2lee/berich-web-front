// @ts-nocheck
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import React from "react";
import {TableCol} from "./FundModel";
import {connect} from "react-redux";
import {sortFundsList} from "./FundsAction";

class EnhancedTableHead extends React.Component {

    render() {
        const {classes, order, orderBy, dispatch} = this.props;

        const headCells: TableCol[] = [
            new TableCol('code', false,'Code', 170, 'right', ''),
            new TableCol('chineseName', false, 'Name', 100, 'right', ''),
            new TableCol('pseudo',false, 'Pseudo', 100, 'right', ''),
            new TableCol('value', true,'Value', 170, 'right', ''),
        ];

        const createSortHandler = (property: any) => (event: any) => {
            console.log(property)
            dispatch(sortFundsList(property))
        };

        return (
            <TableHead>
                <TableRow>
                    {headCells.map((headCell) => (

                        <TableCell
                            key={headCell.id}
                            align={headCell.isNumeric ? 'right' : 'left'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    /*classes: PropTypes.object.isRequired,*/
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    order: state.fundsReducer.order,
    orderBy: state.fundsReducer.orderBy
});

export default connect(
    mapStateToProps
)(EnhancedTableHead);
