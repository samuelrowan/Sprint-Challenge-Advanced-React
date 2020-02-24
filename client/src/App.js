import React from 'react';
import CompetitorList from './components/CompetitorList'
import './App.css';
import useDarkMode from './hooks/useDarkMode';

function App() {
  return (
    <div className="App">
      <button>toggle dark mode</button>
      <CompetitorList />
    </div>
  );
}

export default App;
