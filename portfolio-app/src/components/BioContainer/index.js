import React from 'react';
import { Row, Col,  Container} from '../Grid/index';

    const BioContainer = () => {

        return (
            <Container> 
                <Row>
                     <Col sm-12>
                         <Row>   
                            <Col sm-8>
                                <div className='main-header'>
                                    <h2>Bio</h2>
                                </div>
                                <hr/>
                                <img id='mainPic' className='img img-thumbnail float-left' src="../../portfolio-app/" alt="Head shot of Iván "/>

                                <p>Hello world! I am Iván Sillas-Navarro. A husband, a community member, a teacher and currently a student of computer programming at UCSD-Extension. Born in México, and raised in San Diego, California. The first but not the last, in my family to attend and graduate university. A soul with a purpose.</p>                        
                                <p> I enjoy jogs on the beach accompanied by ocean swims; an exercise enthusiast. An avid reader in attempts to learn everything there is about life. What is LIFE? And why is there LIFE?</p>
                        
                                <p>I am a student of life, a master-student. In this journey of a master-student, this perspective of learning, nurturing the mind seeking new skills to enhance my personal life and that of others. </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );

    };
    
export default BioContainer;