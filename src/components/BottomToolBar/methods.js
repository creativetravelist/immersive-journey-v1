import { GAME_LEVELS } from 'configs';
import { ACTION } from './config';

import { MAX_GAME_LEVEL } from 'configs';

export const getTextClassName = (action = '', isGameMapPage = false, isWelcomeModalOpen = false) => {
    switch (action) {
        case ACTION.PASSPORT: {
            return isWelcomeModalOpen ? 'active-toolbar-icon' : '';
        }
        case ACTION.MAP: {
            return isGameMapPage ? 'active-toolbar-icon' : '';
        }
        default: {
            return '';
        }
    }
};

export const getActiveClassName = (action = '', isGameMapPage = true, levels = []) => {
    if (ACTION.PASSPORT !== action || !isGameMapPage) return '';
    return levels.includes(MAX_GAME_LEVEL) ? '' : 'active-passport-btn';
};

export const checkBtnIsDisabled = (action = '', isGameMapPage = true) => {
    if (ACTION.PASSPORT === action) return isGameMapPage ? false : true;
};

export function getLevelClassName(levels = []) {
    return GAME_LEVELS.slice(0, 3).reduce((obj, current) => {
        const { label, level } = current;
        const isUserLevel = levels.includes(level);

        return {
            ...obj,
            [`${label}_inactive`]: isUserLevel ? 'hide' : ''
        };
    }, {});
}
