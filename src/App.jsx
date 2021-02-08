import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Home/css/style.css";
import "./normalize.css";
// import Header from "./components/Home/Header";
import Navbar from "./components/Home/Navbar";
import Main from "./components/Home/Main";
import Users from "./components/Manage/Users";
// import Footer from "./components/Home/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      {/* <Footer /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
