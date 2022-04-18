import React from 'react';
import './About.css'
import d from '../../images/d.jpg'

const About = () => {
    return (
        <div className='container'>
            <img className='w-50 rounded mx-auto d-block' src={d} alt="" />
            <br />
            <h2 className='text-center text-info'>Welcome to Dr. Maddy Brown Pvt. Ltd</h2>
            <br />
            <p>Prevention is Better than cure. Dr. Maddy Brown provides physiotherapy Dental checkups diagnosis and treatment. Dr. Maddy Brown is an Initiative by Dr. Madhav Sharma who is a Dental Surgeon and provides Knowledge and Treatment of the Dental Health and Physiotheraphy. Dr. Maddy Brown is a One Stop Solution for all your Health in the Speciality of Dental. Dr. Maddy Brown provides a Lifetime Opportunity to learn about Health Care from Successful Specialist Doctors. Dr. Maddy Browns goal is to achieve Master of Dental Surgery (MDS), Fellow of the Royal College of Dentists of Canada (FRCD(C)) and Doctor of Dentistry (DDent).</p>
            <br />
            <br />
        </div>
    );
};

export default About;