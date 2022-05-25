import React from "react";
import { Card } from 'react-bootstrap';
import prog from './img/prog.jpg';

function interests(){
  return(
    <div className="card" style={{width:'40rem'}} >
      <Card >
        <div className="img-fluid">
          <Card.Img variant="top" src={prog} style={{width:'20rem'}}  />
        </div>
        <Card.Body >
          <Card.Title>INTERESES</Card.Title>
          <Card.Text>
            Ambos nos interesa bastante el tema del front, el diseño de paginas nos ha parecido interesante por lo tanto, empezamos a estudiar mas a fondo del tema ya que ahonda demasiada informacion.
            A Sayan le interesa tambien aprender sobre la ciberseguridad o proteccion de datos, que lo apredendera mas a futuro.  

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
    
  )
}

export default interests;