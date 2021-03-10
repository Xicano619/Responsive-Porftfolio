import React from 'react';  
import iconLinkIn from '../assets/images/icons8-linkedin-48.png';
import iconGitHub from '../assets/images/icons8-github-48.png';

const Footer = () => {
  return (
    <footer className="footer-container" style={{ backgroundColor: "#696969"}}>
      <div class="icon-container">
        <p className="personal-email">Ivan.Sillasnavarro@gmail.com
          <a className="linkedIn" href="https://www.linkedin.com/in/ivan-sillas-navarro-018662182/"
            target="_blank"><img src={iconLinkIn} alt=""/><span class="media-text"></span>
          </a>
                    
          <a className="gitHub" href="https://github.com/Xicano619"
            target="_blank"><img src={iconGitHub} alt=""/>
          </a>
        </p> 
      </div>
    </footer>
  );
};

export default Footer;