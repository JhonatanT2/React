import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';

const Pokemons = () => {

  const [info, setInfo]=useState ([]);
  let { pokeId } = useParams();
  let [abilitys, setAbilitys]=useState ([]);
  
  useEffect( () =>{
    fetchDatos();
  }, [pokeId]);

  const fetchDatos = async () =>{
    try{
        const url = "https://pokeapi.co/api/v2/pokemon/"+pokeId;
        const respuesta = await fetch(url);
        const json = await respuesta.json();
        setInfo(json);
        setAbilitys(json.abilities);
        console.log(abilitys);
    
    }
    catch (error){
        console.log("error: "+error);
    }
  }
  let id="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokeId+".png"
  if(pokeId){
  return ( 
      <Card className='carta'>
        <Card.Img variant='top' src={id} className=''/>
        <Card.Body>
          <Card.Title>{info.name}</Card.Title>        
          <Card.Text>
          <div class="border-bottom border-2">Altura:{info.height}</div><br/>
          <div class="border-bottom border-2">Habilidades:</div><br/>
          {abilitys!==undefined && abilitys.length > 0 ? abilitys.map(
              (dato,i)=>{
              return(
              <>
                <a key={i}>{dato.ability.name}</a><br/>               
              </>
              )
              }           
            ): <p> Sin Habilities</p>
          }            
          </Card.Text>
        </Card.Body>
      </Card>
  )
}
}

export default Pokemons;