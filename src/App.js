import React from 'react';
import './App.css';
import Header from './components/header.js';
import Introduction from './components/Introduction.js';
import About from "./components/about.js";
import Technologies from "./components/technologies.js" ;
import Projects from "./components/projects.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <About></About>
      <Technologies></Technologies>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
