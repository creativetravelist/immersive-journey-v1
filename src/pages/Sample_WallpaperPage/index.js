import SwipeableCarousel from 'components/Carousel';

import useImagePreloader from 'hooks/useImagePreloader';

import Loader from 'components/Loader';
import Components from './components';
import { renderCarouselItem } from './method';
import { CarouselStyle, WallpaperContainer } from './style';

const Wallpaper = () => {
    const { isImagesPreloaded } = useImagePreloader([BackgroundImg]);

    const wallpapers = [
        { id: 1, previewImageUrl: 'https://dak6ovdfbyw15.cloudfront.net/img/585/preview_wallpaper_1.jpg' },
        { id: 2, previewImageUrl: 'https://dak6ovdfbyw15.cloudfront.net/img/585/preview_wallpaper_2.jpg' },
        { id: 3, previewImageUrl: 'https://dak6ovdfbyw15.cloudfront.net/img/585/preview_wallpaper_3.jpg' }
    ];
    const newWallpaperStep = undefined;

    return (
        <>
            {isImagesPreloaded ? (
                <WallpaperContainer background={BackgroundImg} loaded={isImagesPreloaded}>
                    <SwipeableCarousel
                        initialStep={newWallpaperStep}
                        viewSx={CarouselStyle}
                        items={wallpapers}
                        setRef={(e) => (ref = e)}
                        renderCarouselItem={renderCarouselItem}
                    />
                    <Components.DownloadButton onClick={handleClick} />
                </WallpaperContainer>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Wallpaper;
