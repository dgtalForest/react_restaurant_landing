import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">subscribe to our newsletter</h1>
      <p className="p__opensans">And never miss</p>
    </div>

    <div className="app__newsletter-input flex__container">
      <input type="email" placeholder="enter your email address" />
      <button className="custom__button">subscribe</button>
    </div>
  </div>
);

export default Newsletter;
