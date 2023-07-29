import React from "react"

function Meal({meal}){
     
      

   return (

      
      <div className="mealData">
            {meal? (
               meal.map((meals) => (
               <div key={meals.idMeal} className="mealList">
                  <h1>{meals.strMeal}</h1>
                  <img src={meals.strMealThumb} alt="" />
                </div>
               ))
               ) : (
                  <p className="noResult">No Meals Found!</p>
               )} 
                 
                  
     </div>
          
)
}

export default Meal