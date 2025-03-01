import './App.css';
import { Routes, Route } from 'react-router';

// Components
import Component from './components/Component';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Component /> }></Route>
        <Route path="/user/:id" element={ <Data /> }></Route>
      </Routes>
    </div>
  )
}

export default App
