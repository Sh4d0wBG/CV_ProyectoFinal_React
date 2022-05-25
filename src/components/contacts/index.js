import React from "react";
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
function contact(props){
  return(
    <div className="card" style={{width:'40rem'}} >
      <Card >
        <Card.Body >
          <Card.Title>ENVIANOS TU MENSAJE!</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder={props.nameOne}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="email" placeholder={props.nameTwo} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder={props.nameThree} />
              </Form.Group>
            </Form>
        </Card.Body>
      </Card>
    </div>
    
    
  )
}

export default contact;