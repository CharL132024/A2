import React from 'react';
//importing stylesheet 
import './App.css';
//importing components
import Navigation from "./Navigation/Navigation"
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
//setting sttucture of webpage 
function App() {
  return (
    <div className="App">
        <Navigation/>
        <Header/>
        <Main/>
        <Aside/>
        <Footer/>
    </div>
  );
}

export default App;