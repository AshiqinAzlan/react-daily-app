import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ToDoList from "./Components/ToDoList";
import Weather from "./Components/Weather";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
