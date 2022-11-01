import React from 'react'

import Socials from './Socials.js'

const Footer = ({ socialsData }) => {
  return (
    <footer className="Footer" id="contact">

      <div className="footer-section content-section">
        <div className="get-in-touch">
          <h3>Get In Touch.</h3>
          
          <div className="footer-contact">
            <a href="tel:647-708-5527"><i class="fa-solid fa-phone"></i> +1 (647)-708-5527</a>
            <a href="mailto:willvuong@hotmail.com"><i class="fa-solid fa-envelope"></i> willvuong@hotmail.com</a>
          </div>

          <div className="footer-socials">
            {socialsData.length > 0 && socialsData.map((data) => (
              <Socials key={data.id} socialsData={data} />
            ))}
          </div>

        </div>

        <div className="footer-form">
          <form method="post" action="contact-form-handler.php" className="contact-form" id="contact-form">
            <input type="text" className="form-input" id="form-name" name="form-name" placeholder="name" required />
            <span></span>

            <input type="email" className="form-input" id="form-email" name="form-email" placeholder="email" required />
            <span></span>

            <textarea className="form-input" id="form-textarea" name="form-textarea" placeholder="message" required></textarea>
            <span></span>

            <input id="form-submit" type="submit" value="submit"></input>
          </form>

        </div>


      </div>

      <div className="footer-bottom">
        <p>&copy; 2022 William Vuong</p>
        <a id="back-to-top-button" href="#header">&#8679;</a>
      </div>

    </footer>
  )
}

export default Footer