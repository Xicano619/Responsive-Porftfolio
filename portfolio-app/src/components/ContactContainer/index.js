import React from 'react';
import { Col, Row, Container } from '../Grid/index';
import NavBar from '../NavBar/index';
import iconLinkIn from '../assets/images/icons8-linkedin-48.png';
import iconGitHub from '../assets/images/icons8-github-48.png';

const ContactContainer = () => {
    
    return (
        <Container>
            <NavBar/>
            <div className="container">
                <h1 className="main-title">Contact</h1>
            </div>
            <Row>
                <Col size='sm-4'>
                    <div className="test-wrapper">
                        <p>Link up with me on LinkedIn and GitHub.</p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p>“There is no better than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance next time.”</p>
                        <p>— Malcolm X</p>
                    </div>
                </Col>
                <br/>
                <Col size='sm-4'>
                    <p>
                        <label class="main-email">Ivan.sillasnavarro@gmail.com</label>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/ivan-sillas-navarro-018662182/"
                            target="_blank"><img src={iconLinkIn} alt=""/><span class="media-text"></span></a>
                    </p>
                    <p>
                        <a href="https://github.com/Xicano619"
                        target="_blank"><img src={iconGitHub} alt=""/><span class="media-text"></span></a>
                    </p>
                </Col>
            </Row>
                
        </Container>
    );
};




export default ContactContainer;