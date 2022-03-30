import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegisterScreen from './registerScreen/RegisterScreen'
import OpenScreen from './openScreen/OpenScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  // const [userLoginDetails, setUserLoginDetails ] = React.useState({});

  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/Register' element={<RegisterScreen />}></Route>
        <Route path='/' element={<OpenScreen />}></Route>
        <Route path='/Chat' element={<RegisterScreen/>}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
