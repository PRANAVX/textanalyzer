import Textbox from "./components/Textbox";
import Navbar from "./components/Navbar";
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const darkmode = () => {
    if (style.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };
  return (
    <div style={{height:"100vh",...style}}>
      <Router>
        <Navbar title="TexAnalyzer" darkMode={darkmode} />
        <div className="container ">
          <Routes>
            <Route path="/about" element={<About styl={style}/>}/>
          

           <Route path="/" element={<Textbox styl={style}/>}/>
              
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
