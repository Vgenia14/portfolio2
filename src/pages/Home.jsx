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
          <h2>{isGer ? "Hallo!!!" : "Привет!!!"}</h2>
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
                {isGer ? "Anfänger - Webentwicklerin" : "Веб-разработчик"}{" "}
              </span>
            </h2>
            <p>
              <span>{isGer ? "Zurzeit" : "На сегодняшний день"} </span>
              {isGer
                ? " kann ich das Frontend einer Webseite entwickeln. Momentan lerne ich Backend bei meiner Weiterbildung. Nach dem Abschluss werde ich als Fullstack-Entwickler zertifiziert."
                : "могу разработать фронтенд веб-сайта. В настоящее время изучаю бэкэнд. После окончания курса получу сертификат full stack разработчик."}
            </p>
            <p>
              <span>{isGer ? "Kurz über mich:" : "Немного о себе"} </span>
              {isGer
                ? " lerne gerne etwas Neues, setze neue Ideen um und bin leidenschaftlich bei meiner Arbeit."
                : " люблю узнавать что-то новое, воплощать в жизнь новые идеи и очень нравится заниматься разработкой сайтов."}
            </p>
          </div>
        </div>
      }
    />
  );
}
