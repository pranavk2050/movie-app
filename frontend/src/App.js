import React from "react";
import './App.css';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from "./containers/Movies";

const App = () => {
  
  return(
    <React.Fragment>
        <Header/>
        <Movies/>
        <AddMovie/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;