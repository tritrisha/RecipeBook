function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="card-body">
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strArea} | {recipe.strCategory}</p>
        <a
          href={recipe.strSource || `https://www.themealdb.com/meal/${recipe.idMeal}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;