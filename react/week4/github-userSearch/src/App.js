import React, { useContext } from "react";
import UserData from "./components/UserData";
import Header from "./components/Header"
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header/>
			<UserData />
		</div>
	);
}

export default App;
