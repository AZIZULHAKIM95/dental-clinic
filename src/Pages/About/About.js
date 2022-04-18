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
            <p>Prevention is Better than cure. Dr. Maddy Brown provides physiotherapy Dental checkups diagnosis and treatment. Dr Maddy Brown is an Initiative by Dr. Madhav Sharma who is a Dental Surgeon. Dr Maddy Brown provides Knowledge and Treatment of the Dental Health and Physiotheraphy, which will Help Indian Population to Maintain Health. Dr Maddy Brown allows the Patients to learn about Health Care Plan for Dental and Physiotheraphy, Which is Free Of Cost.Dr Maddy Brown is a One Stop Solution for all your Health in the Speciality of Dental and Physiotheraphy.Dr Maddy Brown provides a Lifetime Opportunity to learn about Health Care from Successful Specialist Doctors. VISIONTo help people live a life…</p>
            <br />
            <br />
        </div>
    );
};

export default About;