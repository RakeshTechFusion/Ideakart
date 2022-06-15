import './App.css'
import Homepage from "./components/homepage/homepage"
import signIn from "./components/signIn/signIn"
import signUp from "./components/signUp/signUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React,{ useState } from 'react';

function App() {

  const [ user, setsignInUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setsignInUser={setsignInUser} /> : <signIn setsignInUser={setsignInUser}/>
            }
          </Route>
          <Route path="/signIn">
            <signIn setsignInUser={setsignInUser}/>
          </Route>
          <Route path="/signUp">
            <signUp />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;