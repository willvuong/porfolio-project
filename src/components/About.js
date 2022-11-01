import React from 'react'


const About = () => {
  return (
    <section className="About" id="about">
      <div className="content-section">
        {/* <div className="content-section-heading-container">
          <h2 className="content-section-heading">about</h2>
        </div> */}

        <div className="about-container">
          <div className="portfolio-bio">
            <p>I am an open-minded, self-starter with a passion for all things Web Development.
              My passion for development stems from my desire to constantly learning about the
              latest and greatest web technologies, problem solving, and a need to create.
            </p>
            {/* <a id="portfolio-contact-button" href="mailto:willvuong@hotmail.com">contact</a> */}
          </div>

          <div className="portfolio-img-container">
            <img className="portfolio-img" src="portfolio-img.jpg" alt="WV" />
            <div className="portfolio-img-background"></div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default About