import React, { useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

import Context from './Context';

// content: { key: string, content: node }

const Provider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [loadingState, setLoadingState] = useState({});

    const getIsLoading = (state) => {
        return Boolean(Object.values(state).find((val) => val));
    };

    const withLoading = async (fn, key = '') => {
        handleOpen(key);
        const resp = await fn;
        handleClose(key);
        return resp;
    };

    const handleOpen = (key = '') => {
        const state = { ...loadingState, [key]: true };
        setLoadingState(state);
        setOpen(getIsLoading(state));
    };

    const handleClose = (key = '') => {
        const state = { ...loadingState, [key]: false };
        setLoadingState(state);
        setOpen(getIsLoading(state));
    };

    const handleToggle = (key = '') => {
        const state = { ...loadingState, [key]: !loadingState[key] };
        setLoadingState(state);
        setOpen(getIsLoading(state));
    };

    const props = {
        open: handleOpen,
        close: handleClose,
        toggle: handleToggle,
        withLoading,
        isOpen: open
    };

    return (
        <Context.Provider value={props}>
            {children}
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={() => {}}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Context.Provider>
    );
};

export default Provider;
