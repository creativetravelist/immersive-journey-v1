import { useState } from 'react';
import Context from './Context';

const DEFAULT_MENU_KEY = 'MAIN_MENU';
const Provider = ({ children }) => {
    const [menuOpens, setMenuOpens] = useState({});
    const toggle = (key = DEFAULT_MENU_KEY, value) => {
        menuOpens[key] = value || menuOpens[key];
        setMenuOpens(menuOpens);
    };
    const isMenuOpen = (key = DEFAULT_MENU_KEY) => {
        return menuOpens[key];
    };

    return <Context.Provider value={{ toggle, isMenuOpen }}>{children}</Context.Provider>;
};

export default Provider;
