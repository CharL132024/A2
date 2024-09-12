import React from 'react';
import './App.css';
import Navigation from "./Navigation/Navigation"
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";

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