export const LinkSx = {
    display: 'flex',
    color: 'grey.900',
    textDecoration: 'none',
    alignContent: 'center',
    alignItems: 'center'
};

export const IconSx = ({ theme }) => ({
    marginRight: theme.spacing(0.75),
    marginTop: `-${theme.spacing(0.25)}`,
    width: '1rem',
    height: '1rem',
    color: theme.palette.secondary.main
});

export const CardContentSx = ({ card, theme }) => ({
    marginBottom: card === false ? 0 : theme.spacing(configs.gridSpacing),
    border: card === false ? 'none' : '1px solid',
    borderColor: theme.palette.primary[200] + 75,
    background: card === false ? 'transparent' : theme.palette.background.default
});

export const BreadcrubmsSx = () => ({ '& .MuiBreadcrumbs-separator': { width: 16, ml: 1.25, mr: 1.25 } });
export const GridStyleProps = ({ rightAlign }) => ({
    direction: rightAlign ? 'row' : 'column',
    justifyContent: rightAlign ? 'space-between' : 'flex-start',
    alignItems: rightAlign ? 'center' : 'flex-start',
    spacing: 1
});

export const DividerSx = ({ theme, gridSpacing }) => ({ borderColor: theme.palette.primary.main, mb: gridSpacing });
export const ItemContentSx = () => ({
    display: 'flex',
    textDecoration: 'none',
    alignContent: 'center',
    alignItems: 'center',
    color: 'grey.500'
});
