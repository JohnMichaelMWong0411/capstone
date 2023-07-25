import React from 'react';
import './ServicePage.css';

const ServicePage = () => {
  return (
    <div id="ServicePage" className="ServicePage-container">
            <div class='LGIContent'>
                <div className='LGIContent-wrapper'>
                <h1 class="primary-color">Logo & Brand Identity</h1> 
                  <h2>Work in harmony to create a strong and cohesive brand presence. 
                    They communicate our brands values, differentiate us from competitors, 
                    and resonate with our target audience. 
                    Our logo and brand identity are the visual embodiment of our brands promise, 
                    ensuring that every interaction with our brand leaves a lasting impression.</h2>
                </div>
            </div>
            <div class="LGIImage">
                <img src="./logoImg.jpeg" alt="Service Page"/>
            </div>
    </div>
  );
};

export default ServicePage;