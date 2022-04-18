import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import './Home.css'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <br />
            <br />
            <Services></Services>
            <br />
            <br />
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>

        </div>
    );
};

export default Home;