import { useSnackbar } from 'notistack';

const useToast = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const defaultProps = {
        autoHideDuration: 3000,
        preventDuplicate: true,
        anchorOrigin: { vertical: 'top', horizontal: 'center' }
    };

    const createEnqueueSnackbar = (type) => (message, options) => {
        enqueueSnackbar(message, {
            variant: type,
            ...defaultProps,
            ...options
        });
    };

    return {
        // toast: createEnqueueSnackbar('default'),
        success: createEnqueueSnackbar('success'),
        info: createEnqueueSnackbar('info'),
        warning: createEnqueueSnackbar('warning'),
        danger: createEnqueueSnackbar('error'),
        close: closeSnackbar
    };
};

export { useToast };
