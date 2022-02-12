import "./App.css";
import Cards from "./components/cards/Cards";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { User } from "./pages/user/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Switch } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="container__main">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
