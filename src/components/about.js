import React from 'react';
import StandIn from "../images/standinimage.png"

const about = () => {
    return (
        <section className="about" id="about">
           <h2 className="section__title section__title--about">Who I am</h2>
           <p className="section__subtitle section__subtitle--about">Junior developer based in North London</p>
           
           <div className="about__body">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           
           
          <img src={StandIn} alt="placepolder" className="about__img"></img>
        </section>
    );
};

export default about;