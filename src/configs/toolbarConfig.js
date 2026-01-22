import { AccountIcon, CartIcon, CategoryIcon } from 'assets/images';

export const ACTION_TYPES = {
    LINE: 'line',
    PHONE: 'phone',
    CART: 'cart'
};

const mainToolbarConfig = {
    background: '',
    height: '7.5vh',
    getButtonInfo: ({ handleClick }) => [
        {
            icon: <AccountIcon height="3vh" />,
            text: 'tool-bar-left-text',
            className: 'left-icon',
            action: ACTION_TYPES.LINE,
            onClick: (value) => handleClick(ACTION_TYPES.LINE, value)
        },
        {
            icon: <CategoryIcon height="3vh" />,
            text: 'tool-bar-middle-text',
            className: 'middle-icon',
            action: ACTION_TYPES.PHONE,
            onClick: (value) => handleClick(ACTION_TYPES.PHONE, value)
        },
        {
            icon: <CartIcon height="3vh" />,
            text: 'tool-bar-right-text',
            className: 'right-icon',
            action: ACTION_TYPES.CART,
            onClick: (value) => handleClick(ACTION_TYPES.CART, value)
        }
    ]
};

export default mainToolbarConfig;
