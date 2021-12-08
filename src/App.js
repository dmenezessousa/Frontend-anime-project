import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';



import './App.css';
import Signin from './components/Signin/Signin';
import SignUp from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
