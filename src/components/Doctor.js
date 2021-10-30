import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";


const Doctor = ({ doctor }) => {
  const { name, profession, about, img } = doctor;
  return (
      <Col className="my-3" md={6} lg={3}>
          <Zoom>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h4>{name}</h4>
          </Card.Title>
          <Card.Title>
            <h6>{profession}</h6>
          </Card.Title>
          <Card.Text>{about}</Card.Text>
          <Button className='w-100' variant="primary">Book now</Button>
        </Card.Body>
      </Card>
      </Zoom>
    </Col>
  );
};

export default Doctor;
