import React from "react";
import './button.scss'

function Button(props) {
  return <button className="b_idel b_icon" onClick={ props.onClick}>{props.children}</button>;
}

function FButton(props) {
  return <button onClick={ props.onClick}>{props.children}</button>;
}


export { Button, FButton };
