import { useState } from 'react';
import { Navigation } from './src/navigation';

export default function App() {
  const [page, setpage] = useState(1)
  return (
      <Navigation/>
  );
}