import {useSyncExternalStore} from 'react';

export const subscribe = (callback: () => void) => {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
}

const getSnapshot = () => {
    return window.innerWidth;
}

export const useWindowWidth = () => {
    return useSyncExternalStore(subscribe, getSnapshot, () => 0);
}
