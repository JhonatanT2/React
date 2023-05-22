import React, {useState} from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getIdFromURL } from '../helpers/functions';
import { Link } from 'react-router-dom';

const Nombre = (props) => {

    const [nombre, setNombre]=useState ([]);
  
    useEffect( () =>{
      fetchDatos();
    }, []);
  
    const fetchDatos = async () =>{
      try{
          let url = props.url;
          const respuesta = await fetch(url);
          const json = await respuesta.json();
          console.log(json.title);
          setNombre(json.title!=undefined?json.title:json.name);
      }
      catch (error){
          console.log("error: "+error);
      }
    }
    let url=props.url;
    let id=getIdFromURL(props.url);

  return (
  <Link to={`../../${props.nombre}/${id}`}>
    <p>{nombre}</p>
    <img className='rounded-circle img-nombre' src={`https://starwars-visualguide.com/assets/img/${props.ids}/${id}.jpg`}></img>
  </Link>
    
  )
}

export default Nombre