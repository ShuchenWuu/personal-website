import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import React from "react";
import "./component.css";

function Header1(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div className="header_row">
        <Link to="/" className=" header1" style={{ color: "#b8bafd" }}>
          <li>Portfolio</li>
        </Link>

        <Link to="/" className=" Shuchen">
          <li>Shuchen Wu</li>
        </Link>

        <li className="header1" style={{ color: "#b8bafd" }}>
          {props.string}
        </li>
      </div>
    </div>
  );
}

export default Header1;
