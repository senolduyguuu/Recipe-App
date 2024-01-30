import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Category from "./component/category";
import Search from "./component/search";
import Headerimged from "./pages/headerimged";
import Pages from "./pages/pages";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Headerimged></Headerimged>
				<Search></Search>
				<Category></Category>
				<Pages></Pages>
			</BrowserRouter>
		</div>
	);
}

export default App;
