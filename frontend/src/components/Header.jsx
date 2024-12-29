import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Leaf Disease Classifier</h1>
      <p>This is an AI technology that helps you classify leaf diseases in Potato & Pepper. To know more, click on the buttons below.</p>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;