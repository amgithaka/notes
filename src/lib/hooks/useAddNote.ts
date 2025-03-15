import { useState, useEffect } from 'react';

export default function useAddNote() {
  const [database, setDatabase] = useState<IDBDatabase | null>(null);

  useEffect(() => {
    let request = indexedDB.open('database', 1);

    request.onupgradeneeded = (event) => {
      let db = (event.target as IDBOpenDBRequest).result;

      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      setDatabase((event.target as IDBOpenDBRequest).result);
    };

    request.onerror = () => {
      console.error('Failed to open database');
    };
  }, []);

  const addNote = (title: string, content: string) => {
    if (!database) return;

    let transaction = database.transaction('notes', 'readwrite');
    let store = transaction.objectStore('notes');

    let note = { title, content, date: new Date().toISOString() };

    store.add(note);
  };

  return { addNote };
}
