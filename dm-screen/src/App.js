import { useState,createContext } from 'react';
import './App.css';
import Search from './components/search';
import StatCard from './components/statcard';
import BaseURLContext from './context/URLContext';

function App() {

  const [viewMonster, setMonster] = useState();

  console.log("Monster from app", viewMonster);

  return (
    <div className="App">
      <BaseURLContext.Provider value="https://www.dnd5eapi.co/api/monsters/">
        <h1 className='title'>Enter the Dungeon!</h1>
        <Search handler={setMonster}/>
        {viewMonster != null ? <StatCard monster={viewMonster}/>: null} 
      </BaseURLContext.Provider>
    </div>
  );
}

export default App;
