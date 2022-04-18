import React from 'react';
import './Services.css'
import useService from '../../Hooks/useService'
import Service from '../../Home/Service/Service'
import { CardGroup } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useService()
    return (
        <div className='container m-auto text-center'>
            <h1 className='text-info mt-4'>SERVICES WE PROVIDE</h1>
            <br />
            <br />
            <CardGroup>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </CardGroup>
        </div>


    );
};

export default Services;