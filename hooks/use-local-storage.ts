// import { useState, useEffect } from 'react';

// export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     if (typeof window === 'undefined') {
//       return initialValue;
//     }
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.log(error);
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       try {
//         window.localStorage.setItem(key, JSON.stringify(storedValue));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }, [key, storedValue]);

//   return [storedValue, setStoredValue];
// }

// import { useState, useEffect } from 'react';

// export function useLocalStorage<T>(key: string, initialValue: T) {
//   // Get from localStorage on initial load
//   const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
//   const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

//   const [value, setValue] = useState<T>(parsedValue);

//   // Sync state with localStorage
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   // Listen to storage changes from other tabs
//   useEffect(() => {
//     const handleStorageChange = (event: StorageEvent) => {
//       if (event.key === key) {
//         setValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
//       }
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, [key, initialValue]);

//   return [value, setValue] as const;
// }

import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // console.log('🚀 ~ useLocalStorage ~ storedValue: ', storedValue);

  // const setValue = (value: T) => {
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value; // Allow setter functions
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      // Dispatch custom event for same-tab updates
      window.dispatchEvent(
        new CustomEvent(`local-storage-${key}`, {
          detail: valueToStore
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Handle same-tab updates
    const handleCustomEvent = (e: CustomEvent) => {
      setStoredValue(e.detail);
    };

    // Handle cross-tab updates - Listen for changes in localStorage across tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        try {
          setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
        } catch (error) {
          console.error(error);
        }
      }
    };
    window.addEventListener(`local-storage-${key}`, handleCustomEvent as EventListener);
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener(s)
    return () => {
      window.removeEventListener(`local-storage-${key}`, handleCustomEvent as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]); // Only re-run when key or initialValue changes

  return [storedValue, setValue] as const;
}
