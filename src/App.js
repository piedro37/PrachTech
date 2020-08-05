import React from 'react';
import './App.css';
import { NavBar } from './app/NavBar';
import Hi  from 'app/Hi';
import TechStack from 'app/techStack/TechStack';
import Contact from 'app/contact/Contact';
import ReactGA from 'react-ga';
import { googleTrackingCode } from 'resources/privateConstants';

function App() {
  ReactGA.initialize(googleTrackingCode);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
        <NavBar />
        <Hi />
        <TechStack />
        <Contact />
    </div>
  )
}

export default App;
