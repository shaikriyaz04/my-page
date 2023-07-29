import { useState,useEffect } from 'react'
import './index.css'
import './App.css'
import Axios from 'axios'
import Pokemon from './Pokemon.jsx'

function App() {
  const [text, setText] = useState([]);
  const [search, setSearch] = useState("");

  const fetechPokemons = async (e) => {

   e.preventDefault();


    if(search === ""){
         alert("Enter any Pokemon Name")
         return;
    }

         const {data} = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
         console.log("Response", data);

         const text = data
         setText(text)
         
  }

  useEffect( ()=> {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
}, [search])

  return (
     <>
        <h1>Pokemon App</h1>
        <form className='pokemonForm'>
             <input type="text" value={search} placeholder='Enter Any Pokemon Name' onChange={(e) => setSearch(e.target.value)}/>
             <button onClick={fetechPokemons}>Search</button>
        </form>
        <Pokemon text={text}/>
     </>
  )
}

export default App