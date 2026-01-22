import { cloneDeep } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { TableCellSx, TableRowSx, TableSx } from './styled';

// ===============================|| UI COLOR ||=============================== //

export const renderFromItem =
    (row) =>
    ({ headerName, field, component, scope, defaultValue, renderCell }) =>
        (
            <TableCell key={`${headerName}.${field}`} {...{ component, scope }} sx={{ pl: 2, pt: 2, pb: 2, pr: 1 }}>
                {(renderCell ? renderCell({ value: row[field], row }) : row[field]) || defaultValue || ''}
            </TableCell>
        );

export const getValueRows = (columns, rows) =>
    rows.map((item) =>
        columns.reduce((acc, { field, valueGetter }) => {
            acc[field] = valueGetter ? valueGetter({ value: item[field], row: item }) : item[field];
            return acc;
        }, cloneDeep(item))
    );

export function Row(props) {
    const { row, columns } = props;
    return <TableRow sx={TableRowSx()}>{columns.map(renderFromItem(row))}</TableRow>;
}

export function CollapseRow({ row, columns, nestComponent }) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow sx={TableRowSx()}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>

                {columns.map(renderFromItem(row))}
            </TableRow>
            <TableRow>
                <TableCell style={{ padding: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 0, visibility: open ? 'show' : 'hide' }}>{nestComponent({ row })}</Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export function DataTable({ columns, data, rowKey, nestComponent, enableCollapse = false, borderRadius = '4px' }) {
    const valueRows = getValueRows(columns, data);

    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="collapsible table" sx={TableSx({ borderRadius })}>
                <TableHead>
                    <TableRow>
                        {enableCollapse && (
                            <TableCell width={1} sx={TableCellSx({ borderRadius })}>
                                {/* collapse button */}
                            </TableCell>
                        )}
                        {columns.map(({ headerName, width }, idx) => (
                            <TableCell key={`${idx}.${headerName}`} sx={{ minWidth: width, ...TableCellSx({ borderRadius }) }}>
                                {headerName}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {valueRows.map((row, idx) =>
                        enableCollapse ? (
                            <CollapseRow
                                key={`collapseRow.${row[rowKey] || idx}`}
                                row={row}
                                columns={columns}
                                nestComponent={nestComponent}
                            />
                        ) : (
                            <Row key={`row.${row[rowKey] || idx}`} row={row} columns={columns} />
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

Row.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    row: PropTypes.object.isRequired
};

CollapseRow.propTypes = {
    nestComponent: PropTypes.func,
    columns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    row: PropTypes.object.isRequired
};

DataTable.propTypes = {
    enableCollapse: PropTypes.bool,
    nestComponent: PropTypes.func,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    rowKey: PropTypes.string,
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default DataTable;
