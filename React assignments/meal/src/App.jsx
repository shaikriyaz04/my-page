import { useEffect,useState } from 'react'
import './index.css'
import './App.css'
import Meal from './Meal.jsx'
import Axios from 'axios'

function App() {
  
    const [meal, setMeal] = useState([]);
    const [search, setSearch] = useState("");

    const fetechMeals = async (e) => {
      e.preventDefault();
      if(search === ""){
        alert("Enter any Meal Name")
        return;
   }


        const {data} = await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        console.log("Response", data)

        const meal = data.meals
        setMeal(meal)
    }


    useEffect( ()=> {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  }, [search])

  return (
     <>
       <h1>Meal App</h1>
           <form className='mealForm'>
                <input type="text" value={search} placeholder='Enter any Meal Name' onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={fetechMeals}>Search</button>
          </form>
       
       <Meal meal={meal}/>
     </>
  )
}

export default App