import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/popular.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);
	const api = "5407de7f86894f95a6ae29786c62a85f";
  useEffect(() => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      async function getPopular() {
        try {
          const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${api}&number=9`);
          setPopular(response.data.recipes);
          localStorage.setItem("popular", JSON.stringify(response.data.recipes));
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
      getPopular();
    }
  }, []);

  return (
    <div className='wrapper'>
      <h3>Popüler Picks</h3>
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
        {popular.map((recipe) => {
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
};

export default Popular;