import React from "react";
import "./SidebarOption.css";
import {useHistory} from "react-router-dom";
import db from "./firebase";

function SidebarOption({ Icon, title, id, addChanelOption }) {
    const history = useHistory();

    const selectChanel = () =>{
        if (id){
            history.push(`/room/${id}`)
        }
        else {
            history.push(title)
        }
    }
    const addChanel = () => {
        const chanelName  = prompt("please enter the chanel name");
    
    if (chanelName){
        db.collection("rooms").add({
            name: chanelName
        })
    }
}
  return (
    <div className="sidebarOption" onClick={addChanelOption? addChanel : selectChanel}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__chanel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
