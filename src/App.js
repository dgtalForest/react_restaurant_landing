import React from 'react';

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu
} from './container';
import { Navbar, ScrollToTopButton } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    <ScrollToTopButton />
  </div>
);

export default App;
