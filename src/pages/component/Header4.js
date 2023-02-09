import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import React from "react";
import "./component.css";

function Header4() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <ul className="header_row">
        <Link to="/" className="ml-sm-3 header4">
          <li>Portfolio</li>
        </Link>

        <Link to="/" className="ml-sm-3 Shuchen1">
          <li>Shuchen Wu</li>
        </Link>

        <li className="ml-sm-3 header4">CX on Packaging design</li>
      </ul>
    </div>
  );
}

export default Header4;
