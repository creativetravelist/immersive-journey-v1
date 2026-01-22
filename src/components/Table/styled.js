export const TableCellSx = ({ borderRadius }) => ({
    // minWidth: width,
    '&:first-of-type': {
        borderTopLeftRadius: borderRadius
    },
    '&:last-of-type': {
        borderTopRightRadius: borderRadius
    },
    '&:not(:first-of-type):before': {
        content: '""',
        display: 'inline-flex',
        height: '1em',
        width: '0px',
        position: 'relative',
        left: '-0.5em',
        verticalAlign: 'inherit',
        border: '1px solid rgba(224, 224, 224, 1)'
    }
});

export const TableSx = ({ borderRadius }) => ({ border: '1px solid rgba(224, 224, 224, 1)', borderRadius });
export const TableRowSx = () => ({ '& > *': { borderBottom: 'unset' } });
