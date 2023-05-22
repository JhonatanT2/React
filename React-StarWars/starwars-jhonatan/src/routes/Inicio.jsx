import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

 const Inicio = () => {
  const [personajes, setPersonajes]=useState ([]);
  
  useEffect( () =>{
    fetchDatos();
  }, []);

  const fetchDatos = async () =>{
    try{
        const url = "https://swapi.dev/api/people";
        const respuesta = await fetch(url);
        const json = await respuesta.json();
        console.log(json);
        setPersonajes(json.results);
    
    }
    catch (error){
        console.log("error: "+error);
    }
  }
  const img= "https://starwars-visualguide.com/assets/img/characters/";
  return (<>
    <div className='container-fluid bg-dark'>
    <h1 className='text-center text-white'>Personajes Star Wars</h1>
    <div data="characters" className="row d-flex justify-content-center">
        {personajes.map(({name},i) =>
           // <li id={`personaje${i}`} key={name}> <Link to={`Posts/${id}`}><img src={`${img}/${i+1}.jpg`} /></Link> </li>
           <Card style={{ width: '18rem' }} className='text-center m-4'>
                <Link to={`Personajes/${i+1}`}>
                    <img class="card-img-top" id={`personaje${i}`} key={name} src={`${img}/${i+1}.jpg`}/>
                    <p class="lead">{name}</p>
                </Link>
            </Card>
        )}
      </div>
    </div>
    </>
  )
}
export default Inicio;



