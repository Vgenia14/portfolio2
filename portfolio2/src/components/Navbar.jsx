import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LangContext";
import "./Navbar.css";

export default function Navbar() {
  const { isGer, setIsGer } = useContext(LanguageContext);

  
  const handleClickRu = (e) => {
    e.preventDefault();
    setIsGer(false);
 
  };
  const handleClickDe = (e) => {
    e.preventDefault();
    setIsGer(true);

  };

  return (
    <div className="container_navBar">
      <Link to="/" className="box_logo">
        <h1>{isGer ? "Evgeniia" : "Евгения"}</h1>
        <h2>{isGer ? "Web-Entwicklerin" : "Веб-разработчик"}</h2>
      </Link>
      <ul className="box_menü">
        <li>
          <NavLink to="/">{isGer ? "Home" : "Главная"}</NavLink>
        </li>
        <li>
          <NavLink to="/projects">{isGer ? "Projekte" : "Проекты"}</NavLink>
        </li>
        <li>
          <NavLink to="/About">{isGer ? "Über mich" : "Обо мне"}</NavLink>
        </li>
        <li>
          <NavLink to="/Contacts">{isGer ? "Kontakte" : "Контаткты"}</NavLink>
        </li>
      </ul>
      <ul className="box_language">
        <li>
          <input
            type="radio"
            name="language"
            className="language"
            checked={isGer ? true : false}
          />
          <label htmlFor="de" onClick={handleClickDe}>
            {isGer ? "de" : "нем"}
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="language"
            value="ru"
            className="language"
            checked={!isGer ? true : false}
          />
          <label htmlFor="ru" onClick={handleClickRu}>
            {isGer ? "ru" : "рус"}
          </label>
        </li>
      </ul>
    </div>
  );
}
