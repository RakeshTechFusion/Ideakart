import { Route, Routes,  BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup/index.jsx";
import Login from "./components/Login/index.jsx";
import Dashboard from "./components/Main";
function App() {
	const user = localStorage.getItem("token");

	return (
  <div>
    <BrowserRouter>
		<Routes>
			{user && <Route exactpath="/" element={<Dashboard />} />}
			<Route exact path="/signup"  element={<Signup />} />
			<Route exact path="/login"  element={<Login />} />
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
		</Routes>
    </BrowserRouter>
  </div>
	);
}

export default App;