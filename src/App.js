import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-bootstrap';
import { Card } from 'reactstrap';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import HomePages from './HomePage';
import React from 'react';
import { useState } from 'react';
import {Row,Col} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      
      
    <HomePages/>
    



    <ToastContainer/>
    
   </div>
  );
}

export default App;
