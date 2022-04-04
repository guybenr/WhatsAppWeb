import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegisterScreen from './registerScreen/RegisterScreen'
import OpenScreen from './openScreen/OpenScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatScreen from './chatScreen/chatScreen';
import Temp from './temp/Temp'





function App() {
  const [userLoginDetails, setUserLoginDetails] = React.useState('');


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<RegisterScreen onSignUp={setUserLoginDetails}/>}></Route>
        <Route path='/' element={<OpenScreen onSignIn={setUserLoginDetails} />}></Route>
        <Route path='/Chat' element={<ChatScreen userLoginDetails={userLoginDetails}/>}></Route>
        <Route path='/temp' element={<Temp userLoginDetails={userLoginDetails}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
