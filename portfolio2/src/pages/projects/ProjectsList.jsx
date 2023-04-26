import "./Projects.css";
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LangContext";
import { Link, NavLink } from "react-router-dom";

export default function ProjectsList({ projects }) {
  const { isGer } = useContext(LanguageContext);

  return (
    <div className="container_card">
      <h1>{isGer ? "meine Projekte" : "Мои проекты"} </h1>
      <div className="box_content">
        {projects.map((project) => (
          <div key={project.id} className="content_line">
            <NavLink to={`/projects/${project.id}`} className="link_to_site">
              <h2>
                {isGer ? project.title : project.title_ru}
                <span>({project.date}) </span>
              </h2>

              <p className="id_number">{project.id}</p>
            </NavLink>

            <button>
              <Link>{isGer ? "zur Seite" : "на сайт"}</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
