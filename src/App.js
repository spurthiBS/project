// import logo from './logo.svg';
import { HashRouter,Routes,Route ,Link} from "react-router-dom"

import './App.css';
import UserNav from './components/Nav';
import Home from './components/Home';
import User from './components/user';


function App() {
  return (
    <>
    <HashRouter>
          <UserNav/>
          <Home/>
          <Routes>
           
            <Route exact path="" element={<User/>}/>
          </Routes>
        </HashRouter>
    </>
    
  );
}

export default App;
