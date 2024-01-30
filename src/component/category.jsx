import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import "../style/category.css";

const Category = () => {
	return (
		<div className="category-content">
				<NavLink to="/cuisine/Italian" className="category-content-li">
					<div>
						<FaPizzaSlice></FaPizzaSlice>
						<h4 className="category-content-text">Italian</h4>
					</div>
				</NavLink>

			<NavLink to="/cuisine/american" className="category-content-li">
				<div>
					<FaHamburger></FaHamburger>
					<h4 className="category-content-text">American</h4>
				</div>
			</NavLink>

			<NavLink to="/cuisine/thai" className="category-content-li" >
				<div>
					<GiNoodles></GiNoodles>
					<h4 className="category-content-text">Thai</h4>
				</div>
			</NavLink>

			<NavLink to="/cuisine/japanese" className="category-content-li">
				<div>
					<GiChopsticks></GiChopsticks>
					<h4 className="category-content-text">Japanese</h4>
				</div>
			</NavLink>



		</div>
	)
}

export default Category