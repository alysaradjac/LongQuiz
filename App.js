import React from 'react';
import './App.css'; 
import TimeTracker from './TimeTracker';

function App() {
  const employees = ['Alysa', 'Joy', 'Radjac'];

  return (
    <div className="App">
      <h1>Ellry Cafe Working Hours</h1>
      <h2>List of Employees:</h2>
      <TimeTracker employees={employees} />
    </div>
  );
}

export default App;
