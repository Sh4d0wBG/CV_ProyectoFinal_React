import React from "react";
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
function contact(){
  return(
    <div className="card" style={{width:'40rem'}} >
      <Card >
        <Card.Body >
          <Card.Title>ENVIANOS TU MENSAJE!</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
        </Card.Body>
      </Card>
    </div>
    
    
  )
}

export default contact;