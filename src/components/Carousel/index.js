import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { config as springConfig } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';

import CarouselContainer from './style';

const getTouches = (evt) => {
    return (
        evt.touches || evt.originalEvent.touches // browser API
    );
};

function SwipeableCarousel({
    items = [],
    initialStep = 0,
    showNavigation = false,
    enableSwipe = true,
    config = springConfig.molasses,
    viewSx = {},
    renderCarouselItem = () => {},
    setRef = () => {}
}) {
    const [goToSlide, setGoToSlide] = useState(0);
    const [offsetRadius, setOffsetRadius] = useState(1);
    const [xDown, setXDown] = useState();
    const [yDown, setYDown] = useState();

    setRef({ activeStep: goToSlide });

    const slides = items.map((slide, index) => {
        return { ...renderCarouselItem(slide), onClick: () => setGoToSlide(index) };
    });

    // TODO: slides's structure example
    // const slides = [
    //     {
    //         key: '1',
    //         content: DOM
    //     },
    // ]

    const handleTouchStart = (evt) => {
        if (!enableSwipe) {
            return;
        }

        const firstTouch = getTouches(evt)[0];
        setXDown(firstTouch.clientX);
        setYDown(firstTouch.clientY);
    };

    const handleTouchMove = (evt) => {
        if (!enableSwipe || (!xDown && !yDown)) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                /* left swipe */
                setGoToSlide((preState) => preState + 1);
                setXDown(null);
                setYDown(null);
            } else {
                /* right swipe */
                setGoToSlide((preState) => preState - 1);
                setXDown(null);
                setYDown(null);
            }
        }
    };

    const setAnimation = (props) => {
        if (props === 0) return { opacity: 1 };
        if (Math.abs(props) === 1) return { opacity: 0.6 };
        else return { opacity: 0 };
    };

    useEffect(() => {
        setGoToSlide(initialStep);
    }, [initialStep]);

    return (
        <CarouselContainer sx={viewSx} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showNavigation}
                animationConfig={config}
                offsetFn={setAnimation}
            />
        </CarouselContainer>
    );
}

SwipeableCarousel.propTypes = {
    initialStep: PropTypes.number,
    viewSx: PropTypes.object,
    items: PropTypes.array,
    showNavigation: PropTypes.bool,
    enableSwipe: PropTypes.bool,
    config: PropTypes.object,
    setRef: PropTypes.func,
    renderCarouselItem: PropTypes.func
};

export default SwipeableCarousel;
