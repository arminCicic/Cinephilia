import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <span onClick={() => window.scroll(0, 0)} className="header">
        <FontAwesomeIcon className="icon" icon={faFilm}></FontAwesomeIcon>
        Cinephilia
        <FontAwesomeIcon className="icon" icon={faFilm}></FontAwesomeIcon>
      </span>
    </div>
  );
};

export default Header;
