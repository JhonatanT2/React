import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import Pokemons from '../components/Pokemons';
const Inicio = () => {

    const [pokemons, setPokemons]=useState ([]);
    useEffect( () =>{
      fetchDatos();
    }, []);
  
    const fetchDatos = async () =>{
      try{
          const url = "https://pokeapi.co/api/v2/pokemon";
          const respuesta = await fetch(url);
          const json = await respuesta.json();
          //console.log(json);
          setPokemons(json.results);
      
      }
      catch (error){
          console.log("error: "+error);
      }
    }
  return (
  <>
    <div className='container-fluid'>
        <div className='row text-center bg-dark text-white p-2'>
            <h1>Página de Pokemons</h1>
        </div>
        <div className='row'>
            <div className='col-3 aside'>
                <h4>Selecciona un Pokemon</h4>
                {pokemons.map(({name},i) =>
                    <Link key={i} to={`Pokemons/${i+1}`}>
                    <li>{name}</li>
                    </Link>
                )}
            </div>
            <div className='col'>
                <Pokemons/>
            </div>

        </div>

    </div>
  </>
  )
}

export default Inicio