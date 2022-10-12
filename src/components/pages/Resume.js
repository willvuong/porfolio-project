import React from 'react'

const Resume = () => {
  return (
    <div className="Resume content-section">
      {/* <p>I am an open-minded self-starter with a passion for all things Web Development and am currently seeking a role in the Web Development field. My passion for Web Development stems from my desire to be constantly learning in a constantly changing field, problem solving, and a need to create.</p> */}
      
      <section className="technical-skills resume-section">
        <h2>Technical Skills</h2>
        <ul>
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            JavaScript
          </li>
          <li>
            WordPress
          </li>
          <li>
            React
          </li>
          <li>
            SQL
          </li>
          <li>
            Git
          </li>
          <li>
            jQuery
          </li>
          <li>
            SEO
          </li>
          <li>
            Node
          </li>
          <li>
            API
          </li>
          <li>
            Visual Studio Code
          </li>
          <li>
            Shopify
          </li>
          <li>
            Liquid
          </li>
          <li>
            Microsoft Office
          </li>
        </ul>
      </section>

      <section className="work-experience resume-section">
        <h2>Work Experience</h2>
        
        <div className="work">
          <div className="work-duration">September 2021 - September 2022</div>
          <h3>WordPress Developer, <span className="workplace">Ontario Learning Development Foundation INC.</span></h3>
          <ul className="work-responsibilities">
            <li>Used various technologies including WordPress, HTML, and CSS, and various page building Plugins such as Elementor, WPBakery, and Beaver Builder to redesign, develop, maintain, and update websites, and SEO optimize pages</li>
            <li>Attended weekly meetings to consult with colleagues on requirements and tasks to complete to ensure websites meet their needs as well as their user’s needs</li>
            <li>Provided technical support and troubleshot issues for GoDaddy, hosting issues, SSL Key issues, and website security</li>
            <li>Demonstrated effective communication to communicate technical work to team members who are not technically versed</li>
          </ul>
        </div>

        <div className="work">
          <div className="work-duration">JANUARY 2021 – AUGUST 2022</div>
          <h3>Shopify Website Developer, <span className="workplace">GamerTech Toronto</span></h3>
          <ul className="work-responsibilities">
            <li>Created reusable sections using JSON objects, Liquid, HTML, CSS, and JavaScript</li>
            <li>Established meaningful UI/UX design in order to effectively navigate users to the website’s call to action and products</li>
            <li>Migrated website from a 1.0 theme to a 2.0 theme to achieve a more flexible and dynamic store customization menu options</li>
          </ul>
        </div>

        <div className="work">
          <div className="work-duration">APRIL 2018 – JANUARY 2022</div>
          <h3>Manager/Barber, <span className="workplace">Studio 6ix</span> </h3>
          <ul className="work-responsibilities">
            <li>Built rapport by establishing trust, providing quality services, and providing great customer service, which resulted in creating lasting client relationships and a high client retention rate</li>
            <li>Demonstated the ability to consistently grow client base by implementing various strategies to effectively grow the store’s client base and reaching new audiences</li>
            <li>Effectively organized and maintained work schedules for myself and others to accommodate clients in an orderly manner that ensures punctuality without compromising quality customer service</li>
            <li>Demonstrated leadership by leading the hiring process and training of new hires</li>
          </ul>
        </div>

        <div className="work">
          <div className="work-duration">MARCH 2015 – MAY 2018</div>
          <h3>Server, <span className="workplace">The Pickle Barrel</span></h3>
          <ul className="work-responsibilities">
            <li>Provided quality customer service to several guest tables simultaneously in a fast-paced environment</li>
            <li>Attended to guest’s concerns and issues in a reasonable and timely manner</li>
            <li>Trained new personnel on guest service expectations, resolving guest’s issues, and restaurant etiquette</li>
          </ul>
        </div>
      </section>

      <section className="education resume-section">
        <h2>Education</h2>
        <div className="work-duration">May 2017 - May 2019</div>
        <h3>Computer Programming, <span className="workplace">Seneca College</span></h3>
        <ul>
          <li>Demonstrated the ability to implement different coding languages to complete various complex assignments</li>
          <li>Developed communication, teamwork, and interpersonal skills by collaborating with other students to complete various projects and assignments</li>
          <li>Notable Courses: Web Programming, Database Design and SQL, Requirement Gathering Using Object Oriented Models, Analysis and Design, Object Oriented Programming</li>
        </ul>
      </section>
    </div>
  )
}

export default Resume