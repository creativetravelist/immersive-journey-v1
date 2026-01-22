import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import ToolBarContainer from './styles';

function BottomToolbar({ buttons, show = false }) {
    return (
        <ToolBarContainer show={show}>
            <ButtonGroup fullWidth={true} size={'large'} variant="contained" aria-label="outlined primary button group">
                {buttons.map((button = {}, index) => {
                    const { icon, text, className, disabled, onClick } = button;

                    return (
                        <Button className={className} key={`BottomBar-button-${index}`} disabled={disabled} onClick={onClick}>
                            <Stack spacing={0.5} direction="column" justifyContent="flex-end" alignItems="center">
                                {icon}
                                <Typography className={'bar-text'}>{text}</Typography>
                            </Stack>
                        </Button>
                    );
                })}
            </ButtonGroup>
        </ToolBarContainer>
    );
}
BottomToolbar.propTypes = {
    buttons: PropTypes.array.isRequired,
    show: PropTypes.bool
};
export default BottomToolbar;
