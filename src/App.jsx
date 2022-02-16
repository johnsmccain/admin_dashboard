import "./App.css";
import Cards from "./components/cards/Cards";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { Userlist } from "./pages/userlist/Userlist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./pages/User/User";

// import { Switch } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="container__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="/user/:userId" element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
