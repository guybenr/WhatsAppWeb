import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegisterScreen from './registerScreen/RegisterScreen'
import OpenScreen from './openScreen/OpenScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  const [userLoginDetails, setUserLoginDetails] = React.useState({});


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<RegisterScreen />}></Route>
        <Route path='' element={<OpenScreen />}></Route>
        <Route path='/Chat' element={<RegisterScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
