import React, {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ficha from '../components/Ficha';


export const Vehiculos = () => {

  let { vehiculoId } = useParams();
  const [info, setInfo]=useState ([]);
  
  useEffect( () =>{
    fetchDatos();
  }, []);

  const fetchDatos = async () =>{
    try{
        const url = "https://swapi.dev/api/vehicles/"+vehiculoId;
        const respuesta = await fetch(url);
        const json = await respuesta.json();
        console.log(json);
        setInfo(json);
    
    }
    catch (error){
        console.log("error: "+error);
    }
  }
  let img="https://starwars-visualguide.com/assets/img/vehicles/"+vehiculoId+".jpg";
  return (
    <>
    <div className='row bg-dark text-white'>
      <div className="col-3">
        <img src={img} className="imagen"/>
      </div> 
      <div className="col-8">
        <h2>{info.name}</h2>
        <span> Modelo: {info.model} </span><br/>
        <span> Manufacturer: {info.manufacturer} </span><br/>
        <span> Class: {info.vehicle_class}</span><br/>
        <span> Cost: {info.vehicle_class}</span><br/>
        <span> Speed: {info.max_atmosphering_speed}km/h</span><br/>
        <span> Length: {info.length}</span><br/>
        <span> Capacidad de Carga: {info.cargo_capacity}</span><br/>    
      </div>
    </div>
    <div className="row">
        <Ficha nombre="Pelicula" datos={info.films} ids="films" Ficha/>
        <Ficha nombre="Personajes" datos={info.pilots} ids="characters" Ficha/>
      </div>
    </>
  )
}
