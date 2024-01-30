import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/recipe.css";

const Recipe = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActive] = useState("");
  const api = "5407de7f86894f95a6ae29786c62a85f";

  useEffect(() => {
    async function getRecipe() {
      try {
        const apiUrl = `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${api}`;
        console.log("API URL:", apiUrl);
        const response = await axios.get(apiUrl);
        setRecipe(response.data);
        console.log("API Yaniti:", response);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error("Tarif bulunamadi:", error.message);
        } else {
          console.error("Tarif alinirken hata oluştu:", error.message);
        }
      }
    }

    getRecipe();
  }, [params.name, api]);

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        {recipe.id ? (
          <>
            <div className="recipe-image">
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.image} />
            </div>
            <div className="recipe-details">
              <div className="recipe-buttons">
                <button
                  onClick={() => setActive("Instructions")}
                  className={`recipe-button ${
                    activeTab === "Instructions" ? "active" : ""
                  }`}
                >
                  Tarifler
                </button>
                <button
                  onClick={() => setActive("ingredients")}
                  className={`recipe-button ${
                    activeTab === "ingredients" ? "active" : ""
                  }`}
                >
                  İçindekiler
                </button>
              </div>
              {activeTab === "Instructions" && (
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: recipe.instructions,
                    }}
                  ></h3>
                </div>
              )}
              {activeTab === "ingredients" && (
                <div>
                  <ul>
                    {recipe.extendedIngredients.map((ingredient) => (
                      <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <p>Tarif bulunamadi.</p>
        )}
      </div>
    </div>
  );
};

export default Recipe;
