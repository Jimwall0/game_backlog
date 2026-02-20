import { useEffect } from 'react';
import { initDB } from './database';

export default function App() {
  useEffect(() => {
    initDB();
  }, []);

  return null;
}