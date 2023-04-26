import "./Contacts.css";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LangContext";
import Book from "../components/Book";
import * as emailjs from "emailjs-com";
import { Link } from "react-router-dom";

// IMAGES
import skype from "../svg/skype.svg";
import linkedIn from "../svg/linkedin.svg";
import emailIMG from "../svg/envelope-solid.svg";
import gitHub from "../svg/github.svg";

export default function Contacts() {
  const { isGer } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        "oSg39nE41wY3H5y75"
      )
      .then(
        (result) => {
          alert(
            isGer
              ? "Ihre Nachricht wurde gesendet"
              : "Ваше сообщение успешно отправлено"
          );
          setName("");
          setEmail("");
          setMessage("");
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <Book
      children1={
        <div className="container_Contact_left">
          <h1>{isGer ? "Kontakte" : "Контакты"}</h1>
          <div className="box_contacts">
            <Link
              to="https://join.skype.com/invite/HxD7llHMateM"
              target="_blank"
              className="box_link_contact"
            >
              <div>
                <img src={skype} alt="" />
              </div>
              <p>PrygEvgeniia</p>
            </Link>
            <Link
              to="mailto:vgenia14@gmail.com"
              target="_blank"
              className="box_link_contact"
            >
              <div>
                <img src={emailIMG} alt="" />
              </div>
              <p>Vgenia14@gmail.com</p>
            </Link>
            <Link
              to="https://github.com/Vgenia14"
              target="_blank"
              className="box_link_contact"
            >
              <div>
                <img src={gitHub} alt="" />
              </div>
              <p>GitHub</p>
            </Link>
            <Link
              to="https://www.linkedin.com/feed/"
              target="_blank"
              className="box_link_contact"
            >
              <div>
                <img src={linkedIn} alt="" />
              </div>
              <p>LinkedIn</p>
            </Link>
          </div>
        </div>
      }
      children2={
        <div className="container_Contact_right">
          <form onSubmit={sendEmail} className="form_mail">
            <label htmlFor="message">
              {isGer ? "Nachricht" : "Сообщение"}

              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder={isGer ? "ihre Nachricht" : "Ваше сообщение"}
                value={message}
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </label>
            <label htmlFor="name">
              {isGer ? "Name" : "Имя"}

              <input
                type="text"
                name="name"
                placeholder={isGer ? "ihr Name" : "Ваше имя"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="email">
              E-Mail
              <input
                type="email"
                name="email"
                placeholder={isGer ? "ihre E-Mail Adresse" : "Ваш E-Mail"}
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <button type="submit">
              {isGer ? "Nachricht senden" : "Отправить сообщение"}
            </button>
          </form>
        </div>
      }
    />
  );
}
