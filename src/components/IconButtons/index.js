import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Badge, Box, Button, IconButton } from '@mui/material';
import PropTypes from 'prop-types';

import { BackIcon, CartIcon, CloseIcon, MenuIcon } from 'assets/images';
import { AbsoluteRightSx, ButtonTextSx, IconButtonSx } from './styled';

export function BackButton({ enableBack = false, onBackClick }) {
    return enableBack ? (
        <IconButton color="inherit" onClick={onBackClick}>
            <BackIcon height="18px" />
        </IconButton>
    ) : null;
}

BackButton.propTypes = {
    onBackClick: PropTypes.func
};

export function MenuButton({ enableMenu = false, handleDrawerMenuClick }) {
    return enableMenu ? (
        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerMenuClick} edge="start">
            <MenuIcon height="18px" />
        </IconButton>
    ) : null;
}

MenuButton.propTypes = {
    enableMenu: PropTypes.bool,
    handleDrawerMenuClick: PropTypes.func
};

export function CartButton({ onCartClick, cartLength }) {
    return onCartClick ? (
        <Box sx={AbsoluteRightSx(8)}>
            <IconButton onClick={onCartClick}>
                {cartLength ? (
                    <Badge badgeContent={cartLength} color="error">
                        <CartIcon width="auto" height="25px" />
                    </Badge>
                ) : (
                    <CartIcon width="auto" height="25px" />
                )}
            </IconButton>
        </Box>
    ) : null;
}
CartButton.propTypes = {
    onCartClick: PropTypes.func
};

export function CloseButton({ onClose }) {
    return onClose ? (
        <IconButton onClick={onClose}>
            <CloseIcon height="25px" width="auto" />
        </IconButton>
    ) : null;
}

CloseButton.propTypes = {
    onClose: PropTypes.func
};

export function TextMainButton({ text, textId, sx, btnType, onClick, btnProps, ...others }) {
    return (
        <Box textAlign={'center'} sx={sx} {...others}>
            <Button onClick={onClick} type={btnType} sx={ButtonTextSx} variant="contained" {...btnProps}>
                {text}
            </Button>
        </Box>
    );
}
TextMainButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    textId: PropTypes.string,
    sx: PropTypes.object,
    btnType: PropTypes.string,
    btnProps: PropTypes.object
};

export function QuantityActionButtons({ value, onClick, disabledMinus, disabledAdd }) {
    return (
        <>
            <IconButton disabled={disabledMinus} mr="6px" sx={IconButtonSx} onClick={() => onClick(value - 1)}>
                <HorizontalRuleIcon />
            </IconButton>
            <Box component="span" m="0 16px" fontWeight="400">
                {value}
            </Box>
            <IconButton disabled={disabledAdd} sx={IconButtonSx} onClick={() => onClick(value + 1)}>
                <AddIcon />
            </IconButton>
        </>
    );
}

QuantityActionButtons.propTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    disabledMinus: PropTypes.bool,
    disabledAdd: PropTypes.bool
};
