import './App.css';
import { Routes, Route } from 'react-router';

// Components
import Home from './components/Home';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/user/:id" element={ <Data /> }></Route>
      </Routes>
    </div>
  )
}

export default App
