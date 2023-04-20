import logo from './logo.svg';
import './App.css';
import Home from './home';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import About from './about';
import { UserContext } from './usercontext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value="hellloooo">
      <Routes>
        
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
