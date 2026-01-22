import Box from '@mui/material/Box';
import { forwardRef } from 'react';

const CustomImage = forwardRef(({ src, sx, alt, ...props }, ref) => {
    return <Box component="img" src={src} sx={sx} alt={alt} ref={ref} {...props} />;
});

export default CustomImage;
