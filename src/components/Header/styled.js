import { FlexCenter } from 'themes/styles';
export const WrapperSx = () => ({
    boxShadow: '0 2px 8px #f0f1f2',
    '> div': {
        display: 'flex',
        width: '100%'
    }
});

export const LogoSx = () => ({ alignItems: 'center', width: '83.33%', ...FlexCenter });
export const AbsolutePositionSx = ({ position, px }) => ({ position: 'absolute', [position]: px });
