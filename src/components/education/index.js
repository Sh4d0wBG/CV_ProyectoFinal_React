import React from "react";
import { Card } from 'react-bootstrap';
import educacion from './img/educacion.jpg';

function education(){
  return(
    <div className="card" style={{width:'40rem'}} >
      <Card >
        <div className="img-fluid">
          <Card.Img variant="top" src={educacion} style={{width:'20rem'}}  />
        </div>
        <Card.Body >
          <Card.Title>EDUCACION</Card.Title>
          <Card.Text>
            Tenemos estudios terminados de primaria y bachiller.
            La diferecia entre ambos influye en que Sayan tiene un 'Tecnico en mantenimiento de sistemas de computo' 

            Actualmente estamos cursando la Universidad, haciendo la carrera de 'Ingenieria de sistemas y telecomunicaciones'
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
    
  )
}

export default education;