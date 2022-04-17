import React from 'react';
import './ClientFeedback.css'
import useFeedback from '../../Hooks/useFeedback'
import SingleFeedback from '../../Home/SingleFeedback/SingleFeedback'
import { CardGroup } from 'react-bootstrap';

const ClientFeedback = () => {
    const [feedbacks, setFeedbacks] = useFeedback()
    return (
        <div className='container m-auto'>
            <h1>CUSTOMERS FEEDBACK</h1>
            <CardGroup>
                {
                    feedbacks.map(feedback => <SingleFeedback
                        key={feedback.id}
                        feedback={feedback}
                    ></SingleFeedback>)
                }
            </CardGroup>
        </div>


    );
};

export default ClientFeedback;