import { styled } from '@mui/material/styles';

// styles
export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open, mt: marginTop }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    })
}));
