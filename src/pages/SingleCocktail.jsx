import React, { useEffect, useState } from 'react';
import MainNav from '../components/MainNav';
import Loading from '../components/Loading';
import { Link, useParams } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: img,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ing = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            img,
            info,
            category,
            glass,
            instruction,
            ing,
          };
          setCocktail(newCocktail);
        } else setCocktail(null);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) return <Loading />;
  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>;
  }

  const { name, img, glass, info, category, ing, instruction } = cocktail;

  return (
    <>
      <MainNav />
      <section className="section cocktail-section">
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={img} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">Name: </span>
              {name}
            </p>
            <p>
              <span className="drink-data">Category: </span>
              {category}
            </p>
            <p>
              <span className="drink-data">Info: </span>
              {info}
            </p>
            <p>
              <span className="drink-data">Glass: </span>
              {glass}
            </p>
            <p>
              <span className="drink-data">Instructions: </span>
              {instruction}
            </p>
            <p>
              <span className="drink-data">Ingredients: </span>
              {ing.map((item, i) =>
                item ? <span key={i}>{item}</span> : null
              )}
            </p>
          </div>
        </div>
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
      </section>
    </>
  );
};

export default SingleCocktail;
