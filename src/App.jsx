import React from "react";
import "./components/Home/css/style.css";
import "./normalize.css";
// import Header from "./components/Home/Header";
import Navbar from "./components/Home/Navbar";
import Main from "./components/Home/Main";
// import Footer from "./components/Home/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
