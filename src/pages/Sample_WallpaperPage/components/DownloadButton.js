import Button from '@mui/material/Button';

import Images from 'assets/images';

export default function DownloadButton({ onClick, size = 'large' }) {
    return (
        <Button className="download-btn" size={size} onClick={onClick}>
            <img src={Images.Download} alt="download-button" />
        </Button>
    );
}
