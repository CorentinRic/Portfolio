import React from 'react'
import './App.css';
import Header from './components/Header';
import Router from './utils/Router';
import Footer from './components/Footer';
import { ThemeContext } from './utils/ThemeContext';
import { useContext } from 'react';

function App() {

    const {theme} = useContext(ThemeContext);

  return (
        <div className='App' id={theme ? "dark" : "light"}>
            <Header />
                <Router />
            <Footer />
        </div>
  )
}

export default App