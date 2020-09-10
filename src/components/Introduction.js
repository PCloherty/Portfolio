import React from 'react';
import Profile from '../images/profile.png'
import '.././App.css';

const Introduction = () => {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Paraic Cloherty</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Junior developer</p>
            <img src={Profile} alt="its Me!" className="intro__img"></img>
        </section>
    );
};

export default Introduction;