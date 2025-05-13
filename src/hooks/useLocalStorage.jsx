import React, { useState } from 'react'

const useLocalStorage = (key, initailvalue) => {
    const [storedvalue, setStoredvalue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initailvalue;
        } catch (err) {
            console.error(err);
            return initailvalue
        }
    });
    const setVlaue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedvalue) : value;
            // const valueToStore = value;
            setStoredvalue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (err) {
            console.error(err);
            return initailvalue
        }
    };

    return [storedvalue, setVlaue];
};

export default useLocalStorage;