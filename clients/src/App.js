import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/SignIn/signIn"
import Register from "./components/signUp/signUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React,{ useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;