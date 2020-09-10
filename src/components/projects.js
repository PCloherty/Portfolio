import React from 'react';
import StandIn from '../images/standinimage.png';

const projects = () => {
    return (
        <section className="my-projects" id="projects">
            <h2 className="section__title">My Projects</h2>
            <p className="section__subtitle--projects"></p>
            
            <div className="portfolio">
                <a href="test" className="portfolio__item item--1">
                    
                    <img src={StandIn} alt="tedst" className="portfolio__img"></img>
                </a>
                <a href="test" className="portfolio__item item--2">
                    <img src={StandIn} alt="tedst" className="portfolio__img"></img>
                </a>
                <a href="test" className="portfolio__item item--3">
                    <img src={StandIn} alt="tedst" className="portfolio__img"></img>
                </a>
            </div>
            
        </section>
    );
};

export default projects;