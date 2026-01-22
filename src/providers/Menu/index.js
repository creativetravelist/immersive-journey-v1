import { useContext } from 'react';
import Context from './Context';
export { default } from './Provider.js';
export { default as withMenu } from './with.js';

export function useMenu() {
    return useContext(Context);
}
