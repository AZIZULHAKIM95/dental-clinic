import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, description, img } = props.service
    return (
        <div className='col-md-4'>
            <Card className='m-4'>
                <Card.Img className='w-25 m-auto bg-light' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-3 ms-5'>{name}</Card.Title>
                    <Card.Text className='ms-4'>
                        {description}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Service;