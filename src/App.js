import React from 'react';
import Navigation from './components/Navigation.js';
import Banner from './components/Banner.js';
import Information from './components/Information.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Information />
      <Projects/>
    </div>
  );
}

export default App;
