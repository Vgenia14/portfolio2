import React, { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../../context/LangContext";

export default function Skill({ skills, skID }) {
  const { isGer } = useContext(LanguageContext);
  return (
    <div className="box_skill">
      {skills.map((skill, ind) => {
        if (skill.id === skID) {
          return (
            <div key={ind} className="skill">
              <h2>
                <img src={require(`../../svg/${skill.icon}.svg`)} alt="" />
                {isGer ? skill.skillsTitle : skill.skillsTitle_ru}
              </h2>
              <ul>
                {isGer
                  ? skill.discription.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))
                  : skill.discription_ru.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
              </ul>
            </div>
          );
        }
        return ""
      })}
    </div>
  );
}
