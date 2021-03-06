import React from 'react';  
import iconLinkIn from '../assets/images/icons8-linkedin-48.png';
import iconGitHub from '../assets/images/icons8-github-48.png';

const Footer = () => {

    return (

        <footer className="text-center" style={{ backgroundColor: "#696969"}}>
            <div class="icon-container">
              
              <p className=" fixed-left">Ivan.Sillasnavarro@gmail.com
                   
    
                <a className="align-center" href="https://www.linkedin.com/in/ivan-sillas-navarro-018662182/"
                     target="_blank"><img src={iconLinkIn} alt=""/><span class="media-text"></span>
                </a>
                    
                <a href="https://github.com/Xicano619"
                    target="_blank"><img src={iconGitHub} alt=""/>
                </a>
              </p> 
            </div>



        </footer>



    );


};


export default Footer;