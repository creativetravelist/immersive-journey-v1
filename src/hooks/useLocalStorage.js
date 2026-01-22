import { useState } from 'react';

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        if (!key) {
            return initialValue;
        }

        const item = window.localStorage.getItem(key);
        if (!item) return initialValue;
        try {
            return JSON.parse(item);
        } catch (error) {
            return item;
        }
    });

    const getValue = () => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        if (!key) {
            return initialValue;
        }

        const valueStored = window.localStorage.getItem(key);
        if (!valueStored) return initialValue;
        try {
            const value = JSON.parse(item);
            setStoredValue(value);
            return value;
        } catch (error) {
            setStoredValue(valueStored);
            return valueStored;
        }
    };

    const setValue = (value, prefix) => {
        try {
            const val = value instanceof Function ? value(storedValue) : value;

            setStoredValue(val);
            const valueToStore = (() => {
                if (typeof val === 'object') return JSON.stringify(val);
                return val;
            })();

            if (typeof window !== 'undefined') {
                const storeKey = prefix ? prefix + ':' + key : key;
                if (valueToStore === undefined) window.localStorage.removeItem(storeKey);
                else window.localStorage.setItem(storeKey, valueToStore);
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue, getValue];
};

export default useLocalStorage;
