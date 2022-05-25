import React from "react";
import { Card } from 'react-bootstrap';
import pareja from './img/pareja.jpg';
import './about.css';

function about(){
  return(
    <div className="card" style={{width:'40rem'}} >
      <Card >
        <div className="img-fluid">
          <Card.Img variant="top" src={pareja} style={{width:'20rem'}}  />
        </div>
        <Card.Body >
          <Card.Title>SOBRE NOSOTROS</Card.Title>
          <Card.Text>
            Somos unas personas leales, comprometidas con valor eticos, morales, alto sentido de la honestidad, pertenencia, resposabilidad, compromiso adaptacion al cambio y aprendizaje continuo.

            Dispuestos a cumplir con las distintas funciones, obligaciones y normas laborales que tengan establecidas,
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
    
  )
}

export default about;