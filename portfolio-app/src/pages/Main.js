import React from 'react';
import { Container } from '../components/Grid/index';
import BioContainer from '../components/BioContainer/index';
import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/index';
   
const Main = () => {
        return (
            <Container>
                <NavBar/> 
                <br/> 
                <BioContainer/>
                <br/>
                <Footer/>
            </Container>
        );


    };






export default Main;