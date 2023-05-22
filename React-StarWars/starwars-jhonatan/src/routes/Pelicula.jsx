import React, {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ficha from '../components/Ficha';

const Pelicula = () => {

  let { movieId } = useParams();
  const [info, setInfo]=useState ([]);
  
  useEffect( () =>{
    fetchDatos();
  }, []);

  const fetchDatos = async () =>{
    try{
        const url = "https://swapi.dev/api/films/"+movieId;
        const respuesta = await fetch(url);
        const json = await respuesta.json();
        console.log(json);
        setInfo(json);
    
    }
    catch (error){
        console.log("error: "+error);
    }
  }
  let img="https://starwars-visualguide.com/assets/img/films/"+movieId+".jpg";
  return (
    <>
    <div className='row bg-dark text-white'>
      <div className="col-3">
        <img src={img} className="imagen"/>
      </div> 
      <div className="col-8">
        <h2>{info.title}</h2>
        <span> Fecha de Creacion: {info.created} </span><br/>
        <span> Director: {info.director} </span><br/>
        <span> Producer(s): {info.producer}</span><br/>
        <span> Sinopsis: {info.opening_crawl}</span><br/>    
      </div>
    </div>
    <div className="row">
        <Ficha nombre="Personajes" datos={info.characters} ids="characters" Ficha/>
        <Ficha nombre="Planetas" datos={info.planets} ids="planets" Ficha/>
        <Ficha nombre="Vehiculos" datos={info.vehicles} ids="vehicles" Ficha/>
        <Ficha nombre="Naves" datos={info.starships}  ids="starships" Ficha/>
        
      </div>
    </>
  )
}

export default Pelicula;