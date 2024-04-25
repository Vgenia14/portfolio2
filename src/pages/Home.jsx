import React, { useContext } from "react";
import "./Home.css";
import Book from "../components/Book";
import { LanguageContext } from "../context/LangContext";
import myFoto from "../svg/ich2.jpg"
// import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isGer } = useContext(LanguageContext);
  // const navigate = useNavigate();
  //   useEffect(() => {
  //     if (id.id === undefined) {
  //       navigate(`/`);
  //     }
  //   }, [id]);
  return (
    <Book
      children1={
        <div className="container_home_left">
          <img src={myFoto} alt="" />
          <h2>{isGer ? "Hallo" : "Привет!!!"}</h2>
          <h2>
            {isGer ? "Ich heiße " : "меня зовут "}
            <span> {isGer ? "Evgeniia" : "Евгения"}</span>
          </h2>
        </div>
      }
      children2={
        <div className="container_home_right">
          <div>
            <h2>
              {isGer ? "Ich bin eine " : "я "}
              <span>
                {isGer ? "Webentwicklerin" : "Веб-разработчик"}{" "}
              </span>
            </h2>
            <p>
              <span>{isGer ? "Zurzeit" : "На сегодняшний день"} </span>
              {isGer
                ? "auf der Suche nach neuen beruflichen Herausforderungen."
                : "В поисках новых профессиональных вызовов."}
            </p>
            <p>
              <span>{isGer ? "Kurz über mich:" : "Немного о себе"} </span>
              {isGer
                ? " bin leidenschaftlich bei meiner Arbeit, lerne gerne etwas Neues und setze neue Ideen um."
                : " очень нравится заниматься разработкой сайтов, люблю узнавать что-то новое, воплощать в жизнь новые идеи."}
            </p>
          </div>
        </div>
      }
    />
  );
}
