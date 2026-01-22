import { get } from 'lodash';
import ReactGA from 'react-ga4';

import { GA_UTM_CAMPAIGN, GA_UTM_MEDIUM, GA_UTM_SOURCE } from 'configs/constant';
import configs from 'configs/envConfig';

const SHOP_ID = configs.SHOP_ID;
const GA_CATEGORY = configs.GA_CATEGORY;

export const sendGAEvent = (lineId, action, others = {}) => {
    console.log('ga', lineId, action, others);
    if (!lineId || !action) return;

    const event = {
        ...others,
        userId: `shop/${SHOP_ID}/user/${lineId}`,
        referrer: `https://linebot/shop/${SHOP_ID}/user/${lineId}`,
        title: action,
        category: `${GA_CATEGORY}/${SHOP_ID}`,
        action,
        label: `shop/${SHOP_ID}/customer/${lineId}/${get(others, '_label', '')}`,
        value: 1
    };
    ReactGA.event({ ...event, SHOP_ID, lineId });
};

export const setGAInLocalstorage = ({ ga_utm_source, ga_utm_medium, ga_utm_campaign }) => {
    console.log('ga_utm_source:' + ga_utm_source, 'ga_utm_medium:' + ga_utm_medium, 'ga_utm_campaign:' + ga_utm_campaign);
    localStorage.setItem(GA_UTM_SOURCE, ga_utm_source);
    localStorage.setItem(GA_UTM_MEDIUM, ga_utm_medium);
    localStorage.setItem(GA_UTM_CAMPAIGN, ga_utm_campaign);
};

export const sendGaView = (lineId, ga) => {
    console.log('ga pageview:', lineId, ga);
    if (!lineId || !ga) return;
    const page = `/shop/${SHOP_ID}/user/${lineId}/action/${ga}`;
    const pageviewEvent = {
        hitType: 'pageview',
        page,
        userId: `shop/${SHOP_ID}/user/${lineId}`,
        referrer: `https://linebot/shop/${SHOP_ID}/user/${lineId}`,
        location: window.location.href || '',
        title: ga
    };
    console.log('pageview', pageviewEvent);
    ReactGA.send(pageviewEvent);
};
