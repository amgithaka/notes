import { useEffect } from 'react';

export default function useScripts() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const request = indexedDB.open('database', 1);

      request.onupgradeneeded = (event) => {
        let database = (event.target as IDBOpenDBRequest).result;

        if (!database.objectStoreNames.contains('notes')) {
          database.createObjectStore('notes', { keyPath: 'id' });
        }
      };
    }
  }, []);
}
