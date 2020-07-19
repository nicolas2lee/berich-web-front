import React from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {Fund, FundTableCol} from "./Fund";

function Funds() {
    const columns: FundTableCol[] = [
        new FundTableCol(1, 'Name', 170, 'right', ''),
        new FundTableCol(2, 'ISO\u00a0Code', 100, 'right', ''),
        new FundTableCol(3, 'Value', 170, 'right', ''),
    ];

    function createData(code: string, name: string, value: number): Fund {
        return new Fund(code, name, value)
        //return { name, code, population, size, density };
    }

    const rows: any[] = [
        ['India', 'IN', '1324171354'],
        ['India', 'IN', '1324171354'],
        //createData('India', 'IN', 1324171354),
        //createData('China', 'CN', 14035003),
        //createData('Italy', 'IT', 60483973),
        //createData('United States', 'US', 327167434)
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: Array<string>) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row[0]}>
                                    {columns.map((column: FundTableCol) => {
                                        const value = row[column.id];
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

export default Funds;
