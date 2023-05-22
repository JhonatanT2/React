import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nombre from './Nombre';
import { getIdFromURL } from '../helpers/functions';
import 'bootstrap/dist/css/bootstrap.min.css';


const Ficha = (props) => {
  //const datos = props.datos || [];
  return (
    <Card className='col-4 bg-dark m-2'>
      <Card.Title className='text-white'> {props.nombre} </Card.Title>
      <Card.Body className='d-flex justify-content-around row row-cols-4'>
        {props.datos!==undefined && props.datos.length > 0 ?  props.datos.map (        
          (dato,i) =>{
            let id=getIdFromURL(dato);
          return(
          
            <div className='text-center m-1 row-cols-lg-5 g-2'>
              <Nombre url={dato} ids={props.ids} nombre={props.nombre}></Nombre>
            </div>
          
          )
        } 
        ): <p>No hay elemnts</p>
      }
      </Card.Body>
    </Card>
  )
}

export default Ficha;