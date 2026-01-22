import Components from './components';

export function renderCarouselItem(wallpaper = {}) {
    return { content: <Components.CarouselItem item={wallpaper} />, key: `slide-${wallpaper.id}` };
}

export function getSelectedWallpaperId(activeStepInCarousel = 0, wallpapers = []) {
    const sliceStart = activeStepInCarousel % wallpapers.length;
    const isActiveStepPositive = sliceStart > 0;
    const seletedWallpaper = isActiveStepPositive ? wallpapers.slice(sliceStart, sliceStart + 1)[0] : wallpapers.slice(sliceStart)[0] || {};
    return seletedWallpaper.id;
}

export function findStepByLinkId(wallpapers = [], wallpaperId = '') {
    const step = wallpapers.findIndex(({ id }) => id === wallpaperId);
    return step === -1 ? undefined : step;
}
