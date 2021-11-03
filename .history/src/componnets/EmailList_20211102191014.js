import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailList.css";

export const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <IconButton>
            <Checkbox />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
