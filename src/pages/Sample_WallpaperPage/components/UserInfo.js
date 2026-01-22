import Typography from '@mui/material/Typography';

import { useAuth } from 'providers/Auth';

export default function UserInfo() {
    const { profile } = useAuth();
    const { displayName } = profile;
    return (
        <Typography variant="h3" className="user-info">
            {displayName}
        </Typography>
    );
}
