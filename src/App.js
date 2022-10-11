
import './index.css';

import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

import socialsData from './data/socials-data'
import projectsData from './data/projects-data'

import { useEffect } from 'react'

function App() {
  useEffect(() => {
    var isInViewport = function (elem) {
      var distance = elem.getBoundingClientRect();
      return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    var borderTop = document.querySelectorAll('.content-section-heading-container');
    window.addEventListener('scroll', function (event) {
      // add event on scroll
      borderTop.forEach(element => {
        //for each .thisisatest
        if (isInViewport(element)) {
          //if in Viewport
          element.classList.add("border-top-animation");
        }
      });
    }, false);
  }, []);

  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects projectsData={projectsData} />
      <Footer socialsData={socialsData} />
    </div>
  );
}

export default App;
