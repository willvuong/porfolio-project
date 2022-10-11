
import './index.css';

import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Footer from './components/layout/Footer'

import projectsData from './data/projects-data'
import socialsData from './data/socials-data'


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
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home projectsData={projectsData}/>}></Route>
          <Route exact path='/resume' element={<Resume/>}></Route>
        </Routes>
        <Footer socialsData={socialsData}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
