
import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Information from './components/Information';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const target = document.querySelector(this.getAttribute('href'));

          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div id="home">
        <Banner />
      </div>
      <div id="skills">
        <Information />
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <Contacts/>
    </div>
  );
}

export default App;
