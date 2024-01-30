import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Searched = () => {
	const api = "5407de7f86894f95a6ae29786c62a85f";
	const params = useParams();
	const [search, setSearched] = useState()
	useEffect(() => {
		async function getSearch(name) {
			try {
				const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&query=${name}`);
				console.log(response);
				setSearched(response.data.results)
			} catch (error) {
				console.error(error);
			}
		}
		getSearch(params.search)
	}, [params.search])

	return (
		<div className="cuisine-content">
			{search && search.map((item) => (
				<div className="cuisine-card" key={item.id}>
					<Link className="card-img-link" to={"/recipe/" + item.id}>
						<img className="card-img" src={item.image} alt={item.image}></img>
						<h1>{item.title}</h1>
					</Link>
				</div>
			))}
		</div>
	);
}

export default Searched;

