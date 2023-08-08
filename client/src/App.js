import React,{useState,useEffect} from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    
    return (
        <GoogleOAuthProvider clientId='41712815414-gomrbv3sh26e1ad0gb9she5bqssk6dek.apps.googleusercontent.com'>
        <BrowserRouter>
            
            <Container maxidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
     

            </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
};

export default App;
