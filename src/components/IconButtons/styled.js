export const ButtonTextSx = {
    width: '55vw',
    minWidth: 'fit-content',
    fontSize: '1.3rem',
    padding: '3px',
    paddingBottom: '7px',
    boxShadow: 'none'
};

export const IconButtonSx = {
    background: 'white',
    borderRadius: '4px',
    p: '3px',
    color: '#989898',
    '&:hover': {
        opacity: '0.8',
        background: 'white'
    }
};

export const AbsoluteRightSx = (right) => ({
    position: 'absolute',
    right
});
