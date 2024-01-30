import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/popular.css";


const Vegie = () => {
  const [vegie, setVegie] = useState([]);

  useEffect(() => {
    const api = "5407de7f86894f95a6ae29786c62a85f";
    const check = localStorage.getItem("vegie");

    if (check) {
      setVegie(JSON.parse(check));
    } else {
      async function getVegie() {
        try {
          const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${api}&number=9&tags=vegetarian`);
          setVegie(response.data.recipes);
          localStorage.setItem("vegie", JSON.stringify(response.data.recipes));
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
      getVegie();
    }
  }, []);

  return (
    <div className='wrapper'>
      <h3>Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          pagination: false,
          drag: 'free',
          gap: '2rem',
          breakpoints: {
            768: {
              perPage: 1, // Mobil ekranlarda bir görsel göster
            },
            992: {
              perPage: 2, // Tablet ekranlarda iki görsel göster
            },
          },
        }}
      >
        {vegie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div>
                <div key={recipe.id}>
                  <Link to={"/recipe/" + recipe.id}>
                    <p className='card card-title'>{recipe.title}</p>
                    <img className='card card-image' src={recipe.image} alt={recipe.image}></img>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Vegie;
