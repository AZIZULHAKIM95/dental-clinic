import React from 'react';
import Banner from '../Banner/Banner';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import './Home.css'
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <br />
            <br />
            <br />
            <Services></Services>
            <br />
            <br />
            <br />
            <ClientFeedback></ClientFeedback>
            <br />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Home;