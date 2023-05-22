import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../index.css';
import Ficha from '../components/Ficha';


const Info = () => {

  let { userId } = useParams();

  const [info, setInfo]=useState ([]);
  
  useEffect( () =>{
    fetchDatos();
  }, []);

  const fetchDatos = async () =>{
    try{
        const url = "https://swapi.dev/api/people/"+userId;
        const respuesta = await fetch(url);
        const json = await respuesta.json();
        console.log(json);
        setInfo(json);
    
    }
    catch (error){
        console.log("error: "+error);
    }
  }

  const img= "https://starwars-visualguide.com/assets/img/characters/"+userId+".jpg";
  return (<>
    <div className='row bg-dark text-white'>
      <div className="col-3">
        <img src={img} className="imagen"/>
      </div> 
      <div className="col-8">
        <h2>{info.name}</h2>
        <span> Cumpleaños: {info.birth_year} </span><br/>
        <span> Especie: {info.species} </span><br/>
        <span> Altura: {info.height} cm </span><br/>
        <span> Peso: {info.mass}</span><br/>
        <span> Genero: {info.gender}</span><br/>
          
        
      </div>
      <div className="row pt-4">
        <Ficha nombre="Pelicula" datos={info.films} ids="films" Ficha/>
        <Ficha nombre="Vehiculos" datos={info.vehicles} ids="vehicles" Ficha/>
        <Ficha nombre="Naves" datos={info.starships}  ids="starships" Ficha/>
        
      </div>  
    </div>
    </>
  )
}

export default Info;