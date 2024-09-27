import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx"
import Upload from "./components/Upload.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Header from "./components/Header.jsx"
import Videos from "./components/Videos.jsx"
import Footer from "./components/Footer.jsx"
import './app.css'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/videos' element={<Videos/>}></Route>
        {/* <Route path='/videos?category=free' element={<Videos/>}></Route> */}
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
