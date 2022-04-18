import React from 'react';
import nn from '../../images/nn.jpg'

const Checkout = () => {
    return (
        <div className='mt-4'>
            <img className='w-25 rounded mx-auto d-block' src={nn} alt="" />
            <h2 className='text-center text-info'>Your Appointment Is Confirmed. </h2>
            <h2 className='text-center text-info'>Visit On Next Friday, DR. Maddy Brown Is Waiting For You.</h2>
        </div>
    );
};

export default Checkout;