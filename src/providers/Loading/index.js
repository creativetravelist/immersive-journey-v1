import { useContext } from 'react';
import Context from './Context';
export { default as withLoading } from './with.js';
export { default } from './Provider.js';

export function useLoading() {
    return useContext(Context);
}
