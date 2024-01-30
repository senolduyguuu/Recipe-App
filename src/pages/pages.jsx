import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cuisine from '../component/cuisine';
import Recipe from '../component/recipe';
import Home from './home';
import Searched from "./searched";

function pages() {
	return (
		<Routes>
			<Route path="/" element={<Home></Home>} />
			<Route path="/cuisine/:type" element={<Cuisine></Cuisine>} />
			<Route path='/search/:search' element={<Searched></Searched>}></Route>
			<Route path='/recipe/:name' element={<Recipe></Recipe>}></Route>
		</Routes>


	)
}

export default pages
