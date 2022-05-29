import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import "./index.css"

import "./assets/main.scss";

function App() {
  	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
  	);
}

export default App;
