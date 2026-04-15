import { useState } from 'react';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Chat from './components/Chat';

export default function App() {
  const [view, setView] = useState('feed'); // Toggle state

  return (
    <div>
      {view === 'feed' ? <Feed /> : <Chat />}
      <Navbar setView={setView} />
    </div>
  );
}
