import React, {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ficha from '../components/Ficha';

const Planetas = () => {

    let { planetId } = useParams();
    let img="https://starwars-visualguide.com/assets/img/planets/"+planetId+".jpg";
    const [info, setInfo]=useState ([]);
    
    useEffect( () =>{
      fetchDatos();
    }, []);
  
    const fetchDatos = async () =>{
      try{
          const url = "https://swapi.dev/api/planets/"+planetId;
          const respuesta = await fetch(url);
          const json = await respuesta.json();
          console.log(json);
          setInfo(json);
      
      }
      catch (error){
          console.log("error: "+error);
      }
    }
  return (
    <>
    <div className='row bg-dark text-white'>
      <div className="col-3">
        <img src={img} className="imagen"/>
      </div> 
      <div className="col-8">
        <h2>{info.name}</h2>
        <span> Poblacion: {info.population} </span><br/>
        <span> Periodo de rotacion: {info.rotation_period} </span><br/>
        <span> Periodo Orbital: {info.orbital_period}</span><br/>
        <span> Diametro: {info.diameter}</span><br/>
        <span> Gravedad: {info.gravity}km/h</span><br/>
        <span> Terreno: {info.terrain}</span><br/>
        <span> Clima: {info.climate}</span><br/>    
      </div>
    </div>
    <div className="row">
        <Ficha nombre="Pelicula" datos={info.films} ids="films" Ficha/>
        <Ficha nombre="Personajes" datos={info.residents} ids="characters" Ficha/>
      </div>
    </>
  )
}

export default Planetas