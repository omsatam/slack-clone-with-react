import React, {useEffect} from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";

function SidebarOption({ Icon, title, id, addChanelOption }) {
  const history = useHistory();
  
useEffect(() => {
let sidebarComponents = document.getElementsByClassName("sidebarComponent");
  for (let i = 0; i < sidebarComponents.length; i++) {
    sidebarComponents[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("activeComponent");
      console.log(current);
      if (current.length != 0) {
        current[0].className = current[0].className.replace(
          " activeComponent",
          ""
        );
      }
      this.className += " activeComponent";
    });
    }
  }, [db.collection("rooms")]);

  const selectChanel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChanel = () => {
    const chanelName = prompt("please enter the chanel name");

    if (chanelName) {
      db.collection("rooms").add({
        name: chanelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption sidebarComponent"
      onClick={addChanelOption ? addChanel : selectChanel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__chanel sidebarComponent">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
