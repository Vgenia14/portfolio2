import "./About.css";
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LangContext";
import Book from "../../components/Book";
import aboutMe from "./../../aboutMe.json";
import Skill from "./Skill";

export default function About() {
  const { isGer } = useContext(LanguageContext);

  return (
    <Book
      children1={
        <div className="container_About_left">
          <h1>{isGer? "über mich":"Обо мне"}</h1>
          <div className="container_skils">
            <Skill skills={aboutMe} skID="3" />
            <Skill skills={aboutMe} skID="4" />
          </div>
        </div>
      }
      children2={
        <div className="container_About_right">
          <Skill skills={aboutMe} skID="1" />
          <Skill skills={aboutMe} skID="2" />
        </div>
      }
    />
  );
}
