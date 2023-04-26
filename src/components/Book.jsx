import React from "react";
import "./Book.css";

export default function Book(props) {
  return (
    <div className="container_book">
      <div className="page1">{props.children1}</div>
      <div className="page2">{props.children2}</div>
    </div>
  );
}
