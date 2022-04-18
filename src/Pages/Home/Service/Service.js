import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, description, img, price } = props.service
    return (
        <div className='col-md-4'>
            <Card className='m-4'>
                <Card.Img className='w-25 m-auto bg-light' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-3'>{name}</Card.Title>
                    <Card.Title className='fs-3'>Price: {price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button className='bg-info'>Appointment</button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Service;