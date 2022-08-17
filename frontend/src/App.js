import logo from './logo.svg';
import './App.css';
//Importar los componentes 
import  {CompShowBlogs} from './blog/ShowBlogs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompShowBlogs></CompShowBlogs>
    </div>
  );
}

export default App;
