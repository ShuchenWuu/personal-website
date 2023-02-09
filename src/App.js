import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import { containor, row, col } from "react-bootstrap";
import Course_Nav from "./pages/CourseNav";
import Climber from "./pages/Climber";
import ServDes from "./pages/ServDes";
import Coucou from "./pages/Coucou";
import Com from "./pages/Com";
import Franklii from "./pages/Franklii";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseNav" element={<Course_Nav />} />
        <Route path="/climber" element={<Climber />} />
        <Route path="/serv_des" element={<ServDes />} />
        <Route path="/coucou" element={<Coucou />} />
        <Route path="/complainning_prints" element={<Com />} />
        <Route path="/franklii" element={<Franklii />} />
      </Routes>
    </Router>
  );
}

export default App;
