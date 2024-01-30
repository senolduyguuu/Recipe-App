import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/cuisine.css";

const Cuisine = () => {
	const api = "5407de7f86894f95a6ae29786c62a85f";
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	useEffect(() => {
		async function getCuisine(name) {
			try {
				const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&cuisine=${name}`);
				setCuisine(response.data.results);
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		}
		getCuisine(params.type);
	}, [params.type]);

	return (
		<div className="cuisine-content">
			{cuisine.map((item) => (
				<div className="cuisine-card" key={item.id}>
					<Link className="card-img-link"  to={"/recipe/" + item.id}>
						<img className="card-img" src={item.image} alt={item.image}></img>
						<h1>{item.title}</h1>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Cuisine;
