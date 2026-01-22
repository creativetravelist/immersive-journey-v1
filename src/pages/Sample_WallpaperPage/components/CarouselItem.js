import { memo } from 'react';

import useImagePreloader from 'hooks/useImagePreloader';
import { CarouselItemStyle } from '../style';

function CarouselItem({ item = {} }) {
    const img = item.previewImageUrl || '';
    const { isImagesPreloaded } = useImagePreloader([img]);

    return (
        <CarouselItemStyle loaded={isImagesPreloaded} key={item.id}>
            <img src={img} alt="wallpaper" />
        </CarouselItemStyle>
    );
}

export default memo(CarouselItem);
