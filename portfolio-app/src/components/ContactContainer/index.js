import React from 'react';
import { Col, Row, Container } from '../Grid/index';

const ContactContainer = () => {

    return (
        <Container fluid>
            
            <h1 className="contact-title">Contact</h1>
            <Row>
                <Col sm-4>
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
                <Col sm-4></Col>
                <Col sm-4>
                    <p>
                    <label class="main-email">Ivan.sillasnavarro@gmail.com</label>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/ivan-sillas-navarro-018662182/"
                             target="_blank"><img src="./assets/images/InIcon.png" alt=""/><span class="media-text"></span>
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/Xicano619"
                            target="_blank"><img src="./assets/images/github-24.png" alt=""/><span class="media-text"></span>
                        </a>
                    </p>
                </Col>
            </Row>

        </Container>

    );

};




export default ContactContainer;