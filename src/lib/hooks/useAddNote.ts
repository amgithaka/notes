import { useState, useEffect } from 'react';

export default function useAddNote() {
  const [database, setDatabase] = useState<IDBDatabase | null>(null);
  const [message, setMessage] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    const request = indexedDB.open('database', 1);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      setDatabase((event.target as IDBOpenDBRequest).result);
    };

    request.onerror = () => {
      setMessage({ ok: false, message: 'Failed to open database' });
    };
  }, []);

  const addNote = (title: string, content: string) => {
    if (!database) {
      setMessage({ ok: false, message: 'Database is not initialized' });
      return;
    }

    const transaction = database.transaction('notes', 'readwrite');
    const store = transaction.objectStore('notes');
    const note = { title, content, date: new Date().toISOString() };

    const addRequest = store.add(note);

    addRequest.onsuccess = () => {
      setMessage({ ok: true, message: 'Note added successfully' });
    };

    addRequest.onerror = () => {
      setMessage({ ok: false, message: 'Failed to add note' });
    };
  };

  return { addNote, message };
}
