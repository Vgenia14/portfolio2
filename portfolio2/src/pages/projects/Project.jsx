import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../../data.json";
import "./Projects.css";
import Book from "../../components/Book";
import ProjectsList from "./ProjectsList";
import { LanguageContext } from "../../context/LangContext";

// IMAGES
import backwardStep from "../../svg/chevron-left-solid.svg";
import forwardStep from "../../svg/chevron-right-solid.svg";


export default function Project() {
  const { isGer } = useContext(LanguageContext);
  const id = useParams();
  const navigate = useNavigate();

  const handleBackwardStep = (e) => {
    e.preventDefault();
    const newPathID = Number(id.id);
    if (newPathID <= 1) {
      navigate(`/projects/1`);
    } else {
      navigate(`/projects/${newPathID - 1}`);
    }
  };
  const handleForwardStep = (e) => {
    e.preventDefault();
    const newPathID = Number(id.id);
    if (newPathID >= data.length) {
      navigate(`/projects/${data.length}`);
    } else {
      navigate(`/projects/${newPathID + 1}`);
    }
  };

  useEffect(() => {
    if (id.id === undefined) {
      navigate(`/projects/1`);
    }
  }, [id]);
  return (
    <Book
      children1={<ProjectsList projects={data}/>}
      children2={
        <div className="card_right">
          {data.map((project, ind) => {
            if (project.id === id.id) {
              return (
                <div key={ind} className="card">
                  <div className="box_main_image">
                    <img
                      src={require(`../../svg/projects/${project.photo}`)}
                      alt=""
                      className="main_image"
                    />
                  </div>
                  <div className="box_project_info">
                    <h2>{isGer ? project.title : project.title_ru} </h2>
                    <ul>
                      <li>
                        <span>{isGer ? "Website: " : "Сайт: "} </span>
                        <Link to="">{project.url}</Link>
                      </li>
                      <li>
                        <span>
                          {isGer ? "Entwicklungsdatum: " : "Дата разработки: "}
                        </span>{" "}
                        {project.date}
                      </li>
                      <li>
                        <span>{isGer ? "Entwickler: " : "Разработчик: "} </span>
                        {isGer ? project.developer : project.developer_ru}
                      </li>
                      <li>
                        <span>{isGer ? "Instrumente: " : "Инструменты: "} </span>
                        {project.instrumente}
                      </li>
                      <li>
                        <span>
                          {isGer ? "Projektbeschreibung: " : "Описание проекта: "}
                        </span>
                        {isGer ? project.discription : project.discription_ru}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }
            return ""
          })}
          <div className="box_switch">
            <img src={backwardStep} alt="" onClick={handleBackwardStep} />
            <p>
              {id.id} von {data.length}
            </p>
            <img src={forwardStep} alt="" onClick={handleForwardStep} />
          </div>
        </div>
      }
    />
  );
}
