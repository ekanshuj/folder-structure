import React from 'react';
import Structure from './components/Structure';
import './App.css';
import DataJSON from './config/DataJSON';

const App = () => {
  return (
    <>
      <div className="container">
        <span>React Folder Structure</span>
      </div>
      <div className="structure-component">
        <Structure data={DataJSON} />
      </div>
    </>
  )
}

export default App